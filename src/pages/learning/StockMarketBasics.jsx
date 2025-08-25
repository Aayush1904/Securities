import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPlay, FaCheck, FaTimes } from 'react-icons/fa';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function StockMarketBasics() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const lessons = [
    {
      id: 1,
      title: "What is the Stock Market?",
      content: "The stock market is a marketplace where shares of publicly listed companies are traded. It allows investors to buy and sell ownership stakes in companies.",
      videoUrl: "#",
      duration: "10 min"
    },
    {
      id: 2,
      title: "How Stock Trading Works",
      content: "Stock trading involves buying and selling shares through exchanges like NSE and BSE. Prices are determined by supply and demand in the market.",
      videoUrl: "#",
      duration: "15 min"
    },
    {
      id: 3,
      title: "Basic Trading Terminology",
      content: "Learn essential terms like Bull Market, Bear Market, IPO, Market Cap, P/E Ratio, and more that every investor should know.",
      videoUrl: "#",
      duration: "12 min"
    },
    {
      id: 4,
      title: "Understanding Market Orders",
      content: "Different types of orders: Market Orders, Limit Orders, Stop Loss Orders, and how to use them effectively.",
      videoUrl: "#",
      duration: "18 min"
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of the stock market?",
      options: [
        "To provide loans to companies",
        "To allow trading of company shares",
        "To collect taxes",
        "To provide insurance"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "What does IPO stand for?",
      options: [
        "Initial Public Offering",
        "International Portfolio Option",
        "Investment Portfolio Order",
        "Initial Private Order"
      ],
      correct: 0
    },
    {
      id: 3,
      question: "In a bull market, stock prices generally:",
      options: [
        "Stay the same",
        "Go down",
        "Go up",
        "Are unpredictable"
      ],
      correct: 2
    }
  ];

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const getScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) correct++;
    });
    return Math.round((correct / quizQuestions.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        <Navigation />
      </header>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/learn" className="flex items-center text-primary-500 hover:text-accent-500 transition-colors">
            <FaArrowLeft className="mr-2" />
            Back to Learning
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-primary-500 mb-4">
                {lessons[currentLesson].title}
              </h1>
              
              <div className="mb-6">
                <div className="bg-gray-100 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Video Lesson</span>
                    <span className="text-sm text-gray-600">{lessons[currentLesson].duration}</span>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                    <FaPlay className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {lessons[currentLesson].content}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  disabled={currentLesson === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                
                <button
                  onClick={() => setShowQuiz(true)}
                  className="px-6 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
                >
                  Take Quiz
                </button>
                
                <button
                  onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
                  disabled={currentLesson === lessons.length - 1}
                  className="px-6 py-2 bg-primary-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-primary-500 mb-4">Course Progress</h2>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(((currentLesson + 1) / lessons.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentLesson + 1) / lessons.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 mb-3">Lessons</h3>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === currentLesson 
                        ? 'bg-primary-100 text-primary-700 border-l-4 border-primary-500' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{lesson.title}</span>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Modal */}
        {showQuiz && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-primary-500 mb-6">Knowledge Check</h2>
              
              {!quizSubmitted ? (
                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={question.id} className="border-b pb-4">
                      <h3 className="font-semibold text-gray-800 mb-3">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={optionIndex}
                              onChange={(e) => setQuizAnswers({
                                ...quizAnswers,
                                [index]: parseInt(e.target.value)
                              })}
                              className="mr-3"
                            />
                            <span className="text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setShowQuiz(false)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleQuizSubmit}
                      className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Submit Quiz
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {getScore() >= 70 ? (
                      <FaCheck className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimes className="text-red-500 mx-auto" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Quiz Complete!
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Your score: <span className="font-bold text-primary-500">{getScore()}%</span>
                  </p>
                  <button
                    onClick={() => {
                      setShowQuiz(false);
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Continue Learning
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default StockMarketBasics;
