const request = require('request');

const geocode = (address, callback) => {
    // const geocodeURL =`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1`;
    const geocodeURL =`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1`;
    
    let center;
    request({url: geocodeURL, json: true}, function (error, response, body) {
        // setTimeout(()=>{
            if(error){
                callback(`Unable to connect to location service!`, undefined);
            } else if (body.message) {
                callback(body.message, undefined);
            } else if ( body.features.length === 0 ) {
                callback(`Unable to find location. Try another search.`, undefined); 
            } else {
                console.log('asiya')
                const longitude = body.features[0].center[1];
                const latitude = body.features[0].center[0];
                const location = body.features[0].place_name;
                 center = {
                    latitude,
                    longitude,
                    location

                }
                
                callback(undefined, center);
            }
            
        // }, 1000);
    });

}

function getweather(center){
    const latitude = center.latitude;
    const longitude = center.longitude;
    const location = center.location;
    const url =`https://api.darksky.net/forecast/d5fb7c8c84d79b8e51fc09e0886145c2/${longitude},${latitude}`;
    request({url: url, json:true}, function (error, response, body) {
        if(error){
            console.log('unable to connect to weather service')
        } else if(body.error) {
            console.log(body.error);
        }
        console.log(`Weather of ${location}: Daily Summary: ${body.daily.summary} It is currently ${body.currently.summary}`);

    });
}

geocode('winnipeg', (error, data) => {
   
        console.log(`GeoCode: `, data);
        console.log(`Error: `, error);
    getweather(data);
})