import React from 'react'

function Rooms() {
  return (
    <div className='mx-2 mt-6 mb-7 w-1/3'>
       <h2 className='font-bold mb-4'>Rooms</h2>
       <ul className='list-disc grid grid-rows-4 grid-cols-2 gap-3 text-sm text-gray-600 ml-4'>
        <li>Standard Room</li>
        <li>Holiday Suite</li>
        <li>King Size Room</li>
        <li>Studio Room </li>
        <li>Dorm Rooms</li>
        <li>Honeymoon Suite</li>
       
       </ul>
    </div>
  )
}

export default Rooms
