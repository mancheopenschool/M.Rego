/* start module: pyjamas.ui.CellPanel */
$pyjs['loaded_modules']['pyjamas.ui.CellPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.CellPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.CellPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.CellPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.CellPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CellPanel';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['CellPanel'] = $pyjs['loaded_modules']['pyjamas.ui.CellPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.CellPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.CellPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.CellPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.CellPanel.py, line 18:\n    from pyjamas.ui.ComplexPanel import ComplexPanel';
		$m.__track_lines__[19] = 'pyjamas.ui.CellPanel.py, line 19:\n    from pyjamas.ui import HasHorizontalAlignment';
		$m.__track_lines__[20] = 'pyjamas.ui.CellPanel.py, line 20:\n    from pyjamas.ui import HasVerticalAlignment';
		$m.__track_lines__[23] = 'pyjamas.ui.CellPanel.py, line 23:\n    class CellPanel(ComplexPanel):';
		$m.__track_lines__[25] = 'pyjamas.ui.CellPanel.py, line 25:\n    _props = [';
		$m.__track_lines__[33] = 'pyjamas.ui.CellPanel.py, line 33:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[35] = "pyjamas.ui.CellPanel.py, line 35:\n    kwargs['Spacing'] = kwargs.get('Spacing', 0)";
		$m.__track_lines__[36] = "pyjamas.ui.CellPanel.py, line 36:\n    kwargs['Padding'] = kwargs.get('Padding', 0)";
		$m.__track_lines__[37] = "pyjamas.ui.CellPanel.py, line 37:\n    kwargs['HorizontalAlignment'] = kwargs.get('HorizontalAlignment',";
		$m.__track_lines__[39] = "pyjamas.ui.CellPanel.py, line 39:\n    kwargs['VerticalAlignment'] = kwargs.get('VerticalAlignment',";
		$m.__track_lines__[42] = "pyjamas.ui.CellPanel.py, line 42:\n    element = kwargs.pop('Element', None) or DOM.createTable()";
		$m.__track_lines__[43] = 'pyjamas.ui.CellPanel.py, line 43:\n    fc = DOM.getFirstChild(element)';
		$m.__track_lines__[44] = 'pyjamas.ui.CellPanel.py, line 44:\n    if fc:';
		$m.__track_lines__[45] = 'pyjamas.ui.CellPanel.py, line 45:\n    self.body = fc';
		$m.__track_lines__[47] = 'pyjamas.ui.CellPanel.py, line 47:\n    self.body = DOM.createTBody()';
		$m.__track_lines__[48] = 'pyjamas.ui.CellPanel.py, line 48:\n    self.table = element';
		$m.__track_lines__[49] = 'pyjamas.ui.CellPanel.py, line 49:\n    self.setElement(self.table)';
		$m.__track_lines__[50] = 'pyjamas.ui.CellPanel.py, line 50:\n    DOM.appendChild(self.table, self.body)';
		$m.__track_lines__[52] = 'pyjamas.ui.CellPanel.py, line 52:\n    ComplexPanel.__init__(self, **kwargs)';
		$m.__track_lines__[55] = 'pyjamas.ui.CellPanel.py, line 54:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[56] = 'pyjamas.ui.CellPanel.py, line 56:\n    return ComplexPanel._getProps() + self._props';
		$m.__track_lines__[58] = 'pyjamas.ui.CellPanel.py, line 58:\n    def getTable(self):';
		$m.__track_lines__[59] = 'pyjamas.ui.CellPanel.py, line 59:\n    return self.table';
		$m.__track_lines__[61] = 'pyjamas.ui.CellPanel.py, line 61:\n    def getBody(self):';
		$m.__track_lines__[62] = 'pyjamas.ui.CellPanel.py, line 62:\n    return self.body';
		$m.__track_lines__[64] = 'pyjamas.ui.CellPanel.py, line 64:\n    def getBorderWidth(self):';
		$m.__track_lines__[65] = 'pyjamas.ui.CellPanel.py, line 65:\n    return DOM.getAttribute(self.table, "border")';
		$m.__track_lines__[67] = 'pyjamas.ui.CellPanel.py, line 67:\n    def getCellHeight(self, widget):';
		$m.__track_lines__[68] = 'pyjamas.ui.CellPanel.py, line 68:\n    td = DOM.getParent(widget.getElement())';
		$m.__track_lines__[69] = 'pyjamas.ui.CellPanel.py, line 69:\n    return DOM.getAttribute(td, "height")';
		$m.__track_lines__[71] = 'pyjamas.ui.CellPanel.py, line 71:\n    def getCellWidth(self, widget):';
		$m.__track_lines__[72] = 'pyjamas.ui.CellPanel.py, line 72:\n    td = DOM.getParent(widget.getElement())';
		$m.__track_lines__[73] = 'pyjamas.ui.CellPanel.py, line 73:\n    return DOM.getAttribute(td, "width")';
		$m.__track_lines__[75] = 'pyjamas.ui.CellPanel.py, line 75:\n    def getSpacing(self):';
		$m.__track_lines__[76] = 'pyjamas.ui.CellPanel.py, line 76:\n    return self.spacing';
		$m.__track_lines__[78] = 'pyjamas.ui.CellPanel.py, line 78:\n    def getPadding(self):';
		$m.__track_lines__[79] = 'pyjamas.ui.CellPanel.py, line 79:\n    return self.padding';
		$m.__track_lines__[81] = 'pyjamas.ui.CellPanel.py, line 81:\n    def getCellHorizontalAlignment(self, widget):';
		$m.__track_lines__[82] = 'pyjamas.ui.CellPanel.py, line 82:\n    td = self.getWidgetTd(widget)';
		$m.__track_lines__[83] = 'pyjamas.ui.CellPanel.py, line 83:\n    if td is None:';
		$m.__track_lines__[84] = 'pyjamas.ui.CellPanel.py, line 84:\n    return None';
		$m.__track_lines__[85] = 'pyjamas.ui.CellPanel.py, line 85:\n    return DOM.getAttribute(td, "align")';
		$m.__track_lines__[87] = 'pyjamas.ui.CellPanel.py, line 87:\n    def getCellVerticalAlignment(self, widget):';
		$m.__track_lines__[88] = 'pyjamas.ui.CellPanel.py, line 88:\n    td = self.getWidgetTd(widget)';
		$m.__track_lines__[89] = 'pyjamas.ui.CellPanel.py, line 89:\n    if td is None:';
		$m.__track_lines__[90] = 'pyjamas.ui.CellPanel.py, line 90:\n    return None';
		$m.__track_lines__[91] = 'pyjamas.ui.CellPanel.py, line 91:\n    return DOM.getStyleAttribute(td, "verticalAlign")';
		$m.__track_lines__[93] = 'pyjamas.ui.CellPanel.py, line 93:\n    def getWidgetTd(self, widget):';
		$m.__track_lines__[94] = 'pyjamas.ui.CellPanel.py, line 94:\n    if widget.getParent() != self:';
		$m.__track_lines__[95] = 'pyjamas.ui.CellPanel.py, line 95:\n    return None';
		$m.__track_lines__[96] = 'pyjamas.ui.CellPanel.py, line 96:\n    return DOM.getParent(widget.getElement())';
		$m.__track_lines__[98] = 'pyjamas.ui.CellPanel.py, line 98:\n    def setBorderWidth(self, width):';
		$m.__track_lines__[99] = 'pyjamas.ui.CellPanel.py, line 99:\n    if width is None or width == "":';
		$m.__track_lines__[100] = 'pyjamas.ui.CellPanel.py, line 100:\n    DOM.removeAttribute(self.table, "border")';
		$m.__track_lines__[102] = 'pyjamas.ui.CellPanel.py, line 102:\n    DOM.setAttribute(self.table, "border", "%d" % width)';
		$m.__track_lines__[104] = 'pyjamas.ui.CellPanel.py, line 104:\n    def setCellHeight(self, widget, height):';
		$m.__track_lines__[105] = 'pyjamas.ui.CellPanel.py, line 105:\n    td = DOM.getParent(widget.getElement())';
		$m.__track_lines__[106] = 'pyjamas.ui.CellPanel.py, line 106:\n    if height is None:';
		$m.__track_lines__[107] = 'pyjamas.ui.CellPanel.py, line 107:\n    DOM.removeAttribute(td, "height")';
		$m.__track_lines__[109] = 'pyjamas.ui.CellPanel.py, line 109:\n    DOM.setAttribute(td, "height", str(height))';
		$m.__track_lines__[111] = 'pyjamas.ui.CellPanel.py, line 111:\n    def setCellHorizontalAlignment(self, widget, align):';
		$m.__track_lines__[112] = 'pyjamas.ui.CellPanel.py, line 112:\n    td = self.getWidgetTd(widget)';
		$m.__track_lines__[113] = 'pyjamas.ui.CellPanel.py, line 113:\n    if td is not None:';
		$m.__track_lines__[114] = 'pyjamas.ui.CellPanel.py, line 114:\n    if align is None:';
		$m.__track_lines__[115] = 'pyjamas.ui.CellPanel.py, line 115:\n    DOM.removeAttribute(td, "align")';
		$m.__track_lines__[117] = 'pyjamas.ui.CellPanel.py, line 117:\n    DOM.setAttribute(td, "align", align)';
		$m.__track_lines__[119] = 'pyjamas.ui.CellPanel.py, line 119:\n    def setCellVerticalAlignment(self, widget, align):';
		$m.__track_lines__[120] = 'pyjamas.ui.CellPanel.py, line 120:\n    td = self.getWidgetTd(widget)';
		$m.__track_lines__[121] = 'pyjamas.ui.CellPanel.py, line 121:\n    if td is not None:';
		$m.__track_lines__[122] = 'pyjamas.ui.CellPanel.py, line 122:\n    if align is None:';
		$m.__track_lines__[123] = 'pyjamas.ui.CellPanel.py, line 123:\n    DOM.setStyleAttribute(td, "verticalAlign", "")';
		$m.__track_lines__[125] = 'pyjamas.ui.CellPanel.py, line 125:\n    DOM.setStyleAttribute(td, "verticalAlign", align)';
		$m.__track_lines__[127] = 'pyjamas.ui.CellPanel.py, line 127:\n    def setCellWidth(self, widget, width):';
		$m.__track_lines__[128] = 'pyjamas.ui.CellPanel.py, line 128:\n    td = DOM.getParent(widget.getElement())';
		$m.__track_lines__[129] = 'pyjamas.ui.CellPanel.py, line 129:\n    if width is None:';
		$m.__track_lines__[130] = 'pyjamas.ui.CellPanel.py, line 130:\n    DOM.removeAttribute(td, "width")';
		$m.__track_lines__[132] = 'pyjamas.ui.CellPanel.py, line 132:\n    DOM.setAttribute(td, "width", str(width))';
		$m.__track_lines__[134] = 'pyjamas.ui.CellPanel.py, line 134:\n    def setSpacing(self, spacing):';
		$m.__track_lines__[135] = 'pyjamas.ui.CellPanel.py, line 135:\n    self.spacing = spacing';
		$m.__track_lines__[136] = 'pyjamas.ui.CellPanel.py, line 136:\n    if spacing is None:';
		$m.__track_lines__[137] = 'pyjamas.ui.CellPanel.py, line 137:\n    DOM.removeAttribute(self.table, "cellSpacing")';
		$m.__track_lines__[139] = 'pyjamas.ui.CellPanel.py, line 139:\n    DOM.setAttribute(self.table, "cellSpacing", str(spacing))';
		$m.__track_lines__[141] = 'pyjamas.ui.CellPanel.py, line 141:\n    def setPadding(self, padding):';
		$m.__track_lines__[142] = 'pyjamas.ui.CellPanel.py, line 142:\n    self.padding = padding';
		$m.__track_lines__[143] = 'pyjamas.ui.CellPanel.py, line 143:\n    if padding is None:';
		$m.__track_lines__[144] = 'pyjamas.ui.CellPanel.py, line 144:\n    DOM.removeAttribute(self.table, "cellPadding")';
		$m.__track_lines__[146] = 'pyjamas.ui.CellPanel.py, line 146:\n    DOM.setAttribute(self.table, "cellPadding", str(padding))';
		$m.__track_lines__[148] = 'pyjamas.ui.CellPanel.py, line 148:\n    def setHorizontalAlignment(self, align):';
		$m.__track_lines__[149] = 'pyjamas.ui.CellPanel.py, line 149:\n    self.horzAlign = align';
		$m.__track_lines__[151] = 'pyjamas.ui.CellPanel.py, line 151:\n    def setVerticalAlignment(self, align):';
		$m.__track_lines__[152] = 'pyjamas.ui.CellPanel.py, line 152:\n    self.vertAlign = align';
		$m.__track_lines__[154] = 'pyjamas.ui.CellPanel.py, line 154:\n    def getHorizontalAlignment(self):';
		$m.__track_lines__[155] = 'pyjamas.ui.CellPanel.py, line 155:\n    return self.horzAlign';
		$m.__track_lines__[157] = 'pyjamas.ui.CellPanel.py, line 157:\n    def getVerticalAlignment(self):';
		$m.__track_lines__[158] = 'pyjamas.ui.CellPanel.py, line 158:\n    return self.vertAlign';
		$m.__track_lines__[161] = "pyjamas.ui.CellPanel.py, line 161:\n    Factory.registerClass('pyjamas.ui.CellPanel', 'CellPanel', CellPanel)";

		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjamas.ui.CellPanel';
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
		$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=23;
		$m['CellPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.CellPanel';
			$cls_definition['__md5__'] = '4da375bade73687d33e77fd47c0fa42d';
			$pyjs['track']['lineno']=25;
			$cls_definition['_props'] = $p['list']([$p['tuple'](['horzAlign', 'Horizontal alignment', 'HorizontalAlignment', null]), $p['tuple'](['vertAlign', 'Vertical alignment', 'VerticalAlignment', null]), $p['tuple'](['border', 'Border width', 'BorderWidth', $p['int']]), $p['tuple'](['spacing', 'Spacing', 'Spacing', null]), $p['tuple'](['padding', 'Padding', 'Padding', null])]);
			$pyjs['track']['lineno']=33;
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
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
				var $or1,$or2,element,fc;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=35;
				kwargs['__setitem__']('Spacing', kwargs['get']('Spacing', $constant_int_0));
				$pyjs['track']['lineno']=36;
				kwargs['__setitem__']('Padding', kwargs['get']('Padding', $constant_int_0));
				$pyjs['track']['lineno']=37;
				kwargs['__setitem__']('HorizontalAlignment', kwargs['get']('HorizontalAlignment', $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_LEFT')));
				$pyjs['track']['lineno']=39;
				kwargs['__setitem__']('VerticalAlignment', kwargs['get']('VerticalAlignment', $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_TOP')));
				$pyjs['track']['lineno']=42;
				element = ($p['bool']($or1=kwargs['pop']('Element', null))?$or1:$m['DOM']['createTable']());
				$pyjs['track']['lineno']=43;
				fc = $m['DOM']['getFirstChild'](element);
				$pyjs['track']['lineno']=44;
				if ($p['bool'](fc)) {
					$pyjs['track']['lineno']=45;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('body', fc) : $p['setattr'](self, 'body', fc); 
				}
				else {
					$pyjs['track']['lineno']=47;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('body', $m['DOM']['createTBody']()) : $p['setattr'](self, 'body', $m['DOM']['createTBody']()); 
				}
				$pyjs['track']['lineno']=48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('table', element) : $p['setattr'](self, 'table', element); 
				$pyjs['track']['lineno']=49;
				self['setElement']($p['getattr'](self, 'table'));
				$pyjs['track']['lineno']=50;
				$m['DOM']['appendChild']($p['getattr'](self, 'table'), $p['getattr'](self, 'body'));
				$pyjs['track']['lineno']=52;
				$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=55;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add2,$add1;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=55;
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=56;
				var $pyjs__ret = $p['__op_add']($add1=$m['ComplexPanel']['_getProps'](),$add2=$p['getattr'](self, '_props'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('getTable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=59;
				var $pyjs__ret = $p['getattr'](self, 'table');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTable'] = $method;
			$pyjs['track']['lineno']=61;
			$method = $pyjs__bind_method2('getBody', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				var $pyjs__ret = $p['getattr'](self, 'body');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBody'] = $method;
			$pyjs['track']['lineno']=64;
			$method = $pyjs__bind_method2('getBorderWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=65;
				var $pyjs__ret = $m['DOM']['getAttribute']($p['getattr'](self, 'table'), 'border');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBorderWidth'] = $method;
			$pyjs['track']['lineno']=67;
			$method = $pyjs__bind_method2('getCellHeight', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=68;
				td = $m['DOM']['getParent'](widget['getElement']());
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=69;
				var $pyjs__ret = $m['DOM']['getAttribute'](td, 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellHeight'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('getCellWidth', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				td = $m['DOM']['getParent'](widget['getElement']());
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=73;
				var $pyjs__ret = $m['DOM']['getAttribute'](td, 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellWidth'] = $method;
			$pyjs['track']['lineno']=75;
			$method = $pyjs__bind_method2('getSpacing', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=76;
				var $pyjs__ret = $p['getattr'](self, 'spacing');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSpacing'] = $method;
			$pyjs['track']['lineno']=78;
			$method = $pyjs__bind_method2('getPadding', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':78};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=78;
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=79;
				var $pyjs__ret = $p['getattr'](self, 'padding');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPadding'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('getCellHorizontalAlignment', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=82;
				td = self['getWidgetTd'](widget);
				$pyjs['track']['lineno']=83;
				if ($p['bool']($p['op_is'](td, null))) {
					$pyjs['track']['lineno']=84;
					$pyjs['track']['lineno']=84;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=85;
				var $pyjs__ret = $m['DOM']['getAttribute'](td, 'align');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellHorizontalAlignment'] = $method;
			$pyjs['track']['lineno']=87;
			$method = $pyjs__bind_method2('getCellVerticalAlignment', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=88;
				td = self['getWidgetTd'](widget);
				$pyjs['track']['lineno']=89;
				if ($p['bool']($p['op_is'](td, null))) {
					$pyjs['track']['lineno']=90;
					$pyjs['track']['lineno']=90;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=91;
				var $pyjs__ret = $m['DOM']['getStyleAttribute'](td, 'verticalAlign');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getCellVerticalAlignment'] = $method;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('getWidgetTd', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=94;
				if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
					$pyjs['track']['lineno']=95;
					$pyjs['track']['lineno']=95;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=96;
				$pyjs['track']['lineno']=96;
				var $pyjs__ret = $m['DOM']['getParent'](widget['getElement']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['getWidgetTd'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('setBorderWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or3,$or4;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=99;
				if ($p['bool'](($p['bool']($or3=$p['op_is'](width, null))?$or3:$p['op_eq'](width, '')))) {
					$pyjs['track']['lineno']=100;
					$m['DOM']['removeAttribute']($p['getattr'](self, 'table'), 'border');
				}
				else {
					$pyjs['track']['lineno']=102;
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'border', $p['sprintf']('%d', width));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setBorderWidth'] = $method;
			$pyjs['track']['lineno']=104;
			$method = $pyjs__bind_method2('setCellHeight', function(widget, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':104};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=104;
				$pyjs['track']['lineno']=105;
				td = $m['DOM']['getParent'](widget['getElement']());
				$pyjs['track']['lineno']=106;
				if ($p['bool']($p['op_is'](height, null))) {
					$pyjs['track']['lineno']=107;
					$m['DOM']['removeAttribute'](td, 'height');
				}
				else {
					$pyjs['track']['lineno']=109;
					$m['DOM']['setAttribute'](td, 'height', $p['str'](height));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['height']]);
			$cls_definition['setCellHeight'] = $method;
			$pyjs['track']['lineno']=111;
			$method = $pyjs__bind_method2('setCellHorizontalAlignment', function(widget, align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					align = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':111};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=111;
				$pyjs['track']['lineno']=112;
				td = self['getWidgetTd'](widget);
				$pyjs['track']['lineno']=113;
				if ($p['bool'](!$p['op_is'](td, null))) {
					$pyjs['track']['lineno']=114;
					if ($p['bool']($p['op_is'](align, null))) {
						$pyjs['track']['lineno']=115;
						$m['DOM']['removeAttribute'](td, 'align');
					}
					else {
						$pyjs['track']['lineno']=117;
						$m['DOM']['setAttribute'](td, 'align', align);
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['align']]);
			$cls_definition['setCellHorizontalAlignment'] = $method;
			$pyjs['track']['lineno']=119;
			$method = $pyjs__bind_method2('setCellVerticalAlignment', function(widget, align) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					align = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=120;
				td = self['getWidgetTd'](widget);
				$pyjs['track']['lineno']=121;
				if ($p['bool'](!$p['op_is'](td, null))) {
					$pyjs['track']['lineno']=122;
					if ($p['bool']($p['op_is'](align, null))) {
						$pyjs['track']['lineno']=123;
						$m['DOM']['setStyleAttribute'](td, 'verticalAlign', '');
					}
					else {
						$pyjs['track']['lineno']=125;
						$m['DOM']['setStyleAttribute'](td, 'verticalAlign', align);
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['align']]);
			$cls_definition['setCellVerticalAlignment'] = $method;
			$pyjs['track']['lineno']=127;
			$method = $pyjs__bind_method2('setCellWidth', function(widget, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td;
				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=127;
				$pyjs['track']['lineno']=128;
				td = $m['DOM']['getParent'](widget['getElement']());
				$pyjs['track']['lineno']=129;
				if ($p['bool']($p['op_is'](width, null))) {
					$pyjs['track']['lineno']=130;
					$m['DOM']['removeAttribute'](td, 'width');
				}
				else {
					$pyjs['track']['lineno']=132;
					$m['DOM']['setAttribute'](td, 'width', $p['str'](width));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['width']]);
			$cls_definition['setCellWidth'] = $method;
			$pyjs['track']['lineno']=134;
			$method = $pyjs__bind_method2('setSpacing', function(spacing) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					spacing = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=134;
				$pyjs['track']['lineno']=135;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('spacing', spacing) : $p['setattr'](self, 'spacing', spacing); 
				$pyjs['track']['lineno']=136;
				if ($p['bool']($p['op_is'](spacing, null))) {
					$pyjs['track']['lineno']=137;
					$m['DOM']['removeAttribute']($p['getattr'](self, 'table'), 'cellSpacing');
				}
				else {
					$pyjs['track']['lineno']=139;
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellSpacing', $p['str'](spacing));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['spacing']]);
			$cls_definition['setSpacing'] = $method;
			$pyjs['track']['lineno']=141;
			$method = $pyjs__bind_method2('setPadding', function(padding) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					padding = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':141};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=141;
				$pyjs['track']['lineno']=142;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('padding', padding) : $p['setattr'](self, 'padding', padding); 
				$pyjs['track']['lineno']=143;
				if ($p['bool']($p['op_is'](padding, null))) {
					$pyjs['track']['lineno']=144;
					$m['DOM']['removeAttribute']($p['getattr'](self, 'table'), 'cellPadding');
				}
				else {
					$pyjs['track']['lineno']=146;
					$m['DOM']['setAttribute']($p['getattr'](self, 'table'), 'cellPadding', $p['str'](padding));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['padding']]);
			$cls_definition['setPadding'] = $method;
			$pyjs['track']['lineno']=148;
			$method = $pyjs__bind_method2('setHorizontalAlignment', function(align) {
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=148;
				$pyjs['track']['lineno']=149;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('horzAlign', align) : $p['setattr'](self, 'horzAlign', align); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['align']]);
			$cls_definition['setHorizontalAlignment'] = $method;
			$pyjs['track']['lineno']=151;
			$method = $pyjs__bind_method2('setVerticalAlignment', function(align) {
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
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':151};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=151;
				$pyjs['track']['lineno']=152;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vertAlign', align) : $p['setattr'](self, 'vertAlign', align); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['align']]);
			$cls_definition['setVerticalAlignment'] = $method;
			$pyjs['track']['lineno']=154;
			$method = $pyjs__bind_method2('getHorizontalAlignment', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':154};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=154;
				$pyjs['track']['lineno']=155;
				$pyjs['track']['lineno']=155;
				var $pyjs__ret = $p['getattr'](self, 'horzAlign');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHorizontalAlignment'] = $method;
			$pyjs['track']['lineno']=157;
			$method = $pyjs__bind_method2('getVerticalAlignment', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4da375bade73687d33e77fd47c0fa42d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.CellPanel', 'lineno':157};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.CellPanel';
				$pyjs['track']['lineno']=157;
				$pyjs['track']['lineno']=158;
				$pyjs['track']['lineno']=158;
				var $pyjs__ret = $p['getattr'](self, 'vertAlign');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVerticalAlignment'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array($m['ComplexPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('CellPanel', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=161;
		$m['Factory']['registerClass']('pyjamas.ui.CellPanel', 'CellPanel', $m['CellPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.CellPanel */


/* end module: pyjamas.ui.CellPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
