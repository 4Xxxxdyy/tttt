import Link from 'next/link'

interface ExerciseCardProps {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  date: string
}

export default function ExerciseCard({
  id,
  title,
  description,
  thumbnailUrl,
  date
}: ExerciseCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* ⚠️ 替换为你的练习截图路径 */}
      <img 
        src={`/exercises/${thumbnailUrl}`} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Link 
            href={`/exercises/${id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            查看详情
          </Link>
        </div>
      </div>
    </div>
  )
}
