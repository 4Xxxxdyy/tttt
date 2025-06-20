// src/app/github-stats/layout.js

export default function GitHubStatsLayout({ children }) {
    return (
      <div>
        {/* 可以在这里添加 GitHub Stats 部分特有的头部或侧边栏等 */}
        {/* <header className="bg-indigo-100 p-2 text-center">
          <p className="text-sm text-indigo-700">GitHub 数据分析区</p>
        </header> */}
        <main>{children}</main>
      </div>
    );
  }