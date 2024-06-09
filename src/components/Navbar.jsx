import React from 'react'

const Navbar = () => {
  return (
    <div className='flex sticky items-center justify-between top-0 md:py-4 py-2 px-4 z-50 bg-[#7CB9E8]'>
        <div className='flex flex-col'>
            <h1 className='text-[white] text-xl font-bold uppercase'>NareshTrading</h1>
            <span className='text-[white] font-semibold uppercase'>Company</span>
        </div>
        <div className='flex text-[white] uppercase underline font-semibold'>
          home
        </div>
    </div>
  )
}

export default Navbar
