/* start module: pyjamas.Canvas.CanvasGradientImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.CanvasGradientImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.CanvasGradientImplDefault';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['CanvasGradientImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 1:\n    """';
		$m.__track_lines__[34] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 34:\n    return self.nativeGradient';
		$m.__track_lines__[36] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 36:\n    def addNativeColorStop(self, offset, color):';
		$m.__track_lines__[37] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 37:\n    self.nativeGradient.addColorStop(offset, color);';
		$m.__track_lines__[33] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 33:\n    def getObject(self):';
		$m.__track_lines__[40] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 40:\n    self.nativeGradient = grad';
		$m.__track_lines__[39] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 39:\n    def setNativeGradient(self, grad):';
		$m.__track_lines__[22] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 22:\n    """*';
		$m.__track_lines__[25] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 25:\n    class CanvasGradientImplDefault:';
		$m.__track_lines__[27] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 27:\n    def __init__(self):';
		$m.__track_lines__[28] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 28:\n    self.nativeGradient = None';
		$m.__track_lines__[30] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 30:\n    def addColorStop(self, offset, color):';
		$m.__track_lines__[31] = 'pyjamas.Canvas.CanvasGradientImplDefault.py, line 31:\n    self.addNativeColorStop(offset, str(color))';


		$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplDefault';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=22;
		$pyjs['track']['lineno']=25;
		$m['CanvasGradientImplDefault'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.CanvasGradientImplDefault';
			$cls_definition['__md5__'] = '8e93fe5f80ad361dcaec9f4f0f52a200';
			$pyjs['track']['lineno']=27;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e93fe5f80ad361dcaec9f4f0f52a200') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplDefault', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplDefault';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nativeGradient', null) : $p['setattr'](self, 'nativeGradient', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=30;
			$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e93fe5f80ad361dcaec9f4f0f52a200') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplDefault', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplDefault';
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=31;
				self['addNativeColorStop'](offset, $p['str'](color));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['color']]);
			$cls_definition['addColorStop'] = $method;
			$pyjs['track']['lineno']=33;
			$method = $pyjs__bind_method2('getObject', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e93fe5f80ad361dcaec9f4f0f52a200') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplDefault', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplDefault';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=34;
				$pyjs['track']['lineno']=34;
				var $pyjs__ret = $p['getattr'](self, 'nativeGradient');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getObject'] = $method;
			$pyjs['track']['lineno']=36;
			$method = $pyjs__bind_method2('addNativeColorStop', function(offset, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e93fe5f80ad361dcaec9f4f0f52a200') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplDefault', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplDefault';
				$pyjs['track']['lineno']=36;
				$pyjs['track']['lineno']=37;
				self['nativeGradient']['addColorStop'](offset, color);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['color']]);
			$cls_definition['addNativeColorStop'] = $method;
			$pyjs['track']['lineno']=39;
			$method = $pyjs__bind_method2('setNativeGradient', function(grad) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					grad = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8e93fe5f80ad361dcaec9f4f0f52a200') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplDefault', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplDefault';
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('nativeGradient', grad) : $p['setattr'](self, 'nativeGradient', grad); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['grad']]);
			$cls_definition['setNativeGradient'] = $method;
			$pyjs['track']['lineno']=25;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CanvasGradientImplDefault', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.CanvasGradientImplDefault */


/* end module: pyjamas.Canvas.CanvasGradientImplDefault */


