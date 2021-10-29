import React, { Component } from 'react'

export default class Catindex extends Component {
  render() {
    return (
      <>
        <h3>Cat Candidates</h3>
        {this.props.cats.map((cat) => (
          <p>{cat.name}</p>
        ))}
      </>
    )
  }
}
