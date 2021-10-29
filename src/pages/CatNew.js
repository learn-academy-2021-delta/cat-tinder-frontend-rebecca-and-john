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
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
            </Form>
            {console.log(this.state.form)}
      </>
    );
  }
}
