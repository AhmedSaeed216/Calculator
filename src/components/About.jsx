import React from 'react';

const About = () => {
  return (
    <div className="w-3/4 mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Our Calculator App</h1>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Purpose</h2>
        <p className="text-gray-600 leading-relaxed">
          Our calculator app is designed to provide a simple, user-friendly, and efficient tool for basic calculations. Whether you need to add, subtract, multiply, or divide, this app is here to make those calculations quick and accurate.
        </p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Features</h2>
        <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
          <li>Basic operations: Addition, subtraction, multiplication, and division</li>
          <li>Interactive and intuitive button layout for easy use</li>
          <li>Live display of entered numbers and real-time calculations</li>
          <li>Responsive design for various screen sizes</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          We believe that calculations should be accessible, fast, and accurate. This app was built with simplicity and functionality in mind to serve everyone from students to professionals. We hope this calculator app becomes your go-to tool for quick calculations, wherever you are.
        </p>
      </section>
      
    </div>
  );
};

export default About;
