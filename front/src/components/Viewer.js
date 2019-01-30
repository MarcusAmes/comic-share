import React, {Component} from 'react'
// import './App.css'

class Viewer extends Component{
  
    render(){
        return(
            <div>
            
            <img src="https://via.placeholder.com/350X600" alt=""/>

            <h1 className="title">hello</h1>
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <input type="text" className="input" name="name" placeholder="Your name"/>
            </div>
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
        )
    }
}
export default Viewer;