import React, { useEffect } from 'react'
import NavbarDash from '../ComponentsResto/NavbarDash'
import Commander from '../ComponentsResto/Commander'
import { useNavigate  } from 'react-router-dom';

const Dashboard = () => {
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
      <Commander />
    </div>
  )
}

export default Dashboard