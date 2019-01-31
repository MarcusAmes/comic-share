import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import { Link } from 'react-router-dom'


class TopNav extends Component {
  _onClick = () => {
    this.props.logout()
  }

  render() {
    
    return (
      <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/login">reactstrap</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.props.user.token &&
            <>
            <NavItem>
              <NavLink tag={Link} to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/profile">Profile</NavLink>
            </NavItem>
            {/* //NOTE For testing s3 upload NOT FINAL  */}
            <NavItem>
              <NavLink tag={Link} to="/upload">Upload</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this._onClick}>Logout</NavLink>
            </NavItem>
            </>
            }
          </Nav>
        </Navbar>
    )
  }
}

export default TopNav