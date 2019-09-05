
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(address){
    geocode(address, (error, {latitude, longitude, location}) => {
        if(error) {
             return console.log(`GeoError: `, error);   
        }
         else {
     
             forecast(latitude,longitude,location, (error, forecastData) => {
                 if(error) {
                     return console.log(`ForecastError: `, error);
                 } 
                 console.log(`Forecast: `,forecastData);
                 
             });
         }
     })    
} else {
    console.log('Please provide an address');

}



