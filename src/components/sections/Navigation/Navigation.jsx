import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Yadora from "../../../assets/logo.svg";
import hamburger from "../../../assets/hamburger.svg";
import { links } from "../../../utils/constants";
import { FaTimes } from 'react-icons/fa';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Cleanup effect to restore body scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="flex justify-between relative">
      <nav className="flex items-center">
        <Link to="/">
          <img
            src={Yadora}
            alt="InvestEdu logo"
            className="inline-block mr-8 h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12"
          />
        </Link>

        <ul className="inline-flex gap-8 font-medium">
          <li>
            <Link
              to="/learn"
              className="lg:block hidden text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
            >
              Learn
            </Link>
          </li>
          <li>
            <Link
              to="/trading"
              className="lg:block hidden text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
            >
              Trading
            </Link>
          </li>
          <li>
            <Link
              to="/resources/sebi-guidelines"
              className="lg:block hidden text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
            >
              Resources
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="lg:flex items-center gap-8 hidden">
        <Link
          to="/dashboard"
          className="font-medium text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
        >
          Dashboard
        </Link>
        <Link
          to="/learn"
          className="bg-primary-500 hover:bg-accent-500 px-8 hover:px-9 py-4 rounded-2xl text-white xl:text-lg transition-all duration-200"
        >
          Start Learning
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-primary-500 hover:text-accent-500 transition-colors"
      >
        {isMobileMenuOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <img
            src={hamburger}
            alt="Hamburger menu icon"
            className="w-6 h-6 transition-all duration-200 hover:-rotate-90"
          />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMobileMenu}>
        <div className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-primary-500">Menu</h3>
                <button
                  onClick={closeMobileMenu}
                  className="text-gray-500 hover:text-primary-500"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="space-y-4">
                <Link
                  to="/learn"
                  onClick={closeMobileMenu}
                  className="block py-3 text-primary-500 hover:text-accent-500 transition-colors border-b border-gray-200"
                >
                  Learn
                </Link>
                <Link
                  to="/trading"
                  onClick={closeMobileMenu}
                  className="block py-3 text-primary-500 hover:text-accent-500 transition-colors border-b border-gray-200"
                >
                  Trading
                </Link>
                <Link
                  to="/resources/sebi-guidelines"
                  onClick={closeMobileMenu}
                  className="block py-3 text-primary-500 hover:text-accent-500 transition-colors border-b border-gray-200"
                >
                  Resources
                </Link>
                <Link
                  to="/dashboard"
                  onClick={closeMobileMenu}
                  className="block py-3 text-primary-500 hover:text-accent-500 transition-colors border-b border-gray-200"
                >
                  Dashboard
                </Link>
                <Link
                  to="/learn"
                  onClick={closeMobileMenu}
                  className="block py-3 bg-primary-500 text-white rounded-lg text-center hover:bg-accent-500 transition-colors"
                >
                  Start Learning
                </Link>
              </nav>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Navigation;
