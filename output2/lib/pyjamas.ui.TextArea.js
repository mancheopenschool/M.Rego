/* start module: pyjamas.ui.TextArea */
$pyjs['loaded_modules']['pyjamas.ui.TextArea'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TextArea']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TextArea'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TextArea'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TextArea>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextArea';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['TextArea'] = $pyjs['loaded_modules']['pyjamas.ui.TextArea'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.TextArea.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.TextArea.py, line 15:\n    from __pyjamas__ import JS';
		$m.__track_lines__[16] = 'pyjamas.ui.TextArea.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.TextArea.py, line 17:\n    from pyjamas import DOM';
		$m.__track_lines__[19] = 'pyjamas.ui.TextArea.py, line 19:\n    from pyjamas.ui.TextBoxBase import TextBoxBase';
		$m.__track_lines__[21] = 'pyjamas.ui.TextArea.py, line 21:\n    class TextArea(TextBoxBase):';
		$m.__track_lines__[28] = 'pyjamas.ui.TextArea.py, line 28:\n    _props = [("rows", "Rows", "VisibleLines", None),';
		$m.__track_lines__[32] = 'pyjamas.ui.TextArea.py, line 32:\n    def __init__(self, **ka):';
		$m.__track_lines__[33] = 'pyjamas.ui.TextArea.py, line 33:\n    ka[\'StyleName\'] = ka.get(\'StyleName\', "gwt-TextArea")';
		$m.__track_lines__[34] = "pyjamas.ui.TextArea.py, line 34:\n    element = ka.pop('Element', None) or DOM.createTextArea()";
		$m.__track_lines__[35] = 'pyjamas.ui.TextArea.py, line 35:\n    TextBoxBase.__init__(self, element, **ka)';
		$m.__track_lines__[38] = 'pyjamas.ui.TextArea.py, line 37:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[39] = 'pyjamas.ui.TextArea.py, line 39:\n    return TextBoxBase._getProps() + self._props';
		$m.__track_lines__[41] = 'pyjamas.ui.TextArea.py, line 41:\n    def getCharacterWidth(self):';
		$m.__track_lines__[42] = 'pyjamas.ui.TextArea.py, line 42:\n    return DOM.getIntAttribute(self.getElement(), "cols")';
		$m.__track_lines__[44] = 'pyjamas.ui.TextArea.py, line 44:\n    def getCursorPos(self):';
		$m.__track_lines__[45] = 'pyjamas.ui.TextArea.py, line 45:\n    return TextBoxBase.getCursorPos(self)';
		$m.__track_lines__[47] = 'pyjamas.ui.TextArea.py, line 47:\n    def getVisibleLines(self):';
		$m.__track_lines__[48] = 'pyjamas.ui.TextArea.py, line 48:\n    return DOM.getIntAttribute(self.getElement(), "rows")';
		$m.__track_lines__[50] = 'pyjamas.ui.TextArea.py, line 50:\n    def setCharacterWidth(self, width):';
		$m.__track_lines__[51] = 'pyjamas.ui.TextArea.py, line 51:\n    DOM.setIntAttribute(self.getElement(), "cols", width)';
		$m.__track_lines__[53] = 'pyjamas.ui.TextArea.py, line 53:\n    def setVisibleLines(self, lines):';
		$m.__track_lines__[54] = 'pyjamas.ui.TextArea.py, line 54:\n    DOM.setIntAttribute(self.getElement(), "rows", lines)';
		$m.__track_lines__[56] = "pyjamas.ui.TextArea.py, line 56:\n    Factory.registerClass('pyjamas.ui.TextArea', 'TextArea', TextArea)";


		$pyjs['track']['module']='pyjamas.ui.TextArea';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextBoxBase'] = $p['___import___']('pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$m['TextArea'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.TextArea';
			$cls_definition['__md5__'] = 'e3991c5333d2e445ec84de580803c7e6';
			$pyjs['track']['lineno']=28;
			$cls_definition['_props'] = $p['list']([$p['tuple'](['rows', 'Rows', 'VisibleLines', null]), $p['tuple'](['cols', 'Columns', 'CharacterWidth', null])]);
			$pyjs['track']['lineno']=32;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var ka = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
						var ka = arguments[arguments['length']+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var ka = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
						ka = arguments[arguments['length']+1];
					} else {
						delete ka['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e3991c5333d2e445ec84de580803c7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ka == 'undefined') {
					ka = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							ka = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var element,$or1,$or2;
				$pyjs['track']={'module':'pyjamas.ui.TextArea', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextArea';
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=33;
				ka['__setitem__']('StyleName', ka['get']('StyleName', 'gwt-TextArea'));
				$pyjs['track']['lineno']=34;
				element = ($p['bool']($or1=ka['pop']('Element', null))?$or1:$m['DOM']['createTextArea']());
				$pyjs['track']['lineno']=35;
				$pyjs_kwargs_call($m['TextBoxBase'], '__init__', null, ka, [{}, self, element]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['ka'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=38;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				$pyjs['track']={'module':'pyjamas.ui.TextArea', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextArea';
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=39;
				var $pyjs__ret = $p['__op_add']($add1=$m['TextBoxBase']['_getProps'](),$add2=$p['getattr'](self, '_props'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs['track']['lineno']=41;
			$method = $pyjs__bind_method2('getCharacterWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e3991c5333d2e445ec84de580803c7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextArea', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextArea';
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				var $pyjs__ret = $m['DOM']['getIntAttribute'](self['getElement'](), 'cols');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCharacterWidth'] = $method;
			$pyjs['track']['lineno']=44;
			$method = $pyjs__bind_method2('getCursorPos', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e3991c5333d2e445ec84de580803c7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextArea', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextArea';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=45;
				var $pyjs__ret = $m['TextBoxBase']['getCursorPos'](self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCursorPos'] = $method;
			$pyjs['track']['lineno']=47;
			$method = $pyjs__bind_method2('getVisibleLines', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e3991c5333d2e445ec84de580803c7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextArea', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextArea';
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				var $pyjs__ret = $m['DOM']['getIntAttribute'](self['getElement'](), 'rows');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVisibleLines'] = $method;
			$pyjs['track']['lineno']=50;
			$method = $pyjs__bind_method2('setCharacterWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e3991c5333d2e445ec84de580803c7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextArea', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextArea';
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=51;
				$m['DOM']['setIntAttribute'](self['getElement'](), 'cols', width);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setCharacterWidth'] = $method;
			$pyjs['track']['lineno']=53;
			$method = $pyjs__bind_method2('setVisibleLines', function(lines) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lines = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e3991c5333d2e445ec84de580803c7e6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextArea', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextArea';
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=54;
				$m['DOM']['setIntAttribute'](self['getElement'](), 'rows', lines);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lines']]);
			$cls_definition['setVisibleLines'] = $method;
			$pyjs['track']['lineno']=21;
			var $bases = new Array($m['TextBoxBase']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextArea', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=56;
		$m['Factory']['registerClass']('pyjamas.ui.TextArea', 'TextArea', $m['TextArea']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.TextArea */


/* end module: pyjamas.ui.TextArea */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', 'pyjamas.ui.TextBoxBase']
*/
