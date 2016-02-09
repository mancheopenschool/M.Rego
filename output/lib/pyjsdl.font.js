/* start module: pyjsdl.font */
$pyjs['loaded_modules']['pyjsdl.font'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.font']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.font'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.font'];
	$m['__repr__'] = function() { return '<module: pyjsdl.font>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.font';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['font'] = $pyjs['loaded_modules']['pyjsdl.font'];


	$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
	$m['math'] = $p['___import___']('math', 'pyjsdl');
	$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
	$m['HTML5Canvas'] = $p['___import___']('pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['_initialized'] = false;
	$m['_surf'] = null;
	$m['init'] = function() {
		var $pyjs_try_err;
		if ($p['bool']($m['_initialized'])) {
			return null;
		}
		try {
			$m['_surf'] = $m['HTML5Canvas'](1, 1);
			$m['_surf']['measureText']('x');
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				$m['_surf'] = null;
			}
		}
		$m['_initialized'] = true;
		return null;
	};
	$m['init']['__name__'] = 'init';

	$m['init']['__bind_type__'] = 0;
	$m['init']['__args__'] = [null,null];
	$m['init']();
	$m['quit'] = function() {

		$m['_surf'] = null;
		$m['_initialized'] = false;
		return null;
	};
	$m['quit']['__name__'] = 'quit';

	$m['quit']['__bind_type__'] = 0;
	$m['quit']['__args__'] = [null,null];
	$m['get_init'] = function() {

		return $m['_initialized'];
	};
	$m['get_init']['__name__'] = 'get_init';

	$m['get_init']['__bind_type__'] = 0;
	$m['get_init']['__args__'] = [null,null];
	$m['get_default_font'] = function() {

		return $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__'](0);
	};
	$m['get_default_font']['__name__'] = 'get_default_font';

	$m['get_default_font']['__bind_type__'] = 0;
	$m['get_default_font']['__args__'] = [null,null];
	$m['get_fonts'] = function() {

		return $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font');
	};
	$m['get_fonts']['__name__'] = 'get_fonts';

	$m['get_fonts']['__bind_type__'] = 0;
	$m['get_fonts']['__args__'] = [null,null];
	$m['match_font'] = function(name) {
		var c,$iter2_nextval,$iter2_type,$iter2_iter,f,i,$iter3_nextval,$iter3_array,$iter2_idx,$iter3_idx,fn,$iter3_type,fallback,font,$iter2_array,$iter3_iter;
		fallback = false;
		font = function(){
			var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,fn,$iter1_array;
	$collcomp1 = $p['list']();
		$iter1_iter = name['$$split'](',');
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			fn = $iter1_nextval['$nextval'];
			$collcomp1['append'](fn['strip']()['lower']());
		}

	return $collcomp1;}();
		$iter2_iter = $p['enumerate'](font);
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
			i = $tupleassign1[0];
			fn = $tupleassign1[1];
			if ($p['bool']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__contains__'](fn))) {
				fallback = true;
				continue;
			}
			else {
				f = ''['join'](function(){
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
						$iter3_iter = fn;
						$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								c = $iter3_nextval['$nextval'];
								$generator_state[3] = 0;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](c['isalnum']())))) {
									$generator_state[2]=1;
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = c;
										$yielding = true;
										$generator_state[3] = 1;
										return $yield_value;
										$generator_state[3]=1;
									}
									if ($generator_state[3] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[3] = -1;
											throw $exc;
										}
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=0;
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
				}()
);
				if ($p['bool']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font_alt')['__contains__'](f))) {
					font['__setitem__'](i, $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font_alt')['__getitem__'](f)));
					fallback = true;
				}
			}
		}
		if ($p['bool'](!$p['bool'](fallback))) {
			font['append']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__'](0));
		}
		font = ','['join'](font);
		return font;
	};
	$m['match_font']['__name__'] = 'match_font';

	$m['match_font']['__bind_type__'] = 0;
	$m['match_font']['__args__'] = [null,null,['name']];
	$m['Font'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.font';
		$cls_definition['_font'] = $p['list'](['arial', 'bitstream vera sans', 'bitstream vera serif', 'book antiqua', 'comic sans ms', 'courier new', 'courier', 'dejavu sans', 'dejavu sans mono', 'dejavu serif', 'freesans', 'garamond', 'georgia', 'helvetica', 'impact', 'liberation sans', 'liberation serif', 'lucida console', 'lucida serif', 'nimbus mono l', 'nimbus roman no9 l', 'nimbus sans l', 'palatino', 'times new roman', 'times', 'tahoma', 'verdana', 'cursive', 'monospace', 'sans-serif', 'serif']);
		$cls_definition['_font_alt'] = $p['dict']([['arial', 0], ['bitstreamverasans', 1], ['bitstreamveraserif', 2], ['bookantiqua', 3], ['comicsansms', 4], ['couriernew', 5], ['courier', 6], ['dejavusans', 7], ['dejavusansmono', 8], ['dejavuserif', 9], ['freesans', 10], ['garamond', 11], ['georgia', 12], ['helvetica', 13], ['impact', 14], ['liberationsans', 15], ['liberationserif', 16], ['lucidaconsole', 17], ['lucidaserif', 18], ['nimbusmonol', 19], ['nimbusromanno9l', 20], ['nimbussansl', 21], ['palatino', 22], ['timesnewroman', 23], ['times', 24], ['tahoma', 25], ['verdana', 26], ['cursive', 27], ['monospace', 28], ['sansserif', 29], ['serif', 30]]);
		$cls_definition['_font_family'] = $p['list']([$p['list'](['arial', 'helvetica', 'liberation sans', 'nimbus sans l', 'freesans', 'tahoma', 'sans-serif']), $p['list'](['verdana', 'bitstream vera sans', 'dejavu sans', 'sans-serif']), $p['list'](['impact', 'sans-serif']), $p['list'](['comic sans ms', 'cursive', 'sans-serif']), $p['list'](['courier new', 'courier', 'lucida console', 'dejavu sans mono', 'monospace']), $p['list'](['times new roman', 'times', 'liberation serif', 'nimbus roman no9 l', 'serif']), $p['list'](['garamond', 'book antiqua', 'palatino', 'liberation serif', 'nimbus roman no9 l', 'serif']), $p['list'](['georgia', 'bitstream vera serif', 'lucida serif', 'liberation serif', 'dejavu serif', 'serif'])]);
		$method = $pyjs__bind_method2('__init__', function(name, size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				size = arguments[2];
			}
			var $iter5_nextval,$iter6_type,$iter5_array,$iter8_iter,$iter5_iter,$iter5_type,$iter6_iter,font,$iter6_nextval,$iter5_idx,$iter7_type,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$iter8_nextval,ff,$iter7_idx,fn,c,$iter7_nextval,f,i,$iter7_array,$iter8_array,$add2,$add3,$add1,$add4,fallback;
			if ($p['bool'](!$p['bool'](name))) {
				name = $p['getattr']($m['Font'], '_font')['__getitem__'](0);
			}
			font = function(){
				var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,fn;
	$collcomp2 = $p['list']();
			$iter4_iter = name['$$split'](',');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				fn = $iter4_nextval['$nextval'];
				$collcomp2['append'](fn['strip']()['lower']());
			}

	return $collcomp2;}();
			fallback = null;
			$iter5_iter = $p['enumerate'](font);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
				i = $tupleassign2[0];
				fn = $tupleassign2[1];
				if ($p['bool']($p['getattr']($m['Font'], '_font')['__contains__'](fn))) {
					if ($p['bool'](!$p['bool'](fallback))) {
						fallback = fn;
					}
				}
				else {
					f = ''['join'](function(){
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
							$iter6_iter = fn;
							$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									c = $iter6_nextval['$nextval'];
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](c['isalnum']())))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = c;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
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
					}()
);
					if ($p['bool']($p['getattr']($m['Font'], '_font_alt')['__contains__'](f))) {
						font['__setitem__'](i, $p['getattr']($m['Font'], '_font')['__getitem__']($p['getattr']($m['Font'], '_font_alt')['__getitem__'](f)));
						if ($p['bool'](!$p['bool'](fallback))) {
							fallback = font['__getitem__'](i);
						}
					}
				}
			}
			if ($p['bool'](fallback)) {
				$iter7_iter = $p['getattr']($m['Font'], '_font_family');
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					ff = $iter7_nextval['$nextval'];
					if ($p['bool'](ff['__contains__'](fallback))) {
						font['extend'](function(){
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
								$iter8_iter = ff;
								$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
								$generator_state[0]=1;
							}
							if ($generator_state[0] == 1) {
								$generator_state[1] = 0;
								$generator_state[0]=2;
							}
							if ($generator_state[0] == 2) {
								for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
									if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
										for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
										f = $iter8_nextval['$nextval'];
										$generator_state[3] = 0;
										$generator_state[1]=1;
									}
									if ($generator_state[1] == 1) {
										if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](!font['__contains__'](f))))) {
											$generator_state[2]=1;
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = f;
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
										$generator_state[2]=0;
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
						}()
);
						break;
					}
				}
			}
			else {
				font['extend']($p['getattr']($m['Font'], '_font_family')['__getitem__'](0));
			}
			self['fontname'] = ','['join'](font);
			self['fontsize'] = size;
			self['bold'] = '';
			self['italic'] = '';
			self['fontstyle'] = $p['__op_add']($add3=$p['__op_add']($add1=$p['getattr'](self, 'bold'),$add2=' '),$add4=$p['getattr'](self, 'italic'));
			self['underline'] = false;
			self['char_size'] = null;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['name'],['size']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s(%r)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, '__dict__')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('render', function(text, antialias, color, background, surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				antialias = arguments[2];
				color = arguments[3];
				background = arguments[4];
				surface = arguments[5];
			}
			if (typeof antialias == 'undefined') antialias=arguments['callee']['__args__'][4][1];
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][5][1];
			if (typeof background == 'undefined') background=arguments['callee']['__args__'][6][1];
			if (typeof surface == 'undefined') surface=arguments['callee']['__args__'][7][1];
			var surf,w,h,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4;
			if ($p['bool'](!$p['bool'](surface))) {
				var $tupleassign3 = $p['__ass_unpack'](self['size'](text), 2, null);
				w = $tupleassign3[0];
				h = $tupleassign3[1];
				surf = $m['Surface']($p['tuple']([w, h]));
			}
			else {
				surf = surface;
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['getattr'](surface, 'width'), $p['getattr'](surface, 'height')]), 2, null);
				w = $tupleassign4[0];
				h = $tupleassign4[1];
			}
			if ($p['bool'](background)) {
				surf['setFillStyle']($m['Color'](background));
				surf['fillRect'](0, 0, w, h);
			}
			surf['setFont']($p['sprintf']('%s %dpx %s', $p['tuple']([$p['getattr'](self, 'fontstyle'), $p['getattr'](self, 'fontsize'), $p['getattr'](self, 'fontname')])));
			surf['setFillStyle']($m['Color'](color));
			surf['fillText'](text, 0, $p['getattr'](self, 'fontsize'));
			if ($p['bool']($p['getattr'](self, 'underline'))) {
				surf['setLineWidth'](1);
				surf['setStrokeStyle']($m['Color'](color));
				surf['setStroke']((typeof BasicStroke == "undefined"?$m['BasicStroke']:BasicStroke)(1));
				surf['moveTo'](0, $p['__op_sub']($sub1=h,$sub2=1));
				surf['lineTo']($p['__op_sub']($sub3=w,$sub4=1), $p['__op_sub']($sub5=h,$sub6=1));
				surf['stroke']();
			}
			return surf;
		}
	, 1, [null,null,['self'],['text'],['antialias', true],['color', $p['tuple']([0, 0, 0])],['background', null],['surface', null]]);
		$cls_definition['render'] = $method;
		$method = $pyjs__bind_method2('size', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $add6,$add5,y,x;
			if ($p['bool']($m['_surf'])) {
				$m['_surf']['setFont']($p['sprintf']('%s %dpx %s', $p['tuple']([$p['getattr'](self, 'fontstyle'), $p['getattr'](self, 'fontsize'), $p['getattr'](self, 'fontname')])));
				x = $m['_surf']['measureText'](text);
			}
			else {
				x = self['_size_estimate'](text);
			}
			if ($p['bool'](($p['cmp'](x, 1) == -1))) {
				x = 1;
			}
			y = $p['__op_add']($add5=$p['getattr'](self, 'fontsize'),$add6=5);
			return $p['tuple']([x, y]);
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['size'] = $method;
		$method = $pyjs__bind_method2('_size_estimate', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
			var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,$$char,$pyjs_try_err,$mul2,x,$mul4,$mul3,$iter9_type,$mul1,size;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'char_size')))) {
				self['char_size'] = self['_get_char_size']();
			}
			self['fontname'] = ','['join']($p['getattr']($m['Font'], '_font_family')['__getitem__'](0));
			self['fontstyle'] = '';
			size = $p['list']([]);
			$iter9_iter = text;
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				$$char = $iter9_nextval['$nextval'];
				try {
					size['append']((typeof ($mul1=$p['getattr'](self, 'char_size')['__getitem__']($$char))==typeof ($mul2=$p['getattr'](self, 'fontsize')) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						size['append']((typeof ($mul3=$p['getattr'](self, 'char_size')['__getitem__']('x'))==typeof ($mul4=$p['getattr'](self, 'fontsize')) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			x = $m['math']['ceil']($p['sum'](size));
			return x;
		}
	, 1, [null,null,['self'],['text', null]]);
		$cls_definition['_size_estimate'] = $method;
		$method = $pyjs__bind_method2('set_underline', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}
			if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];

			self['underline'] = setting;
			return null;
		}
	, 1, [null,null,['self'],['setting', true]]);
		$cls_definition['set_underline'] = $method;
		$method = $pyjs__bind_method2('get_underline', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'underline');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_underline'] = $method;
		$method = $pyjs__bind_method2('set_bold', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}
			if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
			var $add10,$add7,$add8,$add9;
			self['bold'] = $p['dict']([[true, 'bold'], [false, '']])['__getitem__'](setting);
			self['fontstyle'] = $p['__op_add']($add9=$p['__op_add']($add7=$p['getattr'](self, 'bold'),$add8=' '),$add10=$p['getattr'](self, 'italic'));
			return null;
		}
	, 1, [null,null,['self'],['setting', true]]);
		$cls_definition['set_bold'] = $method;
		$method = $pyjs__bind_method2('get_bold', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'bold'))) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_bold'] = $method;
		$method = $pyjs__bind_method2('set_italic', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}
			if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
			var $add14,$add11,$add12,$add13;
			self['italic'] = $p['dict']([[true, 'italic'], [false, '']])['__getitem__'](setting);
			self['fontstyle'] = $p['__op_add']($add13=$p['__op_add']($add11=$p['getattr'](self, 'bold'),$add12=' '),$add14=$p['getattr'](self, 'italic'));
			return null;
		}
	, 1, [null,null,['self'],['setting', true]]);
		$cls_definition['set_italic'] = $method;
		$method = $pyjs__bind_method2('get_italic', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'italic'))) {
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_italic'] = $method;
		$method = $pyjs__bind_method2('get_linesize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul6,$mul5;
			return $p['float_int']((typeof ($mul5=$p['getattr'](self, 'fontsize'))==typeof ($mul6=1.2) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_linesize'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda4,$lambda3,$lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['list']([]);
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['metrics'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_height'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['get_ascent'] = $lambda3;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['get_descent'] = $lambda4;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		$method = $pyjs__bind_method2('_get_char_size', function(font) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				font = arguments[1];
			}
			if (typeof font == 'undefined') font=arguments['callee']['__args__'][3][1];
			var char_size,$iter10_nextval,$iter10_array,$$char,$div2,fontsize,$iter10_type,$iter10_iter,$iter10_idx,$div1;
			if ($p['bool'](!$p['bool'](font))) {
				return $p['dict']([['a', 0.6], ['b', 0.6], ['c', 0.5], ['d', 0.6], ['e', 0.6], ['f', 0.3], ['g', 0.6], ['h', 0.6], ['i', 0.2], ['j', 0.2], ['k', 0.5], ['l', 0.2], ['m', 0.8], ['n', 0.6], ['o', 0.6], ['p', 0.6], ['q', 0.6], ['r', 0.3], ['s', 0.5], ['t', 0.3], ['u', 0.6], ['v', 0.5], ['w', 0.7], ['x', 0.5], ['y', 0.5], ['z', 0.5], ['A', 0.7], ['B', 0.7], ['C', 0.7], ['D', 0.7], ['E', 0.7], ['F', 0.6], ['G', 0.8], ['H', 0.7], ['I', 0.3], ['J', 0.5], ['K', 0.7], ['L', 0.6], ['M', 0.8], ['N', 0.7], ['O', 0.8], ['P', 0.7], ['Q', 0.8], ['R', 0.7], ['S', 0.7], ['T', 0.6], ['U', 0.7], ['V', 0.7], ['W', 0.9], ['X', 0.7], ['Y', 0.7], ['Z', 0.6], ['0', 0.6], ['1', 0.6], ['2', 0.6], ['3', 0.6], ['4', 0.6], ['5', 0.6], ['6', 0.6], ['7', 0.6], ['8', 0.6], ['9', 0.6], ['.', 0.3], [',', 0.3], [':', 0.3], [';', 0.3], ['?', 0.6], ['~', 0.6], ['!', 0.3], ['@', 1], ['#', 0.6], ['$', 0.6], ['%', 0.9], ['^', 0.5], ['&', 0.7], ['=', 0.6], ['+', 0.6], ['-', 0.3], ['*', 0.4], ['/', 0.3], ['\\', 0.3], ['_', 0.6], ['<', 0.6], ['>', 0.6], ['(', 0.3], [')', 0.3], ['{', 0.3], ['}', 0.3], ['[', 0.3], [']', 0.3], ["'", 0.2], ['"', 0.4], [' ', 0.3]]);
			}
			else {
				fontsize = 10;
				$m['_surf']['setFont']($p['sprintf']('%dpx %s', $p['tuple']([fontsize, font])));
				char_size = $p['dict']([]);
				$iter10_iter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]\'" ';
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					$$char = $iter10_nextval['$nextval'];
					char_size['__setitem__']($$char, $p['float']((typeof ($div1=$m['_surf']['measureText']($$char))==typeof ($div2=fontsize) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))));
				}
				return char_size;
			}
			return null;
		}
	, 1, [null,null,['self'],['font', null]]);
		$cls_definition['_get_char_size'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Font', $p['tuple']($bases), $data);
	})();
	$m['SysFont'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.font';
		$method = $pyjs__bind_method2('__init__', function(name, size, bold, italic) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				size = arguments[2];
				bold = arguments[3];
				italic = arguments[4];
			}
			if (typeof bold == 'undefined') bold=arguments['callee']['__args__'][5][1];
			if (typeof italic == 'undefined') italic=arguments['callee']['__args__'][6][1];
			var $add15,$add16,$add17,$add18;
			$m['Font']['__init__'](self, name, size);
			self['bold'] = $p['dict']([[true, 'bold'], [false, '']])['__getitem__'](bold);
			self['italic'] = $p['dict']([[true, 'italic'], [false, '']])['__getitem__'](bold);
			self['fontstyle'] = $p['__op_add']($add17=$p['__op_add']($add15=$p['getattr'](self, 'bold'),$add16=' '),$add18=$p['getattr'](self, 'italic'));
			return null;
		}
	, 1, [null,null,['self'],['name'],['size'],['bold', false],['italic', false]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Font']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SysFont', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.font */


/* end module: pyjsdl.font */


/*
PYJS_DEPS: ['surface.Surface', 'surface', 'math', 'color.Color', 'color', 'pyjsobj.HTML5Canvas', 'pyjsobj']
*/
