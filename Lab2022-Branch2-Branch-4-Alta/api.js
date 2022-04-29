var Facturas = require('./server/models/facturas');
const facturasctr = require('./server/controllers/facturas.controller');
var facturasroutes = require('./server/routes/facturas.routes');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',facturasroutes);

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API de Facturas esta ejecutandose en: ' + port);

