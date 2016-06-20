/* start module: pyjsdl.image */
$pyjs['loaded_modules']['pyjsdl.image'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.image']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.image'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.image'];
	$m['__repr__'] = function() { return '<module: pyjsdl.image>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.image';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['image'] = $pyjs['loaded_modules']['pyjsdl.image'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.image.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[5] = 'pyjsdl.image.py, line 5:\n    from surface import Surface, Surf';
		$m.__track_lines__[6] = 'pyjsdl.image.py, line 6:\n    import env';
		$m.__track_lines__[7] = 'pyjsdl.image.py, line 7:\n    import pyjsdl';
		$m.__track_lines__[8] = 'pyjsdl.image.py, line 8:\n    import os.path';
		$m.__track_lines__[10] = "pyjsdl.image.py, line 10:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[13] = 'pyjsdl.image.py, line 13:\n    class Image(object):';
		$m.__track_lines__[22] = 'pyjsdl.image.py, line 22:\n    def __init__(self):';
		$m.__track_lines__[28] = 'pyjsdl.image.py, line 28:\n    self.images = None';
		$m.__track_lines__[30] = 'pyjsdl.image.py, line 30:\n    def load(self, img_file, namehint=None):';
		$m.__track_lines__[36] = 'pyjsdl.image.py, line 36:\n    if not namehint:';
		$m.__track_lines__[37] = 'pyjsdl.image.py, line 37:\n    image = self.get_image(img_file)';
		$m.__track_lines__[39] = 'pyjsdl.image.py, line 39:\n    image = self.get_image(namehint)';
		$m.__track_lines__[40] = 'pyjsdl.image.py, line 40:\n    surface = self.convert_image(image)';
		$m.__track_lines__[41] = 'pyjsdl.image.py, line 41:\n    return surface';
		$m.__track_lines__[43] = 'pyjsdl.image.py, line 43:\n    def get_image(self, img_file):';
		$m.__track_lines__[47] = 'pyjsdl.image.py, line 47:\n    if self.images is None:';
		$m.__track_lines__[48] = 'pyjsdl.image.py, line 48:\n    self.images = {}';
		$m.__track_lines__[49] = 'pyjsdl.image.py, line 49:\n    for img in env.canvas.images:';
		$m.__track_lines__[50] = 'pyjsdl.image.py, line 50:\n    self.images[os.path.normpath(img)] = env.canvas.images[img]';
		$m.__track_lines__[51] = 'pyjsdl.image.py, line 51:\n    img_file = os.path.normpath(img_file)';
		$m.__track_lines__[52] = 'pyjsdl.image.py, line 52:\n    try:';
		$m.__track_lines__[53] = 'pyjsdl.image.py, line 53:\n    image = self.images[img_file]';
		$m.__track_lines__[55] = 'pyjsdl.image.py, line 55:\n    raise pyjsdl.error("Failed to retrieve image file %s" % img_file)';
		$m.__track_lines__[56] = 'pyjsdl.image.py, line 56:\n    return image';
		$m.__track_lines__[58] = 'pyjsdl.image.py, line 58:\n    def convert_image(self, image):';
		$m.__track_lines__[62] = 'pyjsdl.image.py, line 62:\n    if env.canvas._isCanvas:';
		$m.__track_lines__[63] = 'pyjsdl.image.py, line 63:\n    img = image.getElement()';
		$m.__track_lines__[64] = 'pyjsdl.image.py, line 64:\n    surface = Surface((img.width,img.height))';
		$m.__track_lines__[65] = 'pyjsdl.image.py, line 65:\n    surface.drawImage(image, 0, 0)';
		$m.__track_lines__[67] = 'pyjsdl.image.py, line 67:\n    surface = Surf(image)';
		$m.__track_lines__[68] = 'pyjsdl.image.py, line 68:\n    return surface';

		var $constant_int_0 = new $p['int'](0);
		$pyjs['track']['module']='pyjsdl.image';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surf'] = $p['___import___']('surface.Surf', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['env'] = $p['___import___']('env', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pyjsdl'] = $p['___import___']('pyjsdl', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=8;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['os'] = $p['___import___']('os.path', 'pyjsdl');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=10;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=13;
		$m['Image'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.image';
			$cls_definition['__md5__'] = '48b570634b0d3fe5d80a8e0644cf27f3';
			$pyjs['track']['lineno']=22;
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
					if (self.prototype['__md5__'] !== '48b570634b0d3fe5d80a8e0644cf27f3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjsdl.image', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.image';
				$pyjs['track']['lineno']=22;
				$pyjs['track']['lineno']=28;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', null) : $p['setattr'](self, 'images', null); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=30;
			$method = $pyjs__bind_method2('load', function(img_file, namehint) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					img_file = arguments[1];
					namehint = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48b570634b0d3fe5d80a8e0644cf27f3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof namehint == 'undefined') namehint=arguments['callee']['__args__'][4][1];
				var image,surface;
				$pyjs['track']={'module':'pyjsdl.image', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.image';
				$pyjs['track']['lineno']=30;
				$pyjs['track']['lineno']=36;
				if ($p['bool'](!$p['bool'](namehint))) {
					$pyjs['track']['lineno']=37;
					image = self['get_image'](img_file);
				}
				else {
					$pyjs['track']['lineno']=39;
					image = self['get_image'](namehint);
				}
				$pyjs['track']['lineno']=40;
				surface = self['convert_image'](image);
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['img_file'],['namehint', null]]);
			$cls_definition['load'] = $method;
			$pyjs['track']['lineno']=43;
			$method = $pyjs__bind_method2('get_image', function(img_file) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					img_file = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48b570634b0d3fe5d80a8e0644cf27f3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $iter1_nextval,$iter1_type,img,$iter1_iter,$pyjs_try_err,$iter1_array,image,$pyjs__trackstack_size_1,$iter1_idx;
				$pyjs['track']={'module':'pyjsdl.image', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.image';
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=47;
				if ($p['bool']($p['op_is']($p['getattr'](self, 'images'), null))) {
					$pyjs['track']['lineno']=48;
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('images', $p['dict']([])) : $p['setattr'](self, 'images', $p['dict']([])); 
					$pyjs['track']['lineno']=49;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = $p['getattr']($p['getattr']($m['env'], 'canvas'), 'images');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						img = $iter1_nextval['$nextval'];
						$pyjs['track']['lineno']=50;
						$p['getattr'](self, 'images')['__setitem__']($m['os']['path']['normpath'](img), $p['getattr']($p['getattr']($m['env'], 'canvas'), 'images')['__getitem__'](img));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjsdl.image';
				}
				$pyjs['track']['lineno']=51;
				img_file = $m['os']['path']['normpath'](img_file);
				$pyjs['track']['lineno']=52;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					$pyjs['track']['lineno']=53;
					image = $p['getattr'](self, 'images')['__getitem__'](img_file);
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
					$pyjs['track']['module']='pyjsdl.image';
					if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
						$pyjs['track']['lineno']=55;
						$pyjs['__active_exception_stack__'] = null;
						throw ($m['pyjsdl']['error']($p['sprintf']('Failed to retrieve image file %s', img_file)));
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=56;
				$pyjs['track']['lineno']=56;
				var $pyjs__ret = image;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['img_file']]);
			$cls_definition['get_image'] = $method;
			$pyjs['track']['lineno']=58;
			$method = $pyjs__bind_method2('convert_image', function(image) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					image = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '48b570634b0d3fe5d80a8e0644cf27f3') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var img,surface;
				$pyjs['track']={'module':'pyjsdl.image', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.image';
				$pyjs['track']['lineno']=58;
				$pyjs['track']['lineno']=62;
				if ($p['bool']($p['getattr']($p['getattr']($m['env'], 'canvas'), '_isCanvas'))) {
					$pyjs['track']['lineno']=63;
					img = image['getElement']();
					$pyjs['track']['lineno']=64;
					surface = $m['Surface']($p['tuple']([$p['getattr'](img, 'width'), $p['getattr'](img, 'height')]));
					$pyjs['track']['lineno']=65;
					surface['drawImage'](image, $constant_int_0, $constant_int_0);
				}
				else {
					$pyjs['track']['lineno']=67;
					surface = $m['Surf'](image);
				}
				$pyjs['track']['lineno']=68;
				$pyjs['track']['lineno']=68;
				var $pyjs__ret = surface;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['image']]);
			$cls_definition['convert_image'] = $method;
			$pyjs['track']['lineno']=13;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Image', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.image */


/* end module: pyjsdl.image */


/*
PYJS_DEPS: ['surface.Surface', 'surface', 'surface.Surf', 'env', 'pyjsdl', 'os.path', 'os']
*/
