const express = require('express')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

module.exports=app