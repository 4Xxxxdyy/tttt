import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-blue-500/80"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6">
            Your Portfolio Name
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/90 max-w-3xl mx-auto mb-8">
            Showcasing my journey through web development with projects, coding stats, and AI-powered Q&A.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/projects" className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              View Projects
            </a>
            <a href="/qanything" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Ask AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;