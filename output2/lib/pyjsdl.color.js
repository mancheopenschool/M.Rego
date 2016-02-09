/* start module: pyjsdl.color */
$pyjs['loaded_modules']['pyjsdl.color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.color']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.color'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.color'];
	$m['__repr__'] = function() { return '<module: pyjsdl.color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.color';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['color'] = $pyjs['loaded_modules']['pyjsdl.color'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.color.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.color.py, line 4:\n    from pyjsobj import Color as _Color';
		$m.__track_lines__[6] = "pyjsdl.color.py, line 6:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[9] = 'pyjsdl.color.py, line 9:\n    class Color(_Color):';
		$m.__track_lines__[11] = 'pyjsdl.color.py, line 11:\n    def __init__(self, *color):';
		$m.__track_lines__[30] = 'pyjsdl.color.py, line 30:\n    ln = len(color)';
		$m.__track_lines__[31] = 'pyjsdl.color.py, line 31:\n    if ln == 1:';
		$m.__track_lines__[32] = 'pyjsdl.color.py, line 32:\n    _color = color[0]';
		$m.__track_lines__[33] = "pyjsdl.color.py, line 33:\n    if hasattr(_color, '__len__'):";
		$m.__track_lines__[34] = 'pyjsdl.color.py, line 34:\n    ln = len(_color)';
		$m.__track_lines__[36] = 'pyjsdl.color.py, line 36:\n    _color = color';
		$m.__track_lines__[37] = 'pyjsdl.color.py, line 37:\n    if ln == 4:';
		$m.__track_lines__[38] = 'pyjsdl.color.py, line 38:\n    self.r,self.g,self.b,self.a = _color[0],_color[1],_color[2],_color[3]';
		$m.__track_lines__[40] = 'pyjsdl.color.py, line 40:\n    self.r,self.g,self.b,self.a = _color[0],_color[1],_color[2],255';
		$m.__track_lines__[42] = 'pyjsdl.color.py, line 42:\n    self.r,self.g,self.b,self.a = (_color>>16) & 0xff, (_color>>8) & 0xff, _color & 0xff, (_color>>24) & 0xff';
		$m.__track_lines__[44] = 'pyjsdl.color.py, line 44:\n    def __repr__(self):';
		$m.__track_lines__[48] = 'pyjsdl.color.py, line 48:\n    return "(%d,%d,%d,%d)" % (self.r, self.g, self.b, self.a)';
		$m.__track_lines__[50] = 'pyjsdl.color.py, line 50:\n    def __str__(self):';
		$m.__track_lines__[54] = 'pyjsdl.color.py, line 54:\n    return "rgba(%d,%d,%d,%f)" % (self.r, self.g, self.b, self.a/255.0)';
		$m.__track_lines__[56] = 'pyjsdl.color.py, line 56:\n    def __getitem__(self, index):';
		$m.__track_lines__[60] = 'pyjsdl.color.py, line 60:\n    return {0:self.r, 1:self.g, 2:self.b, 3:self.a}[index]';
		$m.__track_lines__[62] = 'pyjsdl.color.py, line 62:\n    def __setitem__(self, index, val):';
		$m.__track_lines__[63] = "pyjsdl.color.py, line 63:\n    self.__setattr__({0:'r', 1:'g', 2:'b', 3:'a'}[index], val)";
		$m.__track_lines__[65] = 'pyjsdl.color.py, line 65:\n    def __iter__(self):';
		$m.__track_lines__[66] = 'pyjsdl.color.py, line 66:\n    return iter([self.r, self.g, self.b, self.a])';
		$m.__track_lines__[68] = 'pyjsdl.color.py, line 68:\n    def __len__(self):';
		$m.__track_lines__[69] = 'pyjsdl.color.py, line 69:\n    return 4';
		$m.__track_lines__[71] = 'pyjsdl.color.py, line 71:\n    def __eq__(self, other):';
		$m.__track_lines__[72] = "pyjsdl.color.py, line 72:\n    if hasattr(other, 'a'):";
		$m.__track_lines__[73] = 'pyjsdl.color.py, line 73:\n    return self.r==other.r and self.g==other.g and self.b==other.b and self.a==other.a';
		$m.__track_lines__[75] = 'pyjsdl.color.py, line 75:\n    if len(other) == 4:';
		$m.__track_lines__[76] = 'pyjsdl.color.py, line 76:\n    return self.a==other[3] and self.r==other[0] and self.g==other[1] and self.b==other[2]';
		$m.__track_lines__[78] = 'pyjsdl.color.py, line 78:\n    return self.r==other[0] and self.g==other[1] and self.b==other[2]';
		$m.__track_lines__[80] = 'pyjsdl.color.py, line 80:\n    def __ne__(self, other):';
		$m.__track_lines__[81] = "pyjsdl.color.py, line 81:\n    if hasattr(other, 'a'):";
		$m.__track_lines__[82] = 'pyjsdl.color.py, line 82:\n    return self.r!=other.r or self.g!=other.g or self.b!=other.b or self.a!=other.a';
		$m.__track_lines__[84] = 'pyjsdl.color.py, line 84:\n    if len(other) == 4:';
		$m.__track_lines__[85] = 'pyjsdl.color.py, line 85:\n    return self.a!=other[3] or self.r!=other[0] or self.g!=other[1] or self.b!=other[2]';
		$m.__track_lines__[87] = 'pyjsdl.color.py, line 87:\n    return self.r!=other[0] or self.g!=other[1] or self.b!=other[2]';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.color';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['_Color'] = $p['___import___']('pyjsobj.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=9;
		$m['Color'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.color';
			$cls_definition['__md5__'] = 'a98d635d75d9b46a7e3968bb87c2c995';
			$pyjs['track']['lineno']=11;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var color = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var color = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ln,_color;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=11;
				$pyjs['track']['lineno']=30;
				ln = $p['len'](color);
				$pyjs['track']['lineno']=31;
				if ($p['bool']($p['op_eq'](ln, $constant_int_1))) {
					$pyjs['track']['lineno']=32;
					_color = color['__getitem__']($constant_int_0);
					$pyjs['track']['lineno']=33;
					if ($p['bool']($p['hasattr'](_color, '__len__'))) {
						$pyjs['track']['lineno']=34;
						ln = $p['len'](_color);
					}
				}
				else {
					$pyjs['track']['lineno']=36;
					_color = color;
				}
				$pyjs['track']['lineno']=37;
				if ($p['bool']($p['op_eq'](ln, $constant_int_4))) {
					$pyjs['track']['lineno']=38;
					var $tupleassign1 = $p['__ass_unpack']($p['tuple']([_color['__getitem__']($constant_int_0), _color['__getitem__']($constant_int_1), _color['__getitem__']($constant_int_2), _color['__getitem__']($constant_int_3)]), 4, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('r', $tupleassign1[0]) : $p['setattr'](self, 'r', $tupleassign1[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('g', $tupleassign1[1]) : $p['setattr'](self, 'g', $tupleassign1[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $tupleassign1[2]) : $p['setattr'](self, 'b', $tupleassign1[2]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a', $tupleassign1[3]) : $p['setattr'](self, 'a', $tupleassign1[3]); 
				}
				else if ($p['bool']($p['op_eq'](ln, $constant_int_3))) {
					$pyjs['track']['lineno']=40;
					var $tupleassign2 = $p['__ass_unpack']($p['tuple']([_color['__getitem__']($constant_int_0), _color['__getitem__']($constant_int_1), _color['__getitem__']($constant_int_2), $constant_int_255]), 4, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('r', $tupleassign2[0]) : $p['setattr'](self, 'r', $tupleassign2[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('g', $tupleassign2[1]) : $p['setattr'](self, 'g', $tupleassign2[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $tupleassign2[2]) : $p['setattr'](self, 'b', $tupleassign2[2]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a', $tupleassign2[3]) : $p['setattr'](self, 'a', $tupleassign2[3]); 
				}
				else {
					$pyjs['track']['lineno']=42;
					var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$p['op_bitand2']($p['op_bitshiftright'](_color,$constant_int_16), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](_color,$constant_int_8), $constant_int_255), $p['op_bitand2'](_color, $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](_color,$constant_int_24), $constant_int_255)]), 4, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('r', $tupleassign3[0]) : $p['setattr'](self, 'r', $tupleassign3[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('g', $tupleassign3[1]) : $p['setattr'](self, 'g', $tupleassign3[1]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('b', $tupleassign3[2]) : $p['setattr'](self, 'b', $tupleassign3[2]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('a', $tupleassign3[3]) : $p['setattr'](self, 'a', $tupleassign3[3]); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['color',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=44;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				var $pyjs__ret = $p['sprintf']('(%d,%d,%d,%d)', $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), $p['getattr'](self, 'a')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=50;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div1;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=54;
				var $pyjs__ret = $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), (typeof ($div1=$p['getattr'](self, 'a'))==typeof ($div2=255.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=56;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=60;
				var $pyjs__ret = $p['dict']([[$constant_int_0, $p['getattr'](self, 'r')], [$constant_int_1, $p['getattr'](self, 'g')], [$constant_int_2, $p['getattr'](self, 'b')], [$constant_int_3, $p['getattr'](self, 'a')]])['__getitem__'](index);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=62;
			$method = $pyjs__bind_method2('__setitem__', function(index, val) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					val = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=63;
				self['__setattr__']($p['dict']([[$constant_int_0, 'r'], [$constant_int_1, 'g'], [$constant_int_2, 'b'], [$constant_int_3, 'a']])['__getitem__'](index), val);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['val']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=65;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = $p['iter']($p['list']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), $p['getattr'](self, 'a')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.color', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=69;
				var $pyjs__ret = $constant_int_4;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('__eq__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$and9,$and1,$and3,$and4,$and5,$and6,$and7,$and10,$and2,$and11;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				if ($p['bool']($p['hasattr'](other, 'a'))) {
					$pyjs['track']['lineno']=73;
					$pyjs['track']['lineno']=73;
					var $pyjs__ret = ($p['bool']($and1=$p['op_eq']($p['getattr'](self, 'r'), $p['getattr'](other, 'r')))?($p['bool']($and2=$p['op_eq']($p['getattr'](self, 'g'), $p['getattr'](other, 'g')))?($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'b'), $p['getattr'](other, 'b')))?$p['op_eq']($p['getattr'](self, 'a'), $p['getattr'](other, 'a')):$and3):$and2):$and1);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=75;
					if ($p['bool']($p['op_eq']($p['len'](other), $constant_int_4))) {
						$pyjs['track']['lineno']=76;
						$pyjs['track']['lineno']=76;
						var $pyjs__ret = ($p['bool']($and5=$p['op_eq']($p['getattr'](self, 'a'), other['__getitem__']($constant_int_3)))?($p['bool']($and6=$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?($p['bool']($and7=$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2)):$and7):$and6):$and5);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=78;
						$pyjs['track']['lineno']=78;
						var $pyjs__ret = ($p['bool']($and9=$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?($p['bool']($and10=$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2)):$and10):$and9);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__eq__'] = $method;
			$pyjs['track']['lineno']=80;
			$method = $pyjs__bind_method2('__ne__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a98d635d75d9b46a7e3968bb87c2c995') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or5,$or4,$or7,$or6,$or1,$or3,$or2,$or9,$or8,$or11,$or10;
				$pyjs['track']={'module':'pyjsdl.color', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.color';
				$pyjs['track']['lineno']=80;
				$pyjs['track']['lineno']=81;
				if ($p['bool']($p['hasattr'](other, 'a'))) {
					$pyjs['track']['lineno']=82;
					$pyjs['track']['lineno']=82;
					var $pyjs__ret = ($p['bool']($or1=!$p['op_eq']($p['getattr'](self, 'r'), $p['getattr'](other, 'r')))?$or1:($p['bool']($or2=!$p['op_eq']($p['getattr'](self, 'g'), $p['getattr'](other, 'g')))?$or2:($p['bool']($or3=!$p['op_eq']($p['getattr'](self, 'b'), $p['getattr'](other, 'b')))?$or3:!$p['op_eq']($p['getattr'](self, 'a'), $p['getattr'](other, 'a')))));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=84;
					if ($p['bool']($p['op_eq']($p['len'](other), $constant_int_4))) {
						$pyjs['track']['lineno']=85;
						$pyjs['track']['lineno']=85;
						var $pyjs__ret = ($p['bool']($or5=!$p['op_eq']($p['getattr'](self, 'a'), other['__getitem__']($constant_int_3)))?$or5:($p['bool']($or6=!$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?$or6:($p['bool']($or7=!$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$or7:!$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2)))));
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=87;
						$pyjs['track']['lineno']=87;
						var $pyjs__ret = ($p['bool']($or9=!$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__']($constant_int_0)))?$or9:($p['bool']($or10=!$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__']($constant_int_1)))?$or10:!$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__']($constant_int_2))));
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__ne__'] = $method;
			$pyjs['track']['lineno']=9;
			var $bases = new Array($m['_Color']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Color', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.color */


/* end module: pyjsdl.color */


/*
PYJS_DEPS: ['pyjsobj.Color', 'pyjsobj']
*/
