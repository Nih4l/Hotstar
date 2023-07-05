import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'


const Row = ({title,fetchUrl,rowID}) => {

    const [movies , setMovies] = useState ([])
    

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchUrl])

    const slideleft = () => {
      var slider=document.getElementById('slider' + rowID)
      slider.scrollLeft=slider.scrollLeft - 500;
    };

    const slideRight = () => {
      var slider=document.getElementById('slider' + rowID)
      slider.scrollLeft=slider.scrollLeft + 500;
    }
    // console.log(movies)

  return (
    <>
        <h3 className='text-white font-bold md:text-xl p-4'>{title}</h3>
        <div className='relative flex items-center group'>
          <AiOutlineLeft onClick={slideleft} className=' rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' size={40} />
            <div id = {'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item , id) => (
                  <Movie key={id} item={item} />
                    
                ))}
            </div>
            <AiOutlineRight onClick={slideRight} className=' rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' size={40} />
        </div>
    </>
  )
}

export default Row
