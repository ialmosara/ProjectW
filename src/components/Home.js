import React, { useState } from 'react'
import Navbar from "./navbar/Navbar";
import TopHome from './Sections/TopHome';
import Home2 from './Sections/Home2';
import Home3 from './Sections/Home3';
import Home4 from './Sections/Home4';
import Home5 from './Sections/Home5';

import GlobalStyle from '../style/Global';

const Home = () => {
    const [navbar, setnavbar] = useState();

    const handleNavbar = () => {
        setnavbar(!navbar);
    }

    return (
        <>
            <Navbar
                navbarState={navbar}
                handleNavbar={handleNavbar}
            />
            <TopHome/>
            <Home2/>
            <Home3/>
            <Home4/>
            <Home5/>
            <GlobalStyle />
        </>
    )
}

export default Home;