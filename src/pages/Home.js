import React, { Component } from 'react'
import computerCat from '../assets/cat-computer.gif'

export default class Home extends Component {
    render() {
        return (
          <>
            <div className="home-container">
              <p>Looking for a new friend?</p>
              <p>Looking to make that special connection?</p>
              <img alt="cat meowing at computer" src={computerCat} />

              <p> Well look no further! </p>
              <p>
                Welcome to Friendly Felines where we help cats find their
                purrfect partner!
                Navigate to our Meet the Cats page to get started!
              </p>
            </div>
          </>
        );
    }
}
