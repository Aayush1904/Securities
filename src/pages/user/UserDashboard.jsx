import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaChartLine, FaGraduationCap, FaCog } from 'react-icons/fa';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        <Navigation />
      </header>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary-500 mb-8">User Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/learn" className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <FaGraduationCap className="w-12 h-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold text-primary-500 mb-2">Continue Learning</h3>
            <p className="text-gray-600">Resume your learning journey</p>
          </Link>
          
          <Link to="/trading" className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <FaChartLine className="w-12 h-12 text-accent-500 mb-4" />
            <h3 className="text-xl font-bold text-primary-500 mb-2">Virtual Trading</h3>
            <p className="text-gray-600">Practice with simulated trading</p>
          </Link>
          
          <Link to="/progress" className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <FaUser className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-primary-500 mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your learning progress</p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserDashboard;
