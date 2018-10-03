import React from 'react';
import ReactTable from 'react-table'

export default class QuoteHistory extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    componentDidMount(){}

    render() {
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }];

        const columns = [{
                Header: 'Item #',
                accessor: 'Quote.itemNumber' // String-based value accessors!
            }, {
                Header: 'Request Date',
                accessor: 'Quote.date',
            }, {
                Header: 'Delivery Date',
                accessor: 'Quote.deliveryDate'
            }, {
                Header: 'Gallons Rate', // Custom header components!
                accessor: 'Quote.gallonRate'
            },
            {
                Header: 'Total Price', // Custom header components!
                accessor: 'Quote.totalPrice'
            }];

            return (
                <ReactTable
                    data={data}
                    columns={columns}
                />
            )
    }
}