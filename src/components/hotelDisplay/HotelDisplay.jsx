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
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';



function HotelDisplay() {
  const hotelFeatures = [<Overview />,<Rooms />, <Amenities />, <Policies />];
  const [featureIndex,setFeatureIndex] = useState("0");

  const handleChange = (e,newValue) => {
    console.log(e.target.value)
    setFeatureIndex(newValue);
  }
  return (
    <div className='p-4 md:p-8 w-full grid grid-rows-1 h-5/6'>
      <ArrowBackIcon className='!hidden md:!block'/>
      <div className="image-section grid-cols-2 grid-rows-1 gap-4 mt-4 h-5/6 md:grid md:w-full"> 
        <div className="bedroom">
            <img src={bedroom} alt='bedroom' className='rounded-3xl h-full w-5/6 md:w-full'></img>
        </div>
        <div className="otherRooms grid-cols-2 grid-rows-2 gap-2 hidden md:grid">
            <img src={entryView} alt='entryView' className='rounded-3xl h-full w-full'></img>
            <img src={bedroom} alt='bedroom' className='rounded-3xl h-full w-full'></img>
            <img src={balcony} alt='balcony' className='rounded-3xl h-full w-full'></img>
            <img src={bathroom} alt='bathroom' className='rounded-3xl h-full w-full'></img>
        </div>
      </div>
      <div className="hotelCredentials mx-2 md:flex md:justify-between">
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
      <div className="hotelFeatures mx-2 mt-4 pb-1 w-screen md:w-full">
          <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={featureIndex}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" >
                <Tab className='!text-xs md:!text-base' label="Overview" value="0" />
                <Tab className='!text-xs md:!text-base'label="Rooms" value="1" />
                <Tab className='!text-xs md:!text-base'label="Amenities" value="2" />
                <Tab className='!text-xs md:!text-base'label="Policies" value="3"/>
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </div>
        {hotelFeatures[featureIndex - 0]}

    </div>
  )
}

export default HotelDisplay
