import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import VideoPlayer from "react-video-js-player";
import legends from './video/legends.mp4';

const Creedthree = () => {
  const videoSrc = legends;
  const poster = "https://s1.gaming-cdn.com/images/products/2172/orig/assassin-s-creed-ii-pc-game-ubisoft-connect-cover.jpg?v=1649065089";
  return (
    <div className='bg-gray-600' >
        
        <div className=" ">
    
    <img src="https://wallpaperset.com/w/full/e/f/9/148056.jpg" 
    className=' bg-contain h-screen  '/>
     
    
    <div className='w-[120px] '>    
    <Button variant='outlined' className='final' >
        <div className='h-[530px] mt-4 ' >
        <VideoPlayer src={videoSrc} poster={poster} className=" h-[280px] w-[420px] "/>
        <div className="mt-[27px] text-2xl text-gray-300 font-semibold shadow-xl shadow-gray-500/50 "> <h1>Assasins Creed II </h1></div>
        <div className="mt-[10px] text-gray-300 shadow-xl font-bold "> Price : 10.01 $ </div>
        <div className="mt-[10px] text-gray-300  shadow-xl font-bold " > available in  </div>
        <div className="mt-[10px] text-gray-300 shadow-xl font-bold " >  PS4 / PS5 / XBOX 360 / XBOX ONE / XBOX SERIES X / PC </div>
        </div>
    </Button>
    </div>
    
    
    </div>
    <div className='pl-[900px] ' >
    <NavLink to='/assassins'>
    <Button variant="outlined" className='exitBeta' > <img src='https://i.pinimg.com/564x/73/45/7d/73457df349830646f46ec10ec86d35f9.jpg' alt='/' 
    className="h-[45px] w-[45px] rounded-2xl  " />  </Button>
    </NavLink>
    </div>
    

    </div>
  )
}

export default Creedthree