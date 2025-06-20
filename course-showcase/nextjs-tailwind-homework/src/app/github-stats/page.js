// src/app/github-stats/page.js
import Link from 'next/link';

async function getCommits() {
  // 注意：对于未认证的请求，GitHub API 有速率限制。
  // 在实际生产应用中，您可能需要使用认证的请求或后端代理。
  const res = await fetch('https://api.github.com/repos/yangjh-xbmu/Web-develop/commits?per_page=10', {
    // next: { revalidate: 3600 } // 可选：每小时重新验证数据
  });
  if (!res.ok) {
    // 如果请求失败，抛出错误，会被 error.js 捕获
    throw new Error('Failed to fetch commits from GitHub');
  }
  return res.json();
}

export default async function GitHubStatsPage() {
  let commits = [];
  let errorFetching = null;

  try {
    commits = await getCommits();
  } catch (error) {
    console.error(error);
    errorFetching = error.message;
    // 错误信息将在 error.js 中处理，这里也可以选择性地展示一些信息
  }

  if (errorFetching) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-500">获取 GitHub 提交数据失败</h1>
        <p>{errorFetching}</p>
        <p>请检查网络连接或稍后再试。详细错误已记录在控制台。</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub: yangjh-xbmu/Web-develop 提交记录</h1>
      <p className="mb-4">最近 {commits.length} 条提交：</p>
      {commits.length > 0 ? (
        <ul className="space-y-4">
          {commits.map((commit) => (
            <li key={commit.sha} className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="font-semibold text-lg text-blue-600">
                <Link href={`/github-stats/commits/${commit.sha}`} className="hover:underline">
                  {commit.commit.message.split('\n')[0]} {/* 只显示第一行提交信息 */}
                </Link>
              </div>
              <p className="text-sm text-gray-600">
                作者: {commit.commit.author.name} ({commit.commit.author.email})
              </p>
              <p className="text-sm text-gray-500">
                日期: {new Date(commit.commit.author.date).toLocaleString()}
              </p>
              <Link href={`/github-stats/commits/${commit.sha}`} className="text-blue-500 hover:underline text-sm mt-2 inline-block">
                查看详情 &rarr;
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>未能获取到提交记录，或仓库中没有提交。</p>
      )}
    </div>
  );
}