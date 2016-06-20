/* start module: pyjamas.Canvas.ImageData */
$pyjs['loaded_modules']['pyjamas.Canvas.ImageData'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ImageData']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ImageData>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ImageData';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['ImageData'] = $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.ImageData.py, line 1:\n    # -*- coding: utf-8 -*-';
		$m.__track_lines__[8] = 'pyjamas.Canvas.ImageData.py, line 8:\n    """';
		$m.__track_lines__[12] = 'pyjamas.Canvas.ImageData.py, line 12:\n    class ImageData:';
		$m.__track_lines__[13] = 'pyjamas.Canvas.ImageData.py, line 13:\n    def __init__(self, imagedata):';
		$m.__track_lines__[14] = 'pyjamas.Canvas.ImageData.py, line 14:\n    self.width = imagedata.width';
		$m.__track_lines__[15] = 'pyjamas.Canvas.ImageData.py, line 15:\n    self.height = imagedata.height';
		$m.__track_lines__[16] = 'pyjamas.Canvas.ImageData.py, line 16:\n    self.data = imagedata.data';
		$m.__track_lines__[18] = 'pyjamas.Canvas.ImageData.py, line 18:\n    def getWidth(self):';
		$m.__track_lines__[19] = 'pyjamas.Canvas.ImageData.py, line 19:\n    return self.width';
		$m.__track_lines__[21] = 'pyjamas.Canvas.ImageData.py, line 21:\n    def getHeight(self):';
		$m.__track_lines__[22] = 'pyjamas.Canvas.ImageData.py, line 22:\n    return self.height';
		$m.__track_lines__[24] = 'pyjamas.Canvas.ImageData.py, line 24:\n    def getData(self):';
		$m.__track_lines__[25] = 'pyjamas.Canvas.ImageData.py, line 25:\n    return self.data';
		$m.__track_lines__[27] = 'pyjamas.Canvas.ImageData.py, line 27:\n    def setData(self, data):';
		$m.__track_lines__[28] = 'pyjamas.Canvas.ImageData.py, line 28:\n    self.data = data';
		$m.__track_lines__[30] = 'pyjamas.Canvas.ImageData.py, line 30:\n    def getPixel(self, x, y):';
		$m.__track_lines__[31] = 'pyjamas.Canvas.ImageData.py, line 31:\n    offset = (y*self.width + x)*4';
		$m.__track_lines__[32] = 'pyjamas.Canvas.ImageData.py, line 32:\n    return self.data[offset:offset+4]';
		$m.__track_lines__[34] = 'pyjamas.Canvas.ImageData.py, line 34:\n    """';
		$m.__track_lines__[37] = 'pyjamas.Canvas.ImageData.py, line 37:\n    def setPixel(self, x, y, rgba):';
		$m.__track_lines__[38] = 'pyjamas.Canvas.ImageData.py, line 38:\n    offset = (y*self.width + x)*4';
		$m.__track_lines__[39] = 'pyjamas.Canvas.ImageData.py, line 39:\n    self.data[offset:offset+4] = rgba';

		var $constant_int_4 = new $p['int'](4);
		$pyjs['track']['module']='pyjamas.Canvas.ImageData';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=8;
		$pyjs['track']['lineno']=12;
		$m['ImageData'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.ImageData';
			$cls_definition['__md5__'] = '00fb23dbb8ebec93bb8985c935b1e86c';
			$pyjs['track']['lineno']=13;
			$method = $pyjs__bind_method2('__init__', function(imagedata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '00fb23dbb8ebec93bb8985c935b1e86c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageData', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageData';
				$pyjs['track']['lineno']=13;
				$pyjs['track']['lineno']=14;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['getattr'](imagedata, 'width')) : $p['setattr'](self, 'width', $p['getattr'](imagedata, 'width')); 
				$pyjs['track']['lineno']=15;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['getattr'](imagedata, 'height')) : $p['setattr'](self, 'height', $p['getattr'](imagedata, 'height')); 
				$pyjs['track']['lineno']=16;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', $p['getattr'](imagedata, 'data')) : $p['setattr'](self, 'data', $p['getattr'](imagedata, 'data')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=18;
			$method = $pyjs__bind_method2('getWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '00fb23dbb8ebec93bb8985c935b1e86c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageData', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageData';
				$pyjs['track']['lineno']=18;
				$pyjs['track']['lineno']=19;
				$pyjs['track']['lineno']=19;
				var $pyjs__ret = $p['getattr'](self, 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidth'] = $method;
			$pyjs['track']['lineno']=21;
			$method = $pyjs__bind_method2('getHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '00fb23dbb8ebec93bb8985c935b1e86c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageData', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageData';
				$pyjs['track']['lineno']=21;
				$pyjs['track']['lineno']=22;
				$pyjs['track']['lineno']=22;
				var $pyjs__ret = $p['getattr'](self, 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHeight'] = $method;
			$pyjs['track']['lineno']=24;
			$method = $pyjs__bind_method2('getData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '00fb23dbb8ebec93bb8985c935b1e86c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageData', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageData';
				$pyjs['track']['lineno']=24;
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=25;
				var $pyjs__ret = $p['getattr'](self, 'data');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getData'] = $method;
			$pyjs['track']['lineno']=27;
			$method = $pyjs__bind_method2('setData', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '00fb23dbb8ebec93bb8985c935b1e86c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageData', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageData';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', data) : $p['setattr'](self, 'data', data); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['setData'] = $method;
			$pyjs['track']['lineno']=30;
			$method = $pyjs__bind_method2('getPixel', function(x, y) {
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
					if (self.prototype['__md5__'] !== '00fb23dbb8ebec93bb8985c935b1e86c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4,offset,$mul4,$mul3,$mul2,$mul1;
				$pyjs['track']={'module':'pyjamas.Canvas.ImageData', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageData';
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=31;
				offset = (typeof ($mul3=$p['__op_add']($add1=(typeof ($mul1=y)==typeof ($mul2=$p['getattr'](self, 'width')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)),$add2=x))==typeof ($mul4=$constant_int_4) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=32;
				var $pyjs__ret = $p['__getslice']($p['getattr'](self, 'data'), offset, $p['__op_add']($add3=offset,$add4=$constant_int_4));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['getPixel'] = $method;
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=37;
			$method = $pyjs__bind_method2('setPixel', function(x, y, rgba) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					rgba = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '00fb23dbb8ebec93bb8985c935b1e86c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul8,$add5,offset,$mul7,$add6,$add7,$mul6,$mul5,$add8;
				$pyjs['track']={'module':'pyjamas.Canvas.ImageData', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageData';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=38;
				offset = (typeof ($mul7=$p['__op_add']($add5=(typeof ($mul5=y)==typeof ($mul6=$p['getattr'](self, 'width')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)),$add6=x))==typeof ($mul8=$constant_int_4) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8));
				$pyjs['track']['lineno']=39;
				$p['__setslice']($p['getattr'](self, 'data'), offset, $p['__op_add']($add7=offset,$add8=$constant_int_4), rgba);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['rgba']]);
			$cls_definition['setPixel'] = $method;
			$pyjs['track']['lineno']=12;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ImageData', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.ImageData */


/* end module: pyjamas.Canvas.ImageData */


