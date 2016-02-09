/* start module: pyjamas.Canvas.CanvasGradientImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.CanvasGradientImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.CanvasGradientImplIE6';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['CanvasGradientImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 1:\n    """';
		$m.__track_lines__[18] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 18:\n    import math';
		$m.__track_lines__[22] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 22:\n    from pyjamas.Canvas.ColorStop import ColorStop';
		$m.__track_lines__[24] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 24:\n    """*';
		$m.__track_lines__[27] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 27:\n    class CanvasGradientImplIE6:';
		$m.__track_lines__[28] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 28:\n    def __init__(self, x0, y0, x1, y1):';
		$m.__track_lines__[29] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 29:\n    self.startX = x0';
		$m.__track_lines__[30] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 30:\n    self.startY = y0';
		$m.__track_lines__[31] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 31:\n    self.endX = x1';
		$m.__track_lines__[32] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 32:\n    self.endY = y1';
		$m.__track_lines__[33] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 33:\n    self.startRad = 0';
		$m.__track_lines__[34] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 34:\n    self.endRad = 0';
		$m.__track_lines__[35] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 35:\n    self.dx = x1 - x0';
		$m.__track_lines__[36] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 36:\n    self.dy = y1 - y0';
		$m.__track_lines__[37] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 37:\n    self.length =  math.sqrt((self.dx * self.dx) + (self.dy * self.dy))';
		$m.__track_lines__[38] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 38:\n    if self.dy == 0:';
		$m.__track_lines__[40] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 40:\n    self.angle = 90';
		$m.__track_lines__[42] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 42:\n    self.angle = int(math.atan(self.dx/self.dy) * 180 / math.pi) + 180';
		$m.__track_lines__[44] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 44:\n    self.colorStops = []';
		$m.__track_lines__[46] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 46:\n    def addColorStop(self, offset, color):';
		$m.__track_lines__[47] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 47:\n    newColorStop = ColorStop(offset, color)';
		$m.__track_lines__[48] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 48:\n    for i in range(len(self.colorStops)):';
		$m.__track_lines__[49] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 49:\n    cs = self.colorStops[i]';
		$m.__track_lines__[50] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 50:\n    if offset < cs.offset:';
		$m.__track_lines__[51] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 51:\n    self.colorStops.append(i, newColorStop)';
		$m.__track_lines__[52] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 52:\n    return';
		$m.__track_lines__[54] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 54:\n    self.colorStops.append(newColorStop)';
		$m.__track_lines__[57] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 57:\n    """*';
		$m.__track_lines__[62] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 62:\n    def cloneGradient(self):';
		$m.__track_lines__[63] = 'pyjamas.Canvas.CanvasGradientImplIE6.py, line 63:\n    pass';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_90 = new $p['int'](90);
		var $constant_int_180 = new $p['int'](180);
		$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplIE6';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=22;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['ColorStop'] = $p['___import___']('pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=24;
		$pyjs['track']['lineno']=27;
		$m['CanvasGradientImplIE6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.CanvasGradientImplIE6';
			$cls_definition['__md5__'] = '4c6628dd31b10bcb3a66fa0dd1efdb94';
			$pyjs['track']['lineno']=28;
			$method = $pyjs__bind_method2('__init__', function(x0, y0, x1, y1) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					x1 = arguments[3];
					y1 = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c6628dd31b10bcb3a66fa0dd1efdb94') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul6,$div1,$mul1,$sub3,$sub2,$sub1,$sub4,$div2,$div3,$mul5,$mul4,$mul3,$mul2,$div4,$add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplIE6', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplIE6';
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startX', x0) : $p['setattr'](self, 'startX', x0); 
				$pyjs['track']['lineno']=30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startY', y0) : $p['setattr'](self, 'startY', y0); 
				$pyjs['track']['lineno']=31;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('endX', x1) : $p['setattr'](self, 'endX', x1); 
				$pyjs['track']['lineno']=32;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('endY', y1) : $p['setattr'](self, 'endY', y1); 
				$pyjs['track']['lineno']=33;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startRad', $constant_int_0) : $p['setattr'](self, 'startRad', $constant_int_0); 
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('endRad', $constant_int_0) : $p['setattr'](self, 'endRad', $constant_int_0); 
				$pyjs['track']['lineno']=35;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dx', $p['__op_sub']($sub1=x1,$sub2=x0)) : $p['setattr'](self, 'dx', $p['__op_sub']($sub1=x1,$sub2=x0)); 
				$pyjs['track']['lineno']=36;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('dy', $p['__op_sub']($sub3=y1,$sub4=y0)) : $p['setattr'](self, 'dy', $p['__op_sub']($sub3=y1,$sub4=y0)); 
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('length', $m['math']['sqrt']($p['__op_add']($add1=(typeof ($mul1=$p['getattr'](self, 'dx'))==typeof ($mul2=$p['getattr'](self, 'dx')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)),$add2=(typeof ($mul3=$p['getattr'](self, 'dy'))==typeof ($mul4=$p['getattr'](self, 'dy')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))))) : $p['setattr'](self, 'length', $m['math']['sqrt']($p['__op_add']($add1=(typeof ($mul1=$p['getattr'](self, 'dx'))==typeof ($mul2=$p['getattr'](self, 'dx')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)),$add2=(typeof ($mul3=$p['getattr'](self, 'dy'))==typeof ($mul4=$p['getattr'](self, 'dy')) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4))))); 
				$pyjs['track']['lineno']=38;
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'dy'), $constant_int_0))) {
					$pyjs['track']['lineno']=40;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('angle', $constant_int_90) : $p['setattr'](self, 'angle', $constant_int_90); 
				}
				else {
					$pyjs['track']['lineno']=42;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('angle', $p['__op_add']($add3=$p['int']((typeof ($div3=(typeof ($mul5=$m['math']['atan']((typeof ($div1=$p['getattr'](self, 'dx'))==typeof ($div2=$p['getattr'](self, 'dy')) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))))==typeof ($mul6=$constant_int_180) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))==typeof ($div4=$p['getattr']($m['math'], 'pi')) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))),$add4=$constant_int_180)) : $p['setattr'](self, 'angle', $p['__op_add']($add3=$p['int']((typeof ($div3=(typeof ($mul5=$m['math']['atan']((typeof ($div1=$p['getattr'](self, 'dx'))==typeof ($div2=$p['getattr'](self, 'dy')) && typeof $div1=='number' && $div2 !== 0?
						$div1/$div2:
						$p['op_div']($div1,$div2))))==typeof ($mul6=$constant_int_180) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))==typeof ($div4=$p['getattr']($m['math'], 'pi')) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4))),$add4=$constant_int_180)); 
				}
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('colorStops', $p['list']([])) : $p['setattr'](self, 'colorStops', $p['list']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=46;
			$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					offset = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c6628dd31b10bcb3a66fa0dd1efdb94') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,newColorStop,$pyjs__trackstack_size_1,$iter1_iter,i,$iter1_array,cs,$iter1_idx;
				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplIE6', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplIE6';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=47;
				newColorStop = $m['ColorStop'](offset, color);
				$pyjs['track']['lineno']=48;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($p['len']($p['getattr'](self, 'colorStops')));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=49;
					cs = $p['getattr'](self, 'colorStops')['__getitem__'](i);
					$pyjs['track']['lineno']=50;
					if ($p['bool'](($p['cmp'](offset, $p['getattr'](cs, 'offset')) == -1))) {
						$pyjs['track']['lineno']=51;
						self['colorStops']['append'](i, newColorStop);
						$pyjs['track']['lineno']=52;
						$pyjs['track']['lineno']=52;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplIE6';
				$pyjs['track']['lineno']=54;
				self['colorStops']['append'](newColorStop);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['offset'],['color']]);
			$cls_definition['addColorStop'] = $method;
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=62;
			$method = $pyjs__bind_method2('cloneGradient', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4c6628dd31b10bcb3a66fa0dd1efdb94') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.CanvasGradientImplIE6', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.CanvasGradientImplIE6';
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=63;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cloneGradient'] = $method;
			$pyjs['track']['lineno']=27;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CanvasGradientImplIE6', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.CanvasGradientImplIE6 */


/* end module: pyjamas.Canvas.CanvasGradientImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.ColorStop']
*/
