/* start module: pyjsdl.pyjsbitset */
$pyjs['loaded_modules']['pyjsdl.pyjsbitset'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsbitset']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsbitset'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsbitset'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsbitset>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsbitset';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['pyjsbitset'] = $pyjs['loaded_modules']['pyjsdl.pyjsbitset'];


	$m['math'] = $p['___import___']('math', 'pyjsdl');
	$m['PyUint8Array'] = $p['___import___']('pyjsarray.PyUint8Array', 'pyjsdl', null, false);
	$m['PyUint16Array'] = $p['___import___']('pyjsarray.PyUint16Array', 'pyjsdl', null, false);
	$m['PyUint32Array'] = $p['___import___']('pyjsarray.PyUint32Array', 'pyjsdl', null, false);
	$m['BitSet'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsbitset';
		$cls_definition['__bit'] = 8;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint8Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			var $sub10,$sub9,$sub8,$div2,$div1,$sub7,$mul2,$mul1;
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')))) {
				$p['getattr'](self, '__class__')['__bitmask'] = $p['dict'](function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$sub3,$sub2,$sub1,$sub4,$sub6,$sub5,$iter1_array;
	$collcomp1 = $p['list']();
				$iter1_iter = $p['range']($p['__op_sub']($sub1=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub2=1), (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append']($p['tuple']([$p['__op_sub']($sub5=$p['__op_sub']($sub3=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub4=i),$sub6=1), (1)<<(i)]));
				}

	return $collcomp1;}());
				$p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__setitem__']($p['__op_sub']($sub9=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub10=1), $p['float_int']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__getitem__']($p['__op_sub']($sub7=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub8=1))));
			}
			if ($p['bool'](width)) {
				self['__width'] = $p['abs'](width);
			}
			else {
				self['__width'] = $p['getattr'](self, '__bit');
			}
			self['__data'] = self['__typedarray']($m['math']['ceil']((typeof ($div1=$p['getattr'](self, '__width'))==typeof ($div2=(typeof ($mul1=$p['getattr'](self, '__bit'))==typeof ($mul2=1.0) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))));
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s', $p['getattr'](self, '__class__'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$iter2_nextval,$iter2_type,$iter2_iter,$add2,$add3,$iter2_idx,$add1,$add4,$iter2_array,setBit;
			setBit = $p['list']([]);
			$iter2_iter = $p['xrange']($p['getattr'](self, '__width'));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				index = $iter2_nextval['$nextval'];
				if ($p['bool'](self['get'](index))) {
					setBit['append']($p['str'](index));
				}
			}
			return $p['__op_add']($add3=$p['__op_add']($add1='{',$add2=', '['join'](setBit)),$add4='}');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['get'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

			self['set'](index, value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$iter3_idx,$sub12,$iter3_type,$add5,$add6,$iter3_iter,$iter3_array,$sub11,$iter3_nextval;
			$iter3_iter = $p['xrange']($p['__op_sub']($sub11=$p['getattr'](self, '__width'),$sub12=1), (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3)), (typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4)));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				index = $iter3_nextval['$nextval'];
				if ($p['bool'](self['get'](index))) {
					break;
				}
			}
			return $p['__op_add']($add5=index,$add6=1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$add10,$add7,$add8,$add9;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					index = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '__width')) == -1)));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = self['get'](index);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							index = $p['__op_add']($add9=index,$add10=1);
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('get', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var ix,$mod3,$mod4,$mod1,$iter4_type,$mod2,$iter4_iter,size,$sub18,$sub13,$sub17,$sub16,$sub15,$sub14,bitset,$add12,$div3,$div6,$div4,$div5,i,$iter4_nextval,$iter4_idx,$iter4_array,$add11;
			if ($p['bool'](($p['cmp'](index, $p['__op_sub']($sub13=$p['getattr'](self, '__width'),$sub14=1)) == 1))) {
				if ($p['bool'](!$p['bool'](toIndex))) {
					return false;
				}
				else {
					size = $p['__op_sub']($sub15=toIndex,$sub16=index);
					if ($p['bool'](($p['cmp'](size, 0) == 1))) {
						return self['__class__'](size);
					}
					else {
						return null;
					}
				}
			}
			if ($p['bool']((toIndex === null))) {
				return $p['bool'](($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div3=index)==typeof ($div4=$p['getattr'](self, '__bit')) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))))&($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod1=index)==typeof ($mod2=$p['getattr'](self, '__bit')) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)))));
			}
			else {
				size = $p['__op_sub']($sub17=toIndex,$sub18=index);
				if ($p['bool'](($p['cmp'](size, 0) == 1))) {
					bitset = self['__class__'](size);
					ix = 0;
					if ($p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1))) {
						toIndex = $p['getattr'](self, '__width');
					}
					$iter4_iter = $p['xrange'](index, toIndex);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						i = $iter4_nextval['$nextval'];
						bitset['set'](ix, $p['bool'](($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div5=i)==typeof ($div6=$p['getattr'](self, '__bit')) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6)))))&($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod3=i)==typeof ($mod4=$p['getattr'](self, '__bit')) && typeof $mod3=='number'?
							(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
							$p['op_mod']($mod3,$mod4))))));
						ix = $p['__op_add']($add11=ix,$add12=1);
					}
					return bitset;
				}
				else {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('set', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
			var $mod8,$sub19,$div14,$div10,$sub20,$div11,$add14,$div8,$mod6,$div12,$mod7,$add13,$div9,$mod5,$div13,$div7;
			if ($p['bool'](($p['cmp'](index, $p['__op_sub']($sub19=$p['getattr'](self, '__width'),$sub20=1)) == 1))) {
				if ($p['bool'](value)) {
					self['resize']($p['__op_add']($add13=index,$add14=1));
				}
				else {
					return null;
				}
			}
			if ($p['bool'](value)) {
				$p['getattr'](self, '__data')['__setitem__']($p['float_int']((typeof ($div9=index)==typeof ($div10=$p['getattr'](self, '__bit')) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10))), ($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div7=index)==typeof ($div8=$p['getattr'](self, '__bit')) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)))))|($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod5=index)==typeof ($mod6=$p['getattr'](self, '__bit')) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)))));
			}
			else {
				$p['getattr'](self, '__data')['__setitem__']($p['float_int']((typeof ($div13=index)==typeof ($div14=$p['getattr'](self, '__bit')) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))), ($p['getattr'](self, '__data')['__getitem__']($p['float_int']((typeof ($div11=index)==typeof ($div12=$p['getattr'](self, '__bit')) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)))))&(~($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod7=index)==typeof ($mod8=$p['getattr'](self, '__bit')) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8))))));
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value', 1]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('fill', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$iter5_idx,$iter6_idx,i,$and1,$iter6_type,$iter6_array,$iter5_iter,$iter5_array,$iter5_type,$iter6_iter,$and2,$iter6_nextval;
			if ($p['bool'](($p['bool']($and1=(index === null))?(toIndex === null):$and1))) {
				$iter5_iter = $p['xrange'](0, $p['getattr'](self, '__width'));
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					i = $iter5_nextval['$nextval'];
					self['set'](i, 1);
				}
			}
			else {
				if ($p['bool']((toIndex === null))) {
					self['set'](index, 1);
				}
				else {
					$iter6_iter = $p['xrange'](index, toIndex);
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						i = $iter6_nextval['$nextval'];
						self['set'](i, 1);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('clear', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter8_iter,$iter9_iter,$iter9_nextval,$iter9_idx,$iter7_type,$iter9_type,$iter8_idx,$iter7_iter,$iter8_type,$and3,$and4,dat,$iter8_nextval,$iter7_idx,$iter7_nextval,i,$iter7_array,$iter8_array,$iter9_array;
			if ($p['bool']((index === null))) {
				$iter7_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					i = $iter7_nextval['$nextval'];
					$p['getattr'](self, '__data')['__setitem__'](i, 0);
				}
			}
			else {
				if ($p['bool']((toIndex === null))) {
					self['set'](index, 0);
				}
				else {
					if ($p['bool'](($p['bool']($and3=$p['op_eq'](index, 0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and3))) {
						$iter8_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							dat = $iter8_nextval['$nextval'];
							$p['getattr'](self, '__data')['__setitem__'](dat, 0);
						}
					}
					else {
						$iter9_iter = $p['xrange'](index, toIndex);
						$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
						while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
							i = $iter9_nextval['$nextval'];
							self['set'](i, 0);
						}
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('flip', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter11_nextval,$iter10_nextval,i,$iter11_iter,$iter11_type,$and5,$and6,dat,$iter10_array,$iter11_array,$iter10_type,$iter10_iter,$iter11_idx,$iter10_idx;
			if ($p['bool']((toIndex === null))) {
				self['set'](index, !$p['bool'](self['get'](index)));
			}
			else {
				if ($p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1))) {
					self['resize'](toIndex);
					toIndex = $p['getattr'](self, '__width');
				}
				if ($p['bool'](($p['bool']($and5=$p['op_eq'](index, 0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and5))) {
					$iter10_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						dat = $iter10_nextval['$nextval'];
						$p['getattr'](self, '__data')['__setitem__'](dat, ~($p['getattr'](self, '__data')['__getitem__'](dat)));
					}
				}
				else {
					$iter11_iter = $p['xrange'](index, toIndex);
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						i = $iter11_nextval['$nextval'];
						self['set'](i, !$p['bool'](self['get'](i)));
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['flip'] = $method;
		$method = $pyjs__bind_method2('cardinality', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var count,$iter12_type,$iter12_array,$iter12_iter,$add15,$add16,bit,$iter12_idx,$iter12_nextval;
			count = 0;
			$iter12_iter = $p['xrange']($p['getattr'](self, '__width'));
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				bit = $iter12_nextval['$nextval'];
				if ($p['bool'](self['get'](bit))) {
					count = $p['__op_add']($add15=count,$add16=1);
				}
			}
			return count;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cardinality'] = $method;
		$method = $pyjs__bind_method2('intersects', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $iter13_nextval,$iter13_iter,$iter13_type,dat,$iter13_array,$iter13_idx;
			$iter13_iter = $p['xrange']($p['len']($p['getattr'](bitset, '__data')));
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				dat = $iter13_nextval['$nextval'];
				if ($p['bool'](($p['getattr'](bitset, '__data')['__getitem__'](dat))&($p['getattr'](self, '__data')['__getitem__'](dat)))) {
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('andSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $iter14_array,$iter14_type,dat,$iter14_iter,data,$iter14_idx,$iter14_nextval;
			data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
			$iter14_iter = $p['xrange'](data);
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				dat = $iter14_nextval['$nextval'];
				$p['getattr'](self, '__data')['__setitem__'](dat, ($p['getattr'](self, '__data')['__getitem__'](dat))&($p['getattr'](bitset, '__data')['__getitem__'](dat)));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['andSet'] = $method;
		$method = $pyjs__bind_method2('orSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $iter15_iter,$iter15_array,$iter15_idx,dat,$iter15_nextval,$iter15_type,data;
			data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
			$iter15_iter = $p['xrange'](data);
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				dat = $iter15_nextval['$nextval'];
				$p['getattr'](self, '__data')['__setitem__'](dat, ($p['getattr'](self, '__data')['__getitem__'](dat))|($p['getattr'](bitset, '__data')['__getitem__'](dat)));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['orSet'] = $method;
		$method = $pyjs__bind_method2('xorSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $iter16_array,dat,$iter16_type,data,$iter16_idx,$iter16_nextval,$iter16_iter;
			data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
			$iter16_iter = $p['xrange'](data);
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				dat = $iter16_nextval['$nextval'];
				$p['getattr'](self, '__data')['__setitem__'](dat, ($p['getattr'](self, '__data')['__getitem__'](dat))^($p['getattr'](bitset, '__data')['__getitem__'](dat)));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['xorSet'] = $method;
		$method = $pyjs__bind_method2('resize', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $sub22,$div20,$sub21,$div18,$mul12,$mul11,$mul10,$div15,$div17,array,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$div16,$div19;
			if ($p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == 1))) {
				self['__width'] = width;
				if ($p['bool'](($p['cmp']($p['getattr'](self, '__width'), (typeof ($mul3=$p['len']($p['getattr'](self, '__data')))==typeof ($mul4=$p['getattr'](self, '__bit')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))) == 1))) {
					array = self['__typedarray']($m['math']['ceil']((typeof ($div15=$p['getattr'](self, '__width'))==typeof ($div16=(typeof ($mul5=$p['getattr'](self, '__bit'))==typeof ($mul6=1.0) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6))) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16))));
					array['set']($p['getattr'](self, '__data'));
					self['__data'] = array;
				}
			}
			else if ($p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == -1))) {
				if ($p['bool'](($p['cmp'](width, $p['len'](self)) == -1))) {
					width = $p['len'](self);
				}
				self['__width'] = width;
				if ($p['bool'](($p['cmp']($p['getattr'](self, '__width'), $p['__op_sub']($sub21=(typeof ($mul7=$p['len']($p['getattr'](self, '__data')))==typeof ($mul8=$p['getattr'](self, '__bit')) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$sub22=$p['getattr'](self, '__bit'))) < 1))) {
					array = self['__typedarray']($m['math']['ceil']((typeof ($div17=$p['getattr'](self, '__width'))==typeof ($div18=(typeof ($mul9=$p['getattr'](self, '__bit'))==typeof ($mul10=1.0) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18))));
					array['set'](self['__data']['subarray'](0, $m['math']['ceil']((typeof ($div19=$p['getattr'](self, '__width'))==typeof ($div20=(typeof ($mul11=$p['getattr'](self, '__bit'))==typeof ($mul12=1.0) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12))) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20)))));
					self['__data'] = array;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul14,$mul13;
			return (typeof ($mul13=$p['len']($p['getattr'](self, '__data')))==typeof ($mul14=$p['getattr'](self, '__bit')) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14));
		}
	, 1, [null,null,['self']]);
		$cls_definition['size'] = $method;
		$method = $pyjs__bind_method2('isEmpty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter17_nextval,$iter17_iter,$iter17_array,$iter17_idx,$iter17_type,data;
			$iter17_iter = $p['getattr'](self, '__data');
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				data = $iter17_nextval['$nextval'];
				if ($p['bool'](data)) {
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEmpty'] = $method;
		$method = $pyjs__bind_method2('clone', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_bitset,data;
			new_bitset = self['__class__'](1);
			data = self['__typedarray']($p['getattr'](self, '__data'));
			new_bitset['__data'] = data;
			new_bitset['__width'] = $p['getattr'](self, '__width');
			return new_bitset;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clone'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet', $p['tuple']($bases), $data);
	})();
	$m['BitSet16'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsbitset';
		$cls_definition['__bit'] = 16;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint16Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet16', $p['tuple']($bases), $data);
	})();
	$m['BitSet32'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsbitset';
		$cls_definition['__bit'] = 32;
		$cls_definition['__bitmask'] = null;
		$cls_definition['__typedarray'] = $m['PyUint32Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet32', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.pyjsbitset */


/* end module: pyjsdl.pyjsbitset */


/*
PYJS_DEPS: ['math', 'pyjsarray.PyUint8Array', 'pyjsarray', 'pyjsarray.PyUint16Array', 'pyjsarray.PyUint32Array']
*/
