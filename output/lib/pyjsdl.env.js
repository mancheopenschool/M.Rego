/* start module: pyjsdl.env */
$pyjs['loaded_modules']['pyjsdl.env'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.env']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.env'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.env'];
	$m['__repr__'] = function() { return '<module: pyjsdl.env>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.env';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['env'] = $pyjs['loaded_modules']['pyjsdl.env'];


	$m['canvas'] = null;
	$m['frame'] = null;
	$m['pyjs_mode'] = null;
	return this;
}; /* end pyjsdl.env */


/* end module: pyjsdl.env */


