/* start module: pyjamas.Canvas.ColorStop */
$pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ColorStop']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ColorStop>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ColorStop';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['ColorStop'] = $pyjs['loaded_modules']['pyjamas.Canvas.ColorStop'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.ColorStop.py, line 1:\n    """';
		$m.__track_lines__[18] = 'pyjamas.Canvas.ColorStop.py, line 18:\n    from pyjamas.Canvas.Color import Color';
		$m.__track_lines__[20] = 'pyjamas.Canvas.ColorStop.py, line 20:\n    """*';
		$m.__track_lines__[24] = 'pyjamas.Canvas.ColorStop.py, line 24:\n    class ColorStop:';
		$m.__track_lines__[26] = 'pyjamas.Canvas.ColorStop.py, line 26:\n    def __init__(self, myOffset, myColor):';
		$m.__track_lines__[27] = 'pyjamas.Canvas.ColorStop.py, line 27:\n    self.offset = myOffset';
		$m.__track_lines__[28] = 'pyjamas.Canvas.ColorStop.py, line 28:\n    self.color = myColor';
		$m.__track_lines__[30] = 'pyjamas.Canvas.ColorStop.py, line 30:\n    def cloneColorStop(self):';
		$m.__track_lines__[31] = 'pyjamas.Canvas.ColorStop.py, line 31:\n    return ColorStop(self.offset, Color(str(self.color())))';


		$pyjs['track']['module']='pyjamas.Canvas.ColorStop';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']['lineno']=24;
		$m['ColorStop'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.ColorStop';
			$cls_definition['__md5__'] = '8301ec200ec6ea23d424874ded0e5889';
			$pyjs['track']['lineno']=26;
			$method = $pyjs__bind_method2('__init__', function(myOffset, myColor) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					myOffset = arguments[1];
					myColor = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8301ec200ec6ea23d424874ded0e5889') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ColorStop', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ColorStop';
				$pyjs['track']['lineno']=26;
				$pyjs['track']['lineno']=27;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('offset', myOffset) : $p['setattr'](self, 'offset', myOffset); 
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('color', myColor) : $p['setattr'](self, 'color', myColor); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['myOffset'],['myColor']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=30;
			$method = $pyjs__bind_method2('cloneColorStop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8301ec200ec6ea23d424874ded0e5889') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ColorStop', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ColorStop';
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=31;
				var $pyjs__ret = $m['ColorStop']($p['getattr'](self, 'offset'), $m['Color']($p['str'](self['color']())));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cloneColorStop'] = $method;
			$pyjs['track']['lineno']=24;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ColorStop', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.ColorStop */


/* end module: pyjamas.Canvas.ColorStop */


/*
PYJS_DEPS: ['pyjamas.Canvas.Color.Color', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.Color']
*/
