import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChartLine, FaShieldAlt, FaRobot, FaNetworkWired } from 'react-icons/fa';
import Navigation from '../components/sections/Navigation/Navigation';
import Footer from '../components/sections/Footer';

function LearningDashboard() {
  const learningModules = [
    {
      id: 1,
      title: "Stock Market Basics",
      description: "Learn the fundamentals of stock market trading, terminology, and basic concepts.",
      icon: <FaGraduationCap className="w-8 h-8" />,
      path: "/learn/stock-market-basics",
      duration: "2-3 hours",
      level: "Beginner",
      progress: 0
    },
    {
      id: 2,
      title: "Risk Assessment",
      description: "Understand risk management techniques and how to assess investment risks.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      path: "/learn/risk-assessment",
      duration: "1-2 hours",
      level: "Intermediate",
      progress: 0
    },
    {
      id: 3,
      title: "Algo Trading & HFT",
      description: "Explore algorithmic trading and high-frequency trading concepts.",
      icon: <FaRobot className="w-8 h-8" />,
      path: "/learn/algo-trading",
      duration: "3-4 hours",
      level: "Advanced",
      progress: 0
    },
    {
      id: 4,
      title: "Portfolio Diversification",
      description: "Learn how to build and manage a diversified investment portfolio.",
      icon: <FaNetworkWired className="w-8 h-8" />,
      path: "/learn/portfolio-diversification",
      duration: "2-3 hours",
      level: "Intermediate",
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        <Navigation />
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-500 mb-4">
            Interactive Learning Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the Indian stock market through our comprehensive learning modules. 
            Choose your learning path and track your progress.
          </p>
        </div>

        {/* Language Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary-500 mb-4">Choose Your Language</h2>
          <div className="flex flex-wrap gap-4">
            {['English', 'Hindi', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati'].map((lang) => (
              <button
                key={lang}
                className="px-6 py-3 rounded-xl border-2 border-primary-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Learning Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {learningModules.map((module) => (
            <div key={module.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-xl text-white mr-4">
                  {module.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-500">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {module.level}
                  </span>
                  <span className="text-gray-600 text-sm">{module.duration}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-accent-500">{module.progress}%</span>
                  <p className="text-gray-600 text-sm">Complete</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>

              <Link
                to={module.path}
                className="block w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                {module.progress > 0 ? 'Continue Learning' : 'Start Learning'}
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/trading/simulator"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <FaChartLine className="w-12 h-12 text-accent-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary-500 mb-2">Virtual Trading</h3>
            <p className="text-gray-600">Practice with simulated trading scenarios</p>
          </Link>
          
          <Link
            to="/progress"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <FaGraduationCap className="w-12 h-12 text-accent-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary-500 mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your learning journey</p>
          </Link>
          
          <Link
            to="/resources/sebi-guidelines"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
          >
            <FaShieldAlt className="w-12 h-12 text-accent-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary-500 mb-2">SEBI Guidelines</h3>
            <p className="text-gray-600">Stay compliant with regulations</p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LearningDashboard;
