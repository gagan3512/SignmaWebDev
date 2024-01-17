const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchName = "Search Now";
    let arr = ["hey",54,55];
  res.render("index" , {siteName: siteName , searchName: searchName, arr  })
})


app.get('/blog/:slug', (req, res) => {
    let  blogTitle = "adidas why and when";
    let blogContent = "Its good";
  res.render("template" , {blogTitle: blogTitle, blogContent: blogContent})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})