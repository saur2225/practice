const request = require('request')

const geocode = (address, callback)=>{
const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2F1cjIyMjUiLCJhIjoiY2s3eWtjMzVoMDdpNjNkcnRmd2ZobWp4cSJ9.7WjvfXD-BKgjKnnzv9L4tg'

request({url:geocode, json:true},(error, response)=>{
    if(error){
        return callback(error, undefined)
    }
    callback(undefined,{
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
    })
})
}

module.exports = geocode