/* start module: pyjsdl.color */
$pyjs['loaded_modules']['pyjsdl.color'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.color']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.color'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.color'];
	$m['__repr__'] = function() { return '<module: pyjsdl.color>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.color';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['color'] = $pyjs['loaded_modules']['pyjsdl.color'];


	$m['_Color'] = $p['___import___']('pyjsobj.Color', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Color'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.color';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var color = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var color = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var ln,_color;
			ln = $p['len'](color);
			if ($p['bool']($p['op_eq'](ln, 1))) {
				_color = color['__getitem__'](0);
				if ($p['bool']($p['hasattr'](_color, '__len__'))) {
					ln = $p['len'](_color);
				}
			}
			else {
				_color = color;
			}
			if ($p['bool']($p['op_eq'](ln, 4))) {
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([_color['__getitem__'](0), _color['__getitem__'](1), _color['__getitem__'](2), _color['__getitem__'](3)]), 4, null);
				self['r'] = $tupleassign1[0];
				self['g'] = $tupleassign1[1];
				self['b'] = $tupleassign1[2];
				self['a'] = $tupleassign1[3];
			}
			else if ($p['bool']($p['op_eq'](ln, 3))) {
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([_color['__getitem__'](0), _color['__getitem__'](1), _color['__getitem__'](2), 255]), 4, null);
				self['r'] = $tupleassign2[0];
				self['g'] = $tupleassign2[1];
				self['b'] = $tupleassign2[2];
				self['a'] = $tupleassign2[3];
			}
			else {
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([((_color)>>(16))&(255), ((_color)>>(8))&(255), (_color)&(255), ((_color)>>(24))&(255)]), 4, null);
				self['r'] = $tupleassign3[0];
				self['g'] = $tupleassign3[1];
				self['b'] = $tupleassign3[2];
				self['a'] = $tupleassign3[3];
			}
			return null;
		}
	, 1, ['color',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('(%d,%d,%d,%d)', $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), $p['getattr'](self, 'a')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div2,$div1;
			return $p['sprintf']('rgba(%d,%d,%d,%f)', $p['tuple']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), (typeof ($div1=$p['getattr'](self, 'a'))==typeof ($div2=255.0) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return $p['dict']([[0, $p['getattr'](self, 'r')], [1, $p['getattr'](self, 'g')], [2, $p['getattr'](self, 'b')], [3, $p['getattr'](self, 'a')]])['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				val = arguments[2];
			}

			self['__setattr__']($p['dict']([[0, 'r'], [1, 'g'], [2, 'b'], [3, 'a']])['__getitem__'](index), val);
			return null;
		}
	, 1, [null,null,['self'],['index'],['val']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['iter']($p['list']([$p['getattr'](self, 'r'), $p['getattr'](self, 'g'), $p['getattr'](self, 'b'), $p['getattr'](self, 'a')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 4;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $and8,$and9,$and1,$and3,$and4,$and5,$and6,$and7,$and10,$and2,$and11;
			if ($p['bool']($p['hasattr'](other, 'a'))) {
				return ($p['bool']($and1=$p['op_eq']($p['getattr'](self, 'r'), $p['getattr'](other, 'r')))?($p['bool']($and2=$p['op_eq']($p['getattr'](self, 'g'), $p['getattr'](other, 'g')))?($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'b'), $p['getattr'](other, 'b')))?$p['op_eq']($p['getattr'](self, 'a'), $p['getattr'](other, 'a')):$and3):$and2):$and1);
			}
			else {
				if ($p['bool']($p['op_eq']($p['len'](other), 4))) {
					return ($p['bool']($and5=$p['op_eq']($p['getattr'](self, 'a'), other['__getitem__'](3)))?($p['bool']($and6=$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__'](0)))?($p['bool']($and7=$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__'](1)))?$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__'](2)):$and7):$and6):$and5);
				}
				else {
					return ($p['bool']($and9=$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__'](0)))?($p['bool']($and10=$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__'](1)))?$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__'](2)):$and10):$and9);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__eq__'] = $method;
		$method = $pyjs__bind_method2('__ne__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $or5,$or4,$or7,$or6,$or1,$or3,$or2,$or9,$or8,$or11,$or10;
			if ($p['bool']($p['hasattr'](other, 'a'))) {
				return ($p['bool']($or1=!$p['op_eq']($p['getattr'](self, 'r'), $p['getattr'](other, 'r')))?$or1:($p['bool']($or2=!$p['op_eq']($p['getattr'](self, 'g'), $p['getattr'](other, 'g')))?$or2:($p['bool']($or3=!$p['op_eq']($p['getattr'](self, 'b'), $p['getattr'](other, 'b')))?$or3:!$p['op_eq']($p['getattr'](self, 'a'), $p['getattr'](other, 'a')))));
			}
			else {
				if ($p['bool']($p['op_eq']($p['len'](other), 4))) {
					return ($p['bool']($or5=!$p['op_eq']($p['getattr'](self, 'a'), other['__getitem__'](3)))?$or5:($p['bool']($or6=!$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__'](0)))?$or6:($p['bool']($or7=!$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__'](1)))?$or7:!$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__'](2)))));
				}
				else {
					return ($p['bool']($or9=!$p['op_eq']($p['getattr'](self, 'r'), other['__getitem__'](0)))?$or9:($p['bool']($or10=!$p['op_eq']($p['getattr'](self, 'g'), other['__getitem__'](1)))?$or10:!$p['op_eq']($p['getattr'](self, 'b'), other['__getitem__'](2))));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ne__'] = $method;
		var $bases = new Array($m['_Color']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Color', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.color */


/* end module: pyjsdl.color */


/*
PYJS_DEPS: ['pyjsobj.Color', 'pyjsobj']
*/
