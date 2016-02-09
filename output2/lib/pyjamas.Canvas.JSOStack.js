/* start module: pyjamas.Canvas.JSOStack */
$pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.JSOStack']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.JSOStack>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.JSOStack';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['JSOStack'] = $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.JSOStack.py, line 1:\n    """';
		$m.__track_lines__[20] = 'pyjamas.Canvas.JSOStack.py, line 20:\n    class JSOStack:';
		$m.__track_lines__[22] = 'pyjamas.Canvas.JSOStack.py, line 22:\n    def __init__(self):';
		$m.__track_lines__[23] = 'pyjamas.Canvas.JSOStack.py, line 23:\n    self.clear()';
		$m.__track_lines__[25] = 'pyjamas.Canvas.JSOStack.py, line 25:\n    def clear(self):';
		$m.__track_lines__[26] = 'pyjamas.Canvas.JSOStack.py, line 26:\n    self.scratch = []';
		$m.__track_lines__[27] = 'pyjamas.Canvas.JSOStack.py, line 27:\n    self._minX = None';
		$m.__track_lines__[28] = 'pyjamas.Canvas.JSOStack.py, line 28:\n    self._minY = None';
		$m.__track_lines__[29] = 'pyjamas.Canvas.JSOStack.py, line 29:\n    self._maxX = None';
		$m.__track_lines__[30] = 'pyjamas.Canvas.JSOStack.py, line 30:\n    self._maxY = None';
		$m.__track_lines__[32] = 'pyjamas.Canvas.JSOStack.py, line 32:\n    def getMaxCoordX(self):';
		$m.__track_lines__[33] = 'pyjamas.Canvas.JSOStack.py, line 33:\n    return self._maxX';
		$m.__track_lines__[35] = 'pyjamas.Canvas.JSOStack.py, line 35:\n    def getMaxCoordY(self):';
		$m.__track_lines__[36] = 'pyjamas.Canvas.JSOStack.py, line 36:\n    return self._maxY';
		$m.__track_lines__[38] = 'pyjamas.Canvas.JSOStack.py, line 38:\n    def getMinCoordX(self):';
		$m.__track_lines__[39] = 'pyjamas.Canvas.JSOStack.py, line 39:\n    return self._minX';
		$m.__track_lines__[41] = 'pyjamas.Canvas.JSOStack.py, line 41:\n    def getMinCoordY(self):';
		$m.__track_lines__[42] = 'pyjamas.Canvas.JSOStack.py, line 42:\n    return self._minY';
		$m.__track_lines__[44] = 'pyjamas.Canvas.JSOStack.py, line 44:\n    def join(self):';
		$m.__track_lines__[45] = 'pyjamas.Canvas.JSOStack.py, line 45:\n    return "".join(self.scratch)';
		$m.__track_lines__[47] = 'pyjamas.Canvas.JSOStack.py, line 47:\n    def logCoordX(self, coordX):';
		$m.__track_lines__[48] = 'pyjamas.Canvas.JSOStack.py, line 48:\n    if self._minX is None :';
		$m.__track_lines__[49] = 'pyjamas.Canvas.JSOStack.py, line 49:\n    self._minX = coordX';
		$m.__track_lines__[50] = 'pyjamas.Canvas.JSOStack.py, line 50:\n    self._maxX = coordX';
		$m.__track_lines__[52] = 'pyjamas.Canvas.JSOStack.py, line 52:\n    if (self._minX > coordX):';
		$m.__track_lines__[53] = 'pyjamas.Canvas.JSOStack.py, line 53:\n    self._minX = coordX';
		$m.__track_lines__[55] = 'pyjamas.Canvas.JSOStack.py, line 55:\n    if (self._maxX < coordX):';
		$m.__track_lines__[56] = 'pyjamas.Canvas.JSOStack.py, line 56:\n    self._maxX = coordX';
		$m.__track_lines__[58] = 'pyjamas.Canvas.JSOStack.py, line 58:\n    def logCoordY(self,coordY):';
		$m.__track_lines__[59] = 'pyjamas.Canvas.JSOStack.py, line 59:\n    if self._minY is None :';
		$m.__track_lines__[60] = 'pyjamas.Canvas.JSOStack.py, line 60:\n    self._minY = coordY';
		$m.__track_lines__[61] = 'pyjamas.Canvas.JSOStack.py, line 61:\n    self._maxY = coordY';
		$m.__track_lines__[63] = 'pyjamas.Canvas.JSOStack.py, line 63:\n    if (self._minY > coordY):';
		$m.__track_lines__[64] = 'pyjamas.Canvas.JSOStack.py, line 64:\n    self._minY = coordY';
		$m.__track_lines__[66] = 'pyjamas.Canvas.JSOStack.py, line 66:\n    if (self._maxY < coordY):';
		$m.__track_lines__[67] = 'pyjamas.Canvas.JSOStack.py, line 67:\n    self._maxY = coordY';
		$m.__track_lines__[69] = 'pyjamas.Canvas.JSOStack.py, line 69:\n    def pop(self):';
		$m.__track_lines__[70] = 'pyjamas.Canvas.JSOStack.py, line 70:\n    return self.scratch.pop()';
		$m.__track_lines__[72] = 'pyjamas.Canvas.JSOStack.py, line 72:\n    def append(self, pathStr):';
		$m.__track_lines__[73] = 'pyjamas.Canvas.JSOStack.py, line 73:\n    self.scratch.append(pathStr)';
		$m.__track_lines__[75] = 'pyjamas.Canvas.JSOStack.py, line 75:\n    def __len__(self):';
		$m.__track_lines__[76] = 'pyjamas.Canvas.JSOStack.py, line 76:\n    return len(self.scratch)';


		$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=20;
		$m['JSOStack'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.JSOStack';
			$cls_definition['__md5__'] = 'e45fb86f46ebcb6dd490abc353ecf41a';
			$pyjs['track']['lineno']=22;
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
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=22;
				$pyjs['track']['lineno']=23;
				self['clear']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=25;
			$method = $pyjs__bind_method2('clear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=26;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('scratch', $p['list']([])) : $p['setattr'](self, 'scratch', $p['list']([])); 
				$pyjs['track']['lineno']=27;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minX', null) : $p['setattr'](self, '_minX', null); 
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minY', null) : $p['setattr'](self, '_minY', null); 
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maxX', null) : $p['setattr'](self, '_maxX', null); 
				$pyjs['track']['lineno']=30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maxY', null) : $p['setattr'](self, '_maxY', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=32;
			$method = $pyjs__bind_method2('getMaxCoordX', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=33;
				var $pyjs__ret = $p['getattr'](self, '_maxX');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMaxCoordX'] = $method;
			$pyjs['track']['lineno']=35;
			$method = $pyjs__bind_method2('getMaxCoordY', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=36;
				$pyjs['track']['lineno']=36;
				var $pyjs__ret = $p['getattr'](self, '_maxY');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMaxCoordY'] = $method;
			$pyjs['track']['lineno']=38;
			$method = $pyjs__bind_method2('getMinCoordX', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=39;
				var $pyjs__ret = $p['getattr'](self, '_minX');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMinCoordX'] = $method;
			$pyjs['track']['lineno']=41;
			$method = $pyjs__bind_method2('getMinCoordY', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				var $pyjs__ret = $p['getattr'](self, '_minY');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMinCoordY'] = $method;
			$pyjs['track']['lineno']=44;
			$method = $pyjs__bind_method2('join', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=45;
				var $pyjs__ret = ''['join']($p['getattr'](self, 'scratch'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['join'] = $method;
			$pyjs['track']['lineno']=47;
			$method = $pyjs__bind_method2('logCoordX', function(coordX) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					coordX = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=48;
				if ($p['bool']($p['op_is']($p['getattr'](self, '_minX'), null))) {
					$pyjs['track']['lineno']=49;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minX', coordX) : $p['setattr'](self, '_minX', coordX); 
					$pyjs['track']['lineno']=50;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maxX', coordX) : $p['setattr'](self, '_maxX', coordX); 
				}
				else {
					$pyjs['track']['lineno']=52;
					if ($p['bool'](($p['cmp']($p['getattr'](self, '_minX'), coordX) == 1))) {
						$pyjs['track']['lineno']=53;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minX', coordX) : $p['setattr'](self, '_minX', coordX); 
					}
					else {
						$pyjs['track']['lineno']=55;
						if ($p['bool'](($p['cmp']($p['getattr'](self, '_maxX'), coordX) == -1))) {
							$pyjs['track']['lineno']=56;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maxX', coordX) : $p['setattr'](self, '_maxX', coordX); 
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['coordX']]);
			$cls_definition['logCoordX'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('logCoordY', function(coordY) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					coordY = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=59;
				if ($p['bool']($p['op_is']($p['getattr'](self, '_minY'), null))) {
					$pyjs['track']['lineno']=60;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minY', coordY) : $p['setattr'](self, '_minY', coordY); 
					$pyjs['track']['lineno']=61;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maxY', coordY) : $p['setattr'](self, '_maxY', coordY); 
				}
				else {
					$pyjs['track']['lineno']=63;
					if ($p['bool'](($p['cmp']($p['getattr'](self, '_minY'), coordY) == 1))) {
						$pyjs['track']['lineno']=64;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_minY', coordY) : $p['setattr'](self, '_minY', coordY); 
					}
					else {
						$pyjs['track']['lineno']=66;
						if ($p['bool'](($p['cmp']($p['getattr'](self, '_maxY'), coordY) == -1))) {
							$pyjs['track']['lineno']=67;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_maxY', coordY) : $p['setattr'](self, '_maxY', coordY); 
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['coordY']]);
			$cls_definition['logCoordY'] = $method;
			$pyjs['track']['lineno']=69;
			$method = $pyjs__bind_method2('pop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=70;
				$pyjs['track']['lineno']=70;
				var $pyjs__ret = self['scratch']['pop']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pop'] = $method;
			$pyjs['track']['lineno']=72;
			$method = $pyjs__bind_method2('append', function(pathStr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pathStr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=73;
				self['scratch']['append'](pathStr);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['pathStr']]);
			$cls_definition['append'] = $method;
			$pyjs['track']['lineno']=75;
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
					if (self.prototype['__md5__'] !== 'e45fb86f46ebcb6dd490abc353ecf41a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.JSOStack', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.JSOStack';
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=76;
				var $pyjs__ret = $p['len']($p['getattr'](self, 'scratch'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=20;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('JSOStack', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.JSOStack */


/* end module: pyjamas.Canvas.JSOStack */


