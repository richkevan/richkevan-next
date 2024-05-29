import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="What is sitting on my desk? 💻 What makes me productive? 💡"
      intro="I am constantly changing and rearranging my setup. I will do my best to keep this list up to date as things change."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            Previously I was using an M1 Mac Mini with 8GB RAM. It handled everything like a champ but I needed something more modular for travel. I still keep the mini around and frequently use it as a lab machine for testing. In the next year or so I hope to replace it with a 16” M4 Max.
          </Tool>
          <Tool title=" 2 MSI 27” WQHD IPS Nvidia G-Sync Gaming Monitors">
          170Hz refresh rate, One in a horizontal orientation and the other in a vertical orientation. These monitors serve as my primary screens for work and play. They also tend to come with me when I travel because everyone knows one screen is not enough.
          </Tool>
          <Tool title="SteelSeries APEX Pro TKL(2023) | SteelSeries APEX Pro Mini">
            I prefer the TKL form factor for the ease of navigation with arrow keys. But on occastion the 60% comes out of hiding. I like the SteelSeries for versatility of connection options Bluetooth/Wired/Wireless. They also are a close second to the Wooting for speed and adjustibility. That being said now that a TKL Wooting is available my SteelSeries might be collecting dust soon.
          </Tool>
          <Tool title="SteelSeries Aerox 9 | SteelSeries Aerox 5">
            I selected these mice because of how comfortable they felt in my hand. As someone who has a big hand with long fingers these were some of the only mice that fit my hands. They are starting to show their age though and I am starting to explore the market to find a mouse with a 4000Hz-8000Hz polling rate as they become more widely available.
          </Tool>
          <Tool title="Generic Office Chair">
            I have had this thing for ever and it works for the most part.Though I do have my gripes, like comfort. I had briefly tried to upgrade to a Staples Emerge Vortex gaming chair but the quality was terrible and it broke several times, forcing me to return to the standard office chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            It's widely used throughout the industry and supports multiple languages making it a great tool for learning and developing full stack apps.
          </Tool>
          <Tool title="Project IDX">
            A coding enviroment in open beta from Google. Built on the same open source code as VS Code with integrated support for Gemini and Google Cloud.
          </Tool>
          <Tool title="Warp">
            A terminal for MacOS written in Rust with AI, The regular terminal probably works just as good but this makes me feel cool.
          </Tool>
          <Tool title="Beekeeper Studio">
            My favorite DB tool is DataGrip from Jetbrains but Beekeeper is free, works well, and looks pretty, so for now its the DB tool of choice.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
