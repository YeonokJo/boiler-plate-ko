const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const url = 'mongodb+srv://yojo:abcd1234@cluster0.npjyz4y.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! / 인녕하세요!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
