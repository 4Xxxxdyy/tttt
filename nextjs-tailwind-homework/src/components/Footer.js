// src/components/Footer.js
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} 《Web前端开发》课程练习平台. 保留所有权利.
        </p>
        <p className="text-xs mt-2">
          使用 Next.js 和 Tailwind CSS 构建
        </p>
        {/* 可以在这里添加更多链接或信息 */}
      </div>
    </footer>
  );
}