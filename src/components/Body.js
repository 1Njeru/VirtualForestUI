import React from 'react'


const Body = () => {
  return (
    <div className='mx-auto'>
        <div className='mx-auto '>

            <img src='https://picsum.photos/id/5/1400/550' alt='' />

        <div className='h-[70px] flex flex-row gap-8 pl-5 mx-auto
         justify-between'>

            <button>Seed Bag</button>
            <button>Water</button>
            <button>Manure</button>
            <div className=' flex items-center '>
            <button className=' lg:w-[440px] w-60
            py-2 bg-lime-500'>go</button>
            </div>
        </div>

        <div className='h-[80px] flex flex-row'>
            <div className='w-[80%] bg-cyan-300'></div>
            <div className='w-[20%] bg-lime-300'></div>

        </div>

        <div className='h-[200px] grid grid-cols-2 pl-6p pt-8
        justify-center gap-8'>
            <div className='grid'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <span></span>
            </div>
        </div>


        </div>
        <footer className='pt-4 flex justify-start'>
            <button className=' border-4 rounded-md border-gray-400 '>
             About
            </button>
        </footer>
      
    </div>
  )
}

export default Body;