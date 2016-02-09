/* start module: pyjamas.Canvas.PathElement */
$pyjs['loaded_modules']['pyjamas.Canvas.PathElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.PathElement']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.PathElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.PathElement';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['PathElement'] = $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.PathElement.py, line 1:\n    """';
		$m.__track_lines__[17] = 'pyjamas.Canvas.PathElement.py, line 17:\n    import math';
		$m.__track_lines__[19] = 'pyjamas.Canvas.PathElement.py, line 19:\n    """*';
		$m.__track_lines__[23] = 'pyjamas.Canvas.PathElement.py, line 23:\n    """*';
		$m.__track_lines__[26] = 'pyjamas.Canvas.PathElement.py, line 26:\n    ARC = " ar"';
		$m.__track_lines__[27] = 'pyjamas.Canvas.PathElement.py, line 27:\n    CLOSE = " x"';
		$m.__track_lines__[28] = 'pyjamas.Canvas.PathElement.py, line 28:\n    END = " e"';
		$m.__track_lines__[29] = 'pyjamas.Canvas.PathElement.py, line 29:\n    LINETO = " l"';
		$m.__track_lines__[30] = 'pyjamas.Canvas.PathElement.py, line 30:\n    MOVETO = " m"';
		$m.__track_lines__[31] = 'pyjamas.Canvas.PathElement.py, line 31:\n    CUBIC = " c"';
		$m.__track_lines__[33] = 'pyjamas.Canvas.PathElement.py, line 33:\n    def arc(x, y, radius, startAngle, endAngle, antiClockwise, canvas):';
		$m.__track_lines__[35] = 'pyjamas.Canvas.PathElement.py, line 35:\n    matrix = canvas.matrix';
		$m.__track_lines__[36] = 'pyjamas.Canvas.PathElement.py, line 36:\n    context = canvas.context';
		$m.__track_lines__[38] = 'pyjamas.Canvas.PathElement.py, line 38:\n    if not antiClockwise:';
		$m.__track_lines__[39] = 'pyjamas.Canvas.PathElement.py, line 39:\n    realStartAngle = endAngle';
		$m.__track_lines__[40] = 'pyjamas.Canvas.PathElement.py, line 40:\n    realEndAngle = startAngle';
		$m.__track_lines__[42] = 'pyjamas.Canvas.PathElement.py, line 42:\n    realStartAngle = startAngle';
		$m.__track_lines__[43] = 'pyjamas.Canvas.PathElement.py, line 43:\n    realEndAngle = endAngle';
		$m.__track_lines__[45] = 'pyjamas.Canvas.PathElement.py, line 45:\n    ar = radius * 10';
		$m.__track_lines__[46] = 'pyjamas.Canvas.PathElement.py, line 46:\n    startX = (x + math.cos(realStartAngle) * ar - 5)';
		$m.__track_lines__[47] = 'pyjamas.Canvas.PathElement.py, line 47:\n    startY = (y + math.sin(realStartAngle) * ar - 5)';
		$m.__track_lines__[48] = 'pyjamas.Canvas.PathElement.py, line 48:\n    endX = (x + math.cos(realEndAngle) * ar - 5)';
		$m.__track_lines__[49] = 'pyjamas.Canvas.PathElement.py, line 49:\n    endY = (y + math.sin(realEndAngle) * ar - 5)';
		$m.__track_lines__[50] = 'pyjamas.Canvas.PathElement.py, line 50:\n    if startX == endX  and  not antiClockwise:';
		$m.__track_lines__[51] = 'pyjamas.Canvas.PathElement.py, line 51:\n    startX += 0.125';
		$m.__track_lines__[54] = 'pyjamas.Canvas.PathElement.py, line 54:\n    cx = canvas.getCoordX(matrix, x, y)';
		$m.__track_lines__[55] = 'pyjamas.Canvas.PathElement.py, line 55:\n    cy = canvas.getCoordY(matrix, x, y)';
		$m.__track_lines__[56] = 'pyjamas.Canvas.PathElement.py, line 56:\n    arcX = (context.arcScaleX * ar)';
		$m.__track_lines__[57] = 'pyjamas.Canvas.PathElement.py, line 57:\n    arcY = (context.arcScaleY * ar)';
		$m.__track_lines__[58] = 'pyjamas.Canvas.PathElement.py, line 58:\n    return (ARC + str(int(math.floor((cx - arcX + 0.5)))) + ","';
		$m.__track_lines__[68] = 'pyjamas.Canvas.PathElement.py, line 68:\n    def bezierCurveTo(c1x, c1y, c2x, c2y, x, y, canvas):';
		$m.__track_lines__[69] = 'pyjamas.Canvas.PathElement.py, line 69:\n    matrix = canvas.matrix';
		$m.__track_lines__[70] = 'pyjamas.Canvas.PathElement.py, line 70:\n    return (CUBIC + str(canvas.getCoordX(matrix, c1x, c1y)) + ","';
		$m.__track_lines__[78] = 'pyjamas.Canvas.PathElement.py, line 78:\n    def closePath():';
		$m.__track_lines__[79] = 'pyjamas.Canvas.PathElement.py, line 79:\n    return CLOSE';
		$m.__track_lines__[82] = 'pyjamas.Canvas.PathElement.py, line 82:\n    def lineTo(x, y, canvas):';
		$m.__track_lines__[83] = 'pyjamas.Canvas.PathElement.py, line 83:\n    matrix = canvas.matrix';
		$m.__track_lines__[84] = 'pyjamas.Canvas.PathElement.py, line 84:\n    return (LINETO + str(canvas.getCoordX(matrix, x, y)) + ","';
		$m.__track_lines__[88] = 'pyjamas.Canvas.PathElement.py, line 88:\n    def moveTo(x, y, canvas):';
		$m.__track_lines__[89] = 'pyjamas.Canvas.PathElement.py, line 89:\n    matrix = canvas.matrix';
		$m.__track_lines__[90] = 'pyjamas.Canvas.PathElement.py, line 90:\n    return (MOVETO + str(canvas.getCoordX(matrix, x, y)) + ","';

		var $constant_int_10 = new $p['int'](10);
		var $constant_int_5 = new $p['int'](5);
		$pyjs['track']['module']='pyjamas.Canvas.PathElement';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']['lineno']=23;
		$pyjs['track']['lineno']=26;
		$m['ARC'] = ' ar';
		$pyjs['track']['lineno']=27;
		$m['CLOSE'] = ' x';
		$pyjs['track']['lineno']=28;
		$m['END'] = ' e';
		$pyjs['track']['lineno']=29;
		$m['LINETO'] = ' l';
		$pyjs['track']['lineno']=30;
		$m['MOVETO'] = ' m';
		$pyjs['track']['lineno']=31;
		$m['CUBIC'] = ' c';
		$pyjs['track']['lineno']=33;
		$m['arc'] = function(x, y, radius, startAngle, endAngle, antiClockwise, canvas) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
			var $and1,$and2,matrix,startX,startY,$sub12,$sub11,$sub10,realEndAngle,$add50,$add51,$add52,$mul14,$mul13,$mul12,$mul11,$mul10,endY,endX,context,cy,cx,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,ar,$add29,$add28,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,realStartAngle,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,arcX,arcY;
			$pyjs['track']={'module':'pyjamas.Canvas.PathElement','lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.PathElement';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=35;
			matrix = $p['getattr'](canvas, 'matrix');
			$pyjs['track']['lineno']=36;
			context = $p['getattr'](canvas, 'context');
			$pyjs['track']['lineno']=38;
			if ($p['bool'](!$p['bool'](antiClockwise))) {
				$pyjs['track']['lineno']=39;
				realStartAngle = endAngle;
				$pyjs['track']['lineno']=40;
				realEndAngle = startAngle;
			}
			else {
				$pyjs['track']['lineno']=42;
				realStartAngle = startAngle;
				$pyjs['track']['lineno']=43;
				realEndAngle = endAngle;
			}
			$pyjs['track']['lineno']=45;
			ar = (typeof ($mul1=radius)==typeof ($mul2=$constant_int_10) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			$pyjs['track']['lineno']=46;
			startX = $p['__op_sub']($sub1=$p['__op_add']($add1=x,$add2=(typeof ($mul3=$m['math']['cos'](realStartAngle))==typeof ($mul4=ar) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))),$sub2=$constant_int_5);
			$pyjs['track']['lineno']=47;
			startY = $p['__op_sub']($sub3=$p['__op_add']($add3=y,$add4=(typeof ($mul5=$m['math']['sin'](realStartAngle))==typeof ($mul6=ar) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6))),$sub4=$constant_int_5);
			$pyjs['track']['lineno']=48;
			endX = $p['__op_sub']($sub5=$p['__op_add']($add5=x,$add6=(typeof ($mul7=$m['math']['cos'](realEndAngle))==typeof ($mul8=ar) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8))),$sub6=$constant_int_5);
			$pyjs['track']['lineno']=49;
			endY = $p['__op_sub']($sub7=$p['__op_add']($add7=y,$add8=(typeof ($mul9=$m['math']['sin'](realEndAngle))==typeof ($mul10=ar) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10))),$sub8=$constant_int_5);
			$pyjs['track']['lineno']=50;
			if ($p['bool'](($p['bool']($and1=$p['op_eq'](startX, endX))?!$p['bool'](antiClockwise):$and1))) {
				$pyjs['track']['lineno']=51;
				startX = $p['__op_add']($add9=startX,$add10=0.125);
			}
			$pyjs['track']['lineno']=54;
			cx = canvas['getCoordX'](matrix, x, y);
			$pyjs['track']['lineno']=55;
			cy = canvas['getCoordY'](matrix, x, y);
			$pyjs['track']['lineno']=56;
			arcX = (typeof ($mul11=$p['getattr'](context, 'arcScaleX'))==typeof ($mul12=ar) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12));
			$pyjs['track']['lineno']=57;
			arcY = (typeof ($mul13=$p['getattr'](context, 'arcScaleY'))==typeof ($mul14=ar) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14));
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=58;
			var $pyjs__ret = $p['__op_add']($add51=$p['__op_add']($add49=$p['__op_add']($add47=$p['__op_add']($add45=$p['__op_add']($add43=$p['__op_add']($add41=$p['__op_add']($add39=$p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add31=$p['__op_add']($add29=$p['__op_add']($add23=$p['__op_add']($add21=$p['__op_add']($add15=$p['__op_add']($add13=$m['ARC'],$add14=$p['str']($p['int']($m['math']['floor']($p['__op_add']($add11=$p['__op_sub']($sub9=cx,$sub10=arcX),$add12=0.5))))),$add16=','),$add22=$p['str']($p['int']($m['math']['floor']($p['__op_add']($add19=$p['__op_add']($add17=cy,$add18=arcY),$add20=0.5))))),$add24=' '),$add30=$p['str']($p['int']($m['math']['floor']($p['__op_add']($add27=$p['__op_add']($add25=cx,$add26=arcX),$add28=0.5))))),$add32=','),$add36=$p['str']($p['int']($m['math']['floor']($p['__op_add']($add33=$p['__op_sub']($sub11=cy,$sub12=arcY),$add34=0.5))))),$add38=' '),$add40=$p['str'](canvas['getCoordX'](matrix, startX, startY))),$add42=','),$add44=$p['str'](canvas['getCoordY'](matrix, startX, startY))),$add46=' '),$add48=$p['str'](canvas['getCoordX'](matrix, endX, endY))),$add50=','),$add52=$p['str'](canvas['getCoordY'](matrix, endX, endY)));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['arc']['__name__'] = 'arc';

		$m['arc']['__bind_type__'] = 0;
		$m['arc']['__args__'] = [null,null,['x'],['y'],['radius'],['startAngle'],['endAngle'],['antiClockwise'],['canvas']];
		$pyjs['track']['lineno']=68;
		$m['bezierCurveTo'] = function(c1x, c1y, c2x, c2y, x, y, canvas) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
			var $add65,$add64,$add66,$add61,$add60,$add63,$add62,$add69,$add68,$add73,$add67,$add72,matrix,$add70,$add74,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$add71;
			$pyjs['track']={'module':'pyjamas.Canvas.PathElement','lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.PathElement';
			$pyjs['track']['lineno']=68;
			$pyjs['track']['lineno']=69;
			matrix = $p['getattr'](canvas, 'matrix');
			$pyjs['track']['lineno']=70;
			$pyjs['track']['lineno']=70;
			var $pyjs__ret = $p['__op_add']($add73=$p['__op_add']($add71=$p['__op_add']($add69=$p['__op_add']($add67=$p['__op_add']($add65=$p['__op_add']($add63=$p['__op_add']($add61=$p['__op_add']($add59=$p['__op_add']($add57=$p['__op_add']($add55=$p['__op_add']($add53=$m['CUBIC'],$add54=$p['str'](canvas['getCoordX'](matrix, c1x, c1y))),$add56=','),$add58=$p['str'](canvas['getCoordY'](matrix, c1x, c1y))),$add60=','),$add62=$p['str'](canvas['getCoordX'](matrix, c2x, c2y))),$add64=','),$add66=$p['str'](canvas['getCoordY'](matrix, c2x, c2y))),$add68=','),$add70=$p['str'](canvas['getCoordX'](matrix, x, y))),$add72=','),$add74=$p['str'](canvas['getCoordY'](matrix, x, y)));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['bezierCurveTo']['__name__'] = 'bezierCurveTo';

		$m['bezierCurveTo']['__bind_type__'] = 0;
		$m['bezierCurveTo']['__args__'] = [null,null,['c1x'],['c1y'],['c2x'],['c2y'],['x'],['y'],['canvas']];
		$pyjs['track']['lineno']=78;
		$m['closePath'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjamas.Canvas.PathElement','lineno':78};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.PathElement';
			$pyjs['track']['lineno']=78;
			$pyjs['track']['lineno']=79;
			$pyjs['track']['lineno']=79;
			var $pyjs__ret = $m['CLOSE'];
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['closePath']['__name__'] = 'closePath';

		$m['closePath']['__bind_type__'] = 0;
		$m['closePath']['__args__'] = [null,null];
		$pyjs['track']['lineno']=82;
		$m['lineTo'] = function(x, y, canvas) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var $add76,$add77,$add75,matrix,$add80,$add78,$add79;
			$pyjs['track']={'module':'pyjamas.Canvas.PathElement','lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.PathElement';
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=83;
			matrix = $p['getattr'](canvas, 'matrix');
			$pyjs['track']['lineno']=84;
			$pyjs['track']['lineno']=84;
			var $pyjs__ret = $p['__op_add']($add79=$p['__op_add']($add77=$p['__op_add']($add75=$m['LINETO'],$add76=$p['str'](canvas['getCoordX'](matrix, x, y))),$add78=','),$add80=$p['str'](canvas['getCoordY'](matrix, x, y)));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['lineTo']['__name__'] = 'lineTo';

		$m['lineTo']['__bind_type__'] = 0;
		$m['lineTo']['__args__'] = [null,null,['x'],['y'],['canvas']];
		$pyjs['track']['lineno']=88;
		$m['moveTo'] = function(x, y, canvas) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var matrix,$add83,$add82,$add81,$add86,$add85,$add84;
			$pyjs['track']={'module':'pyjamas.Canvas.PathElement','lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.PathElement';
			$pyjs['track']['lineno']=88;
			$pyjs['track']['lineno']=89;
			matrix = $p['getattr'](canvas, 'matrix');
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=90;
			var $pyjs__ret = $p['__op_add']($add85=$p['__op_add']($add83=$p['__op_add']($add81=$m['MOVETO'],$add82=$p['str'](canvas['getCoordX'](matrix, x, y))),$add84=','),$add86=$p['str'](canvas['getCoordY'](matrix, x, y)));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['moveTo']['__name__'] = 'moveTo';

		$m['moveTo']['__bind_type__'] = 0;
		$m['moveTo']['__args__'] = [null,null,['x'],['y'],['canvas']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.PathElement */


/* end module: pyjamas.Canvas.PathElement */


/*
PYJS_DEPS: ['math']
*/
