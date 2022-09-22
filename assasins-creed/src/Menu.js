

import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import Button from '@mui/material/Button';
import images5 from './images/img5.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Menu = () => {
  const history = useHistory()

  return (
    <div  className='  bg-[url(https://i.ytimg.com/vi/3TVF4eM1gdM/maxresdefault.jpg)] w-[1125px] ' >
 
        {/* social icons access*/}
       <div className='flex justify-start mt-[200px]  mx-4   '>
       {/* // <Link to="https://www.youtube.com"  > */}
<Link to='https://www.billboard.com/photos/blackpink-shut-down-music-video-easter-eggs-1235140518/'>
< TwitterIcon className=' text-red-600 mx-4 hover:bg-red-600 hover:text-gray-300 rounded-xl cursor-pointer shadow-lg shadow-red-500/100 '/>
</Link>
        < FacebookIcon className=' text-red-600 mx-4  hover:bg-red-600 hover:text-gray-300 rounded-xl cursor-pointer shadow-lg shadow-red-500/100 '/>
       <InstagramIcon className=' text-red-600 mx-4 cursor-pointer hover:bg-red-600 hover:text-gray-300 rounded-xl shadow-lg shadow-red-500/100 '/>
      <YouTubeIcon className=' text-red-600 mx-4 cursor-pointer hover:bg-red-600 hover:text-gray-300 rounded-xl shadow-lg shadow-red-500/100 '/>
      < SportsEsportsRoundedIcon className=' text-red-600 mx-4 cursor-pointer hover:bg-red-600 hover:text-gray-300 rounded-xl shadow-lg shadow-red-500/100 '/>

        </div>
 
 <div className='mt-[320px] flex justify-between mr-8 ml-8 ' >

          {/* merchandise button  */}
    
          <Button variant="outlined" className='button' 
       onClick = { () => history.push('/merch') }
          > <div >
            <img src={images5} alt='/'
            className='w-8 mx-2  ' />
             </div> <div className='font-create' >merchandise</div> </Button>
         

          {/* assassins path button  */}
             <Button variant="outlined" className='button' 
              onClick = { () => history.push('/assassins') }
             > <div >
            <img src={images5} alt='/'
            className='w-8 mx-2  ' />
             </div> <div className='font-create' >assassins path</div> </Button>

</div>


 </div>


  
  )
 }
 
 
 export default Menu;
 
 
