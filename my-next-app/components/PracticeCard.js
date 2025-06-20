export default function PracticeCard() {
    // 我们可以先在这里硬编码一些数据，下一节课学习用 props 传入
    const cardTitle = "JSX 基础练习";
    const cardDescription = "学习 JSX 的基本语法和如何在组件中使用它。";
    const cardDate = new Date().toLocaleDateString(); // 获取当前日期
  
    return (
      <div className="practice-card" style={{ border: '1px solid #eee', padding: '16px', margin: '10px 0', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        {/* 卡片头部 */}
        <div className="card-header" style={{ marginBottom: '12px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>
          <h3 style={{ margin: 0, color: '#333' }}>{cardTitle}</h3> {/* 使用 h3 显示标题 */}
        </div>
  
        {/* 卡片主体 */}
        <div className="card-body" style={{ marginBottom: '12px' }}>
          <p style={{ margin: '0 0 8px 0', color: '#555' }}>{cardDescription}</p> {/* 使用 p 显示描述 */}
        </div>
  
        {/* 卡片脚部 */}
        <div className="card-footer" style={{ fontSize: '0.9em', color: '#777' }}>
          <span>日期: {cardDate}</span> {/* 显示日期 */}
        </div>
      </div>
    );
  }