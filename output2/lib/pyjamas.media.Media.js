/* start module: pyjamas.media.Media */
$pyjs['loaded_modules']['pyjamas.media.Media'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.media.Media']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.media.Media'];
	if(typeof $pyjs['loaded_modules']['pyjamas.media'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.media']['__was_initialized__']) $p['___import___']('pyjamas.media', null);
	var $m = $pyjs['loaded_modules']['pyjamas.media.Media'];
	$m['__repr__'] = function() { return '<module: pyjamas.media.Media>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.media.Media';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.media']['Media'] = $pyjs['loaded_modules']['pyjamas.media.Media'];
	try {
		$m.__track_lines__[1] = 'pyjamas.media.Media.py, line 1:\n    """';
		$m.__track_lines__[600] = 'pyjamas.media.Media.py, line 600:\n    return addDomHandler(handler, ClickEvent.getType())';
		$m.__track_lines__[18] = 'pyjamas.media.Media.py, line 18:\n    from pyjamas.ui import Event';
		$m.__track_lines__[19] = 'pyjamas.media.Media.py, line 19:\n    from pyjamas import DOM';
		$m.__track_lines__[20] = 'pyjamas.media.Media.py, line 20:\n    from pyjamas.ui.Widget import Widget';
		$m.__track_lines__[22] = 'pyjamas.media.Media.py, line 22:\n    def mediaEventGetTypeInt(eventType):';
		$m.__track_lines__[23] = 'pyjamas.media.Media.py, line 23:\n    JS("""';
		$m.__track_lines__[603] = 'pyjamas.media.Media.py, line 603:\n    def maybeInitMediaEvents(self):';
		$m.__track_lines__[604] = 'pyjamas.media.Media.py, line 604:\n    if not mediaEventsInitialized:';
		$m.__track_lines__[606] = 'pyjamas.media.Media.py, line 606:\n    mediaEventsInitialized = True';
		$m.__track_lines__[54] = 'pyjamas.media.Media.py, line 54:\n    class Media(Widget):';
		$m.__track_lines__[567] = 'pyjamas.media.Media.py, line 567:\n    return';
		$m.__track_lines__[569] = 'pyjamas.media.Media.py, line 569:\n    def addMouseDownHandler(self, handler):';
		$m.__track_lines__[570] = 'pyjamas.media.Media.py, line 570:\n    return addDomHandler(handler, MouseDownEvent.getType())';
		$m.__track_lines__[574] = 'pyjamas.media.Media.py, line 574:\n    def addMouseUpHandler(self, handler):';
		$m.__track_lines__[575] = 'pyjamas.media.Media.py, line 575:\n    return addDomHandler(handler, MouseUpEvent.getType())';
		$m.__track_lines__[67] = 'pyjamas.media.Media.py, line 67:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[68] = 'pyjamas.media.Media.py, line 68:\n    self.mediaEventsToSink = 0';
		$m.__track_lines__[69] = 'pyjamas.media.Media.py, line 69:\n    self.mediaEventsInitialized = False';
		$m.__track_lines__[71] = 'pyjamas.media.Media.py, line 71:\n    Widget.__init__(self, **kwargs)';
		$m.__track_lines__[584] = 'pyjamas.media.Media.py, line 584:\n    def addMouseOverHandler(self, handler):';
		$m.__track_lines__[73] = 'pyjamas.media.Media.py, line 73:\n    def setSrc(self, src):';
		$m.__track_lines__[74] = "pyjamas.media.Media.py, line 74:\n    DOM.setAttribute(self.getElement(), 'src', src)";
		$m.__track_lines__[76] = 'pyjamas.media.Media.py, line 76:\n    def addSrc(self, src):';
		$m.__track_lines__[77] = 'pyjamas.media.Media.py, line 77:\n    s = DOM.createElement("source")';
		$m.__track_lines__[78] = "pyjamas.media.Media.py, line 78:\n    DOM.setAttribute(s, 'src', src)";
		$m.__track_lines__[79] = 'pyjamas.media.Media.py, line 79:\n    DOM.appendChild(self.getElement(), s)';
		$m.__track_lines__[81] = 'pyjamas.media.Media.py, line 81:\n    def getSrc(self):';
		$m.__track_lines__[82] = "pyjamas.media.Media.py, line 82:\n    return DOM.getAttribute(self.getElement(), 'src')";
		$m.__track_lines__[595] = 'pyjamas.media.Media.py, line 595:\n    return addDomHandler(handler, MouseWheelEvent.getType())';
		$m.__track_lines__[84] = 'pyjamas.media.Media.py, line 84:\n    def getError(self):';
		$m.__track_lines__[86] = 'pyjamas.media.Media.py, line 86:\n    return self.getElement().error or 0';
		$m.__track_lines__[599] = 'pyjamas.media.Media.py, line 599:\n    def addClickHandler(self, handler):';
		$m.__track_lines__[88] = 'pyjamas.media.Media.py, line 88:\n    def getCurrentSrc(self):';
		$m.__track_lines__[89] = 'pyjamas.media.Media.py, line 89:\n    return self.getElement().currentSrc';
		$m.__track_lines__[91] = 'pyjamas.media.Media.py, line 91:\n    def getCurrentTime(self):';
		$m.__track_lines__[92] = 'pyjamas.media.Media.py, line 92:\n    return self.getElement().currentTime';
		$m.__track_lines__[605] = 'pyjamas.media.Media.py, line 605:\n    initMediaEvents()';
		$m.__track_lines__[94] = 'pyjamas.media.Media.py, line 94:\n    def setCurrentTime(self, time):';
		$m.__track_lines__[95] = 'pyjamas.media.Media.py, line 95:\n    self.getElement().currentTime = time';
		$m.__track_lines__[97] = 'pyjamas.media.Media.py, line 97:\n    def getStartTime(self):';
		$m.__track_lines__[98] = 'pyjamas.media.Media.py, line 98:\n    return self.getElement().startTime';
		$m.__track_lines__[100] = 'pyjamas.media.Media.py, line 100:\n    def getDuration(self):';
		$m.__track_lines__[101] = 'pyjamas.media.Media.py, line 101:\n    return self.getElement().duration';
		$m.__track_lines__[614] = 'pyjamas.media.Media.py, line 614:\n    JS("""';
		$m.__track_lines__[103] = 'pyjamas.media.Media.py, line 103:\n    def isPaused(self):';
		$m.__track_lines__[104] = 'pyjamas.media.Media.py, line 104:\n    return self.getElement().paused';
		$m.__track_lines__[106] = 'pyjamas.media.Media.py, line 106:\n    def getDefaultPlaybackRate(self):';
		$m.__track_lines__[107] = 'pyjamas.media.Media.py, line 107:\n    return self.getElement().defaultPlaybackRate';
		$m.__track_lines__[109] = 'pyjamas.media.Media.py, line 109:\n    def setDefaultPlaybackRate(self, rate):';
		$m.__track_lines__[110] = 'pyjamas.media.Media.py, line 110:\n    self.getElement().defaultPlaybackRate = rate';
		$m.__track_lines__[112] = 'pyjamas.media.Media.py, line 112:\n    def getPlaybackRate(self):';
		$m.__track_lines__[113] = 'pyjamas.media.Media.py, line 113:\n    return self.getElement().playbackRate';
		$m.__track_lines__[115] = 'pyjamas.media.Media.py, line 115:\n    def setPlaybackRate(self, rate):';
		$m.__track_lines__[116] = 'pyjamas.media.Media.py, line 116:\n    self.getElement().playbackRate = rate';
		$m.__track_lines__[118] = 'pyjamas.media.Media.py, line 118:\n    def getPlayed(self):';
		$m.__track_lines__[119] = 'pyjamas.media.Media.py, line 119:\n    return self.getElement().played';
		$m.__track_lines__[121] = 'pyjamas.media.Media.py, line 121:\n    def getSeekable(self):';
		$m.__track_lines__[122] = 'pyjamas.media.Media.py, line 122:\n    return self.getElement().seekable';
		$m.__track_lines__[124] = 'pyjamas.media.Media.py, line 124:\n    def hasEnded(self):';
		$m.__track_lines__[125] = 'pyjamas.media.Media.py, line 125:\n    return self.getElement().ended';
		$m.__track_lines__[127] = 'pyjamas.media.Media.py, line 127:\n    def isLoop(self):';
		$m.__track_lines__[128] = 'pyjamas.media.Media.py, line 128:\n    return bool(self.getElement().loop)';
		$m.__track_lines__[641] = 'pyjamas.media.Media.py, line 641:\n    listener.onBrowserEvent(evt)';
		$m.__track_lines__[130] = 'pyjamas.media.Media.py, line 130:\n    def getVolume(self):';
		$m.__track_lines__[131] = 'pyjamas.media.Media.py, line 131:\n    return self.getElement().volume';
		$m.__track_lines__[133] = 'pyjamas.media.Media.py, line 133:\n    def setVolume(self, volume):';
		$m.__track_lines__[134] = 'pyjamas.media.Media.py, line 134:\n    self.getElement().volume = volume';
		$m.__track_lines__[136] = 'pyjamas.media.Media.py, line 136:\n    def getReadyState(self):';
		$m.__track_lines__[137] = 'pyjamas.media.Media.py, line 137:\n    return self.getElement().readyState';
		$m.__track_lines__[140] = 'pyjamas.media.Media.py, line 140:\n    """*';
		$m.__track_lines__[150] = 'pyjamas.media.Media.py, line 150:\n    def setAutobuffer(self, autobuffer):';
		$m.__track_lines__[151] = 'pyjamas.media.Media.py, line 151:\n    self.getElement().autobuffer = autobuffer';
		$m.__track_lines__[154] = 'pyjamas.media.Media.py, line 154:\n    """*';
		$m.__track_lines__[160] = 'pyjamas.media.Media.py, line 160:\n    def setAutoplay(self, autoplay):';
		$m.__track_lines__[161] = 'pyjamas.media.Media.py, line 161:\n    self.getElement().autoplay = autoplay';
		$m.__track_lines__[164] = 'pyjamas.media.Media.py, line 164:\n    """*';
		$m.__track_lines__[625] = 'pyjamas.media.Media.py, line 625:\n    """*';
		$m.__track_lines__[170] = 'pyjamas.media.Media.py, line 170:\n    def setLoop(self, loop):';
		$m.__track_lines__[171] = 'pyjamas.media.Media.py, line 171:\n    self.getElement().loop = loop';
		$m.__track_lines__[174] = 'pyjamas.media.Media.py, line 174:\n    """*';
		$m.__track_lines__[184] = 'pyjamas.media.Media.py, line 184:\n    def setControls(self, controls):';
		$m.__track_lines__[185] = 'pyjamas.media.Media.py, line 185:\n    DOM.setBooleanAttribute(self.getElement(), "controls", controls)';
		$m.__track_lines__[187] = 'pyjamas.media.Media.py, line 187:\n    def hasControls(self):';
		$m.__track_lines__[188] = 'pyjamas.media.Media.py, line 188:\n    DOM.getBooleanAttribute(self.getElement(), "controls")';
		$m.__track_lines__[190] = 'pyjamas.media.Media.py, line 190:\n    def isMuted(self):';
		$m.__track_lines__[191] = 'pyjamas.media.Media.py, line 191:\n    return self.getElement().muted';
		$m.__track_lines__[193] = 'pyjamas.media.Media.py, line 193:\n    def play(self):';
		$m.__track_lines__[194] = 'pyjamas.media.Media.py, line 194:\n    self.getElement().play()';
		$m.__track_lines__[196] = 'pyjamas.media.Media.py, line 196:\n    def load(self):';
		$m.__track_lines__[197] = 'pyjamas.media.Media.py, line 197:\n    self.getElement().load()';
		$m.__track_lines__[199] = 'pyjamas.media.Media.py, line 199:\n    def pause(self):';
		$m.__track_lines__[200] = 'pyjamas.media.Media.py, line 200:\n    self.getElement().pause()';
		$m.__track_lines__[202] = 'pyjamas.media.Media.py, line 202:\n    def canPlayType(self, etype):';
		$m.__track_lines__[203] = 'pyjamas.media.Media.py, line 203:\n    self.getElement().canPlayType(etype)';
		$m.__track_lines__[205] = 'pyjamas.media.Media.py, line 205:\n    def setMute(self, muted):';
		$m.__track_lines__[206] = 'pyjamas.media.Media.py, line 206:\n    self.getElement().setMute(muted)';
		$m.__track_lines__[209] = 'pyjamas.media.Media.py, line 209:\n    """*';
		$m.__track_lines__[214] = 'pyjamas.media.Media.py, line 214:\n    def addAbortHandler(self, handler):';
		$m.__track_lines__[215] = 'pyjamas.media.Media.py, line 215:\n    return self.addMediaEventHandler(handler, AbortEvent.getType())';
		$m.__track_lines__[218] = 'pyjamas.media.Media.py, line 218:\n    """*';
		$m.__track_lines__[227] = 'pyjamas.media.Media.py, line 227:\n    def addCanPlayHandler(self, handler):';
		$m.__track_lines__[228] = 'pyjamas.media.Media.py, line 228:\n    return self.addMediaEventHandler(handler, CanPlayEvent.getType())';
		$m.__track_lines__[231] = 'pyjamas.media.Media.py, line 231:\n    """*';
		$m.__track_lines__[239] = 'pyjamas.media.Media.py, line 239:\n    def addCanPlayThroughHandler(self, handler):';
		$m.__track_lines__[240] = 'pyjamas.media.Media.py, line 240:\n    return self.addMediaEventHandler(handler, CanPlayThroughEvent.getType())';
		$m.__track_lines__[244] = 'pyjamas.media.Media.py, line 244:\n    def addDurationChangeHandle(self, handler):';
		$m.__track_lines__[245] = 'pyjamas.media.Media.py, line 245:\n    return self.addMediaEventHandler(handler, DurationChangeEvent.getType())';
		$m.__track_lines__[248] = 'pyjamas.media.Media.py, line 248:\n    """*';
		$m.__track_lines__[639] = 'pyjamas.media.Media.py, line 639:\n    def dispatchMediaEvent(self, evt, listener):';
		$m.__track_lines__[254] = 'pyjamas.media.Media.py, line 254:\n    def addEmptiedHandler(self, handler):';
		$m.__track_lines__[255] = 'pyjamas.media.Media.py, line 255:\n    return self.addMediaEventHandler(handler, EmptiedEvent.getType())';
		$m.__track_lines__[258] = 'pyjamas.media.Media.py, line 258:\n    """*';
		$m.__track_lines__[269] = 'pyjamas.media.Media.py, line 269:\n    def addEndedHandler(self, handler):';
		$m.__track_lines__[270] = 'pyjamas.media.Media.py, line 270:\n    return self.addMediaEventHandler(handler, EndedEvent.getType())';
		$m.__track_lines__[273] = 'pyjamas.media.Media.py, line 273:\n    """*';
		$m.__track_lines__[280] = 'pyjamas.media.Media.py, line 280:\n    def addErrorHandler(self, handler):';
		$m.__track_lines__[281] = 'pyjamas.media.Media.py, line 281:\n    return self.addMediaEventHandler(handler, ErrorEvent.getType())';
		$m.__track_lines__[284] = 'pyjamas.media.Media.py, line 284:\n    """*';
		$m.__track_lines__[291] = 'pyjamas.media.Media.py, line 291:\n    def addLoadStartHandler(self, handler):';
		$m.__track_lines__[292] = 'pyjamas.media.Media.py, line 292:\n    return self.addMediaEventHandler(handler, LoadStartEvent.getType())';
		$m.__track_lines__[295] = 'pyjamas.media.Media.py, line 295:\n    """*';
		$m.__track_lines__[302] = 'pyjamas.media.Media.py, line 302:\n    def addLoadedDataHandler(self, handler):';
		$m.__track_lines__[303] = 'pyjamas.media.Media.py, line 303:\n    return self.addMediaEventHandler(handler, LoadedDataEvent.getType())';
		$m.__track_lines__[306] = 'pyjamas.media.Media.py, line 306:\n    """*';
		$m.__track_lines__[313] = 'pyjamas.media.Media.py, line 313:\n    def addLoadedMetadataHandler(self, handler):';
		$m.__track_lines__[314] = 'pyjamas.media.Media.py, line 314:\n    return self.addMediaEventHandler(handler, LoadedMetadataEvent.getType())';
		$m.__track_lines__[590] = 'pyjamas.media.Media.py, line 590:\n    return addDomHandler(handler, MouseMoveEvent.getType())';
		$m.__track_lines__[317] = 'pyjamas.media.Media.py, line 317:\n    """*';
		$m.__track_lines__[324] = 'pyjamas.media.Media.py, line 324:\n    def addPauseHandler(self, handler):';
		$m.__track_lines__[325] = 'pyjamas.media.Media.py, line 325:\n    return self.addMediaEventHandler(handler, PauseEvent.getType())';
		$m.__track_lines__[328] = 'pyjamas.media.Media.py, line 328:\n    """*';
		$m.__track_lines__[334] = 'pyjamas.media.Media.py, line 334:\n    def addPlayHandler(self, handler):';
		$m.__track_lines__[335] = 'pyjamas.media.Media.py, line 335:\n    return self.addMediaEventHandler(handler, PlayEvent.getType())';
		$m.__track_lines__[338] = 'pyjamas.media.Media.py, line 338:\n    """*';
		$m.__track_lines__[344] = 'pyjamas.media.Media.py, line 344:\n    def addPlayingHandler(self, handler):';
		$m.__track_lines__[345] = 'pyjamas.media.Media.py, line 345:\n    return self.addMediaEventHandler(handler, PlayingEvent.getType())';
		$m.__track_lines__[348] = 'pyjamas.media.Media.py, line 348:\n    """*';
		$m.__track_lines__[354] = 'pyjamas.media.Media.py, line 354:\n    def addProgressHandler(self, handler):';
		$m.__track_lines__[355] = 'pyjamas.media.Media.py, line 355:\n    return self.addMediaEventHandler(handler, ProgressEvent.getType())';
		$m.__track_lines__[358] = 'pyjamas.media.Media.py, line 358:\n    """*';
		$m.__track_lines__[365] = 'pyjamas.media.Media.py, line 365:\n    def addRateChangeHandler(self, handler):';
		$m.__track_lines__[366] = 'pyjamas.media.Media.py, line 366:\n    return self.addMediaEventHandler(handler, RateChangeEvent.getType())';
		$m.__track_lines__[369] = 'pyjamas.media.Media.py, line 369:\n    """*';
		$m.__track_lines__[375] = 'pyjamas.media.Media.py, line 375:\n    def addSeekedHandler(self, handler):';
		$m.__track_lines__[376] = 'pyjamas.media.Media.py, line 376:\n    return self.addMediaEventHandler(handler, SeekedEvent.getType())';
		$m.__track_lines__[379] = 'pyjamas.media.Media.py, line 379:\n    """*';
		$m.__track_lines__[385] = 'pyjamas.media.Media.py, line 385:\n    def addSeekingHandler(self, handler):';
		$m.__track_lines__[386] = 'pyjamas.media.Media.py, line 386:\n    return self.addMediaEventHandler(handler, SeekingEvent.getType())';
		$m.__track_lines__[389] = 'pyjamas.media.Media.py, line 389:\n    """*';
		$m.__track_lines__[396] = 'pyjamas.media.Media.py, line 396:\n    def addStalledHandler(self, handler):';
		$m.__track_lines__[397] = 'pyjamas.media.Media.py, line 397:\n    return self.addMediaEventHandler(handler, StalledEvent.getType())';
		$m.__track_lines__[400] = 'pyjamas.media.Media.py, line 400:\n    """*';
		$m.__track_lines__[579] = 'pyjamas.media.Media.py, line 579:\n    def addMouseOutHandler(self, handler):';
		$m.__track_lines__[610] = 'pyjamas.media.Media.py, line 610:\n    """*';
		$m.__track_lines__[407] = 'pyjamas.media.Media.py, line 407:\n    def addSuspendHandler(self, handler):';
		$m.__track_lines__[408] = 'pyjamas.media.Media.py, line 408:\n    return self.addMediaEventHandler(handler, SuspendEvent.getType())';
		$m.__track_lines__[580] = 'pyjamas.media.Media.py, line 580:\n    return addDomHandler(handler, MouseOutEvent.getType())';
		$m.__track_lines__[411] = 'pyjamas.media.Media.py, line 411:\n    """*';
		$m.__track_lines__[418] = 'pyjamas.media.Media.py, line 418:\n    def addTimeUpdateHandler(self, handler):';
		$m.__track_lines__[419] = 'pyjamas.media.Media.py, line 419:\n    return self.addMediaEventHandler(handler, TimeUpdateEvent.getType())';
		$m.__track_lines__[422] = 'pyjamas.media.Media.py, line 422:\n    """*';
		$m.__track_lines__[429] = 'pyjamas.media.Media.py, line 429:\n    def addVolumeChangeHandler(self, handler):';
		$m.__track_lines__[430] = 'pyjamas.media.Media.py, line 430:\n    return self.addMediaEventHandler(handler, VolumeChangeEvent.getType())';
		$m.__track_lines__[433] = 'pyjamas.media.Media.py, line 433:\n    """*';
		$m.__track_lines__[585] = 'pyjamas.media.Media.py, line 585:\n    return addDomHandler(handler, MouseOverEvent.getType())';
		$m.__track_lines__[440] = 'pyjamas.media.Media.py, line 440:\n    def addWaitingHandler(self, handler):';
		$m.__track_lines__[441] = 'pyjamas.media.Media.py, line 441:\n    return self.addMediaEventHandler(handler, WaitingEvent.getType())';
		$m.__track_lines__[444] = 'pyjamas.media.Media.py, line 444:\n    def addMediaEventHandler(self, handler, etype):';
		$m.__track_lines__[445] = 'pyjamas.media.Media.py, line 445:\n    assert handler is not None, "handler must not be None"';
		$m.__track_lines__[446] = 'pyjamas.media.Media.py, line 446:\n    assert etype is not None, "type must not be None"';
		$m.__track_lines__[447] = 'pyjamas.media.Media.py, line 447:\n    self.maybeInitMediaEvents()';
		$m.__track_lines__[448] = 'pyjamas.media.Media.py, line 448:\n    self.sinkMediaEvents(mediaEventGetTypeInt(etype.getName()))';
		$m.__track_lines__[449] = 'pyjamas.media.Media.py, line 449:\n    return addHandler(handler, etype)';
		$m.__track_lines__[453] = 'pyjamas.media.Media.py, line 453:\n    def sinkMediaEvents(self, eventBitsToAdd):';
		$m.__track_lines__[454] = 'pyjamas.media.Media.py, line 454:\n    if self.isOrWasAttached():';
		$m.__track_lines__[455] = 'pyjamas.media.Media.py, line 455:\n    self.nativeSinkMediaEvents(self.getElement(), eventBitsToAdd)';
		$m.__track_lines__[457] = 'pyjamas.media.Media.py, line 457:\n    self.mediaEventsToSink |= eventBitsToAdd';
		$m.__track_lines__[461] = 'pyjamas.media.Media.py, line 461:\n    """*';
		$m.__track_lines__[589] = 'pyjamas.media.Media.py, line 589:\n    def addMouseMoveHandler(self, handler):';
		$m.__track_lines__[466] = 'pyjamas.media.Media.py, line 466:\n    def doAttachChildren(self):';
		$m.__track_lines__[467] = 'pyjamas.media.Media.py, line 467:\n    bitsToAdd = self.mediaEventsToSink';
		$m.__track_lines__[468] = 'pyjamas.media.Media.py, line 468:\n    self.mediaEventsToSink = -1';
		$m.__track_lines__[469] = 'pyjamas.media.Media.py, line 469:\n    if bitsToAdd > 0:';
		$m.__track_lines__[470] = 'pyjamas.media.Media.py, line 470:\n    self.nativeSinkMediaEvents(self.getElement(), bitsToAdd)';
		$m.__track_lines__[473] = 'pyjamas.media.Media.py, line 473:\n    def nativeSinkMediaEvents(self, elem, bits):';
		$m.__track_lines__[594] = 'pyjamas.media.Media.py, line 594:\n    def addMouseWheelHandler(self, handler):';
		$m.__track_lines__[613] = 'pyjamas.media.Media.py, line 613:\n    def initMediaEvents(self):';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs['track']['module']='pyjamas.media.Media';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.media', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.media', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.media', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=22;
		$m['mediaEventGetTypeInt'] = function(eventType) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjamas.media.Media','lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.media.Media';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			(typeof JS == "undefined"?$m['JS']:JS)('\n    window[\'console\'][\'log\'](\'mediaEventGetTypeInt: \' + eventType)\n    switch (eventType) {\n        case "abort":             return 0x00001;\n        case "canplay":           return 0x00002;\n        case "canplaythrough":    return 0x00004;\n        case "durationchange":    return 0x00008;\n        case "emptied":           return 0x00010;\n        case "ended":             return 0x00020;\n        case "error":             return 0x00040;\n        case "loadstart":         return 0x00080;\n        case "loadeddata":        return 0x00100;\n        case "loadedmetadata":    return 0x00200;\n        case "pause":             return 0x00400;\n        case "play":              return 0x00800;\n        case "playing":           return 0x01000;\n        case "progress":          return 0x02000;\n        case "ratechange":        return 0x04000;\n        case "seeked":            return 0x08000;\n        case "seeking":           return 0x10000;\n        case "stalled":           return 0x20000;\n        case "suspend":           return 0x40000;\n        case "timeupdate":        return 0x80000;\n        case "volumechange":      return 0x100000;\n        case "waiting":           return 0x200000;\n        default:\n        window[\'console\'][\'debug\']("Unknown media eventType: " + eventType)\n        return 0;\n    }\n    ');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['mediaEventGetTypeInt']['__name__'] = 'mediaEventGetTypeInt';

		$m['mediaEventGetTypeInt']['__bind_type__'] = 0;
		$m['mediaEventGetTypeInt']['__args__'] = [null,null,['eventType']];
		$pyjs['track']['lineno']=54;
		$m['Media'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.media.Media';
			$cls_definition['__md5__'] = '7a54f155652e1bef10708bf71ca0c726';
			$pyjs['track']['lineno']=67;
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
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
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

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=68;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mediaEventsToSink', $constant_int_0) : $p['setattr'](self, 'mediaEventsToSink', $constant_int_0); 
				$pyjs['track']['lineno']=69;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mediaEventsInitialized', false) : $p['setattr'](self, 'mediaEventsInitialized', false); 
				$pyjs['track']['lineno']=71;
				$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=73;
			$method = $pyjs__bind_method2('setSrc', function(src) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					src = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=73;
				$pyjs['track']['lineno']=74;
				$m['DOM']['setAttribute'](self['getElement'](), 'src', src);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['src']]);
			$cls_definition['setSrc'] = $method;
			$pyjs['track']['lineno']=76;
			$method = $pyjs__bind_method2('addSrc', function(src) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					src = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var s;
				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=77;
				s = $m['DOM']['createElement']('source');
				$pyjs['track']['lineno']=78;
				$m['DOM']['setAttribute'](s, 'src', src);
				$pyjs['track']['lineno']=79;
				$m['DOM']['appendChild'](self['getElement'](), s);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['src']]);
			$cls_definition['addSrc'] = $method;
			$pyjs['track']['lineno']=81;
			$method = $pyjs__bind_method2('getSrc', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=81;
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=82;
				var $pyjs__ret = $m['DOM']['getAttribute'](self['getElement'](), 'src');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSrc'] = $method;
			$pyjs['track']['lineno']=84;
			$method = $pyjs__bind_method2('getError', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $or1,$or2;
				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=84;
				$pyjs['track']['lineno']=86;
				$pyjs['track']['lineno']=86;
				var $pyjs__ret = ($p['bool']($or1=$p['getattr'](self['getElement'](), 'error'))?$or1:$constant_int_0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getError'] = $method;
			$pyjs['track']['lineno']=88;
			$method = $pyjs__bind_method2('getCurrentSrc', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=88;
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=89;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'currentSrc');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentSrc'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('getCurrentTime', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=92;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'currentTime');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getCurrentTime'] = $method;
			$pyjs['track']['lineno']=94;
			$method = $pyjs__bind_method2('setCurrentTime', function(time) {
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
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=94;
				$pyjs['track']['lineno']=95;
				self['getElement']()['__is_instance__'] && typeof self['getElement']()['__setattr__'] == 'function' ? self['getElement']()['__setattr__']('currentTime', time) : $p['setattr'](self['getElement'](), 'currentTime', time); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['time']]);
			$cls_definition['setCurrentTime'] = $method;
			$pyjs['track']['lineno']=97;
			$method = $pyjs__bind_method2('getStartTime', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=97;
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=98;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'startTime');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStartTime'] = $method;
			$pyjs['track']['lineno']=100;
			$method = $pyjs__bind_method2('getDuration', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':100};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=100;
				$pyjs['track']['lineno']=101;
				$pyjs['track']['lineno']=101;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'duration');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDuration'] = $method;
			$pyjs['track']['lineno']=103;
			$method = $pyjs__bind_method2('isPaused', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':103};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=104;
				$pyjs['track']['lineno']=104;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'paused');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isPaused'] = $method;
			$pyjs['track']['lineno']=106;
			$method = $pyjs__bind_method2('getDefaultPlaybackRate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=106;
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=107;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'defaultPlaybackRate');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getDefaultPlaybackRate'] = $method;
			$pyjs['track']['lineno']=109;
			$method = $pyjs__bind_method2('setDefaultPlaybackRate', function(rate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':109};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=109;
				$pyjs['track']['lineno']=110;
				self['getElement']()['__is_instance__'] && typeof self['getElement']()['__setattr__'] == 'function' ? self['getElement']()['__setattr__']('defaultPlaybackRate', rate) : $p['setattr'](self['getElement'](), 'defaultPlaybackRate', rate); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['rate']]);
			$cls_definition['setDefaultPlaybackRate'] = $method;
			$pyjs['track']['lineno']=112;
			$method = $pyjs__bind_method2('getPlaybackRate', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=113;
				$pyjs['track']['lineno']=113;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'playbackRate');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlaybackRate'] = $method;
			$pyjs['track']['lineno']=115;
			$method = $pyjs__bind_method2('setPlaybackRate', function(rate) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					rate = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=115;
				$pyjs['track']['lineno']=116;
				self['getElement']()['__is_instance__'] && typeof self['getElement']()['__setattr__'] == 'function' ? self['getElement']()['__setattr__']('playbackRate', rate) : $p['setattr'](self['getElement'](), 'playbackRate', rate); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['rate']]);
			$cls_definition['setPlaybackRate'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('getPlayed', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=119;
				$pyjs['track']['lineno']=119;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'played');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getPlayed'] = $method;
			$pyjs['track']['lineno']=121;
			$method = $pyjs__bind_method2('getSeekable', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':121};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=121;
				$pyjs['track']['lineno']=122;
				$pyjs['track']['lineno']=122;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'seekable');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getSeekable'] = $method;
			$pyjs['track']['lineno']=124;
			$method = $pyjs__bind_method2('hasEnded', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=124;
				$pyjs['track']['lineno']=125;
				$pyjs['track']['lineno']=125;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'ended');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['hasEnded'] = $method;
			$pyjs['track']['lineno']=127;
			$method = $pyjs__bind_method2('isLoop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=127;
				$pyjs['track']['lineno']=128;
				$pyjs['track']['lineno']=128;
				var $pyjs__ret = $p['bool']($p['getattr'](self['getElement'](), 'loop'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isLoop'] = $method;
			$pyjs['track']['lineno']=130;
			$method = $pyjs__bind_method2('getVolume', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=131;
				$pyjs['track']['lineno']=131;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'volume');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getVolume'] = $method;
			$pyjs['track']['lineno']=133;
			$method = $pyjs__bind_method2('setVolume', function(volume) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					volume = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':133};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=133;
				$pyjs['track']['lineno']=134;
				self['getElement']()['__is_instance__'] && typeof self['getElement']()['__setattr__'] == 'function' ? self['getElement']()['__setattr__']('volume', volume) : $p['setattr'](self['getElement'](), 'volume', volume); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['volume']]);
			$cls_definition['setVolume'] = $method;
			$pyjs['track']['lineno']=136;
			$method = $pyjs__bind_method2('getReadyState', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':136};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=136;
				$pyjs['track']['lineno']=137;
				$pyjs['track']['lineno']=137;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'readyState');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getReadyState'] = $method;
			$pyjs['track']['lineno']=140;
			$pyjs['track']['lineno']=150;
			$method = $pyjs__bind_method2('setAutobuffer', function(autobuffer) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					autobuffer = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':150};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=150;
				$pyjs['track']['lineno']=151;
				self['getElement']()['__is_instance__'] && typeof self['getElement']()['__setattr__'] == 'function' ? self['getElement']()['__setattr__']('autobuffer', autobuffer) : $p['setattr'](self['getElement'](), 'autobuffer', autobuffer); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['autobuffer']]);
			$cls_definition['setAutobuffer'] = $method;
			$pyjs['track']['lineno']=154;
			$pyjs['track']['lineno']=160;
			$method = $pyjs__bind_method2('setAutoplay', function(autoplay) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					autoplay = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=160;
				$pyjs['track']['lineno']=161;
				self['getElement']()['__is_instance__'] && typeof self['getElement']()['__setattr__'] == 'function' ? self['getElement']()['__setattr__']('autoplay', autoplay) : $p['setattr'](self['getElement'](), 'autoplay', autoplay); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['autoplay']]);
			$cls_definition['setAutoplay'] = $method;
			$pyjs['track']['lineno']=164;
			$pyjs['track']['lineno']=170;
			$method = $pyjs__bind_method2('setLoop', function(loop) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					loop = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=170;
				$pyjs['track']['lineno']=171;
				self['getElement']()['__is_instance__'] && typeof self['getElement']()['__setattr__'] == 'function' ? self['getElement']()['__setattr__']('loop', loop) : $p['setattr'](self['getElement'](), 'loop', loop); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loop']]);
			$cls_definition['setLoop'] = $method;
			$pyjs['track']['lineno']=174;
			$pyjs['track']['lineno']=184;
			$method = $pyjs__bind_method2('setControls', function(controls) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					controls = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':184};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=184;
				$pyjs['track']['lineno']=185;
				$m['DOM']['setBooleanAttribute'](self['getElement'](), 'controls', controls);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['controls']]);
			$cls_definition['setControls'] = $method;
			$pyjs['track']['lineno']=187;
			$method = $pyjs__bind_method2('hasControls', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':187};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=187;
				$pyjs['track']['lineno']=188;
				$m['DOM']['getBooleanAttribute'](self['getElement'](), 'controls');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['hasControls'] = $method;
			$pyjs['track']['lineno']=190;
			$method = $pyjs__bind_method2('isMuted', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':190};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=190;
				$pyjs['track']['lineno']=191;
				$pyjs['track']['lineno']=191;
				var $pyjs__ret = $p['getattr'](self['getElement'](), 'muted');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isMuted'] = $method;
			$pyjs['track']['lineno']=193;
			$method = $pyjs__bind_method2('play', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':193};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=193;
				$pyjs['track']['lineno']=194;
				self['getElement']()['play']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['play'] = $method;
			$pyjs['track']['lineno']=196;
			$method = $pyjs__bind_method2('load', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':196};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=196;
				$pyjs['track']['lineno']=197;
				self['getElement']()['load']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['load'] = $method;
			$pyjs['track']['lineno']=199;
			$method = $pyjs__bind_method2('pause', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':199};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=199;
				$pyjs['track']['lineno']=200;
				self['getElement']()['pause']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pause'] = $method;
			$pyjs['track']['lineno']=202;
			$method = $pyjs__bind_method2('canPlayType', function(etype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					etype = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':202};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=202;
				$pyjs['track']['lineno']=203;
				self['getElement']()['canPlayType'](etype);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['etype']]);
			$cls_definition['canPlayType'] = $method;
			$pyjs['track']['lineno']=205;
			$method = $pyjs__bind_method2('setMute', function(muted) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					muted = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=205;
				$pyjs['track']['lineno']=206;
				self['getElement']()['setMute'](muted);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['muted']]);
			$cls_definition['setMute'] = $method;
			$pyjs['track']['lineno']=209;
			$pyjs['track']['lineno']=214;
			$method = $pyjs__bind_method2('addAbortHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':214};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=214;
				$pyjs['track']['lineno']=215;
				$pyjs['track']['lineno']=215;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['AbortEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addAbortHandler'] = $method;
			$pyjs['track']['lineno']=218;
			$pyjs['track']['lineno']=227;
			$method = $pyjs__bind_method2('addCanPlayHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=227;
				$pyjs['track']['lineno']=228;
				$pyjs['track']['lineno']=228;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['CanPlayEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addCanPlayHandler'] = $method;
			$pyjs['track']['lineno']=231;
			$pyjs['track']['lineno']=239;
			$method = $pyjs__bind_method2('addCanPlayThroughHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':239};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=239;
				$pyjs['track']['lineno']=240;
				$pyjs['track']['lineno']=240;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['CanPlayThroughEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addCanPlayThroughHandler'] = $method;
			$pyjs['track']['lineno']=244;
			$method = $pyjs__bind_method2('addDurationChangeHandle', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':244};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=244;
				$pyjs['track']['lineno']=245;
				$pyjs['track']['lineno']=245;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['DurationChangeEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addDurationChangeHandle'] = $method;
			$pyjs['track']['lineno']=248;
			$pyjs['track']['lineno']=254;
			$method = $pyjs__bind_method2('addEmptiedHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':254};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=254;
				$pyjs['track']['lineno']=255;
				$pyjs['track']['lineno']=255;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['EmptiedEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addEmptiedHandler'] = $method;
			$pyjs['track']['lineno']=258;
			$pyjs['track']['lineno']=269;
			$method = $pyjs__bind_method2('addEndedHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':269};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=269;
				$pyjs['track']['lineno']=270;
				$pyjs['track']['lineno']=270;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['EndedEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addEndedHandler'] = $method;
			$pyjs['track']['lineno']=273;
			$pyjs['track']['lineno']=280;
			$method = $pyjs__bind_method2('addErrorHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':280};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=280;
				$pyjs['track']['lineno']=281;
				$pyjs['track']['lineno']=281;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['ErrorEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addErrorHandler'] = $method;
			$pyjs['track']['lineno']=284;
			$pyjs['track']['lineno']=291;
			$method = $pyjs__bind_method2('addLoadStartHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':291};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=292;
				$pyjs['track']['lineno']=292;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['LoadStartEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addLoadStartHandler'] = $method;
			$pyjs['track']['lineno']=295;
			$pyjs['track']['lineno']=302;
			$method = $pyjs__bind_method2('addLoadedDataHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':302};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=302;
				$pyjs['track']['lineno']=303;
				$pyjs['track']['lineno']=303;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['LoadedDataEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addLoadedDataHandler'] = $method;
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=313;
			$method = $pyjs__bind_method2('addLoadedMetadataHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':313};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=313;
				$pyjs['track']['lineno']=314;
				$pyjs['track']['lineno']=314;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['LoadedMetadataEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addLoadedMetadataHandler'] = $method;
			$pyjs['track']['lineno']=317;
			$pyjs['track']['lineno']=324;
			$method = $pyjs__bind_method2('addPauseHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':324};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=324;
				$pyjs['track']['lineno']=325;
				$pyjs['track']['lineno']=325;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['PauseEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addPauseHandler'] = $method;
			$pyjs['track']['lineno']=328;
			$pyjs['track']['lineno']=334;
			$method = $pyjs__bind_method2('addPlayHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':334};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=334;
				$pyjs['track']['lineno']=335;
				$pyjs['track']['lineno']=335;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['PlayEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addPlayHandler'] = $method;
			$pyjs['track']['lineno']=338;
			$pyjs['track']['lineno']=344;
			$method = $pyjs__bind_method2('addPlayingHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':344};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=344;
				$pyjs['track']['lineno']=345;
				$pyjs['track']['lineno']=345;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['PlayingEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addPlayingHandler'] = $method;
			$pyjs['track']['lineno']=348;
			$pyjs['track']['lineno']=354;
			$method = $pyjs__bind_method2('addProgressHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':354};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=354;
				$pyjs['track']['lineno']=355;
				$pyjs['track']['lineno']=355;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['ProgressEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addProgressHandler'] = $method;
			$pyjs['track']['lineno']=358;
			$pyjs['track']['lineno']=365;
			$method = $pyjs__bind_method2('addRateChangeHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':365};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=365;
				$pyjs['track']['lineno']=366;
				$pyjs['track']['lineno']=366;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['RateChangeEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addRateChangeHandler'] = $method;
			$pyjs['track']['lineno']=369;
			$pyjs['track']['lineno']=375;
			$method = $pyjs__bind_method2('addSeekedHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':375};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=375;
				$pyjs['track']['lineno']=376;
				$pyjs['track']['lineno']=376;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['SeekedEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addSeekedHandler'] = $method;
			$pyjs['track']['lineno']=379;
			$pyjs['track']['lineno']=385;
			$method = $pyjs__bind_method2('addSeekingHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':385};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=385;
				$pyjs['track']['lineno']=386;
				$pyjs['track']['lineno']=386;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['SeekingEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addSeekingHandler'] = $method;
			$pyjs['track']['lineno']=389;
			$pyjs['track']['lineno']=396;
			$method = $pyjs__bind_method2('addStalledHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':396};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=396;
				$pyjs['track']['lineno']=397;
				$pyjs['track']['lineno']=397;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['StalledEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addStalledHandler'] = $method;
			$pyjs['track']['lineno']=400;
			$pyjs['track']['lineno']=407;
			$method = $pyjs__bind_method2('addSuspendHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':407};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=407;
				$pyjs['track']['lineno']=408;
				$pyjs['track']['lineno']=408;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['SuspendEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addSuspendHandler'] = $method;
			$pyjs['track']['lineno']=411;
			$pyjs['track']['lineno']=418;
			$method = $pyjs__bind_method2('addTimeUpdateHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':418};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=418;
				$pyjs['track']['lineno']=419;
				$pyjs['track']['lineno']=419;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['TimeUpdateEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addTimeUpdateHandler'] = $method;
			$pyjs['track']['lineno']=422;
			$pyjs['track']['lineno']=429;
			$method = $pyjs__bind_method2('addVolumeChangeHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':429};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=429;
				$pyjs['track']['lineno']=430;
				$pyjs['track']['lineno']=430;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['VolumeChangeEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addVolumeChangeHandler'] = $method;
			$pyjs['track']['lineno']=433;
			$pyjs['track']['lineno']=440;
			$method = $pyjs__bind_method2('addWaitingHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':440};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=440;
				$pyjs['track']['lineno']=441;
				$pyjs['track']['lineno']=441;
				var $pyjs__ret = self['addMediaEventHandler'](handler, $m['WaitingEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addWaitingHandler'] = $method;
			$pyjs['track']['lineno']=444;
			$method = $pyjs__bind_method2('addMediaEventHandler', function(handler, etype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					etype = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':444};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=444;
				$pyjs['track']['lineno']=445;
				if (!( !$p['op_is'](handler, null) )) {
				   throw $p['AssertionError']('handler must not be None');
				 }
				$pyjs['track']['lineno']=446;
				if (!( !$p['op_is'](etype, null) )) {
				   throw $p['AssertionError']('type must not be None');
				 }
				$pyjs['track']['lineno']=447;
				self['maybeInitMediaEvents']();
				$pyjs['track']['lineno']=448;
				self['sinkMediaEvents']($m['mediaEventGetTypeInt'](etype['getName']()));
				$pyjs['track']['lineno']=449;
				$pyjs['track']['lineno']=449;
				var $pyjs__ret = (typeof addHandler == "undefined"?$m['addHandler']:addHandler)(handler, etype);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler'],['etype']]);
			$cls_definition['addMediaEventHandler'] = $method;
			$pyjs['track']['lineno']=453;
			$method = $pyjs__bind_method2('sinkMediaEvents', function(eventBitsToAdd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventBitsToAdd = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':453};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=453;
				$pyjs['track']['lineno']=454;
				if ($p['bool'](self['isOrWasAttached']())) {
					$pyjs['track']['lineno']=455;
					self['nativeSinkMediaEvents'](self['getElement'](), eventBitsToAdd);
				}
				else {
					$pyjs['track']['lineno']=457;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mediaEventsToSink', $p['op_bitor2']($p['getattr'](self, 'mediaEventsToSink'), eventBitsToAdd)) : $p['setattr'](self, 'mediaEventsToSink', $p['op_bitor2']($p['getattr'](self, 'mediaEventsToSink'), eventBitsToAdd)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
			$cls_definition['sinkMediaEvents'] = $method;
			$pyjs['track']['lineno']=461;
			$pyjs['track']['lineno']=466;
			$method = $pyjs__bind_method2('doAttachChildren', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var bitsToAdd;
				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':466};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=466;
				$pyjs['track']['lineno']=467;
				bitsToAdd = $p['getattr'](self, 'mediaEventsToSink');
				$pyjs['track']['lineno']=468;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('mediaEventsToSink', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))) : $p['setattr'](self, 'mediaEventsToSink', (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))); 
				$pyjs['track']['lineno']=469;
				if ($p['bool'](($p['cmp'](bitsToAdd, $constant_int_0) == 1))) {
					$pyjs['track']['lineno']=470;
					self['nativeSinkMediaEvents'](self['getElement'](), bitsToAdd);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['doAttachChildren'] = $method;
			$pyjs['track']['lineno']=473;
			$method = $pyjs__bind_method2('nativeSinkMediaEvents', function(elem, bits) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					elem = arguments[1];
					bits = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':473};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=473;
				$pyjs['track']['lineno']=567;
				$pyjs['track']['lineno']=567;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['elem'],['bits']]);
			$cls_definition['nativeSinkMediaEvents'] = $method;
			$pyjs['track']['lineno']=569;
			$method = $pyjs__bind_method2('addMouseDownHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':569};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=569;
				$pyjs['track']['lineno']=570;
				$pyjs['track']['lineno']=570;
				var $pyjs__ret = (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseDownEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseDownHandler'] = $method;
			$pyjs['track']['lineno']=574;
			$method = $pyjs__bind_method2('addMouseUpHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':574};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=574;
				$pyjs['track']['lineno']=575;
				$pyjs['track']['lineno']=575;
				var $pyjs__ret = (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseUpEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseUpHandler'] = $method;
			$pyjs['track']['lineno']=579;
			$method = $pyjs__bind_method2('addMouseOutHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':579};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=579;
				$pyjs['track']['lineno']=580;
				$pyjs['track']['lineno']=580;
				var $pyjs__ret = (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseOutEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseOutHandler'] = $method;
			$pyjs['track']['lineno']=584;
			$method = $pyjs__bind_method2('addMouseOverHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':584};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=584;
				$pyjs['track']['lineno']=585;
				$pyjs['track']['lineno']=585;
				var $pyjs__ret = (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseOverEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseOverHandler'] = $method;
			$pyjs['track']['lineno']=589;
			$method = $pyjs__bind_method2('addMouseMoveHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':589};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=589;
				$pyjs['track']['lineno']=590;
				$pyjs['track']['lineno']=590;
				var $pyjs__ret = (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseMoveEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseMoveHandler'] = $method;
			$pyjs['track']['lineno']=594;
			$method = $pyjs__bind_method2('addMouseWheelHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':594};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=594;
				$pyjs['track']['lineno']=595;
				$pyjs['track']['lineno']=595;
				var $pyjs__ret = (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseWheelEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addMouseWheelHandler'] = $method;
			$pyjs['track']['lineno']=599;
			$method = $pyjs__bind_method2('addClickHandler', function(handler) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					handler = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':599};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=599;
				$pyjs['track']['lineno']=600;
				$pyjs['track']['lineno']=600;
				var $pyjs__ret = (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['ClickEvent']['getType']());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['handler']]);
			$cls_definition['addClickHandler'] = $method;
			$pyjs['track']['lineno']=603;
			$method = $pyjs__bind_method2('maybeInitMediaEvents', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var mediaEventsInitialized;
				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':603};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=603;
				$pyjs['track']['lineno']=604;
				if ($p['bool'](!$p['bool']((typeof mediaEventsInitialized == "undefined"?$m['mediaEventsInitialized']:mediaEventsInitialized)))) {
					$pyjs['track']['lineno']=605;
					(typeof initMediaEvents == "undefined"?$m['initMediaEvents']:initMediaEvents)();
					$pyjs['track']['lineno']=606;
					mediaEventsInitialized = true;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['maybeInitMediaEvents'] = $method;
			$pyjs['track']['lineno']=610;
			$pyjs['track']['lineno']=613;
			$method = $pyjs__bind_method2('initMediaEvents', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':613};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=613;
				$pyjs['track']['lineno']=614;
				(typeof JS == "undefined"?$m['JS']:JS)("\n        mediaDispatchEvent = function(evt) {\n            var curElem = evt['target'];\n            var listener = curElem['__listener'];\n            if (listener) {\n                @{{self['dispatchMediaEvent']}}(evt, listener)\n            }\n        }\n        ");
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['initMediaEvents'] = $method;
			$pyjs['track']['lineno']=625;
			$pyjs['track']['lineno']=639;
			$method = $pyjs__bind_method2('dispatchMediaEvent', function(evt, listener) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					evt = arguments[1];
					listener = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '7a54f155652e1bef10708bf71ca0c726') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.media.Media', 'lineno':639};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Media';
				$pyjs['track']['lineno']=639;
				$pyjs['track']['lineno']=641;
				listener['onBrowserEvent'](evt);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['evt'],['listener']]);
			$cls_definition['dispatchMediaEvent'] = $method;
			$pyjs['track']['lineno']=54;
			var $bases = new Array($m['Widget']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Media', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.media.Media */


/* end module: pyjamas.media.Media */


/*
PYJS_DEPS: ['pyjamas.ui.Event', 'pyjamas', 'pyjamas.ui', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
