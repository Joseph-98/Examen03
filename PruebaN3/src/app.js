const express = require('express');
const app = express();
const request = require('request');
const async = require('async');

app.get('/', (req, res) => {
    async.times(1, (i, callback) => {
    var options = {
        url: 'https://www.datos.gov.co/resource/neyd-wk69.json',
    }
    request(options.url, (error, response, body) => {
        var result = JSON.parse(body);
        var data = result[0].municipio;
        callback(null, result);
        console.log(data);
    });
    }, (err, error) => {
        res.json(error);
    });
})
app.get('/robos', (req, res) => {
    async.times(1, (i, callback) => {
    var options = {
        url: 'https://www.datos.gov.co/resource/in3j-awgi.json',
    }
    request(options.url, (error, response, body) => {
        var result = JSON.parse(body)
        // console.log(result)
        var data = result.features;
        callback(null, data);
        console.log(data);
    });
    }, (err, error) => {
        res.json(error);
    });
})
app.listen('8080', () => {
    console.log('Escuchado en el puerto 8080');
});
