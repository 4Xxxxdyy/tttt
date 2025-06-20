// app/exercises/[id]/page.js
import { exercises } from '@/lib/exercises';
import { useParams } from 'next/navigation';

export default function ExerciseDetail() {
  const { id } = useParams();
  const exercise = exercises.find((ex) => ex.id === id);

  if (!exercise) return <div>练习未找到</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{exercise.title}</h1>
      <p className="text-gray-600 mb-12">{exercise.description}</p>
      <div className="mb-8">{/* 此处可添加代码片段、截图等 */}</div>
      <Link href="/" className="text-blue-600 font-medium">
        返回练习列表
      </Link>
    </div>
  );
}