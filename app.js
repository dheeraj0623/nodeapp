const express = require('express');
const app = express();
const port = let port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Home Page</h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h1>Welcome to About Page</h1>');
})

app.get('/contact',(req,res)=>{
    res.send('<h1>Welcome to Contact Page</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})