import PracticeCard from '@/components/PracticeCard'; // 确保路径正确

export default function HomePage() {
  const weekOneTitle = "第一周：组件基础";
  const practiceDate = new Date().toLocaleDateString();

  return (
    <div>
      <h1>每周练习</h1>

      {/* 使用类似 HTML 属性的 JSX 语法传递 Props */}
      <PracticeCard
        title={weekOneTitle} {/* 使用 {} 传递变量 */}
        description="学习 React 组件的核心概念和 JSX 基础。" {/* 使用 "" 传递字符串 */}
        date={practiceDate} {/* 使用 {} 传递变量 */}
        completed={false} {/* 使用 {} 传递布尔值 */}
      />

      {/* 可以传递其他任何需要的数据 */}
      <PracticeCard
        title="第二周：Props 与 State"
        description="掌握组件间数据传递和内部状态管理。"
        date={practiceDate}
        completed={true}
      />
    </div>
  );
}