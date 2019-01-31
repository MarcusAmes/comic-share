import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

class MainPage extends Component {


  render() {
    //NOTE redirects if not logged in turned off for dev
    // if(!this.props.user.token) {
    //   return <Redirect to="/login"/>
    // }
    
    return (
      <div>
        <Container>
          <Row>
            <h1>Home Page</h1>
          </Row>
          <Row>
            <h2>Following</h2>
            {/* Comic selector */}
          </Row>
          <Row>            
            <h2>Explore</h2>
            {/* Comic selector */}
          </Row>
        </Container>
      </div>
    )
  }
}

export default MainPage