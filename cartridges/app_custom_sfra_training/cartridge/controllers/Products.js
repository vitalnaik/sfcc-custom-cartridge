/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Products
*/

'use strict';

var server = require('server');
var myobj = require('*/cartridge/models/site.js');

server.get('Show', function(req, res, next){
	res.render('training/landingPage', { List : myobj });
	next(); 	   
});

module.exports = server.exports();
		

