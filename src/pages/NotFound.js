import React, { Component } from 'react'
import CatError from '../assets/404.jpeg'


export default class NotFound extends Component {
    render() {
        return (
            <>
                <div className = 'error'>
                    <img src = {CatError} alt = '404 Not Found'/>
                </div>
            </>
        )
    }
}
