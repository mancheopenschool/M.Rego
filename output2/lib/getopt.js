/* start module: getopt */
$pyjs['loaded_modules']['getopt'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['getopt']['__was_initialized__']) return $pyjs['loaded_modules']['getopt'];
	var $m = $pyjs['loaded_modules']['getopt'];
	$m['__repr__'] = function() { return '<module: getopt>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'getopt';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	try {
		$m.__track_lines__[1] = 'getopt.py, line 1:\n    # -*- coding: iso-8859-1 -*-';
		$m.__track_lines__[35] = 'getopt.py, line 35:\n    __all__ = ["GetoptError","error","getopt","gnu_getopt"]';
		$m.__track_lines__[39] = 'getopt.py, line 39:\n    class GetoptError(Exception):';
		$m.__track_lines__[40] = "getopt.py, line 40:\n    opt = ''";
		$m.__track_lines__[41] = "getopt.py, line 41:\n    msg = ''";
		$m.__track_lines__[42] = "getopt.py, line 42:\n    def __init__(self, msg, opt=''):";
		$m.__track_lines__[43] = 'getopt.py, line 43:\n    self.msg = msg';
		$m.__track_lines__[44] = 'getopt.py, line 44:\n    self.opt = opt';
		$m.__track_lines__[45] = 'getopt.py, line 45:\n    Exception.__init__(self, msg, opt)';
		$m.__track_lines__[47] = 'getopt.py, line 47:\n    def __str__(self):';
		$m.__track_lines__[48] = 'getopt.py, line 48:\n    return self.msg';
		$m.__track_lines__[50] = 'getopt.py, line 50:\n    error = GetoptError # backward compatibility';
		$m.__track_lines__[52] = 'getopt.py, line 52:\n    def getopt(args, shortopts, longopts = []):';
		$m.__track_lines__[79] = 'getopt.py, line 79:\n    opts = []';
		$m.__track_lines__[80] = 'getopt.py, line 80:\n    if type(longopts) == type(""):';
		$m.__track_lines__[81] = 'getopt.py, line 81:\n    longopts = [longopts]';
		$m.__track_lines__[83] = 'getopt.py, line 83:\n    longopts = list(longopts)';
		$m.__track_lines__[84] = "getopt.py, line 84:\n    while args and args[0].startswith('-') and args[0] != '-':";
		$m.__track_lines__[85] = "getopt.py, line 85:\n    if args[0] == '--':";
		$m.__track_lines__[86] = 'getopt.py, line 86:\n    args = args[1:]';
		$m.__track_lines__[87] = 'getopt.py, line 87:\n    break';
		$m.__track_lines__[88] = "getopt.py, line 88:\n    if args[0].startswith('--'):";
		$m.__track_lines__[89] = 'getopt.py, line 89:\n    opts, args = do_longs(opts, args[0][2:], longopts, args[1:])';
		$m.__track_lines__[91] = 'getopt.py, line 91:\n    opts, args = do_shorts(opts, args[0][1:], shortopts, args[1:])';
		$m.__track_lines__[93] = 'getopt.py, line 93:\n    return opts, args';
		$m.__track_lines__[95] = 'getopt.py, line 95:\n    def gnu_getopt(args, shortopts, longopts = []):';
		$m.__track_lines__[110] = 'getopt.py, line 110:\n    opts = []';
		$m.__track_lines__[111] = 'getopt.py, line 111:\n    prog_args = []';
		$m.__track_lines__[112] = 'getopt.py, line 112:\n    if isinstance(longopts, str):';
		$m.__track_lines__[113] = 'getopt.py, line 113:\n    longopts = [longopts]';
		$m.__track_lines__[115] = 'getopt.py, line 115:\n    longopts = list(longopts)';
		$m.__track_lines__[118] = "getopt.py, line 118:\n    if shortopts.startswith('+'):";
		$m.__track_lines__[119] = 'getopt.py, line 119:\n    shortopts = shortopts[1:]';
		$m.__track_lines__[120] = 'getopt.py, line 120:\n    all_options_first = True';
		$m.__track_lines__[124] = 'getopt.py, line 124:\n    all_options_first = False';
		$m.__track_lines__[126] = 'getopt.py, line 126:\n    while args:';
		$m.__track_lines__[127] = "getopt.py, line 127:\n    if args[0] == '--':";
		$m.__track_lines__[128] = 'getopt.py, line 128:\n    prog_args += args[1:]';
		$m.__track_lines__[129] = 'getopt.py, line 129:\n    break';
		$m.__track_lines__[131] = "getopt.py, line 131:\n    if args[0][:2] == '--':";
		$m.__track_lines__[132] = 'getopt.py, line 132:\n    opts, args = do_longs(opts, args[0][2:], longopts, args[1:])';
		$m.__track_lines__[134] = 'getopt.py, line 134:\n    opts, args = do_shorts(opts, args[0][1:], shortopts, args[1:])';
		$m.__track_lines__[136] = 'getopt.py, line 136:\n    if all_options_first:';
		$m.__track_lines__[137] = 'getopt.py, line 137:\n    prog_args += args';
		$m.__track_lines__[138] = 'getopt.py, line 138:\n    break';
		$m.__track_lines__[140] = 'getopt.py, line 140:\n    prog_args.append(args[0])';
		$m.__track_lines__[141] = 'getopt.py, line 141:\n    args = args[1:]';
		$m.__track_lines__[143] = 'getopt.py, line 143:\n    return opts, prog_args';
		$m.__track_lines__[145] = 'getopt.py, line 145:\n    def do_longs(opts, opt, longopts, args):';
		$m.__track_lines__[146] = "getopt.py, line 146:\n    i = opt.find('=')";
		$m.__track_lines__[149] = 'getopt.py, line 149:\n    if i == -1: optarg = None';
		$m.__track_lines__[150] = 'getopt.py, line 150:\n    else : opt, optarg = opt[:i], opt[i+1:]';
		$m.__track_lines__[152] = 'getopt.py, line 152:\n    has_arg, opt = long_has_args(opt, longopts)';
		$m.__track_lines__[153] = 'getopt.py, line 153:\n    if has_arg:';
		$m.__track_lines__[154] = 'getopt.py, line 154:\n    if optarg is None:';
		$m.__track_lines__[155] = 'getopt.py, line 155:\n    if not args:';
		$m.__track_lines__[156] = "getopt.py, line 156:\n    raise GetoptError('option --%s requires argument' % opt, opt)";
		$m.__track_lines__[157] = 'getopt.py, line 157:\n    optarg, args = args[0], args[1:]';
		$m.__track_lines__[159] = "getopt.py, line 159:\n    raise GetoptError('option --%s must not have an argument' % opt, opt)";
		$m.__track_lines__[160] = "getopt.py, line 160:\n    opts.append(('--' + opt, optarg or ''))";
		$m.__track_lines__[162] = 'getopt.py, line 162:\n    return opts, args';
		$m.__track_lines__[167] = 'getopt.py, line 167:\n    def long_has_args(opt, longopts):';
		$m.__track_lines__[168] = 'getopt.py, line 168:\n    possibilities = [o for o in longopts if o.startswith(opt)]';
		$m.__track_lines__[169] = 'getopt.py, line 169:\n    if not possibilities:';
		$m.__track_lines__[170] = "getopt.py, line 170:\n    raise GetoptError('option --%s not recognized' % opt, opt)";
		$m.__track_lines__[172] = 'getopt.py, line 172:\n    if opt in possibilities:';
		$m.__track_lines__[173] = 'getopt.py, line 173:\n    return False, opt';
		$m.__track_lines__[175] = 'getopt.py, line 175:\n    return True, opt';
		$m.__track_lines__[177] = 'getopt.py, line 177:\n    if len(possibilities) > 1:';
		$m.__track_lines__[180] = "getopt.py, line 180:\n    raise GetoptError('option --%s not a unique prefix' % opt, opt)";
		$m.__track_lines__[181] = 'getopt.py, line 181:\n    assert len(possibilities) == 1';
		$m.__track_lines__[182] = 'getopt.py, line 182:\n    unique_match = possibilities[0]';
		$m.__track_lines__[183] = "getopt.py, line 183:\n    has_arg = unique_match.endswith('=')";
		$m.__track_lines__[184] = 'getopt.py, line 184:\n    if has_arg:';
		$m.__track_lines__[185] = 'getopt.py, line 185:\n    unique_match = unique_match[:-1]';
		$m.__track_lines__[186] = 'getopt.py, line 186:\n    return has_arg, unique_match';
		$m.__track_lines__[188] = 'getopt.py, line 188:\n    def do_shorts(opts, optstring, shortopts, args):';
		$m.__track_lines__[189] = "getopt.py, line 189:\n    while optstring != '':";
		$m.__track_lines__[190] = 'getopt.py, line 190:\n    opt, optstring = optstring[0], optstring[1:]';
		$m.__track_lines__[191] = 'getopt.py, line 191:\n    if short_has_arg(opt, shortopts):';
		$m.__track_lines__[192] = "getopt.py, line 192:\n    if optstring == '':";
		$m.__track_lines__[193] = 'getopt.py, line 193:\n    if not args:';
		$m.__track_lines__[194] = "getopt.py, line 194:\n    raise GetoptError('option -%s requires argument' % opt,";
		$m.__track_lines__[196] = 'getopt.py, line 196:\n    optstring, args = args[0], args[1:]';
		$m.__track_lines__[197] = "getopt.py, line 197:\n    optarg, optstring = optstring, ''";
		$m.__track_lines__[199] = "getopt.py, line 199:\n    optarg = ''";
		$m.__track_lines__[200] = "getopt.py, line 200:\n    opts.append(('-' + opt, optarg))";
		$m.__track_lines__[201] = 'getopt.py, line 201:\n    return opts, args';
		$m.__track_lines__[203] = 'getopt.py, line 203:\n    def short_has_arg(opt, shortopts):';
		$m.__track_lines__[204] = 'getopt.py, line 204:\n    for i in range(len(shortopts)):';
		$m.__track_lines__[205] = "getopt.py, line 205:\n    if opt == shortopts[i] != ':':";
		$m.__track_lines__[206] = "getopt.py, line 206:\n    return shortopts.startswith(':', i+1)";
		$m.__track_lines__[207] = "getopt.py, line 207:\n    raise GetoptError('option -%s not recognized' % opt, opt)";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$pyjs['track']['module']='getopt';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=35;
		$m['__all__'] = $p['list'](['GetoptError', 'error', 'getopt', 'gnu_getopt']);
		$pyjs['track']['lineno']=39;
		$m['GetoptError'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'getopt';
			$cls_definition['__md5__'] = '8c1129e280a7101a44c44c5164e2fb5b';
			$pyjs['track']['lineno']=40;
			$cls_definition['opt'] = '';
			$pyjs['track']['lineno']=41;
			$cls_definition['msg'] = '';
			$pyjs['track']['lineno']=42;
			$method = $pyjs__bind_method2('__init__', function(msg, opt) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					msg = arguments[1];
					opt = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c1129e280a7101a44c44c5164e2fb5b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof opt == 'undefined') opt=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'getopt', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='getopt';
				$pyjs['track']['lineno']=42;
				$pyjs['track']['lineno']=43;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('msg', msg) : $p['setattr'](self, 'msg', msg); 
				$pyjs['track']['lineno']=44;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('opt', opt) : $p['setattr'](self, 'opt', opt); 
				$pyjs['track']['lineno']=45;
				$p['Exception']['__init__'](self, msg, opt);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['msg'],['opt', '']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=47;
			$method = $pyjs__bind_method2('__str__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '8c1129e280a7101a44c44c5164e2fb5b') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'getopt', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='getopt';
				$pyjs['track']['lineno']=47;
				$pyjs['track']['lineno']=48;
				$pyjs['track']['lineno']=48;
				var $pyjs__ret = $p['getattr'](self, 'msg');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['__str__'] = $method;
			$pyjs['track']['lineno']=39;
			var $bases = new Array($p['Exception']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('GetoptError', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=50;
		$m['error'] = $m['GetoptError'];
		$pyjs['track']['lineno']=52;
		$m['getopt'] = function(args, shortopts, longopts) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof longopts == 'undefined') longopts=arguments['callee']['__args__'][4][1];
			var $and3,$and1,$and2,opts;
			$pyjs['track']={'module':'getopt','lineno':52};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='getopt';
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=79;
			opts = $p['list']([]);
			$pyjs['track']['lineno']=80;
			if ($p['bool']($p['op_eq']($p['type'](longopts), $p['type']('')))) {
				$pyjs['track']['lineno']=81;
				longopts = $p['list']([longopts]);
			}
			else {
				$pyjs['track']['lineno']=83;
				longopts = $p['list'](longopts);
			}
			$pyjs['track']['lineno']=84;
			while ($p['bool'](($p['bool']($and1=args)?($p['bool']($and2=args['__getitem__']($constant_int_0)['startswith']('-'))?!$p['op_eq'](args['__getitem__']($constant_int_0), '-'):$and2):$and1))) {
				$pyjs['track']['lineno']=85;
				if ($p['bool']($p['op_eq'](args['__getitem__']($constant_int_0), '--'))) {
					$pyjs['track']['lineno']=86;
					args = $p['__getslice'](args, $constant_int_1, null);
					$pyjs['track']['lineno']=87;
					break;
				}
				$pyjs['track']['lineno']=88;
				if ($p['bool'](args['__getitem__']($constant_int_0)['startswith']('--'))) {
					$pyjs['track']['lineno']=89;
					var $tupleassign1 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_2, null), longopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign1[0];
					args = $tupleassign1[1];
				}
				else {
					$pyjs['track']['lineno']=91;
					var $tupleassign2 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_1, null), shortopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign2[0];
					args = $tupleassign2[1];
				}
			}
			$pyjs['track']['lineno']=93;
			$pyjs['track']['lineno']=93;
			var $pyjs__ret = $p['tuple']([opts, args]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['getopt']['__name__'] = 'getopt';

		$m['getopt']['__bind_type__'] = 0;
		$m['getopt']['__args__'] = [null,null,['args'],['shortopts'],['longopts', $p['list']([])]];
		$pyjs['track']['lineno']=95;
		$m['gnu_getopt'] = function(args, shortopts, longopts) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
			if (typeof longopts == 'undefined') longopts=arguments['callee']['__args__'][4][1];
			var prog_args,$add2,$add3,$add1,$add4,all_options_first,opts;
			$pyjs['track']={'module':'getopt','lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='getopt';
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=110;
			opts = $p['list']([]);
			$pyjs['track']['lineno']=111;
			prog_args = $p['list']([]);
			$pyjs['track']['lineno']=112;
			if ($p['bool']($p['isinstance'](longopts, $p['str']))) {
				$pyjs['track']['lineno']=113;
				longopts = $p['list']([longopts]);
			}
			else {
				$pyjs['track']['lineno']=115;
				longopts = $p['list'](longopts);
			}
			$pyjs['track']['lineno']=118;
			if ($p['bool'](shortopts['startswith']('+'))) {
				$pyjs['track']['lineno']=119;
				shortopts = $p['__getslice'](shortopts, $constant_int_1, null);
				$pyjs['track']['lineno']=120;
				all_options_first = true;
			}
			else {
				$pyjs['track']['lineno']=124;
				all_options_first = false;
			}
			$pyjs['track']['lineno']=126;
			while ($p['bool'](args)) {
				$pyjs['track']['lineno']=127;
				if ($p['bool']($p['op_eq'](args['__getitem__']($constant_int_0), '--'))) {
					$pyjs['track']['lineno']=128;
					prog_args = $p['__op_add']($add1=prog_args,$add2=$p['__getslice'](args, $constant_int_1, null));
					$pyjs['track']['lineno']=129;
					break;
				}
				$pyjs['track']['lineno']=131;
				if ($p['bool']($p['op_eq']($p['__getslice'](args['__getitem__']($constant_int_0), 0, $constant_int_2), '--'))) {
					$pyjs['track']['lineno']=132;
					var $tupleassign3 = $p['__ass_unpack']((typeof do_longs == "undefined"?$m['do_longs']:do_longs)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_2, null), longopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign3[0];
					args = $tupleassign3[1];
				}
				else if ($p['bool']($p['op_eq']($p['__getslice'](args['__getitem__']($constant_int_0), 0, $constant_int_1), '-'))) {
					$pyjs['track']['lineno']=134;
					var $tupleassign4 = $p['__ass_unpack']((typeof do_shorts == "undefined"?$m['do_shorts']:do_shorts)(opts, $p['__getslice'](args['__getitem__']($constant_int_0), $constant_int_1, null), shortopts, $p['__getslice'](args, $constant_int_1, null)), 2, null);
					opts = $tupleassign4[0];
					args = $tupleassign4[1];
				}
				else {
					$pyjs['track']['lineno']=136;
					if ($p['bool'](all_options_first)) {
						$pyjs['track']['lineno']=137;
						prog_args = $p['__op_add']($add3=prog_args,$add4=args);
						$pyjs['track']['lineno']=138;
						break;
					}
					else {
						$pyjs['track']['lineno']=140;
						prog_args['append'](args['__getitem__']($constant_int_0));
						$pyjs['track']['lineno']=141;
						args = $p['__getslice'](args, $constant_int_1, null);
					}
				}
			}
			$pyjs['track']['lineno']=143;
			$pyjs['track']['lineno']=143;
			var $pyjs__ret = $p['tuple']([opts, prog_args]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['gnu_getopt']['__name__'] = 'gnu_getopt';

		$m['gnu_getopt']['__bind_type__'] = 0;
		$m['gnu_getopt']['__args__'] = [null,null,['args'],['shortopts'],['longopts', $p['list']([])]];
		$pyjs['track']['lineno']=145;
		$m['do_longs'] = function(opts, opt, longopts, args) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var $or1,$or2,i,$add6,$add7,$add5,has_arg,$add8,optarg;
			$pyjs['track']={'module':'getopt','lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='getopt';
			$pyjs['track']['lineno']=145;
			$pyjs['track']['lineno']=146;
			i = opt['find']('=');
			$pyjs['track']['lineno']=149;
			if ($p['bool']($p['op_eq'](i, (typeof ($usub1=$constant_int_1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))))) {
				$pyjs['track']['lineno']=149;
				optarg = null;
			}
			else {
				$pyjs['track']['lineno']=150;
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([$p['__getslice'](opt, 0, i), $p['__getslice'](opt, $p['__op_add']($add5=i,$add6=$constant_int_1), null)]), 2, null);
				opt = $tupleassign5[0];
				optarg = $tupleassign5[1];
			}
			$pyjs['track']['lineno']=152;
			var $tupleassign6 = $p['__ass_unpack']((typeof long_has_args == "undefined"?$m['long_has_args']:long_has_args)(opt, longopts), 2, null);
			has_arg = $tupleassign6[0];
			opt = $tupleassign6[1];
			$pyjs['track']['lineno']=153;
			if ($p['bool'](has_arg)) {
				$pyjs['track']['lineno']=154;
				if ($p['bool']($p['op_is'](optarg, null))) {
					$pyjs['track']['lineno']=155;
					if ($p['bool'](!$p['bool'](args))) {
						$pyjs['track']['lineno']=156;
						$pyjs['__active_exception_stack__'] = null;
						throw ($m['GetoptError']($p['sprintf']('option --%s requires argument', opt), opt));
					}
					$pyjs['track']['lineno']=157;
					var $tupleassign7 = $p['__ass_unpack']($p['tuple']([args['__getitem__']($constant_int_0), $p['__getslice'](args, $constant_int_1, null)]), 2, null);
					optarg = $tupleassign7[0];
					args = $tupleassign7[1];
				}
			}
			else if ($p['bool'](optarg)) {
				$pyjs['track']['lineno']=159;
				$pyjs['__active_exception_stack__'] = null;
				throw ($m['GetoptError']($p['sprintf']('option --%s must not have an argument', opt), opt));
			}
			$pyjs['track']['lineno']=160;
			opts['append']($p['tuple']([$p['__op_add']($add7='--',$add8=opt), ($p['bool']($or1=optarg)?$or1:'')]));
			$pyjs['track']['lineno']=162;
			$pyjs['track']['lineno']=162;
			var $pyjs__ret = $p['tuple']([opts, args]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['do_longs']['__name__'] = 'do_longs';

		$m['do_longs']['__bind_type__'] = 0;
		$m['do_longs']['__args__'] = [null,null,['opts'],['opt'],['longopts'],['args']];
		$pyjs['track']['lineno']=167;
		$m['long_has_args'] = function(opt, longopts) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var possibilities,$add10,has_arg,$add9,unique_match;
			$pyjs['track']={'module':'getopt','lineno':167};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='getopt';
			$pyjs['track']['lineno']=167;
			$pyjs['track']['lineno']=168;
			possibilities = function(){
				var o,$iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = longopts;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				o = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=168;
				if ($p['bool'](o['startswith'](opt))) {
					$collcomp1['append'](o);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='getopt';

	return $collcomp1;}();
			$pyjs['track']['lineno']=169;
			if ($p['bool'](!$p['bool'](possibilities))) {
				$pyjs['track']['lineno']=170;
				$pyjs['__active_exception_stack__'] = null;
				throw ($m['GetoptError']($p['sprintf']('option --%s not recognized', opt), opt));
			}
			$pyjs['track']['lineno']=172;
			if ($p['bool'](possibilities['__contains__'](opt))) {
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=173;
				var $pyjs__ret = $p['tuple']([false, opt]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ($p['bool'](possibilities['__contains__']($p['__op_add']($add9=opt,$add10='=')))) {
				$pyjs['track']['lineno']=175;
				$pyjs['track']['lineno']=175;
				var $pyjs__ret = $p['tuple']([true, opt]);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=177;
			if ($p['bool'](($p['cmp']($p['len'](possibilities), $constant_int_1) == 1))) {
				$pyjs['track']['lineno']=180;
				$pyjs['__active_exception_stack__'] = null;
				throw ($m['GetoptError']($p['sprintf']('option --%s not a unique prefix', opt), opt));
			}
			$pyjs['track']['lineno']=181;
			if (!( $p['op_eq']($p['len'](possibilities), $constant_int_1) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=182;
			unique_match = possibilities['__getitem__']($constant_int_0);
			$pyjs['track']['lineno']=183;
			has_arg = unique_match['endswith']('=');
			$pyjs['track']['lineno']=184;
			if ($p['bool'](has_arg)) {
				$pyjs['track']['lineno']=185;
				unique_match = $p['__getslice'](unique_match, 0, (typeof ($usub2=$constant_int_1)=='number'?
					-$usub2:
					$p['op_usub']($usub2)));
			}
			$pyjs['track']['lineno']=186;
			$pyjs['track']['lineno']=186;
			var $pyjs__ret = $p['tuple']([has_arg, unique_match]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['long_has_args']['__name__'] = 'long_has_args';

		$m['long_has_args']['__bind_type__'] = 0;
		$m['long_has_args']['__args__'] = [null,null,['opt'],['longopts']];
		$pyjs['track']['lineno']=188;
		$m['do_shorts'] = function(opts, optstring, shortopts, args) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, 4, arguments['length']);
			var opt,$add11,$add12,optarg;
			$pyjs['track']={'module':'getopt','lineno':188};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='getopt';
			$pyjs['track']['lineno']=188;
			$pyjs['track']['lineno']=189;
			while ($p['bool'](!$p['op_eq'](optstring, ''))) {
				$pyjs['track']['lineno']=190;
				var $tupleassign8 = $p['__ass_unpack']($p['tuple']([optstring['__getitem__']($constant_int_0), $p['__getslice'](optstring, $constant_int_1, null)]), 2, null);
				opt = $tupleassign8[0];
				optstring = $tupleassign8[1];
				$pyjs['track']['lineno']=191;
				if ($p['bool']((typeof short_has_arg == "undefined"?$m['short_has_arg']:short_has_arg)(opt, shortopts))) {
					$pyjs['track']['lineno']=192;
					if ($p['bool']($p['op_eq'](optstring, ''))) {
						$pyjs['track']['lineno']=193;
						if ($p['bool'](!$p['bool'](args))) {
							$pyjs['track']['lineno']=194;
							$pyjs['__active_exception_stack__'] = null;
							throw ($m['GetoptError']($p['sprintf']('option -%s requires argument', opt), opt));
						}
						$pyjs['track']['lineno']=196;
						var $tupleassign9 = $p['__ass_unpack']($p['tuple']([args['__getitem__']($constant_int_0), $p['__getslice'](args, $constant_int_1, null)]), 2, null);
						optstring = $tupleassign9[0];
						args = $tupleassign9[1];
					}
					$pyjs['track']['lineno']=197;
					var $tupleassign10 = $p['__ass_unpack']($p['tuple']([optstring, '']), 2, null);
					optarg = $tupleassign10[0];
					optstring = $tupleassign10[1];
				}
				else {
					$pyjs['track']['lineno']=199;
					optarg = '';
				}
				$pyjs['track']['lineno']=200;
				opts['append']($p['tuple']([$p['__op_add']($add11='-',$add12=opt), optarg]));
			}
			$pyjs['track']['lineno']=201;
			$pyjs['track']['lineno']=201;
			var $pyjs__ret = $p['tuple']([opts, args]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['do_shorts']['__name__'] = 'do_shorts';

		$m['do_shorts']['__bind_type__'] = 0;
		$m['do_shorts']['__args__'] = [null,null,['opts'],['optstring'],['shortopts'],['args']];
		$pyjs['track']['lineno']=203;
		$m['short_has_arg'] = function(opt, shortopts) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$add13,$add14,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'getopt','lineno':203};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='getopt';
			$pyjs['track']['lineno']=203;
			$pyjs['track']['lineno']=204;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = $p['range']($p['len'](shortopts));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=205;
				if ($p['bool'](($p['op_eq'](opt, ($compare1 = shortopts['__getitem__'](i)))&&!$p['op_eq']($compare1, ($compare2 = ':'))))) {
					$pyjs['track']['lineno']=206;
					$pyjs['track']['lineno']=206;
					var $pyjs__ret = shortopts['startswith'](':', $p['__op_add']($add13=i,$add14=$constant_int_1));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='getopt';
			$pyjs['track']['lineno']=207;
			$pyjs['__active_exception_stack__'] = null;
			throw ($m['GetoptError']($p['sprintf']('option -%s not recognized', opt), opt));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['short_has_arg']['__name__'] = 'short_has_arg';

		$m['short_has_arg']['__bind_type__'] = 0;
		$m['short_has_arg']['__args__'] = [null,null,['opt'],['shortopts']];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end getopt */


/* end module: getopt */


