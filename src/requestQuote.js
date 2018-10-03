import React from 'react'
import RequestQuoteForm from './requestQuoteForm'

export default class RequestQuote extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    };
    render() {
        return <RequestQuoteForm onSubmit={this.submit} />
    }
}