// 原代码中使用了中文单引号，替换为英文单引号以解决无效字符问题
import Navbar from '../../../nextjs-tailwind-homework/src/components/Navbar';
export default function Hello() {
  return (
    <div>
      <Navbar />
      <h1 className="text-red-500 bg-sky-50 text-6xl text-center">Hello</h1>
    </div>
  )
} 