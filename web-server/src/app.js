const path = require('path')
const express = require('express')

const pubicFolder = (path.join(__dirname, '../public'))

const app = express()

app.use(express.static(pubicFolder))

//what server does when data is requested
//route, function
app.get('/help', (req, res) => {
    res.send('<h1>Help</h1>')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: null,
        location: ""
    })
})

//port, callback
app.listen(3000, () => {
    console.log('server is running on port 3000')
})