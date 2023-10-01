import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarDash from '../ComponentsResto/NavbarDash';
import EmployerData from '../ComponentsResto/EmployerData';
import Footer from '../Components/Footer';

const Employer = () => {
    const navigate = useNavigate();

  

    useEffect(() => {
          const token = localStorage.getItem('token')
          if (!token) {
                  localStorage.removeItem('token')
                  navigate('/LoginResto');
          }
      }, [])
  
    return (
      <div>
        <NavbarDash />
        <EmployerData />
        <Footer/>
      </div>
    )
}

export default Employer