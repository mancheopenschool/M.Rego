/* start module: pyjsdl.draw */
$pyjs['loaded_modules']['pyjsdl.draw'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.draw']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.draw'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.draw'];
	$m['__repr__'] = function() { return '<module: pyjsdl.draw>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.draw';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjsdl']['draw'] = $pyjs['loaded_modules']['pyjsdl.draw'];
	try {
		$m.__track_lines__[1] = 'pyjsdl.draw.py, line 1:\n    #Pyjsdl - Copyright (C) 2013 James Garnon <http://gatc.ca/>';
		$m.__track_lines__[4] = 'pyjsdl.draw.py, line 4:\n    from math import pi';
		$m.__track_lines__[5] = 'pyjsdl.draw.py, line 5:\n    from rect import Rect';
		$m.__track_lines__[6] = 'pyjsdl.draw.py, line 6:\n    from surface import Surface';
		$m.__track_lines__[7] = 'pyjsdl.draw.py, line 7:\n    from color import Color';
		$m.__track_lines__[9] = "pyjsdl.draw.py, line 9:\n    __docformat__ = 'restructuredtext'";
		$m.__track_lines__[12] = 'pyjsdl.draw.py, line 12:\n    class Draw(object):';
		$m.__track_lines__[27] = 'pyjsdl.draw.py, line 27:\n    def __init__(self):';
		$m.__track_lines__[33] = 'pyjsdl.draw.py, line 33:\n    self.rad_deg = 180.0/pi';
		$m.__track_lines__[35] = 'pyjsdl.draw.py, line 35:\n    def rect(self, surface, color, rect, width=0):';
		$m.__track_lines__[41] = "pyjsdl.draw.py, line 41:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[42] = 'pyjsdl.draw.py, line 42:\n    _rect = rect';
		$m.__track_lines__[44] = 'pyjsdl.draw.py, line 44:\n    _rect = Rect(rect)';
		$m.__track_lines__[45] = 'pyjsdl.draw.py, line 45:\n    surface.beginPath()';
		$m.__track_lines__[46] = 'pyjsdl.draw.py, line 46:\n    if width:';
		$m.__track_lines__[47] = 'pyjsdl.draw.py, line 47:\n    surface.setLineWidth(width)';
		$m.__track_lines__[48] = "pyjsdl.draw.py, line 48:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[49] = 'pyjsdl.draw.py, line 49:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[51] = 'pyjsdl.draw.py, line 51:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[52] = 'pyjsdl.draw.py, line 52:\n    surface.rect(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[53] = 'pyjsdl.draw.py, line 53:\n    surface.stroke()';
		$m.__track_lines__[55] = "pyjsdl.draw.py, line 55:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[56] = 'pyjsdl.draw.py, line 56:\n    surface.setFillStyle(color)';
		$m.__track_lines__[58] = 'pyjsdl.draw.py, line 58:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[59] = 'pyjsdl.draw.py, line 59:\n    surface.fillRect(_rect.x, _rect.y, _rect.width, _rect.height)';
		$m.__track_lines__[60] = 'pyjsdl.draw.py, line 60:\n    if surface._display:';
		$m.__track_lines__[61] = 'pyjsdl.draw.py, line 61:\n    return surface._display._surface_rect.clip(_rect)';
		$m.__track_lines__[63] = 'pyjsdl.draw.py, line 63:\n    return surface.get_rect().clip(_rect)';
		$m.__track_lines__[65] = 'pyjsdl.draw.py, line 65:\n    def circle(self, surface, color, position, radius, width=0):';
		$m.__track_lines__[71] = 'pyjsdl.draw.py, line 71:\n    surface.beginPath()';
		$m.__track_lines__[72] = 'pyjsdl.draw.py, line 72:\n    surface.arc(position[0], position[1], radius, 0, 2*pi, False)';
		$m.__track_lines__[73] = 'pyjsdl.draw.py, line 73:\n    if width:';
		$m.__track_lines__[74] = 'pyjsdl.draw.py, line 74:\n    surface.setLineWidth(width)';
		$m.__track_lines__[75] = "pyjsdl.draw.py, line 75:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[76] = 'pyjsdl.draw.py, line 76:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[78] = 'pyjsdl.draw.py, line 78:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[79] = 'pyjsdl.draw.py, line 79:\n    surface.stroke()';
		$m.__track_lines__[81] = "pyjsdl.draw.py, line 81:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[82] = 'pyjsdl.draw.py, line 82:\n    surface.setFillStyle(color)';
		$m.__track_lines__[84] = 'pyjsdl.draw.py, line 84:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[85] = 'pyjsdl.draw.py, line 85:\n    surface.fill()';
		$m.__track_lines__[86] = 'pyjsdl.draw.py, line 86:\n    if surface._display:';
		$m.__track_lines__[87] = 'pyjsdl.draw.py, line 87:\n    return surface._display._surface_rect.clip( Rect(position[0]-radius, position[1]-radius, 2*radius, 2*radius) )';
		$m.__track_lines__[89] = 'pyjsdl.draw.py, line 89:\n    return surface.get_rect().clip( Rect(position[0]-radius, position[1]-radius, 2*radius, 2*radius) )';
		$m.__track_lines__[91] = 'pyjsdl.draw.py, line 91:\n    def ellipse(self, surface, color, rect, width=0):';
		$m.__track_lines__[97] = "pyjsdl.draw.py, line 97:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[98] = 'pyjsdl.draw.py, line 98:\n    _rect = rect';
		$m.__track_lines__[100] = 'pyjsdl.draw.py, line 100:\n    _rect = Rect(rect)';
		$m.__track_lines__[101] = 'pyjsdl.draw.py, line 101:\n    surface.saveContext()';
		$m.__track_lines__[102] = 'pyjsdl.draw.py, line 102:\n    surface.translate(_rect.x+int(_rect.width/2), _rect.y+int(_rect.height/2))';
		$m.__track_lines__[103] = 'pyjsdl.draw.py, line 103:\n    if _rect.width >= _rect.height:';
		$m.__track_lines__[104] = 'pyjsdl.draw.py, line 104:\n    surface.scale(_rect.width/_rect.height, 1)';
		$m.__track_lines__[105] = 'pyjsdl.draw.py, line 105:\n    radius = _rect.height/2';
		$m.__track_lines__[107] = 'pyjsdl.draw.py, line 107:\n    surface.scale(1, _rect.height/_rect.width)';
		$m.__track_lines__[108] = 'pyjsdl.draw.py, line 108:\n    radius = _rect.width/2';
		$m.__track_lines__[109] = 'pyjsdl.draw.py, line 109:\n    surface.beginPath()';
		$m.__track_lines__[110] = 'pyjsdl.draw.py, line 110:\n    surface.arc(0, 0, radius, 0, 2*pi, False)';
		$m.__track_lines__[111] = 'pyjsdl.draw.py, line 111:\n    if width:';
		$m.__track_lines__[112] = 'pyjsdl.draw.py, line 112:\n    surface.setLineWidth(width)';
		$m.__track_lines__[113] = "pyjsdl.draw.py, line 113:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[114] = 'pyjsdl.draw.py, line 114:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[116] = 'pyjsdl.draw.py, line 116:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[117] = 'pyjsdl.draw.py, line 117:\n    surface.stroke()';
		$m.__track_lines__[119] = "pyjsdl.draw.py, line 119:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[120] = 'pyjsdl.draw.py, line 120:\n    surface.setFillStyle(color)';
		$m.__track_lines__[122] = 'pyjsdl.draw.py, line 122:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[123] = 'pyjsdl.draw.py, line 123:\n    surface.fill()';
		$m.__track_lines__[124] = 'pyjsdl.draw.py, line 124:\n    surface.restoreContext()';
		$m.__track_lines__[125] = 'pyjsdl.draw.py, line 125:\n    if surface._display:';
		$m.__track_lines__[126] = 'pyjsdl.draw.py, line 126:\n    return surface._display._surface_rect.clip(_rect)';
		$m.__track_lines__[128] = 'pyjsdl.draw.py, line 128:\n    return surface.get_rect().clip(_rect)';
		$m.__track_lines__[130] = 'pyjsdl.draw.py, line 130:\n    def arc(self, surface, color, rect, start_angle, stop_angle, width=1):';
		$m.__track_lines__[136] = "pyjsdl.draw.py, line 136:\n    if hasattr(rect, 'width'):";
		$m.__track_lines__[137] = 'pyjsdl.draw.py, line 137:\n    _rect = rect';
		$m.__track_lines__[139] = 'pyjsdl.draw.py, line 139:\n    _rect = Rect(rect)';
		$m.__track_lines__[140] = 'pyjsdl.draw.py, line 140:\n    if _rect.width == _rect.height:';
		$m.__track_lines__[141] = 'pyjsdl.draw.py, line 141:\n    surface.beginPath()';
		$m.__track_lines__[142] = 'pyjsdl.draw.py, line 142:\n    surface.arc(_rect.x+int(_rect.width/2), _rect.y+int(_rect.height/2), int(_rect.width/2), -start_angle, -stop_angle, True)';
		$m.__track_lines__[143] = 'pyjsdl.draw.py, line 143:\n    if width:';
		$m.__track_lines__[144] = 'pyjsdl.draw.py, line 144:\n    surface.setLineWidth(width)';
		$m.__track_lines__[145] = "pyjsdl.draw.py, line 145:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[146] = 'pyjsdl.draw.py, line 146:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[148] = 'pyjsdl.draw.py, line 148:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[149] = 'pyjsdl.draw.py, line 149:\n    surface.stroke()';
		$m.__track_lines__[151] = 'pyjsdl.draw.py, line 151:\n    surface.closePath()';
		$m.__track_lines__[152] = "pyjsdl.draw.py, line 152:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[153] = 'pyjsdl.draw.py, line 153:\n    surface.setFillStyle(color)';
		$m.__track_lines__[155] = 'pyjsdl.draw.py, line 155:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[156] = 'pyjsdl.draw.py, line 156:\n    surface.fill()';
		$m.__track_lines__[158] = 'pyjsdl.draw.py, line 158:\n    if _rect.width < _rect.height:';
		$m.__track_lines__[159] = 'pyjsdl.draw.py, line 159:\n    dim = _rect.height';
		$m.__track_lines__[161] = 'pyjsdl.draw.py, line 161:\n    dim = _rect.width';
		$m.__track_lines__[162] = 'pyjsdl.draw.py, line 162:\n    surf = Surface((dim,dim))';
		$m.__track_lines__[163] = 'pyjsdl.draw.py, line 163:\n    surf.beginPath()';
		$m.__track_lines__[164] = 'pyjsdl.draw.py, line 164:\n    xdim = int(dim/2)';
		$m.__track_lines__[165] = 'pyjsdl.draw.py, line 165:\n    surf.arc(xdim, xdim, xdim, -start_angle, -stop_angle, True)';
		$m.__track_lines__[166] = 'pyjsdl.draw.py, line 166:\n    if width:';
		$m.__track_lines__[167] = 'pyjsdl.draw.py, line 167:\n    surf.setLineWidth(width)';
		$m.__track_lines__[168] = "pyjsdl.draw.py, line 168:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[169] = 'pyjsdl.draw.py, line 169:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[171] = 'pyjsdl.draw.py, line 171:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[172] = 'pyjsdl.draw.py, line 172:\n    surf.stroke()';
		$m.__track_lines__[174] = 'pyjsdl.draw.py, line 174:\n    surface.closePath()';
		$m.__track_lines__[175] = "pyjsdl.draw.py, line 175:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[176] = 'pyjsdl.draw.py, line 176:\n    surface.setFillStyle(color)';
		$m.__track_lines__[178] = 'pyjsdl.draw.py, line 178:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[179] = 'pyjsdl.draw.py, line 179:\n    surf.fill()';
		$m.__track_lines__[180] = 'pyjsdl.draw.py, line 180:\n    surface.drawImage(surf.canvas, 0, 0, dim, dim, _rect.x, _rect.y, _rect.width, _rect.height)    #pyjs0.8 *.canvas';
		$m.__track_lines__[181] = 'pyjsdl.draw.py, line 181:\n    if surface._display:';
		$m.__track_lines__[182] = 'pyjsdl.draw.py, line 182:\n    return surface._display._surface_rect.clip(_rect)';
		$m.__track_lines__[184] = 'pyjsdl.draw.py, line 184:\n    return surface.get_rect().clip(_rect)';
		$m.__track_lines__[186] = 'pyjsdl.draw.py, line 186:\n    def polygon(self, surface, color, pointlist, width=0):';
		$m.__track_lines__[192] = 'pyjsdl.draw.py, line 192:\n    surface.beginPath()';
		$m.__track_lines__[193] = 'pyjsdl.draw.py, line 193:\n    surface.moveTo(*pointlist[0])';
		$m.__track_lines__[194] = 'pyjsdl.draw.py, line 194:\n    for point in pointlist[1:]:';
		$m.__track_lines__[195] = 'pyjsdl.draw.py, line 195:\n    surface.lineTo(*point)';
		$m.__track_lines__[196] = 'pyjsdl.draw.py, line 196:\n    surface.closePath()';
		$m.__track_lines__[197] = 'pyjsdl.draw.py, line 197:\n    if width:';
		$m.__track_lines__[198] = 'pyjsdl.draw.py, line 198:\n    surface.setLineWidth(width)';
		$m.__track_lines__[199] = "pyjsdl.draw.py, line 199:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[200] = 'pyjsdl.draw.py, line 200:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[202] = 'pyjsdl.draw.py, line 202:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[203] = 'pyjsdl.draw.py, line 203:\n    surface.stroke()';
		$m.__track_lines__[205] = "pyjsdl.draw.py, line 205:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[206] = 'pyjsdl.draw.py, line 206:\n    surface.setFillStyle(color)';
		$m.__track_lines__[208] = 'pyjsdl.draw.py, line 208:\n    surface.setFillStyle(Color(color))';
		$m.__track_lines__[209] = 'pyjsdl.draw.py, line 209:\n    surface.fill()';
		$m.__track_lines__[210] = 'pyjsdl.draw.py, line 210:\n    xpts = [pt[0] for pt in pointlist]';
		$m.__track_lines__[211] = 'pyjsdl.draw.py, line 211:\n    ypts = [pt[1] for pt in pointlist]';
		$m.__track_lines__[212] = 'pyjsdl.draw.py, line 212:\n    xmin, xmax = min(xpts), max(xpts)';
		$m.__track_lines__[213] = 'pyjsdl.draw.py, line 213:\n    ymin, ymax = min(ypts), max(ypts)';
		$m.__track_lines__[214] = 'pyjsdl.draw.py, line 214:\n    if surface._display:';
		$m.__track_lines__[215] = 'pyjsdl.draw.py, line 215:\n    return surface._display._surface_rect.clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[217] = 'pyjsdl.draw.py, line 217:\n    return surface.get_rect().clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[219] = 'pyjsdl.draw.py, line 219:\n    def line(self, surface, color, point1, point2, width=1):';
		$m.__track_lines__[225] = 'pyjsdl.draw.py, line 225:\n    surface.beginPath()';
		$m.__track_lines__[226] = 'pyjsdl.draw.py, line 226:\n    surface.moveTo(*point1)';
		$m.__track_lines__[227] = 'pyjsdl.draw.py, line 227:\n    surface.lineTo(*point2)';
		$m.__track_lines__[228] = 'pyjsdl.draw.py, line 228:\n    surface.setLineWidth(width)';
		$m.__track_lines__[229] = "pyjsdl.draw.py, line 229:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[230] = 'pyjsdl.draw.py, line 230:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[232] = 'pyjsdl.draw.py, line 232:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[233] = 'pyjsdl.draw.py, line 233:\n    surface.stroke()';
		$m.__track_lines__[234] = 'pyjsdl.draw.py, line 234:\n    xpts = [pt[0] for pt in (point1,point2)]';
		$m.__track_lines__[235] = 'pyjsdl.draw.py, line 235:\n    ypts = [pt[1] for pt in (point1,point2)]';
		$m.__track_lines__[236] = 'pyjsdl.draw.py, line 236:\n    xmin, xmax = min(xpts), max(xpts)';
		$m.__track_lines__[237] = 'pyjsdl.draw.py, line 237:\n    ymin, ymax = min(ypts), max(ypts)';
		$m.__track_lines__[238] = 'pyjsdl.draw.py, line 238:\n    if surface._display:';
		$m.__track_lines__[239] = 'pyjsdl.draw.py, line 239:\n    return surface._display._surface_rect.clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[241] = 'pyjsdl.draw.py, line 241:\n    return surface.get_rect().clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[243] = 'pyjsdl.draw.py, line 243:\n    def lines(self, surface, color, closed, pointlist, width=1):';
		$m.__track_lines__[249] = 'pyjsdl.draw.py, line 249:\n    surface.beginPath()';
		$m.__track_lines__[250] = 'pyjsdl.draw.py, line 250:\n    surface.moveTo(*pointlist[0])';
		$m.__track_lines__[251] = 'pyjsdl.draw.py, line 251:\n    for point in pointlist[1:]:';
		$m.__track_lines__[252] = 'pyjsdl.draw.py, line 252:\n    surface.lineTo(*point)';
		$m.__track_lines__[253] = 'pyjsdl.draw.py, line 253:\n    if closed:';
		$m.__track_lines__[254] = 'pyjsdl.draw.py, line 254:\n    surface.closePath()';
		$m.__track_lines__[255] = 'pyjsdl.draw.py, line 255:\n    surface.setLineWidth(width)';
		$m.__track_lines__[256] = "pyjsdl.draw.py, line 256:\n    if hasattr(color, 'a'):";
		$m.__track_lines__[257] = 'pyjsdl.draw.py, line 257:\n    surface.setStrokeStyle(color)';
		$m.__track_lines__[259] = 'pyjsdl.draw.py, line 259:\n    surface.setStrokeStyle(Color(color))';
		$m.__track_lines__[260] = 'pyjsdl.draw.py, line 260:\n    surface.stroke()';
		$m.__track_lines__[261] = 'pyjsdl.draw.py, line 261:\n    xpts = [pt[0] for pt in pointlist]';
		$m.__track_lines__[262] = 'pyjsdl.draw.py, line 262:\n    ypts = [pt[1] for pt in pointlist]';
		$m.__track_lines__[263] = 'pyjsdl.draw.py, line 263:\n    xmin, xmax = min(xpts), max(xpts)';
		$m.__track_lines__[264] = 'pyjsdl.draw.py, line 264:\n    ymin, ymax = min(ypts), max(ypts)';
		$m.__track_lines__[265] = 'pyjsdl.draw.py, line 265:\n    if surface._display:';
		$m.__track_lines__[266] = 'pyjsdl.draw.py, line 266:\n    return surface._display._surface_rect.clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[268] = 'pyjsdl.draw.py, line 268:\n    return surface.get_rect().clip( Rect(xmin, ymin, xmax-xmin+1, ymax-ymin+1) )';
		$m.__track_lines__[270] = 'pyjsdl.draw.py, line 270:\n    def aaline(self, surface, color, point1, point2, blend=1):';
		$m.__track_lines__[274] = 'pyjsdl.draw.py, line 274:\n    rect = self.line(surface, color, point1, point2, blend)';
		$m.__track_lines__[275] = 'pyjsdl.draw.py, line 275:\n    return rect';
		$m.__track_lines__[277] = 'pyjsdl.draw.py, line 277:\n    def aalines(self, surface, color, closed, pointlist, blend=1):';
		$m.__track_lines__[281] = 'pyjsdl.draw.py, line 281:\n    rect = self.lines(surface, color, closed, pointlist, blend)';
		$m.__track_lines__[282] = 'pyjsdl.draw.py, line 282:\n    return rect';

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs['track']['module']='pyjsdl.draw';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=4;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=5;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Rect'] = $p['___import___']('rect.Rect', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=6;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Surface'] = $p['___import___']('surface.Surface', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=7;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Color'] = $p['___import___']('color.Color', 'pyjsdl', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=9;
		$m['__docformat__'] = 'restructuredtext';
		$pyjs['track']['lineno']=12;
		$m['Draw'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjsdl.draw';
			$cls_definition['__md5__'] = '11c2724c1ce34149ea030e96a2246cd9';
			$pyjs['track']['lineno']=27;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $div2,$div1;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=27;
				$pyjs['track']['lineno']=33;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('rad_deg', (typeof ($div1=180.0)==typeof ($div2=$m['pi']) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))) : $p['setattr'](self, 'rad_deg', (typeof ($div1=180.0)==typeof ($div2=$m['pi']) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2))); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=35;
			$method = $pyjs__bind_method2('rect', function(surface, color, rect, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					rect = arguments[3];
					width = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
				var _rect;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=35;
				$pyjs['track']['lineno']=41;
				if ($p['bool']($p['hasattr'](rect, 'width'))) {
					$pyjs['track']['lineno']=42;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=44;
					_rect = $m['Rect'](rect);
				}
				$pyjs['track']['lineno']=45;
				surface['beginPath']();
				$pyjs['track']['lineno']=46;
				if ($p['bool'](width)) {
					$pyjs['track']['lineno']=47;
					surface['setLineWidth'](width);
					$pyjs['track']['lineno']=48;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=49;
						surface['setStrokeStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=51;
						surface['setStrokeStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=52;
					surface['rect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
					$pyjs['track']['lineno']=53;
					surface['stroke']();
				}
				else {
					$pyjs['track']['lineno']=55;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=56;
						surface['setFillStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=58;
						surface['setFillStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=59;
					surface['fillRect']($p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
				}
				$pyjs['track']['lineno']=60;
				if ($p['bool']($p['getattr'](surface, '_display'))) {
					$pyjs['track']['lineno']=61;
					$pyjs['track']['lineno']=61;
					var $pyjs__ret = surface['_display']['_surface_rect']['clip'](_rect);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=63;
					$pyjs['track']['lineno']=63;
					var $pyjs__ret = surface['get_rect']()['clip'](_rect);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', $constant_int_0]]);
			$cls_definition['rect'] = $method;
			$pyjs['track']['lineno']=65;
			$method = $pyjs__bind_method2('circle', function(surface, color, position, radius, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					position = arguments[3];
					radius = arguments[4];
					width = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
				var $sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$mul10;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=65;
				$pyjs['track']['lineno']=71;
				surface['beginPath']();
				$pyjs['track']['lineno']=72;
				surface['arc'](position['__getitem__']($constant_int_0), position['__getitem__']($constant_int_1), radius, $constant_int_0, (typeof ($mul1=$constant_int_2)==typeof ($mul2=$m['pi']) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)), false);
				$pyjs['track']['lineno']=73;
				if ($p['bool'](width)) {
					$pyjs['track']['lineno']=74;
					surface['setLineWidth'](width);
					$pyjs['track']['lineno']=75;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=76;
						surface['setStrokeStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=78;
						surface['setStrokeStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=79;
					surface['stroke']();
				}
				else {
					$pyjs['track']['lineno']=81;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=82;
						surface['setFillStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=84;
						surface['setFillStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=85;
					surface['fill']();
				}
				$pyjs['track']['lineno']=86;
				if ($p['bool']($p['getattr'](surface, '_display'))) {
					$pyjs['track']['lineno']=87;
					$pyjs['track']['lineno']=87;
					var $pyjs__ret = surface['_display']['_surface_rect']['clip']($m['Rect']($p['__op_sub']($sub1=position['__getitem__']($constant_int_0),$sub2=radius), $p['__op_sub']($sub3=position['__getitem__']($constant_int_1),$sub4=radius), (typeof ($mul3=$constant_int_2)==typeof ($mul4=radius) && typeof $mul3=='number'?
						$mul3*$mul4:
						$p['op_mul']($mul3,$mul4)), (typeof ($mul5=$constant_int_2)==typeof ($mul6=radius) && typeof $mul5=='number'?
						$mul5*$mul6:
						$p['op_mul']($mul5,$mul6))));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=89;
					$pyjs['track']['lineno']=89;
					var $pyjs__ret = surface['get_rect']()['clip']($m['Rect']($p['__op_sub']($sub5=position['__getitem__']($constant_int_0),$sub6=radius), $p['__op_sub']($sub7=position['__getitem__']($constant_int_1),$sub8=radius), (typeof ($mul7=$constant_int_2)==typeof ($mul8=radius) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)), (typeof ($mul9=$constant_int_2)==typeof ($mul10=radius) && typeof $mul9=='number'?
						$mul9*$mul10:
						$p['op_mul']($mul9,$mul10))));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['position'],['radius'],['width', $constant_int_0]]);
			$cls_definition['circle'] = $method;
			$pyjs['track']['lineno']=91;
			$method = $pyjs__bind_method2('ellipse', function(surface, color, rect, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					rect = arguments[3];
					width = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
				var radius,$div14,$div10,$div11,$div12,$div13,$div8,$div9,$div3,$div6,$div7,$div4,$div5,_rect,$mul12,$mul11,$add2,$add3,$add1,$add4;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=91;
				$pyjs['track']['lineno']=97;
				if ($p['bool']($p['hasattr'](rect, 'width'))) {
					$pyjs['track']['lineno']=98;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=100;
					_rect = $m['Rect'](rect);
				}
				$pyjs['track']['lineno']=101;
				surface['saveContext']();
				$pyjs['track']['lineno']=102;
				surface['translate']($p['__op_add']($add1=$p['getattr'](_rect, 'x'),$add2=$p['int']((typeof ($div3=$p['getattr'](_rect, 'width'))==typeof ($div4=$constant_int_2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					$p['op_div']($div3,$div4)))), $p['__op_add']($add3=$p['getattr'](_rect, 'y'),$add4=$p['int']((typeof ($div5=$p['getattr'](_rect, 'height'))==typeof ($div6=$constant_int_2) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)))));
				$pyjs['track']['lineno']=103;
				if ($p['bool'](((($p['cmp']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')))|1) == 1))) {
					$pyjs['track']['lineno']=104;
					surface['scale']((typeof ($div7=$p['getattr'](_rect, 'width'))==typeof ($div8=$p['getattr'](_rect, 'height')) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)), $constant_int_1);
					$pyjs['track']['lineno']=105;
					radius = (typeof ($div9=$p['getattr'](_rect, 'height'))==typeof ($div10=$constant_int_2) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10));
				}
				else {
					$pyjs['track']['lineno']=107;
					surface['scale']($constant_int_1, (typeof ($div11=$p['getattr'](_rect, 'height'))==typeof ($div12=$p['getattr'](_rect, 'width')) && typeof $div11=='number' && $div12 !== 0?
						$div11/$div12:
						$p['op_div']($div11,$div12)));
					$pyjs['track']['lineno']=108;
					radius = (typeof ($div13=$p['getattr'](_rect, 'width'))==typeof ($div14=$constant_int_2) && typeof $div13=='number' && $div14 !== 0?
						$div13/$div14:
						$p['op_div']($div13,$div14));
				}
				$pyjs['track']['lineno']=109;
				surface['beginPath']();
				$pyjs['track']['lineno']=110;
				surface['arc']($constant_int_0, $constant_int_0, radius, $constant_int_0, (typeof ($mul11=$constant_int_2)==typeof ($mul12=$m['pi']) && typeof $mul11=='number'?
					$mul11*$mul12:
					$p['op_mul']($mul11,$mul12)), false);
				$pyjs['track']['lineno']=111;
				if ($p['bool'](width)) {
					$pyjs['track']['lineno']=112;
					surface['setLineWidth'](width);
					$pyjs['track']['lineno']=113;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=114;
						surface['setStrokeStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=116;
						surface['setStrokeStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=117;
					surface['stroke']();
				}
				else {
					$pyjs['track']['lineno']=119;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=120;
						surface['setFillStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=122;
						surface['setFillStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=123;
					surface['fill']();
				}
				$pyjs['track']['lineno']=124;
				surface['restoreContext']();
				$pyjs['track']['lineno']=125;
				if ($p['bool']($p['getattr'](surface, '_display'))) {
					$pyjs['track']['lineno']=126;
					$pyjs['track']['lineno']=126;
					var $pyjs__ret = surface['_display']['_surface_rect']['clip'](_rect);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=128;
					$pyjs['track']['lineno']=128;
					var $pyjs__ret = surface['get_rect']()['clip'](_rect);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['width', $constant_int_0]]);
			$cls_definition['ellipse'] = $method;
			$pyjs['track']['lineno']=130;
			$method = $pyjs__bind_method2('arc', function(surface, color, rect, start_angle, stop_angle, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 7, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					rect = arguments[3];
					start_angle = arguments[4];
					stop_angle = arguments[5];
					width = arguments[6];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 6 || arguments['length'] > 7)) $pyjs__exception_func_param(arguments['callee']['__name__'], 6, 7, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][8][1];
				var $div18,$div19,$div15,$div17,surf,$div21,dim,xdim,_rect,$div20,$div22,$add6,$add7,$add5,$add8,$div16;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=136;
				if ($p['bool']($p['hasattr'](rect, 'width'))) {
					$pyjs['track']['lineno']=137;
					_rect = rect;
				}
				else {
					$pyjs['track']['lineno']=139;
					_rect = $m['Rect'](rect);
				}
				$pyjs['track']['lineno']=140;
				if ($p['bool']($p['op_eq']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')))) {
					$pyjs['track']['lineno']=141;
					surface['beginPath']();
					$pyjs['track']['lineno']=142;
					surface['arc']($p['__op_add']($add5=$p['getattr'](_rect, 'x'),$add6=$p['int']((typeof ($div15=$p['getattr'](_rect, 'width'))==typeof ($div16=$constant_int_2) && typeof $div15=='number' && $div16 !== 0?
						$div15/$div16:
						$p['op_div']($div15,$div16)))), $p['__op_add']($add7=$p['getattr'](_rect, 'y'),$add8=$p['int']((typeof ($div17=$p['getattr'](_rect, 'height'))==typeof ($div18=$constant_int_2) && typeof $div17=='number' && $div18 !== 0?
						$div17/$div18:
						$p['op_div']($div17,$div18)))), $p['int']((typeof ($div19=$p['getattr'](_rect, 'width'))==typeof ($div20=$constant_int_2) && typeof $div19=='number' && $div20 !== 0?
						$div19/$div20:
						$p['op_div']($div19,$div20))), (typeof ($usub1=start_angle)=='number'?
						-$usub1:
						$p['op_usub']($usub1)), (typeof ($usub2=stop_angle)=='number'?
						-$usub2:
						$p['op_usub']($usub2)), true);
					$pyjs['track']['lineno']=143;
					if ($p['bool'](width)) {
						$pyjs['track']['lineno']=144;
						surface['setLineWidth'](width);
						$pyjs['track']['lineno']=145;
						if ($p['bool']($p['hasattr'](color, 'a'))) {
							$pyjs['track']['lineno']=146;
							surface['setStrokeStyle'](color);
						}
						else {
							$pyjs['track']['lineno']=148;
							surface['setStrokeStyle']($m['Color'](color));
						}
						$pyjs['track']['lineno']=149;
						surface['stroke']();
					}
					else {
						$pyjs['track']['lineno']=151;
						surface['closePath']();
						$pyjs['track']['lineno']=152;
						if ($p['bool']($p['hasattr'](color, 'a'))) {
							$pyjs['track']['lineno']=153;
							surface['setFillStyle'](color);
						}
						else {
							$pyjs['track']['lineno']=155;
							surface['setFillStyle']($m['Color'](color));
						}
						$pyjs['track']['lineno']=156;
						surface['fill']();
					}
				}
				else {
					$pyjs['track']['lineno']=158;
					if ($p['bool'](($p['cmp']($p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height')) == -1))) {
						$pyjs['track']['lineno']=159;
						dim = $p['getattr'](_rect, 'height');
					}
					else {
						$pyjs['track']['lineno']=161;
						dim = $p['getattr'](_rect, 'width');
					}
					$pyjs['track']['lineno']=162;
					surf = $m['Surface']($p['tuple']([dim, dim]));
					$pyjs['track']['lineno']=163;
					surf['beginPath']();
					$pyjs['track']['lineno']=164;
					xdim = $p['int']((typeof ($div21=dim)==typeof ($div22=$constant_int_2) && typeof $div21=='number' && $div22 !== 0?
						$div21/$div22:
						$p['op_div']($div21,$div22)));
					$pyjs['track']['lineno']=165;
					surf['arc'](xdim, xdim, xdim, (typeof ($usub3=start_angle)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), (typeof ($usub4=stop_angle)=='number'?
						-$usub4:
						$p['op_usub']($usub4)), true);
					$pyjs['track']['lineno']=166;
					if ($p['bool'](width)) {
						$pyjs['track']['lineno']=167;
						surf['setLineWidth'](width);
						$pyjs['track']['lineno']=168;
						if ($p['bool']($p['hasattr'](color, 'a'))) {
							$pyjs['track']['lineno']=169;
							surface['setStrokeStyle'](color);
						}
						else {
							$pyjs['track']['lineno']=171;
							surface['setStrokeStyle']($m['Color'](color));
						}
						$pyjs['track']['lineno']=172;
						surf['stroke']();
					}
					else {
						$pyjs['track']['lineno']=174;
						surface['closePath']();
						$pyjs['track']['lineno']=175;
						if ($p['bool']($p['hasattr'](color, 'a'))) {
							$pyjs['track']['lineno']=176;
							surface['setFillStyle'](color);
						}
						else {
							$pyjs['track']['lineno']=178;
							surface['setFillStyle']($m['Color'](color));
						}
						$pyjs['track']['lineno']=179;
						surf['fill']();
					}
					$pyjs['track']['lineno']=180;
					surface['drawImage']($p['getattr'](surf, 'canvas'), $constant_int_0, $constant_int_0, dim, dim, $p['getattr'](_rect, 'x'), $p['getattr'](_rect, 'y'), $p['getattr'](_rect, 'width'), $p['getattr'](_rect, 'height'));
				}
				$pyjs['track']['lineno']=181;
				if ($p['bool']($p['getattr'](surface, '_display'))) {
					$pyjs['track']['lineno']=182;
					$pyjs['track']['lineno']=182;
					var $pyjs__ret = surface['_display']['_surface_rect']['clip'](_rect);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=184;
					$pyjs['track']['lineno']=184;
					var $pyjs__ret = surface['get_rect']()['clip'](_rect);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['rect'],['start_angle'],['stop_angle'],['width', $constant_int_1]]);
			$cls_definition['arc'] = $method;
			$pyjs['track']['lineno']=186;
			$method = $pyjs__bind_method2('polygon', function(surface, color, pointlist, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 3 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					pointlist = arguments[3];
					width = arguments[4];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 5, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];
				var point,$iter1_iter,xmin,ymin,ymax,$sub9,$iter1_array,xpts,$iter1_nextval,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$add14,$add15,$add16,$add10,$add11,$add12,$add13,ypts,$iter1_type,$iter1_idx,xmax,$pyjs__trackstack_size_1,$add9;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':186};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=186;
				$pyjs['track']['lineno']=192;
				surface['beginPath']();
				$pyjs['track']['lineno']=193;
				$pyjs_kwargs_call(surface, 'moveTo', pointlist['__getitem__']($constant_int_0), null, [{}]);
				$pyjs['track']['lineno']=194;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = $p['__getslice'](pointlist, $constant_int_1, null);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					point = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=195;
					$pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=196;
				surface['closePath']();
				$pyjs['track']['lineno']=197;
				if ($p['bool'](width)) {
					$pyjs['track']['lineno']=198;
					surface['setLineWidth'](width);
					$pyjs['track']['lineno']=199;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=200;
						surface['setStrokeStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=202;
						surface['setStrokeStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=203;
					surface['stroke']();
				}
				else {
					$pyjs['track']['lineno']=205;
					if ($p['bool']($p['hasattr'](color, 'a'))) {
						$pyjs['track']['lineno']=206;
						surface['setFillStyle'](color);
					}
					else {
						$pyjs['track']['lineno']=208;
						surface['setFillStyle']($m['Color'](color));
					}
					$pyjs['track']['lineno']=209;
					surface['fill']();
				}
				$pyjs['track']['lineno']=210;
				xpts = function(){
					var $iter2_nextval,$iter2_type,pt,$iter2_iter,$collcomp1,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = pointlist;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					pt = $iter2_nextval['$nextval'];
					$collcomp1['append'](pt['__getitem__']($constant_int_0));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp1;}();
				$pyjs['track']['lineno']=211;
				ypts = function(){
					var $iter3_idx,pt,$iter3_nextval,$iter3_array,$collcomp2,$iter3_iter,$iter3_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = pointlist;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					pt = $iter3_nextval['$nextval'];
					$collcomp2['append'](pt['__getitem__']($constant_int_1));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp2;}();
				$pyjs['track']['lineno']=212;
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
				xmin = $tupleassign1[0];
				xmax = $tupleassign1[1];
				$pyjs['track']['lineno']=213;
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
				ymin = $tupleassign2[0];
				ymax = $tupleassign2[1];
				$pyjs['track']['lineno']=214;
				if ($p['bool']($p['getattr'](surface, '_display'))) {
					$pyjs['track']['lineno']=215;
					$pyjs['track']['lineno']=215;
					var $pyjs__ret = surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add9=$p['__op_sub']($sub9=xmax,$sub10=xmin),$add10=$constant_int_1), $p['__op_add']($add11=$p['__op_sub']($sub11=ymax,$sub12=ymin),$add12=$constant_int_1)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=217;
					$pyjs['track']['lineno']=217;
					var $pyjs__ret = surface['get_rect']()['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add13=$p['__op_sub']($sub13=xmax,$sub14=xmin),$add14=$constant_int_1), $p['__op_add']($add15=$p['__op_sub']($sub15=ymax,$sub16=ymin),$add16=$constant_int_1)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['pointlist'],['width', $constant_int_0]]);
			$cls_definition['polygon'] = $method;
			$pyjs['track']['lineno']=219;
			$method = $pyjs__bind_method2('line', function(surface, color, point1, point2, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					point1 = arguments[3];
					point2 = arguments[4];
					width = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
				var $sub22,$sub23,$sub20,$sub21,$sub24,$sub18,xmin,ymin,ymax,$add21,$add20,$add22,$add24,$sub19,xpts,$sub17,$add17,ypts,$add18,$add19,xmax,$add23;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':219};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=219;
				$pyjs['track']['lineno']=225;
				surface['beginPath']();
				$pyjs['track']['lineno']=226;
				$pyjs_kwargs_call(surface, 'moveTo', point1, null, [{}]);
				$pyjs['track']['lineno']=227;
				$pyjs_kwargs_call(surface, 'lineTo', point2, null, [{}]);
				$pyjs['track']['lineno']=228;
				surface['setLineWidth'](width);
				$pyjs['track']['lineno']=229;
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					$pyjs['track']['lineno']=230;
					surface['setStrokeStyle'](color);
				}
				else {
					$pyjs['track']['lineno']=232;
					surface['setStrokeStyle']($m['Color'](color));
				}
				$pyjs['track']['lineno']=233;
				surface['stroke']();
				$pyjs['track']['lineno']=234;
				xpts = function(){
					var pt,$iter4_nextval,$collcomp3,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = $p['tuple']([point1, point2]);
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					pt = $iter4_nextval['$nextval'];
					$collcomp3['append'](pt['__getitem__']($constant_int_0));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp3;}();
				$pyjs['track']['lineno']=235;
				ypts = function(){
					var $iter5_nextval,pt,$iter5_idx,$collcomp4,$iter5_iter,$iter5_array,$iter5_type,$pyjs__trackstack_size_1;
	$collcomp4 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = $p['tuple']([point1, point2]);
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					pt = $iter5_nextval['$nextval'];
					$collcomp4['append'](pt['__getitem__']($constant_int_1));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp4;}();
				$pyjs['track']['lineno']=236;
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
				xmin = $tupleassign3[0];
				xmax = $tupleassign3[1];
				$pyjs['track']['lineno']=237;
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
				ymin = $tupleassign4[0];
				ymax = $tupleassign4[1];
				$pyjs['track']['lineno']=238;
				if ($p['bool']($p['getattr'](surface, '_display'))) {
					$pyjs['track']['lineno']=239;
					$pyjs['track']['lineno']=239;
					var $pyjs__ret = surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add17=$p['__op_sub']($sub17=xmax,$sub18=xmin),$add18=$constant_int_1), $p['__op_add']($add19=$p['__op_sub']($sub19=ymax,$sub20=ymin),$add20=$constant_int_1)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=241;
					$pyjs['track']['lineno']=241;
					var $pyjs__ret = surface['get_rect']()['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add21=$p['__op_sub']($sub21=xmax,$sub22=xmin),$add22=$constant_int_1), $p['__op_add']($add23=$p['__op_sub']($sub23=ymax,$sub24=ymin),$add24=$constant_int_1)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['width', $constant_int_1]]);
			$cls_definition['line'] = $method;
			$pyjs['track']['lineno']=243;
			$method = $pyjs__bind_method2('lines', function(surface, color, closed, pointlist, width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					closed = arguments[3];
					pointlist = arguments[4];
					width = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof width == 'undefined') width=arguments['callee']['__args__'][7][1];
				var $sub26,$sub27,point,$sub28,$sub29,$sub32,xmin,$iter6_iter,ymin,$iter6_nextval,$add29,$add28,ymax,$sub25,$add25,$add27,$add26,$iter6_type,$sub31,$sub30,xpts,$iter6_idx,$iter6_array,ypts,$add32,$add30,$add31,xmax,$pyjs__trackstack_size_1;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=249;
				surface['beginPath']();
				$pyjs['track']['lineno']=250;
				$pyjs_kwargs_call(surface, 'moveTo', pointlist['__getitem__']($constant_int_0), null, [{}]);
				$pyjs['track']['lineno']=251;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = $p['__getslice'](pointlist, $constant_int_1, null);
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					point = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=252;
					$pyjs_kwargs_call(surface, 'lineTo', point, null, [{}]);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=253;
				if ($p['bool'](closed)) {
					$pyjs['track']['lineno']=254;
					surface['closePath']();
				}
				$pyjs['track']['lineno']=255;
				surface['setLineWidth'](width);
				$pyjs['track']['lineno']=256;
				if ($p['bool']($p['hasattr'](color, 'a'))) {
					$pyjs['track']['lineno']=257;
					surface['setStrokeStyle'](color);
				}
				else {
					$pyjs['track']['lineno']=259;
					surface['setStrokeStyle']($m['Color'](color));
				}
				$pyjs['track']['lineno']=260;
				surface['stroke']();
				$pyjs['track']['lineno']=261;
				xpts = function(){
					var pt,$iter7_nextval,$iter7_iter,$collcomp5,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp5 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = pointlist;
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					pt = $iter7_nextval['$nextval'];
					$collcomp5['append'](pt['__getitem__']($constant_int_0));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp5;}();
				$pyjs['track']['lineno']=262;
				ypts = function(){
					var $iter8_idx,pt,$collcomp6,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1;
	$collcomp6 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = pointlist;
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					pt = $iter8_nextval['$nextval'];
					$collcomp6['append'](pt['__getitem__']($constant_int_1));
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjsdl.draw';

	return $collcomp6;}();
				$pyjs['track']['lineno']=263;
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['min'](xpts), $p['max'](xpts)]), 2, null);
				xmin = $tupleassign5[0];
				xmax = $tupleassign5[1];
				$pyjs['track']['lineno']=264;
				var $tupleassign6 = $p['__ass_unpack']($p['tuple']([$p['min'](ypts), $p['max'](ypts)]), 2, null);
				ymin = $tupleassign6[0];
				ymax = $tupleassign6[1];
				$pyjs['track']['lineno']=265;
				if ($p['bool']($p['getattr'](surface, '_display'))) {
					$pyjs['track']['lineno']=266;
					$pyjs['track']['lineno']=266;
					var $pyjs__ret = surface['_display']['_surface_rect']['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add25=$p['__op_sub']($sub25=xmax,$sub26=xmin),$add26=$constant_int_1), $p['__op_add']($add27=$p['__op_sub']($sub27=ymax,$sub28=ymin),$add28=$constant_int_1)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=268;
					$pyjs['track']['lineno']=268;
					var $pyjs__ret = surface['get_rect']()['clip']($m['Rect'](xmin, ymin, $p['__op_add']($add29=$p['__op_sub']($sub29=xmax,$sub30=xmin),$add30=$constant_int_1), $p['__op_add']($add31=$p['__op_sub']($sub31=ymax,$sub32=ymin),$add32=$constant_int_1)));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['width', $constant_int_1]]);
			$cls_definition['lines'] = $method;
			$pyjs['track']['lineno']=270;
			$method = $pyjs__bind_method2('aaline', function(surface, color, point1, point2, blend) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					point1 = arguments[3];
					point2 = arguments[4];
					blend = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
				var rect;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':270};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=270;
				$pyjs['track']['lineno']=274;
				rect = self['line'](surface, color, point1, point2, blend);
				$pyjs['track']['lineno']=275;
				$pyjs['track']['lineno']=275;
				var $pyjs__ret = rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['color'],['point1'],['point2'],['blend', $constant_int_1]]);
			$cls_definition['aaline'] = $method;
			$pyjs['track']['lineno']=277;
			$method = $pyjs__bind_method2('aalines', function(surface, color, closed, pointlist, blend) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 4 || arguments['length'] > 5)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']+1);
				} else {
					var self = arguments[0];
					surface = arguments[1];
					color = arguments[2];
					closed = arguments[3];
					pointlist = arguments[4];
					blend = arguments[5];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 5 || arguments['length'] > 6)) $pyjs__exception_func_param(arguments['callee']['__name__'], 5, 6, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '11c2724c1ce34149ea030e96a2246cd9') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof blend == 'undefined') blend=arguments['callee']['__args__'][7][1];
				var rect;
				$pyjs['track']={'module':'pyjsdl.draw', 'lineno':277};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjsdl.draw';
				$pyjs['track']['lineno']=277;
				$pyjs['track']['lineno']=281;
				rect = self['lines'](surface, color, closed, pointlist, blend);
				$pyjs['track']['lineno']=282;
				$pyjs['track']['lineno']=282;
				var $pyjs__ret = rect;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['surface'],['color'],['closed'],['pointlist'],['blend', $constant_int_1]]);
			$cls_definition['aalines'] = $method;
			$pyjs['track']['lineno']=12;
			var $bases = new Array($p['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Draw', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjsdl.draw */


/* end module: pyjsdl.draw */


/*
PYJS_DEPS: ['math.pi', 'math', 'rect.Rect', 'rect', 'surface.Surface', 'surface', 'color.Color', 'color']
*/
