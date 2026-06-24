"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/siteConfig";
import FadeIn from "@/components/ui/FadeIn";
import "highlight.js/styles/atom-one-dark.css";

// 独立视图，内部自己请求接口，外部使用不用传任何参数
export function AboutView() {
  const [data, setData] = useState<{
    coverImage: string;
    contentHtml: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/about");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <FadeIn className="w-full max-w-4xl mx-auto py-6 md:py-12 px-4 sm:px-10 text-center">
        加载中...
      </FadeIn>
    );
  }

  const { contentHtml } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 relative z-10">
      {/* Markdown样式 */}
      <div className="relative">
        <style>{`
              .prose pre {
                background-color: #282c34 !important;
                color: #abb2bf !important;
                padding: 1.25rem !important;
                border-radius: 0.75rem !important;
                overflow-x: auto !important;
                box-shadow: inset 0 0 10px rgba(0,0,0,0.3) !important;
                margin-top: 1.5rem !important;
                margin-bottom: 1.5rem !important;
              }
              .prose pre code {
                background-color: transparent !important;
                padding: 0 !important;
                color: inherit !important;
                font-size: 0.9em !important;
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
              }
              .prose code::before, .prose code::after { content: none !important; }
              .prose p code, .prose li code {
                background-color: rgba(99, 102, 241, 0.1) !important;
                color: #6366f1 !important;
                padding: 0.2rem 0.4rem !important;
                border-radius: 0.375rem !important;
                font-weight: 600 !important;
              }
              .dark .prose p code, .dark .prose li code {
                background-color: rgba(99, 102, 241, 0.2) !important;
                color: #818cf8 !important;
              }
              .prose h2 {
                font-size: 1.75rem !important;
                font-weight: 800 !important;
                margin-bottom: 1rem !important;
                margin-top: 2.5rem !important;
                color: inherit !important;
              }
              .prose h3 {
                font-size: 1.25rem !important;
                font-weight: 700 !important;
                margin-bottom: 0.75rem !important;
                color: inherit !important;
              }
              .prose p {
                font-size: 1.05rem !important;
                line-height: 1.85 !important;
                color: inherit !important;
              }
              .prose ul {
                list-style-type: disc !important;
                padding-left: 1.5rem !important;
              }
              .prose blockquote {
                border-left: 4px solid #6366f1 !important;
                padding-left: 1rem !important;
                margin: 1.5rem 0 !important;
                color: #64748b !important;
                font-style: italic !important;
              }
              .dark .prose blockquote {
                color: #94a3b8 !important;
              }
              .prose img {
                display: block !important;
                margin: 2rem auto !important;
                border-radius: 1.5rem !important;
                box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
                max-width: 100% !important;
                height: auto !important;
              }
              .prose a {
                color: #6366f1 !important;
                text-decoration: underline !important;
                text-underline-offset: 3px !important;
              }
              .dark .prose a {
                color: #818cf8 !important;
              }
              .prose strong {
                color: inherit !important;
                font-weight: 700 !important;
              }
            `}</style>
        <div
          className="prose prose-sm md:prose-lg prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 transition-colors duration-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}

// 路由页面默认导出，访问 /about 直接渲染
export default function AboutPage() {
  return <AboutView />;
}
