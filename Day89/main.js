const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log("its a get request");
    res.send('Hello World15!')
})

app.post('/', (req, res) => {
    console.log("its a post request");
    res.send('Hello World post !')
})

app.put('/', (req, res) => {
    console.log("its a put request");
    res.send('Hello World put !')
})

app.get("/index",(req, res) => {
    console.log("its a index");
    res.sendFile('templates/index.html' , {root:__dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})