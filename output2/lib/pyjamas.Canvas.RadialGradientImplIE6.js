/* start module: pyjamas.Canvas.RadialGradientImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.RadialGradientImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.RadialGradientImplIE6';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['RadialGradientImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'];
	try {
		$m.__track_lines__[32] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 32:\n    def cloneGradient(self):';
		$m.__track_lines__[1] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 1:\n    """';
		$m.__track_lines__[49] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 49:\n    return newGrad';
		$m.__track_lines__[37] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 37:\n    newGrad.startX = self.startX';
		$m.__track_lines__[38] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 38:\n    newGrad.startY = self.startY';
		$m.__track_lines__[33] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 33:\n    newGrad = RadialGradientImplIE6(self.startX,self.startY,';
		$m.__track_lines__[40] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 40:\n    newGrad.endX = self.endX';
		$m.__track_lines__[41] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 41:\n    newGrad.endY = self.endY';
		$m.__track_lines__[42] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 42:\n    newGrad.endRad = self.endRad';
		$m.__track_lines__[39] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 39:\n    newGrad.startRad = self.startRad';
		$m.__track_lines__[44] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 44:\n    cStops = self.colorStops';
		$m.__track_lines__[46] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 46:\n    for i in range(len(cStops)):';
		$m.__track_lines__[47] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 47:\n    newGrad.colorStops.append(cStops[i].cloneColorStop())';
		$m.__track_lines__[17] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 17:\n    from pyjamas.Canvas.CanvasGradientImplIE6 import CanvasGradientImplIE6';
		$m.__track_lines__[19] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 19:\n    """*';
		$m.__track_lines__[23] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 23:\n    class RadialGradientImplIE6 (CanvasGradientImplIE6):';
		$m.__track_lines__[25] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 25:\n    def __init__(self, x0, y0, r0, x1, y1, r1):';
		$m.__track_lines__[26] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 26:\n    CanvasGradientImplIE6.__init__(self, x0,y0,x1,y1)';
		$m.__track_lines__[27] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 27:\n    self.startRad = r0';
		$m.__track_lines__[28] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 28:\n    self.endRad = r1';
		$m.__track_lines__[29] = 'pyjamas.Canvas.RadialGradientImplIE6.py, line 29:\n    self.type = "gradientradial"';


		$pyjs['track']['module']='pyjamas.Canvas.RadialGradientImplIE6';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']['lineno']=23;
		$m['RadialGradientImplIE6'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.RadialGradientImplIE6';
			$cls_definition['__md5__'] = 'a86b1db240ebd54649547496adb1ff55';
			$pyjs['track']['lineno']=25;
			$method = $pyjs__bind_method2('__init__', function(x0, y0, r0, x1, y1, r1) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					x0 = arguments[1];
					y0 = arguments[2];
					r0 = arguments[3];
					x1 = arguments[4];
					y1 = arguments[5];
					r1 = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a86b1db240ebd54649547496adb1ff55') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.RadialGradientImplIE6', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.RadialGradientImplIE6';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=26;
				$m['CanvasGradientImplIE6']['__init__'](self, x0, y0, x1, y1);
				$pyjs['track']['lineno']=27;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('startRad', r0) : $p['setattr'](self, 'startRad', r0); 
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('endRad', r1) : $p['setattr'](self, 'endRad', r1); 
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', 'gradientradial') : $p['setattr'](self, 'type', 'gradientradial'); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=32;
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
					if (self.prototype['__md5__'] !== 'a86b1db240ebd54649547496adb1ff55') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,i,cStops,newGrad,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs['track']={'module':'pyjamas.Canvas.RadialGradientImplIE6', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.RadialGradientImplIE6';
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=33;
				newGrad = $m['RadialGradientImplIE6']($p['getattr'](self, 'startX'), $p['getattr'](self, 'startY'), $p['getattr'](self, 'startRad'), $p['getattr'](self, 'endX'), $p['getattr'](self, 'endY'), $p['getattr'](self, 'endRad'));
				$pyjs['track']['lineno']=37;
				newGrad['__is_instance__'] && typeof newGrad['__setattr__'] == 'function' ? newGrad['__setattr__']('startX', $p['getattr'](self, 'startX')) : $p['setattr'](newGrad, 'startX', $p['getattr'](self, 'startX')); 
				$pyjs['track']['lineno']=38;
				newGrad['__is_instance__'] && typeof newGrad['__setattr__'] == 'function' ? newGrad['__setattr__']('startY', $p['getattr'](self, 'startY')) : $p['setattr'](newGrad, 'startY', $p['getattr'](self, 'startY')); 
				$pyjs['track']['lineno']=39;
				newGrad['__is_instance__'] && typeof newGrad['__setattr__'] == 'function' ? newGrad['__setattr__']('startRad', $p['getattr'](self, 'startRad')) : $p['setattr'](newGrad, 'startRad', $p['getattr'](self, 'startRad')); 
				$pyjs['track']['lineno']=40;
				newGrad['__is_instance__'] && typeof newGrad['__setattr__'] == 'function' ? newGrad['__setattr__']('endX', $p['getattr'](self, 'endX')) : $p['setattr'](newGrad, 'endX', $p['getattr'](self, 'endX')); 
				$pyjs['track']['lineno']=41;
				newGrad['__is_instance__'] && typeof newGrad['__setattr__'] == 'function' ? newGrad['__setattr__']('endY', $p['getattr'](self, 'endY')) : $p['setattr'](newGrad, 'endY', $p['getattr'](self, 'endY')); 
				$pyjs['track']['lineno']=42;
				newGrad['__is_instance__'] && typeof newGrad['__setattr__'] == 'function' ? newGrad['__setattr__']('endRad', $p['getattr'](self, 'endRad')) : $p['setattr'](newGrad, 'endRad', $p['getattr'](self, 'endRad')); 
				$pyjs['track']['lineno']=44;
				cStops = $p['getattr'](self, 'colorStops');
				$pyjs['track']['lineno']=46;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($p['len'](cStops));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=47;
					newGrad['colorStops']['append'](cStops['__getitem__'](i)['cloneColorStop']());
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.Canvas.RadialGradientImplIE6';
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=49;
				var $pyjs__ret = newGrad;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cloneGradient'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array($m['CanvasGradientImplIE6']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RadialGradientImplIE6', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.RadialGradientImplIE6 */


/* end module: pyjamas.Canvas.RadialGradientImplIE6 */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/
