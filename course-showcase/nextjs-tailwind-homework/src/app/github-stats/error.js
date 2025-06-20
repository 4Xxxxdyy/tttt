// src/app/github-stats/error.js
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function GitHubStatsError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("GitHub Stats Error Boundary Caught:", error);
  }, [error]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">糟糕，出错了！</h2>
      <p className="text-gray-700 mb-2">在加载 GitHub 统计数据时遇到了问题。</p>
      <p className="text-sm text-gray-500 mb-4">错误信息: {error?.message || '未知错误'}</p>
      <button
        onClick={
          // 尝试恢复，通过重新渲染路由段
          () => reset()
        }
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        再试一次
      </button>
    </div>
  );
}