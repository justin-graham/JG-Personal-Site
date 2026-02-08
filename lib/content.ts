import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { ReadingPage } from './types'

const readingDir = path.join(process.cwd(), 'content', 'reading')

export async function getReadingContent(slug: string): Promise<ReadingPage> {
  const filePath = path.join(readingDir, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const result = await remark().use(html).process(content)
  return {
    title: data.title || slug,
    subtitle: data.subtitle,
    html: result.toString(),
  }
}

export function getReadingSlugs(): string[] {
  return fs
    .readdirSync(readingDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
