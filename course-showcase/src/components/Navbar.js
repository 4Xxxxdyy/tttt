import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-8 h-8 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold">课程展示</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/"><a className="text-blue-400 font-medium">首页</a></Link>
              <Link href="/exercises"><a className="text-gray-300 hover:text-white">所有练习</a></Link>
              <Link href="/qanything"><a className="text-gray-300 hover:text-white">智能问答</a></Link>
              <Link href="/about"><a className="text-gray-300 hover:text-white">关于</a></Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a className="text-blue-400 block px-3 py-2 rounded-md text-base font-medium">首页</a>
            </Link>
            <Link href="/exercises">
              <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">所有练习</a>
            </Link>
            <Link href="/qanything">
              <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">智能问答</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">关于</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}