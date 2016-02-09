/* start module: pyjamas.Canvas.CanvasGradientImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.CanvasGradientImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.CanvasGradientImplIE6';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['CanvasGradientImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.CanvasGradientImplIE6'];


	$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
	$m['ColorStop'] = $p['___import___']('pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas.Canvas', null, false);
	$m['CanvasGradientImplIE6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.CanvasGradientImplIE6';
		$method = $pyjs__bind_method2('__init__', function(x0, y0, x1, y1) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				x1 = arguments[3];
				y1 = arguments[4];
			}
			var $mul6,$div1,$mul1,$sub3,$sub2,$sub1,$sub4,$div2,$div3,$mul5,$mul4,$mul3,$mul2,$div4,$add2,$add3,$add1,$add4;
			self['startX'] = x0;
			self['startY'] = y0;
			self['endX'] = x1;
			self['endY'] = y1;
			self['startRad'] = 0;
			self['endRad'] = 0;
			self['dx'] = $p['__op_sub']($sub1=x1,$sub2=x0);
			self['dy'] = $p['__op_sub']($sub3=y1,$sub4=y0);
			self['length'] = $m['math']['sqrt']($p['__op_add']($add1=(typeof ($mul1=$p['getattr'](self, 'dx'))==typeof ($mul2=$p['getattr'](self, 'dx')) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)),$add2=(typeof ($mul3=$p['getattr'](self, 'dy'))==typeof ($mul4=$p['getattr'](self, 'dy')) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))));
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'dy'), 0))) {
				self['angle'] = 90;
			}
			else {
				self['angle'] = $p['__op_add']($add3=$p['float_int']((typeof ($div3=(typeof ($mul5=$m['math']['atan']((typeof ($div1=$p['getattr'](self, 'dx'))==typeof ($div2=$p['getattr'](self, 'dy')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))))==typeof ($mul6=180) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)))==typeof ($div4=$p['getattr']($m['math'], 'pi')) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4))),$add4=180);
			}
			self['colorStops'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['x0'],['y0'],['x1'],['y1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addColorStop', function(offset, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				offset = arguments[1];
				color = arguments[2];
			}
			var $iter1_nextval,$iter1_type,newColorStop,$iter1_iter,i,$iter1_array,cs,$iter1_idx;
			newColorStop = $m['ColorStop'](offset, color);
			$iter1_iter = $p['range']($p['len']($p['getattr'](self, 'colorStops')));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				cs = $p['getattr'](self, 'colorStops')['__getitem__'](i);
				if ($p['bool'](($p['cmp'](offset, $p['getattr'](cs, 'offset')) == -1))) {
					self['colorStops']['append'](i, newColorStop);
					return null;
				}
			}
			self['colorStops']['append'](newColorStop);
			return null;
		}
	, 1, [null,null,['self'],['offset'],['color']]);
		$cls_definition['addColorStop'] = $method;
		$method = $pyjs__bind_method2('cloneGradient', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cloneGradient'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CanvasGradientImplIE6', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.CanvasGradientImplIE6 */


/* end module: pyjamas.Canvas.CanvasGradientImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.Canvas.ColorStop.ColorStop', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.ColorStop']
*/
