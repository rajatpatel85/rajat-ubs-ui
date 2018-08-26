import React, {Component} from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class Customer extends Component {
  state = {
    data: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = "http://localhost:8080/v1/customer";

    fetch(url).then(result => result.json()).then(result => {
      this.setState({data: result})
    });
  }

  render() {
		const {data} = this.state;
		return (
		 <div>
			 <BootstrapTable data={data} striped hover> 
				 <TableHeaderColumn isKey 
				 dataField='customerId'
				 dataAlign='center'
				 headerAlign="center"
				 width="1%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'green'}}
				 >
					 ID
				 </TableHeaderColumn>
				 <TableHeaderColumn 
				 dataField='customerFirstName'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'green'}}
				 >
					 First Name
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='customerLastName'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'green'}}
				 >
					 Last Name
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='workNumber'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'green'}}
				 >
					 Work Number
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='mobileNumber'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'green'}}
				 >
					 Mobile Number
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='registeredDate'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'green'}}
				 >
					Registered Date
				</TableHeaderColumn>
			 </BootstrapTable>
		 </div>
	 );
	}
}

export default Customer;