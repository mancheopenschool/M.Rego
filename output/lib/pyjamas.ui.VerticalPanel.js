/* start module: pyjamas.ui.VerticalPanel */
$pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.VerticalPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.VerticalPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['VerticalPanel'] = $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
	$m['VerticalPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.VerticalPanel';
		$method = $pyjs__bind_method2('insert', function(widget, container, beforeIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
				beforeIndex = arguments[3];
			}
			if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][5][1];
			var tr,td;
			if ($p['bool']($p['op_eq'](widget['getParent'](), self))) {
				return null;
			}
			if ($p['bool']((beforeIndex === null))) {
				beforeIndex = container;
				container = self['getBody']();
			}
			widget['removeFromParent']();
			tr = $m['DOM']['createTR']();
			td = $m['DOM']['createTD']();
			$m['DOM']['insertChild'](container, tr, beforeIndex);
			$m['DOM']['appendChild'](tr, td);
			$m['CellPanel']['insert'](self, widget, td, beforeIndex);
			self['setCellHorizontalAlignment'](widget, $p['getattr'](self, 'horzAlign'));
			self['setCellVerticalAlignment'](widget, $p['getattr'](self, 'vertAlign'));
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td,tr;
			if ($p['bool']($p['isinstance'](widget, $p['float_int']))) {
				widget = self['getWidget'](widget);
			}
			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			td = $m['DOM']['getParent'](widget['getElement']());
			tr = $m['DOM']['getParent'](td);
			$m['DOM']['removeChild'](self['getBody'](), tr);
			$m['CellPanel']['remove'](self, widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VerticalPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.VerticalPanel', 'VerticalPanel', $m['VerticalPanel']);
	return this;
}; /* end pyjamas.ui.VerticalPanel */


/* end module: pyjamas.ui.VerticalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
