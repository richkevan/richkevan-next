import { Children } from "react"
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from "./SocialIcons"
import SocialLink from "./SocialLink"



export default function SocialVertical(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
  <div {...props}>
    <ul role="list">
    <SocialLink href="https://x.com/intent/follow?screen_name=richkevan" aria-label="Follow on X" icon={XIcon}>
        Follow on X
      </SocialLink>
      {/* <SocialLink
        href="https://www.instagram.com/rich.kevan/"
        aria-label="Follow on Instagram"
        icon={InstagramIcon} className="mt-4">
        Follow on Instagram
      </SocialLink> */}
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
      {props.children}
    </ul>
  </div>
  )
}