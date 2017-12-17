const path = require('path')
require('babel-register')

const paths = [
    './utils/message.test'
]

paths.map(file => {
    require(file)
})