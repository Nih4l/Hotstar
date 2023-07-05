import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {

const {user,logOut} = UserAuth()
const navigate = useNavigate()
const handlelogOut = async () =>{
  try{
    await logOut();
    navigate('/')
  }catch(error){
    console.log(error)
  }
}



  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute gap-6'>
      <Link to='/'>
      <h1 className='text-xl text-blue-600 font-bold bg-transparent cursor-pointer'>
      HOTSTAR MOVIES
      {/* <img src='disney-hotstar-logo-dark.svg' alt='none' /> */}
      </h1>
      </Link>
      
      
      {user?.email ?(
        <div>
        <Link to='/account'>
        <button className='pr-4'>Account</button>
        </Link>
        
        <button onClick={handlelogOut} className='bg-blue-600 px-6 py-2 rounded cursor-pointer'>Log Out</button>
        
        
      </div>
      ):(
        <div>
        
        <Link to='/login'>
        <button className='pr-4'>Log in</button>
        </Link>
        <Link to='/signup'>
        <button className='bg-blue-600 px-6 py-2 rounded cursor-pointer'>Sign up</button>
        </Link>
        
      </div>
      )
    }
    </div>
  )
}

export default Navbar
