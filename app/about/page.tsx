import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Rich Kevan. I live in the SF Bay Area, where I engineer the now and mentor the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've been a tinkerer and tech enthusiast since childhood. My earliest memory? Attempting to build an NES cartridge out of paper and cardboard at seven. Thankfully, by middle school, I'd graduated to writing programs in BASIC on our trusty Apple IIC.
            </p>
            <p>
              My childhood was defined by two loves: exploring the boundaries of my creativity through adventure and delving into the world of technology through computers and video games. This insatiable curiosity sparked a lifelong passion for learning and discovery that continues to guide me today.
            </p>
            <p>
              My journey into web development began in the early 2000s, experimenting with HTML, CSS, and basic PHP to customize MySpace and WordPress. Over the next decade, I honed my skills through self-directed learning, fueled by the rise of platforms like GoDaddy.
            </p>
            <p>
              Currently, my work spans the full spectrum of web, desktop, and mobile development, building robust solutions from front- to back-end.  In addition, I'm passionate about fostering the next generation of tech talent through mentorship and coaching, ensuring I continue to learn and grow alongside my students.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
          <SocialLink href="https://x.com/intent/follow?screen_name=richkevan" aria-label="Follow on X" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/rich.kevan/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/richkevan"
              aria-label="Follow on GitHub"
              icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/rich-kevan/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hey@richkevan.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hey@richkevan.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
