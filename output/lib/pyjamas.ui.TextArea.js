/* start module: pyjamas.ui.TextArea */
$pyjs['loaded_modules']['pyjamas.ui.TextArea'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TextArea']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TextArea'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TextArea'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TextArea>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextArea';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['TextArea'] = $pyjs['loaded_modules']['pyjamas.ui.TextArea'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['TextBoxBase'] = $p['___import___']('pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', null, false);
	$m['TextArea'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.TextArea';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['rows', 'Rows', 'VisibleLines', null]), $p['tuple'](['cols', 'Columns', 'CharacterWidth', null])]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var ka = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					var ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var ka = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
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
			ka['__setitem__']('StyleName', ka['get']('StyleName', 'gwt-TextArea'));
			element = ($p['bool']($or1=ka['pop']('Element', null))?$or1:$m['DOM']['createTextArea']());
			$pyjs_kwargs_call($m['TextBoxBase'], '__init__', null, ka, [{}, self, element]);
			return null;
		}
	, 1, [null,['ka'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['TextBoxBase']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('getCharacterWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'cols');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCharacterWidth'] = $method;
		$method = $pyjs__bind_method2('getCursorPos', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['TextBoxBase']['getCursorPos'](self);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCursorPos'] = $method;
		$method = $pyjs__bind_method2('getVisibleLines', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'rows');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVisibleLines'] = $method;
		$method = $pyjs__bind_method2('setCharacterWidth', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'cols', width);
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setCharacterWidth'] = $method;
		$method = $pyjs__bind_method2('setVisibleLines', function(lines) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lines = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'rows', lines);
			return null;
		}
	, 1, [null,null,['self'],['lines']]);
		$cls_definition['setVisibleLines'] = $method;
		var $bases = new Array($m['TextBoxBase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextArea', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.TextArea', 'TextArea', $m['TextArea']);
	return this;
}; /* end pyjamas.ui.TextArea */


/* end module: pyjamas.ui.TextArea */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.TextBoxBase.TextBoxBase', 'pyjamas.ui', 'pyjamas.ui.TextBoxBase']
*/
