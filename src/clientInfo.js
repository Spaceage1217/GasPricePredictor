import React, {Component} from 'react';
import './App.css';
import {Container ,Card} from 'semantic-ui-react'

export default class ClientInfo extends Component{
    render(){
        return(
            <Container className = "fillScreen">
                <div className="info-wrapper">
                    <Card>
                        <Card.Content>
                            <Card.Header content='John Smith' />
                            <Card.Meta content='Info' />
                            <Card.Description content={
                                <ul className='info'>
                                    <li><span className='ui header'>Address:</span> 192 cypress street</li>
                                    <li><span className='ui header'>Phone:</span> 555-5555</li>
                                    <li><span className='ui header'>Email:</span> John@gmail.com</li>
                                </ul>
                            } />
                        </Card.Content>
                    </Card>

                </div>
            </Container>
        )
    }
}