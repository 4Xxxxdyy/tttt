import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "响应式个人博客",
    description: "使用HTML5、CSS3和JavaScript构建的响应式个人博客网站，支持文章发布和评论功能。",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["HTML5", "CSS3", "JavaScript", "响应式设计"],
    demoUrl: "#",
    codeUrl: "#",
    date: "2024-03",
  },
  {
    id: 2,
    title: "React待办事项应用",
    description: "基于React Hooks的现代化待办事项管理应用，支持任务分类、优先级设置和本地存储。",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "JavaScript", "CSS Modules", "Local Storage"],
    demoUrl: "#",
    codeUrl: "#",
    date: "2024-04",
  },
  {
    id: 3,
    title: "Next.js电商展示页",
    description: "使用Next.js构建的电商产品展示页面，包含产品列表、详情页和购物车功能。",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "React", "Tailwind CSS", "API Routes"],
    demoUrl: "#",
    codeUrl: "#",
    date: "2024-05",
  },
  {
    id: 4,
    title: "CSS动画展示",
    description: "纯CSS实现的各种动画效果集合，包括加载动画、悬停效果和页面转场动画。",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["CSS3", "HTML5", "CSS Animations", "Keyframes"],
    demoUrl: "#",
    codeUrl: "#",
    date: "2024-03",
  },
  {
    id: 5,
    title: "JavaScript游戏项目",
    description: "使用原生JavaScript开发的简单游戏，包含游戏逻辑、计分系统和本地排行榜。",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Logic"],
    demoUrl: "#",
    codeUrl: "#",
    date: "2024-04",
  },
  {
    id: 6,
    title: "React组件库",
    description: "自定义的React UI组件库，包含按钮、表单、模态框等常用组件，支持主题定制。",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "TypeScript", "Storybook", "CSS-in-JS"],
    demoUrl: "#",
    codeUrl: "#",
    date: "2024-05",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">项目作品集</h1>
              <p className="text-lg text-gray-600 mt-2">本学期完成的前端开发项目展示</p>
            </div>
            <Link href="/">
              <Button variant="outline">返回首页</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    演示
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
                    代码
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">学习进度</h2>
            <p className="text-lg text-gray-600">本学期前端技术学习的阶段性成果</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { skill: "HTML5", progress: 95, projects: 6 },
              { skill: "CSS3", progress: 90, projects: 6 },
              { skill: "JavaScript", progress: 85, projects: 5 },
              { skill: "React", progress: 80, projects: 3 },
              { skill: "Next.js", progress: 75, projects: 2 },
              { skill: "TypeScript", progress: 70, projects: 1 },
            ].map((skill) => (
              <div key={skill.skill} className="text-center">
                <div className="bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <h3 className="font-semibold text-gray-900">{skill.skill}</h3>
                <p className="text-sm text-gray-600">{skill.progress}% 掌握度</p>
                <p className="text-xs text-gray-500">{skill.projects} 个项目</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
