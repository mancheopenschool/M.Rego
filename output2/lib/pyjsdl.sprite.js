/* start module: pyjsdl.sprite */
$pyjs['loaded_modules']['pyjsdl.sprite'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.sprite']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.sprite'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.sprite'];
	$m['__repr__'] = function() { return '<module: pyjsdl.sprite>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.sprite';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['sprite'] = $pyjs['loaded_modules']['pyjsdl.sprite'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.sprite.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.sprite.py, line 4:\n    from rect import rectPool';
		$m.__track_lines__[5] = 'pyjsdl.sprite.py, line 5:\n    import mask';
		$m.__track_lines__[7] = "pyjsdl.sprite.py, line 7:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[10] = 'pyjsdl.sprite.py, line 10:\n    def id(sprite):';
		$m.__track_lines__[11] = 'pyjsdl.sprite.py, line 11:\n    return sprite._identity';
		$m.__track_lines__[14] = 'pyjsdl.sprite.py, line 14:\n    class Sprite(object):';
		$m.__track_lines__[26] = 'pyjsdl.sprite.py, line 26:\n    _identity = 0';
		$m.__track_lines__[28] = 'pyjsdl.sprite.py, line 28:\n    def __init__(self, *groups):';
		$m.__track_lines__[34] = 'pyjsdl.sprite.py, line 34:\n    self._identity = Sprite._identity';
		$m.__track_lines__[35] = 'pyjsdl.sprite.py, line 35:\n    Sprite._identity += 1';
		$m.__track_lines__[36] = 'pyjsdl.sprite.py, line 36:\n    self.x = None';
		$m.__track_lines__[37] = 'pyjsdl.sprite.py, line 37:\n    self.y = None';
		$m.__track_lines__[38] = 'pyjsdl.sprite.py, line 38:\n    self.image = None';
		$m.__track_lines__[39] = 'pyjsdl.sprite.py, line 39:\n    self.rect = None';
		$m.__track_lines__[40] = 'pyjsdl.sprite.py, line 40:\n    for group in groups:';
		$m.__track_lines__[41] = 'pyjsdl.sprite.py, line 41:\n    if self not in group:';
		$m.__track_lines__[42] = 'pyjsdl.sprite.py, line 42:\n    group.add(self)';
		$m.__track_lines__[44] = 'pyjsdl.sprite.py, line 44:\n    def __repr__(self):';
		$m.__track_lines__[48] = 'pyjsdl.sprite.py, line 48:\n    return "%s(in %d groups)" % (self.__class__, len(self.groups()))';
		$m.__track_lines__[50] = 'pyjsdl.sprite.py, line 50:\n    def add(self, *groups):';
		$m.__track_lines__[54] = 'pyjsdl.sprite.py, line 54:\n    for group in groups:';
		$m.__track_lines__[55] = 'pyjsdl.sprite.py, line 55:\n    if self not in group:';
		$m.__track_lines__[56] = 'pyjsdl.sprite.py, line 56:\n    group.add(self)';
		$m.__track_lines__[57] = 'pyjsdl.sprite.py, line 57:\n    return None';
		$m.__track_lines__[59] = 'pyjsdl.sprite.py, line 59:\n    def remove(self, *groups):';
		$m.__track_lines__[63] = 'pyjsdl.sprite.py, line 63:\n    for group in groups:';
		$m.__track_lines__[64] = 'pyjsdl.sprite.py, line 64:\n    if self in group:';
		$m.__track_lines__[65] = 'pyjsdl.sprite.py, line 65:\n    group.remove(self)';
		$m.__track_lines__[66] = 'pyjsdl.sprite.py, line 66:\n    return None';
		$m.__track_lines__[68] = 'pyjsdl.sprite.py, line 68:\n    def kill(self):';
		$m.__track_lines__[72] = 'pyjsdl.sprite.py, line 72:\n    for group in Group._groups:';
		$m.__track_lines__[73] = 'pyjsdl.sprite.py, line 73:\n    if self in group:';
		$m.__track_lines__[74] = 'pyjsdl.sprite.py, line 74:\n    group.remove(self)';
		$m.__track_lines__[75] = 'pyjsdl.sprite.py, line 75:\n    return None';
		$m.__track_lines__[77] = 'pyjsdl.sprite.py, line 77:\n    def alive(self):';
		$m.__track_lines__[81] = 'pyjsdl.sprite.py, line 81:\n    for group in Group._groups:';
		$m.__track_lines__[82] = 'pyjsdl.sprite.py, line 82:\n    if self in group:';
		$m.__track_lines__[83] = 'pyjsdl.sprite.py, line 83:\n    return True';
		$m.__track_lines__[84] = 'pyjsdl.sprite.py, line 84:\n    return False';
		$m.__track_lines__[86] = 'pyjsdl.sprite.py, line 86:\n    def groups(self):';
		$m.__track_lines__[90] = 'pyjsdl.sprite.py, line 90:\n    return [group for group in Group._groups if self in group]';
		$m.__track_lines__[92] = 'pyjsdl.sprite.py, line 92:\n    def update(self, *args):';
		$m.__track_lines__[96] = 'pyjsdl.sprite.py, line 96:\n    pass';
		$m.__track_lines__[99] = 'pyjsdl.sprite.py, line 99:\n    class DirtySprite(Sprite):';
		$m.__track_lines__[107] = 'pyjsdl.sprite.py, line 107:\n    def __init__(self, *groups):';
		$m.__track_lines__[111] = 'pyjsdl.sprite.py, line 111:\n    Sprite.__init__(self, *groups)';
		$m.__track_lines__[114] = 'pyjsdl.sprite.py, line 114:\n    class Group(object):';
		$m.__track_lines__[129] = 'pyjsdl.sprite.py, line 129:\n    _groups = []';
		$m.__track_lines__[131] = 'pyjsdl.sprite.py, line 131:\n    def __init__(self, *sprites):';
		$m.__track_lines__[136] = 'pyjsdl.sprite.py, line 136:\n    Group._groups.append(self)';
		$m.__track_lines__[137] = 'pyjsdl.sprite.py, line 137:\n    self._sprites = {}';
		$m.__track_lines__[138] = 'pyjsdl.sprite.py, line 138:\n    if sprites:';
		$m.__track_lines__[139] = 'pyjsdl.sprite.py, line 139:\n    for sprite in sprites:';
		$m.__track_lines__[140] = 'pyjsdl.sprite.py, line 140:\n    self._sprites[id(sprite)] = sprite';
		$m.__track_lines__[141] = 'pyjsdl.sprite.py, line 141:\n    self._clear_active = False';
		$m.__track_lines__[142] = 'pyjsdl.sprite.py, line 142:\n    self._sprites_drawn = {}';
		$m.__track_lines__[144] = 'pyjsdl.sprite.py, line 144:\n    def __repr__(self):';
		$m.__track_lines__[148] = 'pyjsdl.sprite.py, line 148:\n    return "%s(%d sprites)" % (self.__class__, len(self._sprites))';
		$m.__track_lines__[150] = 'pyjsdl.sprite.py, line 150:\n    def __iter__(self):';
		$m.__track_lines__[154] = 'pyjsdl.sprite.py, line 154:\n    return self._sprites.itervalues()';
		$m.__track_lines__[156] = 'pyjsdl.sprite.py, line 156:\n    def __contains__(self, sprite):';
		$m.__track_lines__[160] = 'pyjsdl.sprite.py, line 160:\n    return id(sprite) in self._sprites';
		$m.__track_lines__[162] = 'pyjsdl.sprite.py, line 162:\n    def __len__(self):';
		$m.__track_lines__[166] = 'pyjsdl.sprite.py, line 166:\n    return len(self._sprites)';
		$m.__track_lines__[168] = 'pyjsdl.sprite.py, line 168:\n    def sprites(self):';
		$m.__track_lines__[172] = 'pyjsdl.sprite.py, line 172:\n    return self._sprites.values()';
		$m.__track_lines__[174] = 'pyjsdl.sprite.py, line 174:\n    def copy(self):';
		$m.__track_lines__[178] = 'pyjsdl.sprite.py, line 178:\n    newgroup = self.__class__()';
		$m.__track_lines__[179] = 'pyjsdl.sprite.py, line 179:\n    newgroup._sprites = self._sprites.copy()';
		$m.__track_lines__[180] = 'pyjsdl.sprite.py, line 180:\n    return newgroup';
		$m.__track_lines__[182] = 'pyjsdl.sprite.py, line 182:\n    def add(self, *sprites):';
		$m.__track_lines__[186] = 'pyjsdl.sprite.py, line 186:\n    for sprite in sprites:';
		$m.__track_lines__[187] = 'pyjsdl.sprite.py, line 187:\n    self._sprites[id(sprite)] = sprite';
		$m.__track_lines__[188] = 'pyjsdl.sprite.py, line 188:\n    return None';
		$m.__track_lines__[190] = 'pyjsdl.sprite.py, line 190:\n    def remove(self, *sprites):';
		$m.__track_lines__[194] = 'pyjsdl.sprite.py, line 194:\n    for sprite in sprites:';
		$m.__track_lines__[195] = 'pyjsdl.sprite.py, line 195:\n    if id(sprite) in self._sprites:';
		$m.__track_lines__[196] = 'pyjsdl.sprite.py, line 196:\n    del self._sprites[id(sprite)]';
		$m.__track_lines__[197] = 'pyjsdl.sprite.py, line 197:\n    return None';
		$m.__track_lines__[199] = 'pyjsdl.sprite.py, line 199:\n    def has(self, *sprites):';
		$m.__track_lines__[203] = 'pyjsdl.sprite.py, line 203:\n    if not isinstance(sprites[0], Sprite):';
		$m.__track_lines__[204] = 'pyjsdl.sprite.py, line 204:\n    sprites = sprites[0]';
		$m.__track_lines__[205] = 'pyjsdl.sprite.py, line 205:\n    for sprite in sprites:';
		$m.__track_lines__[206] = 'pyjsdl.sprite.py, line 206:\n    if id(sprite) not in self._sprites.iterkeys():';
		$m.__track_lines__[207] = 'pyjsdl.sprite.py, line 207:\n    return False';
		$m.__track_lines__[208] = 'pyjsdl.sprite.py, line 208:\n    return True';
		$m.__track_lines__[210] = 'pyjsdl.sprite.py, line 210:\n    def draw(self, surface):';
		$m.__track_lines__[214] = 'pyjsdl.sprite.py, line 214:\n    surface._blits(self._sprites.itervalues())';
		$m.__track_lines__[215] = 'pyjsdl.sprite.py, line 215:\n    if self._clear_active:';
		$m.__track_lines__[216] = 'pyjsdl.sprite.py, line 216:\n    rectPool.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[217] = 'pyjsdl.sprite.py, line 217:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[218] = 'pyjsdl.sprite.py, line 218:\n    for sprite in self._sprites:';
		$m.__track_lines__[219] = 'pyjsdl.sprite.py, line 219:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[220] = 'pyjsdl.sprite.py, line 220:\n    return None';
		$m.__track_lines__[222] = 'pyjsdl.sprite.py, line 222:\n    def clear(self, surface, background):';
		$m.__track_lines__[227] = 'pyjsdl.sprite.py, line 227:\n    self._clear_active = True';
		$m.__track_lines__[228] = "pyjsdl.sprite.py, line 228:\n    if hasattr(background, 'width'):";
		$m.__track_lines__[229] = 'pyjsdl.sprite.py, line 229:\n    surface._blit_clear(background, self._sprites_drawn.itervalues())';
		$m.__track_lines__[231] = 'pyjsdl.sprite.py, line 231:\n    for sprite in self._sprites_drawn:';
		$m.__track_lines__[232] = 'pyjsdl.sprite.py, line 232:\n    background(surface, self._sprites_drawn[sprite])';
		$m.__track_lines__[234] = 'pyjsdl.sprite.py, line 234:\n    def empty(self):';
		$m.__track_lines__[238] = 'pyjsdl.sprite.py, line 238:\n    self._sprites.clear()';
		$m.__track_lines__[239] = 'pyjsdl.sprite.py, line 239:\n    return None';
		$m.__track_lines__[241] = 'pyjsdl.sprite.py, line 241:\n    def update(self, *args):';
		$m.__track_lines__[245] = 'pyjsdl.sprite.py, line 245:\n    for sprite in self._sprites.itervalues():';
		$m.__track_lines__[246] = 'pyjsdl.sprite.py, line 246:\n    sprite.update(*args)';
		$m.__track_lines__[247] = 'pyjsdl.sprite.py, line 247:\n    return None';
		$m.__track_lines__[250] = 'pyjsdl.sprite.py, line 250:\n    class GroupSingle(Group):';
		$m.__track_lines__[257] = 'pyjsdl.sprite.py, line 257:\n    def __init__(self, sprite=None):';
		$m.__track_lines__[262] = 'pyjsdl.sprite.py, line 262:\n    if sprite:';
		$m.__track_lines__[263] = 'pyjsdl.sprite.py, line 263:\n    Group.__init__(self, sprite)';
		$m.__track_lines__[265] = 'pyjsdl.sprite.py, line 265:\n    Group.__init__(self)';
		$m.__track_lines__[267] = 'pyjsdl.sprite.py, line 267:\n    def __getattr__(self, attr):';
		$m.__track_lines__[271] = "pyjsdl.sprite.py, line 271:\n    if attr == 'sprite':";
		$m.__track_lines__[272] = 'pyjsdl.sprite.py, line 272:\n    if self._sprites:';
		$m.__track_lines__[273] = 'pyjsdl.sprite.py, line 273:\n    return self._sprites.values()[0]';
		$m.__track_lines__[275] = 'pyjsdl.sprite.py, line 275:\n    return None';
		$m.__track_lines__[277] = 'pyjsdl.sprite.py, line 277:\n    def add(self, sprite):';
		$m.__track_lines__[281] = 'pyjsdl.sprite.py, line 281:\n    self._sprites.clear()';
		$m.__track_lines__[282] = 'pyjsdl.sprite.py, line 282:\n    self._sprites[id(sprite)] = sprite';
		$m.__track_lines__[283] = 'pyjsdl.sprite.py, line 283:\n    return None';
		$m.__track_lines__[285] = 'pyjsdl.sprite.py, line 285:\n    def update(self, *args):';
		$m.__track_lines__[289] = 'pyjsdl.sprite.py, line 289:\n    if self._sprites:';
		$m.__track_lines__[290] = 'pyjsdl.sprite.py, line 290:\n    self._sprites.values()[0].update(*args)';
		$m.__track_lines__[291] = 'pyjsdl.sprite.py, line 291:\n    return None';
		$m.__track_lines__[294] = 'pyjsdl.sprite.py, line 294:\n    class RenderUpdates(Group):';
		$m.__track_lines__[301] = 'pyjsdl.sprite.py, line 301:\n    def __init__(self, *sprites):';
		$m.__track_lines__[306] = 'pyjsdl.sprite.py, line 306:\n    Group.__init__(self, *sprites)';
		$m.__track_lines__[307] = 'pyjsdl.sprite.py, line 307:\n    self.changed_areas = []';
		$m.__track_lines__[309] = 'pyjsdl.sprite.py, line 309:\n    def draw(self, surface):';
		$m.__track_lines__[314] = 'pyjsdl.sprite.py, line 314:\n    surface._blits(self._sprites.itervalues())';
		$m.__track_lines__[315] = 'pyjsdl.sprite.py, line 315:\n    if self._clear_active:';
		$m.__track_lines__[316] = 'pyjsdl.sprite.py, line 316:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[317] = 'pyjsdl.sprite.py, line 317:\n    self.changed_areas[:] = []';
		$m.__track_lines__[318] = 'pyjsdl.sprite.py, line 318:\n    for sprite in self._sprites:';
		$m.__track_lines__[319] = 'pyjsdl.sprite.py, line 319:\n    if sprite in self._sprites_drawn:';
		$m.__track_lines__[320] = 'pyjsdl.sprite.py, line 320:\n    if self._sprites_drawn[sprite].intersects(self._sprites[sprite].rect):';
		$m.__track_lines__[321] = 'pyjsdl.sprite.py, line 321:\n    self._sprites_drawn[sprite].union_ip(self._sprites[sprite].rect)';
		$m.__track_lines__[323] = 'pyjsdl.sprite.py, line 323:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[325] = 'pyjsdl.sprite.py, line 325:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[326] = 'pyjsdl.sprite.py, line 326:\n    self.changed_areas.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[327] = 'pyjsdl.sprite.py, line 327:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[328] = 'pyjsdl.sprite.py, line 328:\n    for sprite in self._sprites:';
		$m.__track_lines__[329] = 'pyjsdl.sprite.py, line 329:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[331] = 'pyjsdl.sprite.py, line 331:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[332] = 'pyjsdl.sprite.py, line 332:\n    self.changed_areas[:] = []';
		$m.__track_lines__[333] = 'pyjsdl.sprite.py, line 333:\n    self.changed_areas.extend([rectPool.copy(sprite.rect) for sprite in self._sprites.itervalues()])';
		$m.__track_lines__[334] = 'pyjsdl.sprite.py, line 334:\n    return self.changed_areas';
		$m.__track_lines__[337] = 'pyjsdl.sprite.py, line 337:\n    class OrderedUpdates(RenderUpdates):';
		$m.__track_lines__[344] = 'pyjsdl.sprite.py, line 344:\n    def __init__(self, *sprites):';
		$m.__track_lines__[349] = 'pyjsdl.sprite.py, line 349:\n    self.order = {}';
		$m.__track_lines__[350] = 'pyjsdl.sprite.py, line 350:\n    self.place = {}';
		$m.__track_lines__[351] = 'pyjsdl.sprite.py, line 351:\n    self.range = 1000';
		$m.__track_lines__[352] = 'pyjsdl.sprite.py, line 352:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[353] = 'pyjsdl.sprite.py, line 353:\n    self.sort = None';
		$m.__track_lines__[354] = 'pyjsdl.sprite.py, line 354:\n    for sprite in sprites:';
		$m.__track_lines__[355] = 'pyjsdl.sprite.py, line 355:\n    if sprite not in self._sprites:';
		$m.__track_lines__[356] = 'pyjsdl.sprite.py, line 356:\n    spriteID = id(sprite)';
		$m.__track_lines__[357] = 'pyjsdl.sprite.py, line 357:\n    index = self.index.next()';
		$m.__track_lines__[358] = 'pyjsdl.sprite.py, line 358:\n    self.order[index] = spriteID';
		$m.__track_lines__[359] = 'pyjsdl.sprite.py, line 359:\n    self.place[spriteID] = index';
		$m.__track_lines__[360] = 'pyjsdl.sprite.py, line 360:\n    RenderUpdates.__init__(self, *sprites)';
		$m.__track_lines__[362] = 'pyjsdl.sprite.py, line 362:\n    def __iter__(self):';
		$m.__track_lines__[366] = 'pyjsdl.sprite.py, line 366:\n    if self.sort:';
		$m.__track_lines__[367] = 'pyjsdl.sprite.py, line 367:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[369] = 'pyjsdl.sprite.py, line 369:\n    keys = self.order.keys()';
		$m.__track_lines__[370] = 'pyjsdl.sprite.py, line 370:\n    keys.sort()';
		$m.__track_lines__[371] = 'pyjsdl.sprite.py, line 371:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[372] = 'pyjsdl.sprite.py, line 372:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[373] = 'pyjsdl.sprite.py, line 373:\n    return order_sprite';
		$m.__track_lines__[375] = 'pyjsdl.sprite.py, line 375:\n    def sprites(self):';
		$m.__track_lines__[379] = 'pyjsdl.sprite.py, line 379:\n    if self.sort:';
		$m.__track_lines__[380] = 'pyjsdl.sprite.py, line 380:\n    order_sprite = self.sort[:]';
		$m.__track_lines__[382] = 'pyjsdl.sprite.py, line 382:\n    keys = self.order.keys()';
		$m.__track_lines__[383] = 'pyjsdl.sprite.py, line 383:\n    keys.sort()';
		$m.__track_lines__[384] = 'pyjsdl.sprite.py, line 384:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[385] = 'pyjsdl.sprite.py, line 385:\n    order_sprite = self.sort[:]';
		$m.__track_lines__[386] = 'pyjsdl.sprite.py, line 386:\n    return order_sprite';
		$m.__track_lines__[388] = 'pyjsdl.sprite.py, line 388:\n    def copy(self):';
		$m.__track_lines__[392] = 'pyjsdl.sprite.py, line 392:\n    newgroup = RenderUpdates.copy(self)';
		$m.__track_lines__[393] = 'pyjsdl.sprite.py, line 393:\n    newgroup.order = self.order.copy()';
		$m.__track_lines__[394] = 'pyjsdl.sprite.py, line 394:\n    newgroup.place = self.place.copy()';
		$m.__track_lines__[395] = 'pyjsdl.sprite.py, line 395:\n    newgroup.range = self.range';
		$m.__track_lines__[396] = 'pyjsdl.sprite.py, line 396:\n    newgroup.index = iter(xrange(max(self.order.keys())+1,self.range))';
		$m.__track_lines__[397] = 'pyjsdl.sprite.py, line 397:\n    return newgroup';
		$m.__track_lines__[399] = 'pyjsdl.sprite.py, line 399:\n    def add(self, *sprites):';
		$m.__track_lines__[403] = 'pyjsdl.sprite.py, line 403:\n    for sprite in sprites:';
		$m.__track_lines__[404] = 'pyjsdl.sprite.py, line 404:\n    if sprite not in self._sprites:';
		$m.__track_lines__[405] = 'pyjsdl.sprite.py, line 405:\n    index = self._get_index()';
		$m.__track_lines__[406] = 'pyjsdl.sprite.py, line 406:\n    if index is not None:';
		$m.__track_lines__[407] = 'pyjsdl.sprite.py, line 407:\n    spriteID = id(sprite)';
		$m.__track_lines__[408] = 'pyjsdl.sprite.py, line 408:\n    self.order[index] = spriteID';
		$m.__track_lines__[409] = 'pyjsdl.sprite.py, line 409:\n    self.place[spriteID] = index';
		$m.__track_lines__[411] = 'pyjsdl.sprite.py, line 411:\n    keys = self.order.keys()';
		$m.__track_lines__[412] = 'pyjsdl.sprite.py, line 412:\n    keys.sort()';
		$m.__track_lines__[413] = 'pyjsdl.sprite.py, line 413:\n    if len(keys)*2 > self.range:';
		$m.__track_lines__[414] = 'pyjsdl.sprite.py, line 414:\n    self.range = len(keys)*2';
		$m.__track_lines__[415] = 'pyjsdl.sprite.py, line 415:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[416] = 'pyjsdl.sprite.py, line 416:\n    order = self.order';
		$m.__track_lines__[417] = 'pyjsdl.sprite.py, line 417:\n    self.order = {}';
		$m.__track_lines__[418] = 'pyjsdl.sprite.py, line 418:\n    self.place = {}';
		$m.__track_lines__[419] = 'pyjsdl.sprite.py, line 419:\n    for key in keys:';
		$m.__track_lines__[420] = 'pyjsdl.sprite.py, line 420:\n    index = self.index.next()';
		$m.__track_lines__[421] = 'pyjsdl.sprite.py, line 421:\n    self.order[index] = order[key]';
		$m.__track_lines__[422] = 'pyjsdl.sprite.py, line 422:\n    self.place[order[key]] = index';
		$m.__track_lines__[423] = 'pyjsdl.sprite.py, line 423:\n    index = self.index.next()';
		$m.__track_lines__[424] = 'pyjsdl.sprite.py, line 424:\n    spriteID = id(sprite)';
		$m.__track_lines__[425] = 'pyjsdl.sprite.py, line 425:\n    self.order[index] = spriteID';
		$m.__track_lines__[426] = 'pyjsdl.sprite.py, line 426:\n    self.place[spriteID] = index';
		$m.__track_lines__[427] = 'pyjsdl.sprite.py, line 427:\n    self.sort = None';
		$m.__track_lines__[428] = 'pyjsdl.sprite.py, line 428:\n    RenderUpdates.add(self, *sprites)';
		$m.__track_lines__[429] = 'pyjsdl.sprite.py, line 429:\n    return None';
		$m.__track_lines__[431] = 'pyjsdl.sprite.py, line 431:\n    def _get_index(self):';
		$m.__track_lines__[432] = 'pyjsdl.sprite.py, line 432:\n    try:';
		$m.__track_lines__[433] = 'pyjsdl.sprite.py, line 433:\n    return self.index.next()';
		$m.__track_lines__[435] = 'pyjsdl.sprite.py, line 435:\n    return None';
		$m.__track_lines__[437] = 'pyjsdl.sprite.py, line 437:\n    def remove(self, *sprites):';
		$m.__track_lines__[441] = 'pyjsdl.sprite.py, line 441:\n    for sprite in sprites:';
		$m.__track_lines__[442] = 'pyjsdl.sprite.py, line 442:\n    spriteID = id(sprite)';
		$m.__track_lines__[443] = 'pyjsdl.sprite.py, line 443:\n    if spriteID in self.place:';
		$m.__track_lines__[444] = 'pyjsdl.sprite.py, line 444:\n    del self.order[self.place[spriteID]]';
		$m.__track_lines__[445] = 'pyjsdl.sprite.py, line 445:\n    del self.place[spriteID]';
		$m.__track_lines__[446] = 'pyjsdl.sprite.py, line 446:\n    self.sort = None';
		$m.__track_lines__[447] = 'pyjsdl.sprite.py, line 447:\n    RenderUpdates.remove(self, *sprites)';
		$m.__track_lines__[448] = 'pyjsdl.sprite.py, line 448:\n    return None';
		$m.__track_lines__[450] = 'pyjsdl.sprite.py, line 450:\n    def empty(self):';
		$m.__track_lines__[454] = 'pyjsdl.sprite.py, line 454:\n    self.order = {}';
		$m.__track_lines__[455] = 'pyjsdl.sprite.py, line 455:\n    self.place = {}';
		$m.__track_lines__[456] = 'pyjsdl.sprite.py, line 456:\n    self.index = iter(xrange(self.range))';
		$m.__track_lines__[457] = 'pyjsdl.sprite.py, line 457:\n    self.sort = None';
		$m.__track_lines__[458] = 'pyjsdl.sprite.py, line 458:\n    RenderUpdates.empty(self)';
		$m.__track_lines__[460] = 'pyjsdl.sprite.py, line 460:\n    def draw(self, surface):';
		$m.__track_lines__[464] = 'pyjsdl.sprite.py, line 464:\n    if self.sort:';
		$m.__track_lines__[465] = 'pyjsdl.sprite.py, line 465:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[467] = 'pyjsdl.sprite.py, line 467:\n    keys = self.order.keys()';
		$m.__track_lines__[468] = 'pyjsdl.sprite.py, line 468:\n    keys.sort()';
		$m.__track_lines__[469] = 'pyjsdl.sprite.py, line 469:\n    self.sort = [self._sprites[self.order[key]] for key in keys]';
		$m.__track_lines__[470] = 'pyjsdl.sprite.py, line 470:\n    order_sprite = iter(self.sort)';
		$m.__track_lines__[471] = 'pyjsdl.sprite.py, line 471:\n    surface._blits(order_sprite)';
		$m.__track_lines__[472] = 'pyjsdl.sprite.py, line 472:\n    if self._clear_active:';
		$m.__track_lines__[473] = 'pyjsdl.sprite.py, line 473:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[474] = 'pyjsdl.sprite.py, line 474:\n    self.changed_areas[:] = []';
		$m.__track_lines__[475] = 'pyjsdl.sprite.py, line 475:\n    for sprite in self._sprites:';
		$m.__track_lines__[476] = 'pyjsdl.sprite.py, line 476:\n    if sprite in self._sprites_drawn:';
		$m.__track_lines__[477] = 'pyjsdl.sprite.py, line 477:\n    if self._sprites_drawn[sprite].intersects(self._sprites[sprite].rect):';
		$m.__track_lines__[478] = 'pyjsdl.sprite.py, line 478:\n    self._sprites_drawn[sprite].union_ip(self._sprites[sprite].rect)';
		$m.__track_lines__[480] = 'pyjsdl.sprite.py, line 480:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[482] = 'pyjsdl.sprite.py, line 482:\n    self.changed_areas.append(rectPool.copy(self._sprites[sprite].rect))';
		$m.__track_lines__[483] = 'pyjsdl.sprite.py, line 483:\n    self.changed_areas.extend(self._sprites_drawn.itervalues())';
		$m.__track_lines__[484] = 'pyjsdl.sprite.py, line 484:\n    self._sprites_drawn.clear()';
		$m.__track_lines__[485] = 'pyjsdl.sprite.py, line 485:\n    for sprite in self._sprites:';
		$m.__track_lines__[486] = 'pyjsdl.sprite.py, line 486:\n    self._sprites_drawn[sprite] = rectPool.copy(self._sprites[sprite].rect)';
		$m.__track_lines__[488] = 'pyjsdl.sprite.py, line 488:\n    rectPool.extend(self.changed_areas)';
		$m.__track_lines__[489] = 'pyjsdl.sprite.py, line 489:\n    self.changed_areas[:] = []';
		$m.__track_lines__[490] = 'pyjsdl.sprite.py, line 490:\n    self.changed_areas.extend([rectPool.copy(sprite.rect) for sprite in self._sprites.itervalues()])';
		$m.__track_lines__[491] = 'pyjsdl.sprite.py, line 491:\n    return self.changed_areas';
		$m.__track_lines__[494] = 'pyjsdl.sprite.py, line 494:\n    class LayeredUpdates(OrderedUpdates):';
		$m.__track_lines__[502] = 'pyjsdl.sprite.py, line 502:\n    def __init__(self, *sprites):';
		$m.__track_lines__[506] = 'pyjsdl.sprite.py, line 506:\n    OrderedUpdates(self, *sprites)';
		$m.__track_lines__[509] = 'pyjsdl.sprite.py, line 509:\n    class LayeredDirty(LayeredUpdates):';
		$m.__track_lines__[517] = 'pyjsdl.sprite.py, line 517:\n    def __init__(self, *sprites):';
		$m.__track_lines__[521] = 'pyjsdl.sprite.py, line 521:\n    LayeredUpdates(self, *sprites)';
		$m.__track_lines__[524] = 'pyjsdl.sprite.py, line 524:\n    def spritecollide(sprite, group, dokill, collided=None):';
		$m.__track_lines__[532] = 'pyjsdl.sprite.py, line 532:\n    collide = []';
		$m.__track_lines__[533] = 'pyjsdl.sprite.py, line 533:\n    for sprites in group:';
		$m.__track_lines__[534] = 'pyjsdl.sprite.py, line 534:\n    if sprite.rect.intersects(sprites.rect):';
		$m.__track_lines__[535] = 'pyjsdl.sprite.py, line 535:\n    if collided:';
		$m.__track_lines__[536] = 'pyjsdl.sprite.py, line 536:\n    if not collided(sprite,sprites):';
		$m.__track_lines__[537] = 'pyjsdl.sprite.py, line 537:\n    continue';
		$m.__track_lines__[538] = 'pyjsdl.sprite.py, line 538:\n    collide.append(sprites)';
		$m.__track_lines__[539] = 'pyjsdl.sprite.py, line 539:\n    if collide and dokill:';
		$m.__track_lines__[540] = 'pyjsdl.sprite.py, line 540:\n    for sprite in collide:';
		$m.__track_lines__[541] = 'pyjsdl.sprite.py, line 541:\n    sprite.kill()';
		$m.__track_lines__[542] = 'pyjsdl.sprite.py, line 542:\n    return collide';
		$m.__track_lines__[545] = 'pyjsdl.sprite.py, line 545:\n    def collide_rect(sprite1, sprite2):';
		$m.__track_lines__[552] = 'pyjsdl.sprite.py, line 552:\n    return sprite1.rect.intersects(sprite2.rect)';
		$m.__track_lines__[555] = 'pyjsdl.sprite.py, line 555:\n    def collide_rect_ratio(ratio):';
		$m.__track_lines__[563] = 'pyjsdl.sprite.py, line 563:\n    obj = _collide_rect_ratio(ratio)';
		$m.__track_lines__[564] = 'pyjsdl.sprite.py, line 564:\n    return lambda sprite1,sprite2: obj.__call__(sprite1,sprite2)';
		$m.__track_lines__[567] = 'pyjsdl.sprite.py, line 567:\n    class _collide_rect_ratio(object):';
		$m.__track_lines__[569] = "pyjsdl.sprite.py, line 569:\n    __slots__ = ['ratio']";
		$m.__track_lines__[571] = 'pyjsdl.sprite.py, line 571:\n    def __init__(self, ratio):';
		$m.__track_lines__[572] = 'pyjsdl.sprite.py, line 572:\n    self.ratio = ratio';
		$m.__track_lines__[574] = 'pyjsdl.sprite.py, line 574:\n    def __call__(self, sprite1, sprite2):   #__call__ not implemented in pyjs';
		$m.__track_lines__[575] = 'pyjsdl.sprite.py, line 575:\n    r = sprite1.rect';
		$m.__track_lines__[576] = 'pyjsdl.sprite.py, line 576:\n    x = (r.width*self.ratio)-r.width';
		$m.__track_lines__[577] = 'pyjsdl.sprite.py, line 577:\n    y = (r.height*self.ratio)-r.height';
		$m.__track_lines__[578] = 'pyjsdl.sprite.py, line 578:\n    r1 = rectPool.get(r.x-int(x*0.5), r.y-int(y*0.5), r.width+int(x), r.height+int(y))';
		$m.__track_lines__[579] = 'pyjsdl.sprite.py, line 579:\n    r = sprite2.rect';
		$m.__track_lines__[580] = 'pyjsdl.sprite.py, line 580:\n    x = (r.width*self.ratio)-r.width';
		$m.__track_lines__[581] = 'pyjsdl.sprite.py, line 581:\n    y = (r.height*self.ratio)-r.height';
		$m.__track_lines__[582] = 'pyjsdl.sprite.py, line 582:\n    r2 = rectPool.get(r.x-int(x*0.5), r.y-int(y*0.5), r.width+int(x), r.height+int(y))';
		$m.__track_lines__[583] = 'pyjsdl.sprite.py, line 583:\n    collide = r1.intersects(r2)';
		$m.__track_lines__[584] = 'pyjsdl.sprite.py, line 584:\n    rectPool.extend((r1,r2))';
		$m.__track_lines__[585] = 'pyjsdl.sprite.py, line 585:\n    return collide';
		$m.__track_lines__[588] = 'pyjsdl.sprite.py, line 588:\n    def collide_circle(sprite1, sprite2):';
		$m.__track_lines__[596] = "pyjsdl.sprite.py, line 596:\n    if hasattr(sprite1, 'radius'):";
		$m.__track_lines__[597] = 'pyjsdl.sprite.py, line 597:\n    radius1 = sprite1.radius';
		$m.__track_lines__[599] = 'pyjsdl.sprite.py, line 599:\n    radius1 = ( (((sprite1.rect.width)**2) + ((sprite1.rect.height)**2))**0.5 ) * 0.5';
		$m.__track_lines__[600] = "pyjsdl.sprite.py, line 600:\n    if hasattr(sprite2, 'radius'):";
		$m.__track_lines__[601] = 'pyjsdl.sprite.py, line 601:\n    radius2 = sprite2.radius';
		$m.__track_lines__[603] = 'pyjsdl.sprite.py, line 603:\n    radius2 = ( (((sprite2.rect.width)**2) + ((sprite2.rect.height)**2))**0.5 ) * 0.5';
		$m.__track_lines__[604] = 'pyjsdl.sprite.py, line 604:\n    sx1 = (sprite1.rect.x+int(sprite1.rect.width*0.5))';
		$m.__track_lines__[605] = 'pyjsdl.sprite.py, line 605:\n    sy1 = (sprite1.rect.y+int(sprite1.rect.height*0.5))';
		$m.__track_lines__[606] = 'pyjsdl.sprite.py, line 606:\n    sx2 = (sprite2.rect.x+int(sprite2.rect.width*0.5))';
		$m.__track_lines__[607] = 'pyjsdl.sprite.py, line 607:\n    sy2 = (sprite2.rect.y+int(sprite2.rect.height*0.5))';
		$m.__track_lines__[608] = 'pyjsdl.sprite.py, line 608:\n    return ( ((sx1-sx2)**2 + (sy1-sy2)**2) ) < (radius1**2+radius2**2)';
		$m.__track_lines__[611] = 'pyjsdl.sprite.py, line 611:\n    def collide_circle_ratio(ratio):';
		$m.__track_lines__[620] = 'pyjsdl.sprite.py, line 620:\n    obj = _collide_circle_ratio(ratio)';
		$m.__track_lines__[621] = 'pyjsdl.sprite.py, line 621:\n    return lambda sprite1,sprite2: obj.__call__(sprite1,sprite2)';
		$m.__track_lines__[624] = 'pyjsdl.sprite.py, line 624:\n    class _collide_circle_ratio(object):';
		$m.__track_lines__[626] = "pyjsdl.sprite.py, line 626:\n    __slots__ = ['ratio']";
		$m.__track_lines__[628] = 'pyjsdl.sprite.py, line 628:\n    def __init__(self, ratio):';
		$m.__track_lines__[629] = 'pyjsdl.sprite.py, line 629:\n    self.ratio = ratio';
		$m.__track_lines__[631] = 'pyjsdl.sprite.py, line 631:\n    def __call__(self, sprite1, sprite2):   #__call__ not implemented in pyjs';
		$m.__track_lines__[632] = "pyjsdl.sprite.py, line 632:\n    if hasattr(sprite1, 'radius'):";
		$m.__track_lines__[633] = 'pyjsdl.sprite.py, line 633:\n    radius1 = sprite1.radius * self.ratio';
		$m.__track_lines__[635] = 'pyjsdl.sprite.py, line 635:\n    radius1 = ( (((sprite1.rect.width)**2) + ((sprite1.rect.height)**2))**0.5 ) * 0.5 * self.ratio';
		$m.__track_lines__[636] = "pyjsdl.sprite.py, line 636:\n    if hasattr(sprite2, 'radius'):";
		$m.__track_lines__[637] = 'pyjsdl.sprite.py, line 637:\n    radius2 = sprite2.radius * self.ratio';
		$m.__track_lines__[639] = 'pyjsdl.sprite.py, line 639:\n    radius2 = ( (((sprite2.rect.width)**2) + ((sprite2.rect.height)**2))**0.5 ) * 0.5 * self.ratio';
		$m.__track_lines__[640] = 'pyjsdl.sprite.py, line 640:\n    sx1 = (sprite1.rect.x+int(sprite1.rect.width*0.5))';
		$m.__track_lines__[641] = 'pyjsdl.sprite.py, line 641:\n    sy1 = (sprite1.rect.y+int(sprite1.rect.height*0.5))';
		$m.__track_lines__[642] = 'pyjsdl.sprite.py, line 642:\n    sx2 = (sprite2.rect.x+int(sprite2.rect.width*0.5))';
		$m.__track_lines__[643] = 'pyjsdl.sprite.py, line 643:\n    sy2 = (sprite2.rect.y+int(sprite2.rect.height*0.5))';
		$m.__track_lines__[644] = 'pyjsdl.sprite.py, line 644:\n    return ( ((sx1-sx2)**2 + (sy1-sy2)**2) ) < (radius1**2+radius2**2)';
		$m.__track_lines__[647] = 'pyjsdl.sprite.py, line 647:\n    def collide_mask(sprite1, sprite2):';
		$m.__track_lines__[654] = 'pyjsdl.sprite.py, line 654:\n    clip = sprite1.rect.intersection(sprite2.rect)';
		$m.__track_lines__[655] = 'pyjsdl.sprite.py, line 655:\n    if clip.width < 1 or clip.height < 1:';
		$m.__track_lines__[656] = 'pyjsdl.sprite.py, line 656:\n    return False';
		$m.__track_lines__[657] = 'pyjsdl.sprite.py, line 657:\n    x1,y1 = clip.x-sprite1.rect.x, clip.y-sprite1.rect.y';
		$m.__track_lines__[658] = 'pyjsdl.sprite.py, line 658:\n    x2,y2 = clip.x-sprite2.rect.x, clip.y-sprite2.rect.y';
		$m.__track_lines__[659] = "pyjsdl.sprite.py, line 659:\n    if hasattr(sprite1, 'mask'):";
		$m.__track_lines__[660] = 'pyjsdl.sprite.py, line 660:\n    mask1 = sprite1.mask';
		$m.__track_lines__[662] = 'pyjsdl.sprite.py, line 662:\n    mask1 = mask.from_surface(sprite1.image)';
		$m.__track_lines__[663] = "pyjsdl.sprite.py, line 663:\n    if hasattr(sprite2, 'mask'):";
		$m.__track_lines__[664] = 'pyjsdl.sprite.py, line 664:\n    mask2 = sprite2.mask';
		$m.__track_lines__[666] = 'pyjsdl.sprite.py, line 666:\n    mask2 = mask.from_surface(sprite2.image)';
		$m.__track_lines__[667] = 'pyjsdl.sprite.py, line 667:\n    for y in range(clip.height):';
		$m.__track_lines__[668] = 'pyjsdl.sprite.py, line 668:\n    if mask1.bit[y1+y].get(x1, x1+clip.width).intersects(mask2.bit[y2+y].get(x2, x2+clip.width)):';
		$m.__track_lines__[669] = 'pyjsdl.sprite.py, line 669:\n    return True';
		$m.__track_lines__[670] = 'pyjsdl.sprite.py, line 670:\n    return False';
		$m.__track_lines__[673] = 'pyjsdl.sprite.py, line 673:\n    def groupcollide(group1, group2, dokill1, dokill2):';
		$m.__track_lines__[680] = 'pyjsdl.sprite.py, line 680:\n    collide = {}';
		$m.__track_lines__[681] = 'pyjsdl.sprite.py, line 681:\n    for sprite1 in group1:';
		$m.__track_lines__[682] = 'pyjsdl.sprite.py, line 682:\n    for sprite2 in group2:';
		$m.__track_lines__[683] = 'pyjsdl.sprite.py, line 683:\n    if sprite1.rect.intersects(sprite2.rect):';
		$m.__track_lines__[684] = 'pyjsdl.sprite.py, line 684:\n    if sprite1 not in collide:';
		$m.__track_lines__[685] = 'pyjsdl.sprite.py, line 685:\n    collide[sprite1] = []';
		$m.__track_lines__[686] = 'pyjsdl.sprite.py, line 686:\n    collide[sprite1].append(sprite2)';
		$m.__track_lines__[687] = 'pyjsdl.sprite.py, line 687:\n    if collide:';
		$m.__track_lines__[688] = 'pyjsdl.sprite.py, line 688:\n    if dokill1:';
		$m.__track_lines__[689] = 'pyjsdl.sprite.py, line 689:\n    for sprite1 in collide:';
		$m.__track_lines__[690] = 'pyjsdl.sprite.py, line 690:\n    sprite1.kill()';
		$m.__track_lines__[691] = 'pyjsdl.sprite.py, line 691:\n    if dokill2:';
		$m.__track_lines__[692] = 'pyjsdl.sprite.py, line 692:\n    for sprite1 in collide:';
		$m.__track_lines__[693] = 'pyjsdl.sprite.py, line 693:\n    for sprite2 in collide[sprite1]:';
		$m.__track_lines__[694] = 'pyjsdl.sprite.py, line 694:\n    sprite2.kill()';
		$m.__track_lines__[695] = 'pyjsdl.sprite.py, line 695:\n    return collide';
		$m.__track_lines__[698] = 'pyjsdl.sprite.py, line 698:\n    def spritecollideany(sprite, group):';
		$m.__track_lines__[704] = 'pyjsdl.sprite.py, line 704:\n    for sprites in group:';
		$m.__track_lines__[705] = 'pyjsdl.sprite.py, line 705:\n    if sprite.rect.intersects(sprites.rect):';
		$m.__track_lines__[706] = 'pyjsdl.sprite.py, line 706:\n    return True';
		$m.__track_lines__[707] = 'pyjsdl.sprite.py, line 707:\n    return False';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_1000 = new $p['int'](1000);
		$pyjs['track']['module']='pyjsdl.sprite';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['rectPool'] = $p['___import___']('rect.rectPool', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['mask'] = $p['___import___']('mask', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=10;
		$m['id'] = function(sprite) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.sprite','lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=11;
			var $pyjs__ret = $p['getattr'](sprite, '_identity');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['id']['__name__'] = 'id';

		$m['id']['__bind_type__'] = 0;
		$m['id']['__args__'] = [null,null,['sprite']];
		$pyjs['track']['lineno']=14;
		$m['Sprite'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'f22b0558b245a224a0587a33bea7fc9f';
			$pyjs['track']['lineno']=26;
			$cls_definition['_identity'] = $constant_int_0;
			$pyjs['track']['lineno']=28;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,$iter1_iter,$add2,$add1,$iter1_array,$pyjs__trackstack_size_1,group,$iter1_idx;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=28;
				$pyjs['track']['lineno']=34;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_identity', $p['getattr']($m['Sprite'], '_identity')) : $p['setattr'](self, '_identity', $p['getattr']($m['Sprite'], '_identity')); 
				$pyjs['track']['lineno']=35;
				$m['Sprite']['__is_instance__'] && typeof $m['Sprite']['__setattr__'] == 'function' ? $m['Sprite']['__setattr__']('_identity', $p['__op_add']($add1=$p['getattr']($m['Sprite'], '_identity'),$add2=$constant_int_1)) : $p['setattr']($m['Sprite'], '_identity', $p['__op_add']($add1=$p['getattr']($m['Sprite'], '_identity'),$add2=$constant_int_1)); 
				$pyjs['track']['lineno']=36;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('x', null) : $p['setattr'](self, 'x', null); 
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('y', null) : $p['setattr'](self, 'y', null); 
				$pyjs['track']['lineno']=38;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image', null) : $p['setattr'](self, 'image', null); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rect', null) : $p['setattr'](self, 'rect', null); 
				$pyjs['track']['lineno']=40;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = groups;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					group = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=41;
					if ($p['bool'](!group['__contains__'](self))) {
						$pyjs['track']['lineno']=42;
						group['add'](self);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['groups',null,['self']]);
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
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=44;
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				var $pyjs__ret = $p['sprintf']('%s(in %d groups)', $p['tuple']([$p['getattr'](self, '__class__'), $p['len'](self['groups']())]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=50;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$pyjs__trackstack_size_1,group,$iter2_array;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=54;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = groups;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					group = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=55;
					if ($p['bool'](!group['__contains__'](self))) {
						$pyjs['track']['lineno']=56;
						group['add'](self);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=57;
				$pyjs['track']['lineno']=57;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=59;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter3_idx,group,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=63;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = groups;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					group = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=64;
					if ($p['bool'](group['__contains__'](self))) {
						$pyjs['track']['lineno']=65;
						group['remove'](self);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=66;
				$pyjs['track']['lineno']=66;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=68;
			$method = $pyjs__bind_method2('kill', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var group,$iter4_nextval,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=72;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['getattr']((typeof Group == "undefined"?$m['Group']:Group), '_groups');
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					group = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=73;
					if ($p['bool'](group['__contains__'](self))) {
						$pyjs['track']['lineno']=74;
						group['remove'](self);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=75;
				$pyjs['track']['lineno']=75;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['kill'] = $method;
			$pyjs['track']['lineno']=77;
			$method = $pyjs__bind_method2('alive', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter5_nextval,group,$iter5_idx,$pyjs__trackstack_size_1,$iter5_iter,$iter5_array,$iter5_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=81;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['getattr']((typeof Group == "undefined"?$m['Group']:Group), '_groups');
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					group = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=82;
					if ($p['bool'](group['__contains__'](self))) {
						$pyjs['track']['lineno']=83;
						$pyjs['track']['lineno']=83;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=84;
				$pyjs['track']['lineno']=84;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['alive'] = $method;
			$pyjs['track']['lineno']=86;
			$method = $pyjs__bind_method2('groups', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=86;
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=90;
				var $pyjs__ret = function(){
					var group,$iter6_idx,$iter6_type,$collcomp1,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = $p['getattr']((typeof Group == "undefined"?$m['Group']:Group), '_groups');
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					group = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=90;
					if ($p['bool'](group['__contains__'](self))) {
						$collcomp1['append'](group);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp1;}();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['groups'] = $method;
			$pyjs['track']['lineno']=92;
			$method = $pyjs__bind_method2('update', function() {
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
					if (self.prototype['__md5__'] !== 'f22b0558b245a224a0587a33bea7fc9f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=96;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=14;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Sprite', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=99;
		$m['DirtySprite'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '3fa6c25818cafb49c81ec4c5ce098954';
			$pyjs['track']['lineno']=107;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3fa6c25818cafb49c81ec4c5ce098954') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=107;
				$pyjs['track']['lineno']=111;
				$pyjs_kwargs_call($m['Sprite'], '__init__', groups, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['groups',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=99;
			var $bases = new Array($m['Sprite']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('DirtySprite', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=114;
		$m['Group'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '2335c30b854b95a0c3b695a9098ac65b';
			$pyjs['track']['lineno']=129;
			$cls_definition['_groups'] = $p['list']([]);
			$pyjs['track']['lineno']=131;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':131};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=131;
				$pyjs['track']['lineno']=136;
				$m['Group']['_groups']['append'](self);
				$pyjs['track']['lineno']=137;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sprites', $p['dict']([])) : $p['setattr'](self, '_sprites', $p['dict']([])); 
				$pyjs['track']['lineno']=138;
				if ($p['bool'](sprites)) {
					$pyjs['track']['lineno']=139;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = sprites;
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						sprite = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=140;
						$p['getattr'](self, '_sprites')['__setitem__']($m['id'](sprite), sprite);
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['track']['lineno']=141;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clear_active', false) : $p['setattr'](self, '_clear_active', false); 
				$pyjs['track']['lineno']=142;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_sprites_drawn', $p['dict']([])) : $p['setattr'](self, '_sprites_drawn', $p['dict']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=144;
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
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':144};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=144;
				$pyjs['track']['lineno']=148;
				$pyjs['track']['lineno']=148;
				var $pyjs__ret = $p['sprintf']('%s(%d sprites)', $p['tuple']([$p['getattr'](self, '__class__'), $p['len']($p['getattr'](self, '_sprites'))]));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__repr__'] = $method;
			$pyjs['track']['lineno']=150;
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
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':150};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=150;
				$pyjs['track']['lineno']=154;
				$pyjs['track']['lineno']=154;
				var $pyjs__ret = self['_sprites']['itervalues']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=156;
			$method = $pyjs__bind_method2('__contains__', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':156};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=156;
				$pyjs['track']['lineno']=160;
				$pyjs['track']['lineno']=160;
				var $pyjs__ret = $p['getattr'](self, '_sprites')['__contains__']($m['id'](sprite));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite']]);
			$cls_definition['__contains__'] = $method;
			$pyjs['track']['lineno']=162;
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
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=162;
				$pyjs['track']['lineno']=166;
				$pyjs['track']['lineno']=166;
				var $pyjs__ret = $p['len']($p['getattr'](self, '_sprites'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__len__'] = $method;
			$pyjs['track']['lineno']=168;
			$method = $pyjs__bind_method2('sprites', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':168};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=168;
				$pyjs['track']['lineno']=172;
				$pyjs['track']['lineno']=172;
				var $pyjs__ret = self['_sprites']['values']();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['sprites'] = $method;
			$pyjs['track']['lineno']=174;
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
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var newgroup;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':174};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=174;
				$pyjs['track']['lineno']=178;
				newgroup = self['__class__']();
				$pyjs['track']['lineno']=179;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('_sprites', self['_sprites']['copy']()) : $p['setattr'](newgroup, '_sprites', self['_sprites']['copy']()); 
				$pyjs['track']['lineno']=180;
				$pyjs['track']['lineno']=180;
				var $pyjs__ret = newgroup;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=182;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter8_idx,sprite,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':182};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=182;
				$pyjs['track']['lineno']=186;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = sprites;
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					sprite = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=187;
					$p['getattr'](self, '_sprites')['__setitem__']($m['id'](sprite), sprite);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=188;
				$pyjs['track']['lineno']=188;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=190;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,$pyjs__trackstack_size_1,$iter9_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':190};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=190;
				$pyjs['track']['lineno']=194;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = sprites;
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					sprite = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=195;
					if ($p['bool']($p['getattr'](self, '_sprites')['__contains__']($m['id'](sprite)))) {
						$pyjs['track']['lineno']=196;
						$p['getattr'](self, '_sprites')['__delitem__']($m['id'](sprite));
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=197;
				$pyjs['track']['lineno']=197;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=199;
			$method = $pyjs__bind_method2('has', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter10_nextval,sprite,$iter10_idx,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':199};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=199;
				$pyjs['track']['lineno']=203;
				if ($p['bool'](!$p['bool']($p['isinstance'](sprites['__getitem__']($constant_int_0), $m['Sprite'])))) {
					$pyjs['track']['lineno']=204;
					sprites = sprites['__getitem__']($constant_int_0);
				}
				$pyjs['track']['lineno']=205;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = sprites;
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					sprite = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=206;
					if ($p['bool'](!self['_sprites']['iterkeys']()['__contains__']($m['id'](sprite)))) {
						$pyjs['track']['lineno']=207;
						$pyjs['track']['lineno']=207;
						var $pyjs__ret = false;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=208;
				$pyjs['track']['lineno']=208;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['has'] = $method;
			$pyjs['track']['lineno']=210;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter11_iter,$iter11_type,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':210};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=210;
				$pyjs['track']['lineno']=214;
				surface['_blits'](self['_sprites']['itervalues']());
				$pyjs['track']['lineno']=215;
				if ($p['bool']($p['getattr'](self, '_clear_active'))) {
					$pyjs['track']['lineno']=216;
					$m['rectPool']['extend'](self['_sprites_drawn']['itervalues']());
					$pyjs['track']['lineno']=217;
					self['_sprites_drawn']['clear']();
					$pyjs['track']['lineno']=218;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter11_iter = $p['getattr'](self, '_sprites');
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						sprite = $iter11_nextval['$nextval'];
						$pyjs['track']['lineno']=219;
						$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=220;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=222;
			$method = $pyjs__bind_method2('clear', function(surface, background) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					background = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var sprite,$iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=222;
				$pyjs['track']['lineno']=227;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('_clear_active', true) : $p['setattr'](self, '_clear_active', true); 
				$pyjs['track']['lineno']=228;
				if ($p['bool']($p['hasattr'](background, 'width'))) {
					$pyjs['track']['lineno']=229;
					surface['_blit_clear'](background, self['_sprites_drawn']['itervalues']());
				}
				else {
					$pyjs['track']['lineno']=231;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter12_iter = $p['getattr'](self, '_sprites_drawn');
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						sprite = $iter12_nextval['$nextval'];
						$pyjs['track']['lineno']=232;
						background(surface, $p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['background']]);
			$cls_definition['clear'] = $method;
			$pyjs['track']['lineno']=234;
			$method = $pyjs__bind_method2('empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':234};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=234;
				$pyjs['track']['lineno']=238;
				self['_sprites']['clear']();
				$pyjs['track']['lineno']=239;
				$pyjs['track']['lineno']=239;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['empty'] = $method;
			$pyjs['track']['lineno']=241;
			$method = $pyjs__bind_method2('update', function() {
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
					if (self.prototype['__md5__'] !== '2335c30b854b95a0c3b695a9098ac65b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter13_nextval,sprite,$iter13_iter,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,$iter13_array;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':241};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=241;
				$pyjs['track']['lineno']=245;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter13_iter = self['_sprites']['itervalues']();
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					sprite = $iter13_nextval['$nextval'];
					$pyjs['track']['lineno']=246;
					$pyjs_kwargs_call(sprite, 'update', args, null, [{}]);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=247;
				$pyjs['track']['lineno']=247;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=114;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Group', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=250;
		$m['GroupSingle'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'b553fd0749efdb5155a34d4aba1141f5';
			$pyjs['track']['lineno']=257;
			$method = $pyjs__bind_method2('__init__', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b553fd0749efdb5155a34d4aba1141f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof sprite == 'undefined') sprite=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':257};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=257;
				$pyjs['track']['lineno']=262;
				if ($p['bool'](sprite)) {
					$pyjs['track']['lineno']=263;
					$m['Group']['__init__'](self, sprite);
				}
				else {
					$pyjs['track']['lineno']=265;
					$m['Group']['__init__'](self);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['sprite', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=267;
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
					if (self.prototype['__md5__'] !== 'b553fd0749efdb5155a34d4aba1141f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=267;
				$pyjs['track']['lineno']=271;
				if ($p['bool']($p['op_eq'](attr, 'sprite'))) {
					$pyjs['track']['lineno']=272;
					if ($p['bool']($p['getattr'](self, '_sprites'))) {
						$pyjs['track']['lineno']=273;
						$pyjs['track']['lineno']=273;
						var $pyjs__ret = self['_sprites']['values']()['__getitem__']($constant_int_0);
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else {
						$pyjs['track']['lineno']=275;
						$pyjs['track']['lineno']=275;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attr']]);
			$cls_definition['__getattr__'] = $method;
			$pyjs['track']['lineno']=277;
			$method = $pyjs__bind_method2('add', function(sprite) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'b553fd0749efdb5155a34d4aba1141f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':277};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=277;
				$pyjs['track']['lineno']=281;
				self['_sprites']['clear']();
				$pyjs['track']['lineno']=282;
				$p['getattr'](self, '_sprites')['__setitem__']($m['id'](sprite), sprite);
				$pyjs['track']['lineno']=283;
				$pyjs['track']['lineno']=283;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=285;
			$method = $pyjs__bind_method2('update', function() {
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
					if (self.prototype['__md5__'] !== 'b553fd0749efdb5155a34d4aba1141f5') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':285};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=285;
				$pyjs['track']['lineno']=289;
				if ($p['bool']($p['getattr'](self, '_sprites'))) {
					$pyjs['track']['lineno']=290;
					$pyjs_kwargs_call(self['_sprites']['values']()['__getitem__']($constant_int_0), 'update', args, null, [{}]);
				}
				$pyjs['track']['lineno']=291;
				$pyjs['track']['lineno']=291;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['args',null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=250;
			var $bases = new Array($m['Group']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GroupSingle', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=294;
		$m['RenderUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '3eee60f715445042216cfd3707729689';
			$pyjs['track']['lineno']=301;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3eee60f715445042216cfd3707729689') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':301};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=301;
				$pyjs['track']['lineno']=306;
				$pyjs_kwargs_call($m['Group'], '__init__', sprites, null, [{}, self]);
				$pyjs['track']['lineno']=307;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('changed_areas', $p['list']([])) : $p['setattr'](self, 'changed_areas', $p['list']([])); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=309;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '3eee60f715445042216cfd3707729689') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter14_array,$iter15_array,$iter14_type,sprite,$iter15_type,$iter15_idx,$iter15_iter,$iter14_iter,$pyjs__trackstack_size_1,$iter15_nextval,$iter14_idx,$iter14_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':309};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=309;
				$pyjs['track']['lineno']=314;
				surface['_blits'](self['_sprites']['itervalues']());
				$pyjs['track']['lineno']=315;
				if ($p['bool']($p['getattr'](self, '_clear_active'))) {
					$pyjs['track']['lineno']=316;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=317;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=318;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter14_iter = $p['getattr'](self, '_sprites');
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						sprite = $iter14_nextval['$nextval'];
						$pyjs['track']['lineno']=319;
						if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite))) {
							$pyjs['track']['lineno']=320;
							if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')))) {
								$pyjs['track']['lineno']=321;
								$p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
							}
							else {
								$pyjs['track']['lineno']=323;
								self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
							}
						}
						else {
							$pyjs['track']['lineno']=325;
							self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
					$pyjs['track']['lineno']=326;
					self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
					$pyjs['track']['lineno']=327;
					self['_sprites_drawn']['clear']();
					$pyjs['track']['lineno']=328;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter15_iter = $p['getattr'](self, '_sprites');
					$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
					while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
						sprite = $iter15_nextval['$nextval'];
						$pyjs['track']['lineno']=329;
						$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				else {
					$pyjs['track']['lineno']=331;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=332;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=333;
					self['changed_areas']['extend'](function(){
						var $iter16_array,sprite,$iter16_type,$collcomp2,$iter16_idx,$pyjs__trackstack_size_1,$iter16_nextval,$iter16_iter;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter16_iter = self['_sprites']['itervalues']();
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						sprite = $iter16_nextval['$nextval'];
						$collcomp2['append']($m['rectPool']['copy']($p['getattr'](sprite, 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp2;}());
				}
				$pyjs['track']['lineno']=334;
				$pyjs['track']['lineno']=334;
				var $pyjs__ret = $p['getattr'](self, 'changed_areas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=294;
			var $bases = new Array($m['Group']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('RenderUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=337;
		$m['OrderedUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '5fa5956498493c9ba0f805b9630e4229';
			$pyjs['track']['lineno']=344;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter17_nextval,index,$iter17_iter,sprite,$pyjs__trackstack_size_1,spriteID,$iter17_array,$iter17_idx,$iter17_type;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':344};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=344;
				$pyjs['track']['lineno']=349;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', $p['dict']([])) : $p['setattr'](self, 'order', $p['dict']([])); 
				$pyjs['track']['lineno']=350;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', $p['dict']([])) : $p['setattr'](self, 'place', $p['dict']([])); 
				$pyjs['track']['lineno']=351;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('range', $constant_int_1000) : $p['setattr'](self, 'range', $constant_int_1000); 
				$pyjs['track']['lineno']=352;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))) : $p['setattr'](self, 'index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))); 
				$pyjs['track']['lineno']=353;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=354;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = sprites;
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					sprite = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=355;
					if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite))) {
						$pyjs['track']['lineno']=356;
						spriteID = $m['id'](sprite);
						$pyjs['track']['lineno']=357;
						index = self['index']['next']();
						$pyjs['track']['lineno']=358;
						$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
						$pyjs['track']['lineno']=359;
						$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=360;
				$pyjs_kwargs_call($m['RenderUpdates'], '__init__', sprites, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=362;
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
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var order_sprite,keys;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':362};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=362;
				$pyjs['track']['lineno']=366;
				if ($p['bool']($p['getattr'](self, 'sort'))) {
					$pyjs['track']['lineno']=367;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				else {
					$pyjs['track']['lineno']=369;
					keys = self['order']['keys']();
					$pyjs['track']['lineno']=370;
					keys['sort']();
					$pyjs['track']['lineno']=371;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var $iter18_type,$iter18_iter,$iter18_array,$collcomp3,$iter18_idx,key,$pyjs__trackstack_size_1,$iter18_nextval;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter18_iter = keys;
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						key = $iter18_nextval['$nextval'];
						$collcomp3['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp3;}()) : $p['setattr'](self, 'sort', function(){
						var $iter18_type,$iter18_iter,$iter18_array,$collcomp3,$iter18_idx,key,$pyjs__trackstack_size_1,$iter18_nextval;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter18_iter = keys;
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						key = $iter18_nextval['$nextval'];
						$collcomp3['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp3;}()); 
					$pyjs['track']['lineno']=372;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				$pyjs['track']['lineno']=373;
				$pyjs['track']['lineno']=373;
				var $pyjs__ret = order_sprite;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__iter__'] = $method;
			$pyjs['track']['lineno']=375;
			$method = $pyjs__bind_method2('sprites', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var order_sprite,keys;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':375};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=375;
				$pyjs['track']['lineno']=379;
				if ($p['bool']($p['getattr'](self, 'sort'))) {
					$pyjs['track']['lineno']=380;
					order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
				}
				else {
					$pyjs['track']['lineno']=382;
					keys = self['order']['keys']();
					$pyjs['track']['lineno']=383;
					keys['sort']();
					$pyjs['track']['lineno']=384;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var $iter19_idx,$collcomp4,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,key,$pyjs__trackstack_size_1;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter19_iter = keys;
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						key = $iter19_nextval['$nextval'];
						$collcomp4['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp4;}()) : $p['setattr'](self, 'sort', function(){
						var $iter19_idx,$collcomp4,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,key,$pyjs__trackstack_size_1;
	$collcomp4 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter19_iter = keys;
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						key = $iter19_nextval['$nextval'];
						$collcomp4['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp4;}()); 
					$pyjs['track']['lineno']=385;
					order_sprite = $p['__getslice']($p['getattr'](self, 'sort'), 0, null);
				}
				$pyjs['track']['lineno']=386;
				$pyjs['track']['lineno']=386;
				var $pyjs__ret = order_sprite;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['sprites'] = $method;
			$pyjs['track']['lineno']=388;
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
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,newgroup,$add4;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':388};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=388;
				$pyjs['track']['lineno']=392;
				newgroup = $m['RenderUpdates']['copy'](self);
				$pyjs['track']['lineno']=393;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('order', self['order']['copy']()) : $p['setattr'](newgroup, 'order', self['order']['copy']()); 
				$pyjs['track']['lineno']=394;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('place', self['place']['copy']()) : $p['setattr'](newgroup, 'place', self['place']['copy']()); 
				$pyjs['track']['lineno']=395;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('range', $p['getattr'](self, 'range')) : $p['setattr'](newgroup, 'range', $p['getattr'](self, 'range')); 
				$pyjs['track']['lineno']=396;
				newgroup['__is_instance__'] && typeof newgroup['__setattr__'] == 'function' ? newgroup['__setattr__']('index', $p['iter']($p['xrange']($p['__op_add']($add3=$p['max'](self['order']['keys']()),$add4=$constant_int_1), $p['getattr'](self, 'range')))) : $p['setattr'](newgroup, 'index', $p['iter']($p['xrange']($p['__op_add']($add3=$p['max'](self['order']['keys']()),$add4=$constant_int_1), $p['getattr'](self, 'range')))); 
				$pyjs['track']['lineno']=397;
				$pyjs['track']['lineno']=397;
				var $pyjs__ret = newgroup;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['copy'] = $method;
			$pyjs['track']['lineno']=399;
			$method = $pyjs__bind_method2('add', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter20_nextval,spriteID,$iter20_array,index,$iter20_iter,$iter21_idx,sprite,keys,$iter21_nextval,$iter21_iter,key,$mul4,$mul3,$mul2,$mul1,$iter20_type,$iter21_type,$iter20_idx,$pyjs__trackstack_size_2,$iter21_array,$pyjs__trackstack_size_1,order;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':399};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=399;
				$pyjs['track']['lineno']=403;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter20_iter = sprites;
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
					sprite = $iter20_nextval['$nextval'];
					$pyjs['track']['lineno']=404;
					if ($p['bool'](!$p['getattr'](self, '_sprites')['__contains__'](sprite))) {
						$pyjs['track']['lineno']=405;
						index = self['_get_index']();
						$pyjs['track']['lineno']=406;
						if ($p['bool'](!$p['op_is'](index, null))) {
							$pyjs['track']['lineno']=407;
							spriteID = $m['id'](sprite);
							$pyjs['track']['lineno']=408;
							$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
							$pyjs['track']['lineno']=409;
							$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
						}
						else {
							$pyjs['track']['lineno']=411;
							keys = self['order']['keys']();
							$pyjs['track']['lineno']=412;
							keys['sort']();
							$pyjs['track']['lineno']=413;
							if ($p['bool'](($p['cmp']((typeof ($mul1=$p['len'](keys))==typeof ($mul2=$constant_int_2) && typeof $mul1=='number'?
								$mul1*$mul2:
								$p['op_mul']($mul1,$mul2)), $p['getattr'](self, 'range')) == 1))) {
								$pyjs['track']['lineno']=414;
								self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('range', (typeof ($mul3=$p['len'](keys))==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
									$mul3*$mul4:
									$p['op_mul']($mul3,$mul4))) : $p['setattr'](self, 'range', (typeof ($mul3=$p['len'](keys))==typeof ($mul4=$constant_int_2) && typeof $mul3=='number'?
									$mul3*$mul4:
									$p['op_mul']($mul3,$mul4))); 
							}
							$pyjs['track']['lineno']=415;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))) : $p['setattr'](self, 'index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))); 
							$pyjs['track']['lineno']=416;
							order = $p['getattr'](self, 'order');
							$pyjs['track']['lineno']=417;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', $p['dict']([])) : $p['setattr'](self, 'order', $p['dict']([])); 
							$pyjs['track']['lineno']=418;
							self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', $p['dict']([])) : $p['setattr'](self, 'place', $p['dict']([])); 
							$pyjs['track']['lineno']=419;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter21_iter = keys;
							$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
							while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
								key = $iter21_nextval['$nextval'];
								$pyjs['track']['lineno']=420;
								index = self['index']['next']();
								$pyjs['track']['lineno']=421;
								$p['getattr'](self, 'order')['__setitem__'](index, order['__getitem__'](key));
								$pyjs['track']['lineno']=422;
								$p['getattr'](self, 'place')['__setitem__'](order['__getitem__'](key), index);
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='pyjsdl.sprite';
							$pyjs['track']['lineno']=423;
							index = self['index']['next']();
							$pyjs['track']['lineno']=424;
							spriteID = $m['id'](sprite);
							$pyjs['track']['lineno']=425;
							$p['getattr'](self, 'order')['__setitem__'](index, spriteID);
							$pyjs['track']['lineno']=426;
							$p['getattr'](self, 'place')['__setitem__'](spriteID, index);
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=427;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=428;
				$pyjs_kwargs_call($m['RenderUpdates'], 'add', sprites, null, [{}, self]);
				$pyjs['track']['lineno']=429;
				$pyjs['track']['lineno']=429;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['add'] = $method;
			$pyjs['track']['lineno']=431;
			$method = $pyjs__bind_method2('_get_index', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':431};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=431;
				$pyjs['track']['lineno']=432;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=433;
					$pyjs['track']['lineno']=433;
					var $pyjs__ret = self['index']['next']();
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
					$pyjs['track']['module']='pyjsdl.sprite';
					if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
						$pyjs['track']['lineno']=435;
						$pyjs['track']['lineno']=435;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['_get_index'] = $method;
			$pyjs['track']['lineno']=437;
			$method = $pyjs__bind_method2('remove', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter22_array,sprite,spriteID,$iter22_nextval,$iter22_idx,$iter22_type,$pyjs__trackstack_size_1,$iter22_iter;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':437};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=437;
				$pyjs['track']['lineno']=441;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter22_iter = sprites;
				$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
				while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
					sprite = $iter22_nextval['$nextval'];
					$pyjs['track']['lineno']=442;
					spriteID = $m['id'](sprite);
					$pyjs['track']['lineno']=443;
					if ($p['bool']($p['getattr'](self, 'place')['__contains__'](spriteID))) {
						$pyjs['track']['lineno']=444;
						$p['getattr'](self, 'order')['__delitem__']($p['getattr'](self, 'place')['__getitem__'](spriteID));
						$pyjs['track']['lineno']=445;
						$p['getattr'](self, 'place')['__delitem__'](spriteID);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=446;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=447;
				$pyjs_kwargs_call($m['RenderUpdates'], 'remove', sprites, null, [{}, self]);
				$pyjs['track']['lineno']=448;
				$pyjs['track']['lineno']=448;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=450;
			$method = $pyjs__bind_method2('empty', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':450};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=450;
				$pyjs['track']['lineno']=454;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('order', $p['dict']([])) : $p['setattr'](self, 'order', $p['dict']([])); 
				$pyjs['track']['lineno']=455;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('place', $p['dict']([])) : $p['setattr'](self, 'place', $p['dict']([])); 
				$pyjs['track']['lineno']=456;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))) : $p['setattr'](self, 'index', $p['iter']($p['xrange']($p['getattr'](self, 'range')))); 
				$pyjs['track']['lineno']=457;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', null) : $p['setattr'](self, 'sort', null); 
				$pyjs['track']['lineno']=458;
				$m['RenderUpdates']['empty'](self);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['empty'] = $method;
			$pyjs['track']['lineno']=460;
			$method = $pyjs__bind_method2('draw', function(surface) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '5fa5956498493c9ba0f805b9630e4229') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter25_array,sprite,$iter24_idx,keys,$iter25_nextval,$iter24_type,$iter24_array,$iter25_iter,$iter25_idx,$pyjs__trackstack_size_1,order_sprite,$iter25_type,$iter24_iter,$iter24_nextval;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':460};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=460;
				$pyjs['track']['lineno']=464;
				if ($p['bool']($p['getattr'](self, 'sort'))) {
					$pyjs['track']['lineno']=465;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				else {
					$pyjs['track']['lineno']=467;
					keys = self['order']['keys']();
					$pyjs['track']['lineno']=468;
					keys['sort']();
					$pyjs['track']['lineno']=469;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('sort', function(){
						var $iter23_type,$iter23_nextval,$iter23_iter,$collcomp5,$iter23_idx,key,$pyjs__trackstack_size_1,$iter23_array;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter23_iter = keys;
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
						key = $iter23_nextval['$nextval'];
						$collcomp5['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp5;}()) : $p['setattr'](self, 'sort', function(){
						var $iter23_type,$iter23_nextval,$iter23_iter,$collcomp5,$iter23_idx,key,$pyjs__trackstack_size_1,$iter23_array;
	$collcomp5 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter23_iter = keys;
					$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
					while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
						key = $iter23_nextval['$nextval'];
						$collcomp5['append']($p['getattr'](self, '_sprites')['__getitem__']($p['getattr'](self, 'order')['__getitem__'](key)));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp5;}()); 
					$pyjs['track']['lineno']=470;
					order_sprite = $p['iter']($p['getattr'](self, 'sort'));
				}
				$pyjs['track']['lineno']=471;
				surface['_blits'](order_sprite);
				$pyjs['track']['lineno']=472;
				if ($p['bool']($p['getattr'](self, '_clear_active'))) {
					$pyjs['track']['lineno']=473;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=474;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=475;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter24_iter = $p['getattr'](self, '_sprites');
					$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
					while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
						sprite = $iter24_nextval['$nextval'];
						$pyjs['track']['lineno']=476;
						if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__contains__'](sprite))) {
							$pyjs['track']['lineno']=477;
							if ($p['bool']($p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['intersects']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')))) {
								$pyjs['track']['lineno']=478;
								$p['getattr'](self, '_sprites_drawn')['__getitem__'](sprite)['union_ip']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect'));
							}
							else {
								$pyjs['track']['lineno']=480;
								self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
							}
						}
						else {
							$pyjs['track']['lineno']=482;
							self['changed_areas']['append']($m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
					$pyjs['track']['lineno']=483;
					self['changed_areas']['extend'](self['_sprites_drawn']['itervalues']());
					$pyjs['track']['lineno']=484;
					self['_sprites_drawn']['clear']();
					$pyjs['track']['lineno']=485;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter25_iter = $p['getattr'](self, '_sprites');
					$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
					while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
						sprite = $iter25_nextval['$nextval'];
						$pyjs['track']['lineno']=486;
						$p['getattr'](self, '_sprites_drawn')['__setitem__'](sprite, $m['rectPool']['copy']($p['getattr']($p['getattr'](self, '_sprites')['__getitem__'](sprite), 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				else {
					$pyjs['track']['lineno']=488;
					$m['rectPool']['extend']($p['getattr'](self, 'changed_areas'));
					$pyjs['track']['lineno']=489;
					$p['__setslice']($p['getattr'](self, 'changed_areas'), 0, null, $p['list']([]));
					$pyjs['track']['lineno']=490;
					self['changed_areas']['extend'](function(){
						var sprite,$iter26_type,$iter26_nextval,$collcomp6,$iter26_idx,$pyjs__trackstack_size_1,$iter26_array,$iter26_iter;
	$collcomp6 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter26_iter = self['_sprites']['itervalues']();
					$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
					while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
						sprite = $iter26_nextval['$nextval'];
						$collcomp6['append']($m['rectPool']['copy']($p['getattr'](sprite, 'rect')));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';

	return $collcomp6;}());
				}
				$pyjs['track']['lineno']=491;
				$pyjs['track']['lineno']=491;
				var $pyjs__ret = $p['getattr'](self, 'changed_areas');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface']]);
			$cls_definition['draw'] = $method;
			$pyjs['track']['lineno']=337;
			var $bases = new Array($m['RenderUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('OrderedUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=494;
		$m['LayeredUpdates'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '9cf47c00f1b4293f3393283ca73bb374';
			$pyjs['track']['lineno']=502;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9cf47c00f1b4293f3393283ca73bb374') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':502};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=502;
				$pyjs['track']['lineno']=506;
				$pyjs_kwargs_call(null, $m['OrderedUpdates'], sprites, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=494;
			var $bases = new Array($m['OrderedUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LayeredUpdates', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=509;
		$m['LayeredDirty'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '74a9f379bdd4768a98120a347803c96f';
			$pyjs['track']['lineno']=517;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

					if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '74a9f379bdd4768a98120a347803c96f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':517};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=517;
				$pyjs['track']['lineno']=521;
				$pyjs_kwargs_call(null, $m['LayeredUpdates'], sprites, null, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, ['sprites',null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=509;
			var $bases = new Array($m['LayeredUpdates']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('LayeredDirty', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=524;
		$m['spritecollide'] = function(sprite, group, dokill, collided) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
			if (typeof collided == 'undefined') collided=arguments['callee']['__args__'][5][1];
			var $iter27_nextval,$iter28_idx,$iter28_nextval,$iter27_array,$and2,$iter28_array,collide,$iter27_idx,$iter27_iter,$and1,$pyjs__trackstack_size_1,$iter28_iter,$iter28_type,sprites,$iter27_type;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':524};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=524;
			$pyjs['track']['lineno']=532;
			collide = $p['list']([]);
			$pyjs['track']['lineno']=533;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter27_iter = group;
			$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
			while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
				sprites = $iter27_nextval['$nextval'];
				$pyjs['track']['lineno']=534;
				if ($p['bool'](sprite['rect']['intersects']($p['getattr'](sprites, 'rect')))) {
					$pyjs['track']['lineno']=535;
					if ($p['bool'](collided)) {
						$pyjs['track']['lineno']=536;
						if ($p['bool'](!$p['bool'](collided(sprite, sprites)))) {
							$pyjs['track']['lineno']=537;
							continue;
						}
					}
					$pyjs['track']['lineno']=538;
					collide['append'](sprites);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=539;
			if ($p['bool'](($p['bool']($and1=collide)?dokill:$and1))) {
				$pyjs['track']['lineno']=540;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter28_iter = collide;
				$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
				while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
					sprite = $iter28_nextval['$nextval'];
					$pyjs['track']['lineno']=541;
					sprite['kill']();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
			}
			$pyjs['track']['lineno']=542;
			$pyjs['track']['lineno']=542;
			var $pyjs__ret = collide;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['spritecollide']['__name__'] = 'spritecollide';

		$m['spritecollide']['__bind_type__'] = 0;
		$m['spritecollide']['__args__'] = [null,null,['sprite'],['group'],['dokill'],['collided', null]];
		$pyjs['track']['lineno']=545;
		$m['collide_rect'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			$pyjs['track']={'module':'pyjsdl.sprite','lineno':545};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=545;
			$pyjs['track']['lineno']=552;
			$pyjs['track']['lineno']=552;
			var $pyjs__ret = sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect'));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_rect']['__name__'] = 'collide_rect';

		$m['collide_rect']['__bind_type__'] = 0;
		$m['collide_rect']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=555;
		$m['collide_rect_ratio'] = function(ratio) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var obj,$lambda1;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':555};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=555;
			$pyjs['track']['lineno']=563;
			obj = (typeof _collide_rect_ratio == "undefined"?$m['_collide_rect_ratio']:_collide_rect_ratio)(ratio);
			$pyjs['track']['lineno']=564;
			var 			$lambda1 = function(sprite1, sprite2) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.sprite','lineno':564};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=564;
				$pyjs['track']['lineno']=564;
				$pyjs['track']['lineno']=564;
				var $pyjs__ret = obj['__call__'](sprite1, sprite2);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['sprite1'],['sprite2']];
			$pyjs['track']['lineno']=564;
			var $pyjs__ret = $lambda1;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_rect_ratio']['__name__'] = 'collide_rect_ratio';

		$m['collide_rect_ratio']['__bind_type__'] = 0;
		$m['collide_rect_ratio']['__args__'] = [null,null,['ratio']];
		$pyjs['track']['lineno']=567;
		$m['_collide_rect_ratio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = '04479342e69cf7072cbdfb361c457479';
			$pyjs['track']['lineno']=569;
			$cls_definition['__slots__'] = $p['list'](['ratio']);
			$pyjs['track']['lineno']=571;
			$method = $pyjs__bind_method2('__init__', function(ratio) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ratio = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '04479342e69cf7072cbdfb361c457479') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':571};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=571;
				$pyjs['track']['lineno']=572;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ratio', ratio) : $p['setattr'](self, 'ratio', ratio); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ratio']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=574;
			$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite1 = arguments[1];
					sprite2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '04479342e69cf7072cbdfb361c457479') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add12,r2,$mul20,collide,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add10,$add11,$mul9,$mul8,$mul7,$mul6,$mul5,r1,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$mul10,$add9,$mul19,$mul18,r,$add6,$add7,$add5,y,x,$add8;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':574};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=574;
				$pyjs['track']['lineno']=575;
				r = $p['getattr'](sprite1, 'rect');
				$pyjs['track']['lineno']=576;
				x = $p['__op_sub']($sub1=(typeof ($mul5=$p['getattr'](r, 'width'))==typeof ($mul6=$p['getattr'](self, 'ratio')) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)),$sub2=$p['getattr'](r, 'width'));
				$pyjs['track']['lineno']=577;
				y = $p['__op_sub']($sub3=(typeof ($mul7=$p['getattr'](r, 'height'))==typeof ($mul8=$p['getattr'](self, 'ratio')) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$sub4=$p['getattr'](r, 'height'));
				$pyjs['track']['lineno']=578;
				r1 = $m['rectPool']['get']($p['__op_sub']($sub5=$p['getattr'](r, 'x'),$sub6=$p['int']((typeof ($mul9=x)==typeof ($mul10=0.5) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)))), $p['__op_sub']($sub7=$p['getattr'](r, 'y'),$sub8=$p['int']((typeof ($mul11=y)==typeof ($mul12=0.5) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)))), $p['__op_add']($add5=$p['getattr'](r, 'width'),$add6=$p['int'](x)), $p['__op_add']($add7=$p['getattr'](r, 'height'),$add8=$p['int'](y)));
				$pyjs['track']['lineno']=579;
				r = $p['getattr'](sprite2, 'rect');
				$pyjs['track']['lineno']=580;
				x = $p['__op_sub']($sub9=(typeof ($mul13=$p['getattr'](r, 'width'))==typeof ($mul14=$p['getattr'](self, 'ratio')) && typeof $mul13=='number'?
					$mul13*$mul14:
					$p['op_mul']($mul13,$mul14)),$sub10=$p['getattr'](r, 'width'));
				$pyjs['track']['lineno']=581;
				y = $p['__op_sub']($sub11=(typeof ($mul15=$p['getattr'](r, 'height'))==typeof ($mul16=$p['getattr'](self, 'ratio')) && typeof $mul15=='number'?
					$mul15*$mul16:
					$p['op_mul']($mul15,$mul16)),$sub12=$p['getattr'](r, 'height'));
				$pyjs['track']['lineno']=582;
				r2 = $m['rectPool']['get']($p['__op_sub']($sub13=$p['getattr'](r, 'x'),$sub14=$p['int']((typeof ($mul17=x)==typeof ($mul18=0.5) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18)))), $p['__op_sub']($sub15=$p['getattr'](r, 'y'),$sub16=$p['int']((typeof ($mul19=y)==typeof ($mul20=0.5) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)))), $p['__op_add']($add9=$p['getattr'](r, 'width'),$add10=$p['int'](x)), $p['__op_add']($add11=$p['getattr'](r, 'height'),$add12=$p['int'](y)));
				$pyjs['track']['lineno']=583;
				collide = r1['intersects'](r2);
				$pyjs['track']['lineno']=584;
				$m['rectPool']['extend']($p['tuple']([r1, r2]));
				$pyjs['track']['lineno']=585;
				$pyjs['track']['lineno']=585;
				var $pyjs__ret = collide;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
			$cls_definition['__call__'] = $method;
			$pyjs['track']['lineno']=567;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_collide_rect_ratio', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=588;
		$m['collide_circle'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var radius1,$sub20,radius2,sy2,sy1,$add27,$pow19,$pow18,$pow17,$pow16,$pow15,$pow14,$pow13,$pow12,$pow11,$pow10,$pow7,$pow6,$pow5,$pow4,$pow3,$pow2,$pow1,$add21,$add20,$add23,$add22,$add25,$add24,$pow9,$pow8,$add26,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul21,$sub19,$sub18,$add28,$sub17,$add14,$add15,$add16,$add17,$pow20,$add13,$add18,$add19,sx1,sx2,$mul31,$mul30,$mul32;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':588};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=588;
			$pyjs['track']['lineno']=596;
			if ($p['bool']($p['hasattr'](sprite1, 'radius'))) {
				$pyjs['track']['lineno']=597;
				radius1 = $p['getattr'](sprite1, 'radius');
			}
			else {
				$pyjs['track']['lineno']=599;
				radius1 = (typeof ($mul21=(typeof ($pow5=$p['__op_add']($add13=(typeof ($pow1=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow2=$constant_int_2) && typeof $pow1=='number'?
					Math['pow']($pow1,$pow2):
					$p['op_pow']($pow1,$pow2)),$add14=(typeof ($pow3=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow4=$constant_int_2) && typeof $pow3=='number'?
					Math['pow']($pow3,$pow4):
					$p['op_pow']($pow3,$pow4))))==typeof ($pow6=0.5) && typeof $pow5=='number'?
					Math['pow']($pow5,$pow6):
					$p['op_pow']($pow5,$pow6)))==typeof ($mul22=0.5) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22));
			}
			$pyjs['track']['lineno']=600;
			if ($p['bool']($p['hasattr'](sprite2, 'radius'))) {
				$pyjs['track']['lineno']=601;
				radius2 = $p['getattr'](sprite2, 'radius');
			}
			else {
				$pyjs['track']['lineno']=603;
				radius2 = (typeof ($mul23=(typeof ($pow11=$p['__op_add']($add15=(typeof ($pow7=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow8=$constant_int_2) && typeof $pow7=='number'?
					Math['pow']($pow7,$pow8):
					$p['op_pow']($pow7,$pow8)),$add16=(typeof ($pow9=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow10=$constant_int_2) && typeof $pow9=='number'?
					Math['pow']($pow9,$pow10):
					$p['op_pow']($pow9,$pow10))))==typeof ($pow12=0.5) && typeof $pow11=='number'?
					Math['pow']($pow11,$pow12):
					$p['op_pow']($pow11,$pow12)))==typeof ($mul24=0.5) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24));
			}
			$pyjs['track']['lineno']=604;
			sx1 = $p['__op_add']($add17=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add18=$p['int']((typeof ($mul25=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul26=0.5) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26))));
			$pyjs['track']['lineno']=605;
			sy1 = $p['__op_add']($add19=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add20=$p['int']((typeof ($mul27=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul28=0.5) && typeof $mul27=='number'?
				$mul27*$mul28:
				$p['op_mul']($mul27,$mul28))));
			$pyjs['track']['lineno']=606;
			sx2 = $p['__op_add']($add21=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add22=$p['int']((typeof ($mul29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul30=0.5) && typeof $mul29=='number'?
				$mul29*$mul30:
				$p['op_mul']($mul29,$mul30))));
			$pyjs['track']['lineno']=607;
			sy2 = $p['__op_add']($add23=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add24=$p['int']((typeof ($mul31=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul32=0.5) && typeof $mul31=='number'?
				$mul31*$mul32:
				$p['op_mul']($mul31,$mul32))));
			$pyjs['track']['lineno']=608;
			$pyjs['track']['lineno']=608;
			var $pyjs__ret = ($p['cmp']($p['__op_add']($add25=(typeof ($pow13=$p['__op_sub']($sub17=sx1,$sub18=sx2))==typeof ($pow14=$constant_int_2) && typeof $pow13=='number'?
				Math['pow']($pow13,$pow14):
				$p['op_pow']($pow13,$pow14)),$add26=(typeof ($pow15=$p['__op_sub']($sub19=sy1,$sub20=sy2))==typeof ($pow16=$constant_int_2) && typeof $pow15=='number'?
				Math['pow']($pow15,$pow16):
				$p['op_pow']($pow15,$pow16))), $p['__op_add']($add27=(typeof ($pow17=radius1)==typeof ($pow18=$constant_int_2) && typeof $pow17=='number'?
				Math['pow']($pow17,$pow18):
				$p['op_pow']($pow17,$pow18)),$add28=(typeof ($pow19=radius2)==typeof ($pow20=$constant_int_2) && typeof $pow19=='number'?
				Math['pow']($pow19,$pow20):
				$p['op_pow']($pow19,$pow20)))) == -1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_circle']['__name__'] = 'collide_circle';

		$m['collide_circle']['__bind_type__'] = 0;
		$m['collide_circle']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=611;
		$m['collide_circle_ratio'] = function(ratio) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var obj,$lambda2;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':611};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=611;
			$pyjs['track']['lineno']=620;
			obj = (typeof _collide_circle_ratio == "undefined"?$m['_collide_circle_ratio']:_collide_circle_ratio)(ratio);
			$pyjs['track']['lineno']=621;
			var 			$lambda2 = function(sprite1, sprite2) {
				if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

				$pyjs['track']={'module':'pyjsdl.sprite','lineno':621};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=621;
				$pyjs['track']['lineno']=621;
				$pyjs['track']['lineno']=621;
				var $pyjs__ret = obj['__call__'](sprite1, sprite2);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['sprite1'],['sprite2']];
			$pyjs['track']['lineno']=621;
			var $pyjs__ret = $lambda2;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_circle_ratio']['__name__'] = 'collide_circle_ratio';

		$m['collide_circle_ratio']['__bind_type__'] = 0;
		$m['collide_circle_ratio']['__args__'] = [null,null,['ratio']];
		$pyjs['track']['lineno']=624;
		$m['_collide_circle_ratio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.sprite';
			$cls_definition['__md5__'] = 'ca6312dde5731c10d192817e4ba7ad48';
			$pyjs['track']['lineno']=626;
			$cls_definition['__slots__'] = $p['list'](['ratio']);
			$pyjs['track']['lineno']=628;
			$method = $pyjs__bind_method2('__init__', function(ratio) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					ratio = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ca6312dde5731c10d192817e4ba7ad48') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':628};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=628;
				$pyjs['track']['lineno']=629;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ratio', ratio) : $p['setattr'](self, 'ratio', ratio); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['ratio']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=631;
			$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					sprite1 = arguments[1];
					sprite2 = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ca6312dde5731c10d192817e4ba7ad48') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var radius1,$sub22,radius2,$mul50,$sub24,$sub23,$add43,$add44,$add42,$pow35,sy2,sy1,$sub21,$pow31,$pow30,$pow33,$pow32,$pow40,$add40,$pow39,$pow38,$add29,$mul48,$mul49,$mul44,$mul45,$mul47,$mul40,$mul41,$mul42,$mul43,$add41,$pow37,$mul51,$pow34,$pow26,$pow27,$pow24,$pow25,$pow22,$pow23,$pow21,$pow28,$pow29,sx2,$add38,$add39,sx1,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$pow36,$mul39,$mul38,$mul52,$mul35,$mul34,$mul37,$mul36,$mul46,$mul33;
				$pyjs['track']={'module':'pyjsdl.sprite', 'lineno':631};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.sprite';
				$pyjs['track']['lineno']=631;
				$pyjs['track']['lineno']=632;
				if ($p['bool']($p['hasattr'](sprite1, 'radius'))) {
					$pyjs['track']['lineno']=633;
					radius1 = (typeof ($mul33=$p['getattr'](sprite1, 'radius'))==typeof ($mul34=$p['getattr'](self, 'ratio')) && typeof $mul33=='number'?
						$mul33*$mul34:
						$p['op_mul']($mul33,$mul34));
				}
				else {
					$pyjs['track']['lineno']=635;
					radius1 = (typeof ($mul37=(typeof ($mul35=(typeof ($pow25=$p['__op_add']($add29=(typeof ($pow21=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($pow22=$constant_int_2) && typeof $pow21=='number'?
						Math['pow']($pow21,$pow22):
						$p['op_pow']($pow21,$pow22)),$add30=(typeof ($pow23=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($pow24=$constant_int_2) && typeof $pow23=='number'?
						Math['pow']($pow23,$pow24):
						$p['op_pow']($pow23,$pow24))))==typeof ($pow26=0.5) && typeof $pow25=='number'?
						Math['pow']($pow25,$pow26):
						$p['op_pow']($pow25,$pow26)))==typeof ($mul36=0.5) && typeof $mul35=='number'?
						$mul35*$mul36:
						$p['op_mul']($mul35,$mul36)))==typeof ($mul38=$p['getattr'](self, 'ratio')) && typeof $mul37=='number'?
						$mul37*$mul38:
						$p['op_mul']($mul37,$mul38));
				}
				$pyjs['track']['lineno']=636;
				if ($p['bool']($p['hasattr'](sprite2, 'radius'))) {
					$pyjs['track']['lineno']=637;
					radius2 = (typeof ($mul39=$p['getattr'](sprite2, 'radius'))==typeof ($mul40=$p['getattr'](self, 'ratio')) && typeof $mul39=='number'?
						$mul39*$mul40:
						$p['op_mul']($mul39,$mul40));
				}
				else {
					$pyjs['track']['lineno']=639;
					radius2 = (typeof ($mul43=(typeof ($mul41=(typeof ($pow31=$p['__op_add']($add31=(typeof ($pow27=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($pow28=$constant_int_2) && typeof $pow27=='number'?
						Math['pow']($pow27,$pow28):
						$p['op_pow']($pow27,$pow28)),$add32=(typeof ($pow29=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($pow30=$constant_int_2) && typeof $pow29=='number'?
						Math['pow']($pow29,$pow30):
						$p['op_pow']($pow29,$pow30))))==typeof ($pow32=0.5) && typeof $pow31=='number'?
						Math['pow']($pow31,$pow32):
						$p['op_pow']($pow31,$pow32)))==typeof ($mul42=0.5) && typeof $mul41=='number'?
						$mul41*$mul42:
						$p['op_mul']($mul41,$mul42)))==typeof ($mul44=$p['getattr'](self, 'ratio')) && typeof $mul43=='number'?
						$mul43*$mul44:
						$p['op_mul']($mul43,$mul44));
				}
				$pyjs['track']['lineno']=640;
				sx1 = $p['__op_add']($add33=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x'),$add34=$p['int']((typeof ($mul45=$p['getattr']($p['getattr'](sprite1, 'rect'), 'width'))==typeof ($mul46=0.5) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46))));
				$pyjs['track']['lineno']=641;
				sy1 = $p['__op_add']($add35=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'),$add36=$p['int']((typeof ($mul47=$p['getattr']($p['getattr'](sprite1, 'rect'), 'height'))==typeof ($mul48=0.5) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48))));
				$pyjs['track']['lineno']=642;
				sx2 = $p['__op_add']($add37=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x'),$add38=$p['int']((typeof ($mul49=$p['getattr']($p['getattr'](sprite2, 'rect'), 'width'))==typeof ($mul50=0.5) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50))));
				$pyjs['track']['lineno']=643;
				sy2 = $p['__op_add']($add39=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'),$add40=$p['int']((typeof ($mul51=$p['getattr']($p['getattr'](sprite2, 'rect'), 'height'))==typeof ($mul52=0.5) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52))));
				$pyjs['track']['lineno']=644;
				$pyjs['track']['lineno']=644;
				var $pyjs__ret = ($p['cmp']($p['__op_add']($add41=(typeof ($pow33=$p['__op_sub']($sub21=sx1,$sub22=sx2))==typeof ($pow34=$constant_int_2) && typeof $pow33=='number'?
					Math['pow']($pow33,$pow34):
					$p['op_pow']($pow33,$pow34)),$add42=(typeof ($pow35=$p['__op_sub']($sub23=sy1,$sub24=sy2))==typeof ($pow36=$constant_int_2) && typeof $pow35=='number'?
					Math['pow']($pow35,$pow36):
					$p['op_pow']($pow35,$pow36))), $p['__op_add']($add43=(typeof ($pow37=radius1)==typeof ($pow38=$constant_int_2) && typeof $pow37=='number'?
					Math['pow']($pow37,$pow38):
					$p['op_pow']($pow37,$pow38)),$add44=(typeof ($pow39=radius2)==typeof ($pow40=$constant_int_2) && typeof $pow39=='number'?
					Math['pow']($pow39,$pow40):
					$p['op_pow']($pow39,$pow40)))) == -1);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
			$cls_definition['__call__'] = $method;
			$pyjs['track']['lineno']=624;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('_collide_circle_ratio', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=647;
		$m['collide_mask'] = function(sprite1, sprite2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $sub26,$sub27,clip,$sub25,$sub28,$sub29,mask1,mask2,y1,y2,$add49,$add48,$iter29_type,$add46,$add45,$iter29_array,$sub31,$sub30,$sub32,$or1,$or2,$iter29_nextval,x2,x1,$add50,$add51,$add52,$iter29_iter,$add47,$pyjs__trackstack_size_1,y,$iter29_idx;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':647};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=647;
			$pyjs['track']['lineno']=654;
			clip = sprite1['rect']['intersection']($p['getattr'](sprite2, 'rect'));
			$pyjs['track']['lineno']=655;
			if ($p['bool'](($p['bool']($or1=($p['cmp']($p['getattr'](clip, 'width'), $constant_int_1) == -1))?$or1:($p['cmp']($p['getattr'](clip, 'height'), $constant_int_1) == -1)))) {
				$pyjs['track']['lineno']=656;
				$pyjs['track']['lineno']=656;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=657;
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub25=$p['getattr'](clip, 'x'),$sub26=$p['getattr']($p['getattr'](sprite1, 'rect'), 'x')), $p['__op_sub']($sub27=$p['getattr'](clip, 'y'),$sub28=$p['getattr']($p['getattr'](sprite1, 'rect'), 'y'))]), 2, null);
			x1 = $tupleassign1[0];
			y1 = $tupleassign1[1];
			$pyjs['track']['lineno']=658;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['__op_sub']($sub29=$p['getattr'](clip, 'x'),$sub30=$p['getattr']($p['getattr'](sprite2, 'rect'), 'x')), $p['__op_sub']($sub31=$p['getattr'](clip, 'y'),$sub32=$p['getattr']($p['getattr'](sprite2, 'rect'), 'y'))]), 2, null);
			x2 = $tupleassign2[0];
			y2 = $tupleassign2[1];
			$pyjs['track']['lineno']=659;
			if ($p['bool']($p['hasattr'](sprite1, 'mask'))) {
				$pyjs['track']['lineno']=660;
				mask1 = $p['getattr'](sprite1, 'mask');
			}
			else {
				$pyjs['track']['lineno']=662;
				mask1 = $m['mask']['from_surface']($p['getattr'](sprite1, 'image'));
			}
			$pyjs['track']['lineno']=663;
			if ($p['bool']($p['hasattr'](sprite2, 'mask'))) {
				$pyjs['track']['lineno']=664;
				mask2 = $p['getattr'](sprite2, 'mask');
			}
			else {
				$pyjs['track']['lineno']=666;
				mask2 = $m['mask']['from_surface']($p['getattr'](sprite2, 'image'));
			}
			$pyjs['track']['lineno']=667;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter29_iter = $p['range']($p['getattr'](clip, 'height'));
			$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
			while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
				y = $iter29_nextval['$nextval'];
				$pyjs['track']['lineno']=668;
				if ($p['bool']($p['getattr'](mask1, 'bit')['__getitem__']($p['__op_add']($add45=y1,$add46=y))['get'](x1, $p['__op_add']($add47=x1,$add48=$p['getattr'](clip, 'width')))['intersects']($p['getattr'](mask2, 'bit')['__getitem__']($p['__op_add']($add49=y2,$add50=y))['get'](x2, $p['__op_add']($add51=x2,$add52=$p['getattr'](clip, 'width')))))) {
					$pyjs['track']['lineno']=669;
					$pyjs['track']['lineno']=669;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=670;
			$pyjs['track']['lineno']=670;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['collide_mask']['__name__'] = 'collide_mask';

		$m['collide_mask']['__bind_type__'] = 0;
		$m['collide_mask']['__args__'] = [null,null,['sprite1'],['sprite2']];
		$pyjs['track']['lineno']=673;
		$m['groupcollide'] = function(group1, group2, dokill1, dokill2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $iter33_iter,$iter32_idx,$iter32_nextval,$iter31_nextval,$iter33_nextval,$iter32_iter,$iter33_type,$iter30_nextval,$iter31_idx,$iter32_type,$iter33_idx,$iter32_array,$iter34_iter,sprite2,sprite1,$iter30_type,$iter31_array,collide,$iter30_idx,$iter31_type,$iter34_idx,$iter33_array,$iter34_nextval,$iter30_iter,$iter34_array,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter30_array,$iter34_type,$iter31_iter;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':673};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=673;
			$pyjs['track']['lineno']=680;
			collide = $p['dict']([]);
			$pyjs['track']['lineno']=681;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter30_iter = group1;
			$iter30_nextval=$p['__iter_prepare']($iter30_iter,false);
			while (typeof($p['__wrapped_next']($iter30_nextval)['$nextval']) != 'undefined') {
				sprite1 = $iter30_nextval['$nextval'];
				$pyjs['track']['lineno']=682;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter31_iter = group2;
				$iter31_nextval=$p['__iter_prepare']($iter31_iter,false);
				while (typeof($p['__wrapped_next']($iter31_nextval)['$nextval']) != 'undefined') {
					sprite2 = $iter31_nextval['$nextval'];
					$pyjs['track']['lineno']=683;
					if ($p['bool'](sprite1['rect']['intersects']($p['getattr'](sprite2, 'rect')))) {
						$pyjs['track']['lineno']=684;
						if ($p['bool'](!collide['__contains__'](sprite1))) {
							$pyjs['track']['lineno']=685;
							collide['__setitem__'](sprite1, $p['list']([]));
						}
						$pyjs['track']['lineno']=686;
						collide['__getitem__'](sprite1)['append'](sprite2);
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.sprite';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=687;
			if ($p['bool'](collide)) {
				$pyjs['track']['lineno']=688;
				if ($p['bool'](dokill1)) {
					$pyjs['track']['lineno']=689;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter32_iter = collide;
					$iter32_nextval=$p['__iter_prepare']($iter32_iter,false);
					while (typeof($p['__wrapped_next']($iter32_nextval)['$nextval']) != 'undefined') {
						sprite1 = $iter32_nextval['$nextval'];
						$pyjs['track']['lineno']=690;
						sprite1['kill']();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
				$pyjs['track']['lineno']=691;
				if ($p['bool'](dokill2)) {
					$pyjs['track']['lineno']=692;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter33_iter = collide;
					$iter33_nextval=$p['__iter_prepare']($iter33_iter,false);
					while (typeof($p['__wrapped_next']($iter33_nextval)['$nextval']) != 'undefined') {
						sprite1 = $iter33_nextval['$nextval'];
						$pyjs['track']['lineno']=693;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter34_iter = collide['__getitem__'](sprite1);
						$iter34_nextval=$p['__iter_prepare']($iter34_iter,false);
						while (typeof($p['__wrapped_next']($iter34_nextval)['$nextval']) != 'undefined') {
							sprite2 = $iter34_nextval['$nextval'];
							$pyjs['track']['lineno']=694;
							sprite2['kill']();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='pyjsdl.sprite';
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.sprite';
				}
			}
			$pyjs['track']['lineno']=695;
			$pyjs['track']['lineno']=695;
			var $pyjs__ret = collide;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['groupcollide']['__name__'] = 'groupcollide';

		$m['groupcollide']['__bind_type__'] = 0;
		$m['groupcollide']['__args__'] = [null,null,['group1'],['group2'],['dokill1'],['dokill2']];
		$pyjs['track']['lineno']=698;
		$m['spritecollideany'] = function(sprite, group) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter35_idx,$iter35_nextval,$iter35_type,$pyjs__trackstack_size_1,$iter35_array,$iter35_iter,sprites;
			$pyjs['track']={'module':'pyjsdl.sprite','lineno':698};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=698;
			$pyjs['track']['lineno']=704;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter35_iter = group;
			$iter35_nextval=$p['__iter_prepare']($iter35_iter,false);
			while (typeof($p['__wrapped_next']($iter35_nextval)['$nextval']) != 'undefined') {
				sprites = $iter35_nextval['$nextval'];
				$pyjs['track']['lineno']=705;
				if ($p['bool'](sprite['rect']['intersects']($p['getattr'](sprites, 'rect')))) {
					$pyjs['track']['lineno']=706;
					$pyjs['track']['lineno']=706;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjsdl.sprite';
			$pyjs['track']['lineno']=707;
			$pyjs['track']['lineno']=707;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['spritecollideany']['__name__'] = 'spritecollideany';

		$m['spritecollideany']['__bind_type__'] = 0;
		$m['spritecollideany']['__args__'] = [null,null,['sprite'],['group']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.sprite */


/* end module: pyjsdl.sprite */


/*
PYJS_DEPS: ['rect.rectPool', 'rect', 'mask']
*/
