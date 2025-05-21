// src/app/github-stats/commits/[commitId]/page.js

async function getCommitDetails(commitId) {
    const res = await fetch(`https://api.github.com/repos/yangjh-xbmu/Web-develop/commits/${commitId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch commit details for ${commitId}`);
    }
    return res.json();
  }
  
  export default async function CommitDetailPage({ params }) {
    const { commitId } = params; // 从 params 对象获取动态路由参数
    let commitDetails = null;
    let errorFetching = null;
  
    try {
      commitDetails = await getCommitDetails(commitId);
    } catch (error) {
      console.error(error);
      errorFetching = error.message;
    }
  
    if (errorFetching) {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4 text-red-500">获取提交详情失败</h1>
          <p>Commit SHA: {commitId}</p>
          <p>{errorFetching}</p>
        </div>
      );
    }
  
    if (!commitDetails) {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4">加载中...</h1>
          <p>Commit SHA: {commitId}</p>
        </div>
      );
    }
  
    const { commit, author, committer, html_url, files } = commitDetails;
  
    return (
      <div className="container mx-auto p-4">
        <a href="/github-stats" className="text-blue-500 hover:underline mb-4 inline-block">&larr; 返回提交列表</a>
        <h1 className="text-2xl font-bold mb-2 break-all">提交详情: {commitId.substring(0, 7)}</h1>
        <p className="text-lg mb-4 bg-gray-100 p-3 rounded">{commit.message}</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border p-3 rounded">
            <h2 className="text-md font-semibold mb-1">作者 (Author):</h2>
            <p>{commit.author.name} &lt;{commit.author.email}&gt;</p>
            <p>日期: {new Date(commit.author.date).toLocaleString()}</p>
            {author && <img src={author.avatar_url} alt={author.login} className="w-10 h-10 rounded-full mt-1" />}
          </div>
          <div className="border p-3 rounded">
            <h2 className="text-md font-semibold mb-1">提交者 (Committer):</h2>
            <p>{commit.committer.name} &lt;{commit.committer.email}&gt;</p>
            <p>日期: {new Date(commit.committer.date).toLocaleString()}</p>
            {committer && <img src={committer.avatar_url} alt={committer.login} className="w-10 h-10 rounded-full mt-1" />}
          </div>
        </div>
  
        <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 inline-block">
          在 GitHub 上查看提交 &rarr;
        </a>
  
        {files && files.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">变更的文件 ({files.length}):</h2>
            <ul className="list-disc pl-5 space-y-1">
              {files.map((file) => (
                <li key={file.sha || file.filename} className="text-sm">
                  <a href={file.blob_url} target="_blank" rel="noopener noreferrer" className="hover:underline text-green-600">
                    {file.filename}
                  </a>
                  <span className="ml-2 text-gray-500">(+{file.additions} / -{file.deletions})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  // 可选: 为动态路由生成元数据
  export async function generateMetadata({ params }) {
    const { commitId } = params;
    return {
      title: `Commit ${commitId.substring(0,7)} - GitHub Stats`,
      description: `Details for commit ${commitId} from yangjh-xbmu/Web-develop`,
    };
  }