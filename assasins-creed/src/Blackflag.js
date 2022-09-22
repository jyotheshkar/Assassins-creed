import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import VideoPlayer from "react-video-js-player";
import legends from './video/legends.mp4';

const Blackflag = () => {
  const videoSrc = legends;
  const poster = " https://i0.wp.com/www.techarp.com/wp-content/uploads/2017/12/Assassins-Creed-IV-Black-Flag.jpg?fit=1000%2C500&ssl=1"
  return (
    <div>
        <div className=" ">
    
    <img src="https://www.cgwallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_sergey_zabelin_03_3440x1440.jpg&height=506&sharpen" 
    className=' bg-contain h-screen  w-[1367px] '/>
     
    
    <div className='w-[120px] '>    
    <Button variant='outlined' className='final' >
        <div className='h-[530px] mt-4 ' >
        <VideoPlayer src={videoSrc} poster={poster} className=" h-[280px] w-[420px] "/>
        <div className="mt-[27px] text-2xl font-semibold text-cyan-400 shadow-xl shadow-gray-500/50 "> <h1>Assasins Creed blackflag </h1></div>
        <div className="mt-[10px] text-cyan-400 shadow-xl font-bold "> Price : 14.41 $ </div>
        <div className="mt-[10px] text-cyan-400 shadow-xl font-bold " > available in  </div>
        <div className="mt-[10px] text-cyan-400 shadow-xl font-bold" >  PS4 / PS5 / XBOX 360 / XBOX ONE / XBOX SERIES X / PC </div>
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

export default Blackflag