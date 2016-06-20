/* start module: test2 */
$pyjs['loaded_modules']['test2'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['test2']['__was_initialized__']) return $pyjs['loaded_modules']['test2'];
	var $m = $pyjs['loaded_modules']['test2'];
	$m['__repr__'] = function() { return '<module: test2>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'test2';
	$m['__name__'] = __mod_name__;


	$m['sys'] = $p['___import___']('sys', null);
	$m['sys']['path']['insert'](0, '/usr/local/lib/python2.7');
	$m['random'] = $p['___import___']('random', null);
	$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
	$m['pygame']['init']();
	$m['mainClock'] = $m['pygame']['time']['Clock']();
	$m['WINDOWWIDTH'] = 1080;
	$m['WINDOWHEIGHT'] = 700;
	$m['windowSurface'] = $m['pygame']['display']['set_mode']($p['tuple']([$m['WINDOWWIDTH'], $m['WINDOWHEIGHT']]));
	$m['bg'] = $m['pygame']['image']['load']('assets/bg2.jpg');
	$m['pygame']['display']['set_caption']('SkyCodeur');
	$m['BLACK'] = $p['tuple']([0, 0, 0]);
	$m['WHITE'] = $p['tuple']([255, 255, 255]);
	$m['DARK'] = $p['tuple']([38, 16, 30]);
	$m['MEDIUM'] = $p['tuple']([74, 34, 58]);
	$m['BRIGHT'] = $p['tuple']([112, 52, 88]);
	$m['SKY'] = $p['tuple']([70, 10, 88]);
	$m['BLUE'] = $p['tuple']([0, 0, 255]);
	$m['DIMGRAY'] = $p['tuple']([145, 145, 145]);
	$m['SLATEGRAY'] = $p['tuple']([159, 159, 159]);
	$m['DARKGRAY'] = $p['tuple']([165, 165, 165]);
	$m['Scroller'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'test2';
		$method = $pyjs__bind_method2('__init__', function(speed, color, heightMax) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				speed = arguments[1];
				color = arguments[2];
				heightMax = arguments[3];
			}

			self['buildingHeightMax'] = heightMax;
			self['buildingHeightMin'] = 100;
			self['buildingWidthMax'] = 125;
			self['buildingWidthMin'] = 75;
			self['buildings'] = $p['list']([]);
			self['layerspeed'] = speed;
			self['buildTime'] = true;
			self['buildCountdown'] = 10;
			self['color'] = color;
			return null;
		}
	, 1, [null,null,['self'],['speed'],['color'],['heightMax']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var buildingHeight,$iter2_type,$iter2_iter,$iter1_array,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,$iter1_nextval,$iter2_idx,$iter1_iter,$mul2,$mul1,building,buildingWidth,$iter2_nextval,$iter1_type,buildingTop,i,$iter1_idx,$iter2_array;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'buildTime'), false))) {
				self['buildCountdown'] = $p['__op_sub']($sub1=$p['getattr'](self, 'buildCountdown'),$sub2=1);
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'buildCountdown'), 0) < 1))) {
					self['buildTime'] = true;
					self['buildCountdown'] = $m['random']['randint'](3, $p['getattr'](self, 'layerspeed'));
				}
			}
			if ($p['bool']($p['getattr'](self, 'buildTime'))) {
				buildingHeight = $m['random']['randint']($p['getattr'](self, 'buildingHeightMin'), $p['getattr'](self, 'buildingHeightMax'));
				buildingWidth = $m['random']['randint']($p['getattr'](self, 'buildingWidthMin'), $p['getattr'](self, 'buildingWidthMax'));
				buildingTop = $p['__op_sub']($sub3=$m['WINDOWHEIGHT'],$sub4=buildingHeight);
				building = $m['pygame']['Rect']($m['WINDOWWIDTH'], buildingTop, buildingWidth, $m['WINDOWHEIGHT']);
				self['buildTime'] = false;
				self['buildCountdown'] = $m['random']['randint'](3, (typeof ($mul1=$p['getattr'](self, 'layerspeed'))==typeof ($mul2=5) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
				self['buildings']['append'](building);
			}
			$iter1_iter = $p['getattr'](self, 'buildings');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				building = $iter1_nextval['$nextval'];
				if ($p['bool'](($p['cmp']($p['getattr'](building, 'right'), 0) == -1))) {
					self['buildings']['remove'](building);
				}
				else {
					building['left'] = $p['__op_sub']($sub5=$p['getattr'](building, 'left'),$sub6=$p['getattr'](self, 'layerspeed'));
				}
			}
			$iter2_iter = $p['range']($p['len']($p['getattr'](self, 'buildings')));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				$m['pygame']['draw']['rect']($m['windowSurface'], $p['getattr'](self, 'color'), $p['getattr'](self, 'buildings')['__getitem__'](i));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Scroller', $p['tuple']($bases), $data);
	})();
	$m['Enemy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'test2';
		$method = $pyjs__bind_method2('__init__', function(screen) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				screen = arguments[1];
			}

			$m['pygame']['sprite']['Sprite']['__init__'](self);
			$p['printFunc'](['created a new sprite:', (typeof id == "undefined"?$m['id']:id)(self)], 1);
			self['image'] = $m['pygame']['image']['load']('assets/bug/1.png');
			self['rect'] = self['image']['get_rect']();
			self['rect']['move_ip']($m['random']['randint'](0, screen['get_width']()), $m['random']['randint'](0, screen['get_height']()));
			return null;
		}
	, 1, [null,null,['self'],['screen']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['rect']['move_ip']($m['random']['randint']((typeof ($usub1=3)=='number'?
				-$usub1:
				$p['op_usub']($usub1)), 3), 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['getattr']($p['getattr']($m['pygame'], 'sprite'), 'Sprite'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Enemy', $p['tuple']($bases), $data);
	})();
	$m['main'] = function() {
		var $and8,moveDown,$iter3_type,$sub14,$add2,player,moveRight,event,enemies,player_forward_speed,$iter3_idx,$add3,$iter3_nextval,$sub9,$sub8,$iter3_iter,$sub12,city_middle_row,city_front_row,$sub7,$sub11,$or5,$or4,$or7,$or6,$or1,$add4,$or3,$or2,$sub13,$and1,$and2,$and3,$or9,$or8,$and6,$and5,city_back_row,$iter3_array,$and7,player_reverse_speed,moveUp,moveLeft,$sub10,bot,$and4,player_vert_speed,$or15,$or14,$or16,$or11,$or10,$or13,$or12,$add1;
		bot = $m['pygame']['image']['load']('assets/ship.png');
		player = $m['pygame']['Rect'](50, 50, 40, 26);
		enemies = $m['pygame']['sprite']['Group']();
		moveUp = false;
		moveDown = false;
		moveRight = false;
		moveLeft = false;
		player_vert_speed = 7;
		player_forward_speed = 6;
		player_reverse_speed = 9;
		city_back_row = $m['Scroller'](3, $m['SLATEGRAY'], 350);
		city_middle_row = $m['Scroller'](4, $m['DIMGRAY'], 300);
		city_front_row = $m['Scroller'](6, $m['BLACK'], 250);
		while ($p['bool'](true)) {
			$iter3_iter = $m['pygame']['event']['get']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				event = $iter3_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof QUIT == "undefined"?$m['QUIT']:QUIT)))) {
					$m['pygame']['quit']();
					$m['sys']['exit']();
				}
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof KEYDOWN == "undefined"?$m['KEYDOWN']:KEYDOWN)))) {
					if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_UP == "undefined"?$m['K_UP']:K_UP)))?$or1:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('w'))))) {
						moveUp = true;
						moveDown = false;
					}
					if ($p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_DOWN == "undefined"?$m['K_DOWN']:K_DOWN)))?$or3:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('s'))))) {
						moveUp = false;
						moveDown = true;
					}
					if ($p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_RIGHT == "undefined"?$m['K_RIGHT']:K_RIGHT)))?$or5:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('d'))))) {
						moveRight = true;
						moveLeft = false;
					}
					if ($p['bool'](($p['bool']($or7=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_LEFT == "undefined"?$m['K_LEFT']:K_LEFT)))?$or7:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('a'))))) {
						moveLeft = true;
						moveRight = false;
					}
				}
				if ($p['bool']($p['op_eq']($p['getattr'](event, 'type'), (typeof KEYUP == "undefined"?$m['KEYUP']:KEYUP)))) {
					if ($p['bool']($p['op_eq']($p['getattr'](event, 'key'), (typeof K_ESCAPE == "undefined"?$m['K_ESCAPE']:K_ESCAPE)))) {
						$m['pygame']['quit']();
						$m['sys']['exit']();
					}
					if ($p['bool'](($p['bool']($or9=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_UP == "undefined"?$m['K_UP']:K_UP)))?$or9:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('w'))))) {
						moveUp = false;
					}
					if ($p['bool'](($p['bool']($or11=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_DOWN == "undefined"?$m['K_DOWN']:K_DOWN)))?$or11:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('s'))))) {
						moveDown = false;
					}
					if ($p['bool'](($p['bool']($or13=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_RIGHT == "undefined"?$m['K_RIGHT']:K_RIGHT)))?$or13:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('d'))))) {
						moveRight = false;
					}
					if ($p['bool'](($p['bool']($or15=$p['op_eq']($p['getattr'](event, 'key'), (typeof K_LEFT == "undefined"?$m['K_LEFT']:K_LEFT)))?$or15:$p['op_eq']($p['getattr'](event, 'key'), $p['ord']('a'))))) {
						moveLeft = false;
					}
				}
			}
			if ($p['bool'](($p['bool']($and1=moveDown)?($p['cmp']($p['getattr'](player, 'bottom'), $p['__op_sub']($sub7=$m['WINDOWHEIGHT'],$sub8=10)) == -1):$and1))) {
				player['bottom'] = $p['__op_add']($add1=$p['getattr'](player, 'bottom'),$add2=player_vert_speed);
			}
			if ($p['bool'](($p['bool']($and3=moveUp)?($p['cmp']($p['getattr'](player, 'top'), 10) == 1):$and3))) {
				player['top'] = $p['__op_sub']($sub9=$p['getattr'](player, 'top'),$sub10=player_vert_speed);
			}
			if ($p['bool'](($p['bool']($and5=moveRight)?($p['cmp']($p['getattr'](player, 'right'), $p['__op_sub']($sub11=$m['WINDOWWIDTH'],$sub12=10)) == -1):$and5))) {
				player['right'] = $p['__op_add']($add3=$p['getattr'](player, 'right'),$add4=player_forward_speed);
			}
			if ($p['bool'](($p['bool']($and7=moveLeft)?($p['cmp']($p['getattr'](player, 'left'), 10) == 1):$and7))) {
				player['left'] = $p['__op_sub']($sub13=$p['getattr'](player, 'left'),$sub14=player_reverse_speed);
			}
			$m['windowSurface']['blit']($m['bg'], $p['tuple']([0, 0]));
			city_back_row['update']();
			city_middle_row['update']();
			city_front_row['update']();
			$m['windowSurface']['blit'](bot, player);
			enemies['update']();
			enemies['draw']($m['windowSurface']);
			$m['pygame']['display']['update']();
			$m['mainClock']['tick'](40);
		}
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	$m['main']();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['main']();
	}
	return this;
}; /* end test2 */


/* end module: test2 */


/*
PYJS_DEPS: ['sys', 'random', 'pyjsdl']
*/
