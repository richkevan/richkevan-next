export interface HashnodeArticle {
  title: string
  brief: string
  author: string
  date: string
  slug: string
}
async function fetchArticles() {
  const requestHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HASHNODE}`,
  }

  const requstBody = {
    query: `query Publication(
  $id: ObjectId,
) {
  publication(
    id: $id,
  ) {
    id
    title
    displayTitle
    descriptionSEO
    posts(first: 10) {
     edges {
      node {
        title,
        slug,
        id,
        publishedAt,
        brief,
        author {
          name
        }
      }
    }
    }
    about {
      markdown
      html
      text
    }
  }
}`,
    variables: {
      "id": "613e984b1821961e25521381",
    }
  }
  const requestOptions = {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(requstBody),
  }
  const response = await fetch('https://gql.hashnode.com', requestOptions)
  const data = await response.json()
  return data
}

export async function getAllArticles() {
  const articles = await fetchArticles()
  return articles.data.publication.posts.edges.map((article: any) => ({
    title: article.node.title,
    brief: article.node.brief,
    author: article.node.author,
    date: article.node.publishedAt.substring(0,10),
    slug: article.node.slug,
  }))
}