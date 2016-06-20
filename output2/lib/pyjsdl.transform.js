/* start module: pyjsdl.transform */
$pyjs['loaded_modules']['pyjsdl.transform'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.transform']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.transform'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.transform'];
	$m['__repr__'] = function() { return '<module: pyjsdl.transform>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.transform';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['transform'] = $pyjs['loaded_modules']['pyjsdl.transform'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.transform.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.transform.py, line 5:\n    import math';
		$m.__track_lines__[6] = 'pyjsdl.transform.py, line 6:\n    from surface import Surface';
		$m.__track_lines__[8] = "pyjsdl.transform.py, line 8:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[11] = 'pyjsdl.transform.py, line 11:\n    class Transform(object):';
		$m.__track_lines__[23] = 'pyjsdl.transform.py, line 23:\n    def __init__(self):';
		$m.__track_lines__[29] = 'pyjsdl.transform.py, line 29:\n    self.deg_rad = math.pi/180.0    #180>180.0';
		$m.__track_lines__[31] = 'pyjsdl.transform.py, line 31:\n    def rotate(self, surface, angle):';
		$m.__track_lines__[35] = 'pyjsdl.transform.py, line 35:\n    if not angle:';
		$m.__track_lines__[36] = 'pyjsdl.transform.py, line 36:\n    return surface.copy()';
		$m.__track_lines__[37] = 'pyjsdl.transform.py, line 37:\n    theta = angle*self.deg_rad';
		$m.__track_lines__[38] = 'pyjsdl.transform.py, line 38:\n    width_i = surface.get_width()';
		$m.__track_lines__[39] = 'pyjsdl.transform.py, line 39:\n    height_i = surface.get_height()';
		$m.__track_lines__[40] = 'pyjsdl.transform.py, line 40:\n    cos_theta = math.fabs( math.cos(theta) )';
		$m.__track_lines__[41] = 'pyjsdl.transform.py, line 41:\n    sin_theta = math.fabs( math.sin(theta) )';
		$m.__track_lines__[42] = 'pyjsdl.transform.py, line 42:\n    width_f = int( (width_i*cos_theta)+(height_i*sin_theta) )';
		$m.__track_lines__[43] = 'pyjsdl.transform.py, line 43:\n    height_f = int( (width_i*sin_theta)+(height_i*cos_theta) )';
		$m.__track_lines__[44] = 'pyjsdl.transform.py, line 44:\n    if width_f%2:';
		$m.__track_lines__[45] = 'pyjsdl.transform.py, line 45:\n    width_f += 1';
		$m.__track_lines__[46] = 'pyjsdl.transform.py, line 46:\n    if height_f%2:';
		$m.__track_lines__[47] = 'pyjsdl.transform.py, line 47:\n    height_f += 1';
		$m.__track_lines__[48] = 'pyjsdl.transform.py, line 48:\n    surf = Surface((width_f,height_f))';
		$m.__track_lines__[49] = 'pyjsdl.transform.py, line 49:\n    surf.saveContext()';
		$m.__track_lines__[50] = 'pyjsdl.transform.py, line 50:\n    surf.translate(width_f/2.0, height_f/2.0)';
		$m.__track_lines__[51] = 'pyjsdl.transform.py, line 51:\n    surf.rotate(-theta)';
		$m.__track_lines__[52] = 'pyjsdl.transform.py, line 52:\n    surf.drawImage(surface.canvas, -width_i/2, -height_i/2)    #pyjs0.8 *.canvas';
		$m.__track_lines__[54] = 'pyjsdl.transform.py, line 54:\n    surf.restoreContext()';
		$m.__track_lines__[55] = 'pyjsdl.transform.py, line 55:\n    return surf';
		$m.__track_lines__[57] = 'pyjsdl.transform.py, line 57:\n    def rotozoom(self, surface, angle, size):';
		$m.__track_lines__[61] = 'pyjsdl.transform.py, line 61:\n    surf = self.rotate(surface, angle)';
		$m.__track_lines__[62] = 'pyjsdl.transform.py, line 62:\n    w, h = int(math.ceil(surf.get_width()*size)), int(math.ceil(surf.get_height()*size))';
		$m.__track_lines__[63] = 'pyjsdl.transform.py, line 63:\n    if w % 2:';
		$m.__track_lines__[64] = 'pyjsdl.transform.py, line 64:\n    w += 1';
		$m.__track_lines__[65] = 'pyjsdl.transform.py, line 65:\n    if h % 2:';
		$m.__track_lines__[66] = 'pyjsdl.transform.py, line 66:\n    h += 1';
		$m.__track_lines__[67] = 'pyjsdl.transform.py, line 67:\n    surf = self.scale(surf, (w, h))';
		$m.__track_lines__[68] = 'pyjsdl.transform.py, line 68:\n    return surf';
		$m.__track_lines__[70] = 'pyjsdl.transform.py, line 70:\n    def scale(self, surface, size, dest=None):';
		$m.__track_lines__[75] = 'pyjsdl.transform.py, line 75:\n    if not dest:';
		$m.__track_lines__[76] = 'pyjsdl.transform.py, line 76:\n    surf = Surface(size)';
		$m.__track_lines__[78] = 'pyjsdl.transform.py, line 78:\n    surf = dest';
		$m.__track_lines__[79] = 'pyjsdl.transform.py, line 79:\n    surf.drawImage(surface.canvas, 0, 0, surface.get_width(), surface.get_height(), 0, 0, size[0], size[1])    #pyjs0.8 *.canvas';
		$m.__track_lines__[81] = 'pyjsdl.transform.py, line 81:\n    return surf';
		$m.__track_lines__[83] = 'pyjsdl.transform.py, line 83:\n    def smoothscale(self, surface, size):';
		$m.__track_lines__[88] = 'pyjsdl.transform.py, line 88:\n    return self.scale(surface, size)';
		$m.__track_lines__[90] = 'pyjsdl.transform.py, line 90:\n    def scale2x(self, surface, dest=None):';
		$m.__track_lines__[95] = 'pyjsdl.transform.py, line 95:\n    return self.scale(surface, (surface.get_width()*2,surface.get_height()*2), dest)';
		$m.__track_lines__[97] = 'pyjsdl.transform.py, line 97:\n    def flip(self, surface, xbool=True, ybool=False):';
		$m.__track_lines__[101] = 'pyjsdl.transform.py, line 101:\n    surf = Surface((surface.get_width(),surface.get_height()))';
		$m.__track_lines__[102] = 'pyjsdl.transform.py, line 102:\n    surf.saveContext()';
		$m.__track_lines__[103] = 'pyjsdl.transform.py, line 103:\n    if xbool and ybool:';
		$m.__track_lines__[104] = 'pyjsdl.transform.py, line 104:\n    surf.translate(surface.get_width(), surface.get_height())';
		$m.__track_lines__[105] = 'pyjsdl.transform.py, line 105:\n    surf.scale(-1, -1)';
		$m.__track_lines__[107] = 'pyjsdl.transform.py, line 107:\n    surf.translate(surface.get_width(), 0)';
		$m.__track_lines__[108] = 'pyjsdl.transform.py, line 108:\n    surf.scale(-1, 1)';
		$m.__track_lines__[110] = 'pyjsdl.transform.py, line 110:\n    surf.translate(0, surface.get_height())';
		$m.__track_lines__[111] = 'pyjsdl.transform.py, line 111:\n    surf.scale(1, -1)';
		$m.__track_lines__[112] = 'pyjsdl.transform.py, line 112:\n    surf.drawImage(surface.canvas, 0, 0)    #pyjs0.8 *.canvas';
		$m.__track_lines__[114] = 'pyjsdl.transform.py, line 114:\n    surf.restoreContext()';
		$m.__track_lines__[115] = 'pyjsdl.transform.py, line 115:\n    return surf';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs['track']['module']='pyjsdl.transform';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['math'] = $p['___import___']('math', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=11;
		$m['Transform'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.transform';
			$cls_definition['__md5__'] = 'f290b2edc2392565b3e612d796ce9f53';
			$pyjs['track']['lineno']=23;
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
					if (self.prototype['__md5__'] !== 'f290b2edc2392565b3e612d796ce9f53') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div1;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=23;
				$pyjs['track']['lineno']=29;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('deg_rad', (typeof ($div1=$p['getattr']($m['math'], 'pi'))==typeof ($div2=180.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) : $p['setattr'](self, 'deg_rad', (typeof ($div1=$p['getattr']($m['math'], 'pi'))==typeof ($div2=180.0) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('rotate', function(surface, angle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					angle = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f290b2edc2392565b3e612d796ce9f53') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var cos_theta,$mod4,$mod1,$mod3,$mod2,$div3,$div6,$div10,$div7,sin_theta,$div4,theta,surf,$div8,$div9,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$div5,height_f,width_i,width_f,$mul10,height_i,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=35;
				if ($p['bool'](!$p['bool'](angle))) {
					$pyjs['track']['lineno']=36;
					$pyjs['track']['lineno']=36;
					var $pyjs__ret = surface['copy']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=37;
				theta = (typeof ($mul1=angle)==typeof ($mul2=$p['getattr'](self, 'deg_rad')) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
				$pyjs['track']['lineno']=38;
				width_i = surface['get_width']();
				$pyjs['track']['lineno']=39;
				height_i = surface['get_height']();
				$pyjs['track']['lineno']=40;
				cos_theta = $m['math']['fabs']($m['math']['cos'](theta));
				$pyjs['track']['lineno']=41;
				sin_theta = $m['math']['fabs']($m['math']['sin'](theta));
				$pyjs['track']['lineno']=42;
				width_f = $p['int']($p['__op_add']($add1=(typeof ($mul3=width_i)==typeof ($mul4=cos_theta) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)),$add2=(typeof ($mul5=height_i)==typeof ($mul6=sin_theta) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))));
				$pyjs['track']['lineno']=43;
				height_f = $p['int']($p['__op_add']($add3=(typeof ($mul7=width_i)==typeof ($mul8=sin_theta) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$add4=(typeof ($mul9=height_i)==typeof ($mul10=cos_theta) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))));
				$pyjs['track']['lineno']=44;
				if ($p['bool']((typeof ($mod1=width_f)==typeof ($mod2=$constant_int_2) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)))) {
					$pyjs['track']['lineno']=45;
					width_f = $p['__op_add']($add5=width_f,$add6=$constant_int_1);
				}
				$pyjs['track']['lineno']=46;
				if ($p['bool']((typeof ($mod3=height_f)==typeof ($mod4=$constant_int_2) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)))) {
					$pyjs['track']['lineno']=47;
					height_f = $p['__op_add']($add7=height_f,$add8=$constant_int_1);
				}
				$pyjs['track']['lineno']=48;
				surf = $m['Surface']($p['tuple']([width_f, height_f]));
				$pyjs['track']['lineno']=49;
				surf['saveContext']();
				$pyjs['track']['lineno']=50;
				surf['translate']((typeof ($div3=width_f)==typeof ($div4=2.0) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)), (typeof ($div5=height_f)==typeof ($div6=2.0) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)));
				$pyjs['track']['lineno']=51;
				surf['rotate']((typeof ($usub1=theta)=='number'?
					-$usub1:
					$p['op_usub']($usub1)));
				$pyjs['track']['lineno']=52;
				surf['drawImage']($p['getattr'](surface, 'canvas'), (typeof ($div7=(typeof ($usub2=width_i)=='number'?
					-$usub2:
					$p['op_usub']($usub2)))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)), (typeof ($div9=(typeof ($usub3=height_i)=='number'?
					-$usub3:
					$p['op_usub']($usub3)))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)));
				$pyjs['track']['lineno']=54;
				surf['restoreContext']();
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=55;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['angle']]);
			$cls_definition['rotate'] = $method;
			$pyjs['track']['lineno']=57;
			$method = $pyjs__bind_method2('rotozoom', function(surface, angle, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					angle = arguments[2];
					size = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f290b2edc2392565b3e612d796ce9f53') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var surf,$mul14,$mul12,$mul11,h,$mod5,$mod7,$mod6,$add10,$add11,w,$add12,$mul13,$add9,$mod8;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=61;
				surf = self['rotate'](surface, angle);
				$pyjs['track']['lineno']=62;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['int']($m['math']['ceil']((typeof ($mul11=surf['get_width']())==typeof ($mul12=size) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))), $p['int']($m['math']['ceil']((typeof ($mul13=surf['get_height']())==typeof ($mul14=size) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14))))]), 2, null);
				w = $tupleassign1[0];
				h = $tupleassign1[1];
				$pyjs['track']['lineno']=63;
				if ($p['bool']((typeof ($mod5=w)==typeof ($mod6=$constant_int_2) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)))) {
					$pyjs['track']['lineno']=64;
					w = $p['__op_add']($add9=w,$add10=$constant_int_1);
				}
				$pyjs['track']['lineno']=65;
				if ($p['bool']((typeof ($mod7=h)==typeof ($mod8=$constant_int_2) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8)))) {
					$pyjs['track']['lineno']=66;
					h = $p['__op_add']($add11=h,$add12=$constant_int_1);
				}
				$pyjs['track']['lineno']=67;
				surf = self['scale'](surf, $p['tuple']([w, h]));
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=68;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['angle'],['size']]);
			$cls_definition['rotozoom'] = $method;
			$pyjs['track']['lineno']=70;
			$method = $pyjs__bind_method2('scale', function(surface, size, dest) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					size = arguments[2];
					dest = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f290b2edc2392565b3e612d796ce9f53') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][5][1];
				var surf;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':70};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=70;
				$pyjs['track']['lineno']=75;
				if ($p['bool'](!$p['bool'](dest))) {
					$pyjs['track']['lineno']=76;
					surf = $m['Surface'](size);
				}
				else {
					$pyjs['track']['lineno']=78;
					surf = dest;
				}
				$pyjs['track']['lineno']=79;
				surf['drawImage']($p['getattr'](surface, 'canvas'), $constant_int_0, $constant_int_0, surface['get_width'](), surface['get_height'](), $constant_int_0, $constant_int_0, size['__getitem__']($constant_int_0), size['__getitem__']($constant_int_1));
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=81;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['size'],['dest', null]]);
			$cls_definition['scale'] = $method;
			$pyjs['track']['lineno']=83;
			$method = $pyjs__bind_method2('smoothscale', function(surface, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					size = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f290b2edc2392565b3e612d796ce9f53') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=88;
				var $pyjs__ret = self['scale'](surface, size);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['size']]);
			$cls_definition['smoothscale'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('scale2x', function(surface, dest) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					dest = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f290b2edc2392565b3e612d796ce9f53') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][4][1];
				var $mul17,$mul16,$mul15,$mul18;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=95;
				$pyjs['track']['lineno']=95;
				var $pyjs__ret = self['scale'](surface, $p['tuple']([(typeof ($mul15=surface['get_width']())==typeof ($mul16=$constant_int_2) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)), (typeof ($mul17=surface['get_height']())==typeof ($mul18=$constant_int_2) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18))]), dest);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['dest', null]]);
			$cls_definition['scale2x'] = $method;
			$pyjs['track']['lineno']=97;
			$method = $pyjs__bind_method2('flip', function(surface, xbool, ybool) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					xbool = arguments[2];
					ybool = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f290b2edc2392565b3e612d796ce9f53') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof xbool == 'undefined') xbool=arguments['callee']['__args__'][4][1];
				if (typeof ybool == 'undefined') ybool=arguments['callee']['__args__'][5][1];
				var surf,$and1,$and2;
				$pyjs['track']={'module':'pyjsdl.transform', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.transform';
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=101;
				surf = $m['Surface']($p['tuple']([surface['get_width'](), surface['get_height']()]));
				$pyjs['track']['lineno']=102;
				surf['saveContext']();
				$pyjs['track']['lineno']=103;
				if ($p['bool'](($p['bool']($and1=xbool)?ybool:$and1))) {
					$pyjs['track']['lineno']=104;
					surf['translate'](surface['get_width'](), surface['get_height']());
					$pyjs['track']['lineno']=105;
					surf['scale']((typeof ($usub4=$constant_int_1)=='number'?
						-$usub4:
						$p['op_usub']($usub4)), (typeof ($usub5=$constant_int_1)=='number'?
						-$usub5:
						$p['op_usub']($usub5)));
				}
				else if ($p['bool'](xbool)) {
					$pyjs['track']['lineno']=107;
					surf['translate'](surface['get_width'](), $constant_int_0);
					$pyjs['track']['lineno']=108;
					surf['scale']((typeof ($usub6=$constant_int_1)=='number'?
						-$usub6:
						$p['op_usub']($usub6)), $constant_int_1);
				}
				else if ($p['bool'](ybool)) {
					$pyjs['track']['lineno']=110;
					surf['translate']($constant_int_0, surface['get_height']());
					$pyjs['track']['lineno']=111;
					surf['scale']($constant_int_1, (typeof ($usub7=$constant_int_1)=='number'?
						-$usub7:
						$p['op_usub']($usub7)));
				}
				$pyjs['track']['lineno']=112;
				surf['drawImage']($p['getattr'](surface, 'canvas'), $constant_int_0, $constant_int_0);
				$pyjs['track']['lineno']=114;
				surf['restoreContext']();
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=115;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['xbool', true],['ybool', false]]);
			$cls_definition['flip'] = $method;
			$pyjs['track']['lineno']=11;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Transform', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.transform */


/* end module: pyjsdl.transform */


/*
PYJS_DEPS: ['math', 'surface.Surface', 'surface']
*/
