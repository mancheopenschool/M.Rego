/* start module: pyjsdl.draw */
$pyjs['loaded_modules']['pyjsdl.draw'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.draw']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.draw'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.draw'];
	$m['__repr__'] = function() { return '<module: pyjsdl.draw>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.draw';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['draw'] = $pyjs['loaded_modules']['pyjsdl.draw'];


	$m['pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('rect.Rect', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Draw'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.draw';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div2,$div1;
			self['rad_deg'] = (typeof ($div1=180.0)==typeof ($div2=$m['pi']) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('rect', function(surface, color, rect, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				rect = arguments[3];
				width = arguments[4];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
			var _rect;
			if ($p['bool']($p['hasattr'](rect, 'width'))) {
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			surface['beginPath']();
			if ($p['bool'](width)) {
				surface['setLineWidth'](width);
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setStrokeStyle'](color);
				}
				else {
					surface['setStrokeStyle']($m['Color'](color));
				}
				surface['rect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
				surface['stroke']();
			}
			else {
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setFillStyle'](color);
				}
				else {
					surface['setFillStyle']($m['Color'](color));
				}
				surface['fillRect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
			}
			if ($p['bool']($p['getattr'](surface, '_display'))) {
				return surface['_display']['_surface_rect']['clip'](_rect);
			}
			else {
				return surface['get_rect']()['clip'](_rect);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', 0]]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('circle', function(surface, color, position, radius, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				position = arguments[3];
				radius = arguments[4];
				width = arguments[5];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
			var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$mul10;
			surface['beginPath']();
			surface['arc'](position['__getitem__'](0), position['__getitem__'](1), radius, 0, (typeof ($mul1=2)==typeof ($mul2=$m['pi']) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)), false);
			if ($p['bool'](width)) {
				surface['setLineWidth'](width);
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setStrokeStyle'](color);
				}
				else {
					surface['setStrokeStyle']($m['Color'](color));
				}
				surface['stroke']();
			}
			else {
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setFillStyle'](color);
				}
				else {
					surface['setFillStyle']($m['Color'](color));
				}
				surface['fill']();
			}
			if ($p['bool']($p['getattr'](surface, '_display'))) {
				return surface['_display']['_surface_rect']['clip']($m['Rect']($p['__op_sub']($sub1=position['__getitem__'](0),$sub2=radius), $p['__op_sub']($sub3=position['__getitem__'](1),$sub4=radius), (typeof ($mul3=2)==typeof ($mul4=radius) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4)), (typeof ($mul5=2)==typeof ($mul6=radius) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6))));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect']($p['__op_sub']($sub5=position['__getitem__'](0),$sub6=radius), $p['__op_sub']($sub7=position['__getitem__'](1),$sub8=radius), (typeof ($mul7=2)==typeof ($mul8=radius) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)), (typeof ($mul9=2)==typeof ($mul10=radius) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['position'],['radius'],['width', 0]]);
		$cls_definition['circle'] = $method;
		$method = $pyjs__bind_method2('ellipse', function(surface, color, rect, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				rect = arguments[3];
				width = arguments[4];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
			var radius,$div14,$div10,$div11,$div12,$div13,$div8,$div9,$div3,$div6,$div7,$div4,$div5,_rect,$mul12,$mul11,$add2,$add3,$add1,$add4;
			if ($p['bool']($p['hasattr'](rect, 'width'))) {
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			surface['saveContext']();
			surface['translate']($p['__op_add']($add1=$p['getattr'](_rect, 'x'),$add2=$p['float_int']((typeof ($div3=$p['getattr'](_rect, 'width'))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))), $p['__op_add']($add3=$p['getattr'](_rect, 'y'),$add4=$p['float_int']((typeof ($div5=$p['getattr'](_rect, 'height'))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6)))));
			if ($p['bool'](((($p['cmp']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')))|1) == 1))) {
				surface['scale']((typeof ($div7=$p['getattr'](_rect, 'width'))==typeof ($div8=$p['getattr'](_rect, 'height')) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)), 1);
				radius = (typeof ($div9=$p['getattr'](_rect, 'height'))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10));
			}
			else {
				surface['scale'](1, (typeof ($div11=$p['getattr'](_rect, 'height'))==typeof ($div12=$p['getattr'](_rect, 'width')) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)));
				radius = (typeof ($div13=$p['getattr'](_rect, 'width'))==typeof ($div14=2) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14));
			}
			surface['beginPath']();
			surface['arc'](0, 0, radius, 0, (typeof ($mul11=2)==typeof ($mul12=$m['pi']) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)), false);
			if ($p['bool'](width)) {
				surface['setLineWidth'](width);
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setStrokeStyle'](color);
				}
				else {
					surface['setStrokeStyle']($m['Color'](color));
				}
				surface['stroke']();
			}
			else {
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setFillStyle'](color);
				}
				else {
					surface['setFillStyle']($m['Color'](color));
				}
				surface['fill']();
			}
			surface['restoreContext']();
			if ($p['bool']($p['getattr'](surface, '_display'))) {
				return surface['_display']['_surface_rect']['clip'](_rect);
			}
			else {
				return surface['get_rect']()['clip'](_rect);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', 0]]);
		$cls_definition['ellipse'] = $method;
		$method = $pyjs__bind_method2('arc', function(surface, color, rect, start_angle, stop_angle, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				rect = arguments[3];
				start_angle = arguments[4];
				stop_angle = arguments[5];
				width = arguments[6];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][8][1];
			var $div18,$div19,$div15,$div17,surf,$div21,dim,xdim,_rect,$div20,$div22,$add6,$add7,$add5,$add8,$div16;
			if ($p['bool']($p['hasattr'](rect, 'width'))) {
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			if ($p['bool']($p['op_eq']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')))) {
				surface['beginPath']();
				surface['arc']($p['__op_add']($add5=$p['getattr'](_rect, 'x'),$add6=$p['float_int']((typeof ($div15=$p['getattr'](_rect, 'width'))==typeof ($div16=2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)))), $p['__op_add']($add7=$p['getattr'](_rect, 'y'),$add8=$p['float_int']((typeof ($div17=$p['getattr'](_rect, 'height'))==typeof ($div18=2) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)))), $p['float_int']((typeof ($div19=$p['getattr'](_rect, 'width'))==typeof ($div20=2) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20))), (typeof ($usub1=start_angle)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=stop_angle)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), true);
				if ($p['bool'](width)) {
					surface['setLineWidth'](width);
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						surface['setStrokeStyle'](color);
					}
					else {
						surface['setStrokeStyle']($m['Color'](color));
					}
					surface['stroke']();
				}
				else {
					surface['closePath']();
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						surface['setFillStyle'](color);
					}
					else {
						surface['setFillStyle']($m['Color'](color));
					}
					surface['fill']();
				}
			}
			else {
				if ($p['bool'](($p['cmp']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')) == -1))) {
					dim = $p['getattr'](_rect, 'height');
				}
				else {
					dim = $p['getattr'](_rect, 'width');
				}
				surf = $m['Surface']($p['tuple']([dim, dim]));
				surf['beginPath']();
				xdim = $p['float_int']((typeof ($div21=dim)==typeof ($div22=2) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22)));
				surf['arc'](xdim, xdim, xdim, (typeof ($usub3=start_angle)=='number'?
					-$usub3:
					$p['op_usub']($usub3)), (typeof ($usub4=stop_angle)=='number'?
					-$usub4:
					$p['op_usub']($usub4)), true);
				if ($p['bool'](width)) {
					surf['setLineWidth'](width);
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						surface['setStrokeStyle'](color);
					}
					else {
						surface['setStrokeStyle']($m['Color'](color));
					}
					surf['stroke']();
				}
				else {
					surface['closePath']();
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						surface['setFillStyle'](color);
					}
					else {
						surface['setFillStyle']($m['Color'](color));
					}
					surf['fill']();
				}
				surface['drawImage']($p['getattr'](surf, 'canvas'), 0, 0, dim, dim, $p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
			}
			if ($p['bool']($p['getattr'](surface, '_display'))) {
				return surface['_display']['_surface_rect']['clip'](_rect);
			}
			else {
				return surface['get_rect']()['clip'](_rect);
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['start_angle'],['stop_angle'],['width', 1]]);
		$cls_definition['arc'] = $method;
		$method = $pyjs__bind_method2('polygon', function(surface, color, pointlist, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				pointlist = arguments[3];
				width = arguments[4];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
			var point,$iter1_iter,xmin,ymin,ymax,$sub9,$iter1_array,xpts,$iter1_nextval,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add14,$add15,$add16,$add10,$add11,$add12,$add13,ypts,$iter1_type,$iter1_idx,xmax,$add9;
			surface['beginPath']();
			$pyjs_kwargs_call(surface, 'moveTo', pointlist['__getitem__'](0), null, [{}]);
			$iter1_iter = $p['__getslice'](pointlist, 1, null);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				point = $iter1_nextval['$nextval'];
				$pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
			}
			surface['closePath']();
			if ($p['bool'](width)) {
				surface['setLineWidth'](width);
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setStrokeStyle'](color);
				}
				else {
					surface['setStrokeStyle']($m['Color'](color));
				}
				surface['stroke']();
			}
			else {
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					surface['setFillStyle'](color);
				}
				else {
					surface['setFillStyle']($m['Color'](color));
				}
				surface['fill']();
			}
			xpts = function(){
				var $iter2_nextval,$iter2_type,pt,$iter2_iter,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
			$iter2_iter = pointlist;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				pt = $iter2_nextval['$nextval'];
				$collcomp1['append'](pt['__getitem__'](0));
			}

	return $collcomp1;}();
			ypts = function(){
				var $iter3_idx,pt,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
			$iter3_iter = pointlist;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				pt = $iter3_nextval['$nextval'];
				$collcomp2['append'](pt['__getitem__'](1));
			}

	return $collcomp2;}();
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
			xmin = $tupleassign1[0];
			xmax = $tupleassign1[1];
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
			ymin = $tupleassign2[0];
			ymax = $tupleassign2[1];
			if ($p['bool']($p['getattr'](surface, '_display'))) {
				return surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add9=$p['__op_sub']($sub9=xmax,$sub10=xmin),$add10=1), $p['__op_add']($add11=$p['__op_sub']($sub11=ymax,$sub12=ymin),$add12=1)));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add13=$p['__op_sub']($sub13=xmax,$sub14=xmin),$add14=1), $p['__op_add']($add15=$p['__op_sub']($sub15=ymax,$sub16=ymin),$add16=1)));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['pointlist'],['width', 0]]);
		$cls_definition['polygon'] = $method;
		$method = $pyjs__bind_method2('line', function(surface, color, point1, point2, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				point1 = arguments[3];
				point2 = arguments[4];
				width = arguments[5];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
			var $sub22,$sub23,$sub20,$sub21,$sub24,$sub18,xmin,ymin,ymax,$add21,$add20,$add22,$add24,$sub19,xpts,$sub17,$add17,ypts,$add18,$add19,xmax,$add23;
			surface['beginPath']();
			$pyjs_kwargs_call(surface, 'moveTo', point1, null, [{}]);
			$pyjs_kwargs_call(surface, 'lineTo', point2, null, [{}]);
			surface['setLineWidth'](width);
			if ($p['bool']($p['hasattr'](color, 'a'))) {
				surface['setStrokeStyle'](color);
			}
			else {
				surface['setStrokeStyle']($m['Color'](color));
			}
			surface['stroke']();
			xpts = function(){
				var pt,$iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
			$iter4_iter = $p['tuple']([point1, point2]);
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				pt = $iter4_nextval['$nextval'];
				$collcomp3['append'](pt['__getitem__'](0));
			}

	return $collcomp3;}();
			ypts = function(){
				var $iter5_nextval,pt,$iter5_idx,$collcomp4,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp4 = $p['list']();
			$iter5_iter = $p['tuple']([point1, point2]);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				pt = $iter5_nextval['$nextval'];
				$collcomp4['append'](pt['__getitem__'](1));
			}

	return $collcomp4;}();
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
			xmin = $tupleassign3[0];
			xmax = $tupleassign3[1];
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
			ymin = $tupleassign4[0];
			ymax = $tupleassign4[1];
			if ($p['bool']($p['getattr'](surface, '_display'))) {
				return surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add17=$p['__op_sub']($sub17=xmax,$sub18=xmin),$add18=1), $p['__op_add']($add19=$p['__op_sub']($sub19=ymax,$sub20=ymin),$add20=1)));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add21=$p['__op_sub']($sub21=xmax,$sub22=xmin),$add22=1), $p['__op_add']($add23=$p['__op_sub']($sub23=ymax,$sub24=ymin),$add24=1)));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['width', 1]]);
		$cls_definition['line'] = $method;
		$method = $pyjs__bind_method2('lines', function(surface, color, closed, pointlist, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				closed = arguments[3];
				pointlist = arguments[4];
				width = arguments[5];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
			var $sub26,$sub27,point,$sub28,$sub29,$sub32,xmin,$iter6_iter,ymin,$iter6_nextval,$add29,$add28,ymax,$sub25,$add25,$add27,$add26,$iter6_type,$sub31,$sub30,xpts,$iter6_idx,$iter6_array,ypts,$add32,$add30,$add31,xmax;
			surface['beginPath']();
			$pyjs_kwargs_call(surface, 'moveTo', pointlist['__getitem__'](0), null, [{}]);
			$iter6_iter = $p['__getslice'](pointlist, 1, null);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				point = $iter6_nextval['$nextval'];
				$pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
			}
			if ($p['bool'](closed)) {
				surface['closePath']();
			}
			surface['setLineWidth'](width);
			if ($p['bool']($p['hasattr'](color, 'a'))) {
				surface['setStrokeStyle'](color);
			}
			else {
				surface['setStrokeStyle']($m['Color'](color));
			}
			surface['stroke']();
			xpts = function(){
				var pt,$iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type;
	$collcomp5 = $p['list']();
			$iter7_iter = pointlist;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				pt = $iter7_nextval['$nextval'];
				$collcomp5['append'](pt['__getitem__'](0));
			}

	return $collcomp5;}();
			ypts = function(){
				var $iter8_idx,pt,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval;
	$collcomp6 = $p['list']();
			$iter8_iter = pointlist;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				pt = $iter8_nextval['$nextval'];
				$collcomp6['append'](pt['__getitem__'](1));
			}

	return $collcomp6;}();
			var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
			xmin = $tupleassign5[0];
			xmax = $tupleassign5[1];
			var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
			ymin = $tupleassign6[0];
			ymax = $tupleassign6[1];
			if ($p['bool']($p['getattr'](surface, '_display'))) {
				return surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add25=$p['__op_sub']($sub25=xmax,$sub26=xmin),$add26=1), $p['__op_add']($add27=$p['__op_sub']($sub27=ymax,$sub28=ymin),$add28=1)));
			}
			else {
				return surface['get_rect']()['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add29=$p['__op_sub']($sub29=xmax,$sub30=xmin),$add30=1), $p['__op_add']($add31=$p['__op_sub']($sub31=ymax,$sub32=ymin),$add32=1)));
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['width', 1]]);
		$cls_definition['lines'] = $method;
		$method = $pyjs__bind_method2('aaline', function(surface, color, point1, point2, blend) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				point1 = arguments[3];
				point2 = arguments[4];
				blend = arguments[5];
			}
			if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
			var rect;
			rect = self['line'](surface, color, point1, point2, blend);
			return rect;
		}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['blend', 1]]);
		$cls_definition['aaline'] = $method;
		$method = $pyjs__bind_method2('aalines', function(surface, color, closed, pointlist, blend) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				color = arguments[2];
				closed = arguments[3];
				pointlist = arguments[4];
				blend = arguments[5];
			}
			if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
			var rect;
			rect = self['lines'](surface, color, closed, pointlist, blend);
			return rect;
		}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['blend', 1]]);
		$cls_definition['aalines'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Draw', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.draw */


/* end module: pyjsdl.draw */


/*
PYJS_DEPS: ['math.pi', 'math', 'rect.Rect', 'rect', 'surface.Surface', 'surface', 'color.Color', 'color']
*/
