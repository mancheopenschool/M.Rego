/* start module: test2 */
$pyjs['loaded_modules']['test2'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['test2']['__was_initialized__']) return $pyjs['loaded_modules']['test2'];
	var $m = $pyjs['loaded_modules']['test2'];
	$m['__repr__'] = function() { return '<module: test2>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'test2';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'test2.py, line 1:\n    import pygame';
		$m.__track_lines__[2] = 'test2.py, line 2:\n    import sys';
		$m.__track_lines__[3] = 'test2.py, line 3:\n    import random';
		$m.__track_lines__[4] = 'test2.py, line 4:\n    from pygame.locals import *';
		$m.__track_lines__[6] = 'test2.py, line 6:\n    import pyjs';
		$m.__track_lines__[7] = 'test2.py, line 7:\n    import pyjsdl as pygame';
		$m.__track_lines__[8] = 'test2.py, line 8:\n    pyjsdl.display.setup(run, images)';
		$m.__track_lines__[12] = 'test2.py, line 12:\n    pygame.init()';
		$m.__track_lines__[13] = 'test2.py, line 13:\n    mainClock = pygame.time.Clock()';
		$m.__track_lines__[16] = 'test2.py, line 16:\n    WINDOWWIDTH = 1080';
		$m.__track_lines__[17] = 'test2.py, line 17:\n    WINDOWHEIGHT = 700';
		$m.__track_lines__[18] = 'test2.py, line 18:\n    windowSurface = pygame.display.set_mode((WINDOWWIDTH, WINDOWHEIGHT))';
		$m.__track_lines__[19] = "test2.py, line 19:\n    bg = pygame.image.load('assets/bg2.jpg')";
		$m.__track_lines__[20] = "test2.py, line 20:\n    pygame.display.set_caption('SkyCodeur')";
		$m.__track_lines__[23] = 'test2.py, line 23:\n    BLACK = (0, 0, 0)';
		$m.__track_lines__[24] = 'test2.py, line 24:\n    WHITE = (255, 255, 255)';
		$m.__track_lines__[25] = 'test2.py, line 25:\n    DARK = (38, 16, 30)';
		$m.__track_lines__[26] = 'test2.py, line 26:\n    MEDIUM = (74, 34, 58)';
		$m.__track_lines__[27] = 'test2.py, line 27:\n    BRIGHT = (112, 52, 88)';
		$m.__track_lines__[28] = 'test2.py, line 28:\n    SKY = (70, 10, 88)';
		$m.__track_lines__[29] = 'test2.py, line 29:\n    BLUE = (0, 0, 255)';
		$m.__track_lines__[30] = 'test2.py, line 30:\n    DIMGRAY = (145, 145, 145)';
		$m.__track_lines__[31] = 'test2.py, line 31:\n    SLATEGRAY = (159, 159, 159)';
		$m.__track_lines__[32] = 'test2.py, line 32:\n    DARKGRAY = (165, 165, 165)';
		$m.__track_lines__[36] = 'test2.py, line 36:\n    class Scroller():';
		$m.__track_lines__[37] = 'test2.py, line 37:\n    def __init__(self, speed, color, heightMax):';
		$m.__track_lines__[39] = 'test2.py, line 39:\n    self.buildingHeightMax = heightMax';
		$m.__track_lines__[40] = 'test2.py, line 40:\n    self.buildingHeightMin = 100';
		$m.__track_lines__[41] = 'test2.py, line 41:\n    self.buildingWidthMax = 125';
		$m.__track_lines__[42] = 'test2.py, line 42:\n    self.buildingWidthMin = 75';
		$m.__track_lines__[43] = 'test2.py, line 43:\n    self.buildings = [] # three buildings lists, one for each parallax layer';
		$m.__track_lines__[44] = 'test2.py, line 44:\n    self.layerspeed = speed';
		$m.__track_lines__[45] = 'test2.py, line 45:\n    self.buildTime = True';
		$m.__track_lines__[46] = 'test2.py, line 46:\n    self.buildCountdown = 10';
		$m.__track_lines__[47] = 'test2.py, line 47:\n    self.color = color';
		$m.__track_lines__[49] = 'test2.py, line 49:\n    def update(self):';
		$m.__track_lines__[51] = 'test2.py, line 51:\n    if self.buildTime == False:';
		$m.__track_lines__[52] = 'test2.py, line 52:\n    self.buildCountdown -= 1';
		$m.__track_lines__[53] = 'test2.py, line 53:\n    if self.buildCountdown <= 0:';
		$m.__track_lines__[54] = 'test2.py, line 54:\n    self.buildTime = True';
		$m.__track_lines__[55] = 'test2.py, line 55:\n    self.buildCountdown = random.randint(3, self.layerspeed)';
		$m.__track_lines__[58] = 'test2.py, line 58:\n    if self.buildTime:';
		$m.__track_lines__[60] = 'test2.py, line 60:\n    buildingHeight = random.randint(self.buildingHeightMin, self.buildingHeightMax)';
		$m.__track_lines__[61] = 'test2.py, line 61:\n    buildingWidth = random.randint(self.buildingWidthMin, self.buildingWidthMax)';
		$m.__track_lines__[62] = 'test2.py, line 62:\n    buildingTop = WINDOWHEIGHT - buildingHeight';
		$m.__track_lines__[64] = 'test2.py, line 64:\n    building = pygame.Rect(WINDOWWIDTH, buildingTop, buildingWidth, WINDOWHEIGHT)';
		$m.__track_lines__[65] = 'test2.py, line 65:\n    self.buildTime = False';
		$m.__track_lines__[66] = 'test2.py, line 66:\n    self.buildCountdown = random.randint(3, self.layerspeed * 5)';
		$m.__track_lines__[68] = 'test2.py, line 68:\n    self.buildings.append(building)';
		$m.__track_lines__[71] = 'test2.py, line 71:\n    for building in self.buildings:';
		$m.__track_lines__[72] = 'test2.py, line 72:\n    if building.right < 0:';
		$m.__track_lines__[73] = 'test2.py, line 73:\n    self.buildings.remove(building)';
		$m.__track_lines__[75] = 'test2.py, line 75:\n    building.left -= self.layerspeed';
		$m.__track_lines__[79] = 'test2.py, line 79:\n    for i in range(len(self.buildings)):';
		$m.__track_lines__[80] = 'test2.py, line 80:\n    pygame.draw.rect(windowSurface, self.color, self.buildings[i])';
		$m.__track_lines__[82] = 'test2.py, line 82:\n    class Enemy(pygame.sprite.Sprite):';
		$m.__track_lines__[84] = 'test2.py, line 84:\n    def __init__(self, screen):';
		$m.__track_lines__[85] = 'test2.py, line 85:\n    pygame.sprite.Sprite.__init__(self)';
		$m.__track_lines__[86] = 'test2.py, line 86:\n    print "created a new sprite:", id(self)';
		$m.__track_lines__[87] = 'test2.py, line 87:\n    self.image = pygame.image.load("assets/bug/1.png")';
		$m.__track_lines__[88] = 'test2.py, line 88:\n    self.rect = self.image.get_rect()';
		$m.__track_lines__[89] = 'test2.py, line 89:\n    self.rect.move_ip(random.randint(0, screen.get_width()),';
		$m.__track_lines__[92] = 'test2.py, line 92:\n    def update(self):';
		$m.__track_lines__[93] = 'test2.py, line 93:\n    self.rect.move_ip(random.randint(-3, 3), 0)';
		$m.__track_lines__[95] = 'test2.py, line 95:\n    def main():';
		$m.__track_lines__[98] = "test2.py, line 98:\n    bot = pygame.image.load('assets/ship.png')";
		$m.__track_lines__[99] = 'test2.py, line 99:\n    player = pygame.Rect(50, 50, 40, 26)';
		$m.__track_lines__[101] = 'test2.py, line 101:\n    enemies = pygame.sprite.Group()';
		$m.__track_lines__[103] = 'test2.py, line 103:\n    moveUp = False';
		$m.__track_lines__[104] = 'test2.py, line 104:\n    moveDown = False';
		$m.__track_lines__[105] = 'test2.py, line 105:\n    moveRight = False';
		$m.__track_lines__[106] = 'test2.py, line 106:\n    moveLeft = False';
		$m.__track_lines__[107] = 'test2.py, line 107:\n    player_vert_speed = 7';
		$m.__track_lines__[108] = 'test2.py, line 108:\n    player_forward_speed = 6';
		$m.__track_lines__[109] = 'test2.py, line 109:\n    player_reverse_speed = 9';
		$m.__track_lines__[114] = 'test2.py, line 114:\n    city_back_row = Scroller(3, SLATEGRAY, 350)';
		$m.__track_lines__[115] = 'test2.py, line 115:\n    city_middle_row = Scroller(4, DIMGRAY, 300)';
		$m.__track_lines__[116] = 'test2.py, line 116:\n    city_front_row = Scroller(6, BLACK, 250)';
		$m.__track_lines__[119] = 'test2.py, line 119:\n    while True:';
		$m.__track_lines__[120] = 'test2.py, line 120:\n    for event in pygame.event.get():';
		$m.__track_lines__[121] = 'test2.py, line 121:\n    if event.type == QUIT:';
		$m.__track_lines__[122] = 'test2.py, line 122:\n    pygame.quit()';
		$m.__track_lines__[123] = 'test2.py, line 123:\n    sys.exit()';
		$m.__track_lines__[124] = 'test2.py, line 124:\n    if event.type == KEYDOWN:';
		$m.__track_lines__[125] = "test2.py, line 125:\n    if event.key == K_UP or event.key == ord('w'):";
		$m.__track_lines__[126] = 'test2.py, line 126:\n    moveUp = True';
		$m.__track_lines__[127] = 'test2.py, line 127:\n    moveDown = False';
		$m.__track_lines__[128] = "test2.py, line 128:\n    if event.key == K_DOWN or event.key == ord('s'):";
		$m.__track_lines__[129] = 'test2.py, line 129:\n    moveUp = False';
		$m.__track_lines__[130] = 'test2.py, line 130:\n    moveDown = True';
		$m.__track_lines__[131] = "test2.py, line 131:\n    if event.key == K_RIGHT or event.key == ord('d'):";
		$m.__track_lines__[132] = 'test2.py, line 132:\n    moveRight = True';
		$m.__track_lines__[133] = 'test2.py, line 133:\n    moveLeft = False';
		$m.__track_lines__[134] = "test2.py, line 134:\n    if event.key == K_LEFT or event.key == ord('a'):";
		$m.__track_lines__[135] = 'test2.py, line 135:\n    moveLeft = True';
		$m.__track_lines__[136] = 'test2.py, line 136:\n    moveRight = False';
		$m.__track_lines__[138] = 'test2.py, line 138:\n    if event.type == KEYUP:';
		$m.__track_lines__[139] = 'test2.py, line 139:\n    if event.key == K_ESCAPE:';
		$m.__track_lines__[140] = 'test2.py, line 140:\n    pygame.quit()';
		$m.__track_lines__[141] = 'test2.py, line 141:\n    sys.exit()';
		$m.__track_lines__[142] = "test2.py, line 142:\n    if event.key == K_UP or event.key == ord('w'):";
		$m.__track_lines__[143] = 'test2.py, line 143:\n    moveUp = False';
		$m.__track_lines__[144] = "test2.py, line 144:\n    if event.key == K_DOWN or event.key == ord('s'):";
		$m.__track_lines__[145] = 'test2.py, line 145:\n    moveDown = False';
		$m.__track_lines__[146] = "test2.py, line 146:\n    if event.key == K_RIGHT or event.key == ord ('d'):";
		$m.__track_lines__[147] = 'test2.py, line 147:\n    moveRight = False';
		$m.__track_lines__[148] = "test2.py, line 148:\n    if event.key == K_LEFT or event.key == ord ('a'):";
		$m.__track_lines__[149] = 'test2.py, line 149:\n    moveLeft = False';
		$m.__track_lines__[153] = 'test2.py, line 153:\n    if moveDown and player.bottom < (WINDOWHEIGHT - 10):';
		$m.__track_lines__[154] = 'test2.py, line 154:\n    player.bottom += player_vert_speed';
		$m.__track_lines__[155] = 'test2.py, line 155:\n    if moveUp and player.top > 10:';
		$m.__track_lines__[156] = 'test2.py, line 156:\n    player.top -= player_vert_speed';
		$m.__track_lines__[157] = 'test2.py, line 157:\n    if moveRight and player.right < (WINDOWWIDTH - 10):';
		$m.__track_lines__[158] = 'test2.py, line 158:\n    player.right += player_forward_speed';
		$m.__track_lines__[159] = 'test2.py, line 159:\n    if moveLeft and player.left > 10:';
		$m.__track_lines__[160] = 'test2.py, line 160:\n    player.left -= player_reverse_speed';
		$m.__track_lines__[165] = 'test2.py, line 165:\n    windowSurface.blit(bg, (0,0))';
		$m.__track_lines__[168] = 'test2.py, line 168:\n    city_back_row.update()';
		$m.__track_lines__[169] = 'test2.py, line 169:\n    city_middle_row.update()';
		$m.__track_lines__[170] = 'test2.py, line 170:\n    city_front_row.update()';
		$m.__track_lines__[173] = 'test2.py, line 173:\n    windowSurface.blit(bot, player)';
		$m.__track_lines__[175] = 'test2.py, line 175:\n    enemies.update()';
		$m.__track_lines__[176] = 'test2.py, line 176:\n    enemies.draw(windowSurface)';
		$m.__track_lines__[179] = 'test2.py, line 179:\n    pygame.display.update()';
		$m.__track_lines__[180] = 'test2.py, line 180:\n    mainClock.tick(40)';
		$m.__track_lines__[183] = 'test2.py, line 183:\n    main()';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_10 = new $p['int'](10);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_145 = new $p['int'](145);
		var $constant_int_26 = new $p['int'](26);
		var $constant_int_30 = new $p['int'](30);
		var $constant_int_159 = new $p['int'](159);
		var $constant_int_34 = new $p['int'](34);
		var $constant_int_165 = new $p['int'](165);
		var $constant_int_38 = new $p['int'](38);
		var $constant_int_40 = new $p['int'](40);
		var $constant_int_300 = new $p['int'](300);
		var $constant_int_50 = new $p['int'](50);
		var $constant_int_52 = new $p['int'](52);
		var $constant_int_1080 = new $p['int'](1080);
		var $constant_int_58 = new $p['int'](58);
		var $constant_int_700 = new $p['int'](700);
		var $constant_int_70 = new $p['int'](70);
		var $constant_int_74 = new $p['int'](74);
		var $constant_int_75 = new $p['int'](75);
		var $constant_int_88 = new $p['int'](88);
		var $constant_int_350 = new $p['int'](350);
		var $constant_int_100 = new $p['int'](100);
		var $constant_int_112 = new $p['int'](112);
		var $constant_int_250 = new $p['int'](250);
		var $constant_int_125 = new $p['int'](125);
		var $constant_int_255 = new $p['int'](255);
		$pyjs['track']['module']='test2';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=1;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pygame'] = $p['___import___']('pygame', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=2;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['sys'] = $p['___import___']('sys', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=3;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['random'] = $p['___import___']('random', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$p['__import_all__']('pygame.locals', null, $m, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjs'] = $p['___import___']('pyjs', null);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$m['pyjsdl']['display']['setup']((typeof run == "undefined"?$m['run']:run), (typeof images == "undefined"?$m['images']:images));
		$pyjs['track']['lineno']=12;
		$m['pygame']['init']();
		$pyjs['track']['lineno']=13;
		$m['mainClock'] = $m['pygame']['time']['Clock']();
		$pyjs['track']['lineno']=16;
		$m['WINDOWWIDTH'] = $constant_int_1080;
		$pyjs['track']['lineno']=17;
		$m['WINDOWHEIGHT'] = $constant_int_700;
		$pyjs['track']['lineno']=18;
		$m['windowSurface'] = $m['pygame']['display']['set_mode']($p['tuple']([$m['WINDOWWIDTH'], $m['WINDOWHEIGHT']]));
		$pyjs['track']['lineno']=19;
		$m['bg'] = $m['pygame']['image']['load']('assets/bg2.jpg');
		$pyjs['track']['lineno']=20;
		$m['pygame']['display']['set_caption']('SkyCodeur');
		$pyjs['track']['lineno']=23;
		$m['BLACK'] = $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_0]);
		$pyjs['track']['lineno']=24;
		$m['WHITE'] = $p['tuple']([$constant_int_255, $constant_int_255, $constant_int_255]);
		$pyjs['track']['lineno']=25;
		$m['DARK'] = $p['tuple']([$constant_int_38, $constant_int_16, $constant_int_30]);
		$pyjs['track']['lineno']=26;
		$m['MEDIUM'] = $p['tuple']([$constant_int_74, $constant_int_34, $constant_int_58]);
		$pyjs['track']['lineno']=27;
		$m['BRIGHT'] = $p['tuple']([$constant_int_112, $constant_int_52, $constant_int_88]);
		$pyjs['track']['lineno']=28;
		$m['SKY'] = $p['tuple']([$constant_int_70, $constant_int_10, $constant_int_88]);
		$pyjs['track']['lineno']=29;
		$m['BLUE'] = $p['tuple']([$constant_int_0, $constant_int_0, $constant_int_255]);
		$pyjs['track']['lineno']=30;
		$m['DIMGRAY'] = $p['tuple']([$constant_int_145, $constant_int_145, $constant_int_145]);
		$pyjs['track']['lineno']=31;
		$m['SLATEGRAY'] = $p['tuple']([$constant_int_159, $constant_int_159, $constant_int_159]);
		$pyjs['track']['lineno']=32;
		$m['DARKGRAY'] = $p['tuple']([$constant_int_165, $constant_int_165, $constant_int_165]);
		$pyjs['track']['lineno']=36;
		$m['Scroller'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'test2';
			$cls_definition['__md5__'] = '9b92cd9d823d9a2874de330bc3d6e19f';
			$pyjs['track']['lineno']=37;
			$method = $pyjs__bind_method2('__init__', function(speed, color, heightMax) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					speed = arguments[1];
					color = arguments[2];
					heightMax = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9b92cd9d823d9a2874de330bc3d6e19f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'test2', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='test2';
				$pyjs['track']['lineno']=37;
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildingHeightMax', heightMax) : $p['setattr'](self, 'buildingHeightMax', heightMax); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildingHeightMin', $constant_int_100) : $p['setattr'](self, 'buildingHeightMin', $constant_int_100); 
				$pyjs['track']['lineno']=41;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildingWidthMax', $constant_int_125) : $p['setattr'](self, 'buildingWidthMax', $constant_int_125); 
				$pyjs['track']['lineno']=42;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildingWidthMin', $constant_int_75) : $p['setattr'](self, 'buildingWidthMin', $constant_int_75); 
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildings', $p['list']([])) : $p['setattr'](self, 'buildings', $p['list']([])); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('layerspeed', speed) : $p['setattr'](self, 'layerspeed', speed); 
				$pyjs['track']['lineno']=45;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildTime', true) : $p['setattr'](self, 'buildTime', true); 
				$pyjs['track']['lineno']=46;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildCountdown', $constant_int_10) : $p['setattr'](self, 'buildCountdown', $constant_int_10); 
				$pyjs['track']['lineno']=47;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('color', color) : $p['setattr'](self, 'color', color); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['speed'],['color'],['heightMax']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=49;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9b92cd9d823d9a2874de330bc3d6e19f') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var buildingHeight,$iter2_type,$iter2_iter,$iter1_array,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,$iter1_nextval,$iter2_idx,$iter1_iter,$mul2,$mul1,building,buildingWidth,$iter2_nextval,$iter1_type,buildingTop,i,$iter1_idx,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs['track']={'module':'test2', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='test2';
				$pyjs['track']['lineno']=49;
				$pyjs['track']['lineno']=51;
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'buildTime'), false))) {
					$pyjs['track']['lineno']=52;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildCountdown', $p['__op_sub']($sub1=$p['getattr'](self, 'buildCountdown'),$sub2=$constant_int_1)) : $p['setattr'](self, 'buildCountdown', $p['__op_sub']($sub1=$p['getattr'](self, 'buildCountdown'),$sub2=$constant_int_1)); 
					$pyjs['track']['lineno']=53;
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'buildCountdown'), $constant_int_0) < 1))) {
						$pyjs['track']['lineno']=54;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildTime', true) : $p['setattr'](self, 'buildTime', true); 
						$pyjs['track']['lineno']=55;
						self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildCountdown', $m['random']['randint']($constant_int_3, $p['getattr'](self, 'layerspeed'))) : $p['setattr'](self, 'buildCountdown', $m['random']['randint']($constant_int_3, $p['getattr'](self, 'layerspeed'))); 
					}
				}
				$pyjs['track']['lineno']=58;
				if ($p['bool']($p['getattr'](self, 'buildTime'))) {
					$pyjs['track']['lineno']=60;
					buildingHeight = $m['random']['randint']($p['getattr'](self, 'buildingHeightMin'), $p['getattr'](self, 'buildingHeightMax'));
					$pyjs['track']['lineno']=61;
					buildingWidth = $m['random']['randint']($p['getattr'](self, 'buildingWidthMin'), $p['getattr'](self, 'buildingWidthMax'));
					$pyjs['track']['lineno']=62;
					buildingTop = $p['__op_sub']($sub3=$m['WINDOWHEIGHT'],$sub4=buildingHeight);
					$pyjs['track']['lineno']=64;
					building = $m['pygame']['Rect']($m['WINDOWWIDTH'], buildingTop, buildingWidth, $m['WINDOWHEIGHT']);
					$pyjs['track']['lineno']=65;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildTime', false) : $p['setattr'](self, 'buildTime', false); 
					$pyjs['track']['lineno']=66;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('buildCountdown', $m['random']['randint']($constant_int_3, (typeof ($mul1=$p['getattr'](self, 'layerspeed'))==typeof ($mul2=$constant_int_5) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)))) : $p['setattr'](self, 'buildCountdown', $m['random']['randint']($constant_int_3, (typeof ($mul1=$p['getattr'](self, 'layerspeed'))==typeof ($mul2=$constant_int_5) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)))); 
					$pyjs['track']['lineno']=68;
					self['buildings']['append'](building);
				}
				$pyjs['track']['lineno']=71;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['getattr'](self, 'buildings');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					building = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=72;
					if ($p['bool'](($p['cmp']($p['getattr'](building, 'right'), $constant_int_0) == -1))) {
						$pyjs['track']['lineno']=73;
						self['buildings']['remove'](building);
					}
					else {
						$pyjs['track']['lineno']=75;
						building['__is_instance__'] && typeof building['__setattr__'] == 'function' ? building['__setattr__']('left', $p['__op_sub']($sub5=$p['getattr'](building, 'left'),$sub6=$p['getattr'](self, 'layerspeed'))) : $p['setattr'](building, 'left', $p['__op_sub']($sub5=$p['getattr'](building, 'left'),$sub6=$p['getattr'](self, 'layerspeed'))); 
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='test2';
				$pyjs['track']['lineno']=79;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = $p['range']($p['len']($p['getattr'](self, 'buildings')));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=80;
					$m['pygame']['draw']['rect']($m['windowSurface'], $p['getattr'](self, 'color'), $p['getattr'](self, 'buildings')['__getitem__'](i));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='test2';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=36;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Scroller', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=82;
		$m['Enemy'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'test2';
			$cls_definition['__md5__'] = '8b2056d31a95e617fca71a9215600860';
			$pyjs['track']['lineno']=84;
			$method = $pyjs__bind_method2('__init__', function(screen) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					screen = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8b2056d31a95e617fca71a9215600860') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'test2', 'lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='test2';
				$pyjs['track']['lineno']=84;
				$pyjs['track']['lineno']=85;
				$m['pygame']['sprite']['Sprite']['__init__'](self);
				$pyjs['track']['lineno']=86;
				$p['printFunc'](['created a new sprite:', (typeof id == "undefined"?$m['id']:id)(self)], 1);
				$pyjs['track']['lineno']=87;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('image', $m['pygame']['image']['load']('assets/bug/1.png')) : $p['setattr'](self, 'image', $m['pygame']['image']['load']('assets/bug/1.png')); 
				$pyjs['track']['lineno']=88;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rect', self['image']['get_rect']()) : $p['setattr'](self, 'rect', self['image']['get_rect']()); 
				$pyjs['track']['lineno']=89;
				self['rect']['move_ip']($m['random']['randint']($constant_int_0, screen['get_width']()), $m['random']['randint']($constant_int_0, screen['get_height']()));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['screen']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=92;
			$method = $pyjs__bind_method2('update', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8b2056d31a95e617fca71a9215600860') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'test2', 'lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='test2';
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=93;
				self['rect']['move_ip']($m['random']['randint']((typeof ($usub1=$constant_int_3)=='number'?
					-$usub1:
					$p['op_usub']($usub1)), $constant_int_3), $constant_int_0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['update'] = $method;
			$pyjs['track']['lineno']=82;
			var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Enemy', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=95;
		$m['main'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, 0, arguments['length']);
			var $and8,moveDown,$iter3_type,$sub14,$add2,player,moveRight,event,enemies,player_forward_speed,$iter3_idx,$add3,$iter3_nextval,$sub9,$sub8,$iter3_iter,$sub12,city_middle_row,city_front_row,$sub7,$sub11,$or5,$or4,$or7,$or6,$or1,$add4,$or3,$or2,$sub13,$and1,$and2,$or12,$or9,$or8,$and6,$and5,$and3,city_back_row,$iter3_array,$and7,player_reverse_speed,moveUp,moveLeft,$sub10,bot,$and4,player_vert_speed,$or15,$or14,$or16,$or11,$or10,$or13,$pyjs__trackstack_size_1,$add1;
			$pyjs['track']={'module':'test2','lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='test2';
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=98;
			bot = $m['pygame']['image']['load']('assets/ship.png');
			$pyjs['track']['lineno']=99;
			player = $m['pygame']['Rect']($constant_int_50, $constant_int_50, $constant_int_40, $constant_int_26);
			$pyjs['track']['lineno']=101;
			enemies = $m['pygame']['sprite']['Group']();
			$pyjs['track']['lineno']=103;
			moveUp = false;
			$pyjs['track']['lineno']=104;
			moveDown = false;
			$pyjs['track']['lineno']=105;
			moveRight = false;
			$pyjs['track']['lineno']=106;
			moveLeft = false;
			$pyjs['track']['lineno']=107;
			player_vert_speed = $constant_int_7;
			$pyjs['track']['lineno']=108;
			player_forward_speed = $constant_int_6;
			$pyjs['track']['lineno']=109;
			player_reverse_speed = $constant_int_9;
			$pyjs['track']['lineno']=114;
			city_back_row = $m['Scroller']($constant_int_3, $m['SLATEGRAY'], $constant_int_350);
			$pyjs['track']['lineno']=115;
			city_middle_row = $m['Scroller']($constant_int_4, $m['DIMGRAY'], $constant_int_300);
			$pyjs['track']['lineno']=116;
			city_front_row = $m['Scroller']($constant_int_6, $m['BLACK'], $constant_int_250);
			$pyjs['track']['lineno']=119;
			while ($p['bool'](true)) {
				$pyjs['track']['lineno']=120;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = $m['pygame']['event']['get']();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					event = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=121;
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof QUIT == "undefined"?$m['QUIT']:QUIT)))) {
						$pyjs['track']['lineno']=122;
						$m['pygame']['quit']();
						$pyjs['track']['lineno']=123;
						$m['sys']['exit']();
					}
					$pyjs['track']['lineno']=124;
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof KEYDOWN == "undefined"?$m['KEYDOWN']:KEYDOWN)))) {
						$pyjs['track']['lineno']=125;
						if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_UP == "undefined"?$m['K_UP']:K_UP)))?$or1:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('w'))))) {
							$pyjs['track']['lineno']=126;
							moveUp = true;
							$pyjs['track']['lineno']=127;
							moveDown = false;
						}
						$pyjs['track']['lineno']=128;
						if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_DOWN == "undefined"?$m['K_DOWN']:K_DOWN)))?$or3:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('s'))))) {
							$pyjs['track']['lineno']=129;
							moveUp = false;
							$pyjs['track']['lineno']=130;
							moveDown = true;
						}
						$pyjs['track']['lineno']=131;
						if ($p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_RIGHT == "undefined"?$m['K_RIGHT']:K_RIGHT)))?$or5:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('d'))))) {
							$pyjs['track']['lineno']=132;
							moveRight = true;
							$pyjs['track']['lineno']=133;
							moveLeft = false;
						}
						$pyjs['track']['lineno']=134;
						if ($p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_LEFT == "undefined"?$m['K_LEFT']:K_LEFT)))?$or7:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('a'))))) {
							$pyjs['track']['lineno']=135;
							moveLeft = true;
							$pyjs['track']['lineno']=136;
							moveRight = false;
						}
					}
					$pyjs['track']['lineno']=138;
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof KEYUP == "undefined"?$m['KEYUP']:KEYUP)))) {
						$pyjs['track']['lineno']=139;
						if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), (typeof K_ESCAPE == "undefined"?$m['K_ESCAPE']:K_ESCAPE)))) {
							$pyjs['track']['lineno']=140;
							$m['pygame']['quit']();
							$pyjs['track']['lineno']=141;
							$m['sys']['exit']();
						}
						$pyjs['track']['lineno']=142;
						if ($p['bool'](($p['bool']($or9=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_UP == "undefined"?$m['K_UP']:K_UP)))?$or9:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('w'))))) {
							$pyjs['track']['lineno']=143;
							moveUp = false;
						}
						$pyjs['track']['lineno']=144;
						if ($p['bool'](($p['bool']($or11=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_DOWN == "undefined"?$m['K_DOWN']:K_DOWN)))?$or11:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('s'))))) {
							$pyjs['track']['lineno']=145;
							moveDown = false;
						}
						$pyjs['track']['lineno']=146;
						if ($p['bool'](($p['bool']($or13=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_RIGHT == "undefined"?$m['K_RIGHT']:K_RIGHT)))?$or13:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('d'))))) {
							$pyjs['track']['lineno']=147;
							moveRight = false;
						}
						$pyjs['track']['lineno']=148;
						if ($p['bool'](($p['bool']($or15=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_LEFT == "undefined"?$m['K_LEFT']:K_LEFT)))?$or15:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('a'))))) {
							$pyjs['track']['lineno']=149;
							moveLeft = false;
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='test2';
				$pyjs['track']['lineno']=153;
				if ($p['bool'](($p['bool']($and1=moveDown)?($p['cmp']($p['getattr'](player, 'bottom'), $p['__op_sub']($sub7=$m['WINDOWHEIGHT'],$sub8=$constant_int_10)) == -1):$and1))) {
					$pyjs['track']['lineno']=154;
					player['__is_instance__'] && typeof player['__setattr__'] == 'function' ? player['__setattr__']('bottom', $p['__op_add']($add1=$p['getattr'](player, 'bottom'),$add2=player_vert_speed)) : $p['setattr'](player, 'bottom', $p['__op_add']($add1=$p['getattr'](player, 'bottom'),$add2=player_vert_speed)); 
				}
				$pyjs['track']['lineno']=155;
				if ($p['bool'](($p['bool']($and3=moveUp)?($p['cmp']($p['getattr'](player, 'top'), $constant_int_10) == 1):$and3))) {
					$pyjs['track']['lineno']=156;
					player['__is_instance__'] && typeof player['__setattr__'] == 'function' ? player['__setattr__']('top', $p['__op_sub']($sub9=$p['getattr'](player, 'top'),$sub10=player_vert_speed)) : $p['setattr'](player, 'top', $p['__op_sub']($sub9=$p['getattr'](player, 'top'),$sub10=player_vert_speed)); 
				}
				$pyjs['track']['lineno']=157;
				if ($p['bool'](($p['bool']($and5=moveRight)?($p['cmp']($p['getattr'](player, 'right'), $p['__op_sub']($sub11=$m['WINDOWWIDTH'],$sub12=$constant_int_10)) == -1):$and5))) {
					$pyjs['track']['lineno']=158;
					player['__is_instance__'] && typeof player['__setattr__'] == 'function' ? player['__setattr__']('right', $p['__op_add']($add3=$p['getattr'](player, 'right'),$add4=player_forward_speed)) : $p['setattr'](player, 'right', $p['__op_add']($add3=$p['getattr'](player, 'right'),$add4=player_forward_speed)); 
				}
				$pyjs['track']['lineno']=159;
				if ($p['bool'](($p['bool']($and7=moveLeft)?($p['cmp']($p['getattr'](player, 'left'), $constant_int_10) == 1):$and7))) {
					$pyjs['track']['lineno']=160;
					player['__is_instance__'] && typeof player['__setattr__'] == 'function' ? player['__setattr__']('left', $p['__op_sub']($sub13=$p['getattr'](player, 'left'),$sub14=player_reverse_speed)) : $p['setattr'](player, 'left', $p['__op_sub']($sub13=$p['getattr'](player, 'left'),$sub14=player_reverse_speed)); 
				}
				$pyjs['track']['lineno']=165;
				$m['windowSurface']['blit']($m['bg'], $p['tuple']([$constant_int_0, $constant_int_0]));
				$pyjs['track']['lineno']=168;
				city_back_row['update']();
				$pyjs['track']['lineno']=169;
				city_middle_row['update']();
				$pyjs['track']['lineno']=170;
				city_front_row['update']();
				$pyjs['track']['lineno']=173;
				$m['windowSurface']['blit'](bot, player);
				$pyjs['track']['lineno']=175;
				enemies['update']();
				$pyjs['track']['lineno']=176;
				enemies['draw']($m['windowSurface']);
				$pyjs['track']['lineno']=179;
				$m['pygame']['display']['update']();
				$pyjs['track']['lineno']=180;
				$m['mainClock']['tick']($constant_int_40);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['main']['__name__'] = 'main';

		$m['main']['__bind_type__'] = 0;
		$m['main']['__args__'] = [null,null];
		$pyjs['track']['lineno']=183;
		$m['main']();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end test2 */


/* end module: test2 */


/*
PYJS_DEPS: ['pygame', 'sys', 'random', 'pygame.locals', 'pyjs', 'pyjsdl']
*/
