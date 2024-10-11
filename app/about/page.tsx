import { type Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/Container'
import SocialLink from '@/components/SocialLink'
import { MailIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.avif'
import SocialVertical from '@/components/SocialVertical'



export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Rich Kevan. I live in the SF Bay Area, where I design the future.',
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
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi I'm Rich Kevan, a software engineer in California.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I bring 6 years of experience in JavaScript/TypeScript, Node.js, Python, and both SQL and NoSQL databases, with a proven track record of delivering scalable, efficient solutions. My expertise spans across numerous projects, where I’ve utilized frameworks like React, Next.js, Django, and C#/.NET to build robust, dynamic applications. Throughout my career, I’ve assumed both architect and lead roles, where I contributed to the design and development of complex systems, ensuring the alignment of technical strategy with business goals while fostering collaboration across cross-functional teams.
            </p>
            <p>
            In my spare time, I volunteer as a mentor and teacher, helping veterans and military spouses transition into the tech industry. I find it rewarding to guide them through the learning process and support their career development. Additionally, I enjoy the challenge of solving problems on LeetCode, where I focus on optimizing performance and refining my problem-solving skills.
            </p>
            <p>
            In my next role, I’m focused on making a substantial impact by working on projects that define and shape the future of the industry. I’m drawn to opportunities where challenges fuel creativity, and innovation is embraced as a key driver of growth. I want to be part of a company that encourages taking ownership and empowers its team members to advocate for transformative ideas, all while fostering a culture of continuous improvement and learning.
            </p>
          </div>
        </div>
        <SocialVertical className="lg:pl-20">
          <SocialLink
          href="mailto:hey@richkevan.com"
          icon={MailIcon}
          className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
          >
            contact@richkevan.com
          </SocialLink>
        </SocialVertical>
        
      </div>
    </Container>
  )
}
