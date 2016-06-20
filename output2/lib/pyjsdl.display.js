/* start module: pyjsdl.display */
$pyjs['loaded_modules']['pyjsdl.display'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.display']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.display'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.display'];
	$m['__repr__'] = function() { return '<module: pyjsdl.display>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.display';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['display'] = $pyjs['loaded_modules']['pyjsdl.display'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.display.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.display.py, line 4:\n    from surface import Surface';
		$m.__track_lines__[5] = 'pyjsdl.display.py, line 5:\n    from rect import Rect';
		$m.__track_lines__[6] = 'pyjsdl.display.py, line 6:\n    from time import Time';
		$m.__track_lines__[7] = 'pyjsdl.display.py, line 7:\n    from color import Color';
		$m.__track_lines__[8] = 'pyjsdl.display.py, line 8:\n    import env';
		$m.__track_lines__[9] = 'pyjsdl.display.py, line 9:\n    import pyjsdl.event';
		$m.__track_lines__[10] = 'pyjsdl.display.py, line 10:\n    from pyjsobj import DOM, Window, RootPanel, FocusPanel, VerticalPanel, loadImages, TextBox, TextArea, MouseWheelHandler, eventGetMouseWheelVelocityY, Event';
		$m.__track_lines__[11] = 'pyjsdl.display.py, line 11:\n    from __pyjamas__ import JS';
		$m.__track_lines__[12] = 'pyjsdl.display.py, line 12:\n    import base64';
		$m.__track_lines__[14] = "pyjsdl.display.py, line 14:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[17] = 'pyjsdl.display.py, line 17:\n    class Canvas(Surface, MouseWheelHandler):';
		$m.__track_lines__[19] = 'pyjsdl.display.py, line 19:\n    def __init__(self, size, buffered):';
		$m.__track_lines__[20] = 'pyjsdl.display.py, line 20:\n    Surface.__init__(self, size)';
		$m.__track_lines__[21] = 'pyjsdl.display.py, line 21:\n    MouseWheelHandler.__init__(self, True)';
		$m.__track_lines__[22] = 'pyjsdl.display.py, line 22:\n    if isinstance(buffered, bool):';
		$m.__track_lines__[23] = 'pyjsdl.display.py, line 23:\n    self._bufferedimage = buffered';
		$m.__track_lines__[25] = 'pyjsdl.display.py, line 25:\n    self._bufferedimage = True';
		$m.__track_lines__[26] = 'pyjsdl.display.py, line 26:\n    try:';
		$m.__track_lines__[27] = 'pyjsdl.display.py, line 27:\n    if self.impl.canvasContext:';
		$m.__track_lines__[28] = 'pyjsdl.display.py, line 28:\n    self._isCanvas = True';
		$m.__track_lines__[30] = 'pyjsdl.display.py, line 30:\n    self._isCanvas = False';
		$m.__track_lines__[31] = 'pyjsdl.display.py, line 31:\n    self._bufferedimage = False';
		$m.__track_lines__[32] = 'pyjsdl.display.py, line 32:\n    if self._bufferedimage:';
		$m.__track_lines__[33] = 'pyjsdl.display.py, line 33:\n    self.surface = Surface(size)';
		$m.__track_lines__[35] = 'pyjsdl.display.py, line 35:\n    self.surface = self';
		$m.__track_lines__[36] = 'pyjsdl.display.py, line 36:\n    self.resize(size[0], size[1])';
		$m.__track_lines__[37] = 'pyjsdl.display.py, line 37:\n    self.images = {}';
		$m.__track_lines__[38] = 'pyjsdl.display.py, line 38:\n    self.image_list = []';
		$m.__track_lines__[39] = 'pyjsdl.display.py, line 39:\n    self.function = None';
		$m.__track_lines__[40] = 'pyjsdl.display.py, line 40:\n    self.time_wait = 0';
		$m.__track_lines__[41] = 'pyjsdl.display.py, line 41:\n    self.time = Time()';
		$m.__track_lines__[42] = 'pyjsdl.display.py, line 42:\n    self.event = pyjsdl.event';
		$m.__track_lines__[43] = 'pyjsdl.display.py, line 43:\n    self.addMouseListener(self)';
		$m.__track_lines__[44] = 'pyjsdl.display.py, line 44:\n    self.addMouseWheelListener(self)';
		$m.__track_lines__[45] = 'pyjsdl.display.py, line 45:\n    self.addKeyboardListener(self)';
		$m.__track_lines__[46] = 'pyjsdl.display.py, line 46:\n    self.sinkEvents(Event.ONMOUSEDOWN | Event.ONMOUSEUP| Event.ONMOUSEMOVE | Event.ONMOUSEOUT | Event.ONMOUSEWHEEL | Event.ONKEYDOWN | Event.ONKEYPRESS | Event.ONKEYUP)';
		$m.__track_lines__[47] = 'pyjsdl.display.py, line 47:\n    self.modKey = pyjsdl.event.modKey';
		$m.__track_lines__[48] = 'pyjsdl.display.py, line 48:\n    self.specialKey = pyjsdl.event.specialKey';
		$m.__track_lines__[49] = 'pyjsdl.display.py, line 49:\n    self._rect_list = []';
		$m.__track_lines__[50] = 'pyjsdl.display.py, line 50:\n    self._rect_list.append(Rect(0,0,0,0))';
		$m.__track_lines__[51] = 'pyjsdl.display.py, line 51:\n    self._rect_len = 1';
		$m.__track_lines__[52] = 'pyjsdl.display.py, line 52:\n    self._rect_num = 0';
		$m.__track_lines__[53] = 'pyjsdl.display.py, line 53:\n    self._rect_temp = Rect(0,0,0,0)';
		$m.__track_lines__[54] = 'pyjsdl.display.py, line 54:\n    _animationFrame = self._initAnimationFrame()';
		$m.__track_lines__[55] = 'pyjsdl.display.py, line 55:\n    if _animationFrame:';
		$m.__track_lines__[56] = 'pyjsdl.display.py, line 56:\n    self.time_hold_min = 0';
		$m.__track_lines__[58] = 'pyjsdl.display.py, line 58:\n    self.time_hold_min = 1';
		$m.__track_lines__[59] = 'pyjsdl.display.py, line 59:\n    self.time_hold = self.time_hold_min';
		$m.__track_lines__[61] = 'pyjsdl.display.py, line 61:\n    def _initAnimationFrame(self):';
		$m.__track_lines__[62] = 'pyjsdl.display.py, line 62:\n    JS("""';
		$m.__track_lines__[68] = 'pyjsdl.display.py, line 68:\n    if JS("""$wnd[\'requestAnimationFrame\'] != undefined"""):';
		$m.__track_lines__[69] = 'pyjsdl.display.py, line 69:\n    _animationFrame = True';
		$m.__track_lines__[71] = 'pyjsdl.display.py, line 71:\n    JS("""$wnd[\'requestAnimationFrame\'] = function(cb){cb()};""")';
		$m.__track_lines__[72] = 'pyjsdl.display.py, line 72:\n    _animationFrame = False';
		$m.__track_lines__[73] = 'pyjsdl.display.py, line 73:\n    return _animationFrame';
		$m.__track_lines__[75] = 'pyjsdl.display.py, line 75:\n    def onMouseMove(self, sender, x, y):';
		$m.__track_lines__[76] = 'pyjsdl.display.py, line 76:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[77] = 'pyjsdl.display.py, line 77:\n    event.pos = (x, y)';
		$m.__track_lines__[78] = "pyjsdl.display.py, line 78:\n    self.event.mouseMove['x'], self.event.mouseMove['y'] = x, y";
		$m.__track_lines__[79] = 'pyjsdl.display.py, line 79:\n    self.event._updateQueue(event)';
		$m.__track_lines__[81] = 'pyjsdl.display.py, line 81:\n    def onMouseDown(self, sender, x, y):';
		$m.__track_lines__[82] = 'pyjsdl.display.py, line 82:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[83] = 'pyjsdl.display.py, line 83:\n    event.pos = (x, y)';
		$m.__track_lines__[84] = 'pyjsdl.display.py, line 84:\n    self.event.mousePress[event.button] = True';
		$m.__track_lines__[85] = 'pyjsdl.display.py, line 85:\n    self.event._updateQueue(event)';
		$m.__track_lines__[87] = 'pyjsdl.display.py, line 87:\n    def onMouseUp(self, sender, x, y):';
		$m.__track_lines__[88] = 'pyjsdl.display.py, line 88:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[89] = 'pyjsdl.display.py, line 89:\n    event.pos = (x, y)';
		$m.__track_lines__[90] = 'pyjsdl.display.py, line 90:\n    self.event.mousePress[event.button] = False';
		$m.__track_lines__[91] = 'pyjsdl.display.py, line 91:\n    self.event._updateQueue(event)';
		$m.__track_lines__[93] = 'pyjsdl.display.py, line 93:\n    def onMouseLeave(self, sender):';
		$m.__track_lines__[94] = 'pyjsdl.display.py, line 94:\n    self.event.mousePress[0], self.event.mousePress[1], self.event.mousePress[2] = False, False, False';
		$m.__track_lines__[95] = "pyjsdl.display.py, line 95:\n    self.event.mouseMove['x'], self.event.mouseMove['y'] = -1, -1";
		$m.__track_lines__[96] = "pyjsdl.display.py, line 96:\n    self.event.mouseMoveRel['x'], self.event.mouseMoveRel['y'] = None, None";
		$m.__track_lines__[97] = 'pyjsdl.display.py, line 97:\n    for keycode in self.modKey:';
		$m.__track_lines__[98] = 'pyjsdl.display.py, line 98:\n    if self.event.keyPress[keycode]:';
		$m.__track_lines__[99] = 'pyjsdl.display.py, line 99:\n    self.event.keyPress[keycode] = False';
		$m.__track_lines__[101] = 'pyjsdl.display.py, line 101:\n    def onMouseWheel(self, sender, velocity):';
		$m.__track_lines__[102] = 'pyjsdl.display.py, line 102:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[103] = "pyjsdl.display.py, line 103:\n    if event.type == 'mousewheel':";
		$m.__track_lines__[105] = "pyjsdl.display.py, line 105:\n    if hasattr(event, 'wheelDeltaX'):";
		$m.__track_lines__[106] = 'pyjsdl.display.py, line 106:\n    self.onMouseWheel = self._onMouseWheel';
		$m.__track_lines__[107] = 'pyjsdl.display.py, line 107:\n    self._onMouseWheel(sender, velocity)';
		$m.__track_lines__[109] = 'pyjsdl.display.py, line 109:\n    self.onMouseWheel = self._onMouseWheelY';
		$m.__track_lines__[110] = 'pyjsdl.display.py, line 110:\n    DOM.eventGetMouseWheelVelocityY = eventGetMouseWheelVelocityY';
		$m.__track_lines__[111] = 'pyjsdl.display.py, line 111:\n    self._onMouseWheelY(sender, eventGetMouseWheelVelocityY(event))';
		$m.__track_lines__[113] = 'pyjsdl.display.py, line 113:\n    self.onMouseWheel = self._onMouseScroll';
		$m.__track_lines__[114] = 'pyjsdl.display.py, line 114:\n    self._onMouseScroll(sender, velocity)';
		$m.__track_lines__[116] = 'pyjsdl.display.py, line 116:\n    def _onMouseWheel(self, sender, velocity):';
		$m.__track_lines__[117] = 'pyjsdl.display.py, line 117:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[118] = 'pyjsdl.display.py, line 118:\n    if not event.wheelDeltaX:';
		$m.__track_lines__[119] = 'pyjsdl.display.py, line 119:\n    if velocity < 0:';
		$m.__track_lines__[120] = 'pyjsdl.display.py, line 120:\n    button = 4';
		$m.__track_lines__[121] = 'pyjsdl.display.py, line 121:\n    events = velocity / -3';
		$m.__track_lines__[123] = 'pyjsdl.display.py, line 123:\n    button = 5';
		$m.__track_lines__[124] = 'pyjsdl.display.py, line 124:\n    events = velocity / 3';
		$m.__track_lines__[126] = 'pyjsdl.display.py, line 126:\n    if velocity < 0:';
		$m.__track_lines__[127] = 'pyjsdl.display.py, line 127:\n    button = 6';
		$m.__track_lines__[128] = 'pyjsdl.display.py, line 128:\n    events = velocity / -3';
		$m.__track_lines__[130] = 'pyjsdl.display.py, line 130:\n    button = 7';
		$m.__track_lines__[131] = 'pyjsdl.display.py, line 131:\n    events = velocity / 3';
		$m.__track_lines__[132] = 'pyjsdl.display.py, line 132:\n    event.btn = button';
		$m.__track_lines__[133] = "pyjsdl.display.py, line 133:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[134] = 'pyjsdl.display.py, line 134:\n    for evt in range(events):';
		$m.__track_lines__[135] = 'pyjsdl.display.py, line 135:\n    self.event._updateQueue(event)';
		$m.__track_lines__[137] = 'pyjsdl.display.py, line 137:\n    def _onMouseWheelY(self, sender, velocity):';
		$m.__track_lines__[138] = 'pyjsdl.display.py, line 138:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[139] = 'pyjsdl.display.py, line 139:\n    if velocity < 0:';
		$m.__track_lines__[140] = 'pyjsdl.display.py, line 140:\n    button = 4';
		$m.__track_lines__[141] = 'pyjsdl.display.py, line 141:\n    events = velocity / -3';
		$m.__track_lines__[143] = 'pyjsdl.display.py, line 143:\n    button = 5';
		$m.__track_lines__[144] = 'pyjsdl.display.py, line 144:\n    events = velocity / 3';
		$m.__track_lines__[145] = 'pyjsdl.display.py, line 145:\n    event.btn = button';
		$m.__track_lines__[146] = "pyjsdl.display.py, line 146:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[147] = 'pyjsdl.display.py, line 147:\n    for evt in range(events):';
		$m.__track_lines__[148] = 'pyjsdl.display.py, line 148:\n    self.event._updateQueue(event)';
		$m.__track_lines__[150] = 'pyjsdl.display.py, line 150:\n    def _onMouseScroll(self, sender, velocity):';
		$m.__track_lines__[151] = 'pyjsdl.display.py, line 151:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[152] = 'pyjsdl.display.py, line 152:\n    if velocity > 1 or velocity < -1:';
		$m.__track_lines__[153] = 'pyjsdl.display.py, line 153:\n    if velocity < 0:';
		$m.__track_lines__[154] = 'pyjsdl.display.py, line 154:\n    button = 4';
		$m.__track_lines__[156] = 'pyjsdl.display.py, line 156:\n    button = 5';
		$m.__track_lines__[158] = 'pyjsdl.display.py, line 158:\n    if velocity < 0:';
		$m.__track_lines__[159] = 'pyjsdl.display.py, line 159:\n    button = 6';
		$m.__track_lines__[161] = 'pyjsdl.display.py, line 161:\n    button = 7';
		$m.__track_lines__[162] = 'pyjsdl.display.py, line 162:\n    event.btn = button';
		$m.__track_lines__[163] = "pyjsdl.display.py, line 163:\n    event.pos = (self.event.mouseMove['x'], self.event.mouseMove['y'])";
		$m.__track_lines__[164] = 'pyjsdl.display.py, line 164:\n    self.event._updateQueue(event)';
		$m.__track_lines__[166] = 'pyjsdl.display.py, line 166:\n    def onKeyDown(self, sender, keycode, modifiers):';
		$m.__track_lines__[167] = 'pyjsdl.display.py, line 167:\n    if keycode in self.modKey:';
		$m.__track_lines__[168] = 'pyjsdl.display.py, line 168:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[169] = 'pyjsdl.display.py, line 169:\n    self.event.keyPress[keycode] = True';
		$m.__track_lines__[170] = 'pyjsdl.display.py, line 170:\n    self.event._updateQueue(event)';
		$m.__track_lines__[171] = 'pyjsdl.display.py, line 171:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[173] = 'pyjsdl.display.py, line 173:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[174] = 'pyjsdl.display.py, line 174:\n    self.event._updateQueue(event)';
		$m.__track_lines__[175] = 'pyjsdl.display.py, line 175:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[177] = 'pyjsdl.display.py, line 177:\n    def onKeyPress(self, sender, keycode, modifiers):';
		$m.__track_lines__[178] = 'pyjsdl.display.py, line 178:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[179] = 'pyjsdl.display.py, line 179:\n    if not (event.keyCode and event.keyCode in self.specialKey):';
		$m.__track_lines__[180] = 'pyjsdl.display.py, line 180:\n    self.event._updateQueue(event)';
		$m.__track_lines__[181] = 'pyjsdl.display.py, line 181:\n    DOM.eventPreventDefault(event)';
		$m.__track_lines__[183] = 'pyjsdl.display.py, line 183:\n    def onKeyUp(self, sender, keycode, modifiers):';
		$m.__track_lines__[184] = 'pyjsdl.display.py, line 184:\n    event = DOM.eventGetCurrentEvent()';
		$m.__track_lines__[185] = 'pyjsdl.display.py, line 185:\n    if keycode in self.modKey:';
		$m.__track_lines__[186] = 'pyjsdl.display.py, line 186:\n    self.event.keyPress[keycode] = False';
		$m.__track_lines__[187] = 'pyjsdl.display.py, line 187:\n    self.event._updateQueue(event)';
		$m.__track_lines__[189] = 'pyjsdl.display.py, line 189:\n    def resize(self, width, height):';
		$m.__track_lines__[190] = 'pyjsdl.display.py, line 190:\n    Surface.resize(self, width, height)';
		$m.__track_lines__[191] = 'pyjsdl.display.py, line 191:\n    self.surface.resize(width, height)';
		$m.__track_lines__[192] = 'pyjsdl.display.py, line 192:\n    try:';
		$m.__track_lines__[193] = 'pyjsdl.display.py, line 193:\n    self.surface._display.textbox.resize()';
		$m.__track_lines__[195] = 'pyjsdl.display.py, line 195:\n    pass';
		$m.__track_lines__[196] = 'pyjsdl.display.py, line 196:\n    try:';
		$m.__track_lines__[197] = 'pyjsdl.display.py, line 197:\n    self.surface._display.textarea.resize()';
		$m.__track_lines__[199] = 'pyjsdl.display.py, line 199:\n    pass';
		$m.__track_lines__[201] = 'pyjsdl.display.py, line 201:\n    def set_function(self, function):';
		$m.__track_lines__[202] = 'pyjsdl.display.py, line 202:\n    self.function = function';
		$m.__track_lines__[204] = 'pyjsdl.display.py, line 204:\n    def load_images(self, images):';
		$m.__track_lines__[205] = 'pyjsdl.display.py, line 205:\n    if images:';
		$m.__track_lines__[206] = 'pyjsdl.display.py, line 206:\n    image_list = []';
		$m.__track_lines__[207] = 'pyjsdl.display.py, line 207:\n    for image in images:';
		$m.__track_lines__[208] = 'pyjsdl.display.py, line 208:\n    if isinstance(image, str):';
		$m.__track_lines__[209] = 'pyjsdl.display.py, line 209:\n    image_list.append(image)';
		$m.__track_lines__[210] = 'pyjsdl.display.py, line 210:\n    self.image_list.append(image)';
		$m.__track_lines__[212] = 'pyjsdl.display.py, line 212:\n    name = image[0]';
		$m.__track_lines__[213] = 'pyjsdl.display.py, line 213:\n    if isinstance(image[1], str):';
		$m.__track_lines__[214] = 'pyjsdl.display.py, line 214:\n    data = image[1]';
		$m.__track_lines__[216] = 'pyjsdl.display.py, line 216:\n    data = base64.b64encode(image[1].getvalue())';
		$m.__track_lines__[217] = "pyjsdl.display.py, line 217:\n    if not data.startswith('data:'):";
		$m.__track_lines__[218] = "pyjsdl.display.py, line 218:\n    ext = name.strip().split('.')[-1]";
		$m.__track_lines__[219] = 'pyjsdl.display.py, line 219:\n    data = "data:%s;base64,%s" %(ext, data)';
		$m.__track_lines__[221] = 'pyjsdl.display.py, line 221:\n    image_list.append(data)';
		$m.__track_lines__[222] = 'pyjsdl.display.py, line 222:\n    self.image_list.append(name)';
		$m.__track_lines__[223] = 'pyjsdl.display.py, line 223:\n    loadImages(image_list, self)';
		$m.__track_lines__[225] = 'pyjsdl.display.py, line 225:\n    self.start()';
		$m.__track_lines__[227] = 'pyjsdl.display.py, line 227:\n    def set_timeout(self, change):';
		$m.__track_lines__[228] = 'pyjsdl.display.py, line 228:\n    self.time_hold += change';
		$m.__track_lines__[229] = 'pyjsdl.display.py, line 229:\n    if self.time_hold < self.time_hold_min:';
		$m.__track_lines__[230] = 'pyjsdl.display.py, line 230:\n    self.time_hold = self.time_hold_min';
		$m.__track_lines__[232] = 'pyjsdl.display.py, line 232:\n    def start(self):';
		$m.__track_lines__[233] = 'pyjsdl.display.py, line 233:\n    self.run = self._run';
		$m.__track_lines__[234] = 'pyjsdl.display.py, line 234:\n    self.time.timeout(self.time_hold, self)';
		$m.__track_lines__[236] = 'pyjsdl.display.py, line 236:\n    def stop(self):';
		$m.__track_lines__[237] = 'pyjsdl.display.py, line 237:\n    self.time_wait = 0';
		$m.__track_lines__[238] = 'pyjsdl.display.py, line 238:\n    self.run = lambda: None';
		$m.__track_lines__[240] = 'pyjsdl.display.py, line 240:\n    def onImagesLoaded(self, images):';
		$m.__track_lines__[241] = 'pyjsdl.display.py, line 241:\n    for i, image in enumerate(self.image_list):';
		$m.__track_lines__[242] = 'pyjsdl.display.py, line 242:\n    self.images[image] = images[i]';
		$m.__track_lines__[243] = 'pyjsdl.display.py, line 243:\n    self.start()';
		$m.__track_lines__[245] = 'pyjsdl.display.py, line 245:\n    def set_timeWait(self, time):';
		$m.__track_lines__[246] = 'pyjsdl.display.py, line 246:\n    if time:';
		$m.__track_lines__[247] = 'pyjsdl.display.py, line 247:\n    self.time_wait = time';
		$m.__track_lines__[248] = 'pyjsdl.display.py, line 248:\n    self.run = lambda: None';
		$m.__track_lines__[250] = 'pyjsdl.display.py, line 250:\n    if self.time_wait:';
		$m.__track_lines__[251] = 'pyjsdl.display.py, line 251:\n    self.time_wait = 0';
		$m.__track_lines__[252] = 'pyjsdl.display.py, line 252:\n    self.run = self._run';
		$m.__track_lines__[253] = 'pyjsdl.display.py, line 253:\n    self.run()';
		$m.__track_lines__[255] = 'pyjsdl.display.py, line 255:\n    def _get_rect(self):';
		$m.__track_lines__[256] = 'pyjsdl.display.py, line 256:\n    if self._rect_num < self._rect_len:';
		$m.__track_lines__[257] = 'pyjsdl.display.py, line 257:\n    return self._rect_list[self._rect_num]';
		$m.__track_lines__[259] = 'pyjsdl.display.py, line 259:\n    self._rect_list.append(Rect(0,0,0,0))';
		$m.__track_lines__[260] = 'pyjsdl.display.py, line 260:\n    self._rect_len += 1';
		$m.__track_lines__[261] = 'pyjsdl.display.py, line 261:\n    return self._rect_list[self._rect_num]';
		$m.__track_lines__[263] = 'pyjsdl.display.py, line 263:\n    def _run(self):';
		$m.__track_lines__[264] = 'pyjsdl.display.py, line 264:\n    self.function()';
		$m.__track_lines__[265] = 'pyjsdl.display.py, line 265:\n    JS("""$wnd[\'requestAnimationFrame\'](@{{paint}});""")';
		$m.__track_lines__[267] = 'pyjsdl.display.py, line 267:\n    def rerun(self):';
		$m.__track_lines__[268] = 'pyjsdl.display.py, line 268:\n    if not self.time_hold:';
		$m.__track_lines__[269] = 'pyjsdl.display.py, line 269:\n    self.run()';
		$m.__track_lines__[271] = 'pyjsdl.display.py, line 271:\n    self.time.timeout(self.time_hold, self)';
		$m.__track_lines__[274] = 'pyjsdl.display.py, line 274:\n    def paint(ts):';
		$m.__track_lines__[275] = 'pyjsdl.display.py, line 275:\n    ctx = env.canvas.impl.canvasContext';
		$m.__track_lines__[276] = 'pyjsdl.display.py, line 276:\n    img = env.canvas.surface.canvas';
		$m.__track_lines__[277] = 'pyjsdl.display.py, line 277:\n    i = 0';
		$m.__track_lines__[278] = 'pyjsdl.display.py, line 278:\n    while i < env.canvas._rect_num:';
		$m.__track_lines__[279] = 'pyjsdl.display.py, line 279:\n    rect = env.canvas._rect_list[i]';
		$m.__track_lines__[280] = 'pyjsdl.display.py, line 280:\n    ctx.drawImage(img, rect.x,rect.y,rect.width,rect.height, rect.x,rect.y,rect.width,rect.height)';
		$m.__track_lines__[281] = 'pyjsdl.display.py, line 281:\n    i += 1';
		$m.__track_lines__[282] = 'pyjsdl.display.py, line 282:\n    env.canvas._rect_num = 0';
		$m.__track_lines__[283] = 'pyjsdl.display.py, line 283:\n    env.canvas.rerun()';
		$m.__track_lines__[286] = 'pyjsdl.display.py, line 286:\n    class Display(object):';
		$m.__track_lines__[310] = 'pyjsdl.display.py, line 310:\n    def __init__(self):';
		$m.__track_lines__[316] = 'pyjsdl.display.py, line 316:\n    self._initialized = False';
		$m.__track_lines__[317] = 'pyjsdl.display.py, line 317:\n    self.init()';
		$m.__track_lines__[319] = 'pyjsdl.display.py, line 319:\n    def init(self):';
		$m.__track_lines__[323] = 'pyjsdl.display.py, line 323:\n    if not self._initialized:';
		$m.__track_lines__[324] = "pyjsdl.display.py, line 324:\n    self.id = ''";
		$m.__track_lines__[325] = 'pyjsdl.display.py, line 325:\n    self.icon = None';
		$m.__track_lines__[326] = 'pyjsdl.display.py, line 326:\n    self._image_list = []';
		$m.__track_lines__[327] = 'pyjsdl.display.py, line 327:\n    self._nonimplemented_methods()';
		$m.__track_lines__[328] = 'pyjsdl.display.py, line 328:\n    self._initialized = True';
		$m.__track_lines__[330] = 'pyjsdl.display.py, line 330:\n    def set_mode(self, size, buffered=True, *args, **kwargs):';
		$m.__track_lines__[336] = 'pyjsdl.display.py, line 336:\n    self.canvas = Canvas(size, buffered)';
		$m.__track_lines__[337] = 'pyjsdl.display.py, line 337:\n    env.canvas = self.canvas';
		$m.__track_lines__[338] = 'pyjsdl.display.py, line 338:\n    env.frame = Window.getDocumentRoot()';
		$m.__track_lines__[339] = 'pyjsdl.display.py, line 339:\n    panel = FocusPanel(Widget=self.canvas)';
		$m.__track_lines__[340] = 'pyjsdl.display.py, line 340:\n    RootPanel().add(panel)';
		$m.__track_lines__[341] = 'pyjsdl.display.py, line 341:\n    self.panel = panel';
		$m.__track_lines__[342] = 'pyjsdl.display.py, line 342:\n    self.vpanel = None';
		$m.__track_lines__[343] = 'pyjsdl.display.py, line 343:\n    self.textbox = None';
		$m.__track_lines__[344] = 'pyjsdl.display.py, line 344:\n    self.textarea = None';
		$m.__track_lines__[345] = 'pyjsdl.display.py, line 345:\n    self.Textbox = Textbox';
		$m.__track_lines__[346] = 'pyjsdl.display.py, line 346:\n    self.Textarea = Textarea';
		$m.__track_lines__[347] = 'pyjsdl.display.py, line 347:\n    self.surface = self.canvas.surface';
		$m.__track_lines__[348] = 'pyjsdl.display.py, line 348:\n    self.surface._display = self';
		$m.__track_lines__[349] = 'pyjsdl.display.py, line 349:\n    self._surface_rect = self.surface.get_rect()';
		$m.__track_lines__[350] = 'pyjsdl.display.py, line 350:\n    if not self.canvas._bufferedimage:';
		$m.__track_lines__[351] = 'pyjsdl.display.py, line 351:\n    self.flip = lambda: None';
		$m.__track_lines__[352] = 'pyjsdl.display.py, line 352:\n    self.update = lambda *arg: None';
		$m.__track_lines__[353] = 'pyjsdl.display.py, line 353:\n    self.update_rect = lambda *arg: None';
		$m.__track_lines__[354] = 'pyjsdl.display.py, line 354:\n    return self.surface';
		$m.__track_lines__[356] = 'pyjsdl.display.py, line 356:\n    def setup(self, function, images=None):';
		$m.__track_lines__[362] = 'pyjsdl.display.py, line 362:\n    self.canvas.set_function(function)';
		$m.__track_lines__[363] = 'pyjsdl.display.py, line 363:\n    image_list = []';
		$m.__track_lines__[364] = 'pyjsdl.display.py, line 364:\n    if self._image_list:';
		$m.__track_lines__[365] = 'pyjsdl.display.py, line 365:\n    image_list.extend(self._image_list)';
		$m.__track_lines__[366] = 'pyjsdl.display.py, line 366:\n    self._image_list[:] = []';
		$m.__track_lines__[367] = 'pyjsdl.display.py, line 367:\n    if images:';
		$m.__track_lines__[368] = 'pyjsdl.display.py, line 368:\n    image_list.extend(images)';
		$m.__track_lines__[369] = 'pyjsdl.display.py, line 369:\n    self.canvas.load_images(image_list)';
		$m.__track_lines__[371] = 'pyjsdl.display.py, line 371:\n    def setup_images(self, images):';
		$m.__track_lines__[377] = 'pyjsdl.display.py, line 377:\n    if isinstance(images, str):';
		$m.__track_lines__[378] = 'pyjsdl.display.py, line 378:\n    images = [images]';
		$m.__track_lines__[379] = 'pyjsdl.display.py, line 379:\n    self._image_list.extend(images)';
		$m.__track_lines__[381] = 'pyjsdl.display.py, line 381:\n    def textbox_init(self):';
		$m.__track_lines__[385] = 'pyjsdl.display.py, line 385:\n    if not self.textbox:';
		$m.__track_lines__[386] = 'pyjsdl.display.py, line 386:\n    self.textbox = Textbox()';
		$m.__track_lines__[387] = 'pyjsdl.display.py, line 387:\n    self.textarea = Textarea()';
		$m.__track_lines__[389] = 'pyjsdl.display.py, line 389:\n    def is_canvas(self):';
		$m.__track_lines__[393] = 'pyjsdl.display.py, line 393:\n    return self.canvas._isCanvas';
		$m.__track_lines__[395] = 'pyjsdl.display.py, line 395:\n    def get_surface(self):';
		$m.__track_lines__[399] = 'pyjsdl.display.py, line 399:\n    return self.surface';
		$m.__track_lines__[401] = 'pyjsdl.display.py, line 401:\n    def get_canvas(self):';
		$m.__track_lines__[405] = 'pyjsdl.display.py, line 405:\n    return self.canvas';
		$m.__track_lines__[407] = 'pyjsdl.display.py, line 407:\n    def get_panel(self):';
		$m.__track_lines__[411] = 'pyjsdl.display.py, line 411:\n    return self.panel';
		$m.__track_lines__[413] = 'pyjsdl.display.py, line 413:\n    def get_vpanel(self):';
		$m.__track_lines__[417] = 'pyjsdl.display.py, line 417:\n    if not self.vpanel:';
		$m.__track_lines__[418] = 'pyjsdl.display.py, line 418:\n    self.vpanel = VerticalPanel()';
		$m.__track_lines__[419] = 'pyjsdl.display.py, line 419:\n    RootPanel().add(self.vpanel)';
		$m.__track_lines__[420] = 'pyjsdl.display.py, line 420:\n    return self.vpanel';
		$m.__track_lines__[422] = 'pyjsdl.display.py, line 422:\n    def quit(self):';
		$m.__track_lines__[426] = 'pyjsdl.display.py, line 426:\n    self._initialized = False';
		$m.__track_lines__[427] = 'pyjsdl.display.py, line 427:\n    return None';
		$m.__track_lines__[429] = 'pyjsdl.display.py, line 429:\n    def get_init(self):';
		$m.__track_lines__[433] = 'pyjsdl.display.py, line 433:\n    return self._initialized';
		$m.__track_lines__[435] = 'pyjsdl.display.py, line 435:\n    def get_active(self):';
		$m.__track_lines__[439] = "pyjsdl.display.py, line 439:\n    if hasattr(self, 'canvas'):";
		$m.__track_lines__[440] = 'pyjsdl.display.py, line 440:\n    return True';
		$m.__track_lines__[442] = 'pyjsdl.display.py, line 442:\n    return False';
		$m.__track_lines__[444] = 'pyjsdl.display.py, line 444:\n    def set_caption(self, text):';
		$m.__track_lines__[449] = 'pyjsdl.display.py, line 449:\n    self.id = text';
		$m.__track_lines__[450] = 'pyjsdl.display.py, line 450:\n    try:';
		$m.__track_lines__[451] = 'pyjsdl.display.py, line 451:\n    self.canvas.setID(self.id)';
		$m.__track_lines__[453] = 'pyjsdl.display.py, line 453:\n    pass';
		$m.__track_lines__[454] = 'pyjsdl.display.py, line 454:\n    return None';
		$m.__track_lines__[456] = 'pyjsdl.display.py, line 456:\n    def get_caption(self):';
		$m.__track_lines__[460] = 'pyjsdl.display.py, line 460:\n    try:';
		$m.__track_lines__[461] = 'pyjsdl.display.py, line 461:\n    return self.canvas.getID()';
		$m.__track_lines__[463] = 'pyjsdl.display.py, line 463:\n    return self.id';
		$m.__track_lines__[465] = 'pyjsdl.display.py, line 465:\n    def clear(self):';
		$m.__track_lines__[469] = 'pyjsdl.display.py, line 469:\n    self.surface.beginPath()';
		$m.__track_lines__[470] = 'pyjsdl.display.py, line 470:\n    self.surface.setFillStyle(Color(0,0,0))';
		$m.__track_lines__[471] = 'pyjsdl.display.py, line 471:\n    self.surface.fillRect(0, 0, self.surface.width, self.surface.height)';
		$m.__track_lines__[473] = 'pyjsdl.display.py, line 473:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[477] = 'pyjsdl.display.py, line 477:\n    self.set_icon = lambda *arg: None';
		$m.__track_lines__[479] = 'pyjsdl.display.py, line 479:\n    def flip(self):';
		$m.__track_lines__[483] = 'pyjsdl.display.py, line 483:\n    self.canvas._rect_list[0].x = 0';
		$m.__track_lines__[484] = 'pyjsdl.display.py, line 484:\n    self.canvas._rect_list[0].y = 0';
		$m.__track_lines__[485] = 'pyjsdl.display.py, line 485:\n    self.canvas._rect_list[0].width = self._surface_rect.width';
		$m.__track_lines__[486] = 'pyjsdl.display.py, line 486:\n    self.canvas._rect_list[0].height = self._surface_rect.height';
		$m.__track_lines__[487] = 'pyjsdl.display.py, line 487:\n    self.canvas._rect_num = 1';
		$m.__track_lines__[488] = 'pyjsdl.display.py, line 488:\n    return None';
		$m.__track_lines__[490] = 'pyjsdl.display.py, line 490:\n    def update(self, rect_list=None):';
		$m.__track_lines__[495] = "pyjsdl.display.py, line 495:\n    if hasattr(rect_list, 'append'):";
		$m.__track_lines__[496] = 'pyjsdl.display.py, line 496:\n    _update(self.canvas, rect_list)';
		$m.__track_lines__[498] = 'pyjsdl.display.py, line 498:\n    if rect_list:';
		$m.__track_lines__[499] = 'pyjsdl.display.py, line 499:\n    _update(self.canvas, [rect_list])';
		$m.__track_lines__[501] = 'pyjsdl.display.py, line 501:\n    self.flip()';
		$m.__track_lines__[502] = 'pyjsdl.display.py, line 502:\n    return None';
		$m.__track_lines__[505] = 'pyjsdl.display.py, line 505:\n    def _update(canvas, rect_list):';
		$m.__track_lines__[506] = 'pyjsdl.display.py, line 506:\n    for r in rect_list:';
		$m.__track_lines__[507] = "pyjsdl.display.py, line 507:\n    if hasattr(r, 'width'):";
		$m.__track_lines__[508] = 'pyjsdl.display.py, line 508:\n    rect = r';
		$m.__track_lines__[510] = 'pyjsdl.display.py, line 510:\n    if r:';
		$m.__track_lines__[511] = 'pyjsdl.display.py, line 511:\n    rect = canvas._rect_temp';
		$m.__track_lines__[512] = 'pyjsdl.display.py, line 512:\n    rect.set(r)';
		$m.__track_lines__[514] = 'pyjsdl.display.py, line 514:\n    continue';
		$m.__track_lines__[515] = 'pyjsdl.display.py, line 515:\n    repaint_rect = canvas._get_rect()';
		$m.__track_lines__[516] = 'pyjsdl.display.py, line 516:\n    if rect.x >= 0:';
		$m.__track_lines__[517] = 'pyjsdl.display.py, line 517:\n    repaint_rect.x = rect.x';
		$m.__track_lines__[519] = 'pyjsdl.display.py, line 519:\n    repaint_rect.x = 0';
		$m.__track_lines__[520] = 'pyjsdl.display.py, line 520:\n    repaint_rect.width = rect.width + rect.x';
		$m.__track_lines__[521] = 'pyjsdl.display.py, line 521:\n    if rect.y >= 0:';
		$m.__track_lines__[522] = 'pyjsdl.display.py, line 522:\n    repaint_rect.y = rect.y';
		$m.__track_lines__[524] = 'pyjsdl.display.py, line 524:\n    repaint_rect.y = 0';
		$m.__track_lines__[525] = 'pyjsdl.display.py, line 525:\n    repaint_rect.height = rect.height + rect.y';
		$m.__track_lines__[526] = 'pyjsdl.display.py, line 526:\n    if rect.x+rect.width <= canvas.surface.width:';
		$m.__track_lines__[527] = 'pyjsdl.display.py, line 527:\n    repaint_rect.width = rect.width';
		$m.__track_lines__[529] = 'pyjsdl.display.py, line 529:\n    repaint_rect.width = canvas.surface.width - repaint_rect.x';
		$m.__track_lines__[530] = 'pyjsdl.display.py, line 530:\n    if repaint_rect.width < 1:';
		$m.__track_lines__[531] = 'pyjsdl.display.py, line 531:\n    continue';
		$m.__track_lines__[532] = 'pyjsdl.display.py, line 532:\n    if rect.y+rect.height <= canvas.surface.height:';
		$m.__track_lines__[533] = 'pyjsdl.display.py, line 533:\n    repaint_rect.height = rect.height';
		$m.__track_lines__[535] = 'pyjsdl.display.py, line 535:\n    repaint_rect.height = canvas.surface.height - repaint_rect.y';
		$m.__track_lines__[536] = 'pyjsdl.display.py, line 536:\n    if repaint_rect.height < 1:';
		$m.__track_lines__[537] = 'pyjsdl.display.py, line 537:\n    continue';
		$m.__track_lines__[538] = 'pyjsdl.display.py, line 538:\n    canvas._rect_num += 1';
		$m.__track_lines__[539] = 'pyjsdl.display.py, line 539:\n    return None';
		$m.__track_lines__[542] = 'pyjsdl.display.py, line 542:\n    class Textbox(TextBox):';
		$m.__track_lines__[549] = 'pyjsdl.display.py, line 549:\n    def __init__(self, size=None, panel=None):';
		$m.__track_lines__[550] = 'pyjsdl.display.py, line 550:\n    TextBox.__init__(self)';
		$m.__track_lines__[551] = 'pyjsdl.display.py, line 551:\n    if not size:';
		$m.__track_lines__[552] = 'pyjsdl.display.py, line 552:\n    self.width, self.height = env.canvas.surface.width-5, 20';
		$m.__track_lines__[554] = 'pyjsdl.display.py, line 554:\n    self.width, self.height = int(size[0]), int(size[1])';
		$m.__track_lines__[555] = "pyjsdl.display.py, line 555:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[556] = 'pyjsdl.display.py, line 556:\n    self.setVisible(False)';
		$m.__track_lines__[557] = 'pyjsdl.display.py, line 557:\n    if panel:';
		$m.__track_lines__[558] = 'pyjsdl.display.py, line 558:\n    panel.add(self)';
		$m.__track_lines__[560] = 'pyjsdl.display.py, line 560:\n    try:';
		$m.__track_lines__[561] = 'pyjsdl.display.py, line 561:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[563] = 'pyjsdl.display.py, line 563:\n    env.canvas.surface._display.vpanel = VerticalPanel()';
		$m.__track_lines__[564] = 'pyjsdl.display.py, line 564:\n    RootPanel().add(env.canvas.surface._display.vpanel)';
		$m.__track_lines__[565] = 'pyjsdl.display.py, line 565:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[567] = 'pyjsdl.display.py, line 567:\n    def resize(self, width=None, height=None):';
		$m.__track_lines__[568] = 'pyjsdl.display.py, line 568:\n    if not (width or height):';
		$m.__track_lines__[569] = 'pyjsdl.display.py, line 569:\n    self.width, self.height = env.canvas.surface.width-5, 20';
		$m.__track_lines__[571] = 'pyjsdl.display.py, line 571:\n    if width:';
		$m.__track_lines__[572] = 'pyjsdl.display.py, line 572:\n    self.width = int(width)';
		$m.__track_lines__[573] = 'pyjsdl.display.py, line 573:\n    if height:';
		$m.__track_lines__[574] = 'pyjsdl.display.py, line 574:\n    self.height = int(height)';
		$m.__track_lines__[575] = "pyjsdl.display.py, line 575:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[577] = 'pyjsdl.display.py, line 577:\n    def toggle(self, visible=None):';
		$m.__track_lines__[578] = 'pyjsdl.display.py, line 578:\n    if visible:';
		$m.__track_lines__[579] = 'pyjsdl.display.py, line 579:\n    self.setVisible(visible)';
		$m.__track_lines__[581] = 'pyjsdl.display.py, line 581:\n    self.setVisible(not self.getVisible())';
		$m.__track_lines__[584] = 'pyjsdl.display.py, line 584:\n    class Textarea(TextArea):';
		$m.__track_lines__[591] = 'pyjsdl.display.py, line 591:\n    def __init__(self, size=None, panel=None):';
		$m.__track_lines__[592] = 'pyjsdl.display.py, line 592:\n    TextArea.__init__(self)';
		$m.__track_lines__[593] = 'pyjsdl.display.py, line 593:\n    if not size:';
		$m.__track_lines__[594] = 'pyjsdl.display.py, line 594:\n    self.width, self.height = env.canvas.surface.width-5, int(env.canvas.surface.height/5)-5';
		$m.__track_lines__[596] = 'pyjsdl.display.py, line 596:\n    self.width, self.height = int(size[0]), int(size[1])';
		$m.__track_lines__[597] = "pyjsdl.display.py, line 597:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[598] = "pyjsdl.display.py, line 598:\n    self.setStyleAttribute({'resize':'vertical'})";
		$m.__track_lines__[599] = 'pyjsdl.display.py, line 599:\n    self.setVisible(False)';
		$m.__track_lines__[600] = 'pyjsdl.display.py, line 600:\n    if panel:';
		$m.__track_lines__[601] = 'pyjsdl.display.py, line 601:\n    panel.add(self)';
		$m.__track_lines__[603] = 'pyjsdl.display.py, line 603:\n    try:';
		$m.__track_lines__[604] = 'pyjsdl.display.py, line 604:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[606] = 'pyjsdl.display.py, line 606:\n    env.canvas.surface._display.vpanel = VerticalPanel()';
		$m.__track_lines__[607] = 'pyjsdl.display.py, line 607:\n    RootPanel().add(env.canvas.surface._display.vpanel)';
		$m.__track_lines__[608] = 'pyjsdl.display.py, line 608:\n    env.canvas.surface._display.vpanel.add(self)';
		$m.__track_lines__[610] = 'pyjsdl.display.py, line 610:\n    def resize(self, width=None, height=None):';
		$m.__track_lines__[611] = 'pyjsdl.display.py, line 611:\n    if not (width or height):';
		$m.__track_lines__[612] = 'pyjsdl.display.py, line 612:\n    self.width, self.height = env.canvas.surface.width-5, int(env.canvas.surface.height/5)-5';
		$m.__track_lines__[614] = 'pyjsdl.display.py, line 614:\n    if width:';
		$m.__track_lines__[615] = 'pyjsdl.display.py, line 615:\n    self.width = int(width)';
		$m.__track_lines__[616] = 'pyjsdl.display.py, line 616:\n    if height:';
		$m.__track_lines__[617] = 'pyjsdl.display.py, line 617:\n    self.height = int(height)';
		$m.__track_lines__[618] = "pyjsdl.display.py, line 618:\n    self.setSize(str(self.width)+'px', str(self.height)+'px')";
		$m.__track_lines__[620] = 'pyjsdl.display.py, line 620:\n    def toggle(self, visible=None):';
		$m.__track_lines__[621] = 'pyjsdl.display.py, line 621:\n    if visible:';
		$m.__track_lines__[622] = 'pyjsdl.display.py, line 622:\n    self.setVisible(visible)';
		$m.__track_lines__[624] = 'pyjsdl.display.py, line 624:\n    self.setVisible(not self.getVisible())';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_20 = new $p['int'](20);
		$pyjs['track']['module']='pyjsdl.display';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Time'] = $p['___import___']('time.Time', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('env', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl.event', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjsobj.DOM', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Window'] = $p['___import___']('pyjsobj.Window', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['RootPanel'] = $p['___import___']('pyjsobj.RootPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['FocusPanel'] = $p['___import___']('pyjsobj.FocusPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['VerticalPanel'] = $p['___import___']('pyjsobj.VerticalPanel', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['loadImages'] = $p['___import___']('pyjsobj.loadImages', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextBox'] = $p['___import___']('pyjsobj.TextBox', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['TextArea'] = $p['___import___']('pyjsobj.TextArea', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['MouseWheelHandler'] = $p['___import___']('pyjsobj.MouseWheelHandler', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['eventGetMouseWheelVelocityY'] = $p['___import___']('pyjsobj.eventGetMouseWheelVelocityY', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjsobj.Event', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=11;
		$pyjs['track']['lineno']=12;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['base64'] = $p['___import___']('base64', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=14;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=17;
		$m['Canvas'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '3599d03919b263d307523298217ed4a6';
			$pyjs['track']['lineno']=19;
			$method = $pyjs__bind_method2('__init__', function(size, buffered) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					buffered = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,_animationFrame;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=19;
				$pyjs['track']['lineno']=20;
				$m['Surface']['__init__'](self, size);
				$pyjs['track']['lineno']=21;
				$m['MouseWheelHandler']['__init__'](self, true);
				$pyjs['track']['lineno']=22;
				if ($p['bool']($p['isinstance'](buffered, $p['bool']))) {
					$pyjs['track']['lineno']=23;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', buffered) : $p['setattr'](self, '_bufferedimage', buffered); 
				}
				else {
					$pyjs['track']['lineno']=25;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', true) : $p['setattr'](self, '_bufferedimage', true); 
				}
				$pyjs['track']['lineno']=26;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=27;
					if ($p['bool']($p['getattr']($p['getattr'](self, 'impl'), 'canvasContext'))) {
						$pyjs['track']['lineno']=28;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCanvas', true) : $p['setattr'](self, '_isCanvas', true); 
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
					$pyjs['track']['module']='pyjsdl.display';
					if (true) {
						$pyjs['track']['lineno']=30;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_isCanvas', false) : $p['setattr'](self, '_isCanvas', false); 
						$pyjs['track']['lineno']=31;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_bufferedimage', false) : $p['setattr'](self, '_bufferedimage', false); 
					}
				}
				$pyjs['track']['lineno']=32;
				if ($p['bool']($p['getattr'](self, '_bufferedimage'))) {
					$pyjs['track']['lineno']=33;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', $m['Surface'](size)) : $p['setattr'](self, 'surface', $m['Surface'](size)); 
				}
				else {
					$pyjs['track']['lineno']=35;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', self) : $p['setattr'](self, 'surface', self); 
				}
				$pyjs['track']['lineno']=36;
				self['resize'](size['__getitem__']($constant_int_0), size['__getitem__']($constant_int_1));
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', $p['dict']([])) : $p['setattr'](self, 'images', $p['dict']([])); 
				$pyjs['track']['lineno']=38;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image_list', $p['list']([])) : $p['setattr'](self, 'image_list', $p['list']([])); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$function', null) : $p['setattr'](self, '$$function', null); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_wait', $constant_int_0) : $p['setattr'](self, 'time_wait', $constant_int_0); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time', $m['Time']()) : $p['setattr'](self, 'time', $m['Time']()); 
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event', $p['getattr']($m['pyjsdl'], 'event')) : $p['setattr'](self, 'event', $p['getattr']($m['pyjsdl'], 'event')); 
				$pyjs['track']['lineno']=43;
				self['addMouseListener'](self);
				$pyjs['track']['lineno']=44;
				self['addMouseWheelListener'](self);
				$pyjs['track']['lineno']=45;
				self['addKeyboardListener'](self);
				$pyjs['track']['lineno']=46;
				self['sinkEvents']($p['op_bitor']([$p['getattr']($m['Event'], 'ONMOUSEDOWN'), $p['getattr']($m['Event'], 'ONMOUSEUP'), $p['getattr']($m['Event'], 'ONMOUSEMOVE'), $p['getattr']($m['Event'], 'ONMOUSEOUT'), $p['getattr']($m['Event'], 'ONMOUSEWHEEL'), $p['getattr']($m['Event'], 'ONKEYDOWN'), $p['getattr']($m['Event'], 'ONKEYPRESS'), $p['getattr']($m['Event'], 'ONKEYUP')]));
				$pyjs['track']['lineno']=47;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'modKey')) : $p['setattr'](self, 'modKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'modKey')); 
				$pyjs['track']['lineno']=48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'specialKey')) : $p['setattr'](self, 'specialKey', $p['getattr']($p['getattr']($m['pyjsdl'], 'event'), 'specialKey')); 
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_list', $p['list']([])) : $p['setattr'](self, '_rect_list', $p['list']([])); 
				$pyjs['track']['lineno']=50;
				self['_rect_list']['append']($m['Rect']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0));
				$pyjs['track']['lineno']=51;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_len', $constant_int_1) : $p['setattr'](self, '_rect_len', $constant_int_1); 
				$pyjs['track']['lineno']=52;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_num', $constant_int_0) : $p['setattr'](self, '_rect_num', $constant_int_0); 
				$pyjs['track']['lineno']=53;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_temp', $m['Rect']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0)) : $p['setattr'](self, '_rect_temp', $m['Rect']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0)); 
				$pyjs['track']['lineno']=54;
				_animationFrame = self['_initAnimationFrame']();
				$pyjs['track']['lineno']=55;
				if ($p['bool'](_animationFrame)) {
					$pyjs['track']['lineno']=56;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_hold_min', $constant_int_0) : $p['setattr'](self, 'time_hold_min', $constant_int_0); 
				}
				else {
					$pyjs['track']['lineno']=58;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_hold_min', $constant_int_1) : $p['setattr'](self, 'time_hold_min', $constant_int_1); 
				}
				$pyjs['track']['lineno']=59;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_hold', $p['getattr'](self, 'time_hold_min')) : $p['setattr'](self, 'time_hold', $p['getattr'](self, 'time_hold_min')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size'],['buffered']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=61;
			$method = $pyjs__bind_method2('_initAnimationFrame', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var _animationFrame;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=62;

            $wnd['requestAnimationFrame'] = $wnd['requestAnimationFrame'] ||
                                            $wnd['mozRequestAnimationFrame'] ||
                                            $wnd['webkitRequestAnimationFrame'] ||
                                            $wnd['oRequestAnimationFrame'];
           
				$pyjs['track']['lineno']=68;
				if ($p['bool']($wnd['requestAnimationFrame'] != undefined)) {
					$pyjs['track']['lineno']=69;
					_animationFrame = true;
				}
				else {
					$pyjs['track']['lineno']=71;
$wnd['requestAnimationFrame'] = function(cb){cb()};
					$pyjs['track']['lineno']=72;
					_animationFrame = false;
				}
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=73;
				var $pyjs__ret = _animationFrame;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_initAnimationFrame'] = $method;
			$pyjs['track']['lineno']=75;
			$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=76;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=77;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([x, y])) : $p['setattr'](event, 'pos', $p['tuple']([x, y])); 
				$pyjs['track']['lineno']=78;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign1[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign1[1]);
				$pyjs['track']['lineno']=79;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseMove'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=82;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=83;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([x, y])) : $p['setattr'](event, 'pos', $p['tuple']([x, y])); 
				$pyjs['track']['lineno']=84;
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), true);
				$pyjs['track']['lineno']=85;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseDown'] = $method;
			$pyjs['track']['lineno']=87;
			$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					x = arguments[2];
					y = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=88;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=89;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([x, y])) : $p['setattr'](event, 'pos', $p['tuple']([x, y])); 
				$pyjs['track']['lineno']=90;
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($p['getattr'](event, 'button'), false);
				$pyjs['track']['lineno']=91;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
			$cls_definition['onMouseUp'] = $method;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,keycode;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=94;
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([false, false, false]), 3, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_0, $tupleassign2[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_1, $tupleassign2[1]);
				$p['getattr']($p['getattr'](self, 'event'), 'mousePress')['__setitem__']($constant_int_2, $tupleassign2[2]);
				$pyjs['track']['lineno']=95;
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([(typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]), 2, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('x', $tupleassign3[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__setitem__']('y', $tupleassign3[1]);
				$pyjs['track']['lineno']=96;
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('x', $tupleassign4[0]);
				$p['getattr']($p['getattr'](self, 'event'), 'mouseMoveRel')['__setitem__']('y', $tupleassign4[1]);
				$pyjs['track']['lineno']=97;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['getattr'](self, 'modKey');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					keycode = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=98;
					if ($p['bool']($p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__getitem__'](keycode))) {
						$pyjs['track']['lineno']=99;
						$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender']]);
			$cls_definition['onMouseLeave'] = $method;
			$pyjs['track']['lineno']=101;
			$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':101};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=101;
				$pyjs['track']['lineno']=102;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=103;
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousewheel'))) {
					$pyjs['track']['lineno']=105;
					if ($p['bool']($p['hasattr'](event, 'wheelDeltaX'))) {
						$pyjs['track']['lineno']=106;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseWheel')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseWheel')); 
						$pyjs['track']['lineno']=107;
						self['_onMouseWheel'](sender, velocity);
					}
					else {
						$pyjs['track']['lineno']=109;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseWheelY')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseWheelY')); 
						$pyjs['track']['lineno']=110;
						$m['DOM']['__is_instance__'] && typeof $m['DOM']['__setattr__'] == 'function' ? $m['DOM']['__setattr__']('eventGetMouseWheelVelocityY', $m['eventGetMouseWheelVelocityY']) : $p['setattr']($m['DOM'], 'eventGetMouseWheelVelocityY', $m['eventGetMouseWheelVelocityY']); 
						$pyjs['track']['lineno']=111;
						self['_onMouseWheelY'](sender, $m['eventGetMouseWheelVelocityY'](event));
					}
				}
				else {
					$pyjs['track']['lineno']=113;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onMouseWheel', $p['getattr'](self, '_onMouseScroll')) : $p['setattr'](self, 'onMouseWheel', $p['getattr'](self, '_onMouseScroll')); 
					$pyjs['track']['lineno']=114;
					self['_onMouseScroll'](sender, velocity);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['onMouseWheel'] = $method;
			$pyjs['track']['lineno']=116;
			$method = $pyjs__bind_method2('_onMouseWheel', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,evt,button,$pyjs__trackstack_size_1,$iter2_idx,event,$div8,events,$iter2_array,$div3,$div2,$div7,$div1,$div6,$div4,$div5;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=117;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=118;
				if ($p['bool'](!$p['bool']($p['getattr'](event, 'wheelDeltaX')))) {
					$pyjs['track']['lineno']=119;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=120;
						button = $constant_int_4;
						$pyjs['track']['lineno']=121;
						events = (typeof ($div1=velocity)==typeof ($div2=(typeof ($usub3=$constant_int_3)=='number'?
							-$usub3:
							$p['op_usub']($usub3))) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
					}
					else {
						$pyjs['track']['lineno']=123;
						button = $constant_int_5;
						$pyjs['track']['lineno']=124;
						events = (typeof ($div3=velocity)==typeof ($div4=$constant_int_3) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4));
					}
				}
				else {
					$pyjs['track']['lineno']=126;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=127;
						button = $constant_int_6;
						$pyjs['track']['lineno']=128;
						events = (typeof ($div5=velocity)==typeof ($div6=(typeof ($usub4=$constant_int_3)=='number'?
							-$usub4:
							$p['op_usub']($usub4))) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6));
					}
					else {
						$pyjs['track']['lineno']=130;
						button = $constant_int_7;
						$pyjs['track']['lineno']=131;
						events = (typeof ($div7=velocity)==typeof ($div8=$constant_int_3) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8));
					}
				}
				$pyjs['track']['lineno']=132;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=133;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])) : $p['setattr'](event, 'pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])); 
				$pyjs['track']['lineno']=134;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['range'](events);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					evt = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=135;
					self['event']['_updateQueue'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseWheel'] = $method;
			$pyjs['track']['lineno']=137;
			$method = $pyjs__bind_method2('_onMouseWheelY', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,events,button,$iter3_array,$div10,$div11,$div12,event,$pyjs__trackstack_size_1,$div9,$iter3_iter,$iter3_type,$iter3_nextval,evt;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':137};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=137;
				$pyjs['track']['lineno']=138;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=139;
				if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
					$pyjs['track']['lineno']=140;
					button = $constant_int_4;
					$pyjs['track']['lineno']=141;
					events = (typeof ($div9=velocity)==typeof ($div10=(typeof ($usub5=$constant_int_3)=='number'?
						-$usub5:
						$p['op_usub']($usub5))) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10));
				}
				else {
					$pyjs['track']['lineno']=143;
					button = $constant_int_5;
					$pyjs['track']['lineno']=144;
					events = (typeof ($div11=velocity)==typeof ($div12=$constant_int_3) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12));
				}
				$pyjs['track']['lineno']=145;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=146;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])) : $p['setattr'](event, 'pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])); 
				$pyjs['track']['lineno']=147;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $p['range'](events);
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					evt = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=148;
					self['event']['_updateQueue'](event);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseWheelY'] = $method;
			$pyjs['track']['lineno']=150;
			$method = $pyjs__bind_method2('_onMouseScroll', function(sender, velocity) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					velocity = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2,button,event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':150};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=150;
				$pyjs['track']['lineno']=151;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=152;
				if ($p['bool'](($p['bool']($or1=($p['cmp'](velocity, $constant_int_1) == 1))?$or1:($p['cmp'](velocity, (typeof ($usub6=$constant_int_1)=='number'?
					-$usub6:
					$p['op_usub']($usub6))) == -1)))) {
					$pyjs['track']['lineno']=153;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=154;
						button = $constant_int_4;
					}
					else {
						$pyjs['track']['lineno']=156;
						button = $constant_int_5;
					}
				}
				else {
					$pyjs['track']['lineno']=158;
					if ($p['bool'](($p['cmp'](velocity, $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=159;
						button = $constant_int_6;
					}
					else {
						$pyjs['track']['lineno']=161;
						button = $constant_int_7;
					}
				}
				$pyjs['track']['lineno']=162;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('btn', button) : $p['setattr'](event, 'btn', button); 
				$pyjs['track']['lineno']=163;
				event['__is_instance__'] && typeof event['__setattr__'] == 'function' ? event['__setattr__']('pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])) : $p['setattr'](event, 'pos', $p['tuple']([$p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('x'), $p['getattr']($p['getattr'](self, 'event'), 'mouseMove')['__getitem__']('y')])); 
				$pyjs['track']['lineno']=164;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['velocity']]);
			$cls_definition['_onMouseScroll'] = $method;
			$pyjs['track']['lineno']=166;
			$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=166;
				$pyjs['track']['lineno']=167;
				if ($p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode))) {
					$pyjs['track']['lineno']=168;
					event = $m['DOM']['eventGetCurrentEvent']();
					$pyjs['track']['lineno']=169;
					$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, true);
					$pyjs['track']['lineno']=170;
					self['event']['_updateQueue'](event);
					$pyjs['track']['lineno']=171;
					$m['DOM']['eventPreventDefault'](event);
				}
				else if ($p['bool']($p['getattr'](self, 'specialKey')['__contains__'](keycode))) {
					$pyjs['track']['lineno']=173;
					event = $m['DOM']['eventGetCurrentEvent']();
					$pyjs['track']['lineno']=174;
					self['event']['_updateQueue'](event);
					$pyjs['track']['lineno']=175;
					$m['DOM']['eventPreventDefault'](event);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyDown'] = $method;
			$pyjs['track']['lineno']=177;
			$method = $pyjs__bind_method2('onKeyPress', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2,event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=177;
				$pyjs['track']['lineno']=178;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=179;
				if ($p['bool'](!$p['bool'](($p['bool']($and1=$p['getattr'](event, 'keyCode'))?$p['getattr'](self, 'specialKey')['__contains__']($p['getattr'](event, 'keyCode')):$and1)))) {
					$pyjs['track']['lineno']=180;
					self['event']['_updateQueue'](event);
				}
				$pyjs['track']['lineno']=181;
				$m['DOM']['eventPreventDefault'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyPress'] = $method;
			$pyjs['track']['lineno']=183;
			$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, modifiers) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					sender = arguments[1];
					keycode = arguments[2];
					modifiers = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var event;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':183};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=183;
				$pyjs['track']['lineno']=184;
				event = $m['DOM']['eventGetCurrentEvent']();
				$pyjs['track']['lineno']=185;
				if ($p['bool']($p['getattr'](self, 'modKey')['__contains__'](keycode))) {
					$pyjs['track']['lineno']=186;
					$p['getattr']($p['getattr'](self, 'event'), 'keyPress')['__setitem__'](keycode, false);
				}
				$pyjs['track']['lineno']=187;
				self['event']['_updateQueue'](event);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
			$cls_definition['onKeyUp'] = $method;
			$pyjs['track']['lineno']=189;
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
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':189};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=189;
				$pyjs['track']['lineno']=190;
				$m['Surface']['resize'](self, width, height);
				$pyjs['track']['lineno']=191;
				self['surface']['resize'](width, height);
				$pyjs['track']['lineno']=192;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=193;
					self['surface']['_display']['textbox']['resize']();
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
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=195;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=196;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=197;
					self['surface']['_display']['textarea']['resize']();
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
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=199;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=201;
			$method = $pyjs__bind_method2('set_function', function($$function) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$function = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $$function;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':201};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=201;
				$pyjs['track']['lineno']=202;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('$$function', $$function) : $p['setattr'](self, '$$function', $$function); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['$$function']]);
			$cls_definition['set_function'] = $method;
			$pyjs['track']['lineno']=204;
			$method = $pyjs__bind_method2('load_images', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var name,$iter4_nextval,image_list,data,$iter4_idx,$iter4_array,ext,$iter4_type,$pyjs__trackstack_size_1,$iter4_iter,image;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':204};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=204;
				$pyjs['track']['lineno']=205;
				if ($p['bool'](images)) {
					$pyjs['track']['lineno']=206;
					image_list = $p['list']([]);
					$pyjs['track']['lineno']=207;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = images;
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						image = $iter4_nextval['$nextval'];
						$pyjs['track']['lineno']=208;
						if ($p['bool']($p['isinstance'](image, $p['str']))) {
							$pyjs['track']['lineno']=209;
							image_list['append'](image);
							$pyjs['track']['lineno']=210;
							self['image_list']['append'](image);
						}
						else {
							$pyjs['track']['lineno']=212;
							name = image['__getitem__']($constant_int_0);
							$pyjs['track']['lineno']=213;
							if ($p['bool']($p['isinstance'](image['__getitem__']($constant_int_1), $p['str']))) {
								$pyjs['track']['lineno']=214;
								data = image['__getitem__']($constant_int_1);
							}
							else {
								$pyjs['track']['lineno']=216;
								data = $m['base64']['b64encode'](image['__getitem__']($constant_int_1)['getvalue']());
							}
							$pyjs['track']['lineno']=217;
							if ($p['bool'](!$p['bool'](data['startswith']('data:')))) {
								$pyjs['track']['lineno']=218;
								ext = name['strip']()['$$split']('.')['__getitem__']((typeof ($usub7=$constant_int_1)=='number'?
									-$usub7:
									$p['op_usub']($usub7)));
								$pyjs['track']['lineno']=219;
								data = $p['sprintf']('data:%s;base64,%s', $p['tuple']([ext, data]));
							}
							$pyjs['track']['lineno']=221;
							image_list['append'](data);
							$pyjs['track']['lineno']=222;
							self['image_list']['append'](name);
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=223;
					$m['loadImages'](image_list, self);
				}
				else {
					$pyjs['track']['lineno']=225;
					self['start']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['load_images'] = $method;
			$pyjs['track']['lineno']=227;
			$method = $pyjs__bind_method2('set_timeout', function(change) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					change = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=227;
				$pyjs['track']['lineno']=228;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_hold', $p['__op_add']($add1=$p['getattr'](self, 'time_hold'),$add2=change)) : $p['setattr'](self, 'time_hold', $p['__op_add']($add1=$p['getattr'](self, 'time_hold'),$add2=change)); 
				$pyjs['track']['lineno']=229;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'time_hold'), $p['getattr'](self, 'time_hold_min')) == -1))) {
					$pyjs['track']['lineno']=230;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_hold', $p['getattr'](self, 'time_hold_min')) : $p['setattr'](self, 'time_hold', $p['getattr'](self, 'time_hold_min')); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['change']]);
			$cls_definition['set_timeout'] = $method;
			$pyjs['track']['lineno']=232;
			$method = $pyjs__bind_method2('start', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':232};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=232;
				$pyjs['track']['lineno']=233;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $p['getattr'](self, '_run')) : $p['setattr'](self, 'run', $p['getattr'](self, '_run')); 
				$pyjs['track']['lineno']=234;
				self['time']['timeout']($p['getattr'](self, 'time_hold'), self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['start'] = $method;
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('stop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=237;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_wait', $constant_int_0) : $p['setattr'](self, 'time_wait', $constant_int_0); 
				$pyjs['track']['lineno']=238;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

					$pyjs['track']={'module':'pyjsdl.display','lineno':238};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=238;
					$pyjs['track']['lineno']=238;
					$pyjs['track']['lineno']=238;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $lambda1) : $p['setattr'](self, 'run', $lambda1); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stop'] = $method;
			$pyjs['track']['lineno']=240;
			$method = $pyjs__bind_method2('onImagesLoaded', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,i,$iter5_array,$pyjs__trackstack_size_1,$iter5_iter,$iter5_idx,$iter5_type,image;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':240};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=240;
				$pyjs['track']['lineno']=241;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['enumerate']($p['getattr'](self, 'image_list'));
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
					i = $tupleassign5[0];
					image = $tupleassign5[1];
					$pyjs['track']['lineno']=242;
					$p['getattr'](self, 'images')['__setitem__'](image, images['__getitem__'](i));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=243;
				self['start']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['onImagesLoaded'] = $method;
			$pyjs['track']['lineno']=245;
			$method = $pyjs__bind_method2('set_timeWait', function(time) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					time = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda2;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':245};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=245;
				$pyjs['track']['lineno']=246;
				if ($p['bool'](time)) {
					$pyjs['track']['lineno']=247;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_wait', time) : $p['setattr'](self, 'time_wait', time); 
					$pyjs['track']['lineno']=248;
					var 					$lambda2 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

						$pyjs['track']={'module':'pyjsdl.display','lineno':248};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=248;
						$pyjs['track']['lineno']=248;
						$pyjs['track']['lineno']=248;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda2['__name__'] = '$lambda2';

					$lambda2['__bind_type__'] = 0;
					$lambda2['__args__'] = [null,null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $lambda2) : $p['setattr'](self, 'run', $lambda2); 
				}
				else {
					$pyjs['track']['lineno']=250;
					if ($p['bool']($p['getattr'](self, 'time_wait'))) {
						$pyjs['track']['lineno']=251;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('time_wait', $constant_int_0) : $p['setattr'](self, 'time_wait', $constant_int_0); 
						$pyjs['track']['lineno']=252;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('run', $p['getattr'](self, '_run')) : $p['setattr'](self, 'run', $p['getattr'](self, '_run')); 
						$pyjs['track']['lineno']=253;
						self['run']();
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['time']]);
			$cls_definition['set_timeWait'] = $method;
			$pyjs['track']['lineno']=255;
			$method = $pyjs__bind_method2('_get_rect', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=256;
				if ($p['bool'](($p['cmp']($p['getattr'](self, '_rect_num'), $p['getattr'](self, '_rect_len')) == -1))) {
					$pyjs['track']['lineno']=257;
					$pyjs['track']['lineno']=257;
					var $pyjs__ret = $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=259;
					self['_rect_list']['append']($m['Rect']($constant_int_0, $constant_int_0, $constant_int_0, $constant_int_0));
					$pyjs['track']['lineno']=260;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rect_len', $p['__op_add']($add3=$p['getattr'](self, '_rect_len'),$add4=$constant_int_1)) : $p['setattr'](self, '_rect_len', $p['__op_add']($add3=$p['getattr'](self, '_rect_len'),$add4=$constant_int_1)); 
					$pyjs['track']['lineno']=261;
					$pyjs['track']['lineno']=261;
					var $pyjs__ret = $p['getattr'](self, '_rect_list')['__getitem__']($p['getattr'](self, '_rect_num'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_rect'] = $method;
			$pyjs['track']['lineno']=263;
			$method = $pyjs__bind_method2('_run', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':263};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=263;
				$pyjs['track']['lineno']=264;
				self['$$function']();
				$pyjs['track']['lineno']=265;
$wnd['requestAnimationFrame']($m['paint']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			}
	, 1, [null,null,['self']]);
			$cls_definition['_run'] = $method;
			$pyjs['track']['lineno']=267;
			$method = $pyjs__bind_method2('rerun', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3599d03919b263d307523298217ed4a6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=267;
				$pyjs['track']['lineno']=268;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'time_hold')))) {
					$pyjs['track']['lineno']=269;
					self['run']();
				}
				else {
					$pyjs['track']['lineno']=271;
					self['time']['timeout']($p['getattr'](self, 'time_hold'), self);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['rerun'] = $method;
			$pyjs['track']['lineno']=17;
			var $bases = new Array($m['Surface'],$m['MouseWheelHandler']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=274;
		$m['paint'] = function(ts) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var img,i,ctx,$add6,$add5,rect;
			$pyjs['track']={'module':'pyjsdl.display','lineno':274};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['track']['lineno']=274;
			$pyjs['track']['lineno']=275;
			ctx = $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'impl'), 'canvasContext');
			$pyjs['track']['lineno']=276;
			img = $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'canvas');
			$pyjs['track']['lineno']=277;
			i = $constant_int_0;
			$pyjs['track']['lineno']=278;
			while ($p['bool'](($p['cmp'](i, $p['getattr']($p['getattr']($m['env'], 'canvas'), '_rect_num')) == -1))) {
				$pyjs['track']['lineno']=279;
				rect = $p['getattr']($p['getattr']($m['env'], 'canvas'), '_rect_list')['__getitem__'](i);
				$pyjs['track']['lineno']=280;
				ctx['drawImage'](img, $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'), $p['getattr'](rect, 'x'), $p['getattr'](rect, 'y'), $p['getattr'](rect, 'width'), $p['getattr'](rect, 'height'));
				$pyjs['track']['lineno']=281;
				i = $p['__op_add']($add5=i,$add6=$constant_int_1);
			}
			$pyjs['track']['lineno']=282;
			$p['getattr']($m['env'], 'canvas')['__is_instance__'] && typeof $p['getattr']($m['env'], 'canvas')['__setattr__'] == 'function' ? $p['getattr']($m['env'], 'canvas')['__setattr__']('_rect_num', $constant_int_0) : $p['setattr']($p['getattr']($m['env'], 'canvas'), '_rect_num', $constant_int_0); 
			$pyjs['track']['lineno']=283;
			$m['env']['canvas']['rerun']();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['paint']['__name__'] = 'paint';

		$m['paint']['__bind_type__'] = 0;
		$m['paint']['__args__'] = [null,null,['ts']];
		$pyjs['track']['lineno']=286;
		$m['Display'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = '4f7c61af3e4fa0663d9bb696d1b6406b';
			$pyjs['track']['lineno']=310;
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
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':310};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=310;
				$pyjs['track']['lineno']=316;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', false) : $p['setattr'](self, '_initialized', false); 
				$pyjs['track']['lineno']=317;
				self['init']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=319;
			$method = $pyjs__bind_method2('init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':319};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=319;
				$pyjs['track']['lineno']=323;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_initialized')))) {
					$pyjs['track']['lineno']=324;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', '') : $p['setattr'](self, 'id', ''); 
					$pyjs['track']['lineno']=325;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('icon', null) : $p['setattr'](self, 'icon', null); 
					$pyjs['track']['lineno']=326;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_image_list', $p['list']([])) : $p['setattr'](self, '_image_list', $p['list']([])); 
					$pyjs['track']['lineno']=327;
					self['_nonimplemented_methods']();
					$pyjs['track']['lineno']=328;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', true) : $p['setattr'](self, '_initialized', true); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['init'] = $method;
			$pyjs['track']['lineno']=330;
			$method = $pyjs__bind_method2('set_mode', function(size, buffered) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					buffered = arguments[2];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof buffered != 'undefined') {
						if (buffered !== null && typeof buffered['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = buffered;
							buffered = arguments[3];
						}
					} else 					if (typeof size != 'undefined') {
						if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = size;
							size = arguments[3];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[3];
						}
					} else {
					}
				}
				if (typeof buffered == 'undefined') buffered=arguments['callee']['__args__'][4][1];
				var $lambda5,$lambda4,$lambda3,panel;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':330};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=330;
				$pyjs['track']['lineno']=336;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('canvas', $m['Canvas'](size, buffered)) : $p['setattr'](self, 'canvas', $m['Canvas'](size, buffered)); 
				$pyjs['track']['lineno']=337;
				$m['env']['__is_instance__'] && typeof $m['env']['__setattr__'] == 'function' ? $m['env']['__setattr__']('canvas', $p['getattr'](self, 'canvas')) : $p['setattr']($m['env'], 'canvas', $p['getattr'](self, 'canvas')); 
				$pyjs['track']['lineno']=338;
				$m['env']['__is_instance__'] && typeof $m['env']['__setattr__'] == 'function' ? $m['env']['__setattr__']('frame', $m['Window']['getDocumentRoot']()) : $p['setattr']($m['env'], 'frame', $m['Window']['getDocumentRoot']()); 
				$pyjs['track']['lineno']=339;
				panel = $pyjs_kwargs_call(null, $m['FocusPanel'], null, null, [{'Widget':$p['getattr'](self, 'canvas')}]);
				$pyjs['track']['lineno']=340;
				$m['RootPanel']()['add'](panel);
				$pyjs['track']['lineno']=341;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('panel', panel) : $p['setattr'](self, 'panel', panel); 
				$pyjs['track']['lineno']=342;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vpanel', null) : $p['setattr'](self, 'vpanel', null); 
				$pyjs['track']['lineno']=343;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textbox', null) : $p['setattr'](self, 'textbox', null); 
				$pyjs['track']['lineno']=344;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textarea', null) : $p['setattr'](self, 'textarea', null); 
				$pyjs['track']['lineno']=345;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)) : $p['setattr'](self, 'Textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)); 
				$pyjs['track']['lineno']=346;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)) : $p['setattr'](self, 'Textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)); 
				$pyjs['track']['lineno']=347;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('surface', $p['getattr']($p['getattr'](self, 'canvas'), 'surface')) : $p['setattr'](self, 'surface', $p['getattr']($p['getattr'](self, 'canvas'), 'surface')); 
				$pyjs['track']['lineno']=348;
				$p['getattr'](self, 'surface')['__is_instance__'] && typeof $p['getattr'](self, 'surface')['__setattr__'] == 'function' ? $p['getattr'](self, 'surface')['__setattr__']('_display', self) : $p['setattr']($p['getattr'](self, 'surface'), '_display', self); 
				$pyjs['track']['lineno']=349;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_surface_rect', self['surface']['get_rect']()) : $p['setattr'](self, '_surface_rect', self['surface']['get_rect']()); 
				$pyjs['track']['lineno']=350;
				if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'canvas'), '_bufferedimage')))) {
					$pyjs['track']['lineno']=351;
					var 					$lambda3 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

						$pyjs['track']={'module':'pyjsdl.display','lineno':351};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=351;
						$pyjs['track']['lineno']=351;
						$pyjs['track']['lineno']=351;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda3['__name__'] = '$lambda3';

					$lambda3['__bind_type__'] = 0;
					$lambda3['__args__'] = [null,null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('flip', $lambda3) : $p['setattr'](self, 'flip', $lambda3); 
					$pyjs['track']['lineno']=352;
					var 					$lambda4 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
						var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


						$pyjs['track']={'module':'pyjsdl.display','lineno':352};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=352;
						$pyjs['track']['lineno']=352;
						$pyjs['track']['lineno']=352;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda4['__name__'] = '$lambda4';

					$lambda4['__bind_type__'] = 0;
					$lambda4['__args__'] = ['arg',null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update', $lambda4) : $p['setattr'](self, 'update', $lambda4); 
					$pyjs['track']['lineno']=353;
					var 					$lambda5 = function() {
						if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
						var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


						$pyjs['track']={'module':'pyjsdl.display','lineno':353};$pyjs['trackstack']['push']($pyjs['track']);
						$pyjs['track']['module']='pyjsdl.display';
						$pyjs['track']['lineno']=353;
						$pyjs['track']['lineno']=353;
						$pyjs['track']['lineno']=353;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					};
					$lambda5['__name__'] = '$lambda5';

					$lambda5['__bind_type__'] = 0;
					$lambda5['__args__'] = ['arg',null];
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('update_rect', $lambda5) : $p['setattr'](self, 'update_rect', $lambda5); 
				}
				$pyjs['track']['lineno']=354;
				$pyjs['track']['lineno']=354;
				var $pyjs__ret = $p['getattr'](self, 'surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',['kwargs'],['self'],['size'],['buffered', true]]);
			$cls_definition['set_mode'] = $method;
			$pyjs['track']['lineno']=356;
			$method = $pyjs__bind_method2('setup', function($$function, images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					$$function = arguments[1];
					images = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];
				var $$function,image_list;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':356};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=356;
				$pyjs['track']['lineno']=362;
				self['canvas']['set_function']($$function);
				$pyjs['track']['lineno']=363;
				image_list = $p['list']([]);
				$pyjs['track']['lineno']=364;
				if ($p['bool']($p['getattr'](self, '_image_list'))) {
					$pyjs['track']['lineno']=365;
					image_list['extend']($p['getattr'](self, '_image_list'));
					$pyjs['track']['lineno']=366;
					$p['__setslice']($p['getattr'](self, '_image_list'), 0, null, $p['list']([]));
				}
				$pyjs['track']['lineno']=367;
				if ($p['bool'](images)) {
					$pyjs['track']['lineno']=368;
					image_list['extend'](images);
				}
				$pyjs['track']['lineno']=369;
				self['canvas']['load_images'](image_list);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['$$function'],['images', null]]);
			$cls_definition['setup'] = $method;
			$pyjs['track']['lineno']=371;
			$method = $pyjs__bind_method2('setup_images', function(images) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					images = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':371};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=371;
				$pyjs['track']['lineno']=377;
				if ($p['bool']($p['isinstance'](images, $p['str']))) {
					$pyjs['track']['lineno']=378;
					images = $p['list']([images]);
				}
				$pyjs['track']['lineno']=379;
				self['_image_list']['extend'](images);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['images']]);
			$cls_definition['setup_images'] = $method;
			$pyjs['track']['lineno']=381;
			$method = $pyjs__bind_method2('textbox_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':381};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=381;
				$pyjs['track']['lineno']=385;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'textbox')))) {
					$pyjs['track']['lineno']=386;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)()) : $p['setattr'](self, 'textbox', (typeof Textbox == "undefined"?$m['Textbox']:Textbox)()); 
					$pyjs['track']['lineno']=387;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)()) : $p['setattr'](self, 'textarea', (typeof Textarea == "undefined"?$m['Textarea']:Textarea)()); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['textbox_init'] = $method;
			$pyjs['track']['lineno']=389;
			$method = $pyjs__bind_method2('is_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':389};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=389;
				$pyjs['track']['lineno']=393;
				$pyjs['track']['lineno']=393;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, 'canvas'), '_isCanvas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['is_canvas'] = $method;
			$pyjs['track']['lineno']=395;
			$method = $pyjs__bind_method2('get_surface', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':395};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=395;
				$pyjs['track']['lineno']=399;
				$pyjs['track']['lineno']=399;
				var $pyjs__ret = $p['getattr'](self, 'surface');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_surface'] = $method;
			$pyjs['track']['lineno']=401;
			$method = $pyjs__bind_method2('get_canvas', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':401};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=401;
				$pyjs['track']['lineno']=405;
				$pyjs['track']['lineno']=405;
				var $pyjs__ret = $p['getattr'](self, 'canvas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_canvas'] = $method;
			$pyjs['track']['lineno']=407;
			$method = $pyjs__bind_method2('get_panel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':407};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=407;
				$pyjs['track']['lineno']=411;
				$pyjs['track']['lineno']=411;
				var $pyjs__ret = $p['getattr'](self, 'panel');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_panel'] = $method;
			$pyjs['track']['lineno']=413;
			$method = $pyjs__bind_method2('get_vpanel', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':413};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=413;
				$pyjs['track']['lineno']=417;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'vpanel')))) {
					$pyjs['track']['lineno']=418;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('vpanel', $m['VerticalPanel']()) : $p['setattr'](self, 'vpanel', $m['VerticalPanel']()); 
					$pyjs['track']['lineno']=419;
					$m['RootPanel']()['add']($p['getattr'](self, 'vpanel'));
				}
				$pyjs['track']['lineno']=420;
				$pyjs['track']['lineno']=420;
				var $pyjs__ret = $p['getattr'](self, 'vpanel');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_vpanel'] = $method;
			$pyjs['track']['lineno']=422;
			$method = $pyjs__bind_method2('quit', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':422};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=422;
				$pyjs['track']['lineno']=426;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', false) : $p['setattr'](self, '_initialized', false); 
				$pyjs['track']['lineno']=427;
				$pyjs['track']['lineno']=427;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['quit'] = $method;
			$pyjs['track']['lineno']=429;
			$method = $pyjs__bind_method2('get_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':429};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=429;
				$pyjs['track']['lineno']=433;
				$pyjs['track']['lineno']=433;
				var $pyjs__ret = $p['getattr'](self, '_initialized');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_init'] = $method;
			$pyjs['track']['lineno']=435;
			$method = $pyjs__bind_method2('get_active', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':435};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=435;
				$pyjs['track']['lineno']=439;
				if ($p['bool']($p['hasattr'](self, 'canvas'))) {
					$pyjs['track']['lineno']=440;
					$pyjs['track']['lineno']=440;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=442;
					$pyjs['track']['lineno']=442;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_active'] = $method;
			$pyjs['track']['lineno']=444;
			$method = $pyjs__bind_method2('set_caption', function(text) {
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
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':444};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=444;
				$pyjs['track']['lineno']=449;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('id', text) : $p['setattr'](self, 'id', text); 
				$pyjs['track']['lineno']=450;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=451;
					self['canvas']['setID']($p['getattr'](self, 'id'));
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
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=453;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=454;
				$pyjs['track']['lineno']=454;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['text']]);
			$cls_definition['set_caption'] = $method;
			$pyjs['track']['lineno']=456;
			$method = $pyjs__bind_method2('get_caption', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':456};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=456;
				$pyjs['track']['lineno']=460;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=461;
					$pyjs['track']['lineno']=461;
					var $pyjs__ret = self['canvas']['getID']();
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
					$pyjs['track']['module']='pyjsdl.display';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=463;
						$pyjs['track']['lineno']=463;
						var $pyjs__ret = $p['getattr'](self, 'id');
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_caption'] = $method;
			$pyjs['track']['lineno']=465;
			$method = $pyjs__bind_method2('clear', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':465};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=465;
				$pyjs['track']['lineno']=469;
				self['surface']['beginPath']();
				$pyjs['track']['lineno']=470;
				self['surface']['setFillStyle']($m['Color']($constant_int_0, $constant_int_0, $constant_int_0));
				$pyjs['track']['lineno']=471;
				self['surface']['fillRect']($constant_int_0, $constant_int_0, $p['getattr']($p['getattr'](self, 'surface'), 'width'), $p['getattr']($p['getattr'](self, 'surface'), 'height'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=473;
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
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda6;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':473};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=473;
				$pyjs['track']['lineno']=477;
				var 				$lambda6 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.display','lineno':477};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.display';
					$pyjs['track']['lineno']=477;
					$pyjs['track']['lineno']=477;
					$pyjs['track']['lineno']=477;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda6['__name__'] = '$lambda6';

				$lambda6['__bind_type__'] = 0;
				$lambda6['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_icon', $lambda6) : $p['setattr'](self, 'set_icon', $lambda6); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=479;
			$method = $pyjs__bind_method2('flip', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':479};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=479;
				$pyjs['track']['lineno']=483;
				$p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__']('x', $constant_int_0) : $p['setattr']($p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0), 'x', $constant_int_0); 
				$pyjs['track']['lineno']=484;
				$p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__']('y', $constant_int_0) : $p['setattr']($p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0), 'y', $constant_int_0); 
				$pyjs['track']['lineno']=485;
				$p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__']('width', $p['getattr']($p['getattr'](self, '_surface_rect'), 'width')) : $p['setattr']($p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0), 'width', $p['getattr']($p['getattr'](self, '_surface_rect'), 'width')); 
				$pyjs['track']['lineno']=486;
				$p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__is_instance__'] && typeof $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__'] == 'function' ? $p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0)['__setattr__']('height', $p['getattr']($p['getattr'](self, '_surface_rect'), 'height')) : $p['setattr']($p['getattr']($p['getattr'](self, 'canvas'), '_rect_list')['__getitem__']($constant_int_0), 'height', $p['getattr']($p['getattr'](self, '_surface_rect'), 'height')); 
				$pyjs['track']['lineno']=487;
				$p['getattr'](self, 'canvas')['__is_instance__'] && typeof $p['getattr'](self, 'canvas')['__setattr__'] == 'function' ? $p['getattr'](self, 'canvas')['__setattr__']('_rect_num', $constant_int_1) : $p['setattr']($p['getattr'](self, 'canvas'), '_rect_num', $constant_int_1); 
				$pyjs['track']['lineno']=488;
				$pyjs['track']['lineno']=488;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['flip'] = $method;
			$pyjs['track']['lineno']=490;
			$method = $pyjs__bind_method2('update', function(rect_list) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rect_list = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f7c61af3e4fa0663d9bb696d1b6406b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof rect_list == 'undefined') rect_list=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':490};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=490;
				$pyjs['track']['lineno']=495;
				if ($p['bool']($p['hasattr'](rect_list, 'append'))) {
					$pyjs['track']['lineno']=496;
					(typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), rect_list);
				}
				else {
					$pyjs['track']['lineno']=498;
					if ($p['bool'](rect_list)) {
						$pyjs['track']['lineno']=499;
						(typeof _update == "undefined"?$m['_update']:_update)($p['getattr'](self, 'canvas'), $p['list']([rect_list]));
					}
					else {
						$pyjs['track']['lineno']=501;
						self['flip']();
					}
				}
				$pyjs['track']['lineno']=502;
				$pyjs['track']['lineno']=502;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['rect_list', null]]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=286;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Display', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=505;
		$m['_update'] = function(canvas, rect_list) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter6_type,$iter6_iter,$iter6_nextval,$iter6_idx,$sub3,$sub2,$sub1,$sub4,repaint_rect,$add14,$add15,$iter6_array,$add10,$add11,$add12,$add13,rect,$add16,r,$add7,$pyjs__trackstack_size_1,$add8,$add9;
			$pyjs['track']={'module':'pyjsdl.display','lineno':505};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['track']['lineno']=505;
			$pyjs['track']['lineno']=506;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = rect_list;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				r = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=507;
				if ($p['bool']($p['hasattr'](r, 'width'))) {
					$pyjs['track']['lineno']=508;
					rect = r;
				}
				else {
					$pyjs['track']['lineno']=510;
					if ($p['bool'](r)) {
						$pyjs['track']['lineno']=511;
						rect = $p['getattr'](canvas, '_rect_temp');
						$pyjs['track']['lineno']=512;
						rect['set'](r);
					}
					else {
						$pyjs['track']['lineno']=514;
						continue;
					}
				}
				$pyjs['track']['lineno']=515;
				repaint_rect = canvas['_get_rect']();
				$pyjs['track']['lineno']=516;
				if ($p['bool'](((($p['cmp']($p['getattr'](rect, 'x'), $constant_int_0))|1) == 1))) {
					$pyjs['track']['lineno']=517;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('x', $p['getattr'](rect, 'x')) : $p['setattr'](repaint_rect, 'x', $p['getattr'](rect, 'x')); 
				}
				else {
					$pyjs['track']['lineno']=519;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('x', $constant_int_0) : $p['setattr'](repaint_rect, 'x', $constant_int_0); 
					$pyjs['track']['lineno']=520;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('width', $p['__op_add']($add7=$p['getattr'](rect, 'width'),$add8=$p['getattr'](rect, 'x'))) : $p['setattr'](repaint_rect, 'width', $p['__op_add']($add7=$p['getattr'](rect, 'width'),$add8=$p['getattr'](rect, 'x'))); 
				}
				$pyjs['track']['lineno']=521;
				if ($p['bool'](((($p['cmp']($p['getattr'](rect, 'y'), $constant_int_0))|1) == 1))) {
					$pyjs['track']['lineno']=522;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('y', $p['getattr'](rect, 'y')) : $p['setattr'](repaint_rect, 'y', $p['getattr'](rect, 'y')); 
				}
				else {
					$pyjs['track']['lineno']=524;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('y', $constant_int_0) : $p['setattr'](repaint_rect, 'y', $constant_int_0); 
					$pyjs['track']['lineno']=525;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('height', $p['__op_add']($add9=$p['getattr'](rect, 'height'),$add10=$p['getattr'](rect, 'y'))) : $p['setattr'](repaint_rect, 'height', $p['__op_add']($add9=$p['getattr'](rect, 'height'),$add10=$p['getattr'](rect, 'y'))); 
				}
				$pyjs['track']['lineno']=526;
				if ($p['bool'](($p['cmp']($p['__op_add']($add11=$p['getattr'](rect, 'x'),$add12=$p['getattr'](rect, 'width')), $p['getattr']($p['getattr'](canvas, 'surface'), 'width')) < 1))) {
					$pyjs['track']['lineno']=527;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('width', $p['getattr'](rect, 'width')) : $p['setattr'](repaint_rect, 'width', $p['getattr'](rect, 'width')); 
				}
				else {
					$pyjs['track']['lineno']=529;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('width', $p['__op_sub']($sub1=$p['getattr']($p['getattr'](canvas, 'surface'), 'width'),$sub2=$p['getattr'](repaint_rect, 'x'))) : $p['setattr'](repaint_rect, 'width', $p['__op_sub']($sub1=$p['getattr']($p['getattr'](canvas, 'surface'), 'width'),$sub2=$p['getattr'](repaint_rect, 'x'))); 
					$pyjs['track']['lineno']=530;
					if ($p['bool'](($p['cmp']($p['getattr'](repaint_rect, 'width'), $constant_int_1) == -1))) {
						$pyjs['track']['lineno']=531;
						continue;
					}
				}
				$pyjs['track']['lineno']=532;
				if ($p['bool'](($p['cmp']($p['__op_add']($add13=$p['getattr'](rect, 'y'),$add14=$p['getattr'](rect, 'height')), $p['getattr']($p['getattr'](canvas, 'surface'), 'height')) < 1))) {
					$pyjs['track']['lineno']=533;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('height', $p['getattr'](rect, 'height')) : $p['setattr'](repaint_rect, 'height', $p['getattr'](rect, 'height')); 
				}
				else {
					$pyjs['track']['lineno']=535;
					repaint_rect['__is_instance__'] && typeof repaint_rect['__setattr__'] == 'function' ? repaint_rect['__setattr__']('height', $p['__op_sub']($sub3=$p['getattr']($p['getattr'](canvas, 'surface'), 'height'),$sub4=$p['getattr'](repaint_rect, 'y'))) : $p['setattr'](repaint_rect, 'height', $p['__op_sub']($sub3=$p['getattr']($p['getattr'](canvas, 'surface'), 'height'),$sub4=$p['getattr'](repaint_rect, 'y'))); 
					$pyjs['track']['lineno']=536;
					if ($p['bool'](($p['cmp']($p['getattr'](repaint_rect, 'height'), $constant_int_1) == -1))) {
						$pyjs['track']['lineno']=537;
						continue;
					}
				}
				$pyjs['track']['lineno']=538;
				canvas['__is_instance__'] && typeof canvas['__setattr__'] == 'function' ? canvas['__setattr__']('_rect_num', $p['__op_add']($add15=$p['getattr'](canvas, '_rect_num'),$add16=$constant_int_1)) : $p['setattr'](canvas, '_rect_num', $p['__op_add']($add15=$p['getattr'](canvas, '_rect_num'),$add16=$constant_int_1)); 
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.display';
			$pyjs['track']['lineno']=539;
			$pyjs['track']['lineno']=539;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['_update']['__name__'] = '_update';

		$m['_update']['__bind_type__'] = 0;
		$m['_update']['__args__'] = [null,null,['canvas'],['rect_list']];
		$pyjs['track']['lineno']=542;
		$m['Textbox'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = 'c4837c067660b3cc504716240a4b7990';
			$pyjs['track']['lineno']=549;
			$method = $pyjs__bind_method2('__init__', function(size, panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					panel = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c4837c067660b3cc504716240a4b7990') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
				var $add20,$pyjs_try_err,$add19,$add17,$add18,$sub6,$sub5;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':549};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=549;
				$pyjs['track']['lineno']=550;
				$m['TextBox']['__init__'](self);
				$pyjs['track']['lineno']=551;
				if ($p['bool'](!$p['bool'](size))) {
					$pyjs['track']['lineno']=552;
					var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub5=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub6=$constant_int_5), $constant_int_20]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign6[0]) : $p['setattr'](self, 'width', $tupleassign6[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign6[1]) : $p['setattr'](self, 'height', $tupleassign6[1]); 
				}
				else {
					$pyjs['track']['lineno']=554;
					var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$p['int'](size['__getitem__']($constant_int_0)), $p['int'](size['__getitem__']($constant_int_1))]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign7[0]) : $p['setattr'](self, 'width', $tupleassign7[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign7[1]) : $p['setattr'](self, 'height', $tupleassign7[1]); 
				}
				$pyjs['track']['lineno']=555;
				self['setSize']($p['__op_add']($add17=$p['str']($p['getattr'](self, 'width')),$add18='px'), $p['__op_add']($add19=$p['str']($p['getattr'](self, 'height')),$add20='px'));
				$pyjs['track']['lineno']=556;
				self['setVisible'](false);
				$pyjs['track']['lineno']=557;
				if ($p['bool'](panel)) {
					$pyjs['track']['lineno']=558;
					panel['add'](self);
				}
				else {
					$pyjs['track']['lineno']=560;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=561;
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
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
						$pyjs['track']['module']='pyjsdl.display';
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
							$pyjs['track']['lineno']=563;
							$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__']('vpanel', $m['VerticalPanel']()) : $p['setattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel', $m['VerticalPanel']()); 
							$pyjs['track']['lineno']=564;
							$m['RootPanel']()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
							$pyjs['track']['lineno']=565;
							$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=567;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c4837c067660b3cc504716240a4b7990') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
				var $or4,$or3,$add21,$add22,$add24,$sub8,$sub7,$add23;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':567};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=567;
				$pyjs['track']['lineno']=568;
				if ($p['bool'](!$p['bool'](($p['bool']($or3=width)?$or3:height)))) {
					$pyjs['track']['lineno']=569;
					var $tupleassign8 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub7=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub8=$constant_int_5), $constant_int_20]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign8[0]) : $p['setattr'](self, 'width', $tupleassign8[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign8[1]) : $p['setattr'](self, 'height', $tupleassign8[1]); 
				}
				else {
					$pyjs['track']['lineno']=571;
					if ($p['bool'](width)) {
						$pyjs['track']['lineno']=572;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](width)) : $p['setattr'](self, 'width', $p['int'](width)); 
					}
					$pyjs['track']['lineno']=573;
					if ($p['bool'](height)) {
						$pyjs['track']['lineno']=574;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](height)) : $p['setattr'](self, 'height', $p['int'](height)); 
					}
				}
				$pyjs['track']['lineno']=575;
				self['setSize']($p['__op_add']($add21=$p['str']($p['getattr'](self, 'width')),$add22='px'), $p['__op_add']($add23=$p['str']($p['getattr'](self, 'height')),$add24='px'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null],['height', null]]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=577;
			$method = $pyjs__bind_method2('toggle', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c4837c067660b3cc504716240a4b7990') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':577};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=577;
				$pyjs['track']['lineno']=578;
				if ($p['bool'](visible)) {
					$pyjs['track']['lineno']=579;
					self['setVisible'](visible);
				}
				else {
					$pyjs['track']['lineno']=581;
					self['setVisible'](!$p['bool'](self['getVisible']()));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['visible', null]]);
			$cls_definition['toggle'] = $method;
			$pyjs['track']['lineno']=542;
			var $bases = new Array($m['TextBox']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Textbox', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=584;
		$m['Textarea'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.display';
			$cls_definition['__md5__'] = 'c369292568e7bb02415b338d7ef37d56';
			$pyjs['track']['lineno']=591;
			$method = $pyjs__bind_method2('__init__', function(size, panel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					panel = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c369292568e7bb02415b338d7ef37d56') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
				if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
				var $add28,$div14,$sub12,$sub10,$add25,$add27,$div13,$sub9,$pyjs_try_err,$add26,$sub11;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':591};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=591;
				$pyjs['track']['lineno']=592;
				$m['TextArea']['__init__'](self);
				$pyjs['track']['lineno']=593;
				if ($p['bool'](!$p['bool'](size))) {
					$pyjs['track']['lineno']=594;
					var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub9=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub10=$constant_int_5), $p['__op_sub']($sub11=$p['int']((typeof ($div13=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div14=$constant_int_5) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14))),$sub12=$constant_int_5)]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign9[0]) : $p['setattr'](self, 'width', $tupleassign9[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign9[1]) : $p['setattr'](self, 'height', $tupleassign9[1]); 
				}
				else {
					$pyjs['track']['lineno']=596;
					var $tupleassign10 = $p['__ass_unpack']($p['tuple']([$p['int'](size['__getitem__']($constant_int_0)), $p['int'](size['__getitem__']($constant_int_1))]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign10[0]) : $p['setattr'](self, 'width', $tupleassign10[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign10[1]) : $p['setattr'](self, 'height', $tupleassign10[1]); 
				}
				$pyjs['track']['lineno']=597;
				self['setSize']($p['__op_add']($add25=$p['str']($p['getattr'](self, 'width')),$add26='px'), $p['__op_add']($add27=$p['str']($p['getattr'](self, 'height')),$add28='px'));
				$pyjs['track']['lineno']=598;
				self['setStyleAttribute']($p['dict']([['resize', 'vertical']]));
				$pyjs['track']['lineno']=599;
				self['setVisible'](false);
				$pyjs['track']['lineno']=600;
				if ($p['bool'](panel)) {
					$pyjs['track']['lineno']=601;
					panel['add'](self);
				}
				else {
					$pyjs['track']['lineno']=603;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=604;
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
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
						$pyjs['track']['module']='pyjsdl.display';
						if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
							$pyjs['track']['lineno']=606;
							$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__is_instance__'] && typeof $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__'] == 'function' ? $p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display')['__setattr__']('vpanel', $m['VerticalPanel']()) : $p['setattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel', $m['VerticalPanel']()); 
							$pyjs['track']['lineno']=607;
							$m['RootPanel']()['add']($p['getattr']($p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), '_display'), 'vpanel'));
							$pyjs['track']['lineno']=608;
							$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=610;
			$method = $pyjs__bind_method2('resize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c369292568e7bb02415b338d7ef37d56') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
				var $or5,$add29,$add30,$or6,$sub13,$div15,$add31,$sub16,$sub15,$add32,$sub14,$div16;
				$pyjs['track']={'module':'pyjsdl.display', 'lineno':610};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=610;
				$pyjs['track']['lineno']=611;
				if ($p['bool'](!$p['bool'](($p['bool']($or5=width)?$or5:height)))) {
					$pyjs['track']['lineno']=612;
					var $tupleassign11 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub13=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'width'),$sub14=$constant_int_5), $p['__op_sub']($sub15=$p['int']((typeof ($div15=$p['getattr']($p['getattr']($p['getattr']($m['env'], 'canvas'), 'surface'), 'height'))==typeof ($div16=$constant_int_5) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16))),$sub16=$constant_int_5)]), 2, null);
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $tupleassign11[0]) : $p['setattr'](self, 'width', $tupleassign11[0]); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $tupleassign11[1]) : $p['setattr'](self, 'height', $tupleassign11[1]); 
				}
				else {
					$pyjs['track']['lineno']=614;
					if ($p['bool'](width)) {
						$pyjs['track']['lineno']=615;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['int'](width)) : $p['setattr'](self, 'width', $p['int'](width)); 
					}
					$pyjs['track']['lineno']=616;
					if ($p['bool'](height)) {
						$pyjs['track']['lineno']=617;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['int'](height)) : $p['setattr'](self, 'height', $p['int'](height)); 
					}
				}
				$pyjs['track']['lineno']=618;
				self['setSize']($p['__op_add']($add29=$p['str']($p['getattr'](self, 'width')),$add30='px'), $p['__op_add']($add31=$p['str']($p['getattr'](self, 'height')),$add32='px'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null],['height', null]]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=620;
			$method = $pyjs__bind_method2('toggle', function(visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					visible = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'c369292568e7bb02415b338d7ef37d56') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.display', 'lineno':620};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.display';
				$pyjs['track']['lineno']=620;
				$pyjs['track']['lineno']=621;
				if ($p['bool'](visible)) {
					$pyjs['track']['lineno']=622;
					self['setVisible'](visible);
				}
				else {
					$pyjs['track']['lineno']=624;
					self['setVisible'](!$p['bool'](self['getVisible']()));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['visible', null]]);
			$cls_definition['toggle'] = $method;
			$pyjs['track']['lineno']=584;
			var $bases = new Array($m['TextArea']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Textarea', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.display */


/* end module: pyjsdl.display */


/*
PYJS_DEPS: ['surface.Surface', 'surface', 'rect.Rect', 'rect', 'time.Time', 'time', 'color.Color', 'color', 'env', 'pyjsdl.event', 'pyjsdl', 'pyjsobj.DOM', 'pyjsobj', 'pyjsobj.Window', 'pyjsobj.RootPanel', 'pyjsobj.FocusPanel', 'pyjsobj.VerticalPanel', 'pyjsobj.loadImages', 'pyjsobj.TextBox', 'pyjsobj.TextArea', 'pyjsobj.MouseWheelHandler', 'pyjsobj.eventGetMouseWheelVelocityY', 'pyjsobj.Event', 'base64']
*/
