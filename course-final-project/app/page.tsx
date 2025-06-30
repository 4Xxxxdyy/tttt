import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Clock, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">课程作品集</h1>
                <p className="text-sm text-gray-600">Course Portfolio & Practice Showcase</p>
              </div>
            </div>
            <nav className="flex space-x-4">
              <Link href="/wakatime">
                <Button variant="outline" size="sm">
                  <Clock className="h-4 w-4 mr-2" />
                  编程统计
                </Button>
              </Link>
              <Link href="/qanything">
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  AI问答
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">我的前端学习之旅</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            本学期通过学习HTML、CSS、JavaScript、React和Next.js，构建了这个综合性的Web应用，
            集成了WakaTime编程时长统计和QAnything AI问答服务。
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/projects">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                查看项目作品
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">功能特色</h3>
            <p className="text-lg text-gray-600">探索这个应用的核心功能模块</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Projects */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-lg w-fit">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>课程项目展示</CardTitle>
                <CardDescription>展示本学期完成的各种前端项目和练习作品</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/projects">
                  <Button variant="outline" className="w-full bg-transparent">
                    查看项目
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* WakaTime Stats */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-lg w-fit">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>编程时长统计</CardTitle>
                <CardDescription>通过WakaTime API获取个人编程时间数据和统计分析</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/wakatime">
                  <Button variant="outline" className="w-full bg-transparent">
                    查看统计
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* QAnything AI */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-lg w-fit">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>AI智能问答</CardTitle>
                <CardDescription>集成QAnything大语言模型，提供智能问答服务</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/qanything">
                  <Button variant="outline" className="w-full bg-transparent">
                    开始问答
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">技术栈</h3>
            <p className="text-lg text-gray-600">本项目使用的主要技术和工具</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "HTML5", color: "bg-orange-100 text-orange-600" },
              { name: "CSS3", color: "bg-blue-100 text-blue-600" },
              { name: "JavaScript", color: "bg-yellow-100 text-yellow-600" },
              { name: "React", color: "bg-cyan-100 text-cyan-600" },
              { name: "Next.js", color: "bg-gray-100 text-gray-600" },
              { name: "Tailwind CSS", color: "bg-teal-100 text-teal-600" },
            ].map((tech) => (
              <div key={tech.name} className="text-center">
                <div className={`${tech.color} p-4 rounded-lg mb-2 font-semibold`}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">课程期末作业</h4>
              <p className="text-gray-400">运用本学期学习的前端技术栈，构建的综合性Web应用项目。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">功能模块</h4>
              <ul className="space-y-2 text-gray-400">
                <li>项目作品展示</li>
                <li>WakaTime API集成</li>
                <li>QAnything AI问答</li>
                <li>响应式设计</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">技术实现</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Next.js App Router</li>
                <li>React Server Components</li>
                <li>Tailwind CSS</li>
                <li>API路由集成</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 课程期末作业项目. 使用 Next.js 构建.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
