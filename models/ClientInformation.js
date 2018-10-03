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
        required: [true, 'Name field is required']
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength 10,
        required: [true, 'Name field is required']
    },
    email:{
        type: String
        required: [true, 'Email field is required']
    }

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
mongoose.model('ClientInfomation', ClientInfoSchema);
module.exports = mongoose.model('ClientInfomation');
