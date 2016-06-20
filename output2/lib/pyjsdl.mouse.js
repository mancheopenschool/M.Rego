/* start module: pyjsdl.mouse */
$pyjs['loaded_modules']['pyjsdl.mouse'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mouse']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mouse'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mouse'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mouse>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mouse';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['mouse'] = $pyjs['loaded_modules']['pyjsdl.mouse'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.mouse.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.mouse.py, line 5:\n    import env';
		$m.__track_lines__[6] = 'pyjsdl.mouse.py, line 6:\n    import pyjsdl.event';
		$m.__track_lines__[7] = 'pyjsdl.mouse.py, line 7:\n    from pyjsobj import DOM';
		$m.__track_lines__[9] = "pyjsdl.mouse.py, line 9:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[12] = 'pyjsdl.mouse.py, line 12:\n    class Mouse(object):';
		$m.__track_lines__[22] = 'pyjsdl.mouse.py, line 22:\n    def __init__(self):';
		$m.__track_lines__[28] = 'pyjsdl.mouse.py, line 28:\n    self.mousePress = pyjsdl.event.mousePress';
		$m.__track_lines__[29] = 'pyjsdl.mouse.py, line 29:\n    self.mouseMove = pyjsdl.event.mouseMove';
		$m.__track_lines__[30] = 'pyjsdl.mouse.py, line 30:\n    self.mouseMoveRel = pyjsdl.event.mouseMoveRel';
		$m.__track_lines__[31] = 'pyjsdl.mouse.py, line 31:\n    self.mouseCursor = pyjsdl.event.mouseCursor';
		$m.__track_lines__[32] = 'pyjsdl.mouse.py, line 32:\n    self._nonimplemented_methods()';
		$m.__track_lines__[34] = 'pyjsdl.mouse.py, line 34:\n    def get_pressed(self):';
		$m.__track_lines__[38] = 'pyjsdl.mouse.py, line 38:\n    return (self.mousePress[0], self.mousePress[1], self.mousePress[2])';
		$m.__track_lines__[40] = 'pyjsdl.mouse.py, line 40:\n    def get_pos(self):';
		$m.__track_lines__[45] = "pyjsdl.mouse.py, line 45:\n    if self.mouseMove['x'] != -1:";
		$m.__track_lines__[46] = "pyjsdl.mouse.py, line 46:\n    return (self.mouseMove['x']+env.frame.scrollLeft, self.mouseMove['y']+env.frame.scrollTop)";
		$m.__track_lines__[48] = "pyjsdl.mouse.py, line 48:\n    return (self.mouseMove['x'],  self.mouseMove['y'])";
		$m.__track_lines__[50] = 'pyjsdl.mouse.py, line 50:\n    def get_rel(self):';
		$m.__track_lines__[54] = 'pyjsdl.mouse.py, line 54:\n    try:';
		$m.__track_lines__[55] = "pyjsdl.mouse.py, line 55:\n    rel = (self.mouseMove['x']-self.mouseMoveRel['x'], self.mouseMove['y']-self.mouseMoveRel['y'])";
		$m.__track_lines__[56] = "pyjsdl.mouse.py, line 56:\n    self.mouseMoveRel['x'], self.mouseMoveRel['y'] = self.mouseMove['x'], self.mouseMove['y']";
		$m.__track_lines__[58] = 'pyjsdl.mouse.py, line 58:\n    rel = (0, 0)';
		$m.__track_lines__[59] = "pyjsdl.mouse.py, line 59:\n    if self.mouseMove['x'] != -1:";
		$m.__track_lines__[60] = "pyjsdl.mouse.py, line 60:\n    self.mouseMoveRel['x'], self.mouseMoveRel['y'] = self.mouseMove['x'], self.mouseMove['y']";
		$m.__track_lines__[61] = 'pyjsdl.mouse.py, line 61:\n    return rel';
		$m.__track_lines__[63] = 'pyjsdl.mouse.py, line 63:\n    def set_visible(self, visible):';
		$m.__track_lines__[67] = 'pyjsdl.mouse.py, line 67:\n    if visible:';
		$m.__track_lines__[68] = 'pyjsdl.mouse.py, line 68:\n    if not self.mouseCursor:';
		$m.__track_lines__[69] = "pyjsdl.mouse.py, line 69:\n    DOM.setStyleAttribute(env.canvas.getElement(), 'cursor', 'default')";
		$m.__track_lines__[70] = 'pyjsdl.mouse.py, line 70:\n    self.mouseCursor = True';
		$m.__track_lines__[72] = 'pyjsdl.mouse.py, line 72:\n    if self.mouseCursor:';
		$m.__track_lines__[73] = "pyjsdl.mouse.py, line 73:\n    DOM.setStyleAttribute(env.canvas.getElement(), 'cursor', 'none')";
		$m.__track_lines__[74] = 'pyjsdl.mouse.py, line 74:\n    self.mouseCursor = False';
		$m.__track_lines__[75] = 'pyjsdl.mouse.py, line 75:\n    return self.mouseCursor';
		$m.__track_lines__[77] = 'pyjsdl.mouse.py, line 77:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[81] = 'pyjsdl.mouse.py, line 81:\n    self.set_pos = lambda *arg: None';
		$m.__track_lines__[82] = 'pyjsdl.mouse.py, line 82:\n    self.get_focused = lambda *arg: True';
		$m.__track_lines__[83] = 'pyjsdl.mouse.py, line 83:\n    self.set_cursor = lambda *arg: None';
		$m.__track_lines__[84] = 'pyjsdl.mouse.py, line 84:\n    self.get_cursor = lambda *arg: ()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs['track']['module']='pyjsdl.mouse';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('env', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjsobj.DOM', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=12;
		$m['Mouse'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.mouse';
			$cls_definition['__md5__'] = '80c9b46767ea6140ff9c19af1778422c';
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
					if (self.prototype['__md5__'] !== '80c9b46767ea6140ff9c19af1778422c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=22;
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mousePress', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mousePress')) : $p['setattr'](self, 'mousePress', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mousePress')); 
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMove', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMove')) : $p['setattr'](self, 'mouseMove', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMove')); 
				$pyjs['track']['lineno']=30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMoveRel', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMoveRel')) : $p['setattr'](self, 'mouseMoveRel', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseMoveRel')); 
				$pyjs['track']['lineno']=31;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseCursor', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseCursor')) : $p['setattr'](self, 'mouseCursor', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'mouseCursor')); 
				$pyjs['track']['lineno']=32;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=34;
			$method = $pyjs__bind_method2('get_pressed', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80c9b46767ea6140ff9c19af1778422c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=34;
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=38;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'mousePress')['__getitem__']($constant_int_0), $p['getattr'](self, 'mousePress')['__getitem__']($constant_int_1), $p['getattr'](self, 'mousePress')['__getitem__']($constant_int_2)]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_pressed'] = $method;
			$pyjs['track']['lineno']=40;
			$method = $pyjs__bind_method2('get_pos', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80c9b46767ea6140ff9c19af1778422c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=45;
				if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'mouseMove')['__getitem__']('x'), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))))) {
					$pyjs['track']['lineno']=46;
					$pyjs['track']['lineno']=46;
					var $pyjs__ret = $p['tuple']([$p['__op_add']($add1=$p['getattr'](self, 'mouseMove')['__getitem__']('x'),$add2=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add3=$p['getattr'](self, 'mouseMove')['__getitem__']('y'),$add4=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=48;
					$pyjs['track']['lineno']=48;
					var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_pos'] = $method;
			$pyjs['track']['lineno']=50;
			$method = $pyjs__bind_method2('get_rel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80c9b46767ea6140ff9c19af1778422c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,rel,$sub3,$sub2,$sub1,$sub4;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=54;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=55;
					rel = $p['tuple']([$p['__op_sub']($sub1=$p['getattr'](self, 'mouseMove')['__getitem__']('x'),$sub2=$p['getattr'](self, 'mouseMoveRel')['__getitem__']('x')), $p['__op_sub']($sub3=$p['getattr'](self, 'mouseMove')['__getitem__']('y'),$sub4=$p['getattr'](self, 'mouseMoveRel')['__getitem__']('y'))]);
					$pyjs['track']['lineno']=56;
					var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]), 2, null);
					$p['getattr'](self, 'mouseMoveRel')['__setitem__']('x', $tupleassign1[0]);
					$p['getattr'](self, 'mouseMoveRel')['__setitem__']('y', $tupleassign1[1]);
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
					$pyjs['track']['module']='pyjsdl.mouse';
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
						$pyjs['track']['lineno']=58;
						rel = $p['tuple']([$constant_int_0, $constant_int_0]);
						$pyjs['track']['lineno']=59;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'mouseMove')['__getitem__']('x'), (typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2))))) {
							$pyjs['track']['lineno']=60;
							var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'mouseMove')['__getitem__']('x'), $p['getattr'](self, 'mouseMove')['__getitem__']('y')]), 2, null);
							$p['getattr'](self, 'mouseMoveRel')['__setitem__']('x', $tupleassign2[0]);
							$p['getattr'](self, 'mouseMoveRel')['__setitem__']('y', $tupleassign2[1]);
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=61;
				var $pyjs__ret = rel;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_rel'] = $method;
			$pyjs['track']['lineno']=63;
			$method = $pyjs__bind_method2('set_visible', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80c9b46767ea6140ff9c19af1778422c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=67;
				if ($p['bool'](visible)) {
					$pyjs['track']['lineno']=68;
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'mouseCursor')))) {
						$pyjs['track']['lineno']=69;
						$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', 'default');
						$pyjs['track']['lineno']=70;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseCursor', true) : $p['setattr'](self, 'mouseCursor', true); 
					}
				}
				else {
					$pyjs['track']['lineno']=72;
					if ($p['bool']($p['getattr'](self, 'mouseCursor'))) {
						$pyjs['track']['lineno']=73;
						$m['DOM']['setStyleAttribute']($m['env']['canvas']['getElement'](), 'cursor', 'none');
						$pyjs['track']['lineno']=74;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseCursor', false) : $p['setattr'](self, 'mouseCursor', false); 
					}
				}
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=75;
				var $pyjs__ret = $p['getattr'](self, 'mouseCursor');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['visible']]);
			$cls_definition['set_visible'] = $method;
			$pyjs['track']['lineno']=77;
			$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '80c9b46767ea6140ff9c19af1778422c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda4,$lambda3,$lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.mouse', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mouse';
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=81;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mouse','lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mouse';
					$pyjs['track']['lineno']=81;
					$pyjs['track']['lineno']=81;
					$pyjs['track']['lineno']=81;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_pos', $lambda1) : $p['setattr'](self, 'set_pos', $lambda1); 
				$pyjs['track']['lineno']=82;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mouse','lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mouse';
					$pyjs['track']['lineno']=82;
					$pyjs['track']['lineno']=82;
					$pyjs['track']['lineno']=82;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_focused', $lambda2) : $p['setattr'](self, 'get_focused', $lambda2); 
				$pyjs['track']['lineno']=83;
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mouse','lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mouse';
					$pyjs['track']['lineno']=83;
					$pyjs['track']['lineno']=83;
					$pyjs['track']['lineno']=83;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_cursor', $lambda3) : $p['setattr'](self, 'set_cursor', $lambda3); 
				$pyjs['track']['lineno']=84;
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mouse','lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mouse';
					$pyjs['track']['lineno']=84;
					$pyjs['track']['lineno']=84;
					$pyjs['track']['lineno']=84;
					var $pyjs__ret = $p['tuple']([]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_cursor', $lambda4) : $p['setattr'](self, 'get_cursor', $lambda4); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=12;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Mouse', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.mouse */


/* end module: pyjsdl.mouse */


/*
PYJS_DEPS: ['env', 'pyjsdl.event', 'pyjsdl', 'pyjsobj.DOM', 'pyjsobj']
*/
