/* start module: pyjsdl */
$pyjs['loaded_modules']['pyjsdl'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl'];
	var $m = $pyjs['loaded_modules']['pyjsdl'];
	$m['__repr__'] = function() { return '<module: pyjsdl>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl';
	$m['__name__'] = __mod_name__;
	var $lambda1;

	$m['Display'] = $p['___import___']('display.Display', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('rect.Rect', 'pyjsdl', null, false);
	$m['Image'] = $p['___import___']('image.Image', 'pyjsdl', null, false);
	$m['Draw'] = $p['___import___']('draw.Draw', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('event.Event', 'pyjsdl', null, false);
	$m['Key'] = $p['___import___']('key.Key', 'pyjsdl', null, false);
	$m['Mouse'] = $p['___import___']('mouse.Mouse', 'pyjsdl', null, false);
	$m['Transform'] = $p['___import___']('transform.Transform', 'pyjsdl', null, false);
	$m['Surfarray'] = $p['___import___']('surfarray.Surfarray', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
	$m['Mixer'] = $p['___import___']('mixer.Mixer', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('time.Time', 'pyjsdl', null, false);
	$m['util'] = $p['___import___']('util', 'pyjsdl');
	$m['mask'] = $p['___import___']('mask', 'pyjsdl');
	$m['font'] = $p['___import___']('font', 'pyjsdl');
	$m['sprite'] = $p['___import___']('sprite', 'pyjsdl');
	$p['__import_all__']('locals', 'pyjsdl', $m, null, false);
	$m['time'] = $m['Time']();
	$m['display'] = $m['Display']();
	$m['image'] = $m['Image']();
	$m['draw'] = $m['Draw']();
	$m['transform'] = $m['Transform']();
	$m['surfarray'] = $m['Surfarray']();
	$m['mixer'] = $m['Mixer']();
	$m['event'] = $m['Event']();
	$m['mouse'] = $m['Mouse']();
	$m['key'] = $m['Key']();
	var 	$lambda1 = function() {

		return null;
	};
	$lambda1['__name__'] = '$lambda1';

	$lambda1['__bind_type__'] = 0;
	$lambda1['__args__'] = [null,null];
	$m['init'] = $lambda1;
	$m['quit'] = function() {
		var canvas;
		canvas = $m['display']['get_canvas']();
		canvas['stop']();
		return null;
	};
	$m['quit']['__name__'] = 'quit';

	$m['quit']['__bind_type__'] = 0;
	$m['quit']['__args__'] = [null,null];
	$m['error'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl';
		var $bases = new Array($p['RuntimeError']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('error', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl */


/* end module: pyjsdl */


/*
PYJS_DEPS: ['display.Display', 'display', 'surface.Surface', 'surface', 'rect.Rect', 'rect', 'image.Image', 'image', 'draw.Draw', 'draw', 'event.Event', 'event', 'key.Key', 'key', 'mouse.Mouse', 'mouse', 'transform.Transform', 'transform', 'surfarray.Surfarray', 'surfarray', 'color.Color', 'color', 'mixer.Mixer', 'mixer', 'time.Time', 'time', 'util', 'mask', 'font', 'sprite', 'locals']
*/
