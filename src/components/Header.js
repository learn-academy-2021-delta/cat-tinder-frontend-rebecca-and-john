import React, { Component } from 'react'
import leftSplash from '../assets/leftSplash.png'
import rightSplash from '../assets/rightSplash.png'

export default class Header extends Component {
    render() {
        return (
          <>    
              <header>
                  <div className='header-title'>
                    <img src={leftSplash} alt="three sideways tear drops" />
                    <span > Friendly Felines </span>
                    <img src={rightSplash} alt="three sideways tear drops" />
                </div>
              </header>
          </>
        );
    }
}
