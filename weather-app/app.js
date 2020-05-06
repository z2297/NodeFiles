//  !!!!!!!!!!!!!!!!
//  ||||||||||||||||
//  \/\/\/\/\/\/\/\/
//request must have a https://

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
    console.log('Address required on CLI')
}
else {
    //object destructuring
    //geocode(address, (error, geocodeData) => {
    geocode(address, (error, { latitude, longitude, location }) => {
        //function exits if error
        if(error) {
            return console.log(error)
        }
    
        //forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
        forecast(latitude, longitude, (error, forecastData) => {

            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}

//callback chaining