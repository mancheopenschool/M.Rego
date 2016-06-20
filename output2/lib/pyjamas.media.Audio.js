/* start module: pyjamas.media.Audio */
$pyjs['loaded_modules']['pyjamas.media.Audio'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.media.Audio']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.media.Audio'];
	if(typeof $pyjs['loaded_modules']['pyjamas.media'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.media']['__was_initialized__']) $p['___import___']('pyjamas.media', null);
	var $m = $pyjs['loaded_modules']['pyjamas.media.Audio'];
	$m['__repr__'] = function() { return '<module: pyjamas.media.Audio>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.media.Audio';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.media']['Audio'] = $pyjs['loaded_modules']['pyjamas.media.Audio'];
	try {
		$m.__track_lines__[1] = 'pyjamas.media.Audio.py, line 1:\n    """';
		$m.__track_lines__[17] = 'pyjamas.media.Audio.py, line 17:\n    from pyjamas.media.Media import Media';
		$m.__track_lines__[18] = 'pyjamas.media.Audio.py, line 18:\n    from pyjamas import DOM';
		$m.__track_lines__[20] = 'pyjamas.media.Audio.py, line 20:\n    """*';
		$m.__track_lines__[23] = 'pyjamas.media.Audio.py, line 23:\n    class Audio(Media):';
		$m.__track_lines__[25] = 'pyjamas.media.Audio.py, line 25:\n    def __init__(self, src=None, **kwargs):';
		$m.__track_lines__[26] = 'pyjamas.media.Audio.py, line 26:\n    self.setElement(DOM.createElement("audio"))';
		$m.__track_lines__[27] = 'pyjamas.media.Audio.py, line 27:\n    if src:';
		$m.__track_lines__[28] = 'pyjamas.media.Audio.py, line 28:\n    self.setSrc(src)';
		$m.__track_lines__[30] = 'pyjamas.media.Audio.py, line 30:\n    Media.__init__(self, **kwargs)';


		$pyjs['track']['module']='pyjamas.media.Audio';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Media'] = $p['___import___']('pyjamas.media.Media.Media', 'pyjamas.media', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.media', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']['lineno']=23;
		$m['Audio'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.media.Audio';
			$cls_definition['__md5__'] = 'ed56da6b0bc6f9481e9798a4eb5e03d7';
			$pyjs['track']['lineno']=25;
			$method = $pyjs__bind_method2('__init__', function(src) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					src = arguments[1];
					var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== 'ed56da6b0bc6f9481e9798a4eb5e03d7') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof src != 'undefined') {
						if (src !== null && typeof src['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = src;
							src = arguments[2];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[2];
						}
					} else {
					}
				}
				if (typeof src == 'undefined') src=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjamas.media.Audio', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.media.Audio';
				$pyjs['track']['lineno']=25;
				$pyjs['track']['lineno']=26;
				self['setElement']($m['DOM']['createElement']('audio'));
				$pyjs['track']['lineno']=27;
				if ($p['bool'](src)) {
					$pyjs['track']['lineno']=28;
					self['setSrc'](src);
				}
				$pyjs['track']['lineno']=30;
				$pyjs_kwargs_call($m['Media'], '__init__', null, kwargs, [{}, self]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self'],['src', null]]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=23;
			var $bases = new Array($m['Media']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Audio', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.media.Audio */


/* end module: pyjamas.media.Audio */


/*
PYJS_DEPS: ['pyjamas.media.Media.Media', 'pyjamas', 'pyjamas.media', 'pyjamas.media.Media', 'pyjamas.DOM']
*/
