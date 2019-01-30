import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Register extends Component {

  state = {
    username: "",
    password: ""
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
    this.setState({username: "", password: ""})
  }

  _onChange = ({target}) =>  {
    this.setState({[target.name]: target.value})
  }

  render() {
    
    return (
      <Form onSubmit={this._onSubmit}>
        Register
        <FormGroup>
          <Label for="username">Username</Label>
          <Input onChange={this._onChange} value={this.state.username} type="text" name="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input onChange={this._onChange} value={this.state.password} type="password" name="password" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default Register