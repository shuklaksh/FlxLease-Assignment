import React from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PetsIcon from '@mui/icons-material/Pets';
import PaidIcon from '@mui/icons-material/Paid';

function Policies() {
  return (
    <div className='mx-2 mt-6 w-1/2'>
       <h2 className='font-bold mb-4'>Policies</h2>
      <ul className='grid grid-rows-2 grid-cols-2 gap-2'>
        <li>
          <h3 className='font-bold text-sm text-gray-600'>  <span className=' text-gray-800'><WatchLaterIcon /> </span> Check-in/Check-out times</h3>
          <p className='ml-8 text-sm text-gray-600 mb-1'>Check-in from 11:00 AM until 11:30 PM</p>
          <p className='ml-8 text-sm text-gray-600'>Check-out from 11:00 AM until 12:00 PM</p>
        </li>
        <li>
          
          <h3 className='font-bold text-sm'><span> <PetsIcon className=' text-gray-800'/></span> Pets </h3>
          <p className='ml-8 text-sm text-gray-600'>Pets are not allowed</p>
        </li>
        <li>
        
          <h3 className='font-bold text-sm'> <span> <PaidIcon className=' text-gray-800'/> </span>Accepted payments methods</h3>
          <p className='ml-8 text-sm text-gray-600'>Card only</p>
        </li>
      </ul>
    </div>
  )
}

export default Policies
