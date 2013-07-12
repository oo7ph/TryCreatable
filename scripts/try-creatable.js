require.config({
	paths:{
		"jquery"	: "vendor/jquery/jquery.min", 
		"creatable"	: "vendor/creatable/index", 
		"codemirror": "vendor/codemirror/lib/codemirror", 
		"codemirrorJavascriptMode": "vendor/codemirror/mode/javascript/javascript", 	
		"codemirrorHTMLMode": "vendor/codemirror/mode/xml/xml", 	
		"codemirrorHTMLMode": "vendor/codemirror/mode/xml/xml", 	
	},
	shim: {
        'codemirrorJavascriptMode': ['codemirror'],
        'codemirrorHTMLMode': ['codemirror'],        
    }
});

require([
	'jquery',
	'creatable',
	'codemirrorJavascriptMode',
	'codemirrorHTMLMode',
	'codemirror-formatting'

], function($){
	function renderCodeMirror(){
		var creatableCodeMirror = CodeMirror.fromTextArea(document.getElementById('creatableMarkup'), {
			theme: 'blackboard',
			height: "350px",
		    autoMatchParens: true,
			mode: {
				name: 'javascript',
				json: true,
				typescript: true
			}
		});
		var htmlCodeMirror = CodeMirror.fromTextArea(document.getElementById('htmlMarkup'), {
			theme: 'blackboard',
			height: "350px",
		    autoMatchParens: true,
			mode: {
				name: 'xml',
				htmlMode: true
			}
		});
		
		creatableCodeMirror.on('change', function(el){
			try{
				Creatable.setDocument(Creatable.emulatedDocument)
				htmlCodeMirror.setValue(Creatable.create(eval(el.getValue())).toString());
				htmlCodeMirror.autoFormatRange({line:0, ch:0}, {line: htmlCodeMirror.lineCount(), ch:htmlCodeMirror.getValue().length});
			}
			catch(error){
				htmlCodeMirror.setValue('Enter Valid Creatable Array Syntax...');
			}
		});
		
		creatableCodeMirror.setValue("['.foo',[\n\t['p',[\n\t\t['a', { href:'google.com' }, 'google']\n\t]]\n]]");
	};
	
	$('div.container').html(Creatable.create([[
		['textarea#creatableMarkup'],
		['textarea#htmlMarkup'],				
	]]));
	renderCodeMirror();
	
});
