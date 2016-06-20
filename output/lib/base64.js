/* start module: base64 */
$pyjs['loaded_modules']['base64'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['base64']['__was_initialized__']) return $pyjs['loaded_modules']['base64'];
	var $m = $pyjs['loaded_modules']['base64'];
	$m['__repr__'] = function() { return '<module: base64>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'base64';
	$m['__name__'] = __mod_name__;
	var $mul8,$mul7,$floordiv2,$floordiv1;

	$m['struct'] = $p['___import___']('struct', null);
	$m['binascii'] = $p['___import___']('binascii', null);
	$m['__all__'] = $p['list'](['encode', 'decode', 'encodestring', 'decodestring', 'b64encode', 'b64decode', 'b32encode', 'b32decode', 'b16encode', 'b16decode', 'standard_b64encode', 'standard_b64decode', 'urlsafe_b64encode', 'urlsafe_b64decode']);
	$m['_translation'] = function(){
		var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
	$iter1_iter = $p['range'](256);
	$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
	while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
		$m['_x'] = $iter1_nextval['$nextval'];
		$collcomp1['append']($p['chr']($m['_x']));
	}

	return $collcomp1;}();
	$m['EMPTYSTRING'] = '';
	$m['_translate'] = function(s, altchars) {
		var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter3_array,k,$iter3_type,$iter2_idx,$add2,$iter3_idx,t,v,translation,$add1,$iter3_nextval,$iter2_array,$iter3_iter;
		translation = $p['__getslice']($m['_translation'], 0, null);
		$iter2_iter = altchars['items']();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
			k = $tupleassign1[0];
			v = $tupleassign1[1];
			translation['__setitem__']($p['ord'](k), v);
		}
		t = '';
		$iter3_iter = s;
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			c = $iter3_nextval['$nextval'];
			t = $p['__op_add']($add1=t,$add2=translation['__getitem__']($p['ord'](c)));
		}
		return t;
	};
	$m['_translate']['__name__'] = '_translate';

	$m['_translate']['__bind_type__'] = 0;
	$m['_translate']['__args__'] = [null,null,['s'],['altchars']];
	$m['b64encode'] = function(s, altchars) {
		if (typeof altchars == 'undefined') altchars=arguments['callee']['__args__'][3][1];
		var encoded;
		encoded = $p['__getslice']($m['binascii']['b2a_base64'](s), 0, (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1)));
		if ($p['bool']((altchars !== null))) {
			return $m['_translate'](encoded, $p['dict']([['+', altchars['__getitem__'](0)], ['/', altchars['__getitem__'](1)]]));
		}
		return encoded;
	};
	$m['b64encode']['__name__'] = 'b64encode';

	$m['b64encode']['__bind_type__'] = 0;
	$m['b64encode']['__args__'] = [null,null,['s'],['altchars', null]];
	$m['b64decode'] = function(s, altchars) {
		if (typeof altchars == 'undefined') altchars=arguments['callee']['__args__'][3][1];
		var msg,$pyjs_try_err;
		if ($p['bool']((altchars !== null))) {
			s = $m['_translate'](s, $p['dict']([[altchars['__getitem__'](0), '+'], [altchars['__getitem__'](1), '/']]));
		}
		try {
			return $m['binascii']['a2b_base64'](s);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['getattr']($m['binascii'], 'Error')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['binascii'], 'Error'))) {
				msg = $pyjs_try_err;
				throw ($p['TypeError'](msg));
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return null;
	};
	$m['b64decode']['__name__'] = 'b64decode';

	$m['b64decode']['__bind_type__'] = 0;
	$m['b64decode']['__args__'] = [null,null,['s'],['altchars', null]];
	$m['standard_b64encode'] = function(s) {

		return $m['b64encode'](s);
	};
	$m['standard_b64encode']['__name__'] = 'standard_b64encode';

	$m['standard_b64encode']['__bind_type__'] = 0;
	$m['standard_b64encode']['__args__'] = [null,null,['s']];
	$m['standard_b64decode'] = function(s) {

		return $m['b64decode'](s);
	};
	$m['standard_b64decode']['__name__'] = 'standard_b64decode';

	$m['standard_b64decode']['__bind_type__'] = 0;
	$m['standard_b64decode']['__args__'] = [null,null,['s']];
	$m['urlsafe_b64encode'] = function(s) {

		return $m['b64encode'](s, '-_');
	};
	$m['urlsafe_b64encode']['__name__'] = 'urlsafe_b64encode';

	$m['urlsafe_b64encode']['__bind_type__'] = 0;
	$m['urlsafe_b64encode']['__args__'] = [null,null,['s']];
	$m['urlsafe_b64decode'] = function(s) {

		return $m['b64decode'](s, '-_');
	};
	$m['urlsafe_b64decode']['__name__'] = 'urlsafe_b64decode';

	$m['urlsafe_b64decode']['__bind_type__'] = 0;
	$m['urlsafe_b64decode']['__args__'] = [null,null,['s']];
	$m['_b32alphabet'] = $p['dict']([[0, 'A'], [9, 'J'], [18, 'S'], [27, '3'], [1, 'B'], [10, 'K'], [19, 'T'], [28, '4'], [2, 'C'], [11, 'L'], [20, 'U'], [29, '5'], [3, 'D'], [12, 'M'], [21, 'V'], [30, '6'], [4, 'E'], [13, 'N'], [22, 'W'], [31, '7'], [5, 'F'], [14, 'O'], [23, 'X'], [6, 'G'], [15, 'P'], [24, 'Y'], [7, 'H'], [16, 'Q'], [25, 'Z'], [8, 'I'], [17, 'R'], [26, '2']]);
	$m['_b32tab'] = $m['_b32alphabet']['items']();
	$m['_b32tab']['sort']();
	$m['_b32tab'] = function(){
		var $iter4_nextval,$collcomp2,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp2 = $p['list']();
	$iter4_iter = $m['_b32tab'];
	$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
	while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
		var $tupleassign2 = $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
		$m['k'] = $tupleassign2[0];
		$m['v'] = $tupleassign2[1];
		$collcomp2['append']($m['v']);
	}

	return $collcomp2;}();
	$m['_b32rev'] = $p['dict'](function(){
		var $iter5_nextval,$iter5_idx,$collcomp3,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
	$iter5_iter = $m['_b32alphabet']['items']();
	$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
	while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
		var $tupleassign3 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
		$m['k'] = $tupleassign3[0];
		$m['v'] = $tupleassign3[1];
		$collcomp3['append']($p['tuple']([$m['v'], $m['k']]));
	}

	return $collcomp3;}());
	$m['b32encode'] = function(s) {
		var $add20,$iter6_type,c2,$iter6_iter,$iter6_nextval,$add18,encoded,$add19,parts,quanta,$sub2,$sub1,$iter6_idx,$add14,$add15,$iter6_array,$add17,$add10,$add11,$add12,$add13,c3,leftover,c1,$mul4,$mul3,$mul2,$mul1,i,$add16,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
		parts = $p['list']([]);
		var $tupleassign4 = $p['__ass_unpack']($p['divmod']($p['len'](s), 5), 2, null);
		quanta = $tupleassign4[0];
		leftover = $tupleassign4[1];
		if ($p['bool'](leftover)) {
			s = $p['__op_add']($add3=s,$add4=''['ljust']($p['__op_sub']($sub1=5,$sub2=leftover), '\x00'));
			quanta = $p['__op_add']($add5=quanta,$add6=1);
		}
		$iter6_iter = $p['range'](quanta);
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			i = $iter6_nextval['$nextval'];
			var $tupleassign5 = $p['__ass_unpack']($m['struct']['unpack']('!HHB', $p['__getslice'](s, (typeof ($mul1=i)==typeof ($mul2=5) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)), (typeof ($mul3=$p['__op_add']($add7=i,$add8=1))==typeof ($mul4=5) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))), 3, null);
			c1 = $tupleassign5[0];
			c2 = $tupleassign5[1];
			c3 = $tupleassign5[2];
			c2 = $p['__op_add']($add9=c2,$add10=((c1)&(1))<<(16));
			c3 = $p['__op_add']($add11=c3,$add12=((c2)&(3))<<(8));
			parts['extend']($p['list']([$m['_b32tab']['__getitem__']((c1)>>(11)), $m['_b32tab']['__getitem__'](((c1)>>(6))&(31)), $m['_b32tab']['__getitem__'](((c1)>>(1))&(31)), $m['_b32tab']['__getitem__']((c2)>>(12)), $m['_b32tab']['__getitem__'](((c2)>>(7))&(31)), $m['_b32tab']['__getitem__'](((c2)>>(2))&(31)), $m['_b32tab']['__getitem__']((c3)>>(5)), $m['_b32tab']['__getitem__']((c3)&(31))]));
		}
		encoded = $m['EMPTYSTRING']['join'](parts);
		if ($p['bool']($p['op_eq'](leftover, 1))) {
			return $p['__op_add']($add13=$p['__getslice'](encoded, 0, (typeof ($usub2=6)=='number'?
				-$usub2:
				$p['op_usub']($usub2))),$add14='======');
		}
		else if ($p['bool']($p['op_eq'](leftover, 2))) {
			return $p['__op_add']($add15=$p['__getslice'](encoded, 0, (typeof ($usub3=4)=='number'?
				-$usub3:
				$p['op_usub']($usub3))),$add16='====');
		}
		else if ($p['bool']($p['op_eq'](leftover, 3))) {
			return $p['__op_add']($add17=$p['__getslice'](encoded, 0, (typeof ($usub4=3)=='number'?
				-$usub4:
				$p['op_usub']($usub4))),$add18='===');
		}
		else if ($p['bool']($p['op_eq'](leftover, 4))) {
			return $p['__op_add']($add19=$p['__getslice'](encoded, 0, (typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5))),$add20='=');
		}
		return encoded;
	};
	$m['b32encode']['__name__'] = 'b32encode';

	$m['b32encode']['__bind_type__'] = 0;
	$m['b32encode']['__args__'] = [null,null,['s']];
	$m['b32decode'] = function(s, casefold, map01) {
		if (typeof casefold == 'undefined') casefold=arguments['callee']['__args__'][3][1];
		if (typeof map01 == 'undefined') map01=arguments['callee']['__args__'][4][1];
		var $mul6,$pow1,$pow2,val,$add21,$add22,parts,quanta,$sub3,$iter7_type,$sub6,$sub5,$sub4,$iter7_iter,$iter7_idx,leftover,$mul5,acc,c,last,padchars,$iter7_nextval,shift,$iter7_array;
		var $tupleassign6 = $p['__ass_unpack']($p['divmod']($p['len'](s), 8), 2, null);
		quanta = $tupleassign6[0];
		leftover = $tupleassign6[1];
		if ($p['bool'](leftover)) {
			throw ($p['TypeError']('Incorrect padding'));
		}
		if ($p['bool'](map01)) {
			s = $m['_translate'](s, $p['dict']([['0', 'O'], ['1', map01]]));
		}
		if ($p['bool'](casefold)) {
			s = s['upper']();
		}
		padchars = 0;
		padchars = $p['len'](s);
		s = s['rstrip']('=');
		padchars = $p['__op_sub']($sub3=padchars,$sub4=$p['len'](s));
		parts = $p['list']([]);
		acc = 0;
		shift = 35;
		$iter7_iter = s;
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
			c = $iter7_nextval['$nextval'];
			val = $m['_b32rev']['get'](c);
			if ($p['bool']((val === null))) {
				throw ($p['TypeError']('Non-base32 digit found'));
			}
			acc = $p['__op_add']($add21=acc,$add22=(typeof ($mul5=$m['_b32rev']['__getitem__'](c))==typeof ($mul6=(typeof ($pow1=2)==typeof ($pow2=shift) && typeof $pow1=='number'?
				Math['pow']($pow1,$pow2):
				$p['op_pow']($pow1,$pow2))) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
			shift = $p['__op_sub']($sub5=shift,$sub6=5);
			if ($p['bool'](($p['cmp'](shift, 0) == -1))) {
				parts['append']($m['binascii']['unhexlify']($p['sprintf']('%010x', acc)));
				acc = 0;
				shift = 35;
			}
		}
		last = $m['binascii']['unhexlify']($p['sprintf']('%010x', acc));
		if ($p['bool']($p['op_eq'](padchars, 0))) {
			last = '';
		}
		else if ($p['bool']($p['op_eq'](padchars, 1))) {
			last = $p['__getslice'](last, 0, (typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6)));
		}
		else if ($p['bool']($p['op_eq'](padchars, 3))) {
			last = $p['__getslice'](last, 0, (typeof ($usub7=2)=='number'?
				-$usub7:
				$p['op_usub']($usub7)));
		}
		else if ($p['bool']($p['op_eq'](padchars, 4))) {
			last = $p['__getslice'](last, 0, (typeof ($usub8=3)=='number'?
				-$usub8:
				$p['op_usub']($usub8)));
		}
		else if ($p['bool']($p['op_eq'](padchars, 6))) {
			last = $p['__getslice'](last, 0, (typeof ($usub9=4)=='number'?
				-$usub9:
				$p['op_usub']($usub9)));
		}
		else {
			throw ($p['TypeError']('Incorrect padding'));
		}
		parts['append'](last);
		return $m['EMPTYSTRING']['join'](parts);
	};
	$m['b32decode']['__name__'] = 'b32decode';

	$m['b32decode']['__bind_type__'] = 0;
	$m['b32decode']['__args__'] = [null,null,['s'],['casefold', false],['map01', null]];
	$m['b16encode'] = function(s) {

		return $m['binascii']['hexlify'](s)['upper']();
	};
	$m['b16encode']['__name__'] = 'b16encode';

	$m['b16encode']['__bind_type__'] = 0;
	$m['b16encode']['__args__'] = [null,null,['s']];
	$m['b16decode'] = function(s, casefold) {
		if (typeof casefold == 'undefined') casefold=arguments['callee']['__args__'][3][1];
		var r;
		if ($p['bool'](casefold)) {
			s = s['upper']();
		}
		r = RegExp('[^0-9A-F]');
		if ($p['bool'](r['test'](s))) {
			throw ($p['TypeError']('Non-base16 digit found'));
		}
		return $m['binascii']['unhexlify'](s);
	};
	$m['b16decode']['__name__'] = 'b16decode';

	$m['b16decode']['__bind_type__'] = 0;
	$m['b16decode']['__args__'] = [null,null,['s'],['casefold', false]];
	$m['MAXLINESIZE'] = 76;
	$m['MAXBINSIZE'] = (typeof ($mul7=(typeof ($floordiv1=$m['MAXLINESIZE'])==typeof ($floordiv2=4) && typeof $floordiv1=='number' && $floordiv2 !== 0?
		Math['floor']($floordiv1/$floordiv2):
		$p['op_floordiv']($floordiv1,$floordiv2)))==typeof ($mul8=3) && typeof $mul7=='number'?
		$mul7*$mul8:
		$p['op_mul']($mul7,$mul8));
	$m['encode'] = function(input, output) {

		throw ($p['NotImplementedError']('encode: no file operations possible'));
		return null;
	};
	$m['encode']['__name__'] = 'encode';

	$m['encode']['__bind_type__'] = 0;
	$m['encode']['__args__'] = [null,null,['input'],['output']];
	$m['decode'] = function(input, output) {

		throw ($p['NotImplementedError']('decode: no file operations possible'));
		return null;
	};
	$m['decode']['__name__'] = 'decode';

	$m['decode']['__bind_type__'] = 0;
	$m['decode']['__args__'] = [null,null,['input'],['output']];
	$m['encodestring'] = function(s) {
		var $iter8_idx,chunk,i,$iter8_type,$iter8_array,$add24,pieces,$iter8_iter,$iter8_nextval,$add23;
		pieces = $p['list']([]);
		$iter8_iter = $p['range'](0, $p['len'](s), $m['MAXBINSIZE']);
		$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
		while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
			i = $iter8_nextval['$nextval'];
			chunk = $p['__getslice'](s, i, $p['__op_add']($add23=i,$add24=$m['MAXBINSIZE']));
			pieces['append']($m['binascii']['b2a_base64'](chunk));
		}
		return ''['join'](pieces);
	};
	$m['encodestring']['__name__'] = 'encodestring';

	$m['encodestring']['__bind_type__'] = 0;
	$m['encodestring']['__args__'] = [null,null,['s']];
	$m['decodestring'] = function(s) {

		return $m['binascii']['a2b_base64'](s);
	};
	$m['decodestring']['__name__'] = 'decodestring';

	$m['decodestring']['__bind_type__'] = 0;
	$m['decodestring']['__args__'] = [null,null,['s']];
	$m['test'] = function() {
		var a,$iter9_iter,$and1,$and2,args,$iter9_nextval,$iter9_idx,o,$iter9_array,sys,$pyjs_try_err,func,msg,getopt,$iter9_type,opts;
		sys = $p['___import___']('sys', null);
		getopt = $p['___import___']('getopt', null);
		try {
			var $tupleassign7 = $p['__ass_unpack'](getopt['getopt']($p['__getslice']($p['getattr'](sys, 'argv'), 1, null), 'deut'), 2, null);
			opts = $tupleassign7[0];
			args = $tupleassign7[1];
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['getattr'](getopt, 'error')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr'](getopt, 'error'))) {
				msg = $pyjs_try_err;
				sys['stdout'] = $p['getattr'](sys, 'stderr');
				$p['printFunc']([msg], 1);
				$p['printFunc']([$p['sprintf']("usage: %s [-d|-e|-u|-t] [file|-]\n        -d, -u: decode\n        -e: encode (default)\n        -t: encode and decode string 'Aladdin:open sesame'", $p['getattr'](sys, 'argv')['__getitem__'](0))], 1);
				sys['exit'](2);
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		func = $m['encode'];
		$iter9_iter = opts;
		$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
		while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
			var $tupleassign8 = $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
			o = $tupleassign8[0];
			a = $tupleassign8[1];
			if ($p['bool']($p['op_eq'](o, '-e'))) {
				func = $m['encode'];
			}
			if ($p['bool']($p['op_eq'](o, '-d'))) {
				func = $m['decode'];
			}
			if ($p['bool']($p['op_eq'](o, '-u'))) {
				func = $m['decode'];
			}
			if ($p['bool']($p['op_eq'](o, '-t'))) {
				(typeof test1 == "undefined"?$m['test1']:test1)();
				return null;
			}
		}
		if ($p['bool'](($p['bool']($and1=args)?!$p['op_eq'](args['__getitem__'](0), '-'):$and1))) {
			func($p['open'](args['__getitem__'](0), 'rb'), $p['getattr'](sys, 'stdout'));
		}
		else {
			func($p['getattr'](sys, 'stdin'), $p['getattr'](sys, 'stdout'));
		}
		return null;
	};
	$m['test']['__name__'] = 'test';

	$m['test']['__bind_type__'] = 0;
	$m['test']['__args__'] = [null,null];
	$m['test1'] = function() {
		var s2,s1,s0;
		s0 = 'Aladdin:open sesame';
		s1 = $m['encodestring'](s0);
		s2 = $m['decodestring'](s1);
		$p['printFunc']([s0, $p['repr'](s1), s2], 1);
		return null;
	};
	$m['test1']['__name__'] = 'test1';

	$m['test1']['__bind_type__'] = 0;
	$m['test1']['__args__'] = [null,null];
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['test']();
	}
	return this;
}; /* end base64 */


/* end module: base64 */


/*
PYJS_DEPS: ['struct', 'binascii', 'sys', 'getopt']
*/
