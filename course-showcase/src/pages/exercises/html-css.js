import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function HtmlCssExercise() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>HTML/CSS练习 | 课程展示平台</title>
      </Head>

      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">HTML/CSS基础练习</h1>
            <p className="text-gray-400">2023-09-15</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">项目描述</h2>
            <p className="text-gray-300 mb-6">
              本练习专注于HTML5语义化标签和CSS3高级特性的应用，包括Flexbox布局、Grid布局、
              媒体查询实现响应式设计，以及CSS变量和动画效果。
            </p>
            
            <h2 className="text-xl font-bold mb-4">技术要点</h2>
            <ul className="text-gray-300 mb-6 list-disc pl-5 space-y-2">
              <li>使用语义化HTML5标签构建页面结构</li>
              <li>Flexbox实现复杂布局</li>
              <li>Grid布局创建响应式网格系统</li>
              <li>媒体查询适配不同设备尺寸</li>
              <li>CSS变量管理主题色</li>
              <li>CSS动画和过渡效果增强用户体验</li>
            </ul>
            
            <h2 className="text-xl font-bold mb-4">成果展示</h2>
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <span className="text-lg font-medium">响应式网页预览</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="#" 
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                查看源代码
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}