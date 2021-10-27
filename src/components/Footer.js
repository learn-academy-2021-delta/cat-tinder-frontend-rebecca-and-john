import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <>
                <ul>
                    <NavLink to="/">
                        &copy; 2021 Rebecca & John 
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="/catindex">
                        Meet All the Cats 
                    </NavLink>
                </ul>
                <ul>
                    <NavLink to="/catnew">
                        Add a Cat 
                    </NavLink>
                </ul>
            </>
        )
    }
}
