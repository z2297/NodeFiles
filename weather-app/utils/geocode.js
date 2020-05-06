const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiejIyOTciLCJhIjoiY2sxczN3M3NoMDA5eTNjbWs0bWx0ampmcSJ9.AnqRPSCchcjiJsdRmoM4nA'

    //shorthand -- see forecast.js
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    
}

module.exports = geocode

//old method

//const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiejIyOTciLCJhIjoiY2sxczN3M3NoMDA5eTNjbWs0bWx0ampmcSJ9.AnqRPSCchcjiJsdRmoM4nA'
// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('error with geocoding service')
//     }
//     else if (response.body.features.length ===0) {
//         console.log('Unable to find location')
//     }
//     else {
//         const long = response.body.features[0].center[0]
//         const lat = response.body.features[0].center[1]
//         console.log('Lattitude: ' + lat + ', longitude ' + long)
//     }
// })