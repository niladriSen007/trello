import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { Medal } from "lucide-react"
import { Poppins } from "next/font/google";
import Link from "next/link"
import localfont from "next/font/local"

const headingFont = localfont({
  src:"../../public/fonts/ar.ttf"
})


const textFont = Poppins({
    subsets: ["latin"],
    weight: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900"
    ],
  });

const Marketing = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
    <div className={cn(
      "flex items-center justify-center flex-col",
      headingFont.className,
    )}>
      <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
        <Medal className="h-6 w-6 mr-2" />
        No 1 task managment
      </div>
      <h1 className="text-3xl md:text-6xl text-center text-rose-100 font-bold mt-6 ">
        Taskify helps team move
      </h1>
      <div className="text-3xl md:text-6xl font-bold text-white px-4 p-2 pt-0  pb-4 w-fit rounded-full">
        work forward.
      </div>
    </div>
    <div className={cn(
      "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
      textFont.className,
    )}>
      Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Taskify.
    </div>
    <Button className="mt-6  bg-gradient-to-l shadow-xl from-fuchsia-600 to-violet-700 rounded-full" size="lg" asChild>
      <Link href="/sign-up">
        Get Taskify for free
      </Link>
    </Button>
  </div>
  )
}
export default Marketing