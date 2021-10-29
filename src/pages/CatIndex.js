import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle } from 'reactstrap'

export default class Catindex extends Component {
  render() {
    return (
      <>
        <div className="catindex-container">
        <h3>Meet Our Cat Friends</h3>
          {this.props.cats &&
            this.props.cats.map((cat) => {
              return (
                <p key={cat.id}>
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">{cat.name}</CardTitle>
                    </CardBody>
                    <img
                      alt="Card image cap"
                      src="https://picsum.photos/318/180"
                      width="25%"
                    />
                    <CardBody>
                      <NavLink to={`/catshow/${cat.id}`}>Cat Info</NavLink>
                    </CardBody>
                  </Card>
                </p>
              );
            })}
        </div>
      </>
    );
  }
}
