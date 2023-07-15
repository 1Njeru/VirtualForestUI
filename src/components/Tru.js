import React from 'react'

const Faq = () => {
  return (
    <section className='faq'>
    <div className=' mx-auto 
    grid justify-center lg:justify-center 
    lg:w-[1447px] lg:h-[851px] bg-lime-300  text-black'>
   <div className='grid grid-col items-center lg:flex-row 
    text-center lg:pt-1 '>
      {/*wrapper */}
      <div className=' lg:pl-20'>
        <h1 className='text-4xl mb-6 mt-4'>
          Frequently Asked Questions
        </h1>
      </div>
      <div className='lg:w-[1154.79px] lg:h-[523.89] px-3 pb-3'>
      <div className='grid lg:grid-cols-2 grid-cols-1 
      justify-center gap-8
       mx-auto'>
          {data.map((item, i) => (
            //item
            <div className='lg:h-[228.39px] lg:w-[500px]  pb-6 
            lg:pb-0  bg-white rounded-md grid justify-center
            items-center'>

              {/*title */}
              <div className=''>

                <h2> {item.question} </h2>

              </div>


              {/*content */}
              <div className=''>
                {item.answer}
              </div>

            </div>
          ))}

        </div>

      </div>
      </div>
    </div>
    </section>
  )
}


const data = [
  {
    question: 'What is the virtual Forest?',
    answer: 'Virtual Forest is a web-based game that enables uses to plant trees in the real world while sitting on couch or work-desk!',

},

{
  question: 'How does Virtual Forest plant trees in real life?',
  answer: 'Virtual Forest is a web-based game that enables uses to plant trees in the real world while sitting on couch or work-desk!',

},

{
  question: 'How many trees can a user plant in Virtual Forest?',
  answer: 'Virtual Forest is a web-based game that enables uses to plant trees in the real world while sitting on couch or work-desk!',

},

{
  question: 'What is the USP of Virtual Forest?',
  answer: 'Virtual Forest is a web-based game that enables uses to plant trees in the real world while sitting on couch or work-desk!',

},

{
  question: 'How much do I need to spend to plant a tree?',
  answer: 'Virtual Forest is a web-based game that enables uses to plant trees in the real world while sitting on couch or work-desk!',

},

{
  question: 'What connection does Virtual Forest have with Zuraverse?',
  answer: 'Virtual Forest is a web-based game that enables uses to plant trees in the real world while sitting on couch or work-desk!',

},
]

export default Faq;
