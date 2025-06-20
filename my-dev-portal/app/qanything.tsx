import { NextPage } from 'next'
import Head from 'next/head'
import Iframe from 'react-iframe'

const QAnythingPage: NextPage = () => {
  // ⚠️ 确保已配置QANYTHING_URL环境变量
  const qAnythingUrl = process.env.NEXT_PUBLIC_QANYTHING_URL
  
  if (!qAnythingUrl) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">QAnything服务未配置</h1>
        <p>请在.env.local文件中配置NEXT_PUBLIC_QANYTHING_URL</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>AI问答 | 开发者门户</title>
      </Head>
      
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">QAnything AI助手</h1>
        
        <div className="w-full h-[calc(100vh-180px)]">
          <Iframe
            url={qAnythingUrl}
            width="100%"
            height="100%"
            className="border rounded-lg"
            display="block"
            position="relative"
          />
        </div>
      </div>
    </>
  )
}

export default QAnythingPage
