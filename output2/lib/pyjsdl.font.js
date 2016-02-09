/* start module: pyjsdl.font */
$pyjs['loaded_modules']['pyjsdl.font'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.font']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.font'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.font'];
	$m['__repr__'] = function() { return '<module: pyjsdl.font>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.font';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['font'] = $pyjs['loaded_modules']['pyjsdl.font'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.font.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.font.py, line 5:\n    from surface import Surface';
		$m.__track_lines__[6] = 'pyjsdl.font.py, line 6:\n    import math';
		$m.__track_lines__[7] = 'pyjsdl.font.py, line 7:\n    from color import Color';
		$m.__track_lines__[8] = 'pyjsdl.font.py, line 8:\n    from pyjsobj import HTML5Canvas';
		$m.__track_lines__[10] = "pyjsdl.font.py, line 10:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[13] = 'pyjsdl.font.py, line 13:\n    _initialized = False';
		$m.__track_lines__[14] = 'pyjsdl.font.py, line 14:\n    _surf = None';
		$m.__track_lines__[17] = 'pyjsdl.font.py, line 17:\n    def init():';
		$m.__track_lines__[23] = 'pyjsdl.font.py, line 23:\n    global _surf, _initialized, match_font';
		$m.__track_lines__[24] = 'pyjsdl.font.py, line 24:\n    if _initialized:';
		$m.__track_lines__[25] = 'pyjsdl.font.py, line 25:\n    return';
		$m.__track_lines__[26] = 'pyjsdl.font.py, line 26:\n    try:';
		$m.__track_lines__[27] = 'pyjsdl.font.py, line 27:\n    _surf = HTML5Canvas(1,1)';
		$m.__track_lines__[28] = "pyjsdl.font.py, line 28:\n    _surf.measureText('x')";
		$m.__track_lines__[30] = 'pyjsdl.font.py, line 30:\n    _surf = None';
		$m.__track_lines__[31] = 'pyjsdl.font.py, line 31:\n    _initialized = True';
		$m.__track_lines__[32] = 'pyjsdl.font.py, line 32:\n    init()';
		$m.__track_lines__[35] = 'pyjsdl.font.py, line 35:\n    def quit():';
		$m.__track_lines__[41] = 'pyjsdl.font.py, line 41:\n    global _surf, _initialized';
		$m.__track_lines__[42] = 'pyjsdl.font.py, line 42:\n    _surf = None';
		$m.__track_lines__[43] = 'pyjsdl.font.py, line 43:\n    _initialized = False';
		$m.__track_lines__[46] = 'pyjsdl.font.py, line 46:\n    def get_init():';
		$m.__track_lines__[52] = 'pyjsdl.font.py, line 52:\n    return _initialized';
		$m.__track_lines__[55] = 'pyjsdl.font.py, line 55:\n    def get_default_font():';
		$m.__track_lines__[61] = 'pyjsdl.font.py, line 61:\n    return Font._font[0]';
		$m.__track_lines__[64] = 'pyjsdl.font.py, line 64:\n    def get_fonts():';
		$m.__track_lines__[70] = 'pyjsdl.font.py, line 70:\n    return Font._font';
		$m.__track_lines__[73] = 'pyjsdl.font.py, line 73:\n    def match_font(name):';
		$m.__track_lines__[80] = 'pyjsdl.font.py, line 80:\n    fallback = False';
		$m.__track_lines__[81] = "pyjsdl.font.py, line 81:\n    font = [fn.strip().lower() for fn in name.split(',')]";
		$m.__track_lines__[82] = 'pyjsdl.font.py, line 82:\n    for i, fn in enumerate(font):';
		$m.__track_lines__[83] = 'pyjsdl.font.py, line 83:\n    if fn in Font._font:';
		$m.__track_lines__[84] = 'pyjsdl.font.py, line 84:\n    fallback = True';
		$m.__track_lines__[85] = 'pyjsdl.font.py, line 85:\n    continue';
		$m.__track_lines__[87] = "pyjsdl.font.py, line 87:\n    f = ''.join(c for c in fn if c.isalnum())";
		$m.__track_lines__[88] = 'pyjsdl.font.py, line 88:\n    if f in Font._font_alt:';
		$m.__track_lines__[89] = 'pyjsdl.font.py, line 89:\n    font[i] = Font._font[Font._font_alt[f]]';
		$m.__track_lines__[90] = 'pyjsdl.font.py, line 90:\n    fallback = True';
		$m.__track_lines__[91] = 'pyjsdl.font.py, line 91:\n    if not fallback:';
		$m.__track_lines__[92] = 'pyjsdl.font.py, line 92:\n    font.append(Font._font[0])';
		$m.__track_lines__[93] = "pyjsdl.font.py, line 93:\n    font = ','.join(font)";
		$m.__track_lines__[94] = 'pyjsdl.font.py, line 94:\n    return font';
		$m.__track_lines__[97] = 'pyjsdl.font.py, line 97:\n    class Font(object):';
		$m.__track_lines__[112] = "pyjsdl.font.py, line 112:\n    _font = ['arial', 'bitstream vera sans', 'bitstream vera serif', 'book antiqua', 'comic sans ms', 'courier new', 'courier', 'dejavu sans', 'dejavu sans mono', 'dejavu serif', 'freesans', 'garamond', 'georgia', 'helvetica', 'impact', 'liberation sans', 'liberation serif', 'lucida console', 'lucida serif', 'nimbus mono l', 'nimbus roman no9 l', 'nimbus sans l', 'palatino', 'times new roman', 'times', 'tahoma', 'verdana', 'cursive', 'monospace', 'sans-serif', 'serif']";
		$m.__track_lines__[114] = "pyjsdl.font.py, line 114:\n    _font_alt = {'arial':0, 'bitstreamverasans':1, 'bitstreamveraserif':2, 'bookantiqua':3, 'comicsansms':4, 'couriernew':5, 'courier':6, 'dejavusans':7, 'dejavusansmono':8, 'dejavuserif':9, 'freesans':10, 'garamond':11, 'georgia':12, 'helvetica':13, 'impact':14, 'liberationsans':15, 'liberationserif':16, 'lucidaconsole':17, 'lucidaserif':18, 'nimbusmonol':19, 'nimbusromanno9l':20, 'nimbussansl':21, 'palatino':22, 'timesnewroman':23, 'times':24, 'tahoma':25, 'verdana':26, 'cursive':27, 'monospace':28, 'sansserif':29, 'serif':30}";
		$m.__track_lines__[116] = "pyjsdl.font.py, line 116:\n    _font_family = [['arial', 'helvetica', 'liberation sans',  'nimbus sans l', 'freesans', 'tahoma', 'sans-serif'], ['verdana', 'bitstream vera sans', 'dejavu sans', 'sans-serif'], ['impact', 'sans-serif'], ['comic sans ms', 'cursive', 'sans-serif'], ['courier new', 'courier', 'lucida console', 'dejavu sans mono', 'monospace'], ['times new roman', 'times', 'liberation serif', 'nimbus roman no9 l', 'serif'], ['garamond',  'book antiqua', 'palatino', 'liberation serif', 'nimbus roman no9 l', 'serif'], ['georgia', 'bitstream vera serif', 'lucida serif', 'liberation serif', 'dejavu serif', 'serif']]";
		$m.__track_lines__[118] = 'pyjsdl.font.py, line 118:\n    def __init__(self, name, size):';
		$m.__track_lines__[123] = 'pyjsdl.font.py, line 123:\n    if not name:';
		$m.__track_lines__[124] = 'pyjsdl.font.py, line 124:\n    name = Font._font[0]';
		$m.__track_lines__[125] = "pyjsdl.font.py, line 125:\n    font = [fn.strip().lower() for fn in name.split(',')]";
		$m.__track_lines__[126] = 'pyjsdl.font.py, line 126:\n    fallback = None';
		$m.__track_lines__[127] = 'pyjsdl.font.py, line 127:\n    for i, fn in enumerate(font):';
		$m.__track_lines__[128] = 'pyjsdl.font.py, line 128:\n    if fn in Font._font:';
		$m.__track_lines__[129] = 'pyjsdl.font.py, line 129:\n    if not fallback:';
		$m.__track_lines__[130] = 'pyjsdl.font.py, line 130:\n    fallback = fn';
		$m.__track_lines__[132] = "pyjsdl.font.py, line 132:\n    f = ''.join(c for c in fn if c.isalnum())";
		$m.__track_lines__[133] = 'pyjsdl.font.py, line 133:\n    if f in Font._font_alt:';
		$m.__track_lines__[134] = 'pyjsdl.font.py, line 134:\n    font[i] = Font._font[Font._font_alt[f]]';
		$m.__track_lines__[135] = 'pyjsdl.font.py, line 135:\n    if not fallback:';
		$m.__track_lines__[136] = 'pyjsdl.font.py, line 136:\n    fallback = font[i]';
		$m.__track_lines__[137] = 'pyjsdl.font.py, line 137:\n    if fallback:';
		$m.__track_lines__[138] = 'pyjsdl.font.py, line 138:\n    for ff in Font._font_family:';
		$m.__track_lines__[139] = 'pyjsdl.font.py, line 139:\n    if fallback in ff:';
		$m.__track_lines__[140] = 'pyjsdl.font.py, line 140:\n    font.extend(f for f in ff if f not in font)';
		$m.__track_lines__[141] = 'pyjsdl.font.py, line 141:\n    break';
		$m.__track_lines__[143] = 'pyjsdl.font.py, line 143:\n    font.extend(Font._font_family[0])';
		$m.__track_lines__[144] = "pyjsdl.font.py, line 144:\n    self.fontname = ','.join(font)";
		$m.__track_lines__[145] = 'pyjsdl.font.py, line 145:\n    self.fontsize = size';
		$m.__track_lines__[146] = "pyjsdl.font.py, line 146:\n    self.bold = ''";
		$m.__track_lines__[147] = "pyjsdl.font.py, line 147:\n    self.italic = ''";
		$m.__track_lines__[148] = "pyjsdl.font.py, line 148:\n    self.fontstyle = self.bold + ' ' + self.italic";
		$m.__track_lines__[149] = 'pyjsdl.font.py, line 149:\n    self.underline = False';
		$m.__track_lines__[150] = 'pyjsdl.font.py, line 150:\n    self.char_size = None';
		$m.__track_lines__[151] = 'pyjsdl.font.py, line 151:\n    self._nonimplemented_methods()';
		$m.__track_lines__[153] = 'pyjsdl.font.py, line 153:\n    def __repr__(self):';
		$m.__track_lines__[157] = 'pyjsdl.font.py, line 157:\n    return "%s(%r)" % (self.__class__, self.__dict__)';
		$m.__track_lines__[159] = 'pyjsdl.font.py, line 159:\n    def render(self, text, antialias=True, color=(0,0,0), background=None, surface=None):      #optional surface for text rendering';
		$m.__track_lines__[164] = 'pyjsdl.font.py, line 164:\n    if not surface:';
		$m.__track_lines__[165] = 'pyjsdl.font.py, line 165:\n    w,h = self.size(text)';
		$m.__track_lines__[166] = 'pyjsdl.font.py, line 166:\n    surf = Surface((w,h))';
		$m.__track_lines__[168] = 'pyjsdl.font.py, line 168:\n    surf = surface';
		$m.__track_lines__[169] = 'pyjsdl.font.py, line 169:\n    w,h = surface.width, surface.height';
		$m.__track_lines__[170] = 'pyjsdl.font.py, line 170:\n    if background:';
		$m.__track_lines__[171] = 'pyjsdl.font.py, line 171:\n    surf.setFillStyle(Color(background))';
		$m.__track_lines__[172] = 'pyjsdl.font.py, line 172:\n    surf.fillRect(0,0,w,h)';
		$m.__track_lines__[173] = "pyjsdl.font.py, line 173:\n    surf.setFont('%s %dpx %s' % (self.fontstyle, self.fontsize, self.fontname))";
		$m.__track_lines__[175] = 'pyjsdl.font.py, line 175:\n    surf.setFillStyle(Color(color))';
		$m.__track_lines__[176] = 'pyjsdl.font.py, line 176:\n    surf.fillText(text,0,self.fontsize)';
		$m.__track_lines__[177] = 'pyjsdl.font.py, line 177:\n    if self.underline:';
		$m.__track_lines__[178] = 'pyjsdl.font.py, line 178:\n    surf.setLineWidth(1)';
		$m.__track_lines__[179] = 'pyjsdl.font.py, line 179:\n    surf.setStrokeStyle(Color(color))';
		$m.__track_lines__[180] = 'pyjsdl.font.py, line 180:\n    surf.setStroke(BasicStroke(1))';
		$m.__track_lines__[181] = 'pyjsdl.font.py, line 181:\n    surf.moveTo(0, h-1)';
		$m.__track_lines__[182] = 'pyjsdl.font.py, line 182:\n    surf.lineTo(w-1, h-1)';
		$m.__track_lines__[183] = 'pyjsdl.font.py, line 183:\n    surf.stroke()';
		$m.__track_lines__[184] = 'pyjsdl.font.py, line 184:\n    return surf';
		$m.__track_lines__[186] = 'pyjsdl.font.py, line 186:\n    def size(self, text):';
		$m.__track_lines__[190] = 'pyjsdl.font.py, line 190:\n    if _surf:   #>IE9 - use exception if HTML5Canvas not implemented';
		$m.__track_lines__[191] = "pyjsdl.font.py, line 191:\n    _surf.setFont('%s %dpx %s' % (self.fontstyle, self.fontsize, self.fontname))";
		$m.__track_lines__[192] = 'pyjsdl.font.py, line 192:\n    x = _surf.measureText(text)';
		$m.__track_lines__[194] = 'pyjsdl.font.py, line 194:\n    x = self._size_estimate(text)';
		$m.__track_lines__[195] = 'pyjsdl.font.py, line 195:\n    if x < 1:';
		$m.__track_lines__[196] = 'pyjsdl.font.py, line 196:\n    x = 1';
		$m.__track_lines__[197] = 'pyjsdl.font.py, line 197:\n    y = self.fontsize + 5';
		$m.__track_lines__[198] = 'pyjsdl.font.py, line 198:\n    return (x, y)';
		$m.__track_lines__[200] = 'pyjsdl.font.py, line 200:\n    def _size_estimate(self, text=None):   #for browsers HTML5Canvas not implemented';
		$m.__track_lines__[201] = 'pyjsdl.font.py, line 201:\n    if not self.char_size:';
		$m.__track_lines__[202] = 'pyjsdl.font.py, line 202:\n    self.char_size = self._get_char_size()';
		$m.__track_lines__[203] = "pyjsdl.font.py, line 203:\n    self.fontname = ','.join(Font._font_family[0])";
		$m.__track_lines__[204] = "pyjsdl.font.py, line 204:\n    self.fontstyle = ''";
		$m.__track_lines__[205] = 'pyjsdl.font.py, line 205:\n    size = []';
		$m.__track_lines__[206] = 'pyjsdl.font.py, line 206:\n    for char in text:';
		$m.__track_lines__[207] = 'pyjsdl.font.py, line 207:\n    try:';
		$m.__track_lines__[208] = 'pyjsdl.font.py, line 208:\n    size.append(self.char_size[char] * self.fontsize)';
		$m.__track_lines__[210] = "pyjsdl.font.py, line 210:\n    size.append(self.char_size['x'] * self.fontsize)";
		$m.__track_lines__[211] = 'pyjsdl.font.py, line 211:\n    x = math.ceil( sum(size) )';
		$m.__track_lines__[212] = 'pyjsdl.font.py, line 212:\n    return x';
		$m.__track_lines__[214] = 'pyjsdl.font.py, line 214:\n    def set_underline(self, setting=True):';
		$m.__track_lines__[219] = 'pyjsdl.font.py, line 219:\n    self.underline = setting';
		$m.__track_lines__[221] = 'pyjsdl.font.py, line 221:\n    def get_underline(self):';
		$m.__track_lines__[225] = 'pyjsdl.font.py, line 225:\n    return self.underline';
		$m.__track_lines__[227] = 'pyjsdl.font.py, line 227:\n    def set_bold(self, setting=True):';
		$m.__track_lines__[232] = "pyjsdl.font.py, line 232:\n    self.bold = {True:'bold', False:''}[setting]";
		$m.__track_lines__[233] = "pyjsdl.font.py, line 233:\n    self.fontstyle = self.bold + ' ' + self.italic";
		$m.__track_lines__[235] = 'pyjsdl.font.py, line 235:\n    def get_bold(self):';
		$m.__track_lines__[239] = 'pyjsdl.font.py, line 239:\n    if self.bold:';
		$m.__track_lines__[240] = 'pyjsdl.font.py, line 240:\n    return True';
		$m.__track_lines__[242] = 'pyjsdl.font.py, line 242:\n    return False';
		$m.__track_lines__[244] = 'pyjsdl.font.py, line 244:\n    def set_italic(self, setting=True):';
		$m.__track_lines__[249] = "pyjsdl.font.py, line 249:\n    self.italic = {True:'italic', False:''}[setting]";
		$m.__track_lines__[250] = "pyjsdl.font.py, line 250:\n    self.fontstyle = self.bold + ' ' + self.italic";
		$m.__track_lines__[252] = 'pyjsdl.font.py, line 252:\n    def get_italic(self):';
		$m.__track_lines__[256] = 'pyjsdl.font.py, line 256:\n    if self.italic:';
		$m.__track_lines__[257] = 'pyjsdl.font.py, line 257:\n    return True';
		$m.__track_lines__[259] = 'pyjsdl.font.py, line 259:\n    return False';
		$m.__track_lines__[261] = 'pyjsdl.font.py, line 261:\n    def get_linesize(self):';
		$m.__track_lines__[265] = 'pyjsdl.font.py, line 265:\n    return int(self.fontsize*1.2)';
		$m.__track_lines__[267] = 'pyjsdl.font.py, line 267:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[271] = 'pyjsdl.font.py, line 271:\n    self.metrics = lambda *arg: []';
		$m.__track_lines__[272] = 'pyjsdl.font.py, line 272:\n    self.get_height = lambda *arg: 0';
		$m.__track_lines__[273] = 'pyjsdl.font.py, line 273:\n    self.get_ascent = lambda *arg: 0';
		$m.__track_lines__[274] = 'pyjsdl.font.py, line 274:\n    self.get_descent = lambda *arg: 0';
		$m.__track_lines__[276] = 'pyjsdl.font.py, line 276:\n    def _get_char_size(self, font=None):    #for browsers HTML5Canvas not implemented';
		$m.__track_lines__[277] = 'pyjsdl.font.py, line 277:\n    if not font:';
		$m.__track_lines__[278] = 'pyjsdl.font.py, line 278:\n    return {\'a\': 0.6, \'b\': 0.6, \'c\': 0.5, \'d\': 0.6, \'e\': 0.6, \'f\': 0.3, \'g\': 0.6, \'h\': 0.6, \'i\': 0.2, \'j\': 0.2, \'k\': 0.5, \'l\': 0.2, \'m\': 0.8, \'n\': 0.6, \'o\': 0.6, \'p\': 0.6, \'q\': 0.6, \'r\': 0.3, \'s\': 0.5, \'t\': 0.3, \'u\': 0.6, \'v\': 0.5, \'w\': 0.7, \'x\': 0.5, \'y\': 0.5, \'z\': 0.5, \'A\': 0.7, \'B\': 0.7, \'C\': 0.7, \'D\': 0.7, \'E\': 0.7, \'F\': 0.6, \'G\': 0.8, \'H\': 0.7, \'I\': 0.3, \'J\': 0.5, \'K\': 0.7, \'L\': 0.6, \'M\': 0.8, \'N\': 0.7, \'O\': 0.8, \'P\': 0.7, \'Q\': 0.8, \'R\': 0.7, \'S\': 0.7, \'T\': 0.6, \'U\': 0.7, \'V\': 0.7, \'W\': 0.9, \'X\': 0.7, \'Y\': 0.7, \'Z\': 0.6, \'0\': 0.6, \'1\': 0.6, \'2\': 0.6, \'3\': 0.6, \'4\': 0.6, \'5\': 0.6, \'6\': 0.6, \'7\': 0.6, \'8\': 0.6, \'9\': 0.6, \'.\': 0.3, \',\': 0.3, \':\': 0.3, \';\': 0.3, \'?\': 0.6, \'~\': 0.6, \'!\': 0.3, \'@\': 1, \'#\': 0.6, \'$\': 0.6, \'%\': 0.9, \'^\': 0.5, \'&\': 0.7, \'=\': 0.6, \'+\': 0.6, \'-\': 0.3, \'*\': 0.4, \'/\': 0.3, \'\\\\\': 0.3, \'_\': 0.6, \'<\': 0.6, \'>\': 0.6, \'(\': 0.3, \')\': 0.3, \'{\': 0.3, \'}\': 0.3, \'[\': 0.3, \']\': 0.3, "\'": 0.2, \'"\': 0.4, \' \': 0.3}';
		$m.__track_lines__[280] = 'pyjsdl.font.py, line 280:\n    fontsize = 10';
		$m.__track_lines__[281] = "pyjsdl.font.py, line 281:\n    _surf.setFont('%dpx %s' % (fontsize, font))     #generated font='arial'";
		$m.__track_lines__[282] = 'pyjsdl.font.py, line 282:\n    char_size = {}';
		$m.__track_lines__[283] = 'pyjsdl.font.py, line 283:\n    for char in \'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]\\\'\\" \':';
		$m.__track_lines__[284] = 'pyjsdl.font.py, line 284:\n    char_size[char] = float(_surf.measureText(char)/fontsize)';
		$m.__track_lines__[285] = 'pyjsdl.font.py, line 285:\n    return char_size';
		$m.__track_lines__[288] = 'pyjsdl.font.py, line 288:\n    class SysFont(Font):';
		$m.__track_lines__[295] = 'pyjsdl.font.py, line 295:\n    def __init__(self, name, size, bold=False, italic=False):';
		$m.__track_lines__[300] = 'pyjsdl.font.py, line 300:\n    Font.__init__(self,name,size)';
		$m.__track_lines__[301] = "pyjsdl.font.py, line 301:\n    self.bold = {True:'bold', False:''}[bold]";
		$m.__track_lines__[302] = "pyjsdl.font.py, line 302:\n    self.italic = {True:'italic', False:''}[bold]";
		$m.__track_lines__[303] = "pyjsdl.font.py, line 303:\n    self.fontstyle = self.bold + ' ' + self.italic";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_11 = new $p['int'](11);
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_13 = new $p['int'](13);
		var $constant_int_14 = new $p['int'](14);
		var $constant_int_15 = new $p['int'](15);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_17 = new $p['int'](17);
		var $constant_int_18 = new $p['int'](18);
		var $constant_int_19 = new $p['int'](19);
		var $constant_int_20 = new $p['int'](20);
		var $constant_int_21 = new $p['int'](21);
		var $constant_int_22 = new $p['int'](22);
		var $constant_int_23 = new $p['int'](23);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_25 = new $p['int'](25);
		var $constant_int_26 = new $p['int'](26);
		var $constant_int_27 = new $p['int'](27);
		var $constant_int_28 = new $p['int'](28);
		var $constant_int_29 = new $p['int'](29);
		var $constant_int_30 = new $p['int'](30);
		$pyjs['track']['module']='pyjsdl.font';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['math'] = $p['___import___']('math', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HTML5Canvas'] = $p['___import___']('pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=13;
		$m['_initialized'] = false;
		$pyjs['track']['lineno']=14;
		$m['_surf'] = null;
		$pyjs['track']['lineno']=17;
		$m['init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $pyjs_try_err;
			$pyjs['track']={'module':'pyjsdl.font','lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=24;
			if ($p['bool']($m['_initialized'])) {
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=25;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=26;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				$pyjs['track']['lineno']=27;
				$m['_surf'] = $m['HTML5Canvas']($constant_int_1, $constant_int_1);
				$pyjs['track']['lineno']=28;
				$m['_surf']['measureText']('x');
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
				$pyjs['track']['module']='pyjsdl.font';
				if (true) {
					$pyjs['track']['lineno']=30;
					$m['_surf'] = null;
				}
			}
			$pyjs['track']['lineno']=31;
			$m['_initialized'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['init']['__name__'] = 'init';

		$m['init']['__bind_type__'] = 0;
		$m['init']['__args__'] = [null,null];
		$pyjs['track']['lineno']=32;
		$m['init']();
		$pyjs['track']['lineno']=35;
		$m['quit'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			$m['_surf'] = null;
			$pyjs['track']['lineno']=43;
			$m['_initialized'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['quit']['__name__'] = 'quit';

		$m['quit']['__bind_type__'] = 0;
		$m['quit']['__args__'] = [null,null];
		$pyjs['track']['lineno']=46;
		$m['get_init'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=52;
			var $pyjs__ret = $m['_initialized'];
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_init']['__name__'] = 'get_init';

		$m['get_init']['__bind_type__'] = 0;
		$m['get_init']['__args__'] = [null,null];
		$pyjs['track']['lineno']=55;
		$m['get_default_font'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=61;
			var $pyjs__ret = $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__']($constant_int_0);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_default_font']['__name__'] = 'get_default_font';

		$m['get_default_font']['__bind_type__'] = 0;
		$m['get_default_font']['__args__'] = [null,null];
		$pyjs['track']['lineno']=64;
		$m['get_fonts'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.font','lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=70;
			$pyjs['track']['lineno']=70;
			var $pyjs__ret = $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['get_fonts']['__name__'] = 'get_fonts';

		$m['get_fonts']['__bind_type__'] = 0;
		$m['get_fonts']['__args__'] = [null,null];
		$pyjs['track']['lineno']=73;
		$m['match_font'] = function(name) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter3_array,i,$iter3_nextval,$iter3_type,$iter2_idx,$iter3_idx,fn,$pyjs__trackstack_size_1,fallback,font,f,$iter2_array,$iter3_iter;
			$pyjs['track']={'module':'pyjsdl.font','lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=80;
			fallback = false;
			$pyjs['track']['lineno']=81;
			font = function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,fn,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = name['$$split'](',');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				fn = $iter1_nextval['$nextval'];
				$collcomp1['append'](fn['strip']()['lower']());
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.font';

	return $collcomp1;}();
			$pyjs['track']['lineno']=82;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = $p['enumerate'](font);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				fn = $tupleassign1[1];
				$pyjs['track']['lineno']=83;
				if ($p['bool']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__contains__'](fn))) {
					$pyjs['track']['lineno']=84;
					fallback = true;
					$pyjs['track']['lineno']=85;
					continue;
				}
				else {
					$pyjs['track']['lineno']=87;
					f = ''['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
						var $generator = function () {};
						$generator['next'] = function (noStop) {
						
							var $res;
							$yield_value = $exc = null;
							try {
								$res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res == 'undefined') {
									if (noStop === true) {
										$generator_state[0] = -1;
										return;
									}
									throw $p['StopIteration']();
								}
							} catch (e) {
						
								$is_executing=false;
								$generator_state[0] = -1;
								if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
									return;
								}
								throw e;
							}
							return $res;
						};
						$generator['__iter__'] = function () {return $generator;};
						$generator['send'] = function ($val) {
						
							$yield_value = $val;
							$exc = null;
							try {
								var $res = $generator['$genfunc']();
								if (typeof $res == 'undefined') throw $p['StopIteration']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw e;
							}
							$is_executing=false;
							return $res;
						};
						$generator['$$throw'] = function ($exc_type, $exc_value) {
						
							$yield_value = null;
							$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																	($p['isinstance']($exc_value, $exc_type)
																	 ? $exc_value : $exc_type($exc_value)));
							try {
								var $res = $generator['$genfunc']();
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								throw (e);
							}
							$is_executing=false;
							return $res;
						};
						$generator['close'] = function () {
						
							$yield_value = null;
							$exc=$p['GeneratorExit']();
							try {
								var $res = $generator['$genfunc']();
								$is_executing=false;
								if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
							} catch (e) {
						
								$generator_state[0] = -1;
								$is_executing=false;
								if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
								throw (e);
							}
							return null;
						};
						$generator['$genfunc'] = function () {
							var $yielding = false;
							if ($is_executing) throw $p['ValueError']('generator already executing');
							$is_executing = true;
						
						if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
							for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[0] = -1;
								throw $exc;
							}
							$iter3_iter = fn;
							$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
							$generator_state[0]=1;
						}
						if ($generator_state[0] == 1) {
							$generator_state[1] = 0;
							$generator_state[0]=2;
						}
						if ($generator_state[0] == 2) {
							for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
								if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
									for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
									c = $iter3_nextval['$nextval'];
									$generator_state[3] = 0;
									$generator_state[1]=1;
								}
								if ($generator_state[1] == 1) {
									if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](c['isalnum']())))) {
										$generator_state[2]=1;
										if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
											for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
											$yield_value = c;
											$yielding = true;
											$generator_state[3] = 1;
											return $yield_value;
											$generator_state[3]=1;
										}
										if ($generator_state[3] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[3] = -1;
												throw $exc;
											}
											$generator_state[3]=2;
										}
										if ($generator_state[3] == 2) {
										}
									}
									$generator_state[2]=0;
									$generator_state[1]=2;
								}
								if ($generator_state[1] == 2) {
								}
							}
							$generator_state[0]=3;
						}
						if ($generator_state[0] == 3) {
							$generator_state[0]=4;
						}
						if ($generator_state[0] == 4) {
						}

							return;
						};
						return $generator;
					}()
);
					$pyjs['track']['lineno']=88;
					if ($p['bool']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font_alt')['__contains__'](f))) {
						$pyjs['track']['lineno']=89;
						font['__setitem__'](i, $p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font_alt')['__getitem__'](f)));
						$pyjs['track']['lineno']=90;
						fallback = true;
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.font';
			$pyjs['track']['lineno']=91;
			if ($p['bool'](!$p['bool'](fallback))) {
				$pyjs['track']['lineno']=92;
				font['append']($p['getattr']((typeof Font == "undefined"?$m['Font']:Font), '_font')['__getitem__']($constant_int_0));
			}
			$pyjs['track']['lineno']=93;
			font = ','['join'](font);
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=94;
			var $pyjs__ret = font;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['match_font']['__name__'] = 'match_font';

		$m['match_font']['__bind_type__'] = 0;
		$m['match_font']['__args__'] = [null,null,['name']];
		$pyjs['track']['lineno']=97;
		$m['Font'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.font';
			$cls_definition['__md5__'] = '272875f289ac0831e5f6ca65c57a0923';
			$pyjs['track']['lineno']=112;
			$cls_definition['_font'] = $p['list'](['arial', 'bitstream vera sans', 'bitstream vera serif', 'book antiqua', 'comic sans ms', 'courier new', 'courier', 'dejavu sans', 'dejavu sans mono', 'dejavu serif', 'freesans', 'garamond', 'georgia', 'helvetica', 'impact', 'liberation sans', 'liberation serif', 'lucida console', 'lucida serif', 'nimbus mono l', 'nimbus roman no9 l', 'nimbus sans l', 'palatino', 'times new roman', 'times', 'tahoma', 'verdana', 'cursive', 'monospace', 'sans-serif', 'serif']);
			$pyjs['track']['lineno']=114;
			$cls_definition['_font_alt'] = $p['dict']([['arial', $constant_int_0], ['bitstreamverasans', $constant_int_1], ['bitstreamveraserif', $constant_int_2], ['bookantiqua', $constant_int_3], ['comicsansms', $constant_int_4], ['couriernew', $constant_int_5], ['courier', $constant_int_6], ['dejavusans', $constant_int_7], ['dejavusansmono', $constant_int_8], ['dejavuserif', $constant_int_9], ['freesans', $constant_int_10], ['garamond', $constant_int_11], ['georgia', $constant_int_12], ['helvetica', $constant_int_13], ['impact', $constant_int_14], ['liberationsans', $constant_int_15], ['liberationserif', $constant_int_16], ['lucidaconsole', $constant_int_17], ['lucidaserif', $constant_int_18], ['nimbusmonol', $constant_int_19], ['nimbusromanno9l', $constant_int_20], ['nimbussansl', $constant_int_21], ['palatino', $constant_int_22], ['timesnewroman', $constant_int_23], ['times', $constant_int_24], ['tahoma', $constant_int_25], ['verdana', $constant_int_26], ['cursive', $constant_int_27], ['monospace', $constant_int_28], ['sansserif', $constant_int_29], ['serif', $constant_int_30]]);
			$pyjs['track']['lineno']=116;
			$cls_definition['_font_family'] = $p['list']([$p['list'](['arial', 'helvetica', 'liberation sans', 'nimbus sans l', 'freesans', 'tahoma', 'sans-serif']), $p['list'](['verdana', 'bitstream vera sans', 'dejavu sans', 'sans-serif']), $p['list'](['impact', 'sans-serif']), $p['list'](['comic sans ms', 'cursive', 'sans-serif']), $p['list'](['courier new', 'courier', 'lucida console', 'dejavu sans mono', 'monospace']), $p['list'](['times new roman', 'times', 'liberation serif', 'nimbus roman no9 l', 'serif']), $p['list'](['garamond', 'book antiqua', 'palatino', 'liberation serif', 'nimbus roman no9 l', 'serif']), $p['list'](['georgia', 'bitstream vera serif', 'lucida serif', 'liberation serif', 'dejavu serif', 'serif'])]);
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('__init__', function(name, size) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					size = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter6_type,$iter5_array,$iter8_iter,$iter5_iter,$iter5_type,$iter6_iter,font,$iter6_nextval,$iter5_idx,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$iter8_nextval,ff,$iter7_idx,fn,c,$iter7_type,$iter7_nextval,f,i,$iter7_array,$iter8_array,$add2,$add3,$add1,$add4,$pyjs__trackstack_size_1,fallback;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=123;
				if ($p['bool'](!$p['bool'](name))) {
					$pyjs['track']['lineno']=124;
					name = $p['getattr']($m['Font'], '_font')['__getitem__']($constant_int_0);
				}
				$pyjs['track']['lineno']=125;
				font = function(){
					var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,fn;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = name['$$split'](',');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					fn = $iter4_nextval['$nextval'];
					$collcomp2['append'](fn['strip']()['lower']());
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.font';

	return $collcomp2;}();
				$pyjs['track']['lineno']=126;
				fallback = null;
				$pyjs['track']['lineno']=127;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['enumerate'](font);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
					i = $tupleassign2[0];
					fn = $tupleassign2[1];
					$pyjs['track']['lineno']=128;
					if ($p['bool']($p['getattr']($m['Font'], '_font')['__contains__'](fn))) {
						$pyjs['track']['lineno']=129;
						if ($p['bool'](!$p['bool'](fallback))) {
							$pyjs['track']['lineno']=130;
							fallback = fn;
						}
					}
					else {
						$pyjs['track']['lineno']=132;
						f = ''['join'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
							var $generator = function () {};
							$generator['next'] = function (noStop) {
							
								var $res;
								$yield_value = $exc = null;
								try {
									$res = $generator['$genfunc']();
									$is_executing=false;
									if (typeof $res == 'undefined') {
										if (noStop === true) {
											$generator_state[0] = -1;
											return;
										}
										throw $p['StopIteration']();
									}
								} catch (e) {
							
									$is_executing=false;
									$generator_state[0] = -1;
									if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
										return;
									}
									throw e;
								}
								return $res;
							};
							$generator['__iter__'] = function () {return $generator;};
							$generator['send'] = function ($val) {
							
								$yield_value = $val;
								$exc = null;
								try {
									var $res = $generator['$genfunc']();
									if (typeof $res == 'undefined') throw $p['StopIteration']();
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									throw e;
								}
								$is_executing=false;
								return $res;
							};
							$generator['$$throw'] = function ($exc_type, $exc_value) {
							
								$yield_value = null;
								$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																		($p['isinstance']($exc_value, $exc_type)
																		 ? $exc_value : $exc_type($exc_value)));
								try {
									var $res = $generator['$genfunc']();
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									throw (e);
								}
								$is_executing=false;
								return $res;
							};
							$generator['close'] = function () {
							
								$yield_value = null;
								$exc=$p['GeneratorExit']();
								try {
									var $res = $generator['$genfunc']();
									$is_executing=false;
									if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
								} catch (e) {
							
									$generator_state[0] = -1;
									$is_executing=false;
									if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
									throw (e);
								}
								return null;
							};
							$generator['$genfunc'] = function () {
								var $yielding = false;
								if ($is_executing) throw $p['ValueError']('generator already executing');
								$is_executing = true;
							
							if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
								for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[0] = -1;
									throw $exc;
								}
								$iter6_iter = fn;
								$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
								$generator_state[0]=1;
							}
							if ($generator_state[0] == 1) {
								$generator_state[1] = 0;
								$generator_state[0]=2;
							}
							if ($generator_state[0] == 2) {
								for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
									if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
										for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
										c = $iter6_nextval['$nextval'];
										$generator_state[3] = 0;
										$generator_state[1]=1;
									}
									if ($generator_state[1] == 1) {
										if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](c['isalnum']())))) {
											$generator_state[2]=1;
											if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
												for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
												$yield_value = c;
												$yielding = true;
												$generator_state[3] = 1;
												return $yield_value;
												$generator_state[3]=1;
											}
											if ($generator_state[3] == 1) {
												if (typeof $exc != 'undefined' && $exc !== null) {
													$yielding = null;
													$generator_state[3] = -1;
													throw $exc;
												}
												$generator_state[3]=2;
											}
											if ($generator_state[3] == 2) {
											}
										}
										$generator_state[2]=0;
										$generator_state[1]=2;
									}
									if ($generator_state[1] == 2) {
									}
								}
								$generator_state[0]=3;
							}
							if ($generator_state[0] == 3) {
								$generator_state[0]=4;
							}
							if ($generator_state[0] == 4) {
							}

								return;
							};
							return $generator;
						}()
);
						$pyjs['track']['lineno']=133;
						if ($p['bool']($p['getattr']($m['Font'], '_font_alt')['__contains__'](f))) {
							$pyjs['track']['lineno']=134;
							font['__setitem__'](i, $p['getattr']($m['Font'], '_font')['__getitem__']($p['getattr']($m['Font'], '_font_alt')['__getitem__'](f)));
							$pyjs['track']['lineno']=135;
							if ($p['bool'](!$p['bool'](fallback))) {
								$pyjs['track']['lineno']=136;
								fallback = font['__getitem__'](i);
							}
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=137;
				if ($p['bool'](fallback)) {
					$pyjs['track']['lineno']=138;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = $p['getattr']($m['Font'], '_font_family');
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						ff = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=139;
						if ($p['bool'](ff['__contains__'](fallback))) {
							$pyjs['track']['lineno']=140;
							font['extend'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
								var $generator = function () {};
								$generator['next'] = function (noStop) {
								
									var $res;
									$yield_value = $exc = null;
									try {
										$res = $generator['$genfunc']();
										$is_executing=false;
										if (typeof $res == 'undefined') {
											if (noStop === true) {
												$generator_state[0] = -1;
												return;
											}
											throw $p['StopIteration']();
										}
									} catch (e) {
								
										$is_executing=false;
										$generator_state[0] = -1;
										if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
											return;
										}
										throw e;
									}
									return $res;
								};
								$generator['__iter__'] = function () {return $generator;};
								$generator['send'] = function ($val) {
								
									$yield_value = $val;
									$exc = null;
									try {
										var $res = $generator['$genfunc']();
										if (typeof $res == 'undefined') throw $p['StopIteration']();
									} catch (e) {
								
										$generator_state[0] = -1;
										$is_executing=false;
										throw e;
									}
									$is_executing=false;
									return $res;
								};
								$generator['$$throw'] = function ($exc_type, $exc_value) {
								
									$yield_value = null;
									$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																			($p['isinstance']($exc_value, $exc_type)
																			 ? $exc_value : $exc_type($exc_value)));
									try {
										var $res = $generator['$genfunc']();
									} catch (e) {
								
										$generator_state[0] = -1;
										$is_executing=false;
										throw (e);
									}
									$is_executing=false;
									return $res;
								};
								$generator['close'] = function () {
								
									$yield_value = null;
									$exc=$p['GeneratorExit']();
									try {
										var $res = $generator['$genfunc']();
										$is_executing=false;
										if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
									} catch (e) {
								
										$generator_state[0] = -1;
										$is_executing=false;
										if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
										throw (e);
									}
									return null;
								};
								$generator['$genfunc'] = function () {
									var $yielding = false;
									if ($is_executing) throw $p['ValueError']('generator already executing');
									$is_executing = true;
								
								if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
									for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[0] = -1;
										throw $exc;
									}
									$iter8_iter = ff;
									$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
									$generator_state[0]=1;
								}
								if ($generator_state[0] == 1) {
									$generator_state[1] = 0;
									$generator_state[0]=2;
								}
								if ($generator_state[0] == 2) {
									for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
										if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
											for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
											f = $iter8_nextval['$nextval'];
											$generator_state[3] = 0;
											$generator_state[1]=1;
										}
										if ($generator_state[1] == 1) {
											if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool'](!font['__contains__'](f))))) {
												$generator_state[2]=1;
												if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
													for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
													$yield_value = f;
													$yielding = true;
													$generator_state[3] = 1;
													return $yield_value;
													$generator_state[3]=1;
												}
												if ($generator_state[3] == 1) {
													if (typeof $exc != 'undefined' && $exc !== null) {
														$yielding = null;
														$generator_state[3] = -1;
														throw $exc;
													}
													$generator_state[3]=2;
												}
												if ($generator_state[3] == 2) {
												}
											}
											$generator_state[2]=0;
											$generator_state[1]=2;
										}
										if ($generator_state[1] == 2) {
										}
									}
									$generator_state[0]=3;
								}
								if ($generator_state[0] == 3) {
									$generator_state[0]=4;
								}
								if ($generator_state[0] == 4) {
								}

									return;
								};
								return $generator;
							}()
);
							$pyjs['track']['lineno']=141;
							break;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.font';
				}
				else {
					$pyjs['track']['lineno']=143;
					font['extend']($p['getattr']($m['Font'], '_font_family')['__getitem__']($constant_int_0));
				}
				$pyjs['track']['lineno']=144;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontname', ','['join'](font)) : $p['setattr'](self, 'fontname', ','['join'](font)); 
				$pyjs['track']['lineno']=145;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontsize', size) : $p['setattr'](self, 'fontsize', size); 
				$pyjs['track']['lineno']=146;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bold', '') : $p['setattr'](self, 'bold', ''); 
				$pyjs['track']['lineno']=147;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('italic', '') : $p['setattr'](self, 'italic', ''); 
				$pyjs['track']['lineno']=148;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add3=$p['__op_add']($add1=$p['getattr'](self, 'bold'),$add2=' '),$add4=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add3=$p['__op_add']($add1=$p['getattr'](self, 'bold'),$add2=' '),$add4=$p['getattr'](self, 'italic'))); 
				$pyjs['track']['lineno']=149;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('underline', false) : $p['setattr'](self, 'underline', false); 
				$pyjs['track']['lineno']=150;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('char_size', null) : $p['setattr'](self, 'char_size', null); 
				$pyjs['track']['lineno']=151;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['name'],['size']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=153;
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
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':153};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=153;
				$pyjs['track']['lineno']=157;
				$pyjs['track']['lineno']=157;
				var $pyjs__ret = $p['sprintf']('%s(%r)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, '__dict__')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=159;
			$method = $pyjs__bind_method2('render', function(text, antialias, color, background, surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					antialias = arguments[2];
					color = arguments[3];
					background = arguments[4];
					surface = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof antialias == 'undefined') antialias=arguments['callee']['__args__'][4][1];
				if (typeof color == 'undefined') color=arguments['callee']['__args__'][5][1];
				if (typeof background == 'undefined') background=arguments['callee']['__args__'][6][1];
				if (typeof surface == 'undefined') surface=arguments['callee']['__args__'][7][1];
				var surf,w,h,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':159};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=164;
				if ($p['bool'](!$p['bool'](surface))) {
					$pyjs['track']['lineno']=165;
					var $tupleassign3 = $p['__ass_unpack'](self['size'](text), 2, null);
					w = $tupleassign3[0];
					h = $tupleassign3[1];
					$pyjs['track']['lineno']=166;
					surf = $m['Surface']($p['tuple']([w, h]));
				}
				else {
					$pyjs['track']['lineno']=168;
					surf = surface;
					$pyjs['track']['lineno']=169;
					var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['getattr'](surface, 'width'), $p['getattr'](surface, 'height')]), 2, null);
					w = $tupleassign4[0];
					h = $tupleassign4[1];
				}
				$pyjs['track']['lineno']=170;
				if ($p['bool'](background)) {
					$pyjs['track']['lineno']=171;
					surf['setFillStyle']($m['Color'](background));
					$pyjs['track']['lineno']=172;
					surf['fillRect']($constant_int_0, $constant_int_0, w, h);
				}
				$pyjs['track']['lineno']=173;
				surf['setFont']($p['sprintf']('%s %dpx %s', $p['tuple']([$p['getattr'](self, 'fontstyle'), $p['getattr'](self, 'fontsize'), $p['getattr'](self, 'fontname')])));
				$pyjs['track']['lineno']=175;
				surf['setFillStyle']($m['Color'](color));
				$pyjs['track']['lineno']=176;
				surf['fillText'](text, $constant_int_0, $p['getattr'](self, 'fontsize'));
				$pyjs['track']['lineno']=177;
				if ($p['bool']($p['getattr'](self, 'underline'))) {
					$pyjs['track']['lineno']=178;
					surf['setLineWidth']($constant_int_1);
					$pyjs['track']['lineno']=179;
					surf['setStrokeStyle']($m['Color'](color));
					$pyjs['track']['lineno']=180;
					surf['setStroke']((typeof BasicStroke == "undefined"?$m['BasicStroke']:BasicStroke)($constant_int_1));
					$pyjs['track']['lineno']=181;
					surf['moveTo']($constant_int_0, $p['__op_sub']($sub1=h,$sub2=$constant_int_1));
					$pyjs['track']['lineno']=182;
					surf['lineTo']($p['__op_sub']($sub3=w,$sub4=$constant_int_1), $p['__op_sub']($sub5=h,$sub6=$constant_int_1));
					$pyjs['track']['lineno']=183;
					surf['stroke']();
				}
				$pyjs['track']['lineno']=184;
				$pyjs['track']['lineno']=184;
				var $pyjs__ret = surf;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text'],['antialias', true],['color', $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0])],['background', null],['surface', null]]);
			$cls_definition['render'] = $method;
			$pyjs['track']['lineno']=186;
			$method = $pyjs__bind_method2('size', function(text) {
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
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add6,$add5,y,x;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':186};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=186;
				$pyjs['track']['lineno']=190;
				if ($p['bool']($m['_surf'])) {
					$pyjs['track']['lineno']=191;
					$m['_surf']['setFont']($p['sprintf']('%s %dpx %s', $p['tuple']([$p['getattr'](self, 'fontstyle'), $p['getattr'](self, 'fontsize'), $p['getattr'](self, 'fontname')])));
					$pyjs['track']['lineno']=192;
					x = $m['_surf']['measureText'](text);
				}
				else {
					$pyjs['track']['lineno']=194;
					x = self['_size_estimate'](text);
				}
				$pyjs['track']['lineno']=195;
				if ($p['bool'](($p['cmp'](x, $constant_int_1) == -1))) {
					$pyjs['track']['lineno']=196;
					x = $constant_int_1;
				}
				$pyjs['track']['lineno']=197;
				y = $p['__op_add']($add5=$p['getattr'](self, 'fontsize'),$add6=$constant_int_5);
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=198;
				var $pyjs__ret = $p['tuple']([x, y]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['size'] = $method;
			$pyjs['track']['lineno']=200;
			$method = $pyjs__bind_method2('_size_estimate', function(text) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					text = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];
				var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,$$char,$pyjs_try_err,$mul2,$pyjs__trackstack_size_1,x,$mul4,$mul3,$iter9_type,$mul1,size;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=201;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'char_size')))) {
					$pyjs['track']['lineno']=202;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('char_size', self['_get_char_size']()) : $p['setattr'](self, 'char_size', self['_get_char_size']()); 
				}
				$pyjs['track']['lineno']=203;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontname', ','['join']($p['getattr']($m['Font'], '_font_family')['__getitem__']($constant_int_0))) : $p['setattr'](self, 'fontname', ','['join']($p['getattr']($m['Font'], '_font_family')['__getitem__']($constant_int_0))); 
				$pyjs['track']['lineno']=204;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', '') : $p['setattr'](self, 'fontstyle', ''); 
				$pyjs['track']['lineno']=205;
				size = $p['list']([]);
				$pyjs['track']['lineno']=206;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = text;
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					$$char = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=207;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=208;
						size['append']((typeof ($mul1=$p['getattr'](self, 'char_size')['__getitem__']($$char))==typeof ($mul2=$p['getattr'](self, 'fontsize')) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2)));
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
						$pyjs['track']['module']='pyjsdl.font';
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							$pyjs['track']['lineno']=210;
							size['append']((typeof ($mul3=$p['getattr'](self, 'char_size')['__getitem__']('x'))==typeof ($mul4=$p['getattr'](self, 'fontsize')) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4)));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=211;
				x = $m['math']['ceil']($p['sum'](size));
				$pyjs['track']['lineno']=212;
				$pyjs['track']['lineno']=212;
				var $pyjs__ret = x;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text', null]]);
			$cls_definition['_size_estimate'] = $method;
			$pyjs['track']['lineno']=214;
			$method = $pyjs__bind_method2('set_underline', function(setting) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setting = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':214};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=214;
				$pyjs['track']['lineno']=219;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('underline', setting) : $p['setattr'](self, 'underline', setting); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['setting', true]]);
			$cls_definition['set_underline'] = $method;
			$pyjs['track']['lineno']=221;
			$method = $pyjs__bind_method2('get_underline', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':221};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=221;
				$pyjs['track']['lineno']=225;
				$pyjs['track']['lineno']=225;
				var $pyjs__ret = $p['getattr'](self, 'underline');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_underline'] = $method;
			$pyjs['track']['lineno']=227;
			$method = $pyjs__bind_method2('set_bold', function(setting) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setting = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
				var $add10,$add7,$add8,$add9;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=227;
				$pyjs['track']['lineno']=232;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bold', $p['dict']([[true, 'bold'], [false, '']])['__getitem__'](setting)) : $p['setattr'](self, 'bold', $p['dict']([[true, 'bold'], [false, '']])['__getitem__'](setting)); 
				$pyjs['track']['lineno']=233;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add9=$p['__op_add']($add7=$p['getattr'](self, 'bold'),$add8=' '),$add10=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add9=$p['__op_add']($add7=$p['getattr'](self, 'bold'),$add8=' '),$add10=$p['getattr'](self, 'italic'))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['setting', true]]);
			$cls_definition['set_bold'] = $method;
			$pyjs['track']['lineno']=235;
			$method = $pyjs__bind_method2('get_bold', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':235};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=235;
				$pyjs['track']['lineno']=239;
				if ($p['bool']($p['getattr'](self, 'bold'))) {
					$pyjs['track']['lineno']=240;
					$pyjs['track']['lineno']=240;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=242;
					$pyjs['track']['lineno']=242;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_bold'] = $method;
			$pyjs['track']['lineno']=244;
			$method = $pyjs__bind_method2('set_italic', function(setting) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					setting = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
				var $add14,$add11,$add12,$add13;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':244};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=244;
				$pyjs['track']['lineno']=249;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('italic', $p['dict']([[true, 'italic'], [false, '']])['__getitem__'](setting)) : $p['setattr'](self, 'italic', $p['dict']([[true, 'italic'], [false, '']])['__getitem__'](setting)); 
				$pyjs['track']['lineno']=250;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add13=$p['__op_add']($add11=$p['getattr'](self, 'bold'),$add12=' '),$add14=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add13=$p['__op_add']($add11=$p['getattr'](self, 'bold'),$add12=' '),$add14=$p['getattr'](self, 'italic'))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['setting', true]]);
			$cls_definition['set_italic'] = $method;
			$pyjs['track']['lineno']=252;
			$method = $pyjs__bind_method2('get_italic', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.font', 'lineno':252};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=252;
				$pyjs['track']['lineno']=256;
				if ($p['bool']($p['getattr'](self, 'italic'))) {
					$pyjs['track']['lineno']=257;
					$pyjs['track']['lineno']=257;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=259;
					$pyjs['track']['lineno']=259;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_italic'] = $method;
			$pyjs['track']['lineno']=261;
			$method = $pyjs__bind_method2('get_linesize', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul6,$mul5;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':261};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=261;
				$pyjs['track']['lineno']=265;
				$pyjs['track']['lineno']=265;
				var $pyjs__ret = $p['int']((typeof ($mul5=$p['getattr'](self, 'fontsize'))==typeof ($mul6=1.2) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_linesize'] = $method;
			$pyjs['track']['lineno']=267;
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
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda4,$lambda3,$lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=267;
				$pyjs['track']['lineno']=271;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':271};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=271;
					$pyjs['track']['lineno']=271;
					$pyjs['track']['lineno']=271;
					var $pyjs__ret = $p['list']([]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('metrics', $lambda1) : $p['setattr'](self, 'metrics', $lambda1); 
				$pyjs['track']['lineno']=272;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':272};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=272;
					$pyjs['track']['lineno']=272;
					$pyjs['track']['lineno']=272;
					var $pyjs__ret = $constant_int_0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_height', $lambda2) : $p['setattr'](self, 'get_height', $lambda2); 
				$pyjs['track']['lineno']=273;
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':273};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=273;
					$pyjs['track']['lineno']=273;
					$pyjs['track']['lineno']=273;
					var $pyjs__ret = $constant_int_0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_ascent', $lambda3) : $p['setattr'](self, 'get_ascent', $lambda3); 
				$pyjs['track']['lineno']=274;
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.font','lineno':274};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=274;
					$pyjs['track']['lineno']=274;
					$pyjs['track']['lineno']=274;
					var $pyjs__ret = $constant_int_0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_descent', $lambda4) : $p['setattr'](self, 'get_descent', $lambda4); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=276;
			$method = $pyjs__bind_method2('_get_char_size', function(font) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					font = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '272875f289ac0831e5f6ca65c57a0923') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof font == 'undefined') font=arguments['callee']['__args__'][3][1];
				var char_size,$iter10_nextval,$iter10_array,$$char,$div2,fontsize,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx,$div1;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':276};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=276;
				$pyjs['track']['lineno']=277;
				if ($p['bool'](!$p['bool'](font))) {
					$pyjs['track']['lineno']=278;
					$pyjs['track']['lineno']=278;
					var $pyjs__ret = $p['dict']([['a', 0.6], ['b', 0.6], ['c', 0.5], ['d', 0.6], ['e', 0.6], ['f', 0.3], ['g', 0.6], ['h', 0.6], ['i', 0.2], ['j', 0.2], ['k', 0.5], ['l', 0.2], ['m', 0.8], ['n', 0.6], ['o', 0.6], ['p', 0.6], ['q', 0.6], ['r', 0.3], ['s', 0.5], ['t', 0.3], ['u', 0.6], ['v', 0.5], ['w', 0.7], ['x', 0.5], ['y', 0.5], ['z', 0.5], ['A', 0.7], ['B', 0.7], ['C', 0.7], ['D', 0.7], ['E', 0.7], ['F', 0.6], ['G', 0.8], ['H', 0.7], ['I', 0.3], ['J', 0.5], ['K', 0.7], ['L', 0.6], ['M', 0.8], ['N', 0.7], ['O', 0.8], ['P', 0.7], ['Q', 0.8], ['R', 0.7], ['S', 0.7], ['T', 0.6], ['U', 0.7], ['V', 0.7], ['W', 0.9], ['X', 0.7], ['Y', 0.7], ['Z', 0.6], ['0', 0.6], ['1', 0.6], ['2', 0.6], ['3', 0.6], ['4', 0.6], ['5', 0.6], ['6', 0.6], ['7', 0.6], ['8', 0.6], ['9', 0.6], ['.', 0.3], [',', 0.3], [':', 0.3], [';', 0.3], ['?', 0.6], ['~', 0.6], ['!', 0.3], ['@', $constant_int_1], ['#', 0.6], ['$', 0.6], ['%', 0.9], ['^', 0.5], ['&', 0.7], ['=', 0.6], ['+', 0.6], ['-', 0.3], ['*', 0.4], ['/', 0.3], ['\\', 0.3], ['_', 0.6], ['<', 0.6], ['>', 0.6], ['(', 0.3], [')', 0.3], ['{', 0.3], ['}', 0.3], ['[', 0.3], [']', 0.3], ["'", 0.2], ['"', 0.4], [' ', 0.3]]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=280;
					fontsize = $constant_int_10;
					$pyjs['track']['lineno']=281;
					$m['_surf']['setFont']($p['sprintf']('%dpx %s', $p['tuple']([fontsize, font])));
					$pyjs['track']['lineno']=282;
					char_size = $p['dict']([]);
					$pyjs['track']['lineno']=283;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter10_iter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;?~!@#$%^&=+-*/\\_<>(){}[]\'" ';
					$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
					while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
						$$char = $iter10_nextval['$nextval'];
						$pyjs['track']['lineno']=284;
						char_size['__setitem__']($$char, $p['float']((typeof ($div1=$m['_surf']['measureText']($$char))==typeof ($div2=fontsize) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2))));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.font';
					$pyjs['track']['lineno']=285;
					$pyjs['track']['lineno']=285;
					var $pyjs__ret = char_size;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['font', null]]);
			$cls_definition['_get_char_size'] = $method;
			$pyjs['track']['lineno']=97;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Font', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=288;
		$m['SysFont'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.font';
			$cls_definition['__md5__'] = 'a8f6ee7c2f638a7c6d26db2dacc8e0e8';
			$pyjs['track']['lineno']=295;
			$method = $pyjs__bind_method2('__init__', function(name, size, bold, italic) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					name = arguments[1];
					size = arguments[2];
					bold = arguments[3];
					italic = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a8f6ee7c2f638a7c6d26db2dacc8e0e8') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof bold == 'undefined') bold=arguments['callee']['__args__'][5][1];
				if (typeof italic == 'undefined') italic=arguments['callee']['__args__'][6][1];
				var $add15,$add16,$add17,$add18;
				$pyjs['track']={'module':'pyjsdl.font', 'lineno':295};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.font';
				$pyjs['track']['lineno']=295;
				$pyjs['track']['lineno']=300;
				$m['Font']['__init__'](self, name, size);
				$pyjs['track']['lineno']=301;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('bold', $p['dict']([[true, 'bold'], [false, '']])['__getitem__'](bold)) : $p['setattr'](self, 'bold', $p['dict']([[true, 'bold'], [false, '']])['__getitem__'](bold)); 
				$pyjs['track']['lineno']=302;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('italic', $p['dict']([[true, 'italic'], [false, '']])['__getitem__'](bold)) : $p['setattr'](self, 'italic', $p['dict']([[true, 'italic'], [false, '']])['__getitem__'](bold)); 
				$pyjs['track']['lineno']=303;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fontstyle', $p['__op_add']($add17=$p['__op_add']($add15=$p['getattr'](self, 'bold'),$add16=' '),$add18=$p['getattr'](self, 'italic'))) : $p['setattr'](self, 'fontstyle', $p['__op_add']($add17=$p['__op_add']($add15=$p['getattr'](self, 'bold'),$add16=' '),$add18=$p['getattr'](self, 'italic'))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['name'],['size'],['bold', false],['italic', false]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=288;
			var $bases = new Array($m['Font']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('SysFont', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.font */


/* end module: pyjsdl.font */


/*
PYJS_DEPS: ['surface.Surface', 'surface', 'math', 'color.Color', 'color', 'pyjsobj.HTML5Canvas', 'pyjsobj']
*/
