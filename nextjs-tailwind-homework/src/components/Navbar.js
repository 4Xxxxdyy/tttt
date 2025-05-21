import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          我的应用
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              首页
            </Link>
          </li>
          <li>
            <Link href="/exercises" className="hover:text-gray-300">
              练习
            </Link>
          </li>
          {/* 新增 GitHub 统计链接 */}
          <li>
            <Link href="/github-stats" className="hover:text-gray-300">
              GitHub 统计
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}