import React from 'react';
import { Link } from 'react-router-dom';
import pricing from './assets/pricing.png';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray min-h-screen relative">
         {/* Semi-circle (moved to the top-left corner) */}
         <div className="overflow-hidden">
         <div className="absolute top-0 left-0 w-20 h-20  rounded-br-full bg-lightblue opacity-30"></div>
         <div className="absolute top-0 left-0 w-20 h-20  rounded-br-full transform rotate-155 bg-lightblue opacity-30"></div>
         </div>
      {/* Image */}
      <div className="mt-16 flex items-center">
        <img src={pricing} alt="Your Image" className="w-462 h-353 object-cover" />
      </div>
      
      {/* Text */}
      <div className="mt-8 text-center">
        <h1 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Simple Pricing For Your Business</h1>
        <h2 className="text-base md:text-lg lg:text-xl">Plans that are carefully tailored to suit your business</h2>
      </div>
      
      {/* Button */}
      <div className="mt-8">
        <Link to="/next" className="px-8 py-4 bg-bluish text-white rounded-md inline-block">Get Started</Link>
      </div>
      
      {/* Space below button */}
      <div className="mt-8"></div>
    </div>
  );
};

export default HomePage;
