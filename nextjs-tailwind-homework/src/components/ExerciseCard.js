// src/components/ExerciseCard.js
import React from "react";

/**
 * ExerciseCard 组件
 * @param {object} props - 组件属性
 * @param {string} props.title - 练习标题
 * @param {string} props.description - 练习描述
 * @param {string} props.imageUrl - 图片URL (来自Unsplash)
 * @param {string} props.link - 练习链接 (可选)
 * @param {string[]} props.tags - 练习相关的技术标签 (可选)
 */
export default function ExerciseCard({
  title,
  description,
  imageUrl,
  link,
  tags,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* 图片区域 - Unsplash图片将在这里显示 */}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl} // 默认占位图
        alt={title || "Exercise Image"}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {title || "练习标题"}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description || "这里是练习的简要描述，介绍练习的主要内容和目标。"}
        </p>
        {/* 技术标签 */}
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
        {/* 操作按钮 */}
        {link && (
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
        )}
        {!link && <p className="text-sm text-gray-400">暂无在线链接</p>}
      </div>
    </div>
  );
}