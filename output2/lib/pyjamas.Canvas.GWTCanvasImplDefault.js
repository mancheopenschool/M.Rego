/* start module: pyjamas.Canvas.GWTCanvasImplDefault */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvasImplDefault>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvasImplDefault';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvasImplDefault'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplDefault'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 1:\n    """';
		$m.__track_lines__[17] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 17:\n    from pyjamas import DOM';
		$m.__track_lines__[18] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 18:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[19] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 19:\n    from pyjamas.Canvas.Color import Color';
		$m.__track_lines__[21] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 21:\n    def cvt(s):';
		$m.__track_lines__[22] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 22:\n    return s';
		$m.__track_lines__[24] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 24:\n    """*';
		$m.__track_lines__[27] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 27:\n    class GWTCanvasImplDefault:';
		$m.__track_lines__[29] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 29:\n    def __init__(self):';
		$m.__track_lines__[30] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 30:\n    self.canvasContext = None';
		$m.__track_lines__[32] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 32:\n    def arc(self, x, y, radius, startAngle, endAngle, antiClockwise):';
		$m.__track_lines__[33] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 33:\n    self.canvasContext.arc(x,y,radius,startAngle,endAngle,antiClockwise)';
		$m.__track_lines__[36] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 36:\n    def beginPath(self):';
		$m.__track_lines__[37] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 37:\n    self.canvasContext.beginPath()';
		$m.__track_lines__[40] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 40:\n    def clear(self, width, height):';
		$m.__track_lines__[41] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 41:\n    self.clearRect(0,0,width,height)';
		$m.__track_lines__[44] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 44:\n    def closePath(self):';
		$m.__track_lines__[45] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 45:\n    self.canvasContext.closePath()';
		$m.__track_lines__[48] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 48:\n    def createElement(self):';
		$m.__track_lines__[49] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 49:\n    e = DOM.createElement("CANVAS")';
		$m.__track_lines__[50] = "pyjamas.Canvas.GWTCanvasImplDefault.py, line 50:\n    self.setCanvasContext(e.getContext('2d'))";
		$m.__track_lines__[51] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 51:\n    return e';
		$m.__track_lines__[54] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 54:\n    def cubicCurveTo(self, cp1x, cp1y, cp2x, cp2y, x, y):';
		$m.__track_lines__[55] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 55:\n    self.canvasContext.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)';
		$m.__track_lines__[57] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 57:\n    def setFont(self, font):';
		$m.__track_lines__[58] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 58:\n    self.canvasContext.font = font';
		$m.__track_lines__[60] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 60:\n    def fillText(self, text, sourceX, sourceY, maxWidth=None):';
		$m.__track_lines__[64] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 64:\n    try:';
		$m.__track_lines__[65] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 65:\n    if maxWidth is None:';
		$m.__track_lines__[66] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 66:\n    self.canvasContext.fillText(text, sourceX, sourceY)';
		$m.__track_lines__[68] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 68:\n    self.canvasContext.fillText(text, sourceX, sourceY, maxWidth)';
		$m.__track_lines__[70] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 70:\n    self.saveContext()';
		$m.__track_lines__[71] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 71:\n    self.translate(sourceX, sourceY)';
		$m.__track_lines__[72] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 72:\n    try:';
		$m.__track_lines__[73] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 73:\n    text = unicode(text) # for pyjd / xulrunner';
		$m.__track_lines__[74] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 74:\n    self.canvasContext.mozDrawText(text) # old xulrunner';
		$m.__track_lines__[76] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 76:\n    self.canvasContext.drawText(text)';
		$m.__track_lines__[77] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 77:\n    self.restoreContext()';
		$m.__track_lines__[79] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 79:\n    def drawImage(self, img, sourceX, sourceY, sourceWidth=None, sourceHeight=None, destX=None, destY=None, destWidth=None, destHeight=None):';
		$m.__track_lines__[81] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 81:\n    if isinstance(img, Widget):';
		$m.__track_lines__[82] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 82:\n    img = img.getElement()';
		$m.__track_lines__[83] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 83:\n    if sourceWidth is None:';
		$m.__track_lines__[84] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 84:\n    self.canvasContext.drawImage(img,sourceX,sourceY)';
		$m.__track_lines__[86] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 86:\n    self.canvasContext.drawImage(img,sourceX,sourceY,sourceWidth,sourceHeight,destX,destY,destWidth,destHeight)';
		$m.__track_lines__[90] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 90:\n    def fill(self):';
		$m.__track_lines__[91] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 91:\n    self.canvasContext.fill()';
		$m.__track_lines__[94] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 94:\n    def fillRect(self, startX, startY, width, height):';
		$m.__track_lines__[95] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 95:\n    self.canvasContext.fillRect(startX,startY,width,height)';
		$m.__track_lines__[98] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 98:\n    def getGlobalAlpha(self):';
		$m.__track_lines__[99] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 99:\n    return self.canvasContext.globalAlpha';
		$m.__track_lines__[102] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 102:\n    def getGlobalCompositeOperation(self):';
		$m.__track_lines__[103] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 103:\n    return self.canvasContext.globalCompositeOperation';
		$m.__track_lines__[106] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 106:\n    def getHeight(self, elem):';
		$m.__track_lines__[107] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 107:\n    return DOM.getElementPropertyInt(elem, "height")';
		$m.__track_lines__[110] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 110:\n    def getLineCap(self):';
		$m.__track_lines__[111] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 111:\n    return self.canvasContext.lineCap';
		$m.__track_lines__[114] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 114:\n    def getLineJoin(self):';
		$m.__track_lines__[115] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 115:\n    return self.canvasContext.lineJoin';
		$m.__track_lines__[118] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 118:\n    def getLineWidth(self):';
		$m.__track_lines__[119] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 119:\n    return self.canvasContext.lineWidth';
		$m.__track_lines__[122] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 122:\n    def getMiterLimit(self):';
		$m.__track_lines__[123] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 123:\n    return self.canvasContext.miterLimit';
		$m.__track_lines__[126] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 126:\n    def getWidth(self, elem):';
		$m.__track_lines__[127] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 127:\n    return DOM.getElementPropertyInt(elem, "width")';
		$m.__track_lines__[130] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 130:\n    def lineTo(self, x, y):';
		$m.__track_lines__[131] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 131:\n    self.canvasContext.lineTo(x,y)';
		$m.__track_lines__[134] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 134:\n    def moveTo(self, x, y):';
		$m.__track_lines__[135] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 135:\n    self.canvasContext.moveTo(x,y)';
		$m.__track_lines__[138] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 138:\n    def quadraticCurveTo(self, cpx, cpy, x, y):';
		$m.__track_lines__[139] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 139:\n    self.canvasContext.quadraticCurveTo(cpx,cpy,x,y)';
		$m.__track_lines__[142] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 142:\n    def rect(self, x, y, width, height):';
		$m.__track_lines__[143] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 143:\n    self.canvasContext.rect(x,y,width,height)';
		$m.__track_lines__[146] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 146:\n    def restoreContext(self):';
		$m.__track_lines__[147] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 147:\n    self.canvasContext.restore()';
		$m.__track_lines__[150] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 150:\n    def rotate(self, angle):';
		$m.__track_lines__[151] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 151:\n    self.canvasContext.rotate(angle)';
		$m.__track_lines__[154] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 154:\n    def saveContext(self):';
		$m.__track_lines__[155] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 155:\n    self.canvasContext.save()';
		$m.__track_lines__[158] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 158:\n    def scale(self, x, y):';
		$m.__track_lines__[159] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 159:\n    self.canvasContext.scale(x,y)';
		$m.__track_lines__[162] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 162:\n    def setBackgroundColor(self, element, color):';
		$m.__track_lines__[163] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 163:\n    DOM.setStyleAttribute(element, "backgroundColor", color)';
		$m.__track_lines__[166] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 166:\n    def setCoordHeight(self, elem, height):';
		$m.__track_lines__[167] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 167:\n    DOM.setElemAttribute(elem, "height", str(height))';
		$m.__track_lines__[170] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 170:\n    def setCoordWidth(self, elem, width):';
		$m.__track_lines__[171] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 171:\n    DOM.setElemAttribute(elem,"width", str(width))';
		$m.__track_lines__[174] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 174:\n    def setStrokeStyle(self, gradient):';
		$m.__track_lines__[175] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 175:\n    if isinstance(gradient, Color): # is it a colorString?';
		$m.__track_lines__[176] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 176:\n    gradient = str(gradient)';
		$m.__track_lines__[178] = "pyjamas.Canvas.GWTCanvasImplDefault.py, line 178:\n    gradient = gradient.getObject() # it's a gradient object";
		$m.__track_lines__[179] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 179:\n    self.canvasContext.strokeStyle = cvt(gradient)';
		$m.__track_lines__[182] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 182:\n    def setFillStyle(self, gradient):';
		$m.__track_lines__[183] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 183:\n    if isinstance(gradient, Color): # is it a colorString?';
		$m.__track_lines__[184] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 184:\n    gradient = str(gradient)';
		$m.__track_lines__[186] = "pyjamas.Canvas.GWTCanvasImplDefault.py, line 186:\n    gradient = gradient.getObject() # it's a gradient object";
		$m.__track_lines__[187] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 187:\n    self.canvasContext.fillStyle = cvt(gradient)';
		$m.__track_lines__[189] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 189:\n    def setGlobalAlpha(self, alpha):';
		$m.__track_lines__[190] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 190:\n    self.canvasContext.globalAlpha = alpha';
		$m.__track_lines__[193] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 193:\n    def setGlobalCompositeOperation(self, globalCompositeOperation):';
		$m.__track_lines__[194] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 194:\n    self.canvasContext.globalCompositeOperation = cvt(globalCompositeOperation)';
		$m.__track_lines__[197] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 197:\n    def setLineCap(self, lineCap):';
		$m.__track_lines__[198] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 198:\n    self.canvasContext.lineCap = cvt(lineCap)';
		$m.__track_lines__[201] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 201:\n    def setLineJoin(self, lineJoin):';
		$m.__track_lines__[202] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 202:\n    self.canvasContext.lineJoin = cvt(lineJoin)';
		$m.__track_lines__[205] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 205:\n    def setLineWidth(self, width):';
		$m.__track_lines__[206] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 206:\n    self.canvasContext.lineWidth = width';
		$m.__track_lines__[209] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 209:\n    def setMiterLimit(self, miterLimit):';
		$m.__track_lines__[210] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 210:\n    self.canvasContext.miterLimit = miterLimit';
		$m.__track_lines__[213] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 213:\n    def setPixelHeight(self, elem, height):';
		$m.__track_lines__[214] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 214:\n    DOM.setStyleAttribute(elem, "height", "%dpx" % height)';
		$m.__track_lines__[217] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 217:\n    def setPixelWidth(self, elem, width):';
		$m.__track_lines__[218] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 218:\n    DOM.setStyleAttribute(elem, "width", "%dpx" % width)';
		$m.__track_lines__[221] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 221:\n    def stroke(self):';
		$m.__track_lines__[222] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 222:\n    self.canvasContext.stroke()';
		$m.__track_lines__[225] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 225:\n    def strokeRect(self, startX, startY, width, height):';
		$m.__track_lines__[226] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 226:\n    self.canvasContext.strokeRect(startX,startY,width,height)';
		$m.__track_lines__[228] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 228:\n    def transform(self, m11, m12, m21, m22, dx, dy):';
		$m.__track_lines__[229] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 229:\n    self.canvasContext.transform(m11,m12,m21,m22,dx,dy)';
		$m.__track_lines__[232] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 232:\n    def translate(self, x, y):';
		$m.__track_lines__[233] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 233:\n    self.canvasContext.translate(x,y)';
		$m.__track_lines__[236] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 236:\n    def clearRect(self, startX, startY, width, height):';
		$m.__track_lines__[237] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 237:\n    self.canvasContext.clearRect(startX,startY,width,height)';
		$m.__track_lines__[240] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 240:\n    def setCanvasContext(self, ctx):';
		$m.__track_lines__[241] = 'pyjamas.Canvas.GWTCanvasImplDefault.py, line 241:\n    self.canvasContext = ctx';

		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$m['cvt'] = function(s) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault','lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=22;
			var $pyjs__ret = s;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['cvt']['__name__'] = 'cvt';

		$m['cvt']['__bind_type__'] = 0;
		$m['cvt']['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=24;
		$pyjs['track']['lineno']=27;
		$m['GWTCanvasImplDefault'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvasImplDefault';
			$cls_definition['__md5__'] = 'ee92d40953533cce56b4d801b78e1445';
			$pyjs['track']['lineno']=29;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=29;
				$pyjs['track']['lineno']=30;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvasContext', null) : $p['setattr'](self, 'canvasContext', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=32;
			$method = $pyjs__bind_method2('arc', function(x, y, radius, startAngle, endAngle, antiClockwise) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					radius = arguments[3];
					startAngle = arguments[4];
					endAngle = arguments[5];
					antiClockwise = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=33;
				self['canvasContext']['arc'](x, y, radius, startAngle, endAngle, antiClockwise);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['radius'],['startAngle'],['endAngle'],['antiClockwise']]);
			$cls_definition['arc'] = $method;
			$pyjs['track']['lineno']=36;
			$method = $pyjs__bind_method2('beginPath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=36;
				$pyjs['track']['lineno']=37;
				self['canvasContext']['beginPath']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['beginPath'] = $method;
			$pyjs['track']['lineno']=40;
			$method = $pyjs__bind_method2('clear', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=41;
				self['clearRect']($constant_int_0, $constant_int_0, width, height);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=44;
			$method = $pyjs__bind_method2('closePath', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=45;
				self['canvasContext']['closePath']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['closePath'] = $method;
			$pyjs['track']['lineno']=48;
			$method = $pyjs__bind_method2('createElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var e;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=49;
				e = $m['DOM']['createElement']('CANVAS');
				$pyjs['track']['lineno']=50;
				self['setCanvasContext'](e['getContext']('2d'));
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=51;
				var $pyjs__ret = e;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['createElement'] = $method;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('cubicCurveTo', function(cp1x, cp1y, cp2x, cp2y, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					cp1x = arguments[1];
					cp1y = arguments[2];
					cp2x = arguments[3];
					cp2y = arguments[4];
					x = arguments[5];
					y = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=55;
				self['canvasContext']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
			$cls_definition['cubicCurveTo'] = $method;
			$pyjs['track']['lineno']=57;
			$method = $pyjs__bind_method2('setFont', function(font) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					font = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=58;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('font', font) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'font', font); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['font']]);
			$cls_definition['setFont'] = $method;
			$pyjs['track']['lineno']=60;
			$method = $pyjs__bind_method2('fillText', function(text, sourceX, sourceY, maxWidth) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					sourceX = arguments[2];
					sourceY = arguments[3];
					maxWidth = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=64;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=65;
					if ($p['bool']($p['op_is'](maxWidth, null))) {
						$pyjs['track']['lineno']=66;
						self['canvasContext']['fillText'](text, sourceX, sourceY);
					}
					else {
						$pyjs['track']['lineno']=68;
						self['canvasContext']['fillText'](text, sourceX, sourceY, maxWidth);
					}
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
					$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
					if (true) {
						$pyjs['track']['lineno']=70;
						self['saveContext']();
						$pyjs['track']['lineno']=71;
						self['translate'](sourceX, sourceY);
						$pyjs['track']['lineno']=72;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							$pyjs['track']['lineno']=73;
							text = (typeof unicode == "undefined"?$m['unicode']:unicode)(text);
							$pyjs['track']['lineno']=74;
							self['canvasContext']['mozDrawText'](text);
						} catch($pyjs_try_err) {
							$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_2 - 1);
							$pyjs['__active_exception_stack__'] = null;
							$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
							if (true) {
								$pyjs['track']['lineno']=76;
								self['canvasContext']['drawText'](text);
							}
						}
						$pyjs['track']['lineno']=77;
						self['restoreContext']();
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['text'],['sourceX'],['sourceY'],['maxWidth', null]]);
			$cls_definition['fillText'] = $method;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('drawImage', function(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 9)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 10, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					sourceX = arguments[2];
					sourceY = arguments[3];
					sourceWidth = arguments[4];
					sourceHeight = arguments[5];
					destX = arguments[6];
					destY = arguments[7];
					destWidth = arguments[8];
					destHeight = arguments[9];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 10)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 10, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sourceWidth == 'undefined') sourceWidth=arguments['callee']['__args__'][6][1];
				if (typeof sourceHeight == 'undefined') sourceHeight=arguments['callee']['__args__'][7][1];
				if (typeof destX == 'undefined') destX=arguments['callee']['__args__'][8][1];
				if (typeof destY == 'undefined') destY=arguments['callee']['__args__'][9][1];
				if (typeof destWidth == 'undefined') destWidth=arguments['callee']['__args__'][10][1];
				if (typeof destHeight == 'undefined') destHeight=arguments['callee']['__args__'][11][1];

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=81;
				if ($p['bool']($p['isinstance'](img, $m['Widget']))) {
					$pyjs['track']['lineno']=82;
					img = img['getElement']();
				}
				$pyjs['track']['lineno']=83;
				if ($p['bool']($p['op_is'](sourceWidth, null))) {
					$pyjs['track']['lineno']=84;
					self['canvasContext']['drawImage'](img, sourceX, sourceY);
				}
				else {
					$pyjs['track']['lineno']=86;
					self['canvasContext']['drawImage'](img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['img'],['sourceX'],['sourceY'],['sourceWidth', null],['sourceHeight', null],['destX', null],['destY', null],['destWidth', null],['destHeight', null]]);
			$cls_definition['drawImage'] = $method;
			$pyjs['track']['lineno']=90;
			$method = $pyjs__bind_method2('fill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=91;
				self['canvasContext']['fill']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=94;
			$method = $pyjs__bind_method2('fillRect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=95;
				self['canvasContext']['fillRect'](startX, startY, width, height);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['fillRect'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('getGlobalAlpha', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=99;
				$pyjs['track']['lineno']=99;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'globalAlpha');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalAlpha'] = $method;
			$pyjs['track']['lineno']=102;
			$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=103;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'globalCompositeOperation');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getGlobalCompositeOperation'] = $method;
			$pyjs['track']['lineno']=106;
			$method = $pyjs__bind_method2('getHeight', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=106;
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=107;
				var $pyjs__ret = $m['DOM']['getElementPropertyInt'](elem, 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['getHeight'] = $method;
			$pyjs['track']['lineno']=110;
			$method = $pyjs__bind_method2('getLineCap', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=110;
				$pyjs['track']['lineno']=111;
				$pyjs['track']['lineno']=111;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'lineCap');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineCap'] = $method;
			$pyjs['track']['lineno']=114;
			$method = $pyjs__bind_method2('getLineJoin', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=114;
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=115;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'lineJoin');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineJoin'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('getLineWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=119;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'lineWidth');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLineWidth'] = $method;
			$pyjs['track']['lineno']=122;
			$method = $pyjs__bind_method2('getMiterLimit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':122};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=122;
				$pyjs['track']['lineno']=123;
				$pyjs['track']['lineno']=123;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvasContext'), 'miterLimit');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getMiterLimit'] = $method;
			$pyjs['track']['lineno']=126;
			$method = $pyjs__bind_method2('getWidth', function(elem) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':126};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=126;
				$pyjs['track']['lineno']=127;
				$pyjs['track']['lineno']=127;
				var $pyjs__ret = $m['DOM']['getElementPropertyInt'](elem, 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['elem']]);
			$cls_definition['getWidth'] = $method;
			$pyjs['track']['lineno']=130;
			$method = $pyjs__bind_method2('lineTo', function(x, y) {
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
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=131;
				self['canvasContext']['lineTo'](x, y);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['lineTo'] = $method;
			$pyjs['track']['lineno']=134;
			$method = $pyjs__bind_method2('moveTo', function(x, y) {
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
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=134;
				$pyjs['track']['lineno']=135;
				self['canvasContext']['moveTo'](x, y);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['moveTo'] = $method;
			$pyjs['track']['lineno']=138;
			$method = $pyjs__bind_method2('quadraticCurveTo', function(cpx, cpy, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					cpx = arguments[1];
					cpy = arguments[2];
					x = arguments[3];
					y = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':138};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=138;
				$pyjs['track']['lineno']=139;
				self['canvasContext']['quadraticCurveTo'](cpx, cpy, x, y);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
			$cls_definition['quadraticCurveTo'] = $method;
			$pyjs['track']['lineno']=142;
			$method = $pyjs__bind_method2('rect', function(x, y, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					x = arguments[1];
					y = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':142};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=142;
				$pyjs['track']['lineno']=143;
				self['canvasContext']['rect'](x, y, width, height);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
			$cls_definition['rect'] = $method;
			$pyjs['track']['lineno']=146;
			$method = $pyjs__bind_method2('restoreContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=147;
				self['canvasContext']['restore']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['restoreContext'] = $method;
			$pyjs['track']['lineno']=150;
			$method = $pyjs__bind_method2('rotate', function(angle) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					angle = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':150};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=150;
				$pyjs['track']['lineno']=151;
				self['canvasContext']['rotate'](angle);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['angle']]);
			$cls_definition['rotate'] = $method;
			$pyjs['track']['lineno']=154;
			$method = $pyjs__bind_method2('saveContext', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':154};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=154;
				$pyjs['track']['lineno']=155;
				self['canvasContext']['save']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['saveContext'] = $method;
			$pyjs['track']['lineno']=158;
			$method = $pyjs__bind_method2('scale', function(x, y) {
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
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':158};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=158;
				$pyjs['track']['lineno']=159;
				self['canvasContext']['scale'](x, y);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['scale'] = $method;
			$pyjs['track']['lineno']=162;
			$method = $pyjs__bind_method2('setBackgroundColor', function(element, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=162;
				$pyjs['track']['lineno']=163;
				$m['DOM']['setStyleAttribute'](element, 'backgroundColor', color);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['element'],['color']]);
			$cls_definition['setBackgroundColor'] = $method;
			$pyjs['track']['lineno']=166;
			$method = $pyjs__bind_method2('setCoordHeight', function(elem, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=166;
				$pyjs['track']['lineno']=167;
				$m['DOM']['setElemAttribute'](elem, 'height', $p['str'](height));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['height']]);
			$cls_definition['setCoordHeight'] = $method;
			$pyjs['track']['lineno']=170;
			$method = $pyjs__bind_method2('setCoordWidth', function(elem, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=170;
				$pyjs['track']['lineno']=171;
				$m['DOM']['setElemAttribute'](elem, 'width', $p['str'](width));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['width']]);
			$cls_definition['setCoordWidth'] = $method;
			$pyjs['track']['lineno']=174;
			$method = $pyjs__bind_method2('setStrokeStyle', function(gradient) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					gradient = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':174};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=174;
				$pyjs['track']['lineno']=175;
				if ($p['bool']($p['isinstance'](gradient, $m['Color']))) {
					$pyjs['track']['lineno']=176;
					gradient = $p['str'](gradient);
				}
				else if ($p['bool'](!$p['bool']($p['isinstance'](gradient, $p['basestring'])))) {
					$pyjs['track']['lineno']=178;
					gradient = gradient['getObject']();
				}
				$pyjs['track']['lineno']=179;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('strokeStyle', $m['cvt'](gradient)) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'strokeStyle', $m['cvt'](gradient)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['gradient']]);
			$cls_definition['setStrokeStyle'] = $method;
			$pyjs['track']['lineno']=182;
			$method = $pyjs__bind_method2('setFillStyle', function(gradient) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					gradient = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':182};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=182;
				$pyjs['track']['lineno']=183;
				if ($p['bool']($p['isinstance'](gradient, $m['Color']))) {
					$pyjs['track']['lineno']=184;
					gradient = $p['str'](gradient);
				}
				else if ($p['bool'](!$p['bool']($p['isinstance'](gradient, $p['basestring'])))) {
					$pyjs['track']['lineno']=186;
					gradient = gradient['getObject']();
				}
				$pyjs['track']['lineno']=187;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('fillStyle', $m['cvt'](gradient)) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'fillStyle', $m['cvt'](gradient)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['gradient']]);
			$cls_definition['setFillStyle'] = $method;
			$pyjs['track']['lineno']=189;
			$method = $pyjs__bind_method2('setGlobalAlpha', function(alpha) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					alpha = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':189};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=189;
				$pyjs['track']['lineno']=190;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('globalAlpha', alpha) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'globalAlpha', alpha); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['alpha']]);
			$cls_definition['setGlobalAlpha'] = $method;
			$pyjs['track']['lineno']=193;
			$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(globalCompositeOperation) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					globalCompositeOperation = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':193};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=193;
				$pyjs['track']['lineno']=194;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('globalCompositeOperation', $m['cvt'](globalCompositeOperation)) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'globalCompositeOperation', $m['cvt'](globalCompositeOperation)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['globalCompositeOperation']]);
			$cls_definition['setGlobalCompositeOperation'] = $method;
			$pyjs['track']['lineno']=197;
			$method = $pyjs__bind_method2('setLineCap', function(lineCap) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineCap = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':197};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=197;
				$pyjs['track']['lineno']=198;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('lineCap', $m['cvt'](lineCap)) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'lineCap', $m['cvt'](lineCap)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lineCap']]);
			$cls_definition['setLineCap'] = $method;
			$pyjs['track']['lineno']=201;
			$method = $pyjs__bind_method2('setLineJoin', function(lineJoin) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					lineJoin = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':201};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=201;
				$pyjs['track']['lineno']=202;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('lineJoin', $m['cvt'](lineJoin)) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'lineJoin', $m['cvt'](lineJoin)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['lineJoin']]);
			$cls_definition['setLineJoin'] = $method;
			$pyjs['track']['lineno']=205;
			$method = $pyjs__bind_method2('setLineWidth', function(width) {
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
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=205;
				$pyjs['track']['lineno']=206;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('lineWidth', width) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'lineWidth', width); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setLineWidth'] = $method;
			$pyjs['track']['lineno']=209;
			$method = $pyjs__bind_method2('setMiterLimit', function(miterLimit) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					miterLimit = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':209};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=209;
				$pyjs['track']['lineno']=210;
				$p['getattr'](self, 'canvasContext')['__is_instance__'] && typeof $p['getattr'](self, 'canvasContext')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvasContext')['__setattr__']('miterLimit', miterLimit) : $p['setattr']($p['getattr'](self, 'canvasContext'), 'miterLimit', miterLimit); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['miterLimit']]);
			$cls_definition['setMiterLimit'] = $method;
			$pyjs['track']['lineno']=213;
			$method = $pyjs__bind_method2('setPixelHeight', function(elem, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':213};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=213;
				$pyjs['track']['lineno']=214;
				$m['DOM']['setStyleAttribute'](elem, 'height', $p['sprintf']('%dpx', height));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['height']]);
			$cls_definition['setPixelHeight'] = $method;
			$pyjs['track']['lineno']=217;
			$method = $pyjs__bind_method2('setPixelWidth', function(elem, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					width = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':217};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=217;
				$pyjs['track']['lineno']=218;
				$m['DOM']['setStyleAttribute'](elem, 'width', $p['sprintf']('%dpx', width));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['elem'],['width']]);
			$cls_definition['setPixelWidth'] = $method;
			$pyjs['track']['lineno']=221;
			$method = $pyjs__bind_method2('stroke', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':221};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=221;
				$pyjs['track']['lineno']=222;
				self['canvasContext']['stroke']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stroke'] = $method;
			$pyjs['track']['lineno']=225;
			$method = $pyjs__bind_method2('strokeRect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':225};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=225;
				$pyjs['track']['lineno']=226;
				self['canvasContext']['strokeRect'](startX, startY, width, height);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['strokeRect'] = $method;
			$pyjs['track']['lineno']=228;
			$method = $pyjs__bind_method2('transform', function(m11, m12, m21, m22, dx, dy) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 6) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					m11 = arguments[1];
					m12 = arguments[2];
					m21 = arguments[3];
					m22 = arguments[4];
					dx = arguments[5];
					dy = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 7) $pyjs__exception_func_param(arguments['callee']['__name__'], 7, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':228};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=228;
				$pyjs['track']['lineno']=229;
				self['canvasContext']['transform'](m11, m12, m21, m22, dx, dy);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
			$cls_definition['transform'] = $method;
			$pyjs['track']['lineno']=232;
			$method = $pyjs__bind_method2('translate', function(x, y) {
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
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':232};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=232;
				$pyjs['track']['lineno']=233;
				self['canvasContext']['translate'](x, y);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['translate'] = $method;
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('clearRect', function(startX, startY, width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					startX = arguments[1];
					startY = arguments[2];
					width = arguments[3];
					height = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 5) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=237;
				self['canvasContext']['clearRect'](startX, startY, width, height);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['startX'],['startY'],['width'],['height']]);
			$cls_definition['clearRect'] = $method;
			$pyjs['track']['lineno']=240;
			$method = $pyjs__bind_method2('setCanvasContext', function(ctx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ctx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ee92d40953533cce56b4d801b78e1445') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.GWTCanvasImplDefault', 'lineno':240};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.GWTCanvasImplDefault';
				$pyjs['track']['lineno']=240;
				$pyjs['track']['lineno']=241;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvasContext', ctx) : $p['setattr'](self, 'canvasContext', ctx); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ctx']]);
			$cls_definition['setCanvasContext'] = $method;
			$pyjs['track']['lineno']=27;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GWTCanvasImplDefault', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.GWTCanvasImplDefault */


/* end module: pyjamas.Canvas.GWTCanvasImplDefault */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color']
*/
