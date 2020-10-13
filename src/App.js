import React, { useState } from 'react'
import Navbar from "./components/navbar/Navbar";

import GlobalStyle from './css/Global';

const App = () => {
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
      <GlobalStyle />
    </>
  )
}

export default App;