const request = require('request');

function getCenters(place){
    // const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1`;

    const geocodeURL =`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1`;
    const center= null;
    setTimeout(() => {
        request({url: geocodeURL, json: true}, function (error, response, body) {
        center = body.features[0].center;
        
        });

        
    }, 1000 );
    return  center;
}
 const [latitude, longitude] = getCenters('winnipeg');
        console.log(`${latitude} - ${longitude}`)

// const [latitude, longitude] = getCenters('winnipeg');
// const [latitude, longitude] = getCenters('Winnipeg');

// const forecastURL =`https://api.darksky.net/forecast/d5fb7c8c84d79b8e51fc09e0886145c2/${latitude},${longitude}`;

// request({url:forecastURL, json: true}, function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//  // const data = JSON.parse(body);
//     console.log(` Daily Summary: ${body.daily.summary} It is currently ${body.currently.summary}`);

// });




//d5fb7c8c84d79b8e51fc09e0886145c2
//https://api.darksky.net/forecast/d5fb7c8c84d79b8e51fc09e0886145c2/49.8746,-97.138

//pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg

//forward geocoding endpoint
///geocoding/v5/{endpoint}/{search_text}.json
//https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1