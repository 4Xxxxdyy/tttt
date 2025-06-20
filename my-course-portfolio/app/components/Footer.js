// app/components/Footer.js
'use client' // 客户端组件
import { useEffect, useState } from 'react';
import { HiClock } from '@heroicons/react/24/solid';

const Footer = () => {
  const [codingTime, setCodingTime] = useState('0h 0m');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWakaTimeData = async () => {
      try {
        const res = await fetch(
          `https://wakatime.com/api/v1/users/current/summaries?api_key=${process.env.NEXT_PUBLIC_WAKATIME_API_KEY}`,
          { cache: 'no-store' } // 禁用缓存获取实时数据
        );
        if (!res.ok) throw new Error('API请求失败');
        
        const data = await res.json();
        const totalSeconds = data.data?.[0]?.grand_total?.total_seconds || 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        setCodingTime(`${hours}h ${minutes}m`);
      } catch (error) {
        console.error('WakaTime数据获取失败:', error);
        setCodingTime('--');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWakaTimeData();
  }, []);

  return (
    <footer className="bg-gray-900 text-white p-6 mt-12">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>© {new Date().getFullYear()} 个人课程作品集</p>
        </div>
        <div className="flex items-center gap-2">
          <HiClock className="h-5 w-5" />
          <span>本周编码时长：{isLoading ? '加载中...' : codingTime}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;