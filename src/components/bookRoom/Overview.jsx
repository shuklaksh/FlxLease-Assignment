import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShowerIcon from '@mui/icons-material/Shower';
import KeyIcon from '@mui/icons-material/Key';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import mapImage from '../../assets/images/mapImage.jpg';

function Overview() {
  return (
    <div className='mx-2 mt-6 flex justify-between'>
        <div>
            <h2 className='font-bold mb-4'>Property Overview</h2>
            <div className="features grid grid-rows-4 grid-cols-2 text-xs gap-4">
                <span className='text-gray-600'> <WifiIcon className='mr-4 text-gray-800'/> Free Wifi </span>
                <span className='text-gray-600'> <AcUnitIcon className='mr-4 text-gray-800'/> Air Conditioning </span>
                <span className='text-gray-600'> <ShowerIcon className='mr-4 text-gray-800'/> Private bathroom </span>
                <span className='text-gray-600'> <KeyIcon className='mr-4 text-gray-800'/> key card access </span>
                <span className='text-gray-600'> <LocalParkingIcon className='mr-4 text-gray-800'/> Free parking </span>
                <span className='text-gray-600'> <WatchLaterIcon className='mr-4 text-gray-800'/> 24-hour front desk </span>
            </div>
        </div>
        <div className="map w-1/5 hidden md:block">
            <img className='rounded-3xl h-full' src={mapImage} alt='map' /> 
        </div>
    </div>
  )
}

export default Overview
