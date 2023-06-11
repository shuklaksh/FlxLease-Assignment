import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HotelDisplay from '../components/hotelDisplay/HotelDisplay'
import BookRooms from '../components/bookRoom/BookRooms'
import Reviews from '../components/bookRoom/Reviews'

function HomePage() {
  return (
    <>
      <Navbar /> 
      <HotelDisplay />
      <BookRooms />
      <Reviews />
    </>
  )
}

export default HomePage
