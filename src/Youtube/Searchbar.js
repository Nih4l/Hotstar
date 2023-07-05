import React from 'react'
import {BsSearch} from 'react-icons/bs'

export default class Searchbar extends React.Component {
 state ={
    term : 'Search here...'
 };
 handleChange = (event) => {
        this.setState({
            term : event.target.value
        })
 }

 handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term)
 }

  render() {
    return (
      <>
        <div className=''>
        <form className='' onSubmit={this.handleSubmit}>
            <div className='flex flex-row gap-3 items-center'>
                
                <input className=' bg-transparent border-spacing-2 border-white' type='text'  value={this.state.term} onChange={this.handleChange} />
                <BsSearch />
            </div>
        </form>
      </div>
      </>
    )
  }
}



