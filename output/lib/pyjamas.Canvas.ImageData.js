/* start module: pyjamas.Canvas.ImageData */
$pyjs['loaded_modules']['pyjamas.Canvas.ImageData'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ImageData']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ImageData>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ImageData';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['ImageData'] = $pyjs['loaded_modules']['pyjamas.Canvas.ImageData'];


	$m['ImageData'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.ImageData';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}

			self['width'] = $p['getattr'](imagedata, 'width');
			self['height'] = $p['getattr'](imagedata, 'height');
			self['data'] = $p['getattr'](imagedata, 'data');
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'width');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'height');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('getData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'data');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getData'] = $method;
		$method = $pyjs__bind_method2('setData', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			self['data'] = data;
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['setData'] = $method;
		$method = $pyjs__bind_method2('getPixel', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $add2,$add3,$add1,$add4,offset,$mul4,$mul3,$mul2,$mul1;
			offset = (typeof ($mul3=$p['__op_add']($add1=(typeof ($mul1=y)==typeof ($mul2=$p['getattr'](self, 'width')) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)),$add2=x))==typeof ($mul4=4) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4));
			return $p['__getslice']($p['getattr'](self, 'data'), offset, $p['__op_add']($add3=offset,$add4=4));
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['getPixel'] = $method;
		$method = $pyjs__bind_method2('setPixel', function(x, y, rgba) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				rgba = arguments[3];
			}
			var $mul8,$add5,offset,$mul7,$add6,$add7,$mul6,$mul5,$add8;
			offset = (typeof ($mul7=$p['__op_add']($add5=(typeof ($mul5=y)==typeof ($mul6=$p['getattr'](self, 'width')) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)),$add6=x))==typeof ($mul8=4) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8));
			$p['__setslice']($p['getattr'](self, 'data'), offset, $p['__op_add']($add7=offset,$add8=4), rgba);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['rgba']]);
		$cls_definition['setPixel'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageData', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.ImageData */


/* end module: pyjamas.Canvas.ImageData */


