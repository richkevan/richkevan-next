import { type Metadata } from 'next'
import Image from 'next/image'
import { LinkIcon } from '@/components/WebIcons'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoDjauth0 from '@/images/logos/djauth0.svg'
import logoYDKDjango from '@/images/logos/ydkdjango.svg'
import logoCCC from '@/images/logos/contentcreatorcontrol.svg'
import logoYDKJS from '@/images/logos/ydkJS.svg'
import logoAuthN0de from '@/images/logos/authn0de.svg'
import logoGuestbook from '@/images/logos/guestbook.svg'



const projects = [
  {
    name: 'DjAuth0',
    description:
      'Django based authentication system Oauth2/OIDC compliant.',
    link: { href: 'https://github.com/richkevan/djauth0', label: 'github.com' },
    logo: logoDjauth0,
  },
  {
    name: 'You Don\'t Know Django',
    description:
      'Backend services for a community sourced trivia game.',
    link: { href: 'https://github.com/richkevan/you-dont-know-django', label: 'github.com' },
    logo: logoYDKDjango,
  },
  {
    name: 'Content Creator Control',
    description:
      'All in one content management and social media management for streamers and content creators.',
    link: { href: 'https://github.com/richkevan/content-creator-control', label: 'github.com' },
    logo: logoCCC,
  },
  {
    name: 'You Don\'t know JS',
    description:
      'Frontend website for managing and organizing your trivia games.',
    link: { href: 'https://github.com/richkevan/you-dont-know-js', label: 'github.com' },
    logo: logoYDKJS,
  },
  {
    name: 'AuthN0de',
    description:
      'Open source authentication and authorization server Oauth2/OIDC compliant.',
    link: { href: 'https://github.com/richkevan/authn0de', label: 'github.com' },
    logo: logoAuthN0de,
  },
  {
    name: 'guestbook',
    description: 'A beginners tutorial on making first time contributions to an open source project or git repository.',
    link: { href: 'https://github.com/richkevan/guestbook', label: 'github.com' },
    logo: logoGuestbook,
  }
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Some of my most ambitious projects to date.',
}

export default function Projects() {
  return (
   <SimpleLayout
      title="Where Dreams Meet Code: My Most Ambitious Projects to Date!"
      intro="I'm a bit of a project hoarder, with a collection of coding experiments and half-finished creations hidden away in digital drawers. But amidst the dust, there are some real gems! Here are a few of the projects I'm most proud of (or at least, the ones I've made the most progress on). If you're curious to see more, check out my GitHub."
    > 
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-12 w-12"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
