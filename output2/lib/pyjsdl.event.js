/* start module: pyjsdl.event */
$pyjs['loaded_modules']['pyjsdl.event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.event']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.event'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.event'];
	$m['__repr__'] = function() { return '<module: pyjsdl.event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.event';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['event'] = $pyjs['loaded_modules']['pyjsdl.event'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.event.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.event.py, line 4:\n    import env';
		$m.__track_lines__[5] = 'pyjsdl.event.py, line 5:\n    import time';
		$m.__track_lines__[6] = 'pyjsdl.event.py, line 6:\n    import locals as Const';
		$m.__track_lines__[8] = "pyjsdl.event.py, line 8:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[11] = 'pyjsdl.event.py, line 11:\n    class Event(object):';
		$m.__track_lines__[29] = 'pyjsdl.event.py, line 29:\n    def __init__(self):';
		$m.__track_lines__[35] = 'pyjsdl.event.py, line 35:\n    self.eventQueue = [None for i in range(256)]      #max 256: Error: Event queue full';
		$m.__track_lines__[37] = 'pyjsdl.event.py, line 37:\n    self.eventNum = 0';
		$m.__track_lines__[38] = 'pyjsdl.event.py, line 38:\n    self.eventQueueTmp = [None for i in range(256)]   #used when main queue is locked';
		$m.__track_lines__[40] = 'pyjsdl.event.py, line 40:\n    self.eventNumTmp = 0';
		$m.__track_lines__[41] = 'pyjsdl.event.py, line 41:\n    self.queueLock = False';
		$m.__track_lines__[42] = 'pyjsdl.event.py, line 42:\n    self.queueAccess = False';
		$m.__track_lines__[43] = 'pyjsdl.event.py, line 43:\n    self.queue = []';
		$m.__track_lines__[44] = 'pyjsdl.event.py, line 44:\n    self.mousePress = {0:False, 1:False, 2:False}';
		$m.__track_lines__[45] = "pyjsdl.event.py, line 45:\n    self.mouseMove = {'x':-1, 'y':-1}";
		$m.__track_lines__[46] = "pyjsdl.event.py, line 46:\n    self.mouseMoveRel = {'x':None, 'y':None}";
		$m.__track_lines__[47] = 'pyjsdl.event.py, line 47:\n    self.keyPress = {Const.K_ALT:False, Const.K_CTRL:False, Const.K_SHIFT:False}';
		$m.__track_lines__[48] = 'pyjsdl.event.py, line 48:\n    self.keyMod = {Const.K_ALT:{True:Const.KMOD_ALT,False:0}, Const.K_CTRL:{True:Const.KMOD_CTRL,False:0}, Const.K_SHIFT:{True:Const.KMOD_SHIFT,False:0}}';
		$m.__track_lines__[49] = 'pyjsdl.event.py, line 49:\n    self.mouseCursor = True';
		$m.__track_lines__[50] = 'pyjsdl.event.py, line 50:\n    self.timer = time.Clock()';
		$m.__track_lines__[51] = "pyjsdl.event.py, line 51:\n    self.eventName = {'mousemove':'MouseMotion', 'mousedown':'MouseButtonDown', 'mouseup':'MouseButtonUp', 'keydown':'KeyDown', 'keyup':'KeyUp'}";
		$m.__track_lines__[52] = "pyjsdl.event.py, line 52:\n    self.eventType = ['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']";
		$m.__track_lines__[53] = 'pyjsdl.event.py, line 53:\n    self.events = set(self.eventType)';
		$m.__track_lines__[54] = "pyjsdl.event.py, line 54:\n    self.eventTypes = {Const.MOUSEMOTION:['mousemove'], Const.MOUSEBUTTONDOWN:['mousedown','wheel','mousewheel', 'DOMMouseScroll'], Const.MOUSEBUTTONUP:['mouseup'], Const.KEYDOWN:['keydown','keypress'], Const.KEYUP:['keyup']}";
		$m.__track_lines__[55] = 'pyjsdl.event.py, line 55:\n    if env.pyjs_mode.optimized:';
		$m.__track_lines__[56] = 'pyjsdl.event.py, line 56:\n    self.modKey = set([Const.K_ALT, Const.K_CTRL, Const.K_SHIFT])';
		$m.__track_lines__[57] = 'pyjsdl.event.py, line 57:\n    self.specialKey = set([Const.K_UP, Const.K_DOWN, Const.K_LEFT, Const.K_RIGHT, Const.K_HOME, Const.K_END, Const.K_PAGEDOWN, Const.K_PAGEUP, Const.K_BACKSPACE, Const.K_DELETE, Const.K_INSERT, Const.K_RETURN, Const.K_TAB, Const.K_ESCAPE])';
		$m.__track_lines__[59] = 'pyjsdl.event.py, line 59:\n    self.modKey = set([keycode.valueOf() for keycode in (Const.K_ALT, Const.K_CTRL, Const.K_SHIFT)])';
		$m.__track_lines__[60] = 'pyjsdl.event.py, line 60:\n    self.specialKey = set([keycode.valueOf() for keycode in (Const.K_UP, Const.K_DOWN, Const.K_LEFT, Const.K_RIGHT, Const.K_HOME, Const.K_END, Const.K_PAGEDOWN, Const.K_PAGEUP, Const.K_BACKSPACE, Const.K_DELETE, Const.K_INSERT, Const.K_RETURN, Const.K_TAB, Const.K_ESCAPE)])';
		$m.__track_lines__[62] = 'pyjsdl.event.py, line 62:\n    self.Event = UserEvent';
		$m.__track_lines__[63] = 'pyjsdl.event.py, line 63:\n    self._nonimplemented_methods()';
		$m.__track_lines__[65] = 'pyjsdl.event.py, line 65:\n    def _lock(self):';
		$m.__track_lines__[66] = 'pyjsdl.event.py, line 66:\n    self.queueLock = True';
		$m.__track_lines__[68] = 'pyjsdl.event.py, line 68:\n    def _unlock(self):';
		$m.__track_lines__[69] = 'pyjsdl.event.py, line 69:\n    self.queueLock = False';
		$m.__track_lines__[71] = 'pyjsdl.event.py, line 71:\n    def _updateQueue(self, event):';
		$m.__track_lines__[72] = 'pyjsdl.event.py, line 72:\n    if event.type not in self.events:';
		$m.__track_lines__[73] = 'pyjsdl.event.py, line 73:\n    return';
		$m.__track_lines__[74] = 'pyjsdl.event.py, line 74:\n    self.queueAccess = True';
		$m.__track_lines__[75] = 'pyjsdl.event.py, line 75:\n    if not self.queueLock:';
		$m.__track_lines__[76] = 'pyjsdl.event.py, line 76:\n    if self.eventNumTmp:';
		$m.__track_lines__[77] = 'pyjsdl.event.py, line 77:\n    self._appendMerge()';
		$m.__track_lines__[78] = 'pyjsdl.event.py, line 78:\n    self._append(event)';
		$m.__track_lines__[80] = 'pyjsdl.event.py, line 80:\n    self._appendTmp(event)';
		$m.__track_lines__[81] = 'pyjsdl.event.py, line 81:\n    self.queueAccess = False';
		$m.__track_lines__[83] = 'pyjsdl.event.py, line 83:\n    def _append(self, event):';
		$m.__track_lines__[84] = 'pyjsdl.event.py, line 84:\n    if self.eventNum < 255:';
		$m.__track_lines__[85] = 'pyjsdl.event.py, line 85:\n    self.eventQueue[self.eventNum] = event';
		$m.__track_lines__[86] = 'pyjsdl.event.py, line 86:\n    self.eventNum += 1';
		$m.__track_lines__[88] = 'pyjsdl.event.py, line 88:\n    def _appendTmp(self, event):';
		$m.__track_lines__[89] = 'pyjsdl.event.py, line 89:\n    if self.eventNumTmp < 255:';
		$m.__track_lines__[90] = 'pyjsdl.event.py, line 90:\n    self.eventQueueTmp[self.eventNumTmp] = event';
		$m.__track_lines__[91] = 'pyjsdl.event.py, line 91:\n    self.eventNumTmp += 1';
		$m.__track_lines__[93] = 'pyjsdl.event.py, line 93:\n    def _appendMerge(self):';
		$m.__track_lines__[94] = 'pyjsdl.event.py, line 94:\n    for i in range(self.eventNumTmp):';
		$m.__track_lines__[95] = 'pyjsdl.event.py, line 95:\n    self._append( self.eventQueueTmp[i] )';
		$m.__track_lines__[96] = 'pyjsdl.event.py, line 96:\n    self.eventQueueTmp[i] = None';
		$m.__track_lines__[97] = 'pyjsdl.event.py, line 97:\n    self.eventNumTmp = 0';
		$m.__track_lines__[99] = 'pyjsdl.event.py, line 99:\n    def pump(self):';
		$m.__track_lines__[103] = 'pyjsdl.event.py, line 103:\n    if self.eventNum > 250:';
		$m.__track_lines__[104] = 'pyjsdl.event.py, line 104:\n    self._lock()';
		$m.__track_lines__[105] = 'pyjsdl.event.py, line 105:\n    self._pump()';
		$m.__track_lines__[106] = 'pyjsdl.event.py, line 106:\n    self._unlock()';
		$m.__track_lines__[107] = 'pyjsdl.event.py, line 107:\n    return None';
		$m.__track_lines__[109] = 'pyjsdl.event.py, line 109:\n    def _pump(self):';
		$m.__track_lines__[110] = 'pyjsdl.event.py, line 110:\n    queue = self.eventQueue[50:self.eventNum]';
		$m.__track_lines__[111] = 'pyjsdl.event.py, line 111:\n    self.eventNum -= 50';
		$m.__track_lines__[112] = 'pyjsdl.event.py, line 112:\n    for i in range(self.eventNum):';
		$m.__track_lines__[113] = 'pyjsdl.event.py, line 113:\n    self.eventQueue[i] = queue[i]';
		$m.__track_lines__[115] = 'pyjsdl.event.py, line 115:\n    def get(self, eventType=None):';
		$m.__track_lines__[120] = 'pyjsdl.event.py, line 120:\n    self._lock()';
		$m.__track_lines__[121] = 'pyjsdl.event.py, line 121:\n    if not eventType:';
		$m.__track_lines__[122] = 'pyjsdl.event.py, line 122:\n    self.queue = [ JEvent(event) for event in self.eventQueue[0:self.eventNum] ]';
		$m.__track_lines__[123] = 'pyjsdl.event.py, line 123:\n    self.eventNum = 0';
		$m.__track_lines__[125] = 'pyjsdl.event.py, line 125:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[126] = 'pyjsdl.event.py, line 126:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[128] = 'pyjsdl.event.py, line 128:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[129] = 'pyjsdl.event.py, line 129:\n    queue = []';
		$m.__track_lines__[130] = 'pyjsdl.event.py, line 130:\n    self.queue = []';
		$m.__track_lines__[131] = 'pyjsdl.event.py, line 131:\n    for i in range(self.eventNum):';
		$m.__track_lines__[132] = 'pyjsdl.event.py, line 132:\n    if self.eventQueue[i].type not in evtType:';
		$m.__track_lines__[133] = 'pyjsdl.event.py, line 133:\n    queue.append(self.eventQueue[i])';
		$m.__track_lines__[135] = 'pyjsdl.event.py, line 135:\n    self.queue.append( JEvent(self.eventQueue[i]) )';
		$m.__track_lines__[136] = 'pyjsdl.event.py, line 136:\n    if len(queue) != self.eventNum:';
		$m.__track_lines__[137] = 'pyjsdl.event.py, line 137:\n    self.eventNum = len(queue)';
		$m.__track_lines__[138] = 'pyjsdl.event.py, line 138:\n    for i in range(self.eventNum):';
		$m.__track_lines__[139] = 'pyjsdl.event.py, line 139:\n    self.eventQueue[i] = queue[i]';
		$m.__track_lines__[140] = 'pyjsdl.event.py, line 140:\n    if self.eventNum > 250:';
		$m.__track_lines__[141] = 'pyjsdl.event.py, line 141:\n    self._pump()';
		$m.__track_lines__[142] = 'pyjsdl.event.py, line 142:\n    self._unlock()';
		$m.__track_lines__[143] = 'pyjsdl.event.py, line 143:\n    return self.queue';
		$m.__track_lines__[145] = 'pyjsdl.event.py, line 145:\n    def poll(self):';
		$m.__track_lines__[149] = 'pyjsdl.event.py, line 149:\n    self._lock()';
		$m.__track_lines__[150] = 'pyjsdl.event.py, line 150:\n    if self.eventNum:';
		$m.__track_lines__[151] = 'pyjsdl.event.py, line 151:\n    evt = JEvent( self.eventQueue.pop(0) )';
		$m.__track_lines__[152] = 'pyjsdl.event.py, line 152:\n    self.eventNum -= 1';
		$m.__track_lines__[153] = 'pyjsdl.event.py, line 153:\n    self.eventQueue.append(None)';
		$m.__track_lines__[154] = 'pyjsdl.event.py, line 154:\n    if self.eventNum > 250:';
		$m.__track_lines__[155] = 'pyjsdl.event.py, line 155:\n    self._pump()';
		$m.__track_lines__[157] = 'pyjsdl.event.py, line 157:\n    evt = self.Event(Const.NOEVENT)';
		$m.__track_lines__[158] = 'pyjsdl.event.py, line 158:\n    self._unlock()';
		$m.__track_lines__[159] = 'pyjsdl.event.py, line 159:\n    return evt';
		$m.__track_lines__[161] = 'pyjsdl.event.py, line 161:\n    def wait(self):     #not implemented in js';
		$m.__track_lines__[165] = 'pyjsdl.event.py, line 165:\n    while True:';
		$m.__track_lines__[166] = 'pyjsdl.event.py, line 166:\n    if self.eventNum:';
		$m.__track_lines__[167] = 'pyjsdl.event.py, line 167:\n    self._lock()';
		$m.__track_lines__[168] = 'pyjsdl.event.py, line 168:\n    evt = JEvent( self.eventQueue.pop(0) )';
		$m.__track_lines__[169] = 'pyjsdl.event.py, line 169:\n    self.eventNum -= 1';
		$m.__track_lines__[170] = 'pyjsdl.event.py, line 170:\n    self.eventQueue.append(None)';
		$m.__track_lines__[171] = 'pyjsdl.event.py, line 171:\n    if self.eventNum > 250:';
		$m.__track_lines__[172] = 'pyjsdl.event.py, line 172:\n    self._pump()';
		$m.__track_lines__[173] = 'pyjsdl.event.py, line 173:\n    self._unlock()';
		$m.__track_lines__[174] = 'pyjsdl.event.py, line 174:\n    return evt';
		$m.__track_lines__[176] = 'pyjsdl.event.py, line 176:\n    self._unlock()';
		$m.__track_lines__[177] = 'pyjsdl.event.py, line 177:\n    return None';
		$m.__track_lines__[179] = 'pyjsdl.event.py, line 179:\n    def peek(self, eventType):';
		$m.__track_lines__[184] = 'pyjsdl.event.py, line 184:\n    if not self.eventNum:';
		$m.__track_lines__[185] = 'pyjsdl.event.py, line 185:\n    return False';
		$m.__track_lines__[186] = 'pyjsdl.event.py, line 186:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[187] = 'pyjsdl.event.py, line 187:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[189] = 'pyjsdl.event.py, line 189:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[190] = 'pyjsdl.event.py, line 190:\n    self._lock()';
		$m.__track_lines__[191] = 'pyjsdl.event.py, line 191:\n    evt = [event.type for event in self.eventQueue[0:self.eventNum]]';
		$m.__track_lines__[192] = 'pyjsdl.event.py, line 192:\n    if self.eventNum > 250:';
		$m.__track_lines__[193] = 'pyjsdl.event.py, line 193:\n    self._pump()';
		$m.__track_lines__[194] = 'pyjsdl.event.py, line 194:\n    self._unlock()';
		$m.__track_lines__[195] = 'pyjsdl.event.py, line 195:\n    for et in evtType:';
		$m.__track_lines__[196] = 'pyjsdl.event.py, line 196:\n    if et in evt:';
		$m.__track_lines__[197] = 'pyjsdl.event.py, line 197:\n    return True';
		$m.__track_lines__[198] = 'pyjsdl.event.py, line 198:\n    return False';
		$m.__track_lines__[200] = 'pyjsdl.event.py, line 200:\n    def clear(self, eventType=None):';
		$m.__track_lines__[205] = 'pyjsdl.event.py, line 205:\n    if not self.eventNum:';
		$m.__track_lines__[206] = 'pyjsdl.event.py, line 206:\n    return None';
		$m.__track_lines__[207] = 'pyjsdl.event.py, line 207:\n    self._lock()';
		$m.__track_lines__[208] = 'pyjsdl.event.py, line 208:\n    if eventType is None:';
		$m.__track_lines__[209] = 'pyjsdl.event.py, line 209:\n    self.eventNum = 0';
		$m.__track_lines__[211] = 'pyjsdl.event.py, line 211:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[212] = 'pyjsdl.event.py, line 212:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[214] = 'pyjsdl.event.py, line 214:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[215] = 'pyjsdl.event.py, line 215:\n    queue = []';
		$m.__track_lines__[216] = 'pyjsdl.event.py, line 216:\n    for i in range(self.eventNum):';
		$m.__track_lines__[217] = 'pyjsdl.event.py, line 217:\n    if self.eventQueue[i].type not in evtType:';
		$m.__track_lines__[218] = 'pyjsdl.event.py, line 218:\n    queue.append(self.eventQueue[i])';
		$m.__track_lines__[219] = 'pyjsdl.event.py, line 219:\n    if len(queue) != self.eventNum:';
		$m.__track_lines__[220] = 'pyjsdl.event.py, line 220:\n    self.eventNum = len(queue)';
		$m.__track_lines__[221] = 'pyjsdl.event.py, line 221:\n    for i in range(self.eventNum):';
		$m.__track_lines__[222] = 'pyjsdl.event.py, line 222:\n    self.eventQueue[i] = queue[i]';
		$m.__track_lines__[223] = 'pyjsdl.event.py, line 223:\n    if self.eventNum > 250:';
		$m.__track_lines__[224] = 'pyjsdl.event.py, line 224:\n    self._pump()';
		$m.__track_lines__[225] = 'pyjsdl.event.py, line 225:\n    self._unlock()';
		$m.__track_lines__[226] = 'pyjsdl.event.py, line 226:\n    return None';
		$m.__track_lines__[228] = 'pyjsdl.event.py, line 228:\n    def event_name(self, eventType):';
		$m.__track_lines__[232] = 'pyjsdl.event.py, line 232:\n    evtType = self.eventTypes[eventType][0]';
		$m.__track_lines__[233] = 'pyjsdl.event.py, line 233:\n    if evtType in self.eventName:';
		$m.__track_lines__[234] = 'pyjsdl.event.py, line 234:\n    return self.eventName[evtType]';
		$m.__track_lines__[236] = 'pyjsdl.event.py, line 236:\n    return None';
		$m.__track_lines__[238] = 'pyjsdl.event.py, line 238:\n    def set_blocked(self, eventType):';
		$m.__track_lines__[242] = 'pyjsdl.event.py, line 242:\n    if eventType is not None:';
		$m.__track_lines__[243] = 'pyjsdl.event.py, line 243:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[244] = 'pyjsdl.event.py, line 244:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[246] = 'pyjsdl.event.py, line 246:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[247] = 'pyjsdl.event.py, line 247:\n    for et in evtType:';
		$m.__track_lines__[248] = 'pyjsdl.event.py, line 248:\n    if et in self.events:';
		$m.__track_lines__[249] = 'pyjsdl.event.py, line 249:\n    self.events.remove(et)';
		$m.__track_lines__[251] = 'pyjsdl.event.py, line 251:\n    for event in self.eventType:';
		$m.__track_lines__[252] = 'pyjsdl.event.py, line 252:\n    self.events.add(event)';
		$m.__track_lines__[253] = 'pyjsdl.event.py, line 253:\n    return None';
		$m.__track_lines__[255] = 'pyjsdl.event.py, line 255:\n    def set_allowed(self, eventType):';
		$m.__track_lines__[259] = 'pyjsdl.event.py, line 259:\n    if eventType is not None:';
		$m.__track_lines__[260] = 'pyjsdl.event.py, line 260:\n    if not isinstance(eventType, (tuple,list)):';
		$m.__track_lines__[261] = 'pyjsdl.event.py, line 261:\n    evtType = [et for et in self.eventTypes[eventType]]';
		$m.__track_lines__[263] = 'pyjsdl.event.py, line 263:\n    evtType = [et for t in eventType for et in self.eventTypes[t]]';
		$m.__track_lines__[264] = 'pyjsdl.event.py, line 264:\n    for et in evtType:';
		$m.__track_lines__[265] = 'pyjsdl.event.py, line 265:\n    self.events.add(et)';
		$m.__track_lines__[267] = 'pyjsdl.event.py, line 267:\n    self.events.clear()';
		$m.__track_lines__[268] = 'pyjsdl.event.py, line 268:\n    return None';
		$m.__track_lines__[270] = 'pyjsdl.event.py, line 270:\n    def get_blocked(self, eventType):';
		$m.__track_lines__[274] = 'pyjsdl.event.py, line 274:\n    evtType = [et for et in self.eventTypes[eventType]][0]';
		$m.__track_lines__[275] = 'pyjsdl.event.py, line 275:\n    if evtType not in self.events:';
		$m.__track_lines__[276] = 'pyjsdl.event.py, line 276:\n    return True';
		$m.__track_lines__[278] = 'pyjsdl.event.py, line 278:\n    return False';
		$m.__track_lines__[280] = 'pyjsdl.event.py, line 280:\n    def post(self, event):';
		$m.__track_lines__[284] = 'pyjsdl.event.py, line 284:\n    self._lock()';
		$m.__track_lines__[285] = 'pyjsdl.event.py, line 285:\n    self._append(event)';
		$m.__track_lines__[286] = 'pyjsdl.event.py, line 286:\n    if event.type not in self.events:';
		$m.__track_lines__[287] = 'pyjsdl.event.py, line 287:\n    self.eventTypes[event.type] = [event.type]';
		$m.__track_lines__[288] = 'pyjsdl.event.py, line 288:\n    self._unlock()';
		$m.__track_lines__[289] = 'pyjsdl.event.py, line 289:\n    return None';
		$m.__track_lines__[291] = 'pyjsdl.event.py, line 291:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[295] = 'pyjsdl.event.py, line 295:\n    self.set_grab = lambda *arg: None';
		$m.__track_lines__[296] = 'pyjsdl.event.py, line 296:\n    self.get_grab = lambda *arg: False';
		$m.__track_lines__[299] = 'pyjsdl.event.py, line 299:\n    class UserEvent(object):';
		$m.__track_lines__[301] = "pyjsdl.event.py, line 301:\n    __slots__ = ['type', 'attr']";
		$m.__track_lines__[303] = 'pyjsdl.event.py, line 303:\n    def __init__(self, eventType, *args, **kwargs):';
		$m.__track_lines__[309] = 'pyjsdl.event.py, line 309:\n    if args:';
		$m.__track_lines__[310] = 'pyjsdl.event.py, line 310:\n    attr = args[0]';
		$m.__track_lines__[312] = 'pyjsdl.event.py, line 312:\n    attr = kwargs';
		$m.__track_lines__[313] = 'pyjsdl.event.py, line 313:\n    object.__setattr__(self, "type", eventType)';
		$m.__track_lines__[314] = 'pyjsdl.event.py, line 314:\n    object.__setattr__(self, "attr", attr)';
		$m.__track_lines__[316] = 'pyjsdl.event.py, line 316:\n    def __repr__(self):';
		$m.__track_lines__[320] = 'pyjsdl.event.py, line 320:\n    return "%s(%s-UserEvent %r)" % (self.__class__, self.type, self.attr)';
		$m.__track_lines__[322] = 'pyjsdl.event.py, line 322:\n    def __getattr__(self, attr):';
		$m.__track_lines__[323] = 'pyjsdl.event.py, line 323:\n    if attr in self.attr:';
		$m.__track_lines__[324] = 'pyjsdl.event.py, line 324:\n    return self.attr[attr]';
		$m.__track_lines__[326] = 'pyjsdl.event.py, line 326:\n    raise AttributeError("\'Event\' object has no attribute \'%s\'" % attr)';
		$m.__track_lines__[328] = 'pyjsdl.event.py, line 328:\n    def __setattr__(self, attr, value):';
		$m.__track_lines__[329] = 'pyjsdl.event.py, line 329:\n    raise AttributeError("\'Event\' object has no attribute \'%s\'" % attr)';
		$m.__track_lines__[332] = 'pyjsdl.event.py, line 332:\n    class JEvent(object):';
		$m.__track_lines__[334] = 'pyjsdl.event.py, line 334:\n    _mouse_pos = (0, 0)';
		$m.__track_lines__[335] = "pyjsdl.event.py, line 335:\n    _types = {'mousemove':Const.MOUSEMOTION, 'mousedown':Const.MOUSEBUTTONDOWN, 'mouseup':Const.MOUSEBUTTONUP, 'wheel':Const.MOUSEBUTTONDOWN, 'mousewheel':Const.MOUSEBUTTONDOWN, 'DOMMouseScroll':Const.MOUSEBUTTONDOWN, 'keydown':Const.KEYDOWN, 'keypress':Const.KEYDOWN, 'keyup':Const.KEYUP}";
		$m.__track_lines__[336] = 'pyjsdl.event.py, line 336:\n    _charCode = {33:Const.K_EXCLAIM, 34:Const.K_QUOTEDBL, 35:Const.K_HASH, 36:Const.K_DOLLAR, 38:Const.K_AMPERSAND, 39:Const.K_QUOTE, 40:Const.K_LEFTPAREN, 41:Const.K_RIGHTPAREN, 42:Const.K_ASTERISK, 43:Const.K_PLUS, 44:Const.K_COMMA, 45:Const.K_MINUS, 46:Const.K_PERIOD, 97:Const.K_a, 98:Const.K_b, 99:Const.K_c, 100:Const.K_d, 101:Const.K_e, 102:Const.K_f, 103:Const.K_g, 104:Const.K_h, 105:Const.K_i, 106:Const.K_j, 107:Const.K_k, 108:Const.K_l, 109:Const.K_m, 110:Const.K_n, 111:Const.K_o, 112:Const.K_p, 113:Const.K_q, 114:Const.K_r, 115:Const.K_s, 116:Const.K_t, 117:Const.K_u, 118:Const.K_v, 119:Const.K_w, 120:Const.K_x, 121:Const.K_y, 122:Const.K_z}';
		$m.__track_lines__[338] = 'pyjsdl.event.py, line 338:\n    def __init__(self, event):';
		$m.__track_lines__[350] = 'pyjsdl.event.py, line 350:\n    self.event = event      #__getattr__ not implemented in pyjs -O';
		$m.__track_lines__[351] = "pyjsdl.event.py, line 351:\n    if event.type in ('mousedown', 'mouseup'):";
		$m.__track_lines__[352] = 'pyjsdl.event.py, line 352:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[353] = 'pyjsdl.event.py, line 353:\n    self.button = event.button + 1';
		$m.__track_lines__[354] = 'pyjsdl.event.py, line 354:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[356] = 'pyjsdl.event.py, line 356:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[357] = 'pyjsdl.event.py, line 357:\n    self.button = event.button + 1';
		$m.__track_lines__[358] = 'pyjsdl.event.py, line 358:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[359] = 'pyjsdl.event.py, line 359:\n    self.rel = (self.pos[0]-self.__class__._mouse_pos[0], self.pos[1]-self.__class__._mouse_pos[1])';
		$m.__track_lines__[360] = 'pyjsdl.event.py, line 360:\n    self.__class__._mouse_pos = self.pos';
		$m.__track_lines__[362] = 'pyjsdl.event.py, line 362:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[363] = 'pyjsdl.event.py, line 363:\n    self.button = event.btn';
		$m.__track_lines__[364] = 'pyjsdl.event.py, line 364:\n    self.pos = event.pos[0]+env.frame.scrollLeft, event.pos[1]+env.frame.scrollTop';
		$m.__track_lines__[366] = 'pyjsdl.event.py, line 366:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[367] = 'pyjsdl.event.py, line 367:\n    self.key = event.keyCode';
		$m.__track_lines__[369] = 'pyjsdl.event.py, line 369:\n    self.type = self.__class__._types[event.type]';
		$m.__track_lines__[370] = 'pyjsdl.event.py, line 370:\n    if event.keyCode:';
		$m.__track_lines__[371] = 'pyjsdl.event.py, line 371:\n    code = event.keyCode';
		$m.__track_lines__[373] = 'pyjsdl.event.py, line 373:\n    code = event.which';
		$m.__track_lines__[374] = 'pyjsdl.event.py, line 374:\n    if code in self.__class__._charCode:';
		$m.__track_lines__[375] = 'pyjsdl.event.py, line 375:\n    self.key = self.__class__._charCode[code]';
		$m.__track_lines__[377] = 'pyjsdl.event.py, line 377:\n    self.key = code';
		$m.__track_lines__[379] = 'pyjsdl.event.py, line 379:\n    self.type = event.type';
		$m.__track_lines__[380] = 'pyjsdl.event.py, line 380:\n    for attr in event.attr:';
		$m.__track_lines__[381] = 'pyjsdl.event.py, line 381:\n    object.__setattr__(self, attr, event.attr[attr])';
		$m.__track_lines__[383] = 'pyjsdl.event.py, line 383:\n    def __repr__(self):';
		$m.__track_lines__[387] = "pyjsdl.event.py, line 387:\n    if hasattr(self.event, 'toString'):";
		$m.__track_lines__[388] = 'pyjsdl.event.py, line 388:\n    return "%s(%s)" % (self.__class__, self.event.toString())';
		$m.__track_lines__[390] = 'pyjsdl.event.py, line 390:\n    return self.event.__repr__()';
		$m.__track_lines__[392] = 'pyjsdl.event.py, line 392:\n    def getEvent(self):';
		$m.__track_lines__[396] = 'pyjsdl.event.py, line 396:\n    return self.event';

		var $constant_int_256 = new $p['int'](256);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_33 = new $p['int'](33);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_35 = new $p['int'](35);
		var $constant_int_36 = new $p['int'](36);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_39 = new $p['int'](39);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_41 = new $p['int'](41);
		var $constant_int_42 = new $p['int'](42);
		var $constant_int_43 = new $p['int'](43);
		var $constant_int_44 = new $p['int'](44);
		var $constant_int_45 = new $p['int'](45);
		var $constant_int_46 = new $p['int'](46);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_122 = new $p['int'](122);
		var $constant_int_97 = new $p['int'](97);
		var $constant_int_98 = new $p['int'](98);
		var $constant_int_99 = new $p['int'](99);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_101 = new $p['int'](101);
		var $constant_int_102 = new $p['int'](102);
		var $constant_int_103 = new $p['int'](103);
		var $constant_int_104 = new $p['int'](104);
		var $constant_int_105 = new $p['int'](105);
		var $constant_int_106 = new $p['int'](106);
		var $constant_int_107 = new $p['int'](107);
		var $constant_int_108 = new $p['int'](108);
		var $constant_int_109 = new $p['int'](109);
		var $constant_int_110 = new $p['int'](110);
		var $constant_int_111 = new $p['int'](111);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_113 = new $p['int'](113);
		var $constant_int_114 = new $p['int'](114);
		var $constant_int_115 = new $p['int'](115);
		var $constant_int_116 = new $p['int'](116);
		var $constant_int_117 = new $p['int'](117);
		var $constant_int_118 = new $p['int'](118);
		var $constant_int_119 = new $p['int'](119);
		var $constant_int_120 = new $p['int'](120);
		var $constant_int_121 = new $p['int'](121);
		var $constant_int_250 = new $p['int'](250);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.event';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('env', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['time'] = $p['___import___']('time', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Const'] = $p['___import___']('locals', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=11;
		$m['Event'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = '24ffa67a477cee82e2e39afb9d25f171';
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
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=29;
				$pyjs['track']['lineno']=35;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventQueue', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_256);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp1;}()) : $p['setattr'](self, 'eventQueue', function(){
					var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($constant_int_256);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					$collcomp1['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp1;}()); 
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				$pyjs['track']['lineno']=38;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventQueueTmp', function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['range']($constant_int_256);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					$collcomp2['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp2;}()) : $p['setattr'](self, 'eventQueueTmp', function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['range']($constant_int_256);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					$collcomp2['append'](null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp2;}()); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $constant_int_0) : $p['setattr'](self, 'eventNumTmp', $constant_int_0); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', false) : $p['setattr'](self, 'queueLock', false); 
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', false) : $p['setattr'](self, 'queueAccess', false); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', $p['list']([])) : $p['setattr'](self, 'queue', $p['list']([])); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mousePress', $p['dict']([[$constant_int_0, false], [$constant_int_1, false], [$constant_int_2, false]])) : $p['setattr'](self, 'mousePress', $p['dict']([[$constant_int_0, false], [$constant_int_1, false], [$constant_int_2, false]])); 
				$pyjs['track']['lineno']=45;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMove', $p['dict']([['x', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))], ['y', (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]])) : $p['setattr'](self, 'mouseMove', $p['dict']([['x', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))], ['y', (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2))]])); 
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseMoveRel', $p['dict']([['x', null], ['y', null]])) : $p['setattr'](self, 'mouseMoveRel', $p['dict']([['x', null], ['y', null]])); 
				$pyjs['track']['lineno']=47;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyPress', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), false], [$p['getattr']($m['Const'], 'K_CTRL'), false], [$p['getattr']($m['Const'], 'K_SHIFT'), false]])) : $p['setattr'](self, 'keyPress', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), false], [$p['getattr']($m['Const'], 'K_CTRL'), false], [$p['getattr']($m['Const'], 'K_SHIFT'), false]])); 
				$pyjs['track']['lineno']=48;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('keyMod', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_ALT')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_CTRL'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_CTRL')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_SHIFT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_SHIFT')], [false, $constant_int_0]])]])) : $p['setattr'](self, 'keyMod', $p['dict']([[$p['getattr']($m['Const'], 'K_ALT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_ALT')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_CTRL'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_CTRL')], [false, $constant_int_0]])], [$p['getattr']($m['Const'], 'K_SHIFT'), $p['dict']([[true, $p['getattr']($m['Const'], 'KMOD_SHIFT')], [false, $constant_int_0]])]])); 
				$pyjs['track']['lineno']=49;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mouseCursor', true) : $p['setattr'](self, 'mouseCursor', true); 
				$pyjs['track']['lineno']=50;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('timer', $m['time']['Clock']()) : $p['setattr'](self, 'timer', $m['time']['Clock']()); 
				$pyjs['track']['lineno']=51;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventName', $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']])) : $p['setattr'](self, 'eventName', $p['dict']([['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']])); 
				$pyjs['track']['lineno']=52;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventType', $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup'])) : $p['setattr'](self, 'eventType', $p['list'](['mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup'])); 
				$pyjs['track']['lineno']=53;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('events', $p['set']($p['getattr'](self, 'eventType'))) : $p['setattr'](self, 'events', $p['set']($p['getattr'](self, 'eventType'))); 
				$pyjs['track']['lineno']=54;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventTypes', $p['dict']([[$p['getattr']($m['Const'], 'MOUSEMOTION'), $p['list'](['mousemove'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONDOWN'), $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONUP'), $p['list'](['mouseup'])], [$p['getattr']($m['Const'], 'KEYDOWN'), $p['list'](['keydown', 'keypress'])], [$p['getattr']($m['Const'], 'KEYUP'), $p['list'](['keyup'])]])) : $p['setattr'](self, 'eventTypes', $p['dict']([[$p['getattr']($m['Const'], 'MOUSEMOTION'), $p['list'](['mousemove'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONDOWN'), $p['list'](['mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll'])], [$p['getattr']($m['Const'], 'MOUSEBUTTONUP'), $p['list'](['mouseup'])], [$p['getattr']($m['Const'], 'KEYDOWN'), $p['list'](['keydown', 'keypress'])], [$p['getattr']($m['Const'], 'KEYUP'), $p['list'](['keyup'])]])); 
				$pyjs['track']['lineno']=55;
				if ($p['bool']($p['getattr']($p['getattr']($m['env'], 'pyjs_mode'), 'optimized'))) {
					$pyjs['track']['lineno']=56;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]))) : $p['setattr'](self, 'modKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]))); 
					$pyjs['track']['lineno']=57;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]))) : $p['setattr'](self, 'specialKey', $p['set']($p['list']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]))); 
				}
				else {
					$pyjs['track']['lineno']=59;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('modKey', $p['set'](function(){
						var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,keycode;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						keycode = $iter3_nextval['$nextval'];
						$collcomp3['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp3;}())) : $p['setattr'](self, 'modKey', $p['set'](function(){
						var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp3,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,keycode;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_ALT'), $p['getattr']($m['Const'], 'K_CTRL'), $p['getattr']($m['Const'], 'K_SHIFT')]);
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						keycode = $iter3_nextval['$nextval'];
						$collcomp3['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp3;}())); 
					$pyjs['track']['lineno']=60;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('specialKey', $p['set'](function(){
						var $iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,keycode;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						keycode = $iter4_nextval['$nextval'];
						$collcomp4['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp4;}())) : $p['setattr'](self, 'specialKey', $p['set'](function(){
						var $iter4_nextval,$collcomp4,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,keycode;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = $p['tuple']([$p['getattr']($m['Const'], 'K_UP'), $p['getattr']($m['Const'], 'K_DOWN'), $p['getattr']($m['Const'], 'K_LEFT'), $p['getattr']($m['Const'], 'K_RIGHT'), $p['getattr']($m['Const'], 'K_HOME'), $p['getattr']($m['Const'], 'K_END'), $p['getattr']($m['Const'], 'K_PAGEDOWN'), $p['getattr']($m['Const'], 'K_PAGEUP'), $p['getattr']($m['Const'], 'K_BACKSPACE'), $p['getattr']($m['Const'], 'K_DELETE'), $p['getattr']($m['Const'], 'K_INSERT'), $p['getattr']($m['Const'], 'K_RETURN'), $p['getattr']($m['Const'], 'K_TAB'), $p['getattr']($m['Const'], 'K_ESCAPE')]);
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						keycode = $iter4_nextval['$nextval'];
						$collcomp4['append'](keycode['valueOf']());
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp4;}())); 
				}
				$pyjs['track']['lineno']=62;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Event', (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent)) : $p['setattr'](self, 'Event', (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent)); 
				$pyjs['track']['lineno']=63;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=65;
			$method = $pyjs__bind_method2('_lock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=66;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', true) : $p['setattr'](self, 'queueLock', true); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_lock'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('_unlock', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=69;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueLock', false) : $p['setattr'](self, 'queueLock', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_unlock'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('_updateQueue', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				if ($p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=73;
					$pyjs['track']['lineno']=73;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=74;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', true) : $p['setattr'](self, 'queueAccess', true); 
				$pyjs['track']['lineno']=75;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'queueLock')))) {
					$pyjs['track']['lineno']=76;
					if ($p['bool']($p['getattr'](self, 'eventNumTmp'))) {
						$pyjs['track']['lineno']=77;
						self['_appendMerge']();
					}
					$pyjs['track']['lineno']=78;
					self['_append'](event);
				}
				else {
					$pyjs['track']['lineno']=80;
					self['_appendTmp'](event);
				}
				$pyjs['track']['lineno']=81;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queueAccess', false) : $p['setattr'](self, 'queueAccess', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_updateQueue'] = $method;
			$pyjs['track']['lineno']=83;
			$method = $pyjs__bind_method2('_append', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=84;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_255) == -1))) {
					$pyjs['track']['lineno']=85;
					$p['getattr'](self, 'eventQueue')['__setitem__']($p['getattr'](self, 'eventNum'), event);
					$pyjs['track']['lineno']=86;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_add']($add1=$p['getattr'](self, 'eventNum'),$add2=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_add']($add1=$p['getattr'](self, 'eventNum'),$add2=$constant_int_1)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_append'] = $method;
			$pyjs['track']['lineno']=88;
			$method = $pyjs__bind_method2('_appendTmp', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=89;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNumTmp'), $constant_int_255) == -1))) {
					$pyjs['track']['lineno']=90;
					$p['getattr'](self, 'eventQueueTmp')['__setitem__']($p['getattr'](self, 'eventNumTmp'), event);
					$pyjs['track']['lineno']=91;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $p['__op_add']($add3=$p['getattr'](self, 'eventNumTmp'),$add4=$constant_int_1)) : $p['setattr'](self, 'eventNumTmp', $p['__op_add']($add3=$p['getattr'](self, 'eventNumTmp'),$add4=$constant_int_1)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['_appendTmp'] = $method;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('_appendMerge', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$iter5_iter,$iter5_array,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=94;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['range']($p['getattr'](self, 'eventNumTmp'));
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					i = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=95;
					self['_append']($p['getattr'](self, 'eventQueueTmp')['__getitem__'](i));
					$pyjs['track']['lineno']=96;
					$p['getattr'](self, 'eventQueueTmp')['__setitem__'](i, null);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=97;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNumTmp', $constant_int_0) : $p['setattr'](self, 'eventNumTmp', $constant_int_0); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_appendMerge'] = $method;
			$pyjs['track']['lineno']=99;
			$method = $pyjs__bind_method2('pump', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=99;
				$pyjs['track']['lineno']=103;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
					$pyjs['track']['lineno']=104;
					self['_lock']();
					$pyjs['track']['lineno']=105;
					self['_pump']();
					$pyjs['track']['lineno']=106;
					self['_unlock']();
				}
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=107;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pump'] = $method;
			$pyjs['track']['lineno']=109;
			$method = $pyjs__bind_method2('_pump', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter6_idx,$iter6_type,queue,i,$iter6_array,$pyjs__trackstack_size_1,$sub2,$sub1,$iter6_iter,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':109};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=109;
				$pyjs['track']['lineno']=110;
				queue = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_50, $p['getattr'](self, 'eventNum'));
				$pyjs['track']['lineno']=111;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub1=$p['getattr'](self, 'eventNum'),$sub2=$constant_int_50)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub1=$p['getattr'](self, 'eventNum'),$sub2=$constant_int_50)); 
				$pyjs['track']['lineno']=112;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = $p['range']($p['getattr'](self, 'eventNum'));
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					i = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=113;
					$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_pump'] = $method;
			$pyjs['track']['lineno']=115;
			$method = $pyjs__bind_method2('get', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
				var evtType,$iter12_iter,$iter12_idx,i,$iter11_type,$iter12_array,$iter11_array,queue,$iter11_iter,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$iter12_nextval,$iter12_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=120;
				self['_lock']();
				$pyjs['track']['lineno']=121;
				if ($p['bool'](!$p['bool'](eventType))) {
					$pyjs['track']['lineno']=122;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', function(){
						var $iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,event;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						event = $iter7_nextval['$nextval'];
						$collcomp5['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp5;}()) : $p['setattr'](self, 'queue', function(){
						var $iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,event;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						event = $iter7_nextval['$nextval'];
						$collcomp5['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)(event));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp5;}()); 
					$pyjs['track']['lineno']=123;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				}
				else {
					$pyjs['track']['lineno']=125;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=126;
						evtType = function(){
							var $iter8_idx,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,et;
	$collcomp6 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter8_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							et = $iter8_nextval['$nextval'];
							$collcomp6['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp6;}();
					}
					else {
						$pyjs['track']['lineno']=128;
						evtType = function(){
							var $iter10_nextval,$iter9_iter,$collcomp7,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_type,$pyjs__trackstack_size_2,t,$pyjs__trackstack_size_1,$iter10_type,et,$iter10_iter,$iter9_array;
	$collcomp7 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter9_iter = eventType;
						$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
						while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
							t = $iter9_nextval['$nextval'];
							$pyjs['track']['lineno']=128;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter10_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
							while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
								et = $iter10_nextval['$nextval'];
								$collcomp7['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp7;}();
					}
					$pyjs['track']['lineno']=129;
					queue = $p['list']([]);
					$pyjs['track']['lineno']=130;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', $p['list']([])) : $p['setattr'](self, 'queue', $p['list']([])); 
					$pyjs['track']['lineno']=131;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter11_iter = $p['range']($p['getattr'](self, 'eventNum'));
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						i = $iter11_nextval['$nextval'];
						$pyjs['track']['lineno']=132;
						if ($p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')))) {
							$pyjs['track']['lineno']=133;
							queue['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
						}
						else {
							$pyjs['track']['lineno']=135;
							self['queue']['append']((typeof JEvent == "undefined"?$m['JEvent']:JEvent)($p['getattr'](self, 'eventQueue')['__getitem__'](i)));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=136;
					if ($p['bool'](!$p['op_eq']($p['len'](queue), $p['getattr'](self, 'eventNum')))) {
						$pyjs['track']['lineno']=137;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['len'](queue)) : $p['setattr'](self, 'eventNum', $p['len'](queue)); 
						$pyjs['track']['lineno']=138;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter12_iter = $p['range']($p['getattr'](self, 'eventNum'));
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							i = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=139;
							$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
					}
					$pyjs['track']['lineno']=140;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
						$pyjs['track']['lineno']=141;
						self['_pump']();
					}
				}
				$pyjs['track']['lineno']=142;
				self['_unlock']();
				$pyjs['track']['lineno']=143;
				$pyjs['track']['lineno']=143;
				var $pyjs__ret = $p['getattr'](self, 'queue');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType', null]]);
			$cls_definition['get'] = $method;
			$pyjs['track']['lineno']=145;
			$method = $pyjs__bind_method2('poll', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub3,evt,$sub4;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=145;
				$pyjs['track']['lineno']=149;
				self['_lock']();
				$pyjs['track']['lineno']=150;
				if ($p['bool']($p['getattr'](self, 'eventNum'))) {
					$pyjs['track']['lineno']=151;
					evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop']($constant_int_0));
					$pyjs['track']['lineno']=152;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub3=$p['getattr'](self, 'eventNum'),$sub4=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub3=$p['getattr'](self, 'eventNum'),$sub4=$constant_int_1)); 
					$pyjs['track']['lineno']=153;
					self['eventQueue']['append'](null);
					$pyjs['track']['lineno']=154;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
						$pyjs['track']['lineno']=155;
						self['_pump']();
					}
				}
				else {
					$pyjs['track']['lineno']=157;
					evt = self['Event']($p['getattr']($m['Const'], 'NOEVENT'));
				}
				$pyjs['track']['lineno']=158;
				self['_unlock']();
				$pyjs['track']['lineno']=159;
				$pyjs['track']['lineno']=159;
				var $pyjs__ret = evt;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['poll'] = $method;
			$pyjs['track']['lineno']=161;
			$method = $pyjs__bind_method2('wait', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evt,$sub6,$sub5;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=161;
				$pyjs['track']['lineno']=165;
				while ($p['bool'](true)) {
					$pyjs['track']['lineno']=166;
					if ($p['bool']($p['getattr'](self, 'eventNum'))) {
						$pyjs['track']['lineno']=167;
						self['_lock']();
						$pyjs['track']['lineno']=168;
						evt = (typeof JEvent == "undefined"?$m['JEvent']:JEvent)(self['eventQueue']['pop']($constant_int_0));
						$pyjs['track']['lineno']=169;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['__op_sub']($sub5=$p['getattr'](self, 'eventNum'),$sub6=$constant_int_1)) : $p['setattr'](self, 'eventNum', $p['__op_sub']($sub5=$p['getattr'](self, 'eventNum'),$sub6=$constant_int_1)); 
						$pyjs['track']['lineno']=170;
						self['eventQueue']['append'](null);
						$pyjs['track']['lineno']=171;
						if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
							$pyjs['track']['lineno']=172;
							self['_pump']();
						}
						$pyjs['track']['lineno']=173;
						self['_unlock']();
						$pyjs['track']['lineno']=174;
						$pyjs['track']['lineno']=174;
						var $pyjs__ret = evt;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=176;
						self['_unlock']();
						$pyjs['track']['lineno']=177;
						$pyjs['track']['lineno']=177;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['wait'] = $method;
			$pyjs['track']['lineno']=179;
			$method = $pyjs__bind_method2('peek', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter17_nextval,$iter17_iter,et,$pyjs__trackstack_size_1,$iter17_array,$iter17_idx,$iter17_type,evt;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=179;
				$pyjs['track']['lineno']=184;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')))) {
					$pyjs['track']['lineno']=185;
					$pyjs['track']['lineno']=185;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=186;
				if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
					$pyjs['track']['lineno']=187;
					evtType = function(){
						var $iter13_nextval,$iter13_iter,$collcomp8,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,et,$iter13_array;
	$collcomp8 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						et = $iter13_nextval['$nextval'];
						$collcomp8['append'](et);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp8;}();
				}
				else {
					$pyjs['track']['lineno']=189;
					evtType = function(){
						var $iter14_array,$iter15_array,$iter14_type,$iter15_iter,$collcomp9,et,$iter15_type,$iter15_idx,$pyjs__trackstack_size_2,t,$iter14_iter,$pyjs__trackstack_size_1,$iter15_nextval,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter14_iter = eventType;
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						t = $iter14_nextval['$nextval'];
						$pyjs['track']['lineno']=189;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter15_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
						$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
						while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
							et = $iter15_nextval['$nextval'];
							$collcomp9['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';

	return $collcomp9;}();
				}
				$pyjs['track']['lineno']=190;
				self['_lock']();
				$pyjs['track']['lineno']=191;
				evt = function(){
					var $iter16_array,$iter16_type,$pyjs__trackstack_size_1,$iter16_idx,$collcomp10,$iter16_nextval,$iter16_iter,event;
	$collcomp10 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter16_iter = $p['__getslice']($p['getattr'](self, 'eventQueue'), $constant_int_0, $p['getattr'](self, 'eventNum'));
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					event = $iter16_nextval['$nextval'];
					$collcomp10['append']($p['getattr'](event, 'type'));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp10;}();
				$pyjs['track']['lineno']=192;
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
					$pyjs['track']['lineno']=193;
					self['_pump']();
				}
				$pyjs['track']['lineno']=194;
				self['_unlock']();
				$pyjs['track']['lineno']=195;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = evtType;
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					et = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=196;
					if ($p['bool'](evt['__contains__'](et))) {
						$pyjs['track']['lineno']=197;
						$pyjs['track']['lineno']=197;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=198;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['peek'] = $method;
			$pyjs['track']['lineno']=200;
			$method = $pyjs__bind_method2('clear', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
				var evtType,$iter21_type,$iter21_idx,$iter22_array,i,$iter21_nextval,$iter22_nextval,$iter22_idx,queue,$iter21_iter,$iter22_type,$iter21_array,$pyjs__trackstack_size_1,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=205;
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'eventNum')))) {
					$pyjs['track']['lineno']=206;
					$pyjs['track']['lineno']=206;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=207;
				self['_lock']();
				$pyjs['track']['lineno']=208;
				if ($p['bool']($p['op_is'](eventType, null))) {
					$pyjs['track']['lineno']=209;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $constant_int_0) : $p['setattr'](self, 'eventNum', $constant_int_0); 
				}
				else {
					$pyjs['track']['lineno']=211;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=212;
						evtType = function(){
							var $iter18_type,$iter18_iter,$iter18_array,$iter18_idx,$collcomp11,$pyjs__trackstack_size_1,et,$iter18_nextval;
	$collcomp11 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter18_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
						while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
							et = $iter18_nextval['$nextval'];
							$collcomp11['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp11;}();
					}
					else {
						$pyjs['track']['lineno']=214;
						evtType = function(){
							var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_type,$iter20_idx,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$pyjs__trackstack_size_2,$collcomp12,$pyjs__trackstack_size_1,et,$iter20_array,t;
	$collcomp12 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter19_iter = eventType;
						$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
						while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
							t = $iter19_nextval['$nextval'];
							$pyjs['track']['lineno']=214;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter20_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
							while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
								et = $iter20_nextval['$nextval'];
								$collcomp12['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp12;}();
					}
					$pyjs['track']['lineno']=215;
					queue = $p['list']([]);
					$pyjs['track']['lineno']=216;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter21_iter = $p['range']($p['getattr'](self, 'eventNum'));
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						i = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=217;
						if ($p['bool'](!evtType['__contains__']($p['getattr']($p['getattr'](self, 'eventQueue')['__getitem__'](i), 'type')))) {
							$pyjs['track']['lineno']=218;
							queue['append']($p['getattr'](self, 'eventQueue')['__getitem__'](i));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=219;
					if ($p['bool'](!$p['op_eq']($p['len'](queue), $p['getattr'](self, 'eventNum')))) {
						$pyjs['track']['lineno']=220;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('eventNum', $p['len'](queue)) : $p['setattr'](self, 'eventNum', $p['len'](queue)); 
						$pyjs['track']['lineno']=221;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter22_iter = $p['range']($p['getattr'](self, 'eventNum'));
						$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
						while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
							i = $iter22_nextval['$nextval'];
							$pyjs['track']['lineno']=222;
							$p['getattr'](self, 'eventQueue')['__setitem__'](i, queue['__getitem__'](i));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';
					}
					$pyjs['track']['lineno']=223;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'eventNum'), $constant_int_250) == 1))) {
						$pyjs['track']['lineno']=224;
						self['_pump']();
					}
				}
				$pyjs['track']['lineno']=225;
				self['_unlock']();
				$pyjs['track']['lineno']=226;
				$pyjs['track']['lineno']=226;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType', null]]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=228;
			$method = $pyjs__bind_method2('event_name', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':228};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=228;
				$pyjs['track']['lineno']=232;
				evtType = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType)['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=233;
				if ($p['bool']($p['getattr'](self, 'eventName')['__contains__'](evtType))) {
					$pyjs['track']['lineno']=234;
					$pyjs['track']['lineno']=234;
					var $pyjs__ret = $p['getattr'](self, 'eventName')['__getitem__'](evtType);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=236;
					$pyjs['track']['lineno']=236;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['event_name'] = $method;
			$pyjs['track']['lineno']=238;
			$method = $pyjs__bind_method2('set_blocked', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter27_nextval,$iter26_idx,$iter26_nextval,$pyjs__trackstack_size_1,$iter26_type,$iter27_array,$iter27_iter,$iter27_idx,et,$iter26_array,$iter26_iter,event,$iter27_type;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':238};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=238;
				$pyjs['track']['lineno']=242;
				if ($p['bool'](!$p['op_is'](eventType, null))) {
					$pyjs['track']['lineno']=243;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=244;
						evtType = function(){
							var $iter23_type,$iter23_nextval,$iter23_iter,$iter23_idx,$pyjs__trackstack_size_1,$iter23_array,et,$collcomp13;
	$collcomp13 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter23_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
						while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
							et = $iter23_nextval['$nextval'];
							$collcomp13['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp13;}();
					}
					else {
						$pyjs['track']['lineno']=246;
						evtType = function(){
							var $collcomp14,$iter24_idx,$iter25_array,$iter25_nextval,$iter25_iter,$iter24_type,$iter24_array,$pyjs__trackstack_size_2,t,$iter25_idx,$pyjs__trackstack_size_1,et,$iter25_type,$iter24_iter,$iter24_nextval;
	$collcomp14 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter24_iter = eventType;
						$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
						while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
							t = $iter24_nextval['$nextval'];
							$pyjs['track']['lineno']=246;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter25_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
							while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
								et = $iter25_nextval['$nextval'];
								$collcomp14['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp14;}();
					}
					$pyjs['track']['lineno']=247;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter26_iter = evtType;
					$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
					while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
						et = $iter26_nextval['$nextval'];
						$pyjs['track']['lineno']=248;
						if ($p['bool']($p['getattr'](self, 'events')['__contains__'](et))) {
							$pyjs['track']['lineno']=249;
							self['events']['remove'](et);
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				else {
					$pyjs['track']['lineno']=251;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter27_iter = $p['getattr'](self, 'eventType');
					$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
					while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
						event = $iter27_nextval['$nextval'];
						$pyjs['track']['lineno']=252;
						self['events']['add'](event);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				$pyjs['track']['lineno']=253;
				$pyjs['track']['lineno']=253;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['set_blocked'] = $method;
			$pyjs['track']['lineno']=255;
			$method = $pyjs__bind_method2('set_allowed', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType,$iter31_array,$iter31_nextval,$iter31_idx,$iter31_type,$pyjs__trackstack_size_1,et,$iter31_iter;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=259;
				if ($p['bool'](!$p['op_is'](eventType, null))) {
					$pyjs['track']['lineno']=260;
					if ($p['bool'](!$p['bool']($p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))))) {
						$pyjs['track']['lineno']=261;
						evtType = function(){
							var $iter28_array,$iter28_nextval,$iter28_idx,$collcomp15,et,$iter28_iter,$iter28_type,$pyjs__trackstack_size_1;
	$collcomp15 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter28_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
						$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
						while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
							et = $iter28_nextval['$nextval'];
							$collcomp15['append'](et);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp15;}();
					}
					else {
						$pyjs['track']['lineno']=263;
						evtType = function(){
							var $iter30_type,$iter30_nextval,et,$iter29_type,$iter29_iter,$collcomp16,$iter29_nextval,$iter30_array,t,$pyjs__trackstack_size_1,$iter30_idx,$iter29_idx,$pyjs__trackstack_size_2,$iter30_iter,$iter29_array;
	$collcomp16 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter29_iter = eventType;
						$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
						while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
							t = $iter29_nextval['$nextval'];
							$pyjs['track']['lineno']=263;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter30_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](t);
							$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
							while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
								et = $iter30_nextval['$nextval'];
								$collcomp16['append'](et);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.event';
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.event';

	return $collcomp16;}();
					}
					$pyjs['track']['lineno']=264;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter31_iter = evtType;
					$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
					while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
						et = $iter31_nextval['$nextval'];
						$pyjs['track']['lineno']=265;
						self['events']['add'](et);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				else {
					$pyjs['track']['lineno']=267;
					self['events']['clear']();
				}
				$pyjs['track']['lineno']=268;
				$pyjs['track']['lineno']=268;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['set_allowed'] = $method;
			$pyjs['track']['lineno']=270;
			$method = $pyjs__bind_method2('get_blocked', function(eventType) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventType = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var evtType;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':270};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=270;
				$pyjs['track']['lineno']=274;
				evtType = function(){
					var $iter32_type,$iter32_idx,$iter32_nextval,$collcomp17,$iter32_iter,$iter32_array,$pyjs__trackstack_size_1,et;
	$collcomp17 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter32_iter = $p['getattr'](self, 'eventTypes')['__getitem__'](eventType);
				$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
				while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
					et = $iter32_nextval['$nextval'];
					$collcomp17['append'](et);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.event';

	return $collcomp17;}()['__getitem__']($constant_int_0);
				$pyjs['track']['lineno']=275;
				if ($p['bool'](!$p['getattr'](self, 'events')['__contains__'](evtType))) {
					$pyjs['track']['lineno']=276;
					$pyjs['track']['lineno']=276;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=278;
					$pyjs['track']['lineno']=278;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventType']]);
			$cls_definition['get_blocked'] = $method;
			$pyjs['track']['lineno']=280;
			$method = $pyjs__bind_method2('post', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':280};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=280;
				$pyjs['track']['lineno']=284;
				self['_lock']();
				$pyjs['track']['lineno']=285;
				self['_append'](event);
				$pyjs['track']['lineno']=286;
				if ($p['bool'](!$p['getattr'](self, 'events')['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=287;
					$p['getattr'](self, 'eventTypes')['__setitem__']($p['getattr'](event, 'type'), $p['list']([$p['getattr'](event, 'type')]));
				}
				$pyjs['track']['lineno']=288;
				self['_unlock']();
				$pyjs['track']['lineno']=289;
				$pyjs['track']['lineno']=289;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['post'] = $method;
			$pyjs['track']['lineno']=291;
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
					if (self.prototype['__md5__'] !== '24ffa67a477cee82e2e39afb9d25f171') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda2,$lambda1;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':291};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=295;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.event','lineno':295};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=295;
					$pyjs['track']['lineno']=295;
					$pyjs['track']['lineno']=295;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_grab', $lambda1) : $p['setattr'](self, 'set_grab', $lambda1); 
				$pyjs['track']['lineno']=296;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.event','lineno':296};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.event';
					$pyjs['track']['lineno']=296;
					$pyjs['track']['lineno']=296;
					$pyjs['track']['lineno']=296;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_grab', $lambda2) : $p['setattr'](self, 'get_grab', $lambda2); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=11;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Event', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=299;
		$m['UserEvent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = 'a2651ddfbc20d78df9e69dc1b5973fdb';
			$pyjs['track']['lineno']=301;
			$cls_definition['__slots__'] = $p['list'](['type', 'attr']);
			$pyjs['track']['lineno']=303;
			$method = $pyjs__bind_method2('__init__', function(eventType) {
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
					eventType = arguments[1];
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
					if (self.prototype['__md5__'] !== 'a2651ddfbc20d78df9e69dc1b5973fdb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof eventType != 'undefined') {
						if (eventType !== null && typeof eventType['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = eventType;
							eventType = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				var attr;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':303};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=303;
				$pyjs['track']['lineno']=309;
				if ($p['bool'](args)) {
					$pyjs['track']['lineno']=310;
					attr = args['__getitem__']($constant_int_0);
				}
				else {
					$pyjs['track']['lineno']=312;
					attr = kwargs;
				}
				$pyjs['track']['lineno']=313;
				$p['object']['__setattr__'](self, 'type', eventType);
				$pyjs['track']['lineno']=314;
				$p['object']['__setattr__'](self, 'attr', attr);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['eventType']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=316;
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
					if (self.prototype['__md5__'] !== 'a2651ddfbc20d78df9e69dc1b5973fdb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':316};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=316;
				$pyjs['track']['lineno']=320;
				$pyjs['track']['lineno']=320;
				var $pyjs__ret = $p['sprintf']('%s(%s-UserEvent %r)', $p['tuple']([$p['getattr'](self, '__class__'), $p['getattr'](self, 'type'), $p['getattr'](self, 'attr')]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=322;
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
					if (self.prototype['__md5__'] !== 'a2651ddfbc20d78df9e69dc1b5973fdb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':322};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=322;
				$pyjs['track']['lineno']=323;
				if ($p['bool']($p['getattr'](self, 'attr')['__contains__'](attr))) {
					$pyjs['track']['lineno']=324;
					$pyjs['track']['lineno']=324;
					var $pyjs__ret = $p['getattr'](self, 'attr')['__getitem__'](attr);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=326;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=328;
			$method = $pyjs__bind_method2('__setattr__', function(attr, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					attr = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a2651ddfbc20d78df9e69dc1b5973fdb') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':328};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=328;
				$pyjs['track']['lineno']=329;
				$pyjs['__active_exception_stack__'] = null;
				throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr'],['value']]);
			$cls_definition['__setattr__'] = $method;
			$pyjs['track']['lineno']=299;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UserEvent', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=332;
		$m['JEvent'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.event';
			$cls_definition['__md5__'] = 'd8db7d53466b166ffeac7c3e52f85fb7';
			$pyjs['track']['lineno']=334;
			$cls_definition['_mouse_pos'] = $p['tuple']([$constant_int_0, $constant_int_0]);
			$pyjs['track']['lineno']=335;
			$cls_definition['_types'] = $p['dict']([['mousemove', $p['getattr']($m['Const'], 'MOUSEMOTION')], ['mousedown', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mouseup', $p['getattr']($m['Const'], 'MOUSEBUTTONUP')], ['wheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['mousewheel', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['DOMMouseScroll', $p['getattr']($m['Const'], 'MOUSEBUTTONDOWN')], ['keydown', $p['getattr']($m['Const'], 'KEYDOWN')], ['keypress', $p['getattr']($m['Const'], 'KEYDOWN')], ['keyup', $p['getattr']($m['Const'], 'KEYUP')]]);
			$pyjs['track']['lineno']=336;
			$cls_definition['_charCode'] = $p['dict']([[$constant_int_33, $p['getattr']($m['Const'], 'K_EXCLAIM')], [$constant_int_34, $p['getattr']($m['Const'], 'K_QUOTEDBL')], [$constant_int_35, $p['getattr']($m['Const'], 'K_HASH')], [$constant_int_36, $p['getattr']($m['Const'], 'K_DOLLAR')], [$constant_int_38, $p['getattr']($m['Const'], 'K_AMPERSAND')], [$constant_int_39, $p['getattr']($m['Const'], 'K_QUOTE')], [$constant_int_40, $p['getattr']($m['Const'], 'K_LEFTPAREN')], [$constant_int_41, $p['getattr']($m['Const'], 'K_RIGHTPAREN')], [$constant_int_42, $p['getattr']($m['Const'], 'K_ASTERISK')], [$constant_int_43, $p['getattr']($m['Const'], 'K_PLUS')], [$constant_int_44, $p['getattr']($m['Const'], 'K_COMMA')], [$constant_int_45, $p['getattr']($m['Const'], 'K_MINUS')], [$constant_int_46, $p['getattr']($m['Const'], 'K_PERIOD')], [$constant_int_97, $p['getattr']($m['Const'], 'K_a')], [$constant_int_98, $p['getattr']($m['Const'], 'K_b')], [$constant_int_99, $p['getattr']($m['Const'], 'K_c')], [$constant_int_100, $p['getattr']($m['Const'], 'K_d')], [$constant_int_101, $p['getattr']($m['Const'], 'K_e')], [$constant_int_102, $p['getattr']($m['Const'], 'K_f')], [$constant_int_103, $p['getattr']($m['Const'], 'K_g')], [$constant_int_104, $p['getattr']($m['Const'], 'K_h')], [$constant_int_105, $p['getattr']($m['Const'], 'K_i')], [$constant_int_106, $p['getattr']($m['Const'], 'K_j')], [$constant_int_107, $p['getattr']($m['Const'], 'K_k')], [$constant_int_108, $p['getattr']($m['Const'], 'K_l')], [$constant_int_109, $p['getattr']($m['Const'], 'K_m')], [$constant_int_110, $p['getattr']($m['Const'], 'K_n')], [$constant_int_111, $p['getattr']($m['Const'], 'K_o')], [$constant_int_112, $p['getattr']($m['Const'], 'K_p')], [$constant_int_113, $p['getattr']($m['Const'], 'K_q')], [$constant_int_114, $p['getattr']($m['Const'], 'K_r')], [$constant_int_115, $p['getattr']($m['Const'], 'K_s')], [$constant_int_116, $p['getattr']($m['Const'], 'K_t')], [$constant_int_117, $p['getattr']($m['Const'], 'K_u')], [$constant_int_118, $p['getattr']($m['Const'], 'K_v')], [$constant_int_119, $p['getattr']($m['Const'], 'K_w')], [$constant_int_120, $p['getattr']($m['Const'], 'K_x')], [$constant_int_121, $p['getattr']($m['Const'], 'K_y')], [$constant_int_122, $p['getattr']($m['Const'], 'K_z')]]);
			$pyjs['track']['lineno']=338;
			$method = $pyjs__bind_method2('__init__', function(event) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					event = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd8db7d53466b166ffeac7c3e52f85fb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter33_iter,code,$pyjs__trackstack_size_1,$iter33_idx,$iter33_type,$add20,$sub9,$sub8,$sub7,$iter33_nextval,$sub10,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$iter33_array,attr,$add6,$add7,$add5,$add8,$add9;
				$pyjs['track']={'module':'pyjsdl.event', 'lineno':338};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=338;
				$pyjs['track']['lineno']=350;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('event', event) : $p['setattr'](self, 'event', event); 
				$pyjs['track']['lineno']=351;
				if ($p['bool']($p['tuple'](['mousedown', 'mouseup'])['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=352;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=353;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['__op_add']($add5=$p['getattr'](event, 'button'),$add6=$constant_int_1)) : $p['setattr'](self, 'button', $p['__op_add']($add5=$p['getattr'](event, 'button'),$add6=$constant_int_1)); 
					$pyjs['track']['lineno']=354;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['tuple']([$p['__op_add']($add7=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add8=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add9=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add10=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])) : $p['setattr'](self, 'pos', $p['tuple']([$p['__op_add']($add7=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add8=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add9=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add10=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])); 
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'mousemove'))) {
					$pyjs['track']['lineno']=356;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=357;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['__op_add']($add11=$p['getattr'](event, 'button'),$add12=$constant_int_1)) : $p['setattr'](self, 'button', $p['__op_add']($add11=$p['getattr'](event, 'button'),$add12=$constant_int_1)); 
					$pyjs['track']['lineno']=358;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['tuple']([$p['__op_add']($add13=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add14=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add15=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add16=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])) : $p['setattr'](self, 'pos', $p['tuple']([$p['__op_add']($add13=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add14=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add15=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add16=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])); 
					$pyjs['track']['lineno']=359;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rel', $p['tuple']([$p['__op_sub']($sub7=$p['getattr'](self, 'pos')['__getitem__']($constant_int_0),$sub8=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_0)), $p['__op_sub']($sub9=$p['getattr'](self, 'pos')['__getitem__']($constant_int_1),$sub10=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_1))])) : $p['setattr'](self, 'rel', $p['tuple']([$p['__op_sub']($sub7=$p['getattr'](self, 'pos')['__getitem__']($constant_int_0),$sub8=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_0)), $p['__op_sub']($sub9=$p['getattr'](self, 'pos')['__getitem__']($constant_int_1),$sub10=$p['getattr']($p['getattr'](self, '__class__'), '_mouse_pos')['__getitem__']($constant_int_1))])); 
					$pyjs['track']['lineno']=360;
					$p['getattr'](self, '__class__')['__is_instance__'] && typeof $p['getattr'](self, '__class__')['__setattr__'] == 'function' ? $p['getattr'](self, '__class__')['__setattr__']('_mouse_pos', $p['getattr'](self, 'pos')) : $p['setattr']($p['getattr'](self, '__class__'), '_mouse_pos', $p['getattr'](self, 'pos')); 
				}
				else if ($p['bool']($p['tuple'](['wheel', 'mousewheel', 'DOMMouseScroll'])['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=362;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=363;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('button', $p['getattr'](event, 'btn')) : $p['setattr'](self, 'button', $p['getattr'](event, 'btn')); 
					$pyjs['track']['lineno']=364;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('pos', $p['tuple']([$p['__op_add']($add17=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add18=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add19=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add20=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])) : $p['setattr'](self, 'pos', $p['tuple']([$p['__op_add']($add17=$p['getattr'](event, 'pos')['__getitem__']($constant_int_0),$add18=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollLeft')), $p['__op_add']($add19=$p['getattr'](event, 'pos')['__getitem__']($constant_int_1),$add20=$p['getattr']($p['getattr']($m['env'], 'frame'), 'scrollTop'))])); 
				}
				else if ($p['bool']($p['tuple'](['keydown', 'keyup'])['__contains__']($p['getattr'](event, 'type')))) {
					$pyjs['track']['lineno']=366;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=367;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', $p['getattr'](event, 'keyCode')) : $p['setattr'](self, 'key', $p['getattr'](event, 'keyCode')); 
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), 'keypress'))) {
					$pyjs['track']['lineno']=369;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))) : $p['setattr'](self, 'type', $p['getattr']($p['getattr'](self, '__class__'), '_types')['__getitem__']($p['getattr'](event, 'type'))); 
					$pyjs['track']['lineno']=370;
					if ($p['bool']($p['getattr'](event, 'keyCode'))) {
						$pyjs['track']['lineno']=371;
						code = $p['getattr'](event, 'keyCode');
					}
					else {
						$pyjs['track']['lineno']=373;
						code = $p['getattr'](event, 'which');
					}
					$pyjs['track']['lineno']=374;
					if ($p['bool']($p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__contains__'](code))) {
						$pyjs['track']['lineno']=375;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', $p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__getitem__'](code)) : $p['setattr'](self, 'key', $p['getattr']($p['getattr'](self, '__class__'), '_charCode')['__getitem__'](code)); 
					}
					else {
						$pyjs['track']['lineno']=377;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('key', code) : $p['setattr'](self, 'key', code); 
					}
				}
				else {
					$pyjs['track']['lineno']=379;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('type', $p['getattr'](event, 'type')) : $p['setattr'](self, 'type', $p['getattr'](event, 'type')); 
					$pyjs['track']['lineno']=380;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter33_iter = $p['getattr'](event, 'attr');
					$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
					while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
						attr = $iter33_nextval['$nextval'];
						$pyjs['track']['lineno']=381;
						$p['object']['__setattr__'](self, attr, $p['getattr'](event, 'attr')['__getitem__'](attr));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.event';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['event']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=383;
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
					if (self.prototype['__md5__'] !== 'd8db7d53466b166ffeac7c3e52f85fb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':383};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=383;
				$pyjs['track']['lineno']=387;
				if ($p['bool']($p['hasattr']($p['getattr'](self, 'event'), 'toString'))) {
					$pyjs['track']['lineno']=388;
					$pyjs['track']['lineno']=388;
					var $pyjs__ret = $p['sprintf']('%s(%s)', $p['tuple']([$p['getattr'](self, '__class__'), self['event']['toString']()]));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=390;
					$pyjs['track']['lineno']=390;
					var $pyjs__ret = self['event']['__repr__']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=392;
			$method = $pyjs__bind_method2('getEvent', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd8db7d53466b166ffeac7c3e52f85fb7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.event', 'lineno':392};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.event';
				$pyjs['track']['lineno']=392;
				$pyjs['track']['lineno']=396;
				$pyjs['track']['lineno']=396;
				var $pyjs__ret = $p['getattr'](self, 'event');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getEvent'] = $method;
			$pyjs['track']['lineno']=332;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('JEvent', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.event */


/* end module: pyjsdl.event */


/*
PYJS_DEPS: ['env', 'time', 'locals']
*/
