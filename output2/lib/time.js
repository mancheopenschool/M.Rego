/* start module: time */
$pyjs['loaded_modules']['time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['time']['__was_initialized__']) return $pyjs['loaded_modules']['time'];
	var $m = $pyjs['loaded_modules']['time'];
	$m['__repr__'] = function() { return '<module: time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'time';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'time.py, line 1:\n    # Check http://docs.python.org/library/time.html';
		$m.__track_lines__[3] = 'time.py, line 3:\n    from __pyjamas__ import JS, debugger';
		$m.__track_lines__[4] = 'time.py, line 4:\n    import math';
		$m.__track_lines__[6] = 'time.py, line 6:\n    timezone = JS("60 * (new Date(new Date()[\'getFullYear\'](), 0, 1))[\'getTimezoneOffset\']()")';
		$m.__track_lines__[7] = 'time.py, line 7:\n    altzone = JS("60 * (new Date(new Date()[\'getFullYear\'](), 6, 1))[\'getTimezoneOffset\']()")';
		$m.__track_lines__[8] = 'time.py, line 8:\n    if altzone > timezone:';
		$m.__track_lines__[10] = 'time.py, line 10:\n    d = timezone';
		$m.__track_lines__[11] = 'time.py, line 11:\n    timezone = altzone';
		$m.__track_lines__[12] = 'time.py, line 12:\n    altzone = d';
		$m.__track_lines__[13] = 'time.py, line 13:\n    _dst = timezone - altzone';
		$m.__track_lines__[14] = 'time.py, line 14:\n    d = JS("(new Date(new Date()[\'getFullYear\'](), 0, 1))")';
		$m.__track_lines__[15] = 'time.py, line 15:\n    d = str(d.toLocaleString()).split()[-1]';
		$m.__track_lines__[16] = "time.py, line 16:\n    if d[0] == '(':";
		$m.__track_lines__[17] = 'time.py, line 17:\n    d = d[1:-1]';
		$m.__track_lines__[18] = 'time.py, line 18:\n    tzname = (d, None)';
		$m.__track_lines__[19] = 'time.py, line 19:\n    del d';
		$m.__track_lines__[21] = 'time.py, line 21:\n    __c__days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]';
		$m.__track_lines__[22] = 'time.py, line 22:\n    __c__months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]';
		$m.__track_lines__[25] = 'time.py, line 25:\n    def time():';
		$m.__track_lines__[26] = 'time.py, line 26:\n    return float(JS("new Date()[\'getTime\']() / 1000.0"))';
		$m.__track_lines__[28] = 'time.py, line 28:\n    class struct_time(object):';
		$m.__track_lines__[29] = 'time.py, line 29:\n    n_fields = 9';
		$m.__track_lines__[30] = 'time.py, line 30:\n    n_sequence_fields = 9';
		$m.__track_lines__[31] = 'time.py, line 31:\n    n_unnamed_fields = 0';
		$m.__track_lines__[32] = 'time.py, line 32:\n    tm_year = None';
		$m.__track_lines__[33] = 'time.py, line 33:\n    tm_mon = None';
		$m.__track_lines__[34] = 'time.py, line 34:\n    tm_mday = None';
		$m.__track_lines__[35] = 'time.py, line 35:\n    tm_hour = None';
		$m.__track_lines__[36] = 'time.py, line 36:\n    tm_min = None';
		$m.__track_lines__[37] = 'time.py, line 37:\n    tm_sec = None';
		$m.__track_lines__[38] = 'time.py, line 38:\n    tm_wday = None';
		$m.__track_lines__[39] = 'time.py, line 39:\n    tm_yday = None';
		$m.__track_lines__[40] = 'time.py, line 40:\n    tm_isdst = None';
		$m.__track_lines__[42] = 'time.py, line 42:\n    def __init__(self, ttuple=None):';
		$m.__track_lines__[43] = 'time.py, line 43:\n    if not ttuple is None:';
		$m.__track_lines__[44] = 'time.py, line 44:\n    self.tm_year = ttuple[0]';
		$m.__track_lines__[45] = 'time.py, line 45:\n    self.tm_mon = ttuple[1]';
		$m.__track_lines__[46] = 'time.py, line 46:\n    self.tm_mday = ttuple[2]';
		$m.__track_lines__[47] = 'time.py, line 47:\n    self.tm_hour = ttuple[3]';
		$m.__track_lines__[48] = 'time.py, line 48:\n    self.tm_min = ttuple[4]';
		$m.__track_lines__[49] = 'time.py, line 49:\n    self.tm_sec = ttuple[5]';
		$m.__track_lines__[50] = 'time.py, line 50:\n    self.tm_wday = ttuple[6]';
		$m.__track_lines__[51] = 'time.py, line 51:\n    self.tm_yday = ttuple[7]';
		$m.__track_lines__[52] = 'time.py, line 52:\n    self.tm_isdst = ttuple[8]';
		$m.__track_lines__[54] = 'time.py, line 54:\n    def __str__(self):';
		$m.__track_lines__[55] = 'time.py, line 55:\n    t = (';
		$m.__track_lines__[66] = 'time.py, line 66:\n    return t.__str__()';
		$m.__track_lines__[68] = 'time.py, line 68:\n    def __repr__(self):';
		$m.__track_lines__[69] = 'time.py, line 69:\n    return self.__str__()';
		$m.__track_lines__[71] = 'time.py, line 71:\n    def __getitem__(self, idx):';
		$m.__track_lines__[72] = 'time.py, line 72:\n    return [self.tm_year, self.tm_mon, self.tm_mday,';
		$m.__track_lines__[76] = 'time.py, line 76:\n    def __getslice__(self, lower, upper):';
		$m.__track_lines__[77] = 'time.py, line 77:\n    return [self.tm_year, self.tm_mon, self.tm_mday,';
		$m.__track_lines__[81] = 'time.py, line 81:\n    def gmtime(t=None):';
		$m.__track_lines__[82] = 'time.py, line 82:\n    if t is None:';
		$m.__track_lines__[83] = 'time.py, line 83:\n    t = time()';
		$m.__track_lines__[84] = 'time.py, line 84:\n    date = JS("new Date(@{{t}}*1000)")';
		$m.__track_lines__[85] = 'time.py, line 85:\n    tm = struct_time()';
		$m.__track_lines__[86] = 'time.py, line 86:\n    tm_year = tm.tm_year = int(date.getUTCFullYear())';
		$m.__track_lines__[87] = 'time.py, line 87:\n    tm.tm_mon = int(date.getUTCMonth()) + 1';
		$m.__track_lines__[88] = 'time.py, line 88:\n    tm.tm_mday = int(date.getUTCDate())';
		$m.__track_lines__[89] = 'time.py, line 89:\n    tm.tm_hour = int(date.getUTCHours())';
		$m.__track_lines__[90] = 'time.py, line 90:\n    tm.tm_min = int(date.getUTCMinutes())';
		$m.__track_lines__[91] = 'time.py, line 91:\n    tm.tm_sec = int(date.getUTCSeconds())';
		$m.__track_lines__[92] = 'time.py, line 92:\n    tm.tm_wday = (int(date.getUTCDay()) + 6) % 7';
		$m.__track_lines__[93] = 'time.py, line 93:\n    tm.tm_isdst = 0';
		$m.__track_lines__[94] = 'time.py, line 94:\n    startOfYear = JS("new Date(\'Jan 1 \'+ @{{tm_year}} +\' GMT+0000\')")';
		$m.__track_lines__[95] = 'time.py, line 95:\n    tm.tm_yday = 1 + int((t - startOfYear.getTime()/1000)/86400)';
		$m.__track_lines__[96] = 'time.py, line 96:\n    return tm';
		$m.__track_lines__[98] = 'time.py, line 98:\n    def localtime(t=None):';
		$m.__track_lines__[99] = 'time.py, line 99:\n    if t is None:';
		$m.__track_lines__[100] = 'time.py, line 100:\n    t = time()';
		$m.__track_lines__[101] = 'time.py, line 101:\n    date = JS("new Date(@{{t}}*1000)")';
		$m.__track_lines__[102] = 'time.py, line 102:\n    dateOffset = date.getTimezoneOffset()';
		$m.__track_lines__[103] = 'time.py, line 103:\n    tm = struct_time()';
		$m.__track_lines__[104] = 'time.py, line 104:\n    tm_year = tm.tm_year = int(date.getFullYear())';
		$m.__track_lines__[105] = 'time.py, line 105:\n    tm_mon = tm.tm_mon = int(date.getMonth()) + 1';
		$m.__track_lines__[106] = 'time.py, line 106:\n    tm_mday = tm.tm_mday = int(date.getDate())';
		$m.__track_lines__[107] = 'time.py, line 107:\n    tm.tm_hour = int(date.getHours())';
		$m.__track_lines__[108] = 'time.py, line 108:\n    tm.tm_min = int(date.getMinutes())';
		$m.__track_lines__[109] = 'time.py, line 109:\n    tm.tm_sec = int(date.getSeconds())';
		$m.__track_lines__[110] = 'time.py, line 110:\n    tm.tm_wday = (int(date.getDay()) + 6) % 7';
		$m.__track_lines__[111] = 'time.py, line 111:\n    tm.tm_isdst = 0 if timezone == 60*date.getTimezoneOffset() else 1';
		$m.__track_lines__[112] = 'time.py, line 112:\n    startOfYear = JS("new Date(@{{tm_year}},0,1)") # local time';
		$m.__track_lines__[113] = 'time.py, line 113:\n    startOfYearOffset = startOfYear.getTimezoneOffset()';
		$m.__track_lines__[114] = 'time.py, line 114:\n    startOfDay = JS("new Date(@{{tm_year}},@{{tm_mon}}-1,@{{tm_mday}})")';
		$m.__track_lines__[115] = 'time.py, line 115:\n    dt = float(startOfDay.getTime() - startOfYear.getTime())/1000';
		$m.__track_lines__[116] = 'time.py, line 116:\n    dt = dt + 60 * (startOfYearOffset - dateOffset)';
		$m.__track_lines__[117] = 'time.py, line 117:\n    tm.tm_yday = 1 + int(dt/86400.0)';
		$m.__track_lines__[118] = 'time.py, line 118:\n    return tm';
		$m.__track_lines__[120] = 'time.py, line 120:\n    def mktime(t):';
		$m.__track_lines__[123] = 'time.py, line 123:\n    tm_year = t[0]';
		$m.__track_lines__[124] = 'time.py, line 124:\n    tm_mon = t[1] - 1';
		$m.__track_lines__[125] = 'time.py, line 125:\n    tm_mday = t[2]';
		$m.__track_lines__[126] = 'time.py, line 126:\n    tm_hour = t[3]';
		$m.__track_lines__[127] = 'time.py, line 127:\n    tm_min = t[4]';
		$m.__track_lines__[128] = 'time.py, line 128:\n    tm_sec = t[5]';
		$m.__track_lines__[129] = 'time.py, line 129:\n    date = JS("new Date(@{{tm_year}}, @{{tm_mon}}, @{{tm_mday}}, @{{tm_hour}}, @{{tm_min}}, @{{tm_sec}})") # local time';
		$m.__track_lines__[130] = 'time.py, line 130:\n    utc = JS("Date[\'UTC\'](@{{tm_year}}, @{{tm_mon}}, @{{tm_mday}}, @{{tm_hour}}, @{{tm_min}}, @{{tm_sec}})")/1000';
		$m.__track_lines__[131] = 'time.py, line 131:\n    ts = date.getTime() / 1000';
		$m.__track_lines__[132] = 'time.py, line 132:\n    if t[8] == 0:';
		$m.__track_lines__[133] = 'time.py, line 133:\n    if ts - utc == timezone:';
		$m.__track_lines__[134] = 'time.py, line 134:\n    return ts';
		$m.__track_lines__[135] = 'time.py, line 135:\n    return ts + _dst';
		$m.__track_lines__[136] = 'time.py, line 136:\n    return ts';
		$m.__track_lines__[138] = 'time.py, line 138:\n    def strftime(fmt, t=None):';
		$m.__track_lines__[139] = 'time.py, line 139:\n    if t is None:';
		$m.__track_lines__[140] = 'time.py, line 140:\n    t = localtime()';
		$m.__track_lines__[142] = 'time.py, line 142:\n    if not isinstance(t, struct_time) and len(t) != 9:';
		$m.__track_lines__[143] = "time.py, line 143:\n    raise TypeError('argument must be 9-item sequence, not float')";
		$m.__track_lines__[144] = 'time.py, line 144:\n    tm_year = t[0]';
		$m.__track_lines__[145] = 'time.py, line 145:\n    tm_mon = t[1]';
		$m.__track_lines__[146] = 'time.py, line 146:\n    tm_mday = t[2]';
		$m.__track_lines__[147] = 'time.py, line 147:\n    tm_hour = t[3]';
		$m.__track_lines__[148] = 'time.py, line 148:\n    tm_min = t[4]';
		$m.__track_lines__[149] = 'time.py, line 149:\n    tm_sec = t[5]';
		$m.__track_lines__[150] = 'time.py, line 150:\n    tm_wday = t[6]';
		$m.__track_lines__[151] = 'time.py, line 151:\n    tm_yday = t[7]';
		$m.__track_lines__[152] = 'time.py, line 152:\n    date = JS("new Date(@{{tm_year}}, @{{tm_mon}} - 1, @{{tm_mday}}, @{{tm_hour}}, @{{tm_min}}, @{{tm_sec}})")';
		$m.__track_lines__[153] = 'time.py, line 153:\n    startOfYear = JS("new Date(@{{tm_year}},0,1)")';
		$m.__track_lines__[154] = 'time.py, line 154:\n    firstMonday = 1 - ((startOfYear.getDay() + 6) % 7) + 7';
		$m.__track_lines__[155] = 'time.py, line 155:\n    firstWeek = JS("new Date(@{{tm_year}},0,@{{firstMonday}})")';
		$m.__track_lines__[156] = 'time.py, line 156:\n    weekNo = date.getTime() - firstWeek.getTime()';
		$m.__track_lines__[157] = 'time.py, line 157:\n    if weekNo < 0:';
		$m.__track_lines__[158] = 'time.py, line 158:\n    weekNo = 0';
		$m.__track_lines__[160] = 'time.py, line 160:\n    weekNo = 1 + int(weekNo/604800000)';
		$m.__track_lines__[162] = 'time.py, line 162:\n    def format(c):';
		$m.__track_lines__[163] = "time.py, line 163:\n    if c == '%':";
		$m.__track_lines__[164] = "time.py, line 164:\n    return '%'";
		$m.__track_lines__[166] = "time.py, line 166:\n    return format('A')[:3]";
		$m.__track_lines__[168] = "time.py, line 168:\n    return __c__days[format('w')]";
		$m.__track_lines__[170] = "time.py, line 170:\n    return format('B')[:3]";
		$m.__track_lines__[172] = 'time.py, line 172:\n    return __c__months[tm_mon-1]';
		$m.__track_lines__[174] = 'time.py, line 174:\n    return date.toLocaleString()';
		$m.__track_lines__[176] = 'time.py, line 176:\n    return "%02d" % tm_mday';
		$m.__track_lines__[178] = 'time.py, line 178:\n    return "%02d" % tm_hour';
		$m.__track_lines__[180] = 'time.py, line 180:\n    return "%02d" % (tm_hour % 12)';
		$m.__track_lines__[182] = 'time.py, line 182:\n    return "%03d" % tm_yday';
		$m.__track_lines__[184] = 'time.py, line 184:\n    return "%02d" % tm_mon';
		$m.__track_lines__[186] = 'time.py, line 186:\n    return "%02d" % tm_min';
		$m.__track_lines__[188] = 'time.py, line 188:\n    if tm_hour < 12:';
		$m.__track_lines__[189] = 'time.py, line 189:\n    return "AM"';
		$m.__track_lines__[190] = 'time.py, line 190:\n    return "PM"';
		$m.__track_lines__[192] = 'time.py, line 192:\n    return "%02d" % tm_sec';
		$m.__track_lines__[194] = 'time.py, line 194:\n    raise NotImplementedError("strftime format character \'%s\'" % c)';
		$m.__track_lines__[196] = 'time.py, line 196:\n    return "%d" % ((tm_wday+1) % 7)';
		$m.__track_lines__[198] = 'time.py, line 198:\n    return "%d" % weekNo';
		$m.__track_lines__[200] = 'time.py, line 200:\n    return "%s" % date.toLocaleDateString()';
		$m.__track_lines__[202] = 'time.py, line 202:\n    return "%s" % date.toLocaleTimeString()';
		$m.__track_lines__[204] = 'time.py, line 204:\n    return "%02d" % (tm_year % 100)';
		$m.__track_lines__[206] = 'time.py, line 206:\n    return "%04d" % tm_year';
		$m.__track_lines__[208] = 'time.py, line 208:\n    raise NotImplementedError("strftime format character \'%s\'" % c)';
		$m.__track_lines__[209] = 'time.py, line 209:\n    return "%" + c';
		$m.__track_lines__[210] = "time.py, line 210:\n    result = ''";
		$m.__track_lines__[211] = 'time.py, line 211:\n    remainder = fmt';
		$m.__track_lines__[212] = 'time.py, line 212:\n    re_pct = JS("/([^%]*)%(.)(.*)/")';
		$m.__track_lines__[213] = 'time.py, line 213:\n    JS("var a, fmtChar;")';
		$m.__track_lines__[214] = 'time.py, line 214:\n    while remainder:';
		$m.__track_lines__[215] = 'time.py, line 215:\n    JS("""';
		$m.__track_lines__[229] = 'time.py, line 229:\n    return str(result)';
		$m.__track_lines__[231] = 'time.py, line 231:\n    def asctime(t=None):';
		$m.__track_lines__[232] = 'time.py, line 232:\n    if t is None:';
		$m.__track_lines__[233] = 'time.py, line 233:\n    t = localtime()';
		$m.__track_lines__[234] = 'time.py, line 234:\n    return "%s %s %02d %02d:%02d:%02d %04d" % (__c__days[(t[6]+1)%7][:3], __c__months[t[1]-1], t[2], t[3], t[4], t[5], t[0])';
		$m.__track_lines__[236] = 'time.py, line 236:\n    def ctime(t=None):';
		$m.__track_lines__[237] = 'time.py, line 237:\n    return asctime(localtime(t))';
		$m.__track_lines__[242] = 'time.py, line 242:\n    JS("""';
		$m.__track_lines__[343] = 'time.py, line 343:\n    def _strptime(datestring, format):';
		$m.__track_lines__[344] = 'time.py, line 344:\n    try:';
		$m.__track_lines__[345] = 'time.py, line 345:\n    return float(JS("strptime(@{{datestring}}[\'valueOf\'](), @{{format}}[\'valueOf\']())[\'getTime\']() / 1000.0"))';
		$m.__track_lines__[347] = 'time.py, line 347:\n    raise ValueError("Invalid or unsupported values for strptime: \'%s\', \'%s\'" % (datestring, format))';
		$m.__track_lines__[349] = 'time.py, line 349:\n    def strptime(datestring, format):';
		$m.__track_lines__[350] = 'time.py, line 350:\n    try:';
		$m.__track_lines__[351] = 'time.py, line 351:\n    tt = localtime(float(JS("strptime(@{{datestring}}[\'valueOf\'](), @{{format}}[\'valueOf\']())[\'getTime\']() / 1000.0")))';
		$m.__track_lines__[352] = 'time.py, line 352:\n    tt.tm_isdst = -1';
		$m.__track_lines__[353] = 'time.py, line 353:\n    return tt';
		$m.__track_lines__[355] = 'time.py, line 355:\n    raise ValueError("Invalid or unsupported values for strptime: \'%s\', \'%s\'" % (datestring, format))';
		var $sub2,$sub1;
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
		var $constant_int_12 = new $p['int'](12);
		var $constant_int_1000 = new $p['int'](1000);
		var $constant_int_86400 = new $p['int'](86400);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_604800000 = new $p['int'](604800000);
		var $constant_int_60 = new $p['int'](60);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=3;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['math'] = $p['___import___']('math', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$m['timezone'] = 60 * (new Date(new Date()['getFullYear'](), 0, 1))['getTimezoneOffset']();
		$pyjs['track']['lineno']=7;
		$m['altzone'] = 60 * (new Date(new Date()['getFullYear'](), 6, 1))['getTimezoneOffset']();
		$pyjs['track']['lineno']=8;
		if ($p['bool'](($p['cmp']($m['altzone'], $m['timezone']) == 1))) {
			$pyjs['track']['lineno']=10;
			$m['d'] = $m['timezone'];
			$pyjs['track']['lineno']=11;
			$m['timezone'] = $m['altzone'];
			$pyjs['track']['lineno']=12;
			$m['altzone'] = $m['d'];
		}
		$pyjs['track']['lineno']=13;
		$m['_dst'] = $p['__op_sub']($sub1=$m['timezone'],$sub2=$m['altzone']);
		$pyjs['track']['lineno']=14;
		$m['d'] = (new Date(new Date()['getFullYear'](), 0, 1));
		$pyjs['track']['lineno']=15;
		$m['d'] = $p['str']($m['d']['toLocaleString']())['$$split']()['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)));
		$pyjs['track']['lineno']=16;
		if ($p['bool']($p['op_eq']($m['d']['__getitem__']($constant_int_0), '('))) {
			$pyjs['track']['lineno']=17;
			$m['d'] = $p['__getslice']($m['d'], $constant_int_1, (typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
		}
		$pyjs['track']['lineno']=18;
		$m['tzname'] = $p['tuple']([$m['d'], null]);
		$pyjs['track']['lineno']=19;
		delete $m['d'];
		$pyjs['track']['lineno']=21;
		$m['__c__days'] = $p['list'](['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
		$pyjs['track']['lineno']=22;
		$m['__c__months'] = $p['list'](['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
		$pyjs['track']['lineno']=25;
		$m['time'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);

			$pyjs['track']={'module':'time','lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=26;
			var $pyjs__ret = $p['float'](new Date()['getTime']() / 1000.0);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['time']['__name__'] = 'time';

		$m['time']['__bind_type__'] = 0;
		$m['time']['__args__'] = [null,null];
		$pyjs['track']['lineno']=28;
		$m['struct_time'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'time';
			$cls_definition['__md5__'] = '0d9d18be918958952848029778ec7f45';
			$pyjs['track']['lineno']=29;
			$cls_definition['n_fields'] = $constant_int_9;
			$pyjs['track']['lineno']=30;
			$cls_definition['n_sequence_fields'] = $constant_int_9;
			$pyjs['track']['lineno']=31;
			$cls_definition['n_unnamed_fields'] = $constant_int_0;
			$pyjs['track']['lineno']=32;
			$cls_definition['tm_year'] = null;
			$pyjs['track']['lineno']=33;
			$cls_definition['tm_mon'] = null;
			$pyjs['track']['lineno']=34;
			$cls_definition['tm_mday'] = null;
			$pyjs['track']['lineno']=35;
			$cls_definition['tm_hour'] = null;
			$pyjs['track']['lineno']=36;
			$cls_definition['tm_min'] = null;
			$pyjs['track']['lineno']=37;
			$cls_definition['tm_sec'] = null;
			$pyjs['track']['lineno']=38;
			$cls_definition['tm_wday'] = null;
			$pyjs['track']['lineno']=39;
			$cls_definition['tm_yday'] = null;
			$pyjs['track']['lineno']=40;
			$cls_definition['tm_isdst'] = null;
			$pyjs['track']['lineno']=42;
			$method = $pyjs__bind_method2('__init__', function(ttuple) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ttuple = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof ttuple == 'undefined') ttuple=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'time', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='time';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=43;
				if ($p['bool'](!$p['bool']($p['op_is'](ttuple, null)))) {
					$pyjs['track']['lineno']=44;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_year', ttuple['__getitem__']($constant_int_0)) : $p['setattr'](self, 'tm_year', ttuple['__getitem__']($constant_int_0)); 
					$pyjs['track']['lineno']=45;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_mon', ttuple['__getitem__']($constant_int_1)) : $p['setattr'](self, 'tm_mon', ttuple['__getitem__']($constant_int_1)); 
					$pyjs['track']['lineno']=46;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_mday', ttuple['__getitem__']($constant_int_2)) : $p['setattr'](self, 'tm_mday', ttuple['__getitem__']($constant_int_2)); 
					$pyjs['track']['lineno']=47;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_hour', ttuple['__getitem__']($constant_int_3)) : $p['setattr'](self, 'tm_hour', ttuple['__getitem__']($constant_int_3)); 
					$pyjs['track']['lineno']=48;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_min', ttuple['__getitem__']($constant_int_4)) : $p['setattr'](self, 'tm_min', ttuple['__getitem__']($constant_int_4)); 
					$pyjs['track']['lineno']=49;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_sec', ttuple['__getitem__']($constant_int_5)) : $p['setattr'](self, 'tm_sec', ttuple['__getitem__']($constant_int_5)); 
					$pyjs['track']['lineno']=50;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_wday', ttuple['__getitem__']($constant_int_6)) : $p['setattr'](self, 'tm_wday', ttuple['__getitem__']($constant_int_6)); 
					$pyjs['track']['lineno']=51;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_yday', ttuple['__getitem__']($constant_int_7)) : $p['setattr'](self, 'tm_yday', ttuple['__getitem__']($constant_int_7)); 
					$pyjs['track']['lineno']=52;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('tm_isdst', ttuple['__getitem__']($constant_int_8)) : $p['setattr'](self, 'tm_isdst', ttuple['__getitem__']($constant_int_8)); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ttuple', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=54;
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
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var t;
				$pyjs['track']={'module':'time', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='time';
				$pyjs['track']['lineno']=54;
				$pyjs['track']['lineno']=55;
				t = $p['tuple']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]);
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = t['__str__']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=68;
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
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'time', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='time';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=69;
				$pyjs['track']['lineno']=69;
				var $pyjs__ret = self['__str__']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=71;
			$method = $pyjs__bind_method2('__getitem__', function(idx) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					idx = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'time', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='time';
				$pyjs['track']['lineno']=71;
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=72;
				var $pyjs__ret = $p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')])['__getitem__'](idx);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['idx']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=76;
			$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					lower = arguments[1];
					upper = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0d9d18be918958952848029778ec7f45') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'time', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='time';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=77;
				var $pyjs__ret = $p['__getslice']($p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]), lower, upper);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['lower'],['upper']]);
			$cls_definition['__getslice__'] = $method;
			$pyjs['track']['lineno']=28;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('struct_time', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=81;
		$m['gmtime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $add2,$sub3,$div1,$div2,startOfYear,$add6,$add5,tm_year,$add3,tm,$assign1,$add4,$mod2,date,$mod1,$add1,$div3,$div4,$sub4;
			$pyjs['track']={'module':'time','lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=81;
			$pyjs['track']['lineno']=82;
			if ($p['bool']($p['op_is'](t, null))) {
				$pyjs['track']['lineno']=83;
				t = $m['time']();
			}
			$pyjs['track']['lineno']=84;
			date = new Date(t*1000);
			$pyjs['track']['lineno']=85;
			tm = $m['struct_time']();
			$pyjs['track']['lineno']=86;
			$assign1 = $p['int'](date['getUTCFullYear']());
			tm_year = $assign1;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_year', $assign1) : $p['setattr'](tm, 'tm_year', $assign1); 
			$pyjs['track']['lineno']=87;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mon', $p['__op_add']($add1=$p['int'](date['getUTCMonth']()),$add2=$constant_int_1)) : $p['setattr'](tm, 'tm_mon', $p['__op_add']($add1=$p['int'](date['getUTCMonth']()),$add2=$constant_int_1)); 
			$pyjs['track']['lineno']=88;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mday', $p['int'](date['getUTCDate']())) : $p['setattr'](tm, 'tm_mday', $p['int'](date['getUTCDate']())); 
			$pyjs['track']['lineno']=89;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_hour', $p['int'](date['getUTCHours']())) : $p['setattr'](tm, 'tm_hour', $p['int'](date['getUTCHours']())); 
			$pyjs['track']['lineno']=90;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_min', $p['int'](date['getUTCMinutes']())) : $p['setattr'](tm, 'tm_min', $p['int'](date['getUTCMinutes']())); 
			$pyjs['track']['lineno']=91;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_sec', $p['int'](date['getUTCSeconds']())) : $p['setattr'](tm, 'tm_sec', $p['int'](date['getUTCSeconds']())); 
			$pyjs['track']['lineno']=92;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_wday', (typeof ($mod1=$p['__op_add']($add3=$p['int'](date['getUTCDay']()),$add4=$constant_int_6))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2))) : $p['setattr'](tm, 'tm_wday', (typeof ($mod1=$p['__op_add']($add3=$p['int'](date['getUTCDay']()),$add4=$constant_int_6))==typeof ($mod2=$constant_int_7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2))); 
			$pyjs['track']['lineno']=93;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_isdst', $constant_int_0) : $p['setattr'](tm, 'tm_isdst', $constant_int_0); 
			$pyjs['track']['lineno']=94;
			startOfYear = new Date('Jan 1 '+ tm_year +' GMT+0000');
			$pyjs['track']['lineno']=95;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_yday', $p['__op_add']($add5=$constant_int_1,$add6=$p['int']((typeof ($div3=$p['__op_sub']($sub3=t,$sub4=(typeof ($div1=startOfYear['getTime']())==typeof ($div2=$constant_int_1000) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))))==typeof ($div4=$constant_int_86400) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))))) : $p['setattr'](tm, 'tm_yday', $p['__op_add']($add5=$constant_int_1,$add6=$p['int']((typeof ($div3=$p['__op_sub']($sub3=t,$sub4=(typeof ($div1=startOfYear['getTime']())==typeof ($div2=$constant_int_1000) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))))==typeof ($div4=$constant_int_86400) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))))); 
			$pyjs['track']['lineno']=96;
			$pyjs['track']['lineno']=96;
			var $pyjs__ret = tm;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['gmtime']['__name__'] = 'gmtime';

		$m['gmtime']['__bind_type__'] = 0;
		$m['gmtime']['__args__'] = [null,null,['t', null]];
		$pyjs['track']['lineno']=98;
		$m['localtime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $mod4,$mod3,$sub8,$mul3,$div7,tm,tm_mon,startOfYear,$div5,$sub7,$sub6,$sub5,startOfDay,tm_year,$div8,$add10,$add11,$add12,$add13,date,dt,$mul4,$div6,$mul2,$mul1,dateOffset,$add14,startOfYearOffset,tm_mday,$assign4,$add7,$assign3,$assign2,$add8,$add9;
			$pyjs['track']={'module':'time','lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=98;
			$pyjs['track']['lineno']=99;
			if ($p['bool']($p['op_is'](t, null))) {
				$pyjs['track']['lineno']=100;
				t = $m['time']();
			}
			$pyjs['track']['lineno']=101;
			date = new Date(t*1000);
			$pyjs['track']['lineno']=102;
			dateOffset = date['getTimezoneOffset']();
			$pyjs['track']['lineno']=103;
			tm = $m['struct_time']();
			$pyjs['track']['lineno']=104;
			$assign2 = $p['int'](date['getFullYear']());
			tm_year = $assign2;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_year', $assign2) : $p['setattr'](tm, 'tm_year', $assign2); 
			$pyjs['track']['lineno']=105;
			$assign3 = $p['__op_add']($add7=$p['int'](date['getMonth']()),$add8=$constant_int_1);
			tm_mon = $assign3;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mon', $assign3) : $p['setattr'](tm, 'tm_mon', $assign3); 
			$pyjs['track']['lineno']=106;
			$assign4 = $p['int'](date['getDate']());
			tm_mday = $assign4;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_mday', $assign4) : $p['setattr'](tm, 'tm_mday', $assign4); 
			$pyjs['track']['lineno']=107;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_hour', $p['int'](date['getHours']())) : $p['setattr'](tm, 'tm_hour', $p['int'](date['getHours']())); 
			$pyjs['track']['lineno']=108;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_min', $p['int'](date['getMinutes']())) : $p['setattr'](tm, 'tm_min', $p['int'](date['getMinutes']())); 
			$pyjs['track']['lineno']=109;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_sec', $p['int'](date['getSeconds']())) : $p['setattr'](tm, 'tm_sec', $p['int'](date['getSeconds']())); 
			$pyjs['track']['lineno']=110;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_wday', (typeof ($mod3=$p['__op_add']($add9=$p['int'](date['getDay']()),$add10=$constant_int_6))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4))) : $p['setattr'](tm, 'tm_wday', (typeof ($mod3=$p['__op_add']($add9=$p['int'](date['getDay']()),$add10=$constant_int_6))==typeof ($mod4=$constant_int_7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4))); 
			$pyjs['track']['lineno']=111;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_isdst', ($p['bool']($p['op_eq']($m['timezone'], (typeof ($mul1=$constant_int_60)==typeof ($mul2=date['getTimezoneOffset']()) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))))? ($constant_int_0) : ($constant_int_1))) : $p['setattr'](tm, 'tm_isdst', ($p['bool']($p['op_eq']($m['timezone'], (typeof ($mul1=$constant_int_60)==typeof ($mul2=date['getTimezoneOffset']()) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))))? ($constant_int_0) : ($constant_int_1))); 
			$pyjs['track']['lineno']=112;
			startOfYear = new Date(tm_year,0,1);
			$pyjs['track']['lineno']=113;
			startOfYearOffset = startOfYear['getTimezoneOffset']();
			$pyjs['track']['lineno']=114;
			startOfDay = new Date(tm_year,tm_mon-1,tm_mday);
			$pyjs['track']['lineno']=115;
			dt = (typeof ($div5=$p['float']($p['__op_sub']($sub5=startOfDay['getTime'](),$sub6=startOfYear['getTime']())))==typeof ($div6=$constant_int_1000) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			$pyjs['track']['lineno']=116;
			dt = $p['__op_add']($add11=dt,$add12=(typeof ($mul3=$constant_int_60)==typeof ($mul4=$p['__op_sub']($sub7=startOfYearOffset,$sub8=dateOffset)) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
			$pyjs['track']['lineno']=117;
			tm['__is_instance__'] && typeof tm['__setattr__'] == 'function' ? tm['__setattr__']('tm_yday', $p['__op_add']($add13=$constant_int_1,$add14=$p['int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))))) : $p['setattr'](tm, 'tm_yday', $p['__op_add']($add13=$constant_int_1,$add14=$p['int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8))))); 
			$pyjs['track']['lineno']=118;
			$pyjs['track']['lineno']=118;
			var $pyjs__ret = tm;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['localtime']['__name__'] = 'localtime';

		$m['localtime']['__bind_type__'] = 0;
		$m['localtime']['__args__'] = [null,null,['t', null]];
		$pyjs['track']['lineno']=120;
		$m['mktime'] = function(t) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $add16,utc,tm_sec,tm_hour,tm_mday,$sub10,$div10,$div11,$div12,ts,tm_year,$add15,$sub9,$div9,tm_mon,$sub12,date,$sub11,tm_min;
			$pyjs['track']={'module':'time','lineno':120};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=120;
			$pyjs['track']['lineno']=123;
			tm_year = t['__getitem__']($constant_int_0);
			$pyjs['track']['lineno']=124;
			tm_mon = $p['__op_sub']($sub9=t['__getitem__']($constant_int_1),$sub10=$constant_int_1);
			$pyjs['track']['lineno']=125;
			tm_mday = t['__getitem__']($constant_int_2);
			$pyjs['track']['lineno']=126;
			tm_hour = t['__getitem__']($constant_int_3);
			$pyjs['track']['lineno']=127;
			tm_min = t['__getitem__']($constant_int_4);
			$pyjs['track']['lineno']=128;
			tm_sec = t['__getitem__']($constant_int_5);
			$pyjs['track']['lineno']=129;
			date = new Date(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec);
			$pyjs['track']['lineno']=130;
			utc = (typeof ($div9=Date['UTC'](tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec))==typeof ($div10=$constant_int_1000) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10));
			$pyjs['track']['lineno']=131;
			ts = (typeof ($div11=date['getTime']())==typeof ($div12=$constant_int_1000) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12));
			$pyjs['track']['lineno']=132;
			if ($p['bool']($p['op_eq'](t['__getitem__']($constant_int_8), $constant_int_0))) {
				$pyjs['track']['lineno']=133;
				if ($p['bool']($p['op_eq']($p['__op_sub']($sub11=ts,$sub12=utc), $m['timezone']))) {
					$pyjs['track']['lineno']=134;
					$pyjs['track']['lineno']=134;
					var $pyjs__ret = ts;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=135;
				$pyjs['track']['lineno']=135;
				var $pyjs__ret = $p['__op_add']($add15=ts,$add16=$m['_dst']);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=136;
			$pyjs['track']['lineno']=136;
			var $pyjs__ret = ts;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['mktime']['__name__'] = 'mktime';

		$m['mktime']['__bind_type__'] = 0;
		$m['mktime']['__args__'] = [null,null,['t']];
		$pyjs['track']['lineno']=138;
		$m['strftime'] = function(fmt, t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][3][1];
			var firstMonday,tm_hour,tm_sec,tm_wday,$mod5,$mod6,result,remainder,$div14,$add20,$add22,$div13,tm_mon,startOfYear,tm_min,format,$sub13,$and1,$and2,$sub16,$sub15,$sub14,tm_year,$add17,tm_yday,date,firstWeek,$add18,$add19,tm_mday,weekNo,$add21,re_pct;
			$pyjs['track']={'module':'time','lineno':138};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=138;
			$pyjs['track']['lineno']=139;
			if ($p['bool']($p['op_is'](t, null))) {
				$pyjs['track']['lineno']=140;
				t = $m['localtime']();
			}
			else {
				$pyjs['track']['lineno']=142;
				if ($p['bool'](($p['bool']($and1=!$p['bool']($p['isinstance'](t, $m['struct_time'])))?!$p['op_eq']($p['len'](t), $constant_int_9):$and1))) {
					$pyjs['track']['lineno']=143;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['TypeError']('argument must be 9-item sequence, not float'));
				}
			}
			$pyjs['track']['lineno']=144;
			tm_year = t['__getitem__']($constant_int_0);
			$pyjs['track']['lineno']=145;
			tm_mon = t['__getitem__']($constant_int_1);
			$pyjs['track']['lineno']=146;
			tm_mday = t['__getitem__']($constant_int_2);
			$pyjs['track']['lineno']=147;
			tm_hour = t['__getitem__']($constant_int_3);
			$pyjs['track']['lineno']=148;
			tm_min = t['__getitem__']($constant_int_4);
			$pyjs['track']['lineno']=149;
			tm_sec = t['__getitem__']($constant_int_5);
			$pyjs['track']['lineno']=150;
			tm_wday = t['__getitem__']($constant_int_6);
			$pyjs['track']['lineno']=151;
			tm_yday = t['__getitem__']($constant_int_7);
			$pyjs['track']['lineno']=152;
			date = new Date(tm_year, tm_mon - 1, tm_mday, tm_hour, tm_min, tm_sec);
			$pyjs['track']['lineno']=153;
			startOfYear = new Date(tm_year,0,1);
			$pyjs['track']['lineno']=154;
			firstMonday = $p['__op_add']($add19=$p['__op_sub']($sub13=$constant_int_1,$sub14=(typeof ($mod5=$p['__op_add']($add17=startOfYear['getDay'](),$add18=$constant_int_6))==typeof ($mod6=$constant_int_7) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6))),$add20=$constant_int_7);
			$pyjs['track']['lineno']=155;
			firstWeek = new Date(tm_year,0,firstMonday);
			$pyjs['track']['lineno']=156;
			weekNo = $p['__op_sub']($sub15=date['getTime'](),$sub16=firstWeek['getTime']());
			$pyjs['track']['lineno']=157;
			if ($p['bool'](($p['cmp'](weekNo, $constant_int_0) == -1))) {
				$pyjs['track']['lineno']=158;
				weekNo = $constant_int_0;
			}
			else {
				$pyjs['track']['lineno']=160;
				weekNo = $p['__op_add']($add21=$constant_int_1,$add22=$p['int']((typeof ($div13=weekNo)==typeof ($div14=$constant_int_604800000) && typeof $div13=='number' && $div14 !== 0?
					$div13/$div14:
					$p['op_div']($div13,$div14))));
			}
			$pyjs['track']['lineno']=162;
			format = function(c) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				var $sub18,$mod11,$mod10,$mod12,$add25,$add23,$sub17,$add24,$add26,$mod7,$mod9,$mod8;
				$pyjs['track']={'module':'time','lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='time';
				$pyjs['track']['lineno']=162;
				$pyjs['track']['lineno']=163;
				if ($p['bool']($p['op_eq'](c, '%'))) {
					$pyjs['track']['lineno']=164;
					$pyjs['track']['lineno']=164;
					var $pyjs__ret = '%';
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'a'))) {
					$pyjs['track']['lineno']=166;
					$pyjs['track']['lineno']=166;
					var $pyjs__ret = $p['__getslice'](format('A'), 0, $constant_int_3);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'A'))) {
					$pyjs['track']['lineno']=168;
					$pyjs['track']['lineno']=168;
					var $pyjs__ret = $m['__c__days']['__getitem__'](format('w'));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'b'))) {
					$pyjs['track']['lineno']=170;
					$pyjs['track']['lineno']=170;
					var $pyjs__ret = $p['__getslice'](format('B'), 0, $constant_int_3);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'B'))) {
					$pyjs['track']['lineno']=172;
					$pyjs['track']['lineno']=172;
					var $pyjs__ret = $m['__c__months']['__getitem__']($p['__op_sub']($sub17=tm_mon,$sub18=$constant_int_1));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'c'))) {
					$pyjs['track']['lineno']=174;
					$pyjs['track']['lineno']=174;
					var $pyjs__ret = date['toLocaleString']();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'd'))) {
					$pyjs['track']['lineno']=176;
					$pyjs['track']['lineno']=176;
					var $pyjs__ret = $p['sprintf']('%02d', tm_mday);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'H'))) {
					$pyjs['track']['lineno']=178;
					$pyjs['track']['lineno']=178;
					var $pyjs__ret = $p['sprintf']('%02d', tm_hour);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'I'))) {
					$pyjs['track']['lineno']=180;
					$pyjs['track']['lineno']=180;
					var $pyjs__ret = $p['sprintf']('%02d', (typeof ($mod7=tm_hour)==typeof ($mod8=$constant_int_12) && typeof $mod7=='number'?
						(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
						$p['op_mod']($mod7,$mod8)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'j'))) {
					$pyjs['track']['lineno']=182;
					$pyjs['track']['lineno']=182;
					var $pyjs__ret = $p['sprintf']('%03d', tm_yday);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'm'))) {
					$pyjs['track']['lineno']=184;
					$pyjs['track']['lineno']=184;
					var $pyjs__ret = $p['sprintf']('%02d', tm_mon);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'M'))) {
					$pyjs['track']['lineno']=186;
					$pyjs['track']['lineno']=186;
					var $pyjs__ret = $p['sprintf']('%02d', tm_min);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'p'))) {
					$pyjs['track']['lineno']=188;
					if ($p['bool'](($p['cmp'](tm_hour, $constant_int_12) == -1))) {
						$pyjs['track']['lineno']=189;
						$pyjs['track']['lineno']=189;
						var $pyjs__ret = 'AM';
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					$pyjs['track']['lineno']=190;
					$pyjs['track']['lineno']=190;
					var $pyjs__ret = 'PM';
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'S'))) {
					$pyjs['track']['lineno']=192;
					$pyjs['track']['lineno']=192;
					var $pyjs__ret = $p['sprintf']('%02d', tm_sec);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'U'))) {
					$pyjs['track']['lineno']=194;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
				}
				else if ($p['bool']($p['op_eq'](c, 'w'))) {
					$pyjs['track']['lineno']=196;
					$pyjs['track']['lineno']=196;
					var $pyjs__ret = $p['sprintf']('%d', (typeof ($mod9=$p['__op_add']($add23=tm_wday,$add24=$constant_int_1))==typeof ($mod10=$constant_int_7) && typeof $mod9=='number'?
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
						$p['op_mod']($mod9,$mod10)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'W'))) {
					$pyjs['track']['lineno']=198;
					$pyjs['track']['lineno']=198;
					var $pyjs__ret = $p['sprintf']('%d', weekNo);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'x'))) {
					$pyjs['track']['lineno']=200;
					$pyjs['track']['lineno']=200;
					var $pyjs__ret = $p['sprintf']('%s', date['toLocaleDateString']());
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'X'))) {
					$pyjs['track']['lineno']=202;
					$pyjs['track']['lineno']=202;
					var $pyjs__ret = $p['sprintf']('%s', date['toLocaleTimeString']());
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'y'))) {
					$pyjs['track']['lineno']=204;
					$pyjs['track']['lineno']=204;
					var $pyjs__ret = $p['sprintf']('%02d', (typeof ($mod11=tm_year)==typeof ($mod12=$constant_int_100) && typeof $mod11=='number'?
						(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
						$p['op_mod']($mod11,$mod12)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'Y'))) {
					$pyjs['track']['lineno']=206;
					$pyjs['track']['lineno']=206;
					var $pyjs__ret = $p['sprintf']('%04d', tm_year);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ($p['bool']($p['op_eq'](c, 'Z'))) {
					$pyjs['track']['lineno']=208;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['NotImplementedError']($p['sprintf']("strftime format character '%s'", c)));
				}
				$pyjs['track']['lineno']=209;
				$pyjs['track']['lineno']=209;
				var $pyjs__ret = $p['__op_add']($add25='%',$add26=c);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			format['__name__'] = 'format';

			format['__bind_type__'] = 0;
			format['__args__'] = [null,null,['c']];
			$pyjs['track']['lineno']=210;
			result = '';
			$pyjs['track']['lineno']=211;
			remainder = fmt;
			$pyjs['track']['lineno']=212;
			re_pct = /([^%]*)%(.)(.*)/;
			$pyjs['track']['lineno']=213;
var a, fmtChar;
			$pyjs['track']['lineno']=214;
			while ($p['bool'](remainder)) {
				$pyjs['track']['lineno']=215;

        a = re_pct['exec'](remainder);
        if (!a) {
            result += remainder;
            remainder = false;
        } else {
            result += a[1];
            fmtChar = a[2];
            remainder = a[3];
            if (typeof fmtChar != 'undefined') {
                result += format(fmtChar);
            }
        }
        
			}
			$pyjs['track']['lineno']=229;
			$pyjs['track']['lineno']=229;
			var $pyjs__ret = $p['str'](result);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['strftime']['__name__'] = 'strftime';

		$m['strftime']['__bind_type__'] = 0;
		$m['strftime']['__args__'] = [null,null,['fmt'],['t', null]];
		$pyjs['track']['lineno']=231;
		$m['asctime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
			var $add28,$sub19,$mod13,$mod14,$sub20,$add27;
			$pyjs['track']={'module':'time','lineno':231};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=231;
			$pyjs['track']['lineno']=232;
			if ($p['bool']($p['op_is'](t, null))) {
				$pyjs['track']['lineno']=233;
				t = $m['localtime']();
			}
			$pyjs['track']['lineno']=234;
			$pyjs['track']['lineno']=234;
			var $pyjs__ret = $p['sprintf']('%s %s %02d %02d:%02d:%02d %04d', $p['tuple']([$p['__getslice']($m['__c__days']['__getitem__']((typeof ($mod13=$p['__op_add']($add27=t['__getitem__']($constant_int_6),$add28=$constant_int_1))==typeof ($mod14=$constant_int_7) && typeof $mod13=='number'?
				(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
				$p['op_mod']($mod13,$mod14))), 0, $constant_int_3), $m['__c__months']['__getitem__']($p['__op_sub']($sub19=t['__getitem__']($constant_int_1),$sub20=$constant_int_1)), t['__getitem__']($constant_int_2), t['__getitem__']($constant_int_3), t['__getitem__']($constant_int_4), t['__getitem__']($constant_int_5), t['__getitem__']($constant_int_0)]));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['asctime']['__name__'] = 'asctime';

		$m['asctime']['__bind_type__'] = 0;
		$m['asctime']['__args__'] = [null,null,['t', null]];
		$pyjs['track']['lineno']=236;
		$m['ctime'] = function(t) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 1, arguments['length']);
			if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];

			$pyjs['track']={'module':'time','lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=236;
			$pyjs['track']['lineno']=237;
			$pyjs['track']['lineno']=237;
			var $pyjs__ret = $m['asctime']($m['localtime'](t));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['ctime']['__name__'] = 'ctime';

		$m['ctime']['__bind_type__'] = 0;
		$m['ctime']['__args__'] = [null,null,['t', null]];
		$pyjs['track']['lineno']=242;

var _DATE_FORMAT_REGXES = {
    'Y': new RegExp('^-?[0-9]{4}'),
    'y': new RegExp('^-?[0-9]{2}'),
    'd': new RegExp('^[0-9]{2}'),
    'm': new RegExp('^[0-9]{2}'),
    'H': new RegExp('^[0-9]{2}'),
    'M': new RegExp('^[0-9]{2}'),
    'S': new RegExp('^[0-9]{2}')
}

/*
 * _parseData does the actual parsing job needed by `strptime`
 */
function _parseDate(datestring, format) {
    var parsed = {};
    for (var i1=0,i2=0;i1<format['length'];i1++,i2++) {
        var c1 = format[i1];
        var c2 = datestring[i2];
        if (c1 == '%') {
            c1 = format[++i1];
            var data = _DATE_FORMAT_REGXES[c1]['exec'](datestring['substring'](i2));
            if (!data['length']) {
                return null;
            }
            data = data[0];
            i2 += data['length']-1;
            var value = parseInt(data, 10);
            if (isNaN(value)) {
                return null;
            }
            parsed[c1] = value;
            continue;
        }
        if (c1 != c2) {
            return null;
        }
    }
    return parsed;
}

/*
 * basic implementation of strptime. The only recognized formats
 * defined in _DATE_FORMAT_REGEXES (i['e']. %Y, %d, %m, %H, %M)
 */
function strptime(datestring, format) {
    var parsed = _parseDate(datestring, format);
    if (!parsed) {
        return null;
    }
    // create initial date (!!! year=0 means 1900 !!!)
    var date = new Date(0, 0, 1, 0, 0);
    date['setFullYear'](0); // reset to year 0
    if (typeof parsed['Y'] != "undefined") {
        date['setFullYear'](parsed['Y']);
    }
    if (typeof parsed['y'] != "undefined") {
        date['setFullYear'](2000+parsed['y']);
    }
    if (typeof parsed['m'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 12) {
            return null;
        }
        // !!! month indexes start at 0 in javascript !!!
        date['setMonth'](parsed['m'] - 1);
    }
    if (typeof parsed['d'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 31) {
            return null;
        }
        date['setDate'](parsed['d']);
    }
    if (typeof parsed['H'] != "undefined") {
        if (parsed['H'] < 0 || parsed['H'] > 23) {
            return null;
        }
        date['setHours'](parsed['H']);
    }
    if (typeof parsed['M'] != "undefined") {
        if (parsed['M'] < 0 || parsed['M'] > 59) {
            return null;
        }
        date['setMinutes'](parsed['M']);
    }
    if (typeof parsed['S'] != "undefined") {
        if (parsed['S'] < 0 || parsed['S'] > 59) {
            return null;
        }
        date['setSeconds'](parsed['S']);
    }
    // new Date()['setFullYear'](2010,01,31) returns March 3
    if (typeof parsed['m'] != "undefined" && date['getMonth']() != parsed['m']-1) {
        // date['getMonth']() and parsed['m'] don't correspond
        return null;
    }
    return date;
};

		$pyjs['track']['lineno']=343;
		$m['_strptime'] = function(datestring, format) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $pyjs_try_err;
			$pyjs['track']={'module':'time','lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=343;
			$pyjs['track']['lineno']=344;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				$pyjs['track']['lineno']=345;
				$pyjs['track']['lineno']=345;
				var $pyjs__ret = $p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0);
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
				$pyjs['track']['module']='time';
				if (true) {
					$pyjs['track']['lineno']=347;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['_strptime']['__name__'] = '_strptime';

		$m['_strptime']['__bind_type__'] = 0;
		$m['_strptime']['__args__'] = [null,null,['datestring'],['format']];
		$pyjs['track']['lineno']=349;
		$m['strptime'] = function(datestring, format) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var tt,$pyjs_try_err;
			$pyjs['track']={'module':'time','lineno':349};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=349;
			$pyjs['track']['lineno']=350;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				$pyjs['track']['lineno']=351;
				tt = $m['localtime']($p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0));
				$pyjs['track']['lineno']=352;
				tt['__is_instance__'] && typeof tt['__setattr__'] == 'function' ? tt['__setattr__']('tm_isdst', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))) : $p['setattr'](tt, 'tm_isdst', (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))); 
				$pyjs['track']['lineno']=353;
				$pyjs['track']['lineno']=353;
				var $pyjs__ret = tt;
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
				$pyjs['track']['module']='time';
				if (true) {
					$pyjs['track']['lineno']=355;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['ValueError']($p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", $p['tuple']([datestring, format]))));
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['strptime']['__name__'] = 'strptime';

		$m['strptime']['__bind_type__'] = 0;
		$m['strptime']['__args__'] = [null,null,['datestring'],['format']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end time */


/* end module: time */


/*
PYJS_DEPS: ['math']
*/
