/* start module: pyjamas.Canvas.HTML5CanvasImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.HTML5CanvasImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.HTML5CanvasImplDefault';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['HTML5CanvasImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'];


	$m['GWTCanvasImplDefault'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas.Canvas', null, false);
	$m['HTML5CanvasImplDefault'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.HTML5CanvasImplDefault';
		$method = $pyjs__bind_method2('clearRect', function(x, y, w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
			}

			self['canvasContext']['clearRect'](x, y, w, h);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
		$cls_definition['clearRect'] = $method;
		$method = $pyjs__bind_method2('clip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext']['clip']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clip'] = $method;
		$method = $pyjs__bind_method2('createImageData', function(sw, sh) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sw = arguments[1];
				sh = arguments[2];
			}

			return self['canvasContext']['createImageData'](sw, sh);
		}
	, 1, [null,null,['self'],['sw'],['sh']]);
		$cls_definition['createImageData'] = $method;
		$method = $pyjs__bind_method2('getFont', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'font');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFont'] = $method;
		$method = $pyjs__bind_method2('getImageData', function(sx, sy, sw, sh) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sx = arguments[1];
				sy = arguments[2];
				sw = arguments[3];
				sh = arguments[4];
			}

			return self['canvasContext']['getImageData'](sx, sy, sw, sh);
		}
	, 1, [null,null,['self'],['sx'],['sy'],['sw'],['sh']]);
		$cls_definition['getImageData'] = $method;
		$method = $pyjs__bind_method2('getShadowBlur', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowBlur');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowBlur'] = $method;
		$method = $pyjs__bind_method2('getShadowColor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowColor');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowColor'] = $method;
		$method = $pyjs__bind_method2('getShadowOffsetX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowOffsetX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowOffsetX'] = $method;
		$method = $pyjs__bind_method2('getShadowOffsetY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowOffsetY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowOffsetY'] = $method;
		$method = $pyjs__bind_method2('getTextAlign', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'textAlign');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTextAlign'] = $method;
		$method = $pyjs__bind_method2('getTextBaseline', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'textBaseline');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTextBaseline'] = $method;
		$method = $pyjs__bind_method2('measureText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			return $p['getattr'](self['canvasContext']['measureText'](text), 'width');
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['measureText'] = $method;
		$method = $pyjs__bind_method2('putImageData', function(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
				dx = arguments[2];
				dy = arguments[3];
				dirtyX = arguments[4];
				dirtyY = arguments[5];
				dirtyWidth = arguments[6];
				dirtyHeight = arguments[7];
			}

			self['canvasContext']['putImageData'](imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
			return null;
		}
	, 1, [null,null,['self'],['imagedata'],['dx'],['dy'],['dirtyX'],['dirtyY'],['dirtyWidth'],['dirtyHeight']]);
		$cls_definition['putImageData'] = $method;
		$method = $pyjs__bind_method2('setFont', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['font'] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setFont'] = $method;
		$method = $pyjs__bind_method2('setShadowBlur', function(blur) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				blur = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['shadowBlur'] = blur;
			return null;
		}
	, 1, [null,null,['self'],['blur']]);
		$cls_definition['setShadowBlur'] = $method;
		$method = $pyjs__bind_method2('setShadowColor', function(color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['shadowColor'] = color;
			return null;
		}
	, 1, [null,null,['self'],['color']]);
		$cls_definition['setShadowColor'] = $method;
		$method = $pyjs__bind_method2('setShadowOffset', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			$p['getattr'](self, 'canvasContext')['shadowOffsetX'] = x;
			$p['getattr'](self, 'canvasContext')['shadowOffsetY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['setShadowOffset'] = $method;
		$method = $pyjs__bind_method2('setTextAlign', function(loc) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loc = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['textAlign'] = loc;
			return null;
		}
	, 1, [null,null,['self'],['loc']]);
		$cls_definition['setTextAlign'] = $method;
		$method = $pyjs__bind_method2('setTextBaseline', function(loc) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loc = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['textBaseline'] = loc;
			return null;
		}
	, 1, [null,null,['self'],['loc']]);
		$cls_definition['setTextBaseline'] = $method;
		$method = $pyjs__bind_method2('toDataURL', function(type) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
			}

			return self['canvasContext']['toDataURL'](type);
		}
	, 1, [null,null,['self'],['type']]);
		$cls_definition['toDataURL'] = $method;
		var $bases = new Array($m['GWTCanvasImplDefault']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HTML5CanvasImplDefault', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.HTML5CanvasImplDefault */


/* end module: pyjamas.Canvas.HTML5CanvasImplDefault */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplDefault']
*/
