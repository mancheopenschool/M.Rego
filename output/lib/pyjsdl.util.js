/* start module: pyjsdl.util */
$pyjs['loaded_modules']['pyjsdl.util'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.util']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.util'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.util'];
	$m['__repr__'] = function() { return '<module: pyjsdl.util>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.util';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['util'] = $pyjs['loaded_modules']['pyjsdl.util'];


	$m['Time'] = $p['___import___']('time.Time', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('env', 'pyjsdl');
	$m['Timer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.util';
		$method = $pyjs__bind_method2('__init__', function(log, log_length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				log = arguments[1];
				log_length = arguments[2];
			}
			if (typeof log == 'undefined') log=arguments['callee']['__args__'][3][1];
			if (typeof log_length == 'undefined') log_length=arguments['callee']['__args__'][4][1];

			self['time'] = $m['Time']();
			self['time_i'] = self['get_time']();
			self['dtime'] = $p['list']([]);
			self['number'] = 0;
			self['log'] = null;
			self['log_list'] = null;
			self['log_num'] = 0;
			self['log_scroll'] = true;
			self['set_log'](log, log_length);
			return null;
		}
	, 1, [null,null,['self'],['log', 'console'],['log_length', 5]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['time']['time']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_time'] = $method;
		$method = $pyjs__bind_method2('set_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['time_i'] = self['get_time']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['set_time'] = $method;
		$method = $pyjs__bind_method2('lap_time', function(time_i, time_f, number, print_result) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time_i = arguments[1];
				time_f = arguments[2];
				number = arguments[3];
				print_result = arguments[4];
			}
			if (typeof time_i == 'undefined') time_i=arguments['callee']['__args__'][3][1];
			if (typeof time_f == 'undefined') time_f=arguments['callee']['__args__'][4][1];
			if (typeof number == 'undefined') number=arguments['callee']['__args__'][5][1];
			if (typeof print_result == 'undefined') print_result=arguments['callee']['__args__'][6][1];
			var $add6,$add5,$add2,$add3,$add1,t_ave,$add4,entry,$div2,$sub2,$sub1,$div1;
			if ($p['bool']((time_i === null))) {
				time_i = $p['getattr'](self, 'time_i');
			}
			if ($p['bool']((time_f === null))) {
				time_f = self['get_time']();
			}
			self['dtime']['append']($p['__op_sub']($sub1=time_f,$sub2=time_i));
			self['number'] = $p['__op_add']($add1=$p['getattr'](self, 'number'),$add2=1);
			if ($p['bool'](((($p['cmp']($p['getattr'](self, 'number'), number))|1) == 1))) {
				t_ave = (typeof ($div1=$p['sum']($p['getattr'](self, 'dtime')))==typeof ($div2=number) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
				self['dtime'] = $p['list']([]);
				self['number'] = 0;
				if ($p['bool'](print_result)) {
					if ($p['bool']($p['op_eq']($p['getattr'](self, 'log_type'), 'console'))) {
						self['log_num'] = $p['__op_add']($add3=$p['getattr'](self, 'log_num'),$add4=1);
						entry = $p['sprintf']('Time %d: %s', $p['tuple']([$p['getattr'](self, 'log_num'), t_ave]));
						$p['printFunc']([entry], 1);
					}
					else {
						self['log_num'] = $p['__op_add']($add5=$p['getattr'](self, 'log_num'),$add6=1);
						entry = $p['sprintf']('Time %d: %s', $p['tuple']([$p['getattr'](self, 'log_num'), t_ave]));
						self['print_log'](entry);
					}
				}
				return t_ave;
			}
			return null;
		}
	, 1, [null,null,['self'],['time_i', null],['time_f', null],['number', 100],['print_result', true]]);
		$cls_definition['lap_time'] = $method;
		$method = $pyjs__bind_method2('set_log', function(log, log_length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				log = arguments[1];
				log_length = arguments[2];
			}
			if (typeof log_length == 'undefined') log_length=arguments['callee']['__args__'][4][1];
			var $lambda3,$lambda1,$lambda2,$sub3,$sub4,size;
			if ($p['bool']($p['tuple'](['console', 'textarea'])['__contains__'](log))) {
				self['log_type'] = log;
				if ($p['bool']($p['op_eq'](log, 'textarea'))) {
					if ($p['bool'](!$p['bool']($p['getattr'](self, 'log')))) {
						size = $p['tuple']([$p['__op_sub']($sub3=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub4=5), 102]);
						self['log'] = $m['env']['canvas']['surface']['_display']['Textarea'](size);
						self['log']['setReadonly'](true);
						self['log']['addMouseListener'](self);
						var 						$lambda1 = function(sender, x, y) {

							return null;
						};
						$lambda1['__name__'] = '$lambda1';

						$lambda1['__bind_type__'] = 0;
						$lambda1['__args__'] = [null,null,['sender'],['x'],['y']];
						self['onMouseUp'] = $lambda1;
						var 						$lambda2 = function(sender, x, y) {

							return null;
						};
						$lambda2['__name__'] = '$lambda2';

						$lambda2['__bind_type__'] = 0;
						$lambda2['__args__'] = [null,null,['sender'],['x'],['y']];
						self['onMouseMove'] = $lambda2;
						var 						$lambda3 = function(sender) {

							return null;
						};
						$lambda3['__name__'] = '$lambda3';

						$lambda3['__bind_type__'] = 0;
						$lambda3['__args__'] = [null,null,['sender']];
						self['onMouseEnter'] = $lambda3;
						self['log_list'] = function(){
							var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
						$iter1_iter = $p['range'](log_length);
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
							i = $iter1_nextval['$nextval'];
							$collcomp1['append']('');
						}

	return $collcomp1;}();
					}
					self['log']['toggle'](true);
				}
				else {
					if ($p['bool']($p['getattr'](self, 'log'))) {
						self['log']['toggle'](false);
						self['log_list'] = $p['list']([]);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['log'],['log_length', 5]]);
		$cls_definition['set_log'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['log_scroll'] = false;
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['log_scroll'] = true;
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('print_log', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $add8,$add7;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'log_type'), 'console'))) {
				$p['printFunc']([text], 1);
			}
			else {
				self['log_list']['pop'](0);
				self['log_list']['append']($p['__op_add']($add7=text,$add8='\n'));
				text = ''['join']($p['getattr'](self, 'log_list'));
				self['log']['setText'](text);
				if ($p['bool']($p['getattr'](self, 'log_scroll'))) {
					self['log']['setCursorPos']($p['len'](text));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['print_log'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Timer', $p['tuple']($bases), $data);
	})();
	$m['Pyjs_Mode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.util';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			var $tupleassign1 = $p['__ass_unpack'](self['_setmode'](), 2, null);
			self['strict'] = $tupleassign1[0];
			self['optimized'] = $tupleassign1[1];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}

			if ($p['bool']($p['op_eq'](attr, '__strict_mode'))) {
				return true;
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('_setmode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, '__strict_mode'), true))) {
				return $p['tuple']([true, false]);
			}
			else {
				return $p['tuple']([false, true]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_setmode'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Pyjs_Mode', $p['tuple']($bases), $data);
	})();
	$m['env']['pyjs_mode'] = $m['Pyjs_Mode']();
	$m['$$call'] = function(obj, func, args) {
		if (typeof args == 'undefined') args=arguments['callee']['__args__'][4][1];

		return func.apply(obj, args['getArray']());;
	};
	$m['$$call']['__name__'] = 'call';

	$m['$$call']['__bind_type__'] = 0;
	$m['$$call']['__args__'] = [null,null,['obj'],['func'],['args', $p['tuple']([])]];
	return this;
}; /* end pyjsdl.util */


/* end module: pyjsdl.util */


/*
PYJS_DEPS: ['time.Time', 'time', 'env']
*/
