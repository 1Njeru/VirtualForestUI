import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-scroll";



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
    {
      id: 5,
      link: "Blog",
    },
  ];
  
  return (
    <div className='lg:h-[105px] lg:w-[1447px] lg:pl-[-7] h-36
    flex flex-col lg:justify- justify-center items-center
    mx-auto from-neutral-300 bg-lime-300'>

<div className='lg:flex lg:gap-[300px]'>  
  <div className='lg:flex lg:gap-32'>
          <div className='lg:h-[105px] 
          lg:w-[327.03px] lg:gap-32'>
            <div className='grid justify-center lg:pt-6 
            lg:gap-32'>
       
          <div className=''>
         <img src={logo} alt='' />
        
        </div>
      
        </div>
        </div>
      
        
        <ul className="flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-8 cursor-pointer capitalize font-medium
             text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <div className=' rounded-xl h-[45px]
            flex justify-center bg-gray-600 w-[221.61px]'>
            <button className=' '>
                    Connect Wallet
                </button>
                </div>
      </ul>




        </div>
    </div>
    </div>
  )
}

export default Header;

