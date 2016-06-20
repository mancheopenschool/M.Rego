/* start module: pyjsdl.util */
$pyjs['loaded_modules']['pyjsdl.util'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.util']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.util'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.util'];
	$m['__repr__'] = function() { return '<module: pyjsdl.util>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.util';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['util'] = $pyjs['loaded_modules']['pyjsdl.util'];
	try {
		$m.__track_lines__[128] = 'pyjsdl.util.py, line 128:\n    env.pyjs_mode = Pyjs_Mode()';
		$m.__track_lines__[1] = 'pyjsdl.util.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[131] = 'pyjsdl.util.py, line 131:\n    def call(obj, func, args=()):';
		$m.__track_lines__[4] = 'pyjsdl.util.py, line 4:\n    from time import Time';
		$m.__track_lines__[5] = 'pyjsdl.util.py, line 5:\n    from __pyjamas__ import JS';
		$m.__track_lines__[6] = 'pyjsdl.util.py, line 6:\n    import env';
		$m.__track_lines__[9] = 'pyjsdl.util.py, line 9:\n    class Timer(object):';
		$m.__track_lines__[16] = "pyjsdl.util.py, line 16:\n    def __init__(self, log='console', log_length=5):";
		$m.__track_lines__[17] = 'pyjsdl.util.py, line 17:\n    self.time = Time()';
		$m.__track_lines__[18] = 'pyjsdl.util.py, line 18:\n    self.time_i = self.get_time()';
		$m.__track_lines__[19] = 'pyjsdl.util.py, line 19:\n    self.dtime = []';
		$m.__track_lines__[20] = 'pyjsdl.util.py, line 20:\n    self.number = 0';
		$m.__track_lines__[21] = 'pyjsdl.util.py, line 21:\n    self.log = None';
		$m.__track_lines__[22] = 'pyjsdl.util.py, line 22:\n    self.log_list = None';
		$m.__track_lines__[23] = 'pyjsdl.util.py, line 23:\n    self.log_num = 0';
		$m.__track_lines__[24] = 'pyjsdl.util.py, line 24:\n    self.log_scroll = True';
		$m.__track_lines__[25] = 'pyjsdl.util.py, line 25:\n    self.set_log(log, log_length)';
		$m.__track_lines__[27] = 'pyjsdl.util.py, line 27:\n    def get_time(self):';
		$m.__track_lines__[31] = 'pyjsdl.util.py, line 31:\n    return self.time.time()';
		$m.__track_lines__[33] = 'pyjsdl.util.py, line 33:\n    def set_time(self):';
		$m.__track_lines__[37] = 'pyjsdl.util.py, line 37:\n    self.time_i = self.get_time()';
		$m.__track_lines__[39] = 'pyjsdl.util.py, line 39:\n    def lap_time(self, time_i=None, time_f=None, number=100, print_result=True):';
		$m.__track_lines__[44] = 'pyjsdl.util.py, line 44:\n    if time_i is None:';
		$m.__track_lines__[45] = 'pyjsdl.util.py, line 45:\n    time_i = self.time_i';
		$m.__track_lines__[46] = 'pyjsdl.util.py, line 46:\n    if time_f is None:';
		$m.__track_lines__[47] = 'pyjsdl.util.py, line 47:\n    time_f = self.get_time()';
		$m.__track_lines__[48] = 'pyjsdl.util.py, line 48:\n    self.dtime.append(time_f-time_i)';
		$m.__track_lines__[49] = 'pyjsdl.util.py, line 49:\n    self.number += 1';
		$m.__track_lines__[50] = 'pyjsdl.util.py, line 50:\n    if self.number >= number:';
		$m.__track_lines__[51] = 'pyjsdl.util.py, line 51:\n    t_ave = ( sum(self.dtime)/number )';
		$m.__track_lines__[52] = 'pyjsdl.util.py, line 52:\n    self.dtime = []';
		$m.__track_lines__[53] = 'pyjsdl.util.py, line 53:\n    self.number = 0';
		$m.__track_lines__[54] = 'pyjsdl.util.py, line 54:\n    if print_result:';
		$m.__track_lines__[55] = "pyjsdl.util.py, line 55:\n    if self.log_type == 'console':";
		$m.__track_lines__[56] = 'pyjsdl.util.py, line 56:\n    self.log_num += 1';
		$m.__track_lines__[57] = 'pyjsdl.util.py, line 57:\n    entry = "Time %d: %s" % (self.log_num, t_ave)';
		$m.__track_lines__[58] = 'pyjsdl.util.py, line 58:\n    print(entry)';
		$m.__track_lines__[60] = 'pyjsdl.util.py, line 60:\n    self.log_num += 1';
		$m.__track_lines__[61] = 'pyjsdl.util.py, line 61:\n    entry = "Time %d: %s" % (self.log_num, t_ave)';
		$m.__track_lines__[62] = 'pyjsdl.util.py, line 62:\n    self.print_log(entry)';
		$m.__track_lines__[63] = 'pyjsdl.util.py, line 63:\n    return t_ave';
		$m.__track_lines__[65] = 'pyjsdl.util.py, line 65:\n    def set_log(self, log, log_length=5):';
		$m.__track_lines__[70] = "pyjsdl.util.py, line 70:\n    if log in ('console','textarea'):";
		$m.__track_lines__[71] = 'pyjsdl.util.py, line 71:\n    self.log_type = log';
		$m.__track_lines__[72] = "pyjsdl.util.py, line 72:\n    if log == 'textarea':";
		$m.__track_lines__[73] = 'pyjsdl.util.py, line 73:\n    if not self.log:';
		$m.__track_lines__[74] = 'pyjsdl.util.py, line 74:\n    size = env.canvas.surface.width-5, 102';
		$m.__track_lines__[75] = 'pyjsdl.util.py, line 75:\n    self.log = env.canvas.surface._display.Textarea(size)';
		$m.__track_lines__[76] = 'pyjsdl.util.py, line 76:\n    self.log.setReadonly(True)';
		$m.__track_lines__[77] = 'pyjsdl.util.py, line 77:\n    self.log.addMouseListener(self)';
		$m.__track_lines__[78] = 'pyjsdl.util.py, line 78:\n    self.onMouseUp = lambda sender,x,y: None';
		$m.__track_lines__[79] = 'pyjsdl.util.py, line 79:\n    self.onMouseMove = lambda sender,x,y: None';
		$m.__track_lines__[80] = 'pyjsdl.util.py, line 80:\n    self.onMouseEnter = lambda sender: None';
		$m.__track_lines__[81] = "pyjsdl.util.py, line 81:\n    self.log_list = ['' for i in range(log_length)]";
		$m.__track_lines__[82] = 'pyjsdl.util.py, line 82:\n    self.log.toggle(True)';
		$m.__track_lines__[84] = 'pyjsdl.util.py, line 84:\n    if self.log:';
		$m.__track_lines__[85] = 'pyjsdl.util.py, line 85:\n    self.log.toggle(False)';
		$m.__track_lines__[86] = 'pyjsdl.util.py, line 86:\n    self.log_list = []';
		$m.__track_lines__[88] = 'pyjsdl.util.py, line 88:\n    def onMouseDown(self, sender, x, y):';
		$m.__track_lines__[89] = 'pyjsdl.util.py, line 89:\n    self.log_scroll = False';
		$m.__track_lines__[91] = 'pyjsdl.util.py, line 91:\n    def onMouseLeave(self, sender):';
		$m.__track_lines__[92] = 'pyjsdl.util.py, line 92:\n    self.log_scroll = True';
		$m.__track_lines__[94] = 'pyjsdl.util.py, line 94:\n    def print_log(self, text):';
		$m.__track_lines__[98] = "pyjsdl.util.py, line 98:\n    if self.log_type == 'console':";
		$m.__track_lines__[99] = 'pyjsdl.util.py, line 99:\n    print(text)';
		$m.__track_lines__[101] = 'pyjsdl.util.py, line 101:\n    self.log_list.pop(0)';
		$m.__track_lines__[102] = "pyjsdl.util.py, line 102:\n    self.log_list.append(text+'\\n')";
		$m.__track_lines__[103] = "pyjsdl.util.py, line 103:\n    text = ''.join(self.log_list)";
		$m.__track_lines__[104] = 'pyjsdl.util.py, line 104:\n    self.log.setText(text)';
		$m.__track_lines__[105] = 'pyjsdl.util.py, line 105:\n    if self.log_scroll:';
		$m.__track_lines__[106] = 'pyjsdl.util.py, line 106:\n    self.log.setCursorPos(len(text))';
		$m.__track_lines__[109] = 'pyjsdl.util.py, line 109:\n    class Pyjs_Mode:';
		$m.__track_lines__[115] = 'pyjsdl.util.py, line 115:\n    def __init__(self):';
		$m.__track_lines__[116] = 'pyjsdl.util.py, line 116:\n    self.strict, self.optimized = self._setmode()';
		$m.__track_lines__[118] = 'pyjsdl.util.py, line 118:\n    def __getattr__(self, attr):';
		$m.__track_lines__[119] = "pyjsdl.util.py, line 119:\n    if attr == '__strict_mode':";
		$m.__track_lines__[120] = 'pyjsdl.util.py, line 120:\n    return True';
		$m.__track_lines__[137] = 'pyjsdl.util.py, line 137:\n    return JS("""@{{func}}.apply(@{{obj}}, @{{args}}[\'getArray\']());""")';
		$m.__track_lines__[122] = 'pyjsdl.util.py, line 122:\n    def _setmode(self):';
		$m.__track_lines__[123] = 'pyjsdl.util.py, line 123:\n    if self.__strict_mode == True:';
		$m.__track_lines__[124] = 'pyjsdl.util.py, line 124:\n    return True, False';
		$m.__track_lines__[126] = 'pyjsdl.util.py, line 126:\n    return False, True';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_102 = new $p['int'](102);
		$pyjs['track']['module']='pyjsdl.util';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Time'] = $p['___import___']('time.Time', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('env', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$m['Timer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.util';
			$cls_definition['__md5__'] = 'd83524b52335ac2f046d42605aaeb2b8';
			$pyjs['track']['lineno']=16;
			$method = $pyjs__bind_method2('__init__', function(log, log_length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					log = arguments[1];
					log_length = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof log == 'undefined') log=arguments['callee']['__args__'][3][1];
				if (typeof log_length == 'undefined') log_length=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=16;
				$pyjs['track']['lineno']=17;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', $m['Time']()) : $p['setattr'](self, 'time', $m['Time']()); 
				$pyjs['track']['lineno']=18;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_i', self['get_time']()) : $p['setattr'](self, 'time_i', self['get_time']()); 
				$pyjs['track']['lineno']=19;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dtime', $p['list']([])) : $p['setattr'](self, 'dtime', $p['list']([])); 
				$pyjs['track']['lineno']=20;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('number', $constant_int_0) : $p['setattr'](self, 'number', $constant_int_0); 
				$pyjs['track']['lineno']=21;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log', null) : $p['setattr'](self, 'log', null); 
				$pyjs['track']['lineno']=22;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_list', null) : $p['setattr'](self, 'log_list', null); 
				$pyjs['track']['lineno']=23;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_num', $constant_int_0) : $p['setattr'](self, 'log_num', $constant_int_0); 
				$pyjs['track']['lineno']=24;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_scroll', true) : $p['setattr'](self, 'log_scroll', true); 
				$pyjs['track']['lineno']=25;
				self['set_log'](log, log_length);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['log', 'console'],['log_length', $constant_int_5]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=27;
			$method = $pyjs__bind_method2('get_time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=31;
				var $pyjs__ret = self['time']['time']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_time'] = $method;
			$pyjs['track']['lineno']=33;
			$method = $pyjs__bind_method2('set_time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_i', self['get_time']()) : $p['setattr'](self, 'time_i', self['get_time']()); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['set_time'] = $method;
			$pyjs['track']['lineno']=39;
			$method = $pyjs__bind_method2('lap_time', function(time_i, time_f, number, print_result) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					time_i = arguments[1];
					time_f = arguments[2];
					number = arguments[3];
					print_result = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof time_i == 'undefined') time_i=arguments['callee']['__args__'][3][1];
				if (typeof time_f == 'undefined') time_f=arguments['callee']['__args__'][4][1];
				if (typeof number == 'undefined') number=arguments['callee']['__args__'][5][1];
				if (typeof print_result == 'undefined') print_result=arguments['callee']['__args__'][6][1];
				var $add6,$add5,$add2,$add3,$add1,t_ave,$add4,entry,$div2,$sub2,$sub1,$div1;
				$pyjs['track']={'module':'pyjsdl.util', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=44;
				if ($p['bool']($p['op_is'](time_i, null))) {
					$pyjs['track']['lineno']=45;
					time_i = $p['getattr'](self, 'time_i');
				}
				$pyjs['track']['lineno']=46;
				if ($p['bool']($p['op_is'](time_f, null))) {
					$pyjs['track']['lineno']=47;
					time_f = self['get_time']();
				}
				$pyjs['track']['lineno']=48;
				self['dtime']['append']($p['__op_sub']($sub1=time_f,$sub2=time_i));
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('number', $p['__op_add']($add1=$p['getattr'](self, 'number'),$add2=$constant_int_1)) : $p['setattr'](self, 'number', $p['__op_add']($add1=$p['getattr'](self, 'number'),$add2=$constant_int_1)); 
				$pyjs['track']['lineno']=50;
				if ($p['bool'](((($p['cmp']($p['getattr'](self, 'number'), number))|1) == 1))) {
					$pyjs['track']['lineno']=51;
					t_ave = (typeof ($div1=$p['sum']($p['getattr'](self, 'dtime')))==typeof ($div2=number) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2));
					$pyjs['track']['lineno']=52;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dtime', $p['list']([])) : $p['setattr'](self, 'dtime', $p['list']([])); 
					$pyjs['track']['lineno']=53;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('number', $constant_int_0) : $p['setattr'](self, 'number', $constant_int_0); 
					$pyjs['track']['lineno']=54;
					if ($p['bool'](print_result)) {
						$pyjs['track']['lineno']=55;
						if ($p['bool']($p['op_eq']($p['getattr'](self, 'log_type'), 'console'))) {
							$pyjs['track']['lineno']=56;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_num', $p['__op_add']($add3=$p['getattr'](self, 'log_num'),$add4=$constant_int_1)) : $p['setattr'](self, 'log_num', $p['__op_add']($add3=$p['getattr'](self, 'log_num'),$add4=$constant_int_1)); 
							$pyjs['track']['lineno']=57;
							entry = $p['sprintf']('Time %d: %s', $p['tuple']([$p['getattr'](self, 'log_num'), t_ave]));
							$pyjs['track']['lineno']=58;
							$p['printFunc']([entry], 1);
						}
						else {
							$pyjs['track']['lineno']=60;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_num', $p['__op_add']($add5=$p['getattr'](self, 'log_num'),$add6=$constant_int_1)) : $p['setattr'](self, 'log_num', $p['__op_add']($add5=$p['getattr'](self, 'log_num'),$add6=$constant_int_1)); 
							$pyjs['track']['lineno']=61;
							entry = $p['sprintf']('Time %d: %s', $p['tuple']([$p['getattr'](self, 'log_num'), t_ave]));
							$pyjs['track']['lineno']=62;
							self['print_log'](entry);
						}
					}
					$pyjs['track']['lineno']=63;
					$pyjs['track']['lineno']=63;
					var $pyjs__ret = t_ave;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['time_i', null],['time_f', null],['number', $constant_int_100],['print_result', true]]);
			$cls_definition['lap_time'] = $method;
			$pyjs['track']['lineno']=65;
			$method = $pyjs__bind_method2('set_log', function(log, log_length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					log = arguments[1];
					log_length = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof log_length == 'undefined') log_length=arguments['callee']['__args__'][4][1];
				var $lambda3,$lambda1,$lambda2,$sub3,$sub4,size;
				$pyjs['track']={'module':'pyjsdl.util', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=70;
				if ($p['bool']($p['tuple'](['console', 'textarea'])['__contains__'](log))) {
					$pyjs['track']['lineno']=71;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_type', log) : $p['setattr'](self, 'log_type', log); 
					$pyjs['track']['lineno']=72;
					if ($p['bool']($p['op_eq'](log, 'textarea'))) {
						$pyjs['track']['lineno']=73;
						if ($p['bool'](!$p['bool']($p['getattr'](self, 'log')))) {
							$pyjs['track']['lineno']=74;
							size = $p['tuple']([$p['__op_sub']($sub3=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub4=$constant_int_5), $constant_int_102]);
							$pyjs['track']['lineno']=75;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log', $m['env']['canvas']['surface']['_display']['Textarea'](size)) : $p['setattr'](self, 'log', $m['env']['canvas']['surface']['_display']['Textarea'](size)); 
							$pyjs['track']['lineno']=76;
							self['log']['setReadonly'](true);
							$pyjs['track']['lineno']=77;
							self['log']['addMouseListener'](self);
							$pyjs['track']['lineno']=78;
							var 							$lambda1 = function(sender, x, y) {
								if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

								$pyjs['track']={'module':'pyjsdl.util','lineno':78};$pyjs['trackstack']['push']($pyjs['track']);
								$pyjs['track']['module']='pyjsdl.util';
								$pyjs['track']['lineno']=78;
								$pyjs['track']['lineno']=78;
								$pyjs['track']['lineno']=78;
								var $pyjs__ret = null;
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							};
							$lambda1['__name__'] = '$lambda1';

							$lambda1['__bind_type__'] = 0;
							$lambda1['__args__'] = [null,null,['sender'],['x'],['y']];
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseUp', $lambda1) : $p['setattr'](self, 'onMouseUp', $lambda1); 
							$pyjs['track']['lineno']=79;
							var 							$lambda2 = function(sender, x, y) {
								if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

								$pyjs['track']={'module':'pyjsdl.util','lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
								$pyjs['track']['module']='pyjsdl.util';
								$pyjs['track']['lineno']=79;
								$pyjs['track']['lineno']=79;
								$pyjs['track']['lineno']=79;
								var $pyjs__ret = null;
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							};
							$lambda2['__name__'] = '$lambda2';

							$lambda2['__bind_type__'] = 0;
							$lambda2['__args__'] = [null,null,['sender'],['x'],['y']];
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseMove', $lambda2) : $p['setattr'](self, 'onMouseMove', $lambda2); 
							$pyjs['track']['lineno']=80;
							var 							$lambda3 = function(sender) {
								if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

								$pyjs['track']={'module':'pyjsdl.util','lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
								$pyjs['track']['module']='pyjsdl.util';
								$pyjs['track']['lineno']=80;
								$pyjs['track']['lineno']=80;
								$pyjs['track']['lineno']=80;
								var $pyjs__ret = null;
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							};
							$lambda3['__name__'] = '$lambda3';

							$lambda3['__bind_type__'] = 0;
							$lambda3['__args__'] = [null,null,['sender']];
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseEnter', $lambda3) : $p['setattr'](self, 'onMouseEnter', $lambda3); 
							$pyjs['track']['lineno']=81;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_list', function(){
								var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter1_iter = $p['range'](log_length);
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								i = $iter1_nextval['$nextval'];
								$collcomp1['append']('');
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.util';

	return $collcomp1;}()) : $p['setattr'](self, 'log_list', function(){
								var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter1_iter = $p['range'](log_length);
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								i = $iter1_nextval['$nextval'];
								$collcomp1['append']('');
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.util';

	return $collcomp1;}()); 
						}
						$pyjs['track']['lineno']=82;
						self['log']['toggle'](true);
					}
					else {
						$pyjs['track']['lineno']=84;
						if ($p['bool']($p['getattr'](self, 'log'))) {
							$pyjs['track']['lineno']=85;
							self['log']['toggle'](false);
							$pyjs['track']['lineno']=86;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_list', $p['list']([])) : $p['setattr'](self, 'log_list', $p['list']([])); 
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['log'],['log_length', $constant_int_5]]);
			$cls_definition['set_log'] = $method;
			$pyjs['track']['lineno']=88;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=89;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_scroll', false) : $p['setattr'](self, 'log_scroll', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
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
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=92;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('log_scroll', true) : $p['setattr'](self, 'log_scroll', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$pyjs['track']['lineno']=94;
			$method = $pyjs__bind_method2('print_log', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd83524b52335ac2f046d42605aaeb2b8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add8,$add7;
				$pyjs['track']={'module':'pyjsdl.util', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=98;
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'log_type'), 'console'))) {
					$pyjs['track']['lineno']=99;
					$p['printFunc']([text], 1);
				}
				else {
					$pyjs['track']['lineno']=101;
					self['log_list']['pop']($constant_int_0);
					$pyjs['track']['lineno']=102;
					self['log_list']['append']($p['__op_add']($add7=text,$add8='\n'));
					$pyjs['track']['lineno']=103;
					text = ''['join']($p['getattr'](self, 'log_list'));
					$pyjs['track']['lineno']=104;
					self['log']['setText'](text);
					$pyjs['track']['lineno']=105;
					if ($p['bool']($p['getattr'](self, 'log_scroll'))) {
						$pyjs['track']['lineno']=106;
						self['log']['setCursorPos']($p['len'](text));
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['print_log'] = $method;
			$pyjs['track']['lineno']=9;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Timer', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=109;
		$m['Pyjs_Mode'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.util';
			$cls_definition['__md5__'] = '5a884b3e4c16801ee2a0d4e109247e06';
			$pyjs['track']['lineno']=115;
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
					if (self.prototype['__md5__'] !== '5a884b3e4c16801ee2a0d4e109247e06') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=116;
				var $tupleassign1 = $p['__ass_unpack'](self['_setmode'](), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('strict', $tupleassign1[0]) : $p['setattr'](self, 'strict', $tupleassign1[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('optimized', $tupleassign1[1]) : $p['setattr'](self, 'optimized', $tupleassign1[1]); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('__getattr__', function(attr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5a884b3e4c16801ee2a0d4e109247e06') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=119;
				if ($p['bool']($p['op_eq'](attr, '__strict_mode'))) {
					$pyjs['track']['lineno']=120;
					$pyjs['track']['lineno']=120;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=122;
			$method = $pyjs__bind_method2('_setmode', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5a884b3e4c16801ee2a0d4e109247e06') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.util', 'lineno':122};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.util';
				$pyjs['track']['lineno']=122;
				$pyjs['track']['lineno']=123;
				if ($p['bool']($p['op_eq']($p['getattr'](self, '__strict_mode'), true))) {
					$pyjs['track']['lineno']=124;
					$pyjs['track']['lineno']=124;
					var $pyjs__ret = $p['tuple']([true, false]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=126;
					$pyjs['track']['lineno']=126;
					var $pyjs__ret = $p['tuple']([false, true]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_setmode'] = $method;
			$pyjs['track']['lineno']=109;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Pyjs_Mode', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=128;
		$m['env']['__is_instance__'] && typeof $m['env']['__setattr__'] == 'function' ? $m['env']['__setattr__']('pyjs_mode', $m['Pyjs_Mode']()) : $p['setattr']($m['env'], 'pyjs_mode', $m['Pyjs_Mode']()); 
		$pyjs['track']['lineno']=131;
		$m['$$call'] = function(obj, func, args) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof args == 'undefined') args=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'pyjsdl.util','lineno':131};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.util';
			$pyjs['track']['lineno']=131;
			$pyjs['track']['lineno']=137;
			$pyjs['track']['lineno']=137;
			var $pyjs__ret = func.apply(obj, args['getArray']());;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['$$call']['__name__'] = 'call';

		$m['$$call']['__bind_type__'] = 0;
		$m['$$call']['__args__'] = [null,null,['obj'],['func'],['args', $p['tuple']([])]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.util */


/* end module: pyjsdl.util */


/*
PYJS_DEPS: ['time.Time', 'time', 'env']
*/
