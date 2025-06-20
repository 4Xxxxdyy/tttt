// app/components/ExerciseCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function ExerciseCard({ title, description, technologies, demoUrl, repoUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition-all duration-300">
      <Image
        src="https://picsum.photos/300/200?random=1"
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="mr-2 bg-gray-100 text-gray-800 px-2 py-1 rounded-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href={`/exercises/${exercise.id}`} className="text-blue-600 font-medium">
            查看详情 →
          </Link>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium">
              在线演示
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium">
              GitHub源码
            </a>
          )}
        </div>
      </div>
    </div>
  );
}