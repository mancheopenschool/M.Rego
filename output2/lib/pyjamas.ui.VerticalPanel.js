/* start module: pyjamas.ui.VerticalPanel */
$pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.VerticalPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.VerticalPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalPanel';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['VerticalPanel'] = $pyjs['loaded_modules']['pyjamas.ui.VerticalPanel'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.VerticalPanel.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.VerticalPanel.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.VerticalPanel.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[18] = 'pyjamas.ui.VerticalPanel.py, line 18:\n    from pyjamas.ui.CellPanel import CellPanel';
		$m.__track_lines__[19] = 'pyjamas.ui.VerticalPanel.py, line 19:\n    from pyjamas.ui import HasHorizontalAlignment';
		$m.__track_lines__[20] = 'pyjamas.ui.VerticalPanel.py, line 20:\n    from pyjamas.ui import HasVerticalAlignment';
		$m.__track_lines__[22] = 'pyjamas.ui.VerticalPanel.py, line 22:\n    class VerticalPanel(CellPanel):';
		$m.__track_lines__[24] = 'pyjamas.ui.VerticalPanel.py, line 24:\n    def insert(self, widget, container, beforeIndex=None):';
		$m.__track_lines__[31] = 'pyjamas.ui.VerticalPanel.py, line 31:\n    if widget.getParent() == self:';
		$m.__track_lines__[32] = 'pyjamas.ui.VerticalPanel.py, line 32:\n    return';
		$m.__track_lines__[34] = 'pyjamas.ui.VerticalPanel.py, line 34:\n    if beforeIndex is None:';
		$m.__track_lines__[35] = 'pyjamas.ui.VerticalPanel.py, line 35:\n    beforeIndex = container';
		$m.__track_lines__[36] = 'pyjamas.ui.VerticalPanel.py, line 36:\n    container = self.getBody()';
		$m.__track_lines__[38] = 'pyjamas.ui.VerticalPanel.py, line 38:\n    widget.removeFromParent()';
		$m.__track_lines__[40] = 'pyjamas.ui.VerticalPanel.py, line 40:\n    tr = DOM.createTR()';
		$m.__track_lines__[41] = 'pyjamas.ui.VerticalPanel.py, line 41:\n    td = DOM.createTD()';
		$m.__track_lines__[43] = 'pyjamas.ui.VerticalPanel.py, line 43:\n    DOM.insertChild(container, tr, beforeIndex)';
		$m.__track_lines__[44] = 'pyjamas.ui.VerticalPanel.py, line 44:\n    DOM.appendChild(tr, td)';
		$m.__track_lines__[46] = 'pyjamas.ui.VerticalPanel.py, line 46:\n    CellPanel.insert(self, widget, td, beforeIndex)';
		$m.__track_lines__[48] = 'pyjamas.ui.VerticalPanel.py, line 48:\n    self.setCellHorizontalAlignment(widget, self.horzAlign)';
		$m.__track_lines__[49] = 'pyjamas.ui.VerticalPanel.py, line 49:\n    self.setCellVerticalAlignment(widget, self.vertAlign)';
		$m.__track_lines__[51] = 'pyjamas.ui.VerticalPanel.py, line 51:\n    def remove(self, widget):';
		$m.__track_lines__[52] = 'pyjamas.ui.VerticalPanel.py, line 52:\n    if isinstance(widget, int):';
		$m.__track_lines__[53] = 'pyjamas.ui.VerticalPanel.py, line 53:\n    widget = self.getWidget(widget)';
		$m.__track_lines__[55] = 'pyjamas.ui.VerticalPanel.py, line 55:\n    if widget.getParent() != self:';
		$m.__track_lines__[56] = 'pyjamas.ui.VerticalPanel.py, line 56:\n    return False';
		$m.__track_lines__[58] = 'pyjamas.ui.VerticalPanel.py, line 58:\n    td = DOM.getParent(widget.getElement())';
		$m.__track_lines__[59] = 'pyjamas.ui.VerticalPanel.py, line 59:\n    tr = DOM.getParent(td)';
		$m.__track_lines__[60] = 'pyjamas.ui.VerticalPanel.py, line 60:\n    DOM.removeChild(self.getBody(), tr)';
		$m.__track_lines__[62] = 'pyjamas.ui.VerticalPanel.py, line 62:\n    CellPanel.remove(self, widget)';
		$m.__track_lines__[63] = 'pyjamas.ui.VerticalPanel.py, line 63:\n    return True';
		$m.__track_lines__[66] = "pyjamas.ui.VerticalPanel.py, line 66:\n    Factory.registerClass('pyjamas.ui.VerticalPanel', 'VerticalPanel', VerticalPanel)";


		$pyjs['track']['module']='pyjamas.ui.VerticalPanel';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=19;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=22;
		$m['VerticalPanel'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.VerticalPanel';
			$cls_definition['__md5__'] = '21e8baac210caf4c2f0f5173e6e0e4ff';
			$pyjs['track']['lineno']=24;
			$method = $pyjs__bind_method2('insert', function(widget, container, beforeIndex) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					container = arguments[2];
					beforeIndex = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '21e8baac210caf4c2f0f5173e6e0e4ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof beforeIndex == 'undefined') beforeIndex=arguments['callee']['__args__'][5][1];
				var tr,td;
				$pyjs['track']={'module':'pyjamas.ui.VerticalPanel', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.VerticalPanel';
				$pyjs['track']['lineno']=24;
				$pyjs['track']['lineno']=31;
				if ($p['bool']($p['op_eq'](widget['getParent'](), self))) {
					$pyjs['track']['lineno']=32;
					$pyjs['track']['lineno']=32;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=34;
				if ($p['bool']($p['op_is'](beforeIndex, null))) {
					$pyjs['track']['lineno']=35;
					beforeIndex = container;
					$pyjs['track']['lineno']=36;
					container = self['getBody']();
				}
				$pyjs['track']['lineno']=38;
				widget['removeFromParent']();
				$pyjs['track']['lineno']=40;
				tr = $m['DOM']['createTR']();
				$pyjs['track']['lineno']=41;
				td = $m['DOM']['createTD']();
				$pyjs['track']['lineno']=43;
				$m['DOM']['insertChild'](container, tr, beforeIndex);
				$pyjs['track']['lineno']=44;
				$m['DOM']['appendChild'](tr, td);
				$pyjs['track']['lineno']=46;
				$m['CellPanel']['insert'](self, widget, td, beforeIndex);
				$pyjs['track']['lineno']=48;
				self['setCellHorizontalAlignment'](widget, $p['getattr'](self, 'horzAlign'));
				$pyjs['track']['lineno']=49;
				self['setCellVerticalAlignment'](widget, $p['getattr'](self, 'vertAlign'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex', null]]);
			$cls_definition['insert'] = $method;
			$pyjs['track']['lineno']=51;
			$method = $pyjs__bind_method2('remove', function(widget) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					widget = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '21e8baac210caf4c2f0f5173e6e0e4ff') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var td,tr;
				$pyjs['track']={'module':'pyjamas.ui.VerticalPanel', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.VerticalPanel';
				$pyjs['track']['lineno']=51;
				$pyjs['track']['lineno']=52;
				if ($p['bool']($p['isinstance'](widget, $p['int']))) {
					$pyjs['track']['lineno']=53;
					widget = self['getWidget'](widget);
				}
				$pyjs['track']['lineno']=55;
				if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
					$pyjs['track']['lineno']=56;
					$pyjs['track']['lineno']=56;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=58;
				td = $m['DOM']['getParent'](widget['getElement']());
				$pyjs['track']['lineno']=59;
				tr = $m['DOM']['getParent'](td);
				$pyjs['track']['lineno']=60;
				$m['DOM']['removeChild'](self['getBody'](), tr);
				$pyjs['track']['lineno']=62;
				$m['CellPanel']['remove'](self, widget);
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=63;
				var $pyjs__ret = true;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['widget']]);
			$cls_definition['remove'] = $method;
			$pyjs['track']['lineno']=22;
			var $bases = new Array($m['CellPanel']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('VerticalPanel', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=66;
		$m['Factory']['registerClass']('pyjamas.ui.VerticalPanel', 'VerticalPanel', $m['VerticalPanel']);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.VerticalPanel */


/* end module: pyjamas.ui.VerticalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
