/* start module: pyjamas.ui.TextBoxBase */
$pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TextBoxBase']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TextBoxBase>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBoxBase';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['TextBoxBase'] = $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	$m['ChangeHandler'] = $p['___import___']('pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui', null, false);
	$m['InputHandler'] = $p['___import___']('pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['TextBoxBase'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.TextBoxBase';
		$cls_definition['ALIGN_CENTER'] = 'center';
		$cls_definition['ALIGN_JUSTIFY'] = 'justify';
		$cls_definition['ALIGN_LEFT'] = 'left';
		$cls_definition['ALIGN_RIGHT'] = 'right';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['name', 'Name', 'Name', null]), $p['tuple'](['align', 'Text Alignment', 'TextAlign', null])]);
		$method = $pyjs__bind_method2('__init__', function(element) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				element = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self['currentEvent'] = null;
			$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			$m['ChangeHandler']['__init__'](self);
			$m['InputHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['FocusWidget']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('cancelKey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'currentEvent') !== null))) {
				$m['DOM']['eventPreventDefault']($p['getattr'](self, 'currentEvent'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cancelKey'] = $method;
		$method = $pyjs__bind_method2('getCursorPos', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,element;
			element = self['getElement']();
			try {
				return $p['getattr'](element, 'selectionStart');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCursorPos'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'name');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('getSelectedText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,text,start,length,$add4;
			start = self['getCursorPos']();
			length = self['getSelectionLength']();
			text = self['getText']();
			return $p['__getslice'](text, start, $p['__op_add']($add3=start,$add4=length));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedText'] = $method;
		$method = $pyjs__bind_method2('getSelectionLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub2,$pyjs_try_err,$sub1,element;
			element = self['getElement']();
			try {
				return $p['__op_sub']($sub1=$p['getattr'](element, 'selectionEnd'),$sub2=$p['getattr'](element, 'selectionStart'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					return 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectionLength'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}

			if ($p['bool'](focused)) {
				self['getElement']()['focus']();
			}
			else {
				self['getElement']()['blur']();
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'value');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('selectAll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var length;
			length = $p['len'](self['getText']());
			if ($p['bool'](($p['cmp'](length, 0) == 1))) {
				self['setSelectionRange'](0, length);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['selectAll'] = $method;
		$method = $pyjs__bind_method2('setCursorPos', function(pos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}

			self['setSelectionRange'](pos, 0);
			return null;
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['setCursorPos'] = $method;
		$method = $pyjs__bind_method2('setKey', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, 'currentEvent') !== null))) {
				$m['DOM']['eventSetKeyCode']($p['getattr'](self, 'currentEvent'), key);
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setKey'] = $method;
		$method = $pyjs__bind_method2('setName', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'name', name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method2('setSelectionRange', function(pos, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				length = arguments[2];
			}
			var $add16,$or1,$or2,$add13,element,$add14,$add15,$add6,$add7,$add12,$add5,$add10,$add8,$add9,$add11;
			if ($p['bool'](($p['cmp'](length, 0) == -1))) {
				console['error']($p['__op_add']($add5='Length must be a positive integer. Length: ',$add6=length));
			}
			if ($p['bool'](($p['bool']($or1=($p['cmp'](pos, 0) == -1))?$or1:($p['cmp']($p['__op_add']($add7=length,$add8=pos), $p['len'](self['getText']())) == 1)))) {
				console['error']($p['__op_add']($add13=$p['__op_add']($add11=$p['sprintf']('From Index: %d ', pos),$add12=$p['sprintf']('  To Index: %d ', $p['__op_add']($add9=pos,$add10=length))),$add14=$p['sprintf']('  Text Length: %d ', $p['len'](self['getText']()))));
			}
			element = self['getElement']();
			element['setSelectionRange'](pos, $p['__op_add']($add15=pos,$add16=length));
			return null;
		}
	, 1, [null,null,['self'],['pos'],['length']]);
		$cls_definition['setSelectionRange'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'value', text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('setTextAlignment', function(align) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			$m['DOM']['setStyleAttribute'](self['getElement'](), 'textAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setTextAlignment'] = $method;
		$method = $pyjs__bind_method2('getTextAlignment', function(align) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			return $m['DOM']['getStyleAttribute'](self['getElement'](), 'textAlign');
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['getTextAlignment'] = $method;
		var $bases = new Array($m['FocusWidget'],$m['ChangeHandler'],$m['InputHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextBoxBase', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.TextBoxBase */


/* end module: pyjamas.ui.TextBoxBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui.ChangeListener', 'pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui.InputListener', 'pyjamas.ui.Event']
*/
