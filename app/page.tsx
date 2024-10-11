import { type Metadata } from 'next'
import Image from 'next/image'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import image1 from '@/images/photos/image-1.avif'
import image2 from '@/images/photos/image-2.avif'
import image3 from '@/images/photos/image-3.avif'
import image4 from '@/images/photos/image-4.avif'
import image5 from '@/images/photos/image-5.avif'
import { MailIconRound } from '@/components/SocialIcons'
import { getAllArticles as Hashnode, HashnodeArticle } from '@/lib/hashnode'
import { formatDate } from '@/lib/formatDate'
import { subscribe } from '@/app/actions'
import SocialHorizontal from '@/components/SocialHorizontal'
import { Resume } from '@/components/Resume'



function Article({ article }: { article: HashnodeArticle }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.brief}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Newsletter() {
  
  
  return (
    <form
      action={subscribe}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIconRound className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          name='email'
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}





function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Rich Kevan',
  description: 'Full Stack Engineer | Building impact through IAM development.',
}

export default async function Home() {
  let articles = (await Hashnode()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Rich Kevan
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Full Stack Engineer
          </h1>
          <h3 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
          Experienced Tech Lead and Architect: Driving Scalable, High-Impact Solutions with JavaScript, Python, and Full-Stack Expertise
          </h3>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I have a strong foundation in JavaScript/TypeScript, Node.js, Python, and both SQL and NoSQL databases, with extensive experience developing scalable solutions. My work spans projects utilizing React, Next.js, Django, and C#/.NET, where I’ve delivered robust applications and systems. In roles as both an architect and a lead, I’ve guided the design and development of complex, high-impact projects, aligning technical strategy with business goals while driving collaboration within teams.
          </p>
          <SocialHorizontal />
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article: HashnodeArticle) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
