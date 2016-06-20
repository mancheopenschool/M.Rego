/* start module: pyjamas.Canvas.VMLContext */
$pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.VMLContext']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.VMLContext>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.VMLContext';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['VMLContext'] = $pyjs['loaded_modules']['pyjamas.Canvas.VMLContext'];


	$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
	$m['GWTCanvasImplIEConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas', null, false);
	$m['VMLStyle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.VMLContext';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['type'] = 'Color';
			self['alpha'] = 1;
			self['color'] = '#000';
			self['gradient'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VMLStyle', $p['tuple']($bases), $data);
	})();
	$m['VMLContext'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.VMLContext';
		$method = $pyjs__bind_method2('__init__', function(ctx) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ctx = arguments[1];
			}
			if (typeof ctx == 'undefined') ctx=arguments['callee']['__args__'][3][1];
			var $iter1_nextval,$iter1_type,i,$iter1_iter,$iter1_array,$iter1_idx;
			if ($p['bool']((ctx === null))) {
				self['matrix'] = $p['list']([1, 0, 0, 0, 1, 0, 0, 0, 1]);
				self['arcScaleX'] = 1;
				self['arcScaleY'] = 1;
				self['globalAlpha'] = 1;
				self['miterLimit'] = 10;
				self['lineWidth'] = 1;
				self['lineCap'] = $p['getattr']($m['GWTCanvasImplIEConsts'], 'BUTT');
				self['lineJoin'] = $p['getattr']($m['GWTCanvasConsts'], 'MITER');
				self['strokeStyle'] = $m['VMLStyle']();
				self['fillStyle'] = $m['VMLStyle']();
				self['globalCompositeOperation'] = $p['getattr']($m['GWTCanvasImplIEConsts'], 'SOURCE_OVER');
				return null;
			}
			self['matrix'] = $p['list']([]);
			$iter1_iter = $p['range'](9);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				self['matrix']['append']($p['getattr'](ctx, 'matrix')['__getitem__'](i));
			}
			self['arcScaleX'] = $p['getattr'](ctx, 'arcScaleX');
			self['arcScaleY'] = $p['getattr'](ctx, 'arcScaleY');
			self['globalAlpha'] = $p['getattr'](ctx, 'globalAlpha');
			self['miterLimit'] = $p['getattr'](ctx, 'miterLimit');
			self['lineWidth'] = $p['getattr'](ctx, 'lineWidth');
			self['lineCap'] = $p['getattr'](ctx, 'lineCap');
			self['lineJoin'] = $p['getattr'](ctx, 'lineJoin');
			self['strokeStyle'] = $p['getattr'](ctx, 'strokeStyle');
			self['fillStyle'] = $p['getattr'](ctx, 'fillStyle');
			self['globalCompositeOperation'] = $p['getattr'](ctx, 'globalCompositeOperation');
			return null;
		}
	, 1, [null,null,['self'],['ctx', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VMLContext', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.VMLContext */


/* end module: pyjamas.Canvas.VMLContext */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvasConsts', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts']
*/
