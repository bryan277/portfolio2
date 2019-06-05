if (self.CavalryLogger) { CavalryLogger.start_js(["5ty6k"]); }

__d("FalcoBanzaiPostFields",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SAMPLING_RATE:"r",EXTRA_DATA:"e"})}),null);
__d("FalcoLoggerInternal",["Banzai","FalcoBanzaiPostFields","FalcoJSLoggerSamplingPolicies"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="falco:";function h(a){return a!==0&&Math.random()*a<1}function i(a,c,d,e){if(h(c)){b("Banzai").post(g+a,(a={},a[b("FalcoBanzaiPostFields").EXTRA_DATA]=d(),a[b("FalcoBanzaiPostFields").SAMPLING_RATE]=c,a),e)}}e.exports={create:function(a){var c=b("FalcoJSLoggerSamplingPolicies").rates[a]||0;return{log:function(d){i(a,c,d,b("Banzai").BASIC)},logImmediately:function(d){i(a,c,d,b("Banzai").VITAL)}}}}}),null);
__d("CreateLivingRoomActionLinkImpressionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("create_living_room_action_link_impression");e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("rxjs-observable-0.0.7",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h={exports:g};function i(){Object.defineProperty(g,"__esModule",{value:!0});function a(a){var b;a=a.Symbol;typeof a==="function"?a.observable?b=a.observable:(b=a("observable"),a.observable=b):b="@@observable";return b}g.getSymbolObservable=a;g.observable=a(typeof window==="undefined"?{}:window)}var j=!1,k=function(){j||(j=!0,i());return h.exports},l={},m={exports:l};function n(){Object.defineProperty(l,"__esModule",{value:!0});function a(){}l.noop=a}var o=!1,p=function(){o||(o=!0,n());return m.exports},q={},r={exports:q};function aa(){__p&&__p();Object.defineProperty(q,"__esModule",{value:!0});var a=p();function b(){var a=[];for(var b=0;b<arguments.length;b++)a[b]=arguments[b];return c(a)}q.pipe=b;function c(b){if(!b)return a.noop;return b.length===1?b[0]:function(a){return b.reduce(function(a,b){return b(a)},a)}}q.pipeFromArray=c}var s=!1,ba=function(){s||(s=!0,aa());return r.exports},t={},ca={exports:t};function da(){Object.defineProperty(t,"__esModule",{value:!0});function a(a){setTimeout(function(){throw a})}t.hostReportError=a}var u=!1,v=function(){u||(u=!0,da());return ca.exports},w={},ea={exports:w};function fa(){Object.defineProperty(w,"__esModule",{value:!0});var a=v();w.empty={closed:!0,next:function(a){},error:function(b){a.hostReportError(b)},complete:function(){}}}var x=!1,y=function(){x||(x=!0,fa());return ea.exports},z={},ga={exports:z};function ha(){Object.defineProperty(z,"__esModule",{value:!0}),z.errorObject={e:{}}}var A=!1,B=function(){A||(A=!0,ha());return ga.exports},C={},ia={exports:C};function ja(){Object.defineProperty(C,"__esModule",{value:!0}),C.isArray=Array.isArray||function(a){return a&&typeof a.length==="number"}}var D=!1,ka=function(){D||(D=!0,ja());return ia.exports},E={},la={exports:E};function ma(){Object.defineProperty(E,"__esModule",{value:!0});function a(a){return typeof a==="function"}E.isFunction=a}var F=!1,G=function(){F||(F=!0,ma());return la.exports},H={},na={exports:H};function oa(){Object.defineProperty(H,"__esModule",{value:!0});function a(a){return a!=null&&typeof a==="object"}H.isObject=a}var I=!1,pa=function(){I||(I=!0,oa());return na.exports},J={},qa={exports:J};function ra(){__p&&__p();Object.defineProperty(J,"__esModule",{value:!0});var a=B(),b;function c(){try{return b.apply(this,arguments)}catch(b){a.errorObject.e=b;return a.errorObject}}function d(a){b=a;return c}J.tryCatch=d}var K=!1,sa=function(){K||(K=!0,ra());return qa.exports},L={},ta={exports:L};function ua(){__p&&__p();Object.defineProperty(L,"__esModule",{value:!0});function a(a){Error.call(this);this.message=a?a.length+" errors occurred during unsubscription:\n"+a.map(function(a,b){return b+1+") "+a.toString()}).join("\n  "):"";this.name="UnsubscriptionError";this.errors=a;return this}a.prototype=Object.create(Error.prototype);L.UnsubscriptionError=a}var M=!1,va=function(){M||(M=!0,ua());return ta.exports},N={},wa={exports:N};function xa(){__p&&__p();Object.defineProperty(N,"__esModule",{value:!0});var a=B(),b=ka(),c=G(),d=pa(),e=sa(),f=va(),g=function(){__p&&__p();function g(a){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,a&&(this._unsubscribe=a)}g.prototype.unsubscribe=function(){__p&&__p();var g=!1,i;if(this.closed)return;var j=this,k=j._parent,l=j._parents,m=j._unsubscribe;j=j._subscriptions;this.closed=!0;this._parent=null;this._parents=null;this._subscriptions=null;var n=-1,o=l?l.length:0;while(k)k.remove(this),k=++n<o&&l[n]||null;if(c.isFunction(m)){k=e.tryCatch(m).call(this);k===a.errorObject&&(g=!0,i=i||(a.errorObject.e instanceof f.UnsubscriptionError?h(a.errorObject.e.errors):[a.errorObject.e]))}if(b.isArray(j)){n=-1;o=j.length;while(++n<o){l=j[n];if(d.isObject(l)){k=e.tryCatch(l.unsubscribe).call(l);if(k===a.errorObject){g=!0;i=i||[];m=a.errorObject.e;m instanceof f.UnsubscriptionError?i=i.concat(h(m.errors)):i.push(m)}}}}if(g)throw new f.UnsubscriptionError(i)};g.prototype.add=function(a){__p&&__p();if(!a||a===g.EMPTY)return g.EMPTY;if(a===this)return this;var b=a;switch(typeof a){case"function":b=new g(a);case"object":if(b.closed||typeof b.unsubscribe!=="function")return b;else if(this.closed){b.unsubscribe();return b}else if(typeof b._addParent!=="function"){var c=b;b=new g();b._subscriptions=[c]}break;default:throw new Error("unrecognized teardown "+a+" added to Subscription.")}c=this._subscriptions||(this._subscriptions=[]);c.push(b);b._addParent(this);return b};g.prototype.remove=function(a){var b=this._subscriptions;if(b){a=b.indexOf(a);a!==-1&&b.splice(a,1)}};g.prototype._addParent=function(a){var b=this,c=b._parent;b=b._parents;!c||c===a?this._parent=a:!b?this._parents=[a]:b.indexOf(a)===-1&&b.push(a)};g.EMPTY=function(a){a.closed=!0;return a}(new g());return g}();N.Subscription=g;function h(a){return a.reduce(function(a,b){return a.concat(b instanceof f.UnsubscriptionError?b.errors:b)},[])}}var O=!1,P=function(){O||(O=!0,xa());return wa.exports},Q={},ya={exports:Q};function za(){Object.defineProperty(Q,"__esModule",{value:!0}),Q.rxSubscriber=typeof Symbol==="function"&&typeof Symbol["for"]==="function"?Symbol["for"]("rxSubscriber"):"@@rxSubscriber",Q.$$rxSubscriber=Q.rxSubscriber}var R=!1,S=function(){R||(R=!0,za());return ya.exports},T={},Aa={exports:T};function Ba(){__p&&__p();var a=this&&this.__extends||function(){__p&&__p();var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]} instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){a(b,c);function d(){this.constructor=b}b.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d())}}();Object.defineProperty(T,"__esModule",{value:!0});var b=y(),c=P(),d=S(),e=v(),f=G(),g=function(e){__p&&__p();a(c,e);function c(a,c,f){__p&&__p();var g=e.call(this)||this;g.syncErrorValue=null;g.syncErrorThrown=!1;g.syncErrorThrowable=!1;g.isStopped=!1;g._parentSubscription=null;switch(arguments.length){case 0:g.destination=b.empty;break;case 1:if(!a){g.destination=b.empty;break}if(typeof a==="object"){if(i(a)){var j=a[d.rxSubscriber]();g.syncErrorThrowable=j.syncErrorThrowable;g.destination=j;j.add(g)}else g.syncErrorThrowable=!0,g.destination=new h(g,a);break}default:g.syncErrorThrowable=!0;g.destination=new h(g,a,c,f);break}return g}c.prototype[d.rxSubscriber]=function(){return this};c.prototype.next=function(a){this.isStopped||this._next(a)};c.prototype.error=function(a){this.isStopped||(this.isStopped=!0,this._error(a))};c.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())};c.prototype.unsubscribe=function(){if(this.closed)return;this.isStopped=!0;e.prototype.unsubscribe.call(this)};c.prototype._next=function(a){this.destination.next(a)};c.prototype._error=function(a){this.destination.error(a),this.unsubscribe()};c.prototype._complete=function(){this.destination.complete(),this.unsubscribe()};c.prototype._addParentTeardownLogic=function(a){a!==this&&(this._parentSubscription=this.add(a))};c.prototype._unsubscribeParentSubscription=function(){this._parentSubscription!==null&&this._parentSubscription.unsubscribe()};c.prototype._unsubscribeAndRecycle=function(){__p&&__p();var a=this,b=a._parent;a=a._parents;this._parent=null;this._parents=null;this.unsubscribe();this.closed=!1;this.isStopped=!1;this._parent=b;this._parents=a;return this};return c}(c.Subscription);T.Subscriber=g;var h=function(d){__p&&__p();a(c,d);function c(a,c,e,g){__p&&__p();var h=d.call(this)||this;h._parentSubscriber=a;var i;a=h;f.isFunction(c)?i=c:c&&(i=c.next,e=c.error,g=c.complete,c!==b.empty&&(a=Object.create(c),f.isFunction(a.unsubscribe)&&h.add(a.unsubscribe.bind(a)),a.unsubscribe=h.unsubscribe.bind(h)));h._context=a;h._next=i;h._error=e;h._complete=g;return h}c.prototype.next=function(a){!this.isStopped&&this._next&&this.__tryOrUnsub(this._next,a)};c.prototype.error=function(a){if(!this.isStopped){var b=this._parentSubscriber;this._error?(this.__tryOrUnsub(this._error,a),this.unsubscribe()):!b.syncErrorThrowable?(this.unsubscribe(),e.hostReportError(a)):(e.hostReportError(a),this.unsubscribe())}};c.prototype.complete=function(){var a=this;if(!this.isStopped){if(this._complete){var b=function(){return a._complete.call(a._context)};this.__tryOrUnsub(b)}this.unsubscribe()}};c.prototype.__tryOrUnsub=function(a,b){try{a.call(this._context,b)}catch(a){this.unsubscribe(),e.hostReportError(a)}};c.prototype.__tryOrSetError=function(a,b,c){throw new Error("bad call")};c.prototype._unsubscribe=function(){var a=this._parentSubscriber;this._context=null;this._parentSubscriber=null;a.unsubscribe()};return c}(g);function i(a){return a instanceof g||"syncErrorThrowable"in a&&a[d.rxSubscriber]}}var U=!1,Ca=function(){U||(U=!0,Ba());return Aa.exports},V={},Da={exports:V};function Ea(){__p&&__p();Object.defineProperty(V,"__esModule",{value:!0});var a=y(),b=Ca(),c=S();function d(d,e,f){if(d){if(d instanceof b.Subscriber)return d;if(d[c.rxSubscriber])return d[c.rxSubscriber]()}return!d&&!e&&!f?new b.Subscriber(a.empty):new b.Subscriber(d,e,f)}V.toSubscriber=d}var W=!1,Fa=function(){W||(W=!0,Ea());return Da.exports},X={},Ga={exports:X};function Ha(){__p&&__p();Object.defineProperty(X,"__esModule",{value:!0});var a=k(),b=ba(),c=Fa(),d=function(){__p&&__p();function d(a){this._isScalar=!1,a&&(this._subscribe=a)}d.prototype.lift=function(a){var b=new d();b.source=this;b.operator=a;return b};d.prototype.subscribe=function(a,b,d){var e=this.operator;a=c.toSubscriber(a,b,d);e?e.call(a,this.source):a.add(this.source||this._trySubscribe(a));return a};d.prototype._trySubscribe=function(a){try{return this._subscribe(a)}catch(b){a.error(b)}};d.prototype.forEach=function(a,b){var c=this;b=e(b);return new b(function(b,d){var e;e=c.subscribe(function(b){try{a(b)}catch(a){d(a),e&&e.unsubscribe()}},d,b)})};d.prototype._subscribe=function(a){var b=this.source;return b&&b.subscribe(a)};d.prototype[a.observable]=function(){return this};d.prototype.pipe=function(){var a=[];for(var c=0;c<arguments.length;c++)a[c]=arguments[c];return a.length===0?this:b.pipeFromArray(a)(this)};d.prototype.toPromise=function(a){var b=this;a=e(a);return new a(function(a,c){var d;b.subscribe(function(a){return d=a},function(a){return c(a)},function(){return a(d)})})};return d}();X.Observable=d;function e(a){a||(a=Promise);if(!a)throw new Error("no Promise impl found");return a}}var Y=!1,Ia=function(){Y||(Y=!0,Ha());return Ga.exports},Z={},Ja={exports:Z};function Ka(){Object.defineProperty(Z,"__esModule",{value:!0});var a=Ia();Z.Observable=a.Observable;a=P();Z.Subscription=a.Subscription}var $=!1,La=function(){$||($=!0,Ka());return Ja.exports};a=function(a){switch(a){case void 0:return La()}};e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("undux-fb-5.0.0-beta.22",["rxjs-observable-0.0.7","react-0.0.0"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("rxjs-observable-0.0.7")),h=a(b("react-0.0.0")),i={},j={exports:i};function k(){__p&&__p();Object.defineProperty(i,"__esModule",{value:!0});var a=g(),b="__ALL__",c="[undux] Error: Cyclical dependency detected. This may cause a stack overflow unless you fix it. \nThe culprit is the following sequence of .set calls, called from one or more of your Undux Effects: ";c=function(){__p&&__p();function c(a){a===void 0&&(a=!1),this.isDevMode=a,this.state={callChain:new Set(),observables:new Map(),observers:new Map()}}c.prototype.emit=function(a,c){if(this.isDevMode)if(this.state.callChain.has(a))return this;else this.state.callChain.add(a);this.hasChannel(a)&&this.emitOnChannel(a,c);this.hasChannel(b)&&this.emitOnChannel(b,c);this.isDevMode&&this.state.callChain.clear();return this};c.prototype.on=function(a){return this.createChannel(a)};c.prototype.all=function(){return this.createChannel(b)};c.prototype.createChannel=function(b){var c=this;this.state.observers.has(b)||this.state.observers.set(b,[]);this.state.observables.has(b)||this.state.observables.set(b,[]);var d=new a.Observable(function(a){c.state.observers.get(b).push(a);return function(){return c.deleteChannel(b,d)}});this.state.observables.get(b).push(d);return d};c.prototype.deleteChannel=function(a,b){if(!this.state.observables.has(a))return;var c=this.state.observables.get(a);b=c.indexOf(b);if(b<0)return;c.splice(b,1);c.length||(this.state.observables["delete"](a),this.state.observers["delete"](a))};c.prototype.emitOnChannel=function(a,b){this.state.observers.get(a).forEach(function(a){return a.next(b)})};c.prototype.hasChannel=function(a){return this.state.observables.has(a)};return c}();i.Emitter=c}var l=!1,m=function(){l||(l=!0,k());return j.exports},n={},o={exports:n};function p(){__p&&__p();Object.defineProperty(n,"__esModule",{value:!0});function a(a,c){return b(a)&&b(c)?a.equals(c):a===c}n.equals=a;function b(a){return!!a&&typeof a==="object"&&("@@__IMMUTABLE_ITERABLE__@@"in a||"@@__IMMUTABLE_RECORD__@@"in a)}n.isImmutable=b;function c(a){return a.displayName||a.name||"Component"}n.getDisplayName=c;function d(a){return Object.keys(a)}n.keys=d;function e(a,b){var c={};d(a).forEach(function(d){return c[d]=b(a[d],d)});return c}n.mapValues=e;function f(a,b){return d(a).some(function(c){return b(a[c],c)})}n.some=f}var q=!1,r=function(){q||(q=!0,p());return o.exports},s={},t={exports:s};function u(){Object.defineProperty(s,"__esModule",{value:!0});function a(a){a.onAll().subscribe(function(a){var b=a.key;b=a.previousValue;b=a.value});return a}s.withLogger=a}var v=!1,w=function(){v||(v=!0,u());return t.exports},x={},y={exports:x};function z(){__p&&__p();Object.defineProperty(x,"__esModule",{value:!0});function a(a){__p&&__p();var b=window.__REDUX_DEVTOOLS_EXTENSION__;if(!b)return a;var c=b.connect(),d=!1,e=function(b){var c=a.getState();for(var e in b)e in c&&(d=!0,a.set(e)(b[e]),d=!1)};c.subscribe(function(b){switch(b.type){case"START":c.send(null,a.getState());return;case"DISPATCH":if(!b.state)return;switch(b.payload.type){case"JUMP_TO_ACTION":case"JUMP_TO_STATE":e(JSON.parse(b.state));return}return}});a.onAll().subscribe(function(b){b=b.key;if(d)return;c.send(b,a.getState())});return a}x.withReduxDevtools=a}var A=!1,B=function(){A||(A=!0,z());return y.exports},C={},D={exports:C};function E(){Object.defineProperty(C,"__esModule",{value:!0});var a=$();function b(b){return a.connectAs({store:b})}C.connect=b}var F=!1,G=function(){F||(F=!0,E());return D.exports},H={},I={exports:H};function J(){__p&&__p();var a=this&&this.__extends||function(){__p&&__p();var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]} instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){a(b,c);function d(){this.constructor=b}b.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d())}}(),b=this&&this.__assign||function(){b=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};return b.apply(this,arguments)};Object.defineProperty(H,"__esModule",{value:!0});var c=h(),d=r();function e(e){__p&&__p();return function(f){__p&&__p();var g;return g=function(g){__p&&__p();a(h,g);function h(){__p&&__p();var a=g!==null&&g.apply(this,arguments)||this;a.state={stores:d.mapValues(e,function(a){return a.getCurrentSnapshot()}),subscriptions:d.keys(e).map(function(b){return e[b].onAll().subscribe(function(c){var f=c.previousValue;c=c.value;if(d.equals(f,c))return!1;a.setState(function(a){return{stores:Object.assign({},a.stores,(a={},a[b]=e[b].getCurrentSnapshot(),a))}})})})};return a}h.prototype.componentWillUnmount=function(){this.state.subscriptions.forEach(function(a){return a.unsubscribe()})};h.prototype.shouldComponentUpdate=function(a,b){var c=this;return d.some(b.stores,function(a,b){return a!==c.state.stores[b]})||Object.keys(a).some(function(b){return a[b]!==c.props[b]})};h.prototype.render=function(){return c.createElement(f,b({},this.props,this.state.stores))};return h}(c.Component),g.displayName="withStore("+d.getDisplayName(f)+")",g}}H.connectAs=e}var K=!1,L=function(){K||(K=!0,J());return I.exports},M={},N={exports:M};function O(){__p&&__p();var a=this&&this.__extends||function(){__p&&__p();var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]} instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){a(b,c);function d(){this.constructor=b}b.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d())}}(),b=this&&this.__assign||function(){b=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};return b.apply(this,arguments)};Object.defineProperty(M,"__esModule",{value:!0});var c=h(),d=$(),e=r();function f(f,h){__p&&__p();var i=c.createContext({__MISSING_PROVIDER__:!0}),j=function(e){__p&&__p();a(b,e);function b(a){var b=e.call(this,a)||this,c=a.initialState||f;b.storeDefinition=d.createStore(c);c=a.effects||h;c&&c(b.storeDefinition);b.state={storeSnapshot:b.storeDefinition.getCurrentSnapshot()};b.subscription=b.storeDefinition.onAll().subscribe(function(){return b.setState({storeSnapshot:b.storeDefinition.getCurrentSnapshot()})});return b}b.prototype.componentWillUnmount=function(){this.subscription.unsubscribe(),this.storeDefinition.storeSnapshot=null,this.storeDefinition=null};b.prototype.render=function(){return c.createElement(i.Provider,{value:this.state.storeSnapshot},this.props.children)};return b}(c.Component),k=function(a){return c.createElement(i.Consumer,null,function(b){if(!g(b))throw Error('[Undux] Component "'+a.displayName+'" does not seem to be nested in an Undux <Container>. To fix this error, be sure to render the component in the <Container>...</Container> component that you got back from calling createConnectedStore().');return a.children(b)})};function l(a){var d=e.getDisplayName(a),f=function(e){return c.createElement(k,{displayName:d},function(d){return c.createElement(a,b({store:d},e))})};f.displayName="withStore("+d+")";return f}return{Container:j,useStore:function(){return c.useContext(i)},withStore:l}}M.createConnectedStore=f;function g(a){return!("__MISSING_PROVIDER__"in a)}}var P=!1,Q=function(){P||(P=!0,O());return N.exports},R={},S={exports:R};function T(){__p&&__p();var a=this&&this.__extends||function(){__p&&__p();var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]} instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){a(b,c);function d(){this.constructor=b}b.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d())}}(),b=this&&this.__assign||function(){b=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};return b.apply(this,arguments)};Object.defineProperty(R,"__esModule",{value:!0});var c=h(),d=$(),e=r();function f(f,h){__p&&__p();var i=c.createContext({__MISSING_PROVIDER__:!0}),j=function(g){__p&&__p();a(b,g);function b(a){__p&&__p();var b=g.call(this,a)||this,c=a.initialStates||f;c=e.mapValues(c,function(a){return d.createStore(a)});a=a.effects||h;a&&a(c);b.state={storeDefinitions:c,storeSnapshots:e.mapValues(c,function(a){return a.getCurrentSnapshot()}),subscriptions:e.mapValues(c,function(a,c){return a.onAll().subscribe(function(){return b.setState(function(b){return{storeSnapshots:Object.assign({},b.storeSnapshots,(b={},b[c]=a.getCurrentSnapshot(),b))}})})})};return b}b.prototype.componentWillUnmount=function(){e.mapValues(this.state.subscriptions,function(a){return a.unsubscribe()}),this.state.storeSnapshots,e.mapValues(this.state.storeSnapshots,function(a){return a.state=null}),e.mapValues(this.state.storeSnapshots,function(a){return a.storeDefinition=null}),e.mapValues(this.state.storeDefinitions,function(a){return a.storeSnapshot=null})};b.prototype.render=function(){return c.createElement(i.Provider,{value:this.state.storeSnapshots},this.props.children)};return b}(c.Component),k=function(a){return c.createElement(i.Consumer,null,function(b){if(!g(b))throw Error('[Undux] Component "'+a.displayName+'" does not seem to be nested in an Undux <Container>. To fix this error, be sure to render the component in the <Container>...</Container> component that you got back from calling createConnectedStoreAs().');return a.children(b)})};function l(a){var d=e.getDisplayName(a),f=function(e){return c.createElement(k,{displayName:d},function(d){return c.createElement(a,b({},d,e))})};f.displayName="withStores("+d+")";return f}return{Container:j,useStores:function(){return c.useContext(i)},withStores:l}}R.createConnectedStoreAs=f;function g(a){return!("__MISSING_PROVIDER__"in a)}}var U=!1,V=function(){U||(U=!0,T());return S.exports},W={},aa={exports:W};function ba(){Object.defineProperty(W,"__esModule",{value:!0});var a=G();W.connect=a.connect;a=L();W.connectAs=a.connectAs;a=Q();W.createConnectedStore=a.createConnectedStore;a=V();W.createConnectedStoreAs=a.createConnectedStoreAs}var X=!1,ca=function(){X||(X=!0,ba());return aa.exports},Y={},da={exports:Y};function ea(){__p&&__p();function a(a){for(var b in a)Y.hasOwnProperty(b)||(Y[b]=a[b])}Object.defineProperty(Y,"__esModule",{value:!0});var b=m(),c=r(),d=function(){__p&&__p();function a(a,b){this.state=a,this.storeDefinition=b}a.prototype.get=function(a){return this.state[a]};a.prototype.set=function(a){return this.storeDefinition.set(a)};a.prototype.setFrom_EXPERIMENTAL=function(a){return this.storeDefinition.setFrom_EXPERIMENTAL(a)};a.prototype.on=function(a){return this.storeDefinition.on(a)};a.prototype.onAll=function(){return this.storeDefinition.onAll()};a.prototype.getState=function(){return Object.freeze(this.state)};return a}();Y.StoreSnapshot=d;var e={isDevMode:!1},f=function(){__p&&__p();function a(a,e){__p&&__p();var f=this;this.alls=new b.Emitter(e.isDevMode);this.emitter=new b.Emitter(e.isDevMode);this.storeSnapshot=new d(a,this);this.setters=c.mapValues(a,function(a,b){return function(a){var c,e=f.storeSnapshot.get(b);f.storeSnapshot=new d(Object.assign({},f.storeSnapshot.getState(),(c={},c[b]=a,c)),f);f.emitter.emit(b,a);f.alls.emit(b,{key:b,previousValue:e,value:a})}})}a.prototype.on=function(a){return this.emitter.on(a)};a.prototype.onAll=function(){return this.alls.all()};a.prototype.get=function(a){return this.storeSnapshot.get(a)};a.prototype.set=function(a){return this.setters[a]};a.prototype.setFrom_EXPERIMENTAL=function(a){return a(this.storeSnapshot)};a.prototype.getCurrentSnapshot=function(){return this.storeSnapshot};a.prototype.toStore=function(){return this.storeSnapshot};a.prototype.getState=function(){return this.storeSnapshot.getState()};return a}();Y.StoreDefinition=f;function g(a,b){b===void 0&&(b=e);return new f(a,b)}Y.createStore=g;a(w());a(B());a(ca())}var Z=!1,$=function(){Z||(Z=!0,ea());return da.exports};c=function(a){switch(a){case void 0:return $()}};e.exports=c}),null);
__d("undux-fb",["undux-fb-5.0.0-beta.22"],(function(a,b,c,d,e,f){e.exports=b("undux-fb-5.0.0-beta.22")()}),null);
__d("undux",["undux-fb"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return b("undux-fb").createStore(a)}function c(a){return a}e.exports.connect=b("undux-fb").connect;e.exports.connectAs=b("undux-fb").connectAs;e.exports.createConnectedStore=b("undux-fb").createConnectedStore;e.exports.createConnectedStoreAs=b("undux-fb").createConnectedStoreAs;e.exports.createStore=a;e.exports.withLogger=c;e.exports.withReduxDevtools=b("undux-fb").withReduxDevtools}),null);
__d("CreateLivingRoomActionLinkStore",["undux"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("undux").connect;c=b("undux").createStore;d={ctas:{}};var g=c(d);f=function(a,b){var c,d=g.get("ctas");if(((c=d[a])==null?void 0:c.isActivated)===!0)return;d=babelHelpers["extends"]({},d,(c={},c[a]={isActivated:!0,creationSource:b},c));g.set("ctas")(d)};e.exports={withStore:a(g),activateLivingRoomCTAForVideo:f}}),null);
__d("CreateLivingRoomActionLinkTrigger",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALWAYS_SHOW:"always_show"})}),null);
__d("CreateLivingRoomCTAStyle",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CREATE:"create",JOIN:"join"})}),null);
__d("LivingRoomCreationSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANNEL_FEED_CTA:"channel_feed_cta",END_SCREEN_CTA:"end_screen_cta",ENDED_LIVING_ROOM_STORY_CTA:"ended_living_room_story_cta",FEED_CTA_ON_ALWAYS_SHOW:"feed_cta_on_always_show",FEED_CTA_ON_COMMENT:"feed_cta_on_comment",FEED_CTA_ON_NEWSFEED:"feed_cta_on_newsfeed",FEED_CTA_ON_REACT:"feed_cta_on_react",FEED_CTA_ON_SHARE:"feed_cta_on_share",FEED_CTA_ON_UNKNOWN:"feed_cta_on_unknown",FEED_CTA_ON_VIDEO_PRESS:"feed_cta_on_video_press",GAMES_VIDEO_RERUN_MANAGER:"games_video_rerun_manager",GOODWILL_THROWBACK_CTA:"goodwill_throwback_cta",GROUP_ACTIVE_LIVING_ROOMS_CTA:"group_active_living_room_cta",GROUP_ACTIVE_LIVING_ROOMS_NULL_STATE_CTA:"group_active_living_room_null_state_cta",GROUP_COMPOSER:"group_composer",GROUP_FEED_QP:"group_feed_qp",GROUP_MALL_VIDEO_CTA:"group_mall_video_cta",LIVE_VIDEO_GODZILLA_NUX:"live_video_godzilla_nux",LIVE_VIDEO_PROMPT:"live_video_prompt",LIVE_VIDEO_SHARE_SHEET:"live_video_share_sheet",LIVING_ROOM_ENDSCREEN_CTA:"living_room_endscreen_cta",LIVING_ROOM_SHARE_SHEET:"living_room_share_sheet",LIVING_ROOM_SYSTEM_MESSAGE:"living_room_system_message",LIVING_ROOM_VIDEO_CONTROL_CTA:"living_room_video_control_cta",MESSENGER:"messenger",MESSENGER_COMPOSER:"messenger_composer",MESSENGER_CTA:"messenger_cta",MESSENGER_RTC_CALL:"messenger_rtc_call",MESSENGER_SOLO_PLAYER:"messenger_solo_player",MESSENGER_SOLO_PLAYER_FULL_SCREEN:"messenger_solo_player_full_screen",MESSENGER_VIDEO_ATTACHMENT:"messenger_video_attachment",NEWSFEED_COMPOSER:"newsfeed_composer",NT_CVC_BOTTOMSHEET:"nt_cvc_bottomsheet",NT_WATCHING_TOGETHER:"nt_watching_together",NT_WATCHING_TOGETHER_CTA:"nt_watching_together_cta",PAGE_ADMIN_QP:"page_admin_qp",PAGE_COMPOSER:"page_composer",PAGE_COMPOSER_DIALOG:"page_composer_dialog",PAGE_COMPOSER_PREMIERE:"page_composer_premiere",PAGE_FEED_OPTION:"page_feed_option",PAGE_TIMELINE_VIDEO_CTA:"page_timeline_video_cta",PAGE_VIDEO_LIBRARY_BUTTON:"page_video_library_button",PAGE_VIDEO_LIBRARY_MEGAPHONE:"page_video_library_megaphone",SOTTO_CATALOG_WATCH_TOGETHER:"sotto_catalog_watch_together",TEST:"test",UFI_SHARE:"ufi_share",UNKNOWN:"unknown",UNKNOWN_COMPOSER:"unknown_composer",UNKNOWN_TIMELINE_VIDEO_CTA:"unknown_timeline_video_cta",USER_TIMELINE_COMPOSER:"user_timeline_composer",USER_TIMELINE_VIDEO_CTA:"user_timeline_video_cta",VIDEO_INSIGHTS_DIALOG:"video_insights_dialog",VIDEO_PLAYER_PLUGIN:"video_player_plugin",VIDEO_PLAYER_PLUGIN_DIALOG:"video_player_plugin_dialog"})}),null);
__d("LivingRoomEntrySource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({WATCH_TAB:"WATCH_TAB",TAHOE:"TAHOE",TAHOE_TO_FEED:"TAHOE_TO_FEED",SOCIAL_PLAYER:"SOCIAL_PLAYER",CHANNEL_PLAYER:"CHANNEL_PLAYER",FEED:"FEED",PAGE_TIMELINE:"PAGE_TIMELINE",USER_TIMELINE:"USER_TIMELINE",GROUP_FEED:"GROUP_FEED",PAGE_FEED_OPTION:"PAGE_FEED_OPTION",NOTIFICATIONS:"NOTIFICATIONS",PERMALINK:"PERMALINK",DEEPLINK:"DEEPLINK",COMPOSER:"COMPOSER",STORY_ATTACHMENT:"STORY_ATTACHMENT",PUSH_NOTIFICATIONS:"PUSH_NOTIFICATIONS",CTA_CREATION_DIALOG:"CTA_CREATION_DIALOG",MESSENGER_AUTO_JOIN:"MESSENGER_AUTO_JOIN",MESSENGER_RTC_CALL:"MESSENGER_RTC_CALL",MESSENGER_COMPOSER:"MESSENGER_COMPOSER",MESSENGER_INBOX:"MESSENGER_INBOX",MESSENGER_THREAD_BANNER:"MESSENGER_THREAD_BANNER",MESSENGER_VIDEO_ATTACHMENT:"MESSENGER_VIDEO_ATTACHMENT",MESSENGER_XMA:"MESSENGER_XMA",MESSENGER_SOLO_PLAYER:"MESSENGER_SOLO_PLAYER",MESSENGER_SOLO_PLAYER_FULL_SCREEN:"MESSENGER_SOLO_PLAYER_FULL_SCREEN",LIVE_VIDEO_SHARE_SHEET:"LIVE_VIDEO_SHARE_SHEET",END_SCREEN_CHAINING:"END_SCREEN_CHAINING",SCHEDULED_STORY_ATTACHMENT:"SCHEDULED_STORY_ATTACHMENT",SEARCH_RESULTS:"SEARCH_RESULTS",SEARCH_VIDEO_TAB:"SEARCH_VIDEO_TAB",SEARCH_VIDEO_HOME:"SEARCH_VIDEO_HOME",FEED_JOIN_CTA:"FEED_JOIN_CTA",GOODWILL_THROWBACK_CTA:"GOODWILL_THROWBACK_CTA",GROUP_FEED_QP:"GROUP_FEED_QP",WATCH_FEED_INJECTION:"WATCH_FEED_INJECTION",UFI_VOICE_ACTOR_CHANGE:"UFI_VOICE_ACTOR_CHANGE"})}),null);
__d("XLivingRoomVideoShareDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/living_room/share_dialog/",{creation_source:{type:"Enum",required:!0,enumType:1},entry_source:{type:"Enum",required:!0,enumType:1},video_id:{type:"FBID"},default_to_page:{type:"Bool",defaultValue:!1},group_id:{type:"FBID"},living_room_id:{type:"FBID"}})}),null);
__d("CreateLivingRoomActionLink.react",["ix","cx","fbt","CreateLivingRoomActionLinkImpressionFalcoEvent","CreateLivingRoomActionLinkStore","CreateLivingRoomActionLinkTrigger","CreateLivingRoomCTAStyle","Image.react","LivingRoomCreationSource","LivingRoomEntrySource","React","XLivingRoomVideoShareDialogController","XUIButton.react","XUIGrayText.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("CreateLivingRoomActionLinkStore").activateLivingRoomCTAForVideo;a=b("CreateLivingRoomActionLinkStore").withStore;var k=a(function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this.props.triggers;if(a==null)return;j(this.props.videoID,this.props.creationSource||b("LivingRoomCreationSource").UNKNOWN_TIMELINE_VIDEO_CTA)};d.componentDidUpdate=function(a){var c=this.props,d=c.videoID,e=c.creationSource;!this.$1&&!((c=a.store.get("ctas")[d])==null?void 0:c.isActivated)&&((a=this.props.store.get("ctas")[d])==null?void 0:a.isActivated)&&(b("CreateLivingRoomActionLinkImpressionFalcoEvent").log(function(){return{video_id:d,creation_source:e!=null?e:b("LivingRoomCreationSource").FEED_CTA_ON_UNKNOWN,cta_style:b("CreateLivingRoomCTAStyle").CREATE}}),this.$1=!0)};d.render=function(){var a=this.props,c=a.videoID,d=a.title,e=a.linkTitle,f=a.groupID;a=a.creationSource;var h=this.props.store.get("ctas")[c];if(h==null)return null;h=h.isActivated;return!h?null:b("React").createElement("div",{className:"_1kyo"},b("React").createElement("div",{className:"_6z3v"},b("React").createElement(b("Image.react"),{className:"_6z2v",src:g("657321")})),b("React").createElement("div",{className:"_1kyp _6z2w"},b("React").createElement(b("XUIGrayText.react"),{shade:"light"},d!=null?d:i._("Watch this video with your friends"))),b("React").createElement("div",{className:"_1kyq"},b("React").createElement(b("XUIButton.react"),{display:"inline-block",label:e!=null?e:i._("Start Watch Party"),href:"#",ajaxify:b("XLivingRoomVideoShareDialogController").getURIBuilder().setFBID("video_id",c).setEnum("creation_source",a).setEnum("entry_source",b("LivingRoomEntrySource").CTA_CREATION_DIALOG).setFBID("group_id",f).getURI(),rel:"dialog-post"})))};return c}(b("React").Component));c=function(a){return b("React").createElement(k,a)};e.exports=c}),null);