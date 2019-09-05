const https = require('https');
const url =`https://api.darksky.net/forecast/d5fb7c8c84d79b8e51fc09e0886145c2/42.3601,-71.0589?units=si`;

const req = https.request(url,  (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
  
    let data = '';
    res.on('data', (chunk) => {
        data = (data + chunk).toString()
        
      //process.stdout.write(d);
    });

 

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

  });

  req.on('error', (e) => {
    console.error(e);
  });
  
req.end();
 