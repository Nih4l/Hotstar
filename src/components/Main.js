import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Requests from '../Requests'




const Main = () => {
    const [movies,setmovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]
    console.log(movie)

    useEffect (() => {
        axios.get(Requests.requestPopular).then((response)=>{
            setmovies(response.data.results)
        })
    },[])
    // console.log(movie)
    const truncateString = (str,num) =>{
      if(str?.length > num){
      return str.slice(0,num) + '...'
      }else{
        return str;
      }
    }
 
    

  return (
    <div className='w-full h-[550px]'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className ='w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        

        <div>
            <div className='absolute w-full top-[20%] pd-4 md:p-4 '>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-4'>

                
                {/* <video controls autoPlay type='video/mp4' >
                <source src ='https://youtu.com/mkomfZHG5q4' /></video> */}

                
               
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 '>
                Play</button>
                

                <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                
                </div>
                <p className='text-gray-500 text-sm'>Released : {movie?.release_date}</p>
                <p className='w-full md:mx-w-[70%] lg:mx-w-[50%] xl:mx-w-[30%] text-gray-200'>{truncateString(movie?.overview,150)}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
