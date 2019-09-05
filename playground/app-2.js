const request = require('request');

function getCenters(place){
    // const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1`;

    const geocodeURL =`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1`;

        request({url: geocodeURL, json: true}, function (error, response, body) {
            if(error){
                console.log(`Unable to connect to weather service!`)
            } else if (response.body.error) {

            } else {

                const longitude = body.features[0].center[1];
                const latitude = body.features[0].center[0];
            }
        
        });

}
 const fcenter = getCenters('winnipeg');
 console.log(`${fcenter}`)
        // console.log(`${latitude} - ${longitude}`)


