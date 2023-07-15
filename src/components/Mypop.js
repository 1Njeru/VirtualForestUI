import React from 'react'
import Popups from './Popups'


function Mypop() {
    return (
        <div>
           
         <Popups trigger={true}>
            <div className='grid lg:w-60 items-center lg:justify-center py-3 lg:py-0
             '>
            <button>
                <div className='flex'>
                <h1>Water</h1>
            <span className=' font-extralight'>(unlimited)</span>
            </div>
            <div className='flex items-center'>
          pop
             <span className='grid font-light text-start pl-1'>
                Needed <br />
                Everyday
             </span>
             </div>
            </button>
            </div>
            </Popups>
            


        </div>
    )
}

export default Mypop
