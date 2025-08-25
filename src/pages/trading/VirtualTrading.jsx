import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChartLine, FaPlay, FaPause, FaStop } from 'react-icons/fa';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function VirtualTrading() {
  const [isTrading, setIsTrading] = useState(false);
  const [portfolio, setPortfolio] = useState({
    cash: 100000,
    stocks: [
      { symbol: 'RELIANCE', quantity: 100, avgPrice: 2500 },
      { symbol: 'TCS', quantity: 50, avgPrice: 3500 },
      { symbol: 'HDFC', quantity: 75, avgPrice: 1500 }
    ]
  });

  const mockStocks = [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2520, change: '+2.5%' },
    { symbol: 'TCS', name: 'Tata Consultancy', price: 3520, change: '+1.8%' },
    { symbol: 'HDFC', name: 'HDFC Bank', price: 1510, change: '-0.5%' },
    { symbol: 'INFY', name: 'Infosys', price: 1450, change: '+1.2%' },
    { symbol: 'ITC', name: 'ITC Limited', price: 420, change: '+0.8%' }
  ];

  const [selectedStock, setSelectedStock] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(0);

  const handleBuy = () => {
    if (selectedStock && orderQuantity > 0) {
      const cost = selectedStock.price * orderQuantity;
      if (cost <= portfolio.cash) {
        setPortfolio(prev => ({
          cash: prev.cash - cost,
          stocks: [...prev.stocks, {
            symbol: selectedStock.symbol,
            quantity: orderQuantity,
            avgPrice: selectedStock.price
          }]
        }));
        setOrderQuantity(0);
      }
    }
  };

  const handleSell = () => {
    if (selectedStock && orderQuantity > 0) {
      const stock = portfolio.stocks.find(s => s.symbol === selectedStock.symbol);
      if (stock && stock.quantity >= orderQuantity) {
        const proceeds = selectedStock.price * orderQuantity;
        setPortfolio(prev => ({
          cash: prev.cash + proceeds,
          stocks: prev.stocks.map(s => 
            s.symbol === selectedStock.symbol 
              ? { ...s, quantity: s.quantity - orderQuantity }
              : s
          ).filter(s => s.quantity > 0)
        }));
        setOrderQuantity(0);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        <Navigation />
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/learn" className="flex items-center text-primary-500 hover:text-accent-500 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Learning
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-primary-500">Live Market Data</h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsTrading(!isTrading)}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      isTrading 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {isTrading ? <FaPause /> : <FaPlay />}
                    <span>{isTrading ? 'Pause' : 'Start'} Trading</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockStocks.map((stock) => (
                  <div 
                    key={stock.symbol}
                    className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setSelectedStock(stock)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{stock.symbol}</h3>
                      <span className={`text-sm font-medium ${
                        stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stock.change}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{stock.name}</p>
                    <p className="text-lg font-bold text-gray-800">₹{stock.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trading Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Price Chart</h3>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <FaChartLine className="w-16 h-16 text-gray-400" />
                <p className="text-gray-600 ml-4">Interactive chart will be displayed here</p>
              </div>
            </div>
          </div>

          {/* Trading Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Trading Panel</h3>
              
              {selectedStock ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{selectedStock.symbol}</h4>
                    <p className="text-sm text-gray-600">{selectedStock.name}</p>
                    <p className="text-lg font-bold text-gray-800">₹{selectedStock.price}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter quantity"
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={handleBuy}
                      className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Buy
                    </button>
                    <button
                      onClick={handleSell}
                      className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Sell
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8">Select a stock to start trading</p>
              )}
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Your Portfolio</h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600">Available Cash</p>
                <p className="text-2xl font-bold text-primary-500">₹{portfolio.cash.toLocaleString()}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Holdings</p>
                {portfolio.stocks.length > 0 ? (
                  <div className="space-y-2">
                    {portfolio.stocks.map((stock) => (
                      <div key={stock.symbol} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium text-gray-800">{stock.symbol}</p>
                          <p className="text-sm text-gray-600">{stock.quantity} shares</p>
                        </div>
                        <p className="text-sm text-gray-600">₹{stock.avgPrice}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center py-4">No holdings yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default VirtualTrading;
