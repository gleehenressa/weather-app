const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=88102ea5b6e74f4fbb61bd7e2faad3a2&query=' + latitude + ',' + longitude + '&units=f'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". Its currently "   + response.body.current.temperature +  " degree out. It feels like " + response.body.current.feelslike + " degree out.")
        }
    })
}

module.exports = forecast