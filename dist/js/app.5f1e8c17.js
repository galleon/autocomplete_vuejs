(function(t){function e(e){for(var r,i,o=e[0],u=e[1],s=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"301e":function(t,e,n){"use strict";n("d576")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t._e(),n("v-main",[n("router-view")],1)],1)},c=[],i=r["a"].extend({name:"App",data:function(){return{}}}),o=i,u=n("2877"),s=n("6544"),l=n.n(s),d=n("7496"),p=n("40dc"),b=n("f6c4"),f=Object(u["a"])(o,a,c,!1,null,null,null),v=f.exports;l()(f,{VApp:d["a"],VAppBar:p["a"],VMain:b["a"]});var h=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},m=[],w=n("bee2"),_=n("d4ec"),O=n("262e"),y=n("2caf"),g=n("9ab4"),x=n("1b40"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"configuration_panel"},[n("div",{staticClass:"box"},[n("v-text-field",{attrs:{label:"Title",disabled:t.isLoading,"hide-details":""},model:{value:t.currentArticle.title,callback:function(e){t.$set(t.currentArticle,"title",e)},expression:"currentArticle.title"}})],1),t._l(t.currentArticle.subjects,(function(e,r){return[n("div",{key:r,staticClass:"box"},[n("div",{staticClass:"subject_toolbox"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var a=r.on,c=r.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",dense:"",color:"primary",dark:""},on:{click:function(n){return t.deleteSubject(e)}}},"v-btn",c,!1),a),[n("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)},[n("span",[t._v("Delete this subject")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var a=r.on,c=r.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",dense:"",color:"primary",dark:""},on:{click:function(n){return t.refreshSubjectContent(e)}}},"v-btn",c,!1),a),[n("v-icon",[t._v(" mdi-refresh ")])],1)]}}],null,!0)},[n("span",[t._v("Reset the content")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var a=r.on,c=r.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",dense:"",color:"primary",dark:""},on:{click:function(n){return t.refreshSubjectContent(e,!1)}}},"v-btn",c,!1),a),[n("v-icon",[t._v(" mdi-plus ")])],1)]}}],null,!0)},[n("span",[t._v("Add more content")])])],1),n("v-text-field",{attrs:{label:"Subject",disabled:t.isLoading||e.isLoading,"hide-details":""},model:{value:e.title,callback:function(n){t.$set(e,"title",n)},expression:"subject.title"}}),n("v-textarea",{attrs:{label:"Content",disabled:t.isLoading||e.isLoading,"hide-details":"","auto-grow":""},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"subject.content"}})],1)]})),n("div",{staticClass:"d-flex buttons"},[n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.addNewSubject()}}},[n("v-icon",[t._v("mdi-plus")]),t._v(" New subject ")],1),n("v-btn",{attrs:{color:"info",disabled:!0},on:{click:function(e){return t.addNewSubject()}}},[n("v-icon",[t._v("mdi-download")]),t._v(" Download as JSON ")],1)],1),t._e()],2),n("v-col",{staticClass:"article_display"},[n("h2",[t._v(t._s(t.currentArticle.title))]),t.isLoading?n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e(),t._l(t.currentArticle.subjects,(function(e,r){return[n("div",{key:r},[n("h3",[t._v(t._s(e.title))]),t._l(e.content.split("\n"),(function(e,a){return[n("p",{key:"subject_"+r+"_line_"+a},[t._v(t._s(e))])]})),e.isLoading?n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e()],2)]}))],2)],1)],1)},A=[],S=n("5530"),C=n("c7eb"),T=n("1da1"),D=(n("a15b"),n("d81d"),n("4de4"),n("d3b7"),n("ac1f"),n("1276"),n("498a"),n("159b"),n("bc3a")),E=n.n(D),L=function(t){Object(O["a"])(n,t);var e=Object(y["a"])(n);function n(){var t;return Object(_["a"])(this,n),t=e.apply(this,arguments),t.currentArticle={},t.lastArticleEdition=Date.now(),t.isLoading=!1,t.customSettings={max_length:100,end_sequence:".",remove_input:!0,top_k:40,top_p:.9,temperature:.5},t}return Object(w["a"])(n,[{key:"computedArticle",get:function(){return Object.assign({},this.currentArticle)}},{key:"onArticleChange",value:function(t,e){var n=this;this.lastArticleEdition=Date.now(),setTimeout(Object(T["a"])(Object(C["a"])().mark((function r(){var a,c;return Object(C["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!(Date.now()-n.lastArticleEdition>1e3)){r.next=8;break}if(!(t.title&&e.title!==t.title&&t.title.length>0&&Date.now()-n.currentArticle.lastTitleUpdate>1e3)){r.next=8;break}return n.isLoading=!0,n.currentArticle.subjects=[],r.next=6,n.requestSummary(t.title);case 6:a=r.sent,a&&(c=n.parseSummary(a["data"]["generated_text"]),n.currentArticle.lastSummaryUpdate=Date.now(),n.currentArticle._summary=a["data"]["generated_text"].split("\n").filter((function(t){return t&&t.length>0})).map((function(t){return t.trim()})).join("\n"),c.forEach(function(){var t=Object(T["a"])(Object(C["a"])().mark((function t(e){var r;return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.addNewSubject();case 2:r=t.sent,r.title=e;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.isLoading=!1,n.lastArticleEdition=Date.now(),n.currentArticle.lastTitleUpdate=Date.now());case 8:case"end":return r.stop()}}),r)}))),1e3)}},{key:"parseSummary",value:function(t){return t?t.split("\n").filter((function(t){return t&&t.length>0})).map((function(t){return t.trim()})):[]}},{key:"addNewSubject",value:function(){var t=Object(T["a"])(Object(C["a"])().mark((function t(){var e,n,r=this;return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={title:"",content:"",isLoading:!1,last_refresh:Date.now(),lastEdit:Date.now()-5e4},this.currentArticle.subjects.push(e),n=this.currentArticle.subjects.indexOf(e),this.$watch("currentArticle.subjects.".concat(n,".title"),function(){var t=Object(T["a"])(Object(C["a"])().mark((function t(n,a){return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.lastEdit=Date.now(),setTimeout(Object(T["a"])(Object(C["a"])().mark((function t(){return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(n&&a!==n&&n.length>0&&Date.now()-e.lastEdit>1e3)){t.next=3;break}return t.next=3,r.refreshSubjectContent(e);case 3:case"end":return t.stop()}}),t)}))),1e3);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"deleteSubject",value:function(){var t=Object(T["a"])(Object(C["a"])().mark((function t(e){return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.currentArticle.subjects=this.currentArticle.subjects.filter((function(t){return t.title!==e.title}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"refreshSubjectContent",value:function(){var t=Object(T["a"])(Object(C["a"])().mark((function t(e){var n,r,a=arguments;return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=!(a.length>1&&void 0!==a[1])||a[1],e.isLoading=!0,t.next=4,this.requestSubjectContent(e.title);case 4:r=t.sent,r&&(n?e.content=r["data"]["generated_text"]:e.content+="\n".concat(r["data"]["generated_text"])),e.isLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"requestSummary",value:function(){var t=Object(T["a"])(Object(C["a"])().mark((function t(e){return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E()("http://localhost:8100/https://api.nlpcloud.io/v1/gpu/custom-model/gpt-j-42e36450/generation?",{method:"POST",data:Object(S["a"])({text:"titre: ".concat(e,"\nsommaire:")},this.customSettings),headers:{Authorization:"Token 2e20b99e7b932d1a0bba3f7a969155f6734d2fd2","Content-Type":"application/json",Accept:"*/*","Access-Control-Allow-Origin":"*"}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"requestSubjectContent",value:function(){var t=Object(T["a"])(Object(C["a"])().mark((function t(e){return Object(C["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E()("http://localhost:8100/https://api.nlpcloud.io/v1/gpu/custom-model/gpt-j-42e36450/generation?",{method:"POST",data:Object(S["a"])(Object(S["a"])({},this.customSettings),{},{text:"sujet: ".concat(e,"\ncontenu:")}),headers:{Authorization:"Token 2e20b99e7b932d1a0bba3f7a969155f6734d2fd2","Content-Type":"application/json",Accept:"*/*","Access-Control-Allow-Origin":"*"}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=this;console.log(Object({NODE_ENV:"production",VUE_APP_API_KEY:"Token 2e20b99e7b932d1a0bba3f7a969155f6734d2fd2",BASE_URL:"/"})),setTimeout((function(){t.currentArticle={title:"Comment devenir data scientist ?",subjects:[],_summary:"",lastTitleUpdate:Date.now(),lastSummaryUpdate:Date.now()}}),500)}}]),n}(x["b"]);Object(g["a"])([Object(x["c"])("computedArticle",{deep:!0})],L.prototype,"onArticleChange",null),L=Object(g["a"])([x["a"]],L);var V=L,P=V,N=(n("301e"),n("8336")),$=n("62ad"),U=n("a523"),q=n("132d"),M=n("490a"),B=n("0fd9"),H=n("8654"),J=n("a844"),R=n("3a2f"),z=Object(u["a"])(P,k,A,!1,null,"7c738c90",null),I=z.exports;l()(z,{VBtn:N["a"],VCol:$["a"],VContainer:U["a"],VIcon:q["a"],VProgressCircular:M["a"],VRow:B["a"],VTextField:H["a"],VTextarea:J["a"],VTooltip:R["a"]});var W=function(t){Object(O["a"])(n,t);var e=Object(y["a"])(n);function n(){return Object(_["a"])(this,n),e.apply(this,arguments)}return Object(w["a"])(n)}(x["b"]);W=Object(g["a"])([Object(x["a"])({components:{HelloWorld:I}})],W);var F=W,K=F,Y=Object(u["a"])(K,j,m,!1,null,null,null),G=Y.exports;r["a"].use(h["a"]);var Q=[{path:"/",name:"Home",component:G}],X=new h["a"]({mode:"history",base:"/",routes:Q}),Z=X,tt=n("2f62");r["a"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),nt=n("f309");r["a"].use(nt["a"]);var rt=new nt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Z,store:et,vuetify:rt,render:function(t){return t(v)}}).$mount("#app")},d576:function(t,e,n){}});
//# sourceMappingURL=app.5f1e8c17.js.map