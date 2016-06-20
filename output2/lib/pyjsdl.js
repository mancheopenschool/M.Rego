/* start module: pyjsdl */
$pyjs['loaded_modules']['pyjsdl'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl'];
	var $m = $pyjs['loaded_modules']['pyjsdl'];
	$m['__repr__'] = function() { return '<module: pyjsdl>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'pyjsdl.py, line 1:\n    #Pyjsdl - Python-to-JavaScript Multimedia Framework';
		$m.__track_lines__[25] = 'pyjsdl.py, line 25:\n    from display import Display';
		$m.__track_lines__[26] = 'pyjsdl.py, line 26:\n    from surface import Surface';
		$m.__track_lines__[27] = 'pyjsdl.py, line 27:\n    from rect import Rect';
		$m.__track_lines__[28] = 'pyjsdl.py, line 28:\n    from image import Image';
		$m.__track_lines__[29] = 'pyjsdl.py, line 29:\n    from draw import Draw';
		$m.__track_lines__[30] = 'pyjsdl.py, line 30:\n    from event import Event';
		$m.__track_lines__[31] = 'pyjsdl.py, line 31:\n    from key import Key';
		$m.__track_lines__[32] = 'pyjsdl.py, line 32:\n    from mouse import Mouse';
		$m.__track_lines__[33] = 'pyjsdl.py, line 33:\n    from transform import Transform';
		$m.__track_lines__[34] = 'pyjsdl.py, line 34:\n    from surfarray import Surfarray';
		$m.__track_lines__[35] = 'pyjsdl.py, line 35:\n    from color import Color';
		$m.__track_lines__[36] = 'pyjsdl.py, line 36:\n    from mixer import Mixer';
		$m.__track_lines__[37] = 'pyjsdl.py, line 37:\n    from time import Time';
		$m.__track_lines__[38] = 'pyjsdl.py, line 38:\n    import util';
		$m.__track_lines__[39] = 'pyjsdl.py, line 39:\n    import mask';
		$m.__track_lines__[40] = 'pyjsdl.py, line 40:\n    import font';
		$m.__track_lines__[41] = 'pyjsdl.py, line 41:\n    import sprite';
		$m.__track_lines__[42] = 'pyjsdl.py, line 42:\n    from locals import *';
		$m.__track_lines__[44] = 'pyjsdl.py, line 44:\n    time = Time()';
		$m.__track_lines__[45] = 'pyjsdl.py, line 45:\n    display = Display()';
		$m.__track_lines__[46] = 'pyjsdl.py, line 46:\n    image = Image()';
		$m.__track_lines__[47] = 'pyjsdl.py, line 47:\n    draw = Draw()';
		$m.__track_lines__[48] = 'pyjsdl.py, line 48:\n    transform = Transform()';
		$m.__track_lines__[49] = 'pyjsdl.py, line 49:\n    surfarray = Surfarray()';
		$m.__track_lines__[50] = 'pyjsdl.py, line 50:\n    mixer = Mixer()';
		$m.__track_lines__[51] = 'pyjsdl.py, line 51:\n    event = Event()';
		$m.__track_lines__[52] = 'pyjsdl.py, line 52:\n    mouse = Mouse()';
		$m.__track_lines__[53] = 'pyjsdl.py, line 53:\n    key = Key()';
		$m.__track_lines__[55] = 'pyjsdl.py, line 55:\n    init = lambda:None';
		$m.__track_lines__[57] = 'pyjsdl.py, line 57:\n    def quit():';
		$m.__track_lines__[58] = 'pyjsdl.py, line 58:\n    canvas = display.get_canvas()';
		$m.__track_lines__[59] = 'pyjsdl.py, line 59:\n    canvas.stop()';
		$m.__track_lines__[61] = 'pyjsdl.py, line 61:\n    class error(RuntimeError):';
		$m.__track_lines__[62] = 'pyjsdl.py, line 62:\n    pass';
		var $lambda1;

		$pyjs['track']['module']='pyjsdl';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=25;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Display'] = $p['___import___']('display.Display', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=26;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=27;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=28;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Image'] = $p['___import___']('image.Image', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=29;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Draw'] = $p['___import___']('draw.Draw', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=30;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('event.Event', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=31;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Key'] = $p['___import___']('key.Key', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=32;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Mouse'] = $p['___import___']('mouse.Mouse', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=33;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Transform'] = $p['___import___']('transform.Transform', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=34;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surfarray'] = $p['___import___']('surfarray.Surfarray', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=35;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=36;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Mixer'] = $p['___import___']('mixer.Mixer', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=37;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Time'] = $p['___import___']('time.Time', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=38;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['util'] = $p['___import___']('util', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=39;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['mask'] = $p['___import___']('mask', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=40;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['font'] = $p['___import___']('font', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=41;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['sprite'] = $p['___import___']('sprite', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=42;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$p['__import_all__']('locals', 'pyjsdl', $m, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=44;
		$m['time'] = $m['Time']();
		$pyjs['track']['lineno']=45;
		$m['display'] = $m['Display']();
		$pyjs['track']['lineno']=46;
		$m['image'] = $m['Image']();
		$pyjs['track']['lineno']=47;
		$m['draw'] = $m['Draw']();
		$pyjs['track']['lineno']=48;
		$m['transform'] = $m['Transform']();
		$pyjs['track']['lineno']=49;
		$m['surfarray'] = $m['Surfarray']();
		$pyjs['track']['lineno']=50;
		$m['mixer'] = $m['Mixer']();
		$pyjs['track']['lineno']=51;
		$m['event'] = $m['Event']();
		$pyjs['track']['lineno']=52;
		$m['mouse'] = $m['Mouse']();
		$pyjs['track']['lineno']=53;
		$m['key'] = $m['Key']();
		$pyjs['track']['lineno']=55;
		var 		$lambda1 = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl','lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=55;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null];
		$m['init'] = $lambda1;
		$pyjs['track']['lineno']=57;
		$m['quit'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var canvas;
			$pyjs['track']={'module':'pyjsdl','lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl';
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=58;
			canvas = $m['display']['get_canvas']();
			$pyjs['track']['lineno']=59;
			canvas['stop']();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['quit']['__name__'] = 'quit';

		$m['quit']['__bind_type__'] = 0;
		$m['quit']['__args__'] = [null,null];
		$pyjs['track']['lineno']=61;
		$m['error'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl';
			$cls_definition['__md5__'] = '78c6bd3b481389913ccf4eeaca5232e0';
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=61;
			var $bases = new Array($p['RuntimeError']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('error', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl */


/* end module: pyjsdl */


/*
PYJS_DEPS: ['display.Display', 'display', 'surface.Surface', 'surface', 'rect.Rect', 'rect', 'image.Image', 'image', 'draw.Draw', 'draw', 'event.Event', 'event', 'key.Key', 'key', 'mouse.Mouse', 'mouse', 'transform.Transform', 'transform', 'surfarray.Surfarray', 'surfarray', 'color.Color', 'color', 'mixer.Mixer', 'mixer', 'time.Time', 'time', 'util', 'mask', 'font', 'sprite', 'locals']
*/
