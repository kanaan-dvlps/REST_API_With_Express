const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/Users');
const app = express();


module.exports = app => {
  //Show users
  app.get('/api/register', async (req, res) =>{
    try{
    const users = await User.find({});
    res.send(users);
  } catch(err) {
    res.json(err.message);
  }
  });
  //Show Single User By Id
  app.get('/api/register/:id', async (req, res) =>{
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch(err) {
      res.json(` Sorry there is no such user with the id of: ${req.params.id} `);
    }
  });

  
  //Add the User
  app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password
    });
    try{
      const newUser = await user.save();
      res.sendStatus(201);
    } catch(err) {
      res.json(err.message);
    }
    console.log(req.body);
  });

}