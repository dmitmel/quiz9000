(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./node_modules/material-ui/Avatar/Avatar.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=void 0;var a=u(t("./node_modules/babel-runtime/helpers/extends.js")),o=u(t("./node_modules/babel-runtime/helpers/defineProperty.js")),s=u(t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),r=u(t("./node_modules/react/index.js")),i=(u(t("./node_modules/prop-types/index.js")),u(t("./node_modules/classnames/index.js"))),l=u(t("./node_modules/material-ui/styles/withStyles.js"));function u(e){return e&&e.__esModule?e:{default:e}}var c=n.styles=function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:5*e.spacing.unit,height:5*e.spacing.unit,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}};function d(e){var n=e.alt,t=e.children,l=e.childrenClassName,u=e.classes,c=e.className,d=e.component,m=e.imgProps,p=e.sizes,f=e.src,h=e.srcSet,g=(0,s.default)(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),j=(0,i.default)(u.root,(0,o.default)({},u.colorDefault,t&&!f&&!h),c),b=null;if(t)if(l&&"string"!==typeof t&&r.default.isValidElement(t)){var v=(0,i.default)(l,t.props.className);b=r.default.cloneElement(t,{className:v})}else b=t;else(f||h)&&(b=r.default.createElement("img",(0,a.default)({alt:n,src:f,srcSet:h,sizes:p,className:u.img},m)));return r.default.createElement(d,(0,a.default)({className:j},g),b)}d.propTypes={},d.defaultProps={component:"div"},n.default=(0,l.default)(c,{name:"MuiAvatar"})(d)},"./node_modules/material-ui/Menu/MenuItem.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=void 0;var a=c(t("./node_modules/babel-runtime/helpers/defineProperty.js")),o=c(t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),s=c(t("./node_modules/babel-runtime/helpers/extends.js")),r=c(t("./node_modules/react/index.js")),i=(c(t("./node_modules/prop-types/index.js")),c(t("./node_modules/classnames/index.js"))),l=c(t("./node_modules/material-ui/styles/withStyles.js")),u=c(t("./node_modules/material-ui/List/ListItem.js"));function c(e){return e&&e.__esModule?e:{default:e}}var d=n.styles=function(e){return{root:(0,s.default)({},e.typography.subheading,{height:3*e.spacing.unit,boxSizing:"content-box",width:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit,"&$selected":{backgroundColor:e.palette.action.selected}}),selected:{}}};function m(e){var n=e.classes,t=e.className,l=e.component,c=e.selected,d=e.role,m=(0,o.default)(e,["classes","className","component","selected","role"]);return r.default.createElement(u.default,(0,s.default)({button:!0,role:d,tabIndex:-1,className:(0,i.default)(n.root,(0,a.default)({},n.selected,c),t),component:l},m))}m.propTypes={},m.defaultProps={component:"li",role:"menuitem",selected:!1},n.default=(0,l.default)(d,{name:"MuiMenuItem"})(m)},"./node_modules/recompose/lifecycle.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=u(t("./node_modules/babel-runtime/core-js/object/keys.js")),o=u(t("./node_modules/babel-runtime/helpers/extends.js")),s=u(t("./node_modules/babel-runtime/helpers/classCallCheck.js")),r=u(t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=u(t("./node_modules/babel-runtime/helpers/inherits.js")),l=t("./node_modules/react/index.js");u(t("./node_modules/recompose/setDisplayName.js")),u(t("./node_modules/recompose/wrapDisplayName.js"));function u(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(n){var t=(0,l.createFactory)(n),u=function(e){function n(){return(0,s.default)(this,n),(0,r.default)(this,e.apply(this,arguments))}return(0,i.default)(n,e),n.prototype.render=function(){return t((0,o.default)({},this.props,this.state))},n}(l.Component);return(0,a.default)(e).forEach(function(n){return u.prototype[n]=e[n]}),u}}},"./node_modules/recompose/mapProps.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("./node_modules/react/index.js");o(t("./node_modules/recompose/setDisplayName.js")),o(t("./node_modules/recompose/wrapDisplayName.js"));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(n){var t=(0,a.createFactory)(n);return function(n){return t(e(n))}}}},"./node_modules/recompose/withProps.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=s(t("./node_modules/babel-runtime/helpers/extends.js")),o=(s(t("./node_modules/recompose/wrapDisplayName.js")),s(t("./node_modules/recompose/setDisplayName.js")),s(t("./node_modules/recompose/mapProps.js")));function s(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return(0,o.default)(function(n){return(0,a.default)({},n,"function"===typeof e?e(n):e)})}},"./src/assets/logo/blue.svg":function(e,n,t){e.exports=t.p+"static/media/blue.d144a868.svg"},"./src/assets/logo/white.svg":function(e,n,t){e.exports=t.p+"static/media/white.788c16ce.svg"},"./src/components/MainAppBar/index.js":function(e,n,t){"use strict";var a=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),o=t.n(a),s=t("./node_modules/react/index.js"),r=t.n(s),i=t("./node_modules/prop-types/index.js"),l=t.n(i),u=t("./node_modules/material-ui/styles/withStyles.js"),c=t.n(u),d=t("./node_modules/material-ui/AppBar/AppBar.js"),m=t.n(d),p=t("./node_modules/material-ui/Toolbar/Toolbar.js"),f=t.n(p),h=t("./node_modules/material-ui/Typography/Typography.js"),g=t.n(h),j=t("./node_modules/material-ui/IconButton/IconButton.js"),b=t.n(j),v=t("./node_modules/material-ui/Icon/Icon.js"),_=t.n(v),y=t("./src/components/NavDrawer/index.js"),x=function(e){var n=e.openNav,t=e.title,a=e.children,o=e.classes;return r.a.createElement(m.a,{position:"absolute",className:o.root},r.a.createElement(f.a,null,r.a.createElement(b.a,{color:"inherit",className:o.navButton,onClick:n,"aria-label":"Open nav"},r.a.createElement(_.a,null,"menu")),t&&r.a.createElement(g.a,{variant:"title",color:"inherit",noWrap:!0,className:o.title},t),a))};x.propTypes={openNav:l.a.func.isRequired,title:l.a.string.isRequired,classes:l.a.object.isRequired};var E=c()(function(e){return{root:o()({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(y.a.width,"px)")}),navButton:o()({marginLeft:-12,marginRight:20},e.breakpoints.up("md"),{display:"none"}),title:{flex:1}}})(x),w=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),R=t.n(w),C=t("./node_modules/@babel/runtime/helpers/inherits.js"),N=t.n(C),k=t("./node_modules/@babel/runtime/helpers/createClass.js"),S=t.n(k),D=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),P=t.n(D),T=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),q=t.n(T),M=t("./node_modules/recompose/compose.js"),z=t.n(M),O=t("./node_modules/recompose/withState.js"),B=t.n(O),I=t("./node_modules/recompose/withHandlers.js"),L=t.n(I),A=t("./node_modules/material-ui/Menu/Menu.js"),Q=t.n(A),F=function(e){function n(){return R()(this,n),P()(this,q()(n).apply(this,arguments))}return S()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.open,a=n.onOpen,o=n.onClose,s=n.children,i=n.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{color:"inherit",className:i.button,onClick:a,buttonRef:function(n){e.button=n},"aria-label":"Open menu","aria-owns":t?i.root:null,"aria-haspopup":"true"},r.a.createElement(_.a,null,"more_vert")),r.a.createElement(Q.a,{id:i.root,anchorEl:this.button,open:t,onClick:o,onClose:o,className:i.menu},s))}}]),N()(n,e),n}(r.a.Component);o()(F,"propTypes",{open:l.a.bool.isRequired,onOpen:l.a.func.isRequired,onClose:l.a.func.isRequired,classes:l.a.object.isRequired});var W=z()(B()("open","setOpen",!1),L()({onOpen:function(e){var n=e.setOpen;return function(){return n(!0)}},onClose:function(e){var n=e.setOpen;return function(){return n(!1)}}}),c()({root:{},button:{marginLeft:-8,marginRight:-16},menu:{marginTop:-8,marginLeft:8}}))(F);t.d(n,"b",function(){return E}),t.d(n,"a",function(){return W})},"./src/components/NavDrawer/index.js":function(e,n,t){"use strict";var a=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),o=t.n(a),s=t("./node_modules/react/index.js"),r=t.n(s),i=t("./node_modules/prop-types/index.js"),l=t.n(i),u=t("./node_modules/react-router-dom/es/index.js"),c=t("./node_modules/material-ui/styles/withStyles.js"),d=t.n(c),m=t("./node_modules/material-ui/Toolbar/Toolbar.js"),p=t.n(m),f=t("./node_modules/material-ui/Typography/Typography.js"),h=t.n(f),g=t("./node_modules/material-ui/Drawer/Drawer.js"),j=t.n(g),b=t("./node_modules/material-ui/List/List.js"),v=t.n(b),_=t("./node_modules/material-ui/Hidden/Hidden.js"),y=t.n(_),x=t("./node_modules/material-ui/Divider/Divider.js"),E=t.n(x),w=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),R=t.n(w),C=t("./node_modules/material-ui/List/ListItem.js"),N=t.n(C),k=t("./node_modules/material-ui/List/ListItemIcon.js"),S=t.n(k),D=t("./node_modules/material-ui/List/ListItemText.js"),P=t.n(D),T=t("./node_modules/material-ui/Icon/index.js"),q=t.n(T),M=function(e){var n=e.icon,t=e.text,a=R()(e,["icon","text"]);return r.a.createElement(N.a,Object.assign({button:!0},a),r.a.createElement(S.a,null,r.a.createElement(q.a,null,n)),r.a.createElement(P.a,{primary:t}))};M.propTypes={icon:l.a.string.isRequired,text:l.a.string.isRequired};var z=M,O=t("./node_modules/react-redux/es/index.js"),B=t("./src/actions/creators/index.js"),I=t("./node_modules/material-ui/Button/Button.js"),L=t.n(I),A=t("./node_modules/material-ui/Dialog/Dialog.js"),Q=t.n(A),F=t("./node_modules/material-ui/Dialog/DialogTitle.js"),W=t.n(F),H=t("./node_modules/material-ui/Dialog/DialogContent.js"),J=t.n(H),U=t("./node_modules/material-ui/Dialog/DialogContentText.js"),G=t.n(U),V=t("./node_modules/material-ui/Dialog/DialogActions.js"),$=t.n(V),K=function(e){var n=e.open,t=e.onClose;return r.a.createElement(Q.a,{open:n,onClose:t},r.a.createElement(W.a,null,"Settings"),r.a.createElement(J.a,null,r.a.createElement(G.a,null,"Settings will be here.")),r.a.createElement($.a,null,r.a.createElement(L.a,{onClick:t},"Cancel"),r.a.createElement(L.a,{color:"primary",autoFocus:!0,onClick:t},"Save")))};K.propTypes={open:l.a.bool.isRequired,onClose:l.a.func.isRequired};var X=K,Y=Object(O.connect)(function(e){return{open:e.Settings.open}},function(e){return{onClose:function(){return e(B.closeSettings())}}})(X),Z=t("./src/assets/logo/blue.svg"),ee=t.n(Z),ne=t("./src/assets/logo/white.svg"),te=t.n(ne),ae=function(e){var n=e.open,t=e.onClose,a=e.openSettings,o=e.classes,s=e.theme,i=r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("img",{alt:"logo",src:"dark"===s.palette.type?te.a:ee.a,className:o.logo}),r.a.createElement(h.a,{variant:"title",noWrap:!0},"Quiz9000")),r.a.createElement(E.a,null),r.a.createElement(v.a,null,r.a.createElement(z,{icon:"library_books",text:"Library",component:u.a,to:"/library",onClick:t}),r.a.createElement(z,{icon:"explore",text:"Explore",component:u.a,to:"/explore",onClick:t})),r.a.createElement(E.a,null),r.a.createElement(v.a,null,r.a.createElement(z,{icon:"settings",text:"Settings",onClick:function(){t(),a()}}),r.a.createElement(z,{icon:"code",text:"Source code",component:"a",href:"https://github.com/dmitmel/quiz9000",onClick:t}),r.a.createElement(z,{icon:"bug_report",text:"Report a bug",component:"a",href:"https://github.com/dmitmel/quiz9000/issues",onClick:t})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{mdUp:!0},r.a.createElement(j.a,{variant:"temporary",anchor:"left",open:n,onClose:t,ModalProps:{keepMounted:!0},classes:{paper:o.drawerPaper}},i)),r.a.createElement(y.a,{smDown:!0,implementation:"css"},r.a.createElement(j.a,{variant:"permanent",open:!0,classes:{paper:o.drawerPaper}},i)),r.a.createElement(Y,null))};ae.width=280,ae.propTypes={open:l.a.bool.isRequired,onClose:l.a.func.isRequired,openSettings:l.a.func.isRequired,classes:l.a.object.isRequired,theme:l.a.object.isRequired};var oe=d()(function(e){return{drawerPaper:o()({width:ae.width},e.breakpoints.up("md"),{position:"relative"}),logo:{width:48,marginLeft:-12,marginRight:20}}},{withTheme:!0})(ae);t.d(n,"a",function(){return oe}),t.d(n,!1,function(){return z})},"./src/components/Page/index.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),o=t.n(a),s=t("./node_modules/prop-types/index.js"),r=t.n(s),i=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(i),u=t("./node_modules/react-redux/es/index.js"),c=t("./src/actions/creators/index.js"),d=t("./src/components/NavDrawer/index.js"),m=Object(u.connect)(function(e){return{open:e.NavDrawer.open}},function(e){return{onClose:function(){return e(c.closeNav())},openSettings:function(){return e(c.openSettings())}}})(d.a),p=function(e){var n=e.classes,t=e.children;return o.a.createElement("div",{className:n.root},o.a.createElement(m,null),t)};p.propTypes={classes:r.a.object.isRequired};var f=l()({root:{display:"flex",height:"100%",animation:"pageTransition 0.3s linear"},contentWrapper:{width:"100%"},"@keyframes pageTransition":{from:{opacity:0,transform:"scale(0.9)"},to:{opacity:1,transform:"scale(1)"}}})(p),h=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),g=t.n(h),j=t("./node_modules/@babel/runtime/helpers/objectSpread.js"),b=t.n(j),v=d.a.width,_=function(e){var n=e.children,t=e.classes;return o.a.createElement("div",{className:t.container},n)};_.propTypes={classes:r.a.object.isRequired};var y=l()(function(e){var n,t=e.breakpoints;return{container:(n={margin:"0 auto"},g()(n,t.up("sm"),{maxWidth:t.values.sm}),g()(n,t.up("md"),{maxWidth:t.values.md-v}),g()(n,t.up("lg"),{maxWidth:t.values.lg-v}),g()(n,t.up("xl"),{maxWidth:t.values.xl-v}),n)}})(_),x=function(e){return{height:"calc(100% - ".concat(e,"px)"),marginTop:e}},E=function(e){var n=e.classes,t=e.children;return o.a.createElement("main",{className:n.content},o.a.createElement(y,{classes:{container:n.padding}},t))};E.propTypes={classes:r.a.object.isRequired};var w=l()(function(e){return{content:b()({width:"100%",backgroundColor:e.palette.background.default,overflow:"auto"},x(56),g()({"@media (orientation: landscape)":x(48)},e.breakpoints.up("sm"),x(64))),padding:g()({height:"100%",position:"relative",padding:2*e.spacing.unit},e.breakpoints.up("sm"),{padding:3*e.spacing.unit})}})(E);t.d(n,"b",function(){return f}),t.d(n,"a",function(){return w})},"./src/containers/MainAppBar.js":function(e,n,t){"use strict";var a=t("./node_modules/react-redux/es/index.js"),o=t("./src/actions/creators/index.js"),s=t("./src/components/MainAppBar/index.js");n.a=Object(a.connect)(null,function(e){return{openNav:function(){return e(o.openNav())}}})(s.b)},"./src/containers/QuizDetails.js":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react-redux/es/index.js"),o=t("./node_modules/recompose/compose.js"),s=t.n(o),r=t("./node_modules/recompose/withProps.js"),i=t.n(r),l=t("./node_modules/recompose/withHandlers.js"),u=t.n(l),c=t("./node_modules/recompose/lifecycle.js"),d=t.n(c),m=t("./src/utils/FetchStatus.js"),p=t("./src/actions/creators/index.js"),f=t("./node_modules/react/index.js"),h=t.n(f),g=t("./node_modules/prop-types/index.js"),j=t.n(g),b=t("./node_modules/material-ui/styles/withStyles.js"),v=t.n(b),_=t("./node_modules/material-ui/Menu/MenuItem.js"),y=t.n(_),x=t("./node_modules/material-ui/IconButton/IconButton.js"),E=t.n(x),w=t("./node_modules/material-ui/Icon/Icon.js"),R=t.n(w),C=t("./node_modules/material-ui/Progress/CircularProgress.js"),N=t.n(C),k=t("./node_modules/material-ui/Avatar/Avatar.js"),S=t.n(k),D=t("./node_modules/material-ui/Typography/Typography.js"),P=t.n(D),T=t("./node_modules/material-ui/Divider/Divider.js"),q=t.n(T),M=t("./node_modules/material-ui/Button/Button.js"),z=t.n(M),O=t("./src/components/Page/index.js"),B=t("./src/containers/MainAppBar.js"),I=t("./src/components/MainAppBar/index.js"),L=function(e){var n=e.loading,t=e.data,a=e.isSaved,o=e.onRefresh,s=e.onSave,r=e.onRemove,i=e.classes;return h.a.createElement(O.b,null,h.a.createElement(B.a,{title:"Quiz"},h.a.createElement(E.a,{color:"inherit","aria-label":"Search"},h.a.createElement(R.a,null,"search")),h.a.createElement(I.a,null,h.a.createElement(y.a,{disabled:n,onClick:o},"Refresh"))),h.a.createElement(O.a,null,n&&h.a.createElement(N.a,{className:i.loading}),t&&h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:i.header},h.a.createElement(S.a,{src:t.image,alt:t.name,className:i.img}),h.a.createElement("div",{className:i.headerRight},h.a.createElement(P.a,{variant:"title"},t.name),h.a.createElement(P.a,{variant:"subheading"},"By ",t.author?t.author.name:"Unknown author"))),h.a.createElement("div",{className:i.buttons},a?h.a.createElement(h.a.Fragment,null,h.a.createElement(z.a,{key:"remove",variant:"raised",className:i.button,onClick:r},"Remove"),h.a.createElement(z.a,{key:"open",variant:"raised",color:"secondary",className:i.button},"Open")):h.a.createElement(z.a,{key:"save",variant:"raised",color:"secondary",className:i.button,onClick:s},"Save")),h.a.createElement(q.a,null),h.a.createElement(P.a,{variant:"subheading",className:i.description},t.description))))};L.propTypes={loading:j.a.bool.isRequired,data:j.a.object,isSaved:j.a.bool.isRequired,onRefresh:j.a.func.isRequired,onSave:j.a.func.isRequired,onRemove:j.a.func.isRequired,classes:j.a.object.isRequired};var A=v()(function(e){return{loading:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},header:{display:"flex",marginBottom:2*e.spacing.unit},buttons:{display:"flex",marginBottom:2*e.spacing.unit,justifyContent:"flex-end"},button:{"&:not(:last-child)":{marginRight:1.5*e.spacing.unit}},img:{width:72,height:72,marginRight:2*e.spacing.unit,borderRadius:0},description:{marginTop:2*e.spacing.unit}}})(L);n.default=s()(Object(a.connect)(function(e,n){var t=n.id;return{quizzes:e.fetchedQuizzes,isSaved:Boolean(e.Library[t])}},function(e){return{fetchQuiz:function(n){return e(p.fetchQuiz(n))},onSave:function(n,t){return e(p.addQuiz(n,t))},onRemove:function(n){return e(p.removeQuiz(n))}}}),i()(function(e){var n=e.quizzes[e.id]||{},t=n.status,a=n.data;return{loading:t===m.a.LOADING,data:a}}),u()({fetchQuiz:function(e){var n=e.loading,t=e.data,a=e.fetchQuiz;return function(e){t||n||a(e)}},onRefresh:function(e){var n=e.id,t=e.loading,a=e.fetchQuiz;return function(){t||a(n)}},onSave:function(e){var n=e.id,t=e.loading,a=e.data,o=e.onSave;return function(){t||o(n,a)}},onRemove:function(e){var n=e.id,t=e.loading,a=e.onRemove;return function(){t||a(n)}}}),d()({componentDidMount:function(){var e=this.props,n=e.id;(0,e.fetchQuiz)(n)},componentWillReceiveProps:function(e){var n=e.id;(0,e.fetchQuiz)(n)}}))(A)}}]);
//# sourceMappingURL=QuizDetails.c9c71883.chunk.js.map