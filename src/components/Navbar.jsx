import React from 'react'
import Logo from '../assets/logo.svg'
function Navbar() {
  return (
    <div className='bg-stone-100'>
    <nav className='flex w-full pt-4 pb-4 justify-around'>
        <img className='w-16' src={Logo} alt="" />
        <ul className='flex gap-10 text-lg '>
          <li><a className='hover:text-slate-600 hover:border-b-2 border-slate-400' href="/">Home</a></li>
          <li><a className='hover:text-slate-600 hover:border-b-2 border-slate-400' href="/about">About</a></li>
          <li><a className='hover:text-slate-600 hover:border-b-2 border-slate-400' href="/contact">Contact</a></li>
        </ul>
        <div className='flex gap-6'>  
        <button className='border-2 py-1 px-3 font-bold border-black rounded-md hover:border-sky-700 hover:text-sky-700'>Login</button>
        <button className='border-2 py-1 px-3 font-bold border-black rounded-md hover:border-emerald-600 hover:text-emerald-600'>SignIn</button>
        </div>
  
    </nav>
    </div>
  )
}

export default Navbar
