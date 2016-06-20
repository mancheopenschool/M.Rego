/* start module: pyjsdl.pyjsbitset */
$pyjs['loaded_modules']['pyjsdl.pyjsbitset'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsbitset']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsbitset'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsbitset'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsbitset>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsbitset';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['pyjsbitset'] = $pyjs['loaded_modules']['pyjsdl.pyjsbitset'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.pyjsbitset.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[28] = 'pyjsdl.pyjsbitset.py, line 28:\n    import math';
		$m.__track_lines__[29] = 'pyjsdl.pyjsbitset.py, line 29:\n    from pyjsarray import PyUint8Array, PyUint16Array, PyUint32Array';
		$m.__track_lines__[32] = 'pyjsdl.pyjsbitset.py, line 32:\n    class BitSet:';
		$m.__track_lines__[38] = 'pyjsdl.pyjsbitset.py, line 38:\n    __bit = 8';
		$m.__track_lines__[39] = 'pyjsdl.pyjsbitset.py, line 39:\n    __bitmask = None';
		$m.__track_lines__[40] = 'pyjsdl.pyjsbitset.py, line 40:\n    __typedarray = PyUint8Array';
		$m.__track_lines__[42] = 'pyjsdl.pyjsbitset.py, line 42:\n    def __init__(self, width=None):';
		$m.__track_lines__[43] = 'pyjsdl.pyjsbitset.py, line 43:\n    if not self.__class__.__bitmask:';
		$m.__track_lines__[44] = 'pyjsdl.pyjsbitset.py, line 44:\n    self.__class__.__bitmask = dict([(self.__class__.__bit-i-1,1<<i) for i in range(self.__class__.__bit-1,-1,-1)])';
		$m.__track_lines__[45] = 'pyjsdl.pyjsbitset.py, line 45:\n    self.__class__.__bitmask[self.__class__.__bit-1] = int(self.__class__.__bitmask[self.__class__.__bit-1])      #pyjs [1<<0] = 1L';
		$m.__track_lines__[46] = 'pyjsdl.pyjsbitset.py, line 46:\n    if width:';
		$m.__track_lines__[47] = 'pyjsdl.pyjsbitset.py, line 47:\n    self.__width = abs(width)';
		$m.__track_lines__[49] = 'pyjsdl.pyjsbitset.py, line 49:\n    self.__width = self.__bit';
		$m.__track_lines__[50] = 'pyjsdl.pyjsbitset.py, line 50:\n    self.__data = self.__typedarray( math.ceil(self.__width/(self.__bit*1.0)) )';
		$m.__track_lines__[52] = 'pyjsdl.pyjsbitset.py, line 52:\n    def __str__(self):';
		$m.__track_lines__[56] = 'pyjsdl.pyjsbitset.py, line 56:\n    return "%s" % self.__class__';
		$m.__track_lines__[58] = 'pyjsdl.pyjsbitset.py, line 58:\n    def __repr__(self):';
		$m.__track_lines__[62] = 'pyjsdl.pyjsbitset.py, line 62:\n    setBit = []';
		$m.__track_lines__[63] = 'pyjsdl.pyjsbitset.py, line 63:\n    for index in xrange(self.__width):';
		$m.__track_lines__[64] = 'pyjsdl.pyjsbitset.py, line 64:\n    if self.get(index):';
		$m.__track_lines__[65] = 'pyjsdl.pyjsbitset.py, line 65:\n    setBit.append(str(index))';
		$m.__track_lines__[66] = 'pyjsdl.pyjsbitset.py, line 66:\n    return "{" + ", ".join(setBit) + "}"';
		$m.__track_lines__[68] = 'pyjsdl.pyjsbitset.py, line 68:\n    def __getitem__(self, index):';
		$m.__track_lines__[72] = 'pyjsdl.pyjsbitset.py, line 72:\n    return self.get(index)';
		$m.__track_lines__[74] = 'pyjsdl.pyjsbitset.py, line 74:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[78] = 'pyjsdl.pyjsbitset.py, line 78:\n    self.set(index, value)';
		$m.__track_lines__[80] = 'pyjsdl.pyjsbitset.py, line 80:\n    def __len__(self):';
		$m.__track_lines__[84] = 'pyjsdl.pyjsbitset.py, line 84:\n    for index in xrange(self.__width-1, -1, -1):';
		$m.__track_lines__[85] = 'pyjsdl.pyjsbitset.py, line 85:\n    if self.get(index):';
		$m.__track_lines__[86] = 'pyjsdl.pyjsbitset.py, line 86:\n    break';
		$m.__track_lines__[87] = 'pyjsdl.pyjsbitset.py, line 87:\n    return index+1';
		$m.__track_lines__[89] = 'pyjsdl.pyjsbitset.py, line 89:\n    def __iter__(self):';
		$m.__track_lines__[93] = 'pyjsdl.pyjsbitset.py, line 93:\n    index = 0';
		$m.__track_lines__[94] = 'pyjsdl.pyjsbitset.py, line 94:\n    while index < self.__width:';
		$m.__track_lines__[95] = 'pyjsdl.pyjsbitset.py, line 95:\n    yield self.get(index)';
		$m.__track_lines__[96] = 'pyjsdl.pyjsbitset.py, line 96:\n    index += 1';
		$m.__track_lines__[98] = 'pyjsdl.pyjsbitset.py, line 98:\n    def get(self, index, toIndex=None):';
		$m.__track_lines__[103] = 'pyjsdl.pyjsbitset.py, line 103:\n    if index > self.__width-1:';
		$m.__track_lines__[104] = 'pyjsdl.pyjsbitset.py, line 104:\n    if not toIndex:';
		$m.__track_lines__[105] = 'pyjsdl.pyjsbitset.py, line 105:\n    return False';
		$m.__track_lines__[107] = 'pyjsdl.pyjsbitset.py, line 107:\n    size = toIndex-index';
		$m.__track_lines__[108] = 'pyjsdl.pyjsbitset.py, line 108:\n    if size > 0:';
		$m.__track_lines__[109] = 'pyjsdl.pyjsbitset.py, line 109:\n    return self.__class__(size)';
		$m.__track_lines__[111] = 'pyjsdl.pyjsbitset.py, line 111:\n    return None';
		$m.__track_lines__[112] = 'pyjsdl.pyjsbitset.py, line 112:\n    if toIndex is None:';
		$m.__track_lines__[113] = 'pyjsdl.pyjsbitset.py, line 113:\n    return bool( self.__data[ int(index/self.__bit) ] & self.__bitmask[ index%self.__bit ] )';
		$m.__track_lines__[115] = 'pyjsdl.pyjsbitset.py, line 115:\n    size = toIndex-index';
		$m.__track_lines__[116] = 'pyjsdl.pyjsbitset.py, line 116:\n    if size > 0:';
		$m.__track_lines__[117] = 'pyjsdl.pyjsbitset.py, line 117:\n    bitset = self.__class__(size)';
		$m.__track_lines__[118] = 'pyjsdl.pyjsbitset.py, line 118:\n    ix = 0';
		$m.__track_lines__[119] = 'pyjsdl.pyjsbitset.py, line 119:\n    if toIndex > self.__width:';
		$m.__track_lines__[120] = 'pyjsdl.pyjsbitset.py, line 120:\n    toIndex = self.__width';
		$m.__track_lines__[121] = 'pyjsdl.pyjsbitset.py, line 121:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[122] = 'pyjsdl.pyjsbitset.py, line 122:\n    bitset.set(ix, bool( self.__data[ int(i/self.__bit) ] & self.__bitmask[ i%self.__bit ] ))';
		$m.__track_lines__[123] = 'pyjsdl.pyjsbitset.py, line 123:\n    ix += 1';
		$m.__track_lines__[124] = 'pyjsdl.pyjsbitset.py, line 124:\n    return bitset';
		$m.__track_lines__[126] = 'pyjsdl.pyjsbitset.py, line 126:\n    return None';
		$m.__track_lines__[128] = 'pyjsdl.pyjsbitset.py, line 128:\n    def set(self, index, value=1):';
		$m.__track_lines__[133] = 'pyjsdl.pyjsbitset.py, line 133:\n    if index > self.__width-1:';
		$m.__track_lines__[134] = 'pyjsdl.pyjsbitset.py, line 134:\n    if value:';
		$m.__track_lines__[135] = 'pyjsdl.pyjsbitset.py, line 135:\n    self.resize(index+1)';
		$m.__track_lines__[137] = 'pyjsdl.pyjsbitset.py, line 137:\n    return';
		$m.__track_lines__[138] = 'pyjsdl.pyjsbitset.py, line 138:\n    if value:';
		$m.__track_lines__[139] = 'pyjsdl.pyjsbitset.py, line 139:\n    self.__data[ int(index/self.__bit) ] = self.__data[ int(index/self.__bit) ] | self.__bitmask[ index%self.__bit ]';
		$m.__track_lines__[142] = 'pyjsdl.pyjsbitset.py, line 142:\n    self.__data[ int(index/self.__bit) ] = self.__data[ int(index/self.__bit) ] & ~(self.__bitmask[ index%self.__bit ])';
		$m.__track_lines__[144] = 'pyjsdl.pyjsbitset.py, line 144:\n    return None';
		$m.__track_lines__[146] = 'pyjsdl.pyjsbitset.py, line 146:\n    def fill(self, index=None, toIndex=None):';
		$m.__track_lines__[151] = 'pyjsdl.pyjsbitset.py, line 151:\n    if index is None and toIndex is None:';
		$m.__track_lines__[152] = 'pyjsdl.pyjsbitset.py, line 152:\n    for i in xrange(0, self.__width):';
		$m.__track_lines__[153] = 'pyjsdl.pyjsbitset.py, line 153:\n    self.set(i, 1)';
		$m.__track_lines__[155] = 'pyjsdl.pyjsbitset.py, line 155:\n    if toIndex is None:';
		$m.__track_lines__[156] = 'pyjsdl.pyjsbitset.py, line 156:\n    self.set(index, 1)';
		$m.__track_lines__[158] = 'pyjsdl.pyjsbitset.py, line 158:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[159] = 'pyjsdl.pyjsbitset.py, line 159:\n    self.set(i, 1)';
		$m.__track_lines__[161] = 'pyjsdl.pyjsbitset.py, line 161:\n    def clear(self, index=None, toIndex=None):';
		$m.__track_lines__[166] = 'pyjsdl.pyjsbitset.py, line 166:\n    if index is None:';
		$m.__track_lines__[167] = 'pyjsdl.pyjsbitset.py, line 167:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[168] = 'pyjsdl.pyjsbitset.py, line 168:\n    self.__data[i] = 0';
		$m.__track_lines__[170] = 'pyjsdl.pyjsbitset.py, line 170:\n    if toIndex is None:';
		$m.__track_lines__[171] = 'pyjsdl.pyjsbitset.py, line 171:\n    self.set(index, 0)';
		$m.__track_lines__[173] = 'pyjsdl.pyjsbitset.py, line 173:\n    if index == 0 and toIndex == self.__width:';
		$m.__track_lines__[174] = 'pyjsdl.pyjsbitset.py, line 174:\n    for dat in xrange(len(self.__data)):';
		$m.__track_lines__[175] = 'pyjsdl.pyjsbitset.py, line 175:\n    self.__data[dat] = 0';
		$m.__track_lines__[177] = 'pyjsdl.pyjsbitset.py, line 177:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[178] = 'pyjsdl.pyjsbitset.py, line 178:\n    self.set(i, 0)';
		$m.__track_lines__[180] = 'pyjsdl.pyjsbitset.py, line 180:\n    def flip(self, index, toIndex=None):';
		$m.__track_lines__[185] = 'pyjsdl.pyjsbitset.py, line 185:\n    if toIndex is None:';
		$m.__track_lines__[186] = 'pyjsdl.pyjsbitset.py, line 186:\n    self.set(index, not self.get(index))';
		$m.__track_lines__[188] = 'pyjsdl.pyjsbitset.py, line 188:\n    if toIndex > self.__width:';
		$m.__track_lines__[189] = 'pyjsdl.pyjsbitset.py, line 189:\n    self.resize(toIndex)';
		$m.__track_lines__[190] = 'pyjsdl.pyjsbitset.py, line 190:\n    toIndex = self.__width';
		$m.__track_lines__[191] = 'pyjsdl.pyjsbitset.py, line 191:\n    if index == 0 and toIndex == self.__width:';
		$m.__track_lines__[192] = 'pyjsdl.pyjsbitset.py, line 192:\n    for dat in xrange(len(self.__data)):';
		$m.__track_lines__[193] = 'pyjsdl.pyjsbitset.py, line 193:\n    self.__data[dat] = ~self.__data[dat]';
		$m.__track_lines__[195] = 'pyjsdl.pyjsbitset.py, line 195:\n    for i in xrange(index, toIndex):';
		$m.__track_lines__[196] = 'pyjsdl.pyjsbitset.py, line 196:\n    self.set(i, not self.get(i))';
		$m.__track_lines__[198] = 'pyjsdl.pyjsbitset.py, line 198:\n    def cardinality(self):';
		$m.__track_lines__[202] = 'pyjsdl.pyjsbitset.py, line 202:\n    count = 0';
		$m.__track_lines__[203] = 'pyjsdl.pyjsbitset.py, line 203:\n    for bit in xrange(self.__width):';
		$m.__track_lines__[204] = 'pyjsdl.pyjsbitset.py, line 204:\n    if self.get(bit):';
		$m.__track_lines__[205] = 'pyjsdl.pyjsbitset.py, line 205:\n    count += 1';
		$m.__track_lines__[206] = 'pyjsdl.pyjsbitset.py, line 206:\n    return count';
		$m.__track_lines__[208] = 'pyjsdl.pyjsbitset.py, line 208:\n    def intersects(self, bitset):';
		$m.__track_lines__[213] = 'pyjsdl.pyjsbitset.py, line 213:\n    for dat in xrange(len(bitset.__data)):';
		$m.__track_lines__[214] = 'pyjsdl.pyjsbitset.py, line 214:\n    if bitset.__data[dat] & self.__data[dat]:';
		$m.__track_lines__[215] = 'pyjsdl.pyjsbitset.py, line 215:\n    return True';
		$m.__track_lines__[216] = 'pyjsdl.pyjsbitset.py, line 216:\n    return False';
		$m.__track_lines__[218] = 'pyjsdl.pyjsbitset.py, line 218:\n    def andSet(self, bitset):';
		$m.__track_lines__[222] = 'pyjsdl.pyjsbitset.py, line 222:\n    data = min(len(self.__data), len(bitset.__data))';
		$m.__track_lines__[223] = 'pyjsdl.pyjsbitset.py, line 223:\n    for dat in xrange(data):';
		$m.__track_lines__[224] = 'pyjsdl.pyjsbitset.py, line 224:\n    self.__data[dat] = self.__data[dat] & bitset.__data[dat]';
		$m.__track_lines__[228] = 'pyjsdl.pyjsbitset.py, line 228:\n    def orSet(self, bitset):';
		$m.__track_lines__[232] = 'pyjsdl.pyjsbitset.py, line 232:\n    data = min(len(self.__data), len(bitset.__data))';
		$m.__track_lines__[233] = 'pyjsdl.pyjsbitset.py, line 233:\n    for dat in xrange(data):';
		$m.__track_lines__[234] = 'pyjsdl.pyjsbitset.py, line 234:\n    self.__data[dat] = self.__data[dat] | bitset.__data[dat]';
		$m.__track_lines__[237] = 'pyjsdl.pyjsbitset.py, line 237:\n    def xorSet(self, bitset):';
		$m.__track_lines__[241] = 'pyjsdl.pyjsbitset.py, line 241:\n    data = min(len(self.__data), len(bitset.__data))';
		$m.__track_lines__[242] = 'pyjsdl.pyjsbitset.py, line 242:\n    for dat in xrange(data):';
		$m.__track_lines__[243] = 'pyjsdl.pyjsbitset.py, line 243:\n    self.__data[dat] = self.__data[dat] ^ bitset.__data[dat]';
		$m.__track_lines__[246] = 'pyjsdl.pyjsbitset.py, line 246:\n    def resize(self, width):';
		$m.__track_lines__[250] = 'pyjsdl.pyjsbitset.py, line 250:\n    if width > self.__width:';
		$m.__track_lines__[251] = 'pyjsdl.pyjsbitset.py, line 251:\n    self.__width = width';
		$m.__track_lines__[252] = 'pyjsdl.pyjsbitset.py, line 252:\n    if self.__width > len(self.__data) * self.__bit:';
		$m.__track_lines__[253] = 'pyjsdl.pyjsbitset.py, line 253:\n    array = self.__typedarray( math.ceil(self.__width/(self.__bit*1.0)) )';
		$m.__track_lines__[254] = 'pyjsdl.pyjsbitset.py, line 254:\n    array.set(self.__data)';
		$m.__track_lines__[255] = 'pyjsdl.pyjsbitset.py, line 255:\n    self.__data = array';
		$m.__track_lines__[257] = 'pyjsdl.pyjsbitset.py, line 257:\n    if width < len(self):';
		$m.__track_lines__[258] = 'pyjsdl.pyjsbitset.py, line 258:\n    width = len(self)';
		$m.__track_lines__[259] = 'pyjsdl.pyjsbitset.py, line 259:\n    self.__width = width';
		$m.__track_lines__[260] = 'pyjsdl.pyjsbitset.py, line 260:\n    if self.__width <= len(self.__data) * self.__bit - self.__bit:';
		$m.__track_lines__[261] = 'pyjsdl.pyjsbitset.py, line 261:\n    array = self.__typedarray( math.ceil(self.__width/(self.__bit*1.0)) )';
		$m.__track_lines__[262] = 'pyjsdl.pyjsbitset.py, line 262:\n    array.set(self.__data.subarray(0,math.ceil(self.__width/(self.__bit*1.0))))';
		$m.__track_lines__[263] = 'pyjsdl.pyjsbitset.py, line 263:\n    self.__data = array';
		$m.__track_lines__[265] = 'pyjsdl.pyjsbitset.py, line 265:\n    def size(self):';
		$m.__track_lines__[269] = 'pyjsdl.pyjsbitset.py, line 269:\n    return len(self.__data) * self.__bit';
		$m.__track_lines__[271] = 'pyjsdl.pyjsbitset.py, line 271:\n    def isEmpty(self):';
		$m.__track_lines__[276] = 'pyjsdl.pyjsbitset.py, line 276:\n    for data in self.__data:';
		$m.__track_lines__[277] = 'pyjsdl.pyjsbitset.py, line 277:\n    if data:';
		$m.__track_lines__[278] = 'pyjsdl.pyjsbitset.py, line 278:\n    return False';
		$m.__track_lines__[279] = 'pyjsdl.pyjsbitset.py, line 279:\n    return True';
		$m.__track_lines__[281] = 'pyjsdl.pyjsbitset.py, line 281:\n    def clone(self):';
		$m.__track_lines__[285] = 'pyjsdl.pyjsbitset.py, line 285:\n    new_bitset = self.__class__(1)';
		$m.__track_lines__[286] = 'pyjsdl.pyjsbitset.py, line 286:\n    data = self.__typedarray(self.__data)';
		$m.__track_lines__[287] = 'pyjsdl.pyjsbitset.py, line 287:\n    new_bitset.__data = data';
		$m.__track_lines__[288] = 'pyjsdl.pyjsbitset.py, line 288:\n    new_bitset.__width = self.__width';
		$m.__track_lines__[289] = 'pyjsdl.pyjsbitset.py, line 289:\n    return new_bitset';
		$m.__track_lines__[292] = 'pyjsdl.pyjsbitset.py, line 292:\n    class BitSet16(BitSet):';
		$m.__track_lines__[296] = 'pyjsdl.pyjsbitset.py, line 296:\n    __bit = 16';
		$m.__track_lines__[297] = 'pyjsdl.pyjsbitset.py, line 297:\n    __bitmask = None';
		$m.__track_lines__[298] = 'pyjsdl.pyjsbitset.py, line 298:\n    __typedarray = PyUint16Array';
		$m.__track_lines__[300] = 'pyjsdl.pyjsbitset.py, line 300:\n    def __init__(self, width=None):';
		$m.__track_lines__[301] = 'pyjsdl.pyjsbitset.py, line 301:\n    BitSet.__init__(self, width)';
		$m.__track_lines__[304] = 'pyjsdl.pyjsbitset.py, line 304:\n    class BitSet32(BitSet):';
		$m.__track_lines__[308] = 'pyjsdl.pyjsbitset.py, line 308:\n    __bit = 32';
		$m.__track_lines__[309] = 'pyjsdl.pyjsbitset.py, line 309:\n    __bitmask = None';
		$m.__track_lines__[310] = 'pyjsdl.pyjsbitset.py, line 310:\n    __typedarray = PyUint32Array';
		$m.__track_lines__[312] = 'pyjsdl.pyjsbitset.py, line 312:\n    def __init__(self, width=None):';
		$m.__track_lines__[313] = 'pyjsdl.pyjsbitset.py, line 313:\n    BitSet.__init__(self, width)';

		var $constant_int_8 = new $p['int'](8);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_0 = new $p['int'](0);
		var $constant_int_16 = new $p['int'](16);
		$pyjs['track']['module']='pyjsdl.pyjsbitset';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=28;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['math'] = $p['___import___']('math', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=29;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyUint8Array'] = $p['___import___']('pyjsarray.PyUint8Array', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyUint16Array'] = $p['___import___']('pyjsarray.PyUint16Array', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['PyUint32Array'] = $p['___import___']('pyjsarray.PyUint32Array', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=32;
		$m['BitSet'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsbitset';
			$cls_definition['__md5__'] = '67097e4f27f1319bfdbb2cb30bfe31e4';
			$pyjs['track']['lineno']=38;
			$cls_definition['__bit'] = $constant_int_8;
			$pyjs['track']['lineno']=39;
			$cls_definition['__bitmask'] = null;
			$pyjs['track']['lineno']=40;
			$cls_definition['__typedarray'] = $m['PyUint8Array'];
			$pyjs['track']['lineno']=42;
			$method = $pyjs__bind_method2('__init__', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
				var $sub10,$sub9,$sub8,$div2,$div1,$sub7,$mul2,$mul1;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=43;
				if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')))) {
					$pyjs['track']['lineno']=44;
					$p['getattr'](self, '__class__')['__is_instance__'] && typeof $p['getattr'](self, '__class__')['__setattr__'] == 'function' ? $p['getattr'](self, '__class__')['__setattr__']('__bitmask', $p['dict'](function(){
						var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$sub3,$sub2,$sub1,$sub4,$sub6,$sub5,$iter1_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = $p['range']($p['__op_sub']($sub1=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub2=$constant_int_1), (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)), (typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						i = $iter1_nextval['$nextval'];
						$collcomp1['append']($p['tuple']([$p['__op_sub']($sub5=$p['__op_sub']($sub3=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub4=i),$sub6=$constant_int_1), $p['op_bitshiftleft']($constant_int_1,i)]));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsbitset';

	return $collcomp1;}())) : $p['setattr']($p['getattr'](self, '__class__'), '__bitmask', $p['dict'](function(){
						var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$sub3,$sub2,$sub1,$sub4,$sub6,$sub5,$iter1_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = $p['range']($p['__op_sub']($sub1=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub2=$constant_int_1), (typeof ($usub1=$constant_int_1)=='number'?
						-$usub1:
						$p['op_usub']($usub1)), (typeof ($usub2=$constant_int_1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						i = $iter1_nextval['$nextval'];
						$collcomp1['append']($p['tuple']([$p['__op_sub']($sub5=$p['__op_sub']($sub3=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub4=i),$sub6=$constant_int_1), $p['op_bitshiftleft']($constant_int_1,i)]));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsbitset';

	return $collcomp1;}())); 
					$pyjs['track']['lineno']=45;
					$p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__setitem__']($p['__op_sub']($sub9=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub10=$constant_int_1), $p['int']($p['getattr']($p['getattr'](self, '__class__'), '__bitmask')['__getitem__']($p['__op_sub']($sub7=$p['getattr']($p['getattr'](self, '__class__'), '__bit'),$sub8=$constant_int_1))));
				}
				$pyjs['track']['lineno']=46;
				if ($p['bool'](width)) {
					$pyjs['track']['lineno']=47;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', $p['abs'](width)) : $p['setattr'](self, '__width', $p['abs'](width)); 
				}
				else {
					$pyjs['track']['lineno']=49;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', $p['getattr'](self, '__bit')) : $p['setattr'](self, '__width', $p['getattr'](self, '__bit')); 
				}
				$pyjs['track']['lineno']=50;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', self['__typedarray']($m['math']['ceil']((typeof ($div1=$p['getattr'](self, '__width'))==typeof ($div2=(typeof ($mul1=$p['getattr'](self, '__bit'))==typeof ($mul2=1.0) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))))) : $p['setattr'](self, '__data', self['__typedarray']($m['math']['ceil']((typeof ($div1=$p['getattr'](self, '__width'))==typeof ($div2=(typeof ($mul1=$p['getattr'](self, '__bit'))==typeof ($mul2=1.0) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2))) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=52;
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
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=56;
				var $pyjs__ret = $p['sprintf']('%s', $p['getattr'](self, '__class__'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=58;
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
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$iter2_nextval,$iter2_type,$iter2_iter,$add2,$add3,$iter2_idx,$add1,$add4,$pyjs__trackstack_size_1,$iter2_array,setBit;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=62;
				setBit = $p['list']([]);
				$pyjs['track']['lineno']=63;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['xrange']($p['getattr'](self, '__width'));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					index = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=64;
					if ($p['bool'](self['get'](index))) {
						$pyjs['track']['lineno']=65;
						setBit['append']($p['str'](index));
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = $p['__op_add']($add3=$p['__op_add']($add1='{',$add2=', '['join'](setBit)),$add4='}');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('__getitem__', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=72;
				var $pyjs__ret = self['get'](index);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=74;
			$method = $pyjs__bind_method2('__setitem__', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=74;
				$pyjs['track']['lineno']=78;
				self['set'](index, value);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=80;
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
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$iter3_idx,$sub12,$iter3_type,$add5,$add6,$iter3_iter,$iter3_array,$sub11,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=80;
				$pyjs['track']['lineno']=84;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $p['xrange']($p['__op_sub']($sub11=$p['getattr'](self, '__width'),$sub12=$constant_int_1), (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3)), (typeof ($usub4=$constant_int_1)=='number'?
					-$usub4:
					$p['op_usub']($usub4)));
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					index = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=85;
					if ($p['bool'](self['get'](index))) {
						$pyjs['track']['lineno']=86;
						break;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=87;
				var $pyjs__ret = $p['__op_add']($add5=index,$add6=$constant_int_1);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=89;
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
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$add10,$add7,$add8,$add9;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
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
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
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
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				var $pyjs__trackstack_size_0 = $pyjs['trackstack']['length'];
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
								sys['save_exception_stack']();
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_0) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_0);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsbitset','lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsbitset';
					$pyjs['track']['lineno']=89;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=93;
						index = $constant_int_0;
						$pyjs['track']['lineno']=94;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state['splice'](1, $generator_state['length']-1);
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '__width')) == -1)));$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=95;
								$pyjs['track']['lineno']=95;
								$yield_value = self['get'](index);
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								$yielding = true;
								$generator_state[1] = 1;
								return $yield_value;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[1] = -1;
									throw $exc;
								}
								$pyjs['track']['lineno']=96;
								index = $p['__op_add']($add9=index,$add10=$constant_int_1);
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
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('get', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var ix,$mod3,$mod4,$mod1,$iter4_type,$mod2,$iter4_iter,size,$sub18,$sub13,$sub17,$sub16,$sub15,$sub14,bitset,$add12,$div3,$div6,$div4,$div5,i,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array,$add11;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=103;
				if ($p['bool'](($p['cmp'](index, $p['__op_sub']($sub13=$p['getattr'](self, '__width'),$sub14=$constant_int_1)) == 1))) {
					$pyjs['track']['lineno']=104;
					if ($p['bool'](!$p['bool'](toIndex))) {
						$pyjs['track']['lineno']=105;
						$pyjs['track']['lineno']=105;
						var $pyjs__ret = false;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=107;
						size = $p['__op_sub']($sub15=toIndex,$sub16=index);
						$pyjs['track']['lineno']=108;
						if ($p['bool'](($p['cmp'](size, $constant_int_0) == 1))) {
							$pyjs['track']['lineno']=109;
							$pyjs['track']['lineno']=109;
							var $pyjs__ret = self['__class__'](size);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
						else {
							$pyjs['track']['lineno']=111;
							$pyjs['track']['lineno']=111;
							var $pyjs__ret = null;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
				}
				$pyjs['track']['lineno']=112;
				if ($p['bool']($p['op_is'](toIndex, null))) {
					$pyjs['track']['lineno']=113;
					$pyjs['track']['lineno']=113;
					var $pyjs__ret = $p['bool']($p['op_bitand2']($p['getattr'](self, '__data')['__getitem__']($p['int']((typeof ($div3=index)==typeof ($div4=$p['getattr'](self, '__bit')) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)))), $p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod1=index)==typeof ($mod2=$p['getattr'](self, '__bit')) && typeof $mod1=='number'?
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
						$p['op_mod']($mod1,$mod2)))));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=115;
					size = $p['__op_sub']($sub17=toIndex,$sub18=index);
					$pyjs['track']['lineno']=116;
					if ($p['bool'](($p['cmp'](size, $constant_int_0) == 1))) {
						$pyjs['track']['lineno']=117;
						bitset = self['__class__'](size);
						$pyjs['track']['lineno']=118;
						ix = $constant_int_0;
						$pyjs['track']['lineno']=119;
						if ($p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1))) {
							$pyjs['track']['lineno']=120;
							toIndex = $p['getattr'](self, '__width');
						}
						$pyjs['track']['lineno']=121;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter4_iter = $p['xrange'](index, toIndex);
						$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
						while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
							i = $iter4_nextval['$nextval'];
							$pyjs['track']['lineno']=122;
							bitset['set'](ix, $p['bool']($p['op_bitand2']($p['getattr'](self, '__data')['__getitem__']($p['int']((typeof ($div5=i)==typeof ($div6=$p['getattr'](self, '__bit')) && typeof $div5=='number' && $div6 !== 0?
								$div5/$div6:
								$p['op_div']($div5,$div6)))), $p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod3=i)==typeof ($mod4=$p['getattr'](self, '__bit')) && typeof $mod3=='number'?
								(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
								$p['op_mod']($mod3,$mod4))))));
							$pyjs['track']['lineno']=123;
							ix = $p['__op_add']($add11=ix,$add12=$constant_int_1);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsbitset';
						$pyjs['track']['lineno']=124;
						$pyjs['track']['lineno']=124;
						var $pyjs__ret = bitset;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=126;
						$pyjs['track']['lineno']=126;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
			$cls_definition['get'] = $method;
			$pyjs['track']['lineno']=128;
			$method = $pyjs__bind_method2('set', function(index, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
				var $mod8,$sub19,$div14,$div10,$sub20,$div11,$add14,$div8,$mod6,$div12,$mod7,$add13,$div9,$mod5,$div13,$div7;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':128};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=128;
				$pyjs['track']['lineno']=133;
				if ($p['bool'](($p['cmp'](index, $p['__op_sub']($sub19=$p['getattr'](self, '__width'),$sub20=$constant_int_1)) == 1))) {
					$pyjs['track']['lineno']=134;
					if ($p['bool'](value)) {
						$pyjs['track']['lineno']=135;
						self['resize']($p['__op_add']($add13=index,$add14=$constant_int_1));
					}
					else {
						$pyjs['track']['lineno']=137;
						$pyjs['track']['lineno']=137;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['track']['lineno']=138;
				if ($p['bool'](value)) {
					$pyjs['track']['lineno']=139;
					$p['getattr'](self, '__data')['__setitem__']($p['int']((typeof ($div9=index)==typeof ($div10=$p['getattr'](self, '__bit')) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10))), $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__']($p['int']((typeof ($div7=index)==typeof ($div8=$p['getattr'](self, '__bit')) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)))), $p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod5=index)==typeof ($mod6=$p['getattr'](self, '__bit')) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6)))));
				}
				else {
					$pyjs['track']['lineno']=142;
					$p['getattr'](self, '__data')['__setitem__']($p['int']((typeof ($div13=index)==typeof ($div14=$p['getattr'](self, '__bit')) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14))), $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__']($p['int']((typeof ($div11=index)==typeof ($div12=$p['getattr'](self, '__bit')) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12)))), $p['op_invert']($p['getattr'](self, '__bitmask')['__getitem__']((typeof ($mod7=index)==typeof ($mod8=$p['getattr'](self, '__bit')) && typeof $mod7=='number'?
						(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
						$p['op_mod']($mod7,$mod8))))));
				}
				$pyjs['track']['lineno']=144;
				$pyjs['track']['lineno']=144;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value', $constant_int_1]]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=146;
			$method = $pyjs__bind_method2('fill', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var $iter5_nextval,$iter5_idx,$iter6_idx,i,$and1,$pyjs__trackstack_size_1,$iter6_type,$iter6_array,$iter5_iter,$iter5_array,$iter5_type,$iter6_iter,$and2,$iter6_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=151;
				if ($p['bool'](($p['bool']($and1=$p['op_is'](index, null))?$p['op_is'](toIndex, null):$and1))) {
					$pyjs['track']['lineno']=152;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter5_iter = $p['xrange']($constant_int_0, $p['getattr'](self, '__width'));
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						i = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=153;
						self['set'](i, $constant_int_1);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsbitset';
				}
				else {
					$pyjs['track']['lineno']=155;
					if ($p['bool']($p['op_is'](toIndex, null))) {
						$pyjs['track']['lineno']=156;
						self['set'](index, $constant_int_1);
					}
					else {
						$pyjs['track']['lineno']=158;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter6_iter = $p['xrange'](index, toIndex);
						$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
						while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
							i = $iter6_nextval['$nextval'];
							$pyjs['track']['lineno']=159;
							self['set'](i, $constant_int_1);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsbitset';
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=161;
			$method = $pyjs__bind_method2('clear', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var $iter8_iter,$iter9_iter,$iter9_nextval,$iter9_idx,$iter7_type,$iter9_type,$iter8_idx,$iter7_iter,$iter8_type,$and3,$and4,dat,$iter8_nextval,$iter7_idx,$iter7_nextval,i,$iter7_array,$iter8_array,$pyjs__trackstack_size_1,$iter9_array;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=161;
				$pyjs['track']['lineno']=166;
				if ($p['bool']($p['op_is'](index, null))) {
					$pyjs['track']['lineno']=167;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						i = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=168;
						$p['getattr'](self, '__data')['__setitem__'](i, $constant_int_0);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsbitset';
				}
				else {
					$pyjs['track']['lineno']=170;
					if ($p['bool']($p['op_is'](toIndex, null))) {
						$pyjs['track']['lineno']=171;
						self['set'](index, $constant_int_0);
					}
					else {
						$pyjs['track']['lineno']=173;
						if ($p['bool'](($p['bool']($and3=$p['op_eq'](index, $constant_int_0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and3))) {
							$pyjs['track']['lineno']=174;
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter8_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
							while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
								dat = $iter8_nextval['$nextval'];
								$pyjs['track']['lineno']=175;
								$p['getattr'](self, '__data')['__setitem__'](dat, $constant_int_0);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsbitset';
						}
						else {
							$pyjs['track']['lineno']=177;
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter9_iter = $p['xrange'](index, toIndex);
							$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
							while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
								i = $iter9_nextval['$nextval'];
								$pyjs['track']['lineno']=178;
								self['set'](i, $constant_int_0);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsbitset';
						}
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=180;
			$method = $pyjs__bind_method2('flip', function(index, toIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					toIndex = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
				var $iter11_nextval,$iter10_nextval,i,$iter11_iter,$iter11_type,$and5,$and6,$iter11_array,dat,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter11_idx,$iter10_idx;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':180};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=180;
				$pyjs['track']['lineno']=185;
				if ($p['bool']($p['op_is'](toIndex, null))) {
					$pyjs['track']['lineno']=186;
					self['set'](index, !$p['bool'](self['get'](index)));
				}
				else {
					$pyjs['track']['lineno']=188;
					if ($p['bool'](($p['cmp'](toIndex, $p['getattr'](self, '__width')) == 1))) {
						$pyjs['track']['lineno']=189;
						self['resize'](toIndex);
						$pyjs['track']['lineno']=190;
						toIndex = $p['getattr'](self, '__width');
					}
					$pyjs['track']['lineno']=191;
					if ($p['bool'](($p['bool']($and5=$p['op_eq'](index, $constant_int_0))?$p['op_eq'](toIndex, $p['getattr'](self, '__width')):$and5))) {
						$pyjs['track']['lineno']=192;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter10_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
						$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
						while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
							dat = $iter10_nextval['$nextval'];
							$pyjs['track']['lineno']=193;
							$p['getattr'](self, '__data')['__setitem__'](dat, $p['op_invert']($p['getattr'](self, '__data')['__getitem__'](dat)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsbitset';
					}
					else {
						$pyjs['track']['lineno']=195;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter11_iter = $p['xrange'](index, toIndex);
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							i = $iter11_nextval['$nextval'];
							$pyjs['track']['lineno']=196;
							self['set'](i, !$p['bool'](self['get'](i)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsbitset';
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
			$cls_definition['flip'] = $method;
			$pyjs['track']['lineno']=198;
			$method = $pyjs__bind_method2('cardinality', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var count,$iter12_type,$iter12_array,$iter12_iter,$add15,$add16,$pyjs__trackstack_size_1,bit,$iter12_idx,$iter12_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':198};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=202;
				count = $constant_int_0;
				$pyjs['track']['lineno']=203;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter12_iter = $p['xrange']($p['getattr'](self, '__width'));
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					bit = $iter12_nextval['$nextval'];
					$pyjs['track']['lineno']=204;
					if ($p['bool'](self['get'](bit))) {
						$pyjs['track']['lineno']=205;
						count = $p['__op_add']($add15=count,$add16=$constant_int_1);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=206;
				$pyjs['track']['lineno']=206;
				var $pyjs__ret = count;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['cardinality'] = $method;
			$pyjs['track']['lineno']=208;
			$method = $pyjs__bind_method2('intersects', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_nextval,$iter13_iter,$iter13_type,dat,$pyjs__trackstack_size_1,$iter13_array,$iter13_idx;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':208};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=208;
				$pyjs['track']['lineno']=213;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter13_iter = $p['xrange']($p['len']($p['getattr'](bitset, '__data')));
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					dat = $iter13_nextval['$nextval'];
					$pyjs['track']['lineno']=214;
					if ($p['bool']($p['op_bitand2']($p['getattr'](bitset, '__data')['__getitem__'](dat), $p['getattr'](self, '__data')['__getitem__'](dat)))) {
						$pyjs['track']['lineno']=215;
						$pyjs['track']['lineno']=215;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=216;
				$pyjs['track']['lineno']=216;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['intersects'] = $method;
			$pyjs['track']['lineno']=218;
			$method = $pyjs__bind_method2('andSet', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter14_type,dat,$iter14_iter,$pyjs__trackstack_size_1,data,$iter14_idx,$iter14_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':218};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=218;
				$pyjs['track']['lineno']=222;
				data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
				$pyjs['track']['lineno']=223;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter14_iter = $p['xrange'](data);
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					dat = $iter14_nextval['$nextval'];
					$pyjs['track']['lineno']=224;
					$p['getattr'](self, '__data')['__setitem__'](dat, $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__'](dat), $p['getattr'](bitset, '__data')['__getitem__'](dat)));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['andSet'] = $method;
			$pyjs['track']['lineno']=228;
			$method = $pyjs__bind_method2('orSet', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter15_iter,$iter15_array,$iter15_idx,dat,$pyjs__trackstack_size_1,$iter15_nextval,$iter15_type,data;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':228};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=228;
				$pyjs['track']['lineno']=232;
				data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
				$pyjs['track']['lineno']=233;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter15_iter = $p['xrange'](data);
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					dat = $iter15_nextval['$nextval'];
					$pyjs['track']['lineno']=234;
					$p['getattr'](self, '__data')['__setitem__'](dat, $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__'](dat), $p['getattr'](bitset, '__data')['__getitem__'](dat)));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['orSet'] = $method;
			$pyjs['track']['lineno']=237;
			$method = $pyjs__bind_method2('xorSet', function(bitset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					bitset = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter16_array,dat,$iter16_type,data,$iter16_idx,$pyjs__trackstack_size_1,$iter16_nextval,$iter16_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':237};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=237;
				$pyjs['track']['lineno']=241;
				data = $p['min']($p['len']($p['getattr'](self, '__data')), $p['len']($p['getattr'](bitset, '__data')));
				$pyjs['track']['lineno']=242;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter16_iter = $p['xrange'](data);
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					dat = $iter16_nextval['$nextval'];
					$pyjs['track']['lineno']=243;
					$p['getattr'](self, '__data')['__setitem__'](dat, $p['op_bitxor2']($p['getattr'](self, '__data')['__getitem__'](dat), $p['getattr'](bitset, '__data')['__getitem__'](dat)));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['bitset']]);
			$cls_definition['xorSet'] = $method;
			$pyjs['track']['lineno']=246;
			$method = $pyjs__bind_method2('resize', function(width) {
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
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub22,$div20,$sub21,$div18,$mul12,$mul11,$mul10,$div15,$div17,array,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$div16,$div19;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':246};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=246;
				$pyjs['track']['lineno']=250;
				if ($p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == 1))) {
					$pyjs['track']['lineno']=251;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', width) : $p['setattr'](self, '__width', width); 
					$pyjs['track']['lineno']=252;
					if ($p['bool'](($p['cmp']($p['getattr'](self, '__width'), (typeof ($mul3=$p['len']($p['getattr'](self, '__data')))==typeof ($mul4=$p['getattr'](self, '__bit')) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4))) == 1))) {
						$pyjs['track']['lineno']=253;
						array = self['__typedarray']($m['math']['ceil']((typeof ($div15=$p['getattr'](self, '__width'))==typeof ($div16=(typeof ($mul5=$p['getattr'](self, '__bit'))==typeof ($mul6=1.0) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6))) && typeof $div15=='number' && $div16 !== 0?
							$div15/$div16:
							$p['op_div']($div15,$div16))));
						$pyjs['track']['lineno']=254;
						array['set']($p['getattr'](self, '__data'));
						$pyjs['track']['lineno']=255;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', array) : $p['setattr'](self, '__data', array); 
					}
				}
				else if ($p['bool'](($p['cmp'](width, $p['getattr'](self, '__width')) == -1))) {
					$pyjs['track']['lineno']=257;
					if ($p['bool'](($p['cmp'](width, $p['len'](self)) == -1))) {
						$pyjs['track']['lineno']=258;
						width = $p['len'](self);
					}
					$pyjs['track']['lineno']=259;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__width', width) : $p['setattr'](self, '__width', width); 
					$pyjs['track']['lineno']=260;
					if ($p['bool'](($p['cmp']($p['getattr'](self, '__width'), $p['__op_sub']($sub21=(typeof ($mul7=$p['len']($p['getattr'](self, '__data')))==typeof ($mul8=$p['getattr'](self, '__bit')) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)),$sub22=$p['getattr'](self, '__bit'))) < 1))) {
						$pyjs['track']['lineno']=261;
						array = self['__typedarray']($m['math']['ceil']((typeof ($div17=$p['getattr'](self, '__width'))==typeof ($div18=(typeof ($mul9=$p['getattr'](self, '__bit'))==typeof ($mul10=1.0) && typeof $mul9=='number'?
							$mul9*$mul10:
							$p['op_mul']($mul9,$mul10))) && typeof $div17=='number' && $div18 !== 0?
							$div17/$div18:
							$p['op_div']($div17,$div18))));
						$pyjs['track']['lineno']=262;
						array['set'](self['__data']['subarray']($constant_int_0, $m['math']['ceil']((typeof ($div19=$p['getattr'](self, '__width'))==typeof ($div20=(typeof ($mul11=$p['getattr'](self, '__bit'))==typeof ($mul12=1.0) && typeof $mul11=='number'?
							$mul11*$mul12:
							$p['op_mul']($mul11,$mul12))) && typeof $div19=='number' && $div20 !== 0?
							$div19/$div20:
							$p['op_div']($div19,$div20)))));
						$pyjs['track']['lineno']=263;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', array) : $p['setattr'](self, '__data', array); 
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['resize'] = $method;
			$pyjs['track']['lineno']=265;
			$method = $pyjs__bind_method2('size', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul14,$mul13;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':265};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=265;
				$pyjs['track']['lineno']=269;
				$pyjs['track']['lineno']=269;
				var $pyjs__ret = (typeof ($mul13=$p['len']($p['getattr'](self, '__data')))==typeof ($mul14=$p['getattr'](self, '__bit')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['size'] = $method;
			$pyjs['track']['lineno']=271;
			$method = $pyjs__bind_method2('isEmpty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter17_nextval,$iter17_iter,$pyjs__trackstack_size_1,$iter17_array,$iter17_idx,$iter17_type,data;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':271};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=271;
				$pyjs['track']['lineno']=276;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = $p['getattr'](self, '__data');
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					data = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=277;
					if ($p['bool'](data)) {
						$pyjs['track']['lineno']=278;
						$pyjs['track']['lineno']=278;
						var $pyjs__ret = false;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=279;
				$pyjs['track']['lineno']=279;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isEmpty'] = $method;
			$pyjs['track']['lineno']=281;
			$method = $pyjs__bind_method2('clone', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '67097e4f27f1319bfdbb2cb30bfe31e4') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var new_bitset,data;
				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':281};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=281;
				$pyjs['track']['lineno']=285;
				new_bitset = self['__class__']($constant_int_1);
				$pyjs['track']['lineno']=286;
				data = self['__typedarray']($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=287;
				new_bitset['__is_instance__'] && typeof new_bitset['__setattr__'] == 'function' ? new_bitset['__setattr__']('__data', data) : $p['setattr'](new_bitset, '__data', data); 
				$pyjs['track']['lineno']=288;
				new_bitset['__is_instance__'] && typeof new_bitset['__setattr__'] == 'function' ? new_bitset['__setattr__']('__width', $p['getattr'](self, '__width')) : $p['setattr'](new_bitset, '__width', $p['getattr'](self, '__width')); 
				$pyjs['track']['lineno']=289;
				$pyjs['track']['lineno']=289;
				var $pyjs__ret = new_bitset;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['clone'] = $method;
			$pyjs['track']['lineno']=32;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BitSet', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=292;
		$m['BitSet16'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsbitset';
			$cls_definition['__md5__'] = '5279cce2c9a51c6a7a47d1fe135ae8d6';
			$pyjs['track']['lineno']=296;
			$cls_definition['__bit'] = $constant_int_16;
			$pyjs['track']['lineno']=297;
			$cls_definition['__bitmask'] = null;
			$pyjs['track']['lineno']=298;
			$cls_definition['__typedarray'] = $m['PyUint16Array'];
			$pyjs['track']['lineno']=300;
			$method = $pyjs__bind_method2('__init__', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5279cce2c9a51c6a7a47d1fe135ae8d6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':300};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=300;
				$pyjs['track']['lineno']=301;
				$m['BitSet']['__init__'](self, width);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=292;
			var $bases = new Array($m['BitSet']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BitSet16', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=304;
		$m['BitSet32'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsbitset';
			$cls_definition['__md5__'] = 'a3a46a930307d5fcb99d60a1f72e0388';
			$pyjs['track']['lineno']=308;
			$cls_definition['__bit'] = $constant_int_32;
			$pyjs['track']['lineno']=309;
			$cls_definition['__bitmask'] = null;
			$pyjs['track']['lineno']=310;
			$cls_definition['__typedarray'] = $m['PyUint32Array'];
			$pyjs['track']['lineno']=312;
			$method = $pyjs__bind_method2('__init__', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'a3a46a930307d5fcb99d60a1f72e0388') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.pyjsbitset', 'lineno':312};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsbitset';
				$pyjs['track']['lineno']=312;
				$pyjs['track']['lineno']=313;
				$m['BitSet']['__init__'](self, width);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=304;
			var $bases = new Array($m['BitSet']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('BitSet32', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.pyjsbitset */


/* end module: pyjsdl.pyjsbitset */


/*
PYJS_DEPS: ['math', 'pyjsarray.PyUint8Array', 'pyjsarray', 'pyjsarray.PyUint16Array', 'pyjsarray.PyUint32Array']
*/
