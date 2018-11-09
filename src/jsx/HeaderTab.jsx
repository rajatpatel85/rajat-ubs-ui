import React, { Component } from "react";
import { Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import FindCustomer from "./FindCustomer";
import AddCustomer from "./AddCustomer";
import Home from "./Home";
import Order from "./Order";

class HeaderTab extends Component {
  constructor(props) {
    super(props);
    this.state = { highlightedKey: 1 };
  }
  assignActiveStatus(selectedKey) {
    this.setState(state => {
      return { highlightedKey: selectedKey };
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
          <Nav
            bsStyle="pills"
            activeKey={this.state.highlightedKey}
            onSelect={this.handleSelect}
          >
            <NavItem eventKey={1} componentClass={Link} href="/home" to="/home">
              Home
            </NavItem>

            <NavDropdown eventKey={2} title="Customer">
              <MenuItem
                eventKey={2.1}
                componentClass={Link}
                href="/findCustomer"
                to="/findCustomer"
              >
                View Customer
              </MenuItem>
              <MenuItem eventKey={2.2} 
                componentClass={Link}
                href="/addCustomer"
                to="/addCustomer">Add Customer</MenuItem>
              <MenuItem eventKey={2.3}>Update Customer</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.4}>Delete Customer</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Order">
              <MenuItem
                eventKey={3.1}
                componentClass={Link}
                href="/order"
                to="/order"
              >
                View Order
              </MenuItem>
              <MenuItem eventKey={3.2}>Add Order</MenuItem>
              <MenuItem eventKey={3.3}>Update Order</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Delete Order</MenuItem>
            </NavDropdown>

            <NavItem eventKey={4} title="author" disabled>
              Author
            </NavItem>
          </Nav>

          <Route path="/home" component={Home} />
          <Route path="/findCustomer" component={FindCustomer} />
          <Route path="/addCustomer" component={AddCustomer} />
          <Route path="/order" component={Order} />
        </div>
      </Router>
    );
  }
}
export default HeaderTab;
