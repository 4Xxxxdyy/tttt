import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [codingStats, setCodingStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodingStats = async () => {
      try {
        const response = await fetch('/api/wakatime');
        if (!response.ok) {
          throw new Error('Failed to fetch coding stats');
        }
        const data = await response.json();
        setCodingStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCodingStats();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2025 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        {codingStats && (
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Coding Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-600 p-3 rounded">
                <p className="text-sm text-gray-300">Total Time</p>
                <p className="text-xl font-bold">{codingStats.human_readable_total}</p>
              </div>
              <div className="bg-gray-600 p-3 rounded">
                <p className="text-sm text-gray-300">Most Used Language</p>
                <p className="text-xl font-bold">{codingStats.languages[0]?.name || 'N/A'}</p>
              </div>
              <div className="bg-gray-600 p-3 rounded">
                <p className="text-sm text-gray-300">Active Days</p>
                <p className="text-xl font-bold">{codingStats.days_including_holidays}</p>
              </div>
            </div>
          </div>
        )}
        {loading && <p className="mt-4 text-center text-gray-400">Loading coding stats...</p>}
        {error && <p className="mt-4 text-center text-red-400">Error: {error}</p>}
      </div>
    </footer>
  );
};

export default Footer;