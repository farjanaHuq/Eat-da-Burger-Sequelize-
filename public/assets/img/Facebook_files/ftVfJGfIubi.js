if (self.CavalryLogger) { CavalryLogger.start_js(["mgmNC"]); }

__d("RTCWebUserActionsDebugTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsDebugLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsDebugLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsDebugLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCallID=function(a){this.$1.call_id=a;return this};a.prototype.setCallType=function(a){this.$1.call_type=a;return this};a.prototype.setCheckpoint=function(a){this.$1.checkpoint=a;return this};a.prototype.setClientTime=function(a){this.$1.client_time=a;return this};a.prototype.setComponent=function(a){this.$1.component=a;return this};a.prototype.setConferenceName=function(a){this.$1.conference_name=a;return this};a.prototype.setConferenceState=function(a){this.$1.conference_state=a;return this};a.prototype.setDeviceID=function(a){this.$1.device_id=a;return this};a.prototype.setErrorDomain=function(a){this.$1.error_domain=a;return this};a.prototype.setErrorType=function(a){this.$1.error_type=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setEventTimeElapsed=function(a){this.$1.event_time_elapsed=a;return this};a.prototype.setIsCaller=function(a){this.$1.is_caller=a;return this};a.prototype.setMediaType=function(a){this.$1.media_type=a;return this};a.prototype.setPage=function(a){this.$1.page=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={call_id:!0,call_type:!0,checkpoint:!0,client_time:!0,component:!0,conference_name:!0,conference_state:!0,device_id:!0,error_domain:!0,error_type:!0,event:!0,event_time_elapsed:!0,is_caller:!0,media_type:!0,page:!0,surface:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("RTCWebUserActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCallID=function(a){this.$1.call_id=a;return this};a.prototype.setCallType=function(a){this.$1.call_type=a;return this};a.prototype.setCheckpoint=function(a){this.$1.checkpoint=a;return this};a.prototype.setClientTime=function(a){this.$1.client_time=a;return this};a.prototype.setComponent=function(a){this.$1.component=a;return this};a.prototype.setConferenceName=function(a){this.$1.conference_name=a;return this};a.prototype.setConferenceState=function(a){this.$1.conference_state=a;return this};a.prototype.setDeviceID=function(a){this.$1.device_id=a;return this};a.prototype.setErrorDomain=function(a){this.$1.error_domain=a;return this};a.prototype.setErrorType=function(a){this.$1.error_type=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setEventTimeElapsed=function(a){this.$1.event_time_elapsed=a;return this};a.prototype.setIsCaller=function(a){this.$1.is_caller=a;return this};a.prototype.setMediaType=function(a){this.$1.media_type=a;return this};a.prototype.setPage=function(a){this.$1.page=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={call_id:!0,call_type:!0,checkpoint:!0,client_time:!0,component:!0,conference_name:!0,conference_state:!0,device_id:!0,error_domain:!0,error_type:!0,event:!0,event_time_elapsed:!0,is_caller:!0,media_type:!0,page:!0,surface:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("RTWebLoggingCallType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({P2P:"p2p",MW:"mw",ESCALATED:"escalated"})}),null);
__d("RTWebLoggingEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TAP:"tap",IMPRESSION:"impression",ERROR:"error",RING_TONE_PLAYED:"ring_tone_played",CHECKPOINT:"checkpoint"})}),null);
__d("RTWebLoggingMediaType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIDEO:"video",AUDIO:"audio",ESCALATED:"escalated"})}),null);
__d("RTWebLoggingPage",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSENGER_DOT_COM:"messenger_dot_com",FACEBOOK:"facebook",MOBILE_WEB:"mweb",WORKPLACE:"workplace"})}),null);
__d("RTWebUserActionLogger",["CurrentUser","FBRTCConsoleLogger","FBRTCSupport","RTCWebUserActionsDebugTypedLogger","RTCWebUserActionsTypedLogger","RTWebLoggingCallType","RTWebLoggingComponent","RTWebLoggingEvent","RTWebLoggingMediaType","RTWebLoggingPage","RTWebLoggingSharedInstance","immutable","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("immutable").Map;function a(){this.$2=g(),this.$3=new Set(),this.$4=b("RTWebLoggingSharedInstance").getInstance().getDeviceID(),this.$5=this.$6(),this.clearCache()}a.prototype.clearCache=function(){this.$1={callID:void 0,callType:void 0,mediaType:void 0,conferenceName:void 0,conferenceState:void 0}};a.prototype.logImpression=function(a){this.logEvent(babelHelpers["extends"]({eventName:b("RTWebLoggingEvent").IMPRESSION},a))};a.prototype.logPreCallImpression=function(a){this.clearCache(),this.logImpression(a)};a.prototype.logPreCallClick=function(a){this.clearCache(),this.logClick(a)};a.prototype.logClick=function(a){this.logEvent(babelHelpers["extends"]({eventName:b("RTWebLoggingEvent").TAP},a))};a.prototype.logError=function(a){this.logEvent(babelHelpers["extends"]({eventName:b("RTWebLoggingEvent").ERROR},a))};a.prototype.startTimer=function(a){var c=b("performanceNow")();this.$2=this.$2.set(a,c);this.logCheckpoint({checkpoint:a+"_timerStart"});this.$7(a,{startTime:c})};a.prototype.logStopTimer=function(a){var b=a.checkpointName===void 0?a.timerName:a.checkpointName,c=a.event||{};c.timeElapsed=this.$8(a.timerName);this.logCheckpoint(babelHelpers["extends"]({checkpoint:b+"_timerEnd"},c));return c.timeElapsed};a.prototype.logCheckpoint=function(a){this.logEvent(babelHelpers["extends"]({eventName:b("RTWebLoggingEvent").CHECKPOINT},a))};a.prototype.$9=function(a){return a===null||a===void 0};a.prototype.logEvent=function(a){__p&&__p();var b=this.$1;b.callID=this.$9(a.callID)?b.callID:a.callID;b.callType=a.callType||b.callType;b.conferenceState=a.conferenceState||b.conferenceState;b.conferenceName=this.$9(a.conferenceName)?b.conferenceName:a.conferenceName;b.isCaller=a.isCaller==null?b.isCaller:a.isCaller;b.mediaType=a.mediaType||b.mediaType;this.$10(a,b);b=this.$11(a,b);this.$7(a.eventName,b)};a.prototype.$11=function(a,c){var d=new(b("RTCWebUserActionsTypedLogger"))();d.setCallType(c.callType).setDeviceID(this.$4).setClientTime(Date.now()).setErrorDomain(a.errorDomain).setErrorType(a.errorType).setComponent(a.component).setConferenceState(c.conferenceState).setEvent(a.eventName).setMediaType(c.mediaType).setPage(this.$5).setCallID(c.callID).setConferenceName(c.conferenceName).setSurface(a.surface).setCheckpoint(a.checkpoint).setEventTimeElapsed(a.timeElapsed).setIsCaller(c.isCaller).log();return d.getData()};a.prototype.$10=function(a,c){var d=new(b("RTCWebUserActionsDebugTypedLogger"))();d.setCallType(c.callType).setDeviceID(this.$4).setClientTime(Date.now()).setErrorDomain(a.errorDomain).setErrorType(a.errorType).setComponent(a.component).setConferenceState(c.conferenceState).setEvent(a.eventName).setMediaType(c.mediaType).setPage(this.$5).setCallID(c.callID).setConferenceName(c.conferenceName).setSurface(a.surface).setCheckpoint(a.checkpoint).setEventTimeElapsed(a.timeElapsed).setIsCaller(c.isCaller).log();return d.getData()};a.prototype.getCallType=function(a,c){c===void 0&&(c=!1);if(a===null||a===void 0)return null;if(a)return b("RTWebLoggingCallType").MW;else if(c)return b("RTWebLoggingCallType").ESCALATED;else return b("RTWebLoggingCallType").P2P};a.prototype.getAudioVideoComponent=function(a){return a===null||a===void 0?null:a?b("RTWebLoggingComponent").AUDIO_CALL:b("RTWebLoggingComponent").VIDEO_CALL};a.prototype.getMediaType=function(a,c){c===void 0&&(c=!1);if(c)return b("RTWebLoggingMediaType").ESCALATED;else if(a)return b("RTWebLoggingMediaType").AUDIO;else return b("RTWebLoggingMediaType").VIDEO};a.prototype.logErrorOnceforDomain=function(a,b){this.$3.has(a)||(this.$3.add(a),this.logError({errorDomain:a,errorType:b.toString()}))};a.prototype.clearLoggedDomains=function(){this.$3.clear()};a.prototype.getWebLoggerInfoFromStore=function(a){a=a.callInfo;var b=a.callID,c=a.conferenceName;a=a.conferenceState;return{callID:b,conferenceName:c,conferenceState:a}};a.prototype.$6=function(){__p&&__p();if(b("FBRTCSupport").isMobileDevice())return b("RTWebLoggingPage").MOBILE_WEB;else if(b("CurrentUser").isWorkUser())return b("RTWebLoggingPage").WORKPLACE;var a=window.location.hostname;if(a.search("facebook")!==-1)return b("RTWebLoggingPage").FACEBOOK;else if(a.search("messenger")!==-1)return b("RTWebLoggingPage").MESSENGER_DOT_COM;return a};a.prototype.$8=function(a){var c=this.$2.get(a);if(c){this.$2=this.$2.remove(a);return parseInt(b("performanceNow")()-c,10)}return null};a.prototype.$7=function(a,c){a=a==null?"null":a;b("FBRTCConsoleLogger").getInstance().getLogHistory().log(a,JSON.stringify(c))};e.exports=new a()}),null);
__d("MessengerProfileImageWrapperReact.bs",["cx","cssVar","React","ReactDOMRe.bs","CurrentUser","ReasonReact.bs","TooltipData","joinClasses","bs_js_primitive","MessagingThreadType","getViewportDimensions","LazyWorkMultiCompanyChatTooltipReact.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("ReasonReact.bs").statelessComponent("MessengerProfileImageWrapperReact");function j(a,c,d,e,f,g,h,j,k,l,m,n){__p&&__p();var o=l!==void 0?l:"",p=function(){__p&&__p();if(c!==void 0)return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon _67in"},b("bs_js_primitive").valFromOption(c)));else{var a;if(d!==void 0||e!==void 0||k!==void 0)a=1;else return null;if(a===1)if(m)if(e!==void 0)if(b("CurrentUser").isWorkUser())return null;else{a=e;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _1zvi":"")+(a?"":" _2poo")}))}else if(k!==void 0)if(b("CurrentUser").isWorkUser()){a=k;var f=j!==void 0?j>45:!1;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("ReasonReact.bs").element(void 0,void 0,b("LazyWorkMultiCompanyChatTooltipReact.bs").make([b("React").createElement("div",{className:(a&&!f?"_4rwy":"")+(a&&f?" _2zb5":"")})])))}else return null;else if(b("CurrentUser").isWorkUser())return null;else{a=d;return b("React").createElement("div",{className:"_4ld_ _2pom"},b("React").createElement("div",{className:"_2pon"+(a?" _2poo":"")+(a?"":" _2pop")}))}else return null}};return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){__p&&__p();var c=j!==void 0?""+(String(j)+"px"):"auto",d=g!==void 0?g===b("MessagingThreadType").ROOM:!1,e;if(h!==void 0){var i=h;if(i==="")e={};else{var k=b("getViewportDimensions")().width,l=parseInt("700px".replace("px",""),10);k=k<=l;l=k?"above":"left";e=Object.assign({},b("TooltipData").propsFor(i,l))}}else e={};k=d?{background:f!==void 0?f:"#0084ff",height:c,width:c}:{height:c,width:c};i={className:b("joinClasses")("_4ldz",o),style:{height:c,width:c}};a!==void 0&&(i["aria-hidden"]=b("bs_js_primitive").valFromOption(a));return b("React").cloneElement(b("React").createElement("div",i,b("ReactDOMRe.bs").createElementVariadic("div",{className:"_4ld-"+(d?" _180i":""),style:k},n),p(0)),e)},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){var c=a.className;return j(b("bs_js_primitive").nullable_to_opt(a.ariaHidden),b("bs_js_primitive").nullable_to_opt(a.customBadge),b("bs_js_primitive").nullable_to_opt(a.isMessengerUser),void 0,b("bs_js_primitive").nullable_to_opt(a.threadColor),b("bs_js_primitive").nullable_to_opt(a.threadType),b("bs_js_primitive").nullable_to_opt(a.tooltipContent),b("bs_js_primitive").nullable_to_opt(a.size),a.isMultiCompany,c==null?"":c,a.showBadge,[].concat(a.children))});f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerContactImage.react",["Image.react","MessengerProfileImageWrapperReact.bs","React"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("MessengerProfileImageWrapperReact.bs").jsComponent;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:this.props.className},b("React").createElement(h,{isMessengerUser:this.props.isMessengerUser,isPartiesUser:this.props.isPartiesUser,size:this.props.size,customBadge:this.props.customBadge,showBadge:!1},b("React").createElement(b("Image.react"),{alt:"",height:this.props.size,src:this.props.src,width:this.props.size})))};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("MNPlatformAttributionTags",[],(function(a,b,c,d,e,f){e.exports={ATTRIBUTION_TAGS_PREFIX:"bnp:trigger:",CUSTOMER_CHAT_PLUGIN:"customer_chat_plugin",MESSENGERDOTCOM:"messengerdotcom",MESSENGER_WEB:"messenger_web",MESSENGER_WEB_SEARCH:"messenger_web_search",M_DOT_ME:"m_dot_me"}}),null);
__d("MessengerAttributionTagsStore",["MessengerActions","MessengerStore"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("MessengerStore"));g=c&&c.prototype;function a(){"use strict";g.constructor.call(this),this.$MessengerAttributionTagsStore1={messagingTags:null,threadID:null}}a.prototype.getState=function(){"use strict";return this.$MessengerAttributionTagsStore1};a.prototype.__onDispatch=function(a){"use strict";__p&&__p();switch(a.type){case b("MessengerActions").Types.UPDATE_THREAD_TAG:this.$MessengerAttributionTagsStore1.messagingTags=a.messagingTags;this.$MessengerAttributionTagsStore1.threadID=a.threadID;this.emitChange();break;case b("MessengerActions").Types.SELECT_THREAD:this.$MessengerAttributionTagsStore1.messagingTags=null;this.$MessengerAttributionTagsStore1.threadID=null;this.emitChange();break}};e.exports=new a()}),null);
__d("MessengerDiscoveryLoggingEnums",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT_PREFIX:"entrypoint:"})}),null);
__d("MessengerDiscoveryEntryPointsLoggingHelper",["MessengerDiscoveryEntryPoint","MessengerDiscoveryLoggingEnums"],(function(a,b,c,d,e,f){"use strict";a={getEntryPointsLoggingTagStr:function(a){if(a.length==0||Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(a[0])==-1)throw new Error("Please use enums in MessengerDiscoveryEntryPoints class");return b("MessengerDiscoveryLoggingEnums").ENTRYPOINT_PREFIX+a.join(":")}};e.exports=a}),null);
__d("MNPlatformTagsDataManager",["MessagingSourceEnum","MessengerActions","MessengerAttributionTagsStore","MessengerDiscoveryEntryPoint","MessengerDiscoveryEntryPointsLoggingHelper","MNPlatformAttributionTags"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={getTags:function(a){__p&&__p();a===void 0&&(a=null);var c=null,d=null;switch(a){case b("MessagingSourceEnum").PAGES_MESSAGE_SHORTLINK:c=b("MNPlatformAttributionTags").M_DOT_ME;break;case b("MessagingSourceEnum").MESSENGER_WEB:c=b("MNPlatformAttributionTags").MESSENGER_WEB;break;case b("MessagingSourceEnum").MESSENGER_WEB_SEARCH:c=b("MNPlatformAttributionTags").MESSENGER_WEB_SEARCH;d=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_WEB_SEARCH]);break;case b("MessagingSourceEnum").CUSTOMER_CHAT_PLUGIN:c=b("MNPlatformAttributionTags").CUSTOMER_CHAT_PLUGIN;break;case b("MessagingSourceEnum").PAGE_PLUGIN_MESSAGE:c=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_PAGES_PLUGIN]);break;default:c="";break}a=[c];d!==null&&a.push(d);return a},updateThreadTabAfterSelectThread:function(a,c){a===void 0&&(a=null);c===void 0&&(c=null);a=this.getTags(a);b("MessengerActions").changeThreadTag(a,c)},hasThreadTags:function(a){var c=b("MessengerAttributionTagsStore").getState();return!!(c.messagingTags&&a&&c.threadID&&c.threadID.toString()===a)},getThreadTags:function(){var a=b("MessengerAttributionTagsStore").getState();return a.messagingTags}}}),null);
__d("MessengerSpinnerReact.bs",["cx","ix","fbt","Image.bs","ReasonReact.bs","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=h("86853"),k=h("86857"),l=h("86854"),m=b("ReasonReact.bs").statelessComponent("MessengerSpinnerReact");function n(a,c,d,e){__p&&__p();var f=a!==void 0?a:"",g=c!==void 0?c:"blue",h=d!==void 0?d:24,n=function(){var a=h===24;if(a){a=g==="blue";if(a)return j;else return k}else return l};return[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],function(){return b("ReasonReact.bs").element(void 0,void 0,b("Image.bs").make(b("joinClasses")(f,"_3u55 _3qh2"),void 0,i._("Loading..."),!0,n(0),h,void 0,h,void 0,[]))},m[9],m[10],m[11],m[12]]}a=b("ReasonReact.bs").wrapReasonForJs(m,function(a){var b=a.className,c=a.color;a=a.size;return n(b==null?"":b,c==null?"blue":c,a==null?24:a,[])});c=32;d=24;f.large_size=c;f.medium_size=d;f.blue_src=j;f.grey_src=k;f.large_blue_src=l;f.component=m;f.make=n;f.jsComponent=a}),null);
__d("MessengerSpinner.react",["MessengerSpinnerReact.bs"],(function(a,b,c,d,e,f){e.exports=b("MessengerSpinnerReact.bs").jsComponent,e.exports.large_size=b("MessengerSpinnerReact.bs").large_size,e.exports.medium_size=b("MessengerSpinnerReact.bs").medium_size}),null);
__d("MessengerContactImageReact.bs",["Image.bs","React","bs_belt_Option","ReasonReact.bs","bs_js_primitive","bs_js_null_undefined","MessengerContactImage.react","MessengerProfileImageWrapperReact.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReasonReact.bs").statelessComponent("MessengerContactImageReact");function h(a,c,d,e,f,h,i,j){var k=i!==void 0?i:!1;return[g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],function(){return b("React").createElement("div",{className:b("bs_belt_Option").getWithDefault(a,"")},b("ReasonReact.bs").element(void 0,void 0,b("MessengerProfileImageWrapperReact.bs").make(!0,c,d,e,void 0,void 0,void 0,f,k,void 0,k,[b("ReasonReact.bs").element(void 0,void 0,b("Image.bs").make(void 0,"",void 0,void 0,h,f,void 0,f,void 0,[]))])))},g[9],g[10],g[11],g[12]]}c=b("ReasonReact.bs").wrapReasonForJs(g,function(a){return h(b("bs_js_primitive").nullable_to_opt(a.className),b("bs_js_primitive").nullable_to_opt(a.customBadge),b("bs_js_primitive").nullable_to_opt(a.isMessengerUser),b("bs_js_primitive").nullable_to_opt(a.isPartiesUser),a.size,b("bs_js_primitive").nullable_to_opt(a.src),b("bs_js_primitive").nullable_to_opt(a.isMultiCompany),[])});function a(a,c,d,e,f,g,h,i){return b("ReasonReact.bs").wrapJsForReason(b("MessengerContactImage.react"),{className:b("bs_js_null_undefined").fromOption(a),customBadge:b("bs_js_null_undefined").fromOption(c),isMessengerUser:b("bs_js_null_undefined").fromOption(d),isPartiesUser:b("bs_js_null_undefined").fromOption(e),size:f,src:b("bs_js_null_undefined").fromOption(g),isMultiCompany:b("bs_js_null_undefined").fromOption(h)},i)}d=[a];e=b("bs_belt_Option").getWithDefault;f.$pipe$unknown=e;f.component=g;f.make=h;f.jsComponent=c;f.StraightJSComponent=d}),null);
__d("MercuryThreadTimestampReact.bs",["React","formatDate","ReasonReact.bs","joinClasses","bs_js_primitive"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReasonReact.bs").statelessComponent("MercuryThreadTimestampReact");function h(a,c,d,e,f){var h=e!==void 0?e:"";return[g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],function(){if(a!==void 0){var e=a,f=new Date(e),g=c!==void 0?c:f.toLocaleDateString();f=d!==void 0?d:b("formatDate")(f,"g:ia");return b("React").cloneElement(b("React").createElement("abbr",{className:b("joinClasses")(h,"timestamp"),title:g},f),{"data-utime":e/1e3})}else return b("React").createElement("abbr",void 0)},g[9],g[10],g[11],g[12]]}a=b("ReasonReact.bs").wrapReasonForJs(g,function(a){return h(b("bs_js_primitive").nullable_to_opt(a.time),b("bs_js_primitive").nullable_to_opt(a.title),b("bs_js_primitive").nullable_to_opt(a.text),a.className,[])});f.component=g;f.make=h;f.jsComponent=a}),null);
__d("MercuryThreadImageReact.bs",["ReasonReact.bs","bs_js_null_undefined","MercuryThreadImage.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f){return b("ReasonReact.bs").wrapJsForReason(b("MercuryThreadImage.react"),{size:b("bs_js_null_undefined").fromOption(a),thread:c,useBackground:b("bs_js_null_undefined").fromOption(d),viewer:e},f)}f.make=a}),null);
__d("OptionType.bs",["bs_curry","bs_js_primitive"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){if(a!==void 0)if(c!==void 0)return b("bs_curry")._2(d,b("bs_js_primitive").valFromOption(a),b("bs_js_primitive").valFromOption(c));else return!1;else return c===void 0}function c(a,c){if(a!==void 0)if(c!==void 0)return b("bs_js_primitive").valFromOption(a)===b("bs_js_primitive").valFromOption(c);else return!1;else return c===void 0}f.equals=a;f.equalsReference=c}),null);
__d("MessengerThreadImageReact.bs",["cx","React","Utils.bs","MercuryIDs","OptionType.bs","ReasonReact.bs","bs_js_primitive","WorkForeignEntityInfo.bs","MercuryThreadImageReact.bs","MessengerProfileImageWrapperReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();var d=a.other_user_fbid,e=c.size;a=b("MercuryIDs").isCanonical(a.thread_id);if(d==null||!(a&&e!==0))return!1;else{a=b("MercuryIDs").getParticipantIDFromUserID(d);e=c.get(a);if(!(e==null)&&!(e==null))return e.is_messenger_user;else return!1}}var i=b("ReasonReact.bs").statelessComponentWithRetainedProps("MessengerThreadImageReact");function j(a,c,d,e,f,g,j,k,l){__p&&__p();var m=c!==void 0?c:!1,n=d!==void 0?d:!1,o=e!==void 0?e:!1;return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],function(a){var c=a[1][2];a=a[0][2];if(a[0]!==c[0]||a[3]!==c[3]||!b("OptionType.bs").equalsReference(a[4],c[4])||a[5]!==c[5]||a[6]!==c[6]||a[1]!==c[1]||a[2]!==c[2]||a[7]!==c[7])return!0;else return a[8]!==c[8]},function(){var c=!b("WorkForeignEntityInfo.bs").areAllCoworkers(g),d=c?void 0:n?b("bs_js_primitive").some(b("React").createElement("div",{className:"_466z"})):m?b("bs_js_primitive").some(b("React").createElement("div",{className:"_4670"})):void 0,e={};a!==void 0&&(e.className=b("bs_js_primitive").valFromOption(a));return b("React").createElement("div",e,b("ReasonReact.bs").element(void 0,void 0,b("MessengerProfileImageWrapperReact.bs").make(void 0,d,h(j,g),void 0,b("bs_js_primitive").nullable_to_opt(j.solid_color),b("bs_js_primitive").nullable_to_opt(j.thread_type),void 0,f,c,void 0,o&&b("MercuryIDs").isCanonical(j.thread_id)||c,[b("ReasonReact.bs").element(void 0,void 0,b("MercuryThreadImageReact.bs").make(f,j,!0,k,[]))])))},i[9],[a,m,n,o,f,h(j,g),!b("WorkForeignEntityInfo.bs").areAllCoworkers(g),j,k],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(b("bs_js_primitive").nullable_to_opt(a.className),b("Utils.bs").isTruthy(a.isPresenceForWork),b("Utils.bs").isTruthy(a.isDoNotDisturb),b("Utils.bs").isTruthy(a.showBadge),b("bs_js_primitive").nullable_to_opt(a.size),a.participants,a.thread,a.viewer,[])});f.getIsMessengerUser=h;f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerTypeaheadUtils",["fbt","ix","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","immutable","mapObject"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").OrderedMap,j=500,k=100,l="__special_search_entry__",m=[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").MESSAGE_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE],n=(a={},a[b("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},a[b("MercuryTypeaheadConstants").FRIEND_TYPE]={header:g._("Contacts")},a[b("MercuryTypeaheadConstants").FB4C_TYPE]={header:g._("Coworkers")},a[b("MercuryTypeaheadConstants").MESSAGE_TYPE]={header:g._("Messages")},a[b("MercuryTypeaheadConstants").THREAD_TYPE]={header:g._("Group Conversations")},a[b("MercuryTypeaheadConstants").PAGE_TYPE]={header:g._("Businesses")},a[b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:g._("Meeting Rooms")},a[b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:g._("Bots")},a[b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:g._("More People")},a.game={header:g._("Games")},a);c={sortEntries:function(a,c){__p&&__p();var d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[];a.forEach(function(a){__p&&__p();switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:f.push(a);break;case b("MercuryTypeaheadConstants").MESSAGE_TYPE:g.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:h.push(a);break;case b("MercuryTypeaheadConstants").PAGE_TYPE:case b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:j.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:i.push(a);break;case b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:k.push(a);break;case b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:l.push(a);break;case b("MercuryTypeaheadConstants").SEARCH_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").GAME_TYPE:m.push(a);break}});return d.concat(e,f,g,h,k,l,i,j,m)},sortEntriesWithoutPages:function(a){__p&&__p();var c=[],d=[],e=[],f=[];a.forEach(function(a){switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:c.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return c.concat(d,e,f)},sortEntriesWithoutGroupsOrViewer:function(a,c){__p&&__p();var d=[],e=[],f=[];a.forEach(function(a){if(a.getUniqueID()===c)return;switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return d.concat(e,f)},getEntryOrder:function(a,b){if(b==null)return m;else return b},orderEntries:function(a,c){var d=[];this.getEntryOrder(c).filter(function(a){return a!==b("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(b("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(b){return d.push.apply(d,a.filter(function(a){return this.areSectionsEqual(a.getType(),b)}.bind(this)))}.bind(this));return d},buildSingleSection:function(a){return i([["",a]])},buildListSections:function(a,c,d){__p&&__p();if(!a.length)return i();d=this.getEntryOrder(c,d);var e=b("mapObject")(n,function(a){return babelHelpers["extends"]({},a,{entries:[]})});e[b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=e[b("MercuryTypeaheadConstants").PAGE_TYPE];a.forEach(function(a){var b=a.getType();e[b]&&e[b].entries.push(a)});return i(d.filter(function(a){return e[a].entries.length}).map(function(a){return[e[a].header,e[a].entries]}))},buildCustomSection:function(a,b){var c;return c={},c[a]=b,c},areSectionsEqual:function(a,c){return a===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE?c===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||c===b("MercuryTypeaheadConstants").PAGE_TYPE:a===c},scrollEntryIntoView:function(a,c){var d=b("ReactDOM").findDOMNode(c),e=c.getScrollTop(),f=a.offsetTop-e;d=d.offsetHeight-a.offsetHeight;a=Math.abs(d-f);f>=d&&a<=k?c.scrollToPosition(e+f-d,!0,{duration:j}):f<0&&a<=d+k&&c.scrollToPosition(e+f,!0,{duration:j})},getMessageSearchEntry:function(a){return!b("MessengerEnvironment").messengerui||a.length<2?null:new(b("SearchableEntry"))({uniqueID:l,title:g._("Search Messages for \"{queryString}\"",[g._param("queryString",a)]),photo:h("86924"),type:b("MercuryTypeaheadConstants").SEARCH_TYPE})},isMessageSearchEntry:function(a){return a.getUniqueID()===l}};e.exports=c}),null);
__d("MessengerScrollableArea.react",["cx","React","ReactDOM","ScrollableArea.react","Style","UserAgent","clearImmediate","joinClasses","setImmediate","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=20;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){__p&&__p();h.constructor.call(this,a),this.$1=!1,this.$2=null,this.$4=function(){if(this.$1){var a;this.props.onScroll&&(a=this.props).onScroll.apply(a,arguments)}}.bind(this),this.$5=function(){__p&&__p();if(!b("UserAgent").isBrowser("IE"))return;if(!this.refs||!this.refs.scrollable)return;var a=this.refs.scrollable.refs.wrap,c=this.refs.scrollable.refs.body;if(!c||!a)return;c=b("ReactDOM").findDOMNode(c);a=b("ReactDOM").findDOMNode(a);a=a.offsetWidth-a.clientWidth;a>0&&b("Style").set(c,"margin-right",-a+"px")}.bind(this),this.$3=b("throttle")(this.$4,50)}a.prototype.componentDidMount=function(){this.$2=b("setImmediate")(this.$5),this.$1=!0};a.prototype.componentWillUnmount=function(){b("clearImmediate")(this.$2),this.$1=!1};a.prototype.render=function(){var a=this.props.needsFastScrollHandler?this.$4:this.$3;return b("React").createElement(b("ScrollableArea.react"),{className:b("joinClasses")("_5f0v",this.props.className),height:this.props.height,onScroll:a,persistent:!0,ref:"scrollable",shadow:!1,tabIndex:this.props.tabIndex,width:this.props.width},this.props.children)};a.prototype.getArea=function(){return this.refs.scrollable.getArea()};a.prototype.scrollToBottom=function(a){var b=this.getArea();b&&this.scrollToPosition(b.getScrollHeight(),!!a)};a.prototype.scrollToTop=function(a){var b=this.getArea();b&&b.scrollToTop(!!a)};a.prototype.scrollToPosition=function(a,b,c){b===void 0&&(b=!1);c===void 0&&(c={});var d=this.getArea();if(!d)return;d.setScrollTop(a,b,c)};a.prototype.isScrolledToBottom=function(){return this.isScrolledToBottomWithHeight(0)};a.prototype.isScrolledToBottomWithHeight=function(a){var b=this.getArea();return!b?!1:b.getScrollTop()+b.getClientHeight()+a>=b.getScrollHeight()-i};a.prototype.isScrolledToTop=function(){var a=this.getArea();return!a?!0:a.getScrollTop()<=i};a.prototype.getScrollTop=function(){var a=this.getArea();return!a?0:a.getScrollTop()};e.exports=a}),null);
__d("MessengerTabIndices",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({NEW_MESSAGE_TOKENIZER:9998,GROUP_NAME_INPUT:9999,COMPOSER_INPUT:1e4});e.exports=a}),null);
__d("MessengerComposeViewHeader.react",["cx","fbt","ImmutableObject","MessengerButtonReact.bs","MessengerDotComAndInboxM4Check.bs","MessengerGraphQLTokenizer.react","MessengerTabIndices","React","clearImmediate","gkx","immutable","joinClasses","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MessengerButtonReact.bs").jsComponent;c=b("React").PropTypes;var k=320;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={tokenizerContext:null,excludeGroups:!1,excludePages:!1,forGroup:!1},this.$1=null,this.$2=function(){this.$1=b("setImmediate")(function(){this.refs.tokenizer&&this.refs.tokenizer.focusInput()}.bind(this))}.bind(this),c}a.prototype.componentDidMount=function(){this.$2(),this.setState({tokenizerContext:this.refs.tokenizerContext})};a.prototype.componentDidUpdate=function(a){this.props.recipients!==a.recipients&&this.props.onResize()};a.prototype.UNSAFE_componentWillReceiveProps=function(a){a.recipients!==this.props.recipients&&(a.recipients.size===0?this.setState({excludeGroups:!1,excludePages:!1,forGroup:!1}):a.isWorkUser?this.setState({excludeGroups:!0,excludePages:!1,forGroup:!0}):this.setState({excludeGroups:!0,excludePages:!0,forGroup:!0}))};a.prototype.componentWillUnmount=function(){this.$1&&b("clearImmediate")(this.$1)};a.prototype.render=function(){var a={enableMessageSearch:!1,hasHoverState:!0,originalEntryIDs:b("immutable").Set(),scrollableViewClassName:"_2y8_",shouldQueryInternalBot:!0,shouldQueryVCEndpoint:!1,width:k};return b("React").createElement("div",{className:b("joinClasses")("_2y8y"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _6zw0":"")+" _5l-3",this.props.className),onClick:this.$2,role:"presentation"},b("React").createElement("div",{className:"_2y8z",ref:b("gkx")("678607")?"tokenizerContext":""},h._("To:")),b("React").createElement("div",{className:"_66s6"},b("React").createElement(b("MessengerGraphQLTokenizer.react"),babelHelpers["extends"]({autoFocus:!0,className:"_2y8-",context:this.state.tokenizerContext,entries:this.props.recipients,excludeGroups:this.state.excludeGroups,excludePages:this.state.excludePages,forGroup:this.state.forGroup,forceHideClearButton:this.props.forceHideClearButton,onAddEntryAttempt:this.props.onAddRecipient,onClear:this.props.onClear,onRemoveEntryAttempt:this.props.onRemoveRecipient,placeholder:h._("Type the name of a person or group"),ref:"tokenizer",tabIndex:b("MessengerTabIndices").NEW_MESSAGE_TOKENIZER,useLayer:!0,viewer:this.props.viewer},a)),b("gkx")("678607")?null:b("React").createElement("div",{ref:"tokenizerContext"})),this.$3())};a.prototype.$3=function(){return this.props.shouldShowCreateGroupButton?b("React").createElement(j,{className:"_6wh5",label:h._("Create New Chat"),onClick:this.props.onCreateGroupButtonClicked,role:"button",tabIndex:0,type:"primary"}):null};a.propTypes={forceHideClearButton:c.bool.isRequired,onAddRecipient:c.func.isRequired,onClear:c.func,onRemoveRecipient:c.func.isRequired,onResize:c.func.isRequired,recipients:c.instanceOf(b("immutable").List).isRequired,thread:c.instanceOf(b("ImmutableObject")),viewer:c.string.isRequired,isWorkUser:c.bool.isRequired,shouldShowCreateGroupButton:c.bool,onCreateGroupButtonClicked:c.func};a.defaultProps={shouldShowCreateGroupButton:!1,isWorkUser:!1};e.exports=a}),null);
__d("MessengerMenu.react",["cx","Keys","MenuSeparator.react","MessengerDotComAndInboxM4Check.bs","ReactXUIMenu","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;function a(a){a.isReactLegacyFactory={},a.type=a}d=babelHelpers.inherits(c,b("ReactXUIMenu"));h=d&&d.prototype;function c(a){var c=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["className"]);h.constructor.call(this,babelHelpers["extends"]({className:b("joinClasses")(c,"_2i-c"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _6_n0":"")+" _150g")},a))}c.prototype.handleKeydown=function(a,c){return a===b("Keys").DOWN||a===b("Keys").UP||a===b("Keys").SPACE?h.handleKeydown.call(this,a,c):!0};a(c);c.Item=b("ReactXUIMenu").Item;c.Separator=b("MenuSeparator.react");e.exports=c}),null);
__d("MessengerDialogBodyReact.bs",["cx","ReactDOMRe.bs","ReasonReact.bs","joinClasses","bs_js_primitive"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").statelessComponent("MessengerDialogBodyReact");function i(a,c){var d=a!==void 0?a:"";return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){return b("ReactDOMRe.bs").createElementVariadic("div",{className:b("joinClasses")("_4eb-",d)},c)},h[9],h[10],h[11],h[12]]}a=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return i(b("bs_js_primitive").nullable_to_opt(a.className),a.children)});f.component=h;f.make=i;f.jsComponent=a}),null);
__d("MessengerDialogTitleReact.bs",["cx","React","bs_belt_Option","ReasonReact.bs","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("ReasonReact.bs").statelessComponent("MessengerDialogTitleReact");function a(a,c){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){var d=b("bs_belt_Option").getWithDefault(a,!1);return b("React").createElement("div",{className:b("joinClasses")("_19jt",d?"autofocus":"")},c)},h[9],h[10],h[11],h[12]]}f.component=h;f.make=a}),null);
__d("MessengerDialogTitleReact.re",["bs_curry","MessengerDialogTitleReact.bs","ReasonReact.bs"],(function(a,b,c,d,e,f){a=b("ReasonReact.bs").wrapReasonForJs(b("MessengerDialogTitleReact.bs").component,function(a){return b("bs_curry")._2(b("MessengerDialogTitleReact.bs").make,a.autofocus,a.children)});f.component=a;f["default"]=a}),null);