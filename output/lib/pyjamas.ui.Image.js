/* start module: pyjamas.ui.Image */
$pyjs['loaded_modules']['pyjamas.ui.Image'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.Image']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.Image'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.Image'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.Image>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Image';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['Image'] = $pyjs['loaded_modules']['pyjamas.ui.Image'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	$m['prefetchImages'] = $p['dict']([]);
	$m['Image'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.Image';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['url', 'Url', 'Url', null])]);
		$method = $pyjs__bind_method2('__init__', function(url) {
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
				url = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof url != 'undefined') {
					if (url !== null && typeof url['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = url;
						url = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof url == 'undefined') url=arguments['callee']['__args__'][3][1];
			var $or2,$or1;
			if ($p['bool'](!$p['bool'](kwargs['has_key']('StyleName')))) {
				kwargs['__setitem__']('StyleName', 'gwt-Image');
			}
			if ($p['bool'](url)) {
				kwargs['__setitem__']('Url', url);
			}
			self['setElement'](($p['bool']($or1=kwargs['pop']('Element', null))?$or1:$m['DOM']['createImg']()));
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['MouseHandler']['__init__'](self);
			$m['ClickHandler']['__init__'](self);
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONLOAD'))|($p['getattr']($m['Event'], 'ONERROR')));
			self['loadListeners'] = $p['list']([]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['url', '']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['Widget']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('addLoadListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['loadListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addLoadListener'] = $method;
		$method = $pyjs__bind_method2('removeLoadListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['loadListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeLoadListener'] = $method;
		$method = $pyjs__bind_method2('getUrl', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'src');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getUrl'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,listener,$iter2_idx,$iter1_array,$iter2_type,type,$iter2_array,$iter1_idx;
			$m['Widget']['onBrowserEvent'](self, event);
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'load'))) {
				$iter1_iter = $p['getattr'](self, 'loadListeners');
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					listener = $iter1_nextval['$nextval'];
					listener['onImageLoad'](self);
				}
			}
			else if ($p['bool']($p['op_eq'](type, 'error'))) {
				$iter2_iter = $p['getattr'](self, 'loadListeners');
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					listener = $iter2_nextval['$nextval'];
					listener['onImageError'](self);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('prefetch', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var img;
			img = $m['DOM']['createImg']();
			$m['DOM']['setElemAttribute'](img, 'src', url);
			$m['prefetchImages']['__setitem__'](url, img);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['prefetch'] = $method;
		$method = $pyjs__bind_method2('setUrl', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}

			$m['DOM']['setElemAttribute'](self['getElement'](), 'src', url);
			return null;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['setUrl'] = $method;
		var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Image', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Image', 'Image', $m['Image']);
	return this;
}; /* end pyjamas.ui.Image */


/* end module: pyjamas.ui.Image */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
