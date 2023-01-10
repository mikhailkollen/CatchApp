import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="search-form">
        <input type="text" placeholder='Search for a user' />
      </div>
      <div className="user-chat">
        <img src="https://images.pexels.com/photos/14792109/pexels-photo-14792109.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <div className="user-chat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search