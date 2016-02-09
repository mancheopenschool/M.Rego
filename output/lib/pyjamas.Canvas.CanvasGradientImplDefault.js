/* start module: pyjamas.Canvas.CanvasGradientImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.CanvasGradientImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.CanvasGradientImplDefault';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['CanvasGradientImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplDefault'];


	$m['CanvasGradientImplDefault'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.CanvasGradientImplDefault';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['nativeGradient'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				color = arguments[2];
			}

			self['addNativeColorStop'](offset, $p['str'](color));
			return null;
		}
	, 1, [null,null,['self'],['offset'],['color']]);
		$cls_definition['addColorStop'] = $method;
		$method = $pyjs__bind_method2('getObject', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'nativeGradient');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method2('addNativeColorStop', function(offset, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				color = arguments[2];
			}

			self['nativeGradient']['addColorStop'](offset, color);
			return null;
		}
	, 1, [null,null,['self'],['offset'],['color']]);
		$cls_definition['addNativeColorStop'] = $method;
		$method = $pyjs__bind_method2('setNativeGradient', function(grad) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				grad = arguments[1];
			}

			self['nativeGradient'] = grad;
			return null;
		}
	, 1, [null,null,['self'],['grad']]);
		$cls_definition['setNativeGradient'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CanvasGradientImplDefault', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.CanvasGradientImplDefault */


/* end module: pyjamas.Canvas.CanvasGradientImplDefault */


