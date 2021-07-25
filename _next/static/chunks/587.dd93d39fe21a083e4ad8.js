(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},7947:function(e,t,n){"use strict";var r=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(o=n(617))&&o.__esModule?o:{default:o},u=n(3367),s=n(4287),p=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var p=l[u];if(a.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?o=!1:n.add(p);else{var d=a.props[p],f=r[p]||new Set;"name"===p&&i||!f.has(d)?(f.add(d),r[p]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:o})}))}function y(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,p.isInAmpMode)(n)},t)}y.rewind=function(){};var g=y;t.default=g},617:function(e,t,n){"use strict";var r=n(3115),a=n(2553),o=n(2012),i=(n(450),n(9807)),c=n(7690),u=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var p=n(7294),d=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=d},5587:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(9008),o=n(4155);t.default=function(e){var t=e.title,n=e.description,i=e.image,c=e.shouldExcludeTitleSuffix,u=e.shouldIndexPage,s="".concat(t).concat(c?"":" | eduqg.github.io"),p=i?"".concat(o.env.NEXT_PUBLIC_SITE_URL,"/").concat(i):null;return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:s}),n&&(0,r.jsx)("meta",{name:"description",content:n}),p&&(0,r.jsx)("meta",{name:"image",content:p}),!u&&(0,r.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,r.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"IE=edge,chrome=1"}),(0,r.jsx)("meta",{name:"MobileOptimized",content:"320"}),(0,r.jsx)("meta",{name:"HandheldFriendly",content:"True"}),(0,r.jsx)("meta",{name:"theme-color",content:"#121214"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#121214"}),(0,r.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,r.jsx)("meta",{name:"google",content:"notranslate"}),(0,r.jsx)("meta",{property:"og:title",content:s}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:locale",content:"pt_BR"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:site_name",content:s}),(0,r.jsx)("meta",{property:"og:image",content:p}),(0,r.jsx)("meta",{property:"og:image:secure_url",content:p}),(0,r.jsx)("meta",{property:"og:image:alt",content:"Thumbnail"}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{property:"og:image:height",content:"630"}),(0,r.jsx)("meta",{name:"twitter:title",content:s}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@eduqg"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@eduqg"}),(0,r.jsx)("meta",{name:"twitter:image",content:p}),(0,r.jsx)("meta",{name:"twitter:image:src",content:p}),(0,r.jsx)("meta",{name:"twitter:image:alt",content:"Thumbnail"}),(0,r.jsx)("meta",{name:"twitter:image:width",content:"1200"}),(0,r.jsx)("meta",{name:"twitter:image:height",content:"620"})]})}},9008:function(e,t,n){e.exports=n(7947)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),a=n(7381),o=n(3585),i=n(5725);e.exports=function(e){return r(e)||a(e)||o(e)||i()}}}]);