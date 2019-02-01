import React, {Component} from 'react'
import {Button, Container, Row,Col} from 'reactstrap'
import '../App.css'

class Viewer extends Component{
  
    render(){
        return(
          <div>
            <Container>
              <Row>
                <Col sm={{ size: 6, offset: 1 }}>
                  <img className="comicImage" src="https://via.placeholder.com/400X600" alt="" />
                </Col>
              
              {/* <Row>
                <Col>
                  <Button className="comicButton" color="primary">Back</Button>
                </Col>
                <Col>
                  <Button className="comicButton" color="primary">Next</Button>
                </Col>
              </Row> */}

              
                <Col sm={{ size: 'auto'}}>
                  <div className="commentForm">
                    <form onSubmit={this.addComment}>
                      <div className="field">

                      </div>
                      <div className="field">
                       <div className="control">
                         <textarea className="textarea" name="comment" placeholder="Add a comment"></textarea>
                       </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <button className="button is-primary">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="comicButton" color="primary">Back</Button>
                </Col>
                <Col>
                  <Button className="comicButton" color="primary">Next</Button>
                </Col>
              </Row>
            </Container>
          </div>
            
        )
    }
}
export default Viewer;