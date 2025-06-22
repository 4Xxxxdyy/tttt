import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // ⚠️ 验证环境变量是否配置
    if (!process.env.NEXT_PUBLIC_WAKATIME_API_KEY || !process.env.NEXT_PUBLIC_WAKATIME_USER) {
      throw new Error('WakaTime配置缺失')
    }
    
    const response = await axios.get(
      `https://wakatime.com/api/v1/users/${process.env.NEXT_PUBLIC_WAKATIME_USER}/stats/last_7_days`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.NEXT_PUBLIC_WAKATIME_API_KEY
          ).toString('base64')}`,
        },
      }
    )
    
    res.status(200).json(response.data.data)
  } catch (error) {
    console.error('WakaTime API Error:', error)
    res.status(500).json({ 
      error: 'Failed to fetch coding stats',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
