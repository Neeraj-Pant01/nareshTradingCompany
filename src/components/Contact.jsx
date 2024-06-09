import React from 'react'
import { IoIosPeople } from "react-icons/io";
import {} from "react-icons"
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='min-h-screen px-5 md:px-10 md:mt-[150px] mt-[100px]'>
      <h1 className='text-2xl md:text-3xl font-semibold uppercase text-center text-[purple] md:text-[#393939] underline'>Connect With Us</h1>
      <div className='flex md:flex-row md:flex-wrap flex-col items-center gap-2 justify-center md:mt-[50px] mt-[20px]'>
        <div className='flex flex-col md:w-[30%] w-[90%] text-lg'>
          <b>Email :</b>
          <p>nareshtradingcompany21@gmail.com</p>
        </div>
        <div className='flex flex-col md:w-[30%] text-lg w-[90%]'>
          <b>Mobile :</b>
          <p> 8860628588</p>
        </div>
        <div className='flex flex-col md:w-[30%] text-lg w-[90%]'>
          <b>Phone No :</b>
          <p>01276298488</p>
        </div>
      </div>
      <h1 className='uppercase flex items-center text-center font-semibold gap-2 text-2xl md:mt-[70px] mt-[30px] md:text-3xl justify-center text-[purple] md:text-[#393939]  underline'>Join Our Community <IoIosPeople className='text-5xl text-[#7CB9E8]' /></h1>
      <div className='flex flex-col items-center justify-center mt-[20px] gap-3'>
        <div className='flex items-center w-[90%]'>
          <a href='https://www.facebook.com/profile.php?id=61552651611754&sk=about' target='/'>
          <AiFillFacebook className='text-5xl text-[#1877F2]' />
          </a>
          <span className='text-lg text-[grey] font-semibold italic'>Naresh Trading Company</span>
        </div>
        <div className='flex items-center w-[90%]'>
          <AiFillInstagram className='text-5xl text-[#E4405F]'/>
          <span className='text-lg text-[grey] font-semibold italic'>@COMPANYNARESHTRADING</span>
        </div>
      </div>
      <h1 className='uppercase flex items-center text-center md:mt-[70px] font-semibold gap-2 text-2xl mt-[30px] md:text-3xl justify-center text-[purple] md:text-[#393939]  underline'>Visit Us At</h1>
      <div className='flex flex-col items-center justify-center mt-[20px] md:gap-3 gap-2'>
      <div className='flex md:flex-row md:items-center md:gap-4 flex-col w-[90%]'>
        <b className='text-lg'>Building No./Flat No.:</b>
        <span className='text-lg text-[grey]'>O-30</span>
      </div>
      <div className='flex md:flex-row md:items-center md:gap-4 flex-col w-[90%]'>
        <b className='text-lg'>Road/Street:</b>
        <span className='text-lg text-[grey]'>Bahadurgarh Road</span>
      </div>
      <div className='flex md:flex-row md:items-center md:gap-4 flex-col w-[90%]'>
        <b className='text-lg'>Locality/Sub Locality:</b>
        <span className='text-lg text-[grey]'>Old Industrial Area Bahadurgarh</span>
        <span className='text-lg text-[grey]'>Haryana - 124507</span>
      </div>
      <div className='flex md:flex-row md:items-center md:gap-4 flex-col w-[90%]'>
        <b className='text-lg'>City/Town/Village:</b>
        <span className='text-lg text-[grey]'>Bahadurgarh</span>
      </div>
      <div className='flex md:flex-row md:items-center md:gap-4 flex-col w-[90%]'>
        <b className='text-lg'>District:</b>
        <span className='text-lg text-[grey]'>Jhajjar</span>
      </div>
      </div>
    </div>
  )
}

export default Contact
