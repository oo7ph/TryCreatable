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
	var container = $('div.container');
	var build = [[
		['textarea.try-creatable'],
		['textarea.try-html'],				
	]];
	
	container.html(Creatable.create(build));
	
	container.on('keyup','.try-creatable' ,function(e){
		var htmlTextbox = $('.try-html');
		try{
			Creatable.setDocument(Creatable.emulatedDocument)
			htmlTextbox.val(Creatable.create(eval(e.target.value)).toString());
		}
		catch(e){
			htmlTextbox.val('Enter Valid Creatable Array Syntax...');
		}
	});
	
});
