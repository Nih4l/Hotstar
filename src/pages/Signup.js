import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Signup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name, setName] = useState('')
    const {user,signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(name,email,password)
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/e81da519-216b-4341-b9e7-92d45398ddc3/IN-en-20221214-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

        <div className='fixed w-full px-4 py-24 z-50'>

            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={(e) => setName(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='text' placeholder='Enter Name' />
                        <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='email' autoComplete='email' />
                        <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='password' 
                        autoComplete='current-password' />
                        <button className='bg-blue-600 py-3 my-6 rounded font-bold'>Signup</button>
                        <div className='flex justify-between items-center text-sm text-gray-500'>
                            <p>
                                <input className='mr-2' type='checkbox' />Remember me?
                            </p>
                            <p>Need help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-500 '>Already have Hotstar?</span>{''}
                        <Link to='/login'>Log In</Link></p>
                    </form>
                </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default Signup
