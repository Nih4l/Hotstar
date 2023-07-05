import React from 'react'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
     <footer className='bg-black text-gray-400 font-bold p-6 flex justify-between items-center sticky h-[100%]'>
        <div className=''>
            Authority : Nihal Ahmed 
        </div>
        <div>
        Copyright reserved 2023
        </div>
        <div className='flex space-x-2 items-center'>
            <p>Contact Us : </p>
            <a href="https://www.instagram.com/nihal_kh4n/"><BsInstagram /></a>
        </div>
        </footer> 
    </>
  )
}

export default Footer
