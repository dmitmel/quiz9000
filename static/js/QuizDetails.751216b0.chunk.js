(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./node_modules/material-ui/Avatar/Avatar.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=void 0;var a=u(t("./node_modules/babel-runtime/helpers/extends.js")),o=u(t("./node_modules/babel-runtime/helpers/defineProperty.js")),r=u(t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),s=u(t("./node_modules/react/index.js")),i=(u(t("./node_modules/material-ui/node_modules/prop-types/index.js")),u(t("./node_modules/classnames/index.js"))),l=u(t("./node_modules/material-ui/styles/withStyles.js"));function u(e){return e&&e.__esModule?e:{default:e}}var c=n.styles=function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:5*e.spacing.unit,height:5*e.spacing.unit,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}};function d(e){var n=e.alt,t=e.children,l=e.childrenClassName,u=e.classes,c=e.className,d=e.component,m=e.imgProps,p=e.sizes,f=e.src,h=e.srcSet,g=(0,r.default)(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),b=(0,i.default)(u.root,(0,o.default)({},u.colorDefault,t&&!f&&!h),c),v=null;if(t)if(l&&"string"!==typeof t&&s.default.isValidElement(t)){var j=(0,i.default)(l,t.props.className);v=s.default.cloneElement(t,{className:j})}else v=t;else(f||h)&&(v=s.default.createElement("img",(0,a.default)({alt:n,src:f,srcSet:h,sizes:p,className:u.img},m)));return s.default.createElement(d,(0,a.default)({className:b},g),v)}d.propTypes={},d.defaultProps={component:"div"},n.default=(0,l.default)(c,{name:"MuiAvatar"})(d)},"./node_modules/recompose/lifecycle.js":function(e,n,t){"use strict";n.__esModule=!0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=t("./node_modules/react/index.js");r(t("./node_modules/recompose/setDisplayName.js")),r(t("./node_modules/recompose/wrapDisplayName.js"));function r(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(n){var t=(0,o.createFactory)(n),r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,e.apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),n.prototype.render=function(){return t(a({},this.props,this.state))},n}(o.Component);return Object.keys(e).forEach(function(n){return r.prototype[n]=e[n]}),r}}},"./node_modules/recompose/mapProps.js":function(e,n,t){"use strict";n.__esModule=!0;var a=t("./node_modules/react/index.js");o(t("./node_modules/recompose/setDisplayName.js")),o(t("./node_modules/recompose/wrapDisplayName.js"));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(n){var t=(0,a.createFactory)(n);return function(n){return t(e(n))}}}},"./node_modules/recompose/withProps.js":function(e,n,t){"use strict";n.__esModule=!0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=(r(t("./node_modules/recompose/wrapDisplayName.js")),r(t("./node_modules/recompose/setDisplayName.js")),r(t("./node_modules/recompose/mapProps.js")));function r(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return(0,o.default)(function(n){return a({},n,"function"===typeof e?e(n):e)})}},"./src/assets/logo/blue.svg":function(e,n,t){e.exports=t.p+"static/media/blue.d144a868.svg"},"./src/assets/logo/white.svg":function(e,n,t){e.exports=t.p+"static/media/white.788c16ce.svg"},"./src/components/NavDrawer/index.js":function(e,n,t){"use strict";var a=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),o=t.n(a),r=t("./node_modules/react/index.js"),s=t.n(r),i=t("./node_modules/prop-types/index.js"),l=t.n(i),u=t("./node_modules/react-router-dom/es/index.js"),c=t("./node_modules/material-ui/styles/withStyles.js"),d=t.n(c),m=t("./node_modules/material-ui/Toolbar/Toolbar.js"),p=t.n(m),f=t("./node_modules/material-ui/Typography/Typography.js"),h=t.n(f),g=t("./node_modules/material-ui/Drawer/Drawer.js"),b=t.n(g),v=t("./node_modules/material-ui/List/List.js"),j=t.n(v),y=t("./node_modules/material-ui/Hidden/Hidden.js"),_=t.n(y),E=t("./node_modules/material-ui/Divider/Divider.js"),x=t.n(E),w=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),R=t.n(w),C=t("./node_modules/material-ui/List/ListItem.js"),N=t.n(C),k=t("./node_modules/material-ui/List/ListItemIcon.js"),S=t.n(k),q=t("./node_modules/material-ui/List/ListItemText.js"),D=t.n(q),O=t("./node_modules/material-ui/Icon/index.js"),P=t.n(O),T=function(e){var n=e.icon,t=e.text,a=R()(e,["icon","text"]);return s.a.createElement(N.a,Object.assign({button:!0},a),s.a.createElement(S.a,null,s.a.createElement(P.a,null,n)),s.a.createElement(D.a,{primary:t}))};T.propTypes={icon:l.a.string.isRequired,text:l.a.string.isRequired};var z=T,B=t("./node_modules/react-redux/es/index.js"),I=t("./src/actions/creators/index.js"),M=t("./node_modules/material-ui/Button/Button.js"),Q=t.n(M),L=t("./node_modules/material-ui/Dialog/Dialog.js"),A=t.n(L),F=t("./node_modules/material-ui/Dialog/DialogTitle.js"),W=t.n(F),H=t("./node_modules/material-ui/Dialog/DialogContent.js"),J=t.n(H),U=t("./node_modules/material-ui/Dialog/DialogContentText.js"),V=t.n(U),G=t("./node_modules/material-ui/Dialog/DialogActions.js"),K=t.n(G),X=function(e){var n=e.open,t=e.onClose;return s.a.createElement(A.a,{open:n,onClose:t},s.a.createElement(W.a,null,"Settings"),s.a.createElement(J.a,null,s.a.createElement(V.a,null,"Settings will be here.")),s.a.createElement(K.a,null,s.a.createElement(Q.a,{onClick:t},"Cancel"),s.a.createElement(Q.a,{color:"primary",autoFocus:!0,onClick:t},"Save")))};X.propTypes={open:l.a.bool.isRequired,onClose:l.a.func.isRequired};var Y=X,Z=Object(B.connect)(function(e){return{open:e.Settings.open}},function(e){return{onClose:function(){return e(I.closeSettings())}}})(Y),$=t("./src/assets/logo/blue.svg"),ee=t.n($),ne=t("./src/assets/logo/white.svg"),te=t.n(ne),ae=function(e){var n=e.open,t=e.onClose,a=e.openSettings,o=e.classes,r=e.theme,i=s.a.createElement("div",null,s.a.createElement(p.a,null,s.a.createElement("img",{alt:"logo",src:"dark"===r.palette.type?te.a:ee.a,className:o.logo}),s.a.createElement(h.a,{variant:"title",noWrap:!0},"Quiz9000")),s.a.createElement(x.a,null),s.a.createElement(j.a,null,s.a.createElement(z,{icon:"library_books",text:"Library",component:u.a,to:"/library",onClick:t}),s.a.createElement(z,{icon:"explore",text:"Explore",component:u.a,to:"/explore",onClick:t})),s.a.createElement(x.a,null),s.a.createElement(j.a,null,s.a.createElement(z,{icon:"settings",text:"Settings",onClick:function(){t(),a()}}),s.a.createElement(z,{icon:"code",text:"Source code",component:"a",href:"https://github.com/dmitmel/quiz9000",onClick:t}),s.a.createElement(z,{icon:"bug_report",text:"Report a bug",component:"a",href:"https://github.com/dmitmel/quiz9000/issues",onClick:t})));return s.a.createElement(s.a.Fragment,null,s.a.createElement(_.a,{mdUp:!0},s.a.createElement(b.a,{variant:"temporary",anchor:"left",open:n,onClose:t,ModalProps:{keepMounted:!0},classes:{paper:o.drawerPaper}},i)),s.a.createElement(_.a,{smDown:!0,implementation:"css"},s.a.createElement(b.a,{variant:"permanent",open:!0,classes:{paper:o.drawerPaper}},i)),s.a.createElement(Z,null))};ae.width=280,ae.propTypes={open:l.a.bool.isRequired,onClose:l.a.func.isRequired,openSettings:l.a.func.isRequired,classes:l.a.object.isRequired,theme:l.a.object.isRequired};var oe=d()(function(e){return{drawerPaper:o()({width:ae.width},e.breakpoints.up("md"),{position:"relative"}),logo:{width:48,marginLeft:-12,marginRight:20}}},{withTheme:!0})(ae);t.d(n,"a",function(){return oe}),t.d(n,!1,function(){return z})},"./src/components/Page/index.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/prop-types/index.js"),s=t.n(r),i=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(i),u=t("./node_modules/react-redux/es/index.js"),c=t("./src/actions/creators/index.js"),d=t("./src/components/NavDrawer/index.js"),m=Object(u.connect)(function(e){return{open:e.NavDrawer.open}},function(e){return{onClose:function(){return e(c.closeNav())},openSettings:function(){return e(c.openSettings())}}})(d.a),p=function(e){var n=e.classes,t=e.children;return o.a.createElement("div",{className:n.root},o.a.createElement(m,null),t)};p.propTypes={classes:s.a.object.isRequired};var f=l()({root:{display:"flex",height:"100%"},contentWrapper:{width:"100%"}})(p),h=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),g=t.n(h),b=t("./node_modules/@babel/runtime/helpers/objectSpread.js"),v=t.n(b),j=d.a.width,y=function(e){var n=e.children,t=e.classes;return o.a.createElement("div",{className:t.container},n)};y.propTypes={classes:s.a.object.isRequired};var _=l()(function(e){var n,t=e.breakpoints;return{container:(n={margin:"0 auto"},g()(n,t.up("sm"),{maxWidth:t.values.sm}),g()(n,t.up("md"),{maxWidth:t.values.md-j}),g()(n,t.up("lg"),{maxWidth:t.values.lg-j}),g()(n,t.up("xl"),{maxWidth:t.values.xl-j}),n)}})(y),E=function(e){return{height:"calc(100% - ".concat(e,"px)"),marginTop:e}},x=function(e){var n=e.classes,t=e.children;return o.a.createElement("main",{className:n.content},o.a.createElement(_,{classes:{container:n.padding}},t))};x.propTypes={classes:s.a.object.isRequired};var w=l()(function(e){return{content:v()({width:"100%",backgroundColor:e.palette.background.default,overflow:"auto"},E(56),g()({"@media (orientation: landscape)":E(48)},e.breakpoints.up("sm"),E(64))),padding:g()({height:"100%",position:"relative",padding:2*e.spacing.unit},e.breakpoints.up("sm"),{padding:3*e.spacing.unit})}})(x);t.d(n,"b",function(){return f}),t.d(n,"a",function(){return w})},"./src/containers/MainAppBar.js":function(e,n,t){"use strict";var a=t("./node_modules/react-redux/es/index.js"),o=t("./src/actions/creators/index.js"),r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),s=t.n(r),i=t("./node_modules/react/index.js"),l=t.n(i),u=t("./node_modules/prop-types/index.js"),c=t.n(u),d=t("./node_modules/material-ui/styles/withStyles.js"),m=t.n(d),p=t("./node_modules/material-ui/AppBar/AppBar.js"),f=t.n(p),h=t("./node_modules/material-ui/Toolbar/Toolbar.js"),g=t.n(h),b=t("./node_modules/material-ui/Typography/Typography.js"),v=t.n(b),j=t("./node_modules/material-ui/IconButton/IconButton.js"),y=t.n(j),_=t("./node_modules/material-ui/Icon/Icon.js"),E=t.n(_),x=t("./src/components/NavDrawer/index.js"),w=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),R=t.n(w),C=t("./node_modules/@babel/runtime/helpers/createClass.js"),N=t.n(C),k=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),S=t.n(k),q=t("./node_modules/@babel/runtime/helpers/inherits.js"),D=t.n(q),O=t("./node_modules/recompose/compose.js"),P=t.n(O),T=t("./node_modules/recompose/withState.js"),z=t.n(T),B=t("./node_modules/recompose/withHandlers.js"),I=t.n(B),M=t("./node_modules/material-ui/Menu/Menu.js"),Q=t.n(M),L=t("./node_modules/material-ui/Menu/MenuItem.js"),A=t.n(L),F=function(e){function n(){return R()(this,n),S()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return D()(n,e),N()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.open,a=n.onOpen,o=n.onClose,r=n.items,s=n.classes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{color:"inherit",className:s.button,onClick:a,buttonRef:function(n){e.button=n},"aria-label":"Open menu","aria-owns":t?s.root:null,"aria-haspopup":"true"},l.a.createElement(E.a,null,"more_vert")),r&&l.a.createElement(Q.a,{id:s.root,anchorEl:this.button,open:t,onClose:o},r&&r.map(function(e){var n=e.name,t=e.disabled,a=e.onClick;return l.a.createElement(A.a,{key:n,disabled:t,onClick:function(){o(),a&&a()}},n)})))}}]),n}(l.a.Component);Object.defineProperty(F,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{open:c.a.bool.isRequired,onOpen:c.a.func.isRequired,onClose:c.a.func.isRequired,items:c.a.arrayOf(c.a.shape({name:c.a.string.isRequired,disabled:c.a.bool,onClick:c.a.func}).isRequired).isRequired,classes:c.a.object.isRequired}});var W=P()(z()("open","setOpen",!1),I()({onOpen:function(e){var n=e.setOpen;return function(){return n(!0)}},onClose:function(e){var n=e.setOpen;return function(){return n(!1)}}}),m()({root:{},button:{},item:{"&:focus":{outline:"none"}}}))(F),H=function(e){var n=e.openNav,t=e.title,a=e.buttons,o=e.menuItems,r=e.classes;return l.a.createElement(f.a,{position:"absolute",className:r.root},l.a.createElement(g.a,null,l.a.createElement(y.a,{color:"inherit",className:r.navButton,onClick:n,"aria-label":"Open nav"},l.a.createElement(E.a,null,"menu")),t&&l.a.createElement(v.a,{variant:"title",color:"inherit",noWrap:!0,className:r.title},t),a,o&&l.a.createElement(W,{items:o,classes:{button:r.menuButton}})))};H.propTypes={openNav:c.a.func.isRequired,title:c.a.string.isRequired,buttons:c.a.any,menuItems:c.a.array,classes:c.a.object.isRequired};var J=m()(function(e){return{root:s()({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(x.a.width,"px)")}),navButton:s()({marginLeft:-12,marginRight:20},e.breakpoints.up("md"),{display:"none"}),title:{flex:1},menuButton:{width:36,marginRight:-12}}})(H);n.a=Object(a.connect)(null,function(e){return{openNav:function(){return e(o.openNav())}}})(J)},"./src/containers/QuizDetails.js":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react-redux/es/index.js"),o=t("./node_modules/recompose/compose.js"),r=t.n(o),s=t("./node_modules/recompose/withProps.js"),i=t.n(s),l=t("./node_modules/recompose/withHandlers.js"),u=t.n(l),c=t("./node_modules/recompose/lifecycle.js"),d=t.n(c),m=t("./src/actions/creators/index.js"),p=t("./node_modules/react/index.js"),f=t.n(p),h=t("./node_modules/prop-types/index.js"),g=t.n(h),b=t("./node_modules/material-ui/styles/withStyles.js"),v=t.n(b),j=t("./node_modules/material-ui/IconButton/IconButton.js"),y=t.n(j),_=t("./node_modules/material-ui/Icon/Icon.js"),E=t.n(_),x=t("./node_modules/material-ui/Progress/CircularProgress.js"),w=t.n(x),R=t("./node_modules/material-ui/Avatar/Avatar.js"),C=t.n(R),N=t("./node_modules/material-ui/Typography/Typography.js"),k=t.n(N),S=t("./node_modules/material-ui/Divider/Divider.js"),q=t.n(S),D=t("./node_modules/material-ui/Button/Button.js"),O=t.n(D),P=t("./src/components/Page/index.js"),T=t("./src/containers/MainAppBar.js"),z=function(e){var n=e.loading,t=e.data,a=e.isSaved,o=e.onRefresh,r=e.onSave,s=e.onRemove,i=e.classes;return f.a.createElement(P.b,null,f.a.createElement(T.a,{title:"Quiz",buttons:f.a.createElement(y.a,{color:"inherit","aria-label":"Search"},f.a.createElement(E.a,null,"search")),menuItems:[{name:"Refresh",disabled:n,onClick:o}]}),f.a.createElement(P.a,null,n&&f.a.createElement(w.a,{className:i.loading}),t&&f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:i.header},f.a.createElement(C.a,{src:t.image,alt:t.name,className:i.img}),f.a.createElement("div",{className:i.headerRight},f.a.createElement(k.a,{variant:"title"},t.name),f.a.createElement(k.a,{variant:"subheading"},"By ",t.author?t.author.name:"Unknown author"))),f.a.createElement("div",{className:i.buttons},a?f.a.createElement(f.a.Fragment,null,f.a.createElement(O.a,{key:"remove",variant:"raised",className:i.button,onClick:s},"Remove"),f.a.createElement(O.a,{key:"open",variant:"raised",color:"secondary",className:i.button},"Open")):f.a.createElement(O.a,{key:"save",variant:"raised",color:"secondary",className:i.button,onClick:r},"Save")),f.a.createElement(q.a,null),f.a.createElement(k.a,{variant:"subheading",className:i.description},t.description))))};z.propTypes={loading:g.a.bool.isRequired,data:g.a.object,isSaved:g.a.bool.isRequired,onRefresh:g.a.func.isRequired,onSave:g.a.func.isRequired,onRemove:g.a.func.isRequired,classes:g.a.object.isRequired};var B=v()(function(e){return{loading:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},header:{display:"flex",marginBottom:2*e.spacing.unit},buttons:{display:"flex",marginBottom:2*e.spacing.unit,justifyContent:"flex-end"},button:{"&:not(:last-child)":{marginRight:1.5*e.spacing.unit}},img:{width:72,height:72,marginRight:2*e.spacing.unit,borderRadius:0},description:{marginTop:2*e.spacing.unit}}})(z);n.default=r()(Object(a.connect)(function(e,n){var t=n.id;return{quizzes:e.fetchedQuizzes,isSaved:Boolean(e.Library[t])}},function(e){return{fetchQuiz:function(n){return e(m.fetchQuiz(n))},onSave:function(n,t){return e(m.addQuiz(n,t))},onRemove:function(n){return e(m.removeQuiz(n))}}}),i()(function(e){var n=e.quizzes[e.id]||{};return{loading:"loading"===n.status,data:n.data}}),u()({fetchQuiz:function(e){var n=e.loading,t=e.data,a=e.fetchQuiz;return function(e){t||n||a(e)}},onRefresh:function(e){var n=e.id,t=e.loading,a=e.fetchQuiz;return function(){t||a(n)}},onSave:function(e){var n=e.id,t=e.loading,a=e.data,o=e.onSave;return function(){t||o(n,a)}},onRemove:function(e){var n=e.id,t=e.loading,a=e.onRemove;return function(){t||a(n)}}}),d()({componentDidMount:function(){var e=this.props,n=e.id;(0,e.fetchQuiz)(n)},componentWillReceiveProps:function(e){var n=e.id;(0,e.fetchQuiz)(n)}}))(B)}}]);
//# sourceMappingURL=QuizDetails.751216b0.chunk.js.map