import React from 'react'
import { MainHeader } from "./HeaderStyles"
import { NavLink } from 'react-router-dom'

import { COLORS, FONTS, DEVICE, IMAGES } from "../../../Constants/Themes";
import Navbar from '../Navbar';


const Header = () => {
    return (
        <>
            <MainHeader>
                <NavLink to="/">
                    <img src={IMAGES.logo} alt="'my logo img" />
                </NavLink>
                <Navbar />
            </MainHeader>
        </>
    )
}

export default Header