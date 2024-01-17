const express = require('express')
const app = express()
const port = 3000

//to make anything public 
app.use(express.static(`public`))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About us ')
  })
  app.get('/contact', (req, res) => {
    res.send('contact us !! ')
  })
  app.get('/blog', (req, res) => {
    res.send('write a blog')
  })

app.get('/blog/:slug/', (req,res)=>{
    //http://localhost:3000/blog/mode=dark&region=ca
    console.log(req.params);  //  params: { slug: 'intro-to-js' },
    console.log(req.query);  //  params: { slug: 'mode=dark&region=ca' },

    res.send(`hello ${req.params.slug}`);
})

// app.get('/blog/:slug/:second/:one', (req,res)=>{
//     res.send(`hello ${req.params.slug} and ${req.params.second} and ${req.params.one}`);
// })

//   app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Intro to js')
//   })
//   app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Intro to python')
//   })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})