(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/material-ui/Menu/MenuItem.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.styles=void 0;var a=c(t("./node_modules/babel-runtime/helpers/defineProperty.js")),o=c(t("./node_modules/babel-runtime/helpers/objectWithoutProperties.js")),s=c(t("./node_modules/babel-runtime/helpers/extends.js")),r=c(t("./node_modules/react/index.js")),i=(c(t("./node_modules/prop-types/index.js")),c(t("./node_modules/classnames/index.js"))),l=c(t("./node_modules/material-ui/styles/withStyles.js")),u=c(t("./node_modules/material-ui/List/ListItem.js"));function c(e){return e&&e.__esModule?e:{default:e}}var d=n.styles=function(e){return{root:(0,s.default)({},e.typography.subheading,{height:3*e.spacing.unit,boxSizing:"content-box",width:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit,"&$selected":{backgroundColor:e.palette.action.selected}}),selected:{}}};function m(e){var n=e.classes,t=e.className,l=e.component,c=e.selected,d=e.role,m=(0,o.default)(e,["classes","className","component","selected","role"]);return r.default.createElement(u.default,(0,s.default)({button:!0,role:d,tabIndex:-1,className:(0,i.default)(n.root,(0,a.default)({},n.selected,c),t),component:l},m))}m.propTypes={},m.defaultProps={component:"li",role:"menuitem",selected:!1},n.default=(0,l.default)(d,{name:"MuiMenuItem"})(m)},"./node_modules/recompose/lifecycle.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=u(t("./node_modules/babel-runtime/core-js/object/keys.js")),o=u(t("./node_modules/babel-runtime/helpers/extends.js")),s=u(t("./node_modules/babel-runtime/helpers/classCallCheck.js")),r=u(t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),i=u(t("./node_modules/babel-runtime/helpers/inherits.js")),l=t("./node_modules/react/index.js");u(t("./node_modules/recompose/setDisplayName.js")),u(t("./node_modules/recompose/wrapDisplayName.js"));function u(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(n){var t=(0,l.createFactory)(n),u=function(e){function n(){return(0,s.default)(this,n),(0,r.default)(this,e.apply(this,arguments))}return(0,i.default)(n,e),n.prototype.render=function(){return t((0,o.default)({},this.props,this.state))},n}(l.Component);return(0,a.default)(e).forEach(function(n){return u.prototype[n]=e[n]}),u}}},"./node_modules/recompose/mapProps.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("./node_modules/react/index.js");o(t("./node_modules/recompose/setDisplayName.js")),o(t("./node_modules/recompose/wrapDisplayName.js"));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return function(n){var t=(0,a.createFactory)(n);return function(n){return t(e(n))}}}},"./node_modules/recompose/withProps.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=s(t("./node_modules/babel-runtime/helpers/extends.js")),o=(s(t("./node_modules/recompose/wrapDisplayName.js")),s(t("./node_modules/recompose/setDisplayName.js")),s(t("./node_modules/recompose/mapProps.js")));function s(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return(0,o.default)(function(n){return(0,a.default)({},n,"function"===typeof e?e(n):e)})}},"./src/assets/logo/blue.svg":function(e,n,t){e.exports=t.p+"static/media/blue.d144a868.svg"},"./src/assets/logo/white.svg":function(e,n,t){e.exports=t.p+"static/media/white.788c16ce.svg"},"./src/components/MainAppBar/index.js":function(e,n,t){"use strict";var a=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),o=t.n(a),s=t("./node_modules/react/index.js"),r=t.n(s),i=t("./node_modules/prop-types/index.js"),l=t.n(i),u=t("./node_modules/material-ui/styles/withStyles.js"),c=t.n(u),d=t("./node_modules/material-ui/AppBar/AppBar.js"),m=t.n(d),p=t("./node_modules/material-ui/Toolbar/Toolbar.js"),f=t.n(p),h=t("./node_modules/material-ui/Typography/Typography.js"),g=t.n(h),j=t("./node_modules/material-ui/IconButton/IconButton.js"),b=t.n(j),v=t("./node_modules/material-ui/Icon/Icon.js"),_=t.n(v),y=t("./src/components/NavDrawer/index.js"),E=function(e){var n=e.openNav,t=e.title,a=e.children,o=e.classes;return r.a.createElement(m.a,{position:"absolute",className:o.root},r.a.createElement(f.a,null,r.a.createElement(b.a,{color:"inherit",className:o.navButton,onClick:n,"aria-label":"Open nav"},r.a.createElement(_.a,null,"menu")),t&&r.a.createElement(g.a,{variant:"title",color:"inherit",noWrap:!0,className:o.title},t),a))};E.propTypes={openNav:l.a.func.isRequired,title:l.a.string.isRequired,classes:l.a.object.isRequired};var x=c()(function(e){return{root:o()({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(y.a.width,"px)")}),navButton:o()({marginLeft:-12,marginRight:20},e.breakpoints.up("md"),{display:"none"}),title:{flex:1}}})(E),w=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),R=t.n(w),N=t("./node_modules/@babel/runtime/helpers/inherits.js"),C=t.n(N),k=t("./node_modules/@babel/runtime/helpers/createClass.js"),S=t.n(k),D=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),q=t.n(D),P=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),T=t.n(P),I=t("./node_modules/recompose/compose.js"),M=t.n(I),z=t("./node_modules/recompose/withState.js"),B=t.n(z),O=t("./node_modules/recompose/withHandlers.js"),L=t.n(O),A=t("./node_modules/material-ui/Menu/Menu.js"),Q=t.n(A),F=function(e){function n(){return R()(this,n),q()(this,T()(n).apply(this,arguments))}return S()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.open,a=n.onOpen,o=n.onClose,s=n.children,i=n.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{color:"inherit",className:i.button,onClick:a,buttonRef:function(n){e.button=n},"aria-label":"Open menu","aria-owns":t?i.root:null,"aria-haspopup":"true"},r.a.createElement(_.a,null,"more_vert")),r.a.createElement(Q.a,{id:i.root,anchorEl:this.button,open:t,onClick:o,onClose:o,className:i.menu},s))}}]),C()(n,e),n}(r.a.Component);o()(F,"propTypes",{open:l.a.bool.isRequired,onOpen:l.a.func.isRequired,onClose:l.a.func.isRequired,classes:l.a.object.isRequired});var W=M()(B()("open","setOpen",!1),L()({onOpen:function(e){var n=e.setOpen;return function(){return n(!0)}},onClose:function(e){var n=e.setOpen;return function(){return n(!1)}}}),c()({root:{},button:{marginLeft:-8,marginRight:-16},menu:{marginTop:-8,marginLeft:8}}))(F);t.d(n,"b",function(){return x}),t.d(n,"a",function(){return W})},"./src/components/NavDrawer/index.js":function(e,n,t){"use strict";var a=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),o=t.n(a),s=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),r=t.n(s),i=t("./node_modules/react/index.js"),l=t.n(i),u=t("./node_modules/prop-types/index.js"),c=t.n(u),d=t("./node_modules/react-router-dom/es/index.js"),m=t("./node_modules/material-ui/styles/withStyles.js"),p=t.n(m),f=t("./node_modules/material-ui/Drawer/Drawer.js"),h=t.n(f),g=t("./node_modules/material-ui/List/List.js"),j=t.n(g),b=t("./node_modules/material-ui/List/ListItem.js"),v=t.n(b),_=t("./node_modules/material-ui/List/ListItemIcon.js"),y=t.n(_),E=t("./node_modules/material-ui/List/ListItemText.js"),x=t.n(E),w=t("./node_modules/material-ui/Icon/index.js"),R=t.n(w),N=t("./node_modules/material-ui/Hidden/Hidden.js"),C=t.n(N),k=t("./node_modules/material-ui/Divider/Divider.js"),S=t.n(k),D=t("./node_modules/material-ui/Typography/Typography.js"),q=t.n(D),P=t("./node_modules/material-ui/Avatar/Avatar.js"),T=t.n(P),I=t("./node_modules/material-ui/Icon/Icon.js"),M=t.n(I),z=t("./src/assets/logo/blue.svg"),B=t.n(z),O=t("./src/assets/logo/white.svg"),L=t.n(O),A=function(e){var n=e.photoURL,t=e.displayName,a=e.email,o=e.classes,s=e.theme;return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.images},n?l.a.createElement(T.a,{src:n,alt:"avatar",className:o.image}):l.a.createElement(M.a,{className:o.noPhotoIcon},"account_circle"),l.a.createElement("img",{src:"dark"===s.palette.type?L.a:B.a,alt:"logo",className:o.image})),t&&l.a.createElement(q.a,{variant:"body2"},t),a&&l.a.createElement(q.a,{variant:"body1"},a))};A.propTypes={photoURL:c.a.string,displayName:c.a.string,email:c.a.string,classes:c.a.object.isRequired,theme:c.a.object.isRequired};var Q=p()(function(e){return{root:{padding:2*e.spacing.unit,verticalAlign:"top"},images:{display:"flex",marginBottom:2*e.spacing.unit,alignItems:"center",justifyContent:"space-between"},image:{width:64,height:64},noPhotoIcon:{color:e.palette.text.secondary,fontSize:64}}},{withTheme:!0})(A),F=t("./node_modules/react-redux/es/index.js"),W=t("./src/actions/creators/index.js"),U=t("./node_modules/material-ui/Button/Button.js"),H=t.n(U),J=t("./node_modules/material-ui/Dialog/Dialog.js"),G=t.n(J),$=t("./node_modules/material-ui/Dialog/DialogTitle.js"),K=t.n($),V=t("./node_modules/material-ui/Dialog/DialogContent.js"),X=t.n(V),Y=t("./node_modules/material-ui/Dialog/DialogContentText.js"),Z=t.n(Y),ee=t("./node_modules/material-ui/Dialog/DialogActions.js"),ne=t.n(ee),te=function(e){var n=e.open,t=e.onClose;return l.a.createElement(G.a,{open:n,onClose:t},l.a.createElement(K.a,null,"Settings"),l.a.createElement(X.a,null,l.a.createElement(Z.a,null,"Settings will be here.")),l.a.createElement(ne.a,null,l.a.createElement(H.a,{onClick:t},"Cancel"),l.a.createElement(H.a,{color:"primary",autoFocus:!0,onClick:t},"Save")))};te.propTypes={open:c.a.bool.isRequired,onClose:c.a.func.isRequired};var ae=te,oe=Object(F.connect)(function(e){return{open:e.Settings.open}},function(e){return{onClose:function(){return e(W.closeSettings())}}})(ae),se=t("./src/db/firebase.js"),re=function(e){var n=e.open,t=e.onClose,a=e.openSettings,s=e.user,r=e.classes,i=function(e){var n=e.icon,a=e.text,s=e.onClick,r=o()(e,["icon","text","onClick"]);return l.a.createElement(v.a,Object.assign({button:!0,onClick:function(e){t(e),s&&s(e)}},r),l.a.createElement(y.a,null,l.a.createElement(R.a,null,n)),l.a.createElement(x.a,{primary:a}))},u=l.a.createElement("div",null,s&&l.a.createElement(l.a.Fragment,null,l.a.createElement(Q,{photoURL:s.photoURL,displayName:s.displayName,email:s.email}),l.a.createElement(S.a,null)),l.a.createElement(j.a,null,l.a.createElement(i,{icon:"library_books",text:"Library",component:d.a,to:"/library"}),l.a.createElement(i,{icon:"explore",text:"Explore",component:d.a,to:"/explore"})),l.a.createElement(S.a,null),l.a.createElement(j.a,null,l.a.createElement(i,{icon:"settings",text:"Settings",onClick:a}),l.a.createElement(i,{icon:"code",text:"Source code",component:"a",href:"https://github.com/dmitmel/quiz9000"}),l.a.createElement(i,{icon:"bug_report",text:"Report a bug",component:"a",href:"https://github.com/dmitmel/quiz9000/issues"})),l.a.createElement(S.a,null),l.a.createElement(j.a,null,l.a.createElement(i,{icon:"exit_to_app",text:"Sign out",component:"a",href:"https://github.com/dmitmel/quiz9000/issues",onClick:function(e){e.preventDefault(),se.a.signOut()}})));return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{mdUp:!0},l.a.createElement(h.a,{variant:"temporary",anchor:"left",open:n,onClose:t,ModalProps:{keepMounted:!0},classes:{paper:r.drawerPaper}},u)),l.a.createElement(C.a,{smDown:!0,implementation:"css"},l.a.createElement(h.a,{variant:"permanent",open:!0,classes:{paper:r.drawerPaper}},u)),l.a.createElement(oe,null))};re.width=280,re.propTypes={open:c.a.bool.isRequired,onClose:c.a.func.isRequired,openSettings:c.a.func.isRequired,user:c.a.object,classes:c.a.object.isRequired};var ie=p()(function(e){return{drawerPaper:r()({width:re.width},e.breakpoints.up("md"),{position:"relative"})}})(re);t.d(n,"a",function(){return ie}),t.d(n,!1,function(){return Q})},"./src/components/Page/index.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),o=t.n(a),s=t("./node_modules/prop-types/index.js"),r=t.n(s),i=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(i),u=t("./node_modules/react-redux/es/index.js"),c=t("./src/actions/creators/index.js"),d=t("./src/components/NavDrawer/index.js"),m=Object(u.connect)(function(e){return{open:e.NavDrawer.open,user:e.auth.user}},function(e){return{onClose:function(){return e(c.closeNav())},openSettings:function(){return e(c.openSettings())}}})(d.a),p=function(e){var n=e.classes,t=e.children;return o.a.createElement("div",{className:n.root},o.a.createElement(m,null),t)};p.propTypes={classes:r.a.object.isRequired};var f=l()({root:{display:"flex",height:"100%",animation:"pageTransition 0.3s linear"},contentWrapper:{width:"100%"},"@keyframes pageTransition":{from:{opacity:0,transform:"scale(0.9)"},to:{opacity:1,transform:"scale(1)"}}})(p),h=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),g=t.n(h),j=t("./node_modules/@babel/runtime/helpers/objectSpread.js"),b=t.n(j),v=d.a.width,_=function(e){var n=e.children,t=e.classes;return o.a.createElement("div",{className:t.container},n)};_.propTypes={classes:r.a.object.isRequired};var y=l()(function(e){var n,t=e.breakpoints;return{container:(n={margin:"0 auto"},g()(n,t.up("sm"),{maxWidth:t.values.sm}),g()(n,t.up("md"),{maxWidth:t.values.md-v}),g()(n,t.up("lg"),{maxWidth:t.values.lg-v}),g()(n,t.up("xl"),{maxWidth:t.values.xl-v}),n)}})(_),E=function(e){return{height:"calc(100% - ".concat(e,"px)"),marginTop:e}},x=function(e){var n=e.classes,t=e.children;return o.a.createElement("main",{className:n.content},o.a.createElement(y,{classes:{container:n.padding}},t))};x.propTypes={classes:r.a.object.isRequired};var w=l()(function(e){return{content:b()({width:"100%",backgroundColor:e.palette.background.default,overflow:"auto"},E(56),g()({"@media (orientation: landscape)":E(48)},e.breakpoints.up("sm"),E(64))),padding:g()({height:"100%",position:"relative",padding:2*e.spacing.unit},e.breakpoints.up("sm"),{padding:3*e.spacing.unit})}})(x);t.d(n,"b",function(){return f}),t.d(n,"a",function(){return w})},"./src/containers/MainAppBar.js":function(e,n,t){"use strict";var a=t("./node_modules/react-redux/es/index.js"),o=t("./src/actions/creators/index.js"),s=t("./src/components/MainAppBar/index.js");n.a=Object(a.connect)(null,function(e){return{openNav:function(){return e(o.openNav())}}})(s.b)},"./src/containers/QuizDetails.js":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react-redux/es/index.js"),o=t("./node_modules/recompose/compose.js"),s=t.n(o),r=t("./node_modules/recompose/withProps.js"),i=t.n(r),l=t("./node_modules/recompose/withHandlers.js"),u=t.n(l),c=t("./node_modules/recompose/lifecycle.js"),d=t.n(c),m=t("./src/utils/FetchStatus.js"),p=t("./src/actions/creators/index.js"),f=t("./node_modules/react/index.js"),h=t.n(f),g=t("./node_modules/prop-types/index.js"),j=t.n(g),b=t("./node_modules/material-ui/styles/withStyles.js"),v=t.n(b),_=t("./node_modules/material-ui/Menu/MenuItem.js"),y=t.n(_),E=t("./node_modules/material-ui/IconButton/IconButton.js"),x=t.n(E),w=t("./node_modules/material-ui/Icon/Icon.js"),R=t.n(w),N=t("./node_modules/material-ui/Progress/CircularProgress.js"),C=t.n(N),k=t("./node_modules/material-ui/Avatar/Avatar.js"),S=t.n(k),D=t("./node_modules/material-ui/Typography/Typography.js"),q=t.n(D),P=t("./node_modules/material-ui/Divider/Divider.js"),T=t.n(P),I=t("./node_modules/material-ui/Button/Button.js"),M=t.n(I),z=t("./src/components/Page/index.js"),B=t("./src/containers/MainAppBar.js"),O=t("./src/components/MainAppBar/index.js"),L=function(e){var n=e.loading,t=e.data,a=e.isSaved,o=e.onRefresh,s=e.onSave,r=e.onRemove,i=e.classes;return h.a.createElement(z.b,null,h.a.createElement(B.a,{title:"Quiz"},h.a.createElement(x.a,{color:"inherit","aria-label":"Search"},h.a.createElement(R.a,null,"search")),h.a.createElement(O.a,null,h.a.createElement(y.a,{disabled:n,onClick:o},"Refresh"))),h.a.createElement(z.a,null,n&&h.a.createElement(C.a,{className:i.loading}),t&&h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:i.header},h.a.createElement(S.a,{src:t.image,alt:t.name,className:i.img}),h.a.createElement("div",{className:i.headerRight},h.a.createElement(q.a,{variant:"title"},t.name),h.a.createElement(q.a,{variant:"subheading"},"By ",t.author?t.author.name:"Unknown author"))),h.a.createElement("div",{className:i.buttons},a?h.a.createElement(h.a.Fragment,null,h.a.createElement(M.a,{key:"remove",variant:"raised",className:i.button,onClick:r},"Remove"),h.a.createElement(M.a,{key:"open",variant:"raised",color:"secondary",className:i.button},"Open")):h.a.createElement(M.a,{key:"save",variant:"raised",color:"secondary",className:i.button,onClick:s},"Save")),h.a.createElement(T.a,null),h.a.createElement(q.a,{variant:"subheading",className:i.description},t.description))))};L.propTypes={loading:j.a.bool.isRequired,data:j.a.object,isSaved:j.a.bool.isRequired,onRefresh:j.a.func.isRequired,onSave:j.a.func.isRequired,onRemove:j.a.func.isRequired,classes:j.a.object.isRequired};var A=v()(function(e){return{loading:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},header:{display:"flex",marginBottom:2*e.spacing.unit},buttons:{display:"flex",marginBottom:2*e.spacing.unit,justifyContent:"flex-end"},button:{"&:not(:last-child)":{marginRight:1.5*e.spacing.unit}},img:{width:72,height:72,marginRight:2*e.spacing.unit,borderRadius:0},description:{marginTop:2*e.spacing.unit}}})(L);n.default=s()(Object(a.connect)(function(e,n){var t=n.id;return{quizzes:e.fetchedQuizzes,isSaved:Boolean(e.Library[t])}},function(e){return{fetchQuiz:function(n){return e(p.fetchQuiz(n))},onSave:function(n){return e(p.addQuiz(n))},onRemove:function(n){return e(p.removeQuiz(n))}}}),i()(function(e){var n=e.quizzes[e.id]||{},t=n.status,a=n.data;return{loading:t===m.a.LOADING,data:a}}),u()({fetchQuiz:function(e){var n=e.loading,t=e.data,a=e.fetchQuiz;return function(e){t||n||a(e)}},onRefresh:function(e){var n=e.id,t=e.loading,a=e.fetchQuiz;return function(){t||a(n)}},onSave:function(e){var n=e.loading,t=e.data,a=e.onSave;return function(){n||a(t)}},onRemove:function(e){var n=e.id,t=e.loading,a=e.onRemove;return function(){t||a(n)}}}),d()({componentDidMount:function(){var e=this.props,n=e.id;(0,e.fetchQuiz)(n)},componentWillReceiveProps:function(e){var n=e.id;(0,e.fetchQuiz)(n)}}))(A)}}]);
//# sourceMappingURL=QuizDetails.8ea86eae.chunk.js.map