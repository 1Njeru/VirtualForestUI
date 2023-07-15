import React from 'react'


function Popups(props) {
    return (props.trigger) ? (

        //*popup 
        <div className='fixed flex justify-center items-center
         bg-black w-[100%] h-100vh'>
            {/* pop inner*/}
            <div className='relative p-[32px] w-[100%] lg:w-[640px]'>
                {/*close button */}
                <button className='absolute pt-16 pr-16'>close</button>
                {props.children}

            </div>
        </div>
    ): "";
}

export default Popups;
