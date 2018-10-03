var mongoose = require('mongoose');
//define schema
var Schema = mongoose.Schema;
var QuoteSchema = new Schema({
    clientId: {
        type: Number
    },
    gallonsRequested: {
        type: Number,
        min: 1,
        required: [true, 'Number of gallons is required']
    },
    deliveryDate: {
        type: Date,
        required: [true, 'Delivery date is required']
    },
    requestDate: {
        type: Date,
        required: [true, 'Request date is required']
    },
    deliveryLocation:{
        type: String,
        required: [true, 'Location is required']
    },
    deliveryContactName:{
        type: String,
        required: [true, 'Delivery Contact Name is required']
    },
    deliveryContactPhone:{
        type: String,
        minLength: 10,
        maxLength 10,
        required: [true, 'Contact Phone Number is required']
    },
    deliveryContactEmail:{
        type: String,
        required: [true, 'Email field is required']
    },
    suggestedPrice:{
        type: Number,
        required: [true, 'Suggested price field is required']
    },
    totalAmountDue:{
          type: Number
      }

});

ClientInfoSchema.path('name')
    .get(function(value) {
        return value;
    })
    .set(function(value) {
        return value;
});
