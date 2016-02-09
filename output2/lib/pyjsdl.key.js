/* start module: pyjsdl.key */
$pyjs['loaded_modules']['pyjsdl.key'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.key']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.key'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.key'];
	$m['__repr__'] = function() { return '<module: pyjsdl.key>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.key';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['key'] = $pyjs['loaded_modules']['pyjsdl.key'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.key.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.key.py, line 4:\n    import pyjsdl.event';
		$m.__track_lines__[5] = 'pyjsdl.key.py, line 5:\n    import locals as Const';
		$m.__track_lines__[7] = "pyjsdl.key.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[10] = 'pyjsdl.key.py, line 10:\n    class Key(object):';
		$m.__track_lines__[18] = 'pyjsdl.key.py, line 18:\n    def __init__(self):';
		$m.__track_lines__[24] = 'pyjsdl.key.py, line 24:\n    self.keyPress = pyjsdl.event.keyPress';
		$m.__track_lines__[25] = 'pyjsdl.key.py, line 25:\n    self.keyMod = pyjsdl.event.keyMod';
		$m.__track_lines__[26] = 'pyjsdl.key.py, line 26:\n    self.alt = Const.K_ALT';
		$m.__track_lines__[27] = 'pyjsdl.key.py, line 27:\n    self.ctrl = Const.K_CTRL';
		$m.__track_lines__[28] = 'pyjsdl.key.py, line 28:\n    self.shift = Const.K_SHIFT';
		$m.__track_lines__[29] = 'pyjsdl.key.py, line 29:\n    self._keys = {}';
		$m.__track_lines__[30] = 'pyjsdl.key.py, line 30:\n    self._nonimplemented_methods()';
		$m.__track_lines__[32] = 'pyjsdl.key.py, line 32:\n    def name(self, keycode):';
		$m.__track_lines__[36] = 'pyjsdl.key.py, line 36:\n    if not self._keys:';
		$m.__track_lines__[37] = 'pyjsdl.key.py, line 37:\n    for keyname in dir(Const):';
		$m.__track_lines__[38] = "pyjsdl.key.py, line 38:\n    if keyname.startswith('K_'):";
		$m.__track_lines__[39] = "pyjsdl.key.py, line 39:\n    self._keys[getattr(Const, keyname)] = keyname.split('_')[-1].lower()";
		$m.__track_lines__[40] = "pyjsdl.key.py, line 40:\n    self._keys[0] = 'unknown key'";
		$m.__track_lines__[41] = 'pyjsdl.key.py, line 41:\n    if keycode not in self._keys:';
		$m.__track_lines__[42] = 'pyjsdl.key.py, line 42:\n    keycode = 0';
		$m.__track_lines__[43] = 'pyjsdl.key.py, line 43:\n    return self._keys[keycode]';
		$m.__track_lines__[45] = 'pyjsdl.key.py, line 45:\n    def get_mods(self):';
		$m.__track_lines__[49] = 'pyjsdl.key.py, line 49:\n    return self.keyMod[self.alt][self.keyPress[self.alt]] | self.keyMod[self.ctrl][self.keyPress[self.ctrl]] | self.keyMod[self.shift][self.keyPress[self.shift]]';
		$m.__track_lines__[51] = 'pyjsdl.key.py, line 51:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[55] = 'pyjsdl.key.py, line 55:\n    self.get_focused = lambda *arg: None';
		$m.__track_lines__[56] = 'pyjsdl.key.py, line 56:\n    self.get_pressed = lambda *arg: None';
		$m.__track_lines__[57] = 'pyjsdl.key.py, line 57:\n    self.set_mods = lambda *arg: None';
		$m.__track_lines__[58] = 'pyjsdl.key.py, line 58:\n    self.set_repeat = lambda *arg: None';
		$m.__track_lines__[59] = 'pyjsdl.key.py, line 59:\n    self.get_repeat = lambda *arg: True';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs['track']['module']='pyjsdl.key';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Const'] = $p['___import___']('locals', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['Key'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.key';
			$cls_definition['__md5__'] = '2c25cc30591d5c4b2a03ab6417008ef5';
			$pyjs['track']['lineno']=18;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2c25cc30591d5c4b2a03ab6417008ef5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.key', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.key';
				$pyjs['track']['lineno']=18;
				$pyjs['track']['lineno']=24;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyPress', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'keyPress')) : $p['setattr'](self, 'keyPress', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'keyPress')); 
				$pyjs['track']['lineno']=25;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyMod', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'keyMod')) : $p['setattr'](self, 'keyMod', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'keyMod')); 
				$pyjs['track']['lineno']=26;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alt', $p['getattr']($m['Const'], 'K_ALT')) : $p['setattr'](self, 'alt', $p['getattr']($m['Const'], 'K_ALT')); 
				$pyjs['track']['lineno']=27;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ctrl', $p['getattr']($m['Const'], 'K_CTRL')) : $p['setattr'](self, 'ctrl', $p['getattr']($m['Const'], 'K_CTRL')); 
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('shift', $p['getattr']($m['Const'], 'K_SHIFT')) : $p['setattr'](self, 'shift', $p['getattr']($m['Const'], 'K_SHIFT')); 
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_keys', $p['dict']([])) : $p['setattr'](self, '_keys', $p['dict']([])); 
				$pyjs['track']['lineno']=30;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=32;
			$method = $pyjs__bind_method2('$$name', function(keycode) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					keycode = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2c25cc30591d5c4b2a03ab6417008ef5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,keyname,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs['track']={'module':'pyjsdl.key', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.key';
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=36;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_keys')))) {
					$pyjs['track']['lineno']=37;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = $p['dir']($m['Const']);
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						keyname = $iter1_nextval['$nextval'];
						$pyjs['track']['lineno']=38;
						if ($p['bool'](keyname['startswith']('K_'))) {
							$pyjs['track']['lineno']=39;
							$p['getattr'](self, '_keys')['__setitem__']($p['getattr']($m['Const'], keyname), keyname['$$split']('_')['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
								-$usub1:
								$p['op_usub']($usub1)))['lower']());
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.key';
					$pyjs['track']['lineno']=40;
					$p['getattr'](self, '_keys')['__setitem__']($constant_int_0, 'unknown key');
				}
				$pyjs['track']['lineno']=41;
				if ($p['bool'](!$p['getattr'](self, '_keys')['__contains__'](keycode))) {
					$pyjs['track']['lineno']=42;
					keycode = $constant_int_0;
				}
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=43;
				var $pyjs__ret = $p['getattr'](self, '_keys')['__getitem__'](keycode);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['keycode']]);
			$cls_definition['$$name'] = $method;
			$pyjs['track']['lineno']=45;
			$method = $pyjs__bind_method2('get_mods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2c25cc30591d5c4b2a03ab6417008ef5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.key', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.key';
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=49;
				var $pyjs__ret = $p['op_bitor']([$p['getattr'](self, 'keyMod')['__getitem__']($p['getattr'](self, 'alt'))['__getitem__']($p['getattr'](self, 'keyPress')['__getitem__']($p['getattr'](self, 'alt'))), $p['getattr'](self, 'keyMod')['__getitem__']($p['getattr'](self, 'ctrl'))['__getitem__']($p['getattr'](self, 'keyPress')['__getitem__']($p['getattr'](self, 'ctrl'))), $p['getattr'](self, 'keyMod')['__getitem__']($p['getattr'](self, 'shift'))['__getitem__']($p['getattr'](self, 'keyPress')['__getitem__']($p['getattr'](self, 'shift')))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_mods'] = $method;
			$pyjs['track']['lineno']=51;
			$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2c25cc30591d5c4b2a03ab6417008ef5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda5,$lambda4,$lambda3,$lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.key', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.key';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=55;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.key','lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.key';
					$pyjs['track']['lineno']=55;
					$pyjs['track']['lineno']=55;
					$pyjs['track']['lineno']=55;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_focused', $lambda1) : $p['setattr'](self, 'get_focused', $lambda1); 
				$pyjs['track']['lineno']=56;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.key','lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.key';
					$pyjs['track']['lineno']=56;
					$pyjs['track']['lineno']=56;
					$pyjs['track']['lineno']=56;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_pressed', $lambda2) : $p['setattr'](self, 'get_pressed', $lambda2); 
				$pyjs['track']['lineno']=57;
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.key','lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.key';
					$pyjs['track']['lineno']=57;
					$pyjs['track']['lineno']=57;
					$pyjs['track']['lineno']=57;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_mods', $lambda3) : $p['setattr'](self, 'set_mods', $lambda3); 
				$pyjs['track']['lineno']=58;
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.key','lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.key';
					$pyjs['track']['lineno']=58;
					$pyjs['track']['lineno']=58;
					$pyjs['track']['lineno']=58;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_repeat', $lambda4) : $p['setattr'](self, 'set_repeat', $lambda4); 
				$pyjs['track']['lineno']=59;
				var 				$lambda5 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.key','lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.key';
					$pyjs['track']['lineno']=59;
					$pyjs['track']['lineno']=59;
					$pyjs['track']['lineno']=59;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_repeat', $lambda5) : $p['setattr'](self, 'get_repeat', $lambda5); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=10;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Key', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.key */


/* end module: pyjsdl.key */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'locals']
*/
