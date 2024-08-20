// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/datastorage', {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(()=>{
//     console.log("connection successful");
// }).catch(()=>{
//     console.log("no connection");
// });

const mongoose = require('mongoose')
const connectDB= async()=>{
    const connect = await mongoose.connect('mongodb://localhost:27017/crude_node');
    if (connect) {
        console.log('connection is succesfull')
    } else {
        console.log('not connecting')
    }
}
connectDB()