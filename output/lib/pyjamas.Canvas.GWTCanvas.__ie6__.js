/* start module: pyjamas.Canvas.GWTCanvas */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvas>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvas';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvas'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvas'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.Canvas', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
	$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.Canvas', null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
	$m['LinearGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.LinearGradientImplDefault.LinearGradientImplDefault', 'pyjamas.Canvas', null, false);
	$m['RadialGradientImplDefault'] = $p['___import___']('pyjamas.Canvas.RadialGradientImplDefault.RadialGradientImplDefault', 'pyjamas.Canvas', null, false);
	$m['GWTCanvasImplDefault'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas.Canvas', null, false);
	$m['LinearGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.LinearGradientImplIE6.LinearGradientImplIE6', 'pyjamas.Canvas', null, false);
	$m['RadialGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.RadialGradientImplIE6.RadialGradientImplIE6', 'pyjamas.Canvas', null, false);
	$m['GWTCanvasImplIE6'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIE6.GWTCanvasImplIE6', 'pyjamas.Canvas', null, false);
	$m['GWTCanvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvas';
		$method = $pyjs__bind_method2('__init__', function(coordX, coordY, pixelX, pixelY) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				coordX = arguments[1];
				coordY = arguments[2];
				pixelX = arguments[3];
				pixelY = arguments[4];
				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof pixelY != 'undefined') {
					if (pixelY !== null && typeof pixelY['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = pixelY;
						pixelY = arguments[5];
					}
				} else 				if (typeof pixelX != 'undefined') {
					if (pixelX !== null && typeof pixelX['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = pixelX;
						pixelX = arguments[5];
					}
				} else 				if (typeof coordY != 'undefined') {
					if (coordY !== null && typeof coordY['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = coordY;
						coordY = arguments[5];
					}
				} else 				if (typeof coordX != 'undefined') {
					if (coordX !== null && typeof coordX['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = coordX;
						coordX = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof coordX == 'undefined') coordX=arguments['callee']['__args__'][3][1];
			if (typeof coordY == 'undefined') coordY=arguments['callee']['__args__'][4][1];
			if (typeof pixelX == 'undefined') pixelX=arguments['callee']['__args__'][5][1];
			if (typeof pixelY == 'undefined') pixelY=arguments['callee']['__args__'][6][1];
			var focusable;
			self['impl'] = self['getCanvasImpl']();
			self['coordHeight'] = 0;
			self['coordWidth'] = 0;
			focusable = $m['Focus']['createFocusable']();
			self['canvas'] = self['impl']['createElement']();
			$m['DOM']['appendChild'](focusable, $p['getattr'](self, 'canvas'));
			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, focusable]);
			self['setPixelWidth'](pixelX);
			self['setPixelHeight'](pixelY);
			self['setCoordSize'](coordX, coordY);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['coordX', 300],['coordY', 150],['pixelX', 300],['pixelY', 150]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getCanvasElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'canvas');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCanvasElement'] = $method;
		$method = $pyjs__bind_method2('getCanvasImpl', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['GWTCanvasImplIE6']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCanvasImpl'] = $method;
		$method = $pyjs__bind_method2('setWidth', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			self['setPixelWidth'](width);
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method2('setHeight', function(height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			self['setPixelHeight'](height);
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
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

			self['impl']['arc'](x, y, radius, startAngle, endAngle, antiClockwise);
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

			self['impl']['beginPath']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['beginPath'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['impl']['clear']($p['getattr'](self, 'coordWidth'), $p['getattr'](self, 'coordHeight'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('closePath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['impl']['closePath']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['closePath'] = $method;
		$method = $pyjs__bind_method2('createLinearGradient', function(x0, y0, x1, y1) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				x1 = arguments[3];
				y1 = arguments[4];
			}

			return $m['LinearGradientImplIE6'](x0, y0, x1, y1);
		}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
		$cls_definition['createLinearGradient'] = $method;
		$method = $pyjs__bind_method2('createRadialGradient', function(x0, y0, r0, x1, y1, r1) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				r0 = arguments[3];
				x1 = arguments[4];
				y1 = arguments[5];
				r1 = arguments[6];
			}

			return $m['RadialGradientImplIE6'](x0, y0, r0, x1, y1, r1);
		}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1']]);
		$cls_definition['createRadialGradient'] = $method;
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

			self['impl']['cubicCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y);
			return null;
		}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
		$cls_definition['cubicCurveTo'] = $method;
		$method = $pyjs__bind_method2('drawImage', function(img) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				img = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var destHeight,img_width,img_height,destWidth,destY,destX,sourceX,sourceY,sourceHeight,sourceWidth;
			if ($p['bool']($p['isinstance'](img, $m['Widget']))) {
				img_width = img['getWidth']();
				img_height = img['getHeight']();
			}
			else {
				img_width = $m['DOM']['getIntAttribute'](img, 'offsetWidth');
				img_height = $m['DOM']['getIntAttribute'](img, 'offsetHeight');
			}
			if ($p['bool']($p['op_eq']($p['len'](args), 8))) {
				self['impl']['drawImage'](img, args['__getitem__'](0), args['__getitem__'](1), args['__getitem__'](2), args['__getitem__'](3), args['__getitem__'](4), args['__getitem__'](5), args['__getitem__'](6), args['__getitem__'](7));
			}
			else if ($p['bool']($p['op_eq']($p['len'](args), 4))) {
				sourceX = 0;
				sourceY = 0;
				sourceWidth = img_width;
				sourceHeight = img_height;
				destX = args['__getitem__'](0);
				destY = args['__getitem__'](1);
				destWidth = args['__getitem__'](2);
				destHeight = args['__getitem__'](3);
				self['impl']['drawImage'](img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
			}
			else if ($p['bool']($p['op_eq']($p['len'](args), 2))) {
				self['impl']['drawImage'](img, args['__getitem__'](0), args['__getitem__'](1));
			}
			return null;
		}
	, 1, ['args',null,['self'],['img']]);
		$cls_definition['drawImage'] = $method;
		$method = $pyjs__bind_method2('fill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['impl']['fill']();
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

			self['impl']['fillRect'](startX, startY, width, height);
			return null;
		}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
		$cls_definition['fillRect'] = $method;
		$method = $pyjs__bind_method2('fillText', function(text, startX, startY, maxWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				startX = arguments[2];
				startY = arguments[3];
				maxWidth = arguments[4];
			}
			if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

			self['impl']['fillText'](text, startX, startY, maxWidth);
			return null;
		}
	, 1, [null,null,['self'],['text'],['startX'],['startY'],['maxWidth', null]]);
		$cls_definition['fillText'] = $method;
		$method = $pyjs__bind_method2('getCoordHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'coordHeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCoordHeight'] = $method;
		$method = $pyjs__bind_method2('getCoordWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'coordWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCoordWidth'] = $method;
		$method = $pyjs__bind_method2('getGlobalAlpha', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getGlobalAlpha']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getGlobalCompositeOperation']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalCompositeOperation'] = $method;
		$method = $pyjs__bind_method2('getLineCap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getLineCap']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineCap'] = $method;
		$method = $pyjs__bind_method2('getLineJoin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getLineJoin']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineJoin'] = $method;
		$method = $pyjs__bind_method2('getLineWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getLineWidth']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineWidth'] = $method;
		$method = $pyjs__bind_method2('getMiterLimit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['impl']['getMiterLimit']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMiterLimit'] = $method;
		$method = $pyjs__bind_method2('lineTo', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['impl']['lineTo'](x, y);
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

			self['impl']['moveTo'](x, y);
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

			self['impl']['quadraticCurveTo'](cpx, cpy, x, y);
			return null;
		}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
		$cls_definition['quadraticCurveTo'] = $method;
		$method = $pyjs__bind_method2('rect', function(startX, startY, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				startX = arguments[1];
				startY = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}

			self['impl']['rect'](startX, startY, width, height);
			return null;
		}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setCoordSize'](width, height);
			self['setPixelHeight'](height);
			self['setPixelWidth'](width);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('restoreContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['impl']['restoreContext']();
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

			self['impl']['rotate'](angle);
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

			self['impl']['saveContext']();
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

			self['impl']['scale'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['scale'] = $method;
		$method = $pyjs__bind_method2('setBackgroundColor', function(color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
			}

			self['impl']['setBackgroundColor'](self['getCanvasElement'](), $p['str'](color));
			return null;
		}
	, 1, [null,null,['self'],['color']]);
		$cls_definition['setBackgroundColor'] = $method;
		$method = $pyjs__bind_method2('setCoordHeight', function(height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}

			self['impl']['setCoordHeight'](self['getCanvasElement'](), height);
			self['coordHeight'] = height;
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setCoordHeight'] = $method;
		$method = $pyjs__bind_method2('setCoordSize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setCoordWidth'](width);
			self['setCoordHeight'](height);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setCoordSize'] = $method;
		$method = $pyjs__bind_method2('setCoordWidth', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			self['impl']['setCoordWidth'](self['getCanvasElement'](), width);
			self['coordWidth'] = width;
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setCoordWidth'] = $method;
		$method = $pyjs__bind_method2('setFillStyle', function(grad) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				grad = arguments[1];
			}

			self['impl']['setFillStyle'](grad);
			return null;
		}
	, 1, [null,null,['self'],['grad']]);
		$cls_definition['setFillStyle'] = $method;
		$method = $pyjs__bind_method2('setGlobalAlpha', function(alpha) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alpha = arguments[1];
			}

			self['impl']['setGlobalAlpha'](alpha);
			return null;
		}
	, 1, [null,null,['self'],['alpha']]);
		$cls_definition['setGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('setFont', function(font) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				font = arguments[1];
			}

			self['impl']['setFont'](font);
			return null;
		}
	, 1, [null,null,['self'],['font']]);
		$cls_definition['setFont'] = $method;
		$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(globalCompositeOperation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				globalCompositeOperation = arguments[1];
			}

			self['impl']['setGlobalCompositeOperation'](globalCompositeOperation);
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

			self['impl']['setLineCap'](lineCap);
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

			self['impl']['setLineJoin'](lineJoin);
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

			self['impl']['setLineWidth'](width);
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

			self['impl']['setMiterLimit'](miterLimit);
			return null;
		}
	, 1, [null,null,['self'],['miterLimit']]);
		$cls_definition['setMiterLimit'] = $method;
		$method = $pyjs__bind_method2('setPixelHeight', function(height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}
			var $add2,$add1;
			$m['FocusWidget']['setHeight'](self, $p['__op_add']($add1=$p['str'](height),$add2='px'));
			self['impl']['setPixelHeight'](self['getCanvasElement'](), height);
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setPixelHeight'] = $method;
		$method = $pyjs__bind_method2('setPixelWidth', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $add4,$add3;
			$m['FocusWidget']['setWidth'](self, $p['__op_add']($add3=$p['str'](width),$add4='px'));
			self['impl']['setPixelWidth'](self['getCanvasElement'](), width);
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setPixelWidth'] = $method;
		$method = $pyjs__bind_method2('setStrokeStyle', function(grad) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				grad = arguments[1];
			}

			self['impl']['setStrokeStyle'](grad);
			return null;
		}
	, 1, [null,null,['self'],['grad']]);
		$cls_definition['setStrokeStyle'] = $method;
		$method = $pyjs__bind_method2('stroke', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['impl']['stroke']();
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

			self['impl']['strokeRect'](startX, startY, width, height);
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

			self['impl']['transform'](m11, m12, m21, m22, dx, dy);
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

			self['impl']['translate'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translate'] = $method;
		var $bases = new Array($m['FocusWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GWTCanvas', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.GWTCanvas */


/* end module: pyjamas.Canvas.GWTCanvas */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.Focus', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.LinearGradientImplDefault.LinearGradientImplDefault', 'pyjamas.Canvas.LinearGradientImplDefault', 'pyjamas.Canvas.RadialGradientImplDefault.RadialGradientImplDefault', 'pyjamas.Canvas.RadialGradientImplDefault', 'pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas.Canvas.GWTCanvasImplDefault', 'pyjamas.Canvas.LinearGradientImplIE6.LinearGradientImplIE6', 'pyjamas.Canvas.LinearGradientImplIE6', 'pyjamas.Canvas.RadialGradientImplIE6.RadialGradientImplIE6', 'pyjamas.Canvas.RadialGradientImplIE6', 'pyjamas.Canvas.GWTCanvasImplIE6.GWTCanvasImplIE6', 'pyjamas.Canvas.GWTCanvasImplIE6']
*/
