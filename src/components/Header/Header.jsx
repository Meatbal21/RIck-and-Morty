import React from 'react'
import'./Header.css'


function Header() {
  return (
    <div className ='header-container'>
        <div>
            <a href="http://#" style={ {marginRight:"10px"} }>Home</a>
            <a href="http://#" style={ {marginRight:"10px"} }>About</a>
            <a href="http://#">Episodes</a>
        </div>
        <button className='theme-button'>Dark Mode</button>
    </div>
  )
}

export default Header