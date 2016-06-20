/* start module: pyjamas.Canvas.JSOStack */
$pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.JSOStack']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.JSOStack>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.JSOStack';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['JSOStack'] = $pyjs['loaded_modules']['pyjamas.Canvas.JSOStack'];


	$m['JSOStack'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.JSOStack';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['scratch'] = $p['list']([]);
			self['_minX'] = null;
			self['_minY'] = null;
			self['_maxX'] = null;
			self['_maxY'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('getMaxCoordX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_maxX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMaxCoordX'] = $method;
		$method = $pyjs__bind_method2('getMaxCoordY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_maxY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMaxCoordY'] = $method;
		$method = $pyjs__bind_method2('getMinCoordX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_minX');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMinCoordX'] = $method;
		$method = $pyjs__bind_method2('getMinCoordY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_minY');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMinCoordY'] = $method;
		$method = $pyjs__bind_method2('join', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return ''['join']($p['getattr'](self, 'scratch'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['join'] = $method;
		$method = $pyjs__bind_method2('logCoordX', function(coordX) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				coordX = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, '_minX') === null))) {
				self['_minX'] = coordX;
				self['_maxX'] = coordX;
			}
			else {
				if ($p['bool'](($p['cmp']($p['getattr'](self, '_minX'), coordX) == 1))) {
					self['_minX'] = coordX;
				}
				else {
					if ($p['bool'](($p['cmp']($p['getattr'](self, '_maxX'), coordX) == -1))) {
						self['_maxX'] = coordX;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['coordX']]);
		$cls_definition['logCoordX'] = $method;
		$method = $pyjs__bind_method2('logCoordY', function(coordY) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				coordY = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, '_minY') === null))) {
				self['_minY'] = coordY;
				self['_maxY'] = coordY;
			}
			else {
				if ($p['bool'](($p['cmp']($p['getattr'](self, '_minY'), coordY) == 1))) {
					self['_minY'] = coordY;
				}
				else {
					if ($p['bool'](($p['cmp']($p['getattr'](self, '_maxY'), coordY) == -1))) {
						self['_maxY'] = coordY;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['coordY']]);
		$cls_definition['logCoordY'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['scratch']['pop']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('append', function(pathStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pathStr = arguments[1];
			}

			self['scratch']['append'](pathStr);
			return null;
		}
	, 1, [null,null,['self'],['pathStr']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['len']($p['getattr'](self, 'scratch'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('JSOStack', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.JSOStack */


/* end module: pyjamas.Canvas.JSOStack */


