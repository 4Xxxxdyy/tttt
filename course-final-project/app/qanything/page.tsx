"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, Bot, User, Loader2 } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function QAnythingPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "您好！我是QAnything AI助手。我可以帮您回答各种问题，包括编程、学习、技术等方面的疑问。请随时向我提问！",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate API call to QAnything
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `这是一个模拟的AI回复。在实际项目中，这里会调用QAnything API来获取真实的AI回答。您的问题是："${userMessage.content}"。实际实现时需要配置QAnything API接口，处理请求和响应数据。`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">QAnything AI问答</h1>
              <p className="text-lg text-gray-600 mt-2">基于大语言模型的智能问答服务</p>
            </div>
            <Link href="/">
              <Button variant="outline">返回首页</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              AI对话
            </CardTitle>
            <CardDescription>与QAnything AI助手进行智能对话</CardDescription>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.type === "user" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.type === "assistant" && <Bot className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                    {message.type === "user" && <User className="h-5 w-5 mt-0.5 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.type === "user" ? "text-indigo-200" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-5 w-5" />
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-gray-600">AI正在思考中...</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          {/* Input Form */}
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="输入您的问题..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">功能特点</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 智能问答对话</li>
                <li>• 多轮对话支持</li>
                <li>• 实时响应</li>
                <li>• 上下文理解</li>
                <li>• 多领域知识覆盖</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">使用建议</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 提问尽量具体明确</li>
                <li>• 可以进行多轮对话</li>
                <li>• 支持编程相关问题</li>
                <li>• 可以询问学习建议</li>
                <li>• 欢迎技术讨论</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* API Integration Info */}
        <Card className="mt-8 bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-lg text-purple-900">QAnything API集成说明</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-purple-800 space-y-2">
              <p>
                <strong>高级实现路径 (85+分)：</strong>
              </p>
              <p>• 1. 配置QAnything API接口地址和认证信息</p>
              <p>• 2. 在Next.js API路由中实现API调用逻辑</p>
              <p>• 3. 处理用户输入，构建API请求</p>
              <p>• 4. 解析API响应，提取回答内容</p>
              <p>• 5. 实现错误处理和重试机制</p>
              <p>• 6. 优化用户体验，添加加载状态</p>
              <p className="mt-4">
                <strong>当前展示：</strong>模拟对话界面，实际项目需要真实API集成
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
