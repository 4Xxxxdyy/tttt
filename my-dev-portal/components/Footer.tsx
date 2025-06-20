import { useEffect, useState } from 'react'
import axios from 'axios'

interface CodingData {
  human_readable_total: string
  human_readable_total_including_other_language: string
}

export default function Footer() {
  const [codingData, setCodingData] = useState<CodingData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCodingStats = async () => {
      try {
        const res = await axios.get('/api/wakatime')
        setCodingData(res.data)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch coding stats:', err)
        setError('无法加载编码统计')
        setCodingData(null)
      }
    }

    fetchCodingStats()
    
    // 每隔1小时刷新数据
    const interval = setInterval(fetchCodingStats, 3600000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {codingData ? (
            <p className="text-sm">
              过去7天编码时间: {codingData.human_readable_total} (总计: {
                codingData.human_readable_total_including_other_language
              })
            </p>
          ) : error ? (
            <p className="text-sm text-yellow-300">{error}</p>
          ) : (
            <p className="text-sm">加载编码统计中...</p>
          )}
        </div>
        <div className="text-center mt-2 text-xs text-gray-400">
          © {new Date().getFullYear()} 开发者门户 - 使用Next.js构建
        </div>
      </div>
    </footer>
  )
}
