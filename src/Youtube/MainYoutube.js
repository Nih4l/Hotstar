import React from 'react'
import Youtube from '../../Youtube'
import VideoList from './VideoList'
import Searchbar from './Searchbar'

export default class MainYoutube{
 state = {
    videos : [],
    selectedVideo : null
 }

 handleSubmit = async(termFromSearchBar) =>{
    const response = await Youtube.get('/search',{
      params :{
        q  : termFromSearchBar
      }
    })
    this.setState({
      videos : response.data.items
    })
  }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo : video})
    }
  render() {
    return (
      <>
       <div className='container'>
       <Searchbar handleFormSubmit={this.handleSubmit} />
        <div>
            <div className='row'>

            </div>
            <div>
                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
        </div>
       </div> 
      </>
    )
  }
}
