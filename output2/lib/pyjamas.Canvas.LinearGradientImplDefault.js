/* start module: pyjamas.Canvas.LinearGradientImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.LinearGradientImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.LinearGradientImplDefault';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['LinearGradientImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'];
	try {
		$m.__track_lines__[32] = "pyjamas.Canvas.LinearGradientImplDefault.py, line 32:\n    ctx = c.getContext('2d')";
		$m.__track_lines__[1] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 1:\n    """';
		$m.__track_lines__[34] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 34:\n    self.setNativeGradient(gradient)';
		$m.__track_lines__[33] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 33:\n    gradient = ctx.createLinearGradient(x0,y0,x1,y1)';
		$m.__track_lines__[18] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 18:\n    from pyjamas.Canvas.CanvasGradientImplDefault import CanvasGradientImplDefault';
		$m.__track_lines__[20] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 20:\n    """*';
		$m.__track_lines__[24] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 24:\n    class LinearGradientImplDefault(CanvasGradientImplDefault):';
		$m.__track_lines__[26] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 26:\n    def __init__(self, x0, y0, x1, y1, c):';
		$m.__track_lines__[27] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 27:\n    CanvasGradientImplDefault.__init__(self)';
		$m.__track_lines__[28] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 28:\n    self.createNativeGradientObject(x0,y0,x1,y1,c)';
		$m.__track_lines__[31] = 'pyjamas.Canvas.LinearGradientImplDefault.py, line 31:\n    def createNativeGradientObject(self, x0, y0, x1, y1, c):';


		$pyjs['track']['module']='pyjamas.Canvas.LinearGradientImplDefault';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['CanvasGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']['lineno']=24;
		$m['LinearGradientImplDefault'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.LinearGradientImplDefault';
			$cls_definition['__md5__'] = '3d002902426bafbcdb90fa8fba7c763f';
			$pyjs['track']['lineno']=26;
			$method = $pyjs__bind_method2('__init__', function(x0, y0, x1, y1, c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					x1 = arguments[3];
					y1 = arguments[4];
					c = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3d002902426bafbcdb90fa8fba7c763f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.LinearGradientImplDefault', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.LinearGradientImplDefault';
				$pyjs['track']['lineno']=26;
				$pyjs['track']['lineno']=27;
				$m['CanvasGradientImplDefault']['__init__'](self);
				$pyjs['track']['lineno']=28;
				self['createNativeGradientObject'](x0, y0, x1, y1, c);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1'],['c']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('createNativeGradientObject', function(x0, y0, x1, y1, c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					x1 = arguments[3];
					y1 = arguments[4];
					c = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3d002902426bafbcdb90fa8fba7c763f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var gradient,ctx;
				$pyjs['track']={'module':'pyjamas.Canvas.LinearGradientImplDefault', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.LinearGradientImplDefault';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=32;
				ctx = c['getContext']('2d');
				$pyjs['track']['lineno']=33;
				gradient = ctx['createLinearGradient'](x0, y0, x1, y1);
				$pyjs['track']['lineno']=34;
				self['setNativeGradient'](gradient);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1'],['c']]);
			$cls_definition['createNativeGradientObject'] = $method;
			$pyjs['track']['lineno']=24;
			var $bases = new Array($m['CanvasGradientImplDefault']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LinearGradientImplDefault', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.LinearGradientImplDefault */


/* end module: pyjamas.Canvas.LinearGradientImplDefault */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplDefault']
*/
