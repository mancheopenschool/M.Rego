/* start module: pyjamas.ui.FocusListener */
$pyjs['loaded_modules']['pyjamas.ui.FocusListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FocusListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FocusListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FocusListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FocusListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FocusListener';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['FocusListener'] = $pyjs['loaded_modules']['pyjamas.ui.FocusListener'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.FocusListener.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.FocusListener.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.FocusListener.py, line 16:\n    from pyjamas.ui import Event';
		$m.__track_lines__[18] = 'pyjamas.ui.FocusListener.py, line 18:\n    def fireFocusEvent(listeners, sender, event):';
		$m.__track_lines__[19] = 'pyjamas.ui.FocusListener.py, line 19:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[20] = 'pyjamas.ui.FocusListener.py, line 20:\n    if type == "focus":';
		$m.__track_lines__[21] = 'pyjamas.ui.FocusListener.py, line 21:\n    for listener in listeners:';
		$m.__track_lines__[22] = 'pyjamas.ui.FocusListener.py, line 22:\n    listener.onFocus(sender)';
		$m.__track_lines__[24] = 'pyjamas.ui.FocusListener.py, line 24:\n    for listener in listeners:';
		$m.__track_lines__[25] = 'pyjamas.ui.FocusListener.py, line 25:\n    listener.onLostFocus(sender)';
		$m.__track_lines__[27] = 'pyjamas.ui.FocusListener.py, line 27:\n    FOCUS_EVENTS = ["focus", "blur"]';
		$m.__track_lines__[29] = 'pyjamas.ui.FocusListener.py, line 29:\n    class FocusHandler:';
		$m.__track_lines__[31] = 'pyjamas.ui.FocusListener.py, line 31:\n    def __init__(self):';
		$m.__track_lines__[32] = 'pyjamas.ui.FocusListener.py, line 32:\n    self._focusListeners = []';
		$m.__track_lines__[33] = 'pyjamas.ui.FocusListener.py, line 33:\n    self.sinkEvents( Event.FOCUSEVENTS )';
		$m.__track_lines__[35] = 'pyjamas.ui.FocusListener.py, line 35:\n    def onFocus(self, sender):';
		$m.__track_lines__[36] = 'pyjamas.ui.FocusListener.py, line 36:\n    pass';
		$m.__track_lines__[38] = 'pyjamas.ui.FocusListener.py, line 38:\n    def onLostFocus(self, sender):';
		$m.__track_lines__[39] = 'pyjamas.ui.FocusListener.py, line 39:\n    pass';
		$m.__track_lines__[41] = 'pyjamas.ui.FocusListener.py, line 41:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[42] = 'pyjamas.ui.FocusListener.py, line 42:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[43] = 'pyjamas.ui.FocusListener.py, line 43:\n    if type == "blur" or type == "focus":';
		$m.__track_lines__[44] = 'pyjamas.ui.FocusListener.py, line 44:\n    fireFocusEvent(self._focusListeners, self, event)';
		$m.__track_lines__[46] = 'pyjamas.ui.FocusListener.py, line 46:\n    def addFocusListener(self, listener):';
		$m.__track_lines__[47] = 'pyjamas.ui.FocusListener.py, line 47:\n    self._focusListeners.append(listener)';
		$m.__track_lines__[49] = 'pyjamas.ui.FocusListener.py, line 49:\n    def removeFocusListener(self, listener):';
		$m.__track_lines__[50] = 'pyjamas.ui.FocusListener.py, line 50:\n    self._focusListeners.remove(listener)';


		$pyjs['track']['module']='pyjamas.ui.FocusListener';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$m['fireFocusEvent'] = function(listeners, sender, event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $iter2_nextval,$iter1_nextval,$iter2_iter,$iter1_idx,$iter2_idx,$iter1_iter,listener,$iter1_array,$pyjs__trackstack_size_1,$iter2_type,type,$iter2_array,$iter1_type;
			$pyjs['track']={'module':'pyjamas.ui.FocusListener','lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.FocusListener';
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=19;
			type = $m['DOM']['eventGetType'](event);
			$pyjs['track']['lineno']=20;
			if ($p['bool']($p['op_eq'](type, 'focus'))) {
				$pyjs['track']['lineno']=21;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = listeners;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					listener = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=22;
					listener['onFocus'](sender);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
			}
			else if ($p['bool']($p['op_eq'](type, 'blur'))) {
				$pyjs['track']['lineno']=24;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = listeners;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					listener = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=25;
					listener['onLostFocus'](sender);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['fireFocusEvent']['__name__'] = 'fireFocusEvent';

		$m['fireFocusEvent']['__bind_type__'] = 0;
		$m['fireFocusEvent']['__args__'] = [null,null,['listeners'],['sender'],['event']];
		$pyjs['track']['lineno']=27;
		$m['FOCUS_EVENTS'] = $p['list'](['focus', 'blur']);
		$pyjs['track']['lineno']=29;
		$m['FocusHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.FocusListener';
			$cls_definition['__md5__'] = 'dbb4a7e34dd11727c3f54840cc40aac0';
			$pyjs['track']['lineno']=31;
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
					if (self.prototype['__md5__'] !== 'dbb4a7e34dd11727c3f54840cc40aac0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.FocusListener', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=32;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_focusListeners', $p['list']([])) : $p['setattr'](self, '_focusListeners', $p['list']([])); 
				$pyjs['track']['lineno']=33;
				self['sinkEvents']($p['getattr']($m['Event'], 'FOCUSEVENTS'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=35;
			$method = $pyjs__bind_method2('onFocus', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dbb4a7e34dd11727c3f54840cc40aac0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.FocusListener', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=36;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onFocus'] = $method;
			$pyjs['track']['lineno']=38;
			$method = $pyjs__bind_method2('onLostFocus', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dbb4a7e34dd11727c3f54840cc40aac0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.FocusListener', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=39;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onLostFocus'] = $method;
			$pyjs['track']['lineno']=41;
			$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'dbb4a7e34dd11727c3f54840cc40aac0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,type,$or2;
				$pyjs['track']={'module':'pyjamas.ui.FocusListener', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=42;
				type = $m['DOM']['eventGetType'](event);
				$pyjs['track']['lineno']=43;
				if ($p['bool'](($p['bool']($or1=$p['op_eq'](type, 'blur'))?$or1:$p['op_eq'](type, 'focus')))) {
					$pyjs['track']['lineno']=44;
					$m['fireFocusEvent']($p['getattr'](self, '_focusListeners'), self, event);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs['track']['lineno']=46;
			$method = $pyjs__bind_method2('addFocusListener', function(listener) {
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
					if (self.prototype['__md5__'] !== 'dbb4a7e34dd11727c3f54840cc40aac0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.FocusListener', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=47;
				self['_focusListeners']['append'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addFocusListener'] = $method;
			$pyjs['track']['lineno']=49;
			$method = $pyjs__bind_method2('removeFocusListener', function(listener) {
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
					if (self.prototype['__md5__'] !== 'dbb4a7e34dd11727c3f54840cc40aac0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.FocusListener', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.FocusListener';
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=50;
				self['_focusListeners']['remove'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeFocusListener'] = $method;
			$pyjs['track']['lineno']=29;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FocusHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.FocusListener */


/* end module: pyjamas.ui.FocusListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
