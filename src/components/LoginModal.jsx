import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({show,handleClick}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
     setOpen(show);
  },[show])
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
    handleClick();
  }
   
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='text-center' variant="h6" component="h2">
            Login/Signup
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleClose} className='w-full h-full flex flex-col gap-8'>
                <input 
                    type='email'
                    name='email'
                    placeholder='Enter email id'
                    id='email'
                    className='border w-full p-4'

                />
                <input 
                    type='email'
                    name='email'
                    placeholder='Enter password'
                    id='password'
                    className='border w-full p-4'
                />
                <button type='submit' className='rounded-full py-2 px-6 bg-blue-600 hover:bg-blue-500 text-white border'> Login/Signup </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}