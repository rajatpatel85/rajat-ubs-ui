import React, {Component} from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

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
				 tdStyle={{backgroundColor: 'white'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 ID
				 </TableHeaderColumn>
				 <TableHeaderColumn 
				 dataField='customerFirstName'
				 dataAlign='center'white
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'white'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 First Name
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='customerLastName'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'white'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 Last Name
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='workNumber'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'white'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 Work Number
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='mobileNumber'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'white'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 Mobile Number
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='registeredDate'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'white'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					Registered Date
				</TableHeaderColumn>
			 </BootstrapTable>
		 </div>
	 );
	}
}

export default Customer;