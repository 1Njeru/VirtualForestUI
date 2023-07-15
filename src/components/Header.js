import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-scroll";
import { Icon } from '@iconify/react';




import {  } from 'react-icons/im'

const Header = () => {

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "faq",
    },
   
    {
      id: 4,
      link: "contact",
    },

  ];
  
  return (
    <div className='px-4 lg:px-0 '>
    <div className='lg:h-[105px] lg:w-[1447px] lg:pl-[-7] h-36
    flex flex-col lg:justify- justify-center items-center
    mx-auto from-neutral-300 bg-lime-300'>

<div className='lg:flex lg:gap-[300px]'>  
  <div className='lg:flex lg:gap-32'>
          <div className='lg:h-[105px] 
          lg:w-[327.03px] lg:gap-32'>
            <div className='grid justify-center lg:pt-6 
            lg:gap-32'>
       
          <button className=''>
      <li className='flex  hover:scale-105 hover:text-pink-600 items-center mb-3'>
<a href='https:///zuraverse.xyz/' target='_blank rel="noreferrer"'>
<img src={logo} alt='' />
</a>
</li>
         
        
        </button>
      
        </div>
        </div>

      
      <div className='px-4 flex justify-center items-center'>
        
        <ul className="flex items-center px-3 pt-2 mx-auto lg:pt-0">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="lg:px-8 px-4 cursor-pointer capitalize font-medium
             text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
          </li>
        ))}
        <div className='pl-3 flex items-center'>
<div className="lg:px-8 pr-4 cursor-pointer capitalize font-medium
             text-gray-500 hover:scale-105 duration-200 ">
                               <li className=''>
<a href='https://www.f6s.com/company/zuraverse' target='_blank rel="noreferrer"'>
Blog
</a>
</li>
  
  </div>
  
        <div className=' rounded-xl h-[45px] border-2
            flex justify-center lg:bg-gray-600 lg:w-[221.61px]'>
            <button className=' '>
                             <li className='flex  hover:scale-105 items-center'>
<a href='https://www.centralbank.go.ke//' target='_blank rel="noreferrer"'>
ConnectWallet
</a>
</li>
                </button>
                </div>
                <button className='pl-3 lg:pl-8 items-center'>
                <Icon icon="healthicons:ui-user-profile-outline" 
                className='w-10 h-10'/>
             
                </button>
                </div>
      </ul>
                  </div>




        </div>
    </div>
    </div>
    </div>

  )
}

export default Header;
