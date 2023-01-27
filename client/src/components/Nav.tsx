import React from 'react'
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
}
  return (
    <nav className='w-screen h-20 flex justify-center items-center my-4 font-mono'>
        <h1 onClick={handleBack} className='text-5xl text-red-300 cursor-pointer'>THE MILK STORE</h1>
    </nav>
  )
}

export default Nav