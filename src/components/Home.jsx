
import React from 'react';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Title from './Title';
import About from './About';


export default function Home() {
  return (
    <div>
      <Title />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}
