/* start module: pyjsdl.image */
$pyjs['loaded_modules']['pyjsdl.image'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.image']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.image'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.image'];
	$m['__repr__'] = function() { return '<module: pyjsdl.image>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.image';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['image'] = $pyjs['loaded_modules']['pyjsdl.image'];


	$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
	$m['Surf'] = $p['___import___']('surface.Surf', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('env', 'pyjsdl');
	$m['pyjsdl'] = $p['___import___']('pyjsdl', 'pyjsdl');
	$m['os'] = $p['___import___']('os.path', 'pyjsdl');
	$m['__docformat__'] = 'restructuredtext';
	$m['Image'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.image';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['images'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('load', function(img_file, namehint) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img_file = arguments[1];
				namehint = arguments[2];
			}
			if (typeof namehint == 'undefined') namehint=arguments['callee']['__args__'][4][1];
			var image,surface;
			if ($p['bool'](!$p['bool'](namehint))) {
				image = self['get_image'](img_file);
			}
			else {
				image = self['get_image'](namehint);
			}
			surface = self['convert_image'](image);
			return surface;
		}
	, 1, [null,null,['self'],['img_file'],['namehint', null]]);
		$cls_definition['load'] = $method;
		$method = $pyjs__bind_method2('get_image', function(img_file) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img_file = arguments[1];
			}
			var $iter1_nextval,$iter1_type,img,$iter1_iter,$pyjs_try_err,$iter1_array,image,$iter1_idx;
			if ($p['bool'](($p['getattr'](self, 'images') === null))) {
				self['images'] = $p['dict']([]);
				$iter1_iter = $p['getattr']($p['getattr']($m['env'], 'canvas'), 'images');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					img = $iter1_nextval['$nextval'];
					$p['getattr'](self, 'images')['__setitem__']($m['os']['path']['normpath'](img), $p['getattr']($p['getattr']($m['env'], 'canvas'), 'images')['__getitem__'](img));
				}
			}
			img_file = $m['os']['path']['normpath'](img_file);
			try {
				image = $p['getattr'](self, 'images')['__getitem__'](img_file);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
					throw ($m['pyjsdl']['error']($p['sprintf']('Failed to retrieve image file %s', img_file)));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return image;
		}
	, 1, [null,null,['self'],['img_file']]);
		$cls_definition['get_image'] = $method;
		$method = $pyjs__bind_method2('convert_image', function(image) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				image = arguments[1];
			}
			var img,surface;
			if ($p['bool']($p['getattr']($p['getattr']($m['env'], 'canvas'), '_isCanvas'))) {
				img = image['getElement']();
				surface = $m['Surface']($p['tuple']([$p['getattr'](img, 'width'), $p['getattr'](img, 'height')]));
				surface['drawImage'](image, 0, 0);
			}
			else {
				surface = $m['Surf'](image);
			}
			return surface;
		}
	, 1, [null,null,['self'],['image']]);
		$cls_definition['convert_image'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Image', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.image */


/* end module: pyjsdl.image */


/*
PYJS_DEPS: ['surface.Surface', 'surface', 'surface.Surf', 'env', 'pyjsdl', 'os.path', 'os']
*/
