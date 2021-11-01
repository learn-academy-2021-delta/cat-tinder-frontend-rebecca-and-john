import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardImg, Row, Col } from 'reactstrap'

export default class Catindex extends Component {
  render() {
    return (
      <>
        <div className='catindex-container'>
          <h3>Meet Our Cat Friends</h3>

          <Row>
            {this.props.cats &&
              this.props.cats.map((cat) => {
                return (
                  <Col md='4' key={cat.id}>
                    <Card>
                      <CardBody>
                        <CardTitle tag='h5'>{cat.name}</CardTitle>
                      </CardBody>
                      <CardImg
                        alt='random'
                        src='https://placekitten.com/350/200'
                      />
                      <CardBody>
                        <NavLink to={`/catshow/${cat.id}`}>Cat Info</NavLink>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })}
          </Row>
        </div>
      </>
    )
  }
}
