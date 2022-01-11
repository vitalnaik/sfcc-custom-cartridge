/**
* Description of the Controller and the logic it provides
*
* @module  controllers/ContentAsset
*/

'use strict';

var server = require('server');



server.get('Test', function(req, res, next){
	res.render('training/contentasset' );
	next(); 	
});

module.exports = server.exports();
	   