
const geocode = (address, callback) => {
    const geocodeURL =`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNpYWF3YW4iLCJhIjoiY2p6a2tseXJnMDIwcjNsbjRsbWJhbmtmOSJ9.onfVajF4zLjkrswG2ddCeg&limit=1`;
    setTimeout(() => {
        const center = {
            latitude:0,
            longitude:0
        }
         center;
        callback(center);
    }, 1000);

}

geocode('winnipeg', (center) => {
    console.log(center);
})

