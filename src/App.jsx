import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Screen from './components/Screen'; // Import the Screen component
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
      <>
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="bg-gray-800 p-1 mb-2 text-white">
          <ul className=' flex  flex-row gap-5 font-serif text-2xl p-4 m-3 '>
            <li className='hover:text-red-600 cursor-pointer hover:underline'><Link to="/">Home</Link></li>
            <li className='hover:text-red-600 cursor-pointer hover:underline'><Link to="/about">About</Link></li>
            <li className='hover:text-red-600 cursor-pointer hover:underline'><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Screen />} /> {/* Display the calculator here */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  );
};

export default App;