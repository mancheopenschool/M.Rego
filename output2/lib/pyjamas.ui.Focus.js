/* start module: pyjamas.ui.Focus */
$pyjs['loaded_modules']['pyjamas.ui.Focus'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Focus']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Focus'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Focus'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Focus>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Focus';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['Focus'] = $pyjs['loaded_modules']['pyjamas.ui.Focus'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.Focus.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.Focus.py, line 15:\n    import pyjd';
		$m.__track_lines__[16] = 'pyjamas.ui.Focus.py, line 16:\n    from pyjamas import DOM';
		$m.__track_lines__[17] = 'pyjamas.ui.Focus.py, line 17:\n    from __pyjamas__ import JS';
		$m.__track_lines__[19] = 'pyjamas.ui.Focus.py, line 19:\n    if not pyjd.is_desktop:';
		$m.__track_lines__[20] = 'pyjamas.ui.Focus.py, line 20:\n    JS("""';
		$m.__track_lines__[24] = 'pyjamas.ui.Focus.py, line 24:\n    def ensureFocusHandler():';
		$m.__track_lines__[25] = 'pyjamas.ui.Focus.py, line 25:\n    pass';
		$m.__track_lines__[27] = 'pyjamas.ui.Focus.py, line 27:\n    def createFocusHandler():';
		$m.__track_lines__[28] = 'pyjamas.ui.Focus.py, line 28:\n    pass';
		$m.__track_lines__[30] = 'pyjamas.ui.Focus.py, line 30:\n    def createFocusable0():';
		$m.__track_lines__[31] = 'pyjamas.ui.Focus.py, line 31:\n    pass';
		$m.__track_lines__[33] = 'pyjamas.ui.Focus.py, line 33:\n    def blur(elem):';
		$m.__track_lines__[34] = 'pyjamas.ui.Focus.py, line 34:\n    elem.blur()';
		$m.__track_lines__[36] = 'pyjamas.ui.Focus.py, line 36:\n    def createFocusable():';
		$m.__track_lines__[37] = 'pyjamas.ui.Focus.py, line 37:\n    e = DOM.createDiv()';
		$m.__track_lines__[38] = 'pyjamas.ui.Focus.py, line 38:\n    e.tabIndex = 0';
		$m.__track_lines__[39] = 'pyjamas.ui.Focus.py, line 39:\n    return e';
		$m.__track_lines__[41] = 'pyjamas.ui.Focus.py, line 41:\n    def focus(elem):';
		$m.__track_lines__[42] = 'pyjamas.ui.Focus.py, line 42:\n    elem.focus()';
		$m.__track_lines__[44] = 'pyjamas.ui.Focus.py, line 44:\n    def getTabIndex(elem):';
		$m.__track_lines__[45] = 'pyjamas.ui.Focus.py, line 45:\n    return elem.tabIndex';
		$m.__track_lines__[47] = 'pyjamas.ui.Focus.py, line 47:\n    def setAccessKey(elem, key):';
		$m.__track_lines__[48] = 'pyjamas.ui.Focus.py, line 48:\n    elem.accessKey = key';
		$m.__track_lines__[50] = 'pyjamas.ui.Focus.py, line 50:\n    def setTabIndex(elem, index):';
		$m.__track_lines__[51] = 'pyjamas.ui.Focus.py, line 51:\n    elem.tabIndex = index';
		$m.__track_lines__[54] = 'pyjamas.ui.Focus.py, line 54:\n    class FocusMixin:';
		$m.__track_lines__[56] = 'pyjamas.ui.Focus.py, line 56:\n    def getTabIndex(self):';
		$m.__track_lines__[57] = 'pyjamas.ui.Focus.py, line 57:\n    return getTabIndex(self.getElement())';
		$m.__track_lines__[59] = 'pyjamas.ui.Focus.py, line 59:\n    def setAccessKey(self, key):';
		$m.__track_lines__[60] = 'pyjamas.ui.Focus.py, line 60:\n    setAccessKey(self.getElement(), key)';
		$m.__track_lines__[62] = 'pyjamas.ui.Focus.py, line 62:\n    def setFocus(self, focused):';
		$m.__track_lines__[63] = 'pyjamas.ui.Focus.py, line 63:\n    if (focused):';
		$m.__track_lines__[64] = 'pyjamas.ui.Focus.py, line 64:\n    focus(self.getElement())';
		$m.__track_lines__[66] = 'pyjamas.ui.Focus.py, line 66:\n    blur(self.getElement())';
		$m.__track_lines__[68] = 'pyjamas.ui.Focus.py, line 68:\n    def setTabIndex(self, index):';
		$m.__track_lines__[69] = 'pyjamas.ui.Focus.py, line 69:\n    setTabIndex(self.getElement(), index)';
		$m.__track_lines__[71] = 'pyjamas.ui.Focus.py, line 71:\n    def isEnabled(self):';
		$m.__track_lines__[72] = 'pyjamas.ui.Focus.py, line 72:\n    try:';
		$m.__track_lines__[73] = 'pyjamas.ui.Focus.py, line 73:\n    return not DOM.getBooleanAttribute(self.getElement(), "disabled")';
		$m.__track_lines__[75] = 'pyjamas.ui.Focus.py, line 75:\n    return True';
		$m.__track_lines__[77] = 'pyjamas.ui.Focus.py, line 77:\n    return True';
		$m.__track_lines__[79] = 'pyjamas.ui.Focus.py, line 79:\n    def setEnabled(self, enabled):';
		$m.__track_lines__[80] = 'pyjamas.ui.Focus.py, line 80:\n    DOM.setBooleanAttribute(self.getElement(), "disabled", not enabled)';
		$m.__track_lines__[82] = 'pyjamas.ui.Focus.py, line 82:\n    def isReadonly(self):';
		$m.__track_lines__[83] = 'pyjamas.ui.Focus.py, line 83:\n    try:';
		$m.__track_lines__[84] = 'pyjamas.ui.Focus.py, line 84:\n    return not DOM.getBooleanAttribute(self.getElement(), "readOnly")';
		$m.__track_lines__[86] = 'pyjamas.ui.Focus.py, line 86:\n    return True';
		$m.__track_lines__[88] = 'pyjamas.ui.Focus.py, line 88:\n    return True';
		$m.__track_lines__[90] = 'pyjamas.ui.Focus.py, line 90:\n    def setReadonly(self, readonly):';
		$m.__track_lines__[91] = 'pyjamas.ui.Focus.py, line 91:\n    DOM.setBooleanAttribute(self.getElement(), "readOnly", readonly)';

		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjamas.ui.Focus';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']['lineno']=19;
		if ($p['bool'](!$p['bool']($p['getattr']($m['pyjd'], 'is_desktop')))) {
			$pyjs['track']['lineno']=20;

    var focusHandler = null;
    
		}
		$pyjs['track']['lineno']=24;
		$m['ensureFocusHandler'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=25;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['ensureFocusHandler']['__name__'] = 'ensureFocusHandler';

		$m['ensureFocusHandler']['__bind_type__'] = 0;
		$m['ensureFocusHandler']['__args__'] = [null,null];
		$pyjs['track']['lineno']=27;
		$m['createFocusHandler'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['createFocusHandler']['__name__'] = 'createFocusHandler';

		$m['createFocusHandler']['__bind_type__'] = 0;
		$m['createFocusHandler']['__args__'] = [null,null];
		$pyjs['track']['lineno']=30;
		$m['createFocusable0'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=31;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['createFocusable0']['__name__'] = 'createFocusable0';

		$m['createFocusable0']['__bind_type__'] = 0;
		$m['createFocusable0']['__args__'] = [null,null];
		$pyjs['track']['lineno']=33;
		$m['blur'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=34;
			elem['blur']();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['blur']['__name__'] = 'blur';

		$m['blur']['__bind_type__'] = 0;
		$m['blur']['__args__'] = [null,null,['elem']];
		$pyjs['track']['lineno']=36;
		$m['createFocusable'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var e;
			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;
			e = $m['DOM']['createDiv']();
			$pyjs['track']['lineno']=38;
			e['__is_instance__'] && typeof e['__setattr__'] == 'function' ? e['__setattr__']('tabIndex', $constant_int_0) : $p['setattr'](e, 'tabIndex', $constant_int_0); 
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=39;
			var $pyjs__ret = e;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['createFocusable']['__name__'] = 'createFocusable';

		$m['createFocusable']['__bind_type__'] = 0;
		$m['createFocusable']['__args__'] = [null,null];
		$pyjs['track']['lineno']=41;
		$m['focus'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			elem['focus']();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['focus']['__name__'] = 'focus';

		$m['focus']['__bind_type__'] = 0;
		$m['focus']['__args__'] = [null,null,['elem']];
		$pyjs['track']['lineno']=44;
		$m['getTabIndex'] = function(elem) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=45;
			var $pyjs__ret = $p['getattr'](elem, 'tabIndex');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['getTabIndex']['__name__'] = 'getTabIndex';

		$m['getTabIndex']['__bind_type__'] = 0;
		$m['getTabIndex']['__args__'] = [null,null,['elem']];
		$pyjs['track']['lineno']=47;
		$m['setAccessKey'] = function(elem, key) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=48;
			elem['__is_instance__'] && typeof elem['__setattr__'] == 'function' ? elem['__setattr__']('accessKey', key) : $p['setattr'](elem, 'accessKey', key); 
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['setAccessKey']['__name__'] = 'setAccessKey';

		$m['setAccessKey']['__bind_type__'] = 0;
		$m['setAccessKey']['__args__'] = [null,null,['elem'],['key']];
		$pyjs['track']['lineno']=50;
		$m['setTabIndex'] = function(elem, index) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui.Focus','lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.Focus';
			$pyjs['track']['lineno']=50;
			$pyjs['track']['lineno']=51;
			elem['__is_instance__'] && typeof elem['__setattr__'] == 'function' ? elem['__setattr__']('tabIndex', index) : $p['setattr'](elem, 'tabIndex', index); 
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['setTabIndex']['__name__'] = 'setTabIndex';

		$m['setTabIndex']['__bind_type__'] = 0;
		$m['setTabIndex']['__args__'] = [null,null,['elem'],['index']];
		$pyjs['track']['lineno']=54;
		$m['FocusMixin'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.Focus';
			$cls_definition['__md5__'] = 'de5db40a2abc1ffd956123e8cd8e33e2';
			$pyjs['track']['lineno']=56;
			$method = $pyjs__bind_method2('getTabIndex', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=57;
				var $pyjs__ret = $m['getTabIndex'](self['getElement']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTabIndex'] = $method;
			$pyjs['track']['lineno']=59;
			$method = $pyjs__bind_method2('setAccessKey', function(key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=60;
				$m['setAccessKey'](self['getElement'](), key);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['setAccessKey'] = $method;
			$pyjs['track']['lineno']=62;
			$method = $pyjs__bind_method2('setFocus', function(focused) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					focused = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=63;
				if ($p['bool'](focused)) {
					$pyjs['track']['lineno']=64;
					$m['focus'](self['getElement']());
				}
				else {
					$pyjs['track']['lineno']=66;
					$m['blur'](self['getElement']());
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['focused']]);
			$cls_definition['setFocus'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('setTabIndex', function(index) {
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
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=69;
				$m['setTabIndex'](self['getElement'](), index);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['setTabIndex'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('isEnabled', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=73;
					$pyjs['track']['lineno']=73;
					var $pyjs__ret = !$p['bool']($m['DOM']['getBooleanAttribute'](self['getElement'](), 'disabled'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.Focus';
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs['track']['lineno']=75;
						$pyjs['track']['lineno']=75;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$pyjs['track']['lineno']=77;
						$pyjs['track']['lineno']=77;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isEnabled'] = $method;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('setEnabled', function(enabled) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					enabled = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=80;
				$m['DOM']['setBooleanAttribute'](self['getElement'](), 'disabled', !$p['bool'](enabled));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['enabled']]);
			$cls_definition['setEnabled'] = $method;
			$pyjs['track']['lineno']=82;
			$method = $pyjs__bind_method2('isReadonly', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=83;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=84;
					$pyjs['track']['lineno']=84;
					var $pyjs__ret = !$p['bool']($m['DOM']['getBooleanAttribute'](self['getElement'](), 'readOnly'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.Focus';
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs['track']['lineno']=86;
						$pyjs['track']['lineno']=86;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$pyjs['track']['lineno']=88;
						$pyjs['track']['lineno']=88;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isReadonly'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('setReadonly', function(readonly) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					readonly = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de5db40a2abc1ffd956123e8cd8e33e2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.Focus', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.Focus';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=91;
				$m['DOM']['setBooleanAttribute'](self['getElement'](), 'readOnly', readonly);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['readonly']]);
			$cls_definition['setReadonly'] = $method;
			$pyjs['track']['lineno']=54;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FocusMixin', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.Focus */


/* end module: pyjamas.ui.Focus */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas']
*/
