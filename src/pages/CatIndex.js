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
                  <Col md="4" className="pb-3" key={cat.id}>
                    <Card
                      className="shadow p-3 mb-5 bg-white rounded hvr-grow"
                      >
                      <CardBody>
                        <CardTitle tag="h5">{cat.name}</CardTitle>
                      </CardBody>
                      <CardImg
                        alt="random"
                        src="https://placekitten.com/350/200"
                      />
                      <CardBody>
                        <NavLink to={`/catshow/${cat.id}`}>
                          Meet {cat.name}
                        </NavLink>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </>
    )
  }
}
//