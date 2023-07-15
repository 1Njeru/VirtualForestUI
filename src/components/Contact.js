import React from 'react'




const Contact = () => {
  return (


 <div className='contact'>

<div className=' mx-auto 
    grid justify-center lg:justify-center 
    lg:w-[1447px] lg:h-[851px] bg-green-100  text-black'>
   <div className='grid grid-col items-center lg:flex-row 
    text-center lg:pt-1 '>

      <div className=''>
      <div className=''>
    <h1 className=' text-gray-400 flex lg:justify-start text-xl 
    lg:pt-14 lg:pl-[90px] pt-14 justify-center'>contact form</h1>
    </div>


   {/* w & h big container */}
   <div className='pt-4'>
   <div className='lg:flex text-center justify-center 
   lg:justify-start 
   lg:w-[1238px] lg:h-[615px]
   gap- lg:pl-[px]'>
  
   <div
    className='mx-auto flex justify-evenly  ' >
    <div className=' grid lg:grid-cols-2 grid-cols-1 lg:justify-start  
    mx-auto'>

    <div className='flex flex-row justify-center items-center 
    lg:justify-start 
    mx-auto'>

      {/*w & h first container  */}
      <div className='lg:w-[538px] lg:h-[569px] flex 
      
      '>
<div className=' flex-col pt-4 lg:pt-0 
mx-auto flex justify-center
lg:text-start'>

  <div>
<h1 className='text-4xl '>Let's Talk</h1>

<div className='pt-6 lg:pt-0 flex
lg:text-start '>
<span className='flex lg:text-start
 lg:pt-4
'>Have an interesting idea for 
conservation,<br />
sustainability or gaming? Lets get in touch and build <br />
a better future. </span>
</div>
</div>

<div className='pt-8 lg:pt-12'>
<h1 className='text-3xl  '> Email</h1>

<div className='pt-3 lg:pt-0 flex
lg:text-start '>

  <div className='pl-28 lg:pl-0'>
 <li className='flex hover:scale-105 hover:text-orange-600 justify-center mb-3'>
 <a className='flex ' href='https://zuraverse.xyz/' target='_blank rel="noreferrer"'>
 sagar@zuraverse.com
 </a>
 </li>
 </div>
 
  
</div>
</div>



<div className=' pt-8 lg:pt-0'>


<div className='h-[173px] w-[102px] pl-36 lg:pl-0 '>
<div className=' lg:pt-8'>
<h1 className='text-3xl'> Socials</h1>
<div className='pt-2 pl- lg:pl-0'>

<li className='flex  hover:scale-105 hover:text-pink-600 items-center mb-3'>
<a href='https://instagram.com/zuraverse.eth/' target='_blank rel="noreferrer"'>
Instagram
</a>
</li>


<li className='flex hover:scale-95 hover:text-blue-600 items-center mb-3'>
<a href='https://zuraverse.xyz/' target='_blank rel="noreferrer"'>
Facebook
</a>
</li>



<li className='flex hover:scale-105 hover:text-blue-700 items-center s'>
<a href='https://twitter.com/Zuraverse/' target='_blank rel="noreferrer"'>
Twitter
</a>
</li>
</div>
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
    <div className='pt-8 lg:pt-12'>
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
           h-[82px] lg:w-[563px] w-[300px]
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
        h-[82px] lg:w-[563px] w-[300px]
         text-black focus:outline-none "
      />
      </div>
      
      
      <div className='py-3 mx-auto '>
      <h1 className='pb-3 flex justify-start'>Message</h1>
        <textarea
          name="message"
          rows="6"
          className="pt-6 bg-white outline-none w-[300px]
          first-letter:border-b h-[165px] lg:w-[563px]
           text-black focus:outline-none"
        />
        </div>

        <button className=" bg-black  h-[45px] lg:w-[563px] w-[300px] text-white ">
          <span className='text-2xl'>
         SUBMIT
         </span>
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
    </div>


 </div>
 
  
  
  )
}

export default Contact;
