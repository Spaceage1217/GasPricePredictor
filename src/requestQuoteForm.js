import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Date from './datepicker';
import Location from './locationPicker';
import { Button, Form, Input,Label,Icon,Container} from 'semantic-ui-react'
import './App.css'


const gallonsRequested = props =>(
    <Form.Field control={Input} label='Gallons Requested' placeholder='Enter Amount' />
);
const dateWrapper = props =>(
    <Form.Field control={Date} label='Date' placeholder='Date' />
);
const locationWrapper = props =>(
    <Form.Field>
        <label>Delivery Location</label>
        <Input icon='search' placeholder='Search...' />
        <Location/>
    </Form.Field>
);
const name = props =>(
    <Form.Field control={Input} label='Name' placeholder='Enter Name' />
);
const phone = props =>(
    <Form.Field>
        <label>Phone Number</label>
        <Input iconPosition='left' placeholder="Enter Phone number" >
            <Icon name='phone' />
            <input />
        </Input>
    </Form.Field>

);
const email = props =>(
    <Form.Field>
        <label>Email</label>

        <Input iconPosition='left' placeholder='Email'>
            <Icon name='at' />
            <input />
        </Input>
    </Form.Field>

);
const suggestedPrice = props =>(
    <Form.Field>
        <label>Suggested Price</label>
        <Input labelPosition='left' type='text' placeholder='Price?'>
            <Label basic>$</Label>
            <input />
        </Input>
    </Form.Field>
);

const totalAmountDue = props =>(
    <Form.Field>
        <label>Amount Due</label>

        <Input labelPosition='left' type='text' placeholder='Amount due?'>
            <Label basic>$</Label>
            <input />
        </Input>
    </Form.Field>
);

let RequestQuoteForm = props => {
    const _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
        }
    };

    const { handleSubmit } = props;
    return (
       <Container textAlign='left'>
           <div className="formStyle">
               <Form onSubmit={handleSubmit}>
                   <Form.Group width = 'equal'>
                       <Field name="gallonsRequested" component={gallonsRequested} type="text" />
                       <Field name="deliveryDate" component={dateWrapper}/>
                       <Field name="suggestedPrice" component={suggestedPrice} type="text" />
                       <Field name="totalAmountDue" component={totalAmountDue} type="text" />
                   </Form.Group>
                   <Field name="deliveryLocation"  onKeyPress={_handleKeyPress} component={locationWrapper}/>
                   <Form.Group widht = 'equal'>
                       <Field name="name" component={name} type="text" />
                       <Field name="phone" component={phone} type="tel" />
                       <Field name="email" component={email} type="email" />
                   </Form.Group>
                   <Form.Field control={Button}>Submit</Form.Field>
               </Form>
           </div>
       </Container>

    )
};

RequestQuoteForm = reduxForm({
    // a unique name for the form
    form: 'quoteForm'
})(RequestQuoteForm);

export default RequestQuoteForm;
