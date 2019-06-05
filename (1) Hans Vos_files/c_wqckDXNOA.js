if (self.CavalryLogger) { CavalryLogger.start_js(["krTRD"]); }

__d("QPLTimeToLoadHelper",["QuickPerformanceLogger","Run","crc32","performance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a&&b("crc32")(a)||0}function h(a){return b("performance")&&b("performance").timing&&b("performance").timing.navigationStart&&a<b("performance").timing.navigationStart?a+b("performance").timing.navigationStart:a}function i(a){a.time!=null&&(a.time=h(a.time));var c=g(a.instanceKey);b("QuickPerformanceLogger").markerStart(a.qplMarker,c,a.time);b("QuickPerformanceLogger").annotateMarkerString(a.qplMarker,"SOURCE",a.source,c);b("Run").onUnload(function(){return b("QuickPerformanceLogger").markerEnd(a.qplMarker,"CANCEL",c)})}a={startWithClickEvent:function(a){i(babelHelpers["extends"]({},a,{time:a.event.timeStamp}))},start:function(a){i(a)},annotateString:function(a){var c=g(a.instanceKey);b("QuickPerformanceLogger").annotateMarkerString(a.qplMarker,a.annotationKey,a.annotationValue,c)},annotateInt:function(a){var c=g(a.instanceKey);b("QuickPerformanceLogger").annotateMarkerInt(a.qplMarker,a.annotationKey,a.annotationValue,c)},addPoint:function(a){var c=g(a.instanceKey);b("QuickPerformanceLogger").markerPoint(a.qplMarker,a.pointName,a.data,c,a.time!=null?h(a.time):a.time)},end:function(a){var c=a.time!=null?h(a.time):a.time,d=g(a.instanceKey);b("QuickPerformanceLogger").annotateMarkerInt(a.qplMarker,"END_TIME",c==null?-1:c,d);b("QuickPerformanceLogger").markerEnd(a.qplMarker,a.action?a.action:"SUCCESS",d,c)}};e.exports=a}),null);
__d("PermalinkTimeToLoadLogger",["Arbiter","BigPipe","FeedQuickLogModule","PageEvents","QPLTimeToLoadHelper","performance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){a.subscribe(b("PageEvents").AJAXPIPE_SEND,function(a,c){a=c.ts;b("QPLTimeToLoadHelper").start({source:"quickling",qplMarker:b("FeedQuickLogModule").LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW,time:a})})}function h(a){b("QPLTimeToLoadHelper").start({source:a,qplMarker:b("FeedQuickLogModule").LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW,time:b("performance").timing&&b("performance").timing.navigationStart})}function i(a){b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(c,d){c=d.arbiter;a.requestType==="quickling"?g(c):h(a.requestType);c.subscribe(b("BigPipe").Events.tti,function(a,c){a=c.ts;b("QPLTimeToLoadHelper").end({qplMarker:b("FeedQuickLogModule").LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW,time:a})})})}a={log:function(a){i(a)}};e.exports=a}),null);
__d("Time.react",["React","SubscriptionList","timeString"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;var g=3e4,h,i;function j(){h.fireCallbacks(Date.now())}h=new(b("SubscriptionList"))(function(){return i=setInterval(j,g)},function(){return clearInterval(i)});c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this,c,d)||this;e.updateTimestamp=function(a){e.setState({timeString:b("timeString")(e.props.timestamp*1e3,a)})};e.state={timeString:b("timeString")(c.timestamp*1e3,Date.now())};return e}var d=c.prototype;d.componentDidMount=function(){this.listener=h.add(this.updateTimestamp)};d.componentWillUnmount=function(){this.listener.remove()};d.render=function(){return b("React").createElement("span",null,this.state.timeString)};return c}(b("React").Component);c.propTypes={timestamp:a.number.isRequired};e.exports=c}),null);
__d("GamingDestinationEntrypoints",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXAMPLE:"example",CANVAS_RHC:"canvas_rhc",GAMES_VIDEO_BOOKMARK:"games_video_bookmark",GAME_SEARCH_UNIT:"game_search_unit",GAMEROOM_LHC:"gameroom_lhc",GAMEROOM_FOLLOWED_GAME_LHC:"gameroom_followed_game_lhc",GAMEROOM_RHC:"gameroom_rhc",GAMES_APP:"games_app",GROUP_RHC:"group_rhc",GROUP_HOVERCARD:"group_hovercard",GROUP_METALINE:"group_metaline",NEWSFEED_RHC:"newsfeed_rhc",INSTANT_GAMES_RHC:"instant_games_rhc",VIDEO_ATTRIBUTION_NEWSFEED:"video_newsfeed",VIDEO_ATTRIBUTION_PAGE:"video_page",VIDEO_ATTRIBUTION_OTHER:"video_other",LIVE_NOTIFICATION:"live_notification",NONFOLLOWER_NOTIFICATION:"nonfollower_notification",GAME_FOLLOWER_NOTIFICATION:"game_follower_notification",FRIEND_OF_FOLLOWER_NOTIFICATION:"friend_of_follower_notification",GAME_FEED_NOTIFICATION:"game_feed_notification",GAME_DESTINATION_NOTIFICATION:"game_destination_notification",GAME_BOOKMARK:"game_bookmark",GAME_SHORTCUT:"game_shortcut",GAMES_VIDEO_QP:"games_video_qp",GAME_PAGES:"game_pages",VIDEO_HOME:"video_home",NEWS_FEED_ON_VIDEO_CLICK:"news_feed_on_video_click",NEWS_FEED_AFTER_VIDEO_PLAY:"news_feed_after_video_play",GAMES_VIDEO_SOCIAL_PLUGIN:"games_video_social_plugin",ANDROID_GAMING_SHORTCUT:"android_gaming_shortcut",ANDROID_INSTANT_GAME_SHORTCUT:"android_instant_game_shortcut",ANDROID_INSTANT_GAMES_HUB_SHORTCUT:"android_instant_games_hub_shortcut",INSTANT_GAMEHUB_CROSS_SELL:"instant_gamehub_cross_sell",DEEPLINK:"deeplink",UNKNOWN:"unknown",FEED_NAVIGATION_PILLS:"feed_navigation_pills",FEED_STORY_TITLE:"feed_story_title",PUSH_NOTIFICATION:"push_notification",RAIDING:"raiding",FBLITE_BOOKMARK:"fblite_bookmark",FBLITE_MESSENGER_TAB:"fblite_messenger_tab",GAMES_TAB:"games_tab",GAMES_TAB_NOTIFICATION:"games_tab_notification",VIDEO_ACTION_LINK:"video_action_link",FB_OTHER_GAMES_NOTIF:"fb_other_games_notif",STREAMER_EVENT_NOTIFICATION:"streamer_event_notification",STREAMER_SCHEDULE:"streamer_schedule",IG_REDIRECTION:"ig_redirection",GV_NOTIFICATION_REDIRECTION:"gv_notification_redirection",TOP_STREAMERS_UNIT:"top_streamers_unit"})}),null);
__d("XGamesQuicksilverPlayController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instantgames/play/{game_or_link}/",{context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},game_or_link:{type:"String",required:!0},source:{type:"Enum",enumType:1},upsell_logging_info:{type:"TypeAssert"},payload:{type:"String"}})}),null);