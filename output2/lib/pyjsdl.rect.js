/* start module: pyjsdl.rect */
$pyjs['loaded_modules']['pyjsdl.rect'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.rect']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.rect'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.rect'];
	$m['__repr__'] = function() { return '<module: pyjsdl.rect>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.rect';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['rect'] = $pyjs['loaded_modules']['pyjsdl.rect'];
	try {
		$m.__track_lines__[512] = 'pyjsdl.rect.py, line 512:\n    rect.width = r.width';
		$m.__track_lines__[1] = 'pyjsdl.rect.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[514] = 'pyjsdl.rect.py, line 514:\n    return rect';
		$m.__track_lines__[4] = "pyjsdl.rect.py, line 4:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[518] = 'pyjsdl.rect.py, line 518:\n    rectPool = RectPool()';
		$m.__track_lines__[7] = 'pyjsdl.rect.py, line 7:\n    class Rect(object):';
		$m.__track_lines__[516] = 'pyjsdl.rect.py, line 516:\n    return Rect(r.x, r.y, r.width, r.height)';
		$m.__track_lines__[32] = 'pyjsdl.rect.py, line 32:\n    _xy = {';
		$m.__track_lines__[33] = "pyjsdl.rect.py, line 33:\n    'center': lambda self,val: self.setLocation( val[0]-int(self.width/2), val[1]-int(self.height/2) ),";
		$m.__track_lines__[34] = "pyjsdl.rect.py, line 34:\n    'centerx': lambda self,val: self.setLocation( val-int(self.width/2), self.y ),";
		$m.__track_lines__[35] = "pyjsdl.rect.py, line 35:\n    'centery': lambda self,val: self.setLocation( self.x, val-int(self.height/2) ),";
		$m.__track_lines__[36] = "pyjsdl.rect.py, line 36:\n    'top': lambda self,val: self.setLocation( self.x, val ),";
		$m.__track_lines__[37] = "pyjsdl.rect.py, line 37:\n    'left': lambda self,val: self.setLocation( val, self.y ),";
		$m.__track_lines__[38] = "pyjsdl.rect.py, line 38:\n    'bottom': lambda self,val: self.setLocation( self.x, val-self.height ),";
		$m.__track_lines__[39] = "pyjsdl.rect.py, line 39:\n    'right': lambda self,val: self.setLocation( val-self.width, self.y ),";
		$m.__track_lines__[40] = "pyjsdl.rect.py, line 40:\n    'topleft': lambda self,val: self.setLocation( val[0], val[1] ),";
		$m.__track_lines__[41] = "pyjsdl.rect.py, line 41:\n    'bottomleft': lambda self,val: self.setLocation( val[0], val[1]-self.height ),";
		$m.__track_lines__[42] = "pyjsdl.rect.py, line 42:\n    'topright': lambda self,val: self.setLocation( val[0]-self.width, val[1] ),";
		$m.__track_lines__[43] = "pyjsdl.rect.py, line 43:\n    'bottomright': lambda self,val: self.setLocation( val[0]-self.width, val[1]-self.height ),";
		$m.__track_lines__[44] = "pyjsdl.rect.py, line 44:\n    'midtop': lambda self,val: self.setLocation( val[0]-int(self.width/2), val[1] ),";
		$m.__track_lines__[45] = "pyjsdl.rect.py, line 45:\n    'midleft': lambda self,val: self.setLocation( val[0], val[1]-int(self.height/2) ),";
		$m.__track_lines__[46] = "pyjsdl.rect.py, line 46:\n    'midbottom': lambda self,val: self.setLocation( val[0]-int(self.width/2), val[1]-self.height ),";
		$m.__track_lines__[47] = "pyjsdl.rect.py, line 47:\n    'midright': lambda self,val: self.setLocation( val[0]-self.width, val[1]-int(self.height/2) ),";
		$m.__track_lines__[48] = "pyjsdl.rect.py, line 48:\n    'size': lambda self,val: self.setSize( val[0], val[1] ),";
		$m.__track_lines__[49] = "pyjsdl.rect.py, line 49:\n    'width': lambda self,val: self.setSize( val, self.height ),";
		$m.__track_lines__[50] = "pyjsdl.rect.py, line 50:\n    'height':lambda self,val: self.setSize( self.width, val ),";
		$m.__track_lines__[51] = "pyjsdl.rect.py, line 51:\n    'w': lambda self,val: self.setSize( val, self.height ),";
		$m.__track_lines__[52] = "pyjsdl.rect.py, line 52:\n    'h': lambda self,val: self.setSize( self.width, val ),";
		$m.__track_lines__[53] = "pyjsdl.rect.py, line 53:\n    'x': lambda self,val: self.setLocation( val, self.y ),";
		$m.__track_lines__[54] = "pyjsdl.rect.py, line 54:\n    'y': lambda self,val: self.setLocation( self.x, val )";
		$m.__track_lines__[56] = 'pyjsdl.rect.py, line 56:\n    _at = {';
		$m.__track_lines__[57] = "pyjsdl.rect.py, line 57:\n    'center': lambda self: (self.x+int(self.width/2), self.y+int(self.height/2)),";
		$m.__track_lines__[58] = "pyjsdl.rect.py, line 58:\n    'centerx': lambda self: self.x+int(self.width/2),";
		$m.__track_lines__[59] = "pyjsdl.rect.py, line 59:\n    'centery': lambda self: self.y+int(self.height/2),";
		$m.__track_lines__[60] = "pyjsdl.rect.py, line 60:\n    'top': lambda self: self.y,";
		$m.__track_lines__[61] = "pyjsdl.rect.py, line 61:\n    'left': lambda self: self.x,";
		$m.__track_lines__[62] = "pyjsdl.rect.py, line 62:\n    'bottom': lambda self: self.y+self.height,";
		$m.__track_lines__[63] = "pyjsdl.rect.py, line 63:\n    'right': lambda self: self.x+self.width,";
		$m.__track_lines__[64] = "pyjsdl.rect.py, line 64:\n    'topleft': lambda self: (self.x, self.y),";
		$m.__track_lines__[65] = "pyjsdl.rect.py, line 65:\n    'bottomleft': lambda self: (self.x, self.y+self.height),";
		$m.__track_lines__[66] = "pyjsdl.rect.py, line 66:\n    'topright': lambda self: (self.x+self.width, self.y),";
		$m.__track_lines__[67] = "pyjsdl.rect.py, line 67:\n    'bottomright': lambda self: (self.x+self.width, self.y+self.height),";
		$m.__track_lines__[68] = "pyjsdl.rect.py, line 68:\n    'midtop': lambda self: (self.x+int(self.width/2), self.y),";
		$m.__track_lines__[69] = "pyjsdl.rect.py, line 69:\n    'midleft': lambda self: (self.x, self.y+int(self.height/2)),";
		$m.__track_lines__[70] = "pyjsdl.rect.py, line 70:\n    'midbottom': lambda self: (self.x+int(self.width/2), self.y+self.height),";
		$m.__track_lines__[71] = "pyjsdl.rect.py, line 71:\n    'midright': lambda self: (self.x+self.width, self.y+int(self.height/2)),";
		$m.__track_lines__[72] = "pyjsdl.rect.py, line 72:\n    'size': lambda self: (self.width, self.height),";
		$m.__track_lines__[73] = "pyjsdl.rect.py, line 73:\n    'w': lambda self: self.width,";
		$m.__track_lines__[74] = "pyjsdl.rect.py, line 74:\n    'h': lambda self: self.height";
		$m.__track_lines__[77] = 'pyjsdl.rect.py, line 77:\n    def __init__(self, *args):';
		$m.__track_lines__[101] = 'pyjsdl.rect.py, line 101:\n    if len(args) == 1:';
		$m.__track_lines__[102] = 'pyjsdl.rect.py, line 102:\n    arg = args[0]';
		$m.__track_lines__[104] = 'pyjsdl.rect.py, line 104:\n    arg = args';
		$m.__track_lines__[105] = 'pyjsdl.rect.py, line 105:\n    ln = len(arg)';
		$m.__track_lines__[106] = 'pyjsdl.rect.py, line 106:\n    if ln == 4:';
		$m.__track_lines__[107] = "pyjsdl.rect.py, line 107:\n    super(Rect, self).__setattr__('x', int(arg[0]))";
		$m.__track_lines__[108] = "pyjsdl.rect.py, line 108:\n    super(Rect, self).__setattr__('y', int(arg[1]))";
		$m.__track_lines__[109] = "pyjsdl.rect.py, line 109:\n    super(Rect, self).__setattr__('width', int(arg[2]))";
		$m.__track_lines__[110] = "pyjsdl.rect.py, line 110:\n    super(Rect, self).__setattr__('height', int(arg[3]))";
		$m.__track_lines__[112] = "pyjsdl.rect.py, line 112:\n    super(Rect, self).__setattr__('x', int(arg[0][0]))";
		$m.__track_lines__[113] = "pyjsdl.rect.py, line 113:\n    super(Rect, self).__setattr__('y', int(arg[0][1]))";
		$m.__track_lines__[114] = "pyjsdl.rect.py, line 114:\n    super(Rect, self).__setattr__('width', int(arg[1][0]))";
		$m.__track_lines__[115] = "pyjsdl.rect.py, line 115:\n    super(Rect, self).__setattr__('height', int(arg[1][1]))";
		$m.__track_lines__[117] = "pyjsdl.rect.py, line 117:\n    if hasattr(arg, 'rect'):";
		$m.__track_lines__[118] = 'pyjsdl.rect.py, line 118:\n    arg = arg.rect';
		$m.__track_lines__[119] = "pyjsdl.rect.py, line 119:\n    super(Rect, self).__setattr__('x', arg.x)";
		$m.__track_lines__[120] = "pyjsdl.rect.py, line 120:\n    super(Rect, self).__setattr__('y', arg.y)";
		$m.__track_lines__[121] = "pyjsdl.rect.py, line 121:\n    super(Rect, self).__setattr__('width', arg.width)";
		$m.__track_lines__[122] = "pyjsdl.rect.py, line 122:\n    super(Rect, self).__setattr__('height', arg.height)";
		$m.__track_lines__[124] = 'pyjsdl.rect.py, line 124:\n    def __str__(self):';
		$m.__track_lines__[128] = 'pyjsdl.rect.py, line 128:\n    return "<rect(%d, %d, %d, %d)>" % (self.x, self.y, self.width, self.height)';
		$m.__track_lines__[130] = 'pyjsdl.rect.py, line 130:\n    def __repr__(self):';
		$m.__track_lines__[134] = 'pyjsdl.rect.py, line 134:\n    return "%s(%d,%d,%d,%d)" % (self.__class__, self.x, self.y, self.width, self.height)';
		$m.__track_lines__[136] = 'pyjsdl.rect.py, line 136:\n    def __getattr__(self, attr):   #not implemented in pyjs -O';
		$m.__track_lines__[140] = 'pyjsdl.rect.py, line 140:\n    if attr in Rect._at:';
		$m.__track_lines__[141] = 'pyjsdl.rect.py, line 141:\n    return Rect._at[attr](self)';
		$m.__track_lines__[143] = 'pyjsdl.rect.py, line 143:\n    raise AttributeError';
		$m.__track_lines__[145] = 'pyjsdl.rect.py, line 145:\n    def __setattr__(self, attr, val):   #not implemented in pyjs -O';
		$m.__track_lines__[149] = 'pyjsdl.rect.py, line 149:\n    if attr in Rect._xy:';
		$m.__track_lines__[150] = 'pyjsdl.rect.py, line 150:\n    Rect._xy[attr](self, val)';
		$m.__track_lines__[152] = 'pyjsdl.rect.py, line 152:\n    raise AttributeError';
		$m.__track_lines__[153] = 'pyjsdl.rect.py, line 153:\n    return None';
		$m.__track_lines__[155] = 'pyjsdl.rect.py, line 155:\n    def __getitem__(self, key):';
		$m.__track_lines__[159] = 'pyjsdl.rect.py, line 159:\n    return [self.x, self.y, self.width, self.height][key]';
		$m.__track_lines__[161] = 'pyjsdl.rect.py, line 161:\n    def __setitem__(self, key, val):';
		$m.__track_lines__[165] = 'pyjsdl.rect.py, line 165:\n    value = int(val)';
		$m.__track_lines__[166] = 'pyjsdl.rect.py, line 166:\n    [lambda value: self.__setattr__("x", value), lambda value: self.__setattr__("y", value), lambda value: self.__setattr__("width", value), lambda value: self.__setattr__("height", value)][key](value)';
		$m.__track_lines__[168] = 'pyjsdl.rect.py, line 168:\n    def __iter__(self):';
		$m.__track_lines__[172] = 'pyjsdl.rect.py, line 172:\n    return iter([self.x, self.y, self.width, self.height])';
		$m.__track_lines__[174] = 'pyjsdl.rect.py, line 174:\n    def __len__(self):';
		$m.__track_lines__[175] = 'pyjsdl.rect.py, line 175:\n    return 4';
		$m.__track_lines__[177] = 'pyjsdl.rect.py, line 177:\n    def __nonzero__(self):';
		$m.__track_lines__[181] = 'pyjsdl.rect.py, line 181:\n    return self.width and self.height';
		$m.__track_lines__[183] = 'pyjsdl.rect.py, line 183:\n    def __eq__(self, other):';
		$m.__track_lines__[187] = 'pyjsdl.rect.py, line 187:\n    return self.x==other.x and self.y==other.y and self.width==other.width and self.height==other.height    #pyjs compares rect==tuple not __eq__';
		$m.__track_lines__[189] = 'pyjsdl.rect.py, line 189:\n    def __ne__(self, other):';
		$m.__track_lines__[193] = 'pyjsdl.rect.py, line 193:\n    return self.x!=other.x or self.y!=other.y or self.width!=other.width or self.height!=other.height   #pyjs compares rect==tuple not __eq__';
		$m.__track_lines__[195] = 'pyjsdl.rect.py, line 195:\n    def setLocation(self, x, y):';
		$m.__track_lines__[196] = "pyjsdl.rect.py, line 196:\n    super(Rect, self).__setattr__('x', int(x))";
		$m.__track_lines__[197] = "pyjsdl.rect.py, line 197:\n    super(Rect, self).__setattr__('y', int(y))";
		$m.__track_lines__[198] = 'pyjsdl.rect.py, line 198:\n    return None';
		$m.__track_lines__[200] = 'pyjsdl.rect.py, line 200:\n    def setSize(self, w, h):';
		$m.__track_lines__[201] = "pyjsdl.rect.py, line 201:\n    super(Rect, self).__setattr__('width', int(w))";
		$m.__track_lines__[202] = "pyjsdl.rect.py, line 202:\n    super(Rect, self).__setattr__('height', int(h))";
		$m.__track_lines__[203] = 'pyjsdl.rect.py, line 203:\n    return None';
		$m.__track_lines__[205] = 'pyjsdl.rect.py, line 205:\n    def copy(self):';
		$m.__track_lines__[209] = 'pyjsdl.rect.py, line 209:\n    return Rect(self.x, self.y, self.width, self.height)';
		$m.__track_lines__[211] = 'pyjsdl.rect.py, line 211:\n    def move(self, x, y):';
		$m.__track_lines__[215] = 'pyjsdl.rect.py, line 215:\n    return Rect(self.x+x, self.y+y, self.width, self.height)';
		$m.__track_lines__[217] = 'pyjsdl.rect.py, line 217:\n    def move_ip(self, *pos):';
		$m.__track_lines__[221] = 'pyjsdl.rect.py, line 221:\n    if len(pos) == 2:';
		$m.__track_lines__[222] = 'pyjsdl.rect.py, line 222:\n    self.setLocation(self.x+pos[0], self.y+pos[1])';
		$m.__track_lines__[224] = 'pyjsdl.rect.py, line 224:\n    self.setLocation(self.x+pos[0][0], self.y+pos[0][1])';
		$m.__track_lines__[225] = 'pyjsdl.rect.py, line 225:\n    return None';
		$m.__track_lines__[227] = 'pyjsdl.rect.py, line 227:\n    def inflate(self, x, y):';
		$m.__track_lines__[231] = 'pyjsdl.rect.py, line 231:\n    return Rect(self.x-int(float(x)/2), self.y-int(float(y)/2), self.width+x, self.height+y)';
		$m.__track_lines__[233] = 'pyjsdl.rect.py, line 233:\n    def inflate_ip(self, x, y):';
		$m.__track_lines__[237] = 'pyjsdl.rect.py, line 237:\n    self.setSize(self.width+x, self.height+y)';
		$m.__track_lines__[238] = 'pyjsdl.rect.py, line 238:\n    self.setLocation(self.x-int(float(x)/2), self.y-int(float(y)/2))';
		$m.__track_lines__[239] = 'pyjsdl.rect.py, line 239:\n    return None';
		$m.__track_lines__[241] = 'pyjsdl.rect.py, line 241:\n    def clip(self, rect):';
		$m.__track_lines__[242] = 'pyjsdl.rect.py, line 242:\n    if not self.intersects(rect):';
		$m.__track_lines__[243] = 'pyjsdl.rect.py, line 243:\n    return Rect(0,0,0,0)';
		$m.__track_lines__[245] = 'pyjsdl.rect.py, line 245:\n    x = self.x if self.x > rect.x else rect.x';
		$m.__track_lines__[246] = 'pyjsdl.rect.py, line 246:\n    y = self.y if self.y > rect.y else rect.y';
		$m.__track_lines__[247] = 'pyjsdl.rect.py, line 247:\n    s = self.x+self.width';
		$m.__track_lines__[248] = 'pyjsdl.rect.py, line 248:\n    r = rect.x+rect.width';
		$m.__track_lines__[249] = 'pyjsdl.rect.py, line 249:\n    w = (s if s < r else r) - x';
		$m.__track_lines__[250] = 'pyjsdl.rect.py, line 250:\n    s = self.y+self.height';
		$m.__track_lines__[251] = 'pyjsdl.rect.py, line 251:\n    r = rect.y+rect.height';
		$m.__track_lines__[252] = 'pyjsdl.rect.py, line 252:\n    h = (s if s < r else r) - y';
		$m.__track_lines__[253] = 'pyjsdl.rect.py, line 253:\n    return Rect(x, y, w, h)';
		$m.__track_lines__[255] = 'pyjsdl.rect.py, line 255:\n    def intersection(self, rect):';
		$m.__track_lines__[256] = 'pyjsdl.rect.py, line 256:\n    return self.clip(rect)';
		$m.__track_lines__[258] = 'pyjsdl.rect.py, line 258:\n    def contains(self, rect):';
		$m.__track_lines__[513] = 'pyjsdl.rect.py, line 513:\n    rect.height = r.height';
		$m.__track_lines__[262] = 'pyjsdl.rect.py, line 262:\n    return (self.x <= rect.x and (self.x+self.width) >= (rect.x+rect.width) and self.y <= rect.y and (self.y+self.height) >= (rect.y+rect.height))';
		$m.__track_lines__[264] = 'pyjsdl.rect.py, line 264:\n    def intersects(self, rect):';
		$m.__track_lines__[265] = 'pyjsdl.rect.py, line 265:\n    return (self.x < (rect.x+rect.width) and rect.x < (self.x+self.width) and self.y < (rect.y+rect.height) and rect.y < (self.y+self.height))';
		$m.__track_lines__[267] = 'pyjsdl.rect.py, line 267:\n    def union(self, rect):';
		$m.__track_lines__[271] = 'pyjsdl.rect.py, line 271:\n    x = self.x if self.x < rect.x else rect.x';
		$m.__track_lines__[272] = 'pyjsdl.rect.py, line 272:\n    y = self.y if self.y < rect.y else rect.y';
		$m.__track_lines__[273] = 'pyjsdl.rect.py, line 273:\n    s = self.x+self.width';
		$m.__track_lines__[274] = 'pyjsdl.rect.py, line 274:\n    r = rect.x+rect.width';
		$m.__track_lines__[275] = 'pyjsdl.rect.py, line 275:\n    w = (s if s > r else r) - x';
		$m.__track_lines__[276] = 'pyjsdl.rect.py, line 276:\n    s = self.y+self.height';
		$m.__track_lines__[277] = 'pyjsdl.rect.py, line 277:\n    r = rect.y+rect.height';
		$m.__track_lines__[278] = 'pyjsdl.rect.py, line 278:\n    h = (s if s > r else r) - y';
		$m.__track_lines__[279] = 'pyjsdl.rect.py, line 279:\n    return Rect(x, y, w, h)';
		$m.__track_lines__[281] = 'pyjsdl.rect.py, line 281:\n    def union_ip(self, rect):';
		$m.__track_lines__[285] = 'pyjsdl.rect.py, line 285:\n    x = self.x if self.x < rect.x else rect.x';
		$m.__track_lines__[286] = 'pyjsdl.rect.py, line 286:\n    y = self.y if self.y < rect.y else rect.y';
		$m.__track_lines__[287] = 'pyjsdl.rect.py, line 287:\n    s = self.x+self.width';
		$m.__track_lines__[288] = 'pyjsdl.rect.py, line 288:\n    r = rect.x+rect.width';
		$m.__track_lines__[289] = 'pyjsdl.rect.py, line 289:\n    w = (s if s > r else r) - x';
		$m.__track_lines__[290] = 'pyjsdl.rect.py, line 290:\n    s = self.y+self.height';
		$m.__track_lines__[291] = 'pyjsdl.rect.py, line 291:\n    r = rect.y+rect.height';
		$m.__track_lines__[292] = 'pyjsdl.rect.py, line 292:\n    h = (s if s > r else r) - y';
		$m.__track_lines__[293] = 'pyjsdl.rect.py, line 293:\n    self.x = x';
		$m.__track_lines__[294] = 'pyjsdl.rect.py, line 294:\n    self.y = y';
		$m.__track_lines__[295] = 'pyjsdl.rect.py, line 295:\n    self.width = w';
		$m.__track_lines__[296] = 'pyjsdl.rect.py, line 296:\n    self.height = h';
		$m.__track_lines__[297] = 'pyjsdl.rect.py, line 297:\n    return None';
		$m.__track_lines__[299] = 'pyjsdl.rect.py, line 299:\n    def unionall(self, rect_list):';
		$m.__track_lines__[303] = 'pyjsdl.rect.py, line 303:\n    x1 = self.x';
		$m.__track_lines__[304] = 'pyjsdl.rect.py, line 304:\n    y1 = self.y';
		$m.__track_lines__[305] = 'pyjsdl.rect.py, line 305:\n    x2 = self.x+self.width';
		$m.__track_lines__[306] = 'pyjsdl.rect.py, line 306:\n    y2 = self.y+self.height';
		$m.__track_lines__[307] = 'pyjsdl.rect.py, line 307:\n    for r in rect_list:';
		$m.__track_lines__[308] = 'pyjsdl.rect.py, line 308:\n    if r.x < x1:';
		$m.__track_lines__[309] = 'pyjsdl.rect.py, line 309:\n    x1 = r.x';
		$m.__track_lines__[310] = 'pyjsdl.rect.py, line 310:\n    if r.y < y1:';
		$m.__track_lines__[311] = 'pyjsdl.rect.py, line 311:\n    y1 = r.y';
		$m.__track_lines__[312] = 'pyjsdl.rect.py, line 312:\n    rx2 = r.x+r.width';
		$m.__track_lines__[313] = 'pyjsdl.rect.py, line 313:\n    if rx2 > x2:';
		$m.__track_lines__[314] = 'pyjsdl.rect.py, line 314:\n    x2 = rx2';
		$m.__track_lines__[315] = 'pyjsdl.rect.py, line 315:\n    ry2 = r.y+r.height';
		$m.__track_lines__[316] = 'pyjsdl.rect.py, line 316:\n    if ry2 > y2:';
		$m.__track_lines__[317] = 'pyjsdl.rect.py, line 317:\n    y2 = ry2';
		$m.__track_lines__[318] = 'pyjsdl.rect.py, line 318:\n    return Rect(x1,y1,x2-x1,y2-y1)';
		$m.__track_lines__[320] = 'pyjsdl.rect.py, line 320:\n    def unionall_ip(self, rect_list):';
		$m.__track_lines__[324] = 'pyjsdl.rect.py, line 324:\n    x1 = self.x';
		$m.__track_lines__[325] = 'pyjsdl.rect.py, line 325:\n    y1 = self.y';
		$m.__track_lines__[326] = 'pyjsdl.rect.py, line 326:\n    x2 = self.x+self.width';
		$m.__track_lines__[327] = 'pyjsdl.rect.py, line 327:\n    y2 = self.y+self.height';
		$m.__track_lines__[328] = 'pyjsdl.rect.py, line 328:\n    for r in rect_list:';
		$m.__track_lines__[329] = 'pyjsdl.rect.py, line 329:\n    if r.x < x1:';
		$m.__track_lines__[330] = 'pyjsdl.rect.py, line 330:\n    x1 = r.x';
		$m.__track_lines__[331] = 'pyjsdl.rect.py, line 331:\n    if r.y < y1:';
		$m.__track_lines__[332] = 'pyjsdl.rect.py, line 332:\n    y1 = r.y';
		$m.__track_lines__[333] = 'pyjsdl.rect.py, line 333:\n    rx2 = r.x+r.width';
		$m.__track_lines__[334] = 'pyjsdl.rect.py, line 334:\n    if rx2 > x2:';
		$m.__track_lines__[335] = 'pyjsdl.rect.py, line 335:\n    x2 = rx2';
		$m.__track_lines__[336] = 'pyjsdl.rect.py, line 336:\n    ry2 = r.y+r.height';
		$m.__track_lines__[337] = 'pyjsdl.rect.py, line 337:\n    if ry2 > y2:';
		$m.__track_lines__[338] = 'pyjsdl.rect.py, line 338:\n    y2 = ry2';
		$m.__track_lines__[339] = 'pyjsdl.rect.py, line 339:\n    self.x = x1';
		$m.__track_lines__[340] = 'pyjsdl.rect.py, line 340:\n    self.y = y1';
		$m.__track_lines__[341] = 'pyjsdl.rect.py, line 341:\n    self.width = x2-x1';
		$m.__track_lines__[342] = 'pyjsdl.rect.py, line 342:\n    self.height = y2-y1';
		$m.__track_lines__[343] = 'pyjsdl.rect.py, line 343:\n    return None';
		$m.__track_lines__[345] = 'pyjsdl.rect.py, line 345:\n    def clamp(self, rect):';
		$m.__track_lines__[349] = 'pyjsdl.rect.py, line 349:\n    newrect = Rect(self.x, self.y, self.width, self.height)';
		$m.__track_lines__[350] = 'pyjsdl.rect.py, line 350:\n    if self.width < rect.width:';
		$m.__track_lines__[351] = 'pyjsdl.rect.py, line 351:\n    if self.x < rect.x:';
		$m.__track_lines__[352] = "pyjsdl.rect.py, line 352:\n    super(Rect, newrect).__setattr__('x', rect.x)";
		$m.__track_lines__[354] = "pyjsdl.rect.py, line 354:\n    super(Rect, newrect).__setattr__('x', rect.x+rect.width-self.width)";
		$m.__track_lines__[356] = "pyjsdl.rect.py, line 356:\n    super(Rect, newrect).__setattr__('x', rect.x-int((self.width-rect.width)/2))";
		$m.__track_lines__[357] = 'pyjsdl.rect.py, line 357:\n    if self.height < rect.height:';
		$m.__track_lines__[358] = 'pyjsdl.rect.py, line 358:\n    if self.y < rect.y:';
		$m.__track_lines__[359] = "pyjsdl.rect.py, line 359:\n    super(Rect, newrect).__setattr__('y', rect.y)";
		$m.__track_lines__[361] = "pyjsdl.rect.py, line 361:\n    super(Rect, newrect).__setattr__('y', rect.y+rect.height-self.height)";
		$m.__track_lines__[363] = "pyjsdl.rect.py, line 363:\n    super(Rect, newrect).__setattr__('y', rect.y-int((self.height-rect.height)/2))";
		$m.__track_lines__[364] = 'pyjsdl.rect.py, line 364:\n    return newrect';
		$m.__track_lines__[366] = 'pyjsdl.rect.py, line 366:\n    def clamp_ip(self, rect):';
		$m.__track_lines__[370] = 'pyjsdl.rect.py, line 370:\n    if self.width < rect.width:';
		$m.__track_lines__[371] = 'pyjsdl.rect.py, line 371:\n    if self.x < rect.x:';
		$m.__track_lines__[372] = "pyjsdl.rect.py, line 372:\n    super(Rect, self).__setattr__('x', rect.x)";
		$m.__track_lines__[374] = "pyjsdl.rect.py, line 374:\n    super(Rect, self).__setattr__('x', rect.x+rect.width-self.width)";
		$m.__track_lines__[376] = "pyjsdl.rect.py, line 376:\n    super(Rect, self).__setattr__('x',  rect.x-int((self.width-rect.width)/2))";
		$m.__track_lines__[377] = 'pyjsdl.rect.py, line 377:\n    if self.height < rect.height:';
		$m.__track_lines__[378] = 'pyjsdl.rect.py, line 378:\n    if self.y < rect.y:';
		$m.__track_lines__[379] = "pyjsdl.rect.py, line 379:\n    super(Rect, self).__setattr__('y', rect.y)";
		$m.__track_lines__[381] = "pyjsdl.rect.py, line 381:\n    super(Rect, self).__setattr__('y', rect.y+rect.height-self.height)";
		$m.__track_lines__[383] = "pyjsdl.rect.py, line 383:\n    super(Rect, self).__setattr__('y', rect.y-int((self.height-rect.height)/2))";
		$m.__track_lines__[384] = 'pyjsdl.rect.py, line 384:\n    return None';
		$m.__track_lines__[386] = 'pyjsdl.rect.py, line 386:\n    def set(self, *args):';
		$m.__track_lines__[396] = 'pyjsdl.rect.py, line 396:\n    if len(args) == 1:';
		$m.__track_lines__[397] = 'pyjsdl.rect.py, line 397:\n    arg = args[0]';
		$m.__track_lines__[399] = 'pyjsdl.rect.py, line 399:\n    arg = args';
		$m.__track_lines__[400] = 'pyjsdl.rect.py, line 400:\n    ln = len(arg)';
		$m.__track_lines__[401] = 'pyjsdl.rect.py, line 401:\n    if ln == 4:';
		$m.__track_lines__[402] = "pyjsdl.rect.py, line 402:\n    super(Rect, self).__setattr__('x', int(arg[0]))";
		$m.__track_lines__[403] = "pyjsdl.rect.py, line 403:\n    super(Rect, self).__setattr__('y', int(arg[1]))";
		$m.__track_lines__[404] = "pyjsdl.rect.py, line 404:\n    super(Rect, self).__setattr__('width', int(arg[2]))";
		$m.__track_lines__[405] = "pyjsdl.rect.py, line 405:\n    super(Rect, self).__setattr__('height', int(arg[3]))";
		$m.__track_lines__[407] = "pyjsdl.rect.py, line 407:\n    super(Rect, self).__setattr__('x', int(arg[0][0]))";
		$m.__track_lines__[408] = "pyjsdl.rect.py, line 408:\n    super(Rect, self).__setattr__('y', int(arg[0][1]))";
		$m.__track_lines__[409] = "pyjsdl.rect.py, line 409:\n    super(Rect, self).__setattr__('width', int(arg[1][0]))";
		$m.__track_lines__[410] = "pyjsdl.rect.py, line 410:\n    super(Rect, self).__setattr__('height', int(arg[1][1]))";
		$m.__track_lines__[412] = "pyjsdl.rect.py, line 412:\n    if hasattr(arg, 'rect'):";
		$m.__track_lines__[413] = 'pyjsdl.rect.py, line 413:\n    arg = arg.rect';
		$m.__track_lines__[414] = "pyjsdl.rect.py, line 414:\n    super(Rect, self).__setattr__('x', arg.x)";
		$m.__track_lines__[415] = "pyjsdl.rect.py, line 415:\n    super(Rect, self).__setattr__('y', arg.y)";
		$m.__track_lines__[416] = "pyjsdl.rect.py, line 416:\n    super(Rect, self).__setattr__('width', arg.width)";
		$m.__track_lines__[417] = "pyjsdl.rect.py, line 417:\n    super(Rect, self).__setattr__('height', arg.height)";
		$m.__track_lines__[419] = 'pyjsdl.rect.py, line 419:\n    def collidepoint(self, *point):';
		$m.__track_lines__[423] = 'pyjsdl.rect.py, line 423:\n    if len(point) == 2:';
		$m.__track_lines__[424] = 'pyjsdl.rect.py, line 424:\n    return (self.x <= point[0] < (self.x+self.width) and self.y <= point[1] < (self.y+self.height))';
		$m.__track_lines__[426] = 'pyjsdl.rect.py, line 426:\n    return (self.x <= point[0][0] < (self.x+self.width) and self.y <= point[0][1] < (self.y+self.height))';
		$m.__track_lines__[428] = 'pyjsdl.rect.py, line 428:\n    def colliderect(self, rect):';
		$m.__track_lines__[432] = 'pyjsdl.rect.py, line 432:\n    return self.intersects(rect)';
		$m.__track_lines__[434] = 'pyjsdl.rect.py, line 434:\n    def collidelist(self, rects):';
		$m.__track_lines__[438] = 'pyjsdl.rect.py, line 438:\n    for i, rect in enumerate(rects):';
		$m.__track_lines__[439] = 'pyjsdl.rect.py, line 439:\n    if self.intersects(rect):';
		$m.__track_lines__[440] = 'pyjsdl.rect.py, line 440:\n    return i';
		$m.__track_lines__[441] = 'pyjsdl.rect.py, line 441:\n    return -1';
		$m.__track_lines__[443] = 'pyjsdl.rect.py, line 443:\n    def collidelistall(self, rects):';
		$m.__track_lines__[447] = 'pyjsdl.rect.py, line 447:\n    collided = []';
		$m.__track_lines__[448] = 'pyjsdl.rect.py, line 448:\n    for i, rect in enumerate(rects):';
		$m.__track_lines__[449] = 'pyjsdl.rect.py, line 449:\n    if self.colliderect(rect):';
		$m.__track_lines__[450] = 'pyjsdl.rect.py, line 450:\n    collided.append(i)';
		$m.__track_lines__[451] = 'pyjsdl.rect.py, line 451:\n    return collided';
		$m.__track_lines__[453] = 'pyjsdl.rect.py, line 453:\n    def collidedict(self, rects):';
		$m.__track_lines__[457] = 'pyjsdl.rect.py, line 457:\n    for rect in rects:';
		$m.__track_lines__[458] = 'pyjsdl.rect.py, line 458:\n    if self.colliderect(rects[rect]):';
		$m.__track_lines__[459] = 'pyjsdl.rect.py, line 459:\n    return (rect,rects[rect])';
		$m.__track_lines__[460] = 'pyjsdl.rect.py, line 460:\n    return None';
		$m.__track_lines__[462] = 'pyjsdl.rect.py, line 462:\n    def collidedictall(self, rects):';
		$m.__track_lines__[466] = 'pyjsdl.rect.py, line 466:\n    collided = []';
		$m.__track_lines__[467] = 'pyjsdl.rect.py, line 467:\n    for rect in rects:';
		$m.__track_lines__[468] = 'pyjsdl.rect.py, line 468:\n    if self.colliderect(rects[rect]):';
		$m.__track_lines__[469] = 'pyjsdl.rect.py, line 469:\n    collided.append((rect,rects[rect]))';
		$m.__track_lines__[470] = 'pyjsdl.rect.py, line 470:\n    return collided';
		$m.__track_lines__[473] = 'pyjsdl.rect.py, line 473:\n    class RectPool(list):';
		$m.__track_lines__[485] = 'pyjsdl.rect.py, line 485:\n    def __init__(self):';
		$m.__track_lines__[486] = 'pyjsdl.rect.py, line 486:\n    list.__init__(self)';
		$m.__track_lines__[487] = 'pyjsdl.rect.py, line 487:\n    self.add = self.append';
		$m.__track_lines__[488] = 'pyjsdl.rect.py, line 488:\n    self.addAll = self.extend';
		$m.__track_lines__[490] = 'pyjsdl.rect.py, line 490:\n    def get(self, x, y, width, height):';
		$m.__track_lines__[494] = 'pyjsdl.rect.py, line 494:\n    if self:';
		$m.__track_lines__[495] = 'pyjsdl.rect.py, line 495:\n    rect = self.pop()';
		$m.__track_lines__[496] = 'pyjsdl.rect.py, line 496:\n    rect.x = x';
		$m.__track_lines__[497] = 'pyjsdl.rect.py, line 497:\n    rect.y = y';
		$m.__track_lines__[498] = 'pyjsdl.rect.py, line 498:\n    rect.width = width';
		$m.__track_lines__[499] = 'pyjsdl.rect.py, line 499:\n    rect.height = height';
		$m.__track_lines__[500] = 'pyjsdl.rect.py, line 500:\n    return rect';
		$m.__track_lines__[502] = 'pyjsdl.rect.py, line 502:\n    return Rect(x,y,width,height)';
		$m.__track_lines__[504] = 'pyjsdl.rect.py, line 504:\n    def copy(self, r):';
		$m.__track_lines__[508] = 'pyjsdl.rect.py, line 508:\n    if self:';
		$m.__track_lines__[509] = 'pyjsdl.rect.py, line 509:\n    rect = self.pop()';
		$m.__track_lines__[510] = 'pyjsdl.rect.py, line 510:\n    rect.x = r.x';
		$m.__track_lines__[511] = 'pyjsdl.rect.py, line 511:\n    rect.y = r.y';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		$pyjs['track']['module']='pyjsdl.rect';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=7;
		$m['Rect'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.rect';
			$cls_definition['__md5__'] = '60c405614fe1673d4e6123d4db59f8ff';
			$pyjs['track']['lineno']=32;
			var 			$lambda1 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub3,$div3,$div2,$sub2,$sub1,$div1,$div4,$sub4;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=33;
				$pyjs['track']['lineno']=33;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub1=val['__getitem__']($constant_int_0),$sub2=$p['int']((typeof ($div1=$p['getattr'](self, 'width'))==typeof ($div2=$constant_int_2) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))), $p['__op_sub']($sub3=val['__getitem__']($constant_int_1),$sub4=$p['int']((typeof ($div3=$p['getattr'](self, 'height'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['self'],['val']];
			var 			$lambda2 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $div6,$sub6,$sub5,$div5;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=34;
				$pyjs['track']['lineno']=34;
				$pyjs['track']['lineno']=34;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub5=val,$sub6=$p['int']((typeof ($div5=$p['getattr'](self, 'width'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)))), $p['getattr'](self, 'y'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['self'],['val']];
			var 			$lambda3 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $div8,$sub8,$sub7,$div7;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=35;
				var $pyjs__ret = self['setLocation']($p['getattr'](self, 'x'), $p['__op_sub']($sub7=val,$sub8=$p['int']((typeof ($div7=$p['getattr'](self, 'height'))==typeof ($div8=$constant_int_2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = [null,null,['self'],['val']];
			var 			$lambda4 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=36;
				$pyjs['track']['lineno']=36;
				$pyjs['track']['lineno']=36;
				var $pyjs__ret = self['setLocation']($p['getattr'](self, 'x'), val);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = [null,null,['self'],['val']];
			var 			$lambda5 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=37;
				var $pyjs__ret = self['setLocation'](val, $p['getattr'](self, 'y'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = [null,null,['self'],['val']];
			var 			$lambda6 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub10,$sub9;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=38;
				$pyjs['track']['lineno']=38;
				var $pyjs__ret = self['setLocation']($p['getattr'](self, 'x'), $p['__op_sub']($sub9=val,$sub10=$p['getattr'](self, 'height')));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = [null,null,['self'],['val']];
			var 			$lambda7 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub12,$sub11;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=39;
				$pyjs['track']['lineno']=39;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub11=val,$sub12=$p['getattr'](self, 'width')), $p['getattr'](self, 'y'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda7['__name__'] = '$lambda7';

			$lambda7['__bind_type__'] = 0;
			$lambda7['__args__'] = [null,null,['self'],['val']];
			var 			$lambda8 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=40;
				$pyjs['track']['lineno']=40;
				var $pyjs__ret = self['setLocation'](val['__getitem__']($constant_int_0), val['__getitem__']($constant_int_1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda8['__name__'] = '$lambda8';

			$lambda8['__bind_type__'] = 0;
			$lambda8['__args__'] = [null,null,['self'],['val']];
			var 			$lambda9 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub13,$sub14;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				var $pyjs__ret = self['setLocation'](val['__getitem__']($constant_int_0), $p['__op_sub']($sub13=val['__getitem__']($constant_int_1),$sub14=$p['getattr'](self, 'height')));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda9['__name__'] = '$lambda9';

			$lambda9['__bind_type__'] = 0;
			$lambda9['__args__'] = [null,null,['self'],['val']];
			var 			$lambda10 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub15,$sub16;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=42;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub15=val['__getitem__']($constant_int_0),$sub16=$p['getattr'](self, 'width')), val['__getitem__']($constant_int_1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda10['__name__'] = '$lambda10';

			$lambda10['__bind_type__'] = 0;
			$lambda10['__args__'] = [null,null,['self'],['val']];
			var 			$lambda11 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub19,$sub18,$sub17,$sub20;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=43;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub17=val['__getitem__']($constant_int_0),$sub18=$p['getattr'](self, 'width')), $p['__op_sub']($sub19=val['__getitem__']($constant_int_1),$sub20=$p['getattr'](self, 'height')));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda11['__name__'] = '$lambda11';

			$lambda11['__bind_type__'] = 0;
			$lambda11['__args__'] = [null,null,['self'],['val']];
			var 			$lambda12 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub22,$sub21,$div10,$div9;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=44;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub21=val['__getitem__']($constant_int_0),$sub22=$p['int']((typeof ($div9=$p['getattr'](self, 'width'))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
					$div9/$div10:
					$p['op_div']($div9,$div10)))), val['__getitem__']($constant_int_1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda12['__name__'] = '$lambda12';

			$lambda12['__bind_type__'] = 0;
			$lambda12['__args__'] = [null,null,['self'],['val']];
			var 			$lambda13 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub23,$sub24,$div11,$div12;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=45;
				$pyjs['track']['lineno']=45;
				var $pyjs__ret = self['setLocation'](val['__getitem__']($constant_int_0), $p['__op_sub']($sub23=val['__getitem__']($constant_int_1),$sub24=$p['int']((typeof ($div11=$p['getattr'](self, 'height'))==typeof ($div12=$constant_int_2) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					$p['op_div']($div11,$div12)))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda13['__name__'] = '$lambda13';

			$lambda13['__bind_type__'] = 0;
			$lambda13['__args__'] = [null,null,['self'],['val']];
			var 			$lambda14 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub26,$sub27,$sub25,$div14,$div13,$sub28;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=46;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub25=val['__getitem__']($constant_int_0),$sub26=$p['int']((typeof ($div13=$p['getattr'](self, 'width'))==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14)))), $p['__op_sub']($sub27=val['__getitem__']($constant_int_1),$sub28=$p['getattr'](self, 'height')));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda14['__name__'] = '$lambda14';

			$lambda14['__bind_type__'] = 0;
			$lambda14['__args__'] = [null,null,['self'],['val']];
			var 			$lambda15 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				var $sub31,$sub30,$sub32,$div15,$sub29,$div16;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=47;
				var $pyjs__ret = self['setLocation']($p['__op_sub']($sub29=val['__getitem__']($constant_int_0),$sub30=$p['getattr'](self, 'width')), $p['__op_sub']($sub31=val['__getitem__']($constant_int_1),$sub32=$p['int']((typeof ($div15=$p['getattr'](self, 'height'))==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda15['__name__'] = '$lambda15';

			$lambda15['__bind_type__'] = 0;
			$lambda15['__args__'] = [null,null,['self'],['val']];
			var 			$lambda16 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				var $pyjs__ret = self['setSize'](val['__getitem__']($constant_int_0), val['__getitem__']($constant_int_1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda16['__name__'] = '$lambda16';

			$lambda16['__bind_type__'] = 0;
			$lambda16['__args__'] = [null,null,['self'],['val']];
			var 			$lambda17 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=49;
				var $pyjs__ret = self['setSize'](val, $p['getattr'](self, 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda17['__name__'] = '$lambda17';

			$lambda17['__bind_type__'] = 0;
			$lambda17['__args__'] = [null,null,['self'],['val']];
			var 			$lambda18 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=50;
				var $pyjs__ret = self['setSize']($p['getattr'](self, 'width'), val);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda18['__name__'] = '$lambda18';

			$lambda18['__bind_type__'] = 0;
			$lambda18['__args__'] = [null,null,['self'],['val']];
			var 			$lambda19 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=51;
				var $pyjs__ret = self['setSize'](val, $p['getattr'](self, 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda19['__name__'] = '$lambda19';

			$lambda19['__bind_type__'] = 0;
			$lambda19['__args__'] = [null,null,['self'],['val']];
			var 			$lambda20 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=52;
				var $pyjs__ret = self['setSize']($p['getattr'](self, 'width'), val);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda20['__name__'] = '$lambda20';

			$lambda20['__bind_type__'] = 0;
			$lambda20['__args__'] = [null,null,['self'],['val']];
			var 			$lambda21 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=53;
				var $pyjs__ret = self['setLocation'](val, $p['getattr'](self, 'y'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda21['__name__'] = '$lambda21';

			$lambda21['__bind_type__'] = 0;
			$lambda21['__args__'] = [null,null,['self'],['val']];
			var 			$lambda22 = function(self, val) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=54;
				var $pyjs__ret = self['setLocation']($p['getattr'](self, 'x'), val);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda22['__name__'] = '$lambda22';

			$lambda22['__bind_type__'] = 0;
			$lambda22['__args__'] = [null,null,['self'],['val']];
			$cls_definition['_xy'] = $p['dict']([['center', $lambda1], ['centerx', $lambda2], ['centery', $lambda3], ['top', $lambda4], ['left', $lambda5], ['bottom', $lambda6], ['right', $lambda7], ['topleft', $lambda8], ['bottomleft', $lambda9], ['topright', $lambda10], ['bottomright', $lambda11], ['midtop', $lambda12], ['midleft', $lambda13], ['midbottom', $lambda14], ['midright', $lambda15], ['size', $lambda16], ['width', $lambda17], ['height', $lambda18], ['w', $lambda19], ['h', $lambda20], ['x', $lambda21], ['y', $lambda22]]);
			$pyjs['track']['lineno']=56;
			var 			$lambda23 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $div20,$div18,$div19,$div17,$add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=57;
				var $pyjs__ret = $p['tuple']([$p['__op_add']($add1=$p['getattr'](self, 'x'),$add2=$p['int']((typeof ($div17=$p['getattr'](self, 'width'))==typeof ($div18=$constant_int_2) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)))), $p['__op_add']($add3=$p['getattr'](self, 'y'),$add4=$p['int']((typeof ($div19=$p['getattr'](self, 'height'))==typeof ($div20=$constant_int_2) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20))))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda23['__name__'] = '$lambda23';

			$lambda23['__bind_type__'] = 0;
			$lambda23['__args__'] = [null,null,['self']];
			var 			$lambda24 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $div21,$div22,$add6,$add5;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=58;
				var $pyjs__ret = $p['__op_add']($add5=$p['getattr'](self, 'x'),$add6=$p['int']((typeof ($div21=$p['getattr'](self, 'width'))==typeof ($div22=$constant_int_2) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda24['__name__'] = '$lambda24';

			$lambda24['__bind_type__'] = 0;
			$lambda24['__args__'] = [null,null,['self']];
			var 			$lambda25 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add8,$add7,$div23,$div24;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=59;
				var $pyjs__ret = $p['__op_add']($add7=$p['getattr'](self, 'y'),$add8=$p['int']((typeof ($div23=$p['getattr'](self, 'height'))==typeof ($div24=$constant_int_2) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda25['__name__'] = '$lambda25';

			$lambda25['__bind_type__'] = 0;
			$lambda25['__args__'] = [null,null,['self']];
			var 			$lambda26 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=60;
				$pyjs['track']['lineno']=60;
				var $pyjs__ret = $p['getattr'](self, 'y');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda26['__name__'] = '$lambda26';

			$lambda26['__bind_type__'] = 0;
			$lambda26['__args__'] = [null,null,['self']];
			var 			$lambda27 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=61;
				var $pyjs__ret = $p['getattr'](self, 'x');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda27['__name__'] = '$lambda27';

			$lambda27['__bind_type__'] = 0;
			$lambda27['__args__'] = [null,null,['self']];
			var 			$lambda28 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add9,$add10;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				$pyjs['track']['lineno']=62;
				var $pyjs__ret = $p['__op_add']($add9=$p['getattr'](self, 'y'),$add10=$p['getattr'](self, 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda28['__name__'] = '$lambda28';

			$lambda28['__bind_type__'] = 0;
			$lambda28['__args__'] = [null,null,['self']];
			var 			$lambda29 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add11,$add12;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=63;
				var $pyjs__ret = $p['__op_add']($add11=$p['getattr'](self, 'x'),$add12=$p['getattr'](self, 'width'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda29['__name__'] = '$lambda29';

			$lambda29['__bind_type__'] = 0;
			$lambda29['__args__'] = [null,null,['self']];
			var 			$lambda30 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=64;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda30['__name__'] = '$lambda30';

			$lambda30['__bind_type__'] = 0;
			$lambda30['__args__'] = [null,null,['self']];
			var 			$lambda31 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add14,$add13;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=65;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'x'), $p['__op_add']($add13=$p['getattr'](self, 'y'),$add14=$p['getattr'](self, 'height'))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda31['__name__'] = '$lambda31';

			$lambda31['__bind_type__'] = 0;
			$lambda31['__args__'] = [null,null,['self']];
			var 			$lambda32 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add15,$add16;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = $p['tuple']([$p['__op_add']($add15=$p['getattr'](self, 'x'),$add16=$p['getattr'](self, 'width')), $p['getattr'](self, 'y')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda32['__name__'] = '$lambda32';

			$lambda32['__bind_type__'] = 0;
			$lambda32['__args__'] = [null,null,['self']];
			var 			$lambda33 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add20,$add17,$add18,$add19;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=67;
				var $pyjs__ret = $p['tuple']([$p['__op_add']($add17=$p['getattr'](self, 'x'),$add18=$p['getattr'](self, 'width')), $p['__op_add']($add19=$p['getattr'](self, 'y'),$add20=$p['getattr'](self, 'height'))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda33['__name__'] = '$lambda33';

			$lambda33['__bind_type__'] = 0;
			$lambda33['__args__'] = [null,null,['self']];
			var 			$lambda34 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add21,$add22,$div25,$div26;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=68;
				var $pyjs__ret = $p['tuple']([$p['__op_add']($add21=$p['getattr'](self, 'x'),$add22=$p['int']((typeof ($div25=$p['getattr'](self, 'width'))==typeof ($div26=$constant_int_2) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)))), $p['getattr'](self, 'y')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda34['__name__'] = '$lambda34';

			$lambda34['__bind_type__'] = 0;
			$lambda34['__args__'] = [null,null,['self']];
			var 			$lambda35 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $div28,$add23,$div27,$add24;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=69;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'x'), $p['__op_add']($add23=$p['getattr'](self, 'y'),$add24=$p['int']((typeof ($div27=$p['getattr'](self, 'height'))==typeof ($div28=$constant_int_2) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28))))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda35['__name__'] = '$lambda35';

			$lambda35['__bind_type__'] = 0;
			$lambda35['__args__'] = [null,null,['self']];
			var 			$lambda36 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add28,$div30,$div29,$add25,$add27,$add26;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':70};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=70;
				$pyjs['track']['lineno']=70;
				$pyjs['track']['lineno']=70;
				var $pyjs__ret = $p['tuple']([$p['__op_add']($add25=$p['getattr'](self, 'x'),$add26=$p['int']((typeof ($div29=$p['getattr'](self, 'width'))==typeof ($div30=$constant_int_2) && typeof $div29=='number' && $div30 !== 0?
					$div29/$div30:
					$p['op_div']($div29,$div30)))), $p['__op_add']($add27=$p['getattr'](self, 'y'),$add28=$p['getattr'](self, 'height'))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda36['__name__'] = '$lambda36';

			$lambda36['__bind_type__'] = 0;
			$lambda36['__args__'] = [null,null,['self']];
			var 			$lambda37 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $add29,$div32,$div31,$add32,$add31,$add30;
				$pyjs['track']={'module':'pyjsdl.rect','lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=71;
				var $pyjs__ret = $p['tuple']([$p['__op_add']($add29=$p['getattr'](self, 'x'),$add30=$p['getattr'](self, 'width')), $p['__op_add']($add31=$p['getattr'](self, 'y'),$add32=$p['int']((typeof ($div31=$p['getattr'](self, 'height'))==typeof ($div32=$constant_int_2) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					$p['op_div']($div31,$div32))))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda37['__name__'] = '$lambda37';

			$lambda37['__bind_type__'] = 0;
			$lambda37['__args__'] = [null,null,['self']];
			var 			$lambda38 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=72;
				var $pyjs__ret = $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda38['__name__'] = '$lambda38';

			$lambda38['__bind_type__'] = 0;
			$lambda38['__args__'] = [null,null,['self']];
			var 			$lambda39 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=73;
				var $pyjs__ret = $p['getattr'](self, 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda39['__name__'] = '$lambda39';

			$lambda39['__bind_type__'] = 0;
			$lambda39['__args__'] = [null,null,['self']];
			var 			$lambda40 = function(self) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.rect','lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=74;
				var $pyjs__ret = $p['getattr'](self, 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda40['__name__'] = '$lambda40';

			$lambda40['__bind_type__'] = 0;
			$lambda40['__args__'] = [null,null,['self']];
			$cls_definition['_at'] = $p['dict']([['center', $lambda23], ['centerx', $lambda24], ['centery', $lambda25], ['top', $lambda26], ['left', $lambda27], ['bottom', $lambda28], ['right', $lambda29], ['topleft', $lambda30], ['bottomleft', $lambda31], ['topright', $lambda32], ['bottomright', $lambda33], ['midtop', $lambda34], ['midleft', $lambda35], ['midbottom', $lambda36], ['midright', $lambda37], ['size', $lambda38], ['w', $lambda39], ['h', $lambda40]]);
			$pyjs['track']['lineno']=77;
			$method = $pyjs__bind_method2('__init__', function() {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ln,arg;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=101;
				if ($p['bool']($p['op_eq']($p['len'](args), $constant_int_1))) {
					$pyjs['track']['lineno']=102;
					arg = args['__getitem__']($constant_int_0);
				}
				else {
					$pyjs['track']['lineno']=104;
					arg = args;
				}
				$pyjs['track']['lineno']=105;
				ln = $p['len'](arg);
				$pyjs['track']['lineno']=106;
				if ($p['bool']($p['op_eq'](ln, $constant_int_4))) {
					$pyjs['track']['lineno']=107;
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['int'](arg['__getitem__']($constant_int_0)));
					$pyjs['track']['lineno']=108;
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['int'](arg['__getitem__']($constant_int_1)));
					$pyjs['track']['lineno']=109;
					$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['int'](arg['__getitem__']($constant_int_2)));
					$pyjs['track']['lineno']=110;
					$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['int'](arg['__getitem__']($constant_int_3)));
				}
				else if ($p['bool']($p['op_eq'](ln, $constant_int_2))) {
					$pyjs['track']['lineno']=112;
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['int'](arg['__getitem__']($constant_int_0)['__getitem__']($constant_int_0)));
					$pyjs['track']['lineno']=113;
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['int'](arg['__getitem__']($constant_int_0)['__getitem__']($constant_int_1)));
					$pyjs['track']['lineno']=114;
					$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['int'](arg['__getitem__']($constant_int_1)['__getitem__']($constant_int_0)));
					$pyjs['track']['lineno']=115;
					$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['int'](arg['__getitem__']($constant_int_1)['__getitem__']($constant_int_1)));
				}
				else {
					$pyjs['track']['lineno']=117;
					if ($p['bool']($p['hasattr'](arg, 'rect'))) {
						$pyjs['track']['lineno']=118;
						arg = $p['getattr'](arg, 'rect');
					}
					$pyjs['track']['lineno']=119;
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['getattr'](arg, 'x'));
					$pyjs['track']['lineno']=120;
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['getattr'](arg, 'y'));
					$pyjs['track']['lineno']=121;
					$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['getattr'](arg, 'width'));
					$pyjs['track']['lineno']=122;
					$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['getattr'](arg, 'height'));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=124;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=124;
				$pyjs['track']['lineno']=128;
				$pyjs['track']['lineno']=128;
				var $pyjs__ret = $p['sprintf']('<rect(%d, %d, %d, %d)>', $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=130;
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=134;
				$pyjs['track']['lineno']=134;
				var $pyjs__ret = $p['sprintf']('%s(%d,%d,%d,%d)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=136;
			$method = $pyjs__bind_method2('__getattr__', function(attr) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':136};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=136;
				$pyjs['track']['lineno']=140;
				if ($p['bool']($p['getattr']($m['Rect'], '_at')['__contains__'](attr))) {
					$pyjs['track']['lineno']=141;
					$pyjs['track']['lineno']=141;
					var $pyjs__ret = $p['getattr']($m['Rect'], '_at')['__getitem__'](attr)(self);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=143;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['AttributeError']);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=145;
			$method = $pyjs__bind_method2('__setattr__', function(attr, val) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					val = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=145;
				$pyjs['track']['lineno']=149;
				if ($p['bool']($p['getattr']($m['Rect'], '_xy')['__contains__'](attr))) {
					$pyjs['track']['lineno']=150;
					$p['getattr']($m['Rect'], '_xy')['__getitem__'](attr)(self, val);
				}
				else {
					$pyjs['track']['lineno']=152;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['AttributeError']);
				}
				$pyjs['track']['lineno']=153;
				$pyjs['track']['lineno']=153;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['attr'],['val']]);
			$cls_definition['__setattr__'] = $method;
			$pyjs['track']['lineno']=155;
			$method = $pyjs__bind_method2('__getitem__', function(key) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=155;
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=159;
				var $pyjs__ret = $p['list']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')])['__getitem__'](key);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['key']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=161;
			$method = $pyjs__bind_method2('__setitem__', function(key, val) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					key = arguments[1];
					val = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var value,$lambda41,$lambda42,$lambda43,$lambda44;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=161;
				$pyjs['track']['lineno']=165;
				value = $p['int'](val);
				$pyjs['track']['lineno']=166;
				var 				$lambda41 = function(value) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.rect','lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.rect';
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					var $pyjs__ret = self['__setattr__']('x', value);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda41['__name__'] = '$lambda41';

				$lambda41['__bind_type__'] = 0;
				$lambda41['__args__'] = [null,null,['value']];
				var 				$lambda42 = function(value) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.rect','lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.rect';
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					var $pyjs__ret = self['__setattr__']('y', value);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda42['__name__'] = '$lambda42';

				$lambda42['__bind_type__'] = 0;
				$lambda42['__args__'] = [null,null,['value']];
				var 				$lambda43 = function(value) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.rect','lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.rect';
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					var $pyjs__ret = self['__setattr__']('width', value);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda43['__name__'] = '$lambda43';

				$lambda43['__bind_type__'] = 0;
				$lambda43['__args__'] = [null,null,['value']];
				var 				$lambda44 = function(value) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.rect','lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.rect';
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					var $pyjs__ret = self['__setattr__']('height', value);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda44['__name__'] = '$lambda44';

				$lambda44['__bind_type__'] = 0;
				$lambda44['__args__'] = [null,null,['value']];
				$p['list']([$lambda41, $lambda42, $lambda43, $lambda44])['__getitem__'](key)(value);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['key'],['val']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=168;
			$method = $pyjs__bind_method2('__iter__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':168};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=168;
				$pyjs['track']['lineno']=172;
				$pyjs['track']['lineno']=172;
				var $pyjs__ret = $p['iter']($p['list']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=174;
			$method = $pyjs__bind_method2('__len__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':174};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=174;
				$pyjs['track']['lineno']=175;
				$pyjs['track']['lineno']=175;
				var $pyjs__ret = $constant_int_4;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=177;
			$method = $pyjs__bind_method2('__nonzero__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=181;
				$pyjs['track']['lineno']=181;
				var $pyjs__ret = ($p['bool']($and1=$p['getattr'](self, 'width'))?$p['getattr'](self, 'height'):$and1);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__nonzero__'] = $method;
			$pyjs['track']['lineno']=183;
			$method = $pyjs__bind_method2('__eq__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and3,$and4,$and5,$and6;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':183};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=183;
				$pyjs['track']['lineno']=187;
				$pyjs['track']['lineno']=187;
				var $pyjs__ret = ($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'x'), $p['getattr'](other, 'x')))?($p['bool']($and4=$p['op_eq']($p['getattr'](self, 'y'), $p['getattr'](other, 'y')))?($p['bool']($and5=$p['op_eq']($p['getattr'](self, 'width'), $p['getattr'](other, 'width')))?$p['op_eq']($p['getattr'](self, 'height'), $p['getattr'](other, 'height')):$and5):$and4):$and3);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__eq__'] = $method;
			$pyjs['track']['lineno']=189;
			$method = $pyjs__bind_method2('__ne__', function(other) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					other = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or4,$or1,$or3,$or2;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':189};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=189;
				$pyjs['track']['lineno']=193;
				$pyjs['track']['lineno']=193;
				var $pyjs__ret = ($p['bool']($or1=!$p['op_eq']($p['getattr'](self, 'x'), $p['getattr'](other, 'x')))?$or1:($p['bool']($or2=!$p['op_eq']($p['getattr'](self, 'y'), $p['getattr'](other, 'y')))?$or2:($p['bool']($or3=!$p['op_eq']($p['getattr'](self, 'width'), $p['getattr'](other, 'width')))?$or3:!$p['op_eq']($p['getattr'](self, 'height'), $p['getattr'](other, 'height')))));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__ne__'] = $method;
			$pyjs['track']['lineno']=195;
			$method = $pyjs__bind_method2('setLocation', function(x, y) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=195;
				$pyjs['track']['lineno']=196;
				$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['int'](x));
				$pyjs['track']['lineno']=197;
				$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['int'](y));
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=198;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['setLocation'] = $method;
			$pyjs['track']['lineno']=200;
			$method = $pyjs__bind_method2('setSize', function(w, h) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					w = arguments[1];
					h = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=201;
				$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['int'](w));
				$pyjs['track']['lineno']=202;
				$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['int'](h));
				$pyjs['track']['lineno']=203;
				$pyjs['track']['lineno']=203;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['w'],['h']]);
			$cls_definition['setSize'] = $method;
			$pyjs['track']['lineno']=205;
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=205;
				$pyjs['track']['lineno']=209;
				$pyjs['track']['lineno']=209;
				var $pyjs__ret = $m['Rect']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=211;
			$method = $pyjs__bind_method2('move', function(x, y) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add33,$add36,$add34,$add35;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':211};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=211;
				$pyjs['track']['lineno']=215;
				$pyjs['track']['lineno']=215;
				var $pyjs__ret = $m['Rect']($p['__op_add']($add33=$p['getattr'](self, 'x'),$add34=x), $p['__op_add']($add35=$p['getattr'](self, 'y'),$add36=y), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['move'] = $method;
			$pyjs['track']['lineno']=217;
			$method = $pyjs__bind_method2('move_ip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var pos = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var pos = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add38,$add39,$add37,$add44,$add43,$add41,$add40,$add42;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':217};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=217;
				$pyjs['track']['lineno']=221;
				if ($p['bool']($p['op_eq']($p['len'](pos), $constant_int_2))) {
					$pyjs['track']['lineno']=222;
					self['setLocation']($p['__op_add']($add37=$p['getattr'](self, 'x'),$add38=pos['__getitem__']($constant_int_0)), $p['__op_add']($add39=$p['getattr'](self, 'y'),$add40=pos['__getitem__']($constant_int_1)));
				}
				else {
					$pyjs['track']['lineno']=224;
					self['setLocation']($p['__op_add']($add41=$p['getattr'](self, 'x'),$add42=pos['__getitem__']($constant_int_0)['__getitem__']($constant_int_0)), $p['__op_add']($add43=$p['getattr'](self, 'y'),$add44=pos['__getitem__']($constant_int_0)['__getitem__']($constant_int_1)));
				}
				$pyjs['track']['lineno']=225;
				$pyjs['track']['lineno']=225;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['pos',null,['self']]);
			$cls_definition['move_ip'] = $method;
			$pyjs['track']['lineno']=227;
			$method = $pyjs__bind_method2('inflate', function(x, y) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub35,$div33,$sub33,$div36,$sub34,$div34,$div35,$add47,$add46,$sub36,$add48,$add45;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=227;
				$pyjs['track']['lineno']=231;
				$pyjs['track']['lineno']=231;
				var $pyjs__ret = $m['Rect']($p['__op_sub']($sub33=$p['getattr'](self, 'x'),$sub34=$p['int']((typeof ($div33=$p['float'](x))==typeof ($div34=$constant_int_2) && typeof $div33=='number' && $div34 !== 0?
					$div33/$div34:
					$p['op_div']($div33,$div34)))), $p['__op_sub']($sub35=$p['getattr'](self, 'y'),$sub36=$p['int']((typeof ($div35=$p['float'](y))==typeof ($div36=$constant_int_2) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					$p['op_div']($div35,$div36)))), $p['__op_add']($add45=$p['getattr'](self, 'width'),$add46=x), $p['__op_add']($add47=$p['getattr'](self, 'height'),$add48=y));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['inflate'] = $method;
			$pyjs['track']['lineno']=233;
			$method = $pyjs__bind_method2('inflate_ip', function(x, y) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add50,$add51,$add52,$div37,$add49,$div40,$sub39,$sub38,$div39,$sub40,$sub37,$div38;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':233};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=233;
				$pyjs['track']['lineno']=237;
				self['setSize']($p['__op_add']($add49=$p['getattr'](self, 'width'),$add50=x), $p['__op_add']($add51=$p['getattr'](self, 'height'),$add52=y));
				$pyjs['track']['lineno']=238;
				self['setLocation']($p['__op_sub']($sub37=$p['getattr'](self, 'x'),$sub38=$p['int']((typeof ($div37=$p['float'](x))==typeof ($div38=$constant_int_2) && typeof $div37=='number' && $div38 !== 0?
					$div37/$div38:
					$p['op_div']($div37,$div38)))), $p['__op_sub']($sub39=$p['getattr'](self, 'y'),$sub40=$p['int']((typeof ($div39=$p['float'](y))==typeof ($div40=$constant_int_2) && typeof $div39=='number' && $div40 !== 0?
					$div39/$div40:
					$p['op_div']($div39,$div40)))));
				$pyjs['track']['lineno']=239;
				$pyjs['track']['lineno']=239;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['x'],['y']]);
			$cls_definition['inflate_ip'] = $method;
			$pyjs['track']['lineno']=241;
			$method = $pyjs__bind_method2('clip', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var h,$add53,$add54,$add55,$add56,$add57,$add58,$add59,s,r,w,$sub41,y,x,$sub42,$sub43,$sub44,$add60;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':241};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=241;
				$pyjs['track']['lineno']=242;
				if ($p['bool'](!$p['bool'](self['intersects'](rect)))) {
					$pyjs['track']['lineno']=243;
					$pyjs['track']['lineno']=243;
					var $pyjs__ret = $m['Rect']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=245;
					x = ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == 1))? ($p['getattr'](self, 'x')) : ($p['getattr'](rect, 'x')));
					$pyjs['track']['lineno']=246;
					y = ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == 1))? ($p['getattr'](self, 'y')) : ($p['getattr'](rect, 'y')));
					$pyjs['track']['lineno']=247;
					s = $p['__op_add']($add53=$p['getattr'](self, 'x'),$add54=$p['getattr'](self, 'width'));
					$pyjs['track']['lineno']=248;
					r = $p['__op_add']($add55=$p['getattr'](rect, 'x'),$add56=$p['getattr'](rect, 'width'));
					$pyjs['track']['lineno']=249;
					w = $p['__op_sub']($sub41=($p['bool'](($p['cmp'](s, r) == -1))? (s) : (r)),$sub42=x);
					$pyjs['track']['lineno']=250;
					s = $p['__op_add']($add57=$p['getattr'](self, 'y'),$add58=$p['getattr'](self, 'height'));
					$pyjs['track']['lineno']=251;
					r = $p['__op_add']($add59=$p['getattr'](rect, 'y'),$add60=$p['getattr'](rect, 'height'));
					$pyjs['track']['lineno']=252;
					h = $p['__op_sub']($sub43=($p['bool'](($p['cmp'](s, r) == -1))? (s) : (r)),$sub44=y);
					$pyjs['track']['lineno']=253;
					$pyjs['track']['lineno']=253;
					var $pyjs__ret = $m['Rect'](x, y, w, h);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['clip'] = $method;
			$pyjs['track']['lineno']=255;
			$method = $pyjs__bind_method2('intersection', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=256;
				$pyjs['track']['lineno']=256;
				var $pyjs__ret = self['clip'](rect);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['intersection'] = $method;
			$pyjs['track']['lineno']=258;
			$method = $pyjs__bind_method2('contains', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and8,$add64,$add67,$add66,$add61,$add63,$add62,$add65,$add68,$and7,$and10,$and9;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':258};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=258;
				$pyjs['track']['lineno']=262;
				$pyjs['track']['lineno']=262;
				var $pyjs__ret = ($p['bool']($and7=($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) < 1))?($p['bool']($and8=((($p['cmp']($p['__op_add']($add61=$p['getattr'](self, 'x'),$add62=$p['getattr'](self, 'width')), $p['__op_add']($add63=$p['getattr'](rect, 'x'),$add64=$p['getattr'](rect, 'width'))))|1) == 1))?($p['bool']($and9=($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) < 1))?((($p['cmp']($p['__op_add']($add65=$p['getattr'](self, 'y'),$add66=$p['getattr'](self, 'height')), $p['__op_add']($add67=$p['getattr'](rect, 'y'),$add68=$p['getattr'](rect, 'height'))))|1) == 1):$and9):$and8):$and7);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['contains'] = $method;
			$pyjs['track']['lineno']=264;
			$method = $pyjs__bind_method2('intersects', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add76,$add74,$add75,$add72,$add73,$add70,$add71,$add69,$and12,$and13,$and11,$and14;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':264};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=264;
				$pyjs['track']['lineno']=265;
				$pyjs['track']['lineno']=265;
				var $pyjs__ret = ($p['bool']($and11=($p['cmp']($p['getattr'](self, 'x'), $p['__op_add']($add69=$p['getattr'](rect, 'x'),$add70=$p['getattr'](rect, 'width'))) == -1))?($p['bool']($and12=($p['cmp']($p['getattr'](rect, 'x'), $p['__op_add']($add71=$p['getattr'](self, 'x'),$add72=$p['getattr'](self, 'width'))) == -1))?($p['bool']($and13=($p['cmp']($p['getattr'](self, 'y'), $p['__op_add']($add73=$p['getattr'](rect, 'y'),$add74=$p['getattr'](rect, 'height'))) == -1))?($p['cmp']($p['getattr'](rect, 'y'), $p['__op_add']($add75=$p['getattr'](self, 'y'),$add76=$p['getattr'](self, 'height'))) == -1):$and13):$and12):$and11);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['intersects'] = $method;
			$pyjs['track']['lineno']=267;
			$method = $pyjs__bind_method2('union', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add77,$add83,$add82,$add80,$add81,$add78,$add79,$sub48,s,r,$sub46,w,h,y,x,$add84,$sub45,$sub47;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=267;
				$pyjs['track']['lineno']=271;
				x = ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))? ($p['getattr'](self, 'x')) : ($p['getattr'](rect, 'x')));
				$pyjs['track']['lineno']=272;
				y = ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))? ($p['getattr'](self, 'y')) : ($p['getattr'](rect, 'y')));
				$pyjs['track']['lineno']=273;
				s = $p['__op_add']($add77=$p['getattr'](self, 'x'),$add78=$p['getattr'](self, 'width'));
				$pyjs['track']['lineno']=274;
				r = $p['__op_add']($add79=$p['getattr'](rect, 'x'),$add80=$p['getattr'](rect, 'width'));
				$pyjs['track']['lineno']=275;
				w = $p['__op_sub']($sub45=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub46=x);
				$pyjs['track']['lineno']=276;
				s = $p['__op_add']($add81=$p['getattr'](self, 'y'),$add82=$p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=277;
				r = $p['__op_add']($add83=$p['getattr'](rect, 'y'),$add84=$p['getattr'](rect, 'height'));
				$pyjs['track']['lineno']=278;
				h = $p['__op_sub']($sub47=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub48=y);
				$pyjs['track']['lineno']=279;
				$pyjs['track']['lineno']=279;
				var $pyjs__ret = $m['Rect'](x, y, w, h);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['union'] = $method;
			$pyjs['track']['lineno']=281;
			$method = $pyjs__bind_method2('union_ip', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add89,$add88,$sub52,$sub51,$sub50,$add90,$add87,$add86,$add85,$add91,$sub49,s,r,$add92,w,h,y,x;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':281};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=281;
				$pyjs['track']['lineno']=285;
				x = ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))? ($p['getattr'](self, 'x')) : ($p['getattr'](rect, 'x')));
				$pyjs['track']['lineno']=286;
				y = ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))? ($p['getattr'](self, 'y')) : ($p['getattr'](rect, 'y')));
				$pyjs['track']['lineno']=287;
				s = $p['__op_add']($add85=$p['getattr'](self, 'x'),$add86=$p['getattr'](self, 'width'));
				$pyjs['track']['lineno']=288;
				r = $p['__op_add']($add87=$p['getattr'](rect, 'x'),$add88=$p['getattr'](rect, 'width'));
				$pyjs['track']['lineno']=289;
				w = $p['__op_sub']($sub49=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub50=x);
				$pyjs['track']['lineno']=290;
				s = $p['__op_add']($add89=$p['getattr'](self, 'y'),$add90=$p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=291;
				r = $p['__op_add']($add91=$p['getattr'](rect, 'y'),$add92=$p['getattr'](rect, 'height'));
				$pyjs['track']['lineno']=292;
				h = $p['__op_sub']($sub51=($p['bool'](($p['cmp'](s, r) == 1))? (s) : (r)),$sub52=y);
				$pyjs['track']['lineno']=293;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x) : $p['setattr'](self, 'x', x); 
				$pyjs['track']['lineno']=294;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y) : $p['setattr'](self, 'y', y); 
				$pyjs['track']['lineno']=295;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', w) : $p['setattr'](self, 'width', w); 
				$pyjs['track']['lineno']=296;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', h) : $p['setattr'](self, 'height', h); 
				$pyjs['track']['lineno']=297;
				$pyjs['track']['lineno']=297;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['union_ip'] = $method;
			$pyjs['track']['lineno']=299;
			$method = $pyjs__bind_method2('unionall', function(rect_list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rect_list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub56,$iter1_iter,y1,$add98,y2,$sub53,$iter1_array,rx2,$add100,$sub55,$sub54,$iter1_nextval,$add99,$add94,$add95,$add96,$add97,$add93,x2,x1,$iter1_type,r,$iter1_idx,$pyjs__trackstack_size_1,ry2;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':299};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=299;
				$pyjs['track']['lineno']=303;
				x1 = $p['getattr'](self, 'x');
				$pyjs['track']['lineno']=304;
				y1 = $p['getattr'](self, 'y');
				$pyjs['track']['lineno']=305;
				x2 = $p['__op_add']($add93=$p['getattr'](self, 'x'),$add94=$p['getattr'](self, 'width'));
				$pyjs['track']['lineno']=306;
				y2 = $p['__op_add']($add95=$p['getattr'](self, 'y'),$add96=$p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=307;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = rect_list;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					r = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=308;
					if ($p['bool'](($p['cmp']($p['getattr'](r, 'x'), x1) == -1))) {
						$pyjs['track']['lineno']=309;
						x1 = $p['getattr'](r, 'x');
					}
					$pyjs['track']['lineno']=310;
					if ($p['bool'](($p['cmp']($p['getattr'](r, 'y'), y1) == -1))) {
						$pyjs['track']['lineno']=311;
						y1 = $p['getattr'](r, 'y');
					}
					$pyjs['track']['lineno']=312;
					rx2 = $p['__op_add']($add97=$p['getattr'](r, 'x'),$add98=$p['getattr'](r, 'width'));
					$pyjs['track']['lineno']=313;
					if ($p['bool'](($p['cmp'](rx2, x2) == 1))) {
						$pyjs['track']['lineno']=314;
						x2 = rx2;
					}
					$pyjs['track']['lineno']=315;
					ry2 = $p['__op_add']($add99=$p['getattr'](r, 'y'),$add100=$p['getattr'](r, 'height'));
					$pyjs['track']['lineno']=316;
					if ($p['bool'](($p['cmp'](ry2, y2) == 1))) {
						$pyjs['track']['lineno']=317;
						y2 = ry2;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=318;
				$pyjs['track']['lineno']=318;
				var $pyjs__ret = $m['Rect'](x1, y1, $p['__op_sub']($sub53=x2,$sub54=x1), $p['__op_sub']($sub55=y2,$sub56=y1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect_list']]);
			$cls_definition['unionall'] = $method;
			$pyjs['track']['lineno']=320;
			$method = $pyjs__bind_method2('unionall_ip', function(rect_list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rect_list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub57,y1,$add105,y2,$sub60,$iter2_iter,rx2,$add101,$add103,$add102,$iter2_type,$add104,$add107,$add106,$add108,$sub59,$sub58,$iter2_idx,x2,x1,$iter2_nextval,r,$pyjs__trackstack_size_1,ry2,$iter2_array;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':320};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=320;
				$pyjs['track']['lineno']=324;
				x1 = $p['getattr'](self, 'x');
				$pyjs['track']['lineno']=325;
				y1 = $p['getattr'](self, 'y');
				$pyjs['track']['lineno']=326;
				x2 = $p['__op_add']($add101=$p['getattr'](self, 'x'),$add102=$p['getattr'](self, 'width'));
				$pyjs['track']['lineno']=327;
				y2 = $p['__op_add']($add103=$p['getattr'](self, 'y'),$add104=$p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=328;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = rect_list;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					r = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=329;
					if ($p['bool'](($p['cmp']($p['getattr'](r, 'x'), x1) == -1))) {
						$pyjs['track']['lineno']=330;
						x1 = $p['getattr'](r, 'x');
					}
					$pyjs['track']['lineno']=331;
					if ($p['bool'](($p['cmp']($p['getattr'](r, 'y'), y1) == -1))) {
						$pyjs['track']['lineno']=332;
						y1 = $p['getattr'](r, 'y');
					}
					$pyjs['track']['lineno']=333;
					rx2 = $p['__op_add']($add105=$p['getattr'](r, 'x'),$add106=$p['getattr'](r, 'width'));
					$pyjs['track']['lineno']=334;
					if ($p['bool'](($p['cmp'](rx2, x2) == 1))) {
						$pyjs['track']['lineno']=335;
						x2 = rx2;
					}
					$pyjs['track']['lineno']=336;
					ry2 = $p['__op_add']($add107=$p['getattr'](r, 'y'),$add108=$p['getattr'](r, 'height'));
					$pyjs['track']['lineno']=337;
					if ($p['bool'](($p['cmp'](ry2, y2) == 1))) {
						$pyjs['track']['lineno']=338;
						y2 = ry2;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=339;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', x1) : $p['setattr'](self, 'x', x1); 
				$pyjs['track']['lineno']=340;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', y1) : $p['setattr'](self, 'y', y1); 
				$pyjs['track']['lineno']=341;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['__op_sub']($sub57=x2,$sub58=x1)) : $p['setattr'](self, 'width', $p['__op_sub']($sub57=x2,$sub58=x1)); 
				$pyjs['track']['lineno']=342;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['__op_sub']($sub59=y2,$sub60=y1)) : $p['setattr'](self, 'height', $p['__op_sub']($sub59=y2,$sub60=y1)); 
				$pyjs['track']['lineno']=343;
				$pyjs['track']['lineno']=343;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect_list']]);
			$cls_definition['unionall_ip'] = $method;
			$pyjs['track']['lineno']=345;
			$method = $pyjs__bind_method2('clamp', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add118,$add119,$add116,$add117,$add114,$add115,$add112,$add113,$add110,$add111,$sub68,$sub69,$sub66,$sub67,$sub64,$sub65,$sub62,$sub63,$sub61,newrect,$add120,$add109,$sub71,$sub70,$sub72,$div44,$div43,$div42,$div41;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':345};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=345;
				$pyjs['track']['lineno']=349;
				newrect = $m['Rect']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
				$pyjs['track']['lineno']=350;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'width'), $p['getattr'](rect, 'width')) == -1))) {
					$pyjs['track']['lineno']=351;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))) {
						$pyjs['track']['lineno']=352;
						$p['$$super']($m['Rect'], newrect)['__setattr__']('x', $p['getattr'](rect, 'x'));
					}
					else if ($p['bool'](($p['cmp']($p['__op_add']($add109=$p['getattr'](self, 'x'),$add110=$p['getattr'](self, 'width')), $p['__op_add']($add111=$p['getattr'](rect, 'x'),$add112=$p['getattr'](rect, 'width'))) == 1))) {
						$pyjs['track']['lineno']=354;
						$p['$$super']($m['Rect'], newrect)['__setattr__']('x', $p['__op_sub']($sub61=$p['__op_add']($add113=$p['getattr'](rect, 'x'),$add114=$p['getattr'](rect, 'width')),$sub62=$p['getattr'](self, 'width')));
					}
				}
				else {
					$pyjs['track']['lineno']=356;
					$p['$$super']($m['Rect'], newrect)['__setattr__']('x', $p['__op_sub']($sub65=$p['getattr'](rect, 'x'),$sub66=$p['int']((typeof ($div41=$p['__op_sub']($sub63=$p['getattr'](self, 'width'),$sub64=$p['getattr'](rect, 'width')))==typeof ($div42=$constant_int_2) && typeof $div41=='number' && $div42 !== 0?
						$div41/$div42:
						$p['op_div']($div41,$div42)))));
				}
				$pyjs['track']['lineno']=357;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'height'), $p['getattr'](rect, 'height')) == -1))) {
					$pyjs['track']['lineno']=358;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))) {
						$pyjs['track']['lineno']=359;
						$p['$$super']($m['Rect'], newrect)['__setattr__']('y', $p['getattr'](rect, 'y'));
					}
					else if ($p['bool'](($p['cmp']($p['__op_add']($add115=$p['getattr'](self, 'y'),$add116=$p['getattr'](self, 'height')), $p['__op_add']($add117=$p['getattr'](rect, 'y'),$add118=$p['getattr'](rect, 'height'))) == 1))) {
						$pyjs['track']['lineno']=361;
						$p['$$super']($m['Rect'], newrect)['__setattr__']('y', $p['__op_sub']($sub67=$p['__op_add']($add119=$p['getattr'](rect, 'y'),$add120=$p['getattr'](rect, 'height')),$sub68=$p['getattr'](self, 'height')));
					}
				}
				else {
					$pyjs['track']['lineno']=363;
					$p['$$super']($m['Rect'], newrect)['__setattr__']('y', $p['__op_sub']($sub71=$p['getattr'](rect, 'y'),$sub72=$p['int']((typeof ($div43=$p['__op_sub']($sub69=$p['getattr'](self, 'height'),$sub70=$p['getattr'](rect, 'height')))==typeof ($div44=$constant_int_2) && typeof $div43=='number' && $div44 !== 0?
						$div43/$div44:
						$p['op_div']($div43,$div44)))));
				}
				$pyjs['track']['lineno']=364;
				$pyjs['track']['lineno']=364;
				var $pyjs__ret = newrect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['clamp'] = $method;
			$pyjs['track']['lineno']=366;
			$method = $pyjs__bind_method2('clamp_ip', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add130,$add131,$add132,$sub84,$sub80,$sub81,$sub82,$sub83,$add127,$add126,$add125,$add124,$add123,$add122,$add121,$add129,$add128,$sub79,$sub78,$sub75,$sub74,$sub77,$sub76,$sub73,$div47,$div46,$div45,$div48;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':366};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=366;
				$pyjs['track']['lineno']=370;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'width'), $p['getattr'](rect, 'width')) == -1))) {
					$pyjs['track']['lineno']=371;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['getattr'](rect, 'x')) == -1))) {
						$pyjs['track']['lineno']=372;
						$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['getattr'](rect, 'x'));
					}
					else if ($p['bool'](($p['cmp']($p['__op_add']($add121=$p['getattr'](self, 'x'),$add122=$p['getattr'](self, 'width')), $p['__op_add']($add123=$p['getattr'](rect, 'x'),$add124=$p['getattr'](rect, 'width'))) == 1))) {
						$pyjs['track']['lineno']=374;
						$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['__op_sub']($sub73=$p['__op_add']($add125=$p['getattr'](rect, 'x'),$add126=$p['getattr'](rect, 'width')),$sub74=$p['getattr'](self, 'width')));
					}
				}
				else {
					$pyjs['track']['lineno']=376;
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['__op_sub']($sub77=$p['getattr'](rect, 'x'),$sub78=$p['int']((typeof ($div45=$p['__op_sub']($sub75=$p['getattr'](self, 'width'),$sub76=$p['getattr'](rect, 'width')))==typeof ($div46=$constant_int_2) && typeof $div45=='number' && $div46 !== 0?
						$div45/$div46:
						$p['op_div']($div45,$div46)))));
				}
				$pyjs['track']['lineno']=377;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'height'), $p['getattr'](rect, 'height')) == -1))) {
					$pyjs['track']['lineno']=378;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['getattr'](rect, 'y')) == -1))) {
						$pyjs['track']['lineno']=379;
						$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['getattr'](rect, 'y'));
					}
					else if ($p['bool'](($p['cmp']($p['__op_add']($add127=$p['getattr'](self, 'y'),$add128=$p['getattr'](self, 'height')), $p['__op_add']($add129=$p['getattr'](rect, 'y'),$add130=$p['getattr'](rect, 'height'))) == 1))) {
						$pyjs['track']['lineno']=381;
						$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['__op_sub']($sub79=$p['__op_add']($add131=$p['getattr'](rect, 'y'),$add132=$p['getattr'](rect, 'height')),$sub80=$p['getattr'](self, 'height')));
					}
				}
				else {
					$pyjs['track']['lineno']=383;
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['__op_sub']($sub83=$p['getattr'](rect, 'y'),$sub84=$p['int']((typeof ($div47=$p['__op_sub']($sub81=$p['getattr'](self, 'height'),$sub82=$p['getattr'](rect, 'height')))==typeof ($div48=$constant_int_2) && typeof $div47=='number' && $div48 !== 0?
						$div47/$div48:
						$p['op_div']($div47,$div48)))));
				}
				$pyjs['track']['lineno']=384;
				$pyjs['track']['lineno']=384;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['clamp_ip'] = $method;
			$pyjs['track']['lineno']=386;
			$method = $pyjs__bind_method2('set', function() {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var ln,arg;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':386};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=386;
				$pyjs['track']['lineno']=396;
				if ($p['bool']($p['op_eq']($p['len'](args), $constant_int_1))) {
					$pyjs['track']['lineno']=397;
					arg = args['__getitem__']($constant_int_0);
				}
				else {
					$pyjs['track']['lineno']=399;
					arg = args;
				}
				$pyjs['track']['lineno']=400;
				ln = $p['len'](arg);
				$pyjs['track']['lineno']=401;
				if ($p['bool']($p['op_eq'](ln, $constant_int_4))) {
					$pyjs['track']['lineno']=402;
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['int'](arg['__getitem__']($constant_int_0)));
					$pyjs['track']['lineno']=403;
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['int'](arg['__getitem__']($constant_int_1)));
					$pyjs['track']['lineno']=404;
					$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['int'](arg['__getitem__']($constant_int_2)));
					$pyjs['track']['lineno']=405;
					$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['int'](arg['__getitem__']($constant_int_3)));
				}
				else if ($p['bool']($p['op_eq'](ln, $constant_int_2))) {
					$pyjs['track']['lineno']=407;
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['int'](arg['__getitem__']($constant_int_0)['__getitem__']($constant_int_0)));
					$pyjs['track']['lineno']=408;
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['int'](arg['__getitem__']($constant_int_0)['__getitem__']($constant_int_1)));
					$pyjs['track']['lineno']=409;
					$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['int'](arg['__getitem__']($constant_int_1)['__getitem__']($constant_int_0)));
					$pyjs['track']['lineno']=410;
					$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['int'](arg['__getitem__']($constant_int_1)['__getitem__']($constant_int_1)));
				}
				else {
					$pyjs['track']['lineno']=412;
					if ($p['bool']($p['hasattr'](arg, 'rect'))) {
						$pyjs['track']['lineno']=413;
						arg = $p['getattr'](arg, 'rect');
					}
					$pyjs['track']['lineno']=414;
					$p['$$super']($m['Rect'], self)['__setattr__']('x', $p['getattr'](arg, 'x'));
					$pyjs['track']['lineno']=415;
					$p['$$super']($m['Rect'], self)['__setattr__']('y', $p['getattr'](arg, 'y'));
					$pyjs['track']['lineno']=416;
					$p['$$super']($m['Rect'], self)['__setattr__']('width', $p['getattr'](arg, 'width'));
					$pyjs['track']['lineno']=417;
					$p['$$super']($m['Rect'], self)['__setattr__']('height', $p['getattr'](arg, 'height'));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=419;
			$method = $pyjs__bind_method2('collidepoint', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var point = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var point = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add134,$add135,$add136,$add137,$add133,$add138,$add139,$and16,$and17,$and15,$and18,$add140;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':419};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=419;
				$pyjs['track']['lineno']=423;
				if ($p['bool']($p['op_eq']($p['len'](point), $constant_int_2))) {
					$pyjs['track']['lineno']=424;
					$pyjs['track']['lineno']=424;
					var $pyjs__ret = ($p['bool']($and15=(($p['cmp']($p['getattr'](self, 'x'), ($compare1 = point['__getitem__']($constant_int_0))) < 1)&&($p['cmp']($compare1, ($compare2 = $p['__op_add']($add133=$p['getattr'](self, 'x'),$add134=$p['getattr'](self, 'width')))) == -1)))?(($p['cmp']($p['getattr'](self, 'y'), ($compare3 = point['__getitem__']($constant_int_1))) < 1)&&($p['cmp']($compare3, ($compare4 = $p['__op_add']($add135=$p['getattr'](self, 'y'),$add136=$p['getattr'](self, 'height')))) == -1)):$and15);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=426;
					$pyjs['track']['lineno']=426;
					var $pyjs__ret = ($p['bool']($and17=(($p['cmp']($p['getattr'](self, 'x'), ($compare5 = point['__getitem__']($constant_int_0)['__getitem__']($constant_int_0))) < 1)&&($p['cmp']($compare5, ($compare6 = $p['__op_add']($add137=$p['getattr'](self, 'x'),$add138=$p['getattr'](self, 'width')))) == -1)))?(($p['cmp']($p['getattr'](self, 'y'), ($compare7 = point['__getitem__']($constant_int_0)['__getitem__']($constant_int_1))) < 1)&&($p['cmp']($compare7, ($compare8 = $p['__op_add']($add139=$p['getattr'](self, 'y'),$add140=$p['getattr'](self, 'height')))) == -1)):$and17);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['point',null,['self']]);
			$cls_definition['collidepoint'] = $method;
			$pyjs['track']['lineno']=428;
			$method = $pyjs__bind_method2('colliderect', function(rect) {
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
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':428};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=428;
				$pyjs['track']['lineno']=432;
				$pyjs['track']['lineno']=432;
				var $pyjs__ret = self['intersects'](rect);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect']]);
			$cls_definition['colliderect'] = $method;
			$pyjs['track']['lineno']=434;
			$method = $pyjs__bind_method2('collidelist', function(rects) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rects = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,i,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval,rect;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':434};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=434;
				$pyjs['track']['lineno']=438;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $p['enumerate'](rects);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					i = $tupleassign1[0];
					rect = $tupleassign1[1];
					$pyjs['track']['lineno']=439;
					if ($p['bool'](self['intersects'](rect))) {
						$pyjs['track']['lineno']=440;
						$pyjs['track']['lineno']=440;
						var $pyjs__ret = i;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=441;
				$pyjs['track']['lineno']=441;
				var $pyjs__ret = (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rects']]);
			$cls_definition['collidelist'] = $method;
			$pyjs['track']['lineno']=443;
			$method = $pyjs__bind_method2('collidelistall', function(rects) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rects = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var i,$iter4_nextval,$iter4_idx,$iter4_array,collided,$iter4_type,$pyjs__trackstack_size_1,$iter4_iter,rect;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':443};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=443;
				$pyjs['track']['lineno']=447;
				collided = $p['list']([]);
				$pyjs['track']['lineno']=448;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['enumerate'](rects);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
					i = $tupleassign2[0];
					rect = $tupleassign2[1];
					$pyjs['track']['lineno']=449;
					if ($p['bool'](self['colliderect'](rect))) {
						$pyjs['track']['lineno']=450;
						collided['append'](i);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=451;
				$pyjs['track']['lineno']=451;
				var $pyjs__ret = collided;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rects']]);
			$cls_definition['collidelistall'] = $method;
			$pyjs['track']['lineno']=453;
			$method = $pyjs__bind_method2('collidedict', function(rects) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rects = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter5_array,$pyjs__trackstack_size_1,$iter5_iter,$iter5_idx,$iter5_type,rect;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':453};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=453;
				$pyjs['track']['lineno']=457;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = rects;
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					rect = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=458;
					if ($p['bool'](self['colliderect'](rects['__getitem__'](rect)))) {
						$pyjs['track']['lineno']=459;
						$pyjs['track']['lineno']=459;
						var $pyjs__ret = $p['tuple']([rect, rects['__getitem__'](rect)]);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=460;
				$pyjs['track']['lineno']=460;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rects']]);
			$cls_definition['collidedict'] = $method;
			$pyjs['track']['lineno']=462;
			$method = $pyjs__bind_method2('collidedictall', function(rects) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rects = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '60c405614fe1673d4e6123d4db59f8ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,$iter6_array,collided,$pyjs__trackstack_size_1,$iter6_iter,rect,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':462};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=462;
				$pyjs['track']['lineno']=466;
				collided = $p['list']([]);
				$pyjs['track']['lineno']=467;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = rects;
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					rect = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=468;
					if ($p['bool'](self['colliderect'](rects['__getitem__'](rect)))) {
						$pyjs['track']['lineno']=469;
						collided['append']($p['tuple']([rect, rects['__getitem__'](rect)]));
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=470;
				$pyjs['track']['lineno']=470;
				var $pyjs__ret = collided;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rects']]);
			$cls_definition['collidedictall'] = $method;
			$pyjs['track']['lineno']=7;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Rect', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=473;
		$m['RectPool'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.rect';
			$cls_definition['__md5__'] = '48a7dc5e5850406b99e171c46e469d17';
			$pyjs['track']['lineno']=485;
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
					if (self.prototype['__md5__'] !== '48a7dc5e5850406b99e171c46e469d17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':485};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=485;
				$pyjs['track']['lineno']=486;
				$p['list']['__init__'](self);
				$pyjs['track']['lineno']=487;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('add', $p['getattr'](self, 'append')) : $p['setattr'](self, 'add', $p['getattr'](self, 'append')); 
				$pyjs['track']['lineno']=488;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('addAll', $p['getattr'](self, 'extend')) : $p['setattr'](self, 'addAll', $p['getattr'](self, 'extend')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=490;
			$method = $pyjs__bind_method2('get', function(x, y, width, height) {
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
					if (self.prototype['__md5__'] !== '48a7dc5e5850406b99e171c46e469d17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rect;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':490};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=490;
				$pyjs['track']['lineno']=494;
				if ($p['bool'](self)) {
					$pyjs['track']['lineno']=495;
					rect = self['pop']();
					$pyjs['track']['lineno']=496;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('x', x) : $p['setattr'](rect, 'x', x); 
					$pyjs['track']['lineno']=497;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('y', y) : $p['setattr'](rect, 'y', y); 
					$pyjs['track']['lineno']=498;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('width', width) : $p['setattr'](rect, 'width', width); 
					$pyjs['track']['lineno']=499;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('height', height) : $p['setattr'](rect, 'height', height); 
					$pyjs['track']['lineno']=500;
					$pyjs['track']['lineno']=500;
					var $pyjs__ret = rect;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=502;
					$pyjs['track']['lineno']=502;
					var $pyjs__ret = $m['Rect'](x, y, width, height);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
			$cls_definition['get'] = $method;
			$pyjs['track']['lineno']=504;
			$method = $pyjs__bind_method2('copy', function(r) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					r = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48a7dc5e5850406b99e171c46e469d17') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var rect;
				$pyjs['track']={'module':'pyjsdl.rect', 'lineno':504};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.rect';
				$pyjs['track']['lineno']=504;
				$pyjs['track']['lineno']=508;
				if ($p['bool'](self)) {
					$pyjs['track']['lineno']=509;
					rect = self['pop']();
					$pyjs['track']['lineno']=510;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('x', $p['getattr'](r, 'x')) : $p['setattr'](rect, 'x', $p['getattr'](r, 'x')); 
					$pyjs['track']['lineno']=511;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('y', $p['getattr'](r, 'y')) : $p['setattr'](rect, 'y', $p['getattr'](r, 'y')); 
					$pyjs['track']['lineno']=512;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('width', $p['getattr'](r, 'width')) : $p['setattr'](rect, 'width', $p['getattr'](r, 'width')); 
					$pyjs['track']['lineno']=513;
					rect['__is_instance__'] && typeof rect['__setattr__'] == 'function' ? rect['__setattr__']('height', $p['getattr'](r, 'height')) : $p['setattr'](rect, 'height', $p['getattr'](r, 'height')); 
					$pyjs['track']['lineno']=514;
					$pyjs['track']['lineno']=514;
					var $pyjs__ret = rect;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=516;
					$pyjs['track']['lineno']=516;
					var $pyjs__ret = $m['Rect']($p['getattr'](r, 'x'), $p['getattr'](r, 'y'), $p['getattr'](r, 'width'), $p['getattr'](r, 'height'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['r']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=473;
			var $bases = new Array($p['list']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RectPool', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=518;
		$m['rectPool'] = $m['RectPool']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.rect */


/* end module: pyjsdl.rect */


