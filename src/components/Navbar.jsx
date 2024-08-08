import React from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[80px]' src={Logo} alt=''/>
      <Link to="/" className='text-blue-500 text-xl font-bold'>Home</Link>
      <Link to="/watchlist" className='text-blue-500 text-xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar