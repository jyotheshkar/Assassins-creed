import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Endofmerch = () => {
  return (
    <div className="border-t-2 border-gray-200  items-center pl-[490px] bg-gradient-to-b from-[#CED7DC] to-[#152238] text-white ">
        <h1 className='items-center ml-[-65px] my-1 text-gray-800 '>
        This website was developed by a fan who wants to share the beauty of this game 
        </h1>
        <h1>
       NOTE : I don't own any Copyrights ⓒ nor any Digital Content
        </h1>
        <h1 className="pl-[110px]" > continue to Main page </h1>
        <div className='pl-[138px] pb-[16px] '>         <Link to='/'>
<Button variant="outlined" className='buttons' > <img src='https://i.pinimg.com/564x/73/45/7d/73457df349830646f46ec10ec86d35f9.jpg' alt='/' 
className="h-[45px] w-[45px] rounded-2xl " />  </Button>
</Link> 

        </div>



    </div>
  )
}

export default Endofmerch