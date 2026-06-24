import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { NextResponse } from "next/server";

export async function GET() {
  const fullPath = path.join(process.cwd(), "app/about/about.md");
  let contentHtml = "博主很懒，还没有写自我介绍哦...";
  let coverImage = "/images/2.webp";

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    if (data.cover) coverImage = data.cover;

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeHighlight)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);
    contentHtml = processedContent.toString();
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ contentHtml, coverImage });
}
