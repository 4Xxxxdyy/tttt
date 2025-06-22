import { NextPage } from 'next'
import Head from 'next/head'
import ExerciseCard from '@/app/components/ExerciseCard'

// ⚠️ 替换为你的真实练习数据
const exercises = [
  {
    id: 'html-css-blog',
    title: '响应式博客页面',
    description: '使用HTML5和CSS3构建的响应式博客布局',
    thumbnailUrl: 'blog-thumbnail.jpg',
    date: '2023-10-15',
    skills: ['HTML', 'CSS', '响应式设计']
  },
  {
    id: 'react-todo',
    title: 'React待办事项',
    description: '使用React Hooks构建的任务管理应用',
    thumbnailUrl: 'todo-thumbnail.jpg',
    date: '2023-11-02',
    skills: ['React', 'TypeScript', '状态管理']
  }
]

const ExercisesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>我的课程练习 | 开发者门户</title>
      </Head>
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">课程练习集</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              id={exercise.id}
              title={exercise.title}
              description={exercise.description}
              thumbnailUrl={exercise.thumbnailUrl}
              date={exercise.date}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default ExercisesPage
