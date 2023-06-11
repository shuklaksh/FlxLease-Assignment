import React, { useState } from 'react'
import LoginModal from '../LoginModal';

function Navbar() {
  const [modalState, setModalState] = useState(false);
  const handleClick = () => {
    setModalState(!modalState);
  }
  return (
    <nav className='bg-white w-full py-4 border-b border-gray-200 md:flex justify-between'>
    <div className="right-nav w-full lg:flex items-center lg:w-1/3 justify-around">
        <h1 id="logo" className="font-sans text-3xl subpixel-antialiased font-semibold">
            Tripster
        </h1>
        <ul className="navlinks hidden lg:flex justify-around gap-x-4 ">
            <li className='cursor-pointer text-gray-500 text-sm hover:text-gray-800'>Properties</li>
            <li className='cursor-pointer text-gray-500 text-sm  hover:text-gray-800'>Attraction</li>
            <li className='cursor-pointer text-gray-500 text-sm  hover:text-gray-800'>Popular</li>
        </ul>
    </div>
     
      <div id="buttons" className="mr-8 hidden lg:flex text-sm gap-x-6 md:flex">
        <button className='rounded-full py-1.5 px-6 bg-white  hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-600' onClick={handleClick}> Sign Up</button>
        <button className='rounded-full py-1.5 px-6 bg-blue-600 hover:bg-blue-500 text-white border' onClick={handleClick} > Log in </button>
        <LoginModal show={modalState} handleClick={handleClick}/>
      </div>
    </nav>
  )
}

export default Navbar
