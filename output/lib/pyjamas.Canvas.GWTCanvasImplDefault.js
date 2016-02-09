/* start module: pyjamas.Canvas.GWTCanvasImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvasImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvasImplDefault';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvasImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
	$m['cvt'] = function(s) {

		return s;
	};
	$m['cvt']['__name__'] = 'cvt';

	$m['cvt']['__bind_type__'] = 0;
	$m['cvt']['__args__'] = [null,null,['s']];
	$m['GWTCanvasImplDefault'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvasImplDefault';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('arc', function(x, y, radius, startAngle, endAngle, antiClockwise) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				radius = arguments[3];
				startAngle = arguments[4];
				endAngle = arguments[5];
				antiClockwise = arguments[6];
			}

			self['canvasContext']['arc'](x, y, radius, startAngle, endAngle, antiClockwise);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['radius'],['startAngle'],['endAngle'],['antiClockwise']]);
		$cls_definition['arc'] = $method;
		$method = $pyjs__bind_method2('beginPath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext']['beginPath']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['beginPath'] = $method;
		$method = $pyjs__bind_method2('clear', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['clearRect'](0, 0, width, height);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('closePath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext']['closePath']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['closePath'] = $method;
		$method = $pyjs__bind_method2('createElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var e;
			e = $m['DOM']['createElement']('CANVAS');
			self['setCanvasContext'](e['getContext']('2d'));
			return e;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method2('cubicCurveTo', function(cp1x, cp1y, cp2x, cp2y, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cp1x = arguments[1];
				cp1y = arguments[2];
				cp2x = arguments[3];
				cp2y = arguments[4];
				x = arguments[5];
				y = arguments[6];
			}

			self['canvasContext']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y);
			return null;
		}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
		$cls_definition['cubicCurveTo'] = $method;
		$method = $pyjs__bind_method2('setFont', function(font) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				font = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['font'] = font;
			return null;
		}
	, 1, [null,null,['self'],['font']]);
		$cls_definition['setFont'] = $method;
		$method = $pyjs__bind_method2('fillText', function(text, sourceX, sourceY, maxWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				sourceX = arguments[2];
				sourceY = arguments[3];
				maxWidth = arguments[4];
			}
			if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];
			var $pyjs_try_err;
			try {
				if ($p['bool']((maxWidth === null))) {
					self['canvasContext']['fillText'](text, sourceX, sourceY);
				}
				else {
					self['canvasContext']['fillText'](text, sourceX, sourceY, maxWidth);
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					self['saveContext']();
					self['translate'](sourceX, sourceY);
					try {
						text = (typeof unicode == "undefined"?$m['unicode']:unicode)(text);
						self['canvasContext']['mozDrawText'](text);
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (true) {
							self['canvasContext']['drawText'](text);
						}
					}
					self['restoreContext']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['text'],['sourceX'],['sourceY'],['maxWidth', null]]);
		$cls_definition['fillText'] = $method;
		$method = $pyjs__bind_method2('drawImage', function(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img = arguments[1];
				sourceX = arguments[2];
				sourceY = arguments[3];
				sourceWidth = arguments[4];
				sourceHeight = arguments[5];
				destX = arguments[6];
				destY = arguments[7];
				destWidth = arguments[8];
				destHeight = arguments[9];
			}
			if (typeof sourceWidth == 'undefined') sourceWidth=arguments['callee']['__args__'][6][1];
			if (typeof sourceHeight == 'undefined') sourceHeight=arguments['callee']['__args__'][7][1];
			if (typeof destX == 'undefined') destX=arguments['callee']['__args__'][8][1];
			if (typeof destY == 'undefined') destY=arguments['callee']['__args__'][9][1];
			if (typeof destWidth == 'undefined') destWidth=arguments['callee']['__args__'][10][1];
			if (typeof destHeight == 'undefined') destHeight=arguments['callee']['__args__'][11][1];

			if ($p['bool']($p['isinstance'](img, $m['Widget']))) {
				img = img['getElement']();
			}
			if ($p['bool']((sourceWidth === null))) {
				self['canvasContext']['drawImage'](img, sourceX, sourceY);
			}
			else {
				self['canvasContext']['drawImage'](img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
			}
			return null;
		}
	, 1, [null,null,['self'],['img'],['sourceX'],['sourceY'],['sourceWidth', null],['sourceHeight', null],['destX', null],['destY', null],['destWidth', null],['destHeight', null]]);
		$cls_definition['drawImage'] = $method;
		$method = $pyjs__bind_method2('fill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext']['fill']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('fillRect', function(startX, startY, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				startX = arguments[1];
				startY = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}

			self['canvasContext']['fillRect'](startX, startY, width, height);
			return null;
		}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
		$cls_definition['fillRect'] = $method;
		$method = $pyjs__bind_method2('getGlobalAlpha', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'globalAlpha');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'globalCompositeOperation');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalCompositeOperation'] = $method;
		$method = $pyjs__bind_method2('getHeight', function(elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			return $m['DOM']['getElementPropertyInt'](elem, 'height');
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('getLineCap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'lineCap');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineCap'] = $method;
		$method = $pyjs__bind_method2('getLineJoin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'lineJoin');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineJoin'] = $method;
		$method = $pyjs__bind_method2('getLineWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'lineWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineWidth'] = $method;
		$method = $pyjs__bind_method2('getMiterLimit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'canvasContext'), 'miterLimit');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMiterLimit'] = $method;
		$method = $pyjs__bind_method2('getWidth', function(elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			return $m['DOM']['getElementPropertyInt'](elem, 'width');
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('lineTo', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['canvasContext']['lineTo'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['lineTo'] = $method;
		$method = $pyjs__bind_method2('moveTo', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['canvasContext']['moveTo'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['moveTo'] = $method;
		$method = $pyjs__bind_method2('quadraticCurveTo', function(cpx, cpy, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cpx = arguments[1];
				cpy = arguments[2];
				x = arguments[3];
				y = arguments[4];
			}

			self['canvasContext']['quadraticCurveTo'](cpx, cpy, x, y);
			return null;
		}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
		$cls_definition['quadraticCurveTo'] = $method;
		$method = $pyjs__bind_method2('rect', function(x, y, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}

			self['canvasContext']['rect'](x, y, width, height);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('restoreContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext']['restore']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['restoreContext'] = $method;
		$method = $pyjs__bind_method2('rotate', function(angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
			}

			self['canvasContext']['rotate'](angle);
			return null;
		}
	, 1, [null,null,['self'],['angle']]);
		$cls_definition['rotate'] = $method;
		$method = $pyjs__bind_method2('saveContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext']['save']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['saveContext'] = $method;
		$method = $pyjs__bind_method2('scale', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['canvasContext']['scale'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['scale'] = $method;
		$method = $pyjs__bind_method2('setBackgroundColor', function(element, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				color = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](element, 'backgroundColor', color);
			return null;
		}
	, 1, [null,null,['self'],['element'],['color']]);
		$cls_definition['setBackgroundColor'] = $method;
		$method = $pyjs__bind_method2('setCoordHeight', function(elem, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				height = arguments[2];
			}

			$m['DOM']['setElemAttribute'](elem, 'height', $p['str'](height));
			return null;
		}
	, 1, [null,null,['self'],['elem'],['height']]);
		$cls_definition['setCoordHeight'] = $method;
		$method = $pyjs__bind_method2('setCoordWidth', function(elem, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				width = arguments[2];
			}

			$m['DOM']['setElemAttribute'](elem, 'width', $p['str'](width));
			return null;
		}
	, 1, [null,null,['self'],['elem'],['width']]);
		$cls_definition['setCoordWidth'] = $method;
		$method = $pyjs__bind_method2('setStrokeStyle', function(gradient) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gradient = arguments[1];
			}

			if ($p['bool']($p['isinstance'](gradient, $m['Color']))) {
				gradient = $p['str'](gradient);
			}
			else if ($p['bool'](!$p['bool']($p['isinstance'](gradient, $p['basestring'])))) {
				gradient = gradient['getObject']();
			}
			$p['getattr'](self, 'canvasContext')['strokeStyle'] = $m['cvt'](gradient);
			return null;
		}
	, 1, [null,null,['self'],['gradient']]);
		$cls_definition['setStrokeStyle'] = $method;
		$method = $pyjs__bind_method2('setFillStyle', function(gradient) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gradient = arguments[1];
			}

			if ($p['bool']($p['isinstance'](gradient, $m['Color']))) {
				gradient = $p['str'](gradient);
			}
			else if ($p['bool'](!$p['bool']($p['isinstance'](gradient, $p['basestring'])))) {
				gradient = gradient['getObject']();
			}
			$p['getattr'](self, 'canvasContext')['fillStyle'] = $m['cvt'](gradient);
			return null;
		}
	, 1, [null,null,['self'],['gradient']]);
		$cls_definition['setFillStyle'] = $method;
		$method = $pyjs__bind_method2('setGlobalAlpha', function(alpha) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alpha = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['globalAlpha'] = alpha;
			return null;
		}
	, 1, [null,null,['self'],['alpha']]);
		$cls_definition['setGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(globalCompositeOperation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				globalCompositeOperation = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['globalCompositeOperation'] = $m['cvt'](globalCompositeOperation);
			return null;
		}
	, 1, [null,null,['self'],['globalCompositeOperation']]);
		$cls_definition['setGlobalCompositeOperation'] = $method;
		$method = $pyjs__bind_method2('setLineCap', function(lineCap) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineCap = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['lineCap'] = $m['cvt'](lineCap);
			return null;
		}
	, 1, [null,null,['self'],['lineCap']]);
		$cls_definition['setLineCap'] = $method;
		$method = $pyjs__bind_method2('setLineJoin', function(lineJoin) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineJoin = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['lineJoin'] = $m['cvt'](lineJoin);
			return null;
		}
	, 1, [null,null,['self'],['lineJoin']]);
		$cls_definition['setLineJoin'] = $method;
		$method = $pyjs__bind_method2('setLineWidth', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['lineWidth'] = width;
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setLineWidth'] = $method;
		$method = $pyjs__bind_method2('setMiterLimit', function(miterLimit) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				miterLimit = arguments[1];
			}

			$p['getattr'](self, 'canvasContext')['miterLimit'] = miterLimit;
			return null;
		}
	, 1, [null,null,['self'],['miterLimit']]);
		$cls_definition['setMiterLimit'] = $method;
		$method = $pyjs__bind_method2('setPixelHeight', function(elem, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				height = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](elem, 'height', $p['sprintf']('%dpx', height));
			return null;
		}
	, 1, [null,null,['self'],['elem'],['height']]);
		$cls_definition['setPixelHeight'] = $method;
		$method = $pyjs__bind_method2('setPixelWidth', function(elem, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				width = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](elem, 'width', $p['sprintf']('%dpx', width));
			return null;
		}
	, 1, [null,null,['self'],['elem'],['width']]);
		$cls_definition['setPixelWidth'] = $method;
		$method = $pyjs__bind_method2('stroke', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvasContext']['stroke']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stroke'] = $method;
		$method = $pyjs__bind_method2('strokeRect', function(startX, startY, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				startX = arguments[1];
				startY = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}

			self['canvasContext']['strokeRect'](startX, startY, width, height);
			return null;
		}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
		$cls_definition['strokeRect'] = $method;
		$method = $pyjs__bind_method2('transform', function(m11, m12, m21, m22, dx, dy) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				m11 = arguments[1];
				m12 = arguments[2];
				m21 = arguments[3];
				m22 = arguments[4];
				dx = arguments[5];
				dy = arguments[6];
			}

			self['canvasContext']['transform'](m11, m12, m21, m22, dx, dy);
			return null;
		}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
		$cls_definition['transform'] = $method;
		$method = $pyjs__bind_method2('translate', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['canvasContext']['translate'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translate'] = $method;
		$method = $pyjs__bind_method2('clearRect', function(startX, startY, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				startX = arguments[1];
				startY = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}

			self['canvasContext']['clearRect'](startX, startY, width, height);
			return null;
		}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
		$cls_definition['clearRect'] = $method;
		$method = $pyjs__bind_method2('setCanvasContext', function(ctx) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ctx = arguments[1];
			}

			self['canvasContext'] = ctx;
			return null;
		}
	, 1, [null,null,['self'],['ctx']]);
		$cls_definition['setCanvasContext'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GWTCanvasImplDefault', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.GWTCanvasImplDefault */


/* end module: pyjamas.Canvas.GWTCanvasImplDefault */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color']
*/
