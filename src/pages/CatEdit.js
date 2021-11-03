import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class CatEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.updateCat(this.state.form, this.props.cat.id);
    this.setState({ submitted: true });
  };
    
  render() {
    return (
      <>
        <div className="catform-container">
          <h3>{this.props.cat.name}'s Profile</h3>
          {console.log(this.props.cat)}
          <Form>
            <FormGroup>
              <Label for="name">Cat's Name</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder={this.props.cat.name}
                value={this.state.form.name}
              />
              <Label for="age">Cat's Age</Label>
              <Input
                type="number"
                name="age"
                onChange={this.handleChange}
                placeholder={this.props.cat.age}
                value={this.state.form.age}
              />
              <Label for="enjoys">Cat's Hobbies and Interests</Label>
              <Input
                type="text"
                name="enjoys"
                onChange={this.handleChange}
                placeholder={this.props.cat.enjoys}
                value={this.state.form.enjoys}
              />
            </FormGroup>
          </Form>
          <Button
            name="submit"
            onClick={this.handleSubmit}
            color="secondary"
            outline
          >
            Edit Cat Profile
          </Button>

          {this.state.submitted && (
            <Redirect to={`/catshow/${this.props.cat.id}`} />
          )}
        </div>
      </>
    );
  }
}
