import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Target, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">关于项目</h1>
              <p className="text-lg text-gray-600 mt-2">课程期末作业项目详细介绍</p>
            </div>
            <Link href="/">
              <Button variant="outline">返回首页</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              项目概述
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              本项目是课程期末作业，运用本学期学习的HTML、CSS、JavaScript、React以及Next.js框架，
              构建了一个包含个人过往课程练习展示、集成WakaTime API进行编码时长统计，
              并接入QAnything大语言模型问答服务的综合性Web应用。
            </p>
            <p className="text-gray-700 leading-relaxed">
              项目采用了现代化的前端技术栈，实现了响应式设计、API集成、状态管理等核心功能，
              展示了对前端开发技术的综合运用能力。
            </p>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="h-5 w-5 mr-2" />
              技术实现
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">前端技术栈</h3>
                <div className="space-y-2">
                  <Badge variant="outline">Next.js 14 (App Router)</Badge>
                  <Badge variant="outline">React 18</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">shadcn/ui</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">核心功能</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 响应式设计适配</li>
                  <li>• 项目作品展示</li>
                  <li>• WakaTime API集成</li>
                  <li>• QAnything AI问答</li>
                  <li>• 现代化UI组件</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Outcomes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              学习成果
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">基础技能</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• HTML5语义化标签</li>
                  <li>• CSS3现代布局</li>
                  <li>• JavaScript ES6+</li>
                  <li>• 响应式设计</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">框架应用</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• React组件开发</li>
                  <li>• Next.js全栈开发</li>
                  <li>• 状态管理</li>
                  <li>• 路由配置</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">工程实践</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• API接口集成</li>
                  <li>• 错误处理</li>
                  <li>• 性能优化</li>
                  <li>• 用户体验设计</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              项目特色
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-900">个人作品展示</h3>
                <p className="text-sm text-gray-700">
                  系统性展示本学期完成的各类前端项目，包括项目描述、技术栈、演示链接等完整信息。
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">WakaTime集成</h3>
                <p className="text-sm text-gray-700">
                  通过WakaTime API获取真实的编程时长数据，提供详细的编程统计分析和可视化展示。
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">AI问答服务</h3>
                <p className="text-sm text-gray-700">
                  集成QAnything大语言模型，实现智能问答功能，支持多轮对话和上下文理解。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Routes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              实现路径选择
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-blue-50">
                <h3 className="font-semibold text-blue-900 mb-2">基础路径 (最高85分)</h3>
                <p className="text-sm text-blue-800 mb-3">
                  直接在Next.js应用中通过iframe嵌入QAnything提供的现有HTML问答页面。
                </p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 实现简单快速</li>
                  <li>• 技术要求较低</li>
                  <li>• 功能相对有限</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold text-green-900 mb-2">进阶路径 (85分以上至满分)</h3>
                <p className="text-sm text-green-800 mb-3">
                  自行调用QAnything的API接口，独立开发前端的提问与答案展示界面。
                </p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• 深入理解API交互</li>
                  <li>• 自定义UI设计</li>
                  <li>• 完整的错误处理</li>
                  <li>• 更好的用户体验</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              开发时间线
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { phase: "项目规划与设计", time: "第1周", status: "completed" },
                { phase: "基础页面开发", time: "第2周", status: "completed" },
                { phase: "项目展示模块", time: "第3周", status: "completed" },
                { phase: "WakaTime API集成", time: "第4周", status: "completed" },
                { phase: "QAnything AI集成", time: "第5周", status: "completed" },
                { phase: "测试与优化", time: "第6周", status: "completed" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-3 h-3 rounded-full ${item.status === "completed" ? "bg-green-500" : "bg-gray-300"}`}
                  ></div>
                  <div className="flex-1">
                    <span className="font-medium">{item.phase}</span>
                    <span className="text-sm text-gray-500 ml-2">({item.time})</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
