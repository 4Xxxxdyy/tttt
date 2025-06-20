import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <Link href={course.route}>
      <a>
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 cursor-pointer h-full flex flex-col">
          <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                <p className="text-gray-400 text-sm">{course.date}</p>
              </div>
              <div className="bg-blue-900/30 text-blue-300 text-xs font-medium px-2 py-1 rounded">
                练习
              </div>
            </div>
            <p className="text-gray-300 mb-6 flex-1">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-400 font-medium">查看详情</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}