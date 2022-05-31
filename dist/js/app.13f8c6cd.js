(function(){"use strict";var e={140:function(e,t,r){var s=r(9242),i=r(3396),n=r(7139);const o={class:"flex flex-col h-screen bg-gray-100"},a={class:"py-5 bg-blue-600 text-white text-center"},l={class:"flex items-center justify-between flex-1 gap-8 sm:justify-end px-5"},c={key:0,class:"relative mt-1 w-full"},u=(0,i._)("input",{type:"text",id:"nama-grafik",class:"w-full py-3 px-4 text-xs text-gray-700 border-gray-200 rounded-lg shadow-sm focus:outline-blue-500",placeholder:"Inputkan nama grafik"},null,-1),d=(0,i._)("svg",{id:"er5HkRPEcht1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",width:"20",height:"20"},[(0,i._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(-.63323 0.63323-.707107-.707107 17.577513 3.750088)",fill:"#909090","stroke-width":"0"}),(0,i._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(.63323 0.63323-.707107 0.707107 3.8367 2.335875)",fill:"#909090","stroke-width":"0"})],-1),h=[d],p={key:1,class:"flex flex-row items-center gap-6"},g=(0,i._)("svg",{id:"ejTlVZeJm9s1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",width:"20",height:"20"},[(0,i._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(.895522 0 0 1 0.41202 9)",fill:"#777","stroke-width":"0"}),(0,i._)("rect",{width:"20.516043",height:"2",rx:"1",ry:"1",transform:"matrix(-.468049 0.468049-.707107-.707107 11.430134 1.414213)",fill:"#777","stroke-width":"0","stroke-linecap":"round"}),(0,i._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(.442649 0.442649-.707107 0.707107 1.827624 8.980497)",fill:"#777","stroke-width":"0"})],-1),m=[g],f={key:1},x={key:0,class:"red-title text-lg font-medium"},w={key:1,class:"red-title text-base"},k={key:2,class:"flex flex-row items-center gap-1"},v=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),b=[v],y=(0,i._)("svg",{id:"eUKOTMbWute1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 29","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",width:"24",height:"29"},[(0,i._)("ellipse",{rx:"2.901147",ry:"2.9",transform:"translate(17.165639 4.655885)",fill:"#fff","stroke-width":"0"}),(0,i._)("ellipse",{rx:"2.901147",ry:"2.9",transform:"translate(17.165639 14.5)",fill:"#fff","stroke-width":"0"}),(0,i._)("ellipse",{rx:"2.901147",ry:"2.9",transform:"translate(17.165639 24.34)",fill:"#fff","stroke-width":"0"})],-1),_=[y],$={class:"fit-height"},P={class:"py-3 px-6 bg-gray-600 text-xs text-start text-white"};function j(e,t,r,s,d,g){const v=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("header",a,[(0,i._)("div",l,[e.$store.state.search?((0,i.wg)(),(0,i.iD)("div",c,[u,(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>g.cancelSearch&&g.cancelSearch(...e)),class:"absolute inset-y-0 inline-flex items-center right-4"},h)])):(0,i.kq)("",!0),e.$store.state.search?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",p,[e.$store.state.homepage?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>g.backHomepage&&g.backHomepage(...e)),class:"block sm:hidden p-2.5 text-gray-600 bg-white rounded-lg hover:bg-gray-200 shrink-0 shadow-sm"},m)),e.$store.state.search?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",f,[e.$store.state.homepage?((0,i.wg)(),(0,i.iD)("h4",x,(0,n.zw)(e.$store.state.headerTitle),1)):(0,i.kq)("",!0),e.$store.state.homepage?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("h4",w,(0,n.zw)(e.$store.state.headerTitle),1))]))])),e.$store.state.search?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",k,[!e.$store.state.search&&e.$store.state.homepage?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>g.searchGraphic&&g.searchGraphic(...e)),class:"block sm:hidden p-2.5 text-gray-600 bg-white rounded-lg hover:bg-gray-200 shrink-0 shadow-sm"},b)):(0,i.kq)("",!0),e.$store.state.homepage?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:t[3]||(t[3]=(...e)=>g.myMenu&&g.myMenu(...e))},_))]))])]),(0,i._)("main",$,[(0,i.Wm)(v)]),(0,i._)("footer",P,[(0,i._)("button",{onClick:t[4]||(t[4]=(...e)=>g.myMenu&&g.myMenu(...e))},"Report Engine Developer ©2022")])])}var G={name:"App",components:{},mounted(){console.log(this.$router),console.log(this.$router.currentRoute)},methods:{cancelSearch:function(){this.$store.commit("setSearch",!1)},searchGraphic:function(){this.$store.commit("setSearch",!0)},backHomepage:function(){this.$store.commit("setHomepage",!0),this.$store.commit("setHeaderTitle","Graphic Engine"),this.$router.push("/userCodeAppPanel")},myMenu:function(){console.log(this.$store.state.homepage),this.$router.push("/userCodeAppPanel")}}},C=r(89);const S=(0,C.Z)(G,[["render",j]]);var T=S,D=r(678);const O={class:"max-w-screen-xl mx-auto"},H={class:"max-w-lg mx-auto"},M={class:"px-6 mt-6 mb-0 space-y-4 rounded-lg"},q=(0,i.uE)('<p class="text-lg font-medium">Masukan parameter</p><div><label for="tahun" class="text-xs font-medium">Tahun</label><div class="relative mt-1"><input type="text" id="tahun" class="w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm" placeholder="Inputkan tahun"></div></div><div><label for="spesies" class="text-xs font-medium">Spesies</label><div class="relative mt-1"><input type="text" id="spesies" class="w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm" placeholder="Inputkan nama spesies"></div></div><div><label for="wpp" class="text-xs font-medium">WPP</label><div class="relative mt-1"><input type="text" id="wpp" class="w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm" placeholder="Pilih WPP"></div></div><div><label for="lokasi" class="text-xs font-medium">Lokasi Pendaratan</label><div class="relative mt-1"><input type="text" id="lokasi" class="w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm" placeholder="Inputkan lokasi pendaratan"></div></div>',5);function B(e,t,r,s,n,o){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",O,[(0,i._)("div",H,[(0,i._)("div",M,[q,(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>o.generate&&o.generate(...e)),class:"w-full px-5 py-3 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring"}," Generate Grafik ")])])])])}var z={name:"PanjangBerat",mounted(){console.log(this.$router),console.log(this.$router.currentRoute)},methods:{generate:async function(){}}};const E=(0,C.Z)(z,[["render",B]]);var R=E;const A={class:"flex-1 overflow-y-auto p-5"},I=(0,i._)("span",{class:"absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"},null,-1),W={class:"justify-between sm:flex"},Z={class:"text-xl font-bold text-gray-900"},K={class:"mt-4 sm:pr-8"},L={class:"text-xs text-gray-500"},F={class:"flex flex-col mt-4 mb-1 items-end"},J=["onClick","disabled"],U={key:0,class:"w-5 h-5 ml-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},V=(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"},null,-1),Y=[V];function N(e,t,r,s,o,a){return(0,i.wg)(),(0,i.iD)("div",A,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.renderedGraphics,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:e.graphic,class:(0,n.C_)(["relative block py-5 px-6 overflow-hidden border border-gray-100 rounded-lg bg-white",t>0?"mt-5":""])},[I,(0,i._)("div",W,[(0,i._)("div",null,[(0,i._)("h5",Z,(0,n.zw)(e.graphic),1)])]),(0,i._)("div",K,[(0,i._)("p",L,(0,n.zw)(e.description),1)]),(0,i._)("dl",F,[(0,i._)("button",{onClick:t=>a.gotoGraphicPage(e),disabled:!e.createStatus,class:(0,n.C_)(e.createStatus?"flex items-center justify-between px-3 py-2 text-blue-600 transition-colors border border-current rounded-lg hover:bg-blue-500 group active:bg-indigo-500 focus:outline-none focus:ring":"flex items-center justify-between px-3 py-2 text-gray-600 transition-colors border border-current rounded-lg  group focus:outline-none ")},[(0,i._)("span",{class:(0,n.C_)(e.createStatus?"text-xs font-medium transition-colors group-hover:text-white":"text-xs font-medium transition-colors")},(0,n.zw)(e.createText),3),e.createStatus?((0,i.wg)(),(0,i.iD)("svg",U,Y)):(0,i.kq)("",!0)],10,J)])],2)))),128))])}var Q={name:"GraphicList",data(){return{graphics:[{graphic:"Panjang vs berat",description:"Grafik yang digunakan untuk mensimulasikan hasil perhitungan panjang dan berat.",createText:"Buat Grafik",url:"/panjang-berat",createStatus:!0},{graphic:"Tingkat sebaran",description:"Grafik yang digunakan untuk memprediksi penyebaran suatu spesies.",createText:"Segera ...",createStatus:!1},{graphic:"Saran produksi",description:"Grafik yang digunakan untuk mempreiksi total produksi yang terjadi.",createText:"Segera ...",createStatus:!1}],renderedGraphics:[]}},beforeMount(){this.restoreGraphics()},mounted(){console.log(this.$router),console.log(this.$router.currentRoute)},methods:{restoreGraphics:function(){this.renderedGraphics=[...this.graphics]},gotoGraphicPage:function(e){this.restoreGraphics(),this.$store.commit("setHomepage",!1),this.$store.commit("setSearch",!1),this.$store.commit("setHeaderTitle",e.graphic),this.$router.push(e.url)}}};const X=(0,C.Z)(Q,[["render",N]]);var ee=X,te=r(65);const re=(0,te.MT)({state(){return{homepage:!0,search:!1,headerTitle:"Graphics Engine"}},mutations:{setHomepage(e,t){e.homepage=t},setSearch(e,t){e.search=t},setHeaderTitle(e,t){e.headerTitle=t}}}),se=(0,D.p7)({history:(0,D.PO)("/"),routes:[{path:"/userCodeAppPanel",component:ee},{path:"/panjang-berat",component:R}]}),ie=(0,s.ri)(T);ie.use(se),ie.use(re),ie.mount("#app")}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,s,i,n){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],n=e[u][2];for(var a=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(a=!1,n<o&&(o=n));if(a){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,i,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,n,o=s[0],a=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(l)var u=l(r)}for(t&&t(s);c<o.length;c++)n=o[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},s=self["webpackChunkred_vue3"]=self["webpackChunkred_vue3"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(140)}));s=r.O(s)})();
//# sourceMappingURL=app.13f8c6cd.js.map