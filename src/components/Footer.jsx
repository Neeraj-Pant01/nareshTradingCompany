import React from 'react'
import {} from "react-icons"
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#393939] md:px-10 px-3 flex flex-col py-20 mt-[50px]'>
      <h1 className='text-[lightgrey] font-bold text-3xl '>NARESH TRADING COMPANY</h1>
      <div className='flex items-center gap-2 text-[lightgrey] mt-[20px]'>
        <a href='https://www.facebook.com/profile.php?id=61552651611754&sk=about'>
        <AiFillFacebook className='text-2xl'/>
          </a>
        <a href=''>
          <AiFillInstagram className='text-2xl'/>
        </a>
      </div>
      <div className='flex text-[lightgrey] mt-[20px]'>
      Your online marketplace for global old scrap trading
      </div>
      <hr className='mt-[20px]' />
      <div className='flex items-center mt-[20px] text-[lightgrey] text-center text-lg justify-center'>
        &copy; 2024 NARESHTRADINGCOMPANY
      </div>
    </div>
  )
}

export default Footer
