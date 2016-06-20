/* start module: pyjsdl.mixer */
$pyjs['loaded_modules']['pyjsdl.mixer'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mixer']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mixer'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mixer'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mixer>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mixer';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['mixer'] = $pyjs['loaded_modules']['pyjsdl.mixer'];


	$m['Audio'] = $p['___import___']('pyjsobj.Audio', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('time.Time', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Mixer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Sound']['_mixer'] = self;
			$m['Channel']['_mixer'] = self;
			self['Sound'] = (typeof Sound == "undefined"?$m['Sound']:Sound);
			self['Channel'] = (typeof Channel == "undefined"?$m['Channel']:Channel);
			self['_channel_max'] = 8;
			self['_channels'] = $p['dict']([]);
			self['_sounds'] = $p['dict']([]);
			self['_channel_reserved'] = $p['list']([]);
			self['_channel_paused'] = $p['list']([]);
			self['_channel_reserves'] = function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$sub2,$sub1,id,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range']($p['__op_sub']($sub1=$p['getattr'](self, '_channel_max'),$sub2=1), (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				id = $iter1_nextval['$nextval'];
				$collcomp1['append'](id);
			}

	return $collcomp1;}();
			self['_channel_pool'] = $p['list']([]);
			self['_lines'] = $p['dict']([]);
			self['_line_num'] = 0;
			self['_initialized'] = true;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, '_initialized')))) {
				self['_initialized'] = true;
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['init'] = $method;
		$method = $pyjs__bind_method2('pre_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			self['init']();
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['pre_init'] = $method;
		$method = $pyjs__bind_method2('quit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['stop']();
			self['_initialized'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['quit'] = $method;
		$method = $pyjs__bind_method2('get_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, '_initialized'))) {
				return $p['getattr'](self, '_initialized');
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_init'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,id,$iter2_array;
			$iter2_iter = $p['getattr'](self, '_channel_pool');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				id = $iter2_nextval['$nextval'];
				$p['getattr'](self, '_channels')['__getitem__'](id)['stop']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$iter3_type,id,$pyjs_try_err,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = $p['getattr'](self, '_channel_pool');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				id = $iter3_nextval['$nextval'];
				try {
					if ($p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_active'))) {
						self['_channel_paused']['append'](id);
						$p['getattr'](self, '_channels')['__getitem__'](id)['pause']();
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						continue;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('unpause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,id;
			$iter4_iter = $p['getattr'](self, '_channel_paused');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				id = $iter4_nextval['$nextval'];
				$p['getattr'](self, '_channels')['__getitem__'](id)['unpause']();
			}
			self['channel_paused'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unpause'] = $method;
		$method = $pyjs__bind_method2('set_num_channels', function(count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				count = arguments[1];
			}
			var $iter5_nextval,$iter6_idx,$iter6_type,$iter5_array,$iter6_array,$iter5_iter,$iter5_idx,$iter5_type,$iter6_iter,id,$iter6_nextval;
			if ($p['bool'](((($p['cmp'](count, $p['getattr'](self, '_channel_max')))|1) == 1))) {
				$iter5_iter = $p['range']($p['getattr'](self, '_channel_max'), count);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					id = $iter5_nextval['$nextval'];
					$p['getattr'](self, '_channels')['__setitem__'](id, null);
				}
				self['_channel_max'] = count;
			}
			else if ($p['bool'](((($p['cmp'](count, 0))|1) == 1))) {
				$iter6_iter = $p['range'](count, $p['getattr'](self, '_channel_max'));
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					id = $iter6_nextval['$nextval'];
					$p['getattr'](self, '_channels')['__getitem__'](id)['stop']();
					$p['getattr'](self, '_channels')['__delitem__'](id);
				}
				self['_channel_max'] = count;
			}
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['set_num_channels'] = $method;
		$method = $pyjs__bind_method2('get_num_channels', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_channel_max');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_num_channels'] = $method;
		$method = $pyjs__bind_method2('set_reserved', function(count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				count = arguments[1];
			}
			var $iter8_iter,id,$pyjs_try_err,$sub3,$iter7_type,$sub6,$sub5,$sub4,$iter8_idx,$iter7_iter,$iter8_type,$iter8_nextval,$iter7_idx,$iter7_nextval,i,$iter7_array,$iter8_array,$add2,$add1,reserved_len;
			if ($p['bool'](($p['cmp'](count, $p['getattr'](self, '_channel_max')) == 1))) {
				count = $p['getattr'](self, '_channel_max');
			}
			reserved_len = $p['len']($p['getattr'](self, '_channel_reserved'));
			if ($p['bool'](reserved_len)) {
				if ($p['bool'](((($p['cmp'](reserved_len, count))|1) == 1))) {
					$iter7_iter = $p['range']($p['__op_sub']($sub3=reserved_len,$sub4=count));
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						i = $iter7_nextval['$nextval'];
						id = self['_channel_reserved']['pop']();
						$p['getattr'](self, '_channels')['__getitem__'](id)['_reserved'] = false;
						self['_channel_pool']['append'](id);
					}
					count = 0;
				}
				else {
					count = $p['__op_sub']($sub5=count,$sub6=$p['len']($p['getattr'](self, '_channel_reserved')));
				}
			}
			$iter8_iter = $p['range'](reserved_len, $p['__op_add']($add1=count,$add2=reserved_len));
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				id = $iter8_nextval['$nextval'];
				try {
					$p['getattr'](self, '_channels')['__getitem__'](id)['_reserved'] = true;
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$p['getattr'](self, '_channels')['__setitem__'](id, (typeof Channel == "undefined"?$m['Channel']:Channel)(id));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				try {
					self['_channel_pool']['remove'](id);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				self['_channel_reserved']['append'](id);
			}
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['set_reserved'] = $method;
		$method = $pyjs__bind_method2('find_channel', function(force) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				force = arguments[1];
			}
			if (typeof force == 'undefined') force=arguments['callee']['__args__'][3][1];
			var $iter9_test,$iter10_nextval,$iter9_iter,$and1,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_array,duration,$iter10_type,$and2,longest,id,$iter10_iter,$iter9_type,channel;
			if ($p['bool']($p['getattr'](self, '_channel_reserves'))) {
				channel = self['_channel_reserves']['pop']();
				if ($p['bool']($p['getattr'](self, '_channels')['__contains__'](channel))) {
					return $p['getattr'](self, '_channels')['__getitem__'](channel);
				}
				else {
					channel = (typeof Channel == "undefined"?$m['Channel']:Channel)(channel);
					return channel;
				}
			}
			else {
				$iter9_iter = $p['getattr'](self, '_channel_pool');
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while ($iter9_test = typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					id = $iter9_nextval['$nextval'];
					if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_active')))) {
						return $p['getattr'](self, '_channels')['__getitem__'](id);
					}
				}
				if (!$iter9_test) {
					if ($p['bool'](force)) {
						channel = null;
						longest = 0;
						$iter10_iter = $p['getattr'](self, '_channel_pool');
						$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
						while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
							id = $iter10_nextval['$nextval'];
							if ($p['bool'](($p['bool']($and1=$p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_sound'))?!$p['bool']($p['getattr'](self, '_channels')['__getitem__'](id)['isPaused']()):$and1))) {
								duration = $p['getattr'](self, '_channels')['__getitem__'](id)['_sound']['_sound_object']['getCurrentTime']();
								if ($p['bool'](($p['cmp'](duration, longest) == 1))) {
									longest = duration;
									channel = $p['getattr'](self, '_channels')['__getitem__'](id);
								}
							}
							else {
								channel = $p['getattr'](self, '_channels')['__getitem__'](id);
								break;
							}
						}
						if ($p['bool'](channel)) {
							channel['stop']();
							return channel;
						}
						else {
							return null;
						}
					}
					else {
						return null;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['force', false]]);
		$cls_definition['find_channel'] = $method;
		$method = $pyjs__bind_method2('get_busy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter11_iter,$iter11_type,$pyjs_try_err,$iter11_array,$iter11_nextval,$iter11_idx,id;
			$iter11_iter = $p['getattr'](self, '_channel_pool');
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				id = $iter11_nextval['$nextval'];
				try {
					if ($p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_active'))) {
						return true;
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						continue;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_busy'] = $method;
		$method = $pyjs__bind_method2('_register_channel', function(channel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				channel = arguments[1];
			}
			var $pyjs_try_err,id;
			id = $p['getattr'](channel, '_id');
			if ($p['bool'](($p['cmp'](id, $p['getattr'](self, '_channel_max')) == -1))) {
				try {
					if ($p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_sound'))) {
						channel['_sound'] = $p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_sound');
						$p['getattr'](self, '_channels')['__setitem__'](id, channel);
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						$p['getattr'](self, '_channels')['__setitem__'](id, channel);
						self['_channel_pool']['append'](id);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			else {
				throw ($p['AttributeError']('Channel not available.'));
			}
			return null;
		}
	, 1, [null,null,['self'],['channel']]);
		$cls_definition['_register_channel'] = $method;
		$method = $pyjs__bind_method2('_register_sound', function(sound) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
			}

			$p['getattr'](self, '_sounds')['__setitem__']($p['getattr'](sound, '_id'), sound);
			return null;
		}
	, 1, [null,null,['self'],['sound']]);
		$cls_definition['_register_sound'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['fadeout'] = $lambda1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Mixer', $p['tuple']($bases), $data);
	})();
	$m['Sound'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$cls_definition['_id'] = 0;
		$cls_definition['_mixer'] = null;
		$method = $pyjs__bind_method2('__init__', function(sound_file, id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound_file = arguments[1];
				id = arguments[2];
			}
			if (typeof id == 'undefined') id=arguments['callee']['__args__'][4][1];
			var $add3,$add4;
			if ($p['bool']((id === null))) {
				self['_id'] = $p['getattr']($m['Sound'], '_id');
				$m['Sound']['_id'] = $p['__op_add']($add3=$p['getattr']($m['Sound'], '_id'),$add4=1);
				self['_mixer']['_register_sound'](self);
			}
			else {
				self['_id'] = id;
			}
			if ($p['bool']($p['isinstance'](sound_file, $p['str']))) {
				self['_sound_object'] = $m['Audio'](sound_file['$$replace']('\\', '/'));
			}
			else {
				self['_sound_object'] = sound_file;
			}
			self['_sound_objects'] = $p['list']([]);
			self['_channel'] = null;
			self['_ch'] = null;
			self['_volume'] = 1.0;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['sound_file'],['id', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('play', function(loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loops = arguments[1];
				maxtime = arguments[2];
				fade_ms = arguments[3];
			}
			if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][3][1];
			if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][4][1];
			if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][5][1];
			var sound;
			if ($p['bool'](!$p['bool']($p['getattr'](self, '_channel')))) {
				self['_channel'] = self['_mixer']['find_channel']();
				if ($p['bool']($p['getattr'](self, '_channel'))) {
					self['_channel']['_set_sound'](self);
				}
				else {
					return null;
				}
			}
			if ($p['bool'](self['_sound_object']['isPaused']())) {
				self['_ch'] = $p['getattr'](self, '_channel');
			}
			else {
				self['_ch'] = self['_mixer']['find_channel']();
				if ($p['bool']($p['getattr'](self, '_ch'))) {
					sound = $m['Sound'](self['_sound_object']['getSrc'](), $p['getattr'](self, '_id'));
					self['_ch']['_set_sound'](sound);
				}
				else {
					return null;
				}
			}
			if ($p['bool'](!$p['bool'](loops))) {
				self['_ch']['_play']();
			}
			else {
				self['_ch']['_play_repeat'](loops);
			}
			return $p['getattr'](self, '_ch');
		}
	, 1, [null,null,['self'],['loops', 0],['maxtime', 0],['fade_ms', 0]]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, '_channel'))) {
				self['_channel']['stop']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('set_volume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}

			if ($p['bool'](($p['cmp'](volume, 0.0) == -1))) {
				volume = 0.0;
			}
			else if ($p['bool'](($p['cmp'](volume, 1.0) == 1))) {
				volume = 1.0;
			}
			self['_volume'] = volume;
			self['_sound_object']['setVolume']($p['getattr'](self, '_volume'));
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['set_volume'] = $method;
		$method = $pyjs__bind_method2('get_volume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_volume');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_volume'] = $method;
		$method = $pyjs__bind_method2('get_num_channels', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,$pyjs_try_err,$add6,$add5,id,$iter12_idx,channel;
			channel = 0;
			$iter12_iter = $p['getattr']($p['getattr'](self, '_mixer'), '_channel_pool');
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				id = $iter12_nextval['$nextval'];
				try {
					if ($p['bool']($p['op_eq']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, '_mixer'), '_channels')['__getitem__'](id), '_sound'), '_id'), $p['getattr'](self, '_id')))) {
						channel = $p['__op_add']($add5=channel,$add6=1);
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						continue;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return channel;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_num_channels'] = $method;
		$method = $pyjs__bind_method2('get_length', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_sound_object']['getDuration']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_length'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda3,$lambda2;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['fadeout'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['get_buffer'] = $lambda3;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Sound', $p['tuple']($bases), $data);
	})();
	$m['Channel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$cls_definition['_mixer'] = null;
		$method = $pyjs__bind_method2('__init__', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			self['_id'] = id;
			self['_sound'] = null;
			self['_active'] = false;
			self['_pause'] = false;
			self['_loops'] = 0;
			self['_volume'] = 1.0;
			self['_lvolume'] = 1.0;
			self['_rvolume'] = 1.0;
			self['_mixer']['_register_channel'](self);
			self['_time'] = $m['Time']();
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_set_sound', function(sound) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
			}

			if ($p['bool']($p['getattr'](self, '_sound'))) {
				$p['getattr'](self, '_sound')['_channel'] = null;
			}
			self['_sound'] = sound;
			return null;
		}
	, 1, [null,null,['self'],['sound']]);
		$cls_definition['_set_sound'] = $method;
		$method = $pyjs__bind_method2('_play', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mul2,$mul1;
			self['_volume'] = 1.0;
			self['_lvolume'] = 1.0;
			self['_rvolume'] = 1.0;
			self['_active'] = true;
			self['_sound']['_sound_object']['play']();
			self['_time']['timeout']((typeof ($mul1=self['_sound']['_sound_object']['getDuration']())==typeof ($mul2=1000) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)), self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_play'] = $method;
		$method = $pyjs__bind_method2('_play_repeat', function(loops) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loops = arguments[1];
			}

			if ($p['bool'](($p['cmp'](loops, 0) == 1))) {
				self['_loops'] = loops;
			}
			else {
				self['_loops'] = (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3));
			}
			self['_play']();
			return null;
		}
	, 1, [null,null,['self'],['loops']]);
		$cls_definition['_play_repeat'] = $method;
		$method = $pyjs__bind_method2('play', function(sound, loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
				loops = arguments[2];
				maxtime = arguments[3];
				fade_ms = arguments[4];
			}
			if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][4][1];
			if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][5][1];
			if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][6][1];

			if ($p['bool']($p['getattr'](self, '_sound'))) {
				self['stop']();
			}
			self['_set_sound'](sound);
			if ($p['bool'](!$p['bool'](loops))) {
				self['_play']();
			}
			else {
				self['_play_repeat'](loops);
			}
			return null;
		}
	, 1, [null,null,['self'],['sound'],['loops', 0],['maxtime', 0],['fade_ms', 0]]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub8,$sub7;
			if ($p['bool'](!$p['bool']($p['getattr'](self, '_loops')))) {
				self['_active'] = false;
			}
			else {
				if ($p['bool'](($p['cmp']($p['getattr'](self, '_loops'), 0) == 1))) {
					self['_loops'] = $p['__op_sub']($sub7=$p['getattr'](self, '_loops'),$sub8=1);
				}
				self['_play']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, '_sound'))) {
				self['_sound']['_sound_object']['pause']();
				self['_sound']['_sound_object']['setCurrentTime'](0);
				self['_pause'] = false;
				self['_loops'] = 0;
				self['_active'] = false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, '_sound'))) {
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_pause')))) {
					self['_sound']['_sound_object']['pause']();
					self['_pause'] = true;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('unpause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, '_sound'))) {
				if ($p['bool']($p['getattr'](self, '_pause'))) {
					self['_sound']['_sound_object']['play']();
					self['_pause'] = false;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unpause'] = $method;
		$method = $pyjs__bind_method2('set_volume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}
			var $mul4,$mul3;
			if ($p['bool'](($p['cmp'](volume, 0.0) == -1))) {
				volume = 0.0;
			}
			else if ($p['bool'](($p['cmp'](volume, 1.0) == 1))) {
				volume = 1.0;
			}
			self['_volume'] = volume;
			if ($p['bool']($p['getattr'](self, '_sound'))) {
				self['_sound']['_sound_object']['setVolume']((typeof ($mul3=$p['getattr'](self, '_volume'))==typeof ($mul4=$p['getattr']($p['getattr']($p['getattr'](self, '_sound'), '_sound_object'), '_volume')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)));
			}
			else {
				self['_volume'] = 1.0;
			}
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['set_volume'] = $method;
		$method = $pyjs__bind_method2('get_volume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_volume');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_volume'] = $method;
		$method = $pyjs__bind_method2('get_busy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_active');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_busy'] = $method;
		$method = $pyjs__bind_method2('get_sound', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_sound');
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_sound'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda7,$lambda6,$lambda5,$lambda4,$lambda8;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['fadeout'] = $lambda4;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['queue'] = $lambda5;
			var 			$lambda6 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = ['arg',null];
			self['get_queue'] = $lambda6;
			var 			$lambda7 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda7['__name__'] = '$lambda7';

			$lambda7['__bind_type__'] = 0;
			$lambda7['__args__'] = ['arg',null];
			self['set_endevent'] = $lambda7;
			var 			$lambda8 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return 0;
			};
			$lambda8['__name__'] = '$lambda8';

			$lambda8['__bind_type__'] = 0;
			$lambda8['__args__'] = ['arg',null];
			self['get_endevent'] = $lambda8;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Channel', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.mixer */


/* end module: pyjsdl.mixer */


/*
PYJS_DEPS: ['pyjsobj.Audio', 'pyjsobj', 'time.Time', 'time']
*/
