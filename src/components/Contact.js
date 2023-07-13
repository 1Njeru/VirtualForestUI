import React from 'react'

const Contact = () => {
  return (

    <div className='grid justify-center px-2 
     w-[100%] bg-slate-200 pb-20'>


    <div className=' pt-8'>
    <span className='text-xl text-neutral-400'>contact form
    </span>
    </div>


    <div className=' grid grid-cols-2 lg:pt-8 px-8 mx-auto'>

        <div className='grid justify-start'>
        <div className='pt-9'>
        <h1 className='text-4xl '>Let's Talk</h1>
        <div className='pt-6'>
        <span className='text-xl'>Have an interesting idea for conservation,<br />
        sustainability or gaming? Lets get in touch and build <br />
        a better future. </span>
        </div>

        <div className='pt-8'>
            <h1 className='text-3xl'> Email</h1>
            <div className='pt-2'>
            <span className='text-xl'>sagar@zuraverse.com</span>
        </div>
        </div>

        <div className='pt-9 '>
        <h1 className='text-3xl'> Socials</h1>
        <div className='pt-2 grid'>
            <span className='text-xl'> instagram </span>
            <span className='text-xl'> instagram </span>
            <span className='text-xl'> instagram </span>
        </div>
        </div>

        </div>
        </div>

     

    
    
    <div className='mx-auto'>

        <form className=' mx-auto'> 
 <div className=' text-black mx-auto'>
 <form action="https://getform.io/f/27b21687-26f0-47ab-a3c5-9a6e3bd8e6c0" method='POST' className='flex flex-col w-full  items-center justify-center'>
  <div className='py-3'>  
  <h1 className='pb-3'>Name</h1>
 <input
          type="text"
          name="name"
          className=" bg-white outline-none
           border-b border-b-primary
          h-[50px] font-secondary 
           text-black focus:outline-none "
        />
        </div>

        <div className='py-3'>
            <h1>Email</h1>
        <input
        type="text"
        name="name"
        className=" bg-white outline-none
         border-b border-b-primary
        h-[50px] font-secondary 
         text-black focus:outline-none "
      />
      </div>
      
      
      <div className='py-3 '>
      <h1>Message</h1>
        <textarea
          name="message"
          rows="10"
          className="pt-6 bg-white outline-none 
          first-letter:border-b 
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
  )
}

export default Contact;