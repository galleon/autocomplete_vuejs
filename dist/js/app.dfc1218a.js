(function(t){function e(e){for(var n,c,s=e[0],o=e[1],l=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/autocomplete_vuejs/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"3acf":function(t,e,a){"use strict";a("4279")},4279:function(t,e,a){},"4fb1":function(t,e,a){},"500a":function(t,e,a){"use strict";a("4fb1")},8144:function(t,e,a){},"85ec":function(t,e,a){},"87bf":function(t,e,a){},"8feb":function(t,e,a){"use strict";a("87bf")},acab:function(t,e,a){"use strict";a("8144")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t._e(),a("v-main",[a("router-view")],1)],1)},i=[],c=n["a"].extend({name:"App",data:function(){return{}}}),s=c,o=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),b=a("f6c4"),f=Object(o["a"])(s,r,i,!1,null,null,null),v=f.exports;u()(f,{VApp:d["a"],VAppBar:p["a"],VMain:b["a"]});var h=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("aside",{staticClass:"configuration_panel"},[a("ConfigurationPanel")],1),a("section",{staticClass:"article_render"},[a("ArticleRender")],1)])},_=[],g=a("d4ec"),j=a("bee2"),y=a("262e"),O=a("2caf"),k=a("9ab4"),x=a("1b40"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article?a("div",{staticClass:"article_display"},[a("h2",{staticClass:"article_title"},[t._v(t._s(t.article.title))]),t.article.isLoading?a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e(),t._l(t.article.subjects,(function(e,n){return[a("div",{key:n,staticClass:"article_subject"},[a("h3",[t._v(t._s(e.title))]),t._l(e.content.split("\n"),(function(e,r){return[a("p",{key:"subject_"+n+"_line_"+r},[t._v(t._s(e))])]})),e.isLoading?a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e()],2)]}))],2):t._e()},C=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{width:"600px",persistent:"",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-cog")])],1)]}}]),model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[a("v-card",{staticClass:"api_settings_dialog"},[a("v-card-title",{staticClass:"text-h5 grey lighten-2 api_settings_titlebar"},[t._v(" API Settings "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",large:"",color:"success"},on:{click:function(e){return t.addNewSetting()}}},"v-btn",r,!1),n),[a("v-icon",{attrs:{large:""}},[t._v("mdi-plus")])],1)]}}])},[a("span",[t._v("Add a new setting")])])],1),t.article&&t.article._metadata?a("v-card-text",{attrs:{id:"api_settings"}},[a("v-text-field",{staticClass:"api_setting",attrs:{label:"API Url","hide-details":""},model:{value:t.article._metadata.api_url,callback:function(e){t.$set(t.article._metadata,"api_url",e)},expression:"article._metadata.api_url"}}),t._l(t.article._metadata.api_settings,(function(e,n){return[a("div",{key:n,staticClass:"api_setting"},[a("div",{staticClass:"api_setting_title"},[a("h3",{domProps:{innerHTML:t._s(e.key.toUpperCase()||"<em class='red--text'>UNDEFINED</em>")}}),a("div",{staticClass:"api_setting_actions"},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteSetting(n)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)]),a("v-select",{attrs:{items:["text","number","checkbox"],"hide-details":"",label:"Setting type"},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"setting.type"}}),a("div",{staticClass:"api_setting_data"},[a("v-text-field",{attrs:{label:"Key","hide-details":""},model:{value:e.key,callback:function(a){t.$set(e,"key",a)},expression:"setting.key"}}),"checkbox"===e.type?a("v-checkbox",{attrs:{label:"Value","hide-details":""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"setting.value"}}):a("v-text-field",{attrs:{label:"Value","hide-details":"",type:e.type},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"setting.value"}})],1)],1)]}))],2):t._e(),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.saveAndClose}},[t._v(" Close ")])],1)],1)],1)],1)},A=[],T=(a("a434"),a("4de4"),a("d3b7"),a("e8fb")),V={article:function(t){return t.article}},D=Object(T["getStoreAccessors"])(""),$=D.read,E=$(V.article),P=function(t){Object(y["a"])(a,t);var e=Object(O["a"])(a);function a(){var t;return Object(g["a"])(this,a),t=e.apply(this,arguments),t.isOpen=!1,t}return Object(j["a"])(a,[{key:"article",get:function(){return E(this.$store)}},{key:"saveAndClose",value:function(){this.isOpen=!1}},{key:"addNewSetting",value:function(){this.article._metadata.api_settings.push({type:"text",key:"",value:""}),setTimeout((function(){var t=document.getElementById("api_settings");t&&(t.scrollTop=t.scrollHeight)}),50)}},{key:"deleteSetting",value:function(t){var e=this.article._metadata.api_settings.splice(t,1)[0];this.article._metadata.api_settings=this.article._metadata.api_settings.filter((function(t){return t!==e}))}}]),a}(x["b"]);P=Object(k["a"])([Object(x["a"])({components:{}})],P);var L=P,N=L,U=(a("8feb"),a("8336")),q=a("b0af"),I=a("99d9"),M=a("ac7c"),B=a("169a"),F=a("ce7e"),J=a("132d"),R=a("b974"),z=a("2fa4"),H=a("8654"),K=a("3a2f"),G=Object(o["a"])(N,S,A,!1,null,"0a05ac90",null),Q=G.exports;u()(G,{VBtn:U["a"],VCard:q["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCheckbox:M["a"],VDialog:B["a"],VDivider:F["a"],VIcon:J["a"],VSelect:R["a"],VSpacer:z["a"],VTextField:H["a"],VTooltip:K["a"]});var W=function(t){Object(y["a"])(a,t);var e=Object(O["a"])(a);function a(){return Object(g["a"])(this,a),e.apply(this,arguments)}return Object(j["a"])(a,[{key:"article",get:function(){return E(this.$store)}}]),a}(x["b"]);W=Object(k["a"])([Object(x["a"])({components:{ApiSettings:Q}})],W);var X=W,Y=X,Z=(a("3acf"),a("490a")),tt=Object(o["a"])(Y,w,C,!1,null,"621dd82f",null),et=tt.exports;u()(tt,{VProgressCircular:Z["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article?a("div",{staticClass:"configuration_panel"},[a("ApiSettings",{staticClass:"article_settings",attrs:{article:t.article}}),a("div",{staticClass:"box article_title"},[a("v-text-field",{attrs:{label:"Title",disabled:t.article.isLoading,"hide-details":""},model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1),a("div",{staticClass:"article_subjects"},[a("div",{staticClass:"d-flex justify-center"},[t.article.isLoading?a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e()],1),t._l(t.article.subjects,(function(e,n){return[a("div",{key:n,staticClass:"box"},[a("div",{staticClass:"subject_toolbox"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,i=n.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",dense:"",color:"primary",dark:""},on:{click:function(a){return t.deleteSubject(e)}}},"v-btn",i,!1),r),[a("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)},[a("span",[t._v("Delete this subject")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,i=n.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",dense:"",color:"primary",dark:""},on:{click:function(a){return t.refreshSubjectContent(e)}}},"v-btn",i,!1),r),[a("v-icon",[t._v(" mdi-refresh ")])],1)]}}],null,!0)},[a("span",[t._v("Reset the content")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,i=n.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",dense:"",color:"primary",dark:""},on:{click:function(a){return t.refreshSubjectContent(e,!1)}}},"v-btn",i,!1),r),[a("v-icon",[t._v(" mdi-plus ")])],1)]}}],null,!0)},[a("span",[t._v("Add more content")])])],1),a("v-text-field",{attrs:{label:"Subject",disabled:t.article.isLoading||e.isLoading,"hide-details":""},model:{value:e.title,callback:function(a){t.$set(e,"title",a)},expression:"subject.title"}}),a("v-textarea",{attrs:{label:"Content",disabled:t.article.isLoading||e.isLoading,"hide-details":"","auto-grow":""},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"subject.content"}})],1)]}))],2),a("div",{staticClass:"d-flex buttons"},[a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.addNewSubject()}}},[a("v-icon",[t._v("mdi-plus")]),t._v(" New subject ")],1),a("v-btn",{attrs:{color:"info",disabled:!0},on:{click:function(e){return t.addNewSubject()}}},[a("v-icon",[t._v("mdi-download")]),t._v(" Download as JSON ")],1)],1),t._e()],1):t._e()},nt=[],rt=a("5530"),it=a("c7eb"),ct=a("1da1"),st=(a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("99af"),a("bc3a")),ot=a.n(st),lt=function(t){Object(y["a"])(a,t);var e=Object(O["a"])(a);function a(){var t;return Object(g["a"])(this,a),t=e.apply(this,arguments),t.lastArticleEdition=Date.now(),t}return Object(j["a"])(a,[{key:"computedArticle",get:function(){return Object.assign({},this.article)}},{key:"article",get:function(){return E(this.$store)}},{key:"onArticleChange",value:function(t,e){var a=this;this.lastArticleEdition=Date.now(),setTimeout(Object(ct["a"])(Object(it["a"])().mark((function n(){var r,i;return Object(it["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(Date.now()-a.lastArticleEdition>1e3)){n.next=11;break}if(!(t.title&&e.title!==t.title&&t.title.length>0&&Date.now()-a.article.lastTitleUpdate>1e3)){n.next=11;break}return a.article.isLoading=!0,a.article.subjects=[],n.next=6,a.requestSummary(t.title);case 6:r=n.sent,r&&(i=a.parseSummary(r["data"]["generated_text"]),a.article.lastSummaryUpdate=Date.now(),a.article._summary=r["data"]["generated_text"].split("\n").filter((function(t){return t&&t.length>0})).map((function(t){return t.trim()})).join("\n"),i.forEach(function(){var t=Object(ct["a"])(Object(it["a"])().mark((function t(e){var n;return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.addNewSubject();case 2:n=t.sent,n.title=e;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),a.article.isLoading=!1,a.lastArticleEdition=Date.now(),a.article.lastTitleUpdate=Date.now();case 11:case"end":return n.stop()}}),n)}))),1e3)}},{key:"parseSummary",value:function(t){return t?t.split("\n").filter((function(t){return t&&t.length>0})).map((function(t){return t.trim()})):[]}},{key:"addNewSubject",value:function(){var t=Object(ct["a"])(Object(it["a"])().mark((function t(){var e,a,n=this;return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={title:"",content:"",isLoading:!1,last_refresh:Date.now(),lastEdit:Date.now()-5e4},this.article.subjects.push(e),a=this.article.subjects.indexOf(e),this.$watch("article.subjects.".concat(a,".title"),function(){var t=Object(ct["a"])(Object(it["a"])().mark((function t(a,r){return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.lastEdit=Date.now(),setTimeout(Object(ct["a"])(Object(it["a"])().mark((function t(){return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(a&&r!==a&&a.length>0&&Date.now()-e.lastEdit>1e3)){t.next=3;break}return t.next=3,n.refreshSubjectContent(e);case 3:case"end":return t.stop()}}),t)}))),1e3);case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"deleteSubject",value:function(){var t=Object(ct["a"])(Object(it["a"])().mark((function t(e){return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.article.subjects=this.article.subjects.filter((function(t){return t.title!==e.title}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"refreshSubjectContent",value:function(){var t=Object(ct["a"])(Object(it["a"])().mark((function t(e){var a,n,r=arguments;return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=!(r.length>1&&void 0!==r[1])||r[1],e.isLoading=!0,t.next=4,this.requestSubjectContent(e.title);case 4:n=t.sent,n&&(a?e.content=n["data"]["generated_text"]:e.content+="\n".concat(n["data"]["generated_text"])),e.isLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getCustomSettings",value:function(){var t={};return this.article._metadata.api_settings.forEach((function(e){t[e.key]=e.value})),t}},{key:"requestSummary",value:function(){var t=Object(ct["a"])(Object(it["a"])().mark((function t(e){return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ot()("".concat("https://aqsone-reverse-proxy.herokuapp.com/").concat(this.article._metadata.api_url),{method:"POST",data:Object(rt["a"])({text:"titre: ".concat(e,"\nsommaire:")},this.getCustomSettings()),withCredentials:!1,headers:{Authorization:"Token 2e20b99e7b932d1a0bba3f7a969155f6734d2fd2","Content-Type":"application/json",Accept:"*/*","Access-Control-Allow-Origin":"*"}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"requestSubjectContent",value:function(){var t=Object(ct["a"])(Object(it["a"])().mark((function t(e){return Object(it["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ot()("".concat("https://aqsone-reverse-proxy.herokuapp.com/").concat(this.article._metadata.api_url),{method:"POST",data:Object(rt["a"])(Object(rt["a"])({},this.getCustomSettings()),{},{text:"sujet: ".concat(e,"\ncontenu:")}),withCredentials:!1,headers:{Authorization:"Token 2e20b99e7b932d1a0bba3f7a969155f6734d2fd2","Content-Type":"application/json",Accept:"*/*","Access-Control-Allow-Origin":"*"}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),a}(x["b"]);Object(k["a"])([Object(x["c"])("computedArticle",{deep:!0})],lt.prototype,"onArticleChange",null),lt=Object(k["a"])([Object(x["a"])({components:{ApiSettings:Q}})],lt);var ut=lt,dt=ut,pt=(a("500a"),a("a844")),bt=Object(o["a"])(dt,at,nt,!1,null,"525cf156",null),ft=bt.exports;u()(bt,{VBtn:U["a"],VIcon:J["a"],VProgressCircular:Z["a"],VTextField:H["a"],VTextarea:pt["a"],VTooltip:K["a"]});var vt={setArticle:function(t,e){t.article=e}},ht=Object(T["getStoreAccessors"])(""),mt=ht.commit,_t=mt(vt.setArticle),gt=function(t){Object(y["a"])(a,t);var e=Object(O["a"])(a);function a(){return Object(g["a"])(this,a),e.apply(this,arguments)}return Object(j["a"])(a,[{key:"mounted",value:function(){_t(this.$store,{title:"Comment devenir data scientist ?",subjects:[],_summary:"",lastTitleUpdate:Date.now(),lastSummaryUpdate:Date.now(),_metadata:{api_url:"https://api.nlpcloud.io/v1/gpu/custom-model/gpt-j-42e36450/generation?",api_settings:[{type:"number",key:"max_length",value:100},{type:"text",key:"end_sequence",value:"."},{type:"checkbox",key:"remove_input",value:!0},{type:"number",key:"top_k",value:40},{type:"number",key:"top_p",value:.9},{type:"number",key:"temperature",value:.5}]},isLoading:!1})}}]),a}(x["b"]);gt=Object(k["a"])([Object(x["a"])({components:{ArticleRender:et,ConfigurationPanel:ft}})],gt);var jt=gt,yt=jt,Ot=(a("acab"),Object(o["a"])(yt,m,_,!1,null,"7cd20cd8",null)),kt=Ot.exports;n["a"].use(h["a"]);var xt=[{path:"/",name:"Article",component:kt}],wt=new h["a"]({mode:"history",base:"/autocomplete_vuejs/",routes:xt}),Ct=wt,St=a("2f62"),At={},Tt=Object(T["getStoreAccessors"])(""),Vt=(Tt.dispatch,{article:{}}),Dt={state:Vt,mutations:vt,actions:At,getters:V};n["a"].use(St["a"]);var $t={modules:{main:Dt}},Et=new St["a"].Store($t),Pt=Et,Lt=a("f309");n["a"].use(Lt["a"]);var Nt=new Lt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ct,store:Pt,vuetify:Nt,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.dfc1218a.js.map