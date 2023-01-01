const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const db = require('./Conection')
const app = express()

// Middleware

app.use(express.json())
// app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }))

// Making public file available to the server
// app.use(express.static(path.resolve('./public')));

app.use(cors())

// Running server
app.listen(9000, () => {
  console.log('Server is running')
})

const category = require('./Routes/category.js')
app.use(category)
