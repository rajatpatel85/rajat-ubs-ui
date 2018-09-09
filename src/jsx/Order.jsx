import React, {Component} from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class Order extends Component {
  state = {
    data: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = "http://localhost:8081/v1/order";

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
				 dataField='orderId'
				 dataAlign='center'
				 headerAlign="center"
				 width="1%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 orderId
				 </TableHeaderColumn>
				 <TableHeaderColumn 
				 dataField='customerId'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 customerId
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='orderCode'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					orderCode
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='orderDescription'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					orderDescription
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='orderCreateDate'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					 orderCreateDate
				 </TableHeaderColumn>

				 <TableHeaderColumn 
				 dataField='registeredDate'
				 dataAlign='center'
				 headerAlign="center"
				 width="2%"
				 tdStyle={{backgroundColor: 'grey'}}
				 thStyle={{backgroundColor: 'cornflowerblue'}}
				 >
					registeredDate
				</TableHeaderColumn>
			 </BootstrapTable>
		 </div>
	 );
	}
}

export default Order;