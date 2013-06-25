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
	
	// Proper tab handling
	$("textarea").keydown(function(e) {
	    if(e.keyCode === 9) { // tab was pressed
	        // get caret position/selection
	        var start = this.selectionStart;
	        var end = this.selectionEnd;
	
	        var $this = $(this);
	        var value = $this.val();
	
	        // set textarea value to: text before caret + tab + text after caret
	        $this.val(value.substring(0, start)
	                    + "\t"
	                    + value.substring(end));
	
	        // put caret at right position again (add one for the tab)
	        this.selectionStart = this.selectionEnd = start + 1;
	
	        // prevent the focus lose
	        e.preventDefault();
	    }
	});
	
});
