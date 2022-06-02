import React from 'react';
import Blog from './container/blog/Blog.js';
import Features from './container/features/Features';
import Header from './container/header/Header';
import Possibility from './container/possibility/Possibility';
import Footer from './container/footer/Footer';
import WhatGPT3 from './container/whatGPT3/WhatGPT3';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        < Navbar/>
        < Header />
      </div>
        < Brand/>
        < WhatGPT3 />
        < Features />
        < Possibility />
        < CTA />
        < Blog />
        < Footer />
    </div>
  )
}

export default App
