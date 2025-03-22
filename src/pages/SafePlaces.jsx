
import React, { useState } from 'react';
import { toast } from 'sonner';
import { 
  ArrowLeft, 
  Search,
  MapPin,
  Star,
  Shield,
  Users,
  ThumbsUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const SafePlaceCard = ({ place }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden card-hover animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{place.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span>{place.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-gray-600 mb-3">
          <MapPin size={14} />
          <span className="text-sm">{place.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{place.description}</p>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1 text-sm text-teal-500">
            <Shield size={14} />
            <span>Safety Score: {place.safetyScore}/10</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Users size={14} />
            <span>{place.visitors} visitors</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 card-hover animate-scale-in">
      <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const SafePlaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const safetyFeatures = [
    {
      icon: <Shield size={24} />,
      title: 'Verified Safety',
      description: 'All locations are verified for safety by our team and community'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Ratings',
      description: 'Real feedback from women travelers to help you make informed decisions'
    },
    {
      icon: <ThumbsUp size={24} />,
      title: 'Trusted Reviews',
      description: 'Honest, detailed reviews about the safety and comfort of destinations'
    }
  ];
  
  const safePlaces = [
    {
      id: 1,
      name: 'Copenhagen, Denmark',
      location: 'Northern Europe',
      description: 'Known for its safety, clean streets, and excellent public transportation system that runs 24/7.',
      image: 'https://images.unsplash.com/photo-1552560880-2482cef14240?auto=format&q=75&fit=crop&w=600',
      rating: 4.9,
      safetyScore: 9.5,
      visitors: '850K+'
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      location: 'East Asia',
      description: 'One of the safest major cities with low crime rates and helpful locals despite language barriers.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&q=75&fit=crop&w=600',
      rating: 4.8,
      safetyScore: 9.3,
      visitors: '1.2M+'
    },
    {
      id: 3,
      name: 'Singapore',
      location: 'Southeast Asia',
      description: 'Ultra-clean city with strict laws, making it extremely safe for solo travelers and families.',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&q=75&fit=crop&w=600',
      rating: 4.9,
      safetyScore: 9.7,
      visitors: '980K+'
    },
    {
      id: 4,
      name: 'Reykjavik, Iceland',
      location: 'Northern Europe',
      description: 'The capital of one of the safest countries with extremely low crime rates and friendly locals.',
      image: 'https://images.unsplash.com/photo-1504284864433-ff8bb4a6af55?auto=format&q=75&fit=crop&w=600',
      rating: 4.7,
      safetyScore: 9.2,
      visitors: '620K+'
    },
    {
      id: 5,
      name: 'Zurich, Switzerland',
      location: 'Central Europe',
      description: 'Clean, orderly city with excellent public transportation and very low crime rates.',
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&q=75&fit=crop&w=600',
      rating: 4.8,
      safetyScore: 9.4,
      visitors: '780K+'
    },
    {
      id: 6,
      name: 'Vancouver, Canada',
      location: 'North America',
      description: 'Diverse, welcoming city with stunning natural beauty and a reputation for safety.',
      image: 'https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&q=75&fit=crop&w=600',
      rating: 4.7,
      safetyScore: 9.0,
      visitors: '840K+'
    }
  ];
  
  const filteredPlaces = safePlaces.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSuggestion = () => {
    toast.success('Thank you for your suggestion! Our team will review it.');
  };

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
              <h1 className="text-2xl font-semibold">Safe Places</h1>
            </div>
            
            <button 
              className="btn-teal"
              onClick={handleSuggestion}
            >
              Suggest a Place
            </button>
          </div>
          
          <section className="mb-8 bg-white rounded-xl shadow p-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Find Safe Destinations</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search cities, countries, or regions..."
                className="input-field pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Why Use Safe Places?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safetyFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">
              {searchTerm ? `Search Results (${filteredPlaces.length})` : 'Top Rated Safe Destinations'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <SafePlaceCard key={place.id} place={place} />
              ))}
              
              {filteredPlaces.length === 0 && (
                <div className="col-span-3 text-center py-12 text-gray-500">
                  <MapPin size={36} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium">No destinations found</p>
                  <p>Try a different search term or explore our suggestions</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SafePlaces;
