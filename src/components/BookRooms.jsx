import React from 'react'
import { roomData } from '../assets/data/RoomData'
import RoomCard from './RoomCard'


function BookRooms() {
  return (
    <div className='bg-gray-100 p-8 pb-12'>
      <h2 className='text-semibold text-lg mb-2'>Rooms</h2>
      <div className="BookRooms grid grid-cols-4 grid-rows-1 justify-between pl-4">
        {roomData.map((room) => {
            return (
                <RoomCard room={room} />
            )
        })}
      </div>
    </div>
  )
}

export default BookRooms
