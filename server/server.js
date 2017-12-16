require('babel-register');
import path from 'path'
import express from 'express'

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()

app.use(express.static(publicPath))

app.listen(port, () => console.log(`Server is up on port ${port}`))