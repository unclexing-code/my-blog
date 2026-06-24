// siteConfig.ts - 全站配置中心

export const siteConfig = {
  // 网站标题与博主信息
  title: "web江湖志",
  url: "https://www.webjianghuzhi.com",
  authorName: "Leon Zhou",
  bio: "hello world!",

  // 头像设置
  avatarUrl: "/images/avatar.png",

  // 背景设置
  useGradient: false,
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"],
  bgImages: ["/images/bg.webp", "/images/bg1.webp"],

  // 默认封面图
  defaultPostCover: "/images/bg.webp",

  // 照片墙预览图
  photoWallImage: "/images/photo-wall.jpg",

  // 云音乐配置（网易云音乐）
  // 填歌单 ID 则自动拉取整个歌单，填歌曲 ID 列表则只播放指定歌曲
  cloudMusicPlaylistId: "2844043746", // 歌单 ID（优先）
  cloudMusicIds: ["511987039"], // 歌曲 ID 列表（歌单为空时使用）

  // 后端 API 地址（留空，开发通过 next.config.ts rewrites 代理，生产通过 Nginx 反代）
  apiBaseUrl: "",

  // 社交链接
  social: {
    github: "https://github.com/unclexing-code",
    google: "mailto:leon.zhou.dev@gmail.com",
    email: "leon.zhou.dev@gmail.com",
    wechat: "LDFWOH",
  },

  // 站点信息
  // buildDate: "2026-05-07T12:00:00",
  footerBadges: [
    { name: "Next.js 15", color: "text-sky-500" },
    { name: "React 19", color: "text-cyan-400" },
    { name: "Tailwind 4", color: "text-teal-400" },
  ],
  icpConfig: {
    name: "京ICP备2026026571号-1",
    link: "https://beian.miit.gov.cn/",
  },

  // 分类标题
  chatterTitle: "留言",
  chatterDescription: "生活、技术、随想的碎片记录",
};
