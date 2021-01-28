import React from 'react';
import Head from 'next/head';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Intro } from '../components/Intro';
import { Navbar } from '../components/Navbar';
import { Portafolio } from '../components/Portafolio';
import { Experience } from '../components/Experience';

const Home = () => {
  return (
    <>
      <Head>
        <title>Portafolio</title>
      </Head>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Portafolio />
      <Footer />
    </>
  );
};

export default Home;
