import React, { useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Requests'
import TrailorsApi from '../Youtube/TrailerApi'
// import Youtube from '../Youtube'
// import MainYoutube from './Youtube/MainYoutube'
// import YouTube from 'react-youtube';
// import YouTube from 'react-youtube'

const Home = () => {

  const [listdata, setListdata] = useState(TrailorsApi)

  return (
    <>
    <Main />
    <Row rowID='1' title='Popular' fetchUrl={Requests.requestPopular} />
    <Row rowID='2' title='TopRated' fetchUrl={Requests.requestTopRated} />
    <Row rowID='3' title='Trending' fetchUrl={Requests.requestTrending} />
    <Row rowID='4' title='Upcoming' fetchUrl={Requests.requestUpcoming} />
    {/* <Row rowID='5' title='Videos' fetchUrl={Requests.requestVideos} /> */}
    {/* <YouTube fetchUrl={Requests.requestVideos}/> */}

  <Row rowID='5' title="Trailors"  />
    
  {/* <YouTube  className='h-[550px] w-full' videoId='mkomfZHG5q4'   /> */}

{
  listdata.map((curElem) => {
    return (
      <div className=' h-[500px] w-auto items-center flex flex-col justify-center' >
      <iframe className='flex flex-row' width="400" height="400" title={curElem.id} src={curElem.videos}>
</iframe>
</div>
    )
  })
}

  

{/* <MainYoutube /> */}

    </>
  )
}

export default Home
