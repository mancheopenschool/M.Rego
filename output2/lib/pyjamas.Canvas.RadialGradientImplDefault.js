/* start module: pyjamas.Canvas.RadialGradientImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.RadialGradientImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.RadialGradientImplDefault';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['RadialGradientImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplDefault'];
	try {
		$m.__track_lines__[32] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 32:\n    gradient = ctx.createRadialGradient(x0,y0,r0,x1,y1,r1)';
		$m.__track_lines__[1] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 1:\n    """';
		$m.__track_lines__[33] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 33:\n    self.setNativeGradient(gradient)';
		$m.__track_lines__[17] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 17:\n    from pyjamas.Canvas.CanvasGradientImplDefault import CanvasGradientImplDefault';
		$m.__track_lines__[20] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 20:\n    """*';
		$m.__track_lines__[24] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 24:\n    class RadialGradientImplDefault(CanvasGradientImplDefault):';
		$m.__track_lines__[26] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 26:\n    def __init__(self, x0, y0, r0, x1, y1, r1, c):';
		$m.__track_lines__[27] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 27:\n    CanvasGradientImplDefault.__init__(self)';
		$m.__track_lines__[28] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 28:\n    self.createNativeGradientObject(x0,y0,r0,x1,y1,r1, c)';
		$m.__track_lines__[30] = 'pyjamas.Canvas.RadialGradientImplDefault.py, line 30:\n    def createNativeGradientObject(self, x0, y0, r0, x1, y1, r1, c):';
		$m.__track_lines__[31] = "pyjamas.Canvas.RadialGradientImplDefault.py, line 31:\n    ctx = c.getContext('2d')";


		$pyjs['track']['module']='pyjamas.Canvas.RadialGradientImplDefault';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['CanvasGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']['lineno']=24;
		$m['RadialGradientImplDefault'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.RadialGradientImplDefault';
			$cls_definition['__md5__'] = '598f0884a9b75db0dbc5816a9c31ca52';
			$pyjs['track']['lineno']=26;
			$method = $pyjs__bind_method2('__init__', function(x0, y0, r0, x1, y1, r1, c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					r0 = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					c = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 8) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '598f0884a9b75db0dbc5816a9c31ca52') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.RadialGradientImplDefault', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.RadialGradientImplDefault';
				$pyjs['track']['lineno']=26;
				$pyjs['track']['lineno']=27;
				$m['CanvasGradientImplDefault']['__init__'](self);
				$pyjs['track']['lineno']=28;
				self['createNativeGradientObject'](x0, y0, r0, x1, y1, r1, c);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1'],['c']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=30;
			$method = $pyjs__bind_method2('createNativeGradientObject', function(x0, y0, r0, x1, y1, r1, c) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					r0 = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					c = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 8) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '598f0884a9b75db0dbc5816a9c31ca52') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var gradient,ctx;
				$pyjs['track']={'module':'pyjamas.Canvas.RadialGradientImplDefault', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.RadialGradientImplDefault';
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=31;
				ctx = c['getContext']('2d');
				$pyjs['track']['lineno']=32;
				gradient = ctx['createRadialGradient'](x0, y0, r0, x1, y1, r1);
				$pyjs['track']['lineno']=33;
				self['setNativeGradient'](gradient);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1'],['c']]);
			$cls_definition['createNativeGradientObject'] = $method;
			$pyjs['track']['lineno']=24;
			var $bases = new Array($m['CanvasGradientImplDefault']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RadialGradientImplDefault', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.RadialGradientImplDefault */


/* end module: pyjamas.Canvas.RadialGradientImplDefault */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplDefault']
*/
