/* start module: pyjsdl.surfarray */
$pyjs['loaded_modules']['pyjsdl.surfarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surfarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surfarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surfarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surfarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surfarray';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['surfarray'] = $pyjs['loaded_modules']['pyjsdl.surfarray'];


	$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
	$m['PyUint8ClampedArray'] = $p['___import___']('pyjsarray.PyUint8ClampedArray', 'pyjsdl', null, false);
	$m['PyUint8Array'] = $p['___import___']('pyjsarray.PyUint8Array', 'pyjsdl', null, false);
	$m['PyUint32Array'] = $p['___import___']('pyjsarray.PyUint32Array', 'pyjsdl', null, false);
	$m['Ndarray'] = $p['___import___']('pyjsarray.Ndarray', 'pyjsdl', null, false);
	$m['PyImageData'] = $p['___import___']('pyjsarray.PyImageData', 'pyjsdl', null, false);
	$m['PyImageMatrix'] = $p['___import___']('pyjsarray.PyImageMatrix', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Surfarray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['initialized'] = false;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('array', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var imagedata;
			imagedata = surface['impl']['getImageData'](0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
			return $m['PyImageMatrix'](imagedata);
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['array'] = $method;
		$method = $pyjs__bind_method2('array2d', function(surface, copydata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				copydata = arguments[2];
			}
			if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][4][1];
			var imagedata;
			imagedata = surface['impl']['getImageData'](0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
			if ($p['bool'](!$p['bool'](copydata))) {
				return (typeof PyImageMatrixInteger == "undefined"?$m['PyImageMatrixInteger']:PyImageMatrixInteger)(imagedata);
			}
			else {
				return (typeof PyImageInteger == "undefined"?$m['PyImageInteger']:PyImageInteger)(imagedata);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['copydata', false]]);
		$cls_definition['array2d'] = $method;
		$method = $pyjs__bind_method2('array3d', function(surface, copydata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				copydata = arguments[2];
			}
			if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][4][1];
			var imagedata;
			imagedata = surface['impl']['getImageData'](0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
			if ($p['bool'](!$p['bool'](copydata))) {
				return (typeof PyImageMatrixRGB == "undefined"?$m['PyImageMatrixRGB']:PyImageMatrixRGB)(imagedata);
			}
			else {
				return (typeof PyImageRGB == "undefined"?$m['PyImageRGB']:PyImageRGB)(imagedata);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['copydata', false]]);
		$cls_definition['array3d'] = $method;
		$method = $pyjs__bind_method2('array_alpha', function(surface, copydata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				copydata = arguments[2];
			}
			if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][4][1];
			var imagedata;
			imagedata = surface['impl']['getImageData'](0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
			if ($p['bool'](!$p['bool'](copydata))) {
				return (typeof PyImageMatrixAlpha == "undefined"?$m['PyImageMatrixAlpha']:PyImageMatrixAlpha)(imagedata);
			}
			else {
				return (typeof PyImageAlpha == "undefined"?$m['PyImageAlpha']:PyImageAlpha)(imagedata);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['copydata', false]]);
		$cls_definition['array_alpha'] = $method;
		$method = $pyjs__bind_method2('make_surface', function(array) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
			}
			var surface;
			surface = $m['Surface']($p['tuple']([$p['getattr']($p['getattr'](array, '__imagedata'), 'width'), $p['getattr']($p['getattr'](array, '__imagedata'), 'height')]));
			self['blit_array'](surface, array);
			return surface;
		}
	, 1, [null,null,['self'],['array']]);
		$cls_definition['make_surface'] = $method;
		$method = $pyjs__bind_method2('blit_array', function(surface, array) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				array = arguments[2];
			}
			var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,imagedata,$iter1_idx,array2d,$iter1_iter,$iter2_idx,$pyjs_try_err,x,y,$iter2_type,value,$iter2_array,$iter1_array;
			try {
				imagedata = array['getImageData']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					imagedata = surface['impl']['getImageData'](0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
					if ($p['bool']($p['op_eq']($p['len']($p['getattr'](array, '_shape')), 2))) {
						array2d = $m['PyImageMatrix'](imagedata);
						$iter1_iter = $p['xrange'](array2d['getHeight']());
						$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
						while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
							y = $iter1_nextval['$nextval'];
							$iter2_iter = $p['xrange'](array2d['getWidth']());
							$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
							while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
								x = $iter2_nextval['$nextval'];
								value = array['__getitem__']($p['tuple']([x, y]));
								array2d['__setitem__']($p['tuple']([y, x]), $p['tuple']([((value)>>(16))&(255), ((value)>>(8))&(255), (value)&(255), 255]));
							}
						}
						imagedata = array2d['getImageData']();
					}
					else {
						imagedata['data']['set'](array['getArray']());
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			surface['impl']['putImageData'](imagedata, 0, 0, 0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
			return null;
		}
	, 1, [null,null,['self'],['surface'],['array']]);
		$cls_definition['blit_array'] = $method;
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
			self['use_arraytype'] = $lambda1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Surfarray', $p['tuple']($bases), $data);
	})();
	$m['PyImageMatrixRGB'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			index = $p['list'](index);
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([index['__getitem__'](1), index['__getitem__'](0)]), 2, null);
			index['__setitem__'](0, $tupleassign1[0]);
			index['__setitem__'](1, $tupleassign1[1]);
			index = $p['tuple'](index);
			return $m['PyImageMatrix']['__getitem__'](self, index);
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

			index = $p['list'](index);
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([index['__getitem__'](1), index['__getitem__'](0)]), 2, null);
			index['__setitem__'](0, $tupleassign2[0]);
			index['__setitem__'](1, $tupleassign2[1]);
			index = $p['tuple'](index);
			return $m['PyImageMatrix']['__setitem__'](self, index, value);
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		var $bases = new Array($m['PyImageMatrix']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageMatrixRGB', $p['tuple']($bases), $data);
	})();
	$m['PyImageRGB'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $iter5_nextval,$iter5_array,$iter3_array,$iter5_iter,$iter4_type,$iter5_type,array,$iter4_iter,index,$iter3_idx,$mul3,$iter3_nextval,$pyjs_try_err,$iter3_iter,$iter5_idx,$mul8,y,$iter3_type,$mul7,$mul6,$mul5,$mul4,data,$mul2,$mul1,i,$iter4_nextval,$iter4_idx,$add1,$add2,$iter4_array,x;
			self['__imagedata'] = $m['PyImageData'](imagedata);
			array = $m['Ndarray']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'));
			array['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), 4);
			try {
				data = $m['PyUint8ClampedArray']((typeof ($mul3=(typeof ($mul1=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul2=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))==typeof ($mul4=3) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					data = $m['PyUint8Array']((typeof ($mul7=(typeof ($mul5=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul6=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))==typeof ($mul8=3) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			index = 0;
			$iter3_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				x = $iter3_nextval['$nextval'];
				$iter4_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					y = $iter4_nextval['$nextval'];
					$iter5_iter = $p['xrange'](3);
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						i = $iter5_nextval['$nextval'];
						data['__setitem__'](index, array['__getitem__']($p['tuple']([y, x, i])));
						index = $p['__op_add']($add1=index,$add2=1);
					}
				}
			}
			try {
				$m['Ndarray']['__init__'](self, data, 0);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					$m['Ndarray']['__init__'](self, data, 1);
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $p['getattr']($p['getattr'](self, '__imagedata'), 'height'), 3);
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,index,$iter7_type,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$iter8_nextval,$iter7_idx,$iter7_nextval,i,$iter7_array,$iter8_array,$add3,$add6,$add4,$add5,y,x;
			index = 0;
			$iter6_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				x = $iter6_nextval['$nextval'];
				$iter7_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					y = $iter7_nextval['$nextval'];
					$iter8_iter = $p['xrange'](3);
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						i = $iter8_nextval['$nextval'];
						$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add3=index,$add4=i), self['__getitem__']($p['tuple']([y, x, i])));
					}
					index = $p['__op_add']($add5=index,$add6=4);
				}
			}
			return self['__imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageRGB', $p['tuple']($bases), $data);
	})();
	$m['PyImageMatrixAlpha'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return $m['PyImageMatrix']['__getitem__'](self, $p['tuple']([index['__getitem__'](1), index['__getitem__'](0), 3]));
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

			return $m['PyImageMatrix']['__setitem__'](self, $p['tuple']([index['__getitem__'](1), index['__getitem__'](0), 3]), value);
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		var $bases = new Array($m['PyImageMatrix']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageMatrixAlpha', $p['tuple']($bases), $data);
	})();
	$m['PyImageAlpha'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $iter10_nextval,$iter10_iter,array,index,$iter9_iter,$iter9_nextval,$iter9_idx,$pyjs_try_err,$iter9_type,$iter10_idx,$iter10_type,$mul9,data,$mul12,$mul11,$mul10,$iter10_array,$add7,y,x,$add8,$iter9_array;
			self['__imagedata'] = $m['PyImageData'](imagedata);
			array = $m['Ndarray']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'));
			array['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), 4);
			try {
				data = $m['PyUint8ClampedArray']((typeof ($mul9=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul10=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					data = $m['PyUint8Array']((typeof ($mul11=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul12=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			index = 0;
			$iter9_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				x = $iter9_nextval['$nextval'];
				$iter10_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					y = $iter10_nextval['$nextval'];
					data['__setitem__'](index, array['__getitem__']($p['tuple']([y, x, 3])));
					index = $p['__op_add']($add7=index,$add8=1);
				}
			}
			try {
				$m['Ndarray']['__init__'](self, data, 0);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					$m['Ndarray']['__init__'](self, data, 1);
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$add9,$iter11_iter,$iter11_type,$iter12_array,$iter12_iter,$add10,$add11,$add12,$iter11_array,y,x,$iter11_nextval,$iter11_idx,$iter12_idx,$iter12_nextval,$iter12_type;
			index = 0;
			$iter11_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				x = $iter11_nextval['$nextval'];
				$iter12_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					y = $iter12_nextval['$nextval'];
					$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add9=index,$add10=3), self['__getitem__']($p['tuple']([y, x])));
					index = $p['__op_add']($add11=index,$add12=4);
				}
			}
			return self['__imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageAlpha', $p['tuple']($bases), $data);
	})();
	$m['PyImageMatrixInteger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var value;
			value = $m['PyImageMatrix']['__getitem__'](self, $p['tuple']([index['__getitem__'](1), index['__getitem__'](0)]));
			return ((value['__getitem__'](0))<<(16))|((value['__getitem__'](1))<<(8))|(value['__getitem__'](2))|((value['__getitem__'](3))<<(24));
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

			return $m['PyImageMatrix']['__setitem__'](self, $p['tuple']([index['__getitem__'](1), index['__getitem__'](0)]), $p['tuple']([((value)>>(16))&(255), ((value)>>(8))&(255), (value)&(255), ((value)>>(24))&(255)]));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		var $bases = new Array($m['PyImageMatrix']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageMatrixInteger', $p['tuple']($bases), $data);
	})();
	$m['PyImageInteger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var index,$iter14_array,$mul14,$mul13,$iter13_iter,$add13,$iter13_array,$add14,$iter14_type,$iter13_idx,$iter14_iter,x,y,$iter13_nextval,array,data,$iter13_type,$iter14_idx,$iter14_nextval;
			self['__imagedata'] = $m['PyImageData'](imagedata);
			array = $m['Ndarray']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'));
			array['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), 4);
			data = $m['PyUint32Array']((typeof ($mul13=$p['getattr']($p['getattr'](self, '__imagedata'), 'height'))==typeof ($mul14=$p['getattr']($p['getattr'](self, '__imagedata'), 'width')) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)));
			index = 0;
			$iter13_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				x = $iter13_nextval['$nextval'];
				$iter14_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					y = $iter14_nextval['$nextval'];
					data['__setitem__'](index, ((array['__getitem__']($p['tuple']([y, x, 0])))<<(16))|((array['__getitem__']($p['tuple']([y, x, 1])))<<(8))|(array['__getitem__']($p['tuple']([y, x, 2])))|((array['__getitem__']($p['tuple']([y, x, 3])))<<(24)));
					index = $p['__op_add']($add13=index,$add14=1);
				}
			}
			$m['Ndarray']['__init__'](self, data, 3);
			self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter16_idx,$iter16_iter,index,$iter15_iter,$iter16_type,$add21,$add20,$add22,$iter16_nextval,$iter15_array,$add15,$add16,$add17,$add18,$add19,$iter16_array,$iter15_idx,$iter15_nextval,$iter15_type,y,x;
			index = 0;
			$iter15_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'));
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				x = $iter15_nextval['$nextval'];
				$iter16_iter = $p['xrange']($p['getattr']($p['getattr'](self, '__imagedata'), 'width'));
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					y = $iter16_nextval['$nextval'];
					var $tupleassign3 = $p['__ass_unpack']($p['tuple']([((self['__getitem__']($p['tuple']([y, x])))>>(16))&(255), ((self['__getitem__']($p['tuple']([y, x])))>>(8))&(255), (self['__getitem__']($p['tuple']([y, x])))&(255), ((self['__getitem__']($p['tuple']([y, x])))>>(24))&(255)]), 4, null);
					$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](index, $tupleassign3[0]);
					$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add15=index,$add16=1), $tupleassign3[1]);
					$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add17=index,$add18=2), $tupleassign3[2]);
					$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add19=index,$add20=3), $tupleassign3[3]);
					index = $p['__op_add']($add21=index,$add22=4);
				}
			}
			return self['__imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyImageInteger', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.surfarray */


/* end module: pyjsdl.surfarray */


/*
PYJS_DEPS: ['surface.Surface', 'surface', 'pyjsarray.PyUint8ClampedArray', 'pyjsarray', 'pyjsarray.PyUint8Array', 'pyjsarray.PyUint32Array', 'pyjsarray.Ndarray', 'pyjsarray.PyImageData', 'pyjsarray.PyImageMatrix']
*/
