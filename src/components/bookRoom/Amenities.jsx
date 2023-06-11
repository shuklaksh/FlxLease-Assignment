import React from 'react'
import RoomServiceIcon from '@mui/icons-material/RoomService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import DeskIcon from '@mui/icons-material/Desk';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';

function Amenities() {
  return (
    <div className='mx-2 mt-6 md:w-1/2' >
     <h2 className='font-bold mb-4'>Amenities</h2>
      <ul className = 'grid grid-rows-4 grid-cols-2 text-xs gap-4' >
        <li className='text-gray-600'> <span> <RoomServiceIcon  className='mr-4 text-gray-800'/> </span>Room Service</li>
        <li className='text-gray-600'><span> <DryCleaningIcon  className='mr-4 text-gray-800'/> </span>Laundary Service</li>
        <li className='text-gray-600'><span> <DeskIcon  className='mr-4 text-gray-800'/> </span>24-hour front desk</li>
        <li className='text-gray-600'><span> <LocalParkingIcon  className='mr-4 text-gray-800'/> </span>Free Parking</li>
        <li className='text-gray-600'><span> <AcUnitIcon  className='mr-4 text-gray-800'/> </span>Air Conditioning </li>
        <li className='text-gray-600'><span> <TvIcon  className='mr-4 text-gray-800'/> </span>Flat-screen TV</li>
      </ul>
    </div>
  )
}

export default Amenities
