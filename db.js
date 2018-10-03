var mongoose = require('mongoose');

mongoose.useMongoClient
mongoose.connect('')
    .then(function (data){
        console.log(data);
    }).catch(function (error) {
    console.log("Mongodb connection failed. Error is: " + error)
});
