var mongoose = require('mongoose');
//define schema
var Schema = mongoose.Schema;
var ClientInfoSchema = new Schema({
    clientId: {
        type: Number
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    address: {
        type: String,
        required: [true, 'Address field is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number field is required']
    },
    email:{
        type: String,
        required: [true, 'Email field is required']
    }

});

ClientInfoSchema.path('clientId')
    .get(function(value) {
        return value;
    })
    .set(function(value) {
        return value;
});

ClientInfoSchema.path('name')
    .get(function(value) {
        return value;
    })
    .set(function(value) {
        return value;
});

ClientInfoSchema.path('address')
    .get(function(value) {
        return value;
    })
    .set(function(value) {
        return value;
});

ClientInfoSchema.path('phone')
      .get(function(value) {
          return value;
      })
      .set(function(value) {
          return value;
  });

ClientInfoSchema.path('email')
    .get(function(value) {
        return value;
    })
    .set(function(value) {
        return value;
});

//create model
mongoose.model('ClientInfo', ClientInfoSchema);
module.exports = mongoose.model('ClientInfo');
