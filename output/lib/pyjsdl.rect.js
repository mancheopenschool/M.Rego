/* start module: pyjsdl.rect */
$pyjs['loaded_modules']['pyjsdl.rect'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.rect']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.rect'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.rect'];
	$m['__repr__'] = function() { return '<module: pyjsdl.rect>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.rect';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['rect'] = $pyjs['loaded_modules']['pyjsdl.rect'];


	$m['__docformat__'] = 'restructuredtext';
	$m['Rect'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.rect';
		var 		$lambda1 = function(self, val) {
			var $sub3,$div3,$div2,$sub2,$sub1,$div1,$div4,$sub4;
			return self['setLocation']($p['__op_sub']($sub1=val['__getitem__'](0),$sub2=$p['float_int']((typeof ($div1=$p['getattr'](self, 'width'))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))), $p['__op_sub']($sub3=val['__getitem__'](1),$sub4=$p['float_int']((typeof ($div3=$p['getattr'](self, 'height'))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))));
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['self'],['val']];
		var 		$lambda2 = function(self, val) {
			var $div6,$sub6,$sub5,$div5;
			return self['setLocation']($p['__op_sub']($sub5=val,$sub6=$p['float_int']((typeof ($div5=$p['getattr'](self, 'width'))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6)))), $p['getattr'](self, 'y'));
		};
		$lambda2['__name__'] = '$lambda2';

		$lambda2['__bind_type__'] = 0;
		$lambda2['__args__'] = [null,null,['self'],['val']];
		var 		$lambda3 = function(self, val) {
			var $div8,$sub8,$sub7,$div7;
			return self['setLocation']($p['getattr'](self, 'x'), $p['__op_sub']($sub7=val,$sub8=$p['float_int']((typeof ($div7=$p['getattr'](self, 'height'))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8)))));
		};
		$lambda3['__name__'] = '$lambda3';

		$lambda3['__bind_type__'] = 0;
		$lambda3['__args__'] = [null,null,['self'],['val']];
		var 		$lambda4 = function(self, val) {

			return self['setLocation']($p['getattr'](self, 'x'), val);
		};
		$lambda4['__name__'] = '$lambda4';

		$lambda4['__bind_type__'] = 0;
		$lambda4['__args__'] = [null,null,['self'],['val']];
		var 		$lambda5 = function(self, val) {

			return self['setLocation'](val, $p['getattr'](self, 'y'));
		};
		$lambda5['__name__'] = '$lambda5';

		$lambda5['__bind_type__'] = 0;
		$lambda5['__args__'] = [null,null,['self'],['val']];
		var 		$lambda6 = function(self, val) {
			var $sub10,$sub9;
			return self['setLocation']($p['getattr'](self, 'x'), $p['__op_sub']($sub9=val,$sub10=$p['getattr'](self, 'height')));
		};
		$lambda6['__name__'] = '$lambda6';

		$lambda6['__bind_type__'] = 0;
		$lambda6['__args__'] = [null,null,['self'],['val']];
		var 		$lambda7 = function(self, val) {
			var $sub12,$sub11;
			return self['setLocation']($p['__op_sub']($sub11=val,$sub12=$p['getattr'](self, 'width')), $p['getattr'](self, 'y'));
		};
		$lambda7['__name__'] = '$lambda7';

		$lambda7['__bind_type__'] = 0;
		$lambda7['__args__'] = [null,null,['self'],['val']];
		var 		$lambda8 = function(self, val) {

			return self['setLocation'](val['__getitem__'](0), val['__getitem__'](1));
		};
		$lambda8['__name__'] = '$lambda8';

		$lambda8['__bind_type__'] = 0;
		$lambda8['__args__'] = [null,null,['self'],['val']];
		var 		$lambda9 = function(self, val) {
			var $sub13,$sub14;
			return self['setLocation'](val['__getitem__'](0), $p['__op_sub']($sub13=val['__getitem__'](1),$sub14=$p['getattr'](self, 'height')));
		};
		$lambda9['__name__'] = '$lambda9';

		$lambda9['__bind_type__'] = 0;
		$lambda9['__args__'] = [null,null,['self'],['val']];
		var 		$lambda10 = function(self, val) {
			var $sub15,$sub16;
			return self['setLocation']($p['__op_sub']($sub15=val['__getitem__'](0),$sub16=$p['getattr'](self, 'width')), val['__getitem__'](1));
		};
		$lambda10['__name__'] = '$lambda10';

		$lambda10['__bind_type__'] = 0;
		$lambda10['__args__'] = [null,null,['self'],['val']];
		var 		$lambda11 = function(self, val) {
			var $sub19,$sub18,$sub17,$sub20;
			return self['setLocation']($p['__op_sub']($sub17=val['__getitem__'](0),$sub18=$p['getattr'](self, 'width')), $p['__op_sub']($sub19=val['__getitem__'](1),$sub20=$p['getattr'](self, 'height')));
		};
		$lambda11['__name__'] = '$lambda11';

		$lambda11['__bind_type__'] = 0;
		$lambda11['__args__'] = [null,null,['self'],['val']];
		var 		$lambda12 = function(self, val) {
			var $sub22,$sub21,$div10,$div9;
			return self['setLocation']($p['__op_sub']($sub21=val['__getitem__'](0),$sub22=$p['float_int']((typeof ($div9=$p['getattr'](self, 'width'))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10)))), val['__getitem__'](1));
		};
		$lambda12['__name__'] = '$lambda12';

		$lambda12['__bind_type__'] = 0;
		$lambda12['__args__'] = [null,null,['self'],['val']];
		var 		$lambda13 = function(self, val) {
			var $sub23,$sub24,$div11,$div12;
			return self['setLocation'](val['__getitem__'](0), $p['__op_sub']($sub23=val['__getitem__'](1),$sub24=$p['float_int']((typeof ($div11=$p['getattr'](self, 'height'))==typeof ($div12=2) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)))));
		};
		$lambda13['__name__'] = '$lambda13';

		$lambda13['__bind_type__'] = 0;
		$lambda13['__args__'] = [null,null,['self'],['val']];
		var 		$lambda14 = function(self, val) {
			var $sub26,$sub27,$sub25,$div14,$div13,$sub28;
			return self['setLocation']($p['__op_sub']($sub25=val['__getitem__'](0),$sub26=$p['float_int']((typeof ($div13=$p['getattr'](self, 'width'))==typeof ($div14=2) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14)))), $p['__op_sub']($sub27=val['__getitem__'](1),$sub28=$p['getattr'](self, 'height')));
		};
		$lambda14['__name__'] = '$lambda14';

		$lambda14['__bind_type__'] = 0;
		$lambda14['__args__'] = [null,null,['self'],['val']];
		var 		$lambda15 = function(self, val) {
			var $sub31,$sub30,$sub32,$div15,$sub29,$div16;
			return self['setLocation']($p['__op_sub']($sub29=val['__getitem__'](0),$sub30=$p['getattr'](self, 'width')), $p['__op_sub']($sub31=val['__getitem__'](1),$sub32=$p['float_int']((typeof ($div15=$p['getattr'](self, 'height'))==typeof ($div16=2) && typeof $div15=='number' && $div16 !== 0?
				$div15/$div16:
				$p['op_div']($div15,$div16)))));
		};
		$lambda15['__name__'] = '$lambda15';

		$lambda15['__bind_type__'] = 0;
		$lambda15['__args__'] = [null,null,['self'],['val']];
		var 		$lambda16 = function(self, val) {

			return self['setSize'](val['__getitem__'](0), val['__getitem__'](1));
		};
		$lambda16['__name__'] = '$lambda16';

		$lambda16['__bind_type__'] = 0;
		$lambda16['__args__'] = [null,null,['self'],['val']];
		var 		$lambda17 = function(self, val) {

			return self['setSize'](val, $p['getattr'](self, 'height'));
		};
		$lambda17['__name__'] = '$lambda17';

		$lambda17['__bind_type__'] = 0;
		$lambda17['__args__'] = [null,null,['self'],['val']];
		var 		$lambda18 = function(self, val) {

			return self['setSize']($p['getattr'](self, 'width'), val);
		};
		$lambda18['__name__'] = '$lambda18';

		$lambda18['__bind_type__'] = 0;
		$lambda18['__args__'] = [null,null,['self'],['val']];
		var 		$lambda19 = function(self, val) {

			return self['setSize'](val, $p['getattr'](self, 'height'));
		};
		$lambda19['__name__'] = '$lambda19';

		$lambda19['__bind_type__'] = 0;
		$lambda19['__args__'] = [null,null,['self'],['val']];
		var 		$lambda20 = function(self, val) {

			return self['setSize']($p['getattr'](self, 'width'), val);
		};
		$lambda20['__name__'] = '$lambda20';

		$lambda20['__bind_type__'] = 0;
		$lambda20['__args__'] = [null,null,['self'],['val']];
		var 		$lambda21 = function(self, val) {

			return self['setLocation'](val, $p['getattr'](self, 'y'));
		};
		$lambda21['__name__'] = '$lambda21';

		$lambda21['__bind_type__'] = 0;
		$lambda21['__args__'] = [null,null,['self'],['val']];
		var 		$lambda22 = function(self, val) {

			return self['setLocation']($p['getattr'](self, 'x'), val);
		};
		$lambda22['__name__'] = '$lambda22';

		$lambda22['__bind_type__'] = 0;
		$lambda22['__args__'] = [null,null,['self'],['val']];
		$cls_definition['_xy'] = $p['dict']([['center', $lambda1], ['centerx', $lambda2], ['centery', $lambda3], ['top', $lambda4], ['left', $lambda5], ['bottom', $lambda6], ['right', $lambda7], ['topleft', $lambda8], ['bottomleft', $lambda9], ['topright', $lambda10], ['bottomright', $lambda11], ['midtop', $lambda12], ['midleft', $lambda13], ['midbottom', $lambda14], ['midright', $lambda15], ['size', $lambda16], ['width', $lambda17], ['height', $lambda18], ['w', $lambda19], ['h', $lambda20], ['x', $lambda21], ['y', $lambda22]]);
		var 		$lambda23 = function(self) {
			var $div20,$div18,$div19,$div17,$add2,$add3,$add1,$add4;
			return $p['tuple']([$p['__op_add']($add1=$p['getattr'](self, 'x'),$add2=$p['float_int']((typeof ($div17=$p['getattr'](self, 'width'))==typeof ($div18=2) && typeof $div17=='number' && $div18 !== 0?
				$div17/$div18:
				$p['op_div']($div17,$div18)))), $p['__op_add']($add3=$p['getattr'](self, 'y'),$add4=$p['float_int']((typeof ($div19=$p['getattr'](self, 'height'))==typeof ($div20=2) && typeof $div19=='number' && $div20 !== 0?
				$div19/$div20:
				$p['op_div']($div19,$div20))))]);
		};
		$lambda23['__name__'] = '$lambda23';

		$lambda23['__bind_type__'] = 0;
		$lambda23['__args__'] = [null,null,['self']];
		var 		$lambda24 = function(self) {
			var $div21,$div22,$add6,$add5;
			return $p['__op_add']($add5=$p['getattr'](self, 'x'),$add6=$p['float_int']((typeof ($div21=$p['getattr'](self, 'width'))==typeof ($div22=2) && typeof $div21=='number' && $div22 !== 0?
				$div21/$div22:
				$p['op_div']($div21,$div22))));
		};
		$lambda24['__name__'] = '$lambda24';

		$lambda24['__bind_type__'] = 0;
		$lambda24['__args__'] = [null,null,['self']];
		var 		$lambda25 = function(self) {
			var $add8,$add7,$div23,$div24;
			return $p['__op_add']($add7=$p['getattr'](self, 'y'),$add8=$p['float_int']((typeof ($div23=$p['getattr'](self, 'height'))==typeof ($div24=2) && typeof $div23=='number' && $div24 !== 0?
				$div23/$div24:
				$p['op_div']($div23,$div24))));
		};
		$lambda25['__name__'] = '$lambda25';

		$lambda25['__bind_type__'] = 0;
		$lambda25['__args__'] = [null,null,['self']];
		var 		$lambda26 = function(self) {

			return $p['getattr'](self, 'y');
		};
		$lambda26['__name__'] = '$lambda26';

		$lambda26['__bind_type__'] = 0;
		$lambda26['__args__'] = [null,null,['self']];
		var 		$lambda27 = function(self) {

			return $p['getattr'](self, 'x');
		};
		$lambda27['__name__'] = '$lambda27';

		$lambda27['__bind_type__'] = 0;
		$lambda27['__args__'] = [null,null,['self']];
		var 		$lambda28 = function(self) {
			var $add9,$add10;
			return $p['__op_add']($add9=$p['getattr'](self, 'y'),$add10=$p['getattr'](self, 'height'));
		};
		$lambda28['__name__'] = '$lambda28';

		$lambda28['__bind_type__'] = 0;
		$lambda28['__args__'] = [null,null,['self']];
		var 		$lambda29 = function(self) {
			var $add11,$add12;
			return $p['__op_add']($add11=$p['getattr'](self, 'x'),$add12=$p['getattr'](self, 'width'));
		};
		$lambda29['__name__'] = '$lambda29';

		$lambda29['__bind_type__'] = 0;
		$lambda29['__args__'] = [null,null,['self']];
		var 		$lambda30 = function(self) {

			return $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]);
		};
		$lambda30['__name__'] = '$lambda30';

		$lambda30['__bind_type__'] = 0;
		$lambda30['__args__'] = [null,null,['self']];
		var 		$lambda31 = function(self) {
			var $add14,$add13;
			return $p['tuple']([$p['getattr'](self, 'x'), $p['__op_add']($add13=$p['getattr'](self, 'y'),$add14=$p['getattr'](self, 'height'))]);
		};
		$lambda31['__name__'] = '$lambda31';

		$lambda31['__bind_type__'] = 0;
		$lambda31['__args__'] = [null,null,['self']];
		var 		$lambda32 = function(self) {
			var $add15,$add16;
			return $p['tuple']([$p['__op_add']($add15=$p['getattr'](self, 'x'),$add16=$p['getattr'](self, 'width')), $p['getattr'](self, 'y')]);
		};
		$lambda32['__name__'] = '$lambda32';

		$lambda32['__bind_type__'] = 0;
		$lambda32['__args__'] = [null,null,['self']];
		var 		$lambda33 = function(self) {
			var $add20,$add17,$add18,$add19;
			return $p['tuple']([$p['__op_add']($add17=$p['getattr'](self, 'x'),$add18=$p['getattr'](self, 'width')), $p['__op_add']($add19=$p['getattr'](self, 'y'),$add20=$p['getattr'](self, 'height'))]);
		};
		$lambda33['__name__'] = '$lambda33';

		$lambda33['__bind_type__'] = 0;
		$lambda33['__args__'] = [null,null,['self']];
		var 		$lambda34 = function(self) {
			var $add21,$add22,$div25,$div26;
			return $p['tuple']([$p['__op_add']($add21=$p['getattr'](self, 'x'),$add22=$p['float_int']((typeof ($div25=$p['getattr'](self, 'width'))==typeof ($div26=2) && typeof $div25=='number' && $div26 !== 0?
				$div25/$div26:
				$p['op_div']($div25,$div26)))), $p['getattr'](self, 'y')]);
		};
		$lambda34['__name__'] = '$lambda34';

		$lambda34['__bind_type__'] = 0;
		$lambda34['__args__'] = [null,null,['self']];
		var 		$lambda35 = function(self) {
			var $div28,$add23,$div27,$add24;
			return $p['tuple']([$p['getattr'](self, 'x'), $p['__op_add']($add23=$p['getattr'](self, 'y'),$add24=$p['float_int']((typeof ($div27=$p['getattr'](self, 'height'))==typeof ($div28=2) && typeof $div27=='number' && $div28 !== 0?
				$div27/$div28:
				$p['op_div']($div27,$div28))))]);
		};
		$lambda35['__name__'] = '$lambda35';

		$lambda35['__bind_type__'] = 0;
		$lambda35['__args__'] = [null,null,['self']];
		var 		$lambda36 = function(self) {
			var $add28,$div30,$div29,$add25,$add27,$add26;
			return $p['tuple']([$p['__op_add']($add25=$p['getattr'](self, 'x'),$add26=$p['float_int']((typeof ($div29=$p['getattr'](self, 'width'))==typeof ($div30=2) && typeof $div29=='number' && $div30 !== 0?
				$div29/$div30:
				$p['op_div']($div29,$div30)))), $p['__op_add']($add27=$p['getattr'](self, 'y'),$add28=$p['getattr'](self, 'height'))]);
		};
		$lambda36['__name__'] = '$lambda36';

		$lambda36['__bind_type__'] = 0;
		$lambda36['__args__'] = [null,null,['self']];
		var 		$lambda37 = function(self) {
			var $add29,$div32,$div31,$add32,$add31,$add30;
			return $p['tuple']([$p['__op_add']($add29=$p['getattr'](self, 'x'),$add30=$p['getattr'](self, 'width')), $p['__op_add']($add31=$p['getattr'](self, 'y'),$add32=$p['float_int']((typeof ($div31=$p['getattr'](self, 'height'))==typeof ($div32=2) && typeof $div31=='number' && $div32 !== 0?
				$div31/$div32:
				$p['op_div']($div31,$div32))))]);
		};
		$lambda37['__name__'] = '$lambda37';

		$lambda37['__bind_type__'] = 0;
		$lambda37['__args__'] = [null,null,['self']];
		var 		$lambda38 = function(self) {

			return $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
		};
		$lambda38['__name__'] = '$lambda38';

		$lambda38['__bind_type__'] = 0;
		$lambda38['__args__'] = [null,null,['self']];
		var 		$lambda39 = function(self) {

			return $p['getattr'](self, 'width');
		};
		$lambda39['__name__'] = '$lambda39';

		$lambda39['__bind_type__'] = 0;
		$lambda39['__args__'] = [null,null,['self']];
		var 		$lambda40 = function(self) {

			return $p['getattr'](self, 'height');
		};
		$lambda40['__name__'] = '$lambda40';

		$lambda40['__bind_type__'] = 0;
		$lambda40['__args__'] = [null,null,['self']];
		$cls_definition['_at'] = $p['dict']([['center', $lambda23], ['centerx', $lambda24], ['centery', $lambda25], ['top', $lambda26], ['left', $lambda27], ['bottom', $lambda28], ['right', $lambda29], ['topleft', $lambda30], ['bottomleft', $lambda31], ['topright', $lambda32], ['bottomright', $lambda33], ['midtop', $lambda34], ['midleft', $lambda35], ['midbottom', $lambda36], ['midright', $lambda37], ['size', $lambda38], ['w', $lambda39], ['h', $lambda40]]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var ln,arg;
			if ($p['bool']($p['op_eq']($p['len'](args), 1))) {
				arg = args['__getitem__'](0);
			}
			else {
				arg = args;
			}
			ln = $p['len'](arg);
			if ($p['bool']($p['op_eq'](ln, 4))) {
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['float_int'](arg['__getitem__'](0)));
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['float_int'](arg['__getitem__'](1)));
				$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['float_int'](arg['__getitem__'](2)));
				$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['float_int'](arg['__getitem__'](3)));
			}
			else if ($p['bool']($p['op_eq'](ln, 2))) {
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['float_int'](arg['__getitem__'](0)['__getitem__'](0)));
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['float_int'](arg['__getitem__'](0)['__getitem__'](1)));
				$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['float_int'](arg['__getitem__'](1)['__getitem__'](0)));
				$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['float_int'](arg['__getitem__'](1)['__getitem__'](1)));
			}
			else {
				if ($p['bool']($p['hasattr'](arg, 'rect'))) {
					arg = $p['getattr'](arg, 'rect');
				}
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['getattr'](arg, 'x'));
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['getattr'](arg, 'y'));
				$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['getattr'](arg, 'width'));
				$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['getattr'](arg, 'height'));
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('<rect(%d, %d, %d, %d)>', $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['sprintf']('%s(%d,%d,%d,%d)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}

			if ($p['bool']($p['getattr']($m['Rect'], '_at')['__contains__'](attr))) {
				return $p['getattr']($m['Rect'], '_at')['__getitem__'](attr)(self);
			}
			else {
				throw ($p['AttributeError']);
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(attr, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
				val = arguments[2];
			}

			if ($p['bool']($p['getattr']($m['Rect'], '_xy')['__contains__'](attr))) {
				$p['getattr']($m['Rect'], '_xy')['__getitem__'](attr)(self, val);
			}
			else {
				throw ($p['AttributeError']);
			}
			return null;
		}
	, 1, [null,null,['self'],['attr'],['val']]);
		$cls_definition['__setattr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			return $p['list']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')])['__getitem__'](key);
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				val = arguments[2];
			}
			var value,$lambda41,$lambda42,$lambda43,$lambda44;
			value = $p['float_int'](val);
			var 			$lambda41 = function(value) {

				return self['__setattr__']('x', value);
			};
			$lambda41['__name__'] = '$lambda41';

			$lambda41['__bind_type__'] = 0;
			$lambda41['__args__'] = [null,null,['value']];
			var 			$lambda42 = function(value) {

				return self['__setattr__']('y', value);
			};
			$lambda42['__name__'] = '$lambda42';

			$lambda42['__bind_type__'] = 0;
			$lambda42['__args__'] = [null,null,['value']];
			var 			$lambda43 = function(value) {

				return self['__setattr__']('width', value);
			};
			$lambda43['__name__'] = '$lambda43';

			$lambda43['__bind_type__'] = 0;
			$lambda43['__args__'] = [null,null,['value']];
			var 			$lambda44 = function(value) {

				return self['__setattr__']('height', value);
			};
			$lambda44['__name__'] = '$lambda44';

			$lambda44['__bind_type__'] = 0;
			$lambda44['__args__'] = [null,null,['value']];
			$p['list']([$lambda41, $lambda42, $lambda43, $lambda44])['__getitem__'](key)(value);
			return null;
		}
	, 1, [null,null,['self'],['key'],['val']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['iter']($p['list']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
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
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and1,$and2;
			return ($p['bool']($and1=$p['getattr'](self, 'width'))?$p['getattr'](self, 'height'):$and1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $and3,$and4,$and5,$and6;
			return ($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'x'), $p['getattr'](other, 'x')))?($p['bool']($and4=$p['op_eq']($p['getattr'](self, 'y'), $p['getattr'](other, 'y')))?($p['bool']($and5=$p['op_eq']($p['getattr'](self, 'width'), $p['getattr'](other, 'width')))?$p['op_eq']($p['getattr'](self, 'height'), $p['getattr'](other, 'height')):$and5):$and4):$and3);
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
			var $or4,$or1,$or3,$or2;
			return ($p['bool']($or1=!$p['op_eq']($p['getattr'](self, 'x'), $p['getattr'](other, 'x')))?$or1:($p['bool']($or2=!$p['op_eq']($p['getattr'](self, 'y'), $p['getattr'](other, 'y')))?$or2:($p['bool']($or3=!$p['op_eq']($p['getattr'](self, 'width'), $p['getattr'](other, 'width')))?$or3:!$p['op_eq']($p['getattr'](self, 'height'), $p['getattr'](other, 'height')))));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ne__'] = $method;
		$method = $pyjs__bind_method2('setLocation', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['float_int'](x));
			$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['float_int'](y));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['setLocation'] = $method;
		$method = $pyjs__bind_method2('setSize', function(w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				w = arguments[1];
				h = arguments[2];
			}

			$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['float_int'](w));
			$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['float_int'](h));
			return null;
		}
	, 1, [null,null,['self'],['w'],['h']]);
		$cls_definition['setSize'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['Rect']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('move', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $add33,$add36,$add34,$add35;
			return $m['Rect']($p['__op_add']($add33=$p['getattr'](self, 'x'),$add34=x), $p['__op_add']($add35=$p['getattr'](self, 'y'),$add36=y), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('move_ip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var pos = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var pos = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $add38,$add39,$add37,$add44,$add43,$add41,$add40,$add42;
			if ($p['bool']($p['op_eq']($p['len'](pos), 2))) {
				self['setLocation']($p['__op_add']($add37=$p['getattr'](self, 'x'),$add38=pos['__getitem__'](0)), $p['__op_add']($add39=$p['getattr'](self, 'y'),$add40=pos['__getitem__'](1)));
			}
			else {
				self['setLocation']($p['__op_add']($add41=$p['getattr'](self, 'x'),$add42=pos['__getitem__'](0)['__getitem__'](0)), $p['__op_add']($add43=$p['getattr'](self, 'y'),$add44=pos['__getitem__'](0)['__getitem__'](1)));
			}
			return null;
		}
	, 1, ['pos',null,['self']]);
		$cls_definition['move_ip'] = $method;
		$method = $pyjs__bind_method2('inflate', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $sub35,$div33,$sub33,$div36,$sub34,$div34,$div35,$add47,$add46,$sub36,$add48,$add45;
			return $m['Rect']($p['__op_sub']($sub33=$p['getattr'](self, 'x'),$sub34=$p['float_int']((typeof ($div33=$p['float'](x))==typeof ($div34=2) && typeof $div33=='number' && $div34 !== 0?
				$div33/$div34:
				$p['op_div']($div33,$div34)))), $p['__op_sub']($sub35=$p['getattr'](self, 'y'),$sub36=$p['float_int']((typeof ($div35=$p['float'](y))==typeof ($div36=2) && typeof $div35=='number' && $div36 !== 0?
				$div35/$div36:
				$p['op_div']($div35,$div36)))), $p['__op_add']($add45=$p['getattr'](self, 'width'),$add46=x), $p['__op_add']($add47=$p['getattr'](self, 'height'),$add48=y));
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['inflate'] = $method;
		$method = $pyjs__bind_method2('inflate_ip', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $add50,$add51,$add52,$div37,$add49,$div40,$sub39,$sub38,$div39,$sub40,$sub37,$div38;
			self['setSize']($p['__op_add']($add49=$p['getattr'](self, 'width'),$add50=x), $p['__op_add']($add51=$p['getattr'](self, 'height'),$add52=y));
			self['setLocation']($p['__op_sub']($sub37=$p['getattr'](self, 'x'),$sub38=$p['float_int']((typeof ($div37=$p['float'](x))==typeof ($div38=2) && typeof $div37=='number' && $div38 !== 0?
				$div37/$div38:
				$p['op_div']($div37,$div38)))), $p['__op_sub']($sub39=$p['getattr'](self, 'y'),$sub40=$p['float_int']((typeof ($div39=$p['float'](y))==typeof ($div40=2) && typeof $div39=='number' && $div40 !== 0?
				$div39/$div40:
				$p['op_div']($div39,$div40)))));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['inflate_ip'] = $method;
		$method = $pyjs__bind_method2('clip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var h,$add53,$add54,$add55,$add56,$add57,$add58,$add59,s,r,w,$sub41,y,x,$sub42,$sub43,$sub44,$add60;
			if ($p['bool'](!$p['bool'](self['intersects'](rect)))) {
				return $m['Rect'](0, 0, 0, 0);
			}
			else {
				x = ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == 1))? ($p['getattr'](self, 'x')) : ($p['getattr'](rect, 'x')));
				y = ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == 1))? ($p['getattr'](self, 'y')) : ($p['getattr'](rect, 'y')));
				s = $p['__op_add']($add53=$p['getattr'](self, 'x'),$add54=$p['getattr'](self, 'width'));
				r = $p['__op_add']($add55=$p['getattr'](rect, 'x'),$add56=$p['getattr'](rect, 'width'));
				w = $p['__op_sub']($sub41=($p['bool'](($p['cmp'](s, r) == -1))? (s) : (r)),$sub42=x);
				s = $p['__op_add']($add57=$p['getattr'](self, 'y'),$add58=$p['getattr'](self, 'height'));
				r = $p['__op_add']($add59=$p['getattr'](rect, 'y'),$add60=$p['getattr'](rect, 'height'));
				h = $p['__op_sub']($sub43=($p['bool'](($p['cmp'](s, r) == -1))? (s) : (r)),$sub44=y);
				return $m['Rect'](x, y, w, h);
			}
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clip'] = $method;
		$method = $pyjs__bind_method2('intersection', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}

			return self['clip'](rect);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('contains', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $and8,$add64,$add67,$add66,$add61,$add63,$add62,$add65,$add68,$and7,$and10,$and9;
			return ($p['bool']($and7=($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) < 1))?($p['bool']($and8=((($p['cmp']($p['__op_add']($add61=$p['getattr'](self, 'x'),$add62=$p['getattr'](self, 'width')), $p['__op_add']($add63=$p['getattr'](rect, 'x'),$add64=$p['getattr'](rect, 'width'))))|1) == 1))?($p['bool']($and9=($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) < 1))?((($p['cmp']($p['__op_add']($add65=$p['getattr'](self, 'y'),$add66=$p['getattr'](self, 'height')), $p['__op_add']($add67=$p['getattr'](rect, 'y'),$add68=$p['getattr'](rect, 'height'))))|1) == 1):$and9):$and8):$and7);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['contains'] = $method;
		$method = $pyjs__bind_method2('intersects', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $add76,$add74,$add75,$add72,$add73,$add70,$add71,$add69,$and12,$and13,$and11,$and14;
			return ($p['bool']($and11=($p['cmp']($p['getattr'](self, 'x'), $p['__op_add']($add69=$p['getattr'](rect, 'x'),$add70=$p['getattr'](rect, 'width'))) == -1))?($p['bool']($and12=($p['cmp']($p['getattr'](rect, 'x'), $p['__op_add']($add71=$p['getattr'](self, 'x'),$add72=$p['getattr'](self, 'width'))) == -1))?($p['bool']($and13=($p['cmp']($p['getattr'](self, 'y'), $p['__op_add']($add73=$p['getattr'](rect, 'y'),$add74=$p['getattr'](rect, 'height'))) == -1))?($p['cmp']($p['getattr'](rect, 'y'), $p['__op_add']($add75=$p['getattr'](self, 'y'),$add76=$p['getattr'](self, 'height'))) == -1):$and13):$and12):$and11);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('union', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $add77,$add83,$add82,$add80,$add81,$add78,$add79,$sub48,s,r,$sub46,w,h,y,x,$add84,$sub45,$sub47;
			x = ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))? ($p['getattr'](self, 'x')) : ($p['getattr'](rect, 'x')));
			y = ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))? ($p['getattr'](self, 'y')) : ($p['getattr'](rect, 'y')));
			s = $p['__op_add']($add77=$p['getattr'](self, 'x'),$add78=$p['getattr'](self, 'width'));
			r = $p['__op_add']($add79=$p['getattr'](rect, 'x'),$add80=$p['getattr'](rect, 'width'));
			w = $p['__op_sub']($sub45=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub46=x);
			s = $p['__op_add']($add81=$p['getattr'](self, 'y'),$add82=$p['getattr'](self, 'height'));
			r = $p['__op_add']($add83=$p['getattr'](rect, 'y'),$add84=$p['getattr'](rect, 'height'));
			h = $p['__op_sub']($sub47=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub48=y);
			return $m['Rect'](x, y, w, h);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('union_ip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $add89,$add88,$sub52,$sub51,$sub50,$add90,$add87,$add86,$add85,$add91,$sub49,s,r,$add92,w,h,y,x;
			x = ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))? ($p['getattr'](self, 'x')) : ($p['getattr'](rect, 'x')));
			y = ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))? ($p['getattr'](self, 'y')) : ($p['getattr'](rect, 'y')));
			s = $p['__op_add']($add85=$p['getattr'](self, 'x'),$add86=$p['getattr'](self, 'width'));
			r = $p['__op_add']($add87=$p['getattr'](rect, 'x'),$add88=$p['getattr'](rect, 'width'));
			w = $p['__op_sub']($sub49=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub50=x);
			s = $p['__op_add']($add89=$p['getattr'](self, 'y'),$add90=$p['getattr'](self, 'height'));
			r = $p['__op_add']($add91=$p['getattr'](rect, 'y'),$add92=$p['getattr'](rect, 'height'));
			h = $p['__op_sub']($sub51=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub52=y);
			self['x'] = x;
			self['y'] = y;
			self['width'] = w;
			self['height'] = h;
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['union_ip'] = $method;
		$method = $pyjs__bind_method2('unionall', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			var $sub56,$iter1_iter,y1,$add98,y2,$sub53,$iter1_array,rx2,$add100,$sub55,$sub54,$iter1_nextval,$add99,$add94,$add95,$add96,$add97,$add93,x2,x1,$iter1_type,r,$iter1_idx,ry2;
			x1 = $p['getattr'](self, 'x');
			y1 = $p['getattr'](self, 'y');
			x2 = $p['__op_add']($add93=$p['getattr'](self, 'x'),$add94=$p['getattr'](self, 'width'));
			y2 = $p['__op_add']($add95=$p['getattr'](self, 'y'),$add96=$p['getattr'](self, 'height'));
			$iter1_iter = rect_list;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				r = $iter1_nextval['$nextval'];
				if ($p['bool'](($p['cmp']($p['getattr'](r, 'x'), x1) == -1))) {
					x1 = $p['getattr'](r, 'x');
				}
				if ($p['bool'](($p['cmp']($p['getattr'](r, 'y'), y1) == -1))) {
					y1 = $p['getattr'](r, 'y');
				}
				rx2 = $p['__op_add']($add97=$p['getattr'](r, 'x'),$add98=$p['getattr'](r, 'width'));
				if ($p['bool'](($p['cmp'](rx2, x2) == 1))) {
					x2 = rx2;
				}
				ry2 = $p['__op_add']($add99=$p['getattr'](r, 'y'),$add100=$p['getattr'](r, 'height'));
				if ($p['bool'](($p['cmp'](ry2, y2) == 1))) {
					y2 = ry2;
				}
			}
			return $m['Rect'](x1, y1, $p['__op_sub']($sub53=x2,$sub54=x1), $p['__op_sub']($sub55=y2,$sub56=y1));
		}
	, 1, [null,null,['self'],['rect_list']]);
		$cls_definition['unionall'] = $method;
		$method = $pyjs__bind_method2('unionall_ip', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			var $sub57,y1,$add105,y2,$sub60,$iter2_iter,rx2,$add101,$add103,$add102,$iter2_type,$add104,$add107,$add106,$add108,$sub59,$sub58,$iter2_idx,x2,x1,$iter2_nextval,r,ry2,$iter2_array;
			x1 = $p['getattr'](self, 'x');
			y1 = $p['getattr'](self, 'y');
			x2 = $p['__op_add']($add101=$p['getattr'](self, 'x'),$add102=$p['getattr'](self, 'width'));
			y2 = $p['__op_add']($add103=$p['getattr'](self, 'y'),$add104=$p['getattr'](self, 'height'));
			$iter2_iter = rect_list;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				r = $iter2_nextval['$nextval'];
				if ($p['bool'](($p['cmp']($p['getattr'](r, 'x'), x1) == -1))) {
					x1 = $p['getattr'](r, 'x');
				}
				if ($p['bool'](($p['cmp']($p['getattr'](r, 'y'), y1) == -1))) {
					y1 = $p['getattr'](r, 'y');
				}
				rx2 = $p['__op_add']($add105=$p['getattr'](r, 'x'),$add106=$p['getattr'](r, 'width'));
				if ($p['bool'](($p['cmp'](rx2, x2) == 1))) {
					x2 = rx2;
				}
				ry2 = $p['__op_add']($add107=$p['getattr'](r, 'y'),$add108=$p['getattr'](r, 'height'));
				if ($p['bool'](($p['cmp'](ry2, y2) == 1))) {
					y2 = ry2;
				}
			}
			self['x'] = x1;
			self['y'] = y1;
			self['width'] = $p['__op_sub']($sub57=x2,$sub58=x1);
			self['height'] = $p['__op_sub']($sub59=y2,$sub60=y1);
			return null;
		}
	, 1, [null,null,['self'],['rect_list']]);
		$cls_definition['unionall_ip'] = $method;
		$method = $pyjs__bind_method2('clamp', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $add118,$add119,$add116,$add117,$add114,$add115,$add112,$add113,$add110,$add111,$sub68,$sub69,$sub66,$sub67,$sub64,$sub65,$sub62,$sub63,$sub61,newrect,$add120,$add109,$sub71,$sub70,$sub72,$div44,$div43,$div42,$div41;
			newrect = $m['Rect']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'width'), $p['getattr'](rect, 'width')) == -1))) {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))) {
					$p['$$super']($m['Rect'], newrect)['__setattr__']('x', $p['getattr'](rect, 'x'));
				}
				else if ($p['bool'](($p['cmp']($p['__op_add']($add109=$p['getattr'](self, 'x'),$add110=$p['getattr'](self, 'width')), $p['__op_add']($add111=$p['getattr'](rect, 'x'),$add112=$p['getattr'](rect, 'width'))) == 1))) {
					$p['$$super']($m['Rect'], newrect)['__setattr__']('x', $p['__op_sub']($sub61=$p['__op_add']($add113=$p['getattr'](rect, 'x'),$add114=$p['getattr'](rect, 'width')),$sub62=$p['getattr'](self, 'width')));
				}
			}
			else {
				$p['$$super']($m['Rect'], newrect)['__setattr__']('x', $p['__op_sub']($sub65=$p['getattr'](rect, 'x'),$sub66=$p['float_int']((typeof ($div41=$p['__op_sub']($sub63=$p['getattr'](self, 'width'),$sub64=$p['getattr'](rect, 'width')))==typeof ($div42=2) && typeof $div41=='number' && $div42 !== 0?
					$div41/$div42:
					$p['op_div']($div41,$div42)))));
			}
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'height'), $p['getattr'](rect, 'height')) == -1))) {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))) {
					$p['$$super']($m['Rect'], newrect)['__setattr__']('y', $p['getattr'](rect, 'y'));
				}
				else if ($p['bool'](($p['cmp']($p['__op_add']($add115=$p['getattr'](self, 'y'),$add116=$p['getattr'](self, 'height')), $p['__op_add']($add117=$p['getattr'](rect, 'y'),$add118=$p['getattr'](rect, 'height'))) == 1))) {
					$p['$$super']($m['Rect'], newrect)['__setattr__']('y', $p['__op_sub']($sub67=$p['__op_add']($add119=$p['getattr'](rect, 'y'),$add120=$p['getattr'](rect, 'height')),$sub68=$p['getattr'](self, 'height')));
				}
			}
			else {
				$p['$$super']($m['Rect'], newrect)['__setattr__']('y', $p['__op_sub']($sub71=$p['getattr'](rect, 'y'),$sub72=$p['float_int']((typeof ($div43=$p['__op_sub']($sub69=$p['getattr'](self, 'height'),$sub70=$p['getattr'](rect, 'height')))==typeof ($div44=2) && typeof $div43=='number' && $div44 !== 0?
					$div43/$div44:
					$p['op_div']($div43,$div44)))));
			}
			return newrect;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clamp'] = $method;
		$method = $pyjs__bind_method2('clamp_ip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $add130,$add131,$add132,$sub84,$sub80,$sub81,$sub82,$sub83,$add127,$add126,$add125,$add124,$add123,$add122,$add121,$add129,$add128,$sub79,$sub78,$sub75,$sub74,$sub77,$sub76,$sub73,$div47,$div46,$div45,$div48;
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'width'), $p['getattr'](rect, 'width')) == -1))) {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))) {
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['getattr'](rect, 'x'));
				}
				else if ($p['bool'](($p['cmp']($p['__op_add']($add121=$p['getattr'](self, 'x'),$add122=$p['getattr'](self, 'width')), $p['__op_add']($add123=$p['getattr'](rect, 'x'),$add124=$p['getattr'](rect, 'width'))) == 1))) {
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['__op_sub']($sub73=$p['__op_add']($add125=$p['getattr'](rect, 'x'),$add126=$p['getattr'](rect, 'width')),$sub74=$p['getattr'](self, 'width')));
				}
			}
			else {
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['__op_sub']($sub77=$p['getattr'](rect, 'x'),$sub78=$p['float_int']((typeof ($div45=$p['__op_sub']($sub75=$p['getattr'](self, 'width'),$sub76=$p['getattr'](rect, 'width')))==typeof ($div46=2) && typeof $div45=='number' && $div46 !== 0?
					$div45/$div46:
					$p['op_div']($div45,$div46)))));
			}
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'height'), $p['getattr'](rect, 'height')) == -1))) {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))) {
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['getattr'](rect, 'y'));
				}
				else if ($p['bool'](($p['cmp']($p['__op_add']($add127=$p['getattr'](self, 'y'),$add128=$p['getattr'](self, 'height')), $p['__op_add']($add129=$p['getattr'](rect, 'y'),$add130=$p['getattr'](rect, 'height'))) == 1))) {
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['__op_sub']($sub79=$p['__op_add']($add131=$p['getattr'](rect, 'y'),$add132=$p['getattr'](rect, 'height')),$sub80=$p['getattr'](self, 'height')));
				}
			}
			else {
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['__op_sub']($sub83=$p['getattr'](rect, 'y'),$sub84=$p['float_int']((typeof ($div47=$p['__op_sub']($sub81=$p['getattr'](self, 'height'),$sub82=$p['getattr'](rect, 'height')))==typeof ($div48=2) && typeof $div47=='number' && $div48 !== 0?
					$div47/$div48:
					$p['op_div']($div47,$div48)))));
			}
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clamp_ip'] = $method;
		$method = $pyjs__bind_method2('set', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var ln,arg;
			if ($p['bool']($p['op_eq']($p['len'](args), 1))) {
				arg = args['__getitem__'](0);
			}
			else {
				arg = args;
			}
			ln = $p['len'](arg);
			if ($p['bool']($p['op_eq'](ln, 4))) {
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['float_int'](arg['__getitem__'](0)));
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['float_int'](arg['__getitem__'](1)));
				$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['float_int'](arg['__getitem__'](2)));
				$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['float_int'](arg['__getitem__'](3)));
			}
			else if ($p['bool']($p['op_eq'](ln, 2))) {
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['float_int'](arg['__getitem__'](0)['__getitem__'](0)));
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['float_int'](arg['__getitem__'](0)['__getitem__'](1)));
				$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['float_int'](arg['__getitem__'](1)['__getitem__'](0)));
				$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['float_int'](arg['__getitem__'](1)['__getitem__'](1)));
			}
			else {
				if ($p['bool']($p['hasattr'](arg, 'rect'))) {
					arg = $p['getattr'](arg, 'rect');
				}
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['getattr'](arg, 'x'));
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['getattr'](arg, 'y'));
				$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['getattr'](arg, 'width'));
				$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['getattr'](arg, 'height'));
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('collidepoint', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var point = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var point = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $add134,$add135,$add136,$add137,$add133,$add138,$add139,$and16,$and17,$and15,$and18,$add140;
			if ($p['bool']($p['op_eq']($p['len'](point), 2))) {
				return ($p['bool']($and15=(($p['cmp']($p['getattr'](self, 'x'), ($compare1 = point['__getitem__'](0))) < 1)&&($p['cmp']($compare1, ($compare2 = $p['__op_add']($add133=$p['getattr'](self, 'x'),$add134=$p['getattr'](self, 'width')))) == -1)))?(($p['cmp']($p['getattr'](self, 'y'), ($compare3 = point['__getitem__'](1))) < 1)&&($p['cmp']($compare3, ($compare4 = $p['__op_add']($add135=$p['getattr'](self, 'y'),$add136=$p['getattr'](self, 'height')))) == -1)):$and15);
			}
			else {
				return ($p['bool']($and17=(($p['cmp']($p['getattr'](self, 'x'), ($compare5 = point['__getitem__'](0)['__getitem__'](0))) < 1)&&($p['cmp']($compare5, ($compare6 = $p['__op_add']($add137=$p['getattr'](self, 'x'),$add138=$p['getattr'](self, 'width')))) == -1)))?(($p['cmp']($p['getattr'](self, 'y'), ($compare7 = point['__getitem__'](0)['__getitem__'](1))) < 1)&&($p['cmp']($compare7, ($compare8 = $p['__op_add']($add139=$p['getattr'](self, 'y'),$add140=$p['getattr'](self, 'height')))) == -1)):$and17);
			}
			return null;
		}
	, 1, ['point',null,['self']]);
		$cls_definition['collidepoint'] = $method;
		$method = $pyjs__bind_method2('colliderect', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}

			return self['intersects'](rect);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['colliderect'] = $method;
		$method = $pyjs__bind_method2('collidelist', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $iter3_idx,i,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval,rect;
			$iter3_iter = $p['enumerate'](rects);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				rect = $tupleassign1[1];
				if ($p['bool'](self['intersects'](rect))) {
					return i;
				}
			}
			return (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidelist'] = $method;
		$method = $pyjs__bind_method2('collidelistall', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var i,$iter4_nextval,$iter4_idx,$iter4_array,collided,$iter4_type,$iter4_iter,rect;
			collided = $p['list']([]);
			$iter4_iter = $p['enumerate'](rects);
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
				i = $tupleassign2[0];
				rect = $tupleassign2[1];
				if ($p['bool'](self['colliderect'](rect))) {
					collided['append'](i);
				}
			}
			return collided;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidelistall'] = $method;
		$method = $pyjs__bind_method2('collidedict', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $iter5_nextval,$iter5_array,$iter5_iter,$iter5_idx,$iter5_type,rect;
			$iter5_iter = rects;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				rect = $iter5_nextval['$nextval'];
				if ($p['bool'](self['colliderect'](rects['__getitem__'](rect)))) {
					return $p['tuple']([rect, rects['__getitem__'](rect)]);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidedict'] = $method;
		$method = $pyjs__bind_method2('collidedictall', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $iter6_idx,$iter6_type,$iter6_array,collided,$iter6_iter,rect,$iter6_nextval;
			collided = $p['list']([]);
			$iter6_iter = rects;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				rect = $iter6_nextval['$nextval'];
				if ($p['bool'](self['colliderect'](rects['__getitem__'](rect)))) {
					collided['append']($p['tuple']([rect, rects['__getitem__'](rect)]));
				}
			}
			return collided;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidedictall'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Rect', $p['tuple']($bases), $data);
	})();
	$m['RectPool'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.rect';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['list']['__init__'](self);
			self['add'] = $p['getattr'](self, 'append');
			self['addAll'] = $p['getattr'](self, 'extend');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get', function(x, y, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}
			var rect;
			if ($p['bool'](self)) {
				rect = self['pop']();
				rect['x'] = x;
				rect['y'] = y;
				rect['width'] = width;
				rect['height'] = height;
				return rect;
			}
			else {
				return $m['Rect'](x, y, width, height);
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('copy', function(r) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				r = arguments[1];
			}
			var rect;
			if ($p['bool'](self)) {
				rect = self['pop']();
				rect['x'] = $p['getattr'](r, 'x');
				rect['y'] = $p['getattr'](r, 'y');
				rect['width'] = $p['getattr'](r, 'width');
				rect['height'] = $p['getattr'](r, 'height');
				return rect;
			}
			else {
				return $m['Rect']($p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'));
			}
			return null;
		}
	, 1, [null,null,['self'],['r']]);
		$cls_definition['copy'] = $method;
		var $bases = new Array($p['list']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RectPool', $p['tuple']($bases), $data);
	})();
	$m['rectPool'] = $m['RectPool']();
	return this;
}; /* end pyjsdl.rect */


/* end module: pyjsdl.rect */


