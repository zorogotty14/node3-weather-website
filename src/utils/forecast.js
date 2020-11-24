const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=d8a1f97ccb6a41c88ba54451201411&q=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            const temp = body.current.temp_c
            const precip = body.current.precip_mm
            const summary = body.current.condition.text

            callback(undefined, summary + ' and it is currently ' + temp + ' degree. There is a ' + precip + ' percent chance of rain')
        }
    })
}

module.exports = forecast