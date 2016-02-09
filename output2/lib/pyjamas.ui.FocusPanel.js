/* start module: pyjamas.ui.FocusPanel */
$pyjs['loaded_modules']['pyjamas.ui.FocusPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FocusPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FocusPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FocusPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FocusPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FocusPanel';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['FocusPanel'] = $pyjs['loaded_modules']['pyjamas.ui.FocusPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.FocusPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[35] = 'pyjamas.ui.FocusPanel.py, line 35:\n    SimplePanel.__init__(self, Focus.createFocusable(), **kwargs)';
		$m.__track_lines__[36] = 'pyjamas.ui.FocusPanel.py, line 36:\n    FocusHandler.__init__(self)';
		$m.__track_lines__[37] = 'pyjamas.ui.FocusPanel.py, line 37:\n    KeyboardHandler.__init__(self)';
		$m.__track_lines__[38] = 'pyjamas.ui.FocusPanel.py, line 38:\n    ClickHandler.__init__(self)';
		$m.__track_lines__[39] = 'pyjamas.ui.FocusPanel.py, line 39:\n    MouseHandler.__init__(self)';
		$m.__track_lines__[41] = "pyjamas.ui.FocusPanel.py, line 41:\n    Factory.registerClass('pyjamas.ui.FocusPanel', 'FocusPanel', FocusPanel)";
		$m.__track_lines__[15] = 'pyjamas.ui.FocusPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.FocusPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.FocusPanel.py, line 18:\n    from pyjamas.ui.SimplePanel import SimplePanel';
		$m.__track_lines__[19] = 'pyjamas.ui.FocusPanel.py, line 19:\n    from pyjamas.ui.Focus import FocusMixin';
		$m.__track_lines__[20] = 'pyjamas.ui.FocusPanel.py, line 20:\n    from pyjamas.ui import Focus';
		$m.__track_lines__[22] = 'pyjamas.ui.FocusPanel.py, line 22:\n    from pyjamas.ui.ClickListener import ClickHandler';
		$m.__track_lines__[23] = 'pyjamas.ui.FocusPanel.py, line 23:\n    from pyjamas.ui.KeyboardListener import KeyboardHandler';
		$m.__track_lines__[24] = 'pyjamas.ui.FocusPanel.py, line 24:\n    from pyjamas.ui.FocusListener import FocusHandler';
		$m.__track_lines__[25] = 'pyjamas.ui.FocusPanel.py, line 25:\n    from pyjamas.ui.MouseListener import MouseHandler';
		$m.__track_lines__[27] = 'pyjamas.ui.FocusPanel.py, line 27:\n    class FocusPanel(SimplePanel, FocusHandler, KeyboardHandler,';
		$m.__track_lines__[31] = 'pyjamas.ui.FocusPanel.py, line 31:\n    def __init__(self, **kwargs):';


		$pyjs['track']['module']='pyjamas.ui.FocusPanel';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusMixin'] = $p['___import___']('pyjamas.ui.Focus.FocusMixin', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Focus'] = $p['___import___']('pyjamas.ui.Focus', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=22;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=23;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=24;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusHandler'] = $p['___import___']('pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=25;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=27;
		$m['FocusPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.FocusPanel';
			$cls_definition['__md5__'] = 'ea5513b55e81c53f527f7ce1148fed2a';
			$pyjs['track']['lineno']=31;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ea5513b55e81c53f527f7ce1148fed2a') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.FocusPanel', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.FocusPanel';
				$pyjs['track']['lineno']=31;
				$pyjs['track']['lineno']=35;
				$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self, $m['Focus']['createFocusable']()]);
				$pyjs['track']['lineno']=36;
				$m['FocusHandler']['__init__'](self);
				$pyjs['track']['lineno']=37;
				$m['KeyboardHandler']['__init__'](self);
				$pyjs['track']['lineno']=38;
				$m['ClickHandler']['__init__'](self);
				$pyjs['track']['lineno']=39;
				$m['MouseHandler']['__init__'](self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=27;
			var $bases = new Array($m['SimplePanel'],$m['FocusHandler'],$m['KeyboardHandler'],$m['MouseHandler'],$m['ClickHandler'],$m['FocusMixin']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('FocusPanel', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=41;
		$m['Factory']['registerClass']('pyjamas.ui.FocusPanel', 'FocusPanel', $m['FocusPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.FocusPanel */


/* end module: pyjamas.ui.FocusPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Focus.FocusMixin', 'pyjamas.ui.Focus', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui.FocusListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener']
*/
