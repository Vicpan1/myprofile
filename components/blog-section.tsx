"use client"

import { useState } from "react"
import { Plus, Calendar, X } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface BlogPost {
  id: number
  title: string
  date: string
  summary: string
}

export function BlogSection() {
  const { blog } = siteConfig
  const [posts, setPosts] = useState<BlogPost[]>(blog.posts)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newContent, setNewContent] = useState("")

  const handlePublish = () => {
    if (!newTitle.trim() || !newContent.trim()) return

    const newPost: BlogPost = {
      id: Date.now(),
      title: newTitle.trim(),
      date: new Date().toISOString().split("T")[0],
      summary: newContent.trim(),
    }
    setPosts([newPost, ...posts])
    setNewTitle("")
    setNewContent("")
    setIsModalOpen(false)
  }

  return (
    <section id="blog" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-primary font-medium tracking-widest text-sm mb-3 uppercase">
              {blog.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {blog.sectionTitle}
            </h2>
            <div className="w-16 h-1 bg-primary mt-4 rounded-full" />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Plus size={18} />
            發佈新文章
          </button>
        </div>

        {/* Mobile Publish Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="md:hidden inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity mb-8 w-full justify-center"
        >
          <Plus size={18} />
          發佈新文章
        </button>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                <Calendar size={14} />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {post.summary}
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-primary text-sm font-medium cursor-pointer hover:underline">
                  {'閱讀更多 \u2192'}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Publish Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">發佈新文章</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="關閉"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="post-title" className="block text-sm font-medium text-foreground mb-1.5">
                  文章標題
                </label>
                <input
                  id="post-title"
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="輸入文章標題..."
                  className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label htmlFor="post-content" className="block text-sm font-medium text-foreground mb-1.5">
                  文章內容
                </label>
                <textarea
                  id="post-content"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="輸入文章內容摘要..."
                  rows={5}
                  className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handlePublish}
                  disabled={!newTitle.trim() || !newContent.trim()}
                  className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  發佈
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
