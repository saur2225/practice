const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const app = express()
const port = process.env.PORT || 3000
const pathD = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partials = path.join(__dirname,'../templates/partials')

app.set('views',viewspath)
app.set('view engine','hbs')
hbs.registerPartials(partials)

app.use(express.static(pathD))
app.get('',(req, res)=>{
    res.render('index',{
        title:'weather',
        name:'Saurabh Srivastava'
    })
})
app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send('kindly provide something')
    }
    geocode(req.query.address,(error, {latitude, longitude, location} = {})=>{
    if(error){
        return res.send({error})
    }
    forcast(latitude, longitude, (error, forcastdata)=>{
        if(error){
            return res.send({error})
        }
           res.send({
               forcastdata:forcastdata,
               location,
           })
})
})
    
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})