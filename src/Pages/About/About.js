import React from 'react'
import HeroSection from '../../Components/Home_Page/HeroSection/HeroSection'
import { useProductContext } from '../../Context/productcontex'

const About = () => {

const {myName} = useProductContext();
  return (
    <>
    {myName}
    <HeroSection name="About"/>
    </>
  )
}

export default About