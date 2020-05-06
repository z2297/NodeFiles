const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a27005e943128130218b251f8c37e9f1/' + latitude + ',' + longitude

    //shorthand
    //request({url: url, json: true}, (error, response) => {
    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('unable to connect to weather service', undefined)
        }
        // else if (response.body.error) {
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            //callback(undefined, 'It is currently ' + response.body.currently.temperature + '. There is a ' + response.body.currently.precipProbability + '% chance of rain')
            callback(undefined, 'It is currently ' + body.currently.temperature + '. There is a ' + body.currently.precipProbability + '% chance of rain')

        }
    })
}

module.exports = forecast


//Old code


//const weatherUrl = 'https://api.darksky.net/forecast/a27005e943128130218b251f8c37e9f1/37.8267,-122.4233'

// request({ url: weatherUrl, json: true }, (error, response) => {
    
//     //before json option
    
//     //const data = JSON.parse(response.body)
//     //console.log(data.currently)
    
//     if (error) {
//         console.log('error with weather service')
//     } 

//     else if (response.body.error) {
//         console.log('unable to find location')
//     }

//     else {
//         //after json option
//         console.log(response.body.currently)
    
//         console.log('It is currently ' + response.body.currently.temperature)
//         console.log('there is a ' + response.body.currently.precipProbability + '% chance of rain')
//     }
// })