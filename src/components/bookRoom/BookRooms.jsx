import React from 'react'
import { roomData } from '../../assets/data/RoomData'
import RoomCard from './RoomCard'


function BookRooms() {
  return (
    <div className='bg-gray-100 p-8'>
      <h2 className='text-semibold text-lg mb-2'>Rooms</h2>
      <div className="BookRooms flex flex-col gap-4 lg:grid grid-cols-4 grid-rows-1 ">
        {roomData.map((room,index) => {
            return (
                <RoomCard key={index} room={room} />
            )
        })}
      </div>
    </div>
  )
}

export default BookRooms
