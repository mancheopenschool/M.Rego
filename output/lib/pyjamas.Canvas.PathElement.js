/* start module: pyjamas.Canvas.PathElement */
$pyjs['loaded_modules']['pyjamas.Canvas.PathElement'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.PathElement']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.PathElement>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.PathElement';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['PathElement'] = $pyjs['loaded_modules']['pyjamas.Canvas.PathElement'];


	$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
	$m['ARC'] = ' ar';
	$m['CLOSE'] = ' x';
	$m['END'] = ' e';
	$m['LINETO'] = ' l';
	$m['MOVETO'] = ' m';
	$m['CUBIC'] = ' c';
	$m['arc'] = function(x, y, radius, startAngle, endAngle, antiClockwise, canvas) {
		var $and1,$and2,matrix,startX,startY,$sub12,$sub11,$sub10,realEndAngle,$add50,$add51,$add52,$mul14,$mul13,$mul12,$mul11,$mul10,endY,endX,context,cy,cx,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,ar,$add29,$add28,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,realStartAngle,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,arcX,arcY;
		matrix = $p['getattr'](canvas, 'matrix');
		context = $p['getattr'](canvas, 'context');
		if ($p['bool'](!$p['bool'](antiClockwise))) {
			realStartAngle = endAngle;
			realEndAngle = startAngle;
		}
		else {
			realStartAngle = startAngle;
			realEndAngle = endAngle;
		}
		ar = (typeof ($mul1=radius)==typeof ($mul2=10) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2));
		startX = $p['__op_sub']($sub1=$p['__op_add']($add1=x,$add2=(typeof ($mul3=$m['math']['cos'](realStartAngle))==typeof ($mul4=ar) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4))),$sub2=5);
		startY = $p['__op_sub']($sub3=$p['__op_add']($add3=y,$add4=(typeof ($mul5=$m['math']['sin'](realStartAngle))==typeof ($mul6=ar) && typeof $mul5=='number'?
			$mul5*$mul6:
			$p['op_mul']($mul5,$mul6))),$sub4=5);
		endX = $p['__op_sub']($sub5=$p['__op_add']($add5=x,$add6=(typeof ($mul7=$m['math']['cos'](realEndAngle))==typeof ($mul8=ar) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8))),$sub6=5);
		endY = $p['__op_sub']($sub7=$p['__op_add']($add7=y,$add8=(typeof ($mul9=$m['math']['sin'](realEndAngle))==typeof ($mul10=ar) && typeof $mul9=='number'?
			$mul9*$mul10:
			$p['op_mul']($mul9,$mul10))),$sub8=5);
		if ($p['bool'](($p['bool']($and1=$p['op_eq'](startX, endX))?!$p['bool'](antiClockwise):$and1))) {
			startX = $p['__op_add']($add9=startX,$add10=0.125);
		}
		cx = canvas['getCoordX'](matrix, x, y);
		cy = canvas['getCoordY'](matrix, x, y);
		arcX = (typeof ($mul11=$p['getattr'](context, 'arcScaleX'))==typeof ($mul12=ar) && typeof $mul11=='number'?
			$mul11*$mul12:
			$p['op_mul']($mul11,$mul12));
		arcY = (typeof ($mul13=$p['getattr'](context, 'arcScaleY'))==typeof ($mul14=ar) && typeof $mul13=='number'?
			$mul13*$mul14:
			$p['op_mul']($mul13,$mul14));
		return $p['__op_add']($add51=$p['__op_add']($add49=$p['__op_add']($add47=$p['__op_add']($add45=$p['__op_add']($add43=$p['__op_add']($add41=$p['__op_add']($add39=$p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add31=$p['__op_add']($add29=$p['__op_add']($add23=$p['__op_add']($add21=$p['__op_add']($add15=$p['__op_add']($add13=$m['ARC'],$add14=$p['str']($p['float_int']($m['math']['floor']($p['__op_add']($add11=$p['__op_sub']($sub9=cx,$sub10=arcX),$add12=0.5))))),$add16=','),$add22=$p['str']($p['float_int']($m['math']['floor']($p['__op_add']($add19=$p['__op_add']($add17=cy,$add18=arcY),$add20=0.5))))),$add24=' '),$add30=$p['str']($p['float_int']($m['math']['floor']($p['__op_add']($add27=$p['__op_add']($add25=cx,$add26=arcX),$add28=0.5))))),$add32=','),$add36=$p['str']($p['float_int']($m['math']['floor']($p['__op_add']($add33=$p['__op_sub']($sub11=cy,$sub12=arcY),$add34=0.5))))),$add38=' '),$add40=$p['str'](canvas['getCoordX'](matrix, startX, startY))),$add42=','),$add44=$p['str'](canvas['getCoordY'](matrix, startX, startY))),$add46=' '),$add48=$p['str'](canvas['getCoordX'](matrix, endX, endY))),$add50=','),$add52=$p['str'](canvas['getCoordY'](matrix, endX, endY)));
	};
	$m['arc']['__name__'] = 'arc';

	$m['arc']['__bind_type__'] = 0;
	$m['arc']['__args__'] = [null,null,['x'],['y'],['radius'],['startAngle'],['endAngle'],['antiClockwise'],['canvas']];
	$m['bezierCurveTo'] = function(c1x, c1y, c2x, c2y, x, y, canvas) {
		var $add65,$add64,$add66,$add61,$add60,$add63,$add62,$add69,$add68,$add73,$add67,$add72,matrix,$add70,$add74,$add53,$add54,$add55,$add56,$add57,$add58,$add59,$add71;
		matrix = $p['getattr'](canvas, 'matrix');
		return $p['__op_add']($add73=$p['__op_add']($add71=$p['__op_add']($add69=$p['__op_add']($add67=$p['__op_add']($add65=$p['__op_add']($add63=$p['__op_add']($add61=$p['__op_add']($add59=$p['__op_add']($add57=$p['__op_add']($add55=$p['__op_add']($add53=$m['CUBIC'],$add54=$p['str'](canvas['getCoordX'](matrix, c1x, c1y))),$add56=','),$add58=$p['str'](canvas['getCoordY'](matrix, c1x, c1y))),$add60=','),$add62=$p['str'](canvas['getCoordX'](matrix, c2x, c2y))),$add64=','),$add66=$p['str'](canvas['getCoordY'](matrix, c2x, c2y))),$add68=','),$add70=$p['str'](canvas['getCoordX'](matrix, x, y))),$add72=','),$add74=$p['str'](canvas['getCoordY'](matrix, x, y)));
	};
	$m['bezierCurveTo']['__name__'] = 'bezierCurveTo';

	$m['bezierCurveTo']['__bind_type__'] = 0;
	$m['bezierCurveTo']['__args__'] = [null,null,['c1x'],['c1y'],['c2x'],['c2y'],['x'],['y'],['canvas']];
	$m['closePath'] = function() {

		return $m['CLOSE'];
	};
	$m['closePath']['__name__'] = 'closePath';

	$m['closePath']['__bind_type__'] = 0;
	$m['closePath']['__args__'] = [null,null];
	$m['lineTo'] = function(x, y, canvas) {
		var $add76,$add77,$add75,matrix,$add80,$add78,$add79;
		matrix = $p['getattr'](canvas, 'matrix');
		return $p['__op_add']($add79=$p['__op_add']($add77=$p['__op_add']($add75=$m['LINETO'],$add76=$p['str'](canvas['getCoordX'](matrix, x, y))),$add78=','),$add80=$p['str'](canvas['getCoordY'](matrix, x, y)));
	};
	$m['lineTo']['__name__'] = 'lineTo';

	$m['lineTo']['__bind_type__'] = 0;
	$m['lineTo']['__args__'] = [null,null,['x'],['y'],['canvas']];
	$m['moveTo'] = function(x, y, canvas) {
		var matrix,$add83,$add82,$add81,$add86,$add85,$add84;
		matrix = $p['getattr'](canvas, 'matrix');
		return $p['__op_add']($add85=$p['__op_add']($add83=$p['__op_add']($add81=$m['MOVETO'],$add82=$p['str'](canvas['getCoordX'](matrix, x, y))),$add84=','),$add86=$p['str'](canvas['getCoordY'](matrix, x, y)));
	};
	$m['moveTo']['__name__'] = 'moveTo';

	$m['moveTo']['__bind_type__'] = 0;
	$m['moveTo']['__args__'] = [null,null,['x'],['y'],['canvas']];
	return this;
}; /* end pyjamas.Canvas.PathElement */


/* end module: pyjamas.Canvas.PathElement */


/*
PYJS_DEPS: ['math']
*/
