/* start module: pyjamas.ui */
$pyjs['loaded_modules']['pyjamas.ui'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas']['ui'] = $pyjs['loaded_modules']['pyjamas.ui'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[16] = 'pyjamas.ui.py, line 16:\n    class HasHorizontalAlignment:';
		$m.__track_lines__[17] = 'pyjamas.ui.py, line 17:\n    ALIGN_LEFT = "left"';
		$m.__track_lines__[18] = 'pyjamas.ui.py, line 18:\n    ALIGN_CENTER = "center"';
		$m.__track_lines__[19] = 'pyjamas.ui.py, line 19:\n    ALIGN_RIGHT = "right"';
		$m.__track_lines__[21] = 'pyjamas.ui.py, line 21:\n    class HasVerticalAlignment:';
		$m.__track_lines__[22] = 'pyjamas.ui.py, line 22:\n    ALIGN_TOP = "top"';
		$m.__track_lines__[23] = 'pyjamas.ui.py, line 23:\n    ALIGN_MIDDLE = "middle"';
		$m.__track_lines__[24] = 'pyjamas.ui.py, line 24:\n    ALIGN_BOTTOM = "bottom"';
		$m.__track_lines__[26] = 'pyjamas.ui.py, line 26:\n    class HasAlignment:';
		$m.__track_lines__[27] = 'pyjamas.ui.py, line 27:\n    ALIGN_BOTTOM = "bottom"';
		$m.__track_lines__[28] = 'pyjamas.ui.py, line 28:\n    ALIGN_MIDDLE = "middle"';
		$m.__track_lines__[29] = 'pyjamas.ui.py, line 29:\n    ALIGN_TOP = "top"';
		$m.__track_lines__[30] = 'pyjamas.ui.py, line 30:\n    ALIGN_CENTER = "center"';
		$m.__track_lines__[31] = 'pyjamas.ui.py, line 31:\n    ALIGN_LEFT = "left"';
		$m.__track_lines__[32] = 'pyjamas.ui.py, line 32:\n    ALIGN_RIGHT = "right"';
		$m.__track_lines__[34] = 'pyjamas.ui.py, line 34:\n    PROP_NAME = 0';
		$m.__track_lines__[35] = 'pyjamas.ui.py, line 35:\n    PROP_DESC = 1';
		$m.__track_lines__[36] = 'pyjamas.ui.py, line 36:\n    PROP_FNAM = 2';
		$m.__track_lines__[37] = 'pyjamas.ui.py, line 37:\n    PROP_TYPE = 3';
		$m.__track_lines__[39] = 'pyjamas.ui.py, line 39:\n    ELPROP_NAME = 0';
		$m.__track_lines__[40] = 'pyjamas.ui.py, line 40:\n    ELPROP_DESC = 1';
		$m.__track_lines__[41] = 'pyjamas.ui.py, line 41:\n    ELPROP_FNAM = 2';
		$m.__track_lines__[42] = 'pyjamas.ui.py, line 42:\n    ELPROP_TYPE = 3';
		$m.__track_lines__[43] = 'pyjamas.ui.py, line 43:\n    ELPROP_DFLT = 4';
		$m.__track_lines__[45] = 'pyjamas.ui.py, line 45:\n    def get_list_columns(props, cols):';
		$m.__track_lines__[46] = 'pyjamas.ui.py, line 46:\n    res = []';
		$m.__track_lines__[47] = 'pyjamas.ui.py, line 47:\n    for p in props:';
		$m.__track_lines__[48] = 'pyjamas.ui.py, line 48:\n    r = ()';
		$m.__track_lines__[49] = 'pyjamas.ui.py, line 49:\n    for idx in cols:';
		$m.__track_lines__[50] = 'pyjamas.ui.py, line 50:\n    r.append(p[idx])';
		$m.__track_lines__[51] = 'pyjamas.ui.py, line 51:\n    res.append(r)';
		$m.__track_lines__[52] = 'pyjamas.ui.py, line 52:\n    return res';
		$m.__track_lines__[54] = 'pyjamas.ui.py, line 54:\n    def get_prop_widget_function_names(props):';
		$m.__track_lines__[55] = 'pyjamas.ui.py, line 55:\n    return get_list_columns(props, (PROP_FNAM,))';
		$m.__track_lines__[57] = 'pyjamas.ui.py, line 57:\n    class Applier(object):';
		$m.__track_lines__[59] = 'pyjamas.ui.py, line 59:\n    _props = []';
		$m.__track_lines__[60] = 'pyjamas.ui.py, line 60:\n    _elem_props = []';
		$m.__track_lines__[62] = 'pyjamas.ui.py, line 62:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[83] = 'pyjamas.ui.py, line 83:\n    self.applyValues(**kwargs)';
		$m.__track_lines__[85] = 'pyjamas.ui.py, line 85:\n    def applyValues(self, **kwargs):';
		$m.__track_lines__[87] = 'pyjamas.ui.py, line 87:\n    for (prop, args) in kwargs.items():';
		$m.__track_lines__[88] = 'pyjamas.ui.py, line 88:\n    fn = getattr(self, "set%s" % prop, None)';
		$m.__track_lines__[89] = 'pyjamas.ui.py, line 89:\n    if not fn:';
		$m.__track_lines__[90] = 'pyjamas.ui.py, line 90:\n    raise Exception("setter function for %s does not exist in %s" % (prop, self.__class__.__name__))';
		$m.__track_lines__[91] = 'pyjamas.ui.py, line 91:\n    args = kwargs[prop]';
		$m.__track_lines__[92] = 'pyjamas.ui.py, line 92:\n    if isinstance(args, tuple):';
		$m.__track_lines__[93] = 'pyjamas.ui.py, line 93:\n    fn(*args)';
		$m.__track_lines__[95] = 'pyjamas.ui.py, line 95:\n    fn(args)';
		$m.__track_lines__[97] = 'pyjamas.ui.py, line 97:\n    def retrieveValues(self, *args):';
		$m.__track_lines__[102] = 'pyjamas.ui.py, line 102:\n    res = {}';
		$m.__track_lines__[103] = 'pyjamas.ui.py, line 103:\n    for prop in args:';
		$m.__track_lines__[104] = 'pyjamas.ui.py, line 104:\n    fn = getattr(self, "get%s" % prop, None)';
		$m.__track_lines__[105] = 'pyjamas.ui.py, line 105:\n    if not fn:';
		$m.__track_lines__[106] = 'pyjamas.ui.py, line 106:\n    raise Exception("getter function for %s does not exist" % prop)';
		$m.__track_lines__[107] = 'pyjamas.ui.py, line 107:\n    res[prop] = fn()';
		$m.__track_lines__[109] = 'pyjamas.ui.py, line 109:\n    return res';
		$m.__track_lines__[112] = 'pyjamas.ui.py, line 111:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[113] = 'pyjamas.ui.py, line 113:\n    return self._props';
		$m.__track_lines__[116] = 'pyjamas.ui.py, line 115:\n    @classmethod ... def _getElementProps(self):';
		$m.__track_lines__[117] = 'pyjamas.ui.py, line 117:\n    return self._elem_props';
		$m.__track_lines__[119] = 'pyjamas.ui.py, line 119:\n    def setDefaults(self, defaults):';
		$m.__track_lines__[120] = 'pyjamas.ui.py, line 120:\n    divs = self.retrieveValues(wnames)';
		$m.__track_lines__[121] = 'pyjamas.ui.py, line 121:\n    for p in get_prop_widget_function_names(self._getProps()):';
		$m.__track_lines__[122] = 'pyjamas.ui.py, line 122:\n    defaults[p[PROP_NAME]] = divs[p[PROP_FNAM]]';
		$m.__track_lines__[124] = 'pyjamas.ui.py, line 124:\n    def updateInstance(self, app_context):';
		$m.__track_lines__[125] = 'pyjamas.ui.py, line 125:\n    args = {}';
		$m.__track_lines__[126] = 'pyjamas.ui.py, line 126:\n    for p in self._getProps():';
		$m.__track_lines__[127] = 'pyjamas.ui.py, line 127:\n    val = app_context.getAppProperty(p[0])';
		$m.__track_lines__[128] = 'pyjamas.ui.py, line 128:\n    convert_to_type = p[PROP_TYPE]';
		$m.__track_lines__[129] = 'pyjamas.ui.py, line 129:\n    if convert_to_type:';
		$m.__track_lines__[130] = 'pyjamas.ui.py, line 130:\n    val = convert_to_type(val) if val else None';
		$m.__track_lines__[131] = 'pyjamas.ui.py, line 131:\n    args[p[PROP_FNAM]] = val';
		$m.__track_lines__[133] = 'pyjamas.ui.py, line 133:\n    self.applyValues(**args)';
		$m.__track_lines__[135] = 'pyjamas.ui.py, line 135:\n    def setElementProperties(self, context, elemProps):';
		$m.__track_lines__[136] = 'pyjamas.ui.py, line 136:\n    args = {}';
		$m.__track_lines__[137] = 'pyjamas.ui.py, line 137:\n    for p in self._getElementProps():';
		$m.__track_lines__[138] = 'pyjamas.ui.py, line 138:\n    if elemProps.has_key(p):';
		$m.__track_lines__[139] = 'pyjamas.ui.py, line 139:\n    val = elemProps[p]';
		$m.__track_lines__[140] = 'pyjamas.ui.py, line 140:\n    convert_to_type = p[ELPROP_TYPE]';
		$m.__track_lines__[141] = 'pyjamas.ui.py, line 141:\n    if convert_to_type:';
		$m.__track_lines__[142] = 'pyjamas.ui.py, line 142:\n    val = convert_to_type(val) if val else None';
		$m.__track_lines__[144] = 'pyjamas.ui.py, line 144:\n    val = p[ELPROP_DFLT]';
		$m.__track_lines__[145] = 'pyjamas.ui.py, line 145:\n    if val is None:';
		$m.__track_lines__[146] = 'pyjamas.ui.py, line 146:\n    continue';
		$m.__track_lines__[147] = 'pyjamas.ui.py, line 147:\n    args[p[ELPROP_FNAM]] = (context, val,)';
		$m.__track_lines__[149] = 'pyjamas.ui.py, line 149:\n    self.applyValues(**args)';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		$pyjs['track']['module']='pyjamas.ui';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=16;
		$m['HasHorizontalAlignment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui';
			$cls_definition['__md5__'] = '14e69138ac76e029b4b92da08d4f01b0';
			$pyjs['track']['lineno']=17;
			$cls_definition['ALIGN_LEFT'] = 'left';
			$pyjs['track']['lineno']=18;
			$cls_definition['ALIGN_CENTER'] = 'center';
			$pyjs['track']['lineno']=19;
			$cls_definition['ALIGN_RIGHT'] = 'right';
			$pyjs['track']['lineno']=16;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HasHorizontalAlignment', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=21;
		$m['HasVerticalAlignment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui';
			$cls_definition['__md5__'] = '54d724413769681d085281c2ea24a91f';
			$pyjs['track']['lineno']=22;
			$cls_definition['ALIGN_TOP'] = 'top';
			$pyjs['track']['lineno']=23;
			$cls_definition['ALIGN_MIDDLE'] = 'middle';
			$pyjs['track']['lineno']=24;
			$cls_definition['ALIGN_BOTTOM'] = 'bottom';
			$pyjs['track']['lineno']=21;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HasVerticalAlignment', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=26;
		$m['HasAlignment'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui';
			$cls_definition['__md5__'] = 'b8484321fff8a8c6c84216125d152f6d';
			$pyjs['track']['lineno']=27;
			$cls_definition['ALIGN_BOTTOM'] = 'bottom';
			$pyjs['track']['lineno']=28;
			$cls_definition['ALIGN_MIDDLE'] = 'middle';
			$pyjs['track']['lineno']=29;
			$cls_definition['ALIGN_TOP'] = 'top';
			$pyjs['track']['lineno']=30;
			$cls_definition['ALIGN_CENTER'] = 'center';
			$pyjs['track']['lineno']=31;
			$cls_definition['ALIGN_LEFT'] = 'left';
			$pyjs['track']['lineno']=32;
			$cls_definition['ALIGN_RIGHT'] = 'right';
			$pyjs['track']['lineno']=26;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HasAlignment', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=34;
		$m['PROP_NAME'] = $constant_int_0;
		$pyjs['track']['lineno']=35;
		$m['PROP_DESC'] = $constant_int_1;
		$pyjs['track']['lineno']=36;
		$m['PROP_FNAM'] = $constant_int_2;
		$pyjs['track']['lineno']=37;
		$m['PROP_TYPE'] = $constant_int_3;
		$pyjs['track']['lineno']=39;
		$m['ELPROP_NAME'] = $constant_int_0;
		$pyjs['track']['lineno']=40;
		$m['ELPROP_DESC'] = $constant_int_1;
		$pyjs['track']['lineno']=41;
		$m['ELPROP_FNAM'] = $constant_int_2;
		$pyjs['track']['lineno']=42;
		$m['ELPROP_TYPE'] = $constant_int_3;
		$pyjs['track']['lineno']=43;
		$m['ELPROP_DFLT'] = $constant_int_4;
		$pyjs['track']['lineno']=45;
		$m['get_list_columns'] = function(props, cols) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,res,$pyjs__trackstack_size_1,idx,$iter1_iter,p,$iter2_idx,r,$pyjs__trackstack_size_2,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
			$pyjs['track']={'module':'pyjamas.ui','lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui';
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=46;
			res = $p['list']([]);
			$pyjs['track']['lineno']=47;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = props;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				p = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=48;
				r = $p['tuple']([]);
				$pyjs['track']['lineno']=49;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter2_iter = cols;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					idx = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=50;
					r['append'](p['__getitem__'](idx));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=51;
				res['append'](r);
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjamas.ui';
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=52;
			var $pyjs__ret = res;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_list_columns']['__name__'] = 'get_list_columns';

		$m['get_list_columns']['__bind_type__'] = 0;
		$m['get_list_columns']['__args__'] = [null,null,['props'],['cols']];
		$pyjs['track']['lineno']=54;
		$m['get_prop_widget_function_names'] = function(props) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjamas.ui','lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui';
			$pyjs['track']['lineno']=54;
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=55;
			var $pyjs__ret = $m['get_list_columns'](props, $p['tuple']([$m['PROP_FNAM']]));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_prop_widget_function_names']['__name__'] = 'get_prop_widget_function_names';

		$m['get_prop_widget_function_names']['__bind_type__'] = 0;
		$m['get_prop_widget_function_names']['__args__'] = [null,null,['props']];
		$pyjs['track']['lineno']=57;
		$m['Applier'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui';
			$cls_definition['__md5__'] = 'c57bc1eca16d83475d5550a6683561d2';
			$pyjs['track']['lineno']=59;
			$cls_definition['_props'] = $p['list']([]);
			$pyjs['track']['lineno']=60;
			$cls_definition['_elem_props'] = $p['list']([]);
			$pyjs['track']['lineno']=62;
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
					if (self.prototype['__md5__'] !== 'c57bc1eca16d83475d5550a6683561d2') {
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

				$pyjs['track']={'module':'pyjamas.ui', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=83;
				$pyjs_kwargs_call(self, 'applyValues', null, kwargs, [{}]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=85;
			$method = $pyjs__bind_method2('applyValues', function() {
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
					if (self.prototype['__md5__'] !== 'c57bc1eca16d83475d5550a6683561d2') {
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
				var $iter3_idx,args,$iter3_type,prop,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval,fn;
				$pyjs['track']={'module':'pyjamas.ui', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=87;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = kwargs['items']();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					prop = $tupleassign1[0];
					args = $tupleassign1[1];
					$pyjs['track']['lineno']=88;
					fn = $p['getattr'](self, $p['sprintf']('set%s', prop), null);
					$pyjs['track']['lineno']=89;
					if ($p['bool'](!$p['bool'](fn))) {
						$pyjs['track']['lineno']=90;
						$pyjs['__active_exception_stack__'] = null;
						throw ($p['Exception']($p['sprintf']('setter function for %s does not exist in %s', $p['tuple']([prop, $p['getattr']($p['getattr'](self, '__class__'), '__name__')]))));
					}
					$pyjs['track']['lineno']=91;
					args = kwargs['__getitem__'](prop);
					$pyjs['track']['lineno']=92;
					if ($p['bool']($p['isinstance'](args, $p['tuple']))) {
						$pyjs['track']['lineno']=93;
						$pyjs_kwargs_call(null, fn, args, null, [{}]);
					}
					else {
						$pyjs['track']['lineno']=95;
						fn(args);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['applyValues'] = $method;
			$pyjs['track']['lineno']=97;
			$method = $pyjs__bind_method2('retrieveValues', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c57bc1eca16d83475d5550a6683561d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var res,prop,$iter4_idx,$pyjs__trackstack_size_1,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter,fn;
				$pyjs['track']={'module':'pyjamas.ui', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=102;
				res = $p['dict']([]);
				$pyjs['track']['lineno']=103;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = args;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					prop = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=104;
					fn = $p['getattr'](self, $p['sprintf']('get%s', prop), null);
					$pyjs['track']['lineno']=105;
					if ($p['bool'](!$p['bool'](fn))) {
						$pyjs['track']['lineno']=106;
						$pyjs['__active_exception_stack__'] = null;
						throw ($p['Exception']($p['sprintf']('getter function for %s does not exist', prop)));
					}
					$pyjs['track']['lineno']=107;
					res['__setitem__'](prop, fn());
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=109;
				$pyjs['track']['lineno']=109;
				var $pyjs__ret = res;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['retrieveValues'] = $method;
			$pyjs['track']['lineno']=112;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];

				$pyjs['track']={'module':'pyjamas.ui', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=113;
				$pyjs['track']['lineno']=113;
				var $pyjs__ret = $p['getattr'](self, '_props');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs['track']['lineno']=116;
			$method = $pyjs__bind_method2('_getElementProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];

				$pyjs['track']={'module':'pyjamas.ui', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=117;
				$pyjs['track']['lineno']=117;
				var $pyjs__ret = $p['getattr'](self, '_elem_props');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getElementProps'] = $method;
			$pyjs['track']['lineno']=119;
			$method = $pyjs__bind_method2('setDefaults', function(defaults) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					defaults = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c57bc1eca16d83475d5550a6683561d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,$pyjs__trackstack_size_1,p,$iter5_iter,$iter5_idx,$iter5_type,divs;
				$pyjs['track']={'module':'pyjamas.ui', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=120;
				divs = self['retrieveValues']((typeof wnames == "undefined"?$m['wnames']:wnames));
				$pyjs['track']['lineno']=121;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $m['get_prop_widget_function_names'](self['_getProps']());
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					p = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=122;
					defaults['__setitem__'](p['__getitem__']($m['PROP_NAME']), divs['__getitem__'](p['__getitem__']($m['PROP_FNAM'])));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['defaults']]);
			$cls_definition['setDefaults'] = $method;
			$pyjs['track']['lineno']=124;
			$method = $pyjs__bind_method2('updateInstance', function(app_context) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					app_context = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c57bc1eca16d83475d5550a6683561d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var val,$iter6_idx,$iter6_type,convert_to_type,args,p,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjamas.ui', 'lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=124;
				$pyjs['track']['lineno']=125;
				args = $p['dict']([]);
				$pyjs['track']['lineno']=126;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = self['_getProps']();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					p = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=127;
					val = app_context['getAppProperty'](p['__getitem__']($constant_int_0));
					$pyjs['track']['lineno']=128;
					convert_to_type = p['__getitem__']($m['PROP_TYPE']);
					$pyjs['track']['lineno']=129;
					if ($p['bool'](convert_to_type)) {
						$pyjs['track']['lineno']=130;
						val = ($p['bool'](val)? (convert_to_type(val)) : (null));
					}
					$pyjs['track']['lineno']=131;
					args['__setitem__'](p['__getitem__']($m['PROP_FNAM']), val);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=133;
				$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['app_context']]);
			$cls_definition['updateInstance'] = $method;
			$pyjs['track']['lineno']=135;
			$method = $pyjs__bind_method2('setElementProperties', function(context, elemProps) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					context = arguments[1];
					elemProps = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c57bc1eca16d83475d5550a6683561d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter7_array,val,$iter7_nextval,convert_to_type,$iter7_iter,args,p,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjamas.ui', 'lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=135;
				$pyjs['track']['lineno']=136;
				args = $p['dict']([]);
				$pyjs['track']['lineno']=137;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = self['_getElementProps']();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					p = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=138;
					if ($p['bool'](elemProps['has_key'](p))) {
						$pyjs['track']['lineno']=139;
						val = elemProps['__getitem__'](p);
						$pyjs['track']['lineno']=140;
						convert_to_type = p['__getitem__']($m['ELPROP_TYPE']);
						$pyjs['track']['lineno']=141;
						if ($p['bool'](convert_to_type)) {
							$pyjs['track']['lineno']=142;
							val = ($p['bool'](val)? (convert_to_type(val)) : (null));
						}
					}
					else {
						$pyjs['track']['lineno']=144;
						val = p['__getitem__']($m['ELPROP_DFLT']);
						$pyjs['track']['lineno']=145;
						if ($p['bool']($p['op_is'](val, null))) {
							$pyjs['track']['lineno']=146;
							continue;
						}
					}
					$pyjs['track']['lineno']=147;
					args['__setitem__'](p['__getitem__']($m['ELPROP_FNAM']), $p['tuple']([context, val]));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui';
				$pyjs['track']['lineno']=149;
				$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['context'],['elemProps']]);
			$cls_definition['setElementProperties'] = $method;
			$pyjs['track']['lineno']=57;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Applier', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui */


/* end module: pyjamas.ui */


