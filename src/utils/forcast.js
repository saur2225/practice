const request = require('request')

const forcast = (latitude, longitude, callback)=>{
const url = 'https://api.darksky.net/forecast/141b49a629f5a90883195a70b68b14aa/'+latitude+','+longitude;

request({url:url, json:true},(error, response)=>{
    if(error){
        return callback('unable to fetch',undefined)
    }
    callback(undefined,response.body.currently.summary+'It is currently '+response.body.currently.temperature+' degrees out there. Their is '+response.body.currently.precipProbability+' chances of rain')
})
}
module.exports = forcast
