import React, { useState } from 'react'
import LoginModal from '../LoginModal';

function Navbar() {
  const [modalState, setModalState] = useState(false);
  const handleClick = () => {
    setModalState(!modalState);
  }
  return (
    <nav className='sticky top-0 bg-white flex items-center w-full justify-between py-4 border-b border-gray-200'>
    <div className="right-nav flex items-center w-1/3 justify-around">
        <h1 id="logo" className="font-sans text-3xl subpixel-antialiased font-semibold">
            Tripster
        </h1>
        <ul className="navlinks flex justify-around gap-x-4">
            <li className=' text-gray-500 text-sm'>Properties</li>
            <li className=' text-gray-500 text-sm'>Attraction</li>
            <li className=' text-gray-500 text-sm'>Popular</li>
        </ul>
    </div>
     
      <div id="buttons" className="flex text-sm gap-x-6 mr-8">
        <button className='rounded-full py-1.5 px-6 bg-white  hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-600' onClick={handleClick}> Sign Up</button>
        <button className='rounded-full py-1.5 px-6 bg-blue-600 hover:bg-blue-500 text-white border' onClick={handleClick} > Log in </button>
        <LoginModal show={modalState} handleClick={handleClick}/>
      </div>
    </nav>
  )
}

export default Navbar
