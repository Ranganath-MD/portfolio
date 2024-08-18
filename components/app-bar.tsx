import { MainNav } from "./main-nav";
import { Icons } from "./icons";
import { ModeToggle } from "./toggle-mode";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function AppBar() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />
        <nav className="flex items-center">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
