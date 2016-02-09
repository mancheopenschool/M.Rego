/* start module: pyjamas.Canvas.HTML5CanvasImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.HTML5CanvasImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.HTML5CanvasImplIE6';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['HTML5CanvasImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5CanvasImplIE6'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 1:\n    # -*- coding: utf-8 -*-';
		$m.__track_lines__[8] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 8:\n    from pyjamas.Canvas.GWTCanvasImplIE6 import GWTCanvasImplIE6';
		$m.__track_lines__[11] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 11:\n    """';
		$m.__track_lines__[16] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 16:\n    class HTML5CanvasImplIE6(GWTCanvasImplIE6):';
		$m.__track_lines__[18] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 18:\n    def clearRect(self, x, y, w, h):';
		$m.__track_lines__[19] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 19:\n    raise NotImplementedError';
		$m.__track_lines__[21] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 21:\n    def clip(self):';
		$m.__track_lines__[22] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 22:\n    raise NotImplementedError';
		$m.__track_lines__[24] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 24:\n    def createImageData(self, sw, sh):';
		$m.__track_lines__[25] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 25:\n    raise NotImplementedError';
		$m.__track_lines__[27] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 27:\n    def getFont(self):';
		$m.__track_lines__[28] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 28:\n    raise NotImplementedError';
		$m.__track_lines__[30] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 30:\n    def getImageData(self, sx, sy, sw, sh):';
		$m.__track_lines__[31] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 31:\n    raise NotImplementedError';
		$m.__track_lines__[33] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 33:\n    def getShadowBlur(self):';
		$m.__track_lines__[34] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 34:\n    raise NotImplementedError';
		$m.__track_lines__[36] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 36:\n    def getShadowColor(self):';
		$m.__track_lines__[37] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 37:\n    raise NotImplementedError';
		$m.__track_lines__[39] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 39:\n    def getShadowOffsetX(self):';
		$m.__track_lines__[40] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 40:\n    raise NotImplementedError';
		$m.__track_lines__[42] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 42:\n    def getShadowOffsetY(self):';
		$m.__track_lines__[43] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 43:\n    raise NotImplementedError';
		$m.__track_lines__[45] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 45:\n    def getTextAlign(self):';
		$m.__track_lines__[46] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 46:\n    raise NotImplementedError';
		$m.__track_lines__[48] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 48:\n    def getTextBaseline(self):';
		$m.__track_lines__[49] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 49:\n    raise NotImplementedError';
		$m.__track_lines__[51] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 51:\n    def measureText(self, text):';
		$m.__track_lines__[52] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 52:\n    raise NotImplementedError';
		$m.__track_lines__[54] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 54:\n    def putImageData(self, imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight):';
		$m.__track_lines__[55] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 55:\n    raise NotImplementedError';
		$m.__track_lines__[57] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 57:\n    def setFont(self, value):';
		$m.__track_lines__[58] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 58:\n    raise NotImplementedError';
		$m.__track_lines__[60] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 60:\n    def setShadowBlur(self, blur):';
		$m.__track_lines__[61] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 61:\n    raise NotImplementedError';
		$m.__track_lines__[63] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 63:\n    def setShadowColor(self, color):';
		$m.__track_lines__[64] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 64:\n    raise NotImplementedError';
		$m.__track_lines__[66] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 66:\n    def setShadowOffset(self, x, y):';
		$m.__track_lines__[67] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 67:\n    raise NotImplementedError';
		$m.__track_lines__[69] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 69:\n    def setTextAlign(self, loc):';
		$m.__track_lines__[70] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 70:\n    raise NotImplementedError';
		$m.__track_lines__[72] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 72:\n    def setTextBaseline(self, loc):';
		$m.__track_lines__[73] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 73:\n    raise NotImplementedError';
		$m.__track_lines__[75] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 75:\n    def toDataURL(self, type):';
		$m.__track_lines__[76] = 'pyjamas.Canvas.HTML5CanvasImplIE6.py, line 76:\n    raise NotImplementedError';


		$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvasImplIE6'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIE6.GWTCanvasImplIE6', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=11;
		$pyjs['track']['lineno']=16;
		$m['HTML5CanvasImplIE6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.HTML5CanvasImplIE6';
			$cls_definition['__md5__'] = 'e9dc4576a7017a364c09247a01b6d7b5';
			$pyjs['track']['lineno']=18;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=18;
				$pyjs['track']['lineno']=19;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['clearRect'] = $method;
			$pyjs['track']['lineno']=21;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=21;
				$pyjs['track']['lineno']=22;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clip'] = $method;
			$pyjs['track']['lineno']=24;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=24;
				$pyjs['track']['lineno']=25;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sw'],['sh']]);
			$cls_definition['createImageData'] = $method;
			$pyjs['track']['lineno']=27;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=28;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFont'] = $method;
			$pyjs['track']['lineno']=30;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=31;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sx'],['sy'],['sw'],['sh']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=33;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=34;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowBlur'] = $method;
			$pyjs['track']['lineno']=36;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=36;
				$pyjs['track']['lineno']=37;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowColor'] = $method;
			$pyjs['track']['lineno']=39;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=40;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowOffsetX'] = $method;
			$pyjs['track']['lineno']=42;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=43;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowOffsetY'] = $method;
			$pyjs['track']['lineno']=45;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=46;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTextAlign'] = $method;
			$pyjs['track']['lineno']=48;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=49;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTextBaseline'] = $method;
			$pyjs['track']['lineno']=51;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=52;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['measureText'] = $method;
			$pyjs['track']['lineno']=54;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=55;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata'],['dx'],['dy'],['dirtyX'],['dirtyY'],['dirtyWidth'],['dirtyHeight']]);
			$cls_definition['putImageData'] = $method;
			$pyjs['track']['lineno']=57;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=58;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setFont'] = $method;
			$pyjs['track']['lineno']=60;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=61;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['blur']]);
			$cls_definition['setShadowBlur'] = $method;
			$pyjs['track']['lineno']=63;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=64;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['color']]);
			$cls_definition['setShadowColor'] = $method;
			$pyjs['track']['lineno']=66;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=67;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['setShadowOffset'] = $method;
			$pyjs['track']['lineno']=69;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=70;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loc']]);
			$cls_definition['setTextAlign'] = $method;
			$pyjs['track']['lineno']=72;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=73;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loc']]);
			$cls_definition['setTextBaseline'] = $method;
			$pyjs['track']['lineno']=75;
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
					if (self.prototype['__md5__'] !== 'e9dc4576a7017a364c09247a01b6d7b5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5CanvasImplIE6', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5CanvasImplIE6';
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=76;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['NotImplementedError']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['type']]);
			$cls_definition['toDataURL'] = $method;
			$pyjs['track']['lineno']=16;
			var $bases = new Array($m['GWTCanvasImplIE6']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTML5CanvasImplIE6', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.HTML5CanvasImplIE6 */


/* end module: pyjamas.Canvas.HTML5CanvasImplIE6 */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvasImplIE6.GWTCanvasImplIE6', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIE6']
*/
