/* start module: pyjsdl.pyjsobj */
$pyjs['loaded_modules']['pyjsdl.pyjsobj'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsobj']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsobj'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsobj'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsobj>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsobj';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['pyjsobj'] = $pyjs['loaded_modules']['pyjsdl.pyjsobj'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.pyjsobj.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.pyjsobj.py, line 4:\n    from pyjamas import DOM';
		$m.__track_lines__[5] = 'pyjsdl.pyjsobj.py, line 5:\n    from pyjamas import Window';
		$m.__track_lines__[6] = 'pyjsdl.pyjsobj.py, line 6:\n    from pyjamas.ui.RootPanel import RootPanel';
		$m.__track_lines__[7] = 'pyjsdl.pyjsobj.py, line 7:\n    from pyjamas.ui.FocusPanel import FocusPanel';
		$m.__track_lines__[8] = 'pyjsdl.pyjsobj.py, line 8:\n    from pyjamas.ui.VerticalPanel import VerticalPanel';
		$m.__track_lines__[9] = 'pyjsdl.pyjsobj.py, line 9:\n    from pyjamas.Canvas.Color import Color';
		$m.__track_lines__[10] = 'pyjsdl.pyjsobj.py, line 10:\n    from pyjamas.Canvas.ImageLoader import loadImages';
		$m.__track_lines__[11] = 'pyjsdl.pyjsobj.py, line 11:\n    from pyjamas.ui.TextBox import TextBox';
		$m.__track_lines__[12] = 'pyjsdl.pyjsobj.py, line 12:\n    from pyjamas.ui.TextArea import TextArea';
		$m.__track_lines__[13] = 'pyjsdl.pyjsobj.py, line 13:\n    from pyjamas.ui import Event';
		$m.__track_lines__[14] = 'pyjsdl.pyjsobj.py, line 14:\n    from pyjamas.ui.MouseListener import MouseWheelHandler';
		$m.__track_lines__[15] = 'pyjsdl.pyjsobj.py, line 15:\n    from pyjamas.Canvas.HTML5Canvas import HTML5Canvas';
		$m.__track_lines__[16] = 'pyjsdl.pyjsobj.py, line 16:\n    from pyjamas.media.Audio import Audio';
		$m.__track_lines__[17] = 'pyjsdl.pyjsobj.py, line 17:\n    from __pyjamas__ import JS';
		$m.__track_lines__[20] = 'pyjsdl.pyjsobj.py, line 20:\n    def eventGetMouseWheelVelocityY(evt):';
		$m.__track_lines__[22] = 'pyjsdl.pyjsobj.py, line 22:\n    JS("""';


		$pyjs['track']['module']='pyjsdl.pyjsobj';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=11;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=12;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=13;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=14;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['MouseWheelHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HTML5Canvas'] = $p['___import___']('pyjamas.Canvas.HTML5Canvas.HTML5Canvas', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Audio'] = $p['___import___']('pyjamas.media.Audio.Audio', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']['lineno']=20;
		$m['eventGetMouseWheelVelocityY'] = function(evt) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);


    return Math['round'](-evt['wheelDelta'] / 40) || 0;
    
		};
		$m['eventGetMouseWheelVelocityY']['__name__'] = 'eventGetMouseWheelVelocityY';

		$m['eventGetMouseWheelVelocityY']['__bind_type__'] = 0;
		$m['eventGetMouseWheelVelocityY']['__args__'] = [null,null,['evt']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.pyjsobj */


/* end module: pyjsdl.pyjsobj */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui.MouseListener', 'pyjamas.Canvas.HTML5Canvas.HTML5Canvas', 'pyjamas.Canvas.HTML5Canvas', 'pyjamas.media.Audio.Audio', 'pyjamas.media', 'pyjamas.media.Audio']
*/
