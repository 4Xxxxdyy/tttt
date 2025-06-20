export default function Footer({ codingTime }) {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-6 h-6 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 font-medium">课程综合展示平台</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">基于Next.js构建 | {currentYear}学期</p>
            </div>
            
            <div className="flex items-center">
              {codingTime && !codingTime.error && (
                <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>总编码时长: {codingTime.text}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    );
  }