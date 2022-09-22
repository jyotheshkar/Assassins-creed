import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import videoBg from './video/videobackground.mp4';
import unity from './images/unity.png';
import syndicate from './images/syndicate.png';
import revelations from './images/revelations.png';
import chronicles from './images/chronicles.png';
import odysse from './images/odysse.png';
import creedthree from './images/creedthree.png';
import creedtwo from './images/creedtwo.png';
import { NavLink } from 'react-router-dom';



const Assassins = () => {
  

  return (

    
    <div className='h-screen w-full' >

<video src={videoBg} autoPlay loop muted className='h-[100vh] w-[100%] object-cover '   />
{/* first set */}

{/* odessy */}
<NavLink to='/Acodysse' >

<div className='absolute top-[46px] pl-[90px] '  >
<Button variant="outlined" className="keyB"   ><img src={odysse} alt="/" 
    className='rounded-2xl  h-[58px] w-[58px] ' /> 
    </Button>
</div> 
</NavLink  >

{/* creedthree */}
<NavLink to="/creedthree">
<div className='absolute top-[46px] pl-[1190px]  '  >
<Button variant="outlined" className="keyA"   ><img src={creedthree} alt="/" 
    className='rounded-2xl  h-[58px] w-[58px] ' /> </Button>
</div>
</NavLink>

{/* end of first set */}
{/* second set */}
{/* creedtwo */}
<NavLink to='/creedtwo'>
<div className='absolute top-[176px] pl-[1260px]  '  >
<Button variant="outlined" className="keyA" ><img src={creedtwo} alt="/" 
    className='rounded-2xl  h-[58px] w-[58px] ' /> </Button>
</div>

</NavLink>

{/* syndicate */}
<NavLink to='/syndicate'>
<div className='absolute top-[176px] pl-[20px]  '  >
<Button variant="outlined" className="keyA" ><img src={syndicate} alt="/" 
    className='rounded-2xl  h-[50px] w-[88px]  ' /></Button>
</div>
</NavLink>

{/* end if second set */}

{/* third set */}
{/* revelations */}
<NavLink to='/revelations'>
<div className='absolute top-[400px] pl-[1260px]  '  >
<Button variant="outlined" className="keyA" ><img src={revelations} alt="/" 
    className='rounded-2xl  h-[58px]    ' /></Button>
</div>


</NavLink>

{/* unity */}
<NavLink to='/unity'>
<div className='absolute top-[400px] pl-[20px]  '  >
<Button variant="outlined" className="keyA" ><img src={unity} alt="/" 
    className='rounded-2xl h-[55px] w-[50px] ' /></Button>
</div>

</NavLink>

{/* end if third set */}

{/* fourth set */}
{/* chronicles */}
<NavLink to='/chronicles'>
<div className='absolute top-[550px] pl-[1190px]  '  >
<Button variant="outlined" className="keyA" ><img src={chronicles} alt="/" 
    className='rounded-2xl h-[50px] w-[50px] ' /></Button>
</div>

</NavLink>


{/* blackflag */}
<NavLink to='/blackflag'>

<div className='absolute top-[550px] pl-[90px]  '  >
<Button variant="outlined" className="keyA" ><img src="https://i.pinimg.com/originals/1b/3b/fd/1b3bfdc72ca92e898c19df7d7feaa89e.png" alt="/" 
    className='rounded-2xl  h-[50px] w-[58px]  ' /></Button>
</div>
</NavLink>

{/* end if fourth set */}

{/* fifth set */}

{/* origins */}
<NavLink to='/origins'>
<div className='absolute top-[280px] pl-[1110px]  '  >
<Button variant="outlined" className="keyB" ><img src="https://i.pinimg.com/originals/05/d5/d0/05d5d0db9f1b7661da4b21e5f9301940.jpg" alt="/" 
    className='rounded-2xl  ' /></Button>
</div>

</NavLink>

{/* valhalla */}
<NavLink to='/valhalla'>
<div className='absolute top-[280px] pl-[180px]  '  >
<Button variant="outlined" className="keyA" > <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/0C3874F6_CA3E_44ED_BC13_FB46A850D9A4.jpeg" alt="/" 
    className='rounded-2xl  ' /></Button>
</div>

</NavLink>

{/* end if fifth set */}



  
<Link to='/'>
<Button variant="outlined" className='exit' > <img src='https://i.pinimg.com/564x/73/45/7d/73457df349830646f46ec10ec86d35f9.jpg' alt='/' 
className="h-[45px] w-[45px] rounded-2xl " />  </Button>
</Link>


      </div>
  )
}

export default Assassins