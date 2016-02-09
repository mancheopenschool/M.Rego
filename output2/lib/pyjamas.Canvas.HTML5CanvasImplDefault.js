/* start module: pyjamas.Canvas.HTML5CanvasImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.HTML5CanvasImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.HTML5CanvasImplDefault';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['HTML5CanvasImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplDefault'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 1:\n    # -*- coding: utf-8 -*-';
		$m.__track_lines__[8] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 8:\n    from pyjamas.Canvas.GWTCanvasImplDefault import GWTCanvasImplDefault';
		$m.__track_lines__[11] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 11:\n    class HTML5CanvasImplDefault(GWTCanvasImplDefault):';
		$m.__track_lines__[13] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 13:\n    def clearRect(self, x, y, w, h):';
		$m.__track_lines__[14] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 14:\n    self.canvasContext.clearRect(x, y, w, h)';
		$m.__track_lines__[16] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 16:\n    def clip(self):';
		$m.__track_lines__[17] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 17:\n    self.canvasContext.clip()';
		$m.__track_lines__[19] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 19:\n    def createImageData(self, sw, sh):';
		$m.__track_lines__[20] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 20:\n    return self.canvasContext.createImageData(sw, sh)';
		$m.__track_lines__[22] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 22:\n    def getFont(self):';
		$m.__track_lines__[23] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 23:\n    return self.canvasContext.font';
		$m.__track_lines__[25] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 25:\n    def getImageData(self, sx, sy, sw, sh):';
		$m.__track_lines__[26] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 26:\n    return self.canvasContext.getImageData(sx, sy, sw, sh)';
		$m.__track_lines__[28] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 28:\n    def getShadowBlur(self):';
		$m.__track_lines__[29] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 29:\n    return self.canvasContext.shadowBlur';
		$m.__track_lines__[31] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 31:\n    def getShadowColor(self):';
		$m.__track_lines__[32] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 32:\n    return self.canvasContext.shadowColor';
		$m.__track_lines__[34] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 34:\n    def getShadowOffsetX(self):';
		$m.__track_lines__[35] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 35:\n    return self.canvasContext.shadowOffsetX';
		$m.__track_lines__[37] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 37:\n    def getShadowOffsetY(self):';
		$m.__track_lines__[38] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 38:\n    return self.canvasContext.shadowOffsetY';
		$m.__track_lines__[40] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 40:\n    def getTextAlign(self):';
		$m.__track_lines__[41] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 41:\n    return self.canvasContext.textAlign';
		$m.__track_lines__[43] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 43:\n    def getTextBaseline(self):';
		$m.__track_lines__[44] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 44:\n    return self.canvasContext.textBaseline';
		$m.__track_lines__[46] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 46:\n    def measureText(self, text):';
		$m.__track_lines__[47] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 47:\n    return self.canvasContext.measureText(text).width';
		$m.__track_lines__[49] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 49:\n    def putImageData(self, imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight):';
		$m.__track_lines__[50] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 50:\n    self.canvasContext.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)';
		$m.__track_lines__[52] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 52:\n    def setFont(self, value):';
		$m.__track_lines__[53] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 53:\n    self.canvasContext.font = value';
		$m.__track_lines__[55] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 55:\n    def setShadowBlur(self, blur):';
		$m.__track_lines__[56] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 56:\n    self.canvasContext.shadowBlur = blur';
		$m.__track_lines__[58] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 58:\n    def setShadowColor(self, color):';
		$m.__track_lines__[59] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 59:\n    self.canvasContext.shadowColor = color';
		$m.__track_lines__[61] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 61:\n    def setShadowOffset(self, x, y):';
		$m.__track_lines__[62] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 62:\n    self.canvasContext.shadowOffsetX = x';
		$m.__track_lines__[63] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 63:\n    self.canvasContext.shadowOffsetY = y';
		$m.__track_lines__[65] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 65:\n    def setTextAlign(self, loc):';
		$m.__track_lines__[66] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 66:\n    self.canvasContext.textAlign = loc';
		$m.__track_lines__[68] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 68:\n    def setTextBaseline(self, loc):';
		$m.__track_lines__[69] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 69:\n    self.canvasContext.textBaseline = loc';
		$m.__track_lines__[71] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 71:\n    def toDataURL(self, type):';
		$m.__track_lines__[72] = 'pyjamas.Canvas.HTML5CanvasImplDefault.py, line 72:\n    return self.canvasContext.toDataURL(type)';


		$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvasImplDefault'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=11;
		$m['HTML5CanvasImplDefault'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.HTML5CanvasImplDefault';
			$cls_definition['__md5__'] = '159dc65e4099c3b1823098773211286b';
			$pyjs['track']['lineno']=13;
			$method = $pyjs__bind_method2('clearRect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=13;
				$pyjs['track']['lineno']=14;
				self['canvasContext']['clearRect'](x, y, w, h);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['clearRect'] = $method;
			$pyjs['track']['lineno']=16;
			$method = $pyjs__bind_method2('clip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=16;
				$pyjs['track']['lineno']=17;
				self['canvasContext']['clip']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clip'] = $method;
			$pyjs['track']['lineno']=19;
			$method = $pyjs__bind_method2('createImageData', function(sw, sh) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sw = arguments[1];
					sh = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=19;
				$pyjs['track']['lineno']=20;
				$pyjs['track']['lineno']=20;
				var $pyjs__ret = self['canvasContext']['createImageData'](sw, sh);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sw'],['sh']]);
			$cls_definition['createImageData'] = $method;
			$pyjs['track']['lineno']=22;
			$method = $pyjs__bind_method2('getFont', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=22;
				$pyjs['track']['lineno']=23;
				$pyjs['track']['lineno']=23;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'font');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFont'] = $method;
			$pyjs['track']['lineno']=25;
			$method = $pyjs__bind_method2('getImageData', function(sx, sy, sw, sh) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					sx = arguments[1];
					sy = arguments[2];
					sw = arguments[3];
					sh = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=26;
				$pyjs['track']['lineno']=26;
				var $pyjs__ret = self['canvasContext']['getImageData'](sx, sy, sw, sh);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sx'],['sy'],['sw'],['sh']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=28;
			$method = $pyjs__bind_method2('getShadowBlur', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=29;
				$pyjs['track']['lineno']=29;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowBlur');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowBlur'] = $method;
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('getShadowColor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=32;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowColor');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowColor'] = $method;
			$pyjs['track']['lineno']=34;
			$method = $pyjs__bind_method2('getShadowOffsetX', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=34;
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=35;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowOffsetX');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowOffsetX'] = $method;
			$pyjs['track']['lineno']=37;
			$method = $pyjs__bind_method2('getShadowOffsetY', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=38;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'shadowOffsetY');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowOffsetY'] = $method;
			$pyjs['track']['lineno']=40;
			$method = $pyjs__bind_method2('getTextAlign', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'textAlign');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTextAlign'] = $method;
			$pyjs['track']['lineno']=43;
			$method = $pyjs__bind_method2('getTextBaseline', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=44;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'textBaseline');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTextBaseline'] = $method;
			$pyjs['track']['lineno']=46;
			$method = $pyjs__bind_method2('measureText', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=47;
				var $pyjs__ret = $p['getattr'](self['canvasContext']['measureText'](text), 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['measureText'] = $method;
			$pyjs['track']['lineno']=49;
			$method = $pyjs__bind_method2('putImageData', function(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					dx = arguments[2];
					dy = arguments[3];
					dirtyX = arguments[4];
					dirtyY = arguments[5];
					dirtyWidth = arguments[6];
					dirtyHeight = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 8) $pyjs__exception_func_param(arguments['callee']['__name__'], 8, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=50;
				self['canvasContext']['putImageData'](imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata'],['dx'],['dy'],['dirtyX'],['dirtyY'],['dirtyWidth'],['dirtyHeight']]);
			$cls_definition['putImageData'] = $method;
			$pyjs['track']['lineno']=52;
			$method = $pyjs__bind_method2('setFont', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=53;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('font', value) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'font', value); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setFont'] = $method;
			$pyjs['track']['lineno']=55;
			$method = $pyjs__bind_method2('setShadowBlur', function(blur) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					blur = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=56;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('shadowBlur', blur) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'shadowBlur', blur); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['blur']]);
			$cls_definition['setShadowBlur'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('setShadowColor', function(color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=59;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('shadowColor', color) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'shadowColor', color); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['color']]);
			$cls_definition['setShadowColor'] = $method;
			$pyjs['track']['lineno']=61;
			$method = $pyjs__bind_method2('setShadowOffset', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=62;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('shadowOffsetX', x) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'shadowOffsetX', x); 
				$pyjs['track']['lineno']=63;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('shadowOffsetY', y) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'shadowOffsetY', y); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['setShadowOffset'] = $method;
			$pyjs['track']['lineno']=65;
			$method = $pyjs__bind_method2('setTextAlign', function(loc) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					loc = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=66;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('textAlign', loc) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'textAlign', loc); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loc']]);
			$cls_definition['setTextAlign'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('setTextBaseline', function(loc) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					loc = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=69;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('textBaseline', loc) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'textBaseline', loc); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loc']]);
			$cls_definition['setTextBaseline'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('toDataURL', function(type) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '159dc65e4099c3b1823098773211286b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplDefault', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplDefault';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=72;
				var $pyjs__ret = self['canvasContext']['toDataURL'](type);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['type']]);
			$cls_definition['toDataURL'] = $method;
			$pyjs['track']['lineno']=11;
			var $bases = new Array($m['GWTCanvasImplDefault']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTML5CanvasImplDefault', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.HTML5CanvasImplDefault */


/* end module: pyjamas.Canvas.HTML5CanvasImplDefault */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvasImplDefault.GWTCanvasImplDefault', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplDefault']
*/
