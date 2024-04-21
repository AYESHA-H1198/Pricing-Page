import React from 'react';
import { FaCheck, FaShoppingCart, FaCommentDollar } from 'react-icons/fa';
import { TiArrowForward } from "react-icons/ti";
import { FaFireFlameCurved } from "react-icons/fa6";
import listing from './assets/listing.png';

const NextPage = () => {
  return (
    <div className="bg-gray min-h-screen relative">
      
      {/* Main Content */}
      <div className="bg-bluish w-full py-8 relative text-center">
        {/* Semicircles */}
        <div className="absolute top-0 left-0 w-20 h-20 rounded-br-full bg-lightblue opacity-30 z-0"></div>
        <div className="absolute top-0 left-0 w-20 h-20 rounded-br-full transform rotate-155 bg-lightblue opacity-30 z-0"></div>
        
        {/* Image */}
        <div className="py-10">
          <img src={listing} alt="Your Image" className="h-full object-cover mx-auto" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        
        {/* Text */}
        <div className="text-center">
          <h1 className="font-poppins text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Premium PRO</h1>
          <h1 className="font-poppins text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">$329</h1>
          <h2 className="text-base text-white md:text-lg lg:text-xl">Billed just once</h2>
        </div>
      </div>

      {/* Box */}
      <div className="bg-white w-full md:w-8/12 max-w-md p-4 mt-4 text-left rounded-lg relative z-10 mx-auto">
        <h2 className="font-bold">Access these features when you get this pricing package for your business.</h2>
        <div className="flex flex-col md:flex-row items-center mt-2">
          <FaCheck className="text-bluish mr-2 md:mr-4 text-xl md:text-3xl" />
          <p className="text-lg md:text-xl">International calling and messaging API</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-2">
          <FaCheck className="text-bluish mr-2 md:mr-4 text-xl md:text-3xl" />
          <p className="text-lg md:text-xl">Additional phone numbers</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-2">
          <FaCheck className="text-bluish mr-2 md:mr-4 text-xl md:text-3xl" />
          <p className="text-lg md:text-xl">Automated messages via Zapier</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-2">
          <FaCheck className="text-bluish mr-2 md:mr-4 text-xl md:text-3xl" />
          <p className="text-lg md:text-xl">24/7 support and consulting</p>
        </div>
        {/* Cart Button */}
        <div className="flex items-center mt-4">
          <FaShoppingCart className="text-bluish mr-2 text-3xl md:text-4xl" />
          <button className="bg-bluish text-white px-8 py-4 rounded-lg text-xl md:text-2xl">Buy Now</button>
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col md:flex-row items-center mt-8">
        <div className="flex items-center mb-4 md:mr-8">
          <FaCommentDollar className="text-gray-500 mr-2 md:mr-4 text-xl md:text-3xl" />
          <p className="font-bold text-lg md:text-xl">30 days money back Guarantee</p>
        </div>
        <div className="flex items-center mb-4 md:mr-8">
          <FaFireFlameCurved className="text-gray-500 mr-2 md:mr-4 text-xl md:text-3xl" />
          <p className="font-bold text-lg md:text-xl">No setup fees 100% hassle-free</p>
        </div>
        <div className="flex items-center">
          <TiArrowForward className="text-gray-500 mr-2 md:mr-4 text-xl md:text-3xl" />
          <p className="font-bold text-lg md:text-xl">No monthly subscription Pay once and for all</p>
        </div>
      </div>
    </div>
  );
};

export default NextPage;
