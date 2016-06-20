/* start module: pyjamas.Canvas.ImageLoader */
$pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ImageLoader>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ImageLoader';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.Canvas']['ImageLoader'] = $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	try {
		$m.__track_lines__[1] = 'pyjamas.Canvas.ImageLoader.py, line 1:\n    """';
		$m.__track_lines__[134] = 'pyjamas.Canvas.ImageLoader.py, line 134:\n    def loadImages(urls, cb):';
		$m.__track_lines__[135] = 'pyjamas.Canvas.ImageLoader.py, line 135:\n    il = ImageLoader()';
		$m.__track_lines__[136] = 'pyjamas.Canvas.ImageLoader.py, line 136:\n    for i in range(len(urls)):';
		$m.__track_lines__[137] = 'pyjamas.Canvas.ImageLoader.py, line 137:\n    il.addHandle(il.prepareImage(urls[i]))';
		$m.__track_lines__[139] = 'pyjamas.Canvas.ImageLoader.py, line 139:\n    il.finalize(cb)';
		$m.__track_lines__[140] = 'pyjamas.Canvas.ImageLoader.py, line 140:\n    imageLoaders.append(il)';
		$m.__track_lines__[142] = 'pyjamas.Canvas.ImageLoader.py, line 142:\n    for i in range(len(urls)):';
		$m.__track_lines__[143] = 'pyjamas.Canvas.ImageLoader.py, line 143:\n    il.images[i].setUrl(urls[i])';
		$m.__track_lines__[17] = 'pyjamas.Canvas.ImageLoader.py, line 17:\n    from pyjamas import DOM';
		$m.__track_lines__[18] = 'pyjamas.Canvas.ImageLoader.py, line 18:\n    from pyjamas.ui.Image import Image';
		$m.__track_lines__[19] = 'pyjamas.Canvas.ImageLoader.py, line 19:\n    from pyjamas.ui import Event';
		$m.__track_lines__[21] = 'pyjamas.Canvas.ImageLoader.py, line 21:\n    """*';
		$m.__track_lines__[25] = 'pyjamas.Canvas.ImageLoader.py, line 25:\n    imageLoaders = []';
		$m.__track_lines__[28] = 'pyjamas.Canvas.ImageLoader.py, line 28:\n    """*';
		$m.__track_lines__[32] = 'pyjamas.Canvas.ImageLoader.py, line 32:\n    class ImageLoader:';
		$m.__track_lines__[35] = 'pyjamas.Canvas.ImageLoader.py, line 35:\n    def __init__(self):';
		$m.__track_lines__[37] = 'pyjamas.Canvas.ImageLoader.py, line 37:\n    self.images = []';
		$m.__track_lines__[38] = 'pyjamas.Canvas.ImageLoader.py, line 38:\n    self.callBack = None';
		$m.__track_lines__[39] = 'pyjamas.Canvas.ImageLoader.py, line 39:\n    self.loadedImages = 0';
		$m.__track_lines__[40] = 'pyjamas.Canvas.ImageLoader.py, line 40:\n    self.totalImages = 0';
		$m.__track_lines__[44] = 'pyjamas.Canvas.ImageLoader.py, line 44:\n    self.onImageLoad = self.onLoad';
		$m.__track_lines__[47] = 'pyjamas.Canvas.ImageLoader.py, line 47:\n    """*';
		$m.__track_lines__[52] = 'pyjamas.Canvas.ImageLoader.py, line 52:\n    def addHandle(self, img):';
		$m.__track_lines__[53] = 'pyjamas.Canvas.ImageLoader.py, line 53:\n    self.totalImages += 1';
		$m.__track_lines__[54] = 'pyjamas.Canvas.ImageLoader.py, line 54:\n    self.images.append(img)';
		$m.__track_lines__[57] = 'pyjamas.Canvas.ImageLoader.py, line 57:\n    """*';
		$m.__track_lines__[63] = 'pyjamas.Canvas.ImageLoader.py, line 63:\n    def dispatchIfComplete(self):';
		$m.__track_lines__[64] = 'pyjamas.Canvas.ImageLoader.py, line 64:\n    if self.callBack is not None  and  self.isAllLoaded():';
		$m.__track_lines__[65] = 'pyjamas.Canvas.ImageLoader.py, line 65:\n    self.callBack.onImagesLoaded(self.images)';
		$m.__track_lines__[67] = 'pyjamas.Canvas.ImageLoader.py, line 67:\n    imageLoaders.remove(self)';
		$m.__track_lines__[71] = 'pyjamas.Canvas.ImageLoader.py, line 71:\n    """*';
		$m.__track_lines__[78] = 'pyjamas.Canvas.ImageLoader.py, line 78:\n    def finalize(self, cb):';
		$m.__track_lines__[79] = 'pyjamas.Canvas.ImageLoader.py, line 79:\n    self.callBack = cb';
		$m.__track_lines__[82] = 'pyjamas.Canvas.ImageLoader.py, line 82:\n    def incrementLoadedImages(self):';
		$m.__track_lines__[83] = 'pyjamas.Canvas.ImageLoader.py, line 83:\n    self.loadedImages += 1';
		$m.__track_lines__[86] = 'pyjamas.Canvas.ImageLoader.py, line 86:\n    def isAllLoaded(self):';
		$m.__track_lines__[87] = 'pyjamas.Canvas.ImageLoader.py, line 87:\n    return (self.loadedImages == self.totalImages)';
		$m.__track_lines__[90] = 'pyjamas.Canvas.ImageLoader.py, line 90:\n    """*';
		$m.__track_lines__[93] = 'pyjamas.Canvas.ImageLoader.py, line 93:\n    def prepareImage(self, url):';
		$m.__track_lines__[94] = 'pyjamas.Canvas.ImageLoader.py, line 94:\n    img = Image()';
		$m.__track_lines__[95] = 'pyjamas.Canvas.ImageLoader.py, line 95:\n    img.__isLoaded = False';
		$m.__track_lines__[96] = 'pyjamas.Canvas.ImageLoader.py, line 96:\n    img.addLoadListener(self)';
		$m.__track_lines__[101] = 'pyjamas.Canvas.ImageLoader.py, line 101:\n    DOM.setEventListener(img.getElement(), img)';
		$m.__track_lines__[102] = 'pyjamas.Canvas.ImageLoader.py, line 102:\n    DOM.sinkEvents(img.getElement(), Event.ONLOAD)';
		$m.__track_lines__[103] = 'pyjamas.Canvas.ImageLoader.py, line 103:\n    return img';
		$m.__track_lines__[105] = 'pyjamas.Canvas.ImageLoader.py, line 105:\n    def onLoad(self, img):';
		$m.__track_lines__[107] = 'pyjamas.Canvas.ImageLoader.py, line 107:\n    if not img.__isLoaded:';
		$m.__track_lines__[112] = 'pyjamas.Canvas.ImageLoader.py, line 112:\n    img.__isLoaded = True;';
		$m.__track_lines__[113] = 'pyjamas.Canvas.ImageLoader.py, line 113:\n    self.incrementLoadedImages();';
		$m.__track_lines__[114] = 'pyjamas.Canvas.ImageLoader.py, line 114:\n    img.removeLoadListener(self)';
		$m.__track_lines__[118] = 'pyjamas.Canvas.ImageLoader.py, line 118:\n    self.dispatchIfComplete();';
		$m.__track_lines__[120] = 'pyjamas.Canvas.ImageLoader.py, line 120:\n    return img;';
		$m.__track_lines__[124] = 'pyjamas.Canvas.ImageLoader.py, line 124:\n    """*';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.Canvas', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=21;
		$pyjs['track']['lineno']=25;
		$m['imageLoaders'] = $p['list']([]);
		$pyjs['track']['lineno']=28;
		$pyjs['track']['lineno']=32;
		$m['ImageLoader'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.Canvas.ImageLoader';
			$cls_definition['__md5__'] = '0f83ec27f237870c129c4fe6f309d8a9';
			$pyjs['track']['lineno']=35;
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
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=37;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', $p['list']([])) : $p['setattr'](self, 'images', $p['list']([])); 
				$pyjs['track']['lineno']=38;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callBack', null) : $p['setattr'](self, 'callBack', null); 
				$pyjs['track']['lineno']=39;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loadedImages', $constant_int_0) : $p['setattr'](self, 'loadedImages', $constant_int_0); 
				$pyjs['track']['lineno']=40;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('totalImages', $constant_int_0) : $p['setattr'](self, 'totalImages', $constant_int_0); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('onImageLoad', $p['getattr'](self, 'onLoad')) : $p['setattr'](self, 'onImageLoad', $p['getattr'](self, 'onLoad')); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=52;
			$method = $pyjs__bind_method2('addHandle', function(img) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add2,$add1;
				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=52;
				$pyjs['track']['lineno']=53;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('totalImages', $p['__op_add']($add1=$p['getattr'](self, 'totalImages'),$add2=$constant_int_1)) : $p['setattr'](self, 'totalImages', $p['__op_add']($add1=$p['getattr'](self, 'totalImages'),$add2=$constant_int_1)); 
				$pyjs['track']['lineno']=54;
				self['images']['append'](img);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['img']]);
			$cls_definition['addHandle'] = $method;
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=63;
			$method = $pyjs__bind_method2('dispatchIfComplete', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $and1,$and2;
				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=64;
				if ($p['bool'](($p['bool']($and1=!$p['op_is']($p['getattr'](self, 'callBack'), null))?self['isAllLoaded']():$and1))) {
					$pyjs['track']['lineno']=65;
					self['callBack']['onImagesLoaded']($p['getattr'](self, 'images'));
					$pyjs['track']['lineno']=67;
					$m['imageLoaders']['remove'](self);
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['dispatchIfComplete'] = $method;
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=78;
			$method = $pyjs__bind_method2('finalize', function(cb) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					cb = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':78};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=78;
				$pyjs['track']['lineno']=79;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('callBack', cb) : $p['setattr'](self, 'callBack', cb); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['cb']]);
			$cls_definition['finalize'] = $method;
			$pyjs['track']['lineno']=82;
			$method = $pyjs__bind_method2('incrementLoadedImages', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add3,$add4;
				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=82;
				$pyjs['track']['lineno']=83;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('loadedImages', $p['__op_add']($add3=$p['getattr'](self, 'loadedImages'),$add4=$constant_int_1)) : $p['setattr'](self, 'loadedImages', $p['__op_add']($add3=$p['getattr'](self, 'loadedImages'),$add4=$constant_int_1)); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['incrementLoadedImages'] = $method;
			$pyjs['track']['lineno']=86;
			$method = $pyjs__bind_method2('isAllLoaded', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=86;
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=87;
				var $pyjs__ret = $p['op_eq']($p['getattr'](self, 'loadedImages'), $p['getattr'](self, 'totalImages'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['isAllLoaded'] = $method;
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=93;
			$method = $pyjs__bind_method2('prepareImage', function(url) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					url = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var img;
				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=94;
				img = $m['Image']();
				$pyjs['track']['lineno']=95;
				img['__is_instance__'] && typeof img['__setattr__'] == 'function' ? img['__setattr__']('__isLoaded', false) : $p['setattr'](img, '__isLoaded', false); 
				$pyjs['track']['lineno']=96;
				img['addLoadListener'](self);
				$pyjs['track']['lineno']=101;
				$m['DOM']['setEventListener'](img['getElement'](), img);
				$pyjs['track']['lineno']=102;
				$m['DOM']['sinkEvents'](img['getElement'](), $p['getattr']($m['Event'], 'ONLOAD'));
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=103;
				var $pyjs__ret = img;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['url']]);
			$cls_definition['prepareImage'] = $method;
			$pyjs['track']['lineno']=105;
			$method = $pyjs__bind_method2('onLoad', function(img) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					img = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '0f83ec27f237870c129c4fe6f309d8a9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
				$pyjs['track']['lineno']=105;
				$pyjs['track']['lineno']=107;
				if ($p['bool'](!$p['bool']($p['getattr'](img, '__isLoaded')))) {
					$pyjs['track']['lineno']=112;
					img['__is_instance__'] && typeof img['__setattr__'] == 'function' ? img['__setattr__']('__isLoaded', true) : $p['setattr'](img, '__isLoaded', true); 
					$pyjs['track']['lineno']=113;
					self['incrementLoadedImages']();
					$pyjs['track']['lineno']=114;
					img['removeLoadListener'](self);
				}
				$pyjs['track']['lineno']=118;
				self['dispatchIfComplete']();
				$pyjs['track']['lineno']=120;
				$pyjs['track']['lineno']=120;
				var $pyjs__ret = img;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['img']]);
			$cls_definition['onLoad'] = $method;
			$pyjs['track']['lineno']=32;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('ImageLoader', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=124;
		$pyjs['track']['lineno']=134;
		$m['loadImages'] = function(urls, cb) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,i,$iter1_iter,$iter2_idx,il,$pyjs__trackstack_size_1,$iter2_type,$iter2_array,$iter1_array;
			$pyjs['track']={'module':'pyjamas.Canvas.ImageLoader','lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
			$pyjs['track']['lineno']=134;
			$pyjs['track']['lineno']=135;
			il = $m['ImageLoader']();
			$pyjs['track']['lineno']=136;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = $p['range']($p['len'](urls));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=137;
				il['addHandle'](il['prepareImage'](urls['__getitem__'](i)));
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
			$pyjs['track']['lineno']=139;
			il['finalize'](cb);
			$pyjs['track']['lineno']=140;
			$m['imageLoaders']['append'](il);
			$pyjs['track']['lineno']=142;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = $p['range']($p['len'](urls));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=143;
				$p['getattr'](il, 'images')['__getitem__'](i)['setUrl'](urls['__getitem__'](i));
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='pyjamas.Canvas.ImageLoader';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['loadImages']['__name__'] = 'loadImages';

		$m['loadImages']['__bind_type__'] = 0;
		$m['loadImages']['__args__'] = [null,null,['urls'],['cb']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.Canvas.ImageLoader */


/* end module: pyjamas.Canvas.ImageLoader */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Image.Image', 'pyjamas.ui', 'pyjamas.ui.Image', 'pyjamas.ui.Event']
*/
