import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem} from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Nav pills className="footer-Nav">
          <NavItem>
            <NavLink to="/">&copy; 2021 Rebecca & John</NavLink>
          </NavItem>
          <div className="footer-Nav-NavItems">
            <div className="footer-Nav-NavItem">
              <NavItem>
                <NavLink to="/catindex">Meet All the Cats</NavLink>
              </NavItem>
            </div>
            <div className="footer-Nav-NavItem">
              <NavItem>
                <NavLink to="/catnew">Add a Cat</NavLink>
              </NavItem>
            </div>
          </div>
        </Nav>
      </footer>
    );
  }
}
