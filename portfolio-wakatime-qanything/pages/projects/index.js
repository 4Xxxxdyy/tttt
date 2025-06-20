import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Projects</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A collection of projects from this semester's web development course, showcasing my progress and skills.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;