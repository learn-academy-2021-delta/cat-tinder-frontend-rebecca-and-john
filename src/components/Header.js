import React, { Component } from 'react'
import leftSplash from '../assets/leftSplash.png'
import rightSplash from '../assets/rightSplash.png'
import Background from '../assets/AdobeStock_193410438_Preview.jpeg'

export default class Header extends Component {
  render() {
    return (
      <>
        <header
          className='header'
          style={{ backgroundImage: 'url(' + Background + ')' }}
        >
          <div className='header-title'>
            <img
              className='teardrop'
              src={leftSplash}
              alt='three sideways tear drops'
            />
            <span> Friendly Felines </span>
            <img
              className='teardrop'
              src={rightSplash}
              alt='three sideways tear drops'
            />
          </div>
        </header>
      </>
    )
  }
}
