import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Nav } from "reactstrap"
import { NavItem } from "reactstrap"
export default class Footer extends Component {
  render() {
    return (
        <footer>
          <Nav pills>
            <NavItem>
              <NavLink to="/">&copy; 2021 Rebecca & John</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catindex">Meet All the Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catnew">Add a Cat</NavLink>
            </NavItem>
          </Nav>
        </footer>
    )
  }
}
