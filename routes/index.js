const express=require('express')
const Router=express.Router()

// this is the entry point of all the api named url's
console.log("arun love")
Router.use('/api',require('./api/index'));

module.exports=Router;