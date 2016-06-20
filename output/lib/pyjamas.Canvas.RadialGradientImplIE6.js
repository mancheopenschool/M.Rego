/* start module: pyjamas.Canvas.RadialGradientImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.RadialGradientImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.RadialGradientImplIE6';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['RadialGradientImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.RadialGradientImplIE6'];


	$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
	$m['RadialGradientImplIE6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.RadialGradientImplIE6';
		$method = $pyjs__bind_method2('__init__', function(x0, y0, r0, x1, y1, r1) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x0 = arguments[1];
				y0 = arguments[2];
				r0 = arguments[3];
				x1 = arguments[4];
				y1 = arguments[5];
				r1 = arguments[6];
			}

			$m['CanvasGradientImplIE6']['__init__'](self, x0, y0, x1, y1);
			self['startRad'] = r0;
			self['endRad'] = r1;
			self['type'] = 'gradientradial';
			return null;
		}
	, 1, [null,null,['self'],['x0'],['y0'],['r0'],['x1'],['y1'],['r1']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('cloneGradient', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,i,cStops,newGrad,$iter1_iter,$iter1_array,$iter1_idx;
			newGrad = $m['RadialGradientImplIE6']($p['getattr'](self, 'startX'), $p['getattr'](self, 'startY'), $p['getattr'](self, 'startRad'), $p['getattr'](self, 'endX'), $p['getattr'](self, 'endY'), $p['getattr'](self, 'endRad'));
			newGrad['startX'] = $p['getattr'](self, 'startX');
			newGrad['startY'] = $p['getattr'](self, 'startY');
			newGrad['startRad'] = $p['getattr'](self, 'startRad');
			newGrad['endX'] = $p['getattr'](self, 'endX');
			newGrad['endY'] = $p['getattr'](self, 'endY');
			newGrad['endRad'] = $p['getattr'](self, 'endRad');
			cStops = $p['getattr'](self, 'colorStops');
			$iter1_iter = $p['range']($p['len'](cStops));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				newGrad['colorStops']['append'](cStops['__getitem__'](i)['cloneColorStop']());
			}
			return newGrad;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cloneGradient'] = $method;
		var $bases = new Array($m['CanvasGradientImplIE6']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RadialGradientImplIE6', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.RadialGradientImplIE6 */


/* end module: pyjamas.Canvas.RadialGradientImplIE6 */


/*
PYJS_DEPS: ['pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/
