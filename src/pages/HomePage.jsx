import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HotelDisplay from '../components/hotelDisplay/HotelDisplay'
import BookRooms from '../components/bookRooms'

function HomePage() {
  return (
    <div>
      <Navbar /> 
      <HotelDisplay />
      <BookRooms />
    </div>
  )
}

export default HomePage
