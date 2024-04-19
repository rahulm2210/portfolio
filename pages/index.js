import { Inter } from "next/font/google";
import React from 'react';
import Header from "./header.js";
import Hero from "./hero.js";
import About from "./about.js";
import Qualify from "./qualify.js";
import Footer from "./footer.js";
import Work1 from './work1.js';
import Contact from "./contact.js";
import dynamic from 'next/dynamic';
const Work = dynamic(() => import('../public/assets/js/mainR.js'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Qualify />
        <Work1 />
        <Contact/>
      </main>
      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      <Work/>
    </>
  );
}
