import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect, NavLink} from 'react-router-dom'

export default class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
      },
      submitted: false
    };
  }
    
    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }
  
    handleSubmit = () => {
      this.props.createNewCat(this.state.form)
      this.setState({submitted: true})
    }

  render() {
    return (
      <>
        <div className="catform-container">
          <h3>New Cat</h3>
          <Form>
            <FormGroup>
              <Label for="name">Cat's Name</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.form.name}
              />
              <Label for="age">Cat's Age</Label>
              <Input
                type="number"
                name="age"
                onChange={this.handleChange}
                value={this.state.form.age}
              />
              <Label for="enjoys">Cat's Hobbies and Interests</Label>
              <Input
                type="text"
                name="enjoys"
                onChange={this.handleChange}
                value={this.state.form.enjoys}
              />
            </FormGroup>
          </Form>

          <NavLink to="/">
            <Button color="secondary" outline>
              Home
            </Button>
          </NavLink>

          <Button
            name="submit"
            onClick={this.handleSubmit}
            color="info"
            outline
          >
            Add New Cat
          </Button>
          {this.state.submitted && <Redirect to="/catindex" />}
        </div>
      </>
    );
  }
}
