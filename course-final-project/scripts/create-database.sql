-- Create database schema for the course final project
-- This script creates tables for storing project data, user statistics, and chat history

-- Projects table to store course project information
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    technologies TEXT[], -- Array of technologies used
    demo_url VARCHAR(500),
    code_url VARCHAR(500),
    image_url VARCHAR(500),
    created_date DATE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- WakaTime statistics table
CREATE TABLE IF NOT EXISTS wakatime_stats (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    total_seconds INTEGER NOT NULL,
    languages JSONB, -- Store language statistics as JSON
    projects JSONB,  -- Store project statistics as JSON
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chat history table for QAnything conversations
CREATE TABLE IF NOT EXISTS chat_history (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255),
    message_type VARCHAR(20) CHECK (message_type IN ('user', 'assistant')),
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample project data
INSERT INTO projects (title, description, technologies, demo_url, code_url, created_date) VALUES
('响应式个人博客', '使用HTML5、CSS3和JavaScript构建的响应式个人博客网站，支持文章发布和评论功能。', 
 ARRAY['HTML5', 'CSS3', 'JavaScript', '响应式设计'], '#', '#', '2024-03-15'),
 
('React待办事项应用', '基于React Hooks的现代化待办事项管理应用，支持任务分类、优先级设置和本地存储。', 
 ARRAY['React', 'JavaScript', 'CSS Modules', 'Local Storage'], '#', '#', '2024-04-10'),
 
('Next.js电商展示页', '使用Next.js构建的电商产品展示页面，包含产品列表、详情页和购物车功能。', 
 ARRAY['Next.js', 'React', 'Tailwind CSS', 'API Routes'], '#', '#', '2024-05-05'),
 
('CSS动画展示', '纯CSS实现的各种动画效果集合，包括加载动画、悬停效果和页面转场动画。', 
 ARRAY['CSS3', 'HTML5', 'CSS Animations', 'Keyframes'], '#', '#', '2024-03-20'),
 
('JavaScript游戏项目', '使用原生JavaScript开发的简单游戏，包含游戏逻辑、计分系统和本地排行榜。', 
 ARRAY['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Logic'], '#', '#', '2024-04-15'),
 
('React组件库', '自定义的React UI组件库，包含按钮、表单、模态框等常用组件，支持主题定制。', 
 ARRAY['React', 'TypeScript', 'Storybook', 'CSS-in-JS'], '#', '#', '2024-05-20');

-- Insert sample WakaTime statistics
INSERT INTO wakatime_stats (date, total_seconds, languages, projects) VALUES
('2024-06-29', 459120, 
 '[{"name": "JavaScript", "total_seconds": 163200, "percent": 35.5}, 
   {"name": "TypeScript", "total_seconds": 116100, "percent": 25.3}, 
   {"name": "CSS", "total_seconds": 103500, "percent": 22.6}, 
   {"name": "HTML", "total_seconds": 76320, "percent": 16.6}]'::jsonb,
 '[{"name": "课程期末作业", "total_seconds": 153000, "percent": 33.4}, 
   {"name": "React练习项目", "total_seconds": 126900, "percent": 27.6}, 
   {"name": "Next.js学习", "total_seconds": 102000, "percent": 22.2}, 
   {"name": "其他练习", "total_seconds": 77220, "percent": 16.8}]'::jsonb);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_created_date ON projects(created_date);
CREATE INDEX IF NOT EXISTS idx_wakatime_stats_date ON wakatime_stats(date);
CREATE INDEX IF NOT EXISTS idx_chat_history_session ON chat_history(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_timestamp ON chat_history(timestamp);
