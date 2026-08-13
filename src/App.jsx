import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className='min-h-dvh border'></div>
    </main>
  );
};

export default App;