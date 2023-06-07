import HomeWorkIcon from '@mui/icons-material/HomeWork';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BedIcon from '@mui/icons-material/Bed';

function RoomCard({room}) {
  return (
    <div className='bg-white rounded-lg p-2 w-11/12 h-full '>
        <div className="roomImage h-3/5">
            <img className= "w-full h-full rounded-xl" src={room.image} alt='bedroom'/>
        </div>
        <h2 className='text-lg text-slate-800 font-medium'>{room.name}</h2>
        <div className="roomInformation text-sm text-gray-800 font-light flex flex-col">
            <span> <HomeWorkIcon /> : {room.size} </span>
            <span> <RemoveRedEyeIcon /> : {room.people} </span>
            <span> <BedIcon /> : {room.bedSize} </span>
        </div>
        <p className='text-xs text-gray-400 pt-2'>Non-refundable, Breakfast included</p>
        <button className='bg-blue-600 w-full p-1 mt-2 rounded-3xl text-white font-light'>${room.price}</button>

       
    </div>
  )
}

export default RoomCard
