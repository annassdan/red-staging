(function(){"use strict";var e={4829:function(e,t,r){var s=r(9242),a=r(3396),i=r(7139);const n={class:"flex flex-col h-screen bg-gray-100"},o={class:"py-5 bg-blue-600 text-white text-center"},l={class:"flex items-center justify-between flex-1 gap-8 sm:justify-end px-5"},c={key:0,class:"relative mt-1 w-full"},u=(0,a._)("svg",{id:"er5HkRPEcht1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",width:"20",height:"20"},[(0,a._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(-.63323 0.63323-.707107-.707107 17.577513 3.750088)",fill:"#909090","stroke-width":"0"}),(0,a._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(.63323 0.63323-.707107 0.707107 3.8367 2.335875)",fill:"#909090","stroke-width":"0"})],-1),d=[u],h={key:1,class:"flex flex-row items-center gap-6"},p=(0,a._)("svg",{id:"ejTlVZeJm9s1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",width:"20",height:"20"},[(0,a._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(.895522 0 0 1 0.41202 9)",fill:"#777","stroke-width":"0"}),(0,a._)("rect",{width:"20.516043",height:"2",rx:"1",ry:"1",transform:"matrix(-.468049 0.468049-.707107-.707107 11.430134 1.414213)",fill:"#777","stroke-width":"0","stroke-linecap":"round"}),(0,a._)("rect",{width:"21.699571",height:"2",rx:"1",ry:"1",transform:"matrix(.442649 0.442649-.707107 0.707107 1.827624 8.980497)",fill:"#777","stroke-width":"0"})],-1),g=[p],m={key:1},f={key:0,class:"red-title text-lg font-medium"},x={key:1,class:"red-title text-base"},w={key:2,class:"flex flex-row items-center gap-1"},y=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1),b=[y],k=(0,a._)("svg",{id:"eUKOTMbWute1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 29","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",width:"24",height:"29"},[(0,a._)("ellipse",{rx:"2.901147",ry:"2.9",transform:"translate(17.165639 4.655885)",fill:"#fff","stroke-width":"0"}),(0,a._)("ellipse",{rx:"2.901147",ry:"2.9",transform:"translate(17.165639 14.5)",fill:"#fff","stroke-width":"0"}),(0,a._)("ellipse",{rx:"2.901147",ry:"2.9",transform:"translate(17.165639 24.34)",fill:"#fff","stroke-width":"0"})],-1),v=[k],_={class:"fit-height"},S={class:"py-3 px-6 bg-gray-600 text-xs text-start text-white"};function $(e,t,r,u,p,y){const k=(0,a.up)("notifications"),$=(0,a.up)("router-view"),T=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(k,{position:"bottom right"}),(0,a._)("header",o,[(0,a._)("div",l,[e.$store.state.search?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>p.searchKey=e),onKeyup:t[1]||(t[1]=(...e)=>y.typingSearch&&y.typingSearch(...e)),id:"nama-grafik",class:"w-full py-3 px-4 text-xs text-gray-700 border-gray-200 rounded-lg shadow-sm focus:outline-blue-500",placeholder:"Inputkan nama grafik"},null,544),[[s.nr,p.searchKey],[T]]),(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>y.cancelSearch&&y.cancelSearch(...e)),class:"absolute inset-y-0 inline-flex items-center right-4"},d)])):(0,a.kq)("",!0),e.$store.state.search?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",h,[e.$store.state.homepage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[3]||(t[3]=(...e)=>y.backHomepage&&y.backHomepage(...e)),class:"block sm:hidden p-2.5 text-gray-600 bg-white rounded-lg hover:bg-gray-200 shrink-0 shadow-sm"},g)),e.$store.state.search?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",m,[e.$store.state.homepage?((0,a.wg)(),(0,a.iD)("h4",f,(0,i.zw)(e.$store.state.headerTitle),1)):(0,a.kq)("",!0),e.$store.state.homepage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("h4",x,(0,i.zw)(e.$store.state.headerTitle),1))]))])),e.$store.state.search?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",w,[!e.$store.state.search&&e.$store.state.homepage?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[4]||(t[4]=(...e)=>y.searchGraphic&&y.searchGraphic(...e)),class:"block sm:hidden p-2.5 text-gray-600 bg-white rounded-lg hover:bg-gray-200 shrink-0 shadow-sm"},b)):(0,a.kq)("",!0),e.$store.state.homepage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:t[5]||(t[5]=(...e)=>y.myMenu&&y.myMenu(...e))},v))]))])]),(0,a._)("main",_,[(0,a.Wm)($)]),(0,a._)("footer",S,[(0,a._)("button",{onClick:t[6]||(t[6]=(...e)=>y.myMenu&&y.myMenu(...e))},"Report Engine Developer ©2022")])])}var T={name:"App",data(){return{searchKey:""}},methods:{cancelSearch:function(){this.$store.commit("setSearch",!1),this.searchKey="",this.$store.commit("setSearchText","")},searchGraphic:function(){this.$store.commit("setSearch",!0)},backHomepage:function(){this.$store.commit("setHomepage",!0),this.$store.commit("setHeaderTitle","Graphic Engine"),this.$router.push("/userCodeAppPanel")},typingSearch:function(){this.$store.commit("setSearchText",this.searchKey)},myMenu:function(){console.log(this.$store.state.homepage)}}},j=r(89);const C=(0,j.Z)(T,[["render",$]]);var I=C,G=r(678);const O={class:"relative h-full"},P={key:1,style:{"z-index":"10000"},class:"text-xs text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},D={class:"max-w-screen-xl mx-auto"},L={class:"max-w-lg mx-auto"},M={class:"px-6 mt-6 mb-0 space-y-4 rounded-lg"},W=(0,a._)("p",{class:"text-lg font-medium"},"Masukan parameter",-1),H=(0,a._)("label",{for:"tahun",class:"text-xs font-medium"},"Tahun",-1),q={class:"relative mt-1"},z=(0,a._)("label",{for:"wpp",class:"text-xs font-medium"},"WPP",-1),B={class:"relative mt-1"},E={class:"block truncate text-xs"},K={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},U={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"},A=(0,a._)("label",{for:"spesies",class:"text-xs font-medium"},"Spesies",-1),N={class:"relative mt-1"},V=(0,a._)("label",{for:"lokasi",class:"text-xs font-medium"},"Lokasi Pendaratan",-1),Y={class:"relative mt-1"};function Z(e,t,r,n,o,l){const c=(0,a.up)("loading"),u=(0,a.up)("SelectorIcon"),d=(0,a.up)("ListboxButton"),h=(0,a.up)("CheckIcon"),p=(0,a.up)("ListboxOption"),g=(0,a.up)("ListboxOptions"),m=(0,a.up)("Listbox");return(0,a.wg)(),(0,a.iD)("div",O,[o.loading&&!o.insertingImage?((0,a.wg)(),(0,a.iD)("button",{key:0,style:{"z-index":"10000"},onClick:t[0]||(t[0]=(...e)=>l.onCancel&&l.onCancel(...e)),class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 text-xs mb-6 font-medium text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring"}," Batalkan ")):(0,a.kq)("",!0),o.insertingImage?((0,a.wg)(),(0,a.iD)("span",P," Menyisipkan gambar ... ")):(0,a.kq)("",!0),(0,a.Wm)(c,{active:o.loading,"onUpdate:active":t[1]||(t[1]=e=>o.loading=e),color:"#ff2020",width:25,height:25,opacity:.9,"is-full-page":!0},null,8,["active","opacity"]),(0,a._)("div",D,[(0,a._)("div",L,[(0,a._)("div",M,[W,(0,a._)("div",null,[H,(0,a._)("div",q,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.selectedYear=e),type:"text",id:"tahun",class:"w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm",placeholder:"Inputkan tahun"},null,512),[[s.nr,o.selectedYear]])])]),(0,a._)("div",null,[z,(0,a.Wm)(m,{modelValue:o.selectedWpp,"onUpdate:modelValue":t[3]||(t[3]=e=>o.selectedWpp=e)},{default:(0,a.w5)((()=>[(0,a._)("div",B,[(0,a.Wm)(d,{class:"relative w-full cursor-default rounded-lg bg-white py-3 px-4 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:(0,a.w5)((()=>[(0,a._)("span",E,(0,i.zw)(o.selectedWpp.name),1),(0,a._)("span",K,[(0,a.Wm)(u,{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])])),_:1}),(0,a.Wm)(s.uT,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-out","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.wpp,(e=>((0,a.wg)(),(0,a.j4)(p,{key:e.name,value:e,as:"template"},{default:(0,a.w5)((({active:t,selected:r})=>[(0,a._)("li",{class:(0,i.C_)([t?"bg-blue-100 text-blue-900":"text-gray-900","relative cursor-default select-none py-2 pl-10 pr-4"])},[(0,a._)("span",{class:(0,i.C_)([r?"font-medium text-blue-700":"font-normal","block truncate"])},(0,i.zw)(e.name),3),r?((0,a.wg)(),(0,a.iD)("span",U,[(0,a.Wm)(h,{class:"h-5 w-5","aria-hidden":"true"})])):(0,a.kq)("",!0)],2)])),_:2},1032,["value"])))),128))])),_:1})])),_:1})])])),_:1},8,["modelValue"])]),(0,a._)("div",null,[A,(0,a._)("div",N,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.selectedSpecies=e),type:"text",id:"spesies",class:"w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm",placeholder:"Inputkan nama spesies"},null,512),[[s.nr,o.selectedSpecies]])])]),(0,a._)("div",null,[V,(0,a._)("div",Y,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>o.selectedLocation=e),type:"text",id:"lokasi",class:"w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm",placeholder:"Inputkan lokasi pendaratan"},null,512),[[s.nr,o.selectedLocation]])])]),(0,a._)("button",{onClick:t[6]||(t[6]=(...e)=>l.generate&&l.generate(...e)),class:"w-full px-5 py-3 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring"}," Generate Grafik ")])])])])}var F=r(7730),R=r(4808),J=r(1621),Q=r(3752),X=r.n(Q),ee={name:"PanjangBerat",inject:["insertGraphic"],components:{Listbox:F.Ri,ListboxButton:F.Y4,ListboxOptions:F.O_,ListboxOption:F.wt,CheckIcon:R.Z,SelectorIcon:J.Z,Loading:X()},data(){return{tryingAt:0,loading:!1,canceled:!1,insertingImage:!1,selectedWpp:{name:"718"},selectedYear:"2020",selectedSpecies:"Layang",selectedLocation:"PPI Pomako",wpp:[{name:"571"},{name:"572"},{name:"573"},{name:"711"},{name:"712"},{name:"713"},{name:"714"},{name:"715"},{name:"716"},{name:"717"},{name:"718"}],graphicImageName:""}},methods:{formToObject:function(){return{year:Number(this.selectedYear),wpp:Number(this.selectedWpp.name),species:this.selectedSpecies,location:this.selectedLocation}},reset:function(){this.selectedYear="",this.selectedWpp={name:"571"},this.selectedSpecies="",this.selectedLocation=""},generate:async function(){this.tryingAt++;const e=this.tryingAt;this.graphicImageName="",this.loading=!0,this.canceled=!1,this.insertingImage=!1,this.$store.commit("setSearchText","");const t=this.formToObject();this.axios.post(`${this.$store.state.host}/execute-graphic/panjang_x_berat`,t).then((({data:t})=>{const{status:r,graphicImageName:s}=t;e!==this.tryingAt||this.canceled||("SUCCESS"===r?(this.graphicImageName=s||"",this.insertingImage=!0,this.insertGraphic(this.graphicImageName,(()=>{this.onInsertImage(!0)}),(()=>{this.onInsertImage(!1)}))):this.generateFail())})).catch((()=>{e===this.tryingAt&&this.generateFail()}))},onCancel:function(){this.loading=!1,this.canceled=!0,this.$notify({title:"Dibatalkan oleh pengguna!",type:"error"})},onInsertImage:function(e){this.insertingImage=!1,this.loading=!1,this.$notify({title:"Grafik berhasil disisipkan!",type:e?"success":"error"})},generateFail:function(){this.graphicImageName="",this.loading=!1,this.$notify({title:"Grafik tidak berhasil digenerate.",type:"error"})}}};const te=(0,j.Z)(ee,[["render",Z]]);var re=te;const se={class:"flex-1 overflow-y-auto p-5"},ae=(0,a._)("span",{class:"absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"},null,-1),ie={class:"justify-between sm:flex"},ne={class:"text-xl font-bold text-gray-900"},oe={class:"mt-4 sm:pr-8"},le={class:"text-xs text-gray-500"},ce={class:"flex flex-col mt-4 mb-1 items-end"},ue=["onClick","disabled"],de={key:0,class:"w-5 h-5 ml-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},he=(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"},null,-1),pe=[he];function ge(e,t,r,s,n,o){return(0,a.wg)(),(0,a.iD)("div",se,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.renderedGraphics,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:e.graphic,class:(0,i.C_)(["relative block py-5 px-6 overflow-hidden border border-gray-100 rounded-lg bg-white",t>0?"mt-5":""])},[ae,(0,a._)("div",ie,[(0,a._)("div",null,[(0,a._)("h5",ne,(0,i.zw)(e.graphic),1)])]),(0,a._)("div",oe,[(0,a._)("p",le,(0,i.zw)(e.description),1)]),(0,a._)("dl",ce,[(0,a._)("button",{onClick:t=>o.gotoGraphicPage(e),disabled:!e.createStatus,class:(0,i.C_)(e.createStatus?"flex items-center justify-between px-3 py-2 text-blue-600 transition-colors border border-current rounded-lg hover:bg-blue-500 group active:bg-indigo-500 focus:outline-none focus:ring":"flex items-center justify-between px-3 py-2 text-gray-600 transition-colors border border-current rounded-lg  group focus:outline-none ")},[(0,a._)("span",{class:(0,i.C_)(e.createStatus?"text-xs font-medium transition-colors group-hover:text-white":"text-xs font-medium transition-colors")},(0,i.zw)(e.createText),3),e.createStatus?((0,a.wg)(),(0,a.iD)("svg",de,pe)):(0,a.kq)("",!0)],10,ue)])],2)))),128))])}r(6699);var me={name:"GraphicList",data(){return{graphics:[{graphic:"Panjang vs berat",description:"Grafik yang digunakan untuk mensimulasikan hasil perhitungan panjang dan berat.",createText:"Buat Grafik",url:"/panjang-berat",createStatus:!0},{graphic:"Tingkat sebaran",description:"Grafik yang digunakan untuk memprediksi penyebaran suatu spesies.",createText:"Segera ...",createStatus:!1},{graphic:"Saran produksi",description:"Grafik yang digunakan untuk mempreiksi total produksi yang terjadi.",createText:"Segera ...",createStatus:!1}]}},beforeMount(){},methods:{restoreGraphics:function(){},gotoGraphicPage:function(e){this.restoreGraphics(),this.$store.commit("setHomepage",!1),this.$store.commit("setSearch",!1),this.$store.commit("setSearchText",""),this.$store.commit("setHeaderTitle",e.graphic),this.$router.push(e.url)}},computed:{renderedGraphics:function(){return this.graphics.filter((e=>e.graphic.toLowerCase().includes(this.$store.state.searchText.toLowerCase())))}}};const fe=(0,j.Z)(me,[["render",ge]]);var xe=fe,we=r(65),ye=r(2636),be=r(6265),ke=r.n(be),ve=r(6423);const _e=(0,we.MT)({state(){return{homepage:!0,search:!1,headerTitle:"Graphics Engine",searchText:"",host:"https://a383-103-121-18-20.ap.ngrok.io"}},mutations:{setHomepage(e,t){e.homepage=t},setSearch(e,t){e.search=t},setSearchText(e,t){e.searchText=t},setHeaderTitle(e,t){e.headerTitle=t}}}),Se=(0,G.p7)({history:(0,G.PO)("/"),routes:[{path:"/",component:xe},{path:"/userCodeAppPanel",component:xe},{path:"/panjang-berat",component:re}]}),$e=(0,s.ri)(I);$e.use(Se),$e.use(_e),$e.use(ye.Z),$e.use(ve.Z,ke()),$e.provide("insertGraphic",((e,t,r)=>{console.log("Running google.script.run.insertGraphic() script"),google.script.run.withSuccessHandler(t).withFailureHandler(r).insertGraphic(e)})),$e.directive("focus",{mounted(e){e.focus()}}),$e.mount("#app")}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,s,a,i){if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],i=e[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||n>=i)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(o=!1,i<n&&(n=i));if(o){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,a,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,i,n=s[0],o=s[1],l=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(l)var u=l(r)}for(t&&t(s);c<n.length;c++)i=n[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},s=self["webpackChunkred_vue3"]=self["webpackChunkred_vue3"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(4829)}));s=r.O(s)})();
//# sourceMappingURL=app.202b024d.js.map