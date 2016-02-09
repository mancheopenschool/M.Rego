/* start module: pyjsdl.mixer */
$pyjs['loaded_modules']['pyjsdl.mixer'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mixer']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mixer'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mixer'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mixer>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mixer';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['mixer'] = $pyjs['loaded_modules']['pyjsdl.mixer'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.mixer.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.mixer.py, line 4:\n    from pyjsobj import Audio';
		$m.__track_lines__[5] = 'pyjsdl.mixer.py, line 5:\n    from time import Time';
		$m.__track_lines__[7] = "pyjsdl.mixer.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[10] = 'pyjsdl.mixer.py, line 10:\n    class Mixer:';
		$m.__track_lines__[29] = 'pyjsdl.mixer.py, line 29:\n    def __init__(self):';
		$m.__track_lines__[30] = 'pyjsdl.mixer.py, line 30:\n    Sound._mixer = self';
		$m.__track_lines__[31] = 'pyjsdl.mixer.py, line 31:\n    Channel._mixer = self';
		$m.__track_lines__[32] = 'pyjsdl.mixer.py, line 32:\n    self.Sound = Sound';
		$m.__track_lines__[33] = 'pyjsdl.mixer.py, line 33:\n    self.Channel = Channel';
		$m.__track_lines__[34] = 'pyjsdl.mixer.py, line 34:\n    self._channel_max = 8';
		$m.__track_lines__[35] = 'pyjsdl.mixer.py, line 35:\n    self._channels = {}';
		$m.__track_lines__[36] = 'pyjsdl.mixer.py, line 36:\n    self._sounds = {}';
		$m.__track_lines__[37] = 'pyjsdl.mixer.py, line 37:\n    self._channel_reserved = []';
		$m.__track_lines__[38] = 'pyjsdl.mixer.py, line 38:\n    self._channel_paused = []';
		$m.__track_lines__[39] = 'pyjsdl.mixer.py, line 39:\n    self._channel_reserves = [id for id in range(self._channel_max-1,-1,-1)]';
		$m.__track_lines__[40] = 'pyjsdl.mixer.py, line 40:\n    self._channel_pool = []';
		$m.__track_lines__[41] = 'pyjsdl.mixer.py, line 41:\n    self._lines = {}';
		$m.__track_lines__[42] = 'pyjsdl.mixer.py, line 42:\n    self._line_num = 0';
		$m.__track_lines__[43] = 'pyjsdl.mixer.py, line 43:\n    self._initialized = True';
		$m.__track_lines__[44] = 'pyjsdl.mixer.py, line 44:\n    self._nonimplemented_methods()';
		$m.__track_lines__[46] = 'pyjsdl.mixer.py, line 46:\n    def init(self, *args, **kwargs):';
		$m.__track_lines__[50] = 'pyjsdl.mixer.py, line 50:\n    if not self._initialized:';
		$m.__track_lines__[51] = 'pyjsdl.mixer.py, line 51:\n    self._initialized = True';
		$m.__track_lines__[52] = 'pyjsdl.mixer.py, line 52:\n    return None';
		$m.__track_lines__[54] = 'pyjsdl.mixer.py, line 54:\n    def pre_init(self,  *args, **kwargs):';
		$m.__track_lines__[58] = 'pyjsdl.mixer.py, line 58:\n    self.init()';
		$m.__track_lines__[59] = 'pyjsdl.mixer.py, line 59:\n    return None';
		$m.__track_lines__[61] = 'pyjsdl.mixer.py, line 61:\n    def quit(self):';
		$m.__track_lines__[65] = 'pyjsdl.mixer.py, line 65:\n    self.stop()';
		$m.__track_lines__[66] = 'pyjsdl.mixer.py, line 66:\n    self._initialized = False';
		$m.__track_lines__[68] = 'pyjsdl.mixer.py, line 68:\n    def get_init(self):';
		$m.__track_lines__[72] = 'pyjsdl.mixer.py, line 72:\n    if self._initialized:';
		$m.__track_lines__[73] = 'pyjsdl.mixer.py, line 73:\n    return self._initialized';
		$m.__track_lines__[75] = 'pyjsdl.mixer.py, line 75:\n    return None';
		$m.__track_lines__[77] = 'pyjsdl.mixer.py, line 77:\n    def stop(self):';
		$m.__track_lines__[81] = 'pyjsdl.mixer.py, line 81:\n    for id in self._channel_pool:';
		$m.__track_lines__[82] = 'pyjsdl.mixer.py, line 82:\n    self._channels[id].stop()';
		$m.__track_lines__[83] = 'pyjsdl.mixer.py, line 83:\n    return None';
		$m.__track_lines__[85] = 'pyjsdl.mixer.py, line 85:\n    def pause(self):';
		$m.__track_lines__[89] = 'pyjsdl.mixer.py, line 89:\n    for id in self._channel_pool:';
		$m.__track_lines__[90] = 'pyjsdl.mixer.py, line 90:\n    try:';
		$m.__track_lines__[91] = 'pyjsdl.mixer.py, line 91:\n    if self._channels[id]._active:';
		$m.__track_lines__[92] = 'pyjsdl.mixer.py, line 92:\n    self._channel_paused.append(id)';
		$m.__track_lines__[93] = 'pyjsdl.mixer.py, line 93:\n    self._channels[id].pause()';
		$m.__track_lines__[95] = 'pyjsdl.mixer.py, line 95:\n    continue';
		$m.__track_lines__[96] = 'pyjsdl.mixer.py, line 96:\n    return None';
		$m.__track_lines__[98] = 'pyjsdl.mixer.py, line 98:\n    def unpause(self):';
		$m.__track_lines__[102] = 'pyjsdl.mixer.py, line 102:\n    for id in self._channel_paused:';
		$m.__track_lines__[103] = 'pyjsdl.mixer.py, line 103:\n    self._channels[id].unpause()';
		$m.__track_lines__[104] = 'pyjsdl.mixer.py, line 104:\n    self.channel_paused = []';
		$m.__track_lines__[105] = 'pyjsdl.mixer.py, line 105:\n    return None';
		$m.__track_lines__[107] = 'pyjsdl.mixer.py, line 107:\n    def set_num_channels(self, count):';
		$m.__track_lines__[112] = 'pyjsdl.mixer.py, line 112:\n    if count >= self._channel_max:';
		$m.__track_lines__[113] = 'pyjsdl.mixer.py, line 113:\n    for id in range(self._channel_max, count):';
		$m.__track_lines__[114] = 'pyjsdl.mixer.py, line 114:\n    self._channels[id] = None';
		$m.__track_lines__[115] = 'pyjsdl.mixer.py, line 115:\n    self._channel_max = count';
		$m.__track_lines__[117] = 'pyjsdl.mixer.py, line 117:\n    for id in range(count, self._channel_max):';
		$m.__track_lines__[118] = 'pyjsdl.mixer.py, line 118:\n    self._channels[id].stop()';
		$m.__track_lines__[119] = 'pyjsdl.mixer.py, line 119:\n    del self._channels[id]';
		$m.__track_lines__[120] = 'pyjsdl.mixer.py, line 120:\n    self._channel_max = count';
		$m.__track_lines__[121] = 'pyjsdl.mixer.py, line 121:\n    return None';
		$m.__track_lines__[123] = 'pyjsdl.mixer.py, line 123:\n    def get_num_channels(self):';
		$m.__track_lines__[127] = 'pyjsdl.mixer.py, line 127:\n    return self._channel_max';
		$m.__track_lines__[129] = 'pyjsdl.mixer.py, line 129:\n    def set_reserved(self, count):';
		$m.__track_lines__[134] = 'pyjsdl.mixer.py, line 134:\n    if count > self._channel_max:';
		$m.__track_lines__[135] = 'pyjsdl.mixer.py, line 135:\n    count = self._channel_max';
		$m.__track_lines__[136] = 'pyjsdl.mixer.py, line 136:\n    reserved_len = len(self._channel_reserved)';
		$m.__track_lines__[137] = 'pyjsdl.mixer.py, line 137:\n    if reserved_len:';
		$m.__track_lines__[138] = 'pyjsdl.mixer.py, line 138:\n    if reserved_len >= count:';
		$m.__track_lines__[139] = 'pyjsdl.mixer.py, line 139:\n    for i in range(reserved_len-count):';
		$m.__track_lines__[140] = 'pyjsdl.mixer.py, line 140:\n    id = self._channel_reserved.pop()';
		$m.__track_lines__[141] = 'pyjsdl.mixer.py, line 141:\n    self._channels[id]._reserved = False';
		$m.__track_lines__[142] = 'pyjsdl.mixer.py, line 142:\n    self._channel_pool.append(id)';
		$m.__track_lines__[143] = 'pyjsdl.mixer.py, line 143:\n    count = 0';
		$m.__track_lines__[145] = 'pyjsdl.mixer.py, line 145:\n    count -= len(self._channel_reserved)';
		$m.__track_lines__[146] = 'pyjsdl.mixer.py, line 146:\n    for id in range(reserved_len, count+reserved_len):';
		$m.__track_lines__[147] = 'pyjsdl.mixer.py, line 147:\n    try:';
		$m.__track_lines__[148] = 'pyjsdl.mixer.py, line 148:\n    self._channels[id]._reserved = True';
		$m.__track_lines__[150] = 'pyjsdl.mixer.py, line 150:\n    self._channels[id] = Channel(id)';
		$m.__track_lines__[151] = 'pyjsdl.mixer.py, line 151:\n    try:';
		$m.__track_lines__[152] = 'pyjsdl.mixer.py, line 152:\n    self._channel_pool.remove(id)';
		$m.__track_lines__[154] = 'pyjsdl.mixer.py, line 154:\n    pass';
		$m.__track_lines__[155] = 'pyjsdl.mixer.py, line 155:\n    self._channel_reserved.append(id)';
		$m.__track_lines__[156] = 'pyjsdl.mixer.py, line 156:\n    return None';
		$m.__track_lines__[158] = 'pyjsdl.mixer.py, line 158:\n    def find_channel(self, force=False):';
		$m.__track_lines__[163] = 'pyjsdl.mixer.py, line 163:\n    if self._channel_reserves:';
		$m.__track_lines__[164] = 'pyjsdl.mixer.py, line 164:\n    channel = self._channel_reserves.pop()';
		$m.__track_lines__[165] = 'pyjsdl.mixer.py, line 165:\n    if channel in self._channels:';
		$m.__track_lines__[166] = 'pyjsdl.mixer.py, line 166:\n    return self._channels[channel]';
		$m.__track_lines__[168] = 'pyjsdl.mixer.py, line 168:\n    channel = Channel(channel)';
		$m.__track_lines__[169] = 'pyjsdl.mixer.py, line 169:\n    return channel';
		$m.__track_lines__[171] = 'pyjsdl.mixer.py, line 171:\n    for id in self._channel_pool:';
		$m.__track_lines__[172] = 'pyjsdl.mixer.py, line 172:\n    if not self._channels[id]._active:';
		$m.__track_lines__[173] = 'pyjsdl.mixer.py, line 173:\n    return self._channels[id]';
		$m.__track_lines__[175] = 'pyjsdl.mixer.py, line 175:\n    if force:';
		$m.__track_lines__[176] = 'pyjsdl.mixer.py, line 176:\n    channel = None';
		$m.__track_lines__[177] = 'pyjsdl.mixer.py, line 177:\n    longest = 0';
		$m.__track_lines__[178] = 'pyjsdl.mixer.py, line 178:\n    for id in self._channel_pool:';
		$m.__track_lines__[179] = 'pyjsdl.mixer.py, line 179:\n    if self._channels[id]._sound and not self._channels[id].isPaused():';
		$m.__track_lines__[180] = 'pyjsdl.mixer.py, line 180:\n    duration = self._channels[id]._sound._sound_object.getCurrentTime()';
		$m.__track_lines__[181] = 'pyjsdl.mixer.py, line 181:\n    if duration > longest:';
		$m.__track_lines__[182] = 'pyjsdl.mixer.py, line 182:\n    longest = duration';
		$m.__track_lines__[183] = 'pyjsdl.mixer.py, line 183:\n    channel = self._channels[id]';
		$m.__track_lines__[185] = 'pyjsdl.mixer.py, line 185:\n    channel = self._channels[id]';
		$m.__track_lines__[186] = 'pyjsdl.mixer.py, line 186:\n    break';
		$m.__track_lines__[187] = 'pyjsdl.mixer.py, line 187:\n    if channel:';
		$m.__track_lines__[188] = 'pyjsdl.mixer.py, line 188:\n    channel.stop()';
		$m.__track_lines__[189] = 'pyjsdl.mixer.py, line 189:\n    return channel';
		$m.__track_lines__[191] = 'pyjsdl.mixer.py, line 191:\n    return None';
		$m.__track_lines__[193] = 'pyjsdl.mixer.py, line 193:\n    return None';
		$m.__track_lines__[195] = 'pyjsdl.mixer.py, line 195:\n    def get_busy(self):';
		$m.__track_lines__[199] = 'pyjsdl.mixer.py, line 199:\n    for id in self._channel_pool:';
		$m.__track_lines__[200] = 'pyjsdl.mixer.py, line 200:\n    try:';
		$m.__track_lines__[201] = 'pyjsdl.mixer.py, line 201:\n    if self._channels[id]._active:';
		$m.__track_lines__[202] = 'pyjsdl.mixer.py, line 202:\n    return True';
		$m.__track_lines__[204] = 'pyjsdl.mixer.py, line 204:\n    continue';
		$m.__track_lines__[205] = 'pyjsdl.mixer.py, line 205:\n    return False';
		$m.__track_lines__[207] = 'pyjsdl.mixer.py, line 207:\n    def _register_channel(self, channel):';
		$m.__track_lines__[208] = 'pyjsdl.mixer.py, line 208:\n    id = channel._id';
		$m.__track_lines__[209] = 'pyjsdl.mixer.py, line 209:\n    if id < self._channel_max:';
		$m.__track_lines__[210] = 'pyjsdl.mixer.py, line 210:\n    try:';
		$m.__track_lines__[211] = 'pyjsdl.mixer.py, line 211:\n    if self._channels[id]._sound:';
		$m.__track_lines__[212] = 'pyjsdl.mixer.py, line 212:\n    channel._sound = self._channels[id]._sound';
		$m.__track_lines__[213] = 'pyjsdl.mixer.py, line 213:\n    self._channels[id] = channel';
		$m.__track_lines__[215] = 'pyjsdl.mixer.py, line 215:\n    self._channels[id] = channel';
		$m.__track_lines__[216] = 'pyjsdl.mixer.py, line 216:\n    self._channel_pool.append(id)';
		$m.__track_lines__[218] = 'pyjsdl.mixer.py, line 218:\n    raise AttributeError("Channel not available.")';
		$m.__track_lines__[220] = 'pyjsdl.mixer.py, line 220:\n    def _register_sound(self, sound):';
		$m.__track_lines__[221] = 'pyjsdl.mixer.py, line 221:\n    self._sounds[sound._id] = sound';
		$m.__track_lines__[223] = 'pyjsdl.mixer.py, line 223:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[227] = 'pyjsdl.mixer.py, line 227:\n    self.fadeout = lambda *arg: None';
		$m.__track_lines__[230] = 'pyjsdl.mixer.py, line 230:\n    class Sound:';
		$m.__track_lines__[242] = 'pyjsdl.mixer.py, line 242:\n    _id = 0';
		$m.__track_lines__[243] = 'pyjsdl.mixer.py, line 243:\n    _mixer = None';
		$m.__track_lines__[245] = 'pyjsdl.mixer.py, line 245:\n    def __init__(self, sound_file, id=None):';
		$m.__track_lines__[246] = 'pyjsdl.mixer.py, line 246:\n    if id is None:';
		$m.__track_lines__[247] = 'pyjsdl.mixer.py, line 247:\n    self._id = Sound._id';
		$m.__track_lines__[248] = 'pyjsdl.mixer.py, line 248:\n    Sound._id += 1';
		$m.__track_lines__[249] = 'pyjsdl.mixer.py, line 249:\n    self._mixer._register_sound(self)';
		$m.__track_lines__[251] = 'pyjsdl.mixer.py, line 251:\n    self._id = id';
		$m.__track_lines__[252] = 'pyjsdl.mixer.py, line 252:\n    if isinstance(sound_file, str):';
		$m.__track_lines__[253] = "pyjsdl.mixer.py, line 253:\n    self._sound_object = Audio(sound_file.replace('\\\\','/'))";
		$m.__track_lines__[255] = 'pyjsdl.mixer.py, line 255:\n    self._sound_object = sound_file';
		$m.__track_lines__[256] = 'pyjsdl.mixer.py, line 256:\n    self._sound_objects = []';
		$m.__track_lines__[257] = 'pyjsdl.mixer.py, line 257:\n    self._channel = None';
		$m.__track_lines__[258] = 'pyjsdl.mixer.py, line 258:\n    self._ch = None';
		$m.__track_lines__[259] = 'pyjsdl.mixer.py, line 259:\n    self._volume = 1.0';
		$m.__track_lines__[260] = 'pyjsdl.mixer.py, line 260:\n    self._nonimplemented_methods()';
		$m.__track_lines__[262] = 'pyjsdl.mixer.py, line 262:\n    def play(self, loops=0, maxtime=0, fade_ms=0):';
		$m.__track_lines__[267] = 'pyjsdl.mixer.py, line 267:\n    if not self._channel:';
		$m.__track_lines__[268] = 'pyjsdl.mixer.py, line 268:\n    self._channel = self._mixer.find_channel()';
		$m.__track_lines__[269] = 'pyjsdl.mixer.py, line 269:\n    if self._channel:';
		$m.__track_lines__[270] = 'pyjsdl.mixer.py, line 270:\n    self._channel._set_sound(self)';
		$m.__track_lines__[272] = 'pyjsdl.mixer.py, line 272:\n    return None';
		$m.__track_lines__[273] = 'pyjsdl.mixer.py, line 273:\n    if self._sound_object.isPaused():';
		$m.__track_lines__[274] = 'pyjsdl.mixer.py, line 274:\n    self._ch = self._channel';
		$m.__track_lines__[276] = 'pyjsdl.mixer.py, line 276:\n    self._ch = self._mixer.find_channel()';
		$m.__track_lines__[277] = 'pyjsdl.mixer.py, line 277:\n    if self._ch:';
		$m.__track_lines__[278] = 'pyjsdl.mixer.py, line 278:\n    sound = Sound(self._sound_object.getSrc(), self._id)';
		$m.__track_lines__[279] = 'pyjsdl.mixer.py, line 279:\n    self._ch._set_sound(sound)';
		$m.__track_lines__[281] = 'pyjsdl.mixer.py, line 281:\n    return None';
		$m.__track_lines__[282] = 'pyjsdl.mixer.py, line 282:\n    if not loops:';
		$m.__track_lines__[283] = 'pyjsdl.mixer.py, line 283:\n    self._ch._play()';
		$m.__track_lines__[285] = 'pyjsdl.mixer.py, line 285:\n    self._ch._play_repeat(loops)';
		$m.__track_lines__[286] = 'pyjsdl.mixer.py, line 286:\n    return self._ch';
		$m.__track_lines__[288] = 'pyjsdl.mixer.py, line 288:\n    def stop(self):';
		$m.__track_lines__[292] = 'pyjsdl.mixer.py, line 292:\n    if self._channel:';
		$m.__track_lines__[293] = 'pyjsdl.mixer.py, line 293:\n    self._channel.stop()';
		$m.__track_lines__[295] = 'pyjsdl.mixer.py, line 295:\n    def set_volume(self, volume):';
		$m.__track_lines__[300] = 'pyjsdl.mixer.py, line 300:\n    if volume < 0.0:';
		$m.__track_lines__[301] = 'pyjsdl.mixer.py, line 301:\n    volume = 0.0';
		$m.__track_lines__[303] = 'pyjsdl.mixer.py, line 303:\n    volume = 1.0';
		$m.__track_lines__[304] = 'pyjsdl.mixer.py, line 304:\n    self._volume = volume';
		$m.__track_lines__[305] = 'pyjsdl.mixer.py, line 305:\n    self._sound_object.setVolume(self._volume)';
		$m.__track_lines__[306] = 'pyjsdl.mixer.py, line 306:\n    return None';
		$m.__track_lines__[308] = 'pyjsdl.mixer.py, line 308:\n    def get_volume(self):';
		$m.__track_lines__[312] = 'pyjsdl.mixer.py, line 312:\n    return self._volume';
		$m.__track_lines__[314] = 'pyjsdl.mixer.py, line 314:\n    def get_num_channels(self):';
		$m.__track_lines__[318] = 'pyjsdl.mixer.py, line 318:\n    channel = 0';
		$m.__track_lines__[319] = 'pyjsdl.mixer.py, line 319:\n    for id in self._mixer._channel_pool:';
		$m.__track_lines__[320] = 'pyjsdl.mixer.py, line 320:\n    try:';
		$m.__track_lines__[321] = 'pyjsdl.mixer.py, line 321:\n    if self._mixer._channels[id]._sound._id == self._id:';
		$m.__track_lines__[322] = 'pyjsdl.mixer.py, line 322:\n    channel += 1';
		$m.__track_lines__[324] = 'pyjsdl.mixer.py, line 324:\n    continue';
		$m.__track_lines__[325] = 'pyjsdl.mixer.py, line 325:\n    return channel';
		$m.__track_lines__[327] = 'pyjsdl.mixer.py, line 327:\n    def get_length(self):';
		$m.__track_lines__[331] = 'pyjsdl.mixer.py, line 331:\n    return self._sound_object.getDuration()';
		$m.__track_lines__[333] = 'pyjsdl.mixer.py, line 333:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[337] = 'pyjsdl.mixer.py, line 337:\n    self.fadeout = lambda *arg: None';
		$m.__track_lines__[338] = 'pyjsdl.mixer.py, line 338:\n    self.get_buffer = lambda *arg: None';
		$m.__track_lines__[341] = 'pyjsdl.mixer.py, line 341:\n    class Channel:';
		$m.__track_lines__[355] = 'pyjsdl.mixer.py, line 355:\n    _mixer = None';
		$m.__track_lines__[357] = 'pyjsdl.mixer.py, line 357:\n    def __init__(self, id):';
		$m.__track_lines__[358] = 'pyjsdl.mixer.py, line 358:\n    self._id = id';
		$m.__track_lines__[359] = 'pyjsdl.mixer.py, line 359:\n    self._sound = None';
		$m.__track_lines__[360] = 'pyjsdl.mixer.py, line 360:\n    self._active = False';
		$m.__track_lines__[361] = 'pyjsdl.mixer.py, line 361:\n    self._pause = False';
		$m.__track_lines__[362] = 'pyjsdl.mixer.py, line 362:\n    self._loops = 0';
		$m.__track_lines__[363] = 'pyjsdl.mixer.py, line 363:\n    self._volume = 1.0';
		$m.__track_lines__[364] = 'pyjsdl.mixer.py, line 364:\n    self._lvolume = 1.0';
		$m.__track_lines__[365] = 'pyjsdl.mixer.py, line 365:\n    self._rvolume = 1.0';
		$m.__track_lines__[366] = 'pyjsdl.mixer.py, line 366:\n    self._mixer._register_channel(self)';
		$m.__track_lines__[367] = 'pyjsdl.mixer.py, line 367:\n    self._time = Time()';
		$m.__track_lines__[368] = 'pyjsdl.mixer.py, line 368:\n    self._nonimplemented_methods()';
		$m.__track_lines__[370] = 'pyjsdl.mixer.py, line 370:\n    def _set_sound(self, sound):';
		$m.__track_lines__[371] = 'pyjsdl.mixer.py, line 371:\n    if self._sound:';
		$m.__track_lines__[372] = 'pyjsdl.mixer.py, line 372:\n    self._sound._channel = None';
		$m.__track_lines__[373] = 'pyjsdl.mixer.py, line 373:\n    self._sound = sound';
		$m.__track_lines__[375] = 'pyjsdl.mixer.py, line 375:\n    def _play(self):';
		$m.__track_lines__[376] = 'pyjsdl.mixer.py, line 376:\n    self._volume = 1.0';
		$m.__track_lines__[377] = 'pyjsdl.mixer.py, line 377:\n    self._lvolume = 1.0';
		$m.__track_lines__[378] = 'pyjsdl.mixer.py, line 378:\n    self._rvolume = 1.0';
		$m.__track_lines__[379] = 'pyjsdl.mixer.py, line 379:\n    self._active = True';
		$m.__track_lines__[380] = 'pyjsdl.mixer.py, line 380:\n    self._sound._sound_object.play()';
		$m.__track_lines__[381] = 'pyjsdl.mixer.py, line 381:\n    self._time.timeout(self._sound._sound_object.getDuration()*1000, self)';
		$m.__track_lines__[383] = 'pyjsdl.mixer.py, line 383:\n    def _play_repeat(self, loops):';
		$m.__track_lines__[384] = 'pyjsdl.mixer.py, line 384:\n    if loops > 0:';
		$m.__track_lines__[385] = 'pyjsdl.mixer.py, line 385:\n    self._loops = loops';
		$m.__track_lines__[387] = 'pyjsdl.mixer.py, line 387:\n    self._loops = -1';
		$m.__track_lines__[388] = 'pyjsdl.mixer.py, line 388:\n    self._play()';
		$m.__track_lines__[390] = 'pyjsdl.mixer.py, line 390:\n    def play(self, sound, loops=0, maxtime=0, fade_ms=0):';
		$m.__track_lines__[395] = 'pyjsdl.mixer.py, line 395:\n    if self._sound:';
		$m.__track_lines__[396] = 'pyjsdl.mixer.py, line 396:\n    self.stop()';
		$m.__track_lines__[397] = 'pyjsdl.mixer.py, line 397:\n    self._set_sound(sound)';
		$m.__track_lines__[398] = 'pyjsdl.mixer.py, line 398:\n    if not loops:';
		$m.__track_lines__[399] = 'pyjsdl.mixer.py, line 399:\n    self._play()';
		$m.__track_lines__[401] = 'pyjsdl.mixer.py, line 401:\n    self._play_repeat(loops)';
		$m.__track_lines__[402] = 'pyjsdl.mixer.py, line 402:\n    return None';
		$m.__track_lines__[404] = 'pyjsdl.mixer.py, line 404:\n    def run(self):';
		$m.__track_lines__[405] = 'pyjsdl.mixer.py, line 405:\n    if not self._loops:';
		$m.__track_lines__[406] = 'pyjsdl.mixer.py, line 406:\n    self._active = False';
		$m.__track_lines__[408] = 'pyjsdl.mixer.py, line 408:\n    if self._loops > 0:';
		$m.__track_lines__[409] = 'pyjsdl.mixer.py, line 409:\n    self._loops -= 1';
		$m.__track_lines__[410] = 'pyjsdl.mixer.py, line 410:\n    self._play()';
		$m.__track_lines__[412] = 'pyjsdl.mixer.py, line 412:\n    def stop(self):';
		$m.__track_lines__[416] = 'pyjsdl.mixer.py, line 416:\n    if self._sound:';
		$m.__track_lines__[417] = 'pyjsdl.mixer.py, line 417:\n    self._sound._sound_object.pause()';
		$m.__track_lines__[418] = 'pyjsdl.mixer.py, line 418:\n    self._sound._sound_object.setCurrentTime(0)';
		$m.__track_lines__[419] = 'pyjsdl.mixer.py, line 419:\n    self._pause = False';
		$m.__track_lines__[420] = 'pyjsdl.mixer.py, line 420:\n    self._loops = 0';
		$m.__track_lines__[421] = 'pyjsdl.mixer.py, line 421:\n    self._active = False';
		$m.__track_lines__[422] = 'pyjsdl.mixer.py, line 422:\n    return None';
		$m.__track_lines__[424] = 'pyjsdl.mixer.py, line 424:\n    def pause(self):';
		$m.__track_lines__[428] = 'pyjsdl.mixer.py, line 428:\n    if self._sound:';
		$m.__track_lines__[429] = 'pyjsdl.mixer.py, line 429:\n    if not self._pause:';
		$m.__track_lines__[430] = 'pyjsdl.mixer.py, line 430:\n    self._sound._sound_object.pause()';
		$m.__track_lines__[431] = 'pyjsdl.mixer.py, line 431:\n    self._pause = True';
		$m.__track_lines__[432] = 'pyjsdl.mixer.py, line 432:\n    return None';
		$m.__track_lines__[434] = 'pyjsdl.mixer.py, line 434:\n    def unpause(self):';
		$m.__track_lines__[438] = 'pyjsdl.mixer.py, line 438:\n    if self._sound:';
		$m.__track_lines__[439] = 'pyjsdl.mixer.py, line 439:\n    if self._pause:';
		$m.__track_lines__[440] = 'pyjsdl.mixer.py, line 440:\n    self._sound._sound_object.play()';
		$m.__track_lines__[441] = 'pyjsdl.mixer.py, line 441:\n    self._pause = False';
		$m.__track_lines__[442] = 'pyjsdl.mixer.py, line 442:\n    return None';
		$m.__track_lines__[444] = 'pyjsdl.mixer.py, line 444:\n    def set_volume(self, volume):';
		$m.__track_lines__[448] = 'pyjsdl.mixer.py, line 448:\n    if volume < 0.0:';
		$m.__track_lines__[449] = 'pyjsdl.mixer.py, line 449:\n    volume = 0.0';
		$m.__track_lines__[451] = 'pyjsdl.mixer.py, line 451:\n    volume = 1.0';
		$m.__track_lines__[452] = 'pyjsdl.mixer.py, line 452:\n    self._volume = volume';
		$m.__track_lines__[453] = 'pyjsdl.mixer.py, line 453:\n    if self._sound:';
		$m.__track_lines__[454] = 'pyjsdl.mixer.py, line 454:\n    self._sound._sound_object.setVolume(self._volume * self._sound._sound_object._volume)';
		$m.__track_lines__[456] = 'pyjsdl.mixer.py, line 456:\n    self._volume = 1.0';
		$m.__track_lines__[457] = 'pyjsdl.mixer.py, line 457:\n    return None';
		$m.__track_lines__[459] = 'pyjsdl.mixer.py, line 459:\n    def get_volume(self):';
		$m.__track_lines__[463] = 'pyjsdl.mixer.py, line 463:\n    return self._volume';
		$m.__track_lines__[465] = 'pyjsdl.mixer.py, line 465:\n    def get_busy(self):';
		$m.__track_lines__[469] = 'pyjsdl.mixer.py, line 469:\n    return self._active';
		$m.__track_lines__[471] = 'pyjsdl.mixer.py, line 471:\n    def get_sound(self):';
		$m.__track_lines__[475] = 'pyjsdl.mixer.py, line 475:\n    return self._sound';
		$m.__track_lines__[477] = 'pyjsdl.mixer.py, line 477:\n    def _nonimplemented_methods(self):';
		$m.__track_lines__[481] = 'pyjsdl.mixer.py, line 481:\n    self.fadeout = lambda *arg: None';
		$m.__track_lines__[482] = 'pyjsdl.mixer.py, line 482:\n    self.queue = lambda *arg: None';
		$m.__track_lines__[483] = 'pyjsdl.mixer.py, line 483:\n    self.get_queue = lambda *arg: None';
		$m.__track_lines__[484] = 'pyjsdl.mixer.py, line 484:\n    self.set_endevent = lambda *arg: None';
		$m.__track_lines__[485] = 'pyjsdl.mixer.py, line 485:\n    self.get_endevent = lambda *arg: 0';

		var $constant_int_8 = new $p['int'](8);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjsdl.mixer';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Audio'] = $p['___import___']('pyjsobj.Audio', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Time'] = $p['___import___']('time.Time', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['Mixer'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.mixer';
			$cls_definition['__md5__'] = 'e7c37e440678fd8e70ec2d1ea7fda2c5';
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
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=29;
				$pyjs['track']['lineno']=30;
				$m['Sound']['__is_instance__'] && typeof $m['Sound']['__setattr__'] == 'function' ? $m['Sound']['__setattr__']('_mixer', self) : $p['setattr']($m['Sound'], '_mixer', self); 
				$pyjs['track']['lineno']=31;
				$m['Channel']['__is_instance__'] && typeof $m['Channel']['__setattr__'] == 'function' ? $m['Channel']['__setattr__']('_mixer', self) : $p['setattr']($m['Channel'], '_mixer', self); 
				$pyjs['track']['lineno']=32;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Sound', (typeof Sound == "undefined"?$m['Sound']:Sound)) : $p['setattr'](self, 'Sound', (typeof Sound == "undefined"?$m['Sound']:Sound)); 
				$pyjs['track']['lineno']=33;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('Channel', (typeof Channel == "undefined"?$m['Channel']:Channel)) : $p['setattr'](self, 'Channel', (typeof Channel == "undefined"?$m['Channel']:Channel)); 
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel_max', $constant_int_8) : $p['setattr'](self, '_channel_max', $constant_int_8); 
				$pyjs['track']['lineno']=35;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channels', $p['dict']([])) : $p['setattr'](self, '_channels', $p['dict']([])); 
				$pyjs['track']['lineno']=36;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sounds', $p['dict']([])) : $p['setattr'](self, '_sounds', $p['dict']([])); 
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel_reserved', $p['list']([])) : $p['setattr'](self, '_channel_reserved', $p['list']([])); 
				$pyjs['track']['lineno']=38;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel_paused', $p['list']([])) : $p['setattr'](self, '_channel_paused', $p['list']([])); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel_reserves', function(){
					var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$sub2,$sub1,id,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($p['__op_sub']($sub1=$p['getattr'](self, '_channel_max'),$sub2=$constant_int_1), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					id = $iter1_nextval['$nextval'];
					$collcomp1['append'](id);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';

	return $collcomp1;}()) : $p['setattr'](self, '_channel_reserves', function(){
					var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$sub2,$sub1,id,$iter1_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['range']($p['__op_sub']($sub1=$p['getattr'](self, '_channel_max'),$sub2=$constant_int_1), (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					id = $iter1_nextval['$nextval'];
					$collcomp1['append'](id);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';

	return $collcomp1;}()); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel_pool', $p['list']([])) : $p['setattr'](self, '_channel_pool', $p['list']([])); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_lines', $p['dict']([])) : $p['setattr'](self, '_lines', $p['dict']([])); 
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_line_num', $constant_int_0) : $p['setattr'](self, '_line_num', $constant_int_0); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', true) : $p['setattr'](self, '_initialized', true); 
				$pyjs['track']['lineno']=44;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=46;
			$method = $pyjs__bind_method2('init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
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

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=46;
				$pyjs['track']['lineno']=50;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_initialized')))) {
					$pyjs['track']['lineno']=51;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', true) : $p['setattr'](self, '_initialized', true); 
				}
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=52;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['init'] = $method;
			$pyjs['track']['lineno']=54;
			$method = $pyjs__bind_method2('pre_init', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
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

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=58;
				self['init']();
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=59;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',['kwargs'],['self']]);
			$cls_definition['pre_init'] = $method;
			$pyjs['track']['lineno']=61;
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
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=65;
				self['stop']();
				$pyjs['track']['lineno']=66;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_initialized', false) : $p['setattr'](self, '_initialized', false); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['quit'] = $method;
			$pyjs['track']['lineno']=68;
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
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=72;
				if ($p['bool']($p['getattr'](self, '_initialized'))) {
					$pyjs['track']['lineno']=73;
					$pyjs['track']['lineno']=73;
					var $pyjs__ret = $p['getattr'](self, '_initialized');
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=75;
					$pyjs['track']['lineno']=75;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_init'] = $method;
			$pyjs['track']['lineno']=77;
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
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$pyjs__trackstack_size_1,id,$iter2_array;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=81;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['getattr'](self, '_channel_pool');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					id = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=82;
					$p['getattr'](self, '_channels')['__getitem__'](id)['stop']();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=83;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stop'] = $method;
			$pyjs['track']['lineno']=85;
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
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,$iter3_type,id,$pyjs_try_err,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=85;
				$pyjs['track']['lineno']=89;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $p['getattr'](self, '_channel_pool');
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					id = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=90;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=91;
						if ($p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_active'))) {
							$pyjs['track']['lineno']=92;
							self['_channel_paused']['append'](id);
							$pyjs['track']['lineno']=93;
							$p['getattr'](self, '_channels')['__getitem__'](id)['pause']();
						}
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
						$pyjs['track']['module']='pyjsdl.mixer';
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							$pyjs['track']['lineno']=95;
							continue;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=96;
				$pyjs['track']['lineno']=96;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pause'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('unpause', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter4_nextval,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,id;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=102;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['getattr'](self, '_channel_paused');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					id = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=103;
					$p['getattr'](self, '_channels')['__getitem__'](id)['unpause']();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=104;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('channel_paused', $p['list']([])) : $p['setattr'](self, 'channel_paused', $p['list']([])); 
				$pyjs['track']['lineno']=105;
				$pyjs['track']['lineno']=105;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['unpause'] = $method;
			$pyjs['track']['lineno']=107;
			$method = $pyjs__bind_method2('set_num_channels', function(count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					count = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,$iter6_idx,$iter6_type,$iter5_array,$pyjs__trackstack_size_1,$iter6_array,$iter5_iter,$iter5_idx,$iter5_type,$iter6_iter,id,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=112;
				if ($p['bool'](((($p['cmp'](count, $p['getattr'](self, '_channel_max')))|1) == 1))) {
					$pyjs['track']['lineno']=113;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter5_iter = $p['range']($p['getattr'](self, '_channel_max'), count);
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						id = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=114;
						$p['getattr'](self, '_channels')['__setitem__'](id, null);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=115;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel_max', count) : $p['setattr'](self, '_channel_max', count); 
				}
				else if ($p['bool'](((($p['cmp'](count, $constant_int_0))|1) == 1))) {
					$pyjs['track']['lineno']=117;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter6_iter = $p['range'](count, $p['getattr'](self, '_channel_max'));
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						id = $iter6_nextval['$nextval'];
						$pyjs['track']['lineno']=118;
						$p['getattr'](self, '_channels')['__getitem__'](id)['stop']();
						$pyjs['track']['lineno']=119;
						$p['getattr'](self, '_channels')['__delitem__'](id);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=120;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel_max', count) : $p['setattr'](self, '_channel_max', count); 
				}
				$pyjs['track']['lineno']=121;
				$pyjs['track']['lineno']=121;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['count']]);
			$cls_definition['set_num_channels'] = $method;
			$pyjs['track']['lineno']=123;
			$method = $pyjs__bind_method2('get_num_channels', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':123};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=123;
				$pyjs['track']['lineno']=127;
				$pyjs['track']['lineno']=127;
				var $pyjs__ret = $p['getattr'](self, '_channel_max');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_num_channels'] = $method;
			$pyjs['track']['lineno']=129;
			$method = $pyjs__bind_method2('set_reserved', function(count) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					count = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_iter,id,$pyjs_try_err,$sub3,$iter7_type,$sub6,$sub5,$sub4,$iter8_idx,$iter7_iter,$iter8_type,$iter8_nextval,$iter7_idx,$iter7_nextval,i,$iter7_array,$iter8_array,$add2,$add1,reserved_len,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=129;
				$pyjs['track']['lineno']=134;
				if ($p['bool'](($p['cmp'](count, $p['getattr'](self, '_channel_max')) == 1))) {
					$pyjs['track']['lineno']=135;
					count = $p['getattr'](self, '_channel_max');
				}
				$pyjs['track']['lineno']=136;
				reserved_len = $p['len']($p['getattr'](self, '_channel_reserved'));
				$pyjs['track']['lineno']=137;
				if ($p['bool'](reserved_len)) {
					$pyjs['track']['lineno']=138;
					if ($p['bool'](((($p['cmp'](reserved_len, count))|1) == 1))) {
						$pyjs['track']['lineno']=139;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter7_iter = $p['range']($p['__op_sub']($sub3=reserved_len,$sub4=count));
						$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
						while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
							i = $iter7_nextval['$nextval'];
							$pyjs['track']['lineno']=140;
							id = self['_channel_reserved']['pop']();
							$pyjs['track']['lineno']=141;
							$p['getattr'](self, '_channels')['__getitem__'](id)['__is_instance__'] && typeof $p['getattr'](self, '_channels')['__getitem__'](id)['__setattr__'] == 'function' ? $p['getattr'](self, '_channels')['__getitem__'](id)['__setattr__']('_reserved', false) : $p['setattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_reserved', false); 
							$pyjs['track']['lineno']=142;
							self['_channel_pool']['append'](id);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.mixer';
						$pyjs['track']['lineno']=143;
						count = $constant_int_0;
					}
					else {
						$pyjs['track']['lineno']=145;
						count = $p['__op_sub']($sub5=count,$sub6=$p['len']($p['getattr'](self, '_channel_reserved')));
					}
				}
				$pyjs['track']['lineno']=146;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = $p['range'](reserved_len, $p['__op_add']($add1=count,$add2=reserved_len));
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					id = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=147;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=148;
						$p['getattr'](self, '_channels')['__getitem__'](id)['__is_instance__'] && typeof $p['getattr'](self, '_channels')['__getitem__'](id)['__setattr__'] == 'function' ? $p['getattr'](self, '_channels')['__getitem__'](id)['__setattr__']('_reserved', true) : $p['setattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_reserved', true); 
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
						$pyjs['track']['module']='pyjsdl.mixer';
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							$pyjs['track']['lineno']=150;
							$p['getattr'](self, '_channels')['__setitem__'](id, (typeof Channel == "undefined"?$m['Channel']:Channel)(id));
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					$pyjs['track']['lineno']=151;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=152;
						self['_channel_pool']['remove'](id);
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
						$pyjs['track']['module']='pyjsdl.mixer';
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs['track']['lineno']=154;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					$pyjs['track']['lineno']=155;
					self['_channel_reserved']['append'](id);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=156;
				$pyjs['track']['lineno']=156;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['count']]);
			$cls_definition['set_reserved'] = $method;
			$pyjs['track']['lineno']=158;
			$method = $pyjs__bind_method2('find_channel', function(force) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					force = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof force == 'undefined') force=arguments['callee']['__args__'][3][1];
				var $iter9_test,$iter10_nextval,$iter9_iter,$and1,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_array,duration,$iter10_type,$and2,$pyjs__trackstack_size_2,longest,$pyjs__trackstack_size_1,id,$iter10_iter,$iter9_type,channel;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':158};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=158;
				$pyjs['track']['lineno']=163;
				if ($p['bool']($p['getattr'](self, '_channel_reserves'))) {
					$pyjs['track']['lineno']=164;
					channel = self['_channel_reserves']['pop']();
					$pyjs['track']['lineno']=165;
					if ($p['bool']($p['getattr'](self, '_channels')['__contains__'](channel))) {
						$pyjs['track']['lineno']=166;
						$pyjs['track']['lineno']=166;
						var $pyjs__ret = $p['getattr'](self, '_channels')['__getitem__'](channel);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=168;
						channel = (typeof Channel == "undefined"?$m['Channel']:Channel)(channel);
						$pyjs['track']['lineno']=169;
						$pyjs['track']['lineno']=169;
						var $pyjs__ret = channel;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				else {
					$pyjs['track']['lineno']=171;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter9_iter = $p['getattr'](self, '_channel_pool');
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while ($iter9_test = typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						id = $iter9_nextval['$nextval'];
						$pyjs['track']['lineno']=172;
						if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_active')))) {
							$pyjs['track']['lineno']=173;
							$pyjs['track']['lineno']=173;
							var $pyjs__ret = $p['getattr'](self, '_channels')['__getitem__'](id);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if (!$iter9_test) {
						$pyjs['track']['lineno']=175;
						if ($p['bool'](force)) {
							$pyjs['track']['lineno']=176;
							channel = null;
							$pyjs['track']['lineno']=177;
							longest = $constant_int_0;
							$pyjs['track']['lineno']=178;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter10_iter = $p['getattr'](self, '_channel_pool');
							$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
							while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
								id = $iter10_nextval['$nextval'];
								$pyjs['track']['lineno']=179;
								if ($p['bool'](($p['bool']($and1=$p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_sound'))?!$p['bool']($p['getattr'](self, '_channels')['__getitem__'](id)['isPaused']()):$and1))) {
									$pyjs['track']['lineno']=180;
									duration = $p['getattr'](self, '_channels')['__getitem__'](id)['_sound']['_sound_object']['getCurrentTime']();
									$pyjs['track']['lineno']=181;
									if ($p['bool'](($p['cmp'](duration, longest) == 1))) {
										$pyjs['track']['lineno']=182;
										longest = duration;
										$pyjs['track']['lineno']=183;
										channel = $p['getattr'](self, '_channels')['__getitem__'](id);
									}
								}
								else {
									$pyjs['track']['lineno']=185;
									channel = $p['getattr'](self, '_channels')['__getitem__'](id);
									$pyjs['track']['lineno']=186;
									break;
								}
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.mixer';
							$pyjs['track']['lineno']=187;
							if ($p['bool'](channel)) {
								$pyjs['track']['lineno']=188;
								channel['stop']();
								$pyjs['track']['lineno']=189;
								$pyjs['track']['lineno']=189;
								var $pyjs__ret = channel;
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
							else {
								$pyjs['track']['lineno']=191;
								$pyjs['track']['lineno']=191;
								var $pyjs__ret = null;
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
						}
						else {
							$pyjs['track']['lineno']=193;
							$pyjs['track']['lineno']=193;
							var $pyjs__ret = null;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.mixer';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['force', false]]);
			$cls_definition['find_channel'] = $method;
			$pyjs['track']['lineno']=195;
			$method = $pyjs__bind_method2('get_busy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter11_iter,$iter11_type,$pyjs_try_err,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,id;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=195;
				$pyjs['track']['lineno']=199;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter11_iter = $p['getattr'](self, '_channel_pool');
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					id = $iter11_nextval['$nextval'];
					$pyjs['track']['lineno']=200;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=201;
						if ($p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_active'))) {
							$pyjs['track']['lineno']=202;
							$pyjs['track']['lineno']=202;
							var $pyjs__ret = true;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
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
						$pyjs['track']['module']='pyjsdl.mixer';
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							$pyjs['track']['lineno']=204;
							continue;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=205;
				$pyjs['track']['lineno']=205;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_busy'] = $method;
			$pyjs['track']['lineno']=207;
			$method = $pyjs__bind_method2('_register_channel', function(channel) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					channel = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err,id;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':207};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=207;
				$pyjs['track']['lineno']=208;
				id = $p['getattr'](channel, '_id');
				$pyjs['track']['lineno']=209;
				if ($p['bool'](($p['cmp'](id, $p['getattr'](self, '_channel_max')) == -1))) {
					$pyjs['track']['lineno']=210;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=211;
						if ($p['bool']($p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_sound'))) {
							$pyjs['track']['lineno']=212;
							channel['__is_instance__'] && typeof channel['__setattr__'] == 'function' ? channel['__setattr__']('_sound', $p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_sound')) : $p['setattr'](channel, '_sound', $p['getattr']($p['getattr'](self, '_channels')['__getitem__'](id), '_sound')); 
							$pyjs['track']['lineno']=213;
							$p['getattr'](self, '_channels')['__setitem__'](id, channel);
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
						$pyjs['track']['module']='pyjsdl.mixer';
						if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
							$pyjs['track']['lineno']=215;
							$p['getattr'](self, '_channels')['__setitem__'](id, channel);
							$pyjs['track']['lineno']=216;
							self['_channel_pool']['append'](id);
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				else {
					$pyjs['track']['lineno']=218;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['AttributeError']('Channel not available.'));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['channel']]);
			$cls_definition['_register_channel'] = $method;
			$pyjs['track']['lineno']=220;
			$method = $pyjs__bind_method2('_register_sound', function(sound) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sound = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':220};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=221;
				$p['getattr'](self, '_sounds')['__setitem__']($p['getattr'](sound, '_id'), sound);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sound']]);
			$cls_definition['_register_sound'] = $method;
			$pyjs['track']['lineno']=223;
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
					if (self.prototype['__md5__'] !== 'e7c37e440678fd8e70ec2d1ea7fda2c5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda1;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':223};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=223;
				$pyjs['track']['lineno']=227;
				var 				$lambda1 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=227;
					$pyjs['track']['lineno']=227;
					$pyjs['track']['lineno']=227;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fadeout', $lambda1) : $p['setattr'](self, 'fadeout', $lambda1); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=10;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Mixer', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=230;
		$m['Sound'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.mixer';
			$cls_definition['__md5__'] = '48e8575ce2614818273d799012c1e784';
			$pyjs['track']['lineno']=242;
			$cls_definition['_id'] = $constant_int_0;
			$pyjs['track']['lineno']=243;
			$cls_definition['_mixer'] = null;
			$pyjs['track']['lineno']=245;
			$method = $pyjs__bind_method2('__init__', function(sound_file, id) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sound_file = arguments[1];
					id = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof id == 'undefined') id=arguments['callee']['__args__'][4][1];
				var $add3,$add4;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':245};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=245;
				$pyjs['track']['lineno']=246;
				if ($p['bool']($p['op_is'](id, null))) {
					$pyjs['track']['lineno']=247;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_id', $p['getattr']($m['Sound'], '_id')) : $p['setattr'](self, '_id', $p['getattr']($m['Sound'], '_id')); 
					$pyjs['track']['lineno']=248;
					$m['Sound']['__is_instance__'] && typeof $m['Sound']['__setattr__'] == 'function' ? $m['Sound']['__setattr__']('_id', $p['__op_add']($add3=$p['getattr']($m['Sound'], '_id'),$add4=$constant_int_1)) : $p['setattr']($m['Sound'], '_id', $p['__op_add']($add3=$p['getattr']($m['Sound'], '_id'),$add4=$constant_int_1)); 
					$pyjs['track']['lineno']=249;
					self['_mixer']['_register_sound'](self);
				}
				else {
					$pyjs['track']['lineno']=251;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_id', id) : $p['setattr'](self, '_id', id); 
				}
				$pyjs['track']['lineno']=252;
				if ($p['bool']($p['isinstance'](sound_file, $p['str']))) {
					$pyjs['track']['lineno']=253;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sound_object', $m['Audio'](sound_file['$$replace']('\\', '/'))) : $p['setattr'](self, '_sound_object', $m['Audio'](sound_file['$$replace']('\\', '/'))); 
				}
				else {
					$pyjs['track']['lineno']=255;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sound_object', sound_file) : $p['setattr'](self, '_sound_object', sound_file); 
				}
				$pyjs['track']['lineno']=256;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sound_objects', $p['list']([])) : $p['setattr'](self, '_sound_objects', $p['list']([])); 
				$pyjs['track']['lineno']=257;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel', null) : $p['setattr'](self, '_channel', null); 
				$pyjs['track']['lineno']=258;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_ch', null) : $p['setattr'](self, '_ch', null); 
				$pyjs['track']['lineno']=259;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_volume', 1.0) : $p['setattr'](self, '_volume', 1.0); 
				$pyjs['track']['lineno']=260;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sound_file'],['id', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=262;
			$method = $pyjs__bind_method2('play', function(loops, maxtime, fade_ms) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					loops = arguments[1];
					maxtime = arguments[2];
					fade_ms = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][3][1];
				if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][4][1];
				if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][5][1];
				var sound;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':262};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=262;
				$pyjs['track']['lineno']=267;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_channel')))) {
					$pyjs['track']['lineno']=268;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_channel', self['_mixer']['find_channel']()) : $p['setattr'](self, '_channel', self['_mixer']['find_channel']()); 
					$pyjs['track']['lineno']=269;
					if ($p['bool']($p['getattr'](self, '_channel'))) {
						$pyjs['track']['lineno']=270;
						self['_channel']['_set_sound'](self);
					}
					else {
						$pyjs['track']['lineno']=272;
						$pyjs['track']['lineno']=272;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['track']['lineno']=273;
				if ($p['bool'](self['_sound_object']['isPaused']())) {
					$pyjs['track']['lineno']=274;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_ch', $p['getattr'](self, '_channel')) : $p['setattr'](self, '_ch', $p['getattr'](self, '_channel')); 
				}
				else {
					$pyjs['track']['lineno']=276;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_ch', self['_mixer']['find_channel']()) : $p['setattr'](self, '_ch', self['_mixer']['find_channel']()); 
					$pyjs['track']['lineno']=277;
					if ($p['bool']($p['getattr'](self, '_ch'))) {
						$pyjs['track']['lineno']=278;
						sound = $m['Sound'](self['_sound_object']['getSrc'](), $p['getattr'](self, '_id'));
						$pyjs['track']['lineno']=279;
						self['_ch']['_set_sound'](sound);
					}
					else {
						$pyjs['track']['lineno']=281;
						$pyjs['track']['lineno']=281;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['track']['lineno']=282;
				if ($p['bool'](!$p['bool'](loops))) {
					$pyjs['track']['lineno']=283;
					self['_ch']['_play']();
				}
				else {
					$pyjs['track']['lineno']=285;
					self['_ch']['_play_repeat'](loops);
				}
				$pyjs['track']['lineno']=286;
				$pyjs['track']['lineno']=286;
				var $pyjs__ret = $p['getattr'](self, '_ch');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['loops', $constant_int_0],['maxtime', $constant_int_0],['fade_ms', $constant_int_0]]);
			$cls_definition['play'] = $method;
			$pyjs['track']['lineno']=288;
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
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':288};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=288;
				$pyjs['track']['lineno']=292;
				if ($p['bool']($p['getattr'](self, '_channel'))) {
					$pyjs['track']['lineno']=293;
					self['_channel']['stop']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stop'] = $method;
			$pyjs['track']['lineno']=295;
			$method = $pyjs__bind_method2('set_volume', function(volume) {
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
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':295};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=295;
				$pyjs['track']['lineno']=300;
				if ($p['bool'](($p['cmp'](volume, 0.0) == -1))) {
					$pyjs['track']['lineno']=301;
					volume = 0.0;
				}
				else if ($p['bool'](($p['cmp'](volume, 1.0) == 1))) {
					$pyjs['track']['lineno']=303;
					volume = 1.0;
				}
				$pyjs['track']['lineno']=304;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_volume', volume) : $p['setattr'](self, '_volume', volume); 
				$pyjs['track']['lineno']=305;
				self['_sound_object']['setVolume']($p['getattr'](self, '_volume'));
				$pyjs['track']['lineno']=306;
				$pyjs['track']['lineno']=306;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['volume']]);
			$cls_definition['set_volume'] = $method;
			$pyjs['track']['lineno']=308;
			$method = $pyjs__bind_method2('get_volume', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':308};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=308;
				$pyjs['track']['lineno']=312;
				$pyjs['track']['lineno']=312;
				var $pyjs__ret = $p['getattr'](self, '_volume');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_volume'] = $method;
			$pyjs['track']['lineno']=314;
			$method = $pyjs__bind_method2('get_num_channels', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter12_type,$add5,$iter12_array,$iter12_nextval,$iter12_iter,$pyjs_try_err,$add6,$pyjs__trackstack_size_1,id,$iter12_idx,channel;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':314};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=314;
				$pyjs['track']['lineno']=318;
				channel = $constant_int_0;
				$pyjs['track']['lineno']=319;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter12_iter = $p['getattr']($p['getattr'](self, '_mixer'), '_channel_pool');
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					id = $iter12_nextval['$nextval'];
					$pyjs['track']['lineno']=320;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=321;
						if ($p['bool']($p['op_eq']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, '_mixer'), '_channels')['__getitem__'](id), '_sound'), '_id'), $p['getattr'](self, '_id')))) {
							$pyjs['track']['lineno']=322;
							channel = $p['__op_add']($add5=channel,$add6=$constant_int_1);
						}
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
						$pyjs['track']['module']='pyjsdl.mixer';
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							$pyjs['track']['lineno']=324;
							continue;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=325;
				$pyjs['track']['lineno']=325;
				var $pyjs__ret = channel;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_num_channels'] = $method;
			$pyjs['track']['lineno']=327;
			$method = $pyjs__bind_method2('get_length', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':327};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=327;
				$pyjs['track']['lineno']=331;
				$pyjs['track']['lineno']=331;
				var $pyjs__ret = self['_sound_object']['getDuration']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_length'] = $method;
			$pyjs['track']['lineno']=333;
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
					if (self.prototype['__md5__'] !== '48e8575ce2614818273d799012c1e784') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda3,$lambda2;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':333};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=333;
				$pyjs['track']['lineno']=337;
				var 				$lambda2 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':337};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=337;
					$pyjs['track']['lineno']=337;
					$pyjs['track']['lineno']=337;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda2['__name__'] = '$lambda2';

				$lambda2['__bind_type__'] = 0;
				$lambda2['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fadeout', $lambda2) : $p['setattr'](self, 'fadeout', $lambda2); 
				$pyjs['track']['lineno']=338;
				var 				$lambda3 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':338};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=338;
					$pyjs['track']['lineno']=338;
					$pyjs['track']['lineno']=338;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda3['__name__'] = '$lambda3';

				$lambda3['__bind_type__'] = 0;
				$lambda3['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_buffer', $lambda3) : $p['setattr'](self, 'get_buffer', $lambda3); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=230;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Sound', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=341;
		$m['Channel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.mixer';
			$cls_definition['__md5__'] = 'd89ac73d679ec87173134a1ca0fa40d2';
			$pyjs['track']['lineno']=355;
			$cls_definition['_mixer'] = null;
			$pyjs['track']['lineno']=357;
			$method = $pyjs__bind_method2('__init__', function(id) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					id = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':357};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=357;
				$pyjs['track']['lineno']=358;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_id', id) : $p['setattr'](self, '_id', id); 
				$pyjs['track']['lineno']=359;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sound', null) : $p['setattr'](self, '_sound', null); 
				$pyjs['track']['lineno']=360;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_active', false) : $p['setattr'](self, '_active', false); 
				$pyjs['track']['lineno']=361;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_pause', false) : $p['setattr'](self, '_pause', false); 
				$pyjs['track']['lineno']=362;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_loops', $constant_int_0) : $p['setattr'](self, '_loops', $constant_int_0); 
				$pyjs['track']['lineno']=363;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_volume', 1.0) : $p['setattr'](self, '_volume', 1.0); 
				$pyjs['track']['lineno']=364;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_lvolume', 1.0) : $p['setattr'](self, '_lvolume', 1.0); 
				$pyjs['track']['lineno']=365;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rvolume', 1.0) : $p['setattr'](self, '_rvolume', 1.0); 
				$pyjs['track']['lineno']=366;
				self['_mixer']['_register_channel'](self);
				$pyjs['track']['lineno']=367;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_time', $m['Time']()) : $p['setattr'](self, '_time', $m['Time']()); 
				$pyjs['track']['lineno']=368;
				self['_nonimplemented_methods']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['id']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=370;
			$method = $pyjs__bind_method2('_set_sound', function(sound) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sound = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':370};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=370;
				$pyjs['track']['lineno']=371;
				if ($p['bool']($p['getattr'](self, '_sound'))) {
					$pyjs['track']['lineno']=372;
					$p['getattr'](self, '_sound')['__is_instance__'] && typeof $p['getattr'](self, '_sound')['__setattr__'] == 'function' ? $p['getattr'](self, '_sound')['__setattr__']('_channel', null) : $p['setattr']($p['getattr'](self, '_sound'), '_channel', null); 
				}
				$pyjs['track']['lineno']=373;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sound', sound) : $p['setattr'](self, '_sound', sound); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sound']]);
			$cls_definition['_set_sound'] = $method;
			$pyjs['track']['lineno']=375;
			$method = $pyjs__bind_method2('_play', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul2,$mul1;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':375};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=375;
				$pyjs['track']['lineno']=376;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_volume', 1.0) : $p['setattr'](self, '_volume', 1.0); 
				$pyjs['track']['lineno']=377;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_lvolume', 1.0) : $p['setattr'](self, '_lvolume', 1.0); 
				$pyjs['track']['lineno']=378;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_rvolume', 1.0) : $p['setattr'](self, '_rvolume', 1.0); 
				$pyjs['track']['lineno']=379;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_active', true) : $p['setattr'](self, '_active', true); 
				$pyjs['track']['lineno']=380;
				self['_sound']['_sound_object']['play']();
				$pyjs['track']['lineno']=381;
				self['_time']['timeout']((typeof ($mul1=self['_sound']['_sound_object']['getDuration']())==typeof ($mul2=$constant_int_1000) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_play'] = $method;
			$pyjs['track']['lineno']=383;
			$method = $pyjs__bind_method2('_play_repeat', function(loops) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					loops = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':383};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=383;
				$pyjs['track']['lineno']=384;
				if ($p['bool'](($p['cmp'](loops, $constant_int_0) == 1))) {
					$pyjs['track']['lineno']=385;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_loops', loops) : $p['setattr'](self, '_loops', loops); 
				}
				else {
					$pyjs['track']['lineno']=387;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_loops', (typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3))) : $p['setattr'](self, '_loops', (typeof ($usub3=$constant_int_1)=='number'?
						-$usub3:
						$p['op_usub']($usub3))); 
				}
				$pyjs['track']['lineno']=388;
				self['_play']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['loops']]);
			$cls_definition['_play_repeat'] = $method;
			$pyjs['track']['lineno']=390;
			$method = $pyjs__bind_method2('play', function(sound, loops, maxtime, fade_ms) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					sound = arguments[1];
					loops = arguments[2];
					maxtime = arguments[3];
					fade_ms = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][4][1];
				if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][5][1];
				if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][6][1];

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':390};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=390;
				$pyjs['track']['lineno']=395;
				if ($p['bool']($p['getattr'](self, '_sound'))) {
					$pyjs['track']['lineno']=396;
					self['stop']();
				}
				$pyjs['track']['lineno']=397;
				self['_set_sound'](sound);
				$pyjs['track']['lineno']=398;
				if ($p['bool'](!$p['bool'](loops))) {
					$pyjs['track']['lineno']=399;
					self['_play']();
				}
				else {
					$pyjs['track']['lineno']=401;
					self['_play_repeat'](loops);
				}
				$pyjs['track']['lineno']=402;
				$pyjs['track']['lineno']=402;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sound'],['loops', $constant_int_0],['maxtime', $constant_int_0],['fade_ms', $constant_int_0]]);
			$cls_definition['play'] = $method;
			$pyjs['track']['lineno']=404;
			$method = $pyjs__bind_method2('run', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub8,$sub7;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':404};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=404;
				$pyjs['track']['lineno']=405;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_loops')))) {
					$pyjs['track']['lineno']=406;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_active', false) : $p['setattr'](self, '_active', false); 
				}
				else {
					$pyjs['track']['lineno']=408;
					if ($p['bool'](($p['cmp']($p['getattr'](self, '_loops'), $constant_int_0) == 1))) {
						$pyjs['track']['lineno']=409;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_loops', $p['__op_sub']($sub7=$p['getattr'](self, '_loops'),$sub8=$constant_int_1)) : $p['setattr'](self, '_loops', $p['__op_sub']($sub7=$p['getattr'](self, '_loops'),$sub8=$constant_int_1)); 
					}
					$pyjs['track']['lineno']=410;
					self['_play']();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['run'] = $method;
			$pyjs['track']['lineno']=412;
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
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':412};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=412;
				$pyjs['track']['lineno']=416;
				if ($p['bool']($p['getattr'](self, '_sound'))) {
					$pyjs['track']['lineno']=417;
					self['_sound']['_sound_object']['pause']();
					$pyjs['track']['lineno']=418;
					self['_sound']['_sound_object']['setCurrentTime']($constant_int_0);
					$pyjs['track']['lineno']=419;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_pause', false) : $p['setattr'](self, '_pause', false); 
					$pyjs['track']['lineno']=420;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_loops', $constant_int_0) : $p['setattr'](self, '_loops', $constant_int_0); 
					$pyjs['track']['lineno']=421;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_active', false) : $p['setattr'](self, '_active', false); 
				}
				$pyjs['track']['lineno']=422;
				$pyjs['track']['lineno']=422;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['stop'] = $method;
			$pyjs['track']['lineno']=424;
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
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':424};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=424;
				$pyjs['track']['lineno']=428;
				if ($p['bool']($p['getattr'](self, '_sound'))) {
					$pyjs['track']['lineno']=429;
					if ($p['bool'](!$p['bool']($p['getattr'](self, '_pause')))) {
						$pyjs['track']['lineno']=430;
						self['_sound']['_sound_object']['pause']();
						$pyjs['track']['lineno']=431;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_pause', true) : $p['setattr'](self, '_pause', true); 
					}
				}
				$pyjs['track']['lineno']=432;
				$pyjs['track']['lineno']=432;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['pause'] = $method;
			$pyjs['track']['lineno']=434;
			$method = $pyjs__bind_method2('unpause', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':434};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=434;
				$pyjs['track']['lineno']=438;
				if ($p['bool']($p['getattr'](self, '_sound'))) {
					$pyjs['track']['lineno']=439;
					if ($p['bool']($p['getattr'](self, '_pause'))) {
						$pyjs['track']['lineno']=440;
						self['_sound']['_sound_object']['play']();
						$pyjs['track']['lineno']=441;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_pause', false) : $p['setattr'](self, '_pause', false); 
					}
				}
				$pyjs['track']['lineno']=442;
				$pyjs['track']['lineno']=442;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['unpause'] = $method;
			$pyjs['track']['lineno']=444;
			$method = $pyjs__bind_method2('set_volume', function(volume) {
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
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul4,$mul3;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':444};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=444;
				$pyjs['track']['lineno']=448;
				if ($p['bool'](($p['cmp'](volume, 0.0) == -1))) {
					$pyjs['track']['lineno']=449;
					volume = 0.0;
				}
				else if ($p['bool'](($p['cmp'](volume, 1.0) == 1))) {
					$pyjs['track']['lineno']=451;
					volume = 1.0;
				}
				$pyjs['track']['lineno']=452;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_volume', volume) : $p['setattr'](self, '_volume', volume); 
				$pyjs['track']['lineno']=453;
				if ($p['bool']($p['getattr'](self, '_sound'))) {
					$pyjs['track']['lineno']=454;
					self['_sound']['_sound_object']['setVolume']((typeof ($mul3=$p['getattr'](self, '_volume'))==typeof ($mul4=$p['getattr']($p['getattr']($p['getattr'](self, '_sound'), '_sound_object'), '_volume')) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)));
				}
				else {
					$pyjs['track']['lineno']=456;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_volume', 1.0) : $p['setattr'](self, '_volume', 1.0); 
				}
				$pyjs['track']['lineno']=457;
				$pyjs['track']['lineno']=457;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['volume']]);
			$cls_definition['set_volume'] = $method;
			$pyjs['track']['lineno']=459;
			$method = $pyjs__bind_method2('get_volume', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':459};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=459;
				$pyjs['track']['lineno']=463;
				$pyjs['track']['lineno']=463;
				var $pyjs__ret = $p['getattr'](self, '_volume');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_volume'] = $method;
			$pyjs['track']['lineno']=465;
			$method = $pyjs__bind_method2('get_busy', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':465};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=465;
				$pyjs['track']['lineno']=469;
				$pyjs['track']['lineno']=469;
				var $pyjs__ret = $p['getattr'](self, '_active');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_busy'] = $method;
			$pyjs['track']['lineno']=471;
			$method = $pyjs__bind_method2('get_sound', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':471};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=471;
				$pyjs['track']['lineno']=475;
				$pyjs['track']['lineno']=475;
				var $pyjs__ret = $p['getattr'](self, '_sound');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['get_sound'] = $method;
			$pyjs['track']['lineno']=477;
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
					if (self.prototype['__md5__'] !== 'd89ac73d679ec87173134a1ca0fa40d2') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $lambda7,$lambda6,$lambda5,$lambda4,$lambda8;
				$pyjs['track']={'module':'pyjsdl.mixer', 'lineno':477};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.mixer';
				$pyjs['track']['lineno']=477;
				$pyjs['track']['lineno']=481;
				var 				$lambda4 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':481};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=481;
					$pyjs['track']['lineno']=481;
					$pyjs['track']['lineno']=481;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('fadeout', $lambda4) : $p['setattr'](self, 'fadeout', $lambda4); 
				$pyjs['track']['lineno']=482;
				var 				$lambda5 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':482};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=482;
					$pyjs['track']['lineno']=482;
					$pyjs['track']['lineno']=482;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('queue', $lambda5) : $p['setattr'](self, 'queue', $lambda5); 
				$pyjs['track']['lineno']=483;
				var 				$lambda6 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':483};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=483;
					$pyjs['track']['lineno']=483;
					$pyjs['track']['lineno']=483;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda6['__name__'] = '$lambda6';

				$lambda6['__bind_type__'] = 0;
				$lambda6['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_queue', $lambda6) : $p['setattr'](self, 'get_queue', $lambda6); 
				$pyjs['track']['lineno']=484;
				var 				$lambda7 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':484};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=484;
					$pyjs['track']['lineno']=484;
					$pyjs['track']['lineno']=484;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda7['__name__'] = '$lambda7';

				$lambda7['__bind_type__'] = 0;
				$lambda7['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('set_endevent', $lambda7) : $p['setattr'](self, 'set_endevent', $lambda7); 
				$pyjs['track']['lineno']=485;
				var 				$lambda8 = function() {
					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					$pyjs['track']={'module':'pyjsdl.mixer','lineno':485};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.mixer';
					$pyjs['track']['lineno']=485;
					$pyjs['track']['lineno']=485;
					$pyjs['track']['lineno']=485;
					var $pyjs__ret = $constant_int_0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				$lambda8['__name__'] = '$lambda8';

				$lambda8['__bind_type__'] = 0;
				$lambda8['__args__'] = ['arg',null];
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('get_endevent', $lambda8) : $p['setattr'](self, 'get_endevent', $lambda8); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_nonimplemented_methods'] = $method;
			$pyjs['track']['lineno']=341;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Channel', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.mixer */


/* end module: pyjsdl.mixer */


/*
PYJS_DEPS: ['pyjsobj.Audio', 'pyjsobj', 'time.Time', 'time']
*/
