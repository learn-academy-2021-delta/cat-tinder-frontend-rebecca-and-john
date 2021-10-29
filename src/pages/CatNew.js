import React, { Component } from 'react'
import {Form, FormGroup, Label, Input} from 'reactstrap'

export default class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
      },
    };
  }
    
    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

  render() {
    return (
      <>
        <div className="catnew-container">
          <h3> New Cat </h3>
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
          <button
            name="submit"
            // onClick={this.handleSubmit}
          >
            Add New Cat
          </button>
        </div>
      </>
    );
  }
}
