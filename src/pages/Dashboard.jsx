
import React, { useState } from 'react';
import { toast } from 'sonner';
import { 
  Film, 
  MoonStar, 
  Waves, 
  Mountain,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Bell,
  MailIcon,
  MapPin
} from 'lucide-react';

import Sidebar from '../components/Sidebar';
import MoodCard from '../components/MoodCard';
import DestinationCard from '../components/DestinationCard';
import ExpenseChart from '../components/ExpenseChart';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const moodCategories = [
    { 
      icon: <Film className="text-purple-500" size={20} />, 
      title: 'Movies', 
      color: 'bg-purple-100' 
    },
    { 
      icon: <MoonStar className="text-indigo-500" size={20} />, 
      title: 'Astrology', 
      color: 'bg-indigo-100' 
    },
    { 
      icon: <Waves className="text-orange-500" size={20} />, 
      title: 'Beach', 
      color: 'bg-orange-100' 
    },
    { 
      icon: <Mountain className="text-teal-500" size={20} />, 
      title: 'Adventure', 
      color: 'bg-teal-100' 
    },
  ];
  
  const destinations = [
    {
      city: 'Paris',
      country: 'France',
      visitors: 1300000,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&q=75&fit=crop&w=600'
    },
    {
      city: 'Santorini',
      country: 'Greece',
      visitors: 980000,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d3a6425c?auto=format&q=75&fit=crop&w=600'
    },
    {
      city: 'Bali',
      country: 'Indonesia',
      visitors: 850000,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&q=75&fit=crop&w=600'
    },
  ];
  
  const handleSubscribe = () => {
    toast.success('Subscribed to newsletter successfully!');
  };
  
  const handleExplore = () => {
    toast.success('Explore feature coming soon!');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="relative w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search destinations, restaurants, places..."
                className="input-field pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="btn-teal flex items-center gap-2">
                <SlidersHorizontal size={16} />
                <span>Filters</span>
              </button>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">John Doe</span>
                <img 
                  src="https://i.pravatar.cc/150?img=32" 
                  alt="User Avatar" 
                  className="w-8 h-8 rounded-full border border-gray-200"
                />
              </div>
            </div>
          </div>
          
          <section className="mb-8 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">What's your mood?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moodCategories.map((category, index) => (
                <MoodCard key={index} {...category} />
              ))}
            </div>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white rounded-xl shadow p-6 animate-scale-in">
              <h2 className="text-xl font-semibold mb-4">Most Visited Places</h2>
              <div className="space-y-2">
                {destinations.map((destination, index) => (
                  <DestinationCard key={index} {...destination} />
                ))}
              </div>
            </section>
            
            <section className="bg-white rounded-xl shadow p-6 animate-scale-in">
              <h2 className="text-xl font-semibold mb-4">Expense Analysis</h2>
              <ExpenseChart />
            </section>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <section className="bg-white rounded-xl shadow p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Expense Tracker</h3>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <Bell size={16} />
                </div>
              </div>
              <p className="text-gray-600 mb-4">Track and manage your travel expenses</p>
              <button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium">
                <span>View Details</span>
                <ChevronRight size={16} />
              </button>
            </section>
            
            <section className="bg-white rounded-xl shadow p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Newsletter</h3>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                  <MailIcon size={16} />
                </div>
              </div>
              <p className="text-gray-600 mb-4">Subscribe for travel updates</p>
              <button 
                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
                onClick={handleSubscribe}
              >
                <span>Subscribe</span>
                <ChevronRight size={16} />
              </button>
            </section>
            
            <section className="bg-white rounded-xl shadow p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Safe Places</h3>
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <MapPin size={16} />
                </div>
              </div>
              <p className="text-gray-600 mb-4">Discover women-friendly destinations</p>
              <button 
                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium"
                onClick={handleExplore}
              >
                <span>Explore</span>
                <ChevronRight size={16} />
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
