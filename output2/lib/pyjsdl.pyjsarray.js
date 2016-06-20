/* start module: pyjsdl.pyjsarray */
$pyjs['loaded_modules']['pyjsdl.pyjsarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsarray';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['pyjsarray'] = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.pyjsarray.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[28] = 'pyjsdl.pyjsarray.py, line 28:\n    from __pyjamas__ import JS';
		$m.__track_lines__[31] = 'pyjsdl.pyjsarray.py, line 31:\n    class PyTypedArray:';
		$m.__track_lines__[49] = 'pyjsdl.pyjsarray.py, line 49:\n    def __init__(self, data=None, offset=None, length=None, typedarray=None):';
		$m.__track_lines__[53] = 'pyjsdl.pyjsarray.py, line 53:\n    if data:';
		$m.__track_lines__[54] = 'pyjsdl.pyjsarray.py, line 54:\n    if isinstance(data, int):';
		$m.__track_lines__[55] = 'pyjsdl.pyjsarray.py, line 55:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[56] = 'pyjsdl.pyjsarray.py, line 56:\n    self.__data = JS("""new @{{typedarray}}(@{{data}})""")';
		$m.__track_lines__[58] = 'pyjsdl.pyjsarray.py, line 58:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'valueOf\']())""")';
		$m.__track_lines__[60] = 'pyjsdl.pyjsarray.py, line 60:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[61] = 'pyjsdl.pyjsarray.py, line 61:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'getArray\']())""")';
		$m.__track_lines__[63] = 'pyjsdl.pyjsarray.py, line 63:\n    data = [dat.valueOf() for dat in data]';
		$m.__track_lines__[64] = 'pyjsdl.pyjsarray.py, line 64:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'getArray\']())""")';
		$m.__track_lines__[66] = 'pyjsdl.pyjsarray.py, line 66:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}[\'__data\'])""")';
		$m.__track_lines__[68] = 'pyjsdl.pyjsarray.py, line 68:\n    if offset is None and length is None:';
		$m.__track_lines__[69] = 'pyjsdl.pyjsarray.py, line 69:\n    self.__data = JS("""new @{{typedarray}}(@{{data}})""")';
		$m.__track_lines__[71] = 'pyjsdl.pyjsarray.py, line 71:\n    if offset is None:';
		$m.__track_lines__[72] = 'pyjsdl.pyjsarray.py, line 72:\n    offset = 0';
		$m.__track_lines__[73] = 'pyjsdl.pyjsarray.py, line 73:\n    if length is None:';
		$m.__track_lines__[74] = 'pyjsdl.pyjsarray.py, line 74:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}, @{{offset}})""")';
		$m.__track_lines__[76] = 'pyjsdl.pyjsarray.py, line 76:\n    self.__data = JS("""new @{{typedarray}}(@{{data}}, @{{offset}}, @{{length}})""")';
		$m.__track_lines__[78] = 'pyjsdl.pyjsarray.py, line 78:\n    self.__data = None';
		$m.__track_lines__[80] = 'pyjsdl.pyjsarray.py, line 80:\n    def __str__(self):';
		$m.__track_lines__[84] = 'pyjsdl.pyjsarray.py, line 84:\n    return self.__data.toString()';
		$m.__track_lines__[86] = 'pyjsdl.pyjsarray.py, line 86:\n    def __iter__(self):';
		$m.__track_lines__[90] = 'pyjsdl.pyjsarray.py, line 90:\n    index = 0';
		$m.__track_lines__[91] = 'pyjsdl.pyjsarray.py, line 91:\n    while index < self.__data.length:';
		$m.__track_lines__[92] = 'pyjsdl.pyjsarray.py, line 92:\n    yield self[index]';
		$m.__track_lines__[93] = 'pyjsdl.pyjsarray.py, line 93:\n    index += 1';
		$m.__track_lines__[95] = 'pyjsdl.pyjsarray.py, line 95:\n    def __getitem__(self, index):';
		$m.__track_lines__[99] = 'pyjsdl.pyjsarray.py, line 99:\n    return JS("""@{{int}}(@{{self}}[\'__data\'][@{{index}}]);""")';
		$m.__track_lines__[101] = 'pyjsdl.pyjsarray.py, line 101:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[105] = 'pyjsdl.pyjsarray.py, line 105:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[106] = 'pyjsdl.pyjsarray.py, line 106:\n    JS("""@{{self}}[\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[108] = 'pyjsdl.pyjsarray.py, line 108:\n    value = value.valueOf()';
		$m.__track_lines__[109] = 'pyjsdl.pyjsarray.py, line 109:\n    JS("""@{{self}}[\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[110] = 'pyjsdl.pyjsarray.py, line 110:\n    return None';
		$m.__track_lines__[112] = 'pyjsdl.pyjsarray.py, line 112:\n    def __len__(self):';
		$m.__track_lines__[116] = 'pyjsdl.pyjsarray.py, line 116:\n    return self.__data.length';
		$m.__track_lines__[118] = 'pyjsdl.pyjsarray.py, line 118:\n    def set(self, data, offset=0):';
		$m.__track_lines__[122] = 'pyjsdl.pyjsarray.py, line 122:\n    if isinstance(data, (list,tuple)):';
		$m.__track_lines__[123] = 'pyjsdl.pyjsarray.py, line 123:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[124] = 'pyjsdl.pyjsarray.py, line 124:\n    self.__data.set(data.getArray(), offset)';
		$m.__track_lines__[126] = 'pyjsdl.pyjsarray.py, line 126:\n    data = [dat.valueOf() for dat in data]';
		$m.__track_lines__[127] = 'pyjsdl.pyjsarray.py, line 127:\n    self.__data.set(data.getArray(), offset)';
		$m.__track_lines__[129] = 'pyjsdl.pyjsarray.py, line 129:\n    self.__data.set(data.__data, offset)';
		$m.__track_lines__[131] = 'pyjsdl.pyjsarray.py, line 131:\n    def subarray(self, begin, end=None):';
		$m.__track_lines__[135] = 'pyjsdl.pyjsarray.py, line 135:\n    if end is None:';
		$m.__track_lines__[136] = 'pyjsdl.pyjsarray.py, line 136:\n    end = self.__data.length';
		$m.__track_lines__[137] = 'pyjsdl.pyjsarray.py, line 137:\n    array = self.__data.subarray(begin, end)';
		$m.__track_lines__[138] = 'pyjsdl.pyjsarray.py, line 138:\n    pytypedarray = self.__class__()';
		$m.__track_lines__[139] = 'pyjsdl.pyjsarray.py, line 139:\n    pytypedarray.__data = array';
		$m.__track_lines__[140] = 'pyjsdl.pyjsarray.py, line 140:\n    return pytypedarray';
		$m.__track_lines__[142] = 'pyjsdl.pyjsarray.py, line 142:\n    def getLength(self):';
		$m.__track_lines__[146] = 'pyjsdl.pyjsarray.py, line 146:\n    return self.__data.length';
		$m.__track_lines__[148] = 'pyjsdl.pyjsarray.py, line 148:\n    def getByteLength(self):';
		$m.__track_lines__[152] = 'pyjsdl.pyjsarray.py, line 152:\n    return self.__data.byteLength';
		$m.__track_lines__[154] = 'pyjsdl.pyjsarray.py, line 154:\n    def getBuffer(self):';
		$m.__track_lines__[158] = 'pyjsdl.pyjsarray.py, line 158:\n    return self.__data.buffer';
		$m.__track_lines__[160] = 'pyjsdl.pyjsarray.py, line 160:\n    def getByteOffset(self):';
		$m.__track_lines__[164] = 'pyjsdl.pyjsarray.py, line 164:\n    return self.__data.byteOffset';
		$m.__track_lines__[166] = 'pyjsdl.pyjsarray.py, line 166:\n    def getBytesPerElement(self):';
		$m.__track_lines__[170] = 'pyjsdl.pyjsarray.py, line 170:\n    return self.__data.BYTES_PER_ELEMENT';
		$m.__track_lines__[172] = 'pyjsdl.pyjsarray.py, line 172:\n    def getArray(self):';
		$m.__track_lines__[176] = 'pyjsdl.pyjsarray.py, line 176:\n    return self.__data';
		$m.__track_lines__[178] = 'pyjsdl.pyjsarray.py, line 178:\n    def setArray(self, array):';
		$m.__track_lines__[182] = 'pyjsdl.pyjsarray.py, line 182:\n    self.__data = array';
		$m.__track_lines__[183] = 'pyjsdl.pyjsarray.py, line 183:\n    return None';
		$m.__track_lines__[186] = 'pyjsdl.pyjsarray.py, line 186:\n    class PyUint8ClampedArray(PyTypedArray):';
		$m.__track_lines__[191] = 'pyjsdl.pyjsarray.py, line 191:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[192] = 'pyjsdl.pyjsarray.py, line 192:\n    try:';
		$m.__track_lines__[193] = 'pyjsdl.pyjsarray.py, line 193:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint8ClampedArray)';
		$m.__track_lines__[195] = 'pyjsdl.pyjsarray.py, line 195:\n    if isUndefined(typedarray):';
		$m.__track_lines__[196] = 'pyjsdl.pyjsarray.py, line 196:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[198] = 'pyjsdl.pyjsarray.py, line 198:\n    raise';
		$m.__track_lines__[201] = 'pyjsdl.pyjsarray.py, line 201:\n    class PyUint8Array(PyTypedArray):';
		$m.__track_lines__[206] = 'pyjsdl.pyjsarray.py, line 206:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[207] = 'pyjsdl.pyjsarray.py, line 207:\n    try:';
		$m.__track_lines__[208] = 'pyjsdl.pyjsarray.py, line 208:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint8Array)';
		$m.__track_lines__[210] = 'pyjsdl.pyjsarray.py, line 210:\n    if isUndefined(typedarray):';
		$m.__track_lines__[211] = 'pyjsdl.pyjsarray.py, line 211:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[213] = 'pyjsdl.pyjsarray.py, line 213:\n    raise';
		$m.__track_lines__[216] = 'pyjsdl.pyjsarray.py, line 216:\n    class PyUint16Array(PyTypedArray):';
		$m.__track_lines__[221] = 'pyjsdl.pyjsarray.py, line 221:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[222] = 'pyjsdl.pyjsarray.py, line 222:\n    try:';
		$m.__track_lines__[223] = 'pyjsdl.pyjsarray.py, line 223:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint16Array)';
		$m.__track_lines__[225] = 'pyjsdl.pyjsarray.py, line 225:\n    if isUndefined(typedarray):';
		$m.__track_lines__[226] = 'pyjsdl.pyjsarray.py, line 226:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[228] = 'pyjsdl.pyjsarray.py, line 228:\n    raise';
		$m.__track_lines__[231] = 'pyjsdl.pyjsarray.py, line 231:\n    class PyUint32Array(PyTypedArray):';
		$m.__track_lines__[236] = 'pyjsdl.pyjsarray.py, line 236:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[237] = 'pyjsdl.pyjsarray.py, line 237:\n    try:';
		$m.__track_lines__[238] = 'pyjsdl.pyjsarray.py, line 238:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Uint32Array)';
		$m.__track_lines__[240] = 'pyjsdl.pyjsarray.py, line 240:\n    if isUndefined(typedarray):';
		$m.__track_lines__[241] = 'pyjsdl.pyjsarray.py, line 241:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[243] = 'pyjsdl.pyjsarray.py, line 243:\n    raise';
		$m.__track_lines__[246] = 'pyjsdl.pyjsarray.py, line 246:\n    class PyInt8Array(PyTypedArray):';
		$m.__track_lines__[251] = 'pyjsdl.pyjsarray.py, line 251:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[252] = 'pyjsdl.pyjsarray.py, line 252:\n    try:';
		$m.__track_lines__[253] = 'pyjsdl.pyjsarray.py, line 253:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Int8Array)';
		$m.__track_lines__[255] = 'pyjsdl.pyjsarray.py, line 255:\n    if isUndefined(typedarray):';
		$m.__track_lines__[256] = 'pyjsdl.pyjsarray.py, line 256:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[258] = 'pyjsdl.pyjsarray.py, line 258:\n    raise';
		$m.__track_lines__[261] = 'pyjsdl.pyjsarray.py, line 261:\n    class PyInt16Array(PyTypedArray):';
		$m.__track_lines__[266] = 'pyjsdl.pyjsarray.py, line 266:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[267] = 'pyjsdl.pyjsarray.py, line 267:\n    try:';
		$m.__track_lines__[268] = 'pyjsdl.pyjsarray.py, line 268:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Int16Array)';
		$m.__track_lines__[270] = 'pyjsdl.pyjsarray.py, line 270:\n    if isUndefined(typedarray):';
		$m.__track_lines__[271] = 'pyjsdl.pyjsarray.py, line 271:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[273] = 'pyjsdl.pyjsarray.py, line 273:\n    raise';
		$m.__track_lines__[276] = 'pyjsdl.pyjsarray.py, line 276:\n    class PyInt32Array(PyTypedArray):';
		$m.__track_lines__[281] = 'pyjsdl.pyjsarray.py, line 281:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[282] = 'pyjsdl.pyjsarray.py, line 282:\n    try:';
		$m.__track_lines__[283] = 'pyjsdl.pyjsarray.py, line 283:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Int32Array)';
		$m.__track_lines__[285] = 'pyjsdl.pyjsarray.py, line 285:\n    if isUndefined(typedarray):';
		$m.__track_lines__[286] = 'pyjsdl.pyjsarray.py, line 286:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[288] = 'pyjsdl.pyjsarray.py, line 288:\n    raise';
		$m.__track_lines__[291] = 'pyjsdl.pyjsarray.py, line 291:\n    class PyFloat32Array(PyTypedArray):';
		$m.__track_lines__[296] = 'pyjsdl.pyjsarray.py, line 296:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[297] = 'pyjsdl.pyjsarray.py, line 297:\n    try:';
		$m.__track_lines__[298] = 'pyjsdl.pyjsarray.py, line 298:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Float32Array)';
		$m.__track_lines__[300] = 'pyjsdl.pyjsarray.py, line 300:\n    if isUndefined(typedarray):';
		$m.__track_lines__[301] = 'pyjsdl.pyjsarray.py, line 301:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[303] = 'pyjsdl.pyjsarray.py, line 303:\n    raise';
		$m.__track_lines__[305] = 'pyjsdl.pyjsarray.py, line 305:\n    def __getitem__(self, index):';
		$m.__track_lines__[309] = 'pyjsdl.pyjsarray.py, line 309:\n    return JS("""@{{self}}[\'__data\'][@{{index}}];""")';
		$m.__track_lines__[312] = 'pyjsdl.pyjsarray.py, line 312:\n    class PyFloat64Array(PyTypedArray):';
		$m.__track_lines__[317] = 'pyjsdl.pyjsarray.py, line 317:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[318] = 'pyjsdl.pyjsarray.py, line 318:\n    try:';
		$m.__track_lines__[319] = 'pyjsdl.pyjsarray.py, line 319:\n    PyTypedArray.__init__(self, data, offset, length, typedarray=Float64Array)';
		$m.__track_lines__[321] = 'pyjsdl.pyjsarray.py, line 321:\n    if isUndefined(typedarray):';
		$m.__track_lines__[322] = 'pyjsdl.pyjsarray.py, line 322:\n    raise NotImplementedError("TypedArray data type not implemented")';
		$m.__track_lines__[324] = 'pyjsdl.pyjsarray.py, line 324:\n    raise';
		$m.__track_lines__[326] = 'pyjsdl.pyjsarray.py, line 326:\n    def __getitem__(self, index):';
		$m.__track_lines__[330] = 'pyjsdl.pyjsarray.py, line 330:\n    return JS("""@{{self}}[\'__data\'][@{{index}}];""")';
		$m.__track_lines__[333] = 'pyjsdl.pyjsarray.py, line 333:\n    class PyCanvasPixelArray(PyTypedArray):';
		$m.__track_lines__[338] = 'pyjsdl.pyjsarray.py, line 338:\n    def __init__(self, data=None, offset=None, length=None):';
		$m.__track_lines__[339] = 'pyjsdl.pyjsarray.py, line 339:\n    PyTypedArray.__init__(self, data, offset, length)';
		$m.__track_lines__[340] = 'pyjsdl.pyjsarray.py, line 340:\n    self._superArray = None';
		$m.__track_lines__[341] = 'pyjsdl.pyjsarray.py, line 341:\n    self._superIndex = (0,0)';
		$m.__track_lines__[343] = 'pyjsdl.pyjsarray.py, line 343:\n    def __iter__(self):';
		$m.__track_lines__[347] = 'pyjsdl.pyjsarray.py, line 347:\n    if not self._superArray:';
		$m.__track_lines__[348] = 'pyjsdl.pyjsarray.py, line 348:\n    PyTypedArray.__iter__(self)';
		$m.__track_lines__[350] = 'pyjsdl.pyjsarray.py, line 350:\n    index = self._superIndex[0]';
		$m.__track_lines__[351] = 'pyjsdl.pyjsarray.py, line 351:\n    while index < self._superIndex[1]:';
		$m.__track_lines__[352] = 'pyjsdl.pyjsarray.py, line 352:\n    yield self._superArray[index]';
		$m.__track_lines__[353] = 'pyjsdl.pyjsarray.py, line 353:\n    index += 1';
		$m.__track_lines__[355] = 'pyjsdl.pyjsarray.py, line 355:\n    def __getitem__(self, index):';
		$m.__track_lines__[359] = 'pyjsdl.pyjsarray.py, line 359:\n    if not self._superArray:';
		$m.__track_lines__[360] = 'pyjsdl.pyjsarray.py, line 360:\n    return PyTypedArray.__getitem__(self, index)';
		$m.__track_lines__[362] = 'pyjsdl.pyjsarray.py, line 362:\n    return self._superArray.__getitem__(index+self._superIndex[0])';
		$m.__track_lines__[364] = 'pyjsdl.pyjsarray.py, line 364:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[368] = 'pyjsdl.pyjsarray.py, line 368:\n    if not self._superArray:';
		$m.__track_lines__[369] = 'pyjsdl.pyjsarray.py, line 369:\n    PyTypedArray.__setitem__(self, index, value)';
		$m.__track_lines__[371] = 'pyjsdl.pyjsarray.py, line 371:\n    self._superArray.__setitem__(index+self._superIndex[0], value)';
		$m.__track_lines__[372] = 'pyjsdl.pyjsarray.py, line 372:\n    return None';
		$m.__track_lines__[374] = 'pyjsdl.pyjsarray.py, line 374:\n    def set(self, data, offset=0):';
		$m.__track_lines__[378] = 'pyjsdl.pyjsarray.py, line 378:\n    if not self._superArray:';
		$m.__track_lines__[379] = 'pyjsdl.pyjsarray.py, line 379:\n    for index in xrange(len(data)):';
		$m.__track_lines__[380] = 'pyjsdl.pyjsarray.py, line 380:\n    self[index+offset] = data[index]';
		$m.__track_lines__[382] = 'pyjsdl.pyjsarray.py, line 382:\n    self._superArray.set(data, offset+self._superIndex[0])';
		$m.__track_lines__[384] = 'pyjsdl.pyjsarray.py, line 384:\n    def subarray(self, begin, end=None):';
		$m.__track_lines__[388] = 'pyjsdl.pyjsarray.py, line 388:\n    if end is None:';
		$m.__track_lines__[389] = 'pyjsdl.pyjsarray.py, line 389:\n    end = self.__data.length';
		$m.__track_lines__[390] = 'pyjsdl.pyjsarray.py, line 390:\n    array = self.__class__()';
		$m.__track_lines__[391] = 'pyjsdl.pyjsarray.py, line 391:\n    array.__data = self.__data';
		$m.__track_lines__[392] = 'pyjsdl.pyjsarray.py, line 392:\n    array._superArray = self';
		$m.__track_lines__[393] = 'pyjsdl.pyjsarray.py, line 393:\n    array._superIndex = (begin,end)';
		$m.__track_lines__[394] = 'pyjsdl.pyjsarray.py, line 394:\n    return array';
		$m.__track_lines__[397] = 'pyjsdl.pyjsarray.py, line 397:\n    class Ndarray:';
		$m.__track_lines__[399] = 'pyjsdl.pyjsarray.py, line 399:\n    __typedarray = {0: PyUint8ClampedArray,';
		$m.__track_lines__[409] = 'pyjsdl.pyjsarray.py, line 409:\n    def __init__(self, dim, dtype=8):';
		$m.__track_lines__[424] = 'pyjsdl.pyjsarray.py, line 424:\n    self._dtype = dtype';
		$m.__track_lines__[425] = 'pyjsdl.pyjsarray.py, line 425:\n    if isinstance(dim, tuple):';
		$m.__track_lines__[426] = 'pyjsdl.pyjsarray.py, line 426:\n    size = 1';
		$m.__track_lines__[427] = 'pyjsdl.pyjsarray.py, line 427:\n    for i in dim:';
		$m.__track_lines__[428] = 'pyjsdl.pyjsarray.py, line 428:\n    size *= i';
		$m.__track_lines__[429] = 'pyjsdl.pyjsarray.py, line 429:\n    self.__data = Ndarray.__typedarray[dtype](size)';
		$m.__track_lines__[430] = 'pyjsdl.pyjsarray.py, line 430:\n    self._shape = dim';
		$m.__track_lines__[431] = 'pyjsdl.pyjsarray.py, line 431:\n    indices = []';
		$m.__track_lines__[432] = 'pyjsdl.pyjsarray.py, line 432:\n    for i in self._shape:';
		$m.__track_lines__[433] = 'pyjsdl.pyjsarray.py, line 433:\n    size /= i';
		$m.__track_lines__[434] = 'pyjsdl.pyjsarray.py, line 434:\n    indices.append(size)';
		$m.__track_lines__[435] = 'pyjsdl.pyjsarray.py, line 435:\n    self._indices = tuple(indices)';
		$m.__track_lines__[437] = 'pyjsdl.pyjsarray.py, line 437:\n    self.__data = Ndarray.__typedarray[dtype](dim)';
		$m.__track_lines__[438] = 'pyjsdl.pyjsarray.py, line 438:\n    self._shape = (dim,)';
		$m.__track_lines__[439] = 'pyjsdl.pyjsarray.py, line 439:\n    self._indices = (self._shape[0],)';
		$m.__track_lines__[441] = 'pyjsdl.pyjsarray.py, line 441:\n    self.__data = Ndarray.__typedarray[dtype](dim)';
		$m.__track_lines__[442] = 'pyjsdl.pyjsarray.py, line 442:\n    self._shape = (len(dim),)';
		$m.__track_lines__[443] = 'pyjsdl.pyjsarray.py, line 443:\n    self._indices = (self._shape[0],)';
		$m.__track_lines__[445] = 'pyjsdl.pyjsarray.py, line 445:\n    self.__data = dim';
		$m.__track_lines__[446] = 'pyjsdl.pyjsarray.py, line 446:\n    self._shape = (len(dim),)';
		$m.__track_lines__[447] = 'pyjsdl.pyjsarray.py, line 447:\n    self._indices = (self._shape[0],)';
		$m.__track_lines__[450] = 'pyjsdl.pyjsarray.py, line 449:\n    @property ... def shape(self):        #not implemented in pyjs -O';
		$m.__track_lines__[455] = 'pyjsdl.pyjsarray.py, line 455:\n    return self._shape';
		$m.__track_lines__[458] = 'pyjsdl.pyjsarray.py, line 457:\n    @shape.setter ... def shape(self, dim):    #not implemented in pyjs -O';
		$m.__track_lines__[465] = 'pyjsdl.pyjsarray.py, line 465:\n    self.setshape(dim)';
		$m.__track_lines__[466] = 'pyjsdl.pyjsarray.py, line 466:\n    return None';
		$m.__track_lines__[468] = 'pyjsdl.pyjsarray.py, line 468:\n    def __getitem__(self, index):';
		$m.__track_lines__[469] = 'pyjsdl.pyjsarray.py, line 469:\n    try:';
		$m.__track_lines__[470] = 'pyjsdl.pyjsarray.py, line 470:\n    indexLn, shapeLn = index.__len__(), len(self._shape)    #len(0) no exception';
		$m.__track_lines__[471] = 'pyjsdl.pyjsarray.py, line 471:\n    if indexLn == shapeLn:';
		$m.__track_lines__[472] = 'pyjsdl.pyjsarray.py, line 472:\n    return self.__data[sum([index[i]*self._indices[i] for i in range(indexLn)])]';
		$m.__track_lines__[474] = 'pyjsdl.pyjsarray.py, line 474:\n    begin = sum([index[i]*self._indices[i] for i in range(indexLn)])';
		$m.__track_lines__[475] = 'pyjsdl.pyjsarray.py, line 475:\n    end = begin + self._indices[indexLn-1]';
		$m.__track_lines__[476] = 'pyjsdl.pyjsarray.py, line 476:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[477] = 'pyjsdl.pyjsarray.py, line 477:\n    array = Ndarray(subarray, self._dtype)';
		$m.__track_lines__[478] = 'pyjsdl.pyjsarray.py, line 478:\n    array._shape = self._shape[indexLn:]';
		$m.__track_lines__[479] = 'pyjsdl.pyjsarray.py, line 479:\n    array._indices = self._indices[indexLn:]';
		$m.__track_lines__[480] = 'pyjsdl.pyjsarray.py, line 480:\n    return array';
		$m.__track_lines__[482] = 'pyjsdl.pyjsarray.py, line 482:\n    if len(self._shape) == 1:';
		$m.__track_lines__[483] = 'pyjsdl.pyjsarray.py, line 483:\n    return self.__data[index]';
		$m.__track_lines__[485] = 'pyjsdl.pyjsarray.py, line 485:\n    begin = index * self._indices[0]';
		$m.__track_lines__[486] = 'pyjsdl.pyjsarray.py, line 486:\n    end = begin + self._indices[0]';
		$m.__track_lines__[487] = 'pyjsdl.pyjsarray.py, line 487:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[488] = 'pyjsdl.pyjsarray.py, line 488:\n    array = Ndarray(subarray, self._dtype)';
		$m.__track_lines__[489] = 'pyjsdl.pyjsarray.py, line 489:\n    array._shape = self._shape[1:]';
		$m.__track_lines__[490] = 'pyjsdl.pyjsarray.py, line 490:\n    array._indices = self._indices[1:]';
		$m.__track_lines__[491] = 'pyjsdl.pyjsarray.py, line 491:\n    return array';
		$m.__track_lines__[493] = 'pyjsdl.pyjsarray.py, line 493:\n    def __setitem__(self, index, value):';
		$m.__track_lines__[494] = 'pyjsdl.pyjsarray.py, line 494:\n    def unpack(obj, lst=None):';
		$m.__track_lines__[495] = 'pyjsdl.pyjsarray.py, line 495:\n    if lst is None:';
		$m.__track_lines__[496] = 'pyjsdl.pyjsarray.py, line 496:\n    lst = []';
		$m.__track_lines__[497] = 'pyjsdl.pyjsarray.py, line 497:\n    for element in obj:';
		$m.__track_lines__[498] = 'pyjsdl.pyjsarray.py, line 498:\n    if isinstance(element, (list,tuple)):';
		$m.__track_lines__[499] = 'pyjsdl.pyjsarray.py, line 499:\n    unpack(element, lst)';
		$m.__track_lines__[501] = 'pyjsdl.pyjsarray.py, line 501:\n    lst.append(element)';
		$m.__track_lines__[502] = 'pyjsdl.pyjsarray.py, line 502:\n    return lst';
		$m.__track_lines__[503] = 'pyjsdl.pyjsarray.py, line 503:\n    try:';
		$m.__track_lines__[504] = 'pyjsdl.pyjsarray.py, line 504:\n    indexLn, shapeLn = index.__len__(), len(self._shape)';
		$m.__track_lines__[505] = 'pyjsdl.pyjsarray.py, line 505:\n    if indexLn == shapeLn:';
		$m.__track_lines__[506] = 'pyjsdl.pyjsarray.py, line 506:\n    self.__data[sum([index[i]*self._indices[i] for i in range(indexLn)])] = value';
		$m.__track_lines__[508] = 'pyjsdl.pyjsarray.py, line 508:\n    begin = sum([index[i]*self._indices[i] for i in range(indexLn)])';
		$m.__track_lines__[509] = 'pyjsdl.pyjsarray.py, line 509:\n    end = begin + self._indices[indexLn-1]';
		$m.__track_lines__[510] = 'pyjsdl.pyjsarray.py, line 510:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[511] = 'pyjsdl.pyjsarray.py, line 511:\n    if isinstance(value, Ndarray):';
		$m.__track_lines__[512] = 'pyjsdl.pyjsarray.py, line 512:\n    value = value.__data';
		$m.__track_lines__[514] = 'pyjsdl.pyjsarray.py, line 514:\n    if isinstance(value[0], (list,tuple)):';
		$m.__track_lines__[515] = 'pyjsdl.pyjsarray.py, line 515:\n    value = unpack(value)';
		$m.__track_lines__[516] = 'pyjsdl.pyjsarray.py, line 516:\n    subarray.set(value)';
		$m.__track_lines__[518] = 'pyjsdl.pyjsarray.py, line 518:\n    if len(self._shape) == 1:';
		$m.__track_lines__[519] = 'pyjsdl.pyjsarray.py, line 519:\n    self.__data[index] = value';
		$m.__track_lines__[521] = 'pyjsdl.pyjsarray.py, line 521:\n    begin = index * self._indices[0]';
		$m.__track_lines__[522] = 'pyjsdl.pyjsarray.py, line 522:\n    end = begin + self._indices[0]';
		$m.__track_lines__[523] = 'pyjsdl.pyjsarray.py, line 523:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[524] = 'pyjsdl.pyjsarray.py, line 524:\n    if isinstance(value, Ndarray):';
		$m.__track_lines__[525] = 'pyjsdl.pyjsarray.py, line 525:\n    value = value.__data';
		$m.__track_lines__[527] = 'pyjsdl.pyjsarray.py, line 527:\n    if isinstance(value[0], (list,tuple)):';
		$m.__track_lines__[528] = 'pyjsdl.pyjsarray.py, line 528:\n    value = unpack(value)';
		$m.__track_lines__[529] = 'pyjsdl.pyjsarray.py, line 529:\n    subarray.set(value)';
		$m.__track_lines__[530] = 'pyjsdl.pyjsarray.py, line 530:\n    return None';
		$m.__track_lines__[532] = 'pyjsdl.pyjsarray.py, line 532:\n    def __getslice__(self, lower, upper):';
		$m.__track_lines__[533] = 'pyjsdl.pyjsarray.py, line 533:\n    subarray = self.__data.subarray(lower, upper)';
		$m.__track_lines__[534] = 'pyjsdl.pyjsarray.py, line 534:\n    return Ndarray(subarray, self._dtype)';
		$m.__track_lines__[536] = 'pyjsdl.pyjsarray.py, line 536:\n    def __setslice__(self, lower, upper, data):';
		$m.__track_lines__[537] = 'pyjsdl.pyjsarray.py, line 537:\n    subarray = self.__data.subarray(lower, upper)';
		$m.__track_lines__[538] = 'pyjsdl.pyjsarray.py, line 538:\n    subarray.set(data)';
		$m.__track_lines__[539] = 'pyjsdl.pyjsarray.py, line 539:\n    return None';
		$m.__track_lines__[541] = 'pyjsdl.pyjsarray.py, line 541:\n    def __iter__(self):';
		$m.__track_lines__[542] = 'pyjsdl.pyjsarray.py, line 542:\n    if len(self._shape) > 1:';
		$m.__track_lines__[543] = 'pyjsdl.pyjsarray.py, line 543:\n    index = 0';
		$m.__track_lines__[544] = 'pyjsdl.pyjsarray.py, line 544:\n    while index < self._shape[0]:';
		$m.__track_lines__[545] = 'pyjsdl.pyjsarray.py, line 545:\n    begin = index * self._indices[0]';
		$m.__track_lines__[546] = 'pyjsdl.pyjsarray.py, line 546:\n    end = begin + self._indices[0]';
		$m.__track_lines__[547] = 'pyjsdl.pyjsarray.py, line 547:\n    subarray = self.__data.subarray(begin, end)';
		$m.__track_lines__[548] = 'pyjsdl.pyjsarray.py, line 548:\n    array = Ndarray(subarray, self._dtype)';
		$m.__track_lines__[549] = 'pyjsdl.pyjsarray.py, line 549:\n    array._shape = self._shape[1:]';
		$m.__track_lines__[550] = 'pyjsdl.pyjsarray.py, line 550:\n    array._indices = self._indices[1:]';
		$m.__track_lines__[551] = 'pyjsdl.pyjsarray.py, line 551:\n    yield array';
		$m.__track_lines__[552] = 'pyjsdl.pyjsarray.py, line 552:\n    index += 1';
		$m.__track_lines__[554] = 'pyjsdl.pyjsarray.py, line 554:\n    index = 0';
		$m.__track_lines__[555] = 'pyjsdl.pyjsarray.py, line 555:\n    while index < self._shape[0]:';
		$m.__track_lines__[556] = 'pyjsdl.pyjsarray.py, line 556:\n    yield self.__data[index]';
		$m.__track_lines__[557] = 'pyjsdl.pyjsarray.py, line 557:\n    index += 1';
		$m.__track_lines__[559] = 'pyjsdl.pyjsarray.py, line 559:\n    def __str__(self):';
		$m.__track_lines__[560] = 'pyjsdl.pyjsarray.py, line 560:\n    def array_str(array, width, strval):';
		$m.__track_lines__[561] = 'pyjsdl.pyjsarray.py, line 561:\n    alst = []';
		$m.__track_lines__[562] = 'pyjsdl.pyjsarray.py, line 562:\n    if len(array._shape) == 1:';
		$m.__track_lines__[563] = "pyjsdl.pyjsarray.py, line 563:\n    alst.append('[')";
		$m.__track_lines__[564] = 'pyjsdl.pyjsarray.py, line 564:\n    alst.extend([strval % (width,val) for val in array])';
		$m.__track_lines__[567] = 'pyjsdl.pyjsarray.py, line 567:\n    alst[-1] = alst[-1].rstrip()';
		$m.__track_lines__[568] = "pyjsdl.pyjsarray.py, line 568:\n    alst.append(']')";
		$m.__track_lines__[570] = "pyjsdl.pyjsarray.py, line 570:\n    alst.append('[')";
		$m.__track_lines__[571] = 'pyjsdl.pyjsarray.py, line 571:\n    for a in array:';
		$m.__track_lines__[572] = 'pyjsdl.pyjsarray.py, line 572:\n    alst.extend( array_str(a,width,strval) )';
		$m.__track_lines__[573] = "pyjsdl.pyjsarray.py, line 573:\n    alst.append(']')";
		$m.__track_lines__[574] = 'pyjsdl.pyjsarray.py, line 574:\n    return alst';
		$m.__track_lines__[575] = 'pyjsdl.pyjsarray.py, line 575:\n    if self._dtype < 7:';
		$m.__track_lines__[576] = 'pyjsdl.pyjsarray.py, line 576:\n    alst = array_str(self, len(str( max([i for i in self.__data]) )), "%*d ")';
		$m.__track_lines__[578] = 'pyjsdl.pyjsarray.py, line 578:\n    alst = array_str(self, len(str( max([i for i in self.__data]) ))+7, "%*f ")';
		$m.__track_lines__[579] = 'pyjsdl.pyjsarray.py, line 579:\n    tab = len(self._shape)';
		$m.__track_lines__[580] = 'pyjsdl.pyjsarray.py, line 580:\n    i = tab';
		$m.__track_lines__[581] = 'pyjsdl.pyjsarray.py, line 581:\n    while True:';
		$m.__track_lines__[582] = 'pyjsdl.pyjsarray.py, line 582:\n    try:';
		$m.__track_lines__[583] = "pyjsdl.pyjsarray.py, line 583:\n    i = alst.index('[', i)";
		$m.__track_lines__[585] = 'pyjsdl.pyjsarray.py, line 585:\n    break';
		$m.__track_lines__[586] = 'pyjsdl.pyjsarray.py, line 586:\n    count = 0';
		$m.__track_lines__[587] = 'pyjsdl.pyjsarray.py, line 587:\n    while True:';
		$m.__track_lines__[588] = "pyjsdl.pyjsarray.py, line 588:\n    if alst[i+count] == '[':";
		$m.__track_lines__[589] = 'pyjsdl.pyjsarray.py, line 589:\n    count += 1';
		$m.__track_lines__[590] = 'pyjsdl.pyjsarray.py, line 590:\n    continue';
		$m.__track_lines__[592] = "pyjsdl.pyjsarray.py, line 592:\n    if count == 1:      #pyjs-O ' '*n > NaN";
		$m.__track_lines__[593] = "pyjsdl.pyjsarray.py, line 593:\n    alst[i] = '\\n'+''.join([' ' for x in range(tab-count)])+alst[i]";
		$m.__track_lines__[595] = "pyjsdl.pyjsarray.py, line 595:\n    alst[i] = '\\n\\n'+''.join([' ' for x in range(tab-count)])+alst[i]";
		$m.__track_lines__[596] = 'pyjsdl.pyjsarray.py, line 596:\n    i += count';
		$m.__track_lines__[597] = 'pyjsdl.pyjsarray.py, line 597:\n    break';
		$m.__track_lines__[598] = "pyjsdl.pyjsarray.py, line 598:\n    return ''.join(alst)";
		$m.__track_lines__[600] = 'pyjsdl.pyjsarray.py, line 600:\n    def __len__(self):';
		$m.__track_lines__[601] = 'pyjsdl.pyjsarray.py, line 601:\n    return self._shape[0]';
		$m.__track_lines__[603] = 'pyjsdl.pyjsarray.py, line 603:\n    def __add__(self, other):';
		$m.__track_lines__[604] = 'pyjsdl.pyjsarray.py, line 604:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[605] = 'pyjsdl.pyjsarray.py, line 605:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[606] = 'pyjsdl.pyjsarray.py, line 606:\n    ndarray._shape = self._shape';
		$m.__track_lines__[607] = 'pyjsdl.pyjsarray.py, line 607:\n    ndarray._indices = self._indices';
		$m.__track_lines__[608] = 'pyjsdl.pyjsarray.py, line 608:\n    try:';
		$m.__track_lines__[609] = 'pyjsdl.pyjsarray.py, line 609:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[610] = 'pyjsdl.pyjsarray.py, line 610:\n    ndarray.__data[i] = ndarray.__data[i] + other';
		$m.__track_lines__[612] = 'pyjsdl.pyjsarray.py, line 612:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[613] = 'pyjsdl.pyjsarray.py, line 613:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[615] = 'pyjsdl.pyjsarray.py, line 615:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[616] = 'pyjsdl.pyjsarray.py, line 616:\n    ndarray.__data[i] = ndarray.__data[i] + other.__data[i]';
		$m.__track_lines__[617] = 'pyjsdl.pyjsarray.py, line 617:\n    return ndarray';
		$m.__track_lines__[619] = 'pyjsdl.pyjsarray.py, line 619:\n    def __sub__(self, other):';
		$m.__track_lines__[620] = 'pyjsdl.pyjsarray.py, line 620:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[621] = 'pyjsdl.pyjsarray.py, line 621:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[622] = 'pyjsdl.pyjsarray.py, line 622:\n    ndarray._shape = self._shape';
		$m.__track_lines__[623] = 'pyjsdl.pyjsarray.py, line 623:\n    ndarray._indices = self._indices';
		$m.__track_lines__[624] = 'pyjsdl.pyjsarray.py, line 624:\n    try:';
		$m.__track_lines__[625] = 'pyjsdl.pyjsarray.py, line 625:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[626] = 'pyjsdl.pyjsarray.py, line 626:\n    ndarray.__data[i] = ndarray.__data[i] - other';
		$m.__track_lines__[628] = 'pyjsdl.pyjsarray.py, line 628:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[629] = 'pyjsdl.pyjsarray.py, line 629:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[631] = 'pyjsdl.pyjsarray.py, line 631:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[632] = 'pyjsdl.pyjsarray.py, line 632:\n    ndarray.__data[i] = ndarray.__data[i] - other.__data[i]';
		$m.__track_lines__[633] = 'pyjsdl.pyjsarray.py, line 633:\n    return ndarray';
		$m.__track_lines__[635] = 'pyjsdl.pyjsarray.py, line 635:\n    def __mul__(self, other):';
		$m.__track_lines__[636] = 'pyjsdl.pyjsarray.py, line 636:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[637] = 'pyjsdl.pyjsarray.py, line 637:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[638] = 'pyjsdl.pyjsarray.py, line 638:\n    ndarray._shape = self._shape';
		$m.__track_lines__[639] = 'pyjsdl.pyjsarray.py, line 639:\n    ndarray._indices = self._indices';
		$m.__track_lines__[640] = 'pyjsdl.pyjsarray.py, line 640:\n    try:';
		$m.__track_lines__[641] = 'pyjsdl.pyjsarray.py, line 641:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[642] = 'pyjsdl.pyjsarray.py, line 642:\n    ndarray.__data[i] = ndarray.__data[i] * other';
		$m.__track_lines__[644] = 'pyjsdl.pyjsarray.py, line 644:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[645] = 'pyjsdl.pyjsarray.py, line 645:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[647] = 'pyjsdl.pyjsarray.py, line 647:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[648] = 'pyjsdl.pyjsarray.py, line 648:\n    ndarray.__data[i] = ndarray.__data[i] * other.__data[i]';
		$m.__track_lines__[649] = 'pyjsdl.pyjsarray.py, line 649:\n    return ndarray';
		$m.__track_lines__[651] = 'pyjsdl.pyjsarray.py, line 651:\n    def __div__(self, other):';
		$m.__track_lines__[652] = 'pyjsdl.pyjsarray.py, line 652:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[653] = 'pyjsdl.pyjsarray.py, line 653:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[654] = 'pyjsdl.pyjsarray.py, line 654:\n    ndarray._shape = self._shape';
		$m.__track_lines__[655] = 'pyjsdl.pyjsarray.py, line 655:\n    ndarray._indices = self._indices';
		$m.__track_lines__[656] = 'pyjsdl.pyjsarray.py, line 656:\n    try:';
		$m.__track_lines__[657] = 'pyjsdl.pyjsarray.py, line 657:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[658] = 'pyjsdl.pyjsarray.py, line 658:\n    ndarray.__data[i] = ndarray.__data[i] / other';
		$m.__track_lines__[660] = 'pyjsdl.pyjsarray.py, line 660:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[661] = 'pyjsdl.pyjsarray.py, line 661:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[663] = 'pyjsdl.pyjsarray.py, line 663:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[664] = 'pyjsdl.pyjsarray.py, line 664:\n    ndarray.__data[i] = ndarray.__data[i] / other.__data[i]';
		$m.__track_lines__[665] = 'pyjsdl.pyjsarray.py, line 665:\n    return ndarray';
		$m.__track_lines__[667] = 'pyjsdl.pyjsarray.py, line 667:\n    def add(self, other):';
		$m.__track_lines__[673] = 'pyjsdl.pyjsarray.py, line 673:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[674] = 'pyjsdl.pyjsarray.py, line 674:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[675] = 'pyjsdl.pyjsarray.py, line 675:\n    ndarray._shape = self._shape';
		$m.__track_lines__[676] = 'pyjsdl.pyjsarray.py, line 676:\n    ndarray._indices = self._indices';
		$m.__track_lines__[677] = 'pyjsdl.pyjsarray.py, line 677:\n    try:';
		$m.__track_lines__[678] = 'pyjsdl.pyjsarray.py, line 678:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[679] = 'pyjsdl.pyjsarray.py, line 679:\n    ndarray.__data[i] = ndarray.__data[i] + other';
		$m.__track_lines__[681] = 'pyjsdl.pyjsarray.py, line 681:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[682] = 'pyjsdl.pyjsarray.py, line 682:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[684] = 'pyjsdl.pyjsarray.py, line 684:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[685] = 'pyjsdl.pyjsarray.py, line 685:\n    ndarray.__data[i] = ndarray.__data[i] + other.__data[i]';
		$m.__track_lines__[686] = 'pyjsdl.pyjsarray.py, line 686:\n    return ndarray';
		$m.__track_lines__[688] = 'pyjsdl.pyjsarray.py, line 688:\n    def sub(self, other):';
		$m.__track_lines__[694] = 'pyjsdl.pyjsarray.py, line 694:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[695] = 'pyjsdl.pyjsarray.py, line 695:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[696] = 'pyjsdl.pyjsarray.py, line 696:\n    ndarray._shape = self._shape';
		$m.__track_lines__[697] = 'pyjsdl.pyjsarray.py, line 697:\n    ndarray._indices = self._indices';
		$m.__track_lines__[698] = 'pyjsdl.pyjsarray.py, line 698:\n    try:';
		$m.__track_lines__[699] = 'pyjsdl.pyjsarray.py, line 699:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[700] = 'pyjsdl.pyjsarray.py, line 700:\n    ndarray.__data[i] = ndarray.__data[i] - other';
		$m.__track_lines__[702] = 'pyjsdl.pyjsarray.py, line 702:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[703] = 'pyjsdl.pyjsarray.py, line 703:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[705] = 'pyjsdl.pyjsarray.py, line 705:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[706] = 'pyjsdl.pyjsarray.py, line 706:\n    ndarray.__data[i] = ndarray.__data[i] - other.__data[i]';
		$m.__track_lines__[707] = 'pyjsdl.pyjsarray.py, line 707:\n    return ndarray';
		$m.__track_lines__[709] = 'pyjsdl.pyjsarray.py, line 709:\n    def mul(self, other):';
		$m.__track_lines__[715] = 'pyjsdl.pyjsarray.py, line 715:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[716] = 'pyjsdl.pyjsarray.py, line 716:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[717] = 'pyjsdl.pyjsarray.py, line 717:\n    ndarray._shape = self._shape';
		$m.__track_lines__[718] = 'pyjsdl.pyjsarray.py, line 718:\n    ndarray._indices = self._indices';
		$m.__track_lines__[719] = 'pyjsdl.pyjsarray.py, line 719:\n    try:';
		$m.__track_lines__[720] = 'pyjsdl.pyjsarray.py, line 720:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[721] = 'pyjsdl.pyjsarray.py, line 721:\n    ndarray.__data[i] = ndarray.__data[i] * other';
		$m.__track_lines__[723] = 'pyjsdl.pyjsarray.py, line 723:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[724] = 'pyjsdl.pyjsarray.py, line 724:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[726] = 'pyjsdl.pyjsarray.py, line 726:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[727] = 'pyjsdl.pyjsarray.py, line 727:\n    ndarray.__data[i] = ndarray.__data[i] * other.__data[i]';
		$m.__track_lines__[728] = 'pyjsdl.pyjsarray.py, line 728:\n    return ndarray';
		$m.__track_lines__[730] = 'pyjsdl.pyjsarray.py, line 730:\n    def div(self, other):';
		$m.__track_lines__[736] = 'pyjsdl.pyjsarray.py, line 736:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[737] = 'pyjsdl.pyjsarray.py, line 737:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[738] = 'pyjsdl.pyjsarray.py, line 738:\n    ndarray._shape = self._shape';
		$m.__track_lines__[739] = 'pyjsdl.pyjsarray.py, line 739:\n    ndarray._indices = self._indices';
		$m.__track_lines__[740] = 'pyjsdl.pyjsarray.py, line 740:\n    try:';
		$m.__track_lines__[741] = 'pyjsdl.pyjsarray.py, line 741:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[742] = 'pyjsdl.pyjsarray.py, line 742:\n    ndarray.__data[i] = ndarray.__data[i] / other';
		$m.__track_lines__[744] = 'pyjsdl.pyjsarray.py, line 744:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[745] = 'pyjsdl.pyjsarray.py, line 745:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[747] = 'pyjsdl.pyjsarray.py, line 747:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[748] = 'pyjsdl.pyjsarray.py, line 748:\n    ndarray.__data[i] = ndarray.__data[i] / other.__data[i]';
		$m.__track_lines__[749] = 'pyjsdl.pyjsarray.py, line 749:\n    return ndarray';
		$m.__track_lines__[751] = 'pyjsdl.pyjsarray.py, line 751:\n    def iadd(self, other):';
		$m.__track_lines__[756] = 'pyjsdl.pyjsarray.py, line 756:\n    try:';
		$m.__track_lines__[757] = 'pyjsdl.pyjsarray.py, line 757:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[758] = 'pyjsdl.pyjsarray.py, line 758:\n    self.__data[i] = self.__data[i] + other';
		$m.__track_lines__[760] = 'pyjsdl.pyjsarray.py, line 760:\n    if self._shape != other._shape:';
		$m.__track_lines__[761] = 'pyjsdl.pyjsarray.py, line 761:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[763] = 'pyjsdl.pyjsarray.py, line 763:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[764] = 'pyjsdl.pyjsarray.py, line 764:\n    self.__data[i] = self.__data[i] + other.__data[i]';
		$m.__track_lines__[765] = 'pyjsdl.pyjsarray.py, line 765:\n    return None';
		$m.__track_lines__[767] = 'pyjsdl.pyjsarray.py, line 767:\n    def isub(self, other):';
		$m.__track_lines__[772] = 'pyjsdl.pyjsarray.py, line 772:\n    try:';
		$m.__track_lines__[773] = 'pyjsdl.pyjsarray.py, line 773:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[774] = 'pyjsdl.pyjsarray.py, line 774:\n    self.__data[i] = self.__data[i] - other';
		$m.__track_lines__[776] = 'pyjsdl.pyjsarray.py, line 776:\n    if self._shape != other._shape:';
		$m.__track_lines__[777] = 'pyjsdl.pyjsarray.py, line 777:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[779] = 'pyjsdl.pyjsarray.py, line 779:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[780] = 'pyjsdl.pyjsarray.py, line 780:\n    self.__data[i] = self.__data[i] - other.__data[i]';
		$m.__track_lines__[781] = 'pyjsdl.pyjsarray.py, line 781:\n    return None';
		$m.__track_lines__[783] = 'pyjsdl.pyjsarray.py, line 783:\n    def imul(self, other):';
		$m.__track_lines__[788] = 'pyjsdl.pyjsarray.py, line 788:\n    try:';
		$m.__track_lines__[789] = 'pyjsdl.pyjsarray.py, line 789:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[790] = 'pyjsdl.pyjsarray.py, line 790:\n    self.__data[i] = self.__data[i] * other';
		$m.__track_lines__[792] = 'pyjsdl.pyjsarray.py, line 792:\n    if self._shape != other._shape:';
		$m.__track_lines__[793] = 'pyjsdl.pyjsarray.py, line 793:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[795] = 'pyjsdl.pyjsarray.py, line 795:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[796] = 'pyjsdl.pyjsarray.py, line 796:\n    self.__data[i] = self.__data[i] * other.__data[i]';
		$m.__track_lines__[797] = 'pyjsdl.pyjsarray.py, line 797:\n    return None';
		$m.__track_lines__[799] = 'pyjsdl.pyjsarray.py, line 799:\n    def idiv(self, other):';
		$m.__track_lines__[804] = 'pyjsdl.pyjsarray.py, line 804:\n    try:';
		$m.__track_lines__[805] = 'pyjsdl.pyjsarray.py, line 805:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[806] = 'pyjsdl.pyjsarray.py, line 806:\n    self.__data[i] = self.__data[i] / other';
		$m.__track_lines__[808] = 'pyjsdl.pyjsarray.py, line 808:\n    if self._shape != other._shape:';
		$m.__track_lines__[809] = 'pyjsdl.pyjsarray.py, line 809:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[811] = 'pyjsdl.pyjsarray.py, line 811:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[812] = 'pyjsdl.pyjsarray.py, line 812:\n    self.__data[i] = self.__data[i] / other.__data[i]';
		$m.__track_lines__[813] = 'pyjsdl.pyjsarray.py, line 813:\n    return None';
		$m.__track_lines__[815] = 'pyjsdl.pyjsarray.py, line 815:\n    def bitwise_and(self, other):';
		$m.__track_lines__[821] = 'pyjsdl.pyjsarray.py, line 821:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[822] = 'pyjsdl.pyjsarray.py, line 822:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[823] = 'pyjsdl.pyjsarray.py, line 823:\n    ndarray._shape = self._shape';
		$m.__track_lines__[824] = 'pyjsdl.pyjsarray.py, line 824:\n    ndarray._indices = self._indices';
		$m.__track_lines__[825] = 'pyjsdl.pyjsarray.py, line 825:\n    try:';
		$m.__track_lines__[826] = 'pyjsdl.pyjsarray.py, line 826:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[827] = 'pyjsdl.pyjsarray.py, line 827:\n    ndarray.__data[i] = ndarray.__data[i] & other';
		$m.__track_lines__[829] = 'pyjsdl.pyjsarray.py, line 829:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[830] = 'pyjsdl.pyjsarray.py, line 830:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[832] = 'pyjsdl.pyjsarray.py, line 832:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[833] = 'pyjsdl.pyjsarray.py, line 833:\n    ndarray.__data[i] = ndarray.__data[i] & other.__data[i]';
		$m.__track_lines__[834] = 'pyjsdl.pyjsarray.py, line 834:\n    return ndarray';
		$m.__track_lines__[836] = 'pyjsdl.pyjsarray.py, line 836:\n    def bitwise_or(self, other):';
		$m.__track_lines__[842] = 'pyjsdl.pyjsarray.py, line 842:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[843] = 'pyjsdl.pyjsarray.py, line 843:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[844] = 'pyjsdl.pyjsarray.py, line 844:\n    ndarray._shape = self._shape';
		$m.__track_lines__[845] = 'pyjsdl.pyjsarray.py, line 845:\n    ndarray._indices = self._indices';
		$m.__track_lines__[846] = 'pyjsdl.pyjsarray.py, line 846:\n    try:';
		$m.__track_lines__[847] = 'pyjsdl.pyjsarray.py, line 847:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[848] = 'pyjsdl.pyjsarray.py, line 848:\n    ndarray.__data[i] = ndarray.__data[i] | other';
		$m.__track_lines__[850] = 'pyjsdl.pyjsarray.py, line 850:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[851] = 'pyjsdl.pyjsarray.py, line 851:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[853] = 'pyjsdl.pyjsarray.py, line 853:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[854] = 'pyjsdl.pyjsarray.py, line 854:\n    ndarray.__data[i] = ndarray.__data[i] | other.__data[i]';
		$m.__track_lines__[855] = 'pyjsdl.pyjsarray.py, line 855:\n    return ndarray';
		$m.__track_lines__[857] = 'pyjsdl.pyjsarray.py, line 857:\n    def bitwise_xor(self, other):';
		$m.__track_lines__[863] = 'pyjsdl.pyjsarray.py, line 863:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[864] = 'pyjsdl.pyjsarray.py, line 864:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[865] = 'pyjsdl.pyjsarray.py, line 865:\n    ndarray._shape = self._shape';
		$m.__track_lines__[866] = 'pyjsdl.pyjsarray.py, line 866:\n    ndarray._indices = self._indices';
		$m.__track_lines__[867] = 'pyjsdl.pyjsarray.py, line 867:\n    try:';
		$m.__track_lines__[868] = 'pyjsdl.pyjsarray.py, line 868:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[869] = 'pyjsdl.pyjsarray.py, line 869:\n    ndarray.__data[i] = ndarray.__data[i] ^ other';
		$m.__track_lines__[871] = 'pyjsdl.pyjsarray.py, line 871:\n    if ndarray._shape != other._shape:';
		$m.__track_lines__[872] = 'pyjsdl.pyjsarray.py, line 872:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[874] = 'pyjsdl.pyjsarray.py, line 874:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[875] = 'pyjsdl.pyjsarray.py, line 875:\n    ndarray.__data[i] = ndarray.__data[i] ^ other.__data[i]';
		$m.__track_lines__[876] = 'pyjsdl.pyjsarray.py, line 876:\n    return ndarray';
		$m.__track_lines__[878] = 'pyjsdl.pyjsarray.py, line 878:\n    def bitwise_iand(self, other):';
		$m.__track_lines__[883] = 'pyjsdl.pyjsarray.py, line 883:\n    try:';
		$m.__track_lines__[884] = 'pyjsdl.pyjsarray.py, line 884:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[885] = 'pyjsdl.pyjsarray.py, line 885:\n    self.__data[i] = self.__data[i] & other';
		$m.__track_lines__[887] = 'pyjsdl.pyjsarray.py, line 887:\n    if self._shape != other._shape:';
		$m.__track_lines__[888] = 'pyjsdl.pyjsarray.py, line 888:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[890] = 'pyjsdl.pyjsarray.py, line 890:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[891] = 'pyjsdl.pyjsarray.py, line 891:\n    self.__data[i] = self.__data[i] & other.__data[i]';
		$m.__track_lines__[892] = 'pyjsdl.pyjsarray.py, line 892:\n    return None';
		$m.__track_lines__[894] = 'pyjsdl.pyjsarray.py, line 894:\n    def bitwise_ior(self, other):';
		$m.__track_lines__[899] = 'pyjsdl.pyjsarray.py, line 899:\n    try:';
		$m.__track_lines__[900] = 'pyjsdl.pyjsarray.py, line 900:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[901] = 'pyjsdl.pyjsarray.py, line 901:\n    self.__data[i] = self.__data[i] | other';
		$m.__track_lines__[903] = 'pyjsdl.pyjsarray.py, line 903:\n    if self._shape != other._shape:';
		$m.__track_lines__[904] = 'pyjsdl.pyjsarray.py, line 904:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[906] = 'pyjsdl.pyjsarray.py, line 906:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[907] = 'pyjsdl.pyjsarray.py, line 907:\n    self.__data[i] = self.__data[i] | other.__data[i]';
		$m.__track_lines__[908] = 'pyjsdl.pyjsarray.py, line 908:\n    return None';
		$m.__track_lines__[910] = 'pyjsdl.pyjsarray.py, line 910:\n    def bitwise_ixor(self, other):';
		$m.__track_lines__[915] = 'pyjsdl.pyjsarray.py, line 915:\n    try:';
		$m.__track_lines__[916] = 'pyjsdl.pyjsarray.py, line 916:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[917] = 'pyjsdl.pyjsarray.py, line 917:\n    self.__data[i] = self.__data[i] ^ other';
		$m.__track_lines__[919] = 'pyjsdl.pyjsarray.py, line 919:\n    if self._shape != other._shape:';
		$m.__track_lines__[920] = 'pyjsdl.pyjsarray.py, line 920:\n    raise TypeError("array shapes are not compatible")';
		$m.__track_lines__[922] = 'pyjsdl.pyjsarray.py, line 922:\n    for i in xrange(len(self.__data)):';
		$m.__track_lines__[923] = 'pyjsdl.pyjsarray.py, line 923:\n    self.__data[i] = self.__data[i] ^ other.__data[i]';
		$m.__track_lines__[924] = 'pyjsdl.pyjsarray.py, line 924:\n    return None';
		$m.__track_lines__[926] = 'pyjsdl.pyjsarray.py, line 926:\n    def bitwise_not(self):';
		$m.__track_lines__[931] = 'pyjsdl.pyjsarray.py, line 931:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[932] = 'pyjsdl.pyjsarray.py, line 932:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[933] = 'pyjsdl.pyjsarray.py, line 933:\n    ndarray._shape = self._shape';
		$m.__track_lines__[934] = 'pyjsdl.pyjsarray.py, line 934:\n    ndarray._indices = self._indices';
		$m.__track_lines__[935] = 'pyjsdl.pyjsarray.py, line 935:\n    for i in xrange(len(ndarray.__data)):';
		$m.__track_lines__[936] = 'pyjsdl.pyjsarray.py, line 936:\n    ndarray.__data[i] = ~self.__data[i]';
		$m.__track_lines__[937] = 'pyjsdl.pyjsarray.py, line 937:\n    return ndarray';
		$m.__track_lines__[939] = 'pyjsdl.pyjsarray.py, line 939:\n    def setshape(self, *dim):';
		$m.__track_lines__[946] = 'pyjsdl.pyjsarray.py, line 946:\n    if isinstance(dim[0], tuple):';
		$m.__track_lines__[947] = 'pyjsdl.pyjsarray.py, line 947:\n    dim = dim[0]';
		$m.__track_lines__[948] = 'pyjsdl.pyjsarray.py, line 948:\n    size = 1';
		$m.__track_lines__[949] = 'pyjsdl.pyjsarray.py, line 949:\n    for i in dim:';
		$m.__track_lines__[950] = 'pyjsdl.pyjsarray.py, line 950:\n    size *= i';
		$m.__track_lines__[951] = 'pyjsdl.pyjsarray.py, line 951:\n    array_size = 1';
		$m.__track_lines__[952] = 'pyjsdl.pyjsarray.py, line 952:\n    for i in self._shape:';
		$m.__track_lines__[953] = 'pyjsdl.pyjsarray.py, line 953:\n    array_size *= i';
		$m.__track_lines__[954] = 'pyjsdl.pyjsarray.py, line 954:\n    if size != array_size:';
		$m.__track_lines__[955] = 'pyjsdl.pyjsarray.py, line 955:\n    raise TypeError("array size cannot change")';
		$m.__track_lines__[956] = 'pyjsdl.pyjsarray.py, line 956:\n    self._shape = dim';
		$m.__track_lines__[957] = 'pyjsdl.pyjsarray.py, line 957:\n    indices = []';
		$m.__track_lines__[958] = 'pyjsdl.pyjsarray.py, line 958:\n    for i in self._shape:';
		$m.__track_lines__[959] = 'pyjsdl.pyjsarray.py, line 959:\n    size /= i';
		$m.__track_lines__[960] = 'pyjsdl.pyjsarray.py, line 960:\n    indices.append(size)';
		$m.__track_lines__[961] = 'pyjsdl.pyjsarray.py, line 961:\n    self._indices = tuple(indices)';
		$m.__track_lines__[962] = 'pyjsdl.pyjsarray.py, line 962:\n    return None';
		$m.__track_lines__[964] = 'pyjsdl.pyjsarray.py, line 964:\n    def getshape(self):';
		$m.__track_lines__[969] = 'pyjsdl.pyjsarray.py, line 969:\n    return self._shape';
		$m.__track_lines__[971] = 'pyjsdl.pyjsarray.py, line 971:\n    def reshape(self, dim):';
		$m.__track_lines__[977] = 'pyjsdl.pyjsarray.py, line 977:\n    size = 1';
		$m.__track_lines__[978] = 'pyjsdl.pyjsarray.py, line 978:\n    for i in dim:';
		$m.__track_lines__[979] = 'pyjsdl.pyjsarray.py, line 979:\n    size *= i';
		$m.__track_lines__[980] = 'pyjsdl.pyjsarray.py, line 980:\n    array_size = 1';
		$m.__track_lines__[981] = 'pyjsdl.pyjsarray.py, line 981:\n    for i in self._shape:';
		$m.__track_lines__[982] = 'pyjsdl.pyjsarray.py, line 982:\n    array_size *= i';
		$m.__track_lines__[983] = 'pyjsdl.pyjsarray.py, line 983:\n    if size != array_size:';
		$m.__track_lines__[984] = 'pyjsdl.pyjsarray.py, line 984:\n    raise TypeError("array size cannot change")';
		$m.__track_lines__[985] = 'pyjsdl.pyjsarray.py, line 985:\n    subarray = self.__data.subarray(0)';
		$m.__track_lines__[986] = 'pyjsdl.pyjsarray.py, line 986:\n    array = Ndarray(subarray)';
		$m.__track_lines__[987] = 'pyjsdl.pyjsarray.py, line 987:\n    array._shape = dim';
		$m.__track_lines__[988] = 'pyjsdl.pyjsarray.py, line 988:\n    indices = []';
		$m.__track_lines__[989] = 'pyjsdl.pyjsarray.py, line 989:\n    for i in array._shape:';
		$m.__track_lines__[990] = 'pyjsdl.pyjsarray.py, line 990:\n    size /= i';
		$m.__track_lines__[991] = 'pyjsdl.pyjsarray.py, line 991:\n    indices.append(size)';
		$m.__track_lines__[992] = 'pyjsdl.pyjsarray.py, line 992:\n    array._indices = tuple(indices)';
		$m.__track_lines__[993] = 'pyjsdl.pyjsarray.py, line 993:\n    return array';
		$m.__track_lines__[995] = 'pyjsdl.pyjsarray.py, line 995:\n    def set(self, data):';
		$m.__track_lines__[1000] = 'pyjsdl.pyjsarray.py, line 1000:\n    if isinstance(data, (list,tuple)):';
		$m.__track_lines__[1001] = 'pyjsdl.pyjsarray.py, line 1001:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[1002] = 'pyjsdl.pyjsarray.py, line 1002:\n    if isinstance(data[0], (list,tuple,PyTypedArray)):';
		$m.__track_lines__[1003] = 'pyjsdl.pyjsarray.py, line 1003:\n    data = [value for dat in data for value in dat]';
		$m.__track_lines__[1005] = 'pyjsdl.pyjsarray.py, line 1005:\n    if not isinstance(data[0], (list,tuple,PyTypedArray)):';
		$m.__track_lines__[1006] = 'pyjsdl.pyjsarray.py, line 1006:\n    data = [dat.valueOf() for dat in data]';
		$m.__track_lines__[1008] = 'pyjsdl.pyjsarray.py, line 1008:\n    data = [value.valueOf() for dat in data for value in dat]';
		$m.__track_lines__[1009] = 'pyjsdl.pyjsarray.py, line 1009:\n    dataLn = len(data)';
		$m.__track_lines__[1010] = 'pyjsdl.pyjsarray.py, line 1010:\n    data = data.getArray()';
		$m.__track_lines__[1012] = 'pyjsdl.pyjsarray.py, line 1012:\n    data = data.getArray()';
		$m.__track_lines__[1013] = 'pyjsdl.pyjsarray.py, line 1013:\n    dataLn = data.length';
		$m.__track_lines__[1015] = 'pyjsdl.pyjsarray.py, line 1015:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[1016] = 'pyjsdl.pyjsarray.py, line 1016:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1017] = 'pyjsdl.pyjsarray.py, line 1017:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}};""")';
		$m.__track_lines__[1019] = 'pyjsdl.pyjsarray.py, line 1019:\n    data = data.valueOf()';
		$m.__track_lines__[1020] = 'pyjsdl.pyjsarray.py, line 1020:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1021] = 'pyjsdl.pyjsarray.py, line 1021:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}};""")';
		$m.__track_lines__[1022] = 'pyjsdl.pyjsarray.py, line 1022:\n    return None';
		$m.__track_lines__[1023] = 'pyjsdl.pyjsarray.py, line 1023:\n    if dataLn == self.__data.__data.length:';
		$m.__track_lines__[1024] = 'pyjsdl.pyjsarray.py, line 1024:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1025] = 'pyjsdl.pyjsarray.py, line 1025:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}}[@{{index}}];""")';
		$m.__track_lines__[1027] = 'pyjsdl.pyjsarray.py, line 1027:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1028] = 'pyjsdl.pyjsarray.py, line 1028:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{data}}[@{{index}}%@{{dataLn}}];""")';
		$m.__track_lines__[1029] = 'pyjsdl.pyjsarray.py, line 1029:\n    return None';
		$m.__track_lines__[1031] = 'pyjsdl.pyjsarray.py, line 1031:\n    def fill(self, value):';
		$m.__track_lines__[1035] = 'pyjsdl.pyjsarray.py, line 1035:\n    if pyjs_mode.optimized:';
		$m.__track_lines__[1036] = 'pyjsdl.pyjsarray.py, line 1036:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1037] = 'pyjsdl.pyjsarray.py, line 1037:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[1039] = 'pyjsdl.pyjsarray.py, line 1039:\n    value = value.valueOf()';
		$m.__track_lines__[1040] = 'pyjsdl.pyjsarray.py, line 1040:\n    for index in xrange(self.__data.__data.length):';
		$m.__track_lines__[1041] = 'pyjsdl.pyjsarray.py, line 1041:\n    JS("""@{{self}}[\'__data\'][\'__data\'][@{{index}}]=@{{value}};""")';
		$m.__track_lines__[1042] = 'pyjsdl.pyjsarray.py, line 1042:\n    return None';
		$m.__track_lines__[1044] = 'pyjsdl.pyjsarray.py, line 1044:\n    def copy(self):';
		$m.__track_lines__[1048] = 'pyjsdl.pyjsarray.py, line 1048:\n    array = Ndarray.__typedarray[self._dtype](self.__data)';
		$m.__track_lines__[1049] = 'pyjsdl.pyjsarray.py, line 1049:\n    ndarray = Ndarray(array, self._dtype)';
		$m.__track_lines__[1050] = 'pyjsdl.pyjsarray.py, line 1050:\n    ndarray._shape = self._shape';
		$m.__track_lines__[1051] = 'pyjsdl.pyjsarray.py, line 1051:\n    ndarray._indices = self._indices';
		$m.__track_lines__[1052] = 'pyjsdl.pyjsarray.py, line 1052:\n    return ndarray';
		$m.__track_lines__[1054] = 'pyjsdl.pyjsarray.py, line 1054:\n    def astype(self, dtype):';
		$m.__track_lines__[1059] = 'pyjsdl.pyjsarray.py, line 1059:\n    array = Ndarray.__typedarray[dtype](self.__data)';
		$m.__track_lines__[1060] = 'pyjsdl.pyjsarray.py, line 1060:\n    ndarray = Ndarray(array, dtype)';
		$m.__track_lines__[1061] = 'pyjsdl.pyjsarray.py, line 1061:\n    ndarray._shape = self._shape';
		$m.__track_lines__[1062] = 'pyjsdl.pyjsarray.py, line 1062:\n    ndarray._indices = self._indices';
		$m.__track_lines__[1063] = 'pyjsdl.pyjsarray.py, line 1063:\n    return ndarray';
		$m.__track_lines__[1065] = 'pyjsdl.pyjsarray.py, line 1065:\n    def view(self):';
		$m.__track_lines__[1069] = 'pyjsdl.pyjsarray.py, line 1069:\n    subarray = self.__data.subarray(0)';
		$m.__track_lines__[1070] = 'pyjsdl.pyjsarray.py, line 1070:\n    array = Ndarray(subarray)';
		$m.__track_lines__[1071] = 'pyjsdl.pyjsarray.py, line 1071:\n    array._shape = self._shape';
		$m.__track_lines__[1072] = 'pyjsdl.pyjsarray.py, line 1072:\n    array._indices = self._indices';
		$m.__track_lines__[1073] = 'pyjsdl.pyjsarray.py, line 1073:\n    return array';
		$m.__track_lines__[1075] = 'pyjsdl.pyjsarray.py, line 1075:\n    def swapaxes(self, axis1, axis2):';
		$m.__track_lines__[1081] = 'pyjsdl.pyjsarray.py, line 1081:\n    array = Ndarray(self.__data, self._dtype)';
		$m.__track_lines__[1082] = 'pyjsdl.pyjsarray.py, line 1082:\n    shape = list(self._shape)';
		$m.__track_lines__[1083] = 'pyjsdl.pyjsarray.py, line 1083:\n    shape[axis1], shape[axis2] = shape[axis2], shape[axis1]';
		$m.__track_lines__[1084] = 'pyjsdl.pyjsarray.py, line 1084:\n    array._shape = tuple(shape)';
		$m.__track_lines__[1085] = 'pyjsdl.pyjsarray.py, line 1085:\n    indices = list(self._indices)';
		$m.__track_lines__[1086] = 'pyjsdl.pyjsarray.py, line 1086:\n    indices[axis1], indices[axis2] = indices[axis2], indices[axis1]';
		$m.__track_lines__[1087] = 'pyjsdl.pyjsarray.py, line 1087:\n    array._indices = tuple(indices)';
		$m.__track_lines__[1088] = 'pyjsdl.pyjsarray.py, line 1088:\n    return array';
		$m.__track_lines__[1090] = 'pyjsdl.pyjsarray.py, line 1090:\n    def getArray(self):';
		$m.__track_lines__[1094] = 'pyjsdl.pyjsarray.py, line 1094:\n    return self.__data.getArray()';
		$m.__track_lines__[1097] = 'pyjsdl.pyjsarray.py, line 1097:\n    class NP:';
		$m.__track_lines__[1099] = 'pyjsdl.pyjsarray.py, line 1099:\n    def zeros(self, size, dtype):';
		$m.__track_lines__[1100] = "pyjsdl.pyjsarray.py, line 1100:\n    if dtype == 'i':";
		$m.__track_lines__[1101] = 'pyjsdl.pyjsarray.py, line 1101:\n    dtype = 3';
		$m.__track_lines__[1102] = 'pyjsdl.pyjsarray.py, line 1102:\n    return Ndarray(size, dtype)';
		$m.__track_lines__[1104] = 'pyjsdl.pyjsarray.py, line 1104:\n    def swapaxes(self, array, axis1, axis2):';
		$m.__track_lines__[1105] = 'pyjsdl.pyjsarray.py, line 1105:\n    return array.swapaxes(axis1, axis2)';
		$m.__track_lines__[1107] = 'pyjsdl.pyjsarray.py, line 1107:\n    def append(self, array, values):';
		$m.__track_lines__[1108] = 'pyjsdl.pyjsarray.py, line 1108:\n    if isinstance(values[0], (list,tuple,PyTypedArray)):';
		$m.__track_lines__[1109] = 'pyjsdl.pyjsarray.py, line 1109:\n    values = [value for dat in values for value in dat]';
		$m.__track_lines__[1110] = 'pyjsdl.pyjsarray.py, line 1110:\n    newarray = Ndarray(len(array)+len(values), array._dtype)';
		$m.__track_lines__[1111] = 'pyjsdl.pyjsarray.py, line 1111:\n    newarray.__data.set(array.__data)';
		$m.__track_lines__[1112] = 'pyjsdl.pyjsarray.py, line 1112:\n    newarray.__data.set(values, len(array))';
		$m.__track_lines__[1113] = 'pyjsdl.pyjsarray.py, line 1113:\n    return newarray';
		$m.__track_lines__[1115] = 'pyjsdl.pyjsarray.py, line 1115:\n    np = NP()';
		$m.__track_lines__[1118] = 'pyjsdl.pyjsarray.py, line 1118:\n    class PyImageData:';
		$m.__track_lines__[1120] = 'pyjsdl.pyjsarray.py, line 1120:\n    def __init__(self, imagedata):';
		$m.__track_lines__[1125] = 'pyjsdl.pyjsarray.py, line 1125:\n    self.__imagedata = imagedata';
		$m.__track_lines__[1126] = 'pyjsdl.pyjsarray.py, line 1126:\n    if not isUndefined(Uint8ClampedArray):';
		$m.__track_lines__[1127] = 'pyjsdl.pyjsarray.py, line 1127:\n    self.data = PyUint8ClampedArray()';
		$m.__track_lines__[1129] = 'pyjsdl.pyjsarray.py, line 1129:\n    self.data = PyCanvasPixelArray()';
		$m.__track_lines__[1130] = 'pyjsdl.pyjsarray.py, line 1130:\n    self.data.__data = imagedata.data';
		$m.__track_lines__[1131] = 'pyjsdl.pyjsarray.py, line 1131:\n    self.width = imagedata.width';
		$m.__track_lines__[1132] = 'pyjsdl.pyjsarray.py, line 1132:\n    self.height = imagedata.height';
		$m.__track_lines__[1134] = 'pyjsdl.pyjsarray.py, line 1134:\n    def getImageData(self):';
		$m.__track_lines__[1138] = 'pyjsdl.pyjsarray.py, line 1138:\n    return self.__imagedata';
		$m.__track_lines__[1141] = 'pyjsdl.pyjsarray.py, line 1141:\n    class PyImageMatrix(Ndarray):';
		$m.__track_lines__[1143] = 'pyjsdl.pyjsarray.py, line 1143:\n    def __init__(self, imagedata):';
		$m.__track_lines__[1148] = 'pyjsdl.pyjsarray.py, line 1148:\n    self.__imagedata = PyImageData(imagedata)';
		$m.__track_lines__[1149] = 'pyjsdl.pyjsarray.py, line 1149:\n    if isinstance(self.__imagedata.data, PyUint8ClampedArray):';
		$m.__track_lines__[1150] = 'pyjsdl.pyjsarray.py, line 1150:\n    Ndarray.__init__(self, self.__imagedata.data, 0)';
		$m.__track_lines__[1152] = 'pyjsdl.pyjsarray.py, line 1152:\n    Ndarray.__init__(self, self.__imagedata.data, 1)';
		$m.__track_lines__[1153] = 'pyjsdl.pyjsarray.py, line 1153:\n    self.setshape(self.__imagedata.height,self.__imagedata.width,4)';
		$m.__track_lines__[1155] = 'pyjsdl.pyjsarray.py, line 1155:\n    def getWidth(self):';
		$m.__track_lines__[1159] = 'pyjsdl.pyjsarray.py, line 1159:\n    return self.__imagedata.width';
		$m.__track_lines__[1161] = 'pyjsdl.pyjsarray.py, line 1161:\n    def getHeight(self):';
		$m.__track_lines__[1165] = 'pyjsdl.pyjsarray.py, line 1165:\n    return self.__imagedata.height';
		$m.__track_lines__[1167] = 'pyjsdl.pyjsarray.py, line 1167:\n    def getPixel(self, index):';
		$m.__track_lines__[1172] = 'pyjsdl.pyjsarray.py, line 1172:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1173] = 'pyjsdl.pyjsarray.py, line 1173:\n    return (self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2], self.__imagedata.data[i+3])';
		$m.__track_lines__[1175] = 'pyjsdl.pyjsarray.py, line 1175:\n    def setPixel(self, index, value):';
		$m.__track_lines__[1180] = 'pyjsdl.pyjsarray.py, line 1180:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1181] = 'pyjsdl.pyjsarray.py, line 1181:\n    self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2], self.__imagedata.data[i+3] = value[0], value[1], value[2], value[3]';
		$m.__track_lines__[1182] = 'pyjsdl.pyjsarray.py, line 1182:\n    return None';
		$m.__track_lines__[1184] = 'pyjsdl.pyjsarray.py, line 1184:\n    def getPixelRGB(self, index):';
		$m.__track_lines__[1189] = 'pyjsdl.pyjsarray.py, line 1189:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1190] = 'pyjsdl.pyjsarray.py, line 1190:\n    return (self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2])';
		$m.__track_lines__[1192] = 'pyjsdl.pyjsarray.py, line 1192:\n    def setPixelRGB(self, index, value):';
		$m.__track_lines__[1197] = 'pyjsdl.pyjsarray.py, line 1197:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1198] = 'pyjsdl.pyjsarray.py, line 1198:\n    self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2] = value[0], value[1], value[2]';
		$m.__track_lines__[1199] = 'pyjsdl.pyjsarray.py, line 1199:\n    return None';
		$m.__track_lines__[1201] = 'pyjsdl.pyjsarray.py, line 1201:\n    def getPixelAlpha(self, index):';
		$m.__track_lines__[1206] = 'pyjsdl.pyjsarray.py, line 1206:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1207] = 'pyjsdl.pyjsarray.py, line 1207:\n    return self.__imagedata.data[i+3]';
		$m.__track_lines__[1209] = 'pyjsdl.pyjsarray.py, line 1209:\n    def setPixelAlpha(self, index, value):';
		$m.__track_lines__[1214] = 'pyjsdl.pyjsarray.py, line 1214:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1215] = 'pyjsdl.pyjsarray.py, line 1215:\n    self.__imagedata.data[i+3] = value';
		$m.__track_lines__[1216] = 'pyjsdl.pyjsarray.py, line 1216:\n    return None';
		$m.__track_lines__[1218] = 'pyjsdl.pyjsarray.py, line 1218:\n    def getPixelInteger(self, index):';
		$m.__track_lines__[1223] = 'pyjsdl.pyjsarray.py, line 1223:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1224] = 'pyjsdl.pyjsarray.py, line 1224:\n    return self.__imagedata.data[i]<<16 | self.__imagedata.data[i+1]<<8 | self.__imagedata.data[i+2] | self.imagedata.data[i+3]<<24';
		$m.__track_lines__[1226] = 'pyjsdl.pyjsarray.py, line 1226:\n    def setPixelInteger(self, index, value):';
		$m.__track_lines__[1231] = 'pyjsdl.pyjsarray.py, line 1231:\n    i = (index[0]*self._indices[0]) + (index[1]*4)';
		$m.__track_lines__[1232] = 'pyjsdl.pyjsarray.py, line 1232:\n    self.__imagedata.data[i], self.__imagedata.data[i+1], self.__imagedata.data[i+2], self.__imagedata.data[i+3] = value>>16 & 0xff, value>>8 & 0xff, value & 0xff, value>>24 & 0xff';
		$m.__track_lines__[1233] = 'pyjsdl.pyjsarray.py, line 1233:\n    return None';
		$m.__track_lines__[1235] = 'pyjsdl.pyjsarray.py, line 1235:\n    def getImageData(self):';
		$m.__track_lines__[1239] = 'pyjsdl.pyjsarray.py, line 1239:\n    return self.__imagedata.getImageData()';
		$m.__track_lines__[1242] = 'pyjsdl.pyjsarray.py, line 1242:\n    class Pyjs_Mode:';
		$m.__track_lines__[1244] = 'pyjsdl.pyjsarray.py, line 1244:\n    def __init__(self):';
		$m.__track_lines__[1245] = 'pyjsdl.pyjsarray.py, line 1245:\n    self.strict, self.optimized = self._setmode()';
		$m.__track_lines__[1247] = 'pyjsdl.pyjsarray.py, line 1247:\n    def __getattr__(self, attr):';
		$m.__track_lines__[1248] = "pyjsdl.pyjsarray.py, line 1248:\n    if attr == '__strict_mode':";
		$m.__track_lines__[1249] = 'pyjsdl.pyjsarray.py, line 1249:\n    return True';
		$m.__track_lines__[1251] = 'pyjsdl.pyjsarray.py, line 1251:\n    def _setmode(self):';
		$m.__track_lines__[1252] = 'pyjsdl.pyjsarray.py, line 1252:\n    if self.__strict_mode == True:';
		$m.__track_lines__[1253] = 'pyjsdl.pyjsarray.py, line 1253:\n    return True, False';
		$m.__track_lines__[1255] = 'pyjsdl.pyjsarray.py, line 1255:\n    return False, True';
		$m.__track_lines__[1257] = 'pyjsdl.pyjsarray.py, line 1257:\n    pyjs_mode = Pyjs_Mode()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_24 = new $p['int'](24);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='pyjsdl.pyjsarray';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=28;
		$pyjs['track']['lineno']=31;
		$m['PyTypedArray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '70a02c5b3528836cc8d6d10a9ac9f62e';
			$pyjs['track']['lineno']=49;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length, typedarray) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					typedarray = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				if (typeof typedarray == 'undefined') typedarray=arguments['callee']['__args__'][6][1];
				var $and1,$and2;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=53;
				if ($p['bool'](data)) {
					$pyjs['track']['lineno']=54;
					if ($p['bool']($p['isinstance'](data, $p['int']))) {
						$pyjs['track']['lineno']=55;
						if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
							$pyjs['track']['lineno']=56;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data)) : $p['setattr'](self, '__data', new typedarray(data)); 
						}
						else {
							$pyjs['track']['lineno']=58;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['valueOf']())) : $p['setattr'](self, '__data', new typedarray(data['valueOf']())); 
						}
					}
					else if ($p['bool']($p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']])))) {
						$pyjs['track']['lineno']=60;
						if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
							$pyjs['track']['lineno']=61;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['getArray']())) : $p['setattr'](self, '__data', new typedarray(data['getArray']())); 
						}
						else {
							$pyjs['track']['lineno']=63;
							data = function(){
								var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,dat,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter1_iter = data;
							$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
							while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
								dat = $iter1_nextval['$nextval'];
								$collcomp1['append'](dat['valueOf']());
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp1;}();
							$pyjs['track']['lineno']=64;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['getArray']())) : $p['setattr'](self, '__data', new typedarray(data['getArray']())); 
						}
					}
					else if ($p['bool']($p['isinstance'](data, $m['PyTypedArray']))) {
						$pyjs['track']['lineno']=66;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data['__data'])) : $p['setattr'](self, '__data', new typedarray(data['__data'])); 
					}
					else {
						$pyjs['track']['lineno']=68;
						if ($p['bool'](($p['bool']($and1=$p['op_is'](offset, null))?$p['op_is'](length, null):$and1))) {
							$pyjs['track']['lineno']=69;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data)) : $p['setattr'](self, '__data', new typedarray(data)); 
						}
						else {
							$pyjs['track']['lineno']=71;
							if ($p['bool']($p['op_is'](offset, null))) {
								$pyjs['track']['lineno']=72;
								offset = $constant_int_0;
							}
							$pyjs['track']['lineno']=73;
							if ($p['bool']($p['op_is'](length, null))) {
								$pyjs['track']['lineno']=74;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data, offset)) : $p['setattr'](self, '__data', new typedarray(data, offset)); 
							}
							else {
								$pyjs['track']['lineno']=76;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', new typedarray(data, offset, length)) : $p['setattr'](self, '__data', new typedarray(data, offset, length)); 
							}
						}
					}
				}
				else {
					$pyjs['track']['lineno']=78;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', null) : $p['setattr'](self, '__data', null); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null],['typedarray', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=80;
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
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=80;
				$pyjs['track']['lineno']=84;
				$pyjs['track']['lineno']=84;
				var $pyjs__ret = self['__data']['toString']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=86;
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
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$add2,$add3,$add1,$add4;
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=86;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=90;
						index = $constant_int_0;
						$pyjs['track']['lineno']=91;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state['splice'](1, $generator_state['length']-1);
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0)||($p['bool'](($p['cmp'](index, $p['getattr']($p['getattr'](self, '__data'), 'length')) == -1)));$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=92;
								$pyjs['track']['lineno']=92;
								$yield_value = self['__getitem__'](index);
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
								$pyjs['track']['lineno']=93;
								index = $p['__op_add']($add3=index,$add4=$constant_int_1);
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
			$pyjs['track']['lineno']=95;
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
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=95;
				$pyjs['track']['lineno']=99;
				$pyjs['track']['lineno']=99;
				var $pyjs__ret = $p['int'](self['__data'][index]);;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=101;
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
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':101};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=101;
				$pyjs['track']['lineno']=105;
				if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
					$pyjs['track']['lineno']=106;
