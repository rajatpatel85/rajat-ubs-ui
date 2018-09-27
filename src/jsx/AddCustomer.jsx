import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Button
} from "react-bootstrap";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import "../css/Customer.css"

class AddCustomer extends Component {
  constructor(props, context) {
    super(props, context);
    //binding the handleChange.
    this.handleChange = this.handleChange.bind(this);
    this.submitAddCustomer = this.submitAddCustomer.bind(this);
    this.state = {
      value: "",
      inputFirstName: "",
      inputLastName: "",
      addCustomerJson:[]
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.setState({ inputFirstName:this.inputFirstName.value });
    this.setState({ inputLastName:this.inputLastName.value });
  }

  submitAddCustomer(e) {
    alert(this.form);
  }

  render() {
    return (
      <form horizontal>
        <FormGroup bsClass="customerFormStyle" controlId="formBasicFirstName" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={1}>
                First Name
            </Col>
            <Col sm={4} smOffset={0}>
                <FormControl type="text" placeholder="Enter first name of customer" 
                 inputRef={ref => { this.inputFirstName = ref; }} onChange={this.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup bsClass="customerFormStyle" controlId="formBasicLastName" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={1}>
                Last Name
            </Col>
            <Col sm={4}>
                <FormControl type="text" placeholder="Enter last name of customer" 
                inputRef={ref => { this.inputLastName = ref; }} onChange={this.handleChange}/>
            </Col>
        </FormGroup>

        <FormGroup bsClass="customerFormStyle" controlId="formBasicHomeNUmber" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={1}>
                Home Number
            </Col>
            <Col sm={4}>
                <FormControl type="text" placeholder="Enter home number" value={this.state.value}  onChange={this.handleChange}/>
            </Col>
        </FormGroup>

        <FormGroup bsClass="customerFormStyle" controlId="formBasicMobileNumber" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={1}>
                Mobile Number
            </Col>
            <Col sm={4}>
                <FormControl type="text" placeholder="Enter mobile number" value={this.state.value}  onChange={this.handleChange}/>
            </Col>
        </FormGroup>

        <FormGroup bsClass="customerFormStyle" controlId="formBasicWorkNumber" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} sm={1}>
                Work Number
            </Col>
            <Col sm={4}>
                <FormControl type="text" placeholder="Enter work number" value={this.state.value}  onChange={this.handleChange}/>
            </Col>
        </FormGroup>
        <FormGroup>
            <Col smOffset={2} sm={1}>
                <Button type="submit" onClick={this.submitAddCustomer}>Add Customer</Button>
            </Col>
        </FormGroup>
      </form>
    );
  }
}

export default AddCustomer;
