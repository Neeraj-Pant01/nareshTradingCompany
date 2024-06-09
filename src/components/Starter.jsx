import React from 'react'

const Starter = () => {
  return (
    <div className='flex md:flex-row flex-col mt-[100px] items-center justify-center'>
      <div className='flex text-[#7CB9E8] flex-col justify-end items-center flex-[1.5] font-bold'>
      <p className='w-[80%] md:text-6xl text-4xl'>
      Your virtual portal for worldwide old scrap transactions
      </p>
      <p className='text-[#13274F] w-[80%] mt-4 md:text-2xl text-lg'>
      We specialize in buying and selling remelted lead, battery scrap, iron MS scrap, steel, copper, and aluminum worldwide.
      </p>
      </div>
      <div className="flex flex-1 md:px-3 px-3 md:mt-0 mt-9">
        <img src='/img5.jpeg' className='rounded-lg'/>
      </div>
    </div>
  )
}

export default Starter
