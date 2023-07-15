import React from 'react'
import tree from '../assets/tree.png'
import { Icon } from '@iconify/react';
import world from '../assets/world.png'




const Body = () => {


    
  return (
    <div className='home'>
    <div className='mx-auto lg:w-[1440px] lg:h-[1363px] 
    lg:pt-[-358px] 
    lg:border-[1px] lg:pl-[-310px] bg-blend-overlay'>
        <div className='mx-auto '>

    
            <div>
            <img src={world} alt='' 
            className='lg:w-[1447px] lg:h-[625px] '/>
            </div>


      
        <div className='lg:h-[118px] pt-9 lg:pt-0 lg:w-[1447] justify-center items-center
        pl-5 mx-auto lg:justify-evensly flex  lg:flex-cols-1 '>

      <div className='flex flex-cols-2 lg:flex-cols-1 lg:gap-12'>
       <div className='lg:flex grid lg:gap-14  '>


      <div className='grid items-center lg:w-60 justify-center '>
            <button>
                <div className='flex '>
                <h1>Seed Bag</h1>
            <span className=' font-extralight'>(refills everyday)</span>
            </div>
            <div className='flex items-center'>
            <Icon icon="game-icons:fertilizer-bag"className='bg-yellow-300
             w-16 h-16 rounded-[50%] p-3'/>
             <span className='grid font-light text-start pl-1'>
                Total:1  
             </span>
             </div>
            </button>
            </div>


            
            <div className='grid lg:w-60 items-center lg:justify-center py-3 lg:py-0
             '>
            <button>
                <div className='flex'>
                <h1>Water</h1>
            <span className=' font-extralight'>(unlimited)</span>
            </div>
            <div className='flex items-center'>
            <Icon icon="solar:waterdrop-broken" className='bg-blue-300
             w-16 h-16 rounded-[50%] p-3'/>
             <span className='grid font-light text-start pl-1'>
                Needed <br />
                Everyday
             </span>
             </div>
            </button>
            </div>
            


            <div className='grid items-center lg:w-60 justify-center'>
            <button>
                <div className='flex'>
                <h1>Manure</h1>
            <span className=' font-extralight'>(Speeds up growth)</span>
            </div>
            <div className='flex items-center'>
            <Icon icon="fluent-emoji-flat:mountain" className='bg-orange-500
             w-16 h-16 rounded-[50%] p-3'/>
             <span className='grid font-light text-start pl-1'>
                Total:0  
             </span>
             </div>
            </button>
            </div>
            </div>

                
<div  classname='grid gap-4'>
                <div className='flex'>
   <div className='h-[36px] rounded-xl
            flex justify-center bg-green-600 w-[117px]'>
            <button className=' '>
            <li className='flex  hover:scale-105 items-center'>
<a href='' target='_blank rel="noreferrer"'>
Buy Now
</a>
</li>
                </button>
                </div>

                   <div className='h-[36px] rounded-xl
            flex justify-center bg-green-900 w-[117px]'>
            <button className=' '>
            <li className='flex  hover:scale-105 items-center'>
<a href='' target='_blank rel="noreferrer"'>
Watch Ad
</a>
</li>
                </button>
                </div>
                </div>
                <div>
                <span>Proceeds go to Planters Organization</span>
                </div>
                </div>
                </div>

                

            <div className=' flex items-center lg:pl-0 pl-5 '>
            <button className=' lg:w-[440px] w-60
            py-2 bg-lime-500'>
                <div className=' flex justify-start items-center pl-3'>
                <Icon icon="game-icons:fertilizer-bag" className='w-16 h-16
                bg-white ' />
                <div className='pl-4 text-start'>

                            <li className='flex  hover:scale-105 items-center'>
<a href='https://zuraverse.xyv/' target='_blank rel="noreferrer"'>
  <span className=''>Get Extra and Rare Seeds </span> <br />
                 <span className='font-extralight'>Proceeds go to Planters Organization</span>
                                </a>
</li>
                 </div>
                </div>

               
            </button>
            </div>
        </div>
        </div>
        


        <div className='lg:h-[153px] lg:w-[1447] 
         flex flex-row pt-9 lg:pt-0 mx-auto'>
            <button className=' mx-auto w-[80%] bg-gradient-to-tr flex hover:scale-95 duration-1000
             from-sky-500 to-gray-300 lg:items-center'>
                <div className='flex justify-center 
                lg:items-center'>

                
                    <div className='flex lg:gap-60  items-center 
                    gap-10 lg:items-center pl-6 pr-5 lg:pl-36 text-white'>
                    <span className='text-4xl'>PLACE <br /> YOUR</span>
                    <span className='lg:text-8xl justify-center'>A
                    D</span>
                    <span className='text-4xl'>HERE</span>
                    </div>
                </div>
             </button>

                        
             <div className='grid bg-lime-300 p-2 '>
            <div className='text-sm
            flex lg:items-center'>Ads Support
            the Planters Organization. Subscribe to remove.
            </div>
            <div className='h-[36px] rounded-xl
            flex justify-center bg-green-600 w-[117px]'>
            <button className=' '>
            <li className='flex  hover:scale-105 items-center'>
<a href='https://sapio.netlify.com/' target='_blank rel="noreferrer"'>
Subscribe
</a>
</li>
                </button>
                </div>
            </div>

        </div>

        <div className='justify-evenly mx-auto'>



        <div className='grid lg:grid-cols-2 grid-cols-1 lg:pl-6 pt-8 gap-8 '>
            <div className='grid lg:w-[591px] pl-6 lg:h-[97px] 
            justify-evenly mx-auto lg:pt-4'>

                <div className='grid grid-cols-2 lg:pl-16 pt-6 '>

                <div className=' grid '>
                <h1 className='font-extrabold'>Stages</h1>
                <span className=''>Seeding (Day 0-4)</span>
                <span className=''>Saping (Day5-14)</span>
                <span className=''>Tree (Day 15)</span>
                </div>


                <div className='grid lg:pl-28 lg:justify-between'>
                    <div className='grid'>
                <h1 className=' font-semibold'>Tools</h1>
                <span className=''>Water:Needed Everyday</span>
                <span className=''>Manure: Speeds up by 2 days</span>
                </div>

                </div>
                </div>
            </div>



            <div className='flex flex-row lg:pt-0 pt-8
             justify-center items-center 
    lg:justify-start  
    mx-auto'>
            <div className='lg:w-[667] lg:h-[328] px-8'>
            <div className='w-[249px] h-[29px] '>    
            <h1 className='font-semibold text-xl'>Upcoming Collectible</h1>
            </div>
            <div className='flex gap-6 pt-3'>
            <div>
                <img src={tree} alt='' className='w-[291px] h-[287px]' />
            </div>
            <div className='pl-4 lg:pl-0'>
                <h1 className='text-xl font-semibold'>Tree NFT</h1>
                <span>The virtual twin of a real sapling planted by <br />
                your efforts and contributions. This sapling would be <br />
                geotagged and its updates would be store on <br />
                hashgraph, a distributed ledger to ensure <br />
                transparency and authenticity and it will keep it <br />
                monitorable and tamperproof </span>

       
            <br />
            <div className='pt-4'>
            <span className='text-xl'>12 days to go!</span>
            </div>
            <div className='pt-5'>
            <div className='h-[36px] rounded-xl
            flex justify-center items-center bg-gray-600 w-[117px]'>


        
            <button className='flex '>
                       <li className='flex  hover:scale-105 hover:text-green-600 items-center'>
<a href='https://zuraverse.xyz/' target='_blank rel="noreferrer"'>
Mint Now
</a>
</li>
                </button>
                </div>
            </div>
            </div>
           
            <div>
             
            </div>
            </div>
            </div>
        </div>
        </div>
     

        </div>

        <footer className='pt-4 flex justify-start'>
  
        </footer>
    </div>
    </div>

    </div>
  )
}

export default Body;
