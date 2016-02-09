/* start module: pyjamas.media.Media */
$pyjs['loaded_modules']['pyjamas.media.Media'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.media.Media']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.media.Media'];
	if(typeof $pyjs['loaded_modules']['pyjamas.media'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.media']['__was_initialized__']) $p['___import___']('pyjamas.media', null);
	var $m = $pyjs['loaded_modules']['pyjamas.media.Media'];
	$m['__repr__'] = function() { return '<module: pyjamas.media.Media>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.media.Media';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.media']['Media'] = $pyjs['loaded_modules']['pyjamas.media.Media'];


	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.media', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.media', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.media', null, false);
	$m['mediaEventGetTypeInt'] = function(eventType) {

		(typeof JS == "undefined"?$m['JS']:JS)('\n    window[\'console\'][\'log\'](\'mediaEventGetTypeInt: \' + eventType)\n    switch (eventType) {\n        case "abort":             return 0x00001;\n        case "canplay":           return 0x00002;\n        case "canplaythrough":    return 0x00004;\n        case "durationchange":    return 0x00008;\n        case "emptied":           return 0x00010;\n        case "ended":             return 0x00020;\n        case "error":             return 0x00040;\n        case "loadstart":         return 0x00080;\n        case "loadeddata":        return 0x00100;\n        case "loadedmetadata":    return 0x00200;\n        case "pause":             return 0x00400;\n        case "play":              return 0x00800;\n        case "playing":           return 0x01000;\n        case "progress":          return 0x02000;\n        case "ratechange":        return 0x04000;\n        case "seeked":            return 0x08000;\n        case "seeking":           return 0x10000;\n        case "stalled":           return 0x20000;\n        case "suspend":           return 0x40000;\n        case "timeupdate":        return 0x80000;\n        case "volumechange":      return 0x100000;\n        case "waiting":           return 0x200000;\n        default:\n        window[\'console\'][\'debug\']("Unknown media eventType: " + eventType)\n        return 0;\n    }\n    ');
		return null;
	};
	$m['mediaEventGetTypeInt']['__name__'] = 'mediaEventGetTypeInt';

	$m['mediaEventGetTypeInt']['__bind_type__'] = 0;
	$m['mediaEventGetTypeInt']['__args__'] = [null,null,['eventType']];
	$m['Media'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.media.Media';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			self['mediaEventsToSink'] = 0;
			self['mediaEventsInitialized'] = false;
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('setSrc', function(src) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				src = arguments[1];
			}
			var obj;
			$p['printFunc'](['setSrc', src], 1);
			obj = self['getElement']();
			$m['DOM']['setAttribute'](obj, 'URL', src);
			return null;
		}
	, 1, [null,null,['self'],['src']]);
		$cls_definition['setSrc'] = $method;
		$method = $pyjs__bind_method2('addSrc', function(src) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				src = arguments[1];
			}
			var s;
			s = $m['DOM']['createElement']('source');
			$m['DOM']['setAttribute'](s, 'src', src);
			$m['DOM']['appendChild'](self['getElement'](), s);
			return null;
		}
	, 1, [null,null,['self'],['src']]);
		$cls_definition['addSrc'] = $method;
		$method = $pyjs__bind_method2('getSrc', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'src');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSrc'] = $method;
		$method = $pyjs__bind_method2('getError', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2;
			return ($p['bool']($or1=$p['getattr'](self['getElement'](), 'error'))?$or1:0);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getError'] = $method;
		$method = $pyjs__bind_method2('getCurrentSrc', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'currentSrc');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentSrc'] = $method;
		$method = $pyjs__bind_method2('getCurrentTime', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'currentTime');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentTime'] = $method;
		$method = $pyjs__bind_method2('setCurrentTime', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}

			self['getElement']()['currentTime'] = time;
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['setCurrentTime'] = $method;
		$method = $pyjs__bind_method2('getStartTime', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'startTime');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStartTime'] = $method;
		$method = $pyjs__bind_method2('getDuration', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'duration');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDuration'] = $method;
		$method = $pyjs__bind_method2('isPaused', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'paused');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isPaused'] = $method;
		$method = $pyjs__bind_method2('getDefaultPlaybackRate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'defaultPlaybackRate');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDefaultPlaybackRate'] = $method;
		$method = $pyjs__bind_method2('setDefaultPlaybackRate', function(rate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rate = arguments[1];
			}

			self['getElement']()['defaultPlaybackRate'] = rate;
			return null;
		}
	, 1, [null,null,['self'],['rate']]);
		$cls_definition['setDefaultPlaybackRate'] = $method;
		$method = $pyjs__bind_method2('getPlaybackRate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'playbackRate');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPlaybackRate'] = $method;
		$method = $pyjs__bind_method2('setPlaybackRate', function(rate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rate = arguments[1];
			}

			self['getElement']()['playbackRate'] = rate;
			return null;
		}
	, 1, [null,null,['self'],['rate']]);
		$cls_definition['setPlaybackRate'] = $method;
		$method = $pyjs__bind_method2('getPlayed', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'played');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPlayed'] = $method;
		$method = $pyjs__bind_method2('getSeekable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'seekable');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSeekable'] = $method;
		$method = $pyjs__bind_method2('hasEnded', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'ended');
		}
	, 1, [null,null,['self']]);
		$cls_definition['hasEnded'] = $method;
		$method = $pyjs__bind_method2('isLoop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['bool']($p['getattr'](self['getElement'](), 'loop'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['isLoop'] = $method;
		$method = $pyjs__bind_method2('getVolume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'volume');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVolume'] = $method;
		$method = $pyjs__bind_method2('setVolume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}

			self['getElement']()['volume'] = volume;
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['setVolume'] = $method;
		$method = $pyjs__bind_method2('getReadyState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'readyState');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getReadyState'] = $method;
		$method = $pyjs__bind_method2('setAutobuffer', function(autobuffer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autobuffer = arguments[1];
			}

			self['getElement']()['autobuffer'] = autobuffer;
			return null;
		}
	, 1, [null,null,['self'],['autobuffer']]);
		$cls_definition['setAutobuffer'] = $method;
		$method = $pyjs__bind_method2('setAutoplay', function(autostart) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autostart = arguments[1];
			}
			var $or4,$or3,$and1,$and2;
			$p['printFunc'](['autoplay', autostart], 1);
			self['playparam'] = $m['DOM']['createElement']('PARAM');
			$m['DOM']['setAttribute']($p['getattr'](self, 'playparam'), 'name', 'autostart');
			$m['DOM']['setBooleanAttribute']($p['getattr'](self, 'playparam'), 'VALUE', ($p['bool']($or3=($p['bool']($and1=autostart)?'true':$and1))?$or3:'false'));
			self['getElement']()['appendChild']($p['getattr'](self, 'playparam'));
			return null;
		}
	, 1, [null,null,['self'],['autostart']]);
		$cls_definition['setAutoplay'] = $method;
		$method = $pyjs__bind_method2('setLoop', function(autorewind) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autorewind = arguments[1];
			}
			var $or5,$or6,$and3,$and4;
			$p['printFunc'](['autorewind', autorewind], 1);
			self['loopparam'] = $m['DOM']['createElement']('PARAM');
			$m['DOM']['setAttribute']($p['getattr'](self, 'loopparam'), 'name', 'autorewind');
			$m['DOM']['setBooleanAttribute']($p['getattr'](self, 'loopparam'), 'VALUE', ($p['bool']($or5=($p['bool']($and3=autorewind)?'true':$and3))?$or5:'false'));
			self['getElement']()['appendChild']($p['getattr'](self, 'loopparam'));
			return null;
		}
	, 1, [null,null,['self'],['autorewind']]);
		$cls_definition['setLoop'] = $method;
		$method = $pyjs__bind_method2('setControls', function(controls) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				controls = arguments[1];
			}
			var $or7,$and5,$and6,$or8;
			$p['printFunc'](['setControls', controls], 1);
			self['ctrlparam'] = $m['DOM']['createElement']('PARAM');
			$m['DOM']['setAttribute']($p['getattr'](self, 'ctrlparam'), 'name', 'ShowControls');
			$m['DOM']['setBooleanAttribute']($p['getattr'](self, 'ctrlparam'), 'VALUE', ($p['bool']($or7=($p['bool']($and5=controls)?'true':$and5))?$or7:'false'));
			self['getElement']()['appendChild']($p['getattr'](self, 'ctrlparam'));
			return null;
		}
	, 1, [null,null,['self'],['controls']]);
		$cls_definition['setControls'] = $method;
		$method = $pyjs__bind_method2('hasControls', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DOM']['getBooleanAttribute'](self['getElement'](), 'controls');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hasControls'] = $method;
		$method = $pyjs__bind_method2('isMuted', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self['getElement'](), 'muted');
		}
	, 1, [null,null,['self']]);
		$cls_definition['isMuted'] = $method;
		$method = $pyjs__bind_method2('play', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['getElement']()['play']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('load', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['getElement']()['load']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['load'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['getElement']()['pause']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('canPlayType', function(etype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				etype = arguments[1];
			}

			self['getElement']()['canPlayType'](etype);
			return null;
		}
	, 1, [null,null,['self'],['etype']]);
		$cls_definition['canPlayType'] = $method;
		$method = $pyjs__bind_method2('setMute', function(muted) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				muted = arguments[1];
			}

			self['getElement']()['setMute'](muted);
			return null;
		}
	, 1, [null,null,['self'],['muted']]);
		$cls_definition['setMute'] = $method;
		$method = $pyjs__bind_method2('addAbortHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['AbortEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addAbortHandler'] = $method;
		$method = $pyjs__bind_method2('addCanPlayHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['CanPlayEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addCanPlayHandler'] = $method;
		$method = $pyjs__bind_method2('addCanPlayThroughHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['CanPlayThroughEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addCanPlayThroughHandler'] = $method;
		$method = $pyjs__bind_method2('addDurationChangeHandle', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['DurationChangeEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addDurationChangeHandle'] = $method;
		$method = $pyjs__bind_method2('addEmptiedHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['EmptiedEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addEmptiedHandler'] = $method;
		$method = $pyjs__bind_method2('addEndedHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['EndedEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addEndedHandler'] = $method;
		$method = $pyjs__bind_method2('addErrorHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['ErrorEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addErrorHandler'] = $method;
		$method = $pyjs__bind_method2('addLoadStartHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['LoadStartEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addLoadStartHandler'] = $method;
		$method = $pyjs__bind_method2('addLoadedDataHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['LoadedDataEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addLoadedDataHandler'] = $method;
		$method = $pyjs__bind_method2('addLoadedMetadataHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['LoadedMetadataEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addLoadedMetadataHandler'] = $method;
		$method = $pyjs__bind_method2('addPauseHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['PauseEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addPauseHandler'] = $method;
		$method = $pyjs__bind_method2('addPlayHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['PlayEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addPlayHandler'] = $method;
		$method = $pyjs__bind_method2('addPlayingHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['PlayingEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addPlayingHandler'] = $method;
		$method = $pyjs__bind_method2('addProgressHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['ProgressEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addProgressHandler'] = $method;
		$method = $pyjs__bind_method2('addRateChangeHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['RateChangeEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addRateChangeHandler'] = $method;
		$method = $pyjs__bind_method2('addSeekedHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['SeekedEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addSeekedHandler'] = $method;
		$method = $pyjs__bind_method2('addSeekingHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['SeekingEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addSeekingHandler'] = $method;
		$method = $pyjs__bind_method2('addStalledHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['StalledEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addStalledHandler'] = $method;
		$method = $pyjs__bind_method2('addSuspendHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['SuspendEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addSuspendHandler'] = $method;
		$method = $pyjs__bind_method2('addTimeUpdateHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['TimeUpdateEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addTimeUpdateHandler'] = $method;
		$method = $pyjs__bind_method2('addVolumeChangeHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['VolumeChangeEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addVolumeChangeHandler'] = $method;
		$method = $pyjs__bind_method2('addWaitingHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return self['addMediaEventHandler'](handler, $m['WaitingEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addWaitingHandler'] = $method;
		$method = $pyjs__bind_method2('addMediaEventHandler', function(handler, etype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
				etype = arguments[2];
			}

			if (!( (handler !== null) )) {
			   throw $p['AssertionError']('handler must not be None');
			 }
			if (!( (etype !== null) )) {
			   throw $p['AssertionError']('type must not be None');
			 }
			self['maybeInitMediaEvents']();
			self['sinkMediaEvents']($m['mediaEventGetTypeInt'](etype['getName']()));
			return (typeof addHandler == "undefined"?$m['addHandler']:addHandler)(handler, etype);
		}
	, 1, [null,null,['self'],['handler'],['etype']]);
		$cls_definition['addMediaEventHandler'] = $method;
		$method = $pyjs__bind_method2('sinkMediaEvents', function(eventBitsToAdd) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToAdd = arguments[1];
			}

			if ($p['bool'](self['isOrWasAttached']())) {
				self['nativeSinkMediaEvents'](self['getElement'](), eventBitsToAdd);
			}
			else {
				self['mediaEventsToSink'] |= eventBitsToAdd;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
		$cls_definition['sinkMediaEvents'] = $method;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var bitsToAdd;
			bitsToAdd = $p['getattr'](self, 'mediaEventsToSink');
			self['mediaEventsToSink'] = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			if ($p['bool'](($p['cmp'](bitsToAdd, 0) == 1))) {
				self['nativeSinkMediaEvents'](self['getElement'](), bitsToAdd);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method2('nativeSinkMediaEvents', function(elem, bits) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
				bits = arguments[2];
			}

			return null;
		}
	, 1, [null,null,['self'],['elem'],['bits']]);
		$cls_definition['nativeSinkMediaEvents'] = $method;
		$method = $pyjs__bind_method2('addMouseDownHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseDownEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addMouseDownHandler'] = $method;
		$method = $pyjs__bind_method2('addMouseUpHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseUpEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addMouseUpHandler'] = $method;
		$method = $pyjs__bind_method2('addMouseOutHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseOutEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addMouseOutHandler'] = $method;
		$method = $pyjs__bind_method2('addMouseOverHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseOverEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addMouseOverHandler'] = $method;
		$method = $pyjs__bind_method2('addMouseMoveHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseMoveEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addMouseMoveHandler'] = $method;
		$method = $pyjs__bind_method2('addMouseWheelHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['MouseWheelEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addMouseWheelHandler'] = $method;
		$method = $pyjs__bind_method2('addClickHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}

			return (typeof addDomHandler == "undefined"?$m['addDomHandler']:addDomHandler)(handler, $m['ClickEvent']['getType']());
		}
	, 1, [null,null,['self'],['handler']]);
		$cls_definition['addClickHandler'] = $method;
		$method = $pyjs__bind_method2('maybeInitMediaEvents', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var mediaEventsInitialized;
			if ($p['bool'](!$p['bool']((typeof mediaEventsInitialized == "undefined"?$m['mediaEventsInitialized']:mediaEventsInitialized)))) {
				(typeof initMediaEvents == "undefined"?$m['initMediaEvents']:initMediaEvents)();
				mediaEventsInitialized = true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['maybeInitMediaEvents'] = $method;
		$method = $pyjs__bind_method2('initMediaEvents', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			(typeof JS == "undefined"?$m['JS']:JS)("\n        mediaDispatchEvent = function(evt) {\n            var curElem = evt['target'];\n            var listener = curElem['__listener'];\n            if (listener) {\n                @{{self['dispatchMediaEvent']}}(evt, listener)\n            }\n        }\n        ");
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initMediaEvents'] = $method;
		$method = $pyjs__bind_method2('dispatchMediaEvent', function(evt, listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				evt = arguments[1];
				listener = arguments[2];
			}

			listener['onBrowserEvent'](evt);
			return null;
		}
	, 1, [null,null,['self'],['evt'],['listener']]);
		$cls_definition['dispatchMediaEvent'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Media', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.media.Media */


/* end module: pyjamas.media.Media */


/*
PYJS_DEPS: ['pyjamas.ui.Event', 'pyjamas', 'pyjamas.ui', 'pyjamas.DOM', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
