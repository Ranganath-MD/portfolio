import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"
import Profile from "@/app/assets/profilebg.png";
import Image from "next/image"

export const Footer = () => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-gray-900 mt-32">
      <div className="absolute bottom-0">
        <Image src={Profile} alt="footer guy" width={200} height={300}/>
      </div>
      <div className="container flex justify-end">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.gitHub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.linkedin className="h-5 w-5" />
            <span className="sr-only">linked in</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
