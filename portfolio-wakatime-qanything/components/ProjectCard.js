import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.id}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-900 font-medium">
          View Project
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;