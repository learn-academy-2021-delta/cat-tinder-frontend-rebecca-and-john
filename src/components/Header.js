import React, { Component } from 'react'
import leftSplash from '../assets/leftSplash.png'
import rightSplash from '../assets/rightSplash.png'
import headerImage from '../assets/AdobeStock_318318411-min.jpeg'
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <img
            src={headerImage}
            className="headerImage img-fluid"
            alt="cat wearing a bowtie"
          />
          <div className="header-title">
            <img
              className="teardrop img-fluid"
              src={leftSplash}
              alt="three sideways tear drops"
            />
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <span> Friendly Felines </span>
            </NavLink>
            <img
              className="teardrop img-fluid"
              src={rightSplash}
              alt="three sideways tear drops"
            />
          </div>
        </header>
      </>
    );
  }
}
