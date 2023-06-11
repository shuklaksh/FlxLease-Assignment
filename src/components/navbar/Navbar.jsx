import React, { useState } from 'react'
import LoginModal from '../LoginModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [modalState, setModalState] = useState(false);

  const handleClick = () => {
    setModalState(!modalState);
  }
  const notify = (e) => toast('Under Progress', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <nav className='bg-white w-full py-4 border-b border-gray-200 md:flex md:justify-between'>
    <div className="right-nav flex ml-8 w-full items-center md:w-1/2 md:gap-24">
        <h1 id="logo" className="font-sans text-3xl subpixel-antialiased font-semibold">
            Tripster
        </h1>
        
        <ul className="navlinks hidden lg:flex justify-around gap-x-4 ">
            <li className='cursor-pointer text-gray-500 text-sm hover:text-gray-800' onClick={notify}>Properties</li>
            <li className='cursor-pointer text-gray-500 text-sm  hover:text-gray-800' onClick={notify}>Attraction</li>
            <li className='cursor-pointer text-gray-500 text-sm  hover:text-gray-800' onClick={notify}>Popular</li>
        </ul>
    </div>

      <div id="buttons" className="mr-8 hidden text-sm gap-x-6 md:flex justify-end w-1/2">
        <button className='rounded-full py-1.5 px-6 bg-white  hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-600' onClick={handleClick}> Sign Up</button>
        <button className='rounded-full py-1.5 px-6 bg-blue-600 hover:bg-blue-500 text-white border' onClick={handleClick} > Log in </button>
        <LoginModal show={modalState} handleClick={handleClick}/>
      </div>
      <ToastContainer />
    </nav>
  )
}

export default Navbar
