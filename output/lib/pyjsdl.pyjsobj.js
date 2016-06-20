/* start module: pyjsdl.pyjsobj */
$pyjs['loaded_modules']['pyjsdl.pyjsobj'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsobj']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsobj'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsobj'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsobj>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsobj';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['pyjsobj'] = $pyjs['loaded_modules']['pyjsdl.pyjsobj'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjsdl', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjsdl', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjsdl', null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', 'pyjsdl', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjsdl', null, false);
	$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', 'pyjsdl', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjsdl', null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjsdl', null, false);
	$m['MouseWheelHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjsdl', null, false);
	$m['HTML5Canvas'] = $p['___import___']('pyjamas.Canvas.HTML5Canvas.HTML5Canvas', 'pyjsdl', null, false);
	$m['Audio'] = $p['___import___']('pyjamas.media.Audio.Audio', 'pyjsdl', null, false);
	$m['eventGetMouseWheelVelocityY'] = function(evt) {


    return Math['round'](-evt['wheelDelta'] / 40) || 0;
    
	};
	$m['eventGetMouseWheelVelocityY']['__name__'] = 'eventGetMouseWheelVelocityY';

	$m['eventGetMouseWheelVelocityY']['__bind_type__'] = 0;
	$m['eventGetMouseWheelVelocityY']['__args__'] = [null,null,['evt']];
	return this;
}; /* end pyjsdl.pyjsobj */


/* end module: pyjsdl.pyjsobj */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui.MouseListener', 'pyjamas.Canvas.HTML5Canvas.HTML5Canvas', 'pyjamas.Canvas.HTML5Canvas', 'pyjamas.media.Audio.Audio', 'pyjamas.media', 'pyjamas.media.Audio']
*/
