export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  coverImage: string;
  techStack: string[];
  links: {
    github?: string;
    gitee?: string;
    live?: string;
    docs?: string;
  };
  featured?: boolean;
  status: "active" | "archived" | "developing";
  statusLabel: string;
}

export const projects: Project[] = [
  {
    id: "obsidian-note-mind",
    name: "obsidian-note-mind",
    description:
      "An Obsidian mind map plugin with native Markdown node support. It connects local and cloud-based LLM inference, and can automatically generate multi-level child nodes via semantic association.",
    longDescription:
      "Obsidian 思维导图插件，原生适配 Markdown 节点，打通云端 & 本地大模型推理，支持语义联想自动生成多级子节点。",
    coverImage: "/images/projects/haxatom.webp",
    techStack: ["typescript", "css"],
    links: {
      github: "https://github.com/unclexing-code/obsidian-note-mind",
    },
    featured: true,
    status: "active",
    statusLabel: "维护中",
  },
  {
    id: "daily-news",
    name: "daily-news",
    description:
      "A modern daily news subscription platform built with Next.js. It leverages Inngest for scheduled task orchestration and Resend to deliver daily news digest emails.",
    longDescription:
      "一个基于 Next.js 构建的现代化每日新闻订阅平台，使用 Inngest 实现定时任务调度，通过 Resend 发送每日新闻摘要邮件。",
    coverImage: "/images/projects/starvid.webp",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS"],
    links: {
      github: "https://github.com/unclexing-code/daily-news",
    },
    featured: false,
    status: "active",
    statusLabel: "开发中",
  },
  {
    id: "peerup",
    name: "peerup",
    description:
      "Peerup integrates reading, note-taking, development, execution, knowledge accumulation, publishing and management capabilities in one unified workspace. It connects to external LLM backends and features an embedded self-built AI Copilot assistant available everywhere, forming a new generation of AI-native workspace that meets diverse digital, automated and intelligent demands for both developers and management personnel.",
    longDescription:
      "peerup集阅读、记录、开发、运行、沉淀、发布、管理等多种能力为一体，外接LLM底座，结合无处不在的自研AI助手Copilot，形成了新一代AI原生的工作空间，满足从研发者到管理者的多种数字化、自动化和智能化需求",
    coverImage: "/images/projects/hiromu-top.webp",
    techStack: ["Vue3", "Typescript", "tiptap", "proseMirror", "yjs"],
    links: {
      live: "https://www.peerup.com",
    },
    featured: false,
    status: "active",
    statusLabel: "已上线",
  },
];
