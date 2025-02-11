import React from "react";
import FormComponent from "./FormComponent";

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      fName: "",
      lName: "",
      age: "",
      gender: "",
      destination: "Moscow",
      test1: false,
      test2: false,
      test3: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    const {type, name, value, checked} = event.target
    type === "checkbox" ? this.setState( {[name]: checked} ) : this.setState({ [name]: value })
  }
  render() {
    return(
      <FormComponent handleSubmit={this.handleSubmit} data={this.state} />
    )
  }
}

export default Form