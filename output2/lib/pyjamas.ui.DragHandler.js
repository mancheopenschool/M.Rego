/* start module: pyjamas.ui.DragHandler */
$pyjs['loaded_modules']['pyjamas.ui.DragHandler'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DragHandler']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DragHandler'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DragHandler'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DragHandler>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DragHandler';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['DragHandler'] = $pyjs['loaded_modules']['pyjamas.ui.DragHandler'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.DragHandler.py, line 1:\n    # Copyright (C) 2010 Jim Washington';
		$m.__track_lines__[15] = 'pyjamas.ui.DragHandler.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.DragHandler.py, line 16:\n    from pyjamas.ui import Event';
		$m.__track_lines__[18] = 'pyjamas.ui.DragHandler.py, line 18:\n    DRAG_EVENTS = [ "dragstart", "drag", "dragend"]';
		$m.__track_lines__[20] = 'pyjamas.ui.DragHandler.py, line 20:\n    def fireDragEvent(listeners, event):';
		$m.__track_lines__[21] = 'pyjamas.ui.DragHandler.py, line 21:\n    etype = DOM.eventGetType(event)';
		$m.__track_lines__[22] = 'pyjamas.ui.DragHandler.py, line 22:\n    if etype == "dragstart":';
		$m.__track_lines__[23] = 'pyjamas.ui.DragHandler.py, line 23:\n    for listener in listeners:';
		$m.__track_lines__[24] = 'pyjamas.ui.DragHandler.py, line 24:\n    listener.onDragStart(event)';
		$m.__track_lines__[25] = 'pyjamas.ui.DragHandler.py, line 25:\n    return True';
		$m.__track_lines__[27] = 'pyjamas.ui.DragHandler.py, line 27:\n    for listener in listeners:';
		$m.__track_lines__[28] = 'pyjamas.ui.DragHandler.py, line 28:\n    listener.onDrag(event)';
		$m.__track_lines__[29] = 'pyjamas.ui.DragHandler.py, line 29:\n    return True';
		$m.__track_lines__[31] = 'pyjamas.ui.DragHandler.py, line 31:\n    for listener in listeners:';
		$m.__track_lines__[32] = 'pyjamas.ui.DragHandler.py, line 32:\n    listener.onDragEnd(event)';
		$m.__track_lines__[33] = 'pyjamas.ui.DragHandler.py, line 33:\n    return True';
		$m.__track_lines__[34] = 'pyjamas.ui.DragHandler.py, line 34:\n    return False';
		$m.__track_lines__[36] = 'pyjamas.ui.DragHandler.py, line 36:\n    class DragHandler(object):';
		$m.__track_lines__[38] = 'pyjamas.ui.DragHandler.py, line 38:\n    def __init__(self):';
		$m.__track_lines__[39] = 'pyjamas.ui.DragHandler.py, line 39:\n    self._dragListeners = []';
		$m.__track_lines__[40] = 'pyjamas.ui.DragHandler.py, line 40:\n    self.sinkEvents(Event.DRAGEVENTS)';
		$m.__track_lines__[42] = 'pyjamas.ui.DragHandler.py, line 42:\n    def onBrowserEvent(self, event):';
		$m.__track_lines__[43] = 'pyjamas.ui.DragHandler.py, line 43:\n    event_type = DOM.eventGetType(event)';
		$m.__track_lines__[44] = 'pyjamas.ui.DragHandler.py, line 44:\n    if event_type in DRAG_EVENTS:';
		$m.__track_lines__[45] = 'pyjamas.ui.DragHandler.py, line 45:\n    return fireDragEvent(self._dragListeners, event)';
		$m.__track_lines__[46] = 'pyjamas.ui.DragHandler.py, line 46:\n    return False';
		$m.__track_lines__[48] = 'pyjamas.ui.DragHandler.py, line 48:\n    def addDragListener(self, listener):';
		$m.__track_lines__[49] = 'pyjamas.ui.DragHandler.py, line 49:\n    self._dragListeners.append(listener)';
		$m.__track_lines__[51] = 'pyjamas.ui.DragHandler.py, line 51:\n    def removeDragListener(self, listener):';
		$m.__track_lines__[52] = 'pyjamas.ui.DragHandler.py, line 52:\n    self._dragListeners.remove(listener)';
		$m.__track_lines__[54] = 'pyjamas.ui.DragHandler.py, line 54:\n    def onDragStart(self, event):';
		$m.__track_lines__[73] = 'pyjamas.ui.DragHandler.py, line 73:\n    pass';
		$m.__track_lines__[75] = 'pyjamas.ui.DragHandler.py, line 75:\n    def onDrag(self, event):';
		$m.__track_lines__[80] = 'pyjamas.ui.DragHandler.py, line 80:\n    pass';
		$m.__track_lines__[82] = 'pyjamas.ui.DragHandler.py, line 82:\n    def onDragEnd(self, event):';
		$m.__track_lines__[87] = 'pyjamas.ui.DragHandler.py, line 87:\n    pass';


		$pyjs['track']['module']='pyjamas.ui.DragHandler';
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
		$m['DRAG_EVENTS'] = $p['list'](['dragstart', 'drag', 'dragend']);
		$pyjs['track']['lineno']=20;
		$m['fireDragEvent'] = function(listeners, event) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter3_array,$iter3_nextval,$iter3_iter,$iter3_type,$iter2_idx,$iter1_iter,listener,$iter3_idx,$iter1_array,$pyjs__trackstack_size_1,etype,$iter2_type,$iter2_array,$iter1_idx;
			$pyjs['track']={'module':'pyjamas.ui.DragHandler','lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.DragHandler';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=21;
			etype = $m['DOM']['eventGetType'](event);
			$pyjs['track']['lineno']=22;
			if ($p['bool']($p['op_eq'](etype, 'dragstart'))) {
				$pyjs['track']['lineno']=23;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = listeners;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					listener = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=24;
					listener['onDragStart'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=25;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ($p['bool']($p['op_eq'](etype, 'drag'))) {
				$pyjs['track']['lineno']=27;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = listeners;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					listener = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=28;
					listener['onDrag'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=29;
				$pyjs['track']['lineno']=29;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ($p['bool']($p['op_eq'](etype, 'dragend'))) {
				$pyjs['track']['lineno']=31;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = listeners;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					listener = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=32;
					listener['onDragEnd'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=33;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=34;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['fireDragEvent']['__name__'] = 'fireDragEvent';

		$m['fireDragEvent']['__bind_type__'] = 0;
		$m['fireDragEvent']['__args__'] = [null,null,['listeners'],['event']];
		$pyjs['track']['lineno']=36;
		$m['DragHandler'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.DragHandler';
			$cls_definition['__md5__'] = '41d26c528e42921bac03f8cb707d8b5c';
			$pyjs['track']['lineno']=38;
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
					if (self.prototype['__md5__'] !== '41d26c528e42921bac03f8cb707d8b5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.DragHandler', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_dragListeners', $p['list']([])) : $p['setattr'](self, '_dragListeners', $p['list']([])); 
				$pyjs['track']['lineno']=40;
				self['sinkEvents']($p['getattr']($m['Event'], 'DRAGEVENTS'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=42;
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
					if (self.prototype['__md5__'] !== '41d26c528e42921bac03f8cb707d8b5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event_type;
				$pyjs['track']={'module':'pyjamas.ui.DragHandler', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=43;
				event_type = $m['DOM']['eventGetType'](event);
				$pyjs['track']['lineno']=44;
				if ($p['bool']($m['DRAG_EVENTS']['__contains__'](event_type))) {
					$pyjs['track']['lineno']=45;
					$pyjs['track']['lineno']=45;
					var $pyjs__ret = $m['fireDragEvent']($p['getattr'](self, '_dragListeners'), event);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=46;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onBrowserEvent'] = $method;
			$pyjs['track']['lineno']=48;
			$method = $pyjs__bind_method2('addDragListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '41d26c528e42921bac03f8cb707d8b5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.DragHandler', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=49;
				self['_dragListeners']['append'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['addDragListener'] = $method;
			$pyjs['track']['lineno']=51;
			$method = $pyjs__bind_method2('removeDragListener', function(listener) {
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
					if (self.prototype['__md5__'] !== '41d26c528e42921bac03f8cb707d8b5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.DragHandler', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=52;
				self['_dragListeners']['remove'](listener);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['listener']]);
			$cls_definition['removeDragListener'] = $method;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('onDragStart', function(event) {
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
					if (self.prototype['__md5__'] !== '41d26c528e42921bac03f8cb707d8b5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.DragHandler', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=73;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragStart'] = $method;
			$pyjs['track']['lineno']=75;
			$method = $pyjs__bind_method2('onDrag', function(event) {
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
					if (self.prototype['__md5__'] !== '41d26c528e42921bac03f8cb707d8b5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.DragHandler', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=80;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDrag'] = $method;
			$pyjs['track']['lineno']=82;
			$method = $pyjs__bind_method2('onDragEnd', function(event) {
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
					if (self.prototype['__md5__'] !== '41d26c528e42921bac03f8cb707d8b5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.DragHandler', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.DragHandler';
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=87;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['onDragEnd'] = $method;
			$pyjs['track']['lineno']=36;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DragHandler', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.DragHandler */


/* end module: pyjamas.ui.DragHandler */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
