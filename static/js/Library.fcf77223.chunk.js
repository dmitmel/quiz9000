(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/@babel/runtime/core-js/get-iterator.js":function(e,n,t){e.exports=t("./node_modules/core-js/library/fn/get-iterator.js")},"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":function(e,n,t){var r=t("./node_modules/@babel/runtime/core-js/get-iterator.js");e.exports=function(e,n){var t=[],a=!0,o=!1,s=void 0;try{for(var i,l=r(e);!(a=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}return t}},"./node_modules/@babel/runtime/helpers/nonIterableRest.js":function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},"./node_modules/@babel/runtime/helpers/slicedToArray.js":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),a=t("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),o=t("./node_modules/@babel/runtime/helpers/nonIterableRest.js");e.exports=function(e,n){return r(e)||a(e,n)||o()}},"./node_modules/blueimp-md5/js/md5.js":function(e,n,t){var r;!function(a){"use strict";function o(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function s(e,n,t,r,a,s){return o((i=o(o(n,e),o(r,s)))<<(l=a)|i>>>32-l,t);var i,l}function i(e,n,t,r,a,o,i){return s(n&t|~n&r,e,n,a,o,i)}function l(e,n,t,r,a,o,i){return s(n&r|t&~r,e,n,a,o,i)}function u(e,n,t,r,a,o,i){return s(n^t^r,e,n,a,o,i)}function d(e,n,t,r,a,o,i){return s(t^(n|~r),e,n,a,o,i)}function c(e,n){var t,r,a,s,c;e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;var m=1732584193,p=-271733879,f=-1732584194,b=271733878;for(t=0;t<e.length;t+=16)r=m,a=p,s=f,c=b,p=d(p=d(p=d(p=d(p=u(p=u(p=u(p=u(p=l(p=l(p=l(p=l(p=i(p=i(p=i(p=i(p,f=i(f,b=i(b,m=i(m,p,f,b,e[t],7,-680876936),p,f,e[t+1],12,-389564586),m,p,e[t+2],17,606105819),b,m,e[t+3],22,-1044525330),f=i(f,b=i(b,m=i(m,p,f,b,e[t+4],7,-176418897),p,f,e[t+5],12,1200080426),m,p,e[t+6],17,-1473231341),b,m,e[t+7],22,-45705983),f=i(f,b=i(b,m=i(m,p,f,b,e[t+8],7,1770035416),p,f,e[t+9],12,-1958414417),m,p,e[t+10],17,-42063),b,m,e[t+11],22,-1990404162),f=i(f,b=i(b,m=i(m,p,f,b,e[t+12],7,1804603682),p,f,e[t+13],12,-40341101),m,p,e[t+14],17,-1502002290),b,m,e[t+15],22,1236535329),f=l(f,b=l(b,m=l(m,p,f,b,e[t+1],5,-165796510),p,f,e[t+6],9,-1069501632),m,p,e[t+11],14,643717713),b,m,e[t],20,-373897302),f=l(f,b=l(b,m=l(m,p,f,b,e[t+5],5,-701558691),p,f,e[t+10],9,38016083),m,p,e[t+15],14,-660478335),b,m,e[t+4],20,-405537848),f=l(f,b=l(b,m=l(m,p,f,b,e[t+9],5,568446438),p,f,e[t+14],9,-1019803690),m,p,e[t+3],14,-187363961),b,m,e[t+8],20,1163531501),f=l(f,b=l(b,m=l(m,p,f,b,e[t+13],5,-1444681467),p,f,e[t+2],9,-51403784),m,p,e[t+7],14,1735328473),b,m,e[t+12],20,-1926607734),f=u(f,b=u(b,m=u(m,p,f,b,e[t+5],4,-378558),p,f,e[t+8],11,-2022574463),m,p,e[t+11],16,1839030562),b,m,e[t+14],23,-35309556),f=u(f,b=u(b,m=u(m,p,f,b,e[t+1],4,-1530992060),p,f,e[t+4],11,1272893353),m,p,e[t+7],16,-155497632),b,m,e[t+10],23,-1094730640),f=u(f,b=u(b,m=u(m,p,f,b,e[t+13],4,681279174),p,f,e[t],11,-358537222),m,p,e[t+3],16,-722521979),b,m,e[t+6],23,76029189),f=u(f,b=u(b,m=u(m,p,f,b,e[t+9],4,-640364487),p,f,e[t+12],11,-421815835),m,p,e[t+15],16,530742520),b,m,e[t+2],23,-995338651),f=d(f,b=d(b,m=d(m,p,f,b,e[t],6,-198630844),p,f,e[t+7],10,1126891415),m,p,e[t+14],15,-1416354905),b,m,e[t+5],21,-57434055),f=d(f,b=d(b,m=d(m,p,f,b,e[t+12],6,1700485571),p,f,e[t+3],10,-1894986606),m,p,e[t+10],15,-1051523),b,m,e[t+1],21,-2054922799),f=d(f,b=d(b,m=d(m,p,f,b,e[t+8],6,1873313359),p,f,e[t+15],10,-30611744),m,p,e[t+6],15,-1560198380),b,m,e[t+13],21,1309151649),f=d(f,b=d(b,m=d(m,p,f,b,e[t+4],6,-145523070),p,f,e[t+11],10,-1120210379),m,p,e[t+2],15,718787259),b,m,e[t+9],21,-343485551),m=o(m,r),p=o(p,a),f=o(f,s),b=o(b,c);return[m,p,f,b]}function m(e){var n,t="",r=32*e.length;for(n=0;n<r;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function p(e){var n,t=[];for(t[(e.length>>2)-1]=void 0,n=0;n<t.length;n+=1)t[n]=0;var r=8*e.length;for(n=0;n<r;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function f(e){var n,t,r="";for(t=0;t<e.length;t+=1)n=e.charCodeAt(t),r+="0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n);return r}function b(e){return unescape(encodeURIComponent(e))}function j(e){return function(e){return m(c(p(e),8*e.length))}(b(e))}function h(e,n){return function(e,n){var t,r,a=p(e),o=[],s=[];for(o[15]=s[15]=void 0,a.length>16&&(a=c(a,8*e.length)),t=0;t<16;t+=1)o[t]=909522486^a[t],s[t]=1549556828^a[t];return r=c(o.concat(p(n)),512+8*n.length),m(c(s.concat(r),640))}(b(e),b(n))}function g(e,n,t){return n?t?h(n,e):f(h(n,e)):t?j(e):f(j(e))}void 0===(r=function(){return g}.call(n,t,n,e))||(e.exports=r)}()},"./node_modules/core-js/library/fn/get-iterator.js":function(e,n,t){t("./node_modules/core-js/library/modules/web.dom.iterable.js"),t("./node_modules/core-js/library/modules/es6.string.iterator.js"),e.exports=t("./node_modules/core-js/library/modules/core.get-iterator.js")},"./node_modules/core-js/library/modules/core.get-iterator.js":function(e,n,t){var r=t("./node_modules/core-js/library/modules/_an-object.js"),a=t("./node_modules/core-js/library/modules/core.get-iterator-method.js");e.exports=t("./node_modules/core-js/library/modules/_core.js").getIterator=function(e){var n=a(e);if("function"!=typeof n)throw TypeError(e+" is not iterable!");return r(n.call(e))}},"./node_modules/material-ui/Card/Card.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t("./node_modules/babel-runtime/helpers/extends.js")),a=i(t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),o=i(t("./node_modules/react/index.js")),s=(i(t("./node_modules/material-ui/node_modules/prop-types/index.js")),i(t("./node_modules/material-ui/Paper/index.js")));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var n=e.raised,t=(0,a.default)(e,["raised"]);return o.default.createElement(s.default,(0,r.default)({elevation:n?8:2},t))}l.propTypes={},l.defaultProps={raised:!1},n.default=l},"./node_modules/material-ui/Card/CardContent.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=void 0;var r=l(t("./node_modules/babel-runtime/helpers/extends.js")),a=l(t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),o=l(t("./node_modules/react/index.js")),s=(l(t("./node_modules/material-ui/node_modules/prop-types/index.js")),l(t("./node_modules/classnames/index.js"))),i=l(t("./node_modules/material-ui/styles/withStyles.js"));function l(e){return e&&e.__esModule?e:{default:e}}var u=n.styles=function(e){return{root:e.mixins.gutters({paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,"&:last-child":{paddingBottom:3*e.spacing.unit}})}};function d(e){var n=e.classes,t=e.className,i=e.component,l=(0,a.default)(e,["classes","className","component"]);return o.default.createElement(i,(0,r.default)({className:(0,s.default)(n.root,t)},l))}d.propTypes={},d.defaultProps={component:"div"},n.default=(0,i.default)(u,{name:"MuiCardContent"})(d)},"./node_modules/material-ui/Card/CardMedia.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=void 0;var r=u(t("./node_modules/babel-runtime/helpers/defineProperty.js")),a=u(t("./node_modules/babel-runtime/helpers/extends.js")),o=u(t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),s=u(t("./node_modules/react/index.js")),i=(u(t("./node_modules/material-ui/node_modules/prop-types/index.js")),u(t("./node_modules/classnames/index.js"))),l=(u(t("./node_modules/warning/browser.js")),u(t("./node_modules/material-ui/styles/withStyles.js")));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.styles={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}},c=["video","audio","picture","iframe","img"];function m(e){var n=e.classes,t=e.className,l=e.component,u=e.image,d=e.src,m=e.style,p=(0,o.default)(e,["classes","className","component","image","src","style"]),f=-1!==c.indexOf(l),b=!f&&u?(0,a.default)({backgroundImage:"url("+u+")"},m):m;return s.default.createElement(l,(0,a.default)({className:(0,i.default)(n.root,(0,r.default)({},n.media,f),t),style:b,src:f?u||d:void 0},p))}m.propTypes={},m.defaultProps={component:"div"},n.default=(0,l.default)(d,{name:"MuiCardMedia"})(m)},"./src/assets/logo/blue.svg":function(e,n,t){e.exports=t.p+"static/media/blue.d144a868.svg"},"./src/assets/logo/white.svg":function(e,n,t){e.exports=t.p+"static/media/white.788c16ce.svg"},"./src/components/NavDrawer/index.js":function(e,n,t){"use strict";var r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),a=t.n(r),o=t("./node_modules/react/index.js"),s=t.n(o),i=t("./node_modules/prop-types/index.js"),l=t.n(i),u=t("./node_modules/react-router-dom/es/index.js"),d=t("./node_modules/material-ui/styles/withStyles.js"),c=t.n(d),m=t("./node_modules/material-ui/Toolbar/Toolbar.js"),p=t.n(m),f=t("./node_modules/material-ui/Typography/Typography.js"),b=t.n(f),j=t("./node_modules/material-ui/Drawer/Drawer.js"),h=t.n(j),g=t("./node_modules/material-ui/List/List.js"),_=t.n(g),v=t("./node_modules/material-ui/Hidden/Hidden.js"),y=t.n(v),x=t("./node_modules/material-ui/Divider/Divider.js"),E=t.n(x),C=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),w=t.n(C),k=t("./node_modules/material-ui/List/ListItem.js"),R=t.n(k),q=t("./node_modules/material-ui/List/ListItemIcon.js"),T=t.n(q),N=t("./node_modules/material-ui/List/ListItemText.js"),P=t.n(N),O=t("./node_modules/material-ui/Icon/index.js"),z=t.n(O),S=function(e){var n=e.icon,t=e.text,r=w()(e,["icon","text"]);return s.a.createElement(R.a,Object.assign({button:!0},r),s.a.createElement(T.a,null,s.a.createElement(z.a,null,n)),s.a.createElement(P.a,{primary:t}))};S.propTypes={icon:l.a.string.isRequired,text:l.a.string.isRequired};var I=S,B=t("./node_modules/react-redux/es/index.js"),D=t("./src/actions/creators/index.js"),L=t("./node_modules/material-ui/Button/Button.js"),M=t.n(L),A=t("./node_modules/material-ui/Dialog/Dialog.js"),W=t.n(A),Q=t("./node_modules/material-ui/Dialog/DialogTitle.js"),H=t.n(Q),F=t("./node_modules/material-ui/Dialog/DialogContent.js"),J=t.n(F),U=t("./node_modules/material-ui/Dialog/DialogContentText.js"),G=t.n(U),K=t("./node_modules/material-ui/Dialog/DialogActions.js"),V=t.n(K),X=function(e){var n=e.open,t=e.onClose;return s.a.createElement(W.a,{open:n,onClose:t},s.a.createElement(H.a,null,"Settings"),s.a.createElement(J.a,null,s.a.createElement(G.a,null,"Settings will be here.")),s.a.createElement(V.a,null,s.a.createElement(M.a,{onClick:t},"Cancel"),s.a.createElement(M.a,{color:"primary",autoFocus:!0,onClick:t},"Save")))};X.propTypes={open:l.a.bool.isRequired,onClose:l.a.func.isRequired};var Y=X,Z=Object(B.connect)(function(e){return{open:e.Settings.open}},function(e){return{onClose:function(){return e(D.closeSettings())}}})(Y),$=t("./src/assets/logo/blue.svg"),ee=t.n($),ne=t("./src/assets/logo/white.svg"),te=t.n(ne),re=function(e){var n=e.open,t=e.onClose,r=e.openSettings,a=e.classes,o=e.theme,i=s.a.createElement("div",null,s.a.createElement(p.a,null,s.a.createElement("img",{alt:"logo",src:"dark"===o.palette.type?te.a:ee.a,className:a.logo}),s.a.createElement(b.a,{variant:"title",noWrap:!0},"Quiz9000")),s.a.createElement(E.a,null),s.a.createElement(_.a,null,s.a.createElement(I,{icon:"library_books",text:"Library",component:u.a,to:"/library",onClick:t}),s.a.createElement(I,{icon:"explore",text:"Explore",component:u.a,to:"/explore",onClick:t})),s.a.createElement(E.a,null),s.a.createElement(_.a,null,s.a.createElement(I,{icon:"settings",text:"Settings",onClick:function(){t(),r()}}),s.a.createElement(I,{icon:"code",text:"Source code",component:"a",href:"https://github.com/dmitmel/quiz9000",onClick:t}),s.a.createElement(I,{icon:"bug_report",text:"Report a bug",component:"a",href:"https://github.com/dmitmel/quiz9000/issues",onClick:t})));return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{mdUp:!0},s.a.createElement(h.a,{variant:"temporary",anchor:"left",open:n,onClose:t,ModalProps:{keepMounted:!0},classes:{paper:a.drawerPaper}},i)),s.a.createElement(y.a,{smDown:!0,implementation:"css"},s.a.createElement(h.a,{variant:"permanent",open:!0,classes:{paper:a.drawerPaper}},i)),s.a.createElement(Z,null))};re.width=280,re.propTypes={open:l.a.bool.isRequired,onClose:l.a.func.isRequired,openSettings:l.a.func.isRequired,classes:l.a.object.isRequired,theme:l.a.object.isRequired};var ae=c()(function(e){return{drawerPaper:a()({width:re.width},e.breakpoints.up("md"),{position:"relative"}),logo:{width:48,marginLeft:-12,marginRight:20}}},{withTheme:!0})(re);t.d(n,"a",function(){return ae}),t.d(n,!1,function(){return I})},"./src/components/Page/index.js":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/prop-types/index.js"),s=t.n(o),i=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(i),u=t("./node_modules/react-redux/es/index.js"),d=t("./src/actions/creators/index.js"),c=t("./src/components/NavDrawer/index.js"),m=Object(u.connect)(function(e){return{open:e.NavDrawer.open}},function(e){return{onClose:function(){return e(d.closeNav())},openSettings:function(){return e(d.openSettings())}}})(c.a),p=function(e){var n=e.classes,t=e.children;return a.a.createElement("div",{className:n.root},a.a.createElement(m,null),t)};p.propTypes={classes:s.a.object.isRequired};var f=l()({root:{display:"flex",height:"100%"},contentWrapper:{width:"100%"}})(p),b=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),j=t.n(b),h=t("./node_modules/@babel/runtime/helpers/objectSpread.js"),g=t.n(h),_=c.a.width,v=function(e){var n=e.children,t=e.classes;return a.a.createElement("div",{className:t.container},n)};v.propTypes={classes:s.a.object.isRequired};var y=l()(function(e){var n,t=e.breakpoints;return{container:(n={margin:"0 auto"},j()(n,t.up("sm"),{maxWidth:t.values.sm}),j()(n,t.up("md"),{maxWidth:t.values.md-_}),j()(n,t.up("lg"),{maxWidth:t.values.lg-_}),j()(n,t.up("xl"),{maxWidth:t.values.xl-_}),n)}})(v),x=function(e){return{height:"calc(100% - ".concat(e,"px)"),marginTop:e}},E=function(e){var n=e.classes,t=e.children;return a.a.createElement("main",{className:n.content},a.a.createElement(y,{classes:{container:n.padding}},t))};E.propTypes={classes:s.a.object.isRequired};var C=l()(function(e){return{content:g()({width:"100%",backgroundColor:e.palette.background.default,overflow:"auto"},x(56),j()({"@media (orientation: landscape)":x(48)},e.breakpoints.up("sm"),x(64))),padding:j()({height:"100%",position:"relative",padding:2*e.spacing.unit},e.breakpoints.up("sm"),{padding:3*e.spacing.unit})}})(E);t.d(n,"b",function(){return f}),t.d(n,"a",function(){return C})},"./src/components/QuizList/index.js":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/prop-types/index.js"),s=t.n(o),i=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(i),u=t("./node_modules/react-router-dom/es/index.js"),d=t("./node_modules/material-ui/Card/Card.js"),c=t.n(d),m=t("./node_modules/material-ui/Card/CardContent.js"),p=t.n(m),f=t("./node_modules/material-ui/Card/CardMedia.js"),b=t.n(f),j=t("./node_modules/material-ui/ButtonBase/index.js"),h=t.n(j),g=t("./node_modules/material-ui/Typography/index.js"),_=t.n(g),v=function(e){var n=e.id,t=e.image,r=e.name,o=e.description,s=e.classes;return a.a.createElement(c.a,{className:s.root},a.a.createElement(h.a,{className:s.button,component:u.a,to:"/quiz/".concat(n)},a.a.createElement(b.a,{component:"img",image:t,alt:"icon",className:s.image}),a.a.createElement(p.a,{className:s.text},a.a.createElement(_.a,{variant:"headline"},r),a.a.createElement(_.a,{variant:"subheading",color:"textSecondary"},o))))};v.propTypes={id:s.a.any.isRequired,image:s.a.string,name:s.a.string.isRequired,description:s.a.string,classes:s.a.object.isRequired};var y=l()(function(e){return{root:{margin:e.spacing.unit,flexGrow:1},button:{display:"flex",justifyContent:"flex-start",padding:2*e.spacing.unit,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{"@media (hover: hover)":{backgroundColor:e.palette.action.hover}}},image:{width:56,height:56,marginRight:2*e.spacing.unit},text:{padding:0,alignSelf:"flex-start"}}})(v),x=function(e){var n=e.quizzes,t=e.classes;return a.a.createElement("div",{className:t.root},n.map(function(e){return e&&a.a.createElement(y,Object.assign({key:e.id},e))}))};x.propTypes={quizzes:s.a.array.isRequired,classes:s.a.object.isRequired};var E=l()(function(e){return{root:{display:"flex",margin:-e.spacing.unit,flexWrap:"wrap"}}})(x);t.d(n,"a",function(){return E}),t.d(n,!1,function(){return y})},"./src/containers/Library.js":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/@babel/runtime/helpers/objectSpread.js"),a=t.n(r),o=t("./node_modules/react-redux/es/index.js"),s=t("./src/actions/creators/index.js"),i=t("./node_modules/react/index.js"),l=t.n(i),u=t("./node_modules/prop-types/index.js"),d=t.n(u),c=t("./src/components/Page/index.js"),m=t("./src/containers/MainAppBar.js"),p=t("./src/components/QuizList/index.js"),f=t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),b=t.n(f),j=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),h=t.n(j),g=t("./node_modules/@babel/runtime/helpers/createClass.js"),_=t.n(g),v=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),y=t.n(v),x=t("./node_modules/@babel/runtime/helpers/inherits.js"),E=t.n(x),C=t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),w=t.n(C),k=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),R=t.n(k),q=t("./node_modules/blueimp-md5/js/md5.js"),T=t.n(q),N=t("./node_modules/material-ui/styles/withStyles.js"),P=t.n(N),O=t("./node_modules/material-ui/Button/Button.js"),z=t.n(O),S=t("./node_modules/material-ui/Icon/index.js"),I=t.n(S),B=function(e){return new Promise(function(n,t){var r=new FileReader;r.onload=function(){return n(r.result)},r.onerror=function(){return t(r.error)},r.readAsText(e)})},D=function(e){function n(){var e,t,r;h()(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return y()(r,(t=r=y()(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),Object.defineProperty(w()(r),"onButtonClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){return r.input.click()}}),Object.defineProperty(w()(r),"onInputChange",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=e.target,t=b()(n.files,1)[0],a=r.props.addQuiz;B(t).then(function(e){var n=JSON.parse(e),t=T()(e).slice(0,8);a(t,n)},console.error)}}),t))}return E()(n,e),_()(n,[{key:"render",value:function(){var e=this,n=this.props.classes;return l.a.createElement("div",{className:n.wrapper},l.a.createElement(z.a,{variant:"fab",color:"secondary",onClick:this.onButtonClick,"aria-label":"upload quiz"},l.a.createElement(I.a,null,"file_upload")),l.a.createElement("input",{type:"file",accept:"application/json",onChange:this.onInputChange,className:n.input,ref:function(n){e.input=n}}))}}]),n}(l.a.Component);Object.defineProperty(D,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{addQuiz:d.a.func.isRequired,classes:d.a.object.isRequired}});var L=P()(function(e){return{wrapper:R()({position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit},e.breakpoints.up("sm"),{bottom:3*e.spacing.unit,right:3*e.spacing.unit}),input:{display:"none"}}})(D),M=function(e){var n=e.quizzes,t=e.addQuiz;return l.a.createElement(c.b,null,l.a.createElement(m.a,{title:"Library"}),l.a.createElement(c.a,null,l.a.createElement(p.a,{quizzes:n}),l.a.createElement(L,{addQuiz:t})))};M.propTypes={quizzes:d.a.array.isRequired,addQuiz:d.a.func.isRequired};var A=M;n.default=Object(o.connect)(function(e){return{quizzes:Object.keys(e.Library).map(function(n){var t=e.Library[n];return a()({},t,{id:n})})}},function(e){return{addQuiz:function(n,t){return e(s.addQuiz(n,t))}}})(A)},"./src/containers/MainAppBar.js":function(e,n,t){"use strict";var r=t("./node_modules/react-redux/es/index.js"),a=t("./src/actions/creators/index.js"),o=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),s=t.n(o),i=t("./node_modules/react/index.js"),l=t.n(i),u=t("./node_modules/prop-types/index.js"),d=t.n(u),c=t("./node_modules/material-ui/styles/withStyles.js"),m=t.n(c),p=t("./node_modules/material-ui/AppBar/AppBar.js"),f=t.n(p),b=t("./node_modules/material-ui/Toolbar/Toolbar.js"),j=t.n(b),h=t("./node_modules/material-ui/Typography/Typography.js"),g=t.n(h),_=t("./node_modules/material-ui/IconButton/IconButton.js"),v=t.n(_),y=t("./node_modules/material-ui/Icon/Icon.js"),x=t.n(y),E=t("./src/components/NavDrawer/index.js"),C=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),w=t.n(C),k=t("./node_modules/@babel/runtime/helpers/createClass.js"),R=t.n(k),q=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),T=t.n(q),N=t("./node_modules/@babel/runtime/helpers/inherits.js"),P=t.n(N),O=t("./node_modules/recompose/compose.js"),z=t.n(O),S=t("./node_modules/recompose/withState.js"),I=t.n(S),B=t("./node_modules/recompose/withHandlers.js"),D=t.n(B),L=t("./node_modules/material-ui/Menu/Menu.js"),M=t.n(L),A=t("./node_modules/material-ui/Menu/MenuItem.js"),W=t.n(A),Q=function(e){function n(){return w()(this,n),T()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return P()(n,e),R()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.open,r=n.onOpen,a=n.onClose,o=n.items,s=n.classes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{color:"inherit",className:s.button,onClick:r,buttonRef:function(n){e.button=n},"aria-label":"Open menu","aria-owns":t?s.root:null,"aria-haspopup":"true"},l.a.createElement(x.a,null,"more_vert")),o&&l.a.createElement(M.a,{id:s.root,anchorEl:this.button,open:t,onClose:a},o&&o.map(function(e){var n=e.name,t=e.disabled,r=e.onClick;return l.a.createElement(W.a,{key:n,disabled:t,onClick:function(){a(),r&&r()}},n)})))}}]),n}(l.a.Component);Object.defineProperty(Q,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{open:d.a.bool.isRequired,onOpen:d.a.func.isRequired,onClose:d.a.func.isRequired,items:d.a.arrayOf(d.a.shape({name:d.a.string.isRequired,disabled:d.a.bool,onClick:d.a.func}).isRequired).isRequired,classes:d.a.object.isRequired}});var H=z()(I()("open","setOpen",!1),D()({onOpen:function(e){var n=e.setOpen;return function(){return n(!0)}},onClose:function(e){var n=e.setOpen;return function(){return n(!1)}}}),m()({root:{},button:{},item:{"&:focus":{outline:"none"}}}))(Q),F=function(e){var n=e.openNav,t=e.title,r=e.buttons,a=e.menuItems,o=e.classes;return l.a.createElement(f.a,{position:"absolute",className:o.root},l.a.createElement(j.a,null,l.a.createElement(v.a,{color:"inherit",className:o.navButton,onClick:n,"aria-label":"Open nav"},l.a.createElement(x.a,null,"menu")),t&&l.a.createElement(g.a,{variant:"title",color:"inherit",noWrap:!0,className:o.title},t),r,a&&l.a.createElement(H,{items:a,classes:{button:o.menuButton}})))};F.propTypes={openNav:d.a.func.isRequired,title:d.a.string.isRequired,buttons:d.a.any,menuItems:d.a.array,classes:d.a.object.isRequired};var J=m()(function(e){return{root:s()({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(E.a.width,"px)")}),navButton:s()({marginLeft:-12,marginRight:20},e.breakpoints.up("md"),{display:"none"}),title:{flex:1},menuButton:{width:36,marginRight:-12}}})(F);n.a=Object(r.connect)(null,function(e){return{openNav:function(){return e(a.openNav())}}})(J)}}]);
//# sourceMappingURL=Library.fcf77223.chunk.js.map