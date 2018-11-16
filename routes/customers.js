const express = require('express');
const bodyParser = require('body-parser'); 
const Customer = require('../models/Customers');
const app = express();


module.exports = app =>{
//Get Customers
app.get('/api/customers', async (req, res) => {
  try{
    const customers = await Customer.find({});
    res.send(customers);
  } catch (err){
    console.log(err);
  }
});
//Get Single Customer
app.get('/appi/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.send(customer);
  } catch (err){
    send.json(`There is no user with id of ${(req.params.id)}`);
  }
});
//Add Customers (get it done this is where i left off)
app.post('/api/customers', async (req, res) => {
  // if(!req.is('Application/json')) {
  //   res.send(" Expects 'Application/json' ");
  // }
  const { name,  email } = req.body;
  const customer = new Customer({
    name,
    email
  });
  try {
    const newCustomer = await customer.save();
    res.sendStatus(201);
  } catch (err){
    res.send(err);
  }
});
//Update Customers
app.put('/api/customers/:id', async (req, res) =>{
  // if(!req.is('Application/json')){
  //   res.send(" Expects 'Application/json' ");
  // }
  try{
    const customer = await Customer.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.sendStatus(200);
  } catch (err){
     res.json( `Sorry no customer with the id of: ${req.params.id}` );
  }
});
app.delete('/api/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findOneAndRemove({ _id: req.params.id });
    res.sendStatus(204);
  } catch(err) {
    res.json(`Sorry there is no Customer with id of: ${req.params.id} `);
  }
});

}
