/* start module: pyjamas.Canvas.HTML5Canvas */
$pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.HTML5Canvas>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.HTML5Canvas';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['HTML5Canvas'] = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'];


	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', null, false);
	$m['HTML5CanvasImplDefault'] = $p['___import___']('pyjamas.Canvas.HTML5CanvasImplDefault.HTML5CanvasImplDefault', 'pyjamas.Canvas', null, false);
	$m['HTML5CanvasImplIE6'] = $p['___import___']('pyjamas.Canvas.HTML5CanvasImplIE6.HTML5CanvasImplIE6', 'pyjamas.Canvas', null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
	$m['ImageData'] = $p['___import___']('pyjamas.Canvas.ImageData.ImageData', 'pyjamas.Canvas', null, false);
	$m['HTML5Canvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.HTML5Canvas';
		$method = $pyjs__bind_method2('getCanvasImpl', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['HTML5CanvasImplIE6']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCanvasImpl'] = $method;
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

			self['impl']['clearRect'](x, y, w, h);
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

			self['impl']['clip']();
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

			return $m['ImageData'](self['impl']['createImageData'](sw, sh));
		}
	, 1, [null,null,['self'],['sw'],['sh']]);
		$cls_definition['createImageData'] = $method;
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

			return $m['ImageData'](self['impl']['getImageData'](sx, sy, sw, sh));
		}
	, 1, [null,null,['self'],['sx'],['sy'],['sw'],['sh']]);
		$cls_definition['getImageData'] = $method;
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
			if (typeof dirtyX == 'undefined') dirtyX=arguments['callee']['__args__'][6][1];
			if (typeof dirtyY == 'undefined') dirtyY=arguments['callee']['__args__'][7][1];
			if (typeof dirtyWidth == 'undefined') dirtyWidth=arguments['callee']['__args__'][8][1];
			if (typeof dirtyHeight == 'undefined') dirtyHeight=arguments['callee']['__args__'][9][1];

			if ($p['bool']($p['op_eq'](dirtyWidth, null))) {
				dirtyWidth = $p['getattr'](self, 'coordWidth');
			}
			if ($p['bool']($p['op_eq'](dirtyHeight, null))) {
				dirtyHeight = $p['getattr'](self, 'coordHeight');
			}
			self['impl']['putImageData'](imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
			return null;
		}
	, 1, [null,null,['self'],['imagedata'],['dx'],['dy'],['dirtyX', 0],['dirtyY', 0],['dirtyWidth', null],['dirtyHeight', null]]);
		$cls_definition['putImageData'] = $method;
		$method = $pyjs__bind_method2('toDataURL', function(type) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				type = arguments[1];
			}
			if (typeof type == 'undefined') type=arguments['callee']['__args__'][3][1];

			return self['impl']['toDataURL'](type);
		}
	, 1, [null,null,['self'],['type', 'image/png']]);
		$cls_definition['toDataURL'] = $method;
		$method = $pyjs__bind_method2('getFont', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getFont']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFont'] = $method;
		$method = $pyjs__bind_method2('measureText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			return self['impl']['measureText'](text);
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['measureText'] = $method;
		$method = $pyjs__bind_method2('setFont', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			self['impl']['setFont'](value);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['setFont'] = $method;
		$method = $pyjs__bind_method2('getShadowBlur', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getShadowBlur']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowBlur'] = $method;
		$method = $pyjs__bind_method2('getShadowColor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['Color'](self['impl']['getShadowColor']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowColor'] = $method;
		$method = $pyjs__bind_method2('getShadowOffsetX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['impl']['getShadowOffsetX']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowOffsetX'] = $method;
		$method = $pyjs__bind_method2('getTextAlign', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getTextAlign']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTextAlign'] = $method;
		$method = $pyjs__bind_method2('getTextBaseline', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getTextBaseline']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTextBaseline'] = $method;
		$method = $pyjs__bind_method2('getShadowOffsetY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['impl']['getShadowOffsetY']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getShadowOffsetY'] = $method;
		$method = $pyjs__bind_method2('setShadowBlur', function(blur) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				blur = arguments[1];
			}

			self['impl']['setShadowBlur'](blur);
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

			self['impl']['setShadowColor']($p['str'](color));
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

			self['impl']['setShadowOffset'](x, y);
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

			self['impl']['setTextAlign'](loc);
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

			self['impl']['setTextBaseline'](loc);
			return null;
		}
	, 1, [null,null,['self'],['loc']]);
		$cls_definition['setTextBaseline'] = $method;
		var $bases = new Array($m['GWTCanvas']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HTML5Canvas', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.HTML5Canvas */


/* end module: pyjamas.Canvas.HTML5Canvas */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.HTML5CanvasImplDefault.HTML5CanvasImplDefault', 'pyjamas.Canvas.HTML5CanvasImplDefault', 'pyjamas.Canvas.HTML5CanvasImplIE6.HTML5CanvasImplIE6', 'pyjamas.Canvas.HTML5CanvasImplIE6', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.ImageData.ImageData', 'pyjamas.Canvas.ImageData']
*/
