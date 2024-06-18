const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const AdminModel = require('./models/admin');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/adminn");

// User routes
app.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.post('/CreateUser', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({ _id: id }, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// Admin routes
app.post('/signup', (req, res) => {
  AdminModel.create(req.body)
    .then(admins => res.json(admins))
    .catch(err => res.json(err));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  AdminModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("login successfull");
        } else {
          res.json("password incorrect");
        }
      } else {
        res.json({ message: "user not found" });
      }
    })
    .catch(err => res.json(err));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
