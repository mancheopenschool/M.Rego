/* start module: pyjamas.Canvas.HTML5Canvas */
$pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.HTML5Canvas>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.HTML5Canvas';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['HTML5Canvas'] = $pyjs['loaded_modules']['pyjamas.Canvas.HTML5Canvas'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.HTML5Canvas.py, line 1:\n    # -*- coding: utf-8 -*-';
		$m.__track_lines__[130] = 'pyjamas.Canvas.HTML5Canvas.py, line 130:\n    self.impl.setShadowBlur(blur)';
		$m.__track_lines__[4] = 'pyjamas.Canvas.HTML5Canvas.py, line 4:\n    ';
		$m.__track_lines__[129] = 'pyjamas.Canvas.HTML5Canvas.py, line 129:\n    def setShadowBlur(self, blur):';
		$m.__track_lines__[8] = 'pyjamas.Canvas.HTML5Canvas.py, line 8:\n    from pyjamas.Canvas.GWTCanvas import GWTCanvas';
		$m.__track_lines__[9] = 'pyjamas.Canvas.HTML5Canvas.py, line 9:\n    from pyjamas.Canvas.HTML5CanvasImplDefault import HTML5CanvasImplDefault';
		$m.__track_lines__[10] = 'pyjamas.Canvas.HTML5Canvas.py, line 10:\n    from pyjamas.Canvas.HTML5CanvasImplIE6 import HTML5CanvasImplIE6';
		$m.__track_lines__[11] = 'pyjamas.Canvas.HTML5Canvas.py, line 11:\n    from pyjamas.Canvas.Color import Color';
		$m.__track_lines__[12] = 'pyjamas.Canvas.HTML5Canvas.py, line 12:\n    from pyjamas.Canvas.ImageData import ImageData';
		$m.__track_lines__[141] = 'pyjamas.Canvas.HTML5Canvas.py, line 141:\n    def setShadowOffset(self, x, y):';
		$m.__track_lines__[142] = 'pyjamas.Canvas.HTML5Canvas.py, line 142:\n    self.impl.setShadowOffset(x, y)';
		$m.__track_lines__[138] = 'pyjamas.Canvas.HTML5Canvas.py, line 138:\n    """';
		$m.__track_lines__[16] = 'pyjamas.Canvas.HTML5Canvas.py, line 16:\n    """';
		$m.__track_lines__[20] = 'pyjamas.Canvas.HTML5Canvas.py, line 4:\n     ... class HTML5Canvas(GWTCanvas):';
		$m.__track_lines__[149] = 'pyjamas.Canvas.HTML5Canvas.py, line 149:\n    self.impl.setTextAlign(loc)';
		$m.__track_lines__[23] = 'pyjamas.Canvas.HTML5Canvas.py, line 4:\n     ... def getCanvasImpl(self):';
		$m.__track_lines__[132] = 'pyjamas.Canvas.HTML5Canvas.py, line 132:\n    """';
		$m.__track_lines__[26] = 'pyjamas.Canvas.HTML5Canvas.py, line 26:\n    def clearRect(self, x, y, w, h):';
		$m.__track_lines__[27] = 'pyjamas.Canvas.HTML5Canvas.py, line 27:\n    self.impl.clearRect(x, y, w, h)';
		$m.__track_lines__[156] = 'pyjamas.Canvas.HTML5Canvas.py, line 156:\n    self.impl.setTextBaseline(loc)';
		$m.__track_lines__[29] = 'pyjamas.Canvas.HTML5Canvas.py, line 29:\n    """';
		$m.__track_lines__[32] = 'pyjamas.Canvas.HTML5Canvas.py, line 32:\n    def clip(self):';
		$m.__track_lines__[33] = 'pyjamas.Canvas.HTML5Canvas.py, line 33:\n    self.impl.clip()';
		$m.__track_lines__[35] = 'pyjamas.Canvas.HTML5Canvas.py, line 35:\n    """';
		$m.__track_lines__[40] = 'pyjamas.Canvas.HTML5Canvas.py, line 40:\n    def createImageData(self, sw, sh):';
		$m.__track_lines__[41] = 'pyjamas.Canvas.HTML5Canvas.py, line 41:\n    return ImageData(self.impl.createImageData(sw, sh))';
		$m.__track_lines__[43] = 'pyjamas.Canvas.HTML5Canvas.py, line 43:\n    """';
		$m.__track_lines__[47] = 'pyjamas.Canvas.HTML5Canvas.py, line 47:\n    def getImageData(self, sx, sy, sw, sh):';
		$m.__track_lines__[48] = 'pyjamas.Canvas.HTML5Canvas.py, line 48:\n    return ImageData(self.impl.getImageData(sx, sy, sw, sh))';
		$m.__track_lines__[136] = 'pyjamas.Canvas.HTML5Canvas.py, line 136:\n    self.impl.setShadowColor(str(color))';
		$m.__track_lines__[50] = 'pyjamas.Canvas.HTML5Canvas.py, line 50:\n    """';
		$m.__track_lines__[155] = 'pyjamas.Canvas.HTML5Canvas.py, line 155:\n    def setTextBaseline(self, loc):';
		$m.__track_lines__[54] = 'pyjamas.Canvas.HTML5Canvas.py, line 54:\n    def putImageData(self, imagedata, dx, dy, dirtyX=0, dirtyY=0, dirtyWidth=None, dirtyHeight=None):';
		$m.__track_lines__[55] = 'pyjamas.Canvas.HTML5Canvas.py, line 55:\n    if dirtyWidth == None:';
		$m.__track_lines__[56] = 'pyjamas.Canvas.HTML5Canvas.py, line 56:\n    dirtyWidth = self.coordWidth';
		$m.__track_lines__[57] = 'pyjamas.Canvas.HTML5Canvas.py, line 57:\n    if dirtyHeight == None:';
		$m.__track_lines__[58] = 'pyjamas.Canvas.HTML5Canvas.py, line 58:\n    dirtyHeight = self.coordHeight';
		$m.__track_lines__[59] = 'pyjamas.Canvas.HTML5Canvas.py, line 59:\n    self.impl.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)';
		$m.__track_lines__[151] = 'pyjamas.Canvas.HTML5Canvas.py, line 151:\n    """';
		$m.__track_lines__[61] = 'pyjamas.Canvas.HTML5Canvas.py, line 61:\n    """';
		$m.__track_lines__[65] = 'pyjamas.Canvas.HTML5Canvas.py, line 65:\n    def toDataURL(self, type="image/png"):';
		$m.__track_lines__[66] = 'pyjamas.Canvas.HTML5Canvas.py, line 66:\n    return self.impl.toDataURL(type)';
		$m.__track_lines__[68] = 'pyjamas.Canvas.HTML5Canvas.py, line 68:\n    """';
		$m.__track_lines__[72] = 'pyjamas.Canvas.HTML5Canvas.py, line 72:\n    def getFont(self):';
		$m.__track_lines__[73] = 'pyjamas.Canvas.HTML5Canvas.py, line 73:\n    return self.impl.getFont()';
		$m.__track_lines__[75] = 'pyjamas.Canvas.HTML5Canvas.py, line 75:\n    """';
		$m.__track_lines__[135] = 'pyjamas.Canvas.HTML5Canvas.py, line 135:\n    def setShadowColor(self, color):';
		$m.__track_lines__[79] = 'pyjamas.Canvas.HTML5Canvas.py, line 79:\n    def measureText(self, text):';
		$m.__track_lines__[80] = 'pyjamas.Canvas.HTML5Canvas.py, line 80:\n    return self.impl.measureText(text)';
		$m.__track_lines__[82] = 'pyjamas.Canvas.HTML5Canvas.py, line 82:\n    """';
		$m.__track_lines__[86] = 'pyjamas.Canvas.HTML5Canvas.py, line 86:\n    def setFont(self, value):';
		$m.__track_lines__[87] = 'pyjamas.Canvas.HTML5Canvas.py, line 87:\n    self.impl.setFont(value)';
		$m.__track_lines__[89] = 'pyjamas.Canvas.HTML5Canvas.py, line 89:\n    """';
		$m.__track_lines__[92] = 'pyjamas.Canvas.HTML5Canvas.py, line 92:\n    def getShadowBlur(self):';
		$m.__track_lines__[93] = 'pyjamas.Canvas.HTML5Canvas.py, line 93:\n    return self.impl.getShadowBlur()';
		$m.__track_lines__[95] = 'pyjamas.Canvas.HTML5Canvas.py, line 95:\n    """';
		$m.__track_lines__[144] = 'pyjamas.Canvas.HTML5Canvas.py, line 144:\n    """';
		$m.__track_lines__[98] = 'pyjamas.Canvas.HTML5Canvas.py, line 98:\n    def getShadowColor(self):';
		$m.__track_lines__[99] = 'pyjamas.Canvas.HTML5Canvas.py, line 99:\n    return Color(self.impl.getShadowColor())';
		$m.__track_lines__[101] = 'pyjamas.Canvas.HTML5Canvas.py, line 101:\n    """';
		$m.__track_lines__[104] = 'pyjamas.Canvas.HTML5Canvas.py, line 104:\n    def getShadowOffsetX(self):';
		$m.__track_lines__[105] = 'pyjamas.Canvas.HTML5Canvas.py, line 105:\n    self.impl.getShadowOffsetX()';
		$m.__track_lines__[107] = 'pyjamas.Canvas.HTML5Canvas.py, line 107:\n    """';
		$m.__track_lines__[110] = 'pyjamas.Canvas.HTML5Canvas.py, line 110:\n    def getTextAlign(self):';
		$m.__track_lines__[111] = 'pyjamas.Canvas.HTML5Canvas.py, line 111:\n    return self.impl.getTextAlign()';
		$m.__track_lines__[113] = 'pyjamas.Canvas.HTML5Canvas.py, line 113:\n    """';
		$m.__track_lines__[116] = 'pyjamas.Canvas.HTML5Canvas.py, line 116:\n    def getTextBaseline(self):';
		$m.__track_lines__[117] = 'pyjamas.Canvas.HTML5Canvas.py, line 117:\n    return self.impl.getTextBaseline()';
		$m.__track_lines__[119] = 'pyjamas.Canvas.HTML5Canvas.py, line 119:\n    """';
		$m.__track_lines__[148] = 'pyjamas.Canvas.HTML5Canvas.py, line 148:\n    def setTextAlign(self, loc):';
		$m.__track_lines__[122] = 'pyjamas.Canvas.HTML5Canvas.py, line 122:\n    def getShadowOffsetY(self):';
		$m.__track_lines__[123] = 'pyjamas.Canvas.HTML5Canvas.py, line 123:\n    self.impl.getShadowOffsetY()';
		$m.__track_lines__[125] = 'pyjamas.Canvas.HTML5Canvas.py, line 125:\n    """';

		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HTML5CanvasImplDefault'] = $p['___import___']('pyjamas.Canvas.HTML5CanvasImplDefault.HTML5CanvasImplDefault', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HTML5CanvasImplIE6'] = $p['___import___']('pyjamas.Canvas.HTML5CanvasImplIE6.HTML5CanvasImplIE6', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=11;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=12;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['ImageData'] = $p['___import___']('pyjamas.Canvas.ImageData.ImageData', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=20;
		$m['HTML5Canvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.HTML5Canvas';
			$cls_definition['__md5__'] = '2444b186ed4b4006c65bfc9fddf7b684';
			$pyjs['track']['lineno']=23;
			$method = $pyjs__bind_method2('getCanvasImpl', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=23;
				$pyjs['track']['lineno']=4;
				$pyjs['track']['lineno']=4;
				var $pyjs__ret = $m['HTML5CanvasImplIE6']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCanvasImpl'] = $method;
			$pyjs['track']['lineno']=26;
			$method = $pyjs__bind_method2('clearRect', function(x, y, w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					w = arguments[3];
					h = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=26;
				$pyjs['track']['lineno']=27;
				self['impl']['clearRect'](x, y, w, h);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
			$cls_definition['clearRect'] = $method;
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=32;
			$method = $pyjs__bind_method2('clip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=33;
				self['impl']['clip']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clip'] = $method;
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=40;
			$method = $pyjs__bind_method2('createImageData', function(sw, sh) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sw = arguments[1];
					sh = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				var $pyjs__ret = $m['ImageData'](self['impl']['createImageData'](sw, sh));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sw'],['sh']]);
			$cls_definition['createImageData'] = $method;
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=47;
			$method = $pyjs__bind_method2('getImageData', function(sx, sy, sw, sh) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					sx = arguments[1];
					sy = arguments[2];
					sw = arguments[3];
					sh = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				var $pyjs__ret = $m['ImageData'](self['impl']['getImageData'](sx, sy, sw, sh));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sx'],['sy'],['sw'],['sh']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=50;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('putImageData', function(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 8, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					dx = arguments[2];
					dy = arguments[3];
					dirtyX = arguments[4];
					dirtyY = arguments[5];
					dirtyWidth = arguments[6];
					dirtyHeight = arguments[7];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 8)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 8, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dirtyX == 'undefined') dirtyX=arguments['callee']['__args__'][6][1];
				if (typeof dirtyY == 'undefined') dirtyY=arguments['callee']['__args__'][7][1];
				if (typeof dirtyWidth == 'undefined') dirtyWidth=arguments['callee']['__args__'][8][1];
				if (typeof dirtyHeight == 'undefined') dirtyHeight=arguments['callee']['__args__'][9][1];

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=55;
				if ($p['bool']($p['op_eq'](dirtyWidth, null))) {
					$pyjs['track']['lineno']=56;
					dirtyWidth = $p['getattr'](self, 'coordWidth');
				}
				$pyjs['track']['lineno']=57;
				if ($p['bool']($p['op_eq'](dirtyHeight, null))) {
					$pyjs['track']['lineno']=58;
					dirtyHeight = $p['getattr'](self, 'coordHeight');
				}
				$pyjs['track']['lineno']=59;
				self['impl']['putImageData'](imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata'],['dx'],['dy'],['dirtyX', $constant_int_0],['dirtyY', $constant_int_0],['dirtyWidth', null],['dirtyHeight', null]]);
			$cls_definition['putImageData'] = $method;
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=65;
			$method = $pyjs__bind_method2('toDataURL', function(type) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					type = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof type == 'undefined') type=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = self['impl']['toDataURL'](type);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['type', 'image/png']]);
			$cls_definition['toDataURL'] = $method;
			$pyjs['track']['lineno']=68;
			$pyjs['track']['lineno']=72;
			$method = $pyjs__bind_method2('getFont', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=73;
				var $pyjs__ret = self['impl']['getFont']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getFont'] = $method;
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('measureText', function(text) {
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
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=80;
				$pyjs['track']['lineno']=80;
				var $pyjs__ret = self['impl']['measureText'](text);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['measureText'] = $method;
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=86;
			$method = $pyjs__bind_method2('setFont', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=86;
				$pyjs['track']['lineno']=87;
				self['impl']['setFont'](value);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['setFont'] = $method;
			$pyjs['track']['lineno']=89;
			$pyjs['track']['lineno']=92;
			$method = $pyjs__bind_method2('getShadowBlur', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=93;
				var $pyjs__ret = self['impl']['getShadowBlur']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowBlur'] = $method;
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('getShadowColor', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=99;
				$pyjs['track']['lineno']=99;
				var $pyjs__ret = $m['Color'](self['impl']['getShadowColor']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowColor'] = $method;
			$pyjs['track']['lineno']=101;
			$pyjs['track']['lineno']=104;
			$method = $pyjs__bind_method2('getShadowOffsetX', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':104};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=104;
				$pyjs['track']['lineno']=105;
				self['impl']['getShadowOffsetX']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowOffsetX'] = $method;
			$pyjs['track']['lineno']=107;
			$pyjs['track']['lineno']=110;
			$method = $pyjs__bind_method2('getTextAlign', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=110;
				$pyjs['track']['lineno']=111;
				$pyjs['track']['lineno']=111;
				var $pyjs__ret = self['impl']['getTextAlign']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTextAlign'] = $method;
			$pyjs['track']['lineno']=113;
			$pyjs['track']['lineno']=116;
			$method = $pyjs__bind_method2('getTextBaseline', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=117;
				$pyjs['track']['lineno']=117;
				var $pyjs__ret = self['impl']['getTextBaseline']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTextBaseline'] = $method;
			$pyjs['track']['lineno']=119;
			$pyjs['track']['lineno']=122;
			$method = $pyjs__bind_method2('getShadowOffsetY', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':122};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=122;
				$pyjs['track']['lineno']=123;
				self['impl']['getShadowOffsetY']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getShadowOffsetY'] = $method;
			$pyjs['track']['lineno']=125;
			$pyjs['track']['lineno']=129;
			$method = $pyjs__bind_method2('setShadowBlur', function(blur) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					blur = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=129;
				$pyjs['track']['lineno']=130;
				self['impl']['setShadowBlur'](blur);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['blur']]);
			$cls_definition['setShadowBlur'] = $method;
			$pyjs['track']['lineno']=132;
			$pyjs['track']['lineno']=135;
			$method = $pyjs__bind_method2('setShadowColor', function(color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=135;
				$pyjs['track']['lineno']=136;
				self['impl']['setShadowColor']($p['str'](color));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['color']]);
			$cls_definition['setShadowColor'] = $method;
			$pyjs['track']['lineno']=138;
			$pyjs['track']['lineno']=141;
			$method = $pyjs__bind_method2('setShadowOffset', function(x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':141};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=141;
				$pyjs['track']['lineno']=142;
				self['impl']['setShadowOffset'](x, y);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['setShadowOffset'] = $method;
			$pyjs['track']['lineno']=144;
			$pyjs['track']['lineno']=148;
			$method = $pyjs__bind_method2('setTextAlign', function(loc) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					loc = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=148;
				$pyjs['track']['lineno']=149;
				self['impl']['setTextAlign'](loc);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loc']]);
			$cls_definition['setTextAlign'] = $method;
			$pyjs['track']['lineno']=151;
			$pyjs['track']['lineno']=155;
			$method = $pyjs__bind_method2('setTextBaseline', function(loc) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					loc = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2444b186ed4b4006c65bfc9fddf7b684') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.HTML5Canvas', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.HTML5Canvas';
				$pyjs['track']['lineno']=155;
				$pyjs['track']['lineno']=156;
				self['impl']['setTextBaseline'](loc);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loc']]);
			$cls_definition['setTextBaseline'] = $method;
			$pyjs['track']['lineno']=20;
			var $bases = new Array($m['GWTCanvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('HTML5Canvas', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.HTML5Canvas */


/* end module: pyjamas.Canvas.HTML5Canvas */


/*
PYJS_DEPS: ['pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas', 'pyjamas.Canvas.HTML5CanvasImplDefault.HTML5CanvasImplDefault', 'pyjamas.Canvas.HTML5CanvasImplDefault', 'pyjamas.Canvas.HTML5CanvasImplIE6.HTML5CanvasImplIE6', 'pyjamas.Canvas.HTML5CanvasImplIE6', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.ImageData.ImageData', 'pyjamas.Canvas.ImageData']
*/
