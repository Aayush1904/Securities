import React from 'react';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function SEBIGuidelines() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        <Navigation />
      </header>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary-500 mb-8">SEBI Guidelines</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-primary-500 mb-6">SEBI Compliance & Guidelines</h2>
          <p className="text-gray-600 mb-4">
            Stay compliant with SEBI regulations and guidelines for retail investors.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="font-semibold text-gray-800">Investor Protection</h3>
              <p className="text-gray-600 text-sm">Guidelines for protecting retail investor interests</p>
            </div>
            
            <div className="border-l-4 border-accent-500 pl-4">
              <h3 className="font-semibold text-gray-800">Trading Regulations</h3>
              <p className="text-gray-600 text-sm">Rules and regulations for stock market trading</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800">Disclosure Requirements</h3>
              <p className="text-gray-600 text-sm">Information disclosure requirements for companies</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SEBIGuidelines;
