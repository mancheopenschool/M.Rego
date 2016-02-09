/* start module: pyjsdl.surface */
$pyjs['loaded_modules']['pyjsdl.surface'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surface']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surface'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surface'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surface>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surface';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['surface'] = $pyjs['loaded_modules']['pyjsdl.surface'];


	$m['Rect'] = $p['___import___']('rect.Rect', 'pyjsdl', null, false);
	$m['rectPool'] = $p['___import___']('rect.rectPool', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
	$m['HTML5Canvas'] = $p['___import___']('pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Surface'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		$method = $pyjs__bind_method2('__init__', function(size) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				size = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof size != 'undefined') {
					if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = size;
						size = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self['width'] = $p['float_int'](size['__getitem__'](0));
			self['height'] = $p['float_int'](size['__getitem__'](1));
			$m['HTML5Canvas']['__init__'](self, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['_display'] = null;
			self['_super_surface'] = null;
			self['_offset'] = $p['tuple']([0, 0]);
			self['_colorkey'] = null;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['size']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s(%d,%d)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_size'] = $method;
		$method = $pyjs__bind_method2('get_width', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'width');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_width'] = $method;
		$method = $pyjs__bind_method2('get_height', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'height');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_height'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['width'] = $p['float_int'](width);
			self['height'] = $p['float_int'](height);
			$m['HTML5Canvas']['resize'](self, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('get_rect', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var attr = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
					var attr = arguments[arguments['length']+1];
				} else {
					delete attr['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var attr = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
					attr = arguments[arguments['length']+1];
				} else {
					delete attr['$pyjs_is_kwarg'];
				}
			}
			if (typeof attr == 'undefined') {
				attr = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						attr = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,key,rect;
			rect = $m['Rect'](0, 0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			$iter1_iter = attr;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				key = $iter1_nextval['$nextval'];
				rect['__setattr__'](key, attr['__getitem__'](key));
			}
			return rect;
		}
	, 1, [null,['attr'],['self']]);
		$cls_definition['get_rect'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var surface;
			surface = $m['Surface']($p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
			surface['drawImage']($p['getattr'](self, 'canvas'), 0, 0);
			return surface;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('subsurface', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var _rect,surf_rect,surface;
			if ($p['bool']($p['tuple'](['t', 'f'])['__contains__'](rect))) {
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_super_surface')))) {
					return null;
				}
				if ($p['bool']($p['op_eq'](rect, 't'))) {
					self['drawImage']($p['getattr']($p['getattr'](self, '_super_surface'), 'canvas'), $p['getattr'](self, '_offset')['__getitem__'](0), $p['getattr'](self, '_offset')['__getitem__'](1), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'), 0, 0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				}
				else {
					self['_super_surface']['drawImage']($p['getattr'](self, 'canvas'), $p['getattr'](self, '_offset')['__getitem__'](0), $p['getattr'](self, '_offset')['__getitem__'](1));
				}
				return null;
			}
			if ($p['bool']($p['hasattr'](rect, 'width'))) {
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			surf_rect = self['get_rect']();
			if ($p['bool'](!$p['bool'](surf_rect['contains'](_rect)))) {
				throw ($p['ValueError']('subsurface outside surface area'));
			}
			surface = self['getSubimage']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
			surface['_super_surface'] = self;
			surface['_offset'] = $p['tuple']([$p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y')]);
			surface['_colorkey'] = $p['getattr'](self, '_colorkey');
			return surface;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['subsurface'] = $method;
		$method = $pyjs__bind_method2('getSubimage', function(x, y, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}
			var surface;
			surface = $m['Surface']($p['tuple']([width, height]));
			surface['drawImage']($p['getattr'](self, 'canvas'), x, y, width, height, 0, 0, width, height);
			return surface;
		}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
		$cls_definition['getSubimage'] = $method;
		$method = $pyjs__bind_method2('blit', function(surface, position, area) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				position = arguments[2];
				area = arguments[3];
			}
			if (typeof area == 'undefined') area=arguments['callee']['__args__'][5][1];
			var surface_rect,changed_rect,rect;
			if ($p['bool'](!$p['bool'](area))) {
				rect = $m['rectPool']['get'](position['__getitem__'](0), position['__getitem__'](1), $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
				self['impl']['canvasContext']['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'));
			}
			else {
				rect = $m['rectPool']['get'](position['__getitem__'](0), position['__getitem__'](1), area['__getitem__'](2), area['__getitem__'](3));
				self['impl']['canvasContext']['drawImage']($p['getattr'](surface, 'canvas'), area['__getitem__'](0), area['__getitem__'](1), area['__getitem__'](2), area['__getitem__'](3), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), area['__getitem__'](2), area['__getitem__'](3));
			}
			if ($p['bool']($p['getattr'](self, '_display'))) {
				surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
			}
			else {
				surface_rect = self['get_rect']();
			}
			changed_rect = surface_rect['clip'](rect);
			$m['rectPool']['append'](rect);
			return changed_rect;
		}
	, 1, [null,null,['self'],['surface'],['position'],['area', null]]);
		$cls_definition['blit'] = $method;
		$method = $pyjs__bind_method2('_blits', function(surfaces) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surfaces = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,ctx,s,$iter2_idx,$iter2_array;
			ctx = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
			$iter2_iter = surfaces;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				s = $iter2_nextval['$nextval'];
				ctx['drawImage']($p['getattr']($p['getattr'](s, 'image'), 'canvas'), $p['getattr']($p['getattr'](s, 'rect'), 'x'), $p['getattr']($p['getattr'](s, 'rect'), 'y'));
			}
			return null;
		}
	, 1, [null,null,['self'],['surfaces']]);
		$cls_definition['_blits'] = $method;
		$method = $pyjs__bind_method2('_blit_clear', function(surface, rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				rect_list = arguments[2];
			}
			var surface_rect,$iter3_idx,rx,$iter3_array,ctx,r,$and2,$iter3_iter,$and1,$iter3_type,$iter3_nextval;
			ctx = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
			if ($p['bool']($p['getattr'](self, '_display'))) {
				surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
			}
			else {
				surface_rect = self['get_rect']();
			}
			$iter3_iter = rect_list;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				r = $iter3_nextval['$nextval'];
				if ($p['bool'](surface_rect['contains'](r))) {
					ctx['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'), $p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'));
				}
				else {
					rx = surface_rect['clip'](r);
					if ($p['bool'](($p['bool']($and1=$p['getattr'](rx, 'width'))?$p['getattr'](rx, 'height'):$and1))) {
						ctx['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](rx, 'x'), $p['getattr'](rx, 'y'), $p['getattr'](rx, 'width'), $p['getattr'](rx, 'height'), $p['getattr'](rx, 'x'), $p['getattr'](rx, 'y'), $p['getattr'](rx, 'width'), $p['getattr'](rx, 'height'));
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['rect_list']]);
		$cls_definition['_blit_clear'] = $method;
		$method = $pyjs__bind_method2('set_colorkey', function(color, flags) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				flags = arguments[2];
			}
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];
			var b,g,$pyjs_try_err,r;
			if ($p['bool']($p['getattr'](self, '_colorkey'))) {
				r = $p['getattr']($p['getattr'](self, '_colorkey'), 'r');
				g = $p['getattr']($p['getattr'](self, '_colorkey'), 'g');
				b = $p['getattr']($p['getattr'](self, '_colorkey'), 'b');
				self['_colorkey'] = null;
			}
			if ($p['bool'](color)) {
				try {
					color = $m['Color'](color);
					self['_colorkey'] = color;
					self['replace_color']($p['tuple']([$p['getattr'](color, 'r'), $p['getattr'](color, 'g'), $p['getattr'](color, 'b')]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (true) {
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['color'],['flags', null]]);
		$cls_definition['set_colorkey'] = $method;
		$method = $pyjs__bind_method2('get_colorkey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				return $p['tuple']([$p['getattr']($p['getattr'](self, '_colorkey'), 'r'), $p['getattr']($p['getattr'](self, '_colorkey'), 'g'), $p['getattr']($p['getattr'](self, '_colorkey'), 'b'), 255]);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_colorkey'] = $method;
		$method = $pyjs__bind_method2('_getPixel', function(imagedata, index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
				index = arguments[2];
			}

			return imagedata.data[index];;
		}
	, 1, [null,null,['self'],['imagedata'],['index']]);
		$cls_definition['_getPixel'] = $method;
		$method = $pyjs__bind_method2('_setPixel', function(imagedata, index, dat) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
				index = arguments[2];
				dat = arguments[3];
			}
			var data;
			data = $p['str'](dat);
imagedata.data[index]=data;
			return null;
		}
	, 1, [null,null,['self'],['imagedata'],['index'],['dat']]);
		$cls_definition['_setPixel'] = $method;
		$method = $pyjs__bind_method2('replace_color', function(color, new_color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				new_color = arguments[2];
			}
			if (typeof new_color == 'undefined') new_color=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$iter5_array,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$add2,$iter5_idx,col2,col1,color1,color2,pixels,i,$iter4_nextval,j,$iter4_idx,$add3,$add1,$add6,$add7,$add4,$add5,$iter4_array,$add8;
			pixels = self['impl']['getImageData'](0, 0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			if ($p['bool']($p['hasattr'](color, 'a'))) {
				color1 = color;
			}
			else {
				color1 = $m['Color'](color);
			}
			if ($p['bool'](new_color)) {
				if ($p['bool']($p['hasattr'](new_color, 'a'))) {
					color2 = new_color;
				}
				else {
					color2 = $m['Color'](new_color);
				}
			}
			else {
				color2 = $m['Color']($p['getattr'](color1, 'r'), $p['getattr'](color1, 'g'), $p['getattr'](color1, 'b'), 0);
			}
			col1 = $p['tuple']([$p['getattr'](color1, 'r'), $p['getattr'](color1, 'g'), $p['getattr'](color1, 'b'), $p['getattr'](color1, 'a')]);
			col2 = $p['tuple']([$p['getattr'](color2, 'r'), $p['getattr'](color2, 'g'), $p['getattr'](color2, 'b'), $p['getattr'](color2, 'a')]);
			$iter4_iter = $p['xrange'](0, $p['len']($p['getattr'](pixels, 'data')), 4);
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				i = $iter4_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['tuple']([self['_getPixel'](pixels, i), self['_getPixel'](pixels, $p['__op_add']($add1=i,$add2=1)), self['_getPixel'](pixels, $p['__op_add']($add3=i,$add4=2)), self['_getPixel'](pixels, $p['__op_add']($add5=i,$add6=3))]), col1))) {
					$iter5_iter = $p['range'](4);
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						j = $iter5_nextval['$nextval'];
						self['_setPixel'](pixels, $p['__op_add']($add7=i,$add8=j), col2['__getitem__'](j));
					}
				}
			}
			self['impl']['putImageData'](pixels, 0, 0, 0, 0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			return null;
		}
	, 1, [null,null,['self'],['color'],['new_color', null]]);
		$cls_definition['replace_color'] = $method;
		$method = $pyjs__bind_method2('get_at', function(pos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}
			var pixel;
			pixel = self['impl']['getImageData'](pos['__getitem__'](0), pos['__getitem__'](1), 1, 1);
			return $p['tuple']([self['_getPixel'](pixel, 0), self['_getPixel'](pixel, 1), self['_getPixel'](pixel, 2), self['_getPixel'](pixel, 3)]);
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['get_at'] = $method;
		$method = $pyjs__bind_method2('set_at', function(pos, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				color = arguments[2];
			}
			var i,$iter6_idx,$iter6_type,$iter6_array,_color,$iter6_iter,pixel,$iter6_nextval;
			pixel = self['impl']['getImageData'](pos['__getitem__'](0), pos['__getitem__'](1), 1, 1);
			if ($p['bool']($p['hasattr'](color, 'a'))) {
				_color = color;
			}
			else {
				_color = $m['Color'](color);
			}
			$iter6_iter = $p['range'](4);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				i = $iter6_nextval['$nextval'];
				self['_setPixel'](pixel, i, _color['__getitem__'](i));
			}
			self['impl']['putImageData'](pixel, pos['__getitem__'](0), pos['__getitem__'](1), 0, 0, 1, 1);
			return null;
		}
	, 1, [null,null,['self'],['pos'],['color']]);
		$cls_definition['set_at'] = $method;
		$method = $pyjs__bind_method2('fill', function(color, rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				rect = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][3][1];
			if (typeof rect == 'undefined') rect=arguments['callee']['__args__'][4][1];
			var _rect,surface_rect,$or1,$or2;
			if ($p['bool']((color === null))) {
				$m['HTML5Canvas']['fill'](self);
				return null;
			}
			self['beginPath']();
			if ($p['bool'](color)) {
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					self['setFillStyle'](color);
				}
				else {
					self['setFillStyle']($m['Color'](color));
				}
				if ($p['bool'](!$p['bool'](rect))) {
					_rect = $m['Rect'](0, 0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				}
				else {
					if ($p['bool']($p['getattr'](self, '_display'))) {
						surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
					}
					else {
						surface_rect = self['get_rect']();
					}
					if ($p['bool']($p['hasattr'](rect, 'width'))) {
						_rect = surface_rect['clip'](rect);
					}
					else {
						_rect = surface_rect['clip']($m['Rect'](rect));
					}
					if ($p['bool'](($p['bool']($or1=!$p['bool']($p['getattr'](_rect, 'width')))?$or1:!$p['bool']($p['getattr'](_rect, 'height'))))) {
						return _rect;
					}
				}
				self['fillRect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
			}
			else {
				_rect = $m['Rect'](0, 0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				self['clear']();
			}
			return _rect;
		}
	, 1, [null,null,['self'],['color', null],['rect', null]]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('get_parent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_super_surface');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_parent'] = $method;
		$method = $pyjs__bind_method2('get_offset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_offset');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_offset'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,$lambda9,$lambda8;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['convert'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['convert_alpha'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['set_alpha'] = $lambda3;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['get_alpha'] = $lambda4;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['lock'] = $lambda5;
			var 			$lambda6 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = ['arg',null];
			self['unlock'] = $lambda6;
			var 			$lambda7 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda7['__name__'] = '$lambda7';

			$lambda7['__bind_type__'] = 0;
			$lambda7['__args__'] = ['arg',null];
			self['mustlock'] = $lambda7;
			var 			$lambda8 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda8['__name__'] = '$lambda8';

			$lambda8['__bind_type__'] = 0;
			$lambda8['__args__'] = ['arg',null];
			self['get_locked'] = $lambda8;
			var 			$lambda9 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['tuple']([]);
			};
			$lambda9['__name__'] = '$lambda9';

			$lambda9['__bind_type__'] = 0;
			$lambda9['__args__'] = ['arg',null];
			self['get_locks'] = $lambda9;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($m['HTML5Canvas']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Surface', $p['tuple']($bases), $data);
	})();
	$m['Surf'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		$method = $pyjs__bind_method2('__init__', function(image) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				image = arguments[1];
			}
			var element;
			self['canvas'] = image;
			element = image['getElement']();
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['getattr'](element, 'width'), $p['getattr'](element, 'height')]), 2, null);
			self['width'] = $tupleassign1[0];
			self['height'] = $tupleassign1[1];
			self['get_size'] = $p['getattr']($m['Surface'], 'get_size');
			self['get_width'] = $p['getattr']($m['Surface'], 'get_width');
			self['get_height'] = $p['getattr']($m['Surface'], 'get_height');
			self['get_rect'] = $p['getattr']($m['Surface'], 'get_rect');
			self['_nonimplemented_methods'] = $p['getattr']($m['Surface'], '_nonimplemented_methods');
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['image']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Surf', $p['tuple']($bases), $data);
	})();
	$m['IndexSizeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('IndexSizeError', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.surface */


/* end module: pyjsdl.surface */


/*
PYJS_DEPS: ['rect.Rect', 'rect', 'rect.rectPool', 'color.Color', 'color', 'pyjsobj.HTML5Canvas', 'pyjsobj']
*/
