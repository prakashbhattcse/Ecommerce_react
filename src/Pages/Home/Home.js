import React from 'react'
import { COLORS, FONTS, DEVICE } from "../../Constants/Themes";
import { Wrapper } from "./HomeStyles"
import HeroSection from '../../Components/Home_Page/HeroSection/HeroSection';
import Services from '../../Components/Home_Page/Services/Services';
import Trusted from '../../Components/Home_Page/Trusted/Trusted';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection name="Prakash" />
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home