// 1. import express
const express=require('express')
//2. create app 
const app=express()

let a=5
// Middleware 
app.use((req,res,next)=>{
    if (a===5){
        next()
    } else {
        res.json({message:'not authorized'})
    }
    })

// get method path : '/'
app.get('/',(req,res)=>{
    res.send('<h1> hello F3 </h1>')
})
// get method path : '/products'
app.get('/products',(req,res)=>{
    res.send('<h1> list of products  </h1>')
})
// get method path : '/products/:id'
app.get('/products/:id',(req,res)=>{
    const {id}=req.params
    res.json({product:id,numberOfProducts:5000})
})
// get/post/delete/put method path : 'all'
app.use('*',(req,res)=>{
    res.json({message:'page not found'})
})


//3. create Port
const PORT= 4000 
//4.listening on port 
app.listen(PORT, (err)=>
    err ? console.log(err) : console.log('app listening on port 4000')
)
