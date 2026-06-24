"use client";

// import dynamic from "next/dynamic";
import FadeIn from "@/components/ui/FadeIn";
import Projects from "@/app/projects/page";
import About from "@/app/about/page";
import { siteConfig } from "@/siteConfig";
import Image from "next/image";

// const CloudPlayer = dynamic(() => import("@/components/music/CloudPlayer"), {
//   ssr: false,
// });

export default function HomeClient() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6 md:py-12 px-4 sm:px-10 relative z-10">
      <main className="flex flex-col gap-4 md:gap-6 w-full">
        {/* 头像 */}
        <div className="flex justify-center items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden -mt-12 md:-mt-16 relative z-20 bg-white flex">
            <Image
              src={siteConfig.avatarUrl}
              alt="avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* <div className="flex w-50% ml-4">
            <CloudPlayer />
          </div> */}
        </div>

        {/* 个人信息 */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full items-stretch flex">
            <div className="md:col-span-12 flex w-full">
              <About />
            </div>
          </div>
        </FadeIn>

        {/* 项目 */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full items-stretch">
            <div className="md:col-span-12 flex flex-col gap-4 md:gap-6 h-full">
              <Projects />
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
