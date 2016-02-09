/* start module: pyjsdl.time */
$pyjs['loaded_modules']['pyjsdl.time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.time']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.time'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.time'];
	$m['__repr__'] = function() { return '<module: pyjsdl.time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.time';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['time'] = $pyjs['loaded_modules']['pyjsdl.time'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.time.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[132] = 'pyjsdl.time.py, line 132:\n    if time:';
		$m.__track_lines__[4] = 'pyjsdl.time.py, line 4:\n    from __pyjamas__ import JS';
		$m.__track_lines__[5] = 'pyjsdl.time.py, line 5:\n    import env';
		$m.__track_lines__[134] = 'pyjsdl.time.py, line 134:\n    self.timeout(time, self)';
		$m.__track_lines__[7] = "pyjsdl.time.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[136] = 'pyjsdl.time.py, line 136:\n    env.canvas.set_timeWait(time)';
		$m.__track_lines__[10] = 'pyjsdl.time.py, line 10:\n    class Clock(object):';
		$m.__track_lines__[144] = 'pyjsdl.time.py, line 144:\n    ctime = JS("new Date()")';
		$m.__track_lines__[145] = 'pyjsdl.time.py, line 145:\n    return ctime.getTime()';
		$m.__track_lines__[147] = 'pyjsdl.time.py, line 147:\n    def timeout(self, time=None, obj=None):';
		$m.__track_lines__[20] = 'pyjsdl.time.py, line 20:\n    def __init__(self):';
		$m.__track_lines__[154] = 'pyjsdl.time.py, line 154:\n    JS("""$wnd[\'setTimeout\'](function() {@{{run}}();}, @{{time}});""")';
		$m.__track_lines__[153] = 'pyjsdl.time.py, line 153:\n    run = lambda: obj.run()';
		$m.__track_lines__[24] = 'pyjsdl.time.py, line 24:\n    self.time_init = self.time()';
		$m.__track_lines__[25] = 'pyjsdl.time.py, line 25:\n    self.time_diff = [0 for i in range(10)]';
		$m.__track_lines__[26] = 'pyjsdl.time.py, line 26:\n    self.pos = 0';
		$m.__track_lines__[27] = 'pyjsdl.time.py, line 27:\n    self.tick = self._tick_init';
		$m.__track_lines__[29] = 'pyjsdl.time.py, line 29:\n    def get_time(self):';
		$m.__track_lines__[133] = 'pyjsdl.time.py, line 133:\n    env.canvas.set_timeWait(time)';
		$m.__track_lines__[33] = 'pyjsdl.time.py, line 33:\n    return self.time_diff[self.pos]';
		$m.__track_lines__[35] = 'pyjsdl.time.py, line 35:\n    def _tick_init(self, framerate=0):';
		$m.__track_lines__[36] = 'pyjsdl.time.py, line 36:\n    if not env.canvas.time_wait:';
		$m.__track_lines__[37] = 'pyjsdl.time.py, line 37:\n    time = self.time()';
		$m.__track_lines__[39] = 'pyjsdl.time.py, line 39:\n    self.time_init += env.canvas.time_wait';
		$m.__track_lines__[40] = 'pyjsdl.time.py, line 40:\n    return';
		$m.__track_lines__[41] = 'pyjsdl.time.py, line 41:\n    time_diff = time-self.time_init';
		$m.__track_lines__[42] = 'pyjsdl.time.py, line 42:\n    self.time_init = time';
		$m.__track_lines__[43] = 'pyjsdl.time.py, line 43:\n    if self.pos < 9:';
		$m.__track_lines__[44] = 'pyjsdl.time.py, line 44:\n    self.pos += 1';
		$m.__track_lines__[45] = 'pyjsdl.time.py, line 45:\n    self.time_diff[self.pos] = time_diff';
		$m.__track_lines__[46] = 'pyjsdl.time.py, line 46:\n    if framerate:';
		$m.__track_lines__[47] = 'pyjsdl.time.py, line 47:\n    env.canvas.set_timeout( ( 1000/framerate ) - self.time_diff[self.pos] )';
		$m.__track_lines__[49] = 'pyjsdl.time.py, line 49:\n    self.pos = 0';
		$m.__track_lines__[50] = 'pyjsdl.time.py, line 50:\n    self.time_diff[self.pos] = time_diff';
		$m.__track_lines__[51] = 'pyjsdl.time.py, line 51:\n    self.tick = self._tick';
		$m.__track_lines__[52] = 'pyjsdl.time.py, line 52:\n    return self.time_diff[self.pos]';
		$m.__track_lines__[54] = 'pyjsdl.time.py, line 54:\n    def _tick(self, framerate=0):';
		$m.__track_lines__[59] = 'pyjsdl.time.py, line 59:\n    if not env.canvas.time_wait:';
		$m.__track_lines__[60] = 'pyjsdl.time.py, line 60:\n    time = self.time()';
		$m.__track_lines__[138] = 'pyjsdl.time.py, line 138:\n    def time(self):';
		$m.__track_lines__[62] = 'pyjsdl.time.py, line 62:\n    self.time_init += env.canvas.time_wait';
		$m.__track_lines__[63] = 'pyjsdl.time.py, line 63:\n    return';
		$m.__track_lines__[64] = 'pyjsdl.time.py, line 64:\n    time_diff = time-self.time_init';
		$m.__track_lines__[65] = 'pyjsdl.time.py, line 65:\n    self.time_init = time';
		$m.__track_lines__[66] = 'pyjsdl.time.py, line 66:\n    if self.pos < 9:';
		$m.__track_lines__[67] = 'pyjsdl.time.py, line 67:\n    self.pos += 1';
		$m.__track_lines__[68] = 'pyjsdl.time.py, line 68:\n    self.time_diff[self.pos] = time_diff';
		$m.__track_lines__[70] = 'pyjsdl.time.py, line 70:\n    self.pos = 0';
		$m.__track_lines__[71] = 'pyjsdl.time.py, line 71:\n    self.time_diff[self.pos] = time_diff';
		$m.__track_lines__[72] = 'pyjsdl.time.py, line 72:\n    if framerate:';
		$m.__track_lines__[73] = 'pyjsdl.time.py, line 73:\n    env.canvas.set_timeout( ( 1000/framerate ) - ( sum(self.time_diff)/10 ) )';
		$m.__track_lines__[74] = 'pyjsdl.time.py, line 74:\n    return self.time_diff[self.pos]';
		$m.__track_lines__[76] = 'pyjsdl.time.py, line 76:\n    def tick_busy_loop(self, framerate=0):';
		$m.__track_lines__[81] = 'pyjsdl.time.py, line 81:\n    time_diff = self.tick(framerate)';
		$m.__track_lines__[82] = 'pyjsdl.time.py, line 82:\n    return time_diff';
		$m.__track_lines__[84] = 'pyjsdl.time.py, line 84:\n    def get_fps(self):';
		$m.__track_lines__[88] = 'pyjsdl.time.py, line 88:\n    return 1000/(sum(self.time_diff)/10)';
		$m.__track_lines__[90] = 'pyjsdl.time.py, line 90:\n    def time(self):';
		$m.__track_lines__[96] = 'pyjsdl.time.py, line 96:\n    ctime = JS("new Date()")';
		$m.__track_lines__[97] = 'pyjsdl.time.py, line 97:\n    return ctime.getTime()';
		$m.__track_lines__[100] = 'pyjsdl.time.py, line 100:\n    class Time(object):';
		$m.__track_lines__[102] = 'pyjsdl.time.py, line 102:\n    def __init__(self):';
		$m.__track_lines__[103] = 'pyjsdl.time.py, line 103:\n    self._time_init = self.time()';
		$m.__track_lines__[104] = 'pyjsdl.time.py, line 104:\n    self.run = lambda: self.wait()';
		$m.__track_lines__[105] = 'pyjsdl.time.py, line 105:\n    self.Clock = Clock';
		$m.__track_lines__[107] = 'pyjsdl.time.py, line 107:\n    def get_ticks(self):';
		$m.__track_lines__[113] = 'pyjsdl.time.py, line 113:\n    return self.time() - self._time_init';
		$m.__track_lines__[115] = 'pyjsdl.time.py, line 115:\n    def delay(self, time):';
		$m.__track_lines__[121] = 'pyjsdl.time.py, line 121:\n    start = self.time()';
		$m.__track_lines__[122] = 'pyjsdl.time.py, line 122:\n    while self.time() - start < time:   #Use Timer';
		$m.__track_lines__[123] = 'pyjsdl.time.py, line 123:\n    pass';
		$m.__track_lines__[124] = 'pyjsdl.time.py, line 124:\n    return self.time() - start';
		$m.__track_lines__[126] = 'pyjsdl.time.py, line 126:\n    def wait(self, time=0):';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_1 = new $p['int'](1);
		$pyjs['track']['module']='pyjsdl.time';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('env', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['Clock'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.time';
			$cls_definition['__md5__'] = '48d1551038ea1c29d1c73f1cbce82a88';
			$pyjs['track']['lineno']=20;
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
					if (self.prototype['__md5__'] !== '48d1551038ea1c29d1c73f1cbce82a88') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=20;
				$pyjs['track']['lineno']=24;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_init', self['time']()) : $p['setattr'](self, 'time_init', self['time']()); 
				$pyjs['track']['lineno']=25;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_diff', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_10);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append']($constant_int_0);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.time';

	return $collcomp1;}()) : $p['setattr'](self, 'time_diff', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_10);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append']($constant_int_0);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.time';

	return $collcomp1;}()); 
				$pyjs['track']['lineno']=26;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $constant_int_0) : $p['setattr'](self, 'pos', $constant_int_0); 
				$pyjs['track']['lineno']=27;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tick', $p['getattr'](self, '_tick_init')) : $p['setattr'](self, 'tick', $p['getattr'](self, '_tick_init')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=29;
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
					if (self.prototype['__md5__'] !== '48d1551038ea1c29d1c73f1cbce82a88') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=29;
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=33;
				var $pyjs__ret = $p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_time'] = $method;
			$pyjs['track']['lineno']=35;
			$method = $pyjs__bind_method2('_tick_init', function(framerate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					framerate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48d1551038ea1c29d1c73f1cbce82a88') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
				var $sub3,$add2,$add3,$add1,$add4,time,$div2,$sub2,$sub1,$div1,time_diff,$sub4;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=36;
				if ($p['bool'](!$p['bool']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait')))) {
					$pyjs['track']['lineno']=37;
					time = self['time']();
				}
				else {
					$pyjs['track']['lineno']=39;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_init', $p['__op_add']($add1=$p['getattr'](self, 'time_init'),$add2=$p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait'))) : $p['setattr'](self, 'time_init', $p['__op_add']($add1=$p['getattr'](self, 'time_init'),$add2=$p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait'))); 
					$pyjs['track']['lineno']=40;
					$pyjs['track']['lineno']=40;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=41;
				time_diff = $p['__op_sub']($sub1=time,$sub2=$p['getattr'](self, 'time_init'));
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_init', time) : $p['setattr'](self, 'time_init', time); 
				$pyjs['track']['lineno']=43;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'pos'), $constant_int_9) == -1))) {
					$pyjs['track']['lineno']=44;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['__op_add']($add3=$p['getattr'](self, 'pos'),$add4=$constant_int_1)) : $p['setattr'](self, 'pos', $p['__op_add']($add3=$p['getattr'](self, 'pos'),$add4=$constant_int_1)); 
					$pyjs['track']['lineno']=45;
					$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
					$pyjs['track']['lineno']=46;
					if ($p['bool'](framerate)) {
						$pyjs['track']['lineno']=47;
						$m['env']['canvas']['set_timeout']($p['__op_sub']($sub3=(typeof ($div1=$constant_int_1000)==typeof ($div2=framerate) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2)),$sub4=$p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'))));
					}
				}
				else {
					$pyjs['track']['lineno']=49;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $constant_int_0) : $p['setattr'](self, 'pos', $constant_int_0); 
					$pyjs['track']['lineno']=50;
					$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
					$pyjs['track']['lineno']=51;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tick', $p['getattr'](self, '_tick')) : $p['setattr'](self, 'tick', $p['getattr'](self, '_tick')); 
				}
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=52;
				var $pyjs__ret = $p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['framerate', $constant_int_0]]);
			$cls_definition['_tick_init'] = $method;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('_tick', function(framerate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					framerate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48d1551038ea1c29d1c73f1cbce82a88') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
				var $sub7,time,$add8,$sub8,$add6,$add7,$add5,$div4,$div3,time_diff,$div6,$sub6,$sub5,$div5;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=59;
				if ($p['bool'](!$p['bool']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait')))) {
					$pyjs['track']['lineno']=60;
					time = self['time']();
				}
				else {
					$pyjs['track']['lineno']=62;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_init', $p['__op_add']($add5=$p['getattr'](self, 'time_init'),$add6=$p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait'))) : $p['setattr'](self, 'time_init', $p['__op_add']($add5=$p['getattr'](self, 'time_init'),$add6=$p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait'))); 
					$pyjs['track']['lineno']=63;
					$pyjs['track']['lineno']=63;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=64;
				time_diff = $p['__op_sub']($sub5=time,$sub6=$p['getattr'](self, 'time_init'));
				$pyjs['track']['lineno']=65;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_init', time) : $p['setattr'](self, 'time_init', time); 
				$pyjs['track']['lineno']=66;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'pos'), $constant_int_9) == -1))) {
					$pyjs['track']['lineno']=67;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['__op_add']($add7=$p['getattr'](self, 'pos'),$add8=$constant_int_1)) : $p['setattr'](self, 'pos', $p['__op_add']($add7=$p['getattr'](self, 'pos'),$add8=$constant_int_1)); 
					$pyjs['track']['lineno']=68;
					$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
				}
				else {
					$pyjs['track']['lineno']=70;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $constant_int_0) : $p['setattr'](self, 'pos', $constant_int_0); 
					$pyjs['track']['lineno']=71;
					$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
					$pyjs['track']['lineno']=72;
					if ($p['bool'](framerate)) {
						$pyjs['track']['lineno']=73;
						$m['env']['canvas']['set_timeout']($p['__op_sub']($sub7=(typeof ($div3=$constant_int_1000)==typeof ($div4=framerate) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4)),$sub8=(typeof ($div5=$p['sum']($p['getattr'](self, 'time_diff')))==typeof ($div6=$constant_int_10) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6))));
					}
				}
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				var $pyjs__ret = $p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['framerate', $constant_int_0]]);
			$cls_definition['_tick'] = $method;
			$pyjs['track']['lineno']=76;
			$method = $pyjs__bind_method2('tick_busy_loop', function(framerate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					framerate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48d1551038ea1c29d1c73f1cbce82a88') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
				var time_diff;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=81;
				time_diff = self['tick'](framerate);
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=82;
				var $pyjs__ret = time_diff;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['framerate', $constant_int_0]]);
			$cls_definition['tick_busy_loop'] = $method;
			$pyjs['track']['lineno']=84;
			$method = $pyjs__bind_method2('get_fps', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48d1551038ea1c29d1c73f1cbce82a88') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div8,$div9,$div10,$div7;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=84;
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=88;
				var $pyjs__ret = (typeof ($div9=$constant_int_1000)==typeof ($div10=(typeof ($div7=$p['sum']($p['getattr'](self, 'time_diff')))==typeof ($div8=$constant_int_10) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8))) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_fps'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48d1551038ea1c29d1c73f1cbce82a88') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ctime;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=96;
				ctime = new Date();
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=97;
				var $pyjs__ret = ctime['getTime']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['time'] = $method;
			$pyjs['track']['lineno']=10;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Clock', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=100;
		$m['Time'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.time';
			$cls_definition['__md5__'] = 'ff597fc101e5291e9b7e9864b86a1a8a';
			$pyjs['track']['lineno']=102;
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
					if (self.prototype['__md5__'] !== 'ff597fc101e5291e9b7e9864b86a1a8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=103;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time_init', self['time']()) : $p['setattr'](self, '_time_init', self['time']()); 
				$pyjs['track']['lineno']=104;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.time','lineno':104};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.time';
					$pyjs['track']['lineno']=104;
					$pyjs['track']['lineno']=104;
					$pyjs['track']['lineno']=104;
					var $pyjs__ret = self['wait']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $lambda1) : $p['setattr'](self, 'run', $lambda1); 
				$pyjs['track']['lineno']=105;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Clock', $m['Clock']) : $p['setattr'](self, 'Clock', $m['Clock']); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=107;
			$method = $pyjs__bind_method2('get_ticks', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff597fc101e5291e9b7e9864b86a1a8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub10,$sub9;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=113;
				$pyjs['track']['lineno']=113;
				var $pyjs__ret = $p['__op_sub']($sub9=self['time'](),$sub10=$p['getattr'](self, '_time_init'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_ticks'] = $method;
			$pyjs['track']['lineno']=115;
			$method = $pyjs__bind_method2('delay', function(time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff597fc101e5291e9b7e9864b86a1a8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub13,$sub12,$sub14,start,$sub11;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=121;
				start = self['time']();
				$pyjs['track']['lineno']=122;
				while ($p['bool'](($p['cmp']($p['__op_sub']($sub11=self['time'](),$sub12=start), time) == -1))) {
					$pyjs['track']['lineno']=123;
				}
				$pyjs['track']['lineno']=124;
				$pyjs['track']['lineno']=124;
				var $pyjs__ret = $p['__op_sub']($sub13=self['time'](),$sub14=start);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['time']]);
			$cls_definition['delay'] = $method;
			$pyjs['track']['lineno']=126;
			$method = $pyjs__bind_method2('wait', function(time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff597fc101e5291e9b7e9864b86a1a8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.time', 'lineno':126};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=126;
				$pyjs['track']['lineno']=132;
				if ($p['bool'](time)) {
					$pyjs['track']['lineno']=133;
					$m['env']['canvas']['set_timeWait'](time);
					$pyjs['track']['lineno']=134;
					self['timeout'](time, self);
				}
				else {
					$pyjs['track']['lineno']=136;
					$m['env']['canvas']['set_timeWait'](time);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['time', $constant_int_0]]);
			$cls_definition['wait'] = $method;
			$pyjs['track']['lineno']=138;
			$method = $pyjs__bind_method2('time', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff597fc101e5291e9b7e9864b86a1a8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ctime;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':138};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=138;
				$pyjs['track']['lineno']=144;
				ctime = new Date();
				$pyjs['track']['lineno']=145;
				$pyjs['track']['lineno']=145;
				var $pyjs__ret = ctime['getTime']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['time'] = $method;
			$pyjs['track']['lineno']=147;
			$method = $pyjs__bind_method2('timeout', function(time, obj) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					obj = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff597fc101e5291e9b7e9864b86a1a8a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
				if (typeof obj == 'undefined') obj=arguments['callee']['__args__'][4][1];
				var run,$lambda2;
				$pyjs['track']={'module':'pyjsdl.time', 'lineno':147};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.time';
				$pyjs['track']['lineno']=147;
				$pyjs['track']['lineno']=153;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.time','lineno':153};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.time';
					$pyjs['track']['lineno']=153;
					$pyjs['track']['lineno']=153;
					$pyjs['track']['lineno']=153;
					var $pyjs__ret = obj['run']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = [null,null];
				run = $lambda2;
				$pyjs['track']['lineno']=154;
$wnd['setTimeout'](function() {run();}, time);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			}
	, 1, [null,null,['self'],['time', null],['obj', null]]);
			$cls_definition['timeout'] = $method;
			$pyjs['track']['lineno']=100;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Time', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.time */


/* end module: pyjsdl.time */


/*
PYJS_DEPS: ['env']
*/
