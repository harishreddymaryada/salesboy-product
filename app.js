const express = require('express')
const logger = require('morgan')

const app = express()


// middlewares

app.use(logger('dev'))

//Routes
app.get('/',(req,res,next)=>{
  res.status(200).json({message:'Working'})
})

// catch 404 errors
app.use((req,res,next) =>{
  const err = new Error('Not Found')
  err.status=404
  next(err)
})
//error handlers
app.use((req,res,next)=>{
  const error = app.get('env') === 'development'?err:{}
  const status = err.status || 500

  res.status(status).json({error:{
    message:error.message
  }})
  console.log(err)
})
// start the server

const port = app.get('port')||7777
app.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
})
