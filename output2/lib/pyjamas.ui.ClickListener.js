/* start module: pyjamas.ui.ClickListener */
$pyjs['loaded_modules']['pyjamas.ui.ClickListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.ClickListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.ClickListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.ClickListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.ClickListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ClickListener';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['ClickListener'] = $pyjs['loaded_modules']['pyjamas.ui.ClickListener'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.ClickListener.py, line 1:\n    """';
		$m.__track_lines__[5] = 'pyjamas.ui.ClickListener.py, line 5:\n    from pyjamas import DOM';
		$m.__track_lines__[6] = 'pyjamas.ui.ClickListener.py, line 6:\n    from pyjamas.ui import Event';
		$m.__track_lines__[8] = 'pyjamas.ui.ClickListener.py, line 8:\n    class ClickHandler(object):';
		$m.__track_lines__[10] = 'pyjamas.ui.ClickListener.py, line 10:\n    def __init__(self, preventDefault=False):';
		$m.__track_lines__[11] = 'pyjamas.ui.ClickListener.py, line 11:\n    self._clickListeners = []';
		$m.__track_lines__[12] = 'pyjamas.ui.ClickListener.py, line 12:\n    self._doubleclickListeners = []';
		$m.__track_lines__[13] = 'pyjamas.ui.ClickListener.py, line 13:\n    self._clickPreventDefault = preventDefault';
		$m.__track_lines__[15] = 'pyjamas.ui.ClickListener.py, line 15:\n    self.sinkEvents(Event.ONCLICK)';
		$m.__track_lines__[16] = 'pyjamas.ui.ClickListener.py, line 16:\n    self.sinkEvents(Event.ONDBLCLICK)';
		$m.__track_lines__[18] = 'pyjamas.ui.ClickListener.py, line 18:\n    def onClick(self, sender=None):';
		$m.__track_lines__[19] = 'pyjamas.ui.ClickListener.py, line 19:\n    pass';
		$m.__track_lines__[21] = 'pyjamas.ui.ClickListener.py, line 21:\n    def onDoubleClick(self, sender=None):';
		$m.__track_lines__[22] = 'pyjamas.ui.ClickListener.py, line 22:\n    pass';
		$m.__track_lines__[24] = 'pyjamas.ui.ClickListener.py, line 24:\n    def addDoubleClickListener(self, listener):';
		$m.__track_lines__[25] = 'pyjamas.ui.ClickListener.py, line 25:\n    self._doubleclickListeners.append(listener)';
		$m.__track_lines__[27] = 'pyjamas.ui.ClickListener.py, line 27:\n    def addClickListener(self, listener):';
		$m.__track_lines__[28] = 'pyjamas.ui.ClickListener.py, line 28:\n    stylename = self.getStyleName()';
		$m.__track_lines__[29] = 'pyjamas.ui.ClickListener.py, line 29:\n    if stylename:';
		$m.__track_lines__[30] = 'pyjamas.ui.ClickListener.py, line 30:\n    self.addStyleName("%s-clickable" % stylename.split()[0])';
		$m.__track_lines__[31] = 'pyjamas.ui.ClickListener.py, line 31:\n    self._clickListeners.append(listener)';
		$m.__track_lines__[33] = 'pyjamas.ui.ClickListener.py, line 33:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[37] = 'pyjamas.ui.ClickListener.py, line 37:\n    type = DOM.eventGetType(event)';
		$m.__track_lines__[38] = 'pyjamas.ui.ClickListener.py, line 38:\n    if type == "click":';
		$m.__track_lines__[39] = 'pyjamas.ui.ClickListener.py, line 39:\n    if self._clickPreventDefault:';
		$m.__track_lines__[40] = 'pyjamas.ui.ClickListener.py, line 40:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[41] = 'pyjamas.ui.ClickListener.py, line 41:\n    for listener in self._clickListeners:';
		$m.__track_lines__[42] = 'pyjamas.ui.ClickListener.py, line 42:\n    if hasattr(listener, "onClick"):';
		$m.__track_lines__[43] = 'pyjamas.ui.ClickListener.py, line 43:\n    listener.onClick(self)';
		$m.__track_lines__[45] = 'pyjamas.ui.ClickListener.py, line 45:\n    listener(self)';
		$m.__track_lines__[47] = 'pyjamas.ui.ClickListener.py, line 47:\n    if self._clickPreventDefault:';
		$m.__track_lines__[48] = 'pyjamas.ui.ClickListener.py, line 48:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[49] = 'pyjamas.ui.ClickListener.py, line 49:\n    for listener in self._doubleclickListeners:';
		$m.__track_lines__[50] = 'pyjamas.ui.ClickListener.py, line 50:\n    if hasattr(listener, "onDoubleClick"):';
		$m.__track_lines__[51] = 'pyjamas.ui.ClickListener.py, line 51:\n    listener.onDoubleClick(self)';
		$m.__track_lines__[53] = 'pyjamas.ui.ClickListener.py, line 53:\n    listener(self)';
		$m.__track_lines__[55] = 'pyjamas.ui.ClickListener.py, line 55:\n    def removeClickListener(self, listener):';
		$m.__track_lines__[56] = 'pyjamas.ui.ClickListener.py, line 56:\n    self._clickListeners.remove(listener)';
		$m.__track_lines__[58] = 'pyjamas.ui.ClickListener.py, line 58:\n    def removeDoubleClickListener(self, listener):';
		$m.__track_lines__[59] = 'pyjamas.ui.ClickListener.py, line 59:\n    self._doubleclickListeners.remove(listener)';
		$m.__track_lines__[61] = 'pyjamas.ui.ClickListener.py, line 61:\n    def clearClickListener(self):';
		$m.__track_lines__[62] = 'pyjamas.ui.ClickListener.py, line 62:\n    self._clickListeners[:] = []';
		$m.__track_lines__[64] = 'pyjamas.ui.ClickListener.py, line 64:\n    def clearDoubleClickListener(self):';
		$m.__track_lines__[65] = 'pyjamas.ui.ClickListener.py, line 65:\n    self._doubleclickListeners.remove(listener)[:] = []';

		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjamas.ui.ClickListener';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$m['ClickHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.ClickListener';
			$cls_definition['__md5__'] = '9ad7df2b22b246f703fd78ec9e76faee';
			$pyjs['track']['lineno']=10;
			$method = $pyjs__bind_method2('__init__', function(preventDefault) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					preventDefault = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof preventDefault == 'undefined') preventDefault=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=10;
				$pyjs['track']['lineno']=11;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clickListeners', $p['list']([])) : $p['setattr'](self, '_clickListeners', $p['list']([])); 
				$pyjs['track']['lineno']=12;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_doubleclickListeners', $p['list']([])) : $p['setattr'](self, '_doubleclickListeners', $p['list']([])); 
				$pyjs['track']['lineno']=13;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clickPreventDefault', preventDefault) : $p['setattr'](self, '_clickPreventDefault', preventDefault); 
				$pyjs['track']['lineno']=15;
				self['sinkEvents']($p['getattr']($m['Event'], 'ONCLICK'));
				$pyjs['track']['lineno']=16;
				self['sinkEvents']($p['getattr']($m['Event'], 'ONDBLCLICK'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['preventDefault', false]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=18;
			$method = $pyjs__bind_method2('onClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=18;
				$pyjs['track']['lineno']=19;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onClick'] = $method;
			$pyjs['track']['lineno']=21;
			$method = $pyjs__bind_method2('onDoubleClick', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=21;
				$pyjs['track']['lineno']=22;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender', null]]);
			$cls_definition['onDoubleClick'] = $method;
			$pyjs['track']['lineno']=24;
			$method = $pyjs__bind_method2('addDoubleClickListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=24;
				$pyjs['track']['lineno']=25;
				self['_doubleclickListeners']['append'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addDoubleClickListener'] = $method;
			$pyjs['track']['lineno']=27;
			$method = $pyjs__bind_method2('addClickListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var stylename;
				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=28;
				stylename = self['getStyleName']();
				$pyjs['track']['lineno']=29;
				if ($p['bool'](stylename)) {
					$pyjs['track']['lineno']=30;
					self['addStyleName']($p['sprintf']('%s-clickable', stylename['$$split']()['__getitem__']($constant_int_0)));
				}
				$pyjs['track']['lineno']=31;
				self['_clickListeners']['append'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addClickListener'] = $method;
			$pyjs['track']['lineno']=33;
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
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,listener,$iter2_idx,$iter1_array,$pyjs__trackstack_size_1,$iter2_type,type,$iter2_array,$iter1_idx;
				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=37;
				type = $m['DOM']['eventGetType'](event);
				$pyjs['track']['lineno']=38;
				if ($p['bool']($p['op_eq'](type, 'click'))) {
					$pyjs['track']['lineno']=39;
					if ($p['bool']($p['getattr'](self, '_clickPreventDefault'))) {
						$pyjs['track']['lineno']=40;
						$m['DOM']['eventPreventDefault'](event);
					}
					$pyjs['track']['lineno']=41;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = $p['getattr'](self, '_clickListeners');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						listener = $iter1_nextval['$nextval'];
						$pyjs['track']['lineno']=42;
						if ($p['bool']($p['hasattr'](listener, 'onClick'))) {
							$pyjs['track']['lineno']=43;
							listener['onClick'](self);
						}
						else {
							$pyjs['track']['lineno']=45;
							listener(self);
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.ClickListener';
				}
				else if ($p['bool']($p['op_eq'](type, 'dblclick'))) {
					$pyjs['track']['lineno']=47;
					if ($p['bool']($p['getattr'](self, '_clickPreventDefault'))) {
						$pyjs['track']['lineno']=48;
						$m['DOM']['eventPreventDefault'](event);
					}
					$pyjs['track']['lineno']=49;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter2_iter = $p['getattr'](self, '_doubleclickListeners');
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						listener = $iter2_nextval['$nextval'];
						$pyjs['track']['lineno']=50;
						if ($p['bool']($p['hasattr'](listener, 'onDoubleClick'))) {
							$pyjs['track']['lineno']=51;
							listener['onDoubleClick'](self);
						}
						else {
							$pyjs['track']['lineno']=53;
							listener(self);
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.ClickListener';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs['track']['lineno']=55;
			$method = $pyjs__bind_method2('removeClickListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=56;
				self['_clickListeners']['remove'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeClickListener'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('removeDoubleClickListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=59;
				self['_doubleclickListeners']['remove'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeDoubleClickListener'] = $method;
			$pyjs['track']['lineno']=61;
			$method = $pyjs__bind_method2('clearClickListener', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=62;
				$p['__setslice']($p['getattr'](self, '_clickListeners'), 0, null, $p['list']([]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearClickListener'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('clearDoubleClickListener', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9ad7df2b22b246f703fd78ec9e76faee') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.ClickListener', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.ClickListener';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				$p['__setslice'](self['_doubleclickListeners']['remove']((typeof listener == "undefined"?$m['listener']:listener)), 0, null, $p['list']([]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clearDoubleClickListener'] = $method;
			$pyjs['track']['lineno']=8;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ClickHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.ClickListener */


/* end module: pyjamas.ui.ClickListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
