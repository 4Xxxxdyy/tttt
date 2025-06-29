import { type NextRequest, NextResponse } from "next/server"

// This is a mock API route for WakaTime integration
// In a real implementation, you would:
// 1. Get your WakaTime API key from environment variables
// 2. Make actual API calls to WakaTime endpoints
// 3. Process and return the real data

export async function GET(request: NextRequest) {
  try {
    // Mock WakaTime API response
    const mockData = {
      data: {
        total_seconds: 459120, // 127h 32m in seconds
        languages: [
          { name: "JavaScript", total_seconds: 163200, percent: 35.5 },
          { name: "TypeScript", total_seconds: 116100, percent: 25.3 },
          { name: "CSS", total_seconds: 103500, percent: 22.6 },
          { name: "HTML", total_seconds: 76320, percent: 16.6 },
        ],
        projects: [
          { name: "课程期末作业", total_seconds: 153000, percent: 33.4 },
          { name: "React练习项目", total_seconds: 126900, percent: 27.6 },
          { name: "Next.js学习", total_seconds: 102000, percent: 22.2 },
          { name: "其他练习", total_seconds: 77220, percent: 16.8 },
        ],
      },
    }

    // In real implementation:
    // const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.WAKATIME_API_KEY}`
    //   }
    // })
    // const data = await response.json()

    return NextResponse.json(mockData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch WakaTime data" }, { status: 500 })
  }
}
