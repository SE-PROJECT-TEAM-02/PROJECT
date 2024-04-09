import React from 'react';
import Navbar from '../Navbar/HomeNavbar';
import Hero from './Hero';
import Search from './Search';
import Book from './Book';
import Discover from './Discover';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Search />
        <Book />
        <Discover />
        <About />
        <Contact />
    </>
  );
};

export default Home;