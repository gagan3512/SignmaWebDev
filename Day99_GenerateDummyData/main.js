const express = require('express')
const mongoose = require('mongoose');
const Employee = require('./models/Employee')
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine', 'ejs');

const getRandom = (arr) =>{
    let rno = Math.floor(Math.random() * (arr.length-1));
    return arr[rno];
}


app.get('/', (req, res) => {
  res.render('index', {foo:'FOO'});
})
app.get('/generate', async (req, res) => {
    //clear the collection of employee'
    await Employee.deleteMany({});
    //generate random data 
    let randomNames = ["Shree guru maharj ji","Ram", "Krishan ji", "Hanuman", "Shiv ji"];
    let randomLanguages = ["Pyhton", "js", "c++", "Java"];
    let randomCities = ["Virindavan", "Kedarnath", "Badrinath", "Anandpur"]


    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 220000),
            language: getRandom(randomLanguages),
            city: getRandom(randomCities),
            isManager : (Math.random)>0.5?true:false
        })
        console.log(e);
    }
    res.render('index', {foo:'FOO'});
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


