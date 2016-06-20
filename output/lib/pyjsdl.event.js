/* start module: pyjsdl.event */
$pyjs['loaded_modules']['pyjsdl.event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.event']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.event'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.event'];
	$m['__repr__'] = function() { return '<module: pyjsdl.event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.event';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['event'] = $pyjs['loaded_modules']['pyjsdl.event'];


	$m['env'] = $p['___import___']('env', 'pyjsdl');
	$m['time'] = $p['___import___']('time', 'pyjsdl');
	$m['Const'] = $p['___import___']('locals', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Event'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['eventQueue'] = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range'](256);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				$collcomp1['append'](null);
			}

	return $collcomp1;}();
			self['eventNum'] = 0;
			self['eventQueueTmp'] = function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$iter2_array;
	$collcomp2 = $p['list']();
			$iter2_iter = $p['range'](256);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				$collcomp2['append'](null);
			}

	return $collcomp2;}();
			self['eventNumTmp'] = 0;
			self['queueLock'] = false;
			self['queueAccess'] = false;
			self['queue'] = $p['list']([]);
			self['mousePress'] = $p['dict']([[0, false], [1, false], [2, false]]);
			self['mouseMove'] = $p['dict']([['x', (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))], ['y', (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))]]);
			self['mouseMoveRel'] = $p['dict']([['x', null], ['y', null]]);
			self['keyPress'] = $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), false], [$p['getattr']($m['Const'], 'K_CTRL'), false], [$p['getattr']($m['Const'], 'K_SHIFT'), false]]);
			self['keyMod'] = $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_ALT')], [false, 0]])], [$p['getattr']($m['Const'], 'K_CTRL'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_CTRL')], [false, 0]])], [$p['getattr']($m['Const'], 'K_SHIFT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_SHIFT')], [false, 0]])]]);
			self['mouseCursor'] = true;
			self['timer'] = $m['time']['Clock']();
			self['eventName'] = $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']]);
			self['eventType'] = $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']);
			self['events'] = $p['set']($p['getattr'](self, 'eventType'));
			self['eventTypes'] = $p['dict']([[$p['getattr']($m['Const'], 'MOUSEMOTION'), $p['list'](['mousemove'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONDOWN'), $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONUP'), $p['list'](['mouseup'])], [$p['getattr']($m['Const'], 'KEYDOWN'), $p['list'](['keydown', 'keypress'])], [$p['getattr']($m['Const'], 'KEYUP'), $p['list'](['keyup'])]]);
			if ($p['bool']($p['getattr']($p['getattr']($m['env'], 'pyjs_mode'), 'optimized'))) {
				self['modKey'] = $p['set']($p['list']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]));
				self['specialKey'] = $p['set']($p['list']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]));
			}
			else {
				self['modKey'] = $p['set'](function(){
					var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,keycode;
	$collcomp3 = $p['list']();
				$iter3_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					keycode = $iter3_nextval['$nextval'];
					$collcomp3['append'](keycode['valueOf']());
				}

	return $collcomp3;}());
				self['specialKey'] = $p['set'](function(){
					var $iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,keycode;
	$collcomp4 = $p['list']();
				$iter4_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					keycode = $iter4_nextval['$nextval'];
					$collcomp4['append'](keycode['valueOf']());
				}

	return $collcomp4;}());
			}
			self['Event'] = (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent);
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_lock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['queueLock'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_lock'] = $method;
		$method = $pyjs__bind_method2('_unlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['queueLock'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_unlock'] = $method;
		$method = $pyjs__bind_method2('_updateQueue', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			if ($p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')))) {
				return null;
			}
			self['queueAccess'] = true;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'queueLock')))) {
				if ($p['bool']($p['getattr'](self, 'eventNumTmp'))) {
					self['_appendMerge']();
				}
				self['_append'](event);
			}
			else {
				self['_appendTmp'](event);
			}
			self['queueAccess'] = false;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_updateQueue'] = $method;
		$method = $pyjs__bind_method2('_append', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add2,$add1;
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), 255) == -1))) {
				$p['getattr'](self, 'eventQueue')['__setitem__']($p['getattr'](self, 'eventNum'), event);
				self['eventNum'] = $p['__op_add']($add1=$p['getattr'](self, 'eventNum'),$add2=1);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_append'] = $method;
		$method = $pyjs__bind_method2('_appendTmp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add3,$add4;
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNumTmp'), 255) == -1))) {
				$p['getattr'](self, 'eventQueueTmp')['__setitem__']($p['getattr'](self, 'eventNumTmp'), event);
				self['eventNumTmp'] = $p['__op_add']($add3=$p['getattr'](self, 'eventNumTmp'),$add4=1);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_appendTmp'] = $method;
		$method = $pyjs__bind_method2('_appendMerge', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,i,$iter5_idx,$iter5_iter,$iter5_array,$iter5_type;
			$iter5_iter = $p['range']($p['getattr'](self, 'eventNumTmp'));
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				i = $iter5_nextval['$nextval'];
				self['_append']($p['getattr'](self, 'eventQueueTmp')['__getitem__'](i));
				$p['getattr'](self, 'eventQueueTmp')['__setitem__'](i, null);
			}
			self['eventNumTmp'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_appendMerge'] = $method;
		$method = $pyjs__bind_method2('pump', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), 250) == 1))) {
				self['_lock']();
				self['_pump']();
				self['_unlock']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pump'] = $method;
		$method = $pyjs__bind_method2('_pump', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_idx,$iter6_type,queue,i,$iter6_array,$sub2,$sub1,$iter6_iter,$iter6_nextval;
			queue = $p['__getslice']($p['getattr'](self, 'eventQueue'), 50, $p['getattr'](self, 'eventNum'));
			self['eventNum'] = $p['__op_sub']($sub1=$p['getattr'](self, 'eventNum'),$sub2=50);
			$iter6_iter = $p['range']($p['getattr'](self, 'eventNum'));
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				i = $iter6_nextval['$nextval'];
				$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_pump'] = $method;
		$method = $pyjs__bind_method2('get', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var evtType,$iter12_iter,i,$iter11_type,$iter12_array,$iter11_array,queue,$iter11_iter,$iter11_nextval,$iter11_idx,$iter12_idx,$iter12_nextval,$iter12_type;
			self['_lock']();
			if ($p['bool'](!$p['bool'](eventType))) {
				self['queue'] = function(){
					var $iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,event;
	$collcomp5 = $p['list']();
				$iter7_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), 0, $p['getattr'](self, 'eventNum'));
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					event = $iter7_nextval['$nextval'];
					$collcomp5['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event));
				}

	return $collcomp5;}();
				self['eventNum'] = 0;
			}
			else {
				if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
					evtType = function(){
						var $iter8_idx,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,et;
	$collcomp6 = $p['list']();
					$iter8_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						et = $iter8_nextval['$nextval'];
						$collcomp6['append'](et);
					}

	return $collcomp6;}();
				}
				else {
					evtType = function(){
						var $iter10_nextval,$iter9_iter,$collcomp7,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,t,$iter10_type,et,$iter10_iter,$iter9_array;
	$collcomp7 = $p['list']();
					$iter9_iter = eventType;
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						t = $iter9_nextval['$nextval'];
						$iter10_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
						$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
						while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
							et = $iter10_nextval['$nextval'];
							$collcomp7['append'](et);
						}
					}

	return $collcomp7;}();
				}
				queue = $p['list']([]);
				self['queue'] = $p['list']([]);
				$iter11_iter = $p['range']($p['getattr'](self, 'eventNum'));
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					i = $iter11_nextval['$nextval'];
					if ($p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')))) {
						queue['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
					}
					else {
						self['queue']['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)($p['getattr'](self, 'eventQueue')['__getitem__'](i)));
					}
				}
				if ($p['bool'](!$p['op_eq']($p['len'](queue), $p['getattr'](self, 'eventNum')))) {
					self['eventNum'] = $p['len'](queue);
					$iter12_iter = $p['range']($p['getattr'](self, 'eventNum'));
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						i = $iter12_nextval['$nextval'];
						$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
					}
				}
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), 250) == 1))) {
					self['_pump']();
				}
			}
			self['_unlock']();
			return $p['getattr'](self, 'queue');
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('poll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,evt,$sub4;
			self['_lock']();
			if ($p['bool']($p['getattr'](self, 'eventNum'))) {
				evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop'](0));
				self['eventNum'] = $p['__op_sub']($sub3=$p['getattr'](self, 'eventNum'),$sub4=1);
				self['eventQueue']['append'](null);
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), 250) == 1))) {
					self['_pump']();
				}
			}
			else {
				evt = self['Event']($p['getattr']($m['Const'], 'NOEVENT'));
			}
			self['_unlock']();
			return evt;
		}
	, 1, [null,null,['self']]);
		$cls_definition['poll'] = $method;
		$method = $pyjs__bind_method2('wait', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var evt,$sub6,$sub5;
			while ($p['bool'](true)) {
				if ($p['bool']($p['getattr'](self, 'eventNum'))) {
					self['_lock']();
					evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop'](0));
					self['eventNum'] = $p['__op_sub']($sub5=$p['getattr'](self, 'eventNum'),$sub6=1);
					self['eventQueue']['append'](null);
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), 250) == 1))) {
						self['_pump']();
					}
					self['_unlock']();
					return evt;
				}
				else {
					self['_unlock']();
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['wait'] = $method;
		$method = $pyjs__bind_method2('peek', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType,$iter17_nextval,$iter17_iter,et,$iter17_array,$iter17_idx,$iter17_type,evt;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')))) {
				return false;
			}
			if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
				evtType = function(){
					var $iter13_nextval,$iter13_iter,$collcomp8,$iter13_type,$iter13_idx,et,$iter13_array;
	$collcomp8 = $p['list']();
				$iter13_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					et = $iter13_nextval['$nextval'];
					$collcomp8['append'](et);
				}

	return $collcomp8;}();
			}
			else {
				evtType = function(){
					var $iter14_array,$iter14_type,$iter15_iter,$collcomp9,et,$iter15_array,$iter15_idx,t,$iter14_iter,$iter15_type,$iter15_nextval,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
				$iter14_iter = eventType;
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					t = $iter14_nextval['$nextval'];
					$iter15_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						et = $iter15_nextval['$nextval'];
						$collcomp9['append'](et);
					}
				}

	return $collcomp9;}();
			}
			self['_lock']();
			evt = function(){
				var $iter16_array,$iter16_type,$iter16_idx,$collcomp10,$iter16_nextval,$iter16_iter,event;
	$collcomp10 = $p['list']();
			$iter16_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), 0, $p['getattr'](self, 'eventNum'));
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				event = $iter16_nextval['$nextval'];
				$collcomp10['append']($p['getattr'](event, 'type'));
			}

	return $collcomp10;}();
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), 250) == 1))) {
				self['_pump']();
			}
			self['_unlock']();
			$iter17_iter = evtType;
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				et = $iter17_nextval['$nextval'];
				if ($p['bool'](evt['__contains__'](et))) {
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['peek'] = $method;
		$method = $pyjs__bind_method2('clear', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var evtType,$iter21_type,$iter21_idx,$iter22_array,i,$iter21_nextval,$iter22_nextval,$iter22_idx,queue,$iter21_iter,$iter22_type,$iter21_array,$iter22_iter;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')))) {
				return null;
			}
			self['_lock']();
			if ($p['bool']((eventType === null))) {
				self['eventNum'] = 0;
			}
			else {
				if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
					evtType = function(){
						var $iter18_type,$iter18_iter,$iter18_array,$iter18_idx,$collcomp11,et,$iter18_nextval;
	$collcomp11 = $p['list']();
					$iter18_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						et = $iter18_nextval['$nextval'];
						$collcomp11['append'](et);
					}

	return $collcomp11;}();
				}
				else {
					evtType = function(){
						var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$collcomp12,$iter20_type,et,$iter20_array,t;
	$collcomp12 = $p['list']();
					$iter19_iter = eventType;
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						t = $iter19_nextval['$nextval'];
						$iter20_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
						$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
						while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
							et = $iter20_nextval['$nextval'];
							$collcomp12['append'](et);
						}
					}

	return $collcomp12;}();
				}
				queue = $p['list']([]);
				$iter21_iter = $p['range']($p['getattr'](self, 'eventNum'));
				$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
				while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
					i = $iter21_nextval['$nextval'];
					if ($p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')))) {
						queue['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
					}
				}
				if ($p['bool'](!$p['op_eq']($p['len'](queue), $p['getattr'](self, 'eventNum')))) {
					self['eventNum'] = $p['len'](queue);
					$iter22_iter = $p['range']($p['getattr'](self, 'eventNum'));
					$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
					while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
						i = $iter22_nextval['$nextval'];
						$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
					}
				}
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), 250) == 1))) {
					self['_pump']();
				}
			}
			self['_unlock']();
			return null;
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('event_name', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType;
			evtType = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType)['__getitem__'](0);
			if ($p['bool']($p['getattr'](self, 'eventName')['__contains__'](evtType))) {
				return $p['getattr'](self, 'eventName')['__getitem__'](evtType);
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['event_name'] = $method;
		$method = $pyjs__bind_method2('set_blocked', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType,$iter27_nextval,$iter26_idx,$iter26_nextval,$iter26_type,$iter27_array,$iter27_iter,$iter27_idx,et,$iter26_array,$iter26_iter,event,$iter27_type;
			if ($p['bool']((eventType !== null))) {
				if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
					evtType = function(){
						var $iter23_type,$iter23_nextval,$iter23_iter,$iter23_idx,$iter23_array,et,$collcomp13;
	$collcomp13 = $p['list']();
					$iter23_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
						et = $iter23_nextval['$nextval'];
						$collcomp13['append'](et);
					}

	return $collcomp13;}();
				}
				else {
					evtType = function(){
						var $collcomp14,$iter24_idx,$iter25_array,$iter25_nextval,$iter25_iter,$iter24_type,$iter24_array,t,$iter25_idx,et,$iter25_type,$iter24_iter,$iter24_nextval;
	$collcomp14 = $p['list']();
					$iter24_iter = eventType;
					$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
					while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
						t = $iter24_nextval['$nextval'];
						$iter25_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
						$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
						while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
							et = $iter25_nextval['$nextval'];
							$collcomp14['append'](et);
						}
					}

	return $collcomp14;}();
				}
				$iter26_iter = evtType;
				$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
				while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
					et = $iter26_nextval['$nextval'];
					if ($p['bool']($p['getattr'](self, 'events')['__contains__'](et))) {
						self['events']['remove'](et);
					}
				}
			}
			else {
				$iter27_iter = $p['getattr'](self, 'eventType');
				$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
				while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
					event = $iter27_nextval['$nextval'];
					self['events']['add'](event);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['set_blocked'] = $method;
		$method = $pyjs__bind_method2('set_allowed', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType,$iter31_array,$iter31_nextval,$iter31_idx,$iter31_type,et,$iter31_iter;
			if ($p['bool']((eventType !== null))) {
				if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
					evtType = function(){
						var $iter28_array,$iter28_nextval,$iter28_idx,$collcomp15,et,$iter28_iter,$iter28_type;
	$collcomp15 = $p['list']();
					$iter28_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
					$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
					while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
						et = $iter28_nextval['$nextval'];
						$collcomp15['append'](et);
					}

	return $collcomp15;}();
				}
				else {
					evtType = function(){
						var $iter30_type,$iter30_nextval,$iter29_type,$iter29_iter,$collcomp16,$iter29_nextval,$iter30_array,t,et,$iter30_idx,$iter29_idx,$iter30_iter,$iter29_array;
	$collcomp16 = $p['list']();
					$iter29_iter = eventType;
					$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
					while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
						t = $iter29_nextval['$nextval'];
						$iter30_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
						$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
						while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
							et = $iter30_nextval['$nextval'];
							$collcomp16['append'](et);
						}
					}

	return $collcomp16;}();
				}
				$iter31_iter = evtType;
				$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
				while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
					et = $iter31_nextval['$nextval'];
					self['events']['add'](et);
				}
			}
			else {
				self['events']['clear']();
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['set_allowed'] = $method;
		$method = $pyjs__bind_method2('get_blocked', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType;
			evtType = function(){
				var $iter32_type,$iter32_idx,$iter32_nextval,$collcomp17,$iter32_iter,$iter32_array,et;
	$collcomp17 = $p['list']();
			$iter32_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
			$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
			while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
				et = $iter32_nextval['$nextval'];
				$collcomp17['append'](et);
			}

	return $collcomp17;}()['__getitem__'](0);
			if ($p['bool'](!$p['getattr'](self, 'events')['__contains__'](evtType))) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['get_blocked'] = $method;
		$method = $pyjs__bind_method2('post', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['_lock']();
			self['_append'](event);
			if ($p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')))) {
				$p['getattr'](self, 'eventTypes')['__setitem__']($p['getattr'](event, 'type'), $p['list']([$p['getattr'](event, 'type')]));
			}
			self['_unlock']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['post'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['set_grab'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_grab'] = $lambda2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Event', $p['tuple']($bases), $data);
	})();
	$m['UserEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'attr']);
		$method = $pyjs__bind_method2('__init__', function(eventType) {
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
			} else {
				var self = arguments[0];
				eventType = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof eventType != 'undefined') {
					if (eventType !== null && typeof eventType['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = eventType;
						eventType = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var attr;
			if ($p['bool'](args)) {
				attr = args['__getitem__'](0);
			}
			else {
				attr = kwargs;
			}
			$p['object']['__setattr__'](self, 'type', eventType);
			$p['object']['__setattr__'](self, 'attr', attr);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['eventType']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s(%s-UserEvent %r)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'type'), $p['getattr'](self, 'attr')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, 'attr')['__contains__'](attr))) {
				return $p['getattr'](self, 'attr')['__getitem__'](attr);
			}
			else {
				throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(attr, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
				value = arguments[2];
			}

			throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
			return null;
		}
	, 1, [null,null,['self'],['attr'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UserEvent', $p['tuple']($bases), $data);
	})();
	$m['JEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['_mouse_pos'] = $p['tuple']([0, 0]);
		$cls_definition['_types'] = $p['dict']([['mousemove', $p['getattr']($m['Const'], 'MOUSEMOTION')], ['mousedown', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mouseup', $p['getattr']($m['Const'], 'MOUSEBUTTONUP')], ['wheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mousewheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['DOMMouseScroll', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['keydown', $p['getattr']($m['Const'], 'KEYDOWN')], ['keypress', $p['getattr']($m['Const'], 'KEYDOWN')], ['keyup', $p['getattr']($m['Const'], 'KEYUP')]]);
		$cls_definition['_charCode'] = $p['dict']([[33, $p['getattr']($m['Const'], 'K_EXCLAIM')], [34, $p['getattr']($m['Const'], 'K_QUOTEDBL')], [35, $p['getattr']($m['Const'], 'K_HASH')], [36, $p['getattr']($m['Const'], 'K_DOLLAR')], [38, $p['getattr']($m['Const'], 'K_AMPERSAND')], [39, $p['getattr']($m['Const'], 'K_QUOTE')], [40, $p['getattr']($m['Const'], 'K_LEFTPAREN')], [41, $p['getattr']($m['Const'], 'K_RIGHTPAREN')], [42, $p['getattr']($m['Const'], 'K_ASTERISK')], [43, $p['getattr']($m['Const'], 'K_PLUS')], [44, $p['getattr']($m['Const'], 'K_COMMA')], [45, $p['getattr']($m['Const'], 'K_MINUS')], [46, $p['getattr']($m['Const'], 'K_PERIOD')], [97, $p['getattr']($m['Const'], 'K_a')], [98, $p['getattr']($m['Const'], 'K_b')], [99, $p['getattr']($m['Const'], 'K_c')], [100, $p['getattr']($m['Const'], 'K_d')], [101, $p['getattr']($m['Const'], 'K_e')], [102, $p['getattr']($m['Const'], 'K_f')], [103, $p['getattr']($m['Const'], 'K_g')], [104, $p['getattr']($m['Const'], 'K_h')], [105, $p['getattr']($m['Const'], 'K_i')], [106, $p['getattr']($m['Const'], 'K_j')], [107, $p['getattr']($m['Const'], 'K_k')], [108, $p['getattr']($m['Const'], 'K_l')], [109, $p['getattr']($m['Const'], 'K_m')], [110, $p['getattr']($m['Const'], 'K_n')], [111, $p['getattr']($m['Const'], 'K_o')], [112, $p['getattr']($m['Const'], 'K_p')], [113, $p['getattr']($m['Const'], 'K_q')], [114, $p['getattr']($m['Const'], 'K_r')], [115, $p['getattr']($m['Const'], 'K_s')], [116, $p['getattr']($m['Const'], 'K_t')], [117, $p['getattr']($m['Const'], 'K_u')], [118, $p['getattr']($m['Const'], 'K_v')], [119, $p['getattr']($m['Const'], 'K_w')], [120, $p['getattr']($m['Const'], 'K_x')], [121, $p['getattr']($m['Const'], 'K_y')], [122, $p['getattr']($m['Const'], 'K_z')]]);
		$method = $pyjs__bind_method2('__init__', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter33_iter,code,$iter33_idx,$iter33_type,$add20,$sub9,$sub8,$sub7,$iter33_nextval,$sub10,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$iter33_array,attr,$add6,$add7,$add5,$add8,$add9;
			self['event'] = event;
			if ($p['bool']($p['tuple'](['mousedown', 'mouseup'])['__contains__']($p['getattr'](event, 'type')))) {
				self['type'] = $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'));
				self['button'] = $p['__op_add']($add5=$p['getattr'](event, 'button'),$add6=1);
				self['pos'] = $p['tuple']([$p['__op_add']($add7=$p['getattr'](event, 'pos')['__getitem__'](0),$add8=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add9=$p['getattr'](event, 'pos')['__getitem__'](1),$add10=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousemove'))) {
				self['type'] = $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'));
				self['button'] = $p['__op_add']($add11=$p['getattr'](event, 'button'),$add12=1);
				self['pos'] = $p['tuple']([$p['__op_add']($add13=$p['getattr'](event, 'pos')['__getitem__'](0),$add14=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add15=$p['getattr'](event, 'pos')['__getitem__'](1),$add16=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
				self['rel'] = $p['tuple']([$p['__op_sub']($sub7=$p['getattr'](self, 'pos')['__getitem__'](0),$sub8=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__'](0)), $p['__op_sub']($sub9=$p['getattr'](self, 'pos')['__getitem__'](1),$sub10=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__'](1))]);
				$p['getattr'](self, '__class__')['_mouse_pos'] = $p['getattr'](self, 'pos');
			}
			else if ($p['bool']($p['tuple'](['wheel', 'mousewheel', 'DOMMouseScroll'])['__contains__']($p['getattr'](event, 'type')))) {
				self['type'] = $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'));
				self['button'] = $p['getattr'](event, 'btn');
				self['pos'] = $p['tuple']([$p['__op_add']($add17=$p['getattr'](event, 'pos')['__getitem__'](0),$add18=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add19=$p['getattr'](event, 'pos')['__getitem__'](1),$add20=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))]);
			}
			else if ($p['bool']($p['tuple'](['keydown', 'keyup'])['__contains__']($p['getattr'](event, 'type')))) {
				self['type'] = $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'));
				self['key'] = $p['getattr'](event, 'keyCode');
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'keypress'))) {
				self['type'] = $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'));
				if ($p['bool']($p['getattr'](event, 'keyCode'))) {
					code = $p['getattr'](event, 'keyCode');
				}
				else {
					code = $p['getattr'](event, 'which');
				}
				if ($p['bool']($p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__contains__'](code))) {
					self['key'] = $p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__getitem__'](code);
				}
				else {
					self['key'] = code;
				}
			}
			else {
				self['type'] = $p['getattr'](event, 'type');
				$iter33_iter = $p['getattr'](event, 'attr');
				$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
				while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
					attr = $iter33_nextval['$nextval'];
					$p['object']['__setattr__'](self, attr, $p['getattr'](event, 'attr')['__getitem__'](attr));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['hasattr']($p['getattr'](self, 'event'), 'toString'))) {
				return $p['sprintf']('%s(%s)', $p['tuple']([$p['getattr'](self, '__class__'), self['event']['toString']()]));
			}
			else {
				return self['event']['__repr__']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('getEvent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'event');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('JEvent', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.event */


/* end module: pyjsdl.event */


/*
PYJS_DEPS: ['env', 'time', 'locals']
*/
