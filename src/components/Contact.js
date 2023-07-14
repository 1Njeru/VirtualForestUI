import React from 'react'




const Contact = () => {
  return (


 <div className='contact'>

     <div className=' mx-auto lg:w-[1440px] lg:h-[841px] 
     grid justify-center lg:justify-center bg-green-100
      text-black pb-10'>
    <div className=''>

    <div className=''>
    <h1 className=' text-gray-400 flex lg:justify-start  
    lg:pt-14 lg:pl-[101px] pt-14 justify-center'>contact form</h1>
    </div>


   {/* w & h big container */}
   <div className='lg:flex text-center justify-center 
   lg:justify-start 
   lg:w-[1238px] lg:h-[615px]
   gap-10 lg:pt-[123px] lg:pl-[101px]'>
  
   <div
    className='mx-auto flex justify-evenly  ' >
    <div className=' grid grid-cols-2 lg:justify-start  
    mx-auto'>

    <div className='flex flex-row justify-center items-center 
    lg:justify-start 
    mx-auto'>

      {/*w & h first container  */}
      <div className='lg:w-[538px] lg:h-[569px]'>
<div className='flex flex-col pt-16 lg:pt-0 
lg:text-start mx-auto'>
<h1 className='text-4xl '>Let's Talk</h1>
<div className='pt-6 flex
lg:text-start '>
<span className='flex lg:text-start'>Have an interesting idea for 
conservation,<br />
sustainability or gaming? Lets get in touch and build <br />
a better future. </span>
</div>

<div className='pt-8 lg:text-start h-[85px] w-[168px] '>
    <h1 className='text-3xl '> Email</h1>
    <div className='pt-2'>
    <span className=''>sagar@zuraverse.com</span>
</div>
</div>

<div className='h-[173px] w-[102px] '>
<div className='pt-9 '>
<h1 className='text-3xl'> Socials</h1>
<div className='pt-2 grid'>
    <span className=''> instagram </span>
    <span className=''> instagram </span>
    <span className=''> instagram </span>
   </div>
   </div>
   </div>
   </div>


   </div>
   </div>
   </div>
   </div>

    {/*sec container */}
    <div className='lg:w-[565px] lg:h-[615px]'>
    <div className='pt-8 lg:pt-0'>
    <form className=' mx-auto'> 
    <div className=' text-black mx-auto'>


    <form action="https://getform.io/f/27b21687-26f0-47ab-a3c5-9a6e3bd8e6c0" method='POST' className='flex flex-col w-full  items-center justify-center'>
    <div className='py-3 mx-auto'>  
    <h1 className='pb-3 flex justify-start'>Name</h1>
    <input
          type="text"
          name="name"
          className=" bg-white outline-none
           border-b border-b-primary
           h-[82px] w-[563px]
           text-black focus:outline-none "
        />
        </div>

        <div className='py-3 mx-auto'>
            <h1 className='pb-3 flex justify-start'>Email</h1>
        <input
        type="text"
        name="name"
        className=" bg-white outline-none
         border-b border-b-primary
        h-[82px] w-[563px]
         text-black focus:outline-none "
      />
      </div>
      
      
      <div className='py-3 mx-auto '>
      <h1 className='pb-3 flex justify-start'>Message</h1>
        <textarea
          name="message"
          rows="6"
          className="pt-6 bg-white outline-none 
          first-letter:border-b h-[165px] w-[563px]
           text-black focus:outline-none"
        />
        </div>

        <button className="">
         Send Message
        </button>
    </form>
    </div>
    </form>
    </div>

    </div>

    </div>
   
    </div>



   
    </div>


 </div>
 
  
  
  )
}

export default Contact;