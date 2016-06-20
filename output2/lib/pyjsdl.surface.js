/* start module: pyjsdl.surface */
$pyjs['loaded_modules']['pyjsdl.surface'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surface']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surface'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surface'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surface>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surface';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['surface'] = $pyjs['loaded_modules']['pyjsdl.surface'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.surface.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.surface.py, line 4:\n    from rect import Rect, rectPool';
		$m.__track_lines__[5] = 'pyjsdl.surface.py, line 5:\n    from color import Color';
		$m.__track_lines__[6] = 'pyjsdl.surface.py, line 6:\n    from pyjsobj import HTML5Canvas';
		$m.__track_lines__[7] = 'pyjsdl.surface.py, line 7:\n    from __pyjamas__ import JS';
		$m.__track_lines__[9] = "pyjsdl.surface.py, line 9:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[12] = 'pyjsdl.surface.py, line 12:\n    class Surface(HTML5Canvas):';
		$m.__track_lines__[34] = 'pyjsdl.surface.py, line 34:\n    def __init__(self, size, *args, **kwargs):';
		$m.__track_lines__[35] = 'pyjsdl.surface.py, line 35:\n    self.width = int(size[0])';
		$m.__track_lines__[36] = 'pyjsdl.surface.py, line 36:\n    self.height = int(size[1])';
		$m.__track_lines__[37] = 'pyjsdl.surface.py, line 37:\n    HTML5Canvas.__init__(self, self.width, self.height)';
		$m.__track_lines__[38] = 'pyjsdl.surface.py, line 38:\n    self._display = None    #display surface';
		$m.__track_lines__[39] = 'pyjsdl.surface.py, line 39:\n    self._super_surface = None';
		$m.__track_lines__[40] = 'pyjsdl.surface.py, line 40:\n    self._offset = (0,0)';
		$m.__track_lines__[41] = 'pyjsdl.surface.py, line 41:\n    self._colorkey = None';
		$m.__track_lines__[42] = 'pyjsdl.surface.py, line 42:\n    self._nonimplemented_methods()';
		$m.__track_lines__[44] = 'pyjsdl.surface.py, line 44:\n    def __repr__(self):';
		$m.__track_lines__[48] = 'pyjsdl.surface.py, line 48:\n    return "%s(%d,%d)" % (self.__class__, self.width, self.height)';
		$m.__track_lines__[50] = 'pyjsdl.surface.py, line 50:\n    def get_size(self):';
		$m.__track_lines__[54] = 'pyjsdl.surface.py, line 54:\n    return (self.width, self.height)';
		$m.__track_lines__[56] = 'pyjsdl.surface.py, line 56:\n    def get_width(self):';
		$m.__track_lines__[60] = 'pyjsdl.surface.py, line 60:\n    return self.width';
		$m.__track_lines__[62] = 'pyjsdl.surface.py, line 62:\n    def get_height(self):';
		$m.__track_lines__[66] = 'pyjsdl.surface.py, line 66:\n    return self.height';
		$m.__track_lines__[68] = 'pyjsdl.surface.py, line 68:\n    def resize(self, width, height):';
		$m.__track_lines__[69] = 'pyjsdl.surface.py, line 69:\n    self.width = int(width)';
		$m.__track_lines__[70] = 'pyjsdl.surface.py, line 70:\n    self.height = int(height)';
		$m.__track_lines__[71] = 'pyjsdl.surface.py, line 71:\n    HTML5Canvas.resize(self, self.width, self.height)';
		$m.__track_lines__[73] = 'pyjsdl.surface.py, line 73:\n    def get_rect(self, **attr):';
		$m.__track_lines__[78] = 'pyjsdl.surface.py, line 78:\n    rect = Rect(0, 0, self.width, self.height)';
		$m.__track_lines__[79] = 'pyjsdl.surface.py, line 79:\n    for key in attr:';
		$m.__track_lines__[80] = 'pyjsdl.surface.py, line 80:\n    rect.__setattr__(key,attr[key])';
		$m.__track_lines__[81] = 'pyjsdl.surface.py, line 81:\n    return rect';
		$m.__track_lines__[83] = 'pyjsdl.surface.py, line 83:\n    def copy(self):';
		$m.__track_lines__[87] = 'pyjsdl.surface.py, line 87:\n    surface = Surface((self.width,self.height))';
		$m.__track_lines__[88] = 'pyjsdl.surface.py, line 88:\n    surface.drawImage(self.canvas, 0, 0)    #pyjs0.8 *.canvas';
		$m.__track_lines__[89] = 'pyjsdl.surface.py, line 89:\n    return surface';
		$m.__track_lines__[91] = 'pyjsdl.surface.py, line 91:\n    def subsurface(self, rect):';
		$m.__track_lines__[97] = "pyjsdl.surface.py, line 97:\n    if rect in ('t', 'f'):";
		$m.__track_lines__[98] = 'pyjsdl.surface.py, line 98:\n    if not self._super_surface:';
		$m.__track_lines__[99] = 'pyjsdl.surface.py, line 99:\n    return';
		$m.__track_lines__[100] = "pyjsdl.surface.py, line 100:\n    if rect == 't':";
		$m.__track_lines__[101] = 'pyjsdl.surface.py, line 101:\n    self.drawImage(self._super_surface.canvas, self._offset[0], self._offset[1], self.width, self.height, 0, 0, self.width, self.height)';
		$m.__track_lines__[103] = 'pyjsdl.surface.py, line 103:\n    self._super_surface.drawImage(self.canvas, self._offset[0], self._offset[1])';
		$m.__track_lines__[104] = 'pyjsdl.surface.py, line 104:\n    return';
		$m.__track_lines__[105] = "pyjsdl.surface.py, line 105:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[106] = 'pyjsdl.surface.py, line 106:\n    _rect = rect';
		$m.__track_lines__[108] = 'pyjsdl.surface.py, line 108:\n    _rect = Rect(rect)';
		$m.__track_lines__[109] = 'pyjsdl.surface.py, line 109:\n    surf_rect = self.get_rect()';
		$m.__track_lines__[110] = 'pyjsdl.surface.py, line 110:\n    if not surf_rect.contains(_rect):';
		$m.__track_lines__[111] = "pyjsdl.surface.py, line 111:\n    raise ValueError('subsurface outside surface area')";
		$m.__track_lines__[112] = 'pyjsdl.surface.py, line 112:\n    surface = self.getSubimage(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[113] = 'pyjsdl.surface.py, line 113:\n    surface._super_surface = self';
		$m.__track_lines__[114] = 'pyjsdl.surface.py, line 114:\n    surface._offset = (_rect.x,_rect.y)';
		$m.__track_lines__[115] = 'pyjsdl.surface.py, line 115:\n    surface._colorkey = self._colorkey';
		$m.__track_lines__[116] = 'pyjsdl.surface.py, line 116:\n    return surface';
		$m.__track_lines__[118] = 'pyjsdl.surface.py, line 118:\n    def getSubimage(self, x, y, width, height):';
		$m.__track_lines__[123] = 'pyjsdl.surface.py, line 123:\n    surface = Surface((width,height))';
		$m.__track_lines__[124] = 'pyjsdl.surface.py, line 124:\n    surface.drawImage(self.canvas, x, y, width, height, 0, 0, width, height)    #pyjs0.8 *.canvas';
		$m.__track_lines__[125] = 'pyjsdl.surface.py, line 125:\n    return surface';
		$m.__track_lines__[127] = 'pyjsdl.surface.py, line 127:\n    def blit(self, surface, position, area=None):';
		$m.__track_lines__[132] = 'pyjsdl.surface.py, line 132:\n    if not area:';
		$m.__track_lines__[133] = 'pyjsdl.surface.py, line 133:\n    rect = rectPool.get(position[0],position[1],surface.width,surface.height)';
		$m.__track_lines__[134] = 'pyjsdl.surface.py, line 134:\n    self.impl.canvasContext.drawImage(surface.canvas, rect.x, rect.y)    #pyjs0.8 *.canvas';
		$m.__track_lines__[136] = 'pyjsdl.surface.py, line 136:\n    rect = rectPool.get(position[0],position[1],area[2], area[3])';
		$m.__track_lines__[137] = 'pyjsdl.surface.py, line 137:\n    self.impl.canvasContext.drawImage(surface.canvas, area[0], area[1], area[2], area[3], rect.x, rect.y, area[2], area[3])    #pyjs0.8 *.canvas';
		$m.__track_lines__[138] = 'pyjsdl.surface.py, line 138:\n    if self._display:';
		$m.__track_lines__[139] = 'pyjsdl.surface.py, line 139:\n    surface_rect = self._display._surface_rect';
		$m.__track_lines__[141] = 'pyjsdl.surface.py, line 141:\n    surface_rect = self.get_rect()';
		$m.__track_lines__[142] = 'pyjsdl.surface.py, line 142:\n    changed_rect = surface_rect.clip(rect)';
		$m.__track_lines__[143] = 'pyjsdl.surface.py, line 143:\n    rectPool.append(rect)';
		$m.__track_lines__[144] = 'pyjsdl.surface.py, line 144:\n    return changed_rect';
		$m.__track_lines__[146] = 'pyjsdl.surface.py, line 146:\n    def _blits(self, surfaces):';
		$m.__track_lines__[147] = 'pyjsdl.surface.py, line 147:\n    ctx = self.impl.canvasContext';
		$m.__track_lines__[148] = 'pyjsdl.surface.py, line 148:\n    for s in surfaces:';
		$m.__track_lines__[149] = 'pyjsdl.surface.py, line 149:\n    ctx.drawImage(s.image.canvas, s.rect.x, s.rect.y)   #pyjs0.8 *.canvas';
		$m.__track_lines__[151] = 'pyjsdl.surface.py, line 151:\n    def _blit_clear(self, surface, rect_list):';
		$m.__track_lines__[152] = 'pyjsdl.surface.py, line 152:\n    ctx = self.impl.canvasContext';
		$m.__track_lines__[153] = 'pyjsdl.surface.py, line 153:\n    if self._display:';
		$m.__track_lines__[154] = 'pyjsdl.surface.py, line 154:\n    surface_rect = self._display._surface_rect';
		$m.__track_lines__[156] = 'pyjsdl.surface.py, line 156:\n    surface_rect = self.get_rect()';
		$m.__track_lines__[157] = 'pyjsdl.surface.py, line 157:\n    for r in rect_list:';
		$m.__track_lines__[158] = 'pyjsdl.surface.py, line 158:\n    if surface_rect.contains(r):';
		$m.__track_lines__[159] = 'pyjsdl.surface.py, line 159:\n    ctx.drawImage(surface.canvas, r.x,r.y,r.width,r.height, r.x,r.y,r.width,r.height)    #pyjs0.8 *.canvas';
		$m.__track_lines__[161] = 'pyjsdl.surface.py, line 161:\n    rx = surface_rect.clip(r)';
		$m.__track_lines__[162] = 'pyjsdl.surface.py, line 162:\n    if rx.width and rx.height:';
		$m.__track_lines__[163] = 'pyjsdl.surface.py, line 163:\n    ctx.drawImage(surface.canvas, rx.x,rx.y,rx.width,rx.height, rx.x,rx.y,rx.width,rx.height)    #pyjs0.8 *.canvas';
		$m.__track_lines__[165] = 'pyjsdl.surface.py, line 165:\n    def set_colorkey(self, color, flags=None):';
		$m.__track_lines__[169] = 'pyjsdl.surface.py, line 169:\n    if self._colorkey:';
		$m.__track_lines__[170] = 'pyjsdl.surface.py, line 170:\n    r = self._colorkey.r';
		$m.__track_lines__[171] = 'pyjsdl.surface.py, line 171:\n    g = self._colorkey.g';
		$m.__track_lines__[172] = 'pyjsdl.surface.py, line 172:\n    b = self._colorkey.b';
		$m.__track_lines__[173] = 'pyjsdl.surface.py, line 173:\n    self._colorkey = None';
		$m.__track_lines__[174] = 'pyjsdl.surface.py, line 174:\n    if color:';
		$m.__track_lines__[175] = 'pyjsdl.surface.py, line 175:\n    try:';
		$m.__track_lines__[176] = 'pyjsdl.surface.py, line 176:\n    color = Color(color)';
		$m.__track_lines__[177] = 'pyjsdl.surface.py, line 177:\n    self._colorkey = color';
		$m.__track_lines__[178] = 'pyjsdl.surface.py, line 178:\n    self.replace_color((color.r,color.g,color.b))';
		$m.__track_lines__[180] = 'pyjsdl.surface.py, line 180:\n    pass';
		$m.__track_lines__[181] = 'pyjsdl.surface.py, line 181:\n    return None';
		$m.__track_lines__[183] = 'pyjsdl.surface.py, line 183:\n    def get_colorkey(self):';
		$m.__track_lines__[187] = 'pyjsdl.surface.py, line 187:\n    try:';
		$m.__track_lines__[188] = 'pyjsdl.surface.py, line 188:\n    return self._colorkey.r, self._colorkey.g, self._colorkey.b, 255';
		$m.__track_lines__[190] = 'pyjsdl.surface.py, line 190:\n    return None';
		$m.__track_lines__[192] = 'pyjsdl.surface.py, line 192:\n    def _getPixel(self, imagedata, index):';
		$m.__track_lines__[193] = 'pyjsdl.surface.py, line 193:\n    return JS("""imagedata.data[@{{index}}];""")';
		$m.__track_lines__[195] = 'pyjsdl.surface.py, line 195:\n    def _setPixel(self, imagedata, index, dat):';
		$m.__track_lines__[196] = 'pyjsdl.surface.py, line 196:\n    data = str(dat)';
		$m.__track_lines__[197] = 'pyjsdl.surface.py, line 197:\n    JS("""imagedata.data[@{{index}}]=@{{data}};""")';
		$m.__track_lines__[198] = 'pyjsdl.surface.py, line 198:\n    return';
		$m.__track_lines__[200] = 'pyjsdl.surface.py, line 200:\n    def replace_color(self, color, new_color=None):';
		$m.__track_lines__[204] = 'pyjsdl.surface.py, line 204:\n    pixels = self.impl.getImageData(0, 0, self.width, self.height)';
		$m.__track_lines__[206] = "pyjsdl.surface.py, line 206:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[207] = 'pyjsdl.surface.py, line 207:\n    color1 = color';
		$m.__track_lines__[209] = 'pyjsdl.surface.py, line 209:\n    color1 = Color(color)';
		$m.__track_lines__[210] = 'pyjsdl.surface.py, line 210:\n    if new_color:';
		$m.__track_lines__[211] = "pyjsdl.surface.py, line 211:\n    if hasattr(new_color, 'a'):";
		$m.__track_lines__[212] = 'pyjsdl.surface.py, line 212:\n    color2 = new_color';
		$m.__track_lines__[214] = 'pyjsdl.surface.py, line 214:\n    color2 = Color(new_color)';
		$m.__track_lines__[216] = 'pyjsdl.surface.py, line 216:\n    color2 = Color(color1.r,color1.g,color1.b,0)';
		$m.__track_lines__[217] = 'pyjsdl.surface.py, line 217:\n    col1 = (color1.r, color1.g, color1.b, color1.a)';
		$m.__track_lines__[218] = 'pyjsdl.surface.py, line 218:\n    col2 = (color2.r, color2.g, color2.b, color2.a)';
		$m.__track_lines__[219] = 'pyjsdl.surface.py, line 219:\n    for i in xrange(0,len(pixels.data),4):';
		$m.__track_lines__[220] = 'pyjsdl.surface.py, line 220:\n    if (self._getPixel(pixels, i), self._getPixel(pixels, i+1), self._getPixel(pixels, i+2), self._getPixel(pixels, i+3)) == col1:';
		$m.__track_lines__[221] = 'pyjsdl.surface.py, line 221:\n    for j in range(4):';
		$m.__track_lines__[222] = 'pyjsdl.surface.py, line 222:\n    self._setPixel(pixels, i+j, col2[j])';
		$m.__track_lines__[223] = 'pyjsdl.surface.py, line 223:\n    self.impl.putImageData(pixels, 0, 0, 0, 0, self.width, self.height)';
		$m.__track_lines__[225] = 'pyjsdl.surface.py, line 225:\n    return None';
		$m.__track_lines__[227] = 'pyjsdl.surface.py, line 227:\n    def get_at(self, pos):';
		$m.__track_lines__[232] = 'pyjsdl.surface.py, line 232:\n    pixel = self.impl.getImageData(pos[0], pos[1], 1, 1)';
		$m.__track_lines__[233] = 'pyjsdl.surface.py, line 233:\n    return self._getPixel(pixel,0), self._getPixel(pixel,1), self._getPixel(pixel,2), self._getPixel(pixel,3)';
		$m.__track_lines__[235] = 'pyjsdl.surface.py, line 235:\n    def set_at(self, pos, color):';
		$m.__track_lines__[240] = 'pyjsdl.surface.py, line 240:\n    pixel = self.impl.getImageData(pos[0], pos[1], 1, 1)';
		$m.__track_lines__[241] = "pyjsdl.surface.py, line 241:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[242] = 'pyjsdl.surface.py, line 242:\n    _color = color';
		$m.__track_lines__[244] = 'pyjsdl.surface.py, line 244:\n    _color = Color(color)';
		$m.__track_lines__[245] = 'pyjsdl.surface.py, line 245:\n    for i in range(4):';
		$m.__track_lines__[246] = 'pyjsdl.surface.py, line 246:\n    self._setPixel(pixel, i, _color[i])';
		$m.__track_lines__[247] = 'pyjsdl.surface.py, line 247:\n    self.impl.putImageData(pixel, pos[0], pos[1], 0, 0, 1, 1)';
		$m.__track_lines__[248] = 'pyjsdl.surface.py, line 248:\n    return None';
		$m.__track_lines__[250] = 'pyjsdl.surface.py, line 250:\n    def fill(self, color=None, rect=None):';
		$m.__track_lines__[254] = 'pyjsdl.surface.py, line 254:\n    if color is None:';
		$m.__track_lines__[255] = 'pyjsdl.surface.py, line 255:\n    HTML5Canvas.fill(self)';
		$m.__track_lines__[256] = 'pyjsdl.surface.py, line 256:\n    return';
		$m.__track_lines__[257] = 'pyjsdl.surface.py, line 257:\n    self.beginPath()';
		$m.__track_lines__[258] = 'pyjsdl.surface.py, line 258:\n    if color:';
		$m.__track_lines__[259] = "pyjsdl.surface.py, line 259:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[260] = 'pyjsdl.surface.py, line 260:\n    self.setFillStyle(color)';
		$m.__track_lines__[262] = 'pyjsdl.surface.py, line 262:\n    self.setFillStyle(Color(color))';
		$m.__track_lines__[263] = 'pyjsdl.surface.py, line 263:\n    if not rect:';
		$m.__track_lines__[264] = 'pyjsdl.surface.py, line 264:\n    _rect = Rect(0, 0, self.width, self.height)';
		$m.__track_lines__[266] = 'pyjsdl.surface.py, line 266:\n    if self._display:';
		$m.__track_lines__[267] = 'pyjsdl.surface.py, line 267:\n    surface_rect = self._display._surface_rect';
		$m.__track_lines__[269] = 'pyjsdl.surface.py, line 269:\n    surface_rect = self.get_rect()';
		$m.__track_lines__[270] = "pyjsdl.surface.py, line 270:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[271] = 'pyjsdl.surface.py, line 271:\n    _rect = surface_rect.clip( rect )';
		$m.__track_lines__[273] = 'pyjsdl.surface.py, line 273:\n    _rect = surface_rect.clip( Rect(rect) )';
		$m.__track_lines__[274] = 'pyjsdl.surface.py, line 274:\n    if not _rect.width or not _rect.height:';
		$m.__track_lines__[275] = 'pyjsdl.surface.py, line 275:\n    return _rect';
		$m.__track_lines__[276] = 'pyjsdl.surface.py, line 276:\n    self.fillRect(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[278] = 'pyjsdl.surface.py, line 278:\n    _rect = Rect(0, 0, self.width, self.height)';
		$m.__track_lines__[279] = 'pyjsdl.surface.py, line 279:\n    self.clear()';
		$m.__track_lines__[280] = 'pyjsdl.surface.py, line 280:\n    return _rect';
		$m.__track_lines__[282] = 'pyjsdl.surface.py, line 282:\n    def get_parent(self):';
		$m.__track_lines__[286] = 'pyjsdl.surface.py, line 286:\n    return self._super_surface   #if delete, delete subsurface...';
		$m.__track_lines__[288] = 'pyjsdl.surface.py, line 288:\n    def get_offset(self):';
		$m.__track_lines__[292] = 'pyjsdl.surface.py, line 292:\n    return self._offset';
		$m.__track_lines__[294] = 'pyjsdl.surface.py, line 294:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[298] = 'pyjsdl.surface.py, line 298:\n    self.convert = lambda *arg: self';
		$m.__track_lines__[299] = 'pyjsdl.surface.py, line 299:\n    self.convert_alpha = lambda *arg: self';
		$m.__track_lines__[300] = 'pyjsdl.surface.py, line 300:\n    self.set_alpha = lambda *arg: None';
		$m.__track_lines__[301] = 'pyjsdl.surface.py, line 301:\n    self.get_alpha = lambda *arg: None';
		$m.__track_lines__[302] = 'pyjsdl.surface.py, line 302:\n    self.lock = lambda *arg: None';
		$m.__track_lines__[303] = 'pyjsdl.surface.py, line 303:\n    self.unlock = lambda *arg: None';
		$m.__track_lines__[304] = 'pyjsdl.surface.py, line 304:\n    self.mustlock = lambda *arg: False';
		$m.__track_lines__[305] = 'pyjsdl.surface.py, line 305:\n    self.get_locked = lambda *arg: False';
		$m.__track_lines__[306] = 'pyjsdl.surface.py, line 306:\n    self.get_locks = lambda *arg: ()';
		$m.__track_lines__[309] = 'pyjsdl.surface.py, line 309:\n    class Surf:';
		$m.__track_lines__[311] = 'pyjsdl.surface.py, line 311:\n    def __init__(self, image):';
		$m.__track_lines__[312] = 'pyjsdl.surface.py, line 312:\n    self.canvas = image';
		$m.__track_lines__[313] = 'pyjsdl.surface.py, line 313:\n    element = image.getElement()';
		$m.__track_lines__[314] = 'pyjsdl.surface.py, line 314:\n    self.width, self.height = element.width, element.height';
		$m.__track_lines__[315] = 'pyjsdl.surface.py, line 315:\n    self.get_size = Surface.get_size';
		$m.__track_lines__[316] = 'pyjsdl.surface.py, line 316:\n    self.get_width = Surface.get_width';
		$m.__track_lines__[317] = 'pyjsdl.surface.py, line 317:\n    self.get_height = Surface.get_height';
		$m.__track_lines__[318] = 'pyjsdl.surface.py, line 318:\n    self.get_rect = Surface.get_rect';
		$m.__track_lines__[319] = 'pyjsdl.surface.py, line 319:\n    self._nonimplemented_methods = Surface._nonimplemented_methods';
		$m.__track_lines__[320] = 'pyjsdl.surface.py, line 320:\n    self._nonimplemented_methods()';
		$m.__track_lines__[323] = 'pyjsdl.surface.py, line 323:\n    class IndexSizeError(Exception):';
		$m.__track_lines__[324] = 'pyjsdl.surface.py, line 324:\n    pass';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.surface';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['rectPool'] = $p['___import___']('rect.rectPool', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HTML5Canvas'] = $p['___import___']('pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']['lineno']=9;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=12;
		$m['Surface'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surface';
			$cls_definition['__md5__'] = 'b1e34bd07ad1d33eeb349c57e83ef948';
			$pyjs['track']['lineno']=34;
			$method = $pyjs__bind_method2('__init__', function(size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof size != 'undefined') {
						if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = size;
							size = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=34;
				$pyjs['track']['lineno']=35;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](size['__getitem__']($constant_int_0))) : $p['setattr'](self, 'width', $p['int'](size['__getitem__']($constant_int_0))); 
				$pyjs['track']['lineno']=36;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](size['__getitem__']($constant_int_1))) : $p['setattr'](self, 'height', $p['int'](size['__getitem__']($constant_int_1))); 
				$pyjs['track']['lineno']=37;
				$m['HTML5Canvas']['__init__'](self, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=38;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_display', null) : $p['setattr'](self, '_display', null); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_super_surface', null) : $p['setattr'](self, '_super_surface', null); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_offset', $p['tuple']([$constant_int_0, $constant_int_0])) : $p['setattr'](self, '_offset', $p['tuple']([$constant_int_0, $constant_int_0])); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_colorkey', null) : $p['setattr'](self, '_colorkey', null); 
				$pyjs['track']['lineno']=42;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['size']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=44;
			$method = $pyjs__bind_method2('__repr__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				var $pyjs__ret = $p['sprintf']('%s(%d,%d)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=50;
			$method = $pyjs__bind_method2('get_size', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=54;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_size'] = $method;
			$pyjs['track']['lineno']=56;
			$method = $pyjs__bind_method2('get_width', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=60;
				var $pyjs__ret = $p['getattr'](self, 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_width'] = $method;
			$pyjs['track']['lineno']=62;
			$method = $pyjs__bind_method2('get_height', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = $p['getattr'](self, 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_height'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('resize', function(width, height) {
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
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=69;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](width)) : $p['setattr'](self, 'width', $p['int'](width)); 
				$pyjs['track']['lineno']=70;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](height)) : $p['setattr'](self, 'height', $p['int'](height)); 
				$pyjs['track']['lineno']=71;
				$m['HTML5Canvas']['resize'](self, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=73;
			$method = $pyjs__bind_method2('get_rect', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var attr = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
						var attr = arguments[arguments['length']+1];
					} else {
						delete attr['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var attr = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
						attr = arguments[arguments['length']+1];
					} else {
						delete attr['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof attr == 'undefined') {
					attr = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							attr = self;
							self = arguments[1];
						}
					} else {
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,key,$pyjs__trackstack_size_1,rect;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=78;
				rect = $m['Rect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=79;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = attr;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					key = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=80;
					rect['__setattr__'](key, attr['__getitem__'](key));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=81;
				var $pyjs__ret = rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,['attr'],['self']]);
			$cls_definition['get_rect'] = $method;
			$pyjs['track']['lineno']=83;
			$method = $pyjs__bind_method2('copy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var surface;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=87;
				surface = $m['Surface']($p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
				$pyjs['track']['lineno']=88;
				surface['drawImage']($p['getattr'](self, 'canvas'), $constant_int_0, $constant_int_0);
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=89;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('subsurface', function(rect) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rect = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _rect,surf_rect,surface;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=97;
				if ($p['bool']($p['tuple'](['t', 'f'])['__contains__'](rect))) {
					$pyjs['track']['lineno']=98;
					if ($p['bool'](!$p['bool']($p['getattr'](self, '_super_surface')))) {
						$pyjs['track']['lineno']=99;
						$pyjs['track']['lineno']=99;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					$pyjs['track']['lineno']=100;
					if ($p['bool']($p['op_eq'](rect, 't'))) {
						$pyjs['track']['lineno']=101;
						self['drawImage']($p['getattr']($p['getattr'](self, '_super_surface'), 'canvas'), $p['getattr'](self, '_offset')['__getitem__']($constant_int_0), $p['getattr'](self, '_offset')['__getitem__']($constant_int_1), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'), $constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
					}
					else {
						$pyjs['track']['lineno']=103;
						self['_super_surface']['drawImage']($p['getattr'](self, 'canvas'), $p['getattr'](self, '_offset')['__getitem__']($constant_int_0), $p['getattr'](self, '_offset')['__getitem__']($constant_int_1));
					}
					$pyjs['track']['lineno']=104;
					$pyjs['track']['lineno']=104;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=105;
				if ($p['bool']($p['hasattr'](rect, 'width'))) {
					$pyjs['track']['lineno']=106;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=108;
					_rect = $m['Rect'](rect);
				}
				$pyjs['track']['lineno']=109;
				surf_rect = self['get_rect']();
				$pyjs['track']['lineno']=110;
				if ($p['bool'](!$p['bool'](surf_rect['contains'](_rect)))) {
					$pyjs['track']['lineno']=111;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']('subsurface outside surface area'));
				}
				$pyjs['track']['lineno']=112;
				surface = self['getSubimage']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
				$pyjs['track']['lineno']=113;
				surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_super_surface', self) : $p['setattr'](surface, '_super_surface', self); 
				$pyjs['track']['lineno']=114;
				surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_offset', $p['tuple']([$p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y')])) : $p['setattr'](surface, '_offset', $p['tuple']([$p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y')])); 
				$pyjs['track']['lineno']=115;
				surface['__is_instance__'] && typeof surface['__setattr__'] == 'function' ? surface['__setattr__']('_colorkey', $p['getattr'](self, '_colorkey')) : $p['setattr'](surface, '_colorkey', $p['getattr'](self, '_colorkey')); 
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=116;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['subsurface'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('getSubimage', function(x, y, width, height) {
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
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var surface;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=123;
				surface = $m['Surface']($p['tuple']([width, height]));
				$pyjs['track']['lineno']=124;
				surface['drawImage']($p['getattr'](self, 'canvas'), x, y, width, height, $constant_int_0, $constant_int_0, width, height);
				$pyjs['track']['lineno']=125;
				$pyjs['track']['lineno']=125;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
			$cls_definition['getSubimage'] = $method;
			$pyjs['track']['lineno']=127;
			$method = $pyjs__bind_method2('blit', function(surface, position, area) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					position = arguments[2];
					area = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof area == 'undefined') area=arguments['callee']['__args__'][5][1];
				var surface_rect,changed_rect,rect;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=127;
				$pyjs['track']['lineno']=132;
				if ($p['bool'](!$p['bool'](area))) {
					$pyjs['track']['lineno']=133;
					rect = $m['rectPool']['get'](position['__getitem__']($constant_int_0), position['__getitem__']($constant_int_1), $p['getattr'](surface, 'width'), $p['getattr'](surface, 'height'));
					$pyjs['track']['lineno']=134;
					self['impl']['canvasContext']['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'));
				}
				else {
					$pyjs['track']['lineno']=136;
					rect = $m['rectPool']['get'](position['__getitem__']($constant_int_0), position['__getitem__']($constant_int_1), area['__getitem__']($constant_int_2), area['__getitem__']($constant_int_3));
					$pyjs['track']['lineno']=137;
					self['impl']['canvasContext']['drawImage']($p['getattr'](surface, 'canvas'), area['__getitem__']($constant_int_0), area['__getitem__']($constant_int_1), area['__getitem__']($constant_int_2), area['__getitem__']($constant_int_3), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), area['__getitem__']($constant_int_2), area['__getitem__']($constant_int_3));
				}
				$pyjs['track']['lineno']=138;
				if ($p['bool']($p['getattr'](self, '_display'))) {
					$pyjs['track']['lineno']=139;
					surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
				}
				else {
					$pyjs['track']['lineno']=141;
					surface_rect = self['get_rect']();
				}
				$pyjs['track']['lineno']=142;
				changed_rect = surface_rect['clip'](rect);
				$pyjs['track']['lineno']=143;
				$m['rectPool']['append'](rect);
				$pyjs['track']['lineno']=144;
				$pyjs['track']['lineno']=144;
				var $pyjs__ret = changed_rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['position'],['area', null]]);
			$cls_definition['blit'] = $method;
			$pyjs['track']['lineno']=146;
			$method = $pyjs__bind_method2('_blits', function(surfaces) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surfaces = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,ctx,s,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=147;
				ctx = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
				$pyjs['track']['lineno']=148;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = surfaces;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					s = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=149;
					ctx['drawImage']($p['getattr']($p['getattr'](s, 'image'), 'canvas'), $p['getattr']($p['getattr'](s, 'rect'), 'x'), $p['getattr']($p['getattr'](s, 'rect'), 'y'));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surfaces']]);
			$cls_definition['_blits'] = $method;
			$pyjs['track']['lineno']=151;
			$method = $pyjs__bind_method2('_blit_clear', function(surface, rect_list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					rect_list = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var surface_rect,$iter3_idx,rx,$iter3_array,ctx,r,$and2,$iter3_iter,$and1,$iter3_type,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':151};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=151;
				$pyjs['track']['lineno']=152;
				ctx = $p['getattr']($p['getattr'](self, 'impl'), 'canvasContext');
				$pyjs['track']['lineno']=153;
				if ($p['bool']($p['getattr'](self, '_display'))) {
					$pyjs['track']['lineno']=154;
					surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
				}
				else {
					$pyjs['track']['lineno']=156;
					surface_rect = self['get_rect']();
				}
				$pyjs['track']['lineno']=157;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = rect_list;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					r = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=158;
					if ($p['bool'](surface_rect['contains'](r))) {
						$pyjs['track']['lineno']=159;
						ctx['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'), $p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'));
					}
					else {
						$pyjs['track']['lineno']=161;
						rx = surface_rect['clip'](r);
						$pyjs['track']['lineno']=162;
						if ($p['bool'](($p['bool']($and1=$p['getattr'](rx, 'width'))?$p['getattr'](rx, 'height'):$and1))) {
							$pyjs['track']['lineno']=163;
							ctx['drawImage']($p['getattr'](surface, 'canvas'), $p['getattr'](rx, 'x'), $p['getattr'](rx, 'y'), $p['getattr'](rx, 'width'), $p['getattr'](rx, 'height'), $p['getattr'](rx, 'x'), $p['getattr'](rx, 'y'), $p['getattr'](rx, 'width'), $p['getattr'](rx, 'height'));
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['rect_list']]);
			$cls_definition['_blit_clear'] = $method;
			$pyjs['track']['lineno']=165;
			$method = $pyjs__bind_method2('set_colorkey', function(color, flags) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					flags = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];
				var b,g,$pyjs_try_err,r;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':165};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=165;
				$pyjs['track']['lineno']=169;
				if ($p['bool']($p['getattr'](self, '_colorkey'))) {
					$pyjs['track']['lineno']=170;
					r = $p['getattr']($p['getattr'](self, '_colorkey'), 'r');
					$pyjs['track']['lineno']=171;
					g = $p['getattr']($p['getattr'](self, '_colorkey'), 'g');
					$pyjs['track']['lineno']=172;
					b = $p['getattr']($p['getattr'](self, '_colorkey'), 'b');
					$pyjs['track']['lineno']=173;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_colorkey', null) : $p['setattr'](self, '_colorkey', null); 
				}
				$pyjs['track']['lineno']=174;
				if ($p['bool'](color)) {
					$pyjs['track']['lineno']=175;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=176;
						color = $m['Color'](color);
						$pyjs['track']['lineno']=177;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_colorkey', color) : $p['setattr'](self, '_colorkey', color); 
						$pyjs['track']['lineno']=178;
						self['replace_color']($p['tuple']([$p['getattr'](color, 'r'), $p['getattr'](color, 'g'), $p['getattr'](color, 'b')]));
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
						$pyjs['track']['module']='pyjsdl.surface';
						if (true) {
							$pyjs['track']['lineno']=180;
						}
					}
				}
				$pyjs['track']['lineno']=181;
				$pyjs['track']['lineno']=181;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['color'],['flags', null]]);
			$cls_definition['set_colorkey'] = $method;
			$pyjs['track']['lineno']=183;
			$method = $pyjs__bind_method2('get_colorkey', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':183};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=183;
				$pyjs['track']['lineno']=187;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=188;
					$pyjs['track']['lineno']=188;
					var $pyjs__ret = $p['tuple']([$p['getattr']($p['getattr'](self, '_colorkey'), 'r'), $p['getattr']($p['getattr'](self, '_colorkey'), 'g'), $p['getattr']($p['getattr'](self, '_colorkey'), 'b'), $constant_int_255]);
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
					$pyjs['track']['module']='pyjsdl.surface';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=190;
						$pyjs['track']['lineno']=190;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_colorkey'] = $method;
			$pyjs['track']['lineno']=192;
			$method = $pyjs__bind_method2('_getPixel', function(imagedata, index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					index = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=192;
				$pyjs['track']['lineno']=193;
				$pyjs['track']['lineno']=193;
				var $pyjs__ret = imagedata.data[index];;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['imagedata'],['index']]);
			$cls_definition['_getPixel'] = $method;
			$pyjs['track']['lineno']=195;
			$method = $pyjs__bind_method2('_setPixel', function(imagedata, index, dat) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					index = arguments[2];
					dat = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var data;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=195;
				$pyjs['track']['lineno']=196;
				data = $p['str'](dat);
				$pyjs['track']['lineno']=197;
imagedata.data[index]=data;
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=198;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['imagedata'],['index'],['dat']]);
			$cls_definition['_setPixel'] = $method;
			$pyjs['track']['lineno']=200;
			$method = $pyjs__bind_method2('replace_color', function(color, new_color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					new_color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof new_color == 'undefined') new_color=arguments['callee']['__args__'][4][1];
				var $iter5_nextval,$iter5_array,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$add2,$iter5_idx,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,col2,col1,color1,color2,pixels,i,$iter4_nextval,j,$iter4_idx,$add3,$add1,$add6,$add7,$add4,$add5,$iter4_array,$add8;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=204;
				pixels = self['impl']['getImageData']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=206;
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					$pyjs['track']['lineno']=207;
					color1 = color;
				}
				else {
					$pyjs['track']['lineno']=209;
					color1 = $m['Color'](color);
				}
				$pyjs['track']['lineno']=210;
				if ($p['bool'](new_color)) {
					$pyjs['track']['lineno']=211;
					if ($p['bool']($p['hasattr'](new_color, 'a'))) {
						$pyjs['track']['lineno']=212;
						color2 = new_color;
					}
					else {
						$pyjs['track']['lineno']=214;
						color2 = $m['Color'](new_color);
					}
				}
				else {
					$pyjs['track']['lineno']=216;
					color2 = $m['Color']($p['getattr'](color1, 'r'), $p['getattr'](color1, 'g'), $p['getattr'](color1, 'b'), $constant_int_0);
				}
				$pyjs['track']['lineno']=217;
				col1 = $p['tuple']([$p['getattr'](color1, 'r'), $p['getattr'](color1, 'g'), $p['getattr'](color1, 'b'), $p['getattr'](color1, 'a')]);
				$pyjs['track']['lineno']=218;
				col2 = $p['tuple']([$p['getattr'](color2, 'r'), $p['getattr'](color2, 'g'), $p['getattr'](color2, 'b'), $p['getattr'](color2, 'a')]);
				$pyjs['track']['lineno']=219;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['xrange']($constant_int_0, $p['len']($p['getattr'](pixels, 'data')), $constant_int_4);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					i = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=220;
					if ($p['bool']($p['op_eq']($p['tuple']([self['_getPixel'](pixels, i), self['_getPixel'](pixels, $p['__op_add']($add1=i,$add2=$constant_int_1)), self['_getPixel'](pixels, $p['__op_add']($add3=i,$add4=$constant_int_2)), self['_getPixel'](pixels, $p['__op_add']($add5=i,$add6=$constant_int_3))]), col1))) {
						$pyjs['track']['lineno']=221;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter5_iter = $p['range']($constant_int_4);
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							j = $iter5_nextval['$nextval'];
							$pyjs['track']['lineno']=222;
							self['_setPixel'](pixels, $p['__op_add']($add7=i,$add8=j), col2['__getitem__'](j));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.surface';
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=223;
				self['impl']['putImageData'](pixels, $constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=225;
				$pyjs['track']['lineno']=225;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['color'],['new_color', null]]);
			$cls_definition['replace_color'] = $method;
			$pyjs['track']['lineno']=227;
			$method = $pyjs__bind_method2('get_at', function(pos) {
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
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var pixel;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=227;
				$pyjs['track']['lineno']=232;
				pixel = self['impl']['getImageData'](pos['__getitem__']($constant_int_0), pos['__getitem__']($constant_int_1), $constant_int_1, $constant_int_1);
				$pyjs['track']['lineno']=233;
				$pyjs['track']['lineno']=233;
				var $pyjs__ret = $p['tuple']([self['_getPixel'](pixel, $constant_int_0), self['_getPixel'](pixel, $constant_int_1), self['_getPixel'](pixel, $constant_int_2), self['_getPixel'](pixel, $constant_int_3)]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['pos']]);
			$cls_definition['get_at'] = $method;
			$pyjs['track']['lineno']=235;
			$method = $pyjs__bind_method2('set_at', function(pos, color) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					pos = arguments[1];
					color = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$iter6_idx,$iter6_type,$iter6_array,_color,$pyjs__trackstack_size_1,$iter6_iter,pixel,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':235};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=235;
				$pyjs['track']['lineno']=240;
				pixel = self['impl']['getImageData'](pos['__getitem__']($constant_int_0), pos['__getitem__']($constant_int_1), $constant_int_1, $constant_int_1);
				$pyjs['track']['lineno']=241;
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					$pyjs['track']['lineno']=242;
					_color = color;
				}
				else {
					$pyjs['track']['lineno']=244;
					_color = $m['Color'](color);
				}
				$pyjs['track']['lineno']=245;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = $p['range']($constant_int_4);
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					i = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=246;
					self['_setPixel'](pixel, i, _color['__getitem__'](i));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=247;
				self['impl']['putImageData'](pixel, pos['__getitem__']($constant_int_0), pos['__getitem__']($constant_int_1), $constant_int_0, $constant_int_0, $constant_int_1, $constant_int_1);
				$pyjs['track']['lineno']=248;
				$pyjs['track']['lineno']=248;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['pos'],['color']]);
			$cls_definition['set_at'] = $method;
			$pyjs['track']['lineno']=250;
			$method = $pyjs__bind_method2('fill', function(color, rect) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					color = arguments[1];
					rect = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof color == 'undefined') color=arguments['callee']['__args__'][3][1];
				if (typeof rect == 'undefined') rect=arguments['callee']['__args__'][4][1];
				var _rect,surface_rect,$or1,$or2;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':250};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=250;
				$pyjs['track']['lineno']=254;
				if ($p['bool']($p['op_is'](color, null))) {
					$pyjs['track']['lineno']=255;
					$m['HTML5Canvas']['fill'](self);
					$pyjs['track']['lineno']=256;
					$pyjs['track']['lineno']=256;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=257;
				self['beginPath']();
				$pyjs['track']['lineno']=258;
				if ($p['bool'](color)) {
					$pyjs['track']['lineno']=259;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=260;
						self['setFillStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=262;
						self['setFillStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=263;
					if ($p['bool'](!$p['bool'](rect))) {
						$pyjs['track']['lineno']=264;
						_rect = $m['Rect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
					}
					else {
						$pyjs['track']['lineno']=266;
						if ($p['bool']($p['getattr'](self, '_display'))) {
							$pyjs['track']['lineno']=267;
							surface_rect = $p['getattr']($p['getattr'](self, '_display'), '_surface_rect');
						}
						else {
							$pyjs['track']['lineno']=269;
							surface_rect = self['get_rect']();
						}
						$pyjs['track']['lineno']=270;
						if ($p['bool']($p['hasattr'](rect, 'width'))) {
							$pyjs['track']['lineno']=271;
							_rect = surface_rect['clip'](rect);
						}
						else {
							$pyjs['track']['lineno']=273;
							_rect = surface_rect['clip']($m['Rect'](rect));
						}
						$pyjs['track']['lineno']=274;
						if ($p['bool'](($p['bool']($or1=!$p['bool']($p['getattr'](_rect, 'width')))?$or1:!$p['bool']($p['getattr'](_rect, 'height'))))) {
							$pyjs['track']['lineno']=275;
							$pyjs['track']['lineno']=275;
							var $pyjs__ret = _rect;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					$pyjs['track']['lineno']=276;
					self['fillRect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
				}
				else {
					$pyjs['track']['lineno']=278;
					_rect = $m['Rect']($constant_int_0, $constant_int_0, $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
					$pyjs['track']['lineno']=279;
					self['clear']();
				}
				$pyjs['track']['lineno']=280;
				$pyjs['track']['lineno']=280;
				var $pyjs__ret = _rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['color', null],['rect', null]]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=282;
			$method = $pyjs__bind_method2('get_parent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':282};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=282;
				$pyjs['track']['lineno']=286;
				$pyjs['track']['lineno']=286;
				var $pyjs__ret = $p['getattr'](self, '_super_surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_parent'] = $method;
			$pyjs['track']['lineno']=288;
			$method = $pyjs__bind_method2('get_offset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':288};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=288;
				$pyjs['track']['lineno']=292;
				$pyjs['track']['lineno']=292;
				var $pyjs__ret = $p['getattr'](self, '_offset');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_offset'] = $method;
			$pyjs['track']['lineno']=294;
			$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b1e34bd07ad1d33eeb349c57e83ef948') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1,$lambda9,$lambda8;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':294};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=294;
				$pyjs['track']['lineno']=298;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':298};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=298;
					$pyjs['track']['lineno']=298;
					$pyjs['track']['lineno']=298;
					var $pyjs__ret = self;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('convert', $lambda1) : $p['setattr'](self, 'convert', $lambda1); 
				$pyjs['track']['lineno']=299;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':299};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=299;
					$pyjs['track']['lineno']=299;
					$pyjs['track']['lineno']=299;
					var $pyjs__ret = self;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('convert_alpha', $lambda2) : $p['setattr'](self, 'convert_alpha', $lambda2); 
				$pyjs['track']['lineno']=300;
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':300};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=300;
					$pyjs['track']['lineno']=300;
					$pyjs['track']['lineno']=300;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_alpha', $lambda3) : $p['setattr'](self, 'set_alpha', $lambda3); 
				$pyjs['track']['lineno']=301;
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':301};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=301;
					$pyjs['track']['lineno']=301;
					$pyjs['track']['lineno']=301;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_alpha', $lambda4) : $p['setattr'](self, 'get_alpha', $lambda4); 
				$pyjs['track']['lineno']=302;
				var 				$lambda5 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':302};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=302;
					$pyjs['track']['lineno']=302;
					$pyjs['track']['lineno']=302;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('lock', $lambda5) : $p['setattr'](self, 'lock', $lambda5); 
				$pyjs['track']['lineno']=303;
				var 				$lambda6 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':303};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=303;
					$pyjs['track']['lineno']=303;
					$pyjs['track']['lineno']=303;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda6['__name__'] = '$lambda6';

				$lambda6['__bind_type__'] = 0;
				$lambda6['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('unlock', $lambda6) : $p['setattr'](self, 'unlock', $lambda6); 
				$pyjs['track']['lineno']=304;
				var 				$lambda7 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':304};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=304;
					$pyjs['track']['lineno']=304;
					$pyjs['track']['lineno']=304;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda7['__name__'] = '$lambda7';

				$lambda7['__bind_type__'] = 0;
				$lambda7['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mustlock', $lambda7) : $p['setattr'](self, 'mustlock', $lambda7); 
				$pyjs['track']['lineno']=305;
				var 				$lambda8 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':305};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=305;
					$pyjs['track']['lineno']=305;
					$pyjs['track']['lineno']=305;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda8['__name__'] = '$lambda8';

				$lambda8['__bind_type__'] = 0;
				$lambda8['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_locked', $lambda8) : $p['setattr'](self, 'get_locked', $lambda8); 
				$pyjs['track']['lineno']=306;
				var 				$lambda9 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.surface','lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.surface';
					$pyjs['track']['lineno']=306;
					$pyjs['track']['lineno']=306;
					$pyjs['track']['lineno']=306;
					var $pyjs__ret = $p['tuple']([]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda9['__name__'] = '$lambda9';

				$lambda9['__bind_type__'] = 0;
				$lambda9['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_locks', $lambda9) : $p['setattr'](self, 'get_locks', $lambda9); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=12;
			var $bases = new Array($m['HTML5Canvas']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Surface', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=309;
		$m['Surf'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surface';
			$cls_definition['__md5__'] = '72b03abc822406f03e91b37d8867d39b';
			$pyjs['track']['lineno']=311;
			$method = $pyjs__bind_method2('__init__', function(image) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					image = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '72b03abc822406f03e91b37d8867d39b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var element;
				$pyjs['track']={'module':'pyjsdl.surface', 'lineno':311};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.surface';
				$pyjs['track']['lineno']=311;
				$pyjs['track']['lineno']=312;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', image) : $p['setattr'](self, 'canvas', image); 
				$pyjs['track']['lineno']=313;
				element = image['getElement']();
				$pyjs['track']['lineno']=314;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['getattr'](element, 'width'), $p['getattr'](element, 'height')]), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign1[0]) : $p['setattr'](self, 'width', $tupleassign1[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign1[1]) : $p['setattr'](self, 'height', $tupleassign1[1]); 
				$pyjs['track']['lineno']=315;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_size', $p['getattr']($m['Surface'], 'get_size')) : $p['setattr'](self, 'get_size', $p['getattr']($m['Surface'], 'get_size')); 
				$pyjs['track']['lineno']=316;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_width', $p['getattr']($m['Surface'], 'get_width')) : $p['setattr'](self, 'get_width', $p['getattr']($m['Surface'], 'get_width')); 
				$pyjs['track']['lineno']=317;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_height', $p['getattr']($m['Surface'], 'get_height')) : $p['setattr'](self, 'get_height', $p['getattr']($m['Surface'], 'get_height')); 
				$pyjs['track']['lineno']=318;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_rect', $p['getattr']($m['Surface'], 'get_rect')) : $p['setattr'](self, 'get_rect', $p['getattr']($m['Surface'], 'get_rect')); 
				$pyjs['track']['lineno']=319;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_nonimplemented_methods', $p['getattr']($m['Surface'], '_nonimplemented_methods')) : $p['setattr'](self, '_nonimplemented_methods', $p['getattr']($m['Surface'], '_nonimplemented_methods')); 
				$pyjs['track']['lineno']=320;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['image']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=309;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Surf', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=323;
		$m['IndexSizeError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.surface';
			$cls_definition['__md5__'] = '77b275b3b915711b7af2bf297d3f607d';
			$pyjs['track']['lineno']=324;
			$pyjs['track']['lineno']=323;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('IndexSizeError', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.surface */


/* end module: pyjsdl.surface */


/*
PYJS_DEPS: ['rect.Rect', 'rect', 'rect.rectPool', 'color.Color', 'color', 'pyjsobj.HTML5Canvas', 'pyjsobj']
*/
