const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static("public"))

//MIDDLEWARE 1
app.use((req, res, next) =>{
    console.log(req.headers);
    req.harry = "I m gagan";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
    console.log(`${Date.now()} is a ${req.method}`);
    next()
})


//MIDDLEWARE 2
app.use((req, res, next) =>{
    console.log('LOGGED')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello World about !' + req.harry)
  })
  app.get('/contact', (req, res) => {
    res.send('Hello World! contact ')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})