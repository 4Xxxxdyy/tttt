import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import CodingStats from '../components/CodingStats';
import Link from 'next/link';

export default function Home() {
  const [codingTime, setCodingTime] = useState(null);
  
  // 获取WakaTime数据
  useEffect(() => {
    const fetchCodingTime = async () => {
      try {
        const res = await fetch('/api/wakatime');
        const data = await res.json();
        setCodingTime(data);
      } catch (error) {
        console.error('获取编码时长失败:', error);
        setCodingTime({ error: true });
      }
    };
    
    fetchCodingTime();
  }, []);

  // 课程练习数据
  const courses = [
    { 
      id: 'html-css', 
      title: 'HTML/CSS基础', 
      date: '2023-09-15', 
      description: '响应式网页布局练习', 
      route: '/exercises/html-css',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'javascript', 
      title: 'JavaScript实战', 
      date: '2023-10-10', 
      description: 'DOM操作与事件处理', 
      route: '/exercises/javascript',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      id: 'react', 
      title: 'React组件开发', 
      date: '2023-11-05', 
      description: '状态管理与生命周期', 
      route: '/exercises/react',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      id: 'nextjs', 
      title: 'Next.js框架', 
      date: '2023-11-28', 
      description: '服务端渲染与API路由', 
      route: '/exercises/nextjs',
      color: 'from-gray-700 to-black'
    },
    { 
      id: 'api', 
      title: 'API集成实战', 
      date: '2023-12-12', 
      description: '第三方API调用与数据处理', 
      route: '/exercises/api',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'fullstack', 
      title: '全栈项目', 
      date: '2024-01-08', 
      description: '前后端整合应用开发', 
      route: '/exercises/fullstack',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>课程综合展示平台 | Next.js</title>
        <meta name="description" content="课程练习展示与编码统计平台" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            课程综合展示平台
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            展示本学期HTML、CSS、JavaScript、React和Next.js的学习成果，
            集成WakaTime编码统计与QAnything智能问答服务
          </p>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">课程练习展示</h2>
            <CodingStats codingTime={codingTime} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
        
        <section className="bg-gray-800 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">QAnything智能问答</h2>
              <p className="text-gray-300 mb-6">
                接入强大的QAnything大语言模型，提供智能问答服务。
                可以回答编程问题、解释概念，甚至帮助你调试代码。
              </p>
              <Link href="/qanything">
                <a className="inline-block bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  体验问答服务 →
                </a>
              </Link>
            </div>
            <div className="flex-1">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-indigo-900/30 mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-400">智能问答服务</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer codingTime={codingTime} />
    </div>
  );
}