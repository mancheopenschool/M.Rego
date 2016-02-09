/* start module: pyjsdl.transform */
$pyjs['loaded_modules']['pyjsdl.transform'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.transform']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.transform'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.transform'];
	$m['__repr__'] = function() { return '<module: pyjsdl.transform>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.transform';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['transform'] = $pyjs['loaded_modules']['pyjsdl.transform'];


	$m['math'] = $p['___import___']('math', 'pyjsdl');
	$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Transform'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.transform';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div2,$div1;
			self['deg_rad'] = (typeof ($div1=$p['getattr']($m['math'], 'pi'))==typeof ($div2=180.0) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('rotate', function(surface, angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				angle = arguments[2];
			}
			var cos_theta,$mod4,$mod1,$mod3,$mod2,$div3,$div6,$div10,$div7,sin_theta,$div4,theta,surf,$div8,$div9,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$div5,height_f,width_i,width_f,$mul10,height_i,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8;
			if ($p['bool'](!$p['bool'](angle))) {
				return surface['copy']();
			}
			theta = (typeof ($mul1=angle)==typeof ($mul2=$p['getattr'](self, 'deg_rad')) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			width_i = surface['get_width']();
			height_i = surface['get_height']();
			cos_theta = $m['math']['fabs']($m['math']['cos'](theta));
			sin_theta = $m['math']['fabs']($m['math']['sin'](theta));
			width_f = $p['float_int']($p['__op_add']($add1=(typeof ($mul3=width_i)==typeof ($mul4=cos_theta) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)),$add2=(typeof ($mul5=height_i)==typeof ($mul6=sin_theta) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))));
			height_f = $p['float_int']($p['__op_add']($add3=(typeof ($mul7=width_i)==typeof ($mul8=sin_theta) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)),$add4=(typeof ($mul9=height_i)==typeof ($mul10=cos_theta) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10))));
			if ($p['bool']((typeof ($mod1=width_f)==typeof ($mod2=2) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)))) {
				width_f = $p['__op_add']($add5=width_f,$add6=1);
			}
			if ($p['bool']((typeof ($mod3=height_f)==typeof ($mod4=2) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4)))) {
				height_f = $p['__op_add']($add7=height_f,$add8=1);
			}
			surf = $m['Surface']($p['tuple']([width_f, height_f]));
			surf['saveContext']();
			surf['translate']((typeof ($div3=width_f)==typeof ($div4=2.0) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)), (typeof ($div5=height_f)==typeof ($div6=2.0) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6)));
			surf['rotate']((typeof ($usub1=theta)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			surf['drawImage']($p['getattr'](surface, 'canvas'), (typeof ($div7=(typeof ($usub2=width_i)=='number'?
				-$usub2:
				$p['op_usub']($usub2)))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8)), (typeof ($div9=(typeof ($usub3=height_i)=='number'?
				-$usub3:
				$p['op_usub']($usub3)))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10)));
			surf['restoreContext']();
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['angle']]);
		$cls_definition['rotate'] = $method;
		$method = $pyjs__bind_method2('rotozoom', function(surface, angle, size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				angle = arguments[2];
				size = arguments[3];
			}
			var surf,$mul14,$mul12,$mul11,h,$mod5,$mod7,$mod6,$add10,$add11,w,$add12,$mul13,$add9,$mod8;
			surf = self['rotate'](surface, angle);
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['float_int']($m['math']['ceil']((typeof ($mul11=surf['get_width']())==typeof ($mul12=size) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)))), $p['float_int']($m['math']['ceil']((typeof ($mul13=surf['get_height']())==typeof ($mul14=size) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))))]), 2, null);
			w = $tupleassign1[0];
			h = $tupleassign1[1];
			if ($p['bool']((typeof ($mod5=w)==typeof ($mod6=2) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6)))) {
				w = $p['__op_add']($add9=w,$add10=1);
			}
			if ($p['bool']((typeof ($mod7=h)==typeof ($mod8=2) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8)))) {
				h = $p['__op_add']($add11=h,$add12=1);
			}
			surf = self['scale'](surf, $p['tuple']([w, h]));
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['angle'],['size']]);
		$cls_definition['rotozoom'] = $method;
		$method = $pyjs__bind_method2('scale', function(surface, size, dest) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				size = arguments[2];
				dest = arguments[3];
			}
			if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][5][1];
			var surf;
			if ($p['bool'](!$p['bool'](dest))) {
				surf = $m['Surface'](size);
			}
			else {
				surf = dest;
			}
			surf['drawImage']($p['getattr'](surface, 'canvas'), 0, 0, surface['get_width'](), surface['get_height'](), 0, 0, size['__getitem__'](0), size['__getitem__'](1));
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['size'],['dest', null]]);
		$cls_definition['scale'] = $method;
		$method = $pyjs__bind_method2('smoothscale', function(surface, size) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				size = arguments[2];
			}

			return self['scale'](surface, size);
		}
	, 1, [null,null,['self'],['surface'],['size']]);
		$cls_definition['smoothscale'] = $method;
		$method = $pyjs__bind_method2('scale2x', function(surface, dest) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				dest = arguments[2];
			}
			if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][4][1];
			var $mul17,$mul16,$mul15,$mul18;
			return self['scale'](surface, $p['tuple']([(typeof ($mul15=surface['get_width']())==typeof ($mul16=2) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)), (typeof ($mul17=surface['get_height']())==typeof ($mul18=2) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18))]), dest);
		}
	, 1, [null,null,['self'],['surface'],['dest', null]]);
		$cls_definition['scale2x'] = $method;
		$method = $pyjs__bind_method2('flip', function(surface, xbool, ybool) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				xbool = arguments[2];
				ybool = arguments[3];
			}
			if (typeof xbool == 'undefined') xbool=arguments['callee']['__args__'][4][1];
			if (typeof ybool == 'undefined') ybool=arguments['callee']['__args__'][5][1];
			var surf,$and1,$and2;
			surf = $m['Surface']($p['tuple']([surface['get_width'](), surface['get_height']()]));
			surf['saveContext']();
			if ($p['bool'](($p['bool']($and1=xbool)?ybool:$and1))) {
				surf['translate'](surface['get_width'](), surface['get_height']());
				surf['scale']((typeof ($usub4=1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)), (typeof ($usub5=1)=='number'?
					-$usub5:
					$p['op_usub']($usub5)));
			}
			else if ($p['bool'](xbool)) {
				surf['translate'](surface['get_width'](), 0);
				surf['scale']((typeof ($usub6=1)=='number'?
					-$usub6:
					$p['op_usub']($usub6)), 1);
			}
			else if ($p['bool'](ybool)) {
				surf['translate'](0, surface['get_height']());
				surf['scale'](1, (typeof ($usub7=1)=='number'?
					-$usub7:
					$p['op_usub']($usub7)));
			}
			surf['drawImage']($p['getattr'](surface, 'canvas'), 0, 0);
			surf['restoreContext']();
			return surf;
		}
	, 1, [null,null,['self'],['surface'],['xbool', true],['ybool', false]]);
		$cls_definition['flip'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Transform', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.transform */


/* end module: pyjsdl.transform */


/*
PYJS_DEPS: ['math', 'surface.Surface', 'surface']
*/
