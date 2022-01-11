/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Training
*/

'use strict';



var server = require('server');

var pm = require('dw/catalog/ProductMgr');
var ArrayList= require('dw/util/ArrayList');


server.get('Start', function(req, res, next){
	   var p1 = pm.getProduct('P2595') ;
	   var p2 = pm.getProduct('bundle') ;
      var p3 = pm.getProduct('productSet') ;            			
   
//       var date = new Date();
	var al= new ArrayList();
		 al.add(p1);
		 al.add(p2); 
		 al.add(p3); 
	res.render('training/training.isml',{
		List:al});
	
      next();



module.exports = server.exports();
