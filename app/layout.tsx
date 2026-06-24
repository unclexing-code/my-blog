import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/vs2015.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { BackgroundProvider } from "@/components/providers/BackgroundProvider";
import { MusicProvider } from "@/components/providers/MusicProvider";
import { EffectProvider } from "@/components/providers/EffectProvider";
import BackgroundRenderer from "@/components/layout/BackgroundRenderer";
import ClickEffect from "@/components/ui/ClickEffect";
import RadialMenu from "@/components/ui/RadialMenu";
import MouseTrail from "@/components/ui/MouseTrail";
import SeasonalEffect from "@/components/ui/SeasonalEffect";
import KiraSparkle from "@/components/ui/KiraSparkle";
import WelcomeScreen from "@/components/layout/WelcomeScreen";
import VisitorTracker from "@/components/layout/VisitorTracker";
import FloatingPlayer from "@/components/music/FloatingPlayer";
import { siteConfig } from "@/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.bio,
  alternates: {
    types: {
      "application/rss+xml": "/feed",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifSC.variable} h-full antialiased overflow-hidden`}
      suppressHydrationWarning
    >
      <body className="h-full font-sans overflow-hidden relative">
        <ThemeProvider>
          <EffectProvider>
            <WelcomeScreen />
            <BackgroundProvider>
              <MusicProvider>
                <ToastProvider>
                  <BackgroundRenderer />
                  {/* <VisitorTracker />
                  <ClickEffect />
                  <RadialMenu />
                  <MouseTrail />
                  <SeasonalEffect />
                  <KiraSparkle /> */}
                  {/* <Navbar /> */}

                  {/* <FloatingPlayer /> */}

                  {/* 主体区域：占满视口，内部垂直滚动，底部预留footer高度防止遮挡 */}
                  <main className="h-[calc(100%-64px-60px)] pt-16 overflow-y-auto px-4 sm:px-10">
                    <div className="max-w-6xl mx-auto py-6 md:py-12">
                      {children}
                    </div>
                  </main>

                  {/* 固定在视口最底部，永远不随内容滚动 */}
                  <footer className="fixed bottom-0 left-0 right-0 h-[60px] flex items-center justify-center text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-black/70 backdrop-blur-sm">
                    <a
                      href="https://beian.miit.gov.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      {siteConfig.icpConfig.name}
                    </a>
                  </footer>
                </ToastProvider>
              </MusicProvider>
            </BackgroundProvider>
          </EffectProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
