
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url ='http://api.weatherstack.com/current?access_key=88102ea5b6e74f4fbb61bd7e2faad3a2&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//    if (error) {
//     console.log('Unable to connect to weather service!')
//    }else if (response.body.error) {
//         console.log('Unable to find location')
//    }else {
//     console.log(response.body.current.weather_descriptions[0] + ". Its currently "   + response.body.current.temperature +  " degree out. It feels like " + response.body.current.feelslike + " degree out.")
//    }
// })

//Geocoding
//address -> lat/long -> weather
// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphea.json?access_token=pk.eyJ1IjoiaGVucmVzc2EiLCJhIjoiY2t2YWt5OGtiMDU0eTJvcWljazJhcHpjNSJ9.CATzPdJ7r-CBcrLD11gdzg'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. try another search.')
//     } else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
 
// })


geocode ('Boston', (error, data) => {
    console.log('error', error)
    console.log('data', data)

    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })

})