self['__data'][index]=value;
				}
				else {
					$pyjs['track']['lineno']=108;
					value = value['valueOf']();
					$pyjs['track']['lineno']=109;
self['__data'][index]=value;
				}
				$pyjs['track']['lineno']=110;
				$pyjs['track']['lineno']=110;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=112;
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
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=112;
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=116;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'length');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=118;
			$method = $pyjs__bind_method2('set', function(data, offset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=118;
				$pyjs['track']['lineno']=122;
				if ($p['bool']($p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']])))) {
					$pyjs['track']['lineno']=123;
					if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
						$pyjs['track']['lineno']=124;
						self['__data']['set'](data['getArray'](), offset);
					}
					else {
						$pyjs['track']['lineno']=126;
						data = function(){
							var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,dat,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp2 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter2_iter = data;
						$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
						while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
							dat = $iter2_nextval['$nextval'];
							$collcomp2['append'](dat['valueOf']());
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp2;}();
						$pyjs['track']['lineno']=127;
						self['__data']['set'](data['getArray'](), offset);
					}
				}
				else if ($p['bool']($p['isinstance'](data, $m['PyTypedArray']))) {
					$pyjs['track']['lineno']=129;
					self['__data']['set']($p['getattr'](data, '__data'), offset);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data'],['offset', $constant_int_0]]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=131;
			$method = $pyjs__bind_method2('subarray', function(begin, end) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					begin = arguments[1];
					end = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
				var array,pytypedarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':131};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=131;
				$pyjs['track']['lineno']=135;
				if ($p['bool']($p['op_is'](end, null))) {
					$pyjs['track']['lineno']=136;
					end = $p['getattr']($p['getattr'](self, '__data'), 'length');
				}
				$pyjs['track']['lineno']=137;
				array = self['__data']['subarray'](begin, end);
				$pyjs['track']['lineno']=138;
				pytypedarray = self['__class__']();
				$pyjs['track']['lineno']=139;
				pytypedarray['__is_instance__'] && typeof pytypedarray['__setattr__'] == 'function' ? pytypedarray['__setattr__']('__data', array) : $p['setattr'](pytypedarray, '__data', array); 
				$pyjs['track']['lineno']=140;
				$pyjs['track']['lineno']=140;
				var $pyjs__ret = pytypedarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['begin'],['end', null]]);
			$cls_definition['subarray'] = $method;
			$pyjs['track']['lineno']=142;
			$method = $pyjs__bind_method2('getLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':142};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=142;
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=146;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'length');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getLength'] = $method;
			$pyjs['track']['lineno']=148;
			$method = $pyjs__bind_method2('getByteLength', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=148;
				$pyjs['track']['lineno']=152;
				$pyjs['track']['lineno']=152;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'byteLength');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getByteLength'] = $method;
			$pyjs['track']['lineno']=154;
			$method = $pyjs__bind_method2('getBuffer', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':154};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=154;
				$pyjs['track']['lineno']=158;
				$pyjs['track']['lineno']=158;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'buffer');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBuffer'] = $method;
			$pyjs['track']['lineno']=160;
			$method = $pyjs__bind_method2('getByteOffset', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=160;
				$pyjs['track']['lineno']=164;
				$pyjs['track']['lineno']=164;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'byteOffset');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getByteOffset'] = $method;
			$pyjs['track']['lineno']=166;
			$method = $pyjs__bind_method2('getBytesPerElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=166;
				$pyjs['track']['lineno']=170;
				$pyjs['track']['lineno']=170;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__data'), 'BYTES_PER_ELEMENT');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getBytesPerElement'] = $method;
			$pyjs['track']['lineno']=172;
			$method = $pyjs__bind_method2('getArray', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':172};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=172;
				$pyjs['track']['lineno']=176;
				$pyjs['track']['lineno']=176;
				var $pyjs__ret = $p['getattr'](self, '__data');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getArray'] = $method;
			$pyjs['track']['lineno']=178;
			$method = $pyjs__bind_method2('setArray', function(array) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					array = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '70a02c5b3528836cc8d6d10a9ac9f62e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':178};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=178;
				$pyjs['track']['lineno']=182;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', array) : $p['setattr'](self, '__data', array); 
				$pyjs['track']['lineno']=183;
				$pyjs['track']['lineno']=183;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['array']]);
			$cls_definition['setArray'] = $method;
			$pyjs['track']['lineno']=31;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyTypedArray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=186;
		$m['PyUint8ClampedArray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'd99eb9565b2c690ebf5f4fcb4823b7e5';
			$pyjs['track']['lineno']=191;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'd99eb9565b2c690ebf5f4fcb4823b7e5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':191};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=191;
				$pyjs['track']['lineno']=192;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=193;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=195;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=196;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=198;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=186;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint8ClampedArray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=201;
		$m['PyUint8Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '18256fff8d59e575361cf913697883a1';
			$pyjs['track']['lineno']=206;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '18256fff8d59e575361cf913697883a1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':206};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=206;
				$pyjs['track']['lineno']=207;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=208;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint8Array == "undefined"?$m['Uint8Array']:Uint8Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=210;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=211;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=213;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=201;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint8Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=216;
		$m['PyUint16Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '102db1ce5607df3aaeaf6a0e02891ae1';
			$pyjs['track']['lineno']=221;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '102db1ce5607df3aaeaf6a0e02891ae1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':221};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=221;
				$pyjs['track']['lineno']=222;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=223;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint16Array == "undefined"?$m['Uint16Array']:Uint16Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=225;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=226;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=228;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=216;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint16Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=231;
		$m['PyUint32Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'db2d620c287ef3ef3ae95fec93bb7d3d';
			$pyjs['track']['lineno']=236;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'db2d620c287ef3ef3ae95fec93bb7d3d') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=236;
				$pyjs['track']['lineno']=237;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=238;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Uint32Array == "undefined"?$m['Uint32Array']:Uint32Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=240;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=241;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=243;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=231;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyUint32Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=246;
		$m['PyInt8Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'da1251bcfbf984c08dd1720347908b25';
			$pyjs['track']['lineno']=251;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'da1251bcfbf984c08dd1720347908b25') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':251};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=251;
				$pyjs['track']['lineno']=252;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=253;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int8Array == "undefined"?$m['Int8Array']:Int8Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=255;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=256;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=258;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=246;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyInt8Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=261;
		$m['PyInt16Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '4f92507ccbe47d0029537da25caf0c5c';
			$pyjs['track']['lineno']=266;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '4f92507ccbe47d0029537da25caf0c5c') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':266};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=266;
				$pyjs['track']['lineno']=267;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=268;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int16Array == "undefined"?$m['Int16Array']:Int16Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=270;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=271;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=273;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=261;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyInt16Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=276;
		$m['PyInt32Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '9636ee6a131d7438e7ff0572c2229496';
			$pyjs['track']['lineno']=281;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9636ee6a131d7438e7ff0572c2229496') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':281};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=281;
				$pyjs['track']['lineno']=282;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=283;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Int32Array == "undefined"?$m['Int32Array']:Int32Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=285;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=286;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=288;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=276;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyInt32Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=291;
		$m['PyFloat32Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '3fa84ed814b71f1bdd52a93897440c10';
			$pyjs['track']['lineno']=296;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3fa84ed814b71f1bdd52a93897440c10') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':296};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=296;
				$pyjs['track']['lineno']=297;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=298;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float32Array == "undefined"?$m['Float32Array']:Float32Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=300;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=301;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=303;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=305;
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
					if (self.prototype['__md5__'] !== '3fa84ed814b71f1bdd52a93897440c10') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':305};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=305;
				$pyjs['track']['lineno']=309;
				$pyjs['track']['lineno']=309;
				var $pyjs__ret = self['__data'][index];;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=291;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyFloat32Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=312;
		$m['PyFloat64Array'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '066d20f1ba099fb286dbf7d1b56aa8b6';
			$pyjs['track']['lineno']=317;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '066d20f1ba099fb286dbf7d1b56aa8b6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':317};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=317;
				$pyjs['track']['lineno']=318;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=319;
					$pyjs_kwargs_call($m['PyTypedArray'], '__init__', null, null, [{'typedarray':(typeof Float64Array == "undefined"?$m['Float64Array']:Float64Array)}, self, data, offset, length]);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=321;
						if ($p['bool']($p['isUndefined']((typeof typedarray == "undefined"?$m['typedarray']:typedarray)))) {
							$pyjs['track']['lineno']=322;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['NotImplementedError']('TypedArray data type not implemented'));
						}
						else {
							$pyjs['track']['lineno']=324;
							$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
							$pyjs['__last_exception_stack__'] = null;
							throw ($pyjs['__last_exception__']?
								$pyjs['__last_exception__']['error']:
								$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=326;
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
					if (self.prototype['__md5__'] !== '066d20f1ba099fb286dbf7d1b56aa8b6') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':326};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=326;
				$pyjs['track']['lineno']=330;
				$pyjs['track']['lineno']=330;
				var $pyjs__ret = self['__data'][index];;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=312;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyFloat64Array', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=333;
		$m['PyCanvasPixelArray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '8dc0b399a885282b15873767cb5b9766';
			$pyjs['track']['lineno']=338;
			$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					length = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8dc0b399a885282b15873767cb5b9766') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':338};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=338;
				$pyjs['track']['lineno']=339;
				$m['PyTypedArray']['__init__'](self, data, offset, length);
				$pyjs['track']['lineno']=340;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_superArray', null) : $p['setattr'](self, '_superArray', null); 
				$pyjs['track']['lineno']=341;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_superIndex', $p['tuple']([$constant_int_0, $constant_int_0])) : $p['setattr'](self, '_superIndex', $p['tuple']([$constant_int_0, $constant_int_0])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=343;
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
					if (self.prototype['__md5__'] !== '8dc0b399a885282b15873767cb5b9766') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var index,$add6,$add7,$add5,$add8;
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=343;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=347;
						$generator_state[2] = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))))) {
							$generator_state[1]=1;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=348;
								$m['PyTypedArray']['__iter__'](self);
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
							}
						}
						else if ($generator_state[1]==0||$generator_state[1]==2) {
							$generator_state[1]=2;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=350;
								index = $p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0);
								$pyjs['track']['lineno']=351;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								$generator_state['splice'](3, $generator_state['length']-3);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
								for (;($generator_state[3] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '_superIndex')['__getitem__']($constant_int_1)) == -1)));$generator_state[3] = 0) {
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$pyjs['track']['lineno']=352;
										$pyjs['track']['lineno']=352;
										$yield_value = $p['getattr'](self, '_superArray')['__getitem__'](index);
										$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
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
										$pyjs['track']['lineno']=353;
										index = $p['__op_add']($add7=index,$add8=$constant_int_1);
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=3;
							}
							if ($generator_state[2] == 3) {
								$generator_state[2]=4;
							}
							if ($generator_state[2] == 4) {
							}
						}
						$generator_state[1]=0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
					}

					return;
				};
				return $generator;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=355;
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
					if (self.prototype['__md5__'] !== '8dc0b399a885282b15873767cb5b9766') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add9,$add10;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':355};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=355;
				$pyjs['track']['lineno']=359;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))) {
					$pyjs['track']['lineno']=360;
					$pyjs['track']['lineno']=360;
					var $pyjs__ret = $m['PyTypedArray']['__getitem__'](self, index);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=362;
					$pyjs['track']['lineno']=362;
					var $pyjs__ret = self['_superArray']['__getitem__']($p['__op_add']($add9=index,$add10=$p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=364;
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
					if (self.prototype['__md5__'] !== '8dc0b399a885282b15873767cb5b9766') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,$add11;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':364};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=364;
				$pyjs['track']['lineno']=368;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))) {
					$pyjs['track']['lineno']=369;
					$m['PyTypedArray']['__setitem__'](self, index, value);
				}
				else {
					$pyjs['track']['lineno']=371;
					self['_superArray']['__setitem__']($p['__op_add']($add11=index,$add12=$p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0)), value);
				}
				$pyjs['track']['lineno']=372;
				$pyjs['track']['lineno']=372;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=374;
			$method = $pyjs__bind_method2('set', function(data, offset) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					offset = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8dc0b399a885282b15873767cb5b9766') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
				var index,$iter3_idx,$iter3_array,$add16,$add14,$add15,$pyjs__trackstack_size_1,$iter3_iter,$add13,$iter3_type,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':374};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=374;
				$pyjs['track']['lineno']=378;
				if ($p['bool'](!$p['bool']($p['getattr'](self, '_superArray')))) {
					$pyjs['track']['lineno']=379;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = $p['xrange']($p['len'](data));
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						index = $iter3_nextval['$nextval'];
						$pyjs['track']['lineno']=380;
						self['__setitem__']($p['__op_add']($add13=index,$add14=offset), data['__getitem__'](index));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=382;
					self['_superArray']['set'](data, $p['__op_add']($add15=offset,$add16=$p['getattr'](self, '_superIndex')['__getitem__']($constant_int_0)));
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['data'],['offset', $constant_int_0]]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=384;
			$method = $pyjs__bind_method2('subarray', function(begin, end) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					begin = arguments[1];
					end = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8dc0b399a885282b15873767cb5b9766') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
				var array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':384};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=384;
				$pyjs['track']['lineno']=388;
				if ($p['bool']($p['op_is'](end, null))) {
					$pyjs['track']['lineno']=389;
					end = $p['getattr']($p['getattr'](self, '__data'), 'length');
				}
				$pyjs['track']['lineno']=390;
				array = self['__class__']();
				$pyjs['track']['lineno']=391;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('__data', $p['getattr'](self, '__data')) : $p['setattr'](array, '__data', $p['getattr'](self, '__data')); 
				$pyjs['track']['lineno']=392;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_superArray', self) : $p['setattr'](array, '_superArray', self); 
				$pyjs['track']['lineno']=393;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_superIndex', $p['tuple']([begin, end])) : $p['setattr'](array, '_superIndex', $p['tuple']([begin, end])); 
				$pyjs['track']['lineno']=394;
				$pyjs['track']['lineno']=394;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['begin'],['end', null]]);
			$cls_definition['subarray'] = $method;
			$pyjs['track']['lineno']=333;
			var $bases = new Array($m['PyTypedArray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyCanvasPixelArray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=397;
		$m['Ndarray'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'ff77b2337bfa3914cc0e20c71b4d99cd';
			$pyjs['track']['lineno']=399;
			$cls_definition['__typedarray'] = $p['dict']([[$constant_int_0, $m['PyUint8ClampedArray']], [$constant_int_1, $m['PyUint8Array']], [$constant_int_2, $m['PyUint16Array']], [$constant_int_3, $m['PyUint32Array']], [$constant_int_4, $m['PyInt8Array']], [$constant_int_5, $m['PyInt16Array']], [$constant_int_6, $m['PyInt32Array']], [$constant_int_7, $m['PyFloat32Array']], [$constant_int_8, $m['PyFloat64Array']]]);
			$pyjs['track']['lineno']=409;
			$method = $pyjs__bind_method2('__init__', function(dim, dtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					dim = arguments[1];
					dtype = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof dtype == 'undefined') dtype=arguments['callee']['__args__'][4][1];
				var $iter5_nextval,$iter5_idx,$div2,i,$iter4_nextval,$pyjs__trackstack_size_1,$iter5_array,$iter4_idx,indices,$iter5_iter,$iter4_type,$iter4_array,$iter5_type,$div1,$iter4_iter,$mul2,$mul1,size;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':409};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=409;
				$pyjs['track']['lineno']=424;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_dtype', dtype) : $p['setattr'](self, '_dtype', dtype); 
				$pyjs['track']['lineno']=425;
				if ($p['bool']($p['isinstance'](dim, $p['tuple']))) {
					$pyjs['track']['lineno']=426;
					size = $constant_int_1;
					$pyjs['track']['lineno']=427;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = dim;
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						i = $iter4_nextval['$nextval'];
						$pyjs['track']['lineno']=428;
						size = (typeof ($mul1=size)==typeof ($mul2=i) && typeof $mul1=='number'?
							$mul1*$mul2:
							$p['op_mul']($mul1,$mul2));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=429;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(size)) : $p['setattr'](self, '__data', $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(size)); 
					$pyjs['track']['lineno']=430;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', dim) : $p['setattr'](self, '_shape', dim); 
					$pyjs['track']['lineno']=431;
					indices = $p['list']([]);
					$pyjs['track']['lineno']=432;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter5_iter = $p['getattr'](self, '_shape');
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						i = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=433;
						size = (typeof ($div1=size)==typeof ($div2=i) && typeof $div1=='number' && $div2 !== 0?
							$div1/$div2:
							$p['op_div']($div1,$div2));
						$pyjs['track']['lineno']=434;
						indices['append'](size);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=435;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', $p['tuple'](indices)) : $p['setattr'](self, '_indices', $p['tuple'](indices)); 
				}
				else if ($p['bool']($p['isinstance'](dim, $p['int']))) {
					$pyjs['track']['lineno']=437;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim)) : $p['setattr'](self, '__data', $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim)); 
					$pyjs['track']['lineno']=438;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', $p['tuple']([dim])) : $p['setattr'](self, '_shape', $p['tuple']([dim])); 
					$pyjs['track']['lineno']=439;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)])) : $p['setattr'](self, '_indices', $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)])); 
				}
				else if ($p['bool']($p['isinstance'](dim, $p['list']))) {
					$pyjs['track']['lineno']=441;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim)) : $p['setattr'](self, '__data', $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)(dim)); 
					$pyjs['track']['lineno']=442;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', $p['tuple']([$p['len'](dim)])) : $p['setattr'](self, '_shape', $p['tuple']([$p['len'](dim)])); 
					$pyjs['track']['lineno']=443;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)])) : $p['setattr'](self, '_indices', $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)])); 
				}
				else {
					$pyjs['track']['lineno']=445;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__data', dim) : $p['setattr'](self, '__data', dim); 
					$pyjs['track']['lineno']=446;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', $p['tuple']([$p['len'](dim)])) : $p['setattr'](self, '_shape', $p['tuple']([$p['len'](dim)])); 
					$pyjs['track']['lineno']=447;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)])) : $p['setattr'](self, '_indices', $p['tuple']([$p['getattr'](self, '_shape')['__getitem__']($constant_int_0)])); 
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['dim'],['dtype', $constant_int_8]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=450;
			$method = $pyjs__bind_method2('shape', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':450};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=450;
				$pyjs['track']['lineno']=455;
				$pyjs['track']['lineno']=455;
				var $pyjs__ret = $p['getattr'](self, '_shape');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['shape'] = $p['property']($p['staticmethod']($method));
			$pyjs['track']['lineno']=458;
			$method = $pyjs__bind_method2('shape', function(dim) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dim = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':458};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=458;
				$pyjs['track']['lineno']=465;
				self['setshape'](dim);
				$pyjs['track']['lineno']=466;
				$pyjs['track']['lineno']=466;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['dim']]);
			$cls_definition['shape'] = $cls_definition['shape']['setter']($p['staticmethod']($method));
			$pyjs['track']['lineno']=468;
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var begin,end,indexLn,$mul8,$pyjs_try_err,$add19,shapeLn,$add17,$add20,subarray,$mul7,$sub2,$sub1,$add18,array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':468};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=468;
				$pyjs['track']['lineno']=469;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=470;
					var $tupleassign1 = $p['__ass_unpack']($p['tuple']([index['__len__'](), $p['len']($p['getattr'](self, '_shape'))]), 2, null);
					indexLn = $tupleassign1[0];
					shapeLn = $tupleassign1[1];
					$pyjs['track']['lineno']=471;
					if ($p['bool']($p['op_eq'](indexLn, shapeLn))) {
						$pyjs['track']['lineno']=472;
						$pyjs['track']['lineno']=472;
						var $pyjs__ret = $p['getattr'](self, '__data')['__getitem__']($p['sum'](function(){
							var $iter6_idx,$iter6_type,$collcomp3,i,$iter6_array,$pyjs__trackstack_size_2,$iter6_iter,$mul4,$mul3,$iter6_nextval;
	$collcomp3 = $p['list']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter6_iter = $p['range'](indexLn);
						$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
						while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
							i = $iter6_nextval['$nextval'];
							$collcomp3['append']((typeof ($mul3=index['__getitem__'](i))==typeof ($mul4=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul3=='number'?
								$mul3*$mul4:
								$p['op_mul']($mul3,$mul4)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp3;}()));
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=474;
						begin = $p['sum'](function(){
							var $iter7_array,$iter7_nextval,i,$iter7_iter,$collcomp4,$pyjs__trackstack_size_2,$iter7_idx,$mul6,$mul5,$iter7_type;
	$collcomp4 = $p['list']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter7_iter = $p['range'](indexLn);
						$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
						while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
							i = $iter7_nextval['$nextval'];
							$collcomp4['append']((typeof ($mul5=index['__getitem__'](i))==typeof ($mul6=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul5=='number'?
								$mul5*$mul6:
								$p['op_mul']($mul5,$mul6)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp4;}());
						$pyjs['track']['lineno']=475;
						end = $p['__op_add']($add17=begin,$add18=$p['getattr'](self, '_indices')['__getitem__']($p['__op_sub']($sub1=indexLn,$sub2=$constant_int_1)));
						$pyjs['track']['lineno']=476;
						subarray = self['__data']['subarray'](begin, end);
						$pyjs['track']['lineno']=477;
						array = $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
						$pyjs['track']['lineno']=478;
						array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['__getslice']($p['getattr'](self, '_shape'), indexLn, null)) : $p['setattr'](array, '_shape', $p['__getslice']($p['getattr'](self, '_shape'), indexLn, null)); 
						$pyjs['track']['lineno']=479;
						array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['__getslice']($p['getattr'](self, '_indices'), indexLn, null)) : $p['setattr'](array, '_indices', $p['__getslice']($p['getattr'](self, '_indices'), indexLn, null)); 
						$pyjs['track']['lineno']=480;
						$pyjs['track']['lineno']=480;
						var $pyjs__ret = array;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=482;
						if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, '_shape')), $constant_int_1))) {
							$pyjs['track']['lineno']=483;
							$pyjs['track']['lineno']=483;
							var $pyjs__ret = $p['getattr'](self, '__data')['__getitem__'](index);
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
						else {
							$pyjs['track']['lineno']=485;
							begin = (typeof ($mul7=index)==typeof ($mul8=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul7=='number'?
								$mul7*$mul8:
								$p['op_mul']($mul7,$mul8));
							$pyjs['track']['lineno']=486;
							end = $p['__op_add']($add19=begin,$add20=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0));
							$pyjs['track']['lineno']=487;
							subarray = self['__data']['subarray'](begin, end);
							$pyjs['track']['lineno']=488;
							array = $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
							$pyjs['track']['lineno']=489;
							array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)) : $p['setattr'](array, '_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)); 
							$pyjs['track']['lineno']=490;
							array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)) : $p['setattr'](array, '_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)); 
							$pyjs['track']['lineno']=491;
							$pyjs['track']['lineno']=491;
							var $pyjs__ret = array;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['__getitem__'] = $method;
			$pyjs['track']['lineno']=493;
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var begin,$mul14,end,$mul13,$add21,indexLn,$add22,$add24,shapeLn,$pyjs_try_err,$sub3,subarray,unpack,$add23,$sub4;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':493};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=493;
				$pyjs['track']['lineno']=494;
				unpack = function(obj, lst) {
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
					if (typeof lst == 'undefined') lst=arguments['callee']['__args__'][3][1];
					var $iter8_type,$iter8_array,element,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_idx;
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':494};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=494;
					$pyjs['track']['lineno']=495;
					if ($p['bool']($p['op_is'](lst, null))) {
						$pyjs['track']['lineno']=496;
						lst = $p['list']([]);
					}
					$pyjs['track']['lineno']=497;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter8_iter = obj;
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						element = $iter8_nextval['$nextval'];
						$pyjs['track']['lineno']=498;
						if ($p['bool']($p['isinstance'](element, $p['tuple']([$p['list'], $p['tuple']])))) {
							$pyjs['track']['lineno']=499;
							unpack(element, lst);
						}
						else {
							$pyjs['track']['lineno']=501;
							lst['append'](element);
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=502;
					$pyjs['track']['lineno']=502;
					var $pyjs__ret = lst;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				unpack['__name__'] = 'unpack';

				unpack['__bind_type__'] = 0;
				unpack['__args__'] = [null,null,['obj'],['lst', null]];
				$pyjs['track']['lineno']=503;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=504;
					var $tupleassign2 = $p['__ass_unpack']($p['tuple']([index['__len__'](), $p['len']($p['getattr'](self, '_shape'))]), 2, null);
					indexLn = $tupleassign2[0];
					shapeLn = $tupleassign2[1];
					$pyjs['track']['lineno']=505;
					if ($p['bool']($p['op_eq'](indexLn, shapeLn))) {
						$pyjs['track']['lineno']=506;
						$p['getattr'](self, '__data')['__setitem__']($p['sum'](function(){
							var $iter9_iter,i,$collcomp5,$mul10,$iter9_nextval,$iter9_idx,$iter9_type,$pyjs__trackstack_size_2,$mul9,$iter9_array;
	$collcomp5 = $p['list']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter9_iter = $p['range'](indexLn);
						$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
						while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
							i = $iter9_nextval['$nextval'];
							$collcomp5['append']((typeof ($mul9=index['__getitem__'](i))==typeof ($mul10=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul9=='number'?
								$mul9*$mul10:
								$p['op_mul']($mul9,$mul10)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp5;}()), value);
					}
					else {
						$pyjs['track']['lineno']=508;
						begin = $p['sum'](function(){
							var $iter10_nextval,$mul12,$mul11,i,$collcomp6,$iter10_idx,$iter10_array,$pyjs__trackstack_size_2,$iter10_type,$iter10_iter;
	$collcomp6 = $p['list']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter10_iter = $p['range'](indexLn);
						$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
						while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
							i = $iter10_nextval['$nextval'];
							$collcomp6['append']((typeof ($mul11=index['__getitem__'](i))==typeof ($mul12=$p['getattr'](self, '_indices')['__getitem__'](i)) && typeof $mul11=='number'?
								$mul11*$mul12:
								$p['op_mul']($mul11,$mul12)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp6;}());
						$pyjs['track']['lineno']=509;
						end = $p['__op_add']($add21=begin,$add22=$p['getattr'](self, '_indices')['__getitem__']($p['__op_sub']($sub3=indexLn,$sub4=$constant_int_1)));
						$pyjs['track']['lineno']=510;
						subarray = self['__data']['subarray'](begin, end);
						$pyjs['track']['lineno']=511;
						if ($p['bool']($p['isinstance'](value, $m['Ndarray']))) {
							$pyjs['track']['lineno']=512;
							value = $p['getattr'](value, '__data');
						}
						else {
							$pyjs['track']['lineno']=514;
							if ($p['bool']($p['isinstance'](value['__getitem__']($constant_int_0), $p['tuple']([$p['list'], $p['tuple']])))) {
								$pyjs['track']['lineno']=515;
								value = unpack(value);
							}
						}
						$pyjs['track']['lineno']=516;
						subarray['set'](value);
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$pyjs['track']['lineno']=518;
						if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, '_shape')), $constant_int_1))) {
							$pyjs['track']['lineno']=519;
							$p['getattr'](self, '__data')['__setitem__'](index, value);
						}
						else {
							$pyjs['track']['lineno']=521;
							begin = (typeof ($mul13=index)==typeof ($mul14=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul13=='number'?
								$mul13*$mul14:
								$p['op_mul']($mul13,$mul14));
							$pyjs['track']['lineno']=522;
							end = $p['__op_add']($add23=begin,$add24=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0));
							$pyjs['track']['lineno']=523;
							subarray = self['__data']['subarray'](begin, end);
							$pyjs['track']['lineno']=524;
							if ($p['bool']($p['isinstance'](value, $m['Ndarray']))) {
								$pyjs['track']['lineno']=525;
								value = $p['getattr'](value, '__data');
							}
							else {
								$pyjs['track']['lineno']=527;
								if ($p['bool']($p['isinstance'](value['__getitem__']($constant_int_0), $p['tuple']([$p['list'], $p['tuple']])))) {
									$pyjs['track']['lineno']=528;
									value = unpack(value);
								}
							}
							$pyjs['track']['lineno']=529;
							subarray['set'](value);
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=530;
				$pyjs['track']['lineno']=530;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['__setitem__'] = $method;
			$pyjs['track']['lineno']=532;
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var subarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':532};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=532;
				$pyjs['track']['lineno']=533;
				subarray = self['__data']['subarray'](lower, upper);
				$pyjs['track']['lineno']=534;
				$pyjs['track']['lineno']=534;
				var $pyjs__ret = $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['lower'],['upper']]);
			$cls_definition['__getslice__'] = $method;
			$pyjs['track']['lineno']=536;
			$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					lower = arguments[1];
					upper = arguments[2];
					data = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var subarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':536};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=536;
				$pyjs['track']['lineno']=537;
				subarray = self['__data']['subarray'](lower, upper);
				$pyjs['track']['lineno']=538;
				subarray['set'](data);
				$pyjs['track']['lineno']=539;
				$pyjs['track']['lineno']=539;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
			$cls_definition['__setslice__'] = $method;
			$pyjs['track']['lineno']=541;
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,$mul18,$add29,index,end,$add25,$add27,$add26,subarray,begin,$add28,$mul17,$mul16,$mul15,$add32,$add33,$add30,$add31,$add36,$add34,$add35;
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				$pyjs['track']['module']='pyjsdl.pyjsarray';
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
				
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':541};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=541;
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$pyjs['track']['lineno']=542;
						$generator_state[2] = 0;
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						if(($generator_state[1]==1)||($generator_state[1]<1&&($p['bool'](($p['cmp']($p['len']($p['getattr'](self, '_shape')), $constant_int_1) == 1))))) {
							$generator_state[1]=1;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=543;
								index = $constant_int_0;
								$pyjs['track']['lineno']=544;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								$generator_state['splice'](3, $generator_state['length']-3);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
								for (;($generator_state[3] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '_shape')['__getitem__']($constant_int_0)) == -1)));$generator_state[3] = 0) {
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$pyjs['track']['lineno']=545;
										begin = (typeof ($mul17=index)==typeof ($mul18=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul17=='number'?
											$mul17*$mul18:
											$p['op_mul']($mul17,$mul18));
										$pyjs['track']['lineno']=546;
										end = $p['__op_add']($add31=begin,$add32=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0));
										$pyjs['track']['lineno']=547;
										subarray = self['__data']['subarray'](begin, end);
										$pyjs['track']['lineno']=548;
										array = $m['Ndarray'](subarray, $p['getattr'](self, '_dtype'));
										$pyjs['track']['lineno']=549;
										array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)) : $p['setattr'](array, '_shape', $p['__getslice']($p['getattr'](self, '_shape'), $constant_int_1, null)); 
										$pyjs['track']['lineno']=550;
										array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)) : $p['setattr'](array, '_indices', $p['__getslice']($p['getattr'](self, '_indices'), $constant_int_1, null)); 
										$pyjs['track']['lineno']=551;
										$pyjs['track']['lineno']=551;
										$yield_value = array;
										$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
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
										$pyjs['track']['lineno']=552;
										index = $p['__op_add']($add33=index,$add34=$constant_int_1);
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=3;
							}
							if ($generator_state[2] == 3) {
								$generator_state[2]=4;
							}
							if ($generator_state[2] == 4) {
							}
						}
						else if ($generator_state[1]==0||$generator_state[1]==2) {
							$generator_state[1]=2;
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								$pyjs['track']['lineno']=554;
								index = $constant_int_0;
								$pyjs['track']['lineno']=555;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								$generator_state['splice'](3, $generator_state['length']-3);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
								for (;($generator_state[3] > 0)||($p['bool'](($p['cmp'](index, $p['getattr'](self, '_shape')['__getitem__']($constant_int_0)) == -1)));$generator_state[3] = 0) {
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$pyjs['track']['lineno']=556;
										$pyjs['track']['lineno']=556;
										$yield_value = $p['getattr'](self, '__data')['__getitem__'](index);
										$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
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
										$pyjs['track']['lineno']=557;
										index = $p['__op_add']($add35=index,$add36=$constant_int_1);
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=3;
							}
							if ($generator_state[2] == 3) {
								$generator_state[2]=4;
							}
							if ($generator_state[2] == 4) {
							}
						}
						$generator_state[1]=0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
					}

					return;
				};
				return $generator;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=559;
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var alst,tab,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$add40,$pyjs_try_err,array_str,$add50,$add52,count,$add51,$add38,$add39,i,$add37,$add45;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':559};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=559;
				$pyjs['track']['lineno']=560;
				array_str = function(array, width, strval) {
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
					var a,$iter12_type,alst,$iter12_array,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx,$iter12_nextval;
					$pyjs['track']={'module':'pyjsdl.pyjsarray','lineno':560};$pyjs['trackstack']['push']($pyjs['track']);
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					$pyjs['track']['lineno']=560;
					$pyjs['track']['lineno']=561;
					alst = $p['list']([]);
					$pyjs['track']['lineno']=562;
					if ($p['bool']($p['op_eq']($p['len']($p['getattr'](array, '_shape')), $constant_int_1))) {
						$pyjs['track']['lineno']=563;
						alst['append']('[');
						$pyjs['track']['lineno']=564;
						alst['extend'](function(){
							var val,$collcomp7,$iter11_iter,$iter11_type,$mod2,$mod1,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1;
	$collcomp7 = $p['list']();
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter11_iter = array;
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							val = $iter11_nextval['$nextval'];
							$collcomp7['append']((typeof ($mod1=strval)==typeof ($mod2=$p['tuple']([width, val])) && typeof $mod1=='number'?
								(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
								$p['op_mod']($mod1,$mod2)));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp7;}());
						$pyjs['track']['lineno']=567;
						alst['__setitem__']((typeof ($usub2=$constant_int_1)=='number'?
							-$usub2:
							$p['op_usub']($usub2)), alst['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
							-$usub1:
							$p['op_usub']($usub1)))['rstrip']());
						$pyjs['track']['lineno']=568;
						alst['append'](']');
					}
					else {
						$pyjs['track']['lineno']=570;
						alst['append']('[');
						$pyjs['track']['lineno']=571;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter12_iter = array;
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							a = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=572;
							alst['extend'](array_str(a, width, strval));
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
						$pyjs['track']['lineno']=573;
						alst['append'](']');
					}
					$pyjs['track']['lineno']=574;
					$pyjs['track']['lineno']=574;
					var $pyjs__ret = alst;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				};
				array_str['__name__'] = 'array_str';

				array_str['__bind_type__'] = 0;
				array_str['__args__'] = [null,null,['array'],['width'],['strval']];
				$pyjs['track']['lineno']=575;
				if ($p['bool'](($p['cmp']($p['getattr'](self, '_dtype'), $constant_int_7) == -1))) {
					$pyjs['track']['lineno']=576;
					alst = array_str(self, $p['len']($p['str']($p['max'](function(){
						var $iter13_nextval,$iter13_iter,i,$collcomp8,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,$iter13_array;
	$collcomp8 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter13_iter = $p['getattr'](self, '__data');
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						i = $iter13_nextval['$nextval'];
						$collcomp8['append'](i);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp8;}()))), '%*d ');
				}
				else {
					$pyjs['track']['lineno']=578;
					alst = array_str(self, $p['__op_add']($add37=$p['len']($p['str']($p['max'](function(){
						var $iter14_array,$iter14_type,$collcomp9,i,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
	$collcomp9 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter14_iter = $p['getattr'](self, '__data');
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						i = $iter14_nextval['$nextval'];
						$collcomp9['append'](i);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp9;}()))),$add38=$constant_int_7), '%*f ');
				}
				$pyjs['track']['lineno']=579;
				tab = $p['len']($p['getattr'](self, '_shape'));
				$pyjs['track']['lineno']=580;
				i = tab;
				$pyjs['track']['lineno']=581;
				while ($p['bool'](true)) {
					$pyjs['track']['lineno']=582;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						$pyjs['track']['lineno']=583;
						i = alst['index']('[', i);
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
						$pyjs['track']['module']='pyjsdl.pyjsarray';
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs['track']['lineno']=585;
							break;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
					$pyjs['track']['lineno']=586;
					count = $constant_int_0;
					$pyjs['track']['lineno']=587;
					while ($p['bool'](true)) {
						$pyjs['track']['lineno']=588;
						if ($p['bool']($p['op_eq'](alst['__getitem__']($p['__op_add']($add39=i,$add40=count)), '['))) {
							$pyjs['track']['lineno']=589;
							count = $p['__op_add']($add41=count,$add42=$constant_int_1);
							$pyjs['track']['lineno']=590;
							continue;
						}
						else {
							$pyjs['track']['lineno']=592;
							if ($p['bool']($p['op_eq'](count, $constant_int_1))) {
								$pyjs['track']['lineno']=593;
								alst['__setitem__'](i, $p['__op_add']($add45=$p['__op_add']($add43='\n',$add44=''['join'](function(){
									var $iter15_iter,$sub6,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,x,$pyjs__trackstack_size_1,$collcomp10,$sub5;
	$collcomp10 = $p['list']();
								$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
								$iter15_iter = $p['range']($p['__op_sub']($sub5=tab,$sub6=count));
								$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
								while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
									x = $iter15_nextval['$nextval'];
									$collcomp10['append'](' ');
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp10;}())),$add46=alst['__getitem__'](i)));
							}
							else {
								$pyjs['track']['lineno']=595;
								alst['__setitem__'](i, $p['__op_add']($add49=$p['__op_add']($add47='\n\n',$add48=''['join'](function(){
									var $iter16_array,$iter16_type,$sub7,$pyjs__trackstack_size_1,$iter16_idx,$sub8,$collcomp11,x,$iter16_nextval,$iter16_iter;
	$collcomp11 = $p['list']();
								$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
								$iter16_iter = $p['range']($p['__op_sub']($sub7=tab,$sub8=count));
								$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
								while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
									x = $iter16_nextval['$nextval'];
									$collcomp11['append'](' ');
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp11;}())),$add50=alst['__getitem__'](i)));
							}
							$pyjs['track']['lineno']=596;
							i = $p['__op_add']($add51=i,$add52=count);
							$pyjs['track']['lineno']=597;
							break;
						}
					}
				}
				$pyjs['track']['lineno']=598;
				$pyjs['track']['lineno']=598;
				var $pyjs__ret = ''['join'](alst);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=600;
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':600};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=600;
				$pyjs['track']['lineno']=601;
				$pyjs['track']['lineno']=601;
				var $pyjs__ret = $p['getattr'](self, '_shape')['__getitem__']($constant_int_0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=603;
			$method = $pyjs__bind_method2('__add__', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter17_nextval,$iter18_type,$iter18_iter,$iter17_iter,$add54,$add53,$iter18_array,i,$pyjs_try_err,$iter17_array,$iter18_idx,$pyjs__trackstack_size_2,$add56,$iter17_idx,$iter17_type,array,$iter18_nextval,ndarray,$add55;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':603};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=603;
				$pyjs['track']['lineno']=604;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=605;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=606;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=607;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=608;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=609;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter17_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
					while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
						i = $iter17_nextval['$nextval'];
						$pyjs['track']['lineno']=610;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add53=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add54=other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=612;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=613;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=615;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter18_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
							while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
								i = $iter18_nextval['$nextval'];
								$pyjs['track']['lineno']=616;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add55=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add56=$p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=617;
				$pyjs['track']['lineno']=617;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__add__'] = $method;
			$pyjs['track']['lineno']=619;
			$method = $pyjs__bind_method2('__sub__', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$iter19_type,i,$sub12,$sub10,$sub9,$iter19_array,$iter19_iter,$iter19_nextval,$pyjs__trackstack_size_2,$pyjs_try_err,$iter20_type,array,$sub11,ndarray,$iter20_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':619};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=619;
				$pyjs['track']['lineno']=620;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=621;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=622;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=623;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=624;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=625;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter19_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						i = $iter19_nextval['$nextval'];
						$pyjs['track']['lineno']=626;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub9=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub10=other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=628;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=629;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=631;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter20_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
							while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
								i = $iter20_nextval['$nextval'];
								$pyjs['track']['lineno']=632;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub11=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub12=$p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=633;
				$pyjs['track']['lineno']=633;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__sub__'] = $method;
			$pyjs['track']['lineno']=635;
			$method = $pyjs__bind_method2('__mul__', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter21_idx,$iter22_type,$iter22_array,i,$iter21_nextval,$iter22_nextval,$pyjs_try_err,$mul19,$iter22_idx,$iter21_type,$iter21_iter,$pyjs__trackstack_size_2,$mul20,$iter21_array,array,$mul21,$mul22,ndarray,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':635};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=635;
				$pyjs['track']['lineno']=636;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=637;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=638;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=639;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=640;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=641;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter21_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						i = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=642;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul19=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul20=other) && typeof $mul19=='number'?
							$mul19*$mul20:
							$p['op_mul']($mul19,$mul20)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=644;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=645;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=647;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter22_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
							while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
								i = $iter22_nextval['$nextval'];
								$pyjs['track']['lineno']=648;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul21=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul22=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul21=='number'?
									$mul21*$mul22:
									$p['op_mul']($mul21,$mul22)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=649;
				$pyjs['track']['lineno']=649;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__mul__'] = $method;
			$pyjs['track']['lineno']=651;
			$method = $pyjs__bind_method2('__div__', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter23_type,$iter23_nextval,$iter24_nextval,$iter23_iter,$iter24_array,$pyjs_try_err,$iter24_type,i,$iter23_array,$div4,$div5,$div3,$iter23_idx,array,$pyjs__trackstack_size_2,$div6,$iter24_iter,ndarray,$iter24_idx;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':651};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=651;
				$pyjs['track']['lineno']=652;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=653;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=654;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=655;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=656;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=657;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter23_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
						i = $iter23_nextval['$nextval'];
						$pyjs['track']['lineno']=658;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div3=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div4=other) && typeof $div3=='number' && $div4 !== 0?
							$div3/$div4:
							$p['op_div']($div3,$div4)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=660;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=661;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=663;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter24_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
							while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
								i = $iter24_nextval['$nextval'];
								$pyjs['track']['lineno']=664;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div5=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div6=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div5=='number' && $div6 !== 0?
									$div5/$div6:
									$p['op_div']($div5,$div6)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=665;
				$pyjs['track']['lineno']=665;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['__div__'] = $method;
			$pyjs['track']['lineno']=667;
			$method = $pyjs__bind_method2('add', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter26_nextval,$iter26_type,$iter26_idx,$iter25_nextval,i,$add59,$add57,$pyjs_try_err,$iter25_iter,$add58,$pyjs__trackstack_size_2,$iter25_idx,$iter26_array,array,$iter26_iter,$iter25_type,$iter25_array,ndarray,$add60;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':667};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=667;
				$pyjs['track']['lineno']=673;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=674;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=675;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=676;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=677;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=678;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter25_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
					while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
						i = $iter25_nextval['$nextval'];
						$pyjs['track']['lineno']=679;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add57=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add58=other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=681;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=682;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=684;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter26_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
							while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
								i = $iter26_nextval['$nextval'];
								$pyjs['track']['lineno']=685;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_add']($add59=$p['getattr'](ndarray, '__data')['__getitem__'](i),$add60=$p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=686;
				$pyjs['track']['lineno']=686;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=688;
			$method = $pyjs__bind_method2('sub', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter27_nextval,i,$iter28_array,$iter27_array,$iter28_idx,$pyjs_try_err,$sub15,$sub14,$iter27_idx,$sub16,$iter27_iter,$iter27_type,$iter28_iter,$pyjs__trackstack_size_2,array,$iter28_type,$sub13,$iter28_nextval,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':688};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=688;
				$pyjs['track']['lineno']=694;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=695;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=696;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=697;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=698;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=699;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter27_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
					while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
						i = $iter27_nextval['$nextval'];
						$pyjs['track']['lineno']=700;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub13=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub14=other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=702;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=703;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=705;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter28_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
							while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
								i = $iter28_nextval['$nextval'];
								$pyjs['track']['lineno']=706;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['__op_sub']($sub15=$p['getattr'](ndarray, '__data')['__getitem__'](i),$sub16=$p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=707;
				$pyjs['track']['lineno']=707;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['sub'] = $method;
			$pyjs['track']['lineno']=709;
			$method = $pyjs__bind_method2('mul', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter30_idx,$iter30_type,$mul24,$iter30_nextval,$iter29_type,$pyjs_try_err,$iter29_iter,$iter29_idx,$mul23,i,$iter29_nextval,$pyjs__trackstack_size_2,$iter29_array,$mul26,$iter30_array,array,$mul25,ndarray,$iter30_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':709};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=709;
				$pyjs['track']['lineno']=715;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=716;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=717;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=718;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=719;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=720;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter29_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
					while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
						i = $iter29_nextval['$nextval'];
						$pyjs['track']['lineno']=721;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul23=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul24=other) && typeof $mul23=='number'?
							$mul23*$mul24:
							$p['op_mul']($mul23,$mul24)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=723;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=724;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=726;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter30_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
							while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
								i = $iter30_nextval['$nextval'];
								$pyjs['track']['lineno']=727;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($mul25=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($mul26=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul25=='number'?
									$mul25*$mul26:
									$p['op_mul']($mul25,$mul26)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=728;
				$pyjs['track']['lineno']=728;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['mul'] = $method;
			$pyjs['track']['lineno']=730;
			$method = $pyjs__bind_method2('div', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter32_idx,$iter31_array,i,$pyjs_try_err,$iter32_nextval,$iter31_nextval,$iter31_idx,$iter32_iter,$iter32_type,$div8,$pyjs__trackstack_size_2,$iter31_type,$iter32_array,$div10,$div9,array,$div7,ndarray,$iter31_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':730};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=730;
				$pyjs['track']['lineno']=736;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=737;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=738;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=739;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=740;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=741;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter31_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
					while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
						i = $iter31_nextval['$nextval'];
						$pyjs['track']['lineno']=742;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div7=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div8=other) && typeof $div7=='number' && $div8 !== 0?
							$div7/$div8:
							$p['op_div']($div7,$div8)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=744;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=745;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=747;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter32_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
							while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
								i = $iter32_nextval['$nextval'];
								$pyjs['track']['lineno']=748;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, (typeof ($div9=$p['getattr'](ndarray, '__data')['__getitem__'](i))==typeof ($div10=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div9=='number' && $div10 !== 0?
									$div9/$div10:
									$p['op_div']($div9,$div10)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=749;
				$pyjs['track']['lineno']=749;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['div'] = $method;
			$pyjs['track']['lineno']=751;
			$method = $pyjs__bind_method2('iadd', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter33_iter,$iter33_nextval,$iter33_type,$add61,$add63,$add62,i,$add64,$pyjs_try_err,$iter34_idx,$iter34_nextval,$iter34_array,$pyjs__trackstack_size_2,$iter34_iter,$iter33_idx,$iter34_type,$iter33_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':751};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=751;
				$pyjs['track']['lineno']=756;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=757;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter33_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
					while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
						i = $iter33_nextval['$nextval'];
						$pyjs['track']['lineno']=758;
						$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_add']($add61=$p['getattr'](self, '__data')['__getitem__'](i),$add62=other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=760;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=761;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=763;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter34_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
							while (typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
								i = $iter34_nextval['$nextval'];
								$pyjs['track']['lineno']=764;
								$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_add']($add63=$p['getattr'](self, '__data')['__getitem__'](i),$add64=$p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=765;
				$pyjs['track']['lineno']=765;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['iadd'] = $method;
			$pyjs['track']['lineno']=767;
			$method = $pyjs__bind_method2('isub', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $sub19,$sub18,i,$iter35_idx,$iter35_nextval,$iter36_nextval,$sub17,$pyjs_try_err,$iter36_iter,$iter35_type,$sub20,$pyjs__trackstack_size_2,$iter36_idx,$iter35_array,$iter35_iter,$iter36_type,$iter36_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':767};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=767;
				$pyjs['track']['lineno']=772;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=773;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter35_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter35_nextval=$p['__iter_prepare']($iter35_iter,false);
					while (typeof($p['__wrapped_next']($iter35_nextval)['$nextval']) != 'undefined') {
						i = $iter35_nextval['$nextval'];
						$pyjs['track']['lineno']=774;
						$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_sub']($sub17=$p['getattr'](self, '__data')['__getitem__'](i),$sub18=other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=776;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=777;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=779;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter36_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter36_nextval=$p['__iter_prepare']($iter36_iter,false);
							while (typeof($p['__wrapped_next']($iter36_nextval)['$nextval']) != 'undefined') {
								i = $iter36_nextval['$nextval'];
								$pyjs['track']['lineno']=780;
								$p['getattr'](self, '__data')['__setitem__'](i, $p['__op_sub']($sub19=$p['getattr'](self, '__data')['__getitem__'](i),$sub20=$p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=781;
				$pyjs['track']['lineno']=781;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['isub'] = $method;
			$pyjs['track']['lineno']=783;
			$method = $pyjs__bind_method2('imul', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter38_iter,$iter37_idx,i,$mul29,$iter38_idx,$pyjs_try_err,$iter37_iter,$iter37_array,$pyjs__trackstack_size_2,$mul30,$mul28,$iter38_nextval,$mul27,$iter38_type,$iter37_type,$iter38_array,$iter37_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':783};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=783;
				$pyjs['track']['lineno']=788;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=789;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter37_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter37_nextval=$p['__iter_prepare']($iter37_iter,false);
					while (typeof($p['__wrapped_next']($iter37_nextval)['$nextval']) != 'undefined') {
						i = $iter37_nextval['$nextval'];
						$pyjs['track']['lineno']=790;
						$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($mul27=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($mul28=other) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=792;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=793;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=795;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter38_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter38_nextval=$p['__iter_prepare']($iter38_iter,false);
							while (typeof($p['__wrapped_next']($iter38_nextval)['$nextval']) != 'undefined') {
								i = $iter38_nextval['$nextval'];
								$pyjs['track']['lineno']=796;
								$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($mul29=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($mul30=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $mul29=='number'?
									$mul29*$mul30:
									$p['op_mul']($mul29,$mul30)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=797;
				$pyjs['track']['lineno']=797;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['imul'] = $method;
			$pyjs['track']['lineno']=799;
			$method = $pyjs__bind_method2('idiv', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter40_array,$iter39_idx,i,$pyjs_try_err,$iter39_array,$div12,$iter39_type,$div13,$iter39_nextval,$div11,$iter39_iter,$pyjs__trackstack_size_2,$iter40_iter,$iter40_nextval,$iter40_idx,$div14,$iter40_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':799};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=799;
				$pyjs['track']['lineno']=804;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=805;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter39_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter39_nextval=$p['__iter_prepare']($iter39_iter,false);
					while (typeof($p['__wrapped_next']($iter39_nextval)['$nextval']) != 'undefined') {
						i = $iter39_nextval['$nextval'];
						$pyjs['track']['lineno']=806;
						$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($div11=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($div12=other) && typeof $div11=='number' && $div12 !== 0?
							$div11/$div12:
							$p['op_div']($div11,$div12)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=808;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=809;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=811;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter40_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter40_nextval=$p['__iter_prepare']($iter40_iter,false);
							while (typeof($p['__wrapped_next']($iter40_nextval)['$nextval']) != 'undefined') {
								i = $iter40_nextval['$nextval'];
								$pyjs['track']['lineno']=812;
								$p['getattr'](self, '__data')['__setitem__'](i, (typeof ($div13=$p['getattr'](self, '__data')['__getitem__'](i))==typeof ($div14=$p['getattr'](other, '__data')['__getitem__'](i)) && typeof $div13=='number' && $div14 !== 0?
									$div13/$div14:
									$p['op_div']($div13,$div14)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=813;
				$pyjs['track']['lineno']=813;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['idiv'] = $method;
			$pyjs['track']['lineno']=815;
			$method = $pyjs__bind_method2('bitwise_and', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter42_idx,$iter41_array,$iter42_nextval,i,$pyjs_try_err,$iter42_array,$iter42_iter,$iter41_type,$pyjs__trackstack_size_2,$iter41_nextval,$iter42_type,$iter41_iter,$iter41_idx,array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':815};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=815;
				$pyjs['track']['lineno']=821;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=822;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=823;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=824;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=825;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=826;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter41_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter41_nextval=$p['__iter_prepare']($iter41_iter,false);
					while (typeof($p['__wrapped_next']($iter41_nextval)['$nextval']) != 'undefined') {
						i = $iter41_nextval['$nextval'];
						$pyjs['track']['lineno']=827;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](ndarray, '__data')['__getitem__'](i), other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=829;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=830;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=832;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter42_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter42_nextval=$p['__iter_prepare']($iter42_iter,false);
							while (typeof($p['__wrapped_next']($iter42_nextval)['$nextval']) != 'undefined') {
								i = $iter42_nextval['$nextval'];
								$pyjs['track']['lineno']=833;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](ndarray, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=834;
				$pyjs['track']['lineno']=834;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_and'] = $method;
			$pyjs['track']['lineno']=836;
			$method = $pyjs__bind_method2('bitwise_or', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter43_type,$iter44_type,$iter43_iter,$iter43_array,$iter44_idx,i,$iter44_array,$iter44_iter,$pyjs_try_err,$iter43_idx,$pyjs__trackstack_size_2,$iter44_nextval,array,$iter43_nextval,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':836};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=836;
				$pyjs['track']['lineno']=842;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=843;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=844;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=845;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=846;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=847;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter43_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter43_nextval=$p['__iter_prepare']($iter43_iter,false);
					while (typeof($p['__wrapped_next']($iter43_nextval)['$nextval']) != 'undefined') {
						i = $iter43_nextval['$nextval'];
						$pyjs['track']['lineno']=848;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=850;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=851;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=853;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter44_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter44_nextval=$p['__iter_prepare']($iter44_iter,false);
							while (typeof($p['__wrapped_next']($iter44_nextval)['$nextval']) != 'undefined') {
								i = $iter44_nextval['$nextval'];
								$pyjs['track']['lineno']=854;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=855;
				$pyjs['track']['lineno']=855;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_or'] = $method;
			$pyjs['track']['lineno']=857;
			$method = $pyjs__bind_method2('bitwise_xor', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter46_array,$iter45_iter,i,$pyjs_try_err,$iter45_type,$iter46_iter,$iter45_nextval,$pyjs__trackstack_size_2,$iter46_nextval,$iter46_idx,$iter45_array,$iter45_idx,array,ndarray,$iter46_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':857};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=857;
				$pyjs['track']['lineno']=863;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=864;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=865;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=866;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=867;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=868;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter45_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
					$iter45_nextval=$p['__iter_prepare']($iter45_iter,false);
					while (typeof($p['__wrapped_next']($iter45_nextval)['$nextval']) != 'undefined') {
						i = $iter45_nextval['$nextval'];
						$pyjs['track']['lineno']=869;
						$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=871;
						if ($p['bool'](!$p['op_eq']($p['getattr'](ndarray, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=872;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=874;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter46_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
							$iter46_nextval=$p['__iter_prepare']($iter46_iter,false);
							while (typeof($p['__wrapped_next']($iter46_nextval)['$nextval']) != 'undefined') {
								i = $iter46_nextval['$nextval'];
								$pyjs['track']['lineno']=875;
								$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](ndarray, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=876;
				$pyjs['track']['lineno']=876;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_xor'] = $method;
			$pyjs['track']['lineno']=878;
			$method = $pyjs__bind_method2('bitwise_iand', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter48_nextval,$iter47_idx,$iter48_iter,i,$iter47_type,$pyjs_try_err,$iter48_array,$pyjs__trackstack_size_2,$iter48_idx,$iter47_nextval,$iter47_array,$iter48_type,$iter47_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':878};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=878;
				$pyjs['track']['lineno']=883;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=884;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter47_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter47_nextval=$p['__iter_prepare']($iter47_iter,false);
					while (typeof($p['__wrapped_next']($iter47_nextval)['$nextval']) != 'undefined') {
						i = $iter47_nextval['$nextval'];
						$pyjs['track']['lineno']=885;
						$p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__'](i), other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=887;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=888;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=890;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter48_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter48_nextval=$p['__iter_prepare']($iter48_iter,false);
							while (typeof($p['__wrapped_next']($iter48_nextval)['$nextval']) != 'undefined') {
								i = $iter48_nextval['$nextval'];
								$pyjs['track']['lineno']=891;
								$p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitand2']($p['getattr'](self, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=892;
				$pyjs['track']['lineno']=892;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_iand'] = $method;
			$pyjs['track']['lineno']=894;
			$method = $pyjs__bind_method2('bitwise_ior', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter50_idx,$iter49_type,i,$iter50_type,$iter49_array,$pyjs_try_err,$iter49_iter,$pyjs__trackstack_size_2,$iter50_nextval,$iter50_array,$iter49_idx,$iter49_nextval,$iter50_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':894};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=894;
				$pyjs['track']['lineno']=899;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=900;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter49_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter49_nextval=$p['__iter_prepare']($iter49_iter,false);
					while (typeof($p['__wrapped_next']($iter49_nextval)['$nextval']) != 'undefined') {
						i = $iter49_nextval['$nextval'];
						$pyjs['track']['lineno']=901;
						$p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__'](i), other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=903;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=904;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=906;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter50_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter50_nextval=$p['__iter_prepare']($iter50_iter,false);
							while (typeof($p['__wrapped_next']($iter50_nextval)['$nextval']) != 'undefined') {
								i = $iter50_nextval['$nextval'];
								$pyjs['track']['lineno']=907;
								$p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitor2']($p['getattr'](self, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=908;
				$pyjs['track']['lineno']=908;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_ior'] = $method;
			$pyjs['track']['lineno']=910;
			$method = $pyjs__bind_method2('bitwise_ixor', function(other) {
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter51_array,$iter52_iter,i,$iter52_idx,$iter51_iter,$iter51_nextval,$iter52_type,$iter52_nextval,$pyjs__trackstack_size_2,$pyjs_try_err,$iter51_idx,$iter52_array,$iter51_type;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':910};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=910;
				$pyjs['track']['lineno']=915;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=916;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter51_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
					$iter51_nextval=$p['__iter_prepare']($iter51_iter,false);
					while (typeof($p['__wrapped_next']($iter51_nextval)['$nextval']) != 'undefined') {
						i = $iter51_nextval['$nextval'];
						$pyjs['track']['lineno']=917;
						$p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](self, '__data')['__getitem__'](i), other));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
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
					$pyjs['track']['module']='pyjsdl.pyjsarray';
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError']))) {
						$pyjs['track']['lineno']=919;
						if ($p['bool'](!$p['op_eq']($p['getattr'](self, '_shape'), $p['getattr'](other, '_shape')))) {
							$pyjs['track']['lineno']=920;
							$pyjs['__active_exception_stack__'] = null;
							throw ($p['TypeError']('array shapes are not compatible'));
						}
						else {
							$pyjs['track']['lineno']=922;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter52_iter = $p['xrange']($p['len']($p['getattr'](self, '__data')));
							$iter52_nextval=$p['__iter_prepare']($iter52_iter,false);
							while (typeof($p['__wrapped_next']($iter52_nextval)['$nextval']) != 'undefined') {
								i = $iter52_nextval['$nextval'];
								$pyjs['track']['lineno']=923;
								$p['getattr'](self, '__data')['__setitem__'](i, $p['op_bitxor2']($p['getattr'](self, '__data')['__getitem__'](i), $p['getattr'](other, '__data')['__getitem__'](i)));
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=924;
				$pyjs['track']['lineno']=924;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['other']]);
			$cls_definition['bitwise_ixor'] = $method;
			$pyjs['track']['lineno']=926;
			$method = $pyjs__bind_method2('bitwise_not', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter53_type,$iter53_idx,i,$iter53_array,$iter53_iter,$pyjs__trackstack_size_1,$iter53_nextval,array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':926};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=926;
				$pyjs['track']['lineno']=931;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=932;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=933;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=934;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=935;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter53_iter = $p['xrange']($p['len']($p['getattr'](ndarray, '__data')));
				$iter53_nextval=$p['__iter_prepare']($iter53_iter,false);
				while (typeof($p['__wrapped_next']($iter53_nextval)['$nextval']) != 'undefined') {
					i = $iter53_nextval['$nextval'];
					$pyjs['track']['lineno']=936;
					$p['getattr'](ndarray, '__data')['__setitem__'](i, $p['op_invert']($p['getattr'](self, '__data')['__getitem__'](i)));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=937;
				$pyjs['track']['lineno']=937;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['bitwise_not'] = $method;
			$pyjs['track']['lineno']=939;
			$method = $pyjs__bind_method2('setshape', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var dim = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var dim = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter56_array,size,$div15,$iter54_idx,$iter55_iter,$iter55_nextval,$iter54_nextval,$iter54_type,$iter54_iter,$iter56_idx,$iter55_array,$iter56_type,$iter56_nextval,$iter56_iter,$iter55_idx,$iter54_array,array_size,i,$iter55_type,$pyjs__trackstack_size_1,indices,$mul34,$mul31,$div16,$mul33,$mul32;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':939};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=939;
				$pyjs['track']['lineno']=946;
				if ($p['bool']($p['isinstance'](dim['__getitem__']($constant_int_0), $p['tuple']))) {
					$pyjs['track']['lineno']=947;
					dim = dim['__getitem__']($constant_int_0);
				}
				$pyjs['track']['lineno']=948;
				size = $constant_int_1;
				$pyjs['track']['lineno']=949;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter54_iter = dim;
				$iter54_nextval=$p['__iter_prepare']($iter54_iter,false);
				while (typeof($p['__wrapped_next']($iter54_nextval)['$nextval']) != 'undefined') {
					i = $iter54_nextval['$nextval'];
					$pyjs['track']['lineno']=950;
					size = (typeof ($mul31=size)==typeof ($mul32=i) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=951;
				array_size = $constant_int_1;
				$pyjs['track']['lineno']=952;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter55_iter = $p['getattr'](self, '_shape');
				$iter55_nextval=$p['__iter_prepare']($iter55_iter,false);
				while (typeof($p['__wrapped_next']($iter55_nextval)['$nextval']) != 'undefined') {
					i = $iter55_nextval['$nextval'];
					$pyjs['track']['lineno']=953;
					array_size = (typeof ($mul33=array_size)==typeof ($mul34=i) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=954;
				if ($p['bool'](!$p['op_eq'](size, array_size))) {
					$pyjs['track']['lineno']=955;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['TypeError']('array size cannot change'));
				}
				$pyjs['track']['lineno']=956;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_shape', dim) : $p['setattr'](self, '_shape', dim); 
				$pyjs['track']['lineno']=957;
				indices = $p['list']([]);
				$pyjs['track']['lineno']=958;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter56_iter = $p['getattr'](self, '_shape');
				$iter56_nextval=$p['__iter_prepare']($iter56_iter,false);
				while (typeof($p['__wrapped_next']($iter56_nextval)['$nextval']) != 'undefined') {
					i = $iter56_nextval['$nextval'];
					$pyjs['track']['lineno']=959;
					size = (typeof ($div15=size)==typeof ($div16=i) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16));
					$pyjs['track']['lineno']=960;
					indices['append'](size);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=961;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_indices', $p['tuple'](indices)) : $p['setattr'](self, '_indices', $p['tuple'](indices)); 
				$pyjs['track']['lineno']=962;
				$pyjs['track']['lineno']=962;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['dim',null,['self']]);
			$cls_definition['setshape'] = $method;
			$pyjs['track']['lineno']=964;
			$method = $pyjs__bind_method2('getshape', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':964};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=964;
				$pyjs['track']['lineno']=969;
				$pyjs['track']['lineno']=969;
				var $pyjs__ret = $p['getattr'](self, '_shape');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getshape'] = $method;
			$pyjs['track']['lineno']=971;
			$method = $pyjs__bind_method2('reshape', function(dim) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dim = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,$iter57_idx,size,$div18,$iter59_iter,$div17,$iter57_iter,subarray,$iter57_array,$iter58_array,$iter59_array,$iter58_type,$iter59_type,indices,$iter58_iter,$iter58_idx,$iter58_nextval,$iter57_type,array_size,i,$iter59_idx,$mul38,$iter59_nextval,$pyjs__trackstack_size_1,$mul35,$mul37,$mul36,$iter57_nextval;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':971};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=971;
				$pyjs['track']['lineno']=977;
				size = $constant_int_1;
				$pyjs['track']['lineno']=978;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter57_iter = dim;
				$iter57_nextval=$p['__iter_prepare']($iter57_iter,false);
				while (typeof($p['__wrapped_next']($iter57_nextval)['$nextval']) != 'undefined') {
					i = $iter57_nextval['$nextval'];
					$pyjs['track']['lineno']=979;
					size = (typeof ($mul35=size)==typeof ($mul36=i) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=980;
				array_size = $constant_int_1;
				$pyjs['track']['lineno']=981;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter58_iter = $p['getattr'](self, '_shape');
				$iter58_nextval=$p['__iter_prepare']($iter58_iter,false);
				while (typeof($p['__wrapped_next']($iter58_nextval)['$nextval']) != 'undefined') {
					i = $iter58_nextval['$nextval'];
					$pyjs['track']['lineno']=982;
					array_size = (typeof ($mul37=array_size)==typeof ($mul38=i) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=983;
				if ($p['bool'](!$p['op_eq'](size, array_size))) {
					$pyjs['track']['lineno']=984;
					$pyjs['__active_exception_stack__'] = null;
					throw ($p['TypeError']('array size cannot change'));
				}
				$pyjs['track']['lineno']=985;
				subarray = self['__data']['subarray']($constant_int_0);
				$pyjs['track']['lineno']=986;
				array = $m['Ndarray'](subarray);
				$pyjs['track']['lineno']=987;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', dim) : $p['setattr'](array, '_shape', dim); 
				$pyjs['track']['lineno']=988;
				indices = $p['list']([]);
				$pyjs['track']['lineno']=989;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter59_iter = $p['getattr'](array, '_shape');
				$iter59_nextval=$p['__iter_prepare']($iter59_iter,false);
				while (typeof($p['__wrapped_next']($iter59_nextval)['$nextval']) != 'undefined') {
					i = $iter59_nextval['$nextval'];
					$pyjs['track']['lineno']=990;
					size = (typeof ($div17=size)==typeof ($div18=i) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18));
					$pyjs['track']['lineno']=991;
					indices['append'](size);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=992;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['tuple'](indices)) : $p['setattr'](array, '_indices', $p['tuple'](indices)); 
				$pyjs['track']['lineno']=993;
				$pyjs['track']['lineno']=993;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['dim']]);
			$cls_definition['reshape'] = $method;
			$pyjs['track']['lineno']=995;
			$method = $pyjs__bind_method2('set', function(data) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					data = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter67_array,$iter68_idx,index,dataLn,$iter66_iter,$iter67_type,$iter65_array,$iter67_iter,$iter65_type,$iter67_idx,$iter67_nextval,$iter68_type,$iter65_nextval,$iter66_idx,$iter66_nextval,$iter65_iter,$iter68_array,$iter65_idx,$iter68_iter,$iter68_nextval,$iter66_type,$pyjs__trackstack_size_1,$iter66_array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':995};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=995;
				$pyjs['track']['lineno']=1000;
				if ($p['bool']($p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']])))) {
					$pyjs['track']['lineno']=1001;
					if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
						$pyjs['track']['lineno']=1002;
						if ($p['bool']($p['isinstance'](data['__getitem__']($constant_int_0), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']])))) {
							$pyjs['track']['lineno']=1003;
							data = function(){
								var $iter61_array,$iter61_type,$iter60_iter,$iter60_array,value,$iter60_idx,dat,$pyjs__trackstack_size_2,$collcomp12,$iter60_nextval,$iter60_type,$iter61_iter,$pyjs__trackstack_size_1,$iter61_idx,$iter61_nextval;
	$collcomp12 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter60_iter = data;
							$iter60_nextval=$p['__iter_prepare']($iter60_iter,false);
							while (typeof($p['__wrapped_next']($iter60_nextval)['$nextval']) != 'undefined') {
								dat = $iter60_nextval['$nextval'];
								$pyjs['track']['lineno']=1003;
								$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
								$iter61_iter = dat;
								$iter61_nextval=$p['__iter_prepare']($iter61_iter,false);
								while (typeof($p['__wrapped_next']($iter61_nextval)['$nextval']) != 'undefined') {
									value = $iter61_nextval['$nextval'];
									$collcomp12['append'](value);
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp12;}();
						}
					}
					else {
						$pyjs['track']['lineno']=1005;
						if ($p['bool'](!$p['bool']($p['isinstance'](data['__getitem__']($constant_int_0), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']]))))) {
							$pyjs['track']['lineno']=1006;
							data = function(){
								var $iter62_nextval,$iter62_iter,$pyjs__trackstack_size_1,dat,$iter62_array,$collcomp13,$iter62_idx,$iter62_type;
	$collcomp13 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter62_iter = data;
							$iter62_nextval=$p['__iter_prepare']($iter62_iter,false);
							while (typeof($p['__wrapped_next']($iter62_nextval)['$nextval']) != 'undefined') {
								dat = $iter62_nextval['$nextval'];
								$collcomp13['append'](dat['valueOf']());
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp13;}();
						}
						else {
							$pyjs['track']['lineno']=1008;
							data = function(){
								var $iter63_array,dat,$iter63_type,$iter64_iter,$iter64_type,value,$iter63_idx,$pyjs__trackstack_size_2,$collcomp14,$iter64_array,$pyjs__trackstack_size_1,$iter63_nextval,$iter64_nextval,$iter64_idx,$iter63_iter;
	$collcomp14 = $p['list']();
							$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
							$iter63_iter = data;
							$iter63_nextval=$p['__iter_prepare']($iter63_iter,false);
							while (typeof($p['__wrapped_next']($iter63_nextval)['$nextval']) != 'undefined') {
								dat = $iter63_nextval['$nextval'];
								$pyjs['track']['lineno']=1008;
								$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
								$iter64_iter = dat;
								$iter64_nextval=$p['__iter_prepare']($iter64_iter,false);
								while (typeof($p['__wrapped_next']($iter64_nextval)['$nextval']) != 'undefined') {
									value = $iter64_nextval['$nextval'];
									$collcomp14['append'](value['valueOf']());
								}
								if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
									$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
									$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
								}
								$pyjs['track']['module']='pyjsdl.pyjsarray';
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp14;}();
						}
					}
					$pyjs['track']['lineno']=1009;
					dataLn = $p['len'](data);
					$pyjs['track']['lineno']=1010;
					data = data['getArray']();
				}
				else if ($p['bool']($p['isinstance'](data, $p['tuple']([$m['Ndarray'], $m['PyTypedArray']])))) {
					$pyjs['track']['lineno']=1012;
					data = data['getArray']();
					$pyjs['track']['lineno']=1013;
					dataLn = $p['getattr'](data, 'length');
				}
				else {
					$pyjs['track']['lineno']=1015;
					if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
						$pyjs['track']['lineno']=1016;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter65_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
						$iter65_nextval=$p['__iter_prepare']($iter65_iter,false);
						while (typeof($p['__wrapped_next']($iter65_nextval)['$nextval']) != 'undefined') {
							index = $iter65_nextval['$nextval'];
							$pyjs['track']['lineno']=1017;
self['__data']['__data'][index]=data;
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					else {
						$pyjs['track']['lineno']=1019;
						data = data['valueOf']();
						$pyjs['track']['lineno']=1020;
						$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
						$iter66_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
						$iter66_nextval=$p['__iter_prepare']($iter66_iter,false);
						while (typeof($p['__wrapped_next']($iter66_nextval)['$nextval']) != 'undefined') {
							index = $iter66_nextval['$nextval'];
							$pyjs['track']['lineno']=1021;
self['__data']['__data'][index]=data;
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					$pyjs['track']['lineno']=1022;
					$pyjs['track']['lineno']=1022;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=1023;
				if ($p['bool']($p['op_eq'](dataLn, $p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length')))) {
					$pyjs['track']['lineno']=1024;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter67_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
					$iter67_nextval=$p['__iter_prepare']($iter67_iter,false);
					while (typeof($p['__wrapped_next']($iter67_nextval)['$nextval']) != 'undefined') {
						index = $iter67_nextval['$nextval'];
						$pyjs['track']['lineno']=1025;
self['__data']['__data'][index]=data[index];
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=1027;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter68_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
					$iter68_nextval=$p['__iter_prepare']($iter68_iter,false);
					while (typeof($p['__wrapped_next']($iter68_nextval)['$nextval']) != 'undefined') {
						index = $iter68_nextval['$nextval'];
						$pyjs['track']['lineno']=1028;
self['__data']['__data'][index]=data[index%dataLn];
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				$pyjs['track']['lineno']=1029;
				$pyjs['track']['lineno']=1029;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['data']]);
			$cls_definition['set'] = $method;
			$pyjs['track']['lineno']=1031;
			$method = $pyjs__bind_method2('fill', function(value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					value = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter70_array,index,$iter70_type,$iter69_idx,$pyjs__trackstack_size_1,$iter69_type,$iter70_idx,$iter69_nextval,$iter70_nextval,$iter69_array,$iter70_iter,$iter69_iter;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1031};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1031;
				$pyjs['track']['lineno']=1035;
				if ($p['bool']($p['getattr']((typeof pyjs_mode == "undefined"?$m['pyjs_mode']:pyjs_mode), 'optimized'))) {
					$pyjs['track']['lineno']=1036;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter69_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
					$iter69_nextval=$p['__iter_prepare']($iter69_iter,false);
					while (typeof($p['__wrapped_next']($iter69_nextval)['$nextval']) != 'undefined') {
						index = $iter69_nextval['$nextval'];
						$pyjs['track']['lineno']=1037;
self['__data']['__data'][index]=value;
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				else {
					$pyjs['track']['lineno']=1039;
					value = value['valueOf']();
					$pyjs['track']['lineno']=1040;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter70_iter = $p['xrange']($p['getattr']($p['getattr']($p['getattr'](self, '__data'), '__data'), 'length'));
					$iter70_nextval=$p['__iter_prepare']($iter70_iter,false);
					while (typeof($p['__wrapped_next']($iter70_nextval)['$nextval']) != 'undefined') {
						index = $iter70_nextval['$nextval'];
						$pyjs['track']['lineno']=1041;
self['__data']['__data'][index]=value;
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';
				}
				$pyjs['track']['lineno']=1042;
				$pyjs['track']['lineno']=1042;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['value']]);
			$cls_definition['fill'] = $method;
			$pyjs['track']['lineno']=1044;
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
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1044};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1044;
				$pyjs['track']['lineno']=1048;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__']($p['getattr'](self, '_dtype'))($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=1049;
				ndarray = $m['Ndarray'](array, $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=1050;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=1051;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=1052;
				$pyjs['track']['lineno']=1052;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=1054;
			$method = $pyjs__bind_method2('astype', function(dtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					dtype = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var array,ndarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1054};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1054;
				$pyjs['track']['lineno']=1059;
				array = $p['getattr']($m['Ndarray'], '__typedarray')['__getitem__'](dtype)($p['getattr'](self, '__data'));
				$pyjs['track']['lineno']=1060;
				ndarray = $m['Ndarray'](array, dtype);
				$pyjs['track']['lineno']=1061;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](ndarray, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=1062;
				ndarray['__is_instance__'] && typeof ndarray['__setattr__'] == 'function' ? ndarray['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](ndarray, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=1063;
				$pyjs['track']['lineno']=1063;
				var $pyjs__ret = ndarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['dtype']]);
			$cls_definition['astype'] = $method;
			$pyjs['track']['lineno']=1065;
			$method = $pyjs__bind_method2('view', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var subarray,array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1065};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1065;
				$pyjs['track']['lineno']=1069;
				subarray = self['__data']['subarray']($constant_int_0);
				$pyjs['track']['lineno']=1070;
				array = $m['Ndarray'](subarray);
				$pyjs['track']['lineno']=1071;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['getattr'](self, '_shape')) : $p['setattr'](array, '_shape', $p['getattr'](self, '_shape')); 
				$pyjs['track']['lineno']=1072;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['getattr'](self, '_indices')) : $p['setattr'](array, '_indices', $p['getattr'](self, '_indices')); 
				$pyjs['track']['lineno']=1073;
				$pyjs['track']['lineno']=1073;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['view'] = $method;
			$pyjs['track']['lineno']=1075;
			$method = $pyjs__bind_method2('swapaxes', function(axis1, axis2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					axis1 = arguments[1];
					axis2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var shape,indices,array;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1075};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1075;
				$pyjs['track']['lineno']=1081;
				array = $m['Ndarray']($p['getattr'](self, '__data'), $p['getattr'](self, '_dtype'));
				$pyjs['track']['lineno']=1082;
				shape = $p['list']($p['getattr'](self, '_shape'));
				$pyjs['track']['lineno']=1083;
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([shape['__getitem__'](axis2), shape['__getitem__'](axis1)]), 2, null);
				shape['__setitem__'](axis1, $tupleassign3[0]);
				shape['__setitem__'](axis2, $tupleassign3[1]);
				$pyjs['track']['lineno']=1084;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_shape', $p['tuple'](shape)) : $p['setattr'](array, '_shape', $p['tuple'](shape)); 
				$pyjs['track']['lineno']=1085;
				indices = $p['list']($p['getattr'](self, '_indices'));
				$pyjs['track']['lineno']=1086;
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([indices['__getitem__'](axis2), indices['__getitem__'](axis1)]), 2, null);
				indices['__setitem__'](axis1, $tupleassign4[0]);
				indices['__setitem__'](axis2, $tupleassign4[1]);
				$pyjs['track']['lineno']=1087;
				array['__is_instance__'] && typeof array['__setattr__'] == 'function' ? array['__setattr__']('_indices', $p['tuple'](indices)) : $p['setattr'](array, '_indices', $p['tuple'](indices)); 
				$pyjs['track']['lineno']=1088;
				$pyjs['track']['lineno']=1088;
				var $pyjs__ret = array;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['axis1'],['axis2']]);
			$cls_definition['swapaxes'] = $method;
			$pyjs['track']['lineno']=1090;
			$method = $pyjs__bind_method2('getArray', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ff77b2337bfa3914cc0e20c71b4d99cd') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1090};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1090;
				$pyjs['track']['lineno']=1094;
				$pyjs['track']['lineno']=1094;
				var $pyjs__ret = self['__data']['getArray']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getArray'] = $method;
			$pyjs['track']['lineno']=397;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Ndarray', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1097;
		$m['NP'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'b713ee842f651b7636716f3036d0e2d5';
			$pyjs['track']['lineno']=1099;
			$method = $pyjs__bind_method2('zeros', function(size, dtype) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					size = arguments[1];
					dtype = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b713ee842f651b7636716f3036d0e2d5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1099};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1099;
				$pyjs['track']['lineno']=1100;
				if ($p['bool']($p['op_eq'](dtype, 'i'))) {
					$pyjs['track']['lineno']=1101;
					dtype = $constant_int_3;
				}
				$pyjs['track']['lineno']=1102;
				$pyjs['track']['lineno']=1102;
				var $pyjs__ret = $m['Ndarray'](size, dtype);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['size'],['dtype']]);
			$cls_definition['zeros'] = $method;
			$pyjs['track']['lineno']=1104;
			$method = $pyjs__bind_method2('swapaxes', function(array, axis1, axis2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					array = arguments[1];
					axis1 = arguments[2];
					axis2 = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b713ee842f651b7636716f3036d0e2d5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1104};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1104;
				$pyjs['track']['lineno']=1105;
				$pyjs['track']['lineno']=1105;
				var $pyjs__ret = array['swapaxes'](axis1, axis2);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['array'],['axis1'],['axis2']]);
			$cls_definition['swapaxes'] = $method;
			$pyjs['track']['lineno']=1107;
			$method = $pyjs__bind_method2('append', function(array, values) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					array = arguments[1];
					values = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b713ee842f651b7636716f3036d0e2d5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add65,$add66,newarray;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1107};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1107;
				$pyjs['track']['lineno']=1108;
				if ($p['bool']($p['isinstance'](values['__getitem__']($constant_int_0), $p['tuple']([$p['list'], $p['tuple'], $m['PyTypedArray']])))) {
					$pyjs['track']['lineno']=1109;
					values = function(){
						var $iter71_nextval,$iter72_array,$iter71_iter,$iter72_type,$pyjs__trackstack_size_1,value,dat,$iter71_array,$collcomp15,$pyjs__trackstack_size_2,$iter72_iter,$iter71_idx,$iter71_type,$iter72_idx,$iter72_nextval;
	$collcomp15 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter71_iter = values;
					$iter71_nextval=$p['__iter_prepare']($iter71_iter,false);
					while (typeof($p['__wrapped_next']($iter71_nextval)['$nextval']) != 'undefined') {
						dat = $iter71_nextval['$nextval'];
						$pyjs['track']['lineno']=1109;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter72_iter = dat;
						$iter72_nextval=$p['__iter_prepare']($iter72_iter,false);
						while (typeof($p['__wrapped_next']($iter72_nextval)['$nextval']) != 'undefined') {
							value = $iter72_nextval['$nextval'];
							$collcomp15['append'](value);
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.pyjsarray';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.pyjsarray';

	return $collcomp15;}();
				}
				$pyjs['track']['lineno']=1110;
				newarray = $m['Ndarray']($p['__op_add']($add65=$p['len'](array),$add66=$p['len'](values)), $p['getattr'](array, '_dtype'));
				$pyjs['track']['lineno']=1111;
				newarray['__data']['set']($p['getattr'](array, '__data'));
				$pyjs['track']['lineno']=1112;
				newarray['__data']['set'](values, $p['len'](array));
				$pyjs['track']['lineno']=1113;
				$pyjs['track']['lineno']=1113;
				var $pyjs__ret = newarray;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['array'],['values']]);
			$cls_definition['append'] = $method;
			$pyjs['track']['lineno']=1097;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('NP', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1115;
		$m['np'] = $m['NP']();
		$pyjs['track']['lineno']=1118;
		$m['PyImageData'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = 'cf17b15be8843d422047a0703a260f9e';
			$pyjs['track']['lineno']=1120;
			$method = $pyjs__bind_method2('__init__', function(imagedata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cf17b15be8843d422047a0703a260f9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1120};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1120;
				$pyjs['track']['lineno']=1125;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__imagedata', imagedata) : $p['setattr'](self, '__imagedata', imagedata); 
				$pyjs['track']['lineno']=1126;
				if ($p['bool'](!$p['bool']($p['isUndefined']((typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray))))) {
					$pyjs['track']['lineno']=1127;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', $m['PyUint8ClampedArray']()) : $p['setattr'](self, 'data', $m['PyUint8ClampedArray']()); 
				}
				else {
					$pyjs['track']['lineno']=1129;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('data', $m['PyCanvasPixelArray']()) : $p['setattr'](self, 'data', $m['PyCanvasPixelArray']()); 
				}
				$pyjs['track']['lineno']=1130;
				$p['getattr'](self, 'data')['__is_instance__'] && typeof $p['getattr'](self, 'data')['__setattr__'] == 'function' ? $p['getattr'](self, 'data')['__setattr__']('__data', $p['getattr'](imagedata, 'data')) : $p['setattr']($p['getattr'](self, 'data'), '__data', $p['getattr'](imagedata, 'data')); 
				$pyjs['track']['lineno']=1131;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('width', $p['getattr'](imagedata, 'width')) : $p['setattr'](self, 'width', $p['getattr'](imagedata, 'width')); 
				$pyjs['track']['lineno']=1132;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('height', $p['getattr'](imagedata, 'height')) : $p['setattr'](self, 'height', $p['getattr'](imagedata, 'height')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1134;
			$method = $pyjs__bind_method2('getImageData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'cf17b15be8843d422047a0703a260f9e') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1134};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1134;
				$pyjs['track']['lineno']=1138;
				$pyjs['track']['lineno']=1138;
				var $pyjs__ret = $p['getattr'](self, '__imagedata');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=1118;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageData', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1141;
		$m['PyImageMatrix'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '2b0b52545ec9d29a71f8d4ac5ca669c0';
			$pyjs['track']['lineno']=1143;
			$method = $pyjs__bind_method2('__init__', function(imagedata) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					imagedata = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1143};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1143;
				$pyjs['track']['lineno']=1148;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('__imagedata', $m['PyImageData'](imagedata)) : $p['setattr'](self, '__imagedata', $m['PyImageData'](imagedata)); 
				$pyjs['track']['lineno']=1149;
				if ($p['bool']($p['isinstance']($p['getattr']($p['getattr'](self, '__imagedata'), 'data'), $m['PyUint8ClampedArray']))) {
					$pyjs['track']['lineno']=1150;
					$m['Ndarray']['__init__'](self, $p['getattr']($p['getattr'](self, '__imagedata'), 'data'), $constant_int_0);
				}
				else {
					$pyjs['track']['lineno']=1152;
					$m['Ndarray']['__init__'](self, $p['getattr']($p['getattr'](self, '__imagedata'), 'data'), $constant_int_1);
				}
				$pyjs['track']['lineno']=1153;
				self['setshape']($p['getattr']($p['getattr'](self, '__imagedata'), 'height'), $p['getattr']($p['getattr'](self, '__imagedata'), 'width'), $constant_int_4);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['imagedata']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1155;
			$method = $pyjs__bind_method2('getWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1155};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1155;
				$pyjs['track']['lineno']=1159;
				$pyjs['track']['lineno']=1159;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__imagedata'), 'width');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidth'] = $method;
			$pyjs['track']['lineno']=1161;
			$method = $pyjs__bind_method2('getHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1161};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1161;
				$pyjs['track']['lineno']=1165;
				$pyjs['track']['lineno']=1165;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__imagedata'), 'height');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHeight'] = $method;
			$pyjs['track']['lineno']=1167;
			$method = $pyjs__bind_method2('getPixel', function(index) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add67,$add72,$add73,$add70,$add71,i,$add69,$mul40,$mul41,$mul42,$add68,$mul39,$add74;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1167};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1167;
				$pyjs['track']['lineno']=1172;
				i = $p['__op_add']($add67=(typeof ($mul39=index['__getitem__']($constant_int_0))==typeof ($mul40=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40)),$add68=(typeof ($mul41=index['__getitem__']($constant_int_1))==typeof ($mul42=$constant_int_4) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42)));
				$pyjs['track']['lineno']=1173;
				$pyjs['track']['lineno']=1173;
				var $pyjs__ret = $p['tuple']([$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add69=i,$add70=$constant_int_1)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add71=i,$add72=$constant_int_2)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add73=i,$add74=$constant_int_3))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixel'] = $method;
			$pyjs['track']['lineno']=1175;
			$method = $pyjs__bind_method2('setPixel', function(index, value) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add76,$add75,$add77,$mul44,$mul45,$add80,$mul43,i,$add81,$add78,$add82,$add79,$mul46;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1175};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1175;
				$pyjs['track']['lineno']=1180;
				i = $p['__op_add']($add75=(typeof ($mul43=index['__getitem__']($constant_int_0))==typeof ($mul44=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44)),$add76=(typeof ($mul45=index['__getitem__']($constant_int_1))==typeof ($mul46=$constant_int_4) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46)));
				$pyjs['track']['lineno']=1181;
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([value['__getitem__']($constant_int_0), value['__getitem__']($constant_int_1), value['__getitem__']($constant_int_2), value['__getitem__']($constant_int_3)]), 4, null);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign5[0]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add77=i,$add78=$constant_int_1), $tupleassign5[1]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add79=i,$add80=$constant_int_2), $tupleassign5[2]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add81=i,$add82=$constant_int_3), $tupleassign5[3]);
				$pyjs['track']['lineno']=1182;
				$pyjs['track']['lineno']=1182;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixel'] = $method;
			$pyjs['track']['lineno']=1184;
			$method = $pyjs__bind_method2('getPixelRGB', function(index) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul50,$mul48,$mul49,$add83,$mul47,$add87,$add86,$add85,$add84,i,$add88;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1184};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1184;
				$pyjs['track']['lineno']=1189;
				i = $p['__op_add']($add83=(typeof ($mul47=index['__getitem__']($constant_int_0))==typeof ($mul48=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)),$add84=(typeof ($mul49=index['__getitem__']($constant_int_1))==typeof ($mul50=$constant_int_4) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50)));
				$pyjs['track']['lineno']=1190;
				$pyjs['track']['lineno']=1190;
				var $pyjs__ret = $p['tuple']([$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add85=i,$add86=$constant_int_1)), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add87=i,$add88=$constant_int_2))]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixelRGB'] = $method;
			$pyjs['track']['lineno']=1192;
			$method = $pyjs__bind_method2('setPixelRGB', function(index, value) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add89,$add94,$mul53,$mul52,$add90,$add91,$mul54,i,$add92,$add93,$mul51;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1192};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1192;
				$pyjs['track']['lineno']=1197;
				i = $p['__op_add']($add89=(typeof ($mul51=index['__getitem__']($constant_int_0))==typeof ($mul52=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52)),$add90=(typeof ($mul53=index['__getitem__']($constant_int_1))==typeof ($mul54=$constant_int_4) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54)));
				$pyjs['track']['lineno']=1198;
				var $tupleassign6 = $p['__ass_unpack']($p['tuple']([value['__getitem__']($constant_int_0), value['__getitem__']($constant_int_1), value['__getitem__']($constant_int_2)]), 3, null);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign6[0]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add91=i,$add92=$constant_int_1), $tupleassign6[1]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add93=i,$add94=$constant_int_2), $tupleassign6[2]);
				$pyjs['track']['lineno']=1199;
				$pyjs['track']['lineno']=1199;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixelRGB'] = $method;
			$pyjs['track']['lineno']=1201;
			$method = $pyjs__bind_method2('getPixelAlpha', function(index) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul58,$add98,i,$add95,$add97,$mul57,$mul56,$mul55,$add96;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1201};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1201;
				$pyjs['track']['lineno']=1206;
				i = $p['__op_add']($add95=(typeof ($mul55=index['__getitem__']($constant_int_0))==typeof ($mul56=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56)),$add96=(typeof ($mul57=index['__getitem__']($constant_int_1))==typeof ($mul58=$constant_int_4) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)));
				$pyjs['track']['lineno']=1207;
				$pyjs['track']['lineno']=1207;
				var $pyjs__ret = $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add97=i,$add98=$constant_int_3));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixelAlpha'] = $method;
			$pyjs['track']['lineno']=1209;
			$method = $pyjs__bind_method2('setPixelAlpha', function(index, value) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $mul62,$mul60,$mul61,$add101,$add99,$add100,i,$mul59,$add102;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1209};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1209;
				$pyjs['track']['lineno']=1214;
				i = $p['__op_add']($add99=(typeof ($mul59=index['__getitem__']($constant_int_0))==typeof ($mul60=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul59=='number'?
					$mul59*$mul60:
					$p['op_mul']($mul59,$mul60)),$add100=(typeof ($mul61=index['__getitem__']($constant_int_1))==typeof ($mul62=$constant_int_4) && typeof $mul61=='number'?
					$mul61*$mul62:
					$p['op_mul']($mul61,$mul62)));
				$pyjs['track']['lineno']=1215;
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add101=i,$add102=$constant_int_3), value);
				$pyjs['track']['lineno']=1216;
				$pyjs['track']['lineno']=1216;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixelAlpha'] = $method;
			$pyjs['track']['lineno']=1218;
			$method = $pyjs__bind_method2('getPixelInteger', function(index) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add103,$mul66,$add104,$mul64,$mul65,i,$add108,$add106,$add110,$add109,$add107,$add105,$mul63;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1218};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1218;
				$pyjs['track']['lineno']=1223;
				i = $p['__op_add']($add103=(typeof ($mul63=index['__getitem__']($constant_int_0))==typeof ($mul64=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul63=='number'?
					$mul63*$mul64:
					$p['op_mul']($mul63,$mul64)),$add104=(typeof ($mul65=index['__getitem__']($constant_int_1))==typeof ($mul66=$constant_int_4) && typeof $mul65=='number'?
					$mul65*$mul66:
					$p['op_mul']($mul65,$mul66)));
				$pyjs['track']['lineno']=1224;
				$pyjs['track']['lineno']=1224;
				var $pyjs__ret = $p['op_bitor']([$p['op_bitshiftleft']($p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__'](i),$constant_int_16), $p['op_bitshiftleft']($p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add105=i,$add106=$constant_int_1)),$constant_int_8), $p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__getitem__']($p['__op_add']($add107=i,$add108=$constant_int_2)), $p['op_bitshiftleft']($p['getattr']($p['getattr'](self, 'imagedata'), 'data')['__getitem__']($p['__op_add']($add109=i,$add110=$constant_int_3)),$constant_int_24)]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['getPixelInteger'] = $method;
			$pyjs['track']['lineno']=1226;
			$method = $pyjs__bind_method2('setPixelInteger', function(index, value) {
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
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add114,$add115,$mul67,$add118,$mul70,i,$add117,$mul69,$add112,$add113,$add111,$add116,$mul68;
				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1226};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1226;
				$pyjs['track']['lineno']=1231;
				i = $p['__op_add']($add111=(typeof ($mul67=index['__getitem__']($constant_int_0))==typeof ($mul68=$p['getattr'](self, '_indices')['__getitem__']($constant_int_0)) && typeof $mul67=='number'?
					$mul67*$mul68:
					$p['op_mul']($mul67,$mul68)),$add112=(typeof ($mul69=index['__getitem__']($constant_int_1))==typeof ($mul70=$constant_int_4) && typeof $mul69=='number'?
					$mul69*$mul70:
					$p['op_mul']($mul69,$mul70)));
				$pyjs['track']['lineno']=1232;
				var $tupleassign7 = $p['__ass_unpack']($p['tuple']([$p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_16), $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_8), $constant_int_255), $p['op_bitand2'](value, $constant_int_255), $p['op_bitand2']($p['op_bitshiftright'](value,$constant_int_24), $constant_int_255)]), 4, null);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__'](i, $tupleassign7[0]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add113=i,$add114=$constant_int_1), $tupleassign7[1]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add115=i,$add116=$constant_int_2), $tupleassign7[2]);
				$p['getattr']($p['getattr'](self, '__imagedata'), 'data')['__setitem__']($p['__op_add']($add117=i,$add118=$constant_int_3), $tupleassign7[3]);
				$pyjs['track']['lineno']=1233;
				$pyjs['track']['lineno']=1233;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['index'],['value']]);
			$cls_definition['setPixelInteger'] = $method;
			$pyjs['track']['lineno']=1235;
			$method = $pyjs__bind_method2('getImageData', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2b0b52545ec9d29a71f8d4ac5ca669c0') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1235};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1235;
				$pyjs['track']['lineno']=1239;
				$pyjs['track']['lineno']=1239;
				var $pyjs__ret = self['__imagedata']['getImageData']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getImageData'] = $method;
			$pyjs['track']['lineno']=1141;
			var $bases = new Array($m['Ndarray']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('PyImageMatrix', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1242;
		$m['Pyjs_Mode'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
			$cls_definition['__md5__'] = '016190efa42a354596e069ccd4320eb1';
			$pyjs['track']['lineno']=1244;
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
					if (self.prototype['__md5__'] !== '016190efa42a354596e069ccd4320eb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1244};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1244;
				$pyjs['track']['lineno']=1245;
				var $tupleassign8 = $p['__ass_unpack'](self['_setmode'](), 2, null);
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('strict', $tupleassign8[0]) : $p['setattr'](self, 'strict', $tupleassign8[0]); 
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('optimized', $tupleassign8[1]) : $p['setattr'](self, 'optimized', $tupleassign8[1]); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=1247;
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
					if (self.prototype['__md5__'] !== '016190efa42a354596e069ccd4320eb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1247};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1247;
				$pyjs['track']['lineno']=1248;
				if ($p['bool']($p['op_eq'](attr, '__strict_mode'))) {
					$pyjs['track']['lineno']=1249;
					$pyjs['track']['lineno']=1249;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=1251;
			$method = $pyjs__bind_method2('_setmode', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '016190efa42a354596e069ccd4320eb1') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.pyjsarray', 'lineno':1251};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.pyjsarray';
				$pyjs['track']['lineno']=1251;
				$pyjs['track']['lineno']=1252;
				if ($p['bool']($p['op_eq']($p['getattr'](self, '__strict_mode'), true))) {
					$pyjs['track']['lineno']=1253;
					$pyjs['track']['lineno']=1253;
					var $pyjs__ret = $p['tuple']([true, false]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=1255;
					$pyjs['track']['lineno']=1255;
					var $pyjs__ret = $p['tuple']([false, true]);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_setmode'] = $method;
			$pyjs['track']['lineno']=1242;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Pyjs_Mode', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=1257;
		$m['pyjs_mode'] = $m['Pyjs_Mode']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.pyjsarray */


/* end module: pyjsdl.pyjsarray */


