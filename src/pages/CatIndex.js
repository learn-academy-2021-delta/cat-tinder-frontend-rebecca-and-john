import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Catindex extends Component {
  render() {
    return (
<>
        <h3>Meet Our Cat Friends</h3>
        {this.props.cats &&
          this.props.cats.map((cat) => {
            return (
              <p key={cat.id}>
                <NavLink to={`/catshow/${cat.id}`}>{cat.name}</NavLink>
              </p>
            )
          })}
      </>
    )
  }
}
