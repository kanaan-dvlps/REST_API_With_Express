const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.listen(config.PORT, ()=>{
  mongoose.set('useFindAndModify', false);
  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true
  });
  console.log(`Server Runing On Port: ${config.PORT}`);
});


const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () =>{
  require('./routes/customers')(app);
  require('./routes/users')(app);
});