"use client";
import React, { useState } from "react"; // 1. 引入 useState
export default function ExerciseCard({
  title,
  description,
  imageUrl,
  link,
  tags,
}) {
  // 2. 声明 State 变量来管理收藏状态
  // 初始状态为未收藏 (false)
  const [isFavorited, setIsFavorited] = useState(false);
  // 4. 创建事件处理函数来切换收藏状态
  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited); // 将 isFavorited 的值取反
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title || "Exercise Image"}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {title || "练习标题"}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description || "这里是练习的简要描述，介绍练习的主要内容和目标。"}
        </p>
        {tags && tags.length > 0 && (
          <div className="mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mt-4">
          {/* 查看练习按钮 */}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-600 text-white px-6 py-2 rounded-md font-medium
                         transform transition-transform duration-200 hover:scale-105 hover:bg-rose-700
                         focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
            >
              查看练习
            </a>
          ) : (
            <p className="text-sm text-gray-400">暂无在线链接</p>
          )}
          {/* 3. & 5. 添加收藏按钮并根据 State 更新 UI */}
          <button
            onClick={handleToggleFavorite}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200
                        ${
                          isFavorited
                            ? "bg-amber-500 text-white hover:bg-amber-600" // 已收藏样式
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300" // 未收藏样式
                        }`}
          >
            {isFavorited ? "已收藏 ★" : "收藏 ☆"}
          </button>
        </div>
      </div>
    </div>
  );
}