(function(t){function e(e){for(var n,o,i=e[0],s=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},l=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary"}},[a("v-toolbar-title",[t._v("APP")]),a("v-spacer")],1),a("v-main",[a("Form",{attrs:{items:t.items}}),a("Table",{attrs:{items:t.items}})],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("div",{staticClass:"text-right ma-5"},[a("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{fab:"",dark:"",color:"indigo"}},"v-btn",r,!1),n),[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Form Data")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Title*",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name*",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveForm}},[t._v(" Save ")])],1)],1)],1)},i=[],s=(a("b0c0"),a("bc3a")),c=a.n(s),u={props:{items:Array},methods:{saveForm:function(){var t=this;this.dialog=!1,c.a.post("/save",{title:this.title,name:this.name}).then((function(e){t.items.push({title:e.data.title,name:e.data.name}),console.log(e),t.name=null,t.title=null}))}},data:function(){return{dialog:!1,title:null,name:null}}},d=u,p=a("2877"),f=a("6544"),v=a.n(f),m=a("8336"),b=a("b0af"),h=a("99d9"),_=a("62ad"),g=a("a523"),x=a("169a"),y=a("132d"),V=a("0fd9"),k=a("2fa4"),w=a("8654"),O=Object(p["a"])(d,o,i,!1,null,null,null),C=O.exports;v()(O,{VBtn:m["a"],VCard:b["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:_["a"],VContainer:g["a"],VDialog:x["a"],VIcon:y["a"],VRow:V["a"],VSpacer:k["a"],VTextField:w["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Title ")]),a("th",{staticClass:"text-left"},[t._v(" Name ")]),a("th",{staticClass:"text-center"},[t._v(" Options ")])])]),a("tbody",t._l(t.items,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.name))]),a("td",[a("v-btn",{attrs:{title:"delete"},on:{click:function(a){return t.deleteItem(e.id)}}},[a("v-icon",{attrs:{color:"red"}},[t._v("mdi-minus")])],1)],1)])})),0)]},proxy:!0}])})},j=[],S={props:{items:Array},methods:{deleteItem:function(t){console.log(t)}}},P=S,A=a("1f4f"),F=Object(p["a"])(P,T,j,!1,null,null,null),M=F.exports;v()(F,{VBtn:m["a"],VIcon:y["a"],VSimpleTable:A["a"]});var I={name:"App",components:{Form:C,Table:M},data:function(){return{items:[]}},methods:{getList:function(){var t=this;c.a.get("/list").then((function(e){t.items=e.data}))}},created:function(){this.getList()}},$=I,q=a("7496"),B=a("40dc"),E=a("f6c4"),D=a("2a7f"),J=Object(p["a"])($,r,l,!1,null,null,null),L=J.exports;v()(J,{VApp:q["a"],VAppBar:B["a"],VMain:E["a"],VSpacer:k["a"],VToolbarTitle:D["a"]});var N=a("f309");n["a"].use(N["a"]);var R=new N["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:R,render:function(t){return t(L)}}).$mount("#app")}});
//# sourceMappingURL=app.09725d8c.js.map