if (self.CavalryLogger) { CavalryLogger.start_js(["O45P1"]); }

__d("VideoPlayerFormatsMap",[],(function(a,b,c,d,e,f){e.exports={live_map:"inline",live_map_sidebar:"inline",live_map_listview:"inline",live_map_tooltip:"inline",live_map_tooltip_from_listview:"inline",live_map_tooltip_from_map:"inline",video_home_inline:"inline",inline:"inline",chained:"inline",page_live_video_module:"inline",chained_suggestion:"inline",embedded_video:"inline",embedded_video_preview:"inline",embedded_video_from_ufi:"inline",ufi_comment_attachment:"inline",media_collage:"inline",channel:"channel",permalink:"permalink",snowlift:"snowlift",tv:"tv",watch_scroll:"watch_scroll",continue_watching_recommendation:"inline",tahoe:"tahoe",search_live_video_module:"inline",videohub_live:"inline",camera_post:"fb_stories",pages_cover:"inline",video_page_spotlight_unit:"inline",pages_cover_hover:"inline",pages_messaging_video:"inline",profile_overview:"inline",profile_cover:"inline",memory_leak_test:"inline",games_video_home_streamer_hub:"inline",games_video_live_recommendation:"inline",games_video_search_unit:"inline",games_video_streamer_unit:"inline",trivia_game_admin_dashboard:"misc",games_streamer_dashboard:"inline",ads_preview:"inline",discover:"inline",civic_proposal:"inline",business_feed:"inline",sotto_consideration_page:"inline",ads:null,animated_image_share:null,asset:null,ballot:null,broadcast_request_attachment:null,candidate_videos:null,corporate_card_application:null,embedded:null,embedded_page_plugin:null,gameroom_live_video_hero_banner:null,gameroom_live_video_tab:null,gameroom_live_video_thumbnail:null,games_video_home:null,games_video_home_hero:null,games_video_single_game:null,games_video_top_weekly_clips_streamer_page:null,games_video_social_plugin:null,games_video_hub:null,games_video_hub_redirect_notification:null,games_video_hub_redirect_unknown:null,group_live_video_module:null,html5:null,insights:null,intern_curation:null,intern_example:null,issues_module:null,live_beeper:null,live_control_panel:null,live_map_tooltip_from_webgl:null,live_video_broadcast:null,live_video_preview:null,living_room:null,living_room_commentating:null,living_room_recap_fullscreen:null,living_room_recap_inline:null,lookback:null,messaging:null,misc:null,mobile:null,not_specified_please_fix:null,offers_detail:null,pages_finch_main_video:null,pages_finch_thumbnail_video:null,pages_finch_trailer:null,pages_video_set:null,pages_timeline_pages_cover:null,pages_home_hero:null,video_page_video_list:null,profile_video:null,profile_video_hovercard:null,profile_video_thumb:null,report_flow:null,review:null,serp_videos_tab:null,slideshow:null,srt_review:null,topic_channel_living_room:null,topic_gaming:null,trailer_og_attachment:null,trailer_timeline_collections:null,trailer_timeline_unit:null,user_video_tab:null,video_copyright_preview:null,watchlist:null,video_inline_chaining:null,videohub_featured:null,videohub_playlist:null,live_autoplay_watch_and_scroll:null,video_page_unspecified:null,spotlight_live:null,spotlight_featured:null,spotlight_popular:null,spotlight_unknown:null,videos_card:null,videos_tab:null,playlists_tab:null,playlists_card:null,playlist_page:null,redirected_watch_serp:null}}),null);
__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f){__p&&__p();var g={isSupported:function(){return window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(b("UserAgent").isBrowser("Firefox < 41")||b("UserAgent").isPlatform("iOS < 10.3"))||b("UserAgent").isBrowser("Chrome >= 43")},copy:function(a,c){__p&&__p();c=c||document.body;if(!c)return!1;var d=!0,e=document.createElement("textarea");c.appendChild(e);e.value=a;if(b("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(e);var f=window.getSelection();f.removeAllRanges();f.addRange(a);e.setSelectionRange(0,999999)}else e.select();try{d=document.execCommand("copy")}catch(a){d=!1}c.removeChild(e);return d},copyAsync:function(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return g.copy(a)?b("Promise").resolve():b("Promise").reject()}};e.exports=g}),null);
__d("FBClipboardLink.react",["cx","fbt","Clipboard","DOMContainer.react","Event","KeyEventController","React","ReactDOM","SubscriptionsHandler","Tooltip.react","isKeyActivation","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={copied:!1,supported:b("Clipboard").isSupported()},this.$1=null,this.$2=null,this.$4=function(a){a.clipboardData&&(a.clipboardData.setData("text/html",this.$7()),a.preventDefault())}.bind(this),this.$6=function(){if(!this.state.supported)return"Unsupported in this browser";return this.state.copied?this.props.tooltipSuccess:this.props.tooltip}.bind(this),this.$3=function(){this.$2&&(window.clearTimeout(this.$2),this.$2=null)}.bind(this),this.$8=function(){this.$2=window.setTimeout(this.$9,this.props.tooltipSuccessDuration)}.bind(this),this.$5=function(a){var c=b("ReactDOM").findDOMNode(this.refs.root);c=b("Clipboard").copy(this.$7(),c);this.$3();this.setState({copied:!0,supported:c});this.$8();this.props.onComplete&&this.props.onComplete(c);this.props.stopPropagation&&a.stopPropagation();this.props.preventDefaultOnClick&&a.preventDefault()}.bind(this),this.$9=function(){this.$3(),this.setState({copied:!1})}.bind(this),c}a.prototype.componentWillUnmount=function(){"use strict";this.$3(),this.$1&&this.$1.release()};a.prototype.componentDidMount=function(){"use strict";if(this.props.type==="html"){var a=b("ReactDOM").findDOMNode(this);this.$1=this.$1||new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Event").listen(a,"copy",this.$4))}this.props.hotkey&&(this.$1=this.$1||new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("KeyEventController").registerKey(this.props.hotkey,this.$5)))};a.prototype.render=function(){"use strict";var a=b("joinClasses")(this.props.className,"_xd6"),c=this.props.children||this.props.label;!c&&this.props.childrenDONOTUSE&&(c=b("React").createElement(b("DOMContainer.react"),null,this.props.childrenDONOTUSE));return b("React").createElement(b("Tooltip.react"),babelHelpers["extends"]({},this.props,{ref:"root",tabIndex:"0",className:a,tooltip:this.$6(),"data-pitloot-persistonclick":!0,onClick:this.$5,onKeyPress:function(a){return b("isKeyActivation")(a)&&this.$5()}.bind(this),position:this.props.position,alignH:this.props.alignment}),b("React").createElement("div",{ref:"content",className:"_2lj1"},c))};a.prototype.$7=function(){"use strict";if(this.props.getValue)return this.props.getValue();else return this.props.value};a.defaultProps={tooltip:h._("Copy Text to Clipboard"),tooltipSuccess:h._("Text Copied to Clipboard"),tooltipSuccessDuration:1e3,type:"string"};e.exports=a}),null);
__d("getFullScreenElement",[],(function(a,b,c,d,e,f){function a(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}e.exports=a}),null);
__d("TimeRanges",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a){"use strict";this.$1=[],this.$1=a}a.prototype.start=function(a){"use strict";this.$1[a]||g(0,2205);return this.$1[a].startTime};a.prototype.end=function(a){"use strict";this.$1[a]||g(0,2205);return this.$1[a].endTime};a.prototype.length=function(){"use strict";return this.$1.length};e.exports=a}),null);
__d("VideoData",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this.$1=a||{aspect_ratio:0,original_height:0,original_width:0,video_id:""}}h.prototype.hasHD=function(){"use strict";return!!this.$1.hd_src};h.prototype.getEncodingTag=function(){"use strict";return this.$1.encoding_tag};h.prototype.getContentCategory=function(){"use strict";return this.$1.content_category};h.prototype.getVideoID=function(){"use strict";return this.$1.video_id};h.prototype.getVideoURL=function(){"use strict";return this.$1.video_url};h.prototype.getAspectRatio=function(){"use strict";return this.$1.aspect_ratio};h.prototype.getRotation=function(){"use strict";return this.$1.rotation||0};h.prototype.hasSubtitles=function(){"use strict";return!!this.$1.subtitles_src};h.prototype.hasDashManifest=function(){"use strict";return!!this.$1.dash_manifest};h.prototype.getDashManifest=function(){"use strict";return this.$1.dash_manifest};h.prototype.hasHighlightsManifest=function(){"use strict";return!!this.$1.highlights_manifest};h.prototype.getHighlightsManifest=function(){"use strict";return this.$1.highlights_manifest};h.prototype.getDashPrefetchedRepresentationIDs=function(){"use strict";return this.$1.dash_prefetched_representation_ids};h.prototype.getSubtitlesSrc=function(){"use strict";this.$1.subtitles_src||g(0,1109);return this.$1.subtitles_src};h.prototype.getPlayableSrcSD=function(){"use strict";return this.$1.sd_src_no_ratelimit?this.$1.sd_src_no_ratelimit:this.getPlayableSrcRateLimitedSD()};h.prototype.getPlayableSrcHD=function(){"use strict";return this.$1.hd_src_no_ratelimit?this.$1.hd_src_no_ratelimit:this.getPlayableSrcRateLimitedHD()};h.prototype.getPlayableSrcRateLimitedSD=function(){"use strict";return this.$1.sd_src};h.prototype.getPlayableSrcRateLimitedHD=function(){"use strict";return this.$1.hd_src};h.prototype.getLiveManifestUrl=function(){"use strict";this.isLiveStream()||g(0,1110);return this.getPlayableSrcRateLimitedSD()};h.prototype.hasRateLimit=function(){"use strict";return!!this.$1.sd_src_no_ratelimit};h.prototype.getStreamType=function(){"use strict";this.$1.stream_type||g(0,1111);return this.$1.stream_type};h.prototype.isBroadcast=function(){"use strict";return!!this.$1.is_broadcast};h.prototype.isServableViaFbms=function(){"use strict";return!!this.$1.is_servable_via_fbms};h.prototype.isLiveStream=function(){"use strict";return!!this.$1.is_live_stream};h.prototype.isLowLatency=function(){"use strict";return!!this.$1.is_low_latency};h.prototype.getDesiredLatencyMs=function(){"use strict";return this.$1.desired_latency_ms};h.prototype.isPredictiveDash=function(){"use strict";return!!this.$1.is_predictive_dash};h.prototype.isEnabledForCVCv3=function(){"use strict";return!!this.$1.is_enabled_for_cvc_v3};h.prototype.isFacecastAudio=function(){"use strict";return!!this.$1.is_facecast_audio};h.prototype.liveRoutingToken=function(){"use strict";return this.$1.live_routing_token};h.prototype.getHDTag=function(){"use strict";return this.$1.hd_tag};h.prototype.getSDTag=function(){"use strict";return this.$1.sd_tag};h.prototype.getProjection=function(){"use strict";return this.$1.projection};h.prototype.getPlayerVersionOverwrite=function(){"use strict";return this.$1.player_version_overwrite};h.prototype.getFalloverData=function(){"use strict";var a=this.$1.fallover_data;return a?a.map(function(a){return new h(a)}):[]};h.prototype.getSphericalConfig=function(){"use strict";return this.$1.spherical_config};h.prototype.isSpherical=function(){"use strict";return!!this.$1.is_spherical};h.prototype.getOriginalHeight=function(){"use strict";return this.$1.original_height};h.prototype.getOriginalWidth=function(){"use strict";return this.$1.original_width};h.prototype.getOverrideConfig=function(){"use strict";return this.$1.override_config};h.prototype.getRawData=function(){"use strict";return this.$1};h.prototype.getPrefetchCache=function(){"use strict";return this.$1.prefetch_cache};h.prototype.getWidevineCert=function(){"use strict";return this.$1.widevine_cert};e.exports=h}),null);
__d("XVideoDataAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/video_data_async/",{video_id:{type:"String",required:!0},width:{type:"Int"},height:{type:"Int"},scrubbing_preference:{type:"Int"},source:{type:"String"},preferred_projection:{type:"Enum",enumType:1},supports_html5_video:{type:"Bool",defaultValue:!0},is_ad:{type:"Bool",defaultValue:!1},force_flash:{type:"Bool",defaultValue:!1},is_omnistab_preview_select_revert:{type:"Bool",defaultValue:!1},allow_dash_prefetch:{type:"Bool",defaultValue:!1},force_hd:{type:"Bool",defaultValue:!1}})}),null);
__d("VideoMimeTypes",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){return a+'; codecs="'+b+", "+c+'"'}f="mp4a.40.2";function b(a){return"avc1.42E0"+a.toString(16).toUpperCase()}function c(a){return"avc1.4D40"+a.toString(16).toUpperCase()}function d(a){return"avc1.6400"+a.toString(16).toUpperCase()}var g="video/mp4";b={h264baseline:a(g,b(30),f),h264main30avc:a(g,c(30),f),h264main31avc:a(g,c(31),f),h264high50avc:a(g,d(50),f),h264high51avc:a(g,d(51),f)};e.exports=b}),null);
__d("canVideoPlayType",["DOM"],(function(a,b,c,d,e,f){var g=null;function a(a){g=g||b("DOM").create("video");return!("canPlayType"in g)?"":g.canPlayType(a)}e.exports=a}),null);
__d("supportsHTML5Video",["DOM","memoize"],(function(a,b,c,d,e,f){e.exports=b("memoize")(function(){return!!b("DOM").create("video").canPlayType})}),null);
__d("isHTML5VideoImplementationUnavailable",["VideoMimeTypes","canVideoPlayType","supportsHTML5Video"],(function(a,b,c,d,e,f){a=function(a){if(a){a=b("canVideoPlayType")(b("VideoMimeTypes").h264main30avc);return a!=="probably"}return!b("supportsHTML5Video")()};e.exports=a}),null);
__d("VideoPlayerMetaData",["regeneratorRuntime","Promise","AsyncRequest","AsyncResponse","TimeSlice","VideoData","XVideoDataAsyncController","isHTML5VideoImplementationUnavailable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h=12e4;function i(a){this.videoID=a}i.prototype.getVideoID=function(){return this.videoID};i.prototype.genVideoData=function(a,c){__p&&__p();var d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:a===void 0&&(a={});e.prev=1;d=this.$1;(!d||a.forceRefetch)&&(this.$2&&(clearTimeout(this.$2),this.$2=null),d=this.$1=this.$3(a),this.$2=setTimeout(b("TimeSlice").guard(function(){this.$1=null,c()}.bind(this),"VideoPlayerMetaData cacheTimeout",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),a.cacheTimeout||h));e.next=6;return b("regeneratorRuntime").awrap(d);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9;e.t0=e["catch"](1);throw e.t0;case 12:case"end":return e.stop()}},null,this,[[1,9]])};i.prototype.$3=function(a){__p&&__p();var c=b("XVideoDataAsyncController").getURIBuilder().setString("video_id",this.videoID).setBool("supports_html5_video",!b("isHTML5VideoImplementationUnavailable")(!0)),d=a.forceFlash,e=a.allowDashPrefetch;a=a.forceHD;d!==void 0&&(c=c.setBool("force_flash",d));e!==void 0&&(c=c.setBool("allow_dash_prefetch",e));a!==void 0&&(c=c.setBool("force_hd",a));var f=c.getURI();return new(b("Promise"))(function(a,c){new(b("AsyncRequest"))(f).setMethod("GET").setURI(f).setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(d){d=d.payload;!d.error?a(new(b("VideoData"))(d)):c(d.error)}).setErrorHandler(function(a){c(a.getErrorDescription())}).send()})};i.get=function(a){g[a]||(g[a]=new i(a));return g[a]};i.genVideoData=function(a,c,d){return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:c===void 0&&(c={});d===void 0&&(d=function(){});e.next=4;return b("regeneratorRuntime").awrap(i.get(a).genVideoData(c,d));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},null,this)};e.exports=i}),null);
__d("VideoWithClickPlayPause",["VideoPlayerReason","logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.$2=this.$1.getVideoNode(),this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}a.prototype.$3=function(){"use strict";var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");if(this.$1.isState("playing")){if(this.$1.getOption("VideoWithLiveBroadcast","isLive")||a&&a.getOption("VideoWithLiveBroadcast","isLive")||this.$4()||this.$5())return;this.$1.pause(b("VideoPlayerReason").USER)}else b("logVideosClickTracking")(this.$2),this.$1.play(b("VideoPlayerReason").USER)};a.prototype.$4=function(){"use strict";var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");a=a&&a.getOption("VideoWithInstreamVideo","controller");return a&&!a.getConfig().canPauseAdBreak};a.prototype.$5=function(){"use strict";return this.$1.getOption("VideoWithInstreamVideo","disableClickToPause")};e.exports=a}),null);
__d("VideoPlayerLoggerFallbackReasons",[],(function(a,b,c,d,e,f){e.exports={TIMEOUT:"timeout",FLASH_ERROR:"flash_error",FLASH_UNAVAILABLE:"flash_unavailable"}}),null);
__d("VideoWithFallbackMode",["Event","SubscriptionsHandler","TimeSlice","VideoPlayerExperiments","VideoPlayerLoggerEvent","VideoPlayerLoggerFallbackReasons","VideoPlayerReason","Visibility"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){"use strict";this.$1=!1,this.$2=!1,this.$5=function(){this.$1=!0,b("VideoPlayerExperiments").disableFallbackModeForInactiveTab&&this.$2&&(this.$6.play(b("VideoPlayerReason").FALLBACK_MODE),this.$2=!1)}.bind(this),this.$8=function(){this.$1=!1}.bind(this),this.$3=new(b("SubscriptionsHandler"))(),c||(c=a,a=null),this.$4=c,a&&this.enable(a)}a.prototype.enable=function(a){"use strict";__p&&__p();this.$3.engage();this.$6=a;if(this.$6.isImplementationUnavailable()||this.$6.getOption("SphericalVideoPlayer","isUnavailable")){this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_UNAVAILABLE);return}this.$3.addSubscriptions(b("Event").listen(window,"blur",this.$8),b("Event").listen(window,"focus",this.$5),b("Visibility").addListener(b("Visibility").HIDDEN,this.$8),b("Visibility").addListener(b("Visibility").VISIBLE,this.$5),a.addListener("error",this.$9.bind(this)));if(this.$4.fallbackTimeoutMs){a=this.$4.fallbackTimeoutMs;this.$10=setTimeout(b("TimeSlice").guard(function(){this.$6.isState("loading")&&(this.$6.pause(b("VideoPlayerReason").FALLBACK_MODE),this.$7(b("VideoPlayerLoggerFallbackReasons").TIMEOUT),this.$2=!0)}.bind(this),"VideoWithFallbackMode fallbackTimeout",{propagationType:b("TimeSlice").PropagationType.EXECUTION}),a)}};a.prototype.disable=function(){"use strict";this.$3.release(),clearTimeout(this.$10),this.$10=null,this.$6=null};a.prototype.$9=function(a){"use strict";if(this.$6.isState("fallback"))return;this.$6.isState("playing")&&this.$6.pause(b("VideoPlayerReason").FALLBACK_MODE);this.$6.abortLoading();a?this.$7(a):(this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_ERROR),this.$2=!0)};a.prototype.$7=function(a){"use strict";if(b("VideoPlayerExperiments").disableFallbackModeForInactiveTab&&!this.$1)return;this.$6.setState("fallback");a===b("VideoPlayerLoggerFallbackReasons").TIMEOUT&&this.$6.emit("VideoWithStallRecoveryOverlay/timeout");this.$6.logEvent(b("VideoPlayerLoggerEvent").ENTERED_FALLBACK,{debug_reason:a})};e.exports=a}),null);
__d("AbstractVideoPlayerApi",["invariant","EventEmitter","VideoPlayerApiEvents"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(a,b("EventEmitter"));i=h&&h.prototype;a.prototype.addListener=function(){"use strict";for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return i.addListener.apply(this,b)};a.prototype.emit=function(){"use strict";for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return i.emit.apply(this,b)};a.prototype.setRelativeSphericalOrientation=function(a,b){"use strict"};a.isImplementationUnavailable=function(){"use strict";return!0};a.prototype.isDrm=function(){"use strict";return!1};a.prototype.setup=function(){"use strict"};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("MosUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={getQualityLabel:function(a,b){if(a===0||b===0)return 0;if(a<b){var c=a;a=b;b=c}c=a/b;return c>16/9?Math.round(a/(16/9)):b},getMosValue:function(a,b){__p&&__p();var c=null,d=null,e=null,f=null;for(var g=0;g<a.length;g++){var h=a[g].qualityLabel;if(h<=b)e=a[g].mosValue,c=h;else{f=a[g].mosValue;d=h;break}}if(c===null&&d===null)return 0;else if(c===null&&f!==null)return f;else if(d===null&&e!==null)return e;else if(f!==null&&e!==null&&c!==null&&d!==null){h=e+(b-c)*(f-e)/(d-c);return h<0?0:h>100?100:h}return 0},parsePlaybackMos:function(a){__p&&__p();a=a.split(",");var b=[];for(var c=0;c<a.length;c++){var d=a[c].split(":");if(d.length!==2)return null;var e=Number(d[0]);d=Number(d[1]);if(isNaN(e)||isNaN(d))return null;b.push({qualityLabel:e,mosValue:d})}return b},filterTracksWithExpensiveMos:function(a,b,c,d,e,f){__p&&__p();if(a.length<2)return a;var h=a.map(function(a){return{track:a,mosValue:a.playbackResolutionMos?g.getMosValue(a.playbackResolutionMos,g.getQualityLabel(b,c)):-1}}),i=[],j=e;for(var k=h.length-1;k>0;k--){if(h[k].mosValue===-1||h[k-1].mosValue===-1)return a;var l=h[k].track.bandwidth||-1,m=h[k-1].track.bandwidth||-1;if(l===-1||m===-1)return a;if(h[k].mosValue<h[k-1].mosValue&&l>=m)continue;l=h[k-1].track.bandwidth!==null?h[k].mosValue-h[k-1].mosValue:Infinity;if(l<=j&&h[k].track.bandwidth&&d/h[k].track.bandwidth<=f){j-=l;continue}else j=e;i.push(h[k].track)}i.push(h[0].track);i.reverse();return i}};e.exports=g}),null);
__d("VideoPlaybackQuality",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().droppedVideoFrames;a=a.webkitDroppedFrameCount;return typeof a==="number"?a:0}function b(a){if(typeof a.getVideoPlaybackQuality==="function")return a.getVideoPlaybackQuality().totalVideoFrames;a=a.webkitDecodedFrameCount;return typeof a==="number"?a:0}e.exports={getDroppedFrames:a,getTotalFrames:b}}),null);
__d("VideoPlayerConnectionQuality",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={POOR:"POOR",MODERATE:"MODERATE",GOOD:"GOOD",EXCELLENT:"EXCELLENT"},h=[{bandwidth:5e5,connectionQuality:g.POOR},{bandwidth:2e6,connectionQuality:g.MODERATE},{bandwidth:1e7,connectionQuality:g.GOOD}],i=100,j=null,k=null;a={evaluate:function(a){__p&&__p();if(j!==null&&k!==null&&j>=Date.now()-i)return k;a=a();var b=null;for(var c=0;c<h.length;c++)if(a<h[c].bandwidth){b=h[c].connectionQuality;break}b===null&&(b=g.EXCELLENT);j=Date.now();k=b;return b}};e.exports=a}),null);
__d("VideoPlayerReasonTransitionHelper",["VideoPlayerReasonTransitionExperiment"],(function(a,b,c,d,e,f){function a(a){"use strict";this.$1=a}a.prototype.getReason=function(){"use strict";return!b("VideoPlayerReasonTransitionExperiment").provideReason?null:this.$1};e.exports=a}),null);
__d("VideoCover",["invariant","Bootloader","CSS","EventListener","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d,e){__p&&__p();e===void 0&&(e=null),this.$7=new(b("SubscriptionsHandler"))(),this.$13=function(){this.$5&&b("CSS").show(this.$1)}.bind(this),this.$14=function(){this.$5&&b("CSS").hide(this.$1)}.bind(this),this.$9=function(){this.$3!=null&&this.$3.length>0?b("Bootloader").loadModules(["PhotoSnowlift"],function(a){return a.bootstrap(this.$3)}.bind(this),"VideoCover"):this.$8&&this.$8.clickVideo()}.bind(this),this.$10=function(){b("CSS").hide(this.$1)}.bind(this),this.$12=function(){if(this.$8){var a=this.$8.getOption("Looping","isLooping");if(this.$4||a)return;b("CSS").show(this.$1)}}.bind(this),this.$11=function(){this.$8&&this.$8.isState("fallback")&&this.$6&&b("CSS").show(this.$1)}.bind(this),a instanceof Element||g(0,4829),this.$1=a,c[0]instanceof Element||g(0,4830),this.$2=c[0],this.$3=d,e&&(this.$4=e.hiddenAfterFinish,this.$5=e.showWhileBuffering,this.$6=e.showAfterFallback),b("EventListener").listen(this.$1,"click",this.$9)}a.prototype.disable=function(){"use strict";this.$7.release(),this.$8&&this.$8.unregisterOption("VideoCover","coverElement"),this.$8=null};a.prototype.enable=function(a){"use strict";this.$8=a,a.getState()==="playing"&&this.$10(),this.$7.addSubscriptions(a.addListener("stateChange",this.$11),a.addListener("beginPlayback",this.$10),a.addListener("finishPlayback",this.$12),a.addListener("buffering",this.$13),a.addListener("buffered",this.$14)),a.registerOption("VideoCover","coverElement",function(){return this.$1}.bind(this))};a.prototype.getCurrentCover=function(){"use strict";return this.$2};a.prototype.setSnowLiftURI=function(a){"use strict";this.$3=a};e.exports=a}),null);
__d("VideoNodeStaledScreen",["CSS","EventListener","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$3=new(b("SubscriptionsHandler"))(),this.$5=function(){b("CSS").show(this.$1)}.bind(this),this.$4=function(){b("CSS").hide(this.$1)}.bind(this),this.$1=a,this.$2=null,b("EventListener").listen(this.$1,"click",this.$4)}a.prototype.enable=function(a){"use strict";this.$2=a,this.$3.addSubscriptions(this.$2.addListener("videoNodeStaled",this.$5))};a.prototype.disable=function(){"use strict";this.$3.release(),this.$2=null};e.exports=a}),null);
__d("VideoUpdateStateDirectory",["VideoStateDirectory"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$2=function(){var a=this.$1,c=a.getVideoID(),d=a.getCurrentTimePosition();a=a.getPlaybackDuration();b("VideoStateDirectory").setPlaybackState(c,d,a)}.bind(this)}a.prototype.enable=function(a){this.$1=a,a.addListener("finishPlayback",this.$2),a.addListener("pausePlayback",this.$2)};a.prototype.disable=function(){};e.exports=a}),null);
__d("VideoPlayerShakaBandwidthEstimator",["CacheStorage","Run","VideoPlayerShakaGlobalConfig","requireWeak"],(function(a,b,c,d,e,f){__p&&__p();var g;b("requireWeak")("Shaka",function(a){g=a.util.EWMACacheBandwidthEstimator});var h=null,i=!1;function j(){"use strict";var a=new(b("CacheStorage"))("localstorage","_video_"),c=a.get("bandwidthEstimate");this.$1={isMockObject:!0,getBandwidth:function(a){return c},getFastMovingBandwidth:function(){return c}};g&&(this.$1=new g(b("VideoPlayerShakaGlobalConfig").getNumber("cache_delay",30),b("VideoPlayerShakaGlobalConfig").getNumber("cache_bandwidth",2e6),c),this.$1.isMockObject=!1);b("Run").onUnload(function(){a.set("bandwidthEstimate",this.$1.getBandwidth())}.bind(this))}j.prototype.getEstimator=function(){"use strict";return this.$1};j.getInstance=function(){"use strict";(h===null||h.getEstimator().isMockObject&&g)&&(h=new j());return h};j.getEstimator=function(){"use strict";return j.getInstance().getEstimator()};j.getBandwidth=function(a){"use strict";var b=j.getEstimator();return b.getBandwidth(a)};j.getBandwidthByVideoType=function(a){"use strict";return j.getBandwidth(j.getBandwidthModel(a))};j.getBandwidthModel=function(a){"use strict";return a?"aggressive":"conservative"};j.isAutoplayBandwidthRestrained=function(a){"use strict";var c=j.getEstimator(),d;b("VideoPlayerShakaGlobalConfig").getBool("block_autoplay_use_fast_moving_average",!0)&&i?d=c.getFastMovingBandwidth():d=c.getBandwidth();c=a?b("VideoPlayerShakaGlobalConfig").getNumber("live_block_autoplay_bandwidth_threshold",25e4):b("VideoPlayerShakaGlobalConfig").getNumber("block_autoplay_bandwidth_threshold",123034);d===null||d>=c?i=!1:i=!0;return i};e.exports=j}),null);
__d("VideoWithLoopingPlayback",["VideoPlayerLoggerSource","VideoPlayerReason","setImmediate"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){c===void 0&&(c=-1),this.$5=!1,this.$6=function(){var a=this.$1.getOption("FeedAutoplay","isVisibleForAutoplay"),c=this.$1.getOption("WatchAndScroll","isActive"),d=this.$1.getIsInChannel(),e=this.$1.getSource()===b("VideoPlayerLoggerSource").TAHOE;!this.$5&&(a||a===void 0)&&!c&&!d&&!e&&(!this.$4||this.$3<this.$4)&&(b("setImmediate")(function(){return this.$1.play(b("VideoPlayerReason").LOOP)}.bind(this)),this.$3++,this.$4&&this.$3===this.$4-1&&this.$1.setOption("Looping","isLooping",!1))}.bind(this),this.$1=a,this.$2=!0,this.$3=1,this.$4=c>-1?c:null,this.$1.addListener("finishPlayback",this.$6),this.$1.registerOption("Looping","isLooping",function(){return this.$2}.bind(this),function(a){return this.$7(a)}.bind(this)),this.$1.registerOption("Looping","disabled",function(){return this.$5}.bind(this),function(a){return this.$5=a}.bind(this))}a.prototype.isLooping=function(){"use strict";return this.$2};a.prototype.getLoopCount=function(){"use strict";return this.$3};a.prototype.getMaxLoopCount=function(){"use strict";return this.$4};a.prototype.setMaxLoopCount=function(a){"use strict";this.$4=a>-1?a:null};a.prototype.$7=function(a){"use strict";this.$2=a};e.exports=a}),null);
__d("SphericalVideoPlayerEvents",[],(function(a,b,c,d,e,f){e.exports={SET_RELATIVE_SPHERICAL_ORIENTATION:"setRelativeSphericalOrientation",SET_ABSOLUTE_SPHERICAL_ORIENTATION:"setAbsoluteSphericalOrientation",SET_FIELD_OF_VIEW:"setFieldOfView",SET_VIDEO_PROJECTION:"setVideoProjection",SET_STEREO_MODE:"setStereoMode",SET_PARTIAL_LIMITS:"setPartialLimits",SET_VIEWPORT_CONTROL_CONFIG:"setViewportControlConfig"}}),null);
__d("forwardEvent",[],(function(a,b,c,d,e,f){function a(a,b,c){return a.addListener(c,function(){for(var a=arguments.length,d=new Array(a),e=0;e<a;e++)d[e]=arguments[e];return b.emit.apply(b,[c].concat(d))})}e.exports=a}),null);
__d("CoverVideoOffsetType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VERTICAL:0,HORIZONTAL:1})}),null);
__d("VideoPlayerAbrEvaluation",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IDEAL:"ideal",CONSERVATIVE:"conservative",AGGRESSIVE:"aggressive",CONSERVATIVE_RESOLUTION_CONSTRAINED:"conservative_resolution_constrained"})}),null);
__d("VideoPlayerFormats",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INLINE:"inline",SNOWLIFT:"snowlift",PERMALINK:"permalink",CHANNEL:"channel",FULL_SCREEN:"full_screen",SOCIAL_PLAYER:"social_player",TV:"tv",MISC:"misc",WATCH_SCROLL:"watch_scroll",WATCH_SCROLL_APP_BACKGROUND:"watch_scroll_app_background",WATCH_AND_GO:"watch_and_go",WATCH_AND_BROWSE:"watch_and_browse",CANVAS:"canvas",TAHOE:"tahoe",FB_STORIES:"fb_stories",UNKNOWN:"unknown"})}),null);
__d("VideoQualityClass",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UHD:"uhd",HD:"hd",SD:"sd"})}),null);
__d("SphericalMediaConstants",[],(function(a,b,c,d,e,f){"use strict";a={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HALF_EQUIRECT_PARTIAL_LIMIT:85,HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",stories:"stories",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};e.exports=a}),null);