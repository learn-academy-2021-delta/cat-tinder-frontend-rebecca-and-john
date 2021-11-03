import React, { Component } from 'react'
import leftSplash from '../assets/leftSplash.png'
import rightSplash from '../assets/rightSplash.png'
// import Background from '../assets/AdobeStock_318318411.jpeg'
import headerImage from '../assets/AdobeStock_318318411-min.jpeg'

export default class Header extends Component {
  render() {
    return (
      <>
        <header className='header'>
            <img
              src={headerImage}
              className='headerImage img-fluid'
              alt='cat wearing a bowtie'
            />
          <div className='header-title'>
            <img
              className='teardrop img-fluid'
              src={leftSplash}
              alt='three sideways tear drops'
            />
            <span> Friendly Felines </span>
            <img
              className='teardrop img-fluid'
              src={rightSplash}
              alt='three sideways tear drops'
            />
          </div>
        </header>
      </>
    )
  }
}
