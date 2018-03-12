webpackJsonp([1],{"./config/polyfills.js":function(e,n,t){t("./node_modules/es6-promise/dist/es6-promise.js").polyfill(),t("./node_modules/whatwg-fetch/fetch.js"),Object.assign=t("./node_modules/object-assign/index.js")},"./src/actions/Explore.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"c",function(){return a}),t.d(n,"b",function(){return o}),n.d=function(e){return i(!1,e)},n.e=function(){return i(!0)};var r=t("./src/db/quizzes.js"),s="@@Explore/EXPLORE_MORE_QUIZZES",a="@@Explore/EXPLORE_MORE_QUIZZES_OK",o="@@Explore/EXPLORE_MORE_QUIZZES_ERROR";function i(e,n){return function(t,i){var c=i().Explore.ids;t({type:s,refresh:e});var u=e?0:c.length,l=e?c.length:n;return r.a(u,l).then(function(n){return t({type:a,refresh:e,quizzes:n}),n},function(){t({type:o})})}}},"./src/actions/Library.js":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return s}),n.d=function(e){return{type:r,id:e}},n.c=function(e){return{type:s,id:e}};var r="@@Library/SAVE_QUIZ",s="@@Library/REMOVE_QUIZ"},"./src/actions/NavDrawer.js":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return s}),n.d=function(){return{type:r}},n.c=function(){return{type:s}};var r="@@NavDrawer/OPEN",s="@@NavDrawer/CLOSE"},"./src/actions/Settings.js":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return s}),n.d=function(){return{type:r}},n.c=function(){return{type:s}};var r="@@Settings/OPEN",s="@@Settings/CLOSE"},"./src/actions/index.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./src/actions/Explore.js");t.d(n,"EXPLORE_MORE_QUIZZES",function(){return r.a}),t.d(n,"EXPLORE_MORE_QUIZZES_OK",function(){return r.c}),t.d(n,"EXPLORE_MORE_QUIZZES_ERROR",function(){return r.b}),t.d(n,"exploreMoreQuizzes",function(){return r.d}),t.d(n,"refreshExploredQuizzes",function(){return r.e});var s=t("./src/actions/Library.js");t.d(n,"SAVE_QUIZ",function(){return s.b}),t.d(n,"REMOVE_QUIZ",function(){return s.a}),t.d(n,"saveQuiz",function(){return s.d}),t.d(n,"removeQuiz",function(){return s.c});var a=t("./src/actions/NavDrawer.js");t.d(n,"OPEN_NAV",function(){return a.b}),t.d(n,"CLOSE_NAV",function(){return a.a}),t.d(n,"openNav",function(){return a.d}),t.d(n,"closeNav",function(){return a.c});var o=t("./src/actions/quizzes.js");t.d(n,"FETCH_QUIZ",function(){return o.a}),t.d(n,"FETCH_QUIZ_OK",function(){return o.c}),t.d(n,"FETCH_QUIZ_ERROR",function(){return o.b}),t.d(n,"fetchQuiz",function(){return o.d});var i=t("./src/actions/Settings.js");t.d(n,"OPEN_SETTINGS",function(){return i.b}),t.d(n,"CLOSE_SETTINGS",function(){return i.a}),t.d(n,"openSettings",function(){return i.d}),t.d(n,"closeSettings",function(){return i.c})},"./src/actions/quizzes.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"c",function(){return a}),t.d(n,"b",function(){return o}),n.d=function(e){return function(n){return n({type:s,id:e}),r.b("id",e).then(function(t){return n({type:a,id:e,quiz:t}),t},function(){n({type:o,id:e})})}};var r=t("./src/db/quizzes.js"),s="@@quizzes/FETCH_QUIZ",a="@@quizzes/FETCH_QUIZ_OK",o="@@quizzes/FETCH_QUIZ_ERROR"},"./src/components/App/App.jsx":function(e,n,t){"use strict";(function(e){var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/react-hot-loader/index.js"),o=(t.n(a),t("./node_modules/react-router-dom/es/index.js")),i=t("./node_modules/connected-react-router/lib/index.js"),c=(t.n(i),t("./src/utils/routerHistory.js")),u=t("./src/components/Library/index.js"),l=t("./src/containers/Explore.js"),d=t("./src/containers/QuizDetails.js");n.a=Object(a.hot)(e)(function(){return s.a.createElement(i.ConnectedRouter,{history:c.a},s.a.createElement(o.d,null,s.a.createElement(o.c,{exact:!0,path:"/library",component:u.a}),s.a.createElement(o.c,{exact:!0,path:"/explore",component:l.a}),s.a.createElement(o.c,{exact:!0,path:"/quiz/:id",render:function(e){var n=e.match;return s.a.createElement(d.a,{id:parseInt(n.params.id,10)})}}),s.a.createElement(o.b,{to:"/library"})))})}).call(n,t("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/App/index.js":function(e,n,t){"use strict";var r=t("./src/components/App/App.jsx");t.d(n,"a",function(){return r.a})},"./src/components/Container/Container.jsx":function(e,n,t){"use strict";var r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),s=t.n(r),a=t("./node_modules/react/index.js"),o=t.n(a),i=t("./node_modules/prop-types/index.js"),c=t.n(i),u=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(u),d=t("./src/components/NavDrawer/index.js").a.width;function m(e){var n=e.children,t=e.classes;return o.a.createElement("div",{className:t.container},n)}m.propTypes={classes:c.a.object.isRequired},n.a=l()(function(e){var n,t=e.breakpoints;return{container:(n={margin:"0 auto"},s()(n,t.up("sm"),{maxWidth:t.values.sm}),s()(n,t.up("md"),{maxWidth:t.values.md-d}),s()(n,t.up("lg"),{maxWidth:t.values.lg-d}),s()(n,t.up("xl"),{maxWidth:t.values.xl-d}),n)}})(m)},"./src/components/Container/index.js":function(e,n,t){"use strict";var r=t("./src/components/Container/Container.jsx");t.d(n,"a",function(){return r.a})},"./src/components/Explore/Explore.jsx":function(e,n,t){"use strict";n.a=f;var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/prop-types/index.js"),o=t.n(a),i=t("./node_modules/material-ui/IconButton/IconButton.js"),c=t.n(i),u=t("./node_modules/material-ui/Icon/Icon.js"),l=t.n(u),d=t("./src/components/Page/index.js"),m=t("./src/containers/MainAppBar.js"),p=t("./src/components/QuizList/index.js");function f(e){var n=e.loading,t=e.quizzes,r=e.fetchMore,a=e.onRefresh,o=Boolean(t&&t.length);return s.a.createElement(d.b,null,s.a.createElement(m.a,{title:"Explore",buttons:[s.a.createElement(c.a,{color:"inherit","aria-label":"Search"},s.a.createElement(l.a,null,"search"))],menuItems:[{name:"Sort by"},{name:"Refresh",disabled:!o||n,onClick:a}]}),s.a.createElement(d.a,null,s.a.createElement(p.a,{loading:n,quizzes:t,fetchMore:r,onRefresh:a})))}f.propTypes={loading:o.a.bool.isRequired,quizzes:o.a.array.isRequired,fetchMore:o.a.func.isRequired,onRefresh:o.a.func.isRequired}},"./src/components/Explore/index.js":function(e,n,t){"use strict";var r=t("./src/components/Explore/Explore.jsx");t.d(n,"a",function(){return r.a})},"./src/components/Library/Library.jsx":function(e,n,t){"use strict";n.a=function(){return s.a.createElement(a.b,null,s.a.createElement(o.a,{title:"Library"}),s.a.createElement(a.a,null))};var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./src/components/Page/index.js"),o=t("./src/containers/MainAppBar.js")},"./src/components/Library/index.js":function(e,n,t){"use strict";var r=t("./src/components/Library/Library.jsx");t.d(n,"a",function(){return r.a})},"./src/components/MainAppBar/MainAppBar.jsx":function(e,n,t){"use strict";var r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),s=t.n(r),a=t("./node_modules/react/index.js"),o=t.n(a),i=t("./node_modules/prop-types/index.js"),c=t.n(i),u=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(u),d=t("./node_modules/material-ui/AppBar/AppBar.js"),m=t.n(d),p=t("./node_modules/material-ui/Toolbar/Toolbar.js"),f=t.n(p),j=t("./node_modules/material-ui/Typography/Typography.js"),g=t.n(j),v=t("./node_modules/material-ui/IconButton/IconButton.js"),h=t.n(v),b=t("./node_modules/material-ui/Icon/Icon.js"),E=t.n(b),x=t("./src/components/NavDrawer/index.js"),_=t("./src/components/MainAppBar/MainAppBarMenu.jsx");function y(e){var n=e.openNav,t=e.title,r=e.buttons,s=e.menuItems,i=e.classes;return o.a.createElement(m.a,{position:"absolute",className:i.root},o.a.createElement(f.a,null,o.a.createElement(h.a,{color:"inherit",className:i.navButton,onClick:n,"aria-label":"Open nav"},o.a.createElement(E.a,null,"menu")),t&&o.a.createElement(g.a,{variant:"title",color:"inherit",noWrap:!0,className:i.title},t),r&&r.map(function(e,n){return o.a.createElement(a.Fragment,{key:n},e)}),s&&o.a.createElement(_.a,{items:s,classes:{button:i.menuButton}})))}y.propTypes={openNav:c.a.func.isRequired,title:c.a.string.isRequired,buttons:c.a.arrayOf(c.a.element.isRequired),menuItems:c.a.array,classes:c.a.object.isRequired},n.a=l()(function(e){return{root:s()({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(x.a.width,"px)")}),navButton:s()({marginLeft:-12,marginRight:20},e.breakpoints.up("md"),{display:"none"}),title:{flex:1},menuButton:{width:36,marginRight:-12}}})(y)},"./src/components/MainAppBar/MainAppBarMenu.jsx":function(e,n,t){"use strict";var r=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=t.n(r),a=t("./node_modules/@babel/runtime/helpers/createClass.js"),o=t.n(a),i=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),c=t.n(i),u=t("./node_modules/@babel/runtime/helpers/inherits.js"),l=t.n(u),d=t("./node_modules/react/index.js"),m=t.n(d),p=t("./node_modules/prop-types/index.js"),f=t.n(p),j=t("./node_modules/recompose/compose.js"),g=t.n(j),v=t("./node_modules/recompose/withState.js"),h=t.n(v),b=t("./node_modules/recompose/withHandlers.js"),E=t.n(b),x=t("./node_modules/material-ui/styles/withStyles.js"),_=t.n(x),y=t("./node_modules/material-ui/IconButton/IconButton.js"),z=t.n(y),R=t("./node_modules/material-ui/Icon/Icon.js"),O=t.n(R),w=t("./node_modules/material-ui/Menu/Menu.js"),S=t.n(w),C=t("./node_modules/material-ui/Menu/MenuItem.js"),q=t.n(C),Q=function(e){function n(){return s()(this,n),c()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l()(n,e),o()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.open,r=n.onOpen,s=n.onClose,a=n.items,o=n.classes;return m.a.createElement(m.a.Fragment,null,m.a.createElement(z.a,{color:"inherit",className:o.button,onClick:r,buttonRef:function(n){e.button=n},"aria-label":"Open menu","aria-owns":t?o.root:null,"aria-haspopup":"true"},m.a.createElement(O.a,null,"more_vert")),a&&m.a.createElement(S.a,{id:o.root,anchorEl:this.button,open:t,onClose:s},a&&a.map(function(e){var n=e.name,t=e.disabled,r=e.onClick;return m.a.createElement(q.a,{key:n,disabled:t,onClick:function(){s(),r&&r()}},n)})))}}]),n}(d.Component);Object.defineProperty(Q,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{open:f.a.bool.isRequired,onOpen:f.a.func.isRequired,onClose:f.a.func.isRequired,items:f.a.arrayOf(f.a.shape({name:f.a.string.isRequired,disabled:f.a.bool,onClick:f.a.func}).isRequired).isRequired,classes:f.a.object.isRequired}}),n.a=g()(h()("open","setOpen",!1),E()({onOpen:function(e){var n=e.setOpen;return function(){return n(!0)}},onClose:function(e){var n=e.setOpen;return function(){return n(!1)}}}),_()({root:{},button:{},item:{"&:focus":{outline:"none"}}}))(Q)},"./src/components/MainAppBar/index.js":function(e,n,t){"use strict";var r=t("./src/components/MainAppBar/MainAppBar.jsx");t.d(n,"a",function(){return r.a});t("./src/components/MainAppBar/MainAppBarMenu.jsx")},"./src/components/NavDrawer/NavDrawer.jsx":function(e,n,t){"use strict";var r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),s=t.n(r),a=t("./node_modules/react/index.js"),o=t.n(a),i=t("./node_modules/prop-types/index.js"),c=t.n(i),u=t("./node_modules/react-router-dom/es/index.js"),l=t("./node_modules/material-ui/styles/withStyles.js"),d=t.n(l),m=t("./node_modules/material-ui/Toolbar/Toolbar.js"),p=t.n(m),f=t("./node_modules/material-ui/Typography/Typography.js"),j=t.n(f),g=t("./node_modules/material-ui/Drawer/Drawer.js"),v=t.n(g),h=t("./node_modules/material-ui/List/List.js"),b=t.n(h),E=t("./node_modules/material-ui/Hidden/Hidden.js"),x=t.n(E),_=t("./node_modules/material-ui/Divider/Divider.js"),y=t.n(_),z=t("./src/components/NavDrawer/NavItem.jsx"),R=t("./src/containers/Settings.js"),O=t("./src/img/logo/blue.svg"),w=t.n(O),S=t("./src/img/logo/white.svg"),C=t.n(S);function q(e){var n=e.open,t=e.onClose,r=e.openSettings,s=e.classes,a="dark"===e.theme.palette.type?C.a:w.a,i=o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement("img",{alt:"logo",src:a,className:s.logo}),o.a.createElement(j.a,{variant:"title",noWrap:!0},"Quiz9000")),o.a.createElement(y.a,null),o.a.createElement(b.a,null,o.a.createElement(z.a,{icon:"library_books",text:"Library",component:u.a,to:"/library",onClick:t}),o.a.createElement(z.a,{icon:"apps",text:"Explore",component:u.a,to:"/explore",onClick:t})),o.a.createElement(y.a,null),o.a.createElement(b.a,null,o.a.createElement(z.a,{icon:"settings",text:"Settings",onClick:function(){t(),r()}}),o.a.createElement(z.a,{icon:"code",text:"Source code",component:"a",href:"https://github.com/dmitmel/quiz9000",onClick:t}),o.a.createElement(z.a,{icon:"bug_report",text:"Report a bug",component:"a",href:"https://github.com/dmitmel/quiz9000/issues",onClick:t})));return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{mdUp:!0},o.a.createElement(v.a,{variant:"temporary",anchor:"left",open:n,onClose:t,ModalProps:{keepMounted:!0},classes:{paper:s.drawerPaper}},i)),o.a.createElement(x.a,{smDown:!0,implementation:"css"},o.a.createElement(v.a,{variant:"permanent",open:!0,classes:{paper:s.drawerPaper}},i)),o.a.createElement(R.a,null))}q.width=280,q.propTypes={open:c.a.bool.isRequired,onClose:c.a.func.isRequired,openSettings:c.a.func.isRequired,classes:c.a.object.isRequired,theme:c.a.object.isRequired},n.a=d()(function(e){return{drawerPaper:s()({width:q.width},e.breakpoints.up("md"),{position:"relative"}),logo:{width:48,marginLeft:-12,marginRight:20}}},{withTheme:!0})(q)},"./src/components/NavDrawer/NavItem.jsx":function(e,n,t){"use strict";n.a=v;var r=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),s=t.n(r),a=t("./node_modules/react/index.js"),o=t.n(a),i=t("./node_modules/prop-types/index.js"),c=t.n(i),u=t("./node_modules/material-ui/List/ListItem.js"),l=t.n(u),d=t("./node_modules/material-ui/List/ListItemIcon.js"),m=t.n(d),p=t("./node_modules/material-ui/List/ListItemText.js"),f=t.n(p),j=t("./node_modules/material-ui/Icon/index.js"),g=t.n(j);function v(e){var n=e.icon,t=e.text,r=s()(e,["icon","text"]);return o.a.createElement(l.a,Object.assign({button:!0},r),o.a.createElement(m.a,null,o.a.createElement(g.a,null,n)),o.a.createElement(f.a,{primary:t}))}v.propTypes={icon:c.a.string.isRequired,text:c.a.string.isRequired}},"./src/components/NavDrawer/index.js":function(e,n,t){"use strict";var r=t("./src/components/NavDrawer/NavDrawer.jsx");t.d(n,"a",function(){return r.a});t("./src/components/NavDrawer/NavItem.jsx")},"./src/components/Page/Page.jsx":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/prop-types/index.js"),o=t.n(a),i=t("./node_modules/material-ui/styles/withStyles.js"),c=t.n(i),u=t("./src/containers/NavDrawer.js");function l(e){var n=e.classes,t=e.children;return s.a.createElement("div",{className:n.root},s.a.createElement(u.a,null),t)}l.propTypes={classes:o.a.object.isRequired},n.a=c()({root:{display:"flex"},contentWrapper:{width:"100%"}})(l)},"./src/components/Page/PageContent.jsx":function(e,n,t){"use strict";var r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),s=t.n(r),a=t("./node_modules/react/index.js"),o=t.n(a),i=t("./node_modules/prop-types/index.js"),c=t.n(i),u=t("./node_modules/material-ui/styles/withStyles.js"),l=t.n(u),d=t("./src/components/Container/index.js");function m(e){var n=e.classes,t=e.children;return o.a.createElement("div",{className:n.contentWrapper},o.a.createElement("main",{className:n.content},o.a.createElement(d.a,{classes:{container:n.padding}},t)))}m.propTypes={classes:c.a.object.isRequired},n.a=l()(function(e){return{contentWrapper:{width:"100%"},content:s()({position:"relative",backgroundColor:e.palette.background.default,overflow:"auto",height:"calc(100vh - 56px)",marginTop:56,"@media (orientation: landscape)":{height:"calc(100vh - 48px)",marginTop:48}},e.breakpoints.up("sm"),{height:"calc(100vh - 64px)",marginTop:64}),padding:s()({padding:2*e.spacing.unit},e.breakpoints.up("sm"),{padding:3*e.spacing.unit})}})(m)},"./src/components/Page/index.js":function(e,n,t){"use strict";var r=t("./src/components/Page/Page.jsx");t.d(n,"b",function(){return r.a});var s=t("./src/components/Page/PageContent.jsx");t.d(n,"a",function(){return s.a})},"./src/components/QuizDetails/QuizDetails.jsx":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/prop-types/index.js"),o=t.n(a),i=t("./node_modules/material-ui/styles/withStyles.js"),c=t.n(i),u=t("./node_modules/material-ui/IconButton/IconButton.js"),l=t.n(u),d=t("./node_modules/material-ui/Icon/Icon.js"),m=t.n(d),p=t("./node_modules/material-ui/Progress/CircularProgress.js"),f=t.n(p),j=t("./node_modules/material-ui/Avatar/Avatar.js"),g=t.n(j),v=t("./node_modules/material-ui/Typography/Typography.js"),h=t.n(v),b=t("./node_modules/material-ui/Divider/Divider.js"),E=t.n(b),x=t("./node_modules/material-ui/Button/Button.js"),_=t.n(x),y=t("./src/components/Page/index.js"),z=t("./src/containers/MainAppBar.js");function R(e){var n=e.loading,t=e.data,r=e.isSaved,a=e.onRefresh,o=e.onSave,i=e.onRemove,c=e.classes;return s.a.createElement(y.b,null,s.a.createElement(z.a,{title:"Quiz",buttons:[s.a.createElement(l.a,{color:"inherit","aria-label":"Search"},s.a.createElement(m.a,null,"search"))],menuItems:[{name:"Refresh",disabled:n,onClick:a}]}),s.a.createElement(y.a,null,n&&s.a.createElement(f.a,{className:c.loading}),t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:c.header},s.a.createElement(g.a,{src:t.image,alt:t.name,className:c.img}),s.a.createElement("div",{className:c.headerRight},s.a.createElement(h.a,{variant:"title"},t.name),s.a.createElement(h.a,{variant:"subheading"},"By ",t.author?t.author.name:"Unknown author"))),s.a.createElement("div",{className:c.buttons},r?s.a.createElement(s.a.Fragment,null,s.a.createElement(_.a,{key:"remove",variant:"raised",className:c.button,onClick:i},"Remove"),s.a.createElement(_.a,{key:"open",variant:"raised",color:"secondary",className:c.button},"Open")):s.a.createElement(_.a,{key:"save",variant:"raised",color:"secondary",className:c.button,onClick:o},"Save")),s.a.createElement(E.a,null),s.a.createElement(h.a,{variant:"subheading",className:c.description},t.description))))}R.propTypes={loading:o.a.bool.isRequired,data:o.a.object,isSaved:o.a.bool.isRequired,onRefresh:o.a.func.isRequired,onSave:o.a.func.isRequired,onRemove:o.a.func.isRequired,classes:o.a.object.isRequired},n.a=c()(function(e){return{loading:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},header:{display:"flex",marginBottom:2*e.spacing.unit},buttons:{display:"flex",marginBottom:2*e.spacing.unit,justifyContent:"flex-end"},button:{"&:not(:last-child)":{marginRight:1.5*e.spacing.unit}},img:{width:72,height:72,marginRight:2*e.spacing.unit,borderRadius:0},description:{marginTop:2*e.spacing.unit}}})(R)},"./src/components/QuizDetails/index.js":function(e,n,t){"use strict";var r=t("./src/components/QuizDetails/QuizDetails.jsx");t.d(n,"a",function(){return r.a})},"./src/components/QuizList/QuizList.jsx":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/prop-types/index.js"),o=t.n(a),i=t("./node_modules/material-ui/styles/withStyles.js"),c=t.n(i),u=t("./node_modules/material-ui/Button/Button.js"),l=t.n(u),d=t("./node_modules/material-ui/Progress/CircularProgress.js"),m=t.n(d),p=t("./src/components/QuizList/QuizListItem.jsx");function f(e){var n=e.loading,t=e.quizzes,r=e.fetchMore,a=e.classes,o=function(e){return s.a.createElement(m.a,{size:e,className:a.progress})};return Boolean(t&&t.length)?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:a.list},t.map(function(e){return e&&s.a.createElement(p.a,Object.assign({key:e.id},e))})),s.a.createElement(l.a,{variant:"raised",color:"secondary",className:a.moreBtn,disabled:n,onClick:r},"More...",n&&o(36))):n&&o(48)}f.propTypes={loading:o.a.bool.isRequired,quizzes:o.a.array.isRequired,fetchMore:o.a.func.isRequired,classes:o.a.object.isRequired},n.a=c()(function(e){return{list:{display:"flex",margin:-e.spacing.unit,flexWrap:"wrap"},progress:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},moreBtn:{display:"block",margin:"0 auto",marginTop:2*e.spacing.unit,position:"relative"}}})(f)},"./src/components/QuizList/QuizListItem.jsx":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/prop-types/index.js"),o=t.n(a),i=t("./node_modules/react-router-dom/es/index.js"),c=t("./node_modules/material-ui/styles/withStyles.js"),u=t.n(c),l=t("./node_modules/material-ui/Card/Card.js"),d=t.n(l),m=t("./node_modules/material-ui/Card/CardContent.js"),p=t.n(m),f=t("./node_modules/material-ui/Card/CardMedia.js"),j=t.n(f),g=t("./node_modules/material-ui/ButtonBase/index.js"),v=t.n(g),h=t("./node_modules/material-ui/Typography/index.js"),b=t.n(h);function E(e){var n=e.id,t=e.image,r=e.name,a=e.description,o=e.classes;return s.a.createElement(d.a,{className:o.root},s.a.createElement(v.a,{className:o.button,component:i.a,to:"/quiz/".concat(n)},s.a.createElement(j.a,{component:"img",image:t,alt:"icon",className:o.image}),s.a.createElement(p.a,{className:o.text},s.a.createElement(b.a,{variant:"headline"},r),s.a.createElement(b.a,{variant:"subheading",color:"textSecondary"},a))))}E.propTypes={id:o.a.any.isRequired,image:o.a.string,name:o.a.string.isRequired,description:o.a.string,classes:o.a.object.isRequired},n.a=u()(function(e){return{root:{margin:e.spacing.unit,flexGrow:1},button:{display:"flex",justifyContent:"flex-start",padding:2*e.spacing.unit,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{"@media (hover: hover)":{backgroundColor:e.palette.action.hover}}},image:{width:56,height:56,marginRight:2*e.spacing.unit},text:{padding:0,alignSelf:"flex-start"}}})(E)},"./src/components/QuizList/index.js":function(e,n,t){"use strict";var r=t("./src/components/QuizList/QuizList.jsx");t.d(n,"a",function(){return r.a});t("./src/components/QuizList/QuizListItem.jsx")},"./src/components/Settings/Settings.jsx":function(e,n,t){"use strict";n.a=b;var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/prop-types/index.js"),o=t.n(a),i=t("./node_modules/material-ui/Button/Button.js"),c=t.n(i),u=t("./node_modules/material-ui/Dialog/Dialog.js"),l=t.n(u),d=t("./node_modules/material-ui/Dialog/DialogTitle.js"),m=t.n(d),p=t("./node_modules/material-ui/Dialog/DialogContent.js"),f=t.n(p),j=t("./node_modules/material-ui/Dialog/DialogContentText.js"),g=t.n(j),v=t("./node_modules/material-ui/Dialog/DialogActions.js"),h=t.n(v);function b(e){var n=e.open,t=e.onClose;return s.a.createElement(l.a,{open:n,onClose:t},s.a.createElement(m.a,null,"Settings"),s.a.createElement(f.a,null,s.a.createElement(g.a,null,"Settings will be here.")),s.a.createElement(h.a,null,s.a.createElement(c.a,{onClick:t},"Cancel"),s.a.createElement(c.a,{color:"primary",autoFocus:!0,onClick:t},"Save")))}b.propTypes={open:o.a.bool.isRequired,onClose:o.a.func.isRequired}},"./src/components/Settings/index.js":function(e,n,t){"use strict";var r=t("./src/components/Settings/Settings.jsx");t.d(n,"a",function(){return r.a})},"./src/containers/Explore.js":function(e,n,t){"use strict";var r=t("./node_modules/react-redux/es/index.js"),s=t("./node_modules/recompose/compose.js"),a=t.n(s),o=t("./node_modules/recompose/lifecycle.js"),i=t.n(o),c=t("./src/actions/index.js"),u=t("./src/components/Explore/index.js");n.a=a()(Object(r.connect)(function(e){var n=e.Explore,t=n.loading,r=n.ids;return{loading:t,quizzes:Object.keys(r).map(function(n){var t=r[n];return e.quizzes[t].data})}},function(e){return{fetchMore:function(){return e(c.exploreMoreQuizzes(10))},onRefresh:function(){return e(c.refreshExploredQuizzes())}}}),i()({componentDidMount:function(){var e=this.props,n=e.quizzes,t=e.fetchMore;n.length||t(10)}}))(u.a)},"./src/containers/MainAppBar.js":function(e,n,t){"use strict";var r=t("./node_modules/react-redux/es/index.js"),s=t("./src/actions/index.js"),a=t("./src/components/MainAppBar/index.js");n.a=Object(r.connect)(null,function(e){return{openNav:function(){return e(s.openNav())}}})(a.a)},"./src/containers/NavDrawer.js":function(e,n,t){"use strict";var r=t("./node_modules/react-redux/es/index.js"),s=t("./src/actions/index.js"),a=t("./src/components/NavDrawer/index.js");n.a=Object(r.connect)(function(e){return{open:e.NavDrawer.open}},function(e){return{onClose:function(){return e(s.closeNav())},openSettings:function(){return e(s.openSettings())}}})(a.a)},"./src/containers/QuizDetails.js":function(e,n,t){"use strict";var r=t("./node_modules/react-redux/es/index.js"),s=t("./node_modules/recompose/compose.js"),a=t.n(s),o=t("./node_modules/recompose/withProps.js"),i=t.n(o),c=t("./node_modules/recompose/withHandlers.js"),u=t.n(c),l=t("./node_modules/recompose/lifecycle.js"),d=t.n(l),m=t("./src/actions/index.js"),p=t("./src/components/QuizDetails/index.js");n.a=a()(Object(r.connect)(function(e,n){var t=n.id;return{quizzes:e.quizzes,isSaved:e.Library.savedQuizzes.indexOf(t)>=0}},function(e){return{fetchQuiz:function(n){return e(m.fetchQuiz(n))},onSave:function(n){return e(m.saveQuiz(n))},onRemove:function(n){return e(m.removeQuiz(n))}}}),u()({getQuiz:function(e){var n=e.quizzes;return function(e){return n[e]||{loading:!1,data:null}}}}),u()({fetchQuiz:function(e){var n=e.getQuiz,t=e.fetchQuiz;return function(e){var r=n(e),s=r.data,a=r.loading;s||a||t(e)}},onRefresh:function(e){var n=e.id,t=e.getQuiz,r=e.fetchQuiz;return function(){t(n).loading||r(n)}},onSave:function(e){var n=e.id,t=e.onSave;return function(){return t(n)}},onRemove:function(e){var n=e.id,t=e.onRemove;return function(){return t(n)}}}),d()({componentDidMount:function(){var e=this.props,n=e.id;(0,e.fetchQuiz)(n)},componentWillReceiveProps:function(e){var n=e.id;(0,e.fetchQuiz)(n)}}),i()(function(e){return(0,e.getQuiz)(e.id)}))(p.a)},"./src/containers/Settings.js":function(e,n,t){"use strict";var r=t("./node_modules/react-redux/es/index.js"),s=t("./src/actions/index.js"),a=t("./src/components/Settings/index.js");n.a=Object(r.connect)(function(e){return{open:e.Settings.open}},function(e){return{onClose:function(){return e(s.closeSettings())}}})(a.a)},"./src/db/firebase.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t("./node_modules/@firebase/polyfill/dist/cjs/src/shims/Array.js"),s=(t.n(r),t("./node_modules/@firebase/polyfill/dist/cjs/src/shims/String.js")),a=(t.n(s),t("./node_modules/@firebase/app/dist/esm/index.js")),o=t("./node_modules/@firebase/database/dist/cjs/index.js");t.n(o);a.default.initializeApp({databaseURL:"https://quiz9000-db.firebaseio.com"});a.default;var i=a.default.database()},"./src/db/quizzes.js":function(e,n,t){"use strict";n.b=function(e,n){return s.orderByChild(e).equalTo(n).limitToFirst(1).once("child_added").then(function(e){return e.val()})},n.a=function(e,n){return s.startAt(null,String(e)).limitToFirst(n).once("value").then(function(e){var n=[];return e.forEach(function(e){n.push(e.val())}),n})};var r=t("./src/db/firebase.js").a.ref("/quizzes"),s=r.child("list");r.child("length")},"./src/img/logo/blue.svg":function(e,n,t){e.exports=t.p+"static/media/blue.d144a868.svg"},"./src/img/logo/white.svg":function(e,n,t){e.exports=t.p+"static/media/white.788c16ce.svg"},"./src/index.jsx":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./node_modules/react/index.js"),s=t.n(r),a=t("./node_modules/react-dom/index.js"),o=t.n(a),i=t("./node_modules/react-redux/es/index.js"),c=t("./node_modules/material-ui/styles/MuiThemeProvider.js"),u=t.n(c),l=t("./node_modules/normalize.css/normalize.css"),d=(t.n(l),t("./src/registerServiceWorker.js")),m=t("./src/resets.css"),p=(t.n(m),t("./src/components/App/index.js")),f=t("./src/theme.js"),j=t("./src/store.js");Object(d.a)(),window.addEventListener("load",function(){o.a.render(s.a.createElement(i.Provider,{store:j.a},s.a.createElement(u.a,{theme:f.a},s.a.createElement(p.a,null))),document.getElementById("root"))})},"./src/reducers/Explore.js":function(e,n,t){"use strict";n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,ids:[],error:!1},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.EXPLORE_MORE_QUIZZES:return Object.assign({},e,{ids:n.refresh?[]:e.ids,loading:!0,error:!1});case a.EXPLORE_MORE_QUIZZES_OK:var t=n.quizzes.map(function(e){var n=e.id;return n});return Object.assign({},e,{loading:!1,ids:n.refresh?t:s()(e.ids).concat(s()(t)),error:!1});case a.EXPLORE_MORE_QUIZZES_ERROR:return Object.assign({},e,{loading:!1,error:!0});default:return e}};var r=t("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),s=t.n(r),a=t("./src/actions/index.js")},"./src/reducers/Library.js":function(e,n,t){"use strict";n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{savedQuizzes:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SAVE_QUIZ:var t=e.savedQuizzes;return t.indexOf(n.id)>=0?e:Object.assign({},e,{savedQuizzes:s()(t).concat([n.id])});case a.REMOVE_QUIZ:var r=e.savedQuizzes,o=r.indexOf(n.id);return o<0?e:Object.assign({},e,{savedQuizzes:r.slice(0,o).concat(r.slice(o+1))});default:return e}};var r=t("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),s=t.n(r),a=t("./src/actions/index.js")},"./src/reducers/NavDrawer.js":function(e,n,t){"use strict";n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1};switch((arguments.length>1?arguments[1]:void 0).type){case r.OPEN_NAV:return Object.assign({},e,{open:!0});case r.CLOSE_NAV:return Object.assign({},e,{open:!1});default:return e}};var r=t("./src/actions/index.js")},"./src/reducers/Settings.js":function(e,n,t){"use strict";n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1};switch((arguments.length>1?arguments[1]:void 0).type){case r.OPEN_SETTINGS:return Object.assign({},e,{open:!0});case r.CLOSE_SETTINGS:return Object.assign({},e,{open:!1});default:return e}};var r=t("./src/actions/index.js")},"./src/reducers/index.js":function(e,n,t){"use strict";var r=t("./node_modules/redux/es/index.js"),s=t("./src/reducers/Explore.js"),a=t("./src/reducers/Library.js"),o=t("./src/reducers/NavDrawer.js"),i=t("./src/reducers/Settings.js"),c=t("./src/reducers/quizzes.js"),u=Object(r.combineReducers)({Explore:s.a,Library:a.a,NavDrawer:o.a,Settings:i.a,quizzes:c.a});n.a=u},"./src/reducers/quizzes.js":function(e,n,t){"use strict";n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.FETCH_QUIZ:return Object.assign({},e,s()({},n.id,{loading:!0,data:null,error:!1}));case a.FETCH_QUIZ_OK:return Object.assign({},e,s()({},n.id,{loading:!1,data:n.quiz,error:!1}));case a.FETCH_QUIZ_ERROR:return Object.assign({},e,s()({},n.id,{loading:!1,data:null,error:!0}));case a.EXPLORE_MORE_QUIZZES_OK:var t={};return n.quizzes.forEach(function(e){t[e.id]={loading:!1,data:e,error:!1}}),Object.assign({},e,t);default:return e}};var r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),s=t.n(r),a=t("./src/actions/index.js")},"./src/registerServiceWorker.js":function(e,n,t){"use strict";n.a=function(){if("serviceWorker"in navigator){var e=new URL("/quiz9000",window.location);if(e.origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/quiz9000","/service-worker.js");r?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):s(e)})}};var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}},"./src/resets.css":function(e,n){},"./src/store.js":function(e,n,t){"use strict";var r=t("./node_modules/redux/es/index.js"),s=t("./node_modules/redux-devtools-extension/logOnlyInProduction.js"),a=(t.n(s),t("./node_modules/redux-thunk/lib/index.js")),o=t.n(a),i=t("./node_modules/connected-react-router/lib/index.js"),c=(t.n(i),t("./src/reducers/index.js")),u=t("./src/actions/index.js"),l=t("./src/utils/routerHistory.js"),d=Object(r.createStore)(Object(i.connectRouter)(l.a)(c.a),Object(r.compose)(Object(r.applyMiddleware)(o.a,Object(i.routerMiddleware)(l.a)),Object(s.devToolsEnhancer)({name:"Quiz9000",actionCreators:u})));n.a=d},"./src/theme.js":function(e,n,t){"use strict";var r=t("./node_modules/material-ui/styles/createMuiTheme.js"),s=t.n(r),a=t("./node_modules/material-ui/colors/indigo.js"),o=t.n(a),i=t("./node_modules/material-ui/colors/pink.js"),c=t.n(i);n.a=s()({palette:{primary:o.a,secondary:c.a,type:"light"}})},"./src/utils/routerHistory.js":function(e,n,t){"use strict";var r=t("./node_modules/history/createHashHistory.js"),s=t.n(r)()();n.a=s},0:function(e,n,t){t("./config/polyfills.js"),e.exports=t("./src/index.jsx")}},[0]);
//# sourceMappingURL=main.86cf925c.js.map