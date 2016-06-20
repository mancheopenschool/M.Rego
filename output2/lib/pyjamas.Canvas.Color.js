/* start module: pyjamas.Canvas.Color */
$pyjs['loaded_modules']['pyjamas.Canvas.Color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.Color']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.Color'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.Color'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.Color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.Color';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['Color'] = $pyjs['loaded_modules']['pyjamas.Canvas.Color'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.Color.py, line 1:\n    """';
		$m.__track_lines__[18] = 'pyjamas.Canvas.Color.py, line 18:\n    """*';
		$m.__track_lines__[23] = 'pyjamas.Canvas.Color.py, line 23:\n    class Color:';
		$m.__track_lines__[29] = 'pyjamas.Canvas.Color.py, line 29:\n    """*';
		$m.__track_lines__[37] = 'pyjamas.Canvas.Color.py, line 37:\n    """*';
		$m.__track_lines__[46] = 'pyjamas.Canvas.Color.py, line 46:\n    def __init__(self, r, g=None, b=None, a=None):';
		$m.__track_lines__[47] = 'pyjamas.Canvas.Color.py, line 47:\n    if g is None and b is None and a is None:';
		$m.__track_lines__[48] = 'pyjamas.Canvas.Color.py, line 48:\n    self.colorStr = r';
		$m.__track_lines__[50] = 'pyjamas.Canvas.Color.py, line 50:\n    self.colorStr = "rgb(%d,%d,%d)" % (r, g, b)';
		$m.__track_lines__[52] = 'pyjamas.Canvas.Color.py, line 52:\n    self.colorStr = "rgba(%d,%d,%d,%f)" % (r, g, b, a)';
		$m.__track_lines__[54] = 'pyjamas.Canvas.Color.py, line 54:\n    def __str__(self):';
		$m.__track_lines__[55] = 'pyjamas.Canvas.Color.py, line 55:\n    return self.colorStr';
		$m.__track_lines__[59] = 'pyjamas.Canvas.Color.py, line 59:\n    """';
		$m.__track_lines__[63] = 'pyjamas.Canvas.Color.py, line 63:\n    ALPHA_GREY = Color("rgba(0,0,0,0.3)")';
		$m.__track_lines__[64] = 'pyjamas.Canvas.Color.py, line 64:\n    ALPHA_RED = Color("rgba(255,0,0,0.3)")';
		$m.__track_lines__[65] = 'pyjamas.Canvas.Color.py, line 65:\n    BLACK = Color("#000000")';
		$m.__track_lines__[66] = 'pyjamas.Canvas.Color.py, line 66:\n    BLUE = Color("#318ce0")';
		$m.__track_lines__[67] = 'pyjamas.Canvas.Color.py, line 67:\n    BLUEVIOLET = Color("#8a2be2")';
		$m.__track_lines__[68] = 'pyjamas.Canvas.Color.py, line 68:\n    CYAN = Color("#5fa2e0")';
		$m.__track_lines__[69] = 'pyjamas.Canvas.Color.py, line 69:\n    GREEN = Color("#23ef24")';
		$m.__track_lines__[70] = 'pyjamas.Canvas.Color.py, line 70:\n    GREY = Color("#a9a9a9")';
		$m.__track_lines__[71] = 'pyjamas.Canvas.Color.py, line 71:\n    LIGHTGREY = Color("#eeeeee")';
		$m.__track_lines__[72] = 'pyjamas.Canvas.Color.py, line 72:\n    ORANGE = Color("#f88247")';
		$m.__track_lines__[73] = 'pyjamas.Canvas.Color.py, line 73:\n    PEACH = Color("#ffd393")';
		$m.__track_lines__[74] = 'pyjamas.Canvas.Color.py, line 74:\n    PINK = Color("#ff00ff")';
		$m.__track_lines__[75] = 'pyjamas.Canvas.Color.py, line 75:\n    RED = Color("#ff0000")';
		$m.__track_lines__[76] = 'pyjamas.Canvas.Color.py, line 76:\n    SKY_BLUE = Color("#c6defa")';
		$m.__track_lines__[77] = 'pyjamas.Canvas.Color.py, line 77:\n    WHITE = Color("#ffffff")';
		$m.__track_lines__[78] = 'pyjamas.Canvas.Color.py, line 78:\n    YELLOW = Color("yellow")';
		$m.__track_lines__[79] = 'pyjamas.Canvas.Color.py, line 79:\n    DARK_ORANGE = Color("#c44607")';
		$m.__track_lines__[80] = 'pyjamas.Canvas.Color.py, line 80:\n    BRIGHT_ORANGE = Color("#fb5c0c")';
		$m.__track_lines__[81] = 'pyjamas.Canvas.Color.py, line 81:\n    DARK_BLUE = Color("#0c6ac1")';


		$pyjs['track']['module']='pyjamas.Canvas.Color';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=18;
		$pyjs['track']['lineno']=23;
		$m['Color'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.Color';
			$cls_definition['__md5__'] = '94470218b72a20018606c993f1203541';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=46;
			$method = $pyjs__bind_method2('__init__', function(r, g, b, a) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					r = arguments[1];
					g = arguments[2];
					b = arguments[3];
					a = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '94470218b72a20018606c993f1203541') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof g == 'undefined') g=arguments['callee']['__args__'][4][1];
				if (typeof b == 'undefined') b=arguments['callee']['__args__'][5][1];
				if (typeof a == 'undefined') a=arguments['callee']['__args__'][6][1];
				var $and1,$and3,$and2;
				$pyjs['track']={'module':'pyjamas.Canvas.Color', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.Color';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=47;
				if ($p['bool'](($p['bool']($and1=$p['op_is'](g, null))?($p['bool']($and2=$p['op_is'](b, null))?$p['op_is'](a, null):$and2):$and1))) {
					$pyjs['track']['lineno']=48;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('colorStr', r) : $p['setattr'](self, 'colorStr', r); 
				}
				else if ($p['bool']($p['op_is'](a, null))) {
					$pyjs['track']['lineno']=50;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('colorStr', $p['sprintf']('rgb(%d,%d,%d)', $p['tuple']([r, g, b]))) : $p['setattr'](self, 'colorStr', $p['sprintf']('rgb(%d,%d,%d)', $p['tuple']([r, g, b]))); 
				}
				else {
					$pyjs['track']['lineno']=52;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('colorStr', $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([r, g, b, a]))) : $p['setattr'](self, 'colorStr', $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([r, g, b, a]))); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['r'],['g', null],['b', null],['a', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '94470218b72a20018606c993f1203541') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.Color', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.Color';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=55;
				var $pyjs__ret = $p['getattr'](self, 'colorStr');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Color', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=59;
		$pyjs['track']['lineno']=63;
		$m['ALPHA_GREY'] = $m['Color']('rgba(0,0,0,0.3)');
		$pyjs['track']['lineno']=64;
		$m['ALPHA_RED'] = $m['Color']('rgba(255,0,0,0.3)');
		$pyjs['track']['lineno']=65;
		$m['BLACK'] = $m['Color']('#000000');
		$pyjs['track']['lineno']=66;
		$m['BLUE'] = $m['Color']('#318ce0');
		$pyjs['track']['lineno']=67;
		$m['BLUEVIOLET'] = $m['Color']('#8a2be2');
		$pyjs['track']['lineno']=68;
		$m['CYAN'] = $m['Color']('#5fa2e0');
		$pyjs['track']['lineno']=69;
		$m['GREEN'] = $m['Color']('#23ef24');
		$pyjs['track']['lineno']=70;
		$m['GREY'] = $m['Color']('#a9a9a9');
		$pyjs['track']['lineno']=71;
		$m['LIGHTGREY'] = $m['Color']('#eeeeee');
		$pyjs['track']['lineno']=72;
		$m['ORANGE'] = $m['Color']('#f88247');
		$pyjs['track']['lineno']=73;
		$m['PEACH'] = $m['Color']('#ffd393');
		$pyjs['track']['lineno']=74;
		$m['PINK'] = $m['Color']('#ff00ff');
		$pyjs['track']['lineno']=75;
		$m['RED'] = $m['Color']('#ff0000');
		$pyjs['track']['lineno']=76;
		$m['SKY_BLUE'] = $m['Color']('#c6defa');
		$pyjs['track']['lineno']=77;
		$m['WHITE'] = $m['Color']('#ffffff');
		$pyjs['track']['lineno']=78;
		$m['YELLOW'] = $m['Color']('yellow');
		$pyjs['track']['lineno']=79;
		$m['DARK_ORANGE'] = $m['Color']('#c44607');
		$pyjs['track']['lineno']=80;
		$m['BRIGHT_ORANGE'] = $m['Color']('#fb5c0c');
		$pyjs['track']['lineno']=81;
		$m['DARK_BLUE'] = $m['Color']('#0c6ac1');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.Color */


/* end module: pyjamas.Canvas.Color */


