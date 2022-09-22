import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import VideoPlayer from "react-video-js-player";
import legends from './video/legends.mp4';
const Revelations = () => {
  const videoSrc = legends;
  const poster = " https://c4.wallpaperflare.com/wallpaper/571/847/666/assassins-creed-revelations-wallpaper-preview.jpg"
 
  return (
    <div>
       <div className=" ">
    
    <img src="https://images4.alphacoders.com/222/222124.jpg" 
    className='bg-contain h-screen w-[1376px]   '/>
     {/*  */}
    {/* https://c4.wallpaperflare.com/wallpaper/732/400/971/assassins-creed-revelations-wallpaper-preview.jpg */}
    <div className='w-[120px] '>    
    <Button variant='outlined' className='final' >
        <div className='h-[530px] mt-4 ' >
        <VideoPlayer src={videoSrc} poster={poster} className=" h-[280px] w-[420px] "/>
        <div className="mt-[27px] text-2xl font-semibold text-gray-300 shadow-xl shadow-gray-500/50 "> <h1>Assasins Creed revelations </h1></div>
        <div className="mt-[10px] text-gray-300 shadow-xl font-bold "> Price : 25.75 $ </div>
        <div className="mt-[10px] text-gray-300 shadow-xl font-bold " > available in  </div>
        <div className="mt-[10px] text-gray-300 shadow-xl font-bold" >  PS4 / PS5 / XBOX 360 / XBOX ONE / XBOX SERIES X / PC </div>
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
//https://wallpapercave.com/wp/wp2319157.jpg
export default Revelations