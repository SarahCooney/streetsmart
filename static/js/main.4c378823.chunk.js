(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{287:function(e,a,t){e.exports=t(542)},542:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(13),o=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(57),l=(t(238),t(51)),c=t(96),d=(t(4),t(583)),h=t(590),u=t(598),p=(t(599),t(591)),g=t(592),m=t(596),f=t(79),w=(t(595),t(593),t(594),t(597)),v=(t(584),t(142),t(143),t(232),t(601)),y=t(580),b=t(581),E=t(582),C=t(219),x=t.n(C),S=t(220),k=t.n(S),I=t(221),B=t.n(I),R=t(222),j=t.n(R),M=t(223),O=t.n(M),z=t(107),D=t.n(z);v.a,y.a,x.a,b.a,v.a,y.a,k.a,b.a,v.a,y.a,B.a,b.a,v.a,y.a,j.a,b.a,v.a,y.a,O.a,b.a,E.a,v.a,y.a,D.a,b.a,v.a,y.a,D.a,b.a,v.a,y.a,D.a,b.a,t(56),t(45);function P(e,a){return{time:e,amount:a}}P("00:00",0),P("03:00",300),P("06:00",600),P("09:00",800),P("12:00",1500),P("15:00",2e3),P("18:00",2400),P("21:00",2400),P("24:00",void 0);Object(d.a)({depositContext:{flex:1}});t(585),t(589),t(588),t(586),t(587);function H(e,a,t,n,i,r){return{id:e,date:a,name:t,shipTo:n,paymentMethod:i,amount:r}}H(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),H(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),H(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),H(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),H(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79);Object(d.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));Object(d.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(c.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var N=t(233),T=t(234),A=t(105),L=t(240),G=t(239),W=t(7),J=t(236),U=t.n(J),V=t(146),X=t.n(V),F=t(237),K=t.n(F),$=t(235),_=function(e){Object(L.a)(t,e);var a=Object(G.a)(t);function t(){var e;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={color:"#000000",width:400,height:400,brushRadius:3,lazyRadius:0,img:"",pic:new Image,show:!1,headerHeight:0},e.handleChangeComplete=function(a,t){e.setState({color:a.hex})},e.resize=function(a){console.log(e.header.current.clientHeight),e.state.width,e.state.height},e.onImageChange=function(a){if(a.target.files&&a.target.files[0]){var t=new FileReader,n=new Image,i=e.saveableCanvas,r=Object(A.a)(e);t.onload=function(a){e.setState({img:a.target.result}),new Promise((function(e,t){n.src=a.target.result,console.log(n.width),null!=n.src?e("Stuff worked!"):t(Error("It broke"))})).then((function(e){console.log(e),r.setState({width:n.width}),r.setState({height:n.height}),i.clear(),i.drawImage()}),(function(e){console.log(e)}))},t.readAsDataURL(a.target.files[0])}},e.header=i.a.createRef(),e}return Object(T.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("MyCanvas-appBar-4").clientHeight;console.log(e),this.setState({headerHeight:e})}},{key:"render",value:function(){var e=this,a=this.props.classes;console.log(a.appBar);return this.state.show,i.a.createElement("div",{className:a.root},i.a.createElement(h.a,null),i.a.createElement(p.a,{position:"fixed",className:a.appBar,ref:this.header},i.a.createElement(g.a,null,i.a.createElement(f.a,{variant:"h6",noWrap:!0},"Clipped drawer"))),i.a.createElement(u.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},i.a.createElement(g.a,null),i.a.createElement("div",{className:a.drawerContainer},i.a.createElement(m.a,null,i.a.createElement(v.a,{button:!0,key:"clear",onClick:function(){e.saveableCanvas.clear()}},i.a.createElement(y.a,null," ",i.a.createElement(U.a,null)," "),i.a.createElement(b.a,{primary:"Clear"})),i.a.createElement(v.a,{button:!0,key:"undo",onClick:function(){e.saveableCanvas.undo()}},i.a.createElement(y.a,null," ",i.a.createElement(X.a,null)," "),i.a.createElement(b.a,{primary:"Undo"})),i.a.createElement(v.a,{key:"brushRadius"},i.a.createElement(y.a,null," ",i.a.createElement(K.a,null)," "),i.a.createElement(b.a,{primary:"Brush Radius:"})),i.a.createElement(v.a,null,i.a.createElement("input",{type:"number",value:this.state.brushRadius,onChange:function(a){return e.setState({brushRadius:parseInt(a.target.value,10)})}})),i.a.createElement(v.a,{key:"color"},i.a.createElement(b.a,{primary:"Color"})),i.a.createElement(v.a,{key:"ColorPicker"},i.a.createElement($.SketchPicker,{color:this.state.color,onChangeComplete:this.handleChangeComplete})),i.a.createElement(v.a,{key:"upload"},i.a.createElement(b.a,{primary:"Upload"}),i.a.createElement("input",{type:"file",onChange:this.onImageChange,className:"filetype",id:"group_image"})),i.a.createElement(v.a,{button:!0,key:"resize",onClick:function(){e.resize()}},i.a.createElement(y.a,null," ",i.a.createElement(X.a,null)," "),i.a.createElement(b.a,{primary:"Fit to Screen"}))))),i.a.createElement(w.a,{maxWidth:"lg",className:a.container},i.a.createElement("p",null,'Try it out! Draw something, hit "Save" and then "Load".'),i.a.createElement(s.a,{style:{zIndex:2},ref:function(a){return e.saveableCanvas=a},brushColor:this.state.color,brushRadius:this.state.brushRadius,lazyRadius:this.state.lazyRadius,canvasWidth:this.state.width,canvasHeight:this.state.height,imgSrc:this.state.img}),i.a.createElement("p",null,"The following is a disabled canvas with a hidden grid that we use to load & show your saved drawing."),i.a.createElement("button",{onClick:function(){e.loadableCanvas.loadSaveData(localStorage.getItem("savedDrawing"))}},"Load what you saved previously into the following canvas. Either by calling `loadSaveData()` on the component's reference or passing it the `saveData` prop:"),i.a.createElement(s.a,{disabled:!0,hideGrid:!0,ref:function(a){return e.loadableCanvas=a},saveData:localStorage.getItem("savedDrawing")})))}}]),t}(n.Component),q=Object(W.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(c.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}))(_);o.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[287,1,2]]]);
//# sourceMappingURL=main.4c378823.chunk.js.map