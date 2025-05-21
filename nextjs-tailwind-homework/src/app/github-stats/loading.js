// src/app/github-stats/loading.js

export default function LoadingGitHubStats() {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto my-4"></div>
        <p className="text-lg font-semibold">正在加载 GitHub 统计数据...</p>
        <p className="text-sm text-gray-600">请稍候，我们正在从 GitHub 获取最新的提交信息。</p>
      </div>
    );
  }