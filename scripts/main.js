require.config({
	paths:{
		"jquery"	: "vendor/jquery/jquery.min", 
		"creatable"	: "vendor/creatable/index", 
		"underscore": "vendor/underscore-amd/underscore-min", 
	}
});

require([
	'jquery',
	'creatable'

], function($){
	var build = [[
		['textarea.try-creatable'],
		['textarea.try-html'],				
	]];
	$('div.container').html(Creatable.create(build));
});
