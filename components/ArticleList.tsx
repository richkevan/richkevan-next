import { getAllArticles as Hashnode, HashnodeArticle } from '@/lib/hashnode'
import { Card } from '@/components/Card'
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

export default async function ArticleList() {
  let articles = await Hashnode()

  return (
    <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article: HashnodeArticle) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
  )
}







