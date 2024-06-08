import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Rich Kevan',
    default:
      'Rich Kevan- Dreamer, Designer, Developer',
  },
  description:
    "I'm Rich, a software engineer passionate about building innovative solutions and a dedicated coding educator committed to empowering the next generation of developers. Based in the San Francisco Bay Area, I thrive on the intersection of these two worlds, leveraging my technical expertise to solve real-world problems and sharing my knowledge to guide aspiring programmers on their coding journeys.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
