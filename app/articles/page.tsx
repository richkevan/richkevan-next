import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { getAllArticles as Hashnode, HashnodeArticle } from '@/lib/hashnode'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: HashnodeArticle }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.brief}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'A chronological collection of my writing journey, documenting lessons learned, insights gained, and knowledge found to educate, inform, and inspire.',
}

export default async function ArticlesIndex() {
  // let articles = await getAllArticles()
  let articles = await Hashnode()
  console.log(articles)
  

  return (
    <SimpleLayout
      title="Hello, World! and Beyond: An Exploration of Code, Creativity, and Community"
      intro="A chronological collection of my writing journey, documenting lessons learned, insights gained, and knowledge found to educate, inform, and inspire."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article: HashnodeArticle) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
