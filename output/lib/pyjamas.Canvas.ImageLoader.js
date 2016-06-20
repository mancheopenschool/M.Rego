/* start module: pyjamas.Canvas.ImageLoader */
$pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.ImageLoader>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.ImageLoader';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['ImageLoader'] = $pyjs['loaded_modules']['pyjamas.Canvas.ImageLoader'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', 'pyjamas.Canvas', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.Canvas', null, false);
	$m['imageLoaders'] = $p['list']([]);
	$m['ImageLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.ImageLoader';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['images'] = $p['list']([]);
			self['callBack'] = null;
			self['loadedImages'] = 0;
			self['totalImages'] = 0;
			self['onImageLoad'] = $p['getattr'](self, 'onLoad');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addHandle', function(img) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img = arguments[1];
			}
			var $add2,$add1;
			self['totalImages'] = $p['__op_add']($add1=$p['getattr'](self, 'totalImages'),$add2=1);
			self['images']['append'](img);
			return null;
		}
	, 1, [null,null,['self'],['img']]);
		$cls_definition['addHandle'] = $method;
		$method = $pyjs__bind_method2('dispatchIfComplete', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and1,$and2;
			if ($p['bool'](($p['bool']($and1=($p['getattr'](self, 'callBack') !== null))?self['isAllLoaded']():$and1))) {
				self['callBack']['onImagesLoaded']($p['getattr'](self, 'images'));
				$m['imageLoaders']['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['dispatchIfComplete'] = $method;
		$method = $pyjs__bind_method2('finalize', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}

			self['callBack'] = cb;
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['finalize'] = $method;
		$method = $pyjs__bind_method2('incrementLoadedImages', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add3,$add4;
			self['loadedImages'] = $p['__op_add']($add3=$p['getattr'](self, 'loadedImages'),$add4=1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['incrementLoadedImages'] = $method;
		$method = $pyjs__bind_method2('isAllLoaded', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['op_eq']($p['getattr'](self, 'loadedImages'), $p['getattr'](self, 'totalImages'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['isAllLoaded'] = $method;
		$method = $pyjs__bind_method2('prepareImage', function(url) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var img;
			img = $m['Image']();
			img['__isLoaded'] = false;
			img['addLoadListener'](self);
			$m['DOM']['setEventListener'](img['getElement'](), img);
			$m['DOM']['sinkEvents'](img['getElement'](), $p['getattr']($m['Event'], 'ONLOAD'));
			return img;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['prepareImage'] = $method;
		$method = $pyjs__bind_method2('onLoad', function(img) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				img = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](img, '__isLoaded')))) {
				img['__isLoaded'] = true;
				self['incrementLoadedImages']();
				img['removeLoadListener'](self);
			}
			self['dispatchIfComplete']();
			return img;
			return null;
		}
	, 1, [null,null,['self'],['img']]);
		$cls_definition['onLoad'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageLoader', $p['tuple']($bases), $data);
	})();
	$m['loadImages'] = function(urls, cb) {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,i,$iter1_iter,$iter2_idx,il,$iter2_type,$iter2_array,$iter1_array;
		il = $m['ImageLoader']();
		$iter1_iter = $p['range']($p['len'](urls));
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			i = $iter1_nextval['$nextval'];
			il['addHandle'](il['prepareImage'](urls['__getitem__'](i)));
		}
		il['finalize'](cb);
		$m['imageLoaders']['append'](il);
		$iter2_iter = $p['range']($p['len'](urls));
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			$p['getattr'](il, 'images')['__getitem__'](i)['setUrl'](urls['__getitem__'](i));
		}
		return null;
	};
	$m['loadImages']['__name__'] = 'loadImages';

	$m['loadImages']['__bind_type__'] = 0;
	$m['loadImages']['__args__'] = [null,null,['urls'],['cb']];
	return this;
}; /* end pyjamas.Canvas.ImageLoader */


/* end module: pyjamas.Canvas.ImageLoader */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Image.Image', 'pyjamas.ui', 'pyjamas.ui.Image', 'pyjamas.ui.Event']
*/
