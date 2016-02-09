/* start module: pyjsdl.env */
$pyjs['loaded_modules']['pyjsdl.env'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.env']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.env'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.env'];
	$m['__repr__'] = function() { return '<module: pyjsdl.env>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.env';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['env'] = $pyjs['loaded_modules']['pyjsdl.env'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.env.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[10] = 'pyjsdl.env.py, line 10:\n    frame = None';
		$m.__track_lines__[11] = 'pyjsdl.env.py, line 11:\n    pyjs_mode = None';
		$m.__track_lines__[9] = 'pyjsdl.env.py, line 9:\n    canvas = None';


		$pyjs['track']['module']='pyjsdl.env';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=9;
		$m['canvas'] = null;
		$pyjs['track']['lineno']=10;
		$m['frame'] = null;
		$pyjs['track']['lineno']=11;
		$m['pyjs_mode'] = null;
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.env */


/* end module: pyjsdl.env */


