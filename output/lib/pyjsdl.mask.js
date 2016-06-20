/* start module: pyjsdl.mask */
$pyjs['loaded_modules']['pyjsdl.mask'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mask']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mask'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mask'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mask>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mask';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['mask'] = $pyjs['loaded_modules']['pyjsdl.mask'];


	$m['BitSet'] = $p['___import___']('pyjsbitset.BitSet', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['from_surface'] = function(surface, threshold) {
		if (typeof threshold == 'undefined') threshold=arguments['callee']['__args__'][3][1];
		var height,$iter1_iter,$iter2_type,$iter2_iter,pixels,width,$iter1_array,$iter1_nextval,$iter2_idx,$mul4,$mul3,$mul2,$mul1,xpix,$iter2_nextval,$iter1_type,i,mask,$add2,$add3,$add1,$add6,$iter1_idx,$add4,$add5,y,x,$iter2_array;
		mask = (typeof Mask == "undefined"?$m['Mask']:Mask)($p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
		if ($p['bool'](!$p['bool']($p['getattr'](mask, 'bit')))) {
			return null;
		}
		pixels = surface['impl']['getImageData'](0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
		var $tupleassign1 = $p['__ass_unpack']($p['tuple']([(typeof ($mul1=$p['getattr'](surface, 'width'))==typeof ($mul2=4) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)), $p['getattr'](surface, 'height')]), 2, null);
		width = $tupleassign1[0];
		height = $tupleassign1[1];
		$iter1_iter = $p['xrange'](0, height);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			y = $iter1_nextval['$nextval'];
			xpix = 0;
			i = $p['__op_add']($add1=(typeof ($mul3=y)==typeof ($mul4=width) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)),$add2=3);
			$iter2_iter = $p['xrange'](0, width, 4);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				x = $iter2_nextval['$nextval'];
				if ($p['bool'](($p['cmp'](surface['_getPixel'](pixels, $p['__op_add']($add3=i,$add4=x)), threshold) == 1))) {
					mask['set_at']($p['tuple']([xpix, y]));
				}
				xpix = $p['__op_add']($add5=xpix,$add6=1);
			}
		}
		return mask;
	};
	$m['from_surface']['__name__'] = 'from_surface';

	$m['from_surface']['__bind_type__'] = 0;
	$m['from_surface']['__args__'] = [null,null,['surface'],['threshold', 127]];
	$m['from_threshold'] = function(surface, color, threshold) {
		if (typeof threshold == 'undefined') threshold=arguments['callee']['__args__'][4][1];
		var $iter5_idx,$iter4_type,$iter6_type,$iter3_iter,$iter7_type,$and8,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$iter6_array,$iter7_nextval,$iter4_nextval,x,$iter5_nextval,$iter5_array,$iter6_iter,$iter6_idx,pixels,c,$mul12,$mul11,$mul10,col,$iter7_idx,height,$iter5_type,$iter4_iter,$iter3_array,$iter3_nextval,$add40,width,$iter7_iter,$mul9,$mul8,$mul7,$mul6,$mul5,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add7,$add13,$iter4_array,$add8,$add9,ix,$iter5_iter,$iter6_nextval,$add29,$add28,$iter3_idx,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$iter3_type,$add18,$add19,xpix,i,$iter7_array,mask,$iter4_idx,y;
		mask = (typeof Mask == "undefined"?$m['Mask']:Mask)($p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
		if ($p['bool'](!$p['bool']($p['getattr'](mask, 'bit')))) {
			return null;
		}
		pixels = surface['impl']['getImageData'](0, 0, $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
		if ($p['bool']($p['op_eq'](threshold, $p['tuple']([0, 0, 0, 255])))) {
			color = $m['Color'](color);
			color = $p['tuple']([$p['getattr'](color, 'r'), $p['getattr'](color, 'g'), $p['getattr'](color, 'b')]);
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(typeof ($mul5=$p['getattr'](surface, 'width'))==typeof ($mul6=4) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)), $p['getattr'](surface, 'height')]), 2, null);
			width = $tupleassign2[0];
			height = $tupleassign2[1];
			$iter3_iter = $p['xrange'](0, height);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				y = $iter3_nextval['$nextval'];
				xpix = 0;
				i = (typeof ($mul7=y)==typeof ($mul8=width) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8));
				$iter4_iter = $p['xrange'](0, width, 4);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					x = $iter4_nextval['$nextval'];
					ix = $p['__op_add']($add7=i,$add8=x);
					if ($p['bool'](($p['bool']($and1=$p['op_eq'](surface['_getPixel'](pixels, ix), color['__getitem__'](0)))?($p['bool']($and2=$p['op_eq'](surface['_getPixel'](pixels, $p['__op_add']($add9=ix,$add10=1)), color['__getitem__'](1)))?($p['bool']($and3=$p['op_eq'](surface['_getPixel'](pixels, $p['__op_add']($add11=ix,$add12=2)), color['__getitem__'](2)))?((($p['cmp'](surface['_getPixel'](pixels, $p['__op_add']($add13=ix,$add14=3)), threshold['__getitem__'](3)))|1) == 1):$and3):$and2):$and1))) {
						mask['set_at']($p['tuple']([xpix, y]));
					}
					xpix = $p['__op_add']($add15=xpix,$add16=1);
				}
			}
		}
		else {
			color = $m['Color'](color);
			col = $p['dict']([]);
			$iter5_iter = $p['enumerate']($p['tuple'](['r', 'g', 'b']));
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
				i = $tupleassign3[0];
				c = $tupleassign3[1];
				if ($p['bool'](threshold['__getitem__'](i))) {
					col['__setitem__']($p['__op_add']($add17=c,$add18='1'), $p['__op_sub']($sub3=$p['__op_sub']($sub1=color['__getitem__'](i),$sub2=threshold['__getitem__'](i)),$sub4=1));
					col['__setitem__']($p['__op_add']($add23=c,$add24='2'), $p['__op_add']($add21=$p['__op_add']($add19=color['__getitem__'](i),$add20=threshold['__getitem__'](i)),$add22=1));
				}
				else {
					col['__setitem__']($p['__op_add']($add25=c,$add26='1'), $p['__op_sub']($sub5=color['__getitem__'](i),$sub6=1));
					col['__setitem__']($p['__op_add']($add29=c,$add30='2'), $p['__op_add']($add27=color['__getitem__'](i),$add28=1));
				}
			}
			col['__setitem__']('a', $p['__op_sub']($sub7=threshold['__getitem__'](3),$sub8=1));
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([(typeof ($mul9=$p['getattr'](surface, 'width'))==typeof ($mul10=4) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)), $p['getattr'](surface, 'height')]), 2, null);
			width = $tupleassign4[0];
			height = $tupleassign4[1];
			$iter6_iter = $p['xrange'](0, height);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				y = $iter6_nextval['$nextval'];
				xpix = 0;
				i = (typeof ($mul11=y)==typeof ($mul12=width) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12));
				$iter7_iter = $p['xrange'](0, width, 4);
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					x = $iter7_nextval['$nextval'];
					ix = $p['__op_add']($add31=i,$add32=x);
					if ($p['bool'](($p['bool']($and5=(($p['cmp'](col['__getitem__']('r1'), ($compare1 = surface['_getPixel'](pixels, ix))) == -1)&&($p['cmp']($compare1, ($compare2 = col['__getitem__']('r2'))) == -1)))?($p['bool']($and6=(($p['cmp'](col['__getitem__']('g1'), ($compare3 = surface['_getPixel'](pixels, $p['__op_add']($add33=ix,$add34=1)))) == -1)&&($p['cmp']($compare3, ($compare4 = col['__getitem__']('g2'))) == -1)))?($p['bool']($and7=(($p['cmp'](col['__getitem__']('b1'), ($compare5 = surface['_getPixel'](pixels, $p['__op_add']($add35=ix,$add36=2)))) == -1)&&($p['cmp']($compare5, ($compare6 = col['__getitem__']('b2'))) == -1)))?($p['cmp'](surface['_getPixel'](pixels, $p['__op_add']($add37=ix,$add38=3)), col['__getitem__']('a')) == 1):$and7):$and6):$and5))) {
						mask['set_at']($p['tuple']([xpix, y]));
					}
					xpix = $p['__op_add']($add39=xpix,$add40=1);
				}
			}
		}
		return mask;
	};
	$m['from_threshold']['__name__'] = 'from_threshold';

	$m['from_threshold']['__bind_type__'] = 0;
	$m['from_threshold']['__args__'] = [null,null,['surface'],['color'],['threshold', $p['tuple']([0, 0, 0, 255])]];
	$m['Mask'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mask';
		$method = $pyjs__bind_method2('__init__', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $iter8_idx,$iter8_array,$iter8_iter,$iter8_nextval,$iter8_type,bitset;
			self['width'] = $p['float_int'](width);
			self['height'] = $p['float_int'](height);
			self['bit'] = $p['list']([]);
			$iter8_iter = $p['range']($p['getattr'](self, 'height'));
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				bitset = $iter8_nextval['$nextval'];
				self['bit']['append']($m['BitSet']($p['getattr'](self, 'width')));
			}
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
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
		$method = $pyjs__bind_method2('get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_size'] = $method;
		$method = $pyjs__bind_method2('get_at', function(pos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}

			return $p['getattr'](self, 'bit')['__getitem__'](pos['__getitem__'](1))['get'](pos['__getitem__'](0));
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['get_at'] = $method;
		$method = $pyjs__bind_method2('set_at', function(pos, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];

			$p['getattr'](self, 'bit')['__getitem__'](pos['__getitem__'](1))['set'](pos['__getitem__'](0), value);
			return null;
		}
	, 1, [null,null,['self'],['pos'],['value', 1]]);
		$cls_definition['set_at'] = $method;
		$method = $pyjs__bind_method2('fill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,bitset,$iter9_array;
			$iter9_iter = $p['getattr'](self, 'bit');
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				bitset = $iter9_nextval['$nextval'];
				bitset['fill']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$iter10_array,bitset,$iter10_type,$iter10_iter,$iter10_idx;
			$iter10_iter = $p['getattr'](self, 'bit');
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				bitset = $iter10_nextval['$nextval'];
				bitset['clear']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('invert', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter11_iter,$iter11_type,bitset,$iter11_array,$iter11_nextval,$iter11_idx;
			$iter11_iter = $p['getattr'](self, 'bit');
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				bitset = $iter11_nextval['$nextval'];
				bitset['flip'](0, $p['getattr'](self, 'width'));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['invert'] = $method;
		$method = $pyjs__bind_method2('count', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter12_type,$iter12_array,$add42,$add41,$iter12_nextval,$iter12_iter,bitset,true_bits,$iter12_idx;
			true_bits = 0;
			$iter12_iter = $p['getattr'](self, 'bit');
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				bitset = $iter12_nextval['$nextval'];
				true_bits = $p['__op_add']($add41=true_bits,$add42=bitset['cardinality']());
			}
			return true_bits;
		}
	, 1, [null,null,['self']]);
		$cls_definition['count'] = $method;
		$method = $pyjs__bind_method2('toString', function(bit) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bit = arguments[1];
			}
			if (typeof bit == 'undefined') bit=arguments['callee']['__args__'][3][1];
			var bitstr,$iter13_nextval,$iter13_iter,cbit,$iter13_array,cbitset,$iter13_idx,$iter13_type,bitset;
			cbit = $p['dict']([[true, bit['__getitem__'](0)], [false, bit['__getitem__'](1)]]);
			cbitset = $p['list']([]);
			$iter13_iter = $p['getattr'](self, 'bit');
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				bitset = $iter13_nextval['$nextval'];
				cbitset['append']('\n');
				cbitset['extend'](function(){
					var $iter14_array,$iter14_type,$collcomp1,$iter14_iter,bit,$iter14_idx,$iter14_nextval;
	$collcomp1 = $p['list']();
				$iter14_iter = $p['range']($p['getattr'](self, 'width'));
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					bit = $iter14_nextval['$nextval'];
					$collcomp1['append'](cbit['__getitem__'](bitset['get'](bit)));
				}

	return $collcomp1;}());
			}
			bitstr = ''['join'](cbitset);
			return bitstr;
		}
	, 1, [null,null,['self'],['bit', $p['tuple'](['1', '0'])]]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Mask', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.mask */


/* end module: pyjsdl.mask */


/*
PYJS_DEPS: ['pyjsbitset.BitSet', 'pyjsbitset', 'color.Color', 'color']
*/
