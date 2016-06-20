/* start module: pyjamas.Canvas.Color */
$pyjs['loaded_modules']['pyjamas.Canvas.Color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.Color']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.Color'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.Color'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.Color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.Color';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['Color'] = $pyjs['loaded_modules']['pyjamas.Canvas.Color'];


	$m['Color'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.Color';
		$method = $pyjs__bind_method2('__init__', function(r, g, b, a) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				r = arguments[1];
				g = arguments[2];
				b = arguments[3];
				a = arguments[4];
			}
			if (typeof g == 'undefined') g=arguments['callee']['__args__'][4][1];
			if (typeof b == 'undefined') b=arguments['callee']['__args__'][5][1];
			if (typeof a == 'undefined') a=arguments['callee']['__args__'][6][1];
			var $and1,$and3,$and2;
			if ($p['bool'](($p['bool']($and1=(g === null))?($p['bool']($and2=(b === null))?(a === null):$and2):$and1))) {
				self['colorStr'] = r;
			}
			else if ($p['bool']((a === null))) {
				self['colorStr'] = $p['sprintf']('rgb(%d,%d,%d)', $p['tuple']([r, g, b]));
			}
			else {
				self['colorStr'] = $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([r, g, b, a]));
			}
			return null;
		}
	, 1, [null,null,['self'],['r'],['g', null],['b', null],['a', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'colorStr');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Color', $p['tuple']($bases), $data);
	})();
	$m['ALPHA_GREY'] = $m['Color']('rgba(0,0,0,0.3)');
	$m['ALPHA_RED'] = $m['Color']('rgba(255,0,0,0.3)');
	$m['BLACK'] = $m['Color']('#000000');
	$m['BLUE'] = $m['Color']('#318ce0');
	$m['BLUEVIOLET'] = $m['Color']('#8a2be2');
	$m['CYAN'] = $m['Color']('#5fa2e0');
	$m['GREEN'] = $m['Color']('#23ef24');
	$m['GREY'] = $m['Color']('#a9a9a9');
	$m['LIGHTGREY'] = $m['Color']('#eeeeee');
	$m['ORANGE'] = $m['Color']('#f88247');
	$m['PEACH'] = $m['Color']('#ffd393');
	$m['PINK'] = $m['Color']('#ff00ff');
	$m['RED'] = $m['Color']('#ff0000');
	$m['SKY_BLUE'] = $m['Color']('#c6defa');
	$m['WHITE'] = $m['Color']('#ffffff');
	$m['YELLOW'] = $m['Color']('yellow');
	$m['DARK_ORANGE'] = $m['Color']('#c44607');
	$m['BRIGHT_ORANGE'] = $m['Color']('#fb5c0c');
	$m['DARK_BLUE'] = $m['Color']('#0c6ac1');
	return this;
}; /* end pyjamas.Canvas.Color */


/* end module: pyjamas.Canvas.Color */


