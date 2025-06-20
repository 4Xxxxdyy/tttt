import React from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';

const CourseProjects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900 mb-4">Course Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of projects from this semester's web development course, showcasing my progress and skills.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseProjects;