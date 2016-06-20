/* start module: pyjamas.Canvas.LinearGradientImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.LinearGradientImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.LinearGradientImplDefault';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['LinearGradientImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.LinearGradientImplDefault'];


	$m['CanvasGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas.Canvas', null, false);
	$m['LinearGradientImplDefault'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.LinearGradientImplDefault';
		$method = $pyjs__bind_method2('__init__', function(x0, y0, x1, y1, c) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				x1 = arguments[3];
				y1 = arguments[4];
				c = arguments[5];
			}

			$m['CanvasGradientImplDefault']['__init__'](self);
			self['createNativeGradientObject'](x0, y0, x1, y1, c);
			return null;
		}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1'],['c']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createNativeGradientObject', function(x0, y0, x1, y1, c) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				x1 = arguments[3];
				y1 = arguments[4];
				c = arguments[5];
			}
			var gradient,ctx;
			ctx = c['getContext']('2d');
			gradient = ctx['createLinearGradient'](x0, y0, x1, y1);
			self['setNativeGradient'](gradient);
			return null;
		}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1'],['c']]);
		$cls_definition['createNativeGradientObject'] = $method;
		var $bases = new Array($m['CanvasGradientImplDefault']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LinearGradientImplDefault', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.LinearGradientImplDefault */


/* end module: pyjamas.Canvas.LinearGradientImplDefault */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplDefault.CanvasGradientImplDefault', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplDefault']
*/
