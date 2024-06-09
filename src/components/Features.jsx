import React from 'react'
import { features } from '../data'

const Features = () => {
  return (
    <div className='flex flex-col md:px-10 px-3 py-5 md:mt-[150px] mt-[100px]'>
      <h1 className='text-[#13274F] md:text-4xl text-2xl text-center mb-4'>Why Choose Us?</h1>
      <div className='flex md:flex-row flex-col md:flex-wrap items-center justify-center gap-3'>
      {
        features.map((f,i)=>{
            return (
                <div className='flex flex-col md:w-[40%] w-[90%] bg-[#B9D9EB] py-4 px-4 rounded-lg min-h-[200px] gap-2'>
                    <h1 className='md:text-2xl text-lg font-bold'>{f.title}</h1>
                    <p>{f.desc}</p>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Features
