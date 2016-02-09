/* start module: pyjamas.Canvas.ColorStop */
$pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ColorStop']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ColorStop>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ColorStop';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['ColorStop'] = $pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'];


	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
	$m['ColorStop'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.ColorStop';
		$method = $pyjs__bind_method2('__init__', function(myOffset, myColor) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				myOffset = arguments[1];
				myColor = arguments[2];
			}

			self['offset'] = myOffset;
			self['color'] = myColor;
			return null;
		}
	, 1, [null,null,['self'],['myOffset'],['myColor']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('cloneColorStop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['ColorStop']($p['getattr'](self, 'offset'), $m['Color']($p['str'](self['color']())));
		}
	, 1, [null,null,['self']]);
		$cls_definition['cloneColorStop'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ColorStop', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.ColorStop */


/* end module: pyjamas.Canvas.ColorStop */


/*
PYJS_DEPS: ['pyjamas.Canvas.Color.Color', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.Color']
*/
