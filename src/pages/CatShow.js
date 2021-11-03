import React, { Component } from 'react'
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class CatShow extends Component {
  render() {
    // console.log(this.props.cat)
    return (
      <>
        <div className="catshow-container">
          <h3>Cat Details</h3>
          {this.props.cat && (
            <>
              <p>Name: {this.props.cat.name}</p>
              <p>Age: {this.props.cat.age}</p>
              <p>Hobbies and Interests: {this.props.cat.enjoys}</p>
            </>
          )}
          
          <NavLink to="/catindex">
            <Button color="secondary" outline>
              Back
            </Button>
          </NavLink>

          <NavLink to={`/catedit/${this.props.cat.id}`}>
            <Button color="info" outline>
              Edit Cat Profile
            </Button>
          </NavLink>

          <NavLink to="/catindex">
            <Button color="danger" outline>
              Delete Cat Profile
            </Button>
          </NavLink>
        </div>
      </>
    );
  }
}
