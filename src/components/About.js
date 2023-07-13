import React from 'react'

const About = () => {
  return (
    <div>
        <div className='grid justify-center px-8'>
        <h1 className='text-2xl'>About Us</h1>
        <div className='grid grid-cols-2 pt-10 gap-8'>
        <div className=''>
            <h2 className='text-xl'>Virtual Forest</h2>
            <div className='pt-4'>
            <span className='font-extralight'>Virtual Forest is a web based games that enables <br/>
            users to plant trees in the real world while sitting <br />
            on couch or work-desk!</span>
            </div>

            <img src='' alt='' />

            <h2 className='text-xl pt-8'>Zuraverse</h2>
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
           <img src='' alt='' />
            <h2 className='text-xl'>Planters Organization</h2>
            <div className='pt-4'>
            <span className='font-extralight'>Zuraverse is a novel Play-Earn-Converse model of<br />
            narrative based Web3 gaming. We are very <br />
            passionate about nature conservation and thus<br />
            Virtual Forest would help immensly to establish <br />
            the PEC model</span>
            </div>
        </div>

        </div>
    </div>
    <footer className='pt-4 flex justify-start'>
    <button className=' border-4 rounded-md border-gray-400 '>
                FAQ
            </button>
        </footer>
    </div>

  )
}

export default About;