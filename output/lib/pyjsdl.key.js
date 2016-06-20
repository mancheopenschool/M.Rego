/* start module: pyjsdl.key */
$pyjs['loaded_modules']['pyjsdl.key'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.key']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.key'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.key'];
	$m['__repr__'] = function() { return '<module: pyjsdl.key>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.key';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['key'] = $pyjs['loaded_modules']['pyjsdl.key'];


	$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
	$m['Const'] = $p['___import___']('locals', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Key'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.key';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['keyPress'] = $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'keyPress');
			self['keyMod'] = $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'keyMod');
			self['alt'] = $p['getattr']($m['Const'], 'K_ALT');
			self['ctrl'] = $p['getattr']($m['Const'], 'K_CTRL');
			self['shift'] = $p['getattr']($m['Const'], 'K_SHIFT');
			self['_keys'] = $p['dict']([]);
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('$$name', function(keycode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				keycode = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,keyname,$iter1_array,$iter1_idx;
			if ($p['bool'](!$p['bool']($p['getattr'](self, '_keys')))) {
				$iter1_iter = $p['dir']($m['Const']);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					keyname = $iter1_nextval['$nextval'];
					if ($p['bool'](keyname['startswith']('K_'))) {
						$p['getattr'](self, '_keys')['__setitem__']($p['getattr']($m['Const'], keyname), keyname['$$split']('_')['__getitem__']((typeof ($usub1=1)=='number'?
							-$usub1:
							$p['op_usub']($usub1)))['lower']());
					}
				}
				$p['getattr'](self, '_keys')['__setitem__'](0, 'unknown key');
			}
			if ($p['bool'](!$p['getattr'](self, '_keys')['__contains__'](keycode))) {
				keycode = 0;
			}
			return $p['getattr'](self, '_keys')['__getitem__'](keycode);
		}
	, 1, [null,null,['self'],['keycode']]);
		$cls_definition['$$name'] = $method;
		$method = $pyjs__bind_method2('get_mods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return ($p['getattr'](self, 'keyMod')['__getitem__']($p['getattr'](self, 'alt'))['__getitem__']($p['getattr'](self, 'keyPress')['__getitem__']($p['getattr'](self, 'alt'))))|($p['getattr'](self, 'keyMod')['__getitem__']($p['getattr'](self, 'ctrl'))['__getitem__']($p['getattr'](self, 'keyPress')['__getitem__']($p['getattr'](self, 'ctrl'))))|($p['getattr'](self, 'keyMod')['__getitem__']($p['getattr'](self, 'shift'))['__getitem__']($p['getattr'](self, 'keyPress')['__getitem__']($p['getattr'](self, 'shift'))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_mods'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda5,$lambda4,$lambda3,$lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['get_focused'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_pressed'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['set_mods'] = $lambda3;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['set_repeat'] = $lambda4;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return true;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['get_repeat'] = $lambda5;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Key', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.key */


/* end module: pyjsdl.key */


/*
PYJS_DEPS: ['pyjsdl.event', 'pyjsdl', 'locals']
*/
