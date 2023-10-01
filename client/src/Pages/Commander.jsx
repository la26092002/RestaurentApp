import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import IdentityFormOne from '../Components/IdentityFormOne'
import CommanderMenu from '../Components/CommanderMenu'

const Commander = () => {
  const user = localStorage.getItem("user");
  return (
    <div>
        <Navbar />
        {user ? <CommanderMenu /> : <IdentityFormOne />}
        
        <Footer />
    </div>
  )
}

export default Commander