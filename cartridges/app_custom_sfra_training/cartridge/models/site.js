/**
* Description of the module and the logic it provides
*
* @module cartridge/models/site
*/

'use strict';


var System = require('dw/system');
var ArrayList= require('dw/util/ArrayList');
var pm = require('dw/catalog/ProductMgr');

function getPreferences() {
	var site = System.Site.getCurrent();
	var preference = site.getCustomPreferenceValue('productId');

	var al= new ArrayList();
		for(var i=0; i<preference.length ;i++){
			al.add(pm.getProduct(preference[i]));
		}
    
		return al;
    
}
    	
 
module.exports = getPreferences();
		