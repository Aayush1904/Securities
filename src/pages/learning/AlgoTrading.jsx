import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRobot, FaCog, FaChartLine } from 'react-icons/fa';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function AlgoTrading() {
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
          <h1 className="text-3xl font-bold text-primary-500 mb-6">Algorithmic Trading & HFT</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold text-primary-500 mb-4">What is Algorithmic Trading?</h2>
              <p className="text-gray-700 mb-4">
                Algorithmic trading uses computer programs to execute trades automatically based on predefined rules and strategies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaRobot className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Automated Execution</h3>
                    <p className="text-gray-600 text-sm">Trades executed without human intervention</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaCog className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Strategy-Based</h3>
                    <p className="text-gray-600 text-sm">Follows predefined rules and parameters</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaChartLine className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">High Frequency</h3>
                    <p className="text-gray-600 text-sm">Executes thousands of trades per second</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-primary-500 mb-4">Common Algo Strategies</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Arbitrage</h3>
                  <p className="text-blue-700 text-sm">Exploit price differences between markets</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Mean Reversion</h3>
                  <p className="text-green-700 text-sm">Trade based on price returning to average</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Momentum Trading</h3>
                  <p className="text-purple-700 text-sm">Follow price trends and momentum</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaCog className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> Algorithmic trading requires advanced knowledge and proper risk management. 
                  This content is for educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AlgoTrading;
