
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';

import Sidebar from '../components/Sidebar';

const SocialConnect = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Link to="/" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft size={16} />
              </Link>
              <h1 className="text-2xl font-semibold">Social Connect</h1>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-8 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mx-auto mb-6">
              <Users size={32} />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Connect with Fellow Travelers</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              This feature is coming soon! Connect with like-minded travelers and share your experiences.
            </p>
            
            <Link to="/" className="btn-teal">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocialConnect;
