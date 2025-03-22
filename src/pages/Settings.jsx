
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings as SettingsIcon } from 'lucide-react';

import Sidebar from '../components/Sidebar';

const Settings = () => {
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
              <h1 className="text-2xl font-semibold">Settings</h1>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-8 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mx-auto mb-6">
              <SettingsIcon size={32} />
            </div>
            
            <h2 className="text-2xl font-bold mb-2">App Settings</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              This page is under construction. Customize your app settings and preferences here soon.
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

export default Settings;
