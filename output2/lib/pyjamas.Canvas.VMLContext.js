/* start module: pyjamas.Canvas.VMLContext */
$pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.VMLContext']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.VMLContext>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.VMLContext';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['VMLContext'] = $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.VMLContext.py, line 1:\n    """';
		$m.__track_lines__[19] = 'pyjamas.Canvas.VMLContext.py, line 19:\n    from pyjamas.Canvas import GWTCanvasConsts';
		$m.__track_lines__[20] = 'pyjamas.Canvas.VMLContext.py, line 20:\n    from pyjamas.Canvas import GWTCanvasImplIEConsts';
		$m.__track_lines__[22] = 'pyjamas.Canvas.VMLContext.py, line 22:\n    """';
		$m.__track_lines__[25] = 'pyjamas.Canvas.VMLContext.py, line 25:\n    class VMLStyle:';
		$m.__track_lines__[27] = 'pyjamas.Canvas.VMLContext.py, line 27:\n    def __init__(self):';
		$m.__track_lines__[29] = "pyjamas.Canvas.VMLContext.py, line 29:\n    self.type = 'Color'";
		$m.__track_lines__[30] = 'pyjamas.Canvas.VMLContext.py, line 30:\n    self.alpha = 1';
		$m.__track_lines__[31] = "pyjamas.Canvas.VMLContext.py, line 31:\n    self.color = '#000'";
		$m.__track_lines__[32] = 'pyjamas.Canvas.VMLContext.py, line 32:\n    self.gradient = None';
		$m.__track_lines__[35] = 'pyjamas.Canvas.VMLContext.py, line 35:\n    """*';
		$m.__track_lines__[38] = 'pyjamas.Canvas.VMLContext.py, line 38:\n    class VMLContext:';
		$m.__track_lines__[40] = 'pyjamas.Canvas.VMLContext.py, line 40:\n    def __init__(self, ctx=None):';
		$m.__track_lines__[43] = 'pyjamas.Canvas.VMLContext.py, line 43:\n    if ctx is None:';
		$m.__track_lines__[46] = 'pyjamas.Canvas.VMLContext.py, line 46:\n    self.matrix = [1, 0, 0,';
		$m.__track_lines__[51] = 'pyjamas.Canvas.VMLContext.py, line 51:\n    self.arcScaleX =  1';
		$m.__track_lines__[52] = 'pyjamas.Canvas.VMLContext.py, line 52:\n    self.arcScaleY =  1';
		$m.__track_lines__[53] = 'pyjamas.Canvas.VMLContext.py, line 53:\n    self.globalAlpha =  1';
		$m.__track_lines__[54] = 'pyjamas.Canvas.VMLContext.py, line 54:\n    self.miterLimit = 10';
		$m.__track_lines__[55] = 'pyjamas.Canvas.VMLContext.py, line 55:\n    self.lineWidth =  1';
		$m.__track_lines__[56] = 'pyjamas.Canvas.VMLContext.py, line 56:\n    self.lineCap =  GWTCanvasImplIEConsts.BUTT';
		$m.__track_lines__[57] = 'pyjamas.Canvas.VMLContext.py, line 57:\n    self.lineJoin =  GWTCanvasConsts.MITER';
		$m.__track_lines__[58] = 'pyjamas.Canvas.VMLContext.py, line 58:\n    self.strokeStyle =  VMLStyle()';
		$m.__track_lines__[59] = 'pyjamas.Canvas.VMLContext.py, line 59:\n    self.fillStyle =  VMLStyle()';
		$m.__track_lines__[60] = 'pyjamas.Canvas.VMLContext.py, line 60:\n    self.globalCompositeOperation  =  GWTCanvasImplIEConsts.SOURCE_OVER';
		$m.__track_lines__[62] = 'pyjamas.Canvas.VMLContext.py, line 62:\n    return';
		$m.__track_lines__[65] = 'pyjamas.Canvas.VMLContext.py, line 65:\n    self.matrix = []';
		$m.__track_lines__[66] = 'pyjamas.Canvas.VMLContext.py, line 66:\n    for i in range(9):';
		$m.__track_lines__[67] = 'pyjamas.Canvas.VMLContext.py, line 67:\n    self.matrix.append(ctx.matrix[i])';
		$m.__track_lines__[70] = 'pyjamas.Canvas.VMLContext.py, line 70:\n    self.arcScaleX = ctx.arcScaleX';
		$m.__track_lines__[71] = 'pyjamas.Canvas.VMLContext.py, line 71:\n    self.arcScaleY = ctx.arcScaleY';
		$m.__track_lines__[72] = 'pyjamas.Canvas.VMLContext.py, line 72:\n    self.globalAlpha = ctx.globalAlpha';
		$m.__track_lines__[73] = 'pyjamas.Canvas.VMLContext.py, line 73:\n    self.miterLimit = ctx.miterLimit';
		$m.__track_lines__[74] = 'pyjamas.Canvas.VMLContext.py, line 74:\n    self.lineWidth = ctx.lineWidth';
		$m.__track_lines__[75] = 'pyjamas.Canvas.VMLContext.py, line 75:\n    self.lineCap = ctx.lineCap';
		$m.__track_lines__[76] = 'pyjamas.Canvas.VMLContext.py, line 76:\n    self.lineJoin = ctx.lineJoin';
		$m.__track_lines__[77] = 'pyjamas.Canvas.VMLContext.py, line 77:\n    self.strokeStyle = ctx.strokeStyle';
		$m.__track_lines__[78] = 'pyjamas.Canvas.VMLContext.py, line 78:\n    self.fillStyle = ctx.fillStyle';
		$m.__track_lines__[79] = 'pyjamas.Canvas.VMLContext.py, line 79:\n    self.globalCompositeOperation  = ctx.globalCompositeOperation';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_9 = new $p['int'](9);
		$pyjs['track']['module']='pyjamas.Canvas.VMLContext';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvasImplIEConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=22;
		$pyjs['track']['lineno']=25;
		$m['VMLStyle'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.VMLContext';
			$cls_definition['__md5__'] = 'bb47b87a0d32c1cd68c48ca69ab40cb3';
			$pyjs['track']['lineno']=27;
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
					if (self.prototype['__md5__'] !== 'bb47b87a0d32c1cd68c48ca69ab40cb3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.VMLContext', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.VMLContext';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', 'Color') : $p['setattr'](self, 'type', 'Color'); 
				$pyjs['track']['lineno']=30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('alpha', $constant_int_1) : $p['setattr'](self, 'alpha', $constant_int_1); 
				$pyjs['track']['lineno']=31;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('color', '#000') : $p['setattr'](self, 'color', '#000'); 
				$pyjs['track']['lineno']=32;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('gradient', null) : $p['setattr'](self, 'gradient', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=25;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('VMLStyle', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=35;
		$pyjs['track']['lineno']=38;
		$m['VMLContext'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.VMLContext';
			$cls_definition['__md5__'] = '9cb03edee7907dd3fe40b4edee0b4c35';
			$pyjs['track']['lineno']=40;
			$method = $pyjs__bind_method2('__init__', function(ctx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ctx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9cb03edee7907dd3fe40b4edee0b4c35') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ctx == 'undefined') ctx=arguments['callee']['__args__'][3][1];
				var $iter1_nextval,$iter1_type,i,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs['track']={'module':'pyjamas.Canvas.VMLContext', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.VMLContext';
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=43;
				if ($p['bool']($p['op_is'](ctx, null))) {
					$pyjs['track']['lineno']=46;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['list']([$constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1])) : $p['setattr'](self, 'matrix', $p['list']([$constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_1])); 
					$pyjs['track']['lineno']=51;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('arcScaleX', $constant_int_1) : $p['setattr'](self, 'arcScaleX', $constant_int_1); 
					$pyjs['track']['lineno']=52;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('arcScaleY', $constant_int_1) : $p['setattr'](self, 'arcScaleY', $constant_int_1); 
					$pyjs['track']['lineno']=53;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('globalAlpha', $constant_int_1) : $p['setattr'](self, 'globalAlpha', $constant_int_1); 
					$pyjs['track']['lineno']=54;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('miterLimit', $constant_int_10) : $p['setattr'](self, 'miterLimit', $constant_int_10); 
					$pyjs['track']['lineno']=55;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lineWidth', $constant_int_1) : $p['setattr'](self, 'lineWidth', $constant_int_1); 
					$pyjs['track']['lineno']=56;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lineCap', $p['getattr']($m['GWTCanvasImplIEConsts'], 'BUTT')) : $p['setattr'](self, 'lineCap', $p['getattr']($m['GWTCanvasImplIEConsts'], 'BUTT')); 
					$pyjs['track']['lineno']=57;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lineJoin', $p['getattr']($m['GWTCanvasConsts'], 'MITER')) : $p['setattr'](self, 'lineJoin', $p['getattr']($m['GWTCanvasConsts'], 'MITER')); 
					$pyjs['track']['lineno']=58;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('strokeStyle', $m['VMLStyle']()) : $p['setattr'](self, 'strokeStyle', $m['VMLStyle']()); 
					$pyjs['track']['lineno']=59;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fillStyle', $m['VMLStyle']()) : $p['setattr'](self, 'fillStyle', $m['VMLStyle']()); 
					$pyjs['track']['lineno']=60;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('globalCompositeOperation', $p['getattr']($m['GWTCanvasImplIEConsts'], 'SOURCE_OVER')) : $p['setattr'](self, 'globalCompositeOperation', $p['getattr']($m['GWTCanvasImplIEConsts'], 'SOURCE_OVER')); 
					$pyjs['track']['lineno']=62;
					$pyjs['track']['lineno']=62;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=65;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('matrix', $p['list']([])) : $p['setattr'](self, 'matrix', $p['list']([])); 
				$pyjs['track']['lineno']=66;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_9);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=67;
					self['matrix']['append']($p['getattr'](ctx, 'matrix')['__getitem__'](i));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.Canvas.VMLContext';
				$pyjs['track']['lineno']=70;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('arcScaleX', $p['getattr'](ctx, 'arcScaleX')) : $p['setattr'](self, 'arcScaleX', $p['getattr'](ctx, 'arcScaleX')); 
				$pyjs['track']['lineno']=71;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('arcScaleY', $p['getattr'](ctx, 'arcScaleY')) : $p['setattr'](self, 'arcScaleY', $p['getattr'](ctx, 'arcScaleY')); 
				$pyjs['track']['lineno']=72;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('globalAlpha', $p['getattr'](ctx, 'globalAlpha')) : $p['setattr'](self, 'globalAlpha', $p['getattr'](ctx, 'globalAlpha')); 
				$pyjs['track']['lineno']=73;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('miterLimit', $p['getattr'](ctx, 'miterLimit')) : $p['setattr'](self, 'miterLimit', $p['getattr'](ctx, 'miterLimit')); 
				$pyjs['track']['lineno']=74;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lineWidth', $p['getattr'](ctx, 'lineWidth')) : $p['setattr'](self, 'lineWidth', $p['getattr'](ctx, 'lineWidth')); 
				$pyjs['track']['lineno']=75;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lineCap', $p['getattr'](ctx, 'lineCap')) : $p['setattr'](self, 'lineCap', $p['getattr'](ctx, 'lineCap')); 
				$pyjs['track']['lineno']=76;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lineJoin', $p['getattr'](ctx, 'lineJoin')) : $p['setattr'](self, 'lineJoin', $p['getattr'](ctx, 'lineJoin')); 
				$pyjs['track']['lineno']=77;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('strokeStyle', $p['getattr'](ctx, 'strokeStyle')) : $p['setattr'](self, 'strokeStyle', $p['getattr'](ctx, 'strokeStyle')); 
				$pyjs['track']['lineno']=78;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fillStyle', $p['getattr'](ctx, 'fillStyle')) : $p['setattr'](self, 'fillStyle', $p['getattr'](ctx, 'fillStyle')); 
				$pyjs['track']['lineno']=79;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('globalCompositeOperation', $p['getattr'](ctx, 'globalCompositeOperation')) : $p['setattr'](self, 'globalCompositeOperation', $p['getattr'](ctx, 'globalCompositeOperation')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ctx', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=38;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('VMLContext', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.VMLContext */


/* end module: pyjamas.Canvas.VMLContext */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvasConsts', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts']
*/
