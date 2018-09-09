import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Customer from "./Customer";
import Home from "./Home";
import Order from "./Order";

class HeaderTab extends Component {
  constructor (props) {
    super(props);
    this.state = {highlightedKey: 1} 
  }
  assignActiveStatus(selectedKey) {
    this.setState((state) => {
      return {highlightedKey: selectedKey}
    });
  }
  
  handleSelect = selectedKey => {
    //alert(`selected ${selectedKey}`);    
    //console.log(document.getElementsByTagName("nav"));
    this.assignActiveStatus(selectedKey);
  };
  render() {
    //console.log("props:" + this.props)
    return (
      <Router>
        <div>
          <Nav bsStyle="pills" activeKey={this.state.highlightedKey} onSelect={this.handleSelect}>
            <NavItem eventKey={1} componentClass={Link} href="/home" to="/">
              Home
            </NavItem>
            
            <NavItem
              eventKey={2}
              title="customer"
              componentClass={Link}
              href="/customer"
              to="/customer"
            >
            Customer
            </NavItem>
            
            <NavItem
              eventKey={3}
              title="order"
              componentClass={Link}
              href="/order"
              to="/order"
            >
              Order
            </NavItem>
            
            <NavItem eventKey={4} title="author" disabled>
              Author
            </NavItem>
          </Nav>
          <Route path="/" component={Home} />
          <Route path="/customer" component={Customer} />
          <Route path="/order" component={Order} />
        </div>
      </Router>
    );
  }
}
export default HeaderTab;
