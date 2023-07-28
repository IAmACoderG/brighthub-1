require("dotenv").config();
const express = require('express');
var cors = require('cors')
const connectToMongo = require('./db');
const bodyParser = require('body-parser');
const student = require('./Modal');
const path = require('path')

const app = express();
app.use(cors())
connectToMongo();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
})


const port = 3001

//FOR CREATE THE USER DETAILS

app.post('/api/user/dreamworld', async (req, res) => {
  try {

    const User = await student.create(req.body);

    res.status(201).json({
      success: true,
      User
    })
  }

  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


})
//FOR READ THE USER DETAILS

app.get('/api/user/dreamworld/users', async (req, res) => {
  const Users = await student.find();

  res.status(200).json({
    success: true,
    Users
  })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})