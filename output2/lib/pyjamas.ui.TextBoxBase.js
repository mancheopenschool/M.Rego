/* start module: pyjamas.ui.TextBoxBase */
$pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.TextBoxBase']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.TextBoxBase>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBoxBase';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['TextBoxBase'] = $pyjs['loaded_modules']['pyjamas.ui.TextBoxBase'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.TextBoxBase.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.TextBoxBase.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.TextBoxBase.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.TextBoxBase.py, line 17:\n    from __pyjamas__ import console, JS';
		$m.__track_lines__[18] = 'pyjamas.ui.TextBoxBase.py, line 18:\n    from pyjamas.ui.FocusWidget import FocusWidget';
		$m.__track_lines__[19] = 'pyjamas.ui.TextBoxBase.py, line 19:\n    from pyjamas.ui.ChangeListener import ChangeHandler';
		$m.__track_lines__[20] = 'pyjamas.ui.TextBoxBase.py, line 20:\n    from pyjamas.ui.InputListener import InputHandler';
		$m.__track_lines__[21] = 'pyjamas.ui.TextBoxBase.py, line 21:\n    from pyjamas.ui import Event';
		$m.__track_lines__[23] = 'pyjamas.ui.TextBoxBase.py, line 23:\n    class TextBoxBase(FocusWidget, ChangeHandler, InputHandler):';
		$m.__track_lines__[24] = 'pyjamas.ui.TextBoxBase.py, line 24:\n    ALIGN_CENTER = "center"';
		$m.__track_lines__[25] = 'pyjamas.ui.TextBoxBase.py, line 25:\n    ALIGN_JUSTIFY = "justify"';
		$m.__track_lines__[26] = 'pyjamas.ui.TextBoxBase.py, line 26:\n    ALIGN_LEFT = "left"';
		$m.__track_lines__[27] = 'pyjamas.ui.TextBoxBase.py, line 27:\n    ALIGN_RIGHT = "right"';
		$m.__track_lines__[29] = 'pyjamas.ui.TextBoxBase.py, line 29:\n    _props = [("name", "Name", "Name", None),';
		$m.__track_lines__[33] = 'pyjamas.ui.TextBoxBase.py, line 33:\n    def __init__(self, element, **kwargs):';
		$m.__track_lines__[34] = 'pyjamas.ui.TextBoxBase.py, line 34:\n    self.currentEvent = None';
		$m.__track_lines__[36] = 'pyjamas.ui.TextBoxBase.py, line 36:\n    FocusWidget.__init__(self, element, **kwargs)';
		$m.__track_lines__[37] = 'pyjamas.ui.TextBoxBase.py, line 37:\n    ChangeHandler.__init__(self)';
		$m.__track_lines__[38] = 'pyjamas.ui.TextBoxBase.py, line 38:\n    InputHandler.__init__(self)';
		$m.__track_lines__[41] = 'pyjamas.ui.TextBoxBase.py, line 40:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[42] = 'pyjamas.ui.TextBoxBase.py, line 42:\n    return FocusWidget._getProps() + self._props';
		$m.__track_lines__[44] = 'pyjamas.ui.TextBoxBase.py, line 44:\n    def cancelKey(self):';
		$m.__track_lines__[45] = 'pyjamas.ui.TextBoxBase.py, line 45:\n    if self.currentEvent is not None:';
		$m.__track_lines__[46] = 'pyjamas.ui.TextBoxBase.py, line 46:\n    DOM.eventPreventDefault(self.currentEvent)';
		$m.__track_lines__[48] = 'pyjamas.ui.TextBoxBase.py, line 48:\n    def getCursorPos(self):';
		$m.__track_lines__[49] = 'pyjamas.ui.TextBoxBase.py, line 49:\n    element = self.getElement()';
		$m.__track_lines__[50] = 'pyjamas.ui.TextBoxBase.py, line 50:\n    try:';
		$m.__track_lines__[51] = 'pyjamas.ui.TextBoxBase.py, line 51:\n    return element.selectionStart';
		$m.__track_lines__[53] = 'pyjamas.ui.TextBoxBase.py, line 53:\n    return 0';
		$m.__track_lines__[55] = 'pyjamas.ui.TextBoxBase.py, line 55:\n    def getName(self):';
		$m.__track_lines__[56] = 'pyjamas.ui.TextBoxBase.py, line 56:\n    return DOM.getAttribute(self.getElement(), "name")';
		$m.__track_lines__[58] = 'pyjamas.ui.TextBoxBase.py, line 58:\n    def getSelectedText(self):';
		$m.__track_lines__[59] = 'pyjamas.ui.TextBoxBase.py, line 59:\n    start = self.getCursorPos()';
		$m.__track_lines__[60] = 'pyjamas.ui.TextBoxBase.py, line 60:\n    length = self.getSelectionLength()';
		$m.__track_lines__[61] = 'pyjamas.ui.TextBoxBase.py, line 61:\n    text = self.getText()';
		$m.__track_lines__[62] = 'pyjamas.ui.TextBoxBase.py, line 62:\n    return text[start:start + length]';
		$m.__track_lines__[64] = 'pyjamas.ui.TextBoxBase.py, line 64:\n    def getSelectionLength(self):';
		$m.__track_lines__[65] = 'pyjamas.ui.TextBoxBase.py, line 65:\n    element = self.getElement()';
		$m.__track_lines__[66] = 'pyjamas.ui.TextBoxBase.py, line 66:\n    try:';
		$m.__track_lines__[67] = 'pyjamas.ui.TextBoxBase.py, line 67:\n    return element.selectionEnd - element.selectionStart';
		$m.__track_lines__[69] = 'pyjamas.ui.TextBoxBase.py, line 69:\n    return 0';
		$m.__track_lines__[76] = 'pyjamas.ui.TextBoxBase.py, line 76:\n    def setFocus(self, focused):';
		$m.__track_lines__[77] = 'pyjamas.ui.TextBoxBase.py, line 77:\n    if (focused):';
		$m.__track_lines__[78] = 'pyjamas.ui.TextBoxBase.py, line 78:\n    self.getElement().focus()';
		$m.__track_lines__[80] = 'pyjamas.ui.TextBoxBase.py, line 80:\n    self.getElement().blur()';
		$m.__track_lines__[82] = 'pyjamas.ui.TextBoxBase.py, line 82:\n    def getText(self):';
		$m.__track_lines__[83] = 'pyjamas.ui.TextBoxBase.py, line 83:\n    return DOM.getAttribute(self.getElement(), "value")';
		$m.__track_lines__[85] = 'pyjamas.ui.TextBoxBase.py, line 85:\n    def selectAll(self):';
		$m.__track_lines__[86] = 'pyjamas.ui.TextBoxBase.py, line 86:\n    length = len(self.getText())';
		$m.__track_lines__[87] = 'pyjamas.ui.TextBoxBase.py, line 87:\n    if length > 0:';
		$m.__track_lines__[88] = 'pyjamas.ui.TextBoxBase.py, line 88:\n    self.setSelectionRange(0, length)';
		$m.__track_lines__[90] = 'pyjamas.ui.TextBoxBase.py, line 90:\n    def setCursorPos(self, pos):';
		$m.__track_lines__[91] = 'pyjamas.ui.TextBoxBase.py, line 91:\n    self.setSelectionRange(pos, 0)';
		$m.__track_lines__[93] = 'pyjamas.ui.TextBoxBase.py, line 93:\n    def setKey(self, key):';
		$m.__track_lines__[94] = 'pyjamas.ui.TextBoxBase.py, line 94:\n    if self.currentEvent is not None:';
		$m.__track_lines__[95] = 'pyjamas.ui.TextBoxBase.py, line 95:\n    DOM.eventSetKeyCode(self.currentEvent, key)';
		$m.__track_lines__[97] = 'pyjamas.ui.TextBoxBase.py, line 97:\n    def setName(self, name):';
		$m.__track_lines__[98] = 'pyjamas.ui.TextBoxBase.py, line 98:\n    DOM.setAttribute(self.getElement(), "name", name)';
		$m.__track_lines__[100] = 'pyjamas.ui.TextBoxBase.py, line 100:\n    def setSelectionRange(self, pos, length):';
		$m.__track_lines__[101] = 'pyjamas.ui.TextBoxBase.py, line 101:\n    if length < 0:';
		$m.__track_lines__[103] = 'pyjamas.ui.TextBoxBase.py, line 103:\n    console.error("Length must be a positive integer. Length: " + length)';
		$m.__track_lines__[105] = 'pyjamas.ui.TextBoxBase.py, line 105:\n    if (pos < 0) or (length + pos > len(self.getText())):';
		$m.__track_lines__[107] = 'pyjamas.ui.TextBoxBase.py, line 107:\n    console.error("From Index: %d " % pos + "  To Index: %d " % (pos + length) + "  Text Length: %d " % len(self.getText()))';
		$m.__track_lines__[109] = 'pyjamas.ui.TextBoxBase.py, line 109:\n    element = self.getElement()';
		$m.__track_lines__[110] = 'pyjamas.ui.TextBoxBase.py, line 110:\n    element.setSelectionRange(pos, pos + length)';
		$m.__track_lines__[112] = 'pyjamas.ui.TextBoxBase.py, line 112:\n    def setText(self, text):';
		$m.__track_lines__[113] = 'pyjamas.ui.TextBoxBase.py, line 113:\n    DOM.setAttribute(self.getElement(), "value", text)';
		$m.__track_lines__[115] = 'pyjamas.ui.TextBoxBase.py, line 115:\n    def setTextAlignment(self, align):';
		$m.__track_lines__[116] = 'pyjamas.ui.TextBoxBase.py, line 116:\n    DOM.setStyleAttribute(self.getElement(), "textAlign", align)';
		$m.__track_lines__[118] = 'pyjamas.ui.TextBoxBase.py, line 118:\n    def getTextAlignment(self, align):';
		$m.__track_lines__[119] = 'pyjamas.ui.TextBoxBase.py, line 119:\n    return DOM.getStyleAttribute(self.getElement(), "textAlign")';

		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusWidget'] = $p['___import___']('pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['ChangeHandler'] = $p['___import___']('pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['InputHandler'] = $p['___import___']('pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=23;
		$m['TextBoxBase'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.TextBoxBase';
			$cls_definition['__md5__'] = '765ab5ec197a725b26ed01bdcc83f511';
			$pyjs['track']['lineno']=24;
			$cls_definition['ALIGN_CENTER'] = 'center';
			$pyjs['track']['lineno']=25;
			$cls_definition['ALIGN_JUSTIFY'] = 'justify';
			$pyjs['track']['lineno']=26;
			$cls_definition['ALIGN_LEFT'] = 'left';
			$pyjs['track']['lineno']=27;
			$cls_definition['ALIGN_RIGHT'] = 'right';
			$pyjs['track']['lineno']=29;
			$cls_definition['_props'] = $p['list']([$p['tuple'](['name', 'Name', 'Name', null]), $p['tuple'](['align', 'Text Alignment', 'TextAlign', null])]);
			$pyjs['track']['lineno']=33;
			$method = $pyjs__bind_method2('__init__', function(element) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof element != 'undefined') {
						if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = element;
							element = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('currentEvent', null) : $p['setattr'](self, 'currentEvent', null); 
				$pyjs['track']['lineno']=36;
				$pyjs_kwargs_call($m['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
				$pyjs['track']['lineno']=37;
				$m['ChangeHandler']['__init__'](self);
				$pyjs['track']['lineno']=38;
				$m['InputHandler']['__init__'](self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['element']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=41;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				var $pyjs__ret = $p['__op_add']($add1=$m['FocusWidget']['_getProps'](),$add2=$p['getattr'](self, '_props'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs['track']['lineno']=44;
			$method = $pyjs__bind_method2('cancelKey', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=45;
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'currentEvent'), null))) {
					$pyjs['track']['lineno']=46;
					$m['DOM']['eventPreventDefault']($p['getattr'](self, 'currentEvent'));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cancelKey'] = $method;
			$pyjs['track']['lineno']=48;
			$method = $pyjs__bind_method2('getCursorPos', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,element;
				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=49;
				element = self['getElement']();
				$pyjs['track']['lineno']=50;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=51;
					$pyjs['track']['lineno']=51;
					var $pyjs__ret = $p['getattr'](element, 'selectionStart');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
					if (true) {
						$pyjs['track']['lineno']=53;
						$pyjs['track']['lineno']=53;
						var $pyjs__ret = $constant_int_0;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCursorPos'] = $method;
			$pyjs['track']['lineno']=55;
			$method = $pyjs__bind_method2('getName', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=56;
				var $pyjs__ret = $m['DOM']['getAttribute'](self['getElement'](), 'name');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getName'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('getSelectedText', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,text,start,length,$add4;
				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=59;
				start = self['getCursorPos']();
				$pyjs['track']['lineno']=60;
				length = self['getSelectionLength']();
				$pyjs['track']['lineno']=61;
				text = self['getText']();
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				var $pyjs__ret = $p['__getslice'](text, start, $p['__op_add']($add3=start,$add4=length));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSelectedText'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('getSelectionLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub2,$pyjs_try_err,$sub1,element;
				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				element = self['getElement']();
				$pyjs['track']['lineno']=66;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=67;
					$pyjs['track']['lineno']=67;
					var $pyjs__ret = $p['__op_sub']($sub1=$p['getattr'](element, 'selectionEnd'),$sub2=$p['getattr'](element, 'selectionStart'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
					if (true) {
						$pyjs['track']['lineno']=69;
						$pyjs['track']['lineno']=69;
						var $pyjs__ret = $constant_int_0;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSelectionLength'] = $method;
			$pyjs['track']['lineno']=76;
			$method = $pyjs__bind_method2('setFocus', function(focused) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					focused = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=77;
				if ($p['bool'](focused)) {
					$pyjs['track']['lineno']=78;
					self['getElement']()['focus']();
				}
				else {
					$pyjs['track']['lineno']=80;
					self['getElement']()['blur']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['focused']]);
			$cls_definition['setFocus'] = $method;
			$pyjs['track']['lineno']=82;
			$method = $pyjs__bind_method2('getText', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=83;
				var $pyjs__ret = $m['DOM']['getAttribute'](self['getElement'](), 'value');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getText'] = $method;
			$pyjs['track']['lineno']=85;
			$method = $pyjs__bind_method2('selectAll', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var length;
				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=86;
				length = $p['len'](self['getText']());
				$pyjs['track']['lineno']=87;
				if ($p['bool'](($p['cmp'](length, $constant_int_0) == 1))) {
					$pyjs['track']['lineno']=88;
					self['setSelectionRange']($constant_int_0, length);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['selectAll'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('setCursorPos', function(pos) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=91;
				self['setSelectionRange'](pos, $constant_int_0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['pos']]);
			$cls_definition['setCursorPos'] = $method;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('setKey', function(key) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=94;
				if ($p['bool'](!$p['op_is']($p['getattr'](self, 'currentEvent'), null))) {
					$pyjs['track']['lineno']=95;
					$m['DOM']['eventSetKeyCode']($p['getattr'](self, 'currentEvent'), key);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['setKey'] = $method;
			$pyjs['track']['lineno']=97;
			$method = $pyjs__bind_method2('setName', function(name) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=98;
				$m['DOM']['setAttribute'](self['getElement'](), 'name', name);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['name']]);
			$cls_definition['setName'] = $method;
			$pyjs['track']['lineno']=100;
			$method = $pyjs__bind_method2('setSelectionRange', function(pos, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					length = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add16,$or1,$or2,$add13,element,$add14,$add15,$add6,$add7,$add12,$add5,$add10,$add8,$add9,$add11;
				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':100};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=100;
				$pyjs['track']['lineno']=101;
				if ($p['bool'](($p['cmp'](length, $constant_int_0) == -1))) {
					$pyjs['track']['lineno']=103;
					console['error']($p['__op_add']($add5='Length must be a positive integer. Length: ',$add6=length));
				}
				$pyjs['track']['lineno']=105;
				if ($p['bool'](($p['bool']($or1=($p['cmp'](pos, $constant_int_0) == -1))?$or1:($p['cmp']($p['__op_add']($add7=length,$add8=pos), $p['len'](self['getText']())) == 1)))) {
					$pyjs['track']['lineno']=107;
					console['error']($p['__op_add']($add13=$p['__op_add']($add11=$p['sprintf']('From Index: %d ', pos),$add12=$p['sprintf']('  To Index: %d ', $p['__op_add']($add9=pos,$add10=length))),$add14=$p['sprintf']('  Text Length: %d ', $p['len'](self['getText']()))));
				}
				$pyjs['track']['lineno']=109;
				element = self['getElement']();
				$pyjs['track']['lineno']=110;
				element['setSelectionRange'](pos, $p['__op_add']($add15=pos,$add16=length));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['pos'],['length']]);
			$cls_definition['setSelectionRange'] = $method;
			$pyjs['track']['lineno']=112;
			$method = $pyjs__bind_method2('setText', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=113;
				$m['DOM']['setAttribute'](self['getElement'](), 'value', text);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['setText'] = $method;
			$pyjs['track']['lineno']=115;
			$method = $pyjs__bind_method2('setTextAlignment', function(align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					align = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=116;
				$m['DOM']['setStyleAttribute'](self['getElement'](), 'textAlign', align);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['align']]);
			$cls_definition['setTextAlignment'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('getTextAlignment', function(align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					align = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '765ab5ec197a725b26ed01bdcc83f511') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.TextBoxBase', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.TextBoxBase';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=119;
				var $pyjs__ret = $m['DOM']['getStyleAttribute'](self['getElement'](), 'textAlign');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['align']]);
			$cls_definition['getTextAlignment'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array($m['FocusWidget'],$m['ChangeHandler'],$m['InputHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('TextBoxBase', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.TextBoxBase */


/* end module: pyjamas.ui.TextBoxBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.FocusWidget.FocusWidget', 'pyjamas.ui', 'pyjamas.ui.FocusWidget', 'pyjamas.ui.ChangeListener.ChangeHandler', 'pyjamas.ui.ChangeListener', 'pyjamas.ui.InputListener.InputHandler', 'pyjamas.ui.InputListener', 'pyjamas.ui.Event']
*/
