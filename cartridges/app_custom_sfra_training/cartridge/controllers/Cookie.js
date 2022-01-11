/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Cookie
*/

'use strict';

var server = require('server');



server.get('Show', function(req, res, next){
	 
	
	var cs = request.httpCookies['P2595'].value;
	if(cs) {
			res.render('training/cookie',  { Cookie : cs	} );
			next(); 	
	}else {
		console.log('Cookie not found');
	}      
	   
});

module.exports = server.exports();
		
				


