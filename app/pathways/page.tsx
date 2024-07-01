import { SimpleLayout } from "@/components/SimpleLayout"
import { Card } from "@/components/Card"
import Image from "next/image"
import { LinkIcon } from "@/components/WebIcons"
import dotnet from "@/images/learning/dotnet.png"
import go from "@/images/learning/go.png"
import php from "@/images/learning/php.png"
import swift from "@/images/learning/swift.png"
import flutter from "@/images/learning/flutter.png"

const learning = [
  {
    name: 'C#/.NET',
    description:
      'Django based authentication system Oauth2/OIDC compliant.',
    link: { href: 'https://github.com/richkevan/djauth0', label: 'github.com' },
    logo: dotnet,
  },
  {
    name: 'Golang',
    description:
      'Backend services for a community sourced trivia game.',
    link: { href: 'https://github.com/richkevan/you-dont-know-django', label: 'github.com' },
    logo: go,
  },
  {
    name: 'PHP/Laravel',
    description:
      'All in one content management and social media management for streamers and content creators.',
    link: { href: 'https://github.com/richkevan/content-creator-control', label: 'github.com' },
    logo: php,
  },
  {
    name: 'Dart/Flutter',
    description:
      'Frontend website for managing and organizing your trivia games.',
    link: { href: 'https://github.com/richkevan/you-dont-know-js', label: 'github.com' },
    logo: flutter,
  },
  {
    name: 'Swift',
    description:
      'Open source authentication and authorization server Oauth2/OIDC compliant.',
    link: { href: 'https://github.com/richkevan/authn0de', label: 'github.com' },
    logo: swift,
  }
]

export default function Learning() {
  return (
    <SimpleLayout
    title="Pathways, mapping the progress of my learning and development journey"
    intro="As a dedicated software engineer, I am committed to continuous learning and growth. Here, you'll find a record of my courses and professional development efforts. This space reflects my passion for exploring new technologies and advancing my skills. Join me on this journey of discovery and innovation."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {learning.map((project) => (
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