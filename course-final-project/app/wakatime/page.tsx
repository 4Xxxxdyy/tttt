import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, TrendingUp, Activity } from "lucide-react"
import Link from "next/link"

// Mock data - in real implementation, this would come from WakaTime API
const mockStats = {
  totalTime: "127h 32m",
  todayTime: "3h 45m",
  weekTime: "28h 15m",
  languages: [
    { name: "JavaScript", time: "45h 20m", percentage: 35.5 },
    { name: "TypeScript", time: "32h 15m", percentage: 25.3 },
    { name: "CSS", time: "28h 45m", percentage: 22.6 },
    { name: "HTML", time: "21h 12m", percentage: 16.6 },
  ],
  projects: [
    { name: "课程期末作业", time: "42h 30m", percentage: 33.4 },
    { name: "React练习项目", time: "35h 15m", percentage: 27.6 },
    { name: "Next.js学习", time: "28h 20m", percentage: 22.2 },
    { name: "其他练习", time: "21h 27m", percentage: 16.8 },
  ],
  dailyAverage: "4h 15m",
  mostActiveDay: "周三",
  streak: 15,
}

export default function WakaTimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">编程时长统计</h1>
              <p className="text-lg text-gray-600 mt-2">通过WakaTime API获取的个人编程数据分析</p>
            </div>
            <Link href="/">
              <Button variant="outline">返回首页</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总编程时长</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalTime}</div>
              <p className="text-xs text-muted-foreground">本学期累计</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">今日编程</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.todayTime}</div>
              <p className="text-xs text-muted-foreground">今天已编程</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">本周编程</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.weekTime}</div>
              <p className="text-xs text-muted-foreground">本周累计</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">连续天数</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.streak}天</div>
              <p className="text-xs text-muted-foreground">连续编程</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>编程语言分布</CardTitle>
              <CardDescription>本学期使用的编程语言时长统计</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStats.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{lang.time}</div>
                      <div className="text-sm text-gray-500">{lang.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card>
            <CardHeader>
              <CardTitle>项目时长分布</CardTitle>
              <CardDescription>各个项目的编程时间分配</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStats.projects.map((project) => (
                  <div key={project.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="font-medium">{project.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{project.time}</div>
                      <div className="text-sm text-gray-500">{project.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">日均编程时长</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-indigo-600">{mockStats.dailyAverage}</div>
              <p className="text-sm text-gray-600 mt-2">保持良好的学习节奏</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">最活跃的一天</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{mockStats.mostActiveDay}</div>
              <p className="text-sm text-gray-600 mt-2">一周中编程时间最长</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">学习建议</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>• 保持每日编程习惯</p>
                <p>• 增加TypeScript练习</p>
                <p>• 深入学习React高级特性</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Integration Note */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900">WakaTime API集成说明</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-blue-800 space-y-2">
              <p>• 本页面展示的是模拟数据，实际项目中需要：</p>
              <p>• 1. 获取个人WakaTime API Key</p>
              <p>• 2. 在Next.js API路由中调用WakaTime API</p>
              <p>• 3. 处理API响应数据并在前端展示</p>
              <p>• 4. 实现数据缓存和错误处理机制</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
