import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import VideoPlayer from "react-video-js-player";
import legends from './video/legends.mp4';

const Creedthree = () => {
  const videoSrc = legends;
  const poster = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9585883-0c30-448b-8cee-6eac6d5c695f/dd34j12-e8c7bd1f-c298-47f3-80ae-73aa112965e5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q5NTg1ODgzLTBjMzAtNDQ4Yi04Y2VlLTZlYWM2ZDVjNjk1ZlwvZGQzNGoxMi1lOGM3YmQxZi1jMjk4LTQ3ZjMtODBhZS03M2FhMTEyOTY1ZTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YMpcQJKN_ZDcbWkaRxZUvL8zUPnTK_1k23IMKbHpGxc";
  return (
    <div className='bg-gray-600' >
        
        <div className=" ">
    
    <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/yeipi9zGRY5LPBEHalSdK/2ca11f6a75605c944dfe3585534f83f9/AC3R_Hero_Desktop_v2.jpg" 
    className=' bg-contain h-screen  '/>
     
    
    <div className='w-[120px] '>    
    <Button variant='outlined' className='final' >
        <div className='h-[530px] mt-4 ' >
        <VideoPlayer src={videoSrc} poster={poster} className=" h-[280px] w-[420px] "/>
        <div className="mt-[27px] text-2xl text-gray-900 font-semibold shadow-xl shadow-gray-500/50 "> <h1>Assasins Creed III </h1></div>
        <div className="mt-[10px] text-gray-900 shadow-xl font-bold "> Price : 14.81 $ </div>
        <div className="mt-[10px] text-gray-900  shadow-xl font-bold " > available in  </div>
        <div className="mt-[10px] text-gray-900 shadow-xl font-bold " >  PS4 / PS5 / XBOX 360 / XBOX ONE / XBOX SERIES X / PC </div>
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