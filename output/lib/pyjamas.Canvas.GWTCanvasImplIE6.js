/* start module: pyjamas.Canvas.GWTCanvasImplIE6 */
$pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	if(typeof $pyjs['loaded_modules']['pyjamas.Canvas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.Canvas']['__was_initialized__']) $p['___import___']('pyjamas.Canvas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];
	$m['__repr__'] = function() { return '<module: pyjamas.Canvas.GWTCanvasImplIE6>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Canvas.GWTCanvasImplIE6';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.Canvas']['GWTCanvasImplIE6'] = $pyjs['loaded_modules']['pyjamas.Canvas.GWTCanvasImplIE6'];


	$m['math'] = $p['___import___']('math', 'pyjamas.Canvas');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.Canvas', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.Canvas', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.Canvas', null, false);
	$m['BUTT'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', null, false);
	$m['DESTINATION_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas', null, false);
	$m['SOURCE_OVER'] = $p['___import___']('pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas', null, false);
	$m['GWTCanvasConsts'] = $p['___import___']('pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas', null, false);
	$m['JSOStack'] = $p['___import___']('pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas', null, false);
	$m['PathElement'] = $p['___import___']('pyjamas.Canvas.PathElement', 'pyjamas.Canvas', null, false);
	$m['VMLContext'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas', null, false);
	$m['VMLStyle'] = $p['___import___']('pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas', null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', null, false);
	$m['CanvasGradientImplIE6'] = $p['___import___']('pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas', null, false);
	$m['addNamespace'] = function() {


    if (!$doc['namespaces']["v"]) {
        $doc['namespaces']['add']("v", "urn:schemas-microsoft-com:vml");
        $doc['createStyleSheet']()['cssText'] = "v\:*{behavior:url(#default#VML);}";
    }
    
	};
	$m['addNamespace']['__name__'] = 'addNamespace';

	$m['addNamespace']['__bind_type__'] = 0;
	$m['addNamespace']['__args__'] = [null,null];
	$m['GWTCanvasImplIE6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.Canvas.GWTCanvasImplIE6';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ns,$pyjs_try_err;
			try {
				ns = $doc['namespaces']['item']('v');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					$doc['namespaces']['add']('v', 'urn:schemas-microsoft-com:vml');
					$doc['createStyleSheet']()['cssText'] = 'v\\:*{behavior:url(#default#VML);}';
				}
			}
			self['pathStr'] = $m['JSOStack']();
			self['contextStack'] = $p['list']([]);
			self['currentX'] = 0;
			self['currentY'] = 0;
			self['parentElement'] = null;
			self['parentHeight'] = 0;
			self['parentWidth'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('arc', function(x, y, radius, startAngle, endAngle, anticlockwise) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				radius = arguments[3];
				startAngle = arguments[4];
				endAngle = arguments[5];
				anticlockwise = arguments[6];
			}

			self['pathStr']['append']($m['PathElement']['arc'](x, y, radius, startAngle, endAngle, anticlockwise, self));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['radius'],['startAngle'],['endAngle'],['anticlockwise']]);
		$cls_definition['arc'] = $method;
		$method = $pyjs__bind_method2('beginPath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['pathStr']['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['beginPath'] = $method;
		$method = $pyjs__bind_method2('clear', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];

			self['pathStr']['clear']();
			$m['DOM']['setInnerHTML']($p['getattr'](self, 'parentElement'), '');
			return null;
		}
	, 1, [null,null,['self'],['width', 0],['height', 0]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('closePath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['pathStr']['append']($m['PathElement']['closePath']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['closePath'] = $method;
		$method = $pyjs__bind_method2('createElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['context'] = $m['VMLContext']();
			self['matrix'] = $p['getattr']($p['getattr'](self, 'context'), 'matrix');
			return self['createParentElement']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createElement'] = $method;
		$method = $pyjs__bind_method2('createParentElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['parentElement'] = $m['DOM']['createElement']('div');
			$m['DOM']['setStyleAttribute']($p['getattr'](self, 'parentElement'), 'overflow', 'hidden');
			return $p['getattr'](self, 'parentElement');
		}
	, 1, [null,null,['self']]);
		$cls_definition['createParentElement'] = $method;
		$method = $pyjs__bind_method2('setFont', function(font) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				font = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['font']]);
		$cls_definition['setFont'] = $method;
		$method = $pyjs__bind_method2('cubicCurveTo', function(cp1x, cp1y, cp2x, cp2y, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cp1x = arguments[1];
				cp1y = arguments[2];
				cp2x = arguments[3];
				cp2y = arguments[4];
				x = arguments[5];
				y = arguments[6];
			}

			self['pathStr']['append']($m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['cp1x'],['cp1y'],['cp2x'],['cp2y'],['x'],['y']]);
		$cls_definition['cubicCurveTo'] = $method;
		$method = $pyjs__bind_method2('drawImage', function(img) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			} else {
				var self = arguments[0];
				img = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']));

			}
			var $add5,destWidth,sourceHeight,$div13,$sub8,sourceWidth,$mul4,$div14,$mul3,$div10,$div11,$div12,$mul2,$sub3,$mul1,vmlStr,destX,sourceX,sourceY,$sub7,$sub6,$sub5,$sub4,$or1,dX,$or2,fullHeight,dY,fullWidth,destY,$div8,$div9,$sub2,$div2,$div3,$div1,$div6,$div7,$div4,$div5,$div16,$sub1,$add2,$add3,$add1,$add6,$add7,$add4,destHeight,$add8,$div15;
			if ($p['bool']($p['isinstance'](img, $m['Widget']))) {
				img = img['getElement']();
			}
			fullWidth = $p['getattr'](img, 'width');
			fullHeight = $p['getattr'](img, 'height');
			if ($p['bool']($p['op_eq']($p['len'](args), 8))) {
				sourceX = args['__getitem__'](0);
				sourceY = args['__getitem__'](1);
				sourceWidth = args['__getitem__'](2);
				sourceHeight = args['__getitem__'](3);
				destX = args['__getitem__'](4);
				destY = args['__getitem__'](5);
				destWidth = args['__getitem__'](6);
				destHeight = args['__getitem__'](7);
			}
			else if ($p['bool']($p['op_eq']($p['len'](args), 4))) {
				sourceX = 0;
				sourceY = 0;
				sourceWidth = fullWidth;
				sourceHeight = fullHeight;
				destX = args['__getitem__'](0);
				destY = args['__getitem__'](1);
				destWidth = args['__getitem__'](2);
				destHeight = args['__getitem__'](3);
			}
			else if ($p['bool']($p['op_eq']($p['len'](args), 2))) {
				sourceX = 0;
				sourceY = 0;
				sourceWidth = fullWidth;
				sourceHeight = fullHeight;
				destX = args['__getitem__'](0);
				destY = args['__getitem__'](1);
				destWidth = fullWidth;
				destHeight = fullHeight;
			}
			vmlStr = $p['list']([]);
			vmlStr['append']('<v:group style="position:absolute;width:10;height:10;');
			dX = self['getCoordX']($p['getattr'](self, 'matrix'), destX, destY);
			dY = self['getCoordY']($p['getattr'](self, 'matrix'), destX, destY);
			if ($p['bool'](($p['bool']($or1=!$p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'matrix')['__getitem__'](0), 1))?$or1:!$p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'matrix')['__getitem__'](1), 0)))) {
				vmlStr['append']('padding-right:');
				vmlStr['append']($p['__op_add']($add1=$p['str']($p['getattr'](self, 'parentWidth')),$add2='px;'));
				vmlStr['append']('padding-bottom:');
				vmlStr['append']($p['__op_add']($add3=$p['str']($p['getattr'](self, 'parentHeight')),$add4='px;'));
				vmlStr['append']("filter:progid:DXImageTransform.Microsoft.Matrix(M11='");
				vmlStr['append']($p['__op_add']($add5='',$add6=$p['str']($p['getattr'](self, 'matrix')['__getitem__'](0))));
				vmlStr['append']("',");
				vmlStr['append']("M12='");
				vmlStr['append']($p['__op_add']($add7='',$add8=$p['str']($p['getattr'](self, 'matrix')['__getitem__'](1))));
				vmlStr['append']("',");
				vmlStr['append']("M21='");
				vmlStr['append']($p['str']($p['getattr'](self, 'matrix')['__getitem__'](3)));
				vmlStr['append']("',");
				vmlStr['append']("M22='");
				vmlStr['append']($p['str']($p['getattr'](self, 'matrix')['__getitem__'](4)));
				vmlStr['append']("',");
				vmlStr['append']("Dx='");
				vmlStr['append']($p['str']($m['math']['floor']((typeof ($div1=dX)==typeof ($div2=10) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))));
				vmlStr['append']("',");
				vmlStr['append']("Dy='");
				vmlStr['append']($p['str']($m['math']['floor']((typeof ($div3=dY)==typeof ($div4=10) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))));
				vmlStr['append']("', SizingMethod='clip');");
			}
			else {
				vmlStr['append']('left:');
				vmlStr['append']($p['sprintf']('%dpx;', $p['float_int']((typeof ($div5=dX)==typeof ($div6=10) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)))));
				vmlStr['append']('top:');
				vmlStr['append']($p['sprintf']('%dpx', $p['float_int']((typeof ($div7=dY)==typeof ($div8=10) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)))));
			}
			vmlStr['append']('" coordsize="100,100" coordorigin="0,0"><v:image src="');
			vmlStr['append']($m['DOM']['getAttribute'](img, 'src'));
			vmlStr['append']('" style="');
			vmlStr['append']('width:');
			vmlStr['append']($p['str']($p['float_int']((typeof ($mul1=destWidth)==typeof ($mul2=10) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)))));
			vmlStr['append'](';height:');
			vmlStr['append']($p['str']($p['float_int']((typeof ($mul3=destHeight)==typeof ($mul4=10) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))));
			vmlStr['append'](';" cropleft="');
			vmlStr['append']($p['str']((typeof ($div9=sourceX)==typeof ($div10=fullWidth) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10))));
			vmlStr['append']('" croptop="');
			vmlStr['append']($p['str']((typeof ($div11=sourceY)==typeof ($div12=fullHeight) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12))));
			vmlStr['append']('" cropright="');
			vmlStr['append']($p['str']((typeof ($div13=$p['__op_sub']($sub3=$p['__op_sub']($sub1=fullWidth,$sub2=sourceX),$sub4=sourceWidth))==typeof ($div14=fullWidth) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14))));
			vmlStr['append']('" cropbottom="');
			vmlStr['append']($p['str']((typeof ($div15=$p['__op_sub']($sub7=$p['__op_sub']($sub5=fullHeight,$sub6=sourceY),$sub8=sourceHeight))==typeof ($div16=fullHeight) && typeof $div15=='number' && $div16 !== 0?
				$div15/$div16:
				$p['op_div']($div15,$div16))));
			vmlStr['append']('"/></v:group>');
			self['insert']('BeforeEnd', ''['join'](vmlStr));
			return null;
		}
	, 1, ['args',null,['self'],['img']]);
		$cls_definition['drawImage'] = $method;
		$method = $pyjs__bind_method2('appendGradient', function(style, shapeStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
				shapeStr = arguments[2];
			}
			var maxX,maxY,dx,dy,$iter1_iter,colors,cs,$iter2_type,$mul9,colorStops,$add21,$add20,$add22,minX,minY,$sub9,$iter1_array,$mul8,$iter1_nextval,focusX,focusY,$sub13,$sub12,$sub11,$sub10,$sub14,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$mul7,$mul6,$mul5,$add18,$add19,$mul12,$iter2_nextval,stopPosn,$iter1_type,$mul11,$mul10,i,fillLength,$iter2_idx,$iter2_iter,length,$iter1_idx,$add9,$iter2_array;
			colorStops = $p['getattr']($p['getattr'](style, 'gradient'), 'colorStops');
			length = $p['len'](colorStops);
			shapeStr['append']('" color="');
			shapeStr['append']($p['str']($p['getattr'](colorStops['__getitem__'](0), 'color')));
			shapeStr['append']('" color2="');
			shapeStr['append']($p['str']($p['getattr'](colorStops['__getitem__']($p['__op_sub']($sub9=length,$sub10=1)), 'color')));
			shapeStr['append']('" type="');
			shapeStr['append']($p['getattr']($p['getattr'](style, 'gradient'), 'type'));
			if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](style, 'gradient'), 'type'), 'gradient'))) {
				colors = '';
				$iter1_iter = $p['range'](1, $p['len'](colorStops));
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					i = $iter1_nextval['$nextval'];
					cs = colorStops['__getitem__'](i);
					stopPosn = $p['getattr'](cs, 'offset');
					colors = $p['__op_add']($add9=colors,$add10=$p['sprintf']('%d%%', $p['float_int']((typeof ($mul5=stopPosn)==typeof ($mul6=100) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6)))));
					colors = $p['__op_add']($add13=colors,$add14=$p['__op_add']($add11=$p['str']($p['getattr'](cs, 'color')),$add12=','));
				}
				shapeStr['append']('" colors="');
				shapeStr['append'](colors);
			}
			else {
				minX = self['pathStr']['getMinCoordX']();
				maxX = self['pathStr']['getMaxCoordX']();
				minY = self['pathStr']['getMinCoordY']();
				maxY = self['pathStr']['getMaxCoordY']();
				dx = $p['__op_sub']($sub11=maxX,$sub12=minX);
				dy = $p['__op_sub']($sub13=maxY,$sub14=minY);
				fillLength = $m['math']['sqrt']($p['__op_add']($add15=(typeof ($mul7=dx)==typeof ($mul8=dx) && typeof $mul7=='number'?
					$mul7*$mul8:
					$p['op_mul']($mul7,$mul8)),$add16=(typeof ($mul9=dy)==typeof ($mul10=dy) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10))));
				focusX = 50;
				focusY = 50;
				colors = '';
				$iter2_iter = $p['range'](1, $p['len'](colorStops));
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					i = $iter2_nextval['$nextval'];
					cs = colorStops['__getitem__'](i);
					stopPosn = $p['getattr'](cs, 'offset');
					colors = $p['__op_add']($add17=colors,$add18=$p['sprintf']('%d%%', $p['float_int']((typeof ($mul11=stopPosn)==typeof ($mul12=100) && typeof $mul11=='number'?
						$mul11*$mul12:
						$p['op_mul']($mul11,$mul12)))));
					colors = $p['__op_add']($add21=colors,$add22=$p['__op_add']($add19=$p['str']($p['getattr'](cs, 'color')),$add20=','));
				}
				shapeStr['append']('" colors="');
				shapeStr['append'](colors);
				shapeStr['append']('" focusposition="');
				shapeStr['append']($p['str'](focusX));
				shapeStr['append']('%,');
				shapeStr['append']($p['str'](focusY));
				shapeStr['append']('%,');
			}
			shapeStr['append']('" angle="');
			shapeStr['append']($p['str']($p['getattr']($p['getattr'](style, 'gradient'), 'angle')));
			return null;
		}
	, 1, [null,null,['self'],['style'],['shapeStr']]);
		$cls_definition['appendGradient'] = $method;
		$method = $pyjs__bind_method2('appendStroke', function(shapeStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				shapeStr = arguments[1];
			}
			var $mul14,$mul13;
			shapeStr['append']('<v:stroke opacity="');
			shapeStr['append']($p['str']((typeof ($mul13=$p['getattr']($p['getattr'](self, 'context'), 'globalAlpha'))==typeof ($mul14=$p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'alpha')) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))));
			shapeStr['append']('"');
			if ($p['bool']($p['op_eq']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'type'), 'Gradient'))) {
				if ($p['bool'](($p['cmp']($p['len']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'gradient'), 'colorStops')), 0) == 1))) {
					self['appendGradient']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), shapeStr);
				}
			}
			else {
				shapeStr['append'](' color="');
				shapeStr['append']($p['str']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'strokeStyle'), 'color')));
			}
			shapeStr['append']('" miterlimit="');
			shapeStr['append']($p['str']($p['getattr']($p['getattr'](self, 'context'), 'miterLimit')));
			shapeStr['append']('" joinstyle="');
			shapeStr['append']($p['getattr']($p['getattr'](self, 'context'), 'lineJoin'));
			shapeStr['append']('" endcap="');
			shapeStr['append']($p['getattr']($p['getattr'](self, 'context'), 'lineCap'));
			shapeStr['append']('"></v:stroke>');
			return null;
		}
	, 1, [null,null,['self'],['shapeStr']]);
		$cls_definition['appendStroke'] = $method;
		$method = $pyjs__bind_method2('appendFill', function(shapeStr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				shapeStr = arguments[1];
			}
			var $mul16,$mul15;
			shapeStr['append']('<v:fill opacity="');
			shapeStr['append']($p['str']((typeof ($mul15=$p['getattr']($p['getattr'](self, 'context'), 'globalAlpha'))==typeof ($mul16=$p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'alpha')) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16))));
			shapeStr['append']('"');
			if ($p['bool']($p['op_eq']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'type'), 'Gradient'))) {
				if ($p['bool'](($p['cmp']($p['len']($p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'gradient'), 'colorStops')), 0) == 1))) {
					self['appendGradient']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), shapeStr);
				}
			}
			else {
				shapeStr['append'](' color="');
				shapeStr['append']($p['str']($p['getattr']($p['getattr']($p['getattr'](self, 'context'), 'fillStyle'), 'color')));
			}
			shapeStr['append']('"></v:fill>');
			return null;
		}
	, 1, [null,null,['self'],['shapeStr']]);
		$cls_definition['appendFill'] = $method;
		$method = $pyjs__bind_method2('fill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var shapeStr,daStr;
			if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, 'pathStr')), 0))) {
				return null;
			}
			shapeStr = $p['list']([]);
			shapeStr['append']('<v:shape style="position:absolute;width:10;height:10;" coordsize="100,100');
			shapeStr['append']('" stroked="f" path="');
			shapeStr['append'](self['pathStr']['join']());
			shapeStr['append'](' e">');
			self['appendFill'](shapeStr);
			shapeStr['append']('</v:shape>');
			daStr = ''['join'](shapeStr);
			self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('stroke', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var shapeStr,daStr;
			if ($p['bool']($p['op_eq']($p['len']($p['getattr'](self, 'pathStr')), 0))) {
				return null;
			}
			shapeStr = $p['list']([]);
			shapeStr['append']('<v:shape style="position:absolute;');
			shapeStr['append']('width:10; height:10;');
			shapeStr['append']('" coordsize="100,100');
			shapeStr['append']('" filled="f');
			shapeStr['append']('" stroked="t');
			shapeStr['append']('" strokeweight="');
			shapeStr['append']($p['str']($p['getattr']($p['getattr'](self, 'context'), 'lineWidth')));
			shapeStr['append']('px" path="');
			shapeStr['append'](self['pathStr']['join']());
			shapeStr['append'](' e">');
			self['appendStroke'](shapeStr);
			shapeStr['append']('<v:shape>');
			daStr = ''['join'](shapeStr);
			self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stroke'] = $method;
		$method = $pyjs__bind_method2('fillRect', function(x, y, w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
			}
			var $add25,$add24,$add26,$add23;
			w = $p['__op_add']($add23=w,$add24=x);
			h = $p['__op_add']($add25=h,$add26=y);
			self['beginPath']();
			self['moveTo'](x, y);
			self['lineTo'](x, h);
			self['lineTo'](w, h);
			self['lineTo'](w, y);
			self['closePath']();
			self['fill']();
			self['pathStr']['clear']();
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
		$cls_definition['fillRect'] = $method;
		$method = $pyjs__bind_method2('getContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'context');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getContext'] = $method;
		$method = $pyjs__bind_method2('getCoordX', function(matrix, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $mul17,$add28,$div18,$div17,$sub16,$mul19,$mul18,$sub15,$add29,$add27,coordX,$mul22,$add30,$mul20,$mul21;
			coordX = $p['float_int']($m['math']['floor']($m['math']['floor']($p['__op_sub']($sub15=(typeof ($mul21=10)==typeof ($mul22=$p['__op_add']($add29=$p['__op_add']($add27=(typeof ($mul17=matrix['__getitem__'](0))==typeof ($mul18=x) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)),$add28=(typeof ($mul19=matrix['__getitem__'](1))==typeof ($mul20=y) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20))),$add30=matrix['__getitem__'](2))) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22)),$sub16=4.5))));
			self['pathStr']['logCoordX']((typeof ($div17=coordX)==typeof ($div18=10) && typeof $div17=='number' && $div18 !== 0?
				$div17/$div18:
				$p['op_div']($div17,$div18)));
			return coordX;
		}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
		$cls_definition['getCoordX'] = $method;
		$method = $pyjs__bind_method2('getCoordY', function(matrix, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $div20,$sub18,$add32,$add33,$add31,$sub17,$add34,$mul26,$mul28,$mul27,$mul24,$mul25,$mul23,coordY,$div19;
			coordY = $p['float_int']($m['math']['floor']($m['math']['floor']($p['__op_sub']($sub17=(typeof ($mul27=10)==typeof ($mul28=$p['__op_add']($add33=$p['__op_add']($add31=(typeof ($mul23=matrix['__getitem__'](3))==typeof ($mul24=x) && typeof $mul23=='number'?
				$mul23*$mul24:
				$p['op_mul']($mul23,$mul24)),$add32=(typeof ($mul25=matrix['__getitem__'](4))==typeof ($mul26=y) && typeof $mul25=='number'?
				$mul25*$mul26:
				$p['op_mul']($mul25,$mul26))),$add34=matrix['__getitem__'](5))) && typeof $mul27=='number'?
				$mul27*$mul28:
				$p['op_mul']($mul27,$mul28)),$sub18=4.5))));
			self['pathStr']['logCoordY']((typeof ($div19=coordY)==typeof ($div20=10) && typeof $div19=='number' && $div20 !== 0?
				$div19/$div20:
				$p['op_div']($div19,$div20)));
			return coordY;
		}
	, 1, [null,null,['self'],['matrix'],['x'],['y']]);
		$cls_definition['getCoordY'] = $method;
		$method = $pyjs__bind_method2('getFillStyle', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'context'), 'fillStyle');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFillStyle'] = $method;
		$method = $pyjs__bind_method2('getGlobalAlpha', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'context'), 'globalAlpha');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('getGlobalCompositeOperation', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), $m['DESTINATION_OVER']))) {
				return $p['getattr']($m['GWTCanvasConsts'], 'DESTINATION_OVER');
			}
			else {
				return $p['getattr']($m['GWTCanvasConsts'], 'SOURCE_OVER');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getGlobalCompositeOperation'] = $method;
		$method = $pyjs__bind_method2('getLineCap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'context'), 'lineCap'), $m['BUTT']))) {
				return $p['getattr']($m['GWTCanvasConsts'], 'BUTT');
			}
			return $p['getattr']($p['getattr'](self, 'context'), 'lineCap');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineCap'] = $method;
		$method = $pyjs__bind_method2('getLineJoin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'context'), 'lineJoin');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineJoin'] = $method;
		$method = $pyjs__bind_method2('getLineWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'context'), 'lineWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLineWidth'] = $method;
		$method = $pyjs__bind_method2('getMiterLimit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'context'), 'miterLimit');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMiterLimit'] = $method;
		$method = $pyjs__bind_method2('getStrokeStyle', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr']($p['getattr'](self, 'context'), 'strokeStyle');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStrokeStyle'] = $method;
		$method = $pyjs__bind_method2('lineTo', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['pathStr']['append']($m['PathElement']['lineTo'](x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['lineTo'] = $method;
		$method = $pyjs__bind_method2('moveTo', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['pathStr']['append']($m['PathElement']['moveTo'](x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['moveTo'] = $method;
		$method = $pyjs__bind_method2('quadraticCurveTo', function(cpx, cpy, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cpx = arguments[1];
				cpy = arguments[2];
				x = arguments[3];
				y = arguments[4];
			}
			var $sub22,$sub23,$sub20,$sub21,$sub26,$sub24,$sub25,cp2y,cp2x,$add42,$add41,$add40,$mul29,$add39,$sub19,$add38,cp1x,cp1y,$div21,$div23,$div22,$div25,$div24,$div27,$div26,$div28,$add36,$add37,$add35,$mul31,$mul30,$mul32;
			cp1x = $p['__op_add']($add35=$p['getattr'](self, 'currentX'),$add36=(typeof ($mul29=(typeof ($div21=2.0)==typeof ($div22=3.0) && typeof $div21=='number' && $div22 !== 0?
				$div21/$div22:
				$p['op_div']($div21,$div22)))==typeof ($mul30=$p['__op_sub']($sub19=cpx,$sub20=$p['getattr'](self, 'currentX'))) && typeof $mul29=='number'?
				$mul29*$mul30:
				$p['op_mul']($mul29,$mul30)));
			cp1y = $p['__op_add']($add37=$p['getattr'](self, 'currentY'),$add38=(typeof ($mul31=(typeof ($div23=2.0)==typeof ($div24=3.0) && typeof $div23=='number' && $div24 !== 0?
				$div23/$div24:
				$p['op_div']($div23,$div24)))==typeof ($mul32=$p['__op_sub']($sub21=cpy,$sub22=$p['getattr'](self, 'currentY'))) && typeof $mul31=='number'?
				$mul31*$mul32:
				$p['op_mul']($mul31,$mul32)));
			cp2x = $p['__op_add']($add39=cp1x,$add40=(typeof ($div25=$p['__op_sub']($sub23=x,$sub24=$p['getattr'](self, 'currentX')))==typeof ($div26=3.0) && typeof $div25=='number' && $div26 !== 0?
				$div25/$div26:
				$p['op_div']($div25,$div26)));
			cp2y = $p['__op_add']($add41=cp1y,$add42=(typeof ($div27=$p['__op_sub']($sub25=y,$sub26=$p['getattr'](self, 'currentY')))==typeof ($div28=3.0) && typeof $div27=='number' && $div28 !== 0?
				$div27/$div28:
				$p['op_div']($div27,$div28)));
			self['pathStr']['append']($m['PathElement']['bezierCurveTo'](cp1x, cp1y, cp2x, cp2y, x, y, self));
			self['currentX'] = x;
			self['currentY'] = y;
			return null;
		}
	, 1, [null,null,['self'],['cpx'],['cpy'],['x'],['y']]);
		$cls_definition['quadraticCurveTo'] = $method;
		$method = $pyjs__bind_method2('rect', function(x, y, w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
			}
			var $add50,$add51,$add52,$add49,$add48,$add47,$add44,$add43,$add46,$add45;
			self['pathStr']['append']($m['PathElement']['moveTo'](x, y, self));
			self['pathStr']['append']($m['PathElement']['lineTo']($p['__op_add']($add43=x,$add44=w), y, self));
			self['pathStr']['append']($m['PathElement']['lineTo']($p['__op_add']($add45=x,$add46=w), $p['__op_add']($add47=y,$add48=h), self));
			self['pathStr']['append']($m['PathElement']['lineTo'](x, $p['__op_add']($add49=y,$add50=h), self));
			self['pathStr']['append']($m['PathElement']['closePath']());
			self['currentX'] = x;
			self['currentY'] = $p['__op_add']($add51=y,$add52=h);
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
		$cls_definition['rect'] = $method;
		$method = $pyjs__bind_method2('restoreContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'contextStack')), 0) == 1))) {
				self['context'] = self['contextStack']['pop']();
				self['matrix'] = $p['getattr']($p['getattr'](self, 'context'), 'matrix');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['restoreContext'] = $method;
		$method = $pyjs__bind_method2('rotate', function(angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
			}
			var $sub27,$sub28,$sub29,$mul44,$mul45,$mul47,$mul40,$mul41,$mul42,$mul43,m1,m2,$sub30,$add53,$mul48,a,c,b,$add54,$add55,$add56,s,$mul39,$mul38,$mul35,$mul34,$mul37,$mul36,$mul46,$mul33;
			s = $m['math']['sin']((typeof ($usub1=angle)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			c = $m['math']['cos']((typeof ($usub2=angle)=='number'?
				-$usub2:
				$p['op_usub']($usub2)));
			a = $p['getattr'](self, 'matrix')['__getitem__'](0);
			b = $p['getattr'](self, 'matrix')['__getitem__'](1);
			m1 = (typeof ($mul33=a)==typeof ($mul34=c) && typeof $mul33=='number'?
				$mul33*$mul34:
				$p['op_mul']($mul33,$mul34));
			m2 = (typeof ($mul35=b)==typeof ($mul36=s) && typeof $mul35=='number'?
				$mul35*$mul36:
				$p['op_mul']($mul35,$mul36));
			$p['getattr'](self, 'matrix')['__setitem__'](0, $p['__op_sub']($sub27=m1,$sub28=m2));
			m1 = (typeof ($mul37=a)==typeof ($mul38=s) && typeof $mul37=='number'?
				$mul37*$mul38:
				$p['op_mul']($mul37,$mul38));
			m2 = (typeof ($mul39=b)==typeof ($mul40=c) && typeof $mul39=='number'?
				$mul39*$mul40:
				$p['op_mul']($mul39,$mul40));
			$p['getattr'](self, 'matrix')['__setitem__'](1, $p['__op_add']($add53=m1,$add54=m2));
			a = $p['getattr'](self, 'matrix')['__getitem__'](3);
			b = $p['getattr'](self, 'matrix')['__getitem__'](4);
			m1 = (typeof ($mul41=a)==typeof ($mul42=c) && typeof $mul41=='number'?
				$mul41*$mul42:
				$p['op_mul']($mul41,$mul42));
			m2 = (typeof ($mul43=b)==typeof ($mul44=s) && typeof $mul43=='number'?
				$mul43*$mul44:
				$p['op_mul']($mul43,$mul44));
			$p['getattr'](self, 'matrix')['__setitem__'](3, $p['__op_sub']($sub29=m1,$sub30=m2));
			m1 = (typeof ($mul45=a)==typeof ($mul46=s) && typeof $mul45=='number'?
				$mul45*$mul46:
				$p['op_mul']($mul45,$mul46));
			m2 = (typeof ($mul47=b)==typeof ($mul48=c) && typeof $mul47=='number'?
				$mul47*$mul48:
				$p['op_mul']($mul47,$mul48));
			$p['getattr'](self, 'matrix')['__setitem__'](4, $p['__op_add']($add55=m1,$add56=m2));
			return null;
		}
	, 1, [null,null,['self'],['angle']]);
		$cls_definition['rotate'] = $method;
		$method = $pyjs__bind_method2('saveContext', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['contextStack']['append']($p['getattr'](self, 'context'));
			self['context'] = $m['VMLContext']($p['getattr'](self, 'context'));
			self['matrix'] = $p['getattr']($p['getattr'](self, 'context'), 'matrix');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['saveContext'] = $method;
		$method = $pyjs__bind_method2('scale', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $mul60,$mul49,$augexpr1,$augexpr3,$augexpr2,$augexpr4,$augsub4,$augsub3,$augsub2,$augsub1,$mul59,$mul58,$mul53,$mul52,$mul51,$mul50,$mul57,$mul56,$mul55,$mul54;
			$p['getattr'](self, 'context')['arcScaleX'] = (typeof ($mul49=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleX'))==typeof ($mul50=x) && typeof $mul49=='number'?
				$mul49*$mul50:
				$p['op_mul']($mul49,$mul50));
			$p['getattr'](self, 'context')['arcScaleY'] = (typeof ($mul51=$p['getattr']($p['getattr'](self, 'context'), 'arcScaleY'))==typeof ($mul52=y) && typeof $mul51=='number'?
				$mul51*$mul52:
				$p['op_mul']($mul51,$mul52));
			var $augsub1 = 0;
			var $augexpr1 = $p['getattr'](self, 'matrix');
			$augexpr1['__setitem__']($augsub1, (typeof ($mul53=$augexpr1['__getitem__']($augsub1))==typeof ($mul54=x) && typeof $mul53=='number'?
				$mul53*$mul54:
				$p['op_mul']($mul53,$mul54)));
			var $augsub2 = 1;
			var $augexpr2 = $p['getattr'](self, 'matrix');
			$augexpr2['__setitem__']($augsub2, (typeof ($mul55=$augexpr2['__getitem__']($augsub2))==typeof ($mul56=y) && typeof $mul55=='number'?
				$mul55*$mul56:
				$p['op_mul']($mul55,$mul56)));
			var $augsub3 = 3;
			var $augexpr3 = $p['getattr'](self, 'matrix');
			$augexpr3['__setitem__']($augsub3, (typeof ($mul57=$augexpr3['__getitem__']($augsub3))==typeof ($mul58=x) && typeof $mul57=='number'?
				$mul57*$mul58:
				$p['op_mul']($mul57,$mul58)));
			var $augsub4 = 4;
			var $augexpr4 = $p['getattr'](self, 'matrix');
			$augexpr4['__setitem__']($augsub4, (typeof ($mul59=$augexpr4['__getitem__']($augsub4))==typeof ($mul60=y) && typeof $mul59=='number'?
				$mul59*$mul60:
				$p['op_mul']($mul59,$mul60)));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['scale'] = $method;
		$method = $pyjs__bind_method2('setBackgroundColor', function(element, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				color = arguments[2];
			}

			$m['DOM']['setStyleAttribute'](element, 'backgroundColor', color);
			return null;
		}
	, 1, [null,null,['self'],['element'],['color']]);
		$cls_definition['setBackgroundColor'] = $method;
		$method = $pyjs__bind_method2('setCoordHeight', function(elem, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				height = arguments[2];
			}

			$m['DOM']['setElemAttribute'](elem, 'width', $p['float_int'](height));
			self['clear'](0, 0);
			return null;
		}
	, 1, [null,null,['self'],['elem'],['height']]);
		$cls_definition['setCoordHeight'] = $method;
		$method = $pyjs__bind_method2('setCoordWidth', function(elem, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				width = arguments[2];
			}

			$m['DOM']['setElemAttribute'](elem, 'width', $p['float_int'](width));
			self['clear'](0, 0);
			return null;
		}
	, 1, [null,null,['self'],['elem'],['width']]);
		$cls_definition['setCoordWidth'] = $method;
		$method = $pyjs__bind_method2('setCurrentX', function(currentX) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				currentX = arguments[1];
			}

			self['currentX'] = currentX;
			return null;
		}
	, 1, [null,null,['self'],['currentX']]);
		$cls_definition['setCurrentX'] = $method;
		$method = $pyjs__bind_method2('setCurrentY', function(currentY) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				currentY = arguments[1];
			}

			self['currentY'] = currentY;
			return null;
		}
	, 1, [null,null,['self'],['currentY']]);
		$cls_definition['setCurrentY'] = $method;
		$method = $pyjs__bind_method2('setFillStyle', function(fillStyle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fillStyle = arguments[1];
			}
			var $add65,$add64,$add67,$add66,end,$add60,$add63,$add57,$add58,$add59,guts,$add68,$add61,$add62;
			$p['getattr'](self, 'context')['fillStyle'] = $m['VMLStyle']();
			if ($p['bool']($p['isinstance'](fillStyle, $m['CanvasGradientImplIE6']))) {
				$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['type'] = 'Gradient';
				$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['gradient'] = fillStyle;
			}
			else {
				fillStyle = $p['str'](fillStyle)['strip']();
				if ($p['bool'](fillStyle['startswith']('rgba('))) {
					end = fillStyle['find'](')', 12);
					if ($p['bool'](($p['cmp'](end, (typeof ($usub3=1)=='number'?
						-$usub3:
						$p['op_usub']($usub3))) == 1))) {
						guts = $p['__getslice'](fillStyle, 5, end)['$$split'](',');
						if ($p['bool']($p['op_eq']($p['len'](guts), 4))) {
							$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['alpha'] = $p['float'](guts['__getitem__'](3));
							$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['color'] = $p['__op_add']($add67=$p['__op_add']($add65=$p['__op_add']($add63=$p['__op_add']($add61=$p['__op_add']($add59=$p['__op_add']($add57='rgb(',$add58=guts['__getitem__'](0)),$add60=','),$add62=guts['__getitem__'](1)),$add64=','),$add66=guts['__getitem__'](2)),$add68=')');
						}
					}
				}
				else {
					$p['getattr']($p['getattr'](self, 'context'), 'fillStyle')['color'] = fillStyle;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['fillStyle']]);
		$cls_definition['setFillStyle'] = $method;
		$method = $pyjs__bind_method2('setStrokeStyle', function(strokeStyle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				strokeStyle = arguments[1];
			}
			var $add76,$add74,$add75,end,$add73,$add70,$add71,guts,$add69,$add78,$add79,$add80,$add77,$add72;
			$p['getattr'](self, 'context')['strokeStyle'] = $m['VMLStyle']();
			if ($p['bool']($p['isinstance'](strokeStyle, $m['CanvasGradientImplIE6']))) {
				$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['type'] = 'Gradient';
				$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['gradient'] = strokeStyle;
			}
			else {
				strokeStyle = $p['str'](strokeStyle)['strip']();
				if ($p['bool'](strokeStyle['startswith']('rgba('))) {
					end = strokeStyle['find'](')', 12);
					if ($p['bool'](($p['cmp'](end, (typeof ($usub4=1)=='number'?
						-$usub4:
						$p['op_usub']($usub4))) == 1))) {
						guts = $p['__getslice'](strokeStyle, 5, end)['$$split'](',');
						if ($p['bool']($p['op_eq']($p['len'](guts), 4))) {
							$p['getattr']($p['getattr'](self, 'context'), 'stokeStyle')['alpha'] = $p['float'](guts['__getitem__'](3));
							$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['color'] = $p['__op_add']($add79=$p['__op_add']($add77=$p['__op_add']($add75=$p['__op_add']($add73=$p['__op_add']($add71=$p['__op_add']($add69='rgb(',$add70=guts['__getitem__'](0)),$add72=','),$add74=guts['__getitem__'](1)),$add76=','),$add78=guts['__getitem__'](2)),$add80=')');
						}
					}
				}
				else {
					$p['getattr']($p['getattr'](self, 'context'), 'strokeStyle')['color'] = strokeStyle;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['strokeStyle']]);
		$cls_definition['setStrokeStyle'] = $method;
		$method = $pyjs__bind_method2('setGlobalAlpha', function(globalAlpha) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				globalAlpha = arguments[1];
			}

			$p['getattr'](self, 'context')['globalAlpha'] = globalAlpha;
			return null;
		}
	, 1, [null,null,['self'],['globalAlpha']]);
		$cls_definition['setGlobalAlpha'] = $method;
		$method = $pyjs__bind_method2('setGlobalCompositeOperation', function(gco) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gco = arguments[1];
			}

			gco = gco['strip']();
			if ($p['bool']($p['op_eq']($p['getattr'](gco, 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'SOURCE_OVER')))) {
				$p['getattr'](self, 'context')['globalCompositeOperation'] = $m['SOURCE_OVER'];
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](gco, 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'DESTINATION_OVER')))) {
				$p['getattr'](self, 'context')['globalCompositeOperation'] = $m['DESTINATION_OVER'];
			}
			return null;
		}
	, 1, [null,null,['self'],['gco']]);
		$cls_definition['setGlobalCompositeOperation'] = $method;
		$method = $pyjs__bind_method2('setLineCap', function(lineCap) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineCap = arguments[1];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](lineCap['strip'](), 'lower'), $p['getattr']($m['GWTCanvasConsts'], 'BUTT')))) {
				$p['getattr'](self, 'context')['lineCap'] = $m['BUTT'];
			}
			else {
				$p['getattr'](self, 'context')['lineCap'] = lineCap;
			}
			return null;
		}
	, 1, [null,null,['self'],['lineCap']]);
		$cls_definition['setLineCap'] = $method;
		$method = $pyjs__bind_method2('setLineJoin', function(lineJoin) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineJoin = arguments[1];
			}

			$p['getattr'](self, 'context')['lineJoin'] = lineJoin;
			return null;
		}
	, 1, [null,null,['self'],['lineJoin']]);
		$cls_definition['setLineJoin'] = $method;
		$method = $pyjs__bind_method2('setLineWidth', function(lineWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lineWidth = arguments[1];
			}

			$p['getattr'](self, 'context')['lineWidth'] = lineWidth;
			return null;
		}
	, 1, [null,null,['self'],['lineWidth']]);
		$cls_definition['setLineWidth'] = $method;
		$method = $pyjs__bind_method2('setMiterLimit', function(miterLimit) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				miterLimit = arguments[1];
			}

			$p['getattr'](self, 'context')['miterLimit'] = miterLimit;
			return null;
		}
	, 1, [null,null,['self'],['miterLimit']]);
		$cls_definition['setMiterLimit'] = $method;
		$method = $pyjs__bind_method2('setParentElement', function(g) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				g = arguments[1];
			}

			self['parentElement'] = g;
			return null;
		}
	, 1, [null,null,['self'],['g']]);
		$cls_definition['setParentElement'] = $method;
		$method = $pyjs__bind_method2('setPixelHeight', function(elem, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				height = arguments[2];
			}
			var $add82,$add81;
			$m['DOM']['setStyleAttribute'](elem, 'height', $p['__op_add']($add81=$p['str'](height),$add82='px'));
			self['parentHeight'] = height;
			return null;
		}
	, 1, [null,null,['self'],['elem'],['height']]);
		$cls_definition['setPixelHeight'] = $method;
		$method = $pyjs__bind_method2('setPixelWidth', function(elem, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				width = arguments[2];
			}
			var $add83,$add84;
			$m['DOM']['setStyleAttribute'](elem, 'width', $p['__op_add']($add83=$p['str'](width),$add84='px'));
			self['parentWidth'] = width;
			return null;
		}
	, 1, [null,null,['self'],['elem'],['width']]);
		$cls_definition['setPixelWidth'] = $method;
		$method = $pyjs__bind_method2('strokeRect', function(x, y, w, h) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				w = arguments[3];
				h = arguments[4];
			}
			var $add88,$add87,$add86,$add85;
			w = $p['__op_add']($add85=w,$add86=x);
			h = $p['__op_add']($add87=h,$add88=y);
			self['beginPath']();
			self['moveTo'](x, y);
			self['lineTo'](x, h);
			self['lineTo'](w, h);
			self['lineTo'](w, y);
			self['closePath']();
			self['stroke']();
			self['pathStr']['clear']();
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['w'],['h']]);
		$cls_definition['strokeRect'] = $method;
		$method = $pyjs__bind_method2('transform', function(m11, m12, m21, m22, dx, dy) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				m11 = arguments[1];
				m12 = arguments[2];
				m21 = arguments[3];
				m22 = arguments[4];
				dx = arguments[5];
				dy = arguments[6];
			}
			var $add101,$add89,$mul81,$add100,$add103,$add98,$add104,$mul62,$mul63,$mul61,$mul66,$mul67,$mul64,$mul65,$mul69,$augsub6,$add96,$mul80,$mul71,$mul82,$mul83,$augexpr5,$add99,$augexpr6,$add94,$add95,$augsub5,$add97,$add90,$add91,$add92,$add93,$mul72,$mul84,$add102,a,$mul70,$mul73,b,$mul75,$mul74,$mul77,$mul76,$mul79,$mul78,$mul68;
			a = $p['getattr'](self, 'matrix')['__getitem__'](0);
			b = $p['getattr'](self, 'matrix')['__getitem__'](1);
			$p['getattr'](self, 'matrix')['__setitem__'](0, $p['__op_add']($add89=(typeof ($mul61=a)==typeof ($mul62=m11) && typeof $mul61=='number'?
				$mul61*$mul62:
				$p['op_mul']($mul61,$mul62)),$add90=(typeof ($mul63=b)==typeof ($mul64=m12) && typeof $mul63=='number'?
				$mul63*$mul64:
				$p['op_mul']($mul63,$mul64))));
			$p['getattr'](self, 'matrix')['__setitem__'](1, $p['__op_add']($add91=(typeof ($mul65=a)==typeof ($mul66=m21) && typeof $mul65=='number'?
				$mul65*$mul66:
				$p['op_mul']($mul65,$mul66)),$add92=(typeof ($mul67=b)==typeof ($mul68=m22) && typeof $mul67=='number'?
				$mul67*$mul68:
				$p['op_mul']($mul67,$mul68))));
			var $augsub5 = 2;
			var $augexpr5 = $p['getattr'](self, 'matrix');
			$augexpr5['__setitem__']($augsub5, $p['__op_add']($add95=$augexpr5['__getitem__']($augsub5),$add96=$p['__op_add']($add93=(typeof ($mul69=a)==typeof ($mul70=dx) && typeof $mul69=='number'?
				$mul69*$mul70:
				$p['op_mul']($mul69,$mul70)),$add94=(typeof ($mul71=b)==typeof ($mul72=dy) && typeof $mul71=='number'?
				$mul71*$mul72:
				$p['op_mul']($mul71,$mul72)))));
			a = $p['getattr'](self, 'matrix')['__getitem__'](3);
			b = $p['getattr'](self, 'matrix')['__getitem__'](4);
			$p['getattr'](self, 'matrix')['__setitem__'](3, $p['__op_add']($add97=(typeof ($mul73=a)==typeof ($mul74=m11) && typeof $mul73=='number'?
				$mul73*$mul74:
				$p['op_mul']($mul73,$mul74)),$add98=(typeof ($mul75=b)==typeof ($mul76=m12) && typeof $mul75=='number'?
				$mul75*$mul76:
				$p['op_mul']($mul75,$mul76))));
			$p['getattr'](self, 'matrix')['__setitem__'](4, $p['__op_add']($add99=(typeof ($mul77=a)==typeof ($mul78=m21) && typeof $mul77=='number'?
				$mul77*$mul78:
				$p['op_mul']($mul77,$mul78)),$add100=(typeof ($mul79=b)==typeof ($mul80=m22) && typeof $mul79=='number'?
				$mul79*$mul80:
				$p['op_mul']($mul79,$mul80))));
			var $augsub6 = 5;
			var $augexpr6 = $p['getattr'](self, 'matrix');
			$augexpr6['__setitem__']($augsub6, $p['__op_add']($add103=$augexpr6['__getitem__']($augsub6),$add104=$p['__op_add']($add101=(typeof ($mul81=a)==typeof ($mul82=dx) && typeof $mul81=='number'?
				$mul81*$mul82:
				$p['op_mul']($mul81,$mul82)),$add102=(typeof ($mul83=b)==typeof ($mul84=dy) && typeof $mul83=='number'?
				$mul83*$mul84:
				$p['op_mul']($mul83,$mul84)))));
			return null;
		}
	, 1, [null,null,['self'],['m11'],['m12'],['m21'],['m22'],['dx'],['dy']]);
		$cls_definition['transform'] = $method;
		$method = $pyjs__bind_method2('translate', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $add112,$mul92,$mul91,$mul90,$mul86,$add106,$mul88,$mul89,$add107,$add105,$mul85,$augexpr7,$mul87,$augsub7,$add108,$add110,$add111,$augexpr8,$add109,$augsub8;
			var $augsub7 = 2;
			var $augexpr7 = $p['getattr'](self, 'matrix');
			$augexpr7['__setitem__']($augsub7, $p['__op_add']($add107=$augexpr7['__getitem__']($augsub7),$add108=$p['__op_add']($add105=(typeof ($mul85=$p['getattr'](self, 'matrix')['__getitem__'](0))==typeof ($mul86=x) && typeof $mul85=='number'?
				$mul85*$mul86:
				$p['op_mul']($mul85,$mul86)),$add106=(typeof ($mul87=$p['getattr'](self, 'matrix')['__getitem__'](1))==typeof ($mul88=y) && typeof $mul87=='number'?
				$mul87*$mul88:
				$p['op_mul']($mul87,$mul88)))));
			var $augsub8 = 5;
			var $augexpr8 = $p['getattr'](self, 'matrix');
			$augexpr8['__setitem__']($augsub8, $p['__op_add']($add111=$augexpr8['__getitem__']($augsub8),$add112=$p['__op_add']($add109=(typeof ($mul89=$p['getattr'](self, 'matrix')['__getitem__'](3))==typeof ($mul90=x) && typeof $mul89=='number'?
				$mul89*$mul90:
				$p['op_mul']($mul89,$mul90)),$add110=(typeof ($mul91=$p['getattr'](self, 'matrix')['__getitem__'](4))==typeof ($mul92=y) && typeof $mul91=='number'?
				$mul91*$mul92:
				$p['op_mul']($mul91,$mul92)))));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['translate'] = $method;
		$method = $pyjs__bind_method2('insert', function(gco, html) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				gco = arguments[1];
				html = arguments[2];
			}

			self['parentElement']['insertAdjacentHTML'](gco, html);
			return null;
		}
	, 1, [null,null,['self'],['gco'],['html']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('buildStyleString', function(style) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}
			var $add127,$add126,$add124,$add123,$add121,$add118,$add119,$add116,$add117,$add114,$add115,$add113,$add128,$add120,$add125,$add122;
			return $p['__op_add']($add127=$p['__op_add']($add125=$p['__op_add']($add123=$p['__op_add']($add121=$p['__op_add']($add119=$p['__op_add']($add117=$p['__op_add']($add115=$p['__op_add']($add113=style['__getitem__']('style'),$add114=' '),$add116=style['__getitem__']('variant')),$add118=' '),$add120=style['__getitem__']('weight')),$add122=' '),$add124=$p['str'](style['__getitem__']('size'))),$add126='px '),$add128=style['__getitem__']('family'));
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['buildStyleString'] = $method;
		$method = $pyjs__bind_method2('encodeHtmlAttribute', function(s) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}
			var e;
			e = s['$$replace']('&', '&amp;');
			return e['$$replace']('"', '&quot;');
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['encodeHtmlAttribute'] = $method;
		$method = $pyjs__bind_method2('drawText_', function(text, x, y, maxWidth, stroke) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				x = arguments[2];
				y = arguments[3];
				maxWidth = arguments[4];
				stroke = arguments[5];
			}
			var $add134,$add135,$add136,right,$add130,$add131,$add133,$add138,$add139,daStr,$add137,$div32,$div30,$div31,$add132,$add145,$add144,$add147,$add146,DEFAULT_STYLE,$add140,$add143,$add142,$add141,$add149,$add148,skewM,$add154,$add129,lineStr,delta,textAlign,skewOffset,$div29,fontStyleString,offsetX,offsetY,$add152,$add153,$add150,$add151,dX,dY,left;
			delta = 1000;
			left = 0;
			right = delta;
			offsetX = 0;
			offsetY = 0;
			DEFAULT_STYLE = $p['dict']([['style', 'normal'], ['variant', 'normal'], ['weight', 'normal'], ['size', 10], ['family', 'sans-serif']]);
			fontStyleString = self['buildStyleString'](DEFAULT_STYLE);
			textAlign = 'left';
			dX = self['getCoordX']($p['getattr'](self, 'matrix'), $p['__op_add']($add129=x,$add130=offsetX), $p['__op_add']($add131=y,$add132=offsetY));
			dY = self['getCoordY']($p['getattr'](self, 'matrix'), $p['__op_add']($add133=x,$add134=offsetX), $p['__op_add']($add135=y,$add136=offsetY));
			lineStr = $p['list']([]);
			lineStr['append']('<v:line from="');
			lineStr['append']($p['str']((typeof ($usub5=left)=='number'?
				-$usub5:
				$p['op_usub']($usub5))));
			lineStr['append'](' 0" to="');
			lineStr['append']($p['str'](right));
			lineStr['append'](' 0" ');
			lineStr['append'](' coordsize="100 100" coordorigin="0 0"');
			lineStr['append']('" style="position:absolute;width:1px;height:1px"');
			if ($p['bool'](stroke)) {
				lineStr['append'](' filled="f" stroked="t">');
				self['appendStroke'](lineStr);
			}
			else {
				lineStr['append'](' filled="t" stroked="f">');
				self['appendFill'](lineStr);
			}
			skewM = $p['__op_add']($add149=$p['__op_add']($add147=$p['__op_add']($add145=$p['__op_add']($add143=$p['__op_add']($add141=$p['__op_add']($add139=$p['__op_add']($add137=$p['str']($p['getattr'](self, 'matrix')['__getitem__'](0)),$add138=','),$add140=$p['str']($p['getattr'](self, 'matrix')['__getitem__'](1))),$add142=','),$add144=$p['str']($p['getattr'](self, 'matrix')['__getitem__'](3))),$add146=','),$add148=$p['str']($p['getattr'](self, 'matrix')['__getitem__'](4))),$add150=',0,0');
			skewOffset = $p['__op_add']($add153=$p['__op_add']($add151=$p['str']($m['math']['floor']((typeof ($div29=dX)==typeof ($div30=10) && typeof $div29=='number' && $div30 !== 0?
				$div29/$div30:
				$p['op_div']($div29,$div30)))),$add152=','),$add154=$p['str']($m['math']['floor']((typeof ($div31=dY)==typeof ($div32=10) && typeof $div31=='number' && $div32 !== 0?
				$div31/$div32:
				$p['op_div']($div31,$div32)))));
			lineStr['append']('<v:skew on="t" matrix="');
			lineStr['append'](skewM);
			lineStr['append']('" ');
			lineStr['append'](' offset="');
			lineStr['append'](skewOffset);
			lineStr['append']('" origin="');
			lineStr['append']($p['str'](left));
			lineStr['append'](' 0" />');
			lineStr['append']('<v:path textpathok="true" />');
			lineStr['append']('<v:textpath on="true" string="');
			lineStr['append'](self['encodeHtmlAttribute'](text));
			lineStr['append']('" style="v-text-align:');
			lineStr['append'](textAlign);
			lineStr['append'](';font:');
			lineStr['append'](self['encodeHtmlAttribute'](fontStyleString));
			lineStr['append']('" /></v:line>');
			daStr = ''['join'](lineStr);
			self['insert']($p['getattr']($p['getattr'](self, 'context'), 'globalCompositeOperation'), daStr);
			return null;
		}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth'],['stroke']]);
		$cls_definition['drawText_'] = $method;
		$method = $pyjs__bind_method2('fillText', function(text, x, y, maxWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				x = arguments[2];
				y = arguments[3];
				maxWidth = arguments[4];
			}
			if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

			self['drawText_'](text, x, y, maxWidth, false);
			return null;
		}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
		$cls_definition['fillText'] = $method;
		$method = $pyjs__bind_method2('strokeText', function(text, x, y, maxWidth) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				x = arguments[2];
				y = arguments[3];
				maxWidth = arguments[4];
			}
			if (typeof maxWidth == 'undefined') maxWidth=arguments['callee']['__args__'][6][1];

			self['drawText_'](text, x, y, maxWidth, true);
			return null;
		}
	, 1, [null,null,['self'],['text'],['x'],['y'],['maxWidth', null]]);
		$cls_definition['strokeText'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GWTCanvasImplIE6', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.Canvas.GWTCanvasImplIE6 */


/* end module: pyjamas.Canvas.GWTCanvasImplIE6 */


/*
PYJS_DEPS: ['math', 'pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.Window', 'pyjamas.Canvas.GWTCanvasImplIEConsts.BUTT', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvasImplIEConsts', 'pyjamas.Canvas.GWTCanvasImplIEConsts.DESTINATION_OVER', 'pyjamas.Canvas.GWTCanvasImplIEConsts.SOURCE_OVER', 'pyjamas.Canvas.GWTCanvasConsts', 'pyjamas.Canvas.JSOStack.JSOStack', 'pyjamas.Canvas.JSOStack', 'pyjamas.Canvas.PathElement', 'pyjamas.Canvas.VMLContext.VMLContext', 'pyjamas.Canvas.VMLContext', 'pyjamas.Canvas.VMLContext.VMLStyle', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.CanvasGradientImplIE6.CanvasGradientImplIE6', 'pyjamas.Canvas.CanvasGradientImplIE6']
*/
