import React from 'react';
import Button from '@mui/material/Button';

const Intomerch = () => {
  return (
    <div>
        {/* card1 */}
        <div className="flex justify-between mr-[250px] ml-[150px] pt-[20px]">
        <Button variant="outlined" className='novelsA' > </Button>

     <Button variant="outlined" className='novelsB' > </Button>

        </div>
        
{/* card 2 */}

        <div className="flex justify-between mr-[99px] mt-[40px]">
        <Button variant="outlined" className='novelsC' ></Button>

     <Button variant="outlined" className='novelsD' >  </Button>

        </div>

{/* card3 */}

<div className="flex justify-between mr-[240px] ml-[150px] mt-[40px] ">
        <Button variant="outlined" className='novelsE' ></Button>

     <Button variant="outlined" className='novelsF' >  </Button>

        </div>




    </div>
  )
}

export default Intomerch