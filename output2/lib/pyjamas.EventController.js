/* start module: pyjamas.EventController */
$pyjs['loaded_modules']['pyjamas.EventController'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.EventController']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.EventController'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.EventController'];
	$m['__repr__'] = function() { return '<module: pyjamas.EventController>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.EventController';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas']['EventController'] = $pyjs['loaded_modules']['pyjamas.EventController'];
	try {
		$m.__track_lines__[1] = 'pyjamas.EventController.py, line 1:\n    # Module for creating event handlers';
		$m.__track_lines__[26] = 'pyjamas.EventController.py, line 26:\n    class EventGenerator():';
		$m.__track_lines__[27] = 'pyjamas.EventController.py, line 27:\n    def _get_add_listener_func_name(self, ev):';
		$m.__track_lines__[28] = 'pyjamas.EventController.py, line 28:\n    return "add"+ev+"Listener"';
		$m.__track_lines__[29] = 'pyjamas.EventController.py, line 29:\n    def _get_remove_listener_func_name(self, ev):';
		$m.__track_lines__[30] = 'pyjamas.EventController.py, line 30:\n    return "remove"+ev+"Listener"';
		$m.__track_lines__[31] = 'pyjamas.EventController.py, line 31:\n    def _get_dispatch_func_name(self, ev):';
		$m.__track_lines__[32] = 'pyjamas.EventController.py, line 32:\n    return "dispatch"+ev+"Event"';
		$m.__track_lines__[33] = 'pyjamas.EventController.py, line 33:\n    def addListenedEvent(self, ev):';
		$m.__track_lines__[35] = 'pyjamas.EventController.py, line 35:\n    global EventListener # is also a javascript global';
		$m.__track_lines__[36] = 'pyjamas.EventController.py, line 36:\n    el = EventListener(ev)';
		$m.__track_lines__[38] = 'pyjamas.EventController.py, line 38:\n    attr_add = self._get_add_listener_func_name(ev)';
		$m.__track_lines__[39] = 'pyjamas.EventController.py, line 39:\n    setattr(self,attr_add,el.add_listener)';
		$m.__track_lines__[41] = 'pyjamas.EventController.py, line 41:\n    attr_rem = self._get_remove_listener_func_name(ev)';
		$m.__track_lines__[42] = 'pyjamas.EventController.py, line 42:\n    setattr(self,attr_rem,el.rem_listener)';
		$m.__track_lines__[44] = 'pyjamas.EventController.py, line 44:\n    attr_dsp = self._get_dispatch_func_name(ev)';
		$m.__track_lines__[45] = 'pyjamas.EventController.py, line 45:\n    setattr(self,attr_dsp,el.dispatch)';
		$m.__track_lines__[51] = 'pyjamas.EventController.py, line 51:\n    class EventListener():';
		$m.__track_lines__[52] = 'pyjamas.EventController.py, line 52:\n    def __init__(self, ev):';
		$m.__track_lines__[53] = 'pyjamas.EventController.py, line 53:\n    self.ev = ev';
		$m.__track_lines__[54] = 'pyjamas.EventController.py, line 54:\n    self.listeners = []';
		$m.__track_lines__[55] = 'pyjamas.EventController.py, line 55:\n    def add_listener(self, listener):';
		$m.__track_lines__[56] = 'pyjamas.EventController.py, line 56:\n    self.listeners.append(listener)';
		$m.__track_lines__[57] = 'pyjamas.EventController.py, line 57:\n    def rem_listener(self, listener):';
		$m.__track_lines__[58] = 'pyjamas.EventController.py, line 58:\n    self.listeners.remove(listener)';
		$m.__track_lines__[60] = 'pyjamas.EventController.py, line 60:\n    def dispatch(self, *args):';
		$m.__track_lines__[61] = 'pyjamas.EventController.py, line 61:\n    ev = "on"+self.ev';
		$m.__track_lines__[62] = 'pyjamas.EventController.py, line 62:\n    for listener in self.listeners:';
		$m.__track_lines__[63] = 'pyjamas.EventController.py, line 63:\n    if hasattr(listener,ev):';
		$m.__track_lines__[64] = 'pyjamas.EventController.py, line 64:\n    getattr(listener,ev)(*args)';
		$m.__track_lines__[66] = 'pyjamas.EventController.py, line 66:\n    listener(*args)';
		$m.__track_lines__[70] = 'pyjamas.EventController.py, line 70:\n    class Handler(object):';
		$m.__track_lines__[72] = 'pyjamas.EventController.py, line 72:\n    def __init__(self, parent, event_type, *args, **kwargs):';
		$m.__track_lines__[73] = 'pyjamas.EventController.py, line 73:\n    if parent is None:';
		$m.__track_lines__[74] = 'pyjamas.EventController.py, line 74:\n    parent = self';
		$m.__track_lines__[75] = 'pyjamas.EventController.py, line 75:\n    self.parent = parent';
		$m.__track_lines__[76] = 'pyjamas.EventController.py, line 76:\n    self.event_type = event_type';
		$m.__track_lines__[77] = 'pyjamas.EventController.py, line 77:\n    self.listeners = {}';
		$m.__track_lines__[78] = 'pyjamas.EventController.py, line 78:\n    self.callback_fnname = "on%s" % event_type';
		$m.__track_lines__[79] = 'pyjamas.EventController.py, line 79:\n    self.extra_args = args';
		$m.__track_lines__[80] = 'pyjamas.EventController.py, line 80:\n    self.extra_kwargs = kwargs';
		$m.__track_lines__[83] = 'pyjamas.EventController.py, line 83:\n    add_listener_fnname = "add%sListener" % event_type';
		$m.__track_lines__[84] = 'pyjamas.EventController.py, line 84:\n    del_listener_fnname = "remove%sListener" % event_type';
		$m.__track_lines__[85] = 'pyjamas.EventController.py, line 85:\n    listener = "_%sListeners" % event_type';
		$m.__track_lines__[86] = 'pyjamas.EventController.py, line 86:\n    on_event_name = "on%sEvent" % event_type';
		$m.__track_lines__[87] = 'pyjamas.EventController.py, line 87:\n    setattr(parent, listener, self)';
		$m.__track_lines__[88] = 'pyjamas.EventController.py, line 88:\n    setattr(parent, add_listener_fnname, self.addListener)';
		$m.__track_lines__[89] = 'pyjamas.EventController.py, line 89:\n    setattr(parent, del_listener_fnname, self.removeListener)';
		$m.__track_lines__[90] = 'pyjamas.EventController.py, line 90:\n    setattr(parent, on_event_name, self.onEvent)';
		$m.__track_lines__[92] = 'pyjamas.EventController.py, line 92:\n    def addListener(self, listener, *args, **kwargs):';
		$m.__track_lines__[93] = 'pyjamas.EventController.py, line 93:\n    args = args or ()';
		$m.__track_lines__[94] = 'pyjamas.EventController.py, line 94:\n    kwargs = kwargs or {}';
		$m.__track_lines__[95] = 'pyjamas.EventController.py, line 95:\n    args = self.extra_args + args';
		$m.__track_lines__[96] = 'pyjamas.EventController.py, line 96:\n    kwargs.update(self.extra_kwargs)';
		$m.__track_lines__[97] = 'pyjamas.EventController.py, line 97:\n    self.listeners[listener] = (args, kwargs)';
		$m.__track_lines__[99] = 'pyjamas.EventController.py, line 99:\n    def removeListener(self, listener):';
		$m.__track_lines__[100] = 'pyjamas.EventController.py, line 100:\n    self.listeners.pop(listener)';
		$m.__track_lines__[102] = 'pyjamas.EventController.py, line 102:\n    def onEvent(self, sender, *eventargs):';
		$m.__track_lines__[103] = 'pyjamas.EventController.py, line 103:\n    for listener, args in self.listeners.items():';
		$m.__track_lines__[104] = 'pyjamas.EventController.py, line 104:\n    fn = getattr(listener, self.callback_fnname, listener)';
		$m.__track_lines__[105] = 'pyjamas.EventController.py, line 105:\n    (args, kwargs) = args';
		$m.__track_lines__[106] = 'pyjamas.EventController.py, line 106:\n    args = (sender,) + args + eventargs';
		$m.__track_lines__[107] = 'pyjamas.EventController.py, line 107:\n    fn(*args, **kwargs)';


		$pyjs['track']['module']='pyjamas.EventController';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=26;
		$m['EventGenerator'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.EventController';
			$cls_definition['__md5__'] = 'b4540b487d5792f9b608a42e15f79c43';
			$pyjs['track']['lineno']=27;
			$method = $pyjs__bind_method2('_get_add_listener_func_name', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=28;
				var $pyjs__ret = $p['__op_add']($add3=$p['__op_add']($add1='add',$add2=ev),$add4='Listener');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['_get_add_listener_func_name'] = $method;
			$pyjs['track']['lineno']=29;
			$method = $pyjs__bind_method2('_get_remove_listener_func_name', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add6,$add7,$add5,$add8;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=29;
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=30;
				var $pyjs__ret = $p['__op_add']($add7=$p['__op_add']($add5='remove',$add6=ev),$add8='Listener');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['_get_remove_listener_func_name'] = $method;
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('_get_dispatch_func_name', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,$add10,$add11,$add12;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=32;
				var $pyjs__ret = $p['__op_add']($add11=$p['__op_add']($add9='dispatch',$add10=ev),$add12='Event');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['_get_dispatch_func_name'] = $method;
			$pyjs['track']['lineno']=33;
			$method = $pyjs__bind_method2('addListenedEvent', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b4540b487d5792f9b608a42e15f79c43') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var attr_rem,el,attr_dsp,attr_add;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=36;
				el = $m['EventListener'](ev);
				$pyjs['track']['lineno']=38;
				attr_add = self['_get_add_listener_func_name'](ev);
				$pyjs['track']['lineno']=39;
				$p['setattr'](self, attr_add, $p['getattr'](el, 'add_listener'));
				$pyjs['track']['lineno']=41;
				attr_rem = self['_get_remove_listener_func_name'](ev);
				$pyjs['track']['lineno']=42;
				$p['setattr'](self, attr_rem, $p['getattr'](el, 'rem_listener'));
				$pyjs['track']['lineno']=44;
				attr_dsp = self['_get_dispatch_func_name'](ev);
				$pyjs['track']['lineno']=45;
				$p['setattr'](self, attr_dsp, $p['getattr'](el, 'dispatch'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['addListenedEvent'] = $method;
			$pyjs['track']['lineno']=26;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EventGenerator', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=51;
		$m['EventListener'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.EventController';
			$cls_definition['__md5__'] = '822c98f792c953deaa98f4f7c284e877';
			$pyjs['track']['lineno']=52;
			$method = $pyjs__bind_method2('__init__', function(ev) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ev = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=53;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ev', ev) : $p['setattr'](self, 'ev', ev); 
				$pyjs['track']['lineno']=54;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('listeners', $p['list']([])) : $p['setattr'](self, 'listeners', $p['list']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ev']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=55;
			$method = $pyjs__bind_method2('add_listener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=56;
				self['listeners']['append'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['add_listener'] = $method;
			$pyjs['track']['lineno']=57;
			$method = $pyjs__bind_method2('rem_listener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=58;
				self['listeners']['remove'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['rem_listener'] = $method;
			$pyjs['track']['lineno']=60;
			$method = $pyjs__bind_method2('dispatch', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '822c98f792c953deaa98f4f7c284e877') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var listener,$iter1_nextval,$iter1_type,$iter1_iter,$add14,$iter1_array,$add13,ev,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=61;
				ev = $p['__op_add']($add13='on',$add14=$p['getattr'](self, 'ev'));
				$pyjs['track']['lineno']=62;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['getattr'](self, 'listeners');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					listener = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=63;
					if ($p['bool']($p['hasattr'](listener, ev))) {
						$pyjs['track']['lineno']=64;
						$pyjs_kwargs_call(null, $p['getattr'](listener, ev), args, null, [{}]);
					}
					else {
						$pyjs['track']['lineno']=66;
						$pyjs_kwargs_call(null, listener, args, null, [{}]);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['dispatch'] = $method;
			$pyjs['track']['lineno']=51;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('EventListener', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=70;
		$m['Handler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.EventController';
			$cls_definition['__md5__'] = 'de83f5025e086bd2912df8772302d39f';
			$pyjs['track']['lineno']=72;
			$method = $pyjs__bind_method2('__init__', function(parent, event_type) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					parent = arguments[1];
					event_type = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof event_type != 'undefined') {
						if (event_type !== null && typeof event_type['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = event_type;
							event_type = arguments[3];
						}
					} else 					if (typeof parent != 'undefined') {
						if (parent !== null && typeof parent['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = parent;
							parent = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				var add_listener_fnname,del_listener_fnname,listener,on_event_name;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=73;
				if ($p['bool']($p['op_is'](parent, null))) {
					$pyjs['track']['lineno']=74;
					parent = self;
				}
				$pyjs['track']['lineno']=75;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('parent', parent) : $p['setattr'](self, 'parent', parent); 
				$pyjs['track']['lineno']=76;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event_type', event_type) : $p['setattr'](self, 'event_type', event_type); 
				$pyjs['track']['lineno']=77;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('listeners', $p['dict']([])) : $p['setattr'](self, 'listeners', $p['dict']([])); 
				$pyjs['track']['lineno']=78;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callback_fnname', $p['sprintf']('on%s', event_type)) : $p['setattr'](self, 'callback_fnname', $p['sprintf']('on%s', event_type)); 
				$pyjs['track']['lineno']=79;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extra_args', args) : $p['setattr'](self, 'extra_args', args); 
				$pyjs['track']['lineno']=80;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('extra_kwargs', kwargs) : $p['setattr'](self, 'extra_kwargs', kwargs); 
				$pyjs['track']['lineno']=83;
				add_listener_fnname = $p['sprintf']('add%sListener', event_type);
				$pyjs['track']['lineno']=84;
				del_listener_fnname = $p['sprintf']('remove%sListener', event_type);
				$pyjs['track']['lineno']=85;
				listener = $p['sprintf']('_%sListeners', event_type);
				$pyjs['track']['lineno']=86;
				on_event_name = $p['sprintf']('on%sEvent', event_type);
				$pyjs['track']['lineno']=87;
				$p['setattr'](parent, listener, self);
				$pyjs['track']['lineno']=88;
				$p['setattr'](parent, add_listener_fnname, $p['getattr'](self, 'addListener'));
				$pyjs['track']['lineno']=89;
				$p['setattr'](parent, del_listener_fnname, $p['getattr'](self, 'removeListener'));
				$pyjs['track']['lineno']=90;
				$p['setattr'](parent, on_event_name, $p['getattr'](self, 'onEvent'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['parent'],['event_type']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=92;
			$method = $pyjs__bind_method2('addListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof listener != 'undefined') {
						if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = listener;
							listener = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var $or4,$or1,$or3,$or2,$add15,$add16;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=93;
				args = ($p['bool']($or1=args)?$or1:$p['tuple']([]));
				$pyjs['track']['lineno']=94;
				kwargs = ($p['bool']($or3=kwargs)?$or3:$p['dict']([]));
				$pyjs['track']['lineno']=95;
				args = $p['__op_add']($add15=$p['getattr'](self, 'extra_args'),$add16=args);
				$pyjs['track']['lineno']=96;
				kwargs['update']($p['getattr'](self, 'extra_kwargs'));
				$pyjs['track']['lineno']=97;
				$p['getattr'](self, 'listeners')['__setitem__'](listener, $p['tuple']([args, kwargs]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['listener']]);
			$cls_definition['addListener'] = $method;
			$pyjs['track']['lineno']=99;
			$method = $pyjs__bind_method2('removeListener', function(listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					listener = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=99;
				$pyjs['track']['lineno']=100;
				self['listeners']['pop'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeListener'] = $method;
			$pyjs['track']['lineno']=102;
			$method = $pyjs__bind_method2('onEvent', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var eventargs = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					var eventargs = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'de83f5025e086bd2912df8772302d39f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add20,$iter2_nextval,$iter2_type,$iter2_iter,kwargs,args,listener,$iter2_idx,$add17,fn,$pyjs__trackstack_size_1,$add18,$add19,$iter2_array;
				$pyjs['track']={'module':'pyjamas.EventController', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=103;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = self['listeners']['items']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					listener = $tupleassign1[0];
					args = $tupleassign1[1];
					$pyjs['track']['lineno']=104;
					fn = $p['getattr'](listener, $p['getattr'](self, 'callback_fnname'), listener);
					$pyjs['track']['lineno']=105;
					var $tupleassign2 = $p['__ass_unpack'](args, 2, null);
					args = $tupleassign2[0];
					kwargs = $tupleassign2[1];
					$pyjs['track']['lineno']=106;
					args = $p['__op_add']($add19=$p['__op_add']($add17=$p['tuple']([sender]),$add18=args),$add20=eventargs);
					$pyjs['track']['lineno']=107;
					$pyjs_kwargs_call(null, fn, args, kwargs, [{}]);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.EventController';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['eventargs',null,['self'],['sender']]);
			$cls_definition['onEvent'] = $method;
			$pyjs['track']['lineno']=70;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Handler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.EventController */


/* end module: pyjamas.EventController */


