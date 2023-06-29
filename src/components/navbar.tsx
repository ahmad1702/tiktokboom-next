import { siteConfig } from "@/lib/site-config";
import { TrophyIcon } from "lucide-react";
import Link from "next/link";
import { MobileDropdown } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex h-[64px] w-full items-center justify-between border-b px-5">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button variant="ghost" className="text-xl font-bold">
            <span className="mr-2">💣</span>
            <span className="bg-gradient-to-t from-red-500 via-pink-400 to-cyan-500 bg-clip-text text-transparent">
              TikTok
            </span>
            Boom
          </Button>
        </Link>
        <Link href="/leaderboards" className="hidden md:block">
          <Button variant="ghost" className="">
            <TrophyIcon className="mr-2 h-4 w-4" />
            Leaderboards
          </Button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle className="" variant="outline" />
        <MobileDropdown
          items={{ main: siteConfig.mainNav, docs: siteConfig.sidebarNav }}
        />
      </div>
    </div>
  );
};

export default Navbar;
