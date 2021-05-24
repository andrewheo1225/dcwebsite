import '../../App.css';
import HeroSection from '../HeroSection.js';
import React from 'react'
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return(
        <>
         <HeroSection/>
         <Cards/>
         <Footer/>
        </>
    )
}
export default Home;