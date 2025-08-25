import React from 'react';
import Navigation from '../../components/sections/Navigation/Navigation';
import Footer from '../../components/sections/Footer';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        <Navigation />
      </header>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary-500 mb-8">Profile</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-primary-500 mb-6">User Profile</h2>
          <p className="text-gray-600">Profile management features coming soon...</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
