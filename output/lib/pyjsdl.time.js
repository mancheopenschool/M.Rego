/* start module: pyjsdl.time */
$pyjs['loaded_modules']['pyjsdl.time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.time']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.time'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.time'];
	$m['__repr__'] = function() { return '<module: pyjsdl.time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.time';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['time'] = $pyjs['loaded_modules']['pyjsdl.time'];


	$m['env'] = $p['___import___']('env', 'pyjsdl');
	$m['__docformat__'] = 'restructuredtext';
	$m['Clock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['time_init'] = self['time']();
			self['time_diff'] = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range'](10);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				$collcomp1['append'](0);
			}

	return $collcomp1;}();
			self['pos'] = 0;
			self['tick'] = $p['getattr'](self, '_tick_init');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_time'] = $method;
		$method = $pyjs__bind_method2('_tick_init', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
			var $sub3,$add2,$add3,$add1,$add4,time,$div2,$sub2,$sub1,$div1,time_diff,$sub4;
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait')))) {
				time = self['time']();
			}
			else {
				self['time_init'] = $p['__op_add']($add1=$p['getattr'](self, 'time_init'),$add2=$p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait'));
				return null;
			}
			time_diff = $p['__op_sub']($sub1=time,$sub2=$p['getattr'](self, 'time_init'));
			self['time_init'] = time;
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'pos'), 9) == -1))) {
				self['pos'] = $p['__op_add']($add3=$p['getattr'](self, 'pos'),$add4=1);
				$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
				if ($p['bool'](framerate)) {
					$m['env']['canvas']['set_timeout']($p['__op_sub']($sub3=(typeof ($div1=1000)==typeof ($div2=framerate) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2)),$sub4=$p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'))));
				}
			}
			else {
				self['pos'] = 0;
				$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
				self['tick'] = $p['getattr'](self, '_tick');
			}
			return $p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'));
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['_tick_init'] = $method;
		$method = $pyjs__bind_method2('_tick', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
			var $sub7,time,$add8,$sub8,$add6,$add7,$add5,$div4,$div3,time_diff,$div6,$sub6,$sub5,$div5;
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait')))) {
				time = self['time']();
			}
			else {
				self['time_init'] = $p['__op_add']($add5=$p['getattr'](self, 'time_init'),$add6=$p['getattr']($p['getattr']($m['env'], 'canvas'), 'time_wait'));
				return null;
			}
			time_diff = $p['__op_sub']($sub5=time,$sub6=$p['getattr'](self, 'time_init'));
			self['time_init'] = time;
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'pos'), 9) == -1))) {
				self['pos'] = $p['__op_add']($add7=$p['getattr'](self, 'pos'),$add8=1);
				$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
			}
			else {
				self['pos'] = 0;
				$p['getattr'](self, 'time_diff')['__setitem__']($p['getattr'](self, 'pos'), time_diff);
				if ($p['bool'](framerate)) {
					$m['env']['canvas']['set_timeout']($p['__op_sub']($sub7=(typeof ($div3=1000)==typeof ($div4=framerate) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)),$sub8=(typeof ($div5=$p['sum']($p['getattr'](self, 'time_diff')))==typeof ($div6=10) && typeof $div5=='number' && $div6 !== 0?
						$div5/$div6:
						$p['op_div']($div5,$div6))));
				}
			}
			return $p['getattr'](self, 'time_diff')['__getitem__']($p['getattr'](self, 'pos'));
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['_tick'] = $method;
		$method = $pyjs__bind_method2('tick_busy_loop', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
			var time_diff;
			time_diff = self['tick'](framerate);
			return time_diff;
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['tick_busy_loop'] = $method;
		$method = $pyjs__bind_method2('get_fps', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div8,$div9,$div10,$div7;
			return (typeof ($div9=1000)==typeof ($div10=(typeof ($div7=$p['sum']($p['getattr'](self, 'time_diff')))==typeof ($div8=10) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_fps'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ctime;
			ctime = new Date();
			return ctime['getTime']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Clock', $p['tuple']($bases), $data);
	})();
	$m['Time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda1;
			self['_time_init'] = self['time']();
			var 			$lambda1 = function() {

				return self['wait']();
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null];
			self['run'] = $lambda1;
			self['Clock'] = $m['Clock'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_ticks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub10,$sub9;
			return $p['__op_sub']($sub9=self['time'](),$sub10=$p['getattr'](self, '_time_init'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_ticks'] = $method;
		$method = $pyjs__bind_method2('delay', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $sub13,$sub12,$sub14,start,$sub11;
			start = self['time']();
			while ($p['bool'](($p['cmp']($p['__op_sub']($sub11=self['time'](),$sub12=start), time) == -1))) {
			}
			return $p['__op_sub']($sub13=self['time'](),$sub14=start);
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['delay'] = $method;
		$method = $pyjs__bind_method2('wait', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];

			if ($p['bool'](time)) {
				$m['env']['canvas']['set_timeWait'](time);
				self['timeout'](time, self);
			}
			else {
				$m['env']['canvas']['set_timeWait'](time);
			}
			return null;
		}
	, 1, [null,null,['self'],['time', 0]]);
		$cls_definition['wait'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ctime;
			ctime = new Date();
			return ctime['getTime']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		$method = $pyjs__bind_method2('timeout', function(time, obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
				obj = arguments[2];
			}
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
			if (typeof obj == 'undefined') obj=arguments['callee']['__args__'][4][1];
			var run,$lambda2;
			var 			$lambda2 = function() {

				return obj['run']();
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null];
			run = $lambda2;
$wnd['setTimeout'](function() {run();}, time);
		}
	, 1, [null,null,['self'],['time', null],['obj', null]]);
		$cls_definition['timeout'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Time', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.time */


/* end module: pyjsdl.time */


/*
PYJS_DEPS: ['env']
*/
