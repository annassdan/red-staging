"use strict";(self["webpackChunkred_vue3"]=self["webpackChunkred_vue3"]||[]).push([[257],{7257:function(e,t,s){s.r(t),s.d(t,{default:function(){return H}});var a=s(3396),o=s(7139),l=s(9242);const n=e=>((0,a.dD)("data-v-16e33e8e"),e=e(),(0,a.Cn)(),e),i={ref:"sectioncontainer",class:"flex-1 mt-20 pt-1 pb-5 mb-10 bg-gray-100 h-full"},r={key:1,style:{"z-index":"10000"},class:"text-xs text-red-500 absolute bottom-2/4 -mb-14 left-1/2 transform -translate-x-1/2 translate-y-1/2"},c={class:"max-w-screen-xl mx-auto"},u={ref:"toTop",autocomplete:"off",class:"h-0 -mt-10"},d={class:"max-w-lg mx-auto"},h={class:"pl-6 pr-4 mb-0 space-y-5 rounded-lg"},p={class:"flex-col"},g={class:"flex flex-row text-gray-700 item-center justify-between pb-6"},m={class:"flex flex-row text-gray-700 h-full items-center justify-between w-full"},f=n((()=>(0,a._)("span",{class:"text-base pl-1 font-semibold text-sky-700"},"Inputkan Parameter",-1))),y=n((()=>(0,a._)("label",{for:"date-range",class:"text-xs font-medium pl-1 text-gray-600"},"Rentang Tanggal",-1))),w={class:"relative mt-1"},R=["value"],b=n((()=>(0,a._)("label",{for:"wpp",class:"text-xs font-medium pl-1 text-gray-600"},"WPP",-1))),k={class:"relative mt-1"},x=["onMousedown"],$=n((()=>(0,a._)("label",{for:"resource",class:"text-xs font-medium pl-1 text-gray-600"},"Sumber Daya",-1))),T={class:"relative mt-1"},_=["onMousedown"],v=n((()=>(0,a._)("label",{for:"location",class:"text-xs font-medium pl-1 text-gray-600"},"Lokasi Pendaratan/Sampling",-1))),D={class:"relative mt-1"},L=["onMousedown"],C={class:"flex flex-col w-full pt-2"},I=n((()=>(0,a._)("span",{class:"text-gray-200 ml-2"},"Hasilkan Grafik",-1))),E=n((()=>(0,a._)("span",{class:"text-gray-500 ml-2"},"Sisipkan Ulang Gambar",-1)));function M(e,t,s,n,M,F){const A=(0,a.up)("loading"),W=(0,a.up)("UilDocumentLayoutLeft"),U=(0,a.up)("DatePicker"),S=(0,a.up)("UilFileInfoAlt"),O=(0,a.up)("UilTrashAlt"),P=(0,a.up)("Multiselect"),V=(0,a.up)("UilChartLine"),z=(0,a.up)("UilFileRedoAlt"),G=(0,a.up)("UilPicture"),N=(0,a.Q2)("tippy");return(0,a.wg)(),(0,a.iD)("div",i,[M.loading&&!M.insertingImage?((0,a.wg)(),(0,a.iD)("button",{key:0,style:{"z-index":"10000"},onClick:t[0]||(t[0]=(...e)=>F.cancel&&F.cancel(...e)),class:"absolute bottom-0 absolute bottom-2/4 -mb-14 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-3 py-2 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring"}," Batalkan ")):(0,a.kq)("",!0),M.insertingImage?((0,a.wg)(),(0,a.iD)("span",r," Menyisipkan gambar ... ")):(0,a.kq)("",!0),(0,a.Wm)(A,{active:M.loading,"onUpdate:active":t[1]||(t[1]=e=>M.loading=e),color:"#ff2020",width:25,height:25,opacity:.9,"is-full-page":!0},null,8,["active","opacity"]),(0,a._)("div",c,[(0,a._)("input",u,null,512),(0,a._)("div",d,[(0,a._)("div",h,[(0,a._)("div",p,[(0,a._)("div",g,[(0,a._)("div",m,[f,(0,a.Wm)(W,{size:"1.25rem",class:"text-sky-700 outline-none ml-3"})])]),y,(0,a._)("div",w,[(0,a.Wm)(U,{modelValue:M.selectedDateRange,"onUpdate:modelValue":t[3]||(t[3]=e=>M.selectedDateRange=e),popover:{visibility:"click"},"max-date":new Date,onDayclick:F.onDateRangeChanged,"model-config":M.dateRangeConfig,locale:"id-ID",masks:M.dateRangeMasks,"is-range":""},{default:(0,a.w5)((({inputValue:s,inputEvents:o})=>[(0,a._)("input",(0,a.dG)({placeholder:"Masukan rentang tanggal",class:[e.$style.form.input,"bg-white w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm outline-sky-400 focus-within:outline-sky-400"],value:F.formatDateRange(s)},(0,a.mx)(o.end),{onFocus:t[2]||(t[2]=(...e)=>F.onDateRangeOpened&&F.onDateRangeOpened(...e))}),null,16,R)])),_:1},8,["modelValue","max-date","onDayclick","model-config","masks"])])]),(0,a._)("div",null,[b,(0,a._)("div",k,[(0,a.Wm)(P,{placeholder:"Pilih wpp","no-results-text":"Tidak ditemukan","no-options-text":"Data kosong",modelValue:M.selectedWpp,"onUpdate:modelValue":t[5]||(t[5]=e=>M.selectedWpp=e),ref:"wpp",onClick:F.wppFocused,mode:M.wppTagsMode?"tags":"multiple",multipleLabel:F.allWppSelected,classes:e.$style.multiselect.component(M.wppFetched,M.wppTagsMode),onChange:t[6]||(t[6]=e=>F.wppTagCreated(e)),"create-option":!1,"close-on-select":!1,groups:!0,"filter-results":!0,searchable:!0,"resolve-on-load":!1,"clear-on-select":!1,delay:M.wppFetched?-1:M.shouldWppRetrieve?0:-1,options:F.getWpp},{tag:(0,a.w5)((({option:t,handleTagRemove:s})=>[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(e.$style.multiselect.tagWrapper)},[(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagLabel)},(0,o.zw)(e.$normalizeTag(t.label)),3),(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagRemove),onMousedown:(0,l.iM)((e=>s(t,e)),["prevent"])},[(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagRemoveIcon)},null,2)],42,x)],2)),[[N,e.$tagTooltip(t.label)]])])),clear:(0,a.w5)((()=>[M.wppTagsMode?(0,a.kq)("",!0):(0,a.wy)(((0,a.wg)(),(0,a.j4)(S,{key:0,size:"1.25rem",class:"absolute right-3 text-gray-400 outline-none"},null,512)),[[N,F.tippyOnAllSelected(M.selectedWpp)]]),M.wppTagsMode&&M.selectedWpp.length>0?(0,a.wy)(((0,a.wg)(),(0,a.j4)(O,{key:1,onClick:t[4]||(t[4]=t=>e.$refs.wpp.clear()),size:"1.1rem",class:"absolute right-3.5 bottom-4 text-gray-400 outline-none"},null,512)),[[N,{content:"Bersihkan",placement:"bottom"}]]):(0,a.kq)("",!0)])),_:1},8,["modelValue","onClick","mode","multipleLabel","classes","delay","options"])])]),(0,a._)("div",null,[$,(0,a._)("div",T,[(0,a.Wm)(P,{placeholder:"Pilih sumber daya","no-results-text":"Tidak ditemukan","no-options-text":"Data kosong",modelValue:M.selectedResource,"onUpdate:modelValue":t[8]||(t[8]=e=>M.selectedResource=e),ref:"resource",onClick:F.resourceFocused,mode:M.resourceTagsMode?"tags":"multiple",multipleLabel:F.allResourceSelected,classes:e.$style.multiselect.component(M.resourceFetched,M.resourceTagsMode),onChange:t[9]||(t[9]=e=>F.resourceTagCreated(e)),"create-option":!1,"close-on-select":!1,groups:!0,"filter-results":!0,searchable:!0,"resolve-on-load":!1,"clear-on-select":!1,delay:M.resourceFetched?-1:M.shouldResourceRetrieve?0:-1,options:F.getResources},{tag:(0,a.w5)((({option:t,handleTagRemove:s})=>[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(e.$style.multiselect.tagWrapper)},[(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagLabel)},(0,o.zw)(e.$normalizeTag(t.label)),3),(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagRemove),onMousedown:(0,l.iM)((e=>s(t,e)),["prevent"])},[(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagRemoveIcon)},null,2)],42,_)],2)),[[N,e.$tagTooltip(t.label)]])])),clear:(0,a.w5)((()=>[M.resourceTagsMode?(0,a.kq)("",!0):(0,a.wy)(((0,a.wg)(),(0,a.j4)(S,{key:0,size:"1.25rem",class:"absolute right-3 text-gray-400 outline-none"},null,512)),[[N,F.tippyOnAllSelected(M.selectedResource)]]),M.resourceTagsMode&&M.selectedResource.length>0?(0,a.wy)(((0,a.wg)(),(0,a.j4)(O,{key:1,onClick:t[7]||(t[7]=t=>e.$refs.resource.clear()),size:"1.1rem",class:"absolute right-3.5 bottom-4 text-gray-400 outline-none"},null,512)),[[N,{content:"Bersihkan",placement:"bottom"}]]):(0,a.kq)("",!0)])),_:1},8,["modelValue","onClick","mode","multipleLabel","classes","delay","options"])])]),(0,a._)("div",null,[v,(0,a._)("div",D,[(0,a.Wm)(P,{placeholder:"Pilih lokasi","no-results-text":"Tidak ditemukan","no-options-text":"Data kosong",modelValue:M.selectedLocation,"onUpdate:modelValue":t[11]||(t[11]=e=>M.selectedLocation=e),ref:"location",onClick:F.locationFocused,mode:M.locationTagsMode?"tags":"multiple",multipleLabel:F.allLocationSelected,classes:e.$style.multiselect.component(M.locationFetched,M.locationTagsMode),onChange:t[12]||(t[12]=e=>F.locationTagCreated(e)),"create-option":!1,"close-on-select":!1,groups:!0,"filter-results":!0,searchable:!0,"resolve-on-load":!1,"clear-on-select":!1,delay:M.locationFetched?-1:M.shouldLocationRetrieve?0:-1,options:F.getLocations},{tag:(0,a.w5)((({option:t,handleTagRemove:s})=>[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(e.$style.multiselect.tagWrapper)},[(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagLabel)},(0,o.zw)(e.$normalizeTag(t.label)),3),(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagRemove),onMousedown:(0,l.iM)((e=>s(t,e)),["prevent"])},[(0,a._)("span",{class:(0,o.C_)(e.$style.multiselect.tagRemoveIcon)},null,2)],42,L)],2)),[[N,e.$tagTooltip(t.label)]])])),clear:(0,a.w5)((()=>[M.locationTagsMode?(0,a.kq)("",!0):(0,a.wy)(((0,a.wg)(),(0,a.j4)(S,{key:0,size:"1.25rem",class:"absolute right-3 text-gray-400 outline-none"},null,512)),[[N,F.tippyOnAllSelected(M.selectedLocation)]]),M.locationTagsMode&&M.selectedLocation.length>0?(0,a.wy)(((0,a.wg)(),(0,a.j4)(O,{key:1,onClick:t[10]||(t[10]=t=>e.$refs.location.clear()),size:"1.1rem",class:"absolute right-3.5 bottom-4 text-gray-400 outline-none"},null,512)),[[N,{content:"Bersihkan",placement:"bottom"}]]):(0,a.kq)("",!0)])),_:1},8,["modelValue","onClick","mode","multipleLabel","classes","delay","options"])])]),(0,a._)("div",C,[(0,a._)("div",{class:(0,o.C_)(M.graphicImageName?"flex w-full pt-2.5 space-x-3":"flex w-full pt-2.5 space-x-3 mb-20")},[(0,a._)("button",{onClick:t[13]||(t[13]=(...e)=>F.generate&&F.generate(...e)),class:"w-full flex flex-row px-4 py-2.5 text-left text-xs font-medium text-white items-center bg-sky-600 rounded-lg hover:bg-sky-700 border-2 border-solid focus:border-sky-400"},[(0,a.Wm)(V,{size:"1.25rem",class:"text-gray-200"}),I]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("button",{onClick:t[14]||(t[14]=(...e)=>F.resetAll&&F.resetAll(...e)),class:"hover:text-gray-100 flex flex-col items-center w-12 py-2.5 py-3 text-xs font-medium text-white bg-gray-200 rounded-lg hover:bg-gray-300 border-gray-300 border-2 border-solid focus:border-sky-400"},[(0,a.Wm)(z,{size:"1.25rem",class:"text-gray-400"})])),[[N,{content:"Atur Ulang",placeholder:"bottom"}]])],2),M.graphicImageName?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[15]||(t[15]=(...e)=>F.insertImage&&F.insertImage(...e)),class:"text-left mb-20 mt-3.5 w-full border-dashed border-2 border-gray-200 px-4 py-2.5 text-xs font-medium focus:border-solid focus:border-sky-500 flex flex-row items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"},[(0,a.Wm)(G,{size:"1.25rem",class:"text-gray-400"}),E])):(0,a.kq)("",!0)])])])])],512)}var F=s(3752),A=s.n(F),W=s(9810),U=s(4870),S=s(3045),O=s(529),P=s(4170),V=s(9122),z=s(4635),G=s(8176),N=s(4926),Y=s(9726),Z={name:"Lpue",inject:["insertGraphicImage"],components:{Loading:A(),Multiselect:W.Z,DatePicker:S.Mt,UilFileRedoAlt:P.Z,UilFileInfoAlt:V.Z,UilChartLine:z.Z,UilDocumentLayoutLeft:G.Z,UilPicture:N.Z,UilTrashAlt:Y.Z},directives:{},mounted(){this.$store.commit("setLoading",!1),this.scrollToTop()},unmounted(){this.graphicImageName&&this.axios.delete(`${this.$RED.HOST}/helpers/remove/${this.graphicImageName}`).then((()=>{})).catch((()=>{}))},data(){return{graphicImageName:"",tryingAt:0,loading:!1,canceled:!1,insertingImage:!1,lengthMask:O.lengthMasker,weightMask:O.weightMasker,selectedDateRange:this.resetRangeDate(),dateRangeOpened:!1,dateRangeDayClicked:0,dateRangeMasks:{title:"MMMM YYYY",input:"DD MMMM YYYY"},dateRangeConfig:{type:"string",mask:"YYYY-MM-DD"},selectedWpp:[],shouldWppRetrieve:!0,wppFetched:!1,wppTotal:0,wppTagsMode:!0,selectedResource:[],shouldResourceRetrieve:!1,resourceFetched:!1,resourceTotal:0,resourceTagsMode:!0,selectedLocation:[],shouldLocationRetrieve:!1,locationFetched:!1,locationTotal:0,locationTagsMode:!0}},methods:{formatDateRange:function(e){return e.start&&e.start?`${e.start} - ${e.end}`:""},resetRangeDate:function(){return{start:null,end:null}},onDateRangeOpened:function(){this.dateRangeOpened=!0,this.dateRangeDayClicked=0},onDateRangeChanged:function(){this.dateRangeDayClicked++,this.dateRangeDayClicked%2===0&&this.resetWpp()},scrollToTop(){this.$refs.toTop.focus()},resetAll:function(){this.graphicImageName="",this.selectedDateRange=(0,U.iH)(this.resetRangeDate()),this.resetWpp(),this.scrollToTop()},wppValue(){const e=(0,U.IU)(this.selectedWpp);return e.length>0&&e.length===this.wppTotal?[this.$RED.API_FOR_ALL_SELECTED]:e},allWppSelected:function(){return`${this.$RED.ALL_WPP}&nbsp;&nbsp;(${this.wppTotal})`},wppTagCreated:function(e){this.wppTagsMode=!(this.wppTotal>1&&e.length===this.wppTotal),this.onWppChanged()},resetWpp:function(){this.shouldWppRetrieve=!0,this.wppFetched=!1,(0,U.IU)(this.selectedWpp).length>0&&(this.$refs.wpp.clear(),this.$refs.wpp.clearSearch()),this.wppTotal=0,this.resetResource()},wppFocused:function(){!this.wppFetched&&this.shouldWppRetrieve&&this.$refs.wpp.refreshOptions()},getWpp:async function(){const{data:e}=await this.axios.post(`${this.$RED.HOST}/${this.$RED.LPUE}/wpp`,this.formForAsync());return this.wppTotal=e&&e.length>0?e[0]["options"].length:0,this.wppFetched=!0,e},onWppChanged:function(){this.resetResource()},resourceValue(){const e=(0,U.IU)(this.selectedResource);return e.length>0&&e.length===this.resourceTotal?[this.$RED.API_FOR_ALL_SELECTED]:e},allResourceSelected:function(){return`${this.$RED.ALL_RESOURCE}&nbsp;&nbsp;(${this.resourceTotal})`},resourceTagCreated:function(e){this.resourceTagsMode=!(this.resourceTotal>1&&e.length===this.resourceTotal),this.onResourceChanged()},resetResource:function(){this.shouldResourceRetrieve=!0,this.resourceFetched=!1,(0,U.IU)(this.selectedResource).length>0&&this.$refs.resource.clear(),this.resourceTotal=0,this.resetLocation()},resourceFocused:function(){!this.resourceFetched&&this.shouldResourceRetrieve&&this.$refs.resource.refreshOptions()},getResources:async function(){const{data:e}=await this.axios.post(`${this.$RED.HOST}/${this.$RED.LPUE}/resources`,this.formForAsync());return this.resourceTotal=e.length>0?e[0]["options"].length:0,this.resourceFetched=!0,e},onResourceChanged:function(){this.resetLocation()},locationValue(){const e=(0,U.IU)(this.selectedLocation);return e.length>0&&e.length===this.locationTotal?[this.$RED.API_FOR_ALL_SELECTED]:e},allLocationSelected:function(){return`${this.$RED.ALL_LOCATION}&nbsp;&nbsp;(${this.locationTotal})`},locationTagCreated:function(e){this.locationTagsMode=!(this.locationTotal>1&&e.length===this.locationTotal),this.onLocationChanged()},resetLocation:function(){this.shouldLocationRetrieve=!0,this.locationFetched=!1,(0,U.IU)(this.selectedLocation).length>0&&this.$refs.location.clear(),this.locationTotal=0},locationFocused:function(){!this.locationFetched&&this.shouldLocationRetrieve&&this.$refs.location.refreshOptions()},getLocations:async function(){const{data:e}=await this.axios.post(`${this.$RED.HOST}/${this.$RED.LPUE}/locations`,this.formForAsync());return this.locationTotal=e.length>0?e[0]["options"].length:0,this.locationFetched=!0,e},onLocationChanged:function(){},tippyOnAllSelected:function(e){const t=(0,U.IU)(e),s=t.reduce(((e,s,a)=>`${e} ${s}${a<t.length-1?" <br>":""}`),"");return{content:s,placement:"left"}},formForAsync:function(){const{start:e,end:t,wpp:s,resource:a,location:o}=this.form();return{start:e,end:t,wpp:0===s.length?this.$RED.API_FOR_ZERO_SELECTED:s,resource:0===a.length?this.$RED.API_FOR_ZERO_SELECTED:a,location:0===o.length?this.$RED.API_FOR_ZERO_SELECTED:o}},form:function(){const{start:e,end:t}=this.selectedDateRange?(0,U.IU)(this.selectedDateRange):this.resetRangeDate();return{...this.$store.state.me,start:e,end:t,wpp:this.wppValue(),resource:this.resourceValue(),location:this.locationValue()}},pass:function(e){const{start:t,end:s,wpp:a,resource:o,location:l}=e;return null===t||null===s?"Inputkan Rentang tanggal":!a||a.length<=0?(this.wppFocused(),this.$refs.wpp.$el.focus(),"Inputkan WPP"):!o||o.length<=0?(this.resourceFocused(),this.$refs.resource.$el.focus(),"Inputkan Sumber Daya"):!l||l.length<=0?(this.locationFocused(),this.$refs.location.$el.focus(),"Inputkan Lokasi"):void 0},insertImage:function(e=!1){e&&(this.insertingImage=!0,this.loading=!0),this.insertGraphicImage(this.graphicImageName,(()=>{this.successfullyInsertedImage()}),(()=>{this.failedToInsertImage()}))},successfullyGenerated({status:e,graphicImageName:t},s){s!==this.tryingAt||this.canceled||("SUCCESS"===e?(this.graphicImageName=t||"",this.insertingImage=!0,this.insertImage()):this.failedToGenerate())},generate:async function(){const e=this.form(),t=this.pass(e);if(t)return void this.$error(t);this.tryingAt++;const s=this.tryingAt;this.graphicImageName="",this.loading=!0,this.canceled=!1,this.insertingImage=!1,this.$store.commit("setSearchText",""),this.$store.commit("setLoading",!0),this.axios.post(`${this.$RED.HOST}/${this.$RED.LPUE}`,e).then((({data:e})=>{this.successfullyGenerated(e,s)})).catch((()=>{s===this.tryingAt&&this.failedToGenerate()}))},cancel:function(){const{email:e}=this.$store.state.me;e&&this.axios.delete(`${this.$RED.HOST}/helpers/kill/${e}`).then((()=>{})).catch((()=>{})),this.loading=!1,this.canceled=!0,this.$store.commit("setLoading",!1),this.$error("Dibatalkan oleh pengguna")},successfullyInsertedImage:function(){this.insertingImage=!1,this.loading=!1,this.$store.commit("setLoading",!1),this.$success("Grafik berhasil disisipkan")},failedToInsertImage:function(){this.insertingImage=!1,this.loading=!1,this.$store.commit("setLoading",!1),this.$error("Grafik gagal disisipkan")},failedToGenerate:function(){this.graphicImageName="",this.loading=!1,this.$store.commit("setLoading",!1),this.canceled||this.$error("Grafik tidak berhasil digenerate.")}}},j=s(89);const q=(0,j.Z)(Z,[["render",M],["__scopeId","data-v-16e33e8e"]]);var H=q}}]);
//# sourceMappingURL=257.750f4d59.js.map