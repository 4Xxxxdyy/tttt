import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Next.js App Router Project',
};

// 为 children 参数显式指定 ReactNode 类型，解决隐式 any 类型问题
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>全局导航栏</nav>
        {children} {/* 子路由内容插入点 */}
        <footer>全局页脚</footer>
      </body>
    </html>
  );
}