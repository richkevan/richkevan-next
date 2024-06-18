import { SimpleLayout } from "@/components/SimpleLayout";
import { getAllArticles as Hashnode, HashnodeArticle } from '@/lib/hashnode'
import Image from 'next/image'
import parse from 'html-react-parser'



async function getStaticPaths() {
  const articles = await Hashnode()

  const paths = articles.map((article: HashnodeArticle) => ({
    params: {
      slug: article.slug,
    },
  }))

  return {paths, fallback: false}
}


async function getArticle(slug: String) {
  const requestHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HASHNODE}`,
  }

  const requstBody = {
    query: `query SinglePublicationPost(
  $host: String,
  ) {
  publication(
    host: $host,
  ) {
    id
    title
    author {
      username
      name
    }
    post(slug: "${slug}") {
      title
      coverImage {
        url
      }
      url
      content {
        markdown
        html
      }
    }
  } 
}`,
    variables: {
      "host": "richkevan.com/articles",
    },
  }

  const requestOptions = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(requstBody),
  }

  const response = await fetch('https://gql.hashnode.com', requestOptions)
  const article = await response.json()
  return(article.data.publication)
}

export default async function ArticlePage({
  params: { slug },
}: {
  params: { slug: string };
}) {

  let article = await getArticle(slug)

  return (
  <SimpleLayout
  title={article.post.title}
  intro={article.post.subtitle}
  >
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
    {/* <Image 
    src={article.post.coverImage.url || "https://picsum.photos/1200/630"} 
    alt={article.post.title}
    width={1200}
    height={630}
    priority={true}
    className="rounded-lg"
    /> */}
    <span className=" prose dark:prose-invert">
      {parse(article.post.content.html)}
    </span>
    </div>
  </SimpleLayout>
  )
}