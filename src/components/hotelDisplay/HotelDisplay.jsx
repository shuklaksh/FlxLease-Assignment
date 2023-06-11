import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bedroom from '../../assets/images/bedroom.jpeg'
import balcony from '../../assets/images/balcony.jpeg'
import bathroom from '../../assets/images/bathroom.webp'
import entryView from '../../assets/images/entryView.jpeg'
import Overview from '../bookRoom/Overview';
import Policies from '../bookRoom/Policies';
import Rooms from '../bookRoom/Rooms';
import Amenities from '../bookRoom/Amenities';

function HotelDisplay() {
  const hotelFeatures = [<Overview />,<Rooms />, <Amenities />, <Policies />];
  const [featureIndex,setFeatureIndex] = useState(0);

  const handleClick = (e) => {

    setFeatureIndex(e.target.value);
  }
  return (
    <div className='p-8 w-full grid grid-rows-1 h-5/6'>
      <ArrowBackIcon />
      <div className="image-section grid grid-cols-2 grid-rows-1 gap-4 mt-4 h-5/6 "> 
        <div className="bedroom">
            <img src={bedroom} alt='bedroom' className='rounded-3xl h-full w-full'></img>
        </div>
        <div className="otherRooms grid grid-cols-2 grid-rows-2 gap-2">
            <img src={entryView} alt='entryView' className='rounded-3xl h-full w-full'></img>
            <img src={bedroom} alt='bedroom' className='rounded-3xl h-full w-full'></img>
            <img src={balcony} alt='balcony' className='rounded-3xl h-full w-full'></img>
            <img src={bathroom} alt='bathroom' className='rounded-3xl h-full w-full'></img>
        </div>
      </div>
      <div className="hotelCredentials mx-2 flex justify-between">
       <div className="hotelName">
            <h2 className = "text-xl font-bold" >Hotel Norrebro</h2>
            <p className='text-gray-500 text-sm'>3 star hotel located in heart of Copenhagen</p>
       </div>
       <div className="hotelRating flex items-center gap-2">
            <div className="textRating">
                <h3 className='text-green-600 text-semibold text-lg'>Excellent</h3>
                <p className='text-gray-400 text-xs'>1920 reviews</p>
            </div>
            <div className="numericRating bg-green-100 rounded-full  h-1/2 px-4">
                <p className='text-green-600 text-semibold text-base align-center' >9.6</p>
            </div>
       </div>
      </div>
      <div className="hotelFeatures mx-2 mt-4 pb-1 border-b">
          <ul className="featers flex gap-24 ml-8 text-gray-500">
              <li onClick={handleClick} value={0}> Overview </li>
              <li onClick={handleClick} value={1}> Rooms </li>
              <li onClick={handleClick} value={2}> Amenities </li>
              <li onClick={handleClick} value={3}> Policies </li>
          </ul>
        </div>
        {hotelFeatures[featureIndex]}

    </div>
  )
}

export default HotelDisplay
