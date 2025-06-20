import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects } from '../../data/projects';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Not Found</h1>
            <p className="text-gray-600">The requested project could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 md:h-80 object-cover" />
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      <i className="fab fa-github mr-2"></i>
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Project Description</h2>
                  <p className="text-gray-700 mb-6">{project.longDescription}</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h2>
                  <ul className="list-disc pl-5 mb-6">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="text-gray-700 mb-2">{tech}</li>
                    ))}
                  </ul>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Project Goals</h2>
                  <ul className="list-disc pl-5">
                    {project.goals.map((goal) => (
                      <li key={goal} className="text-gray-700 mb-2">{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;