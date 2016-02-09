/* start module: pyjamas.media.Audio */
$pyjs['loaded_modules']['pyjamas.media.Audio'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.media.Audio']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.media.Audio'];
	if(typeof $pyjs['loaded_modules']['pyjamas.media'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.media']['__was_initialized__']) $p['___import___']('pyjamas.media', null);
	var $m = $pyjs['loaded_modules']['pyjamas.media.Audio'];
	$m['__repr__'] = function() { return '<module: pyjamas.media.Audio>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.media.Audio';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.media']['Audio'] = $pyjs['loaded_modules']['pyjamas.media.Audio'];


	$m['Media'] = $p['___import___']('pyjamas.media.Media.Media', 'pyjamas.media', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.media', null, false);
	$m['Audio'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.media.Audio';
		$method = $pyjs__bind_method2('__init__', function(src) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				src = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof src != 'undefined') {
					if (src !== null && typeof src['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = src;
						src = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof src == 'undefined') src=arguments['callee']['__args__'][3][1];
			var obj;
			$p['printFunc'](['create object'], 1);
			obj = $m['DOM']['createElement']('OBJECT');
			$m['DOM']['setAttribute'](obj, 'TYPE', 'application/x-mplayer2');
			$m['DOM']['setAttribute'](obj, 'classid', 'CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6');
			$p['printFunc'](['set element'], 1);
			self['setElement'](obj);
			$p['printFunc'](['widget init'], 1);
			$pyjs_kwargs_call($m['Media'], '__init__', null, kwargs, [{}, self]);
			$p['printFunc'](['setSrc'], 1);
			if ($p['bool'](src)) {
				self['setSrc'](src);
			}
			self['dispparam'] = $m['DOM']['createElement']('PARAM');
			$m['DOM']['setAttribute']($p['getattr'](self, 'dispparam'), 'name', 'ShowDisplay');
			$m['DOM']['setBooleanAttribute']($p['getattr'](self, 'dispparam'), 'VALUE', 'false');
			self['getElement']()['appendChild']($p['getattr'](self, 'dispparam'));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['src', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Media']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Audio', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.media.Audio */


/* end module: pyjamas.media.Audio */


/*
PYJS_DEPS: ['pyjamas.media.Media.Media', 'pyjamas', 'pyjamas.media', 'pyjamas.media.Media', 'pyjamas.DOM']
*/
