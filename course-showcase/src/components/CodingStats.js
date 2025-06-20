export default function CodingStats({ codingTime }) {
    return (
      <div className="bg-blue-900 text-blue-200 px-4 py-2 rounded-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        {codingTime ? (
          codingTime.error ? (
            <span>统计加载失败</span>
          ) : (
            <span>本周编码: {codingTime.text}</span>
          )
        ) : (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-300 mr-2"></div>
            <span>加载中...</span>
          </div>
        )}
      </div>
    );
  }