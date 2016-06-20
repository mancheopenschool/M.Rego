/* start module: pyjamas.ui.SimplePanel */
$pyjs['loaded_modules']['pyjamas.ui.SimplePanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.SimplePanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.SimplePanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.SimplePanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.SimplePanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.SimplePanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['SimplePanel'] = $pyjs['loaded_modules']['pyjamas.ui.SimplePanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Panel'] = $p['___import___']('pyjamas.ui.Panel.Panel', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.SimplePanel';
		$method = $pyjs__bind_method2('__init__', function(Element) {
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
				Element = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Element != 'undefined') {
					if (Element !== null && typeof Element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Element;
						Element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof Element == 'undefined') Element=arguments['callee']['__args__'][3][1];

			if ($p['bool']((Element === null))) {
				Element = $m['DOM']['createDiv']();
			}
			self['setElement'](Element);
			$pyjs_kwargs_call($m['Panel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['Element', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool']((self['getWidget']() !== null))) {
				console['error']('SimplePanel can only contain one child widget');
				return null;
			}
			self['setWidget'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('getWidget', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['len']($p['getattr'](self, 'children')))) {
				return $p['getattr'](self, 'children')['__getitem__'](0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](!$p['op_eq'](self['getWidget'](), widget))) {
				return false;
			}
			self['disown'](widget);
			$p['getattr'](self, 'children')['__delitem__'](0);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('getContainerElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getElement']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContainerElement'] = $method;
		$method = $pyjs__bind_method2('setWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool']($p['op_eq'](self['getWidget'](), widget))) {
				return null;
			}
			if ($p['bool']((self['getWidget']() !== null))) {
				self['remove'](self['getWidget']());
			}
			if ($p['bool']((widget !== null))) {
				self['adopt'](widget, self['getContainerElement']());
				self['children']['append'](widget);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		var $bases = new Array($m['Panel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SimplePanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.SimplePanel', 'SimplePanel', $m['SimplePanel']);
	return this;
}; /* end pyjamas.ui.SimplePanel */


/* end module: pyjamas.ui.SimplePanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Panel.Panel', 'pyjamas.ui', 'pyjamas.ui.Panel']
*/
