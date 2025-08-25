import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaNetworkWired, FaChartPie, FaBalanceScale } from 'react-icons/fa';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function PortfolioDiversification() {
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
          <h1 className="text-3xl font-bold text-primary-500 mb-6">Portfolio Diversification</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-primary-500 mb-4">What is Diversification?</h2>
              <p className="text-gray-700 mb-4">
                Portfolio diversification is a risk management strategy that involves spreading investments across different assets, sectors, and geographies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaNetworkWired className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Asset Allocation</h3>
                    <p className="text-gray-600 text-sm">Distribute investments across different asset classes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaChartPie className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Sector Diversification</h3>
                    <p className="text-gray-600 text-sm">Invest across different industry sectors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaBalanceScale className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Geographic Diversification</h3>
                    <p className="text-gray-600 text-sm">Spread investments across different countries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-primary-500 mb-4">Benefits of Diversification</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Risk Reduction</h3>
                  <p className="text-green-700 text-sm">Minimize the impact of poor performance in any single investment</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Stable Returns</h3>
                  <p className="text-blue-700 text-sm">More consistent performance over time</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Growth Opportunities</h3>
                  <p className="text-purple-700 text-sm">Exposure to different growth sectors and markets</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold text-primary-500 mb-4">Diversification Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaChartPie className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">60/40 Rule</h3>
                <p className="text-gray-600 text-sm">60% stocks, 40% bonds for balanced risk</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaNetworkWired className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Core & Satellite</h3>
                <p className="text-gray-600 text-sm">Core index funds + satellite active funds</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaBalanceScale className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Equal Weight</h3>
                <p className="text-gray-600 text-sm">Equal allocation across all investments</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioDiversification;
