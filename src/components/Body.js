import React from 'react'
import tree from '../assets/tree.png'


const Body = () => {
  return (
    <div className='home'>
    <div className='mx-auto lg:w-[1440px] lg:h-[1363px] 
    lg:pt-[-358px] 
    lg:border-[1px] lg:pl-[-310px] bg-blend-overlay'>
        <div className='mx-auto '>

            <div>
            <img src='https://picsum.photos/id/5/1400/550' alt='' 
            className='lg:w-[1447px] lg:h-[625px] '/>
            </div>

        <div className='lg:h-[118px] lg:w-[1447] flex  
        gap-8 pl-5 mx-auto justify-evenly'>

            <button>Seed Bag</button>
            <button>Water</button>
            <button>Manure</button>
            <div className=' flex items-center '>
            <button className=' lg:w-[440px] w-60
            py-2 bg-lime-500'>go</button>
            </div>
        </div>

        <div className='lg:h-[153px] lg:w-[1447] flex flex-row'>
            <div className='w-[80%] bg-gradient-to-tr from-sky-500 to-gray-300'></div>
            <div className='w-[20%] bg-lime-300'></div>

        </div>

        <div className='justify-evenly mx-auto'>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:pl-6 pt-8 gap-8 '>
            <div className='grid lg:w-[591px] pl-6 lg:h-[97px] 
            justify-evenly mx-auto'>
                <div className='grid grid-cols-2 pt-6'>
                <div className=' grid '>
                <h1 className='font-extrabold'>Stages</h1>
                <span className=''>Seeding (Day 0-4)</span>
                <span className=' '>Saping (Day5-14)</span>
                <span className=' '>Tree (Day 15)</span>
                </div>


                <div className='grid lg:pl-28 justify-between'>
                    <div>
                <h1 className=' font-semibold'>Tools</h1>
                <span className=' '>Water:Needed Everyday</span>
                <span className=' '>Manure: Speeds up by 2 days</span>
                </div>

                </div>
                </div>
 
            </div>
            <div className='flex flex-row lg:pt-0 pt-8
             justify-center items-center 
    lg:justify-start  
    mx-auto'>
            <div className='lg:w-[667] lg:h-[328] '>
            <div className='w-[249px] h-[29px] '>    
            <h1 className='font-semibold text-xl'>Upcoming Collectible</h1>
            </div>
            <div className='flex gap-6 pt-3'>
            <div>
                <img src={tree} alt='' className='w-[291px] h-[287px]' />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Tree NFT</h1>
                <span>The virtual twin of a real sapling planted by <br />
                your efforts and contributions. This sapling would be <br />
                geotagged and its updates would be store on <br />
                hashgraph, a distributed ledger to ensure <br />
                transparency and authenticity and it will keep it <br />
                monitorable and tamperproof </span>

       
            <br />

            <span className='text-xl pt-3'>12 days to go!</span>
            <div className='pt-5'>
            <div className='h-[36px] rounded-xl
            flex justify-center bg-gray-600 w-[117px]'>
            <button className=' '>
                    Mint Now
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
            <button className=' border-4 rounded-md 
            border-gray-400 '>
             About
            </button>
        </footer>
    </div>
    </div>

    </div>
  )
}

export default Body;