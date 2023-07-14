import React from 'react'

import forest from '../assets/forest.png'
import vvv from '../assets/vvv.png'
import bh from '../assets/bh.png'

const About = () => {
  return (
    <div className='about'>
    <div className='flex justify-center'>
    <div className='lg:h-[1058px] lg:w-[1440px] lg:pl-[-310px] 
   '>
        <div className='grid justify-center px-8'>
        <h1 className='text-2xl'>About Us</h1>
        <div className='grid grid-cols-2 pt-10 gap-8'>
        <div className=''>
            <h2 className='text-xl'>Virtual Forest</h2>
            <div className='pt-4'>
            <span className='font-extralight'>Virtual Forest is a web based game that enables <br/>
            users to plant trees in the real world while sitting <br />
            on couch or work-desk!</span>
            </div>

            <div className='flex justify-end pr-10 lg:pt-[136px]'>
            <img src={vvv} alt='' className='w-[288px] h-[289px] border-spacing-2' />
            </div>

            <h2 className='text-xl lg:pt-8'>Zuraverse</h2>
            <div className='pt-4'>
            <span className='font-extralight'>Zuraverse is a novel Play-Earn-Converse model of<br /> 
                Web3 gaming. All our games and experiences are <br />
                being made interoperable and thus Virtual Forest <br />
                would be an integral part of the ecosystem to<br />
                establish PEC model.
            </span>
            </div>
        </div>
        <div>
        <img src={forest} alt='' className='w-[456px] h-[253px]' />
            <h2 className='text-xl lg:pt-12'>Planters Organization</h2>
            <div className='pt-4'>
            <span className='font-extralight'>Zuraverse is a novel Play-Earn-Converse model of<br />
            narrative based Web3 gaming. We are very <br />
            passionate about nature conservation and thus<br />
            Virtual Forest would help immensly to establish <br />
            the PEC model</span>
            </div>
            <img src={bh} alt='' className='w-[519px] 
             lg:pt-7 h-[334px]' />
        </div>


        </div>
        
    </div>
    <footer className='pt-4 flex justify-start'>
    <button className=' border-4 rounded-md border-gray-400 '>
                FAQ
            </button>
        </footer>

    </div>
  
    </div>
    </div>

  )
}

export default About;