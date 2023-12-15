import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/ar.ttf",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center justify-center gap-x-2 hidden md:flex">
        <Image
          src="/images/taskio.png"
          alt="Logo"
          height={30}
          width={30}
          className="rounded-full"
        />
        <p className={cn(
          "text-lg text-white font-bold pb-1",
          headingFont.className,
        )}>
          Taskio
        </p>
      </div>
    </Link>
  );
};