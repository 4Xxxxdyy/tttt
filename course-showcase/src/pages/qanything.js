import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function QAnythingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>QAnything问答服务 | 课程展示平台</title>
        <meta name="description" content="QAnything大语言模型问答服务" />
      </Head>

      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">QAnything智能问答</h1>
          <p className="text-gray-300 max-w-3xl">
            接入强大的QAnything大语言模型，提供编程问题解答、概念解释和代码调试等服务。
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
          <div className="p-4 bg-gray-900 border-b border-gray-700 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-sm text-gray-400">https://qanything.ai</div>
          </div>
          <div className="h-[70vh]">
            <iframe 
              src={process.env.NEXT_PUBLIC_QANYTHING_URL} 
              className="w-full h-full"
              frameBorder="0"
              title="QAnything问答服务"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}