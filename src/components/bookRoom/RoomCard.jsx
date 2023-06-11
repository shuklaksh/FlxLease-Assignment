import HomeWorkIcon from '@mui/icons-material/HomeWork';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BedIcon from '@mui/icons-material/Bed';

function RoomCard({room}) {
  return (
    <div className='bg-white rounded-xl p-4 w-full h-full'>
        <div className="roomImage h-1/2">
            <img className= "w-full h-full rounded-xl" src={room.image} alt='bedroom'/>
        </div>
        <h2 className='text-lg text-slate-800 font-medium'>{room.name}</h2>
        <div className="roomInformation text-xs text-gray-600 font-light flex flex-col">
            <span> <HomeWorkIcon className='text-gray-800'/> : {room.size} </span>
            <span> <RemoveRedEyeIcon className='text-gray-800'/> : {room.people} </span>
            <span> <BedIcon className='text-gray-800'/> : {room.bedSize} </span>
        </div>
        <p className='text-xs text-gray-400 pt-2'>Non-refundable, Breakfast included</p>
        <button className='bg-blue-600 w-full p-1 mt-3 rounded-3xl text-white font-light'>${room.price}</button>

       
    </div>
  )
}

export default RoomCard
