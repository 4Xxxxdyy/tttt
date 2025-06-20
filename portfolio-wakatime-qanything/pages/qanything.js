import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QAnythingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">QAnything AI Assistant</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ask questions and get AI-powered answers using the QAnything platform.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://qanything-demo.vercel.app"
                  title="QAnything AI Assistant"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QAnythingPage;