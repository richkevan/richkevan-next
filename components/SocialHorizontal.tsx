import Link from 'next/link'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function SocialHorizontal() {
  return (
    <div className="mt-6 flex gap-6">
            <SocialLink href="https://x.com/intent/follow?screen_name=richkevan" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="https://www.instagram.com/rich.kevan/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/richkevan"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/rich-kevan/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
          )
        }