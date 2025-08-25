import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function RiskAssessment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        <Navigation />
      </header>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/learn" className="flex items-center text-primary-500 hover:text-accent-500 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Learning
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary-500 mb-6">Risk Assessment & Management</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-primary-500 mb-4">Understanding Investment Risks</h2>
              <p className="text-gray-700 mb-4">
                Every investment carries some level of risk. Understanding and managing these risks is crucial for successful investing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Market Risk</h3>
                    <p className="text-gray-600 text-sm">The risk of losing money due to market fluctuations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Company Risk</h3>
                    <p className="text-gray-600 text-sm">Risk specific to individual companies or sectors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Liquidity Risk</h3>
                    <p className="text-gray-600 text-sm">Difficulty in selling investments quickly</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-primary-500 mb-4">Risk Management Strategies</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Diversification</h3>
                  <p className="text-green-700 text-sm">Spread investments across different assets and sectors</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Stop Loss Orders</h3>
                  <p className="text-blue-700 text-sm">Automatically sell when price falls below a certain level</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Position Sizing</h3>
                  <p className="text-purple-700 text-sm">Limit the amount invested in any single position</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold text-primary-500 mb-4">Risk Assessment Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaChartLine className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Volatility Analysis</h3>
                <p className="text-gray-600 text-sm">Measure price fluctuations over time</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaShieldAlt className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Risk Score</h3>
                <p className="text-gray-600 text-sm">Calculate your portfolio's overall risk level</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaExclamationTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Stress Testing</h3>
                <p className="text-gray-600 text-sm">Simulate worst-case scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RiskAssessment;
