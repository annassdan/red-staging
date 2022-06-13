"use strict";(self["webpackChunkred_vue3"]=self["webpackChunkred_vue3"]||[]).push([[30],{4030:function(e,t,s){s.r(t),s.d(t,{default:function(){return se}});var l=s(3396),a=s(7139),o=s(9242);const i=e=>((0,l.dD)("data-v-7ad4994f"),e=e(),(0,l.Cn)(),e),n={ref:"sectioncontainer",class:"flex-1 mt-20 pt-1 pb-5 mb-10 bg-gray-100 h-full"},c={key:1,style:{"z-index":"10000"},class:"text-xs text-red-500 absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},r={class:"max-w-screen-xl mx-auto"},p={ref:"toTop",autocomplete:"off",class:"h-0 -mt-10"},d={class:"max-w-lg mx-auto"},u={class:"pl-6 pr-4 mb-0 space-y-5 rounded-lg"},h={class:"flex-col"},g={class:"flex flex-row text-gray-700 item-center justify-between pb-2"},m={class:"flex flex-row text-gray-700 item-center"},f=i((()=>(0,l._)("span",{class:"text-base font-medium pl-1 pb-4 font-semibold text-sky-700"},"Parameter Pembuatan Grafik",-1))),y=i((()=>(0,l._)("label",{for:"date-range",class:"text-xs font-medium pl-1 text-gray-600"},"Rentang Tanggal",-1))),R={class:"relative mt-1"},T=["value"],w=i((()=>(0,l._)("label",{for:"wpp",class:"text-xs font-medium pl-1 text-gray-600"},"WPP",-1))),x={class:"relative mt-1"},_=["onMousedown"],k=i((()=>(0,l._)("label",{for:"resource",class:"text-xs font-medium pl-1 text-gray-600"},"Sumber Daya",-1))),b={class:"relative mt-1"},$=["onMousedown"],v=i((()=>(0,l._)("label",{for:"location",class:"text-xs font-medium pl-1 text-gray-600"},"Lokasi Pendaratan/Sampling",-1))),D={class:"relative mt-1"},C=["onMousedown"],L=i((()=>(0,l._)("label",{for:"spesies",class:"text-xs font-medium pl-1 text-gray-600"},"Spesies",-1))),M={class:"relative mt-1"},I=["onMousedown"],S={class:"flex space-x-3"},A=i((()=>(0,l._)("label",{for:"min-length",class:"text-xs font-medium text-gray-600"},"Panjang Minimal",-1))),E={class:"relative mt-1"},F=i((()=>(0,l._)("label",{for:"max-length",class:"text-xs font-medium text-gray-600"},"Panjang Maksimal",-1))),U={class:"relative mt-1"},W={class:"flex flex-col w-full pt-2"},O=i((()=>(0,l._)("span",{class:"text-gray-200 ml-2"},"Hasilkan Grafik",-1))),P=i((()=>(0,l._)("span",{class:"text-gray-500 ml-2"},"Sisipkan Ulang Gambar",-1)));function N(e,t,s,i,N,V){const z=(0,l.up)("loading"),K=(0,l.up)("UilDocumentLayoutLeft"),G=(0,l.up)("DatePicker"),j=(0,l.up)("UilFileInfoAlt"),Y=(0,l.up)("UilTrashAlt"),Z=(0,l.up)("Multiselect"),q=(0,l.up)("UilChartLine"),H=(0,l.up)("UilFileRedoAlt"),B=(0,l.up)("UilPicture"),Q=(0,l.Q2)("tippy"),J=(0,l.Q2)("maska");return(0,l.wg)(),(0,l.iD)("div",n,[N.loading&&!N.insertingImage?((0,l.wg)(),(0,l.iD)("button",{key:0,style:{"z-index":"10000"},onClick:t[0]||(t[0]=(...e)=>V.cancel&&V.cancel(...e)),class:"absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 text-xs mb-12 font-medium text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring"}," Batalkan ")):(0,l.kq)("",!0),N.insertingImage?((0,l.wg)(),(0,l.iD)("span",c," Menyisipkan gambar ... ")):(0,l.kq)("",!0),(0,l.Wm)(z,{active:N.loading,"onUpdate:active":t[1]||(t[1]=e=>N.loading=e),color:"#ff2020",width:25,height:25,opacity:.9,"is-full-page":!0},null,8,["active","opacity"]),(0,l._)("div",r,[(0,l._)("input",p,null,512),(0,l._)("div",d,[(0,l._)("div",u,[(0,l._)("div",h,[(0,l._)("div",g,[(0,l._)("div",m,[f,(0,l.Wm)(K,{size:"1.25rem",class:"text-sky-700 outline-none ml-3"})])]),y,(0,l._)("div",R,[(0,l.Wm)(G,{modelValue:N.selectedDateRange,"onUpdate:modelValue":t[3]||(t[3]=e=>N.selectedDateRange=e),popover:{visibility:"click"},"max-date":new Date,onDayclick:V.onDateRangeChanged,"model-config":N.dateRangeConfig,locale:"id-ID",masks:N.dateRangeMasks,"is-range":""},{default:(0,l.w5)((({inputValue:s,inputEvents:a})=>[(0,l._)("input",(0,l.dG)({placeholder:"Masukan rentang tanggal",class:[e.$style.form.input,"bg-white w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm outline-sky-400 focus-within:outline-sky-400"],value:V.formatDateRange(s)},(0,l.mx)(a.end),{onFocus:t[2]||(t[2]=(...e)=>V.onDateRangeOpened&&V.onDateRangeOpened(...e))}),null,16,T)])),_:1},8,["modelValue","max-date","onDayclick","model-config","masks"])])]),(0,l._)("div",null,[w,(0,l._)("div",x,[(0,l.Wm)(Z,{placeholder:"Pilih wpp","no-results-text":"Tidak ditemukan","no-options-text":"Data kosong",modelValue:N.selectedWpp,"onUpdate:modelValue":t[5]||(t[5]=e=>N.selectedWpp=e),ref:"wpp",onClick:V.wppFocused,mode:N.wppTagsMode?"tags":"multiple",multipleLabel:V.allWppSelected,classes:e.$style.multiselect.component(N.wppFetched,N.wppTagsMode),onChange:t[6]||(t[6]=e=>V.wppTagCreated(e)),"create-option":!1,"close-on-select":!1,groups:!0,"filter-results":!0,searchable:!0,"resolve-on-load":!1,"clear-on-select":!1,delay:N.wppFetched?-1:N.shouldWppRetrieve?0:-1,options:V.getWpp},{tag:(0,l.w5)((({option:t,handleTagRemove:s})=>[(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(e.$style.multiselect.tagWrapper)},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagLabel)},(0,a.zw)(e.$normalizeTag(t.label)),3),(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemove),onMousedown:(0,o.iM)((e=>s(t,e)),["prevent"])},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemoveIcon)},null,2)],42,_)],2)),[[Q,e.$tagTooltip(t.label)]])])),clear:(0,l.w5)((()=>[N.wppTagsMode?(0,l.kq)("",!0):(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{key:0,size:"1.25rem",class:"absolute right-3 text-gray-400 outline-none"},null,512)),[[Q,V.tippyOnAllSelected(N.selectedWpp)]]),N.wppTagsMode&&N.selectedWpp.length>0?(0,l.wy)(((0,l.wg)(),(0,l.j4)(Y,{key:1,onClick:t[4]||(t[4]=t=>e.$refs.wpp.clear()),size:"1.1rem",class:"absolute right-3.5 bottom-4 text-gray-400 outline-none"},null,512)),[[Q,{content:"Bersihkan",placement:"bottom"}]]):(0,l.kq)("",!0)])),_:1},8,["modelValue","onClick","mode","multipleLabel","classes","delay","options"])])]),(0,l._)("div",null,[k,(0,l._)("div",b,[(0,l.Wm)(Z,{placeholder:"Pilih sumber daya","no-results-text":"Tidak ditemukan","no-options-text":"Data kosong",modelValue:N.selectedResource,"onUpdate:modelValue":t[8]||(t[8]=e=>N.selectedResource=e),ref:"resource",onClick:V.resourceFocused,mode:N.resourceTagsMode?"tags":"multiple",multipleLabel:V.allResourceSelected,classes:e.$style.multiselect.component(N.resourceFetched,N.resourceTagsMode),onChange:t[9]||(t[9]=e=>V.resourceTagCreated(e)),"create-option":!1,"close-on-select":!1,groups:!0,"filter-results":!0,searchable:!0,"resolve-on-load":!1,"clear-on-select":!1,delay:N.resourceFetched?-1:N.shouldResourceRetrieve?0:-1,options:V.getResources},{tag:(0,l.w5)((({option:t,handleTagRemove:s})=>[(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(e.$style.multiselect.tagWrapper)},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagLabel)},(0,a.zw)(e.$normalizeTag(t.label)),3),(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemove),onMousedown:(0,o.iM)((e=>s(t,e)),["prevent"])},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemoveIcon)},null,2)],42,$)],2)),[[Q,e.$tagTooltip(t.label)]])])),clear:(0,l.w5)((()=>[N.resourceTagsMode?(0,l.kq)("",!0):(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{key:0,size:"1.25rem",class:"absolute right-3 text-gray-400 outline-none"},null,512)),[[Q,V.tippyOnAllSelected(N.selectedResource)]]),N.resourceTagsMode&&N.selectedResource.length>0?(0,l.wy)(((0,l.wg)(),(0,l.j4)(Y,{key:1,onClick:t[7]||(t[7]=t=>e.$refs.resource.clear()),size:"1.1rem",class:"absolute right-3.5 bottom-4 text-gray-400 outline-none"},null,512)),[[Q,{content:"Bersihkan",placement:"bottom"}]]):(0,l.kq)("",!0)])),_:1},8,["modelValue","onClick","mode","multipleLabel","classes","delay","options"])])]),(0,l._)("div",null,[v,(0,l._)("div",D,[(0,l.Wm)(Z,{placeholder:"Pilih lokasi","no-results-text":"Tidak ditemukan","no-options-text":"Data kosong",modelValue:N.selectedLocation,"onUpdate:modelValue":t[11]||(t[11]=e=>N.selectedLocation=e),ref:"location",onClick:V.locationFocused,mode:N.locationTagsMode?"tags":"multiple",multipleLabel:V.allLocationSelected,classes:e.$style.multiselect.component(N.locationFetched,N.locationTagsMode),onChange:t[12]||(t[12]=e=>V.locationTagCreated(e)),"create-option":!1,"close-on-select":!1,groups:!0,"filter-results":!0,searchable:!0,"resolve-on-load":!1,"clear-on-select":!1,delay:N.locationFetched?-1:N.shouldLocationRetrieve?0:-1,options:V.getLocations},{tag:(0,l.w5)((({option:t,handleTagRemove:s})=>[(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(e.$style.multiselect.tagWrapper)},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagLabel)},(0,a.zw)(e.$normalizeTag(t.label)),3),(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemove),onMousedown:(0,o.iM)((e=>s(t,e)),["prevent"])},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemoveIcon)},null,2)],42,C)],2)),[[Q,e.$tagTooltip(t.label)]])])),clear:(0,l.w5)((()=>[N.locationTagsMode?(0,l.kq)("",!0):(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{key:0,size:"1.25rem",class:"absolute right-3 text-gray-400 outline-none"},null,512)),[[Q,V.tippyOnAllSelected(N.selectedLocation)]]),N.locationTagsMode&&N.selectedLocation.length>0?(0,l.wy)(((0,l.wg)(),(0,l.j4)(Y,{key:1,onClick:t[10]||(t[10]=t=>e.$refs.location.clear()),size:"1.1rem",class:"absolute right-3.5 bottom-4 text-gray-400 outline-none"},null,512)),[[Q,{content:"Bersihkan",placement:"bottom"}]]):(0,l.kq)("",!0)])),_:1},8,["modelValue","onClick","mode","multipleLabel","classes","delay","options"])])]),(0,l._)("div",null,[L,(0,l._)("div",M,[(0,l.Wm)(Z,{placeholder:"Pilih spesies","no-results-text":"Tidak ditemukan","no-options-text":"Data kosong",modelValue:N.selectedSpecies,"onUpdate:modelValue":t[14]||(t[14]=e=>N.selectedSpecies=e),ref:"species",onClick:V.speciesFocused,mode:N.speciesTagsMode?"tags":"multiple",multipleLabel:V.allSpeciesSelected,classes:e.$style.multiselect.component(N.speciesFetched,N.speciesTagsMode),onChange:t[15]||(t[15]=e=>V.speciesTagCreated(e)),"create-option":!1,"close-on-select":!1,groups:!0,"filter-results":!0,searchable:!0,"resolve-on-load":!1,"clear-on-select":!1,delay:N.speciesFetched?-1:N.shouldSpeciesRetrieve?0:-1,options:V.getSpecies},{tag:(0,l.w5)((({option:t,handleTagRemove:s})=>[(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(e.$style.multiselect.tagWrapper)},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagLabel)},(0,a.zw)(e.$normalizeTag(t.label)),3),(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemove),onMousedown:(0,o.iM)((e=>s(t,e)),["prevent"])},[(0,l._)("span",{class:(0,a.C_)(e.$style.multiselect.tagRemoveIcon)},null,2)],42,I)],2)),[[Q,e.$tagTooltip(t.label)]])])),clear:(0,l.w5)((()=>[N.speciesTagsMode?(0,l.kq)("",!0):(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{key:0,size:"1.25rem",class:"absolute right-3 text-gray-400 outline-none"},null,512)),[[Q,V.tippyOnAllSelected(N.selectedSpecies)]]),N.speciesTagsMode&&N.selectedSpecies.length>0?(0,l.wy)(((0,l.wg)(),(0,l.j4)(Y,{key:1,onClick:t[13]||(t[13]=t=>e.$refs.species.clear()),size:"1.1rem",class:"absolute right-3.5 bottom-4 text-gray-400 outline-none"},null,512)),[[Q,{content:"Bersihkan",placement:"bottom"}]]):(0,l.kq)("",!0)])),_:1},8,["modelValue","onClick","mode","multipleLabel","classes","delay","options"])])]),(0,l._)("div",S,[(0,l._)("div",null,[A,(0,l._)("div",E,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[16]||(t[16]=e=>N.selectedMinLength=e),type:"text",autocomplete:"off",id:"min-length",class:(0,a.C_)([e.$style.form.input,"w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm outline-sky-400"]),placeholder:"Minimal"},null,2),[[o.nr,N.selectedMinLength],[J,N.lengthMask]])])]),(0,l._)("div",null,[F,(0,l._)("div",U,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>N.selectedMaxLength=e),type:"text",autocomplete:"off",id:"max-length",class:(0,a.C_)([e.$style.form.input,"w-full py-3 px-4 text-xs border-gray-200 rounded-lg shadow-sm outline-sky-400"]),placeholder:"Maksimal"},null,2),[[o.nr,N.selectedMaxLength],[J,N.lengthMask]])])])]),(0,l._)("div",W,[(0,l._)("div",{class:(0,a.C_)(N.graphicImageName?"flex w-full pt-2.5 space-x-3":"flex w-full pt-2.5 space-x-3 mb-20")},[(0,l._)("button",{onClick:t[18]||(t[18]=(...e)=>V.generate&&V.generate(...e)),class:"w-full flex flex-row px-4 py-2.5 text-left text-xs font-medium text-white items-center bg-sky-600 rounded-lg hover:bg-sky-700 border-2 border-solid focus:border-sky-400"},[(0,l.Wm)(q,{size:"1.25rem",class:"text-gray-200"}),O]),(0,l.wy)(((0,l.wg)(),(0,l.iD)("button",{onClick:t[19]||(t[19]=(...e)=>V.resetAll&&V.resetAll(...e)),class:"hover:text-gray-100 flex flex-col items-center w-12 py-2.5 py-3 text-xs font-medium text-white bg-gray-200 rounded-lg hover:bg-gray-300 border-gray-300 border-2 border-solid focus:border-sky-400"},[(0,l.Wm)(H,{size:"1.25rem",class:"text-gray-400"})])),[[Q,{content:"Atur Ulang",placeholder:"bottom"}]])],2),N.graphicImageName?((0,l.wg)(),(0,l.iD)("button",{key:0,onClick:t[20]||(t[20]=(...e)=>V.insertImage&&V.insertImage(...e)),class:"text-left mb-20 mt-3.5 w-full border-dashed border-2 border-gray-200 px-4 py-2.5 text-xs font-medium focus:border-solid focus:border-sky-500 flex flex-row items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"},[(0,l.Wm)(B,{size:"1.25rem",class:"text-gray-400"}),P])):(0,l.kq)("",!0)])])])])],512)}var V=s(3752),z=s.n(V),K=s(9810),G=s(4870),j=s(3045),Y=s(529),Z=s(4170),q=s(9122),H=s(4635),B=s(8176),Q=s(4926),J=s(9726),X={name:"StrukturIkanTertangkap",inject:["insertGraphicImage"],components:{Loading:z(),Multiselect:K.Z,DatePicker:j.Mt,UilFileRedoAlt:Z.Z,UilFileInfoAlt:q.Z,UilChartLine:H.Z,UilDocumentLayoutLeft:B.Z,UilPicture:Q.Z,UilTrashAlt:J.Z},directives:{},mounted(){this.scrollToTop()},data(){return{graphicImageName:"",tryingAt:0,loading:!1,canceled:!1,insertingImage:!1,lengthMask:Y.lengthMasker,weightMask:Y.weightMasker,selectedDateRange:this.resetRangeDate(),dateRangeOpened:!1,dateRangeDayClicked:0,dateRangeMasks:{title:"MMMM YYYY",input:"DD MMMM YYYY"},dateRangeConfig:{type:"string",mask:"YYYY-MM-DD"},selectedWpp:[],shouldWppRetrieve:!0,wppFetched:!1,wppTotal:0,wppTagsMode:!0,selectedResource:[],shouldResourceRetrieve:!1,resourceFetched:!1,resourceTotal:0,resourceTagsMode:!0,selectedLocation:[],shouldLocationRetrieve:!1,locationFetched:!1,locationTotal:0,locationTagsMode:!0,selectedSpecies:[],shouldSpeciesRetrieve:!1,speciesFetched:!1,speciesTotal:0,speciesTagsMode:!0,selectedMinLength:"",selectedMaxLength:""}},methods:{formatDateRange:function(e){return e.start&&e.start?`${e.start} - ${e.end}`:""},resetRangeDate:function(){return{start:null,end:null}},onDateRangeOpened:function(){this.dateRangeOpened=!0,this.dateRangeDayClicked=0},onDateRangeChanged:function(){this.dateRangeDayClicked++,this.dateRangeDayClicked%2===0&&this.resetWpp()},scrollToTop(){this.$refs.toTop.focus()},resetAll:function(){this.graphicImageName="",this.selectedDateRange=(0,G.iH)(this.resetRangeDate()),this.resetWpp(),this.selectedMinLength="",this.selectedMaxLength="",this.scrollToTop()},wppValue(){const e=(0,G.IU)(this.selectedWpp);return e.length>0&&e.length===this.wppTotal?[this.$RED.API_FOR_ALL_SELECTED]:e},allWppSelected:function(){return`${this.$RED.ALL_WPP}&nbsp;&nbsp;(${this.wppTotal})`},wppTagCreated:function(e){this.wppTagsMode=!(this.wppTotal>1&&e.length===this.wppTotal),this.onWppChanged()},resetWpp:function(){this.shouldWppRetrieve=!0,this.wppFetched=!1,(0,G.IU)(this.selectedWpp).length>0&&(this.$refs.wpp.clear(),this.$refs.wpp.clearSearch()),this.wppTotal=0,this.resetResource()},wppFocused:function(){!this.wppFetched&&this.shouldWppRetrieve&&this.$refs.wpp.refreshOptions()},getWpp:async function(){const{data:e}=await this.axios.post(`${this.$RED.HOST}/${this.$RED.STRUKTUR_UKURAN_IKAN_TERTANGKAP}/wpp`,this.formForAsync());return this.wppTotal=e&&e.length>0?e[0]["options"].length:0,this.wppFetched=!0,e},onWppChanged:function(){this.resetResource()},resourceValue(){const e=(0,G.IU)(this.selectedResource);return e.length>0&&e.length===this.resourceTotal?[this.$RED.API_FOR_ALL_SELECTED]:e},allResourceSelected:function(){return`${this.$RED.ALL_RESOURCE}&nbsp;&nbsp;(${this.resourceTotal})`},resourceTagCreated:function(e){this.resourceTagsMode=!(this.resourceTotal>1&&e.length===this.resourceTotal),this.onResourceChanged()},resetResource:function(){this.shouldResourceRetrieve=!0,this.resourceFetched=!1,(0,G.IU)(this.selectedResource).length>0&&this.$refs.resource.clear(),this.resourceTotal=0,this.resetLocation()},resourceFocused:function(){!this.resourceFetched&&this.shouldResourceRetrieve&&this.$refs.resource.refreshOptions()},getResources:async function(){const{data:e}=await this.axios.post(`${this.$RED.HOST}/${this.$RED.STRUKTUR_UKURAN_IKAN_TERTANGKAP}/resources`,this.formForAsync());return this.resourceTotal=e.length>0?e[0]["options"].length:0,this.resourceFetched=!0,e},onResourceChanged:function(){this.resetLocation()},locationValue(){const e=(0,G.IU)(this.selectedLocation);return e.length>0&&e.length===this.locationTotal?[this.$RED.API_FOR_ALL_SELECTED]:e},allLocationSelected:function(){return`${this.$RED.ALL_LOCATION}&nbsp;&nbsp;(${this.locationTotal})`},locationTagCreated:function(e){this.locationTagsMode=!(this.locationTotal>1&&e.length===this.locationTotal),this.onLocationChanged()},resetLocation:function(){this.shouldLocationRetrieve=!0,this.locationFetched=!1,(0,G.IU)(this.selectedLocation).length>0&&this.$refs.location.clear(),this.locationTotal=0,this.resetSpecies()},locationFocused:function(){!this.locationFetched&&this.shouldLocationRetrieve&&this.$refs.location.refreshOptions()},getLocations:async function(){const{data:e}=await this.axios.post(`${this.$RED.HOST}/${this.$RED.STRUKTUR_UKURAN_IKAN_TERTANGKAP}/locations`,this.formForAsync());return this.locationTotal=e.length>0?e[0]["options"].length:0,this.locationFetched=!0,e},onLocationChanged:function(){this.resetSpecies()},speciesValue(){const e=(0,G.IU)(this.selectedSpecies);return e.length>0&&e.length===this.speciesTotal?[this.$RED.API_FOR_ALL_SELECTED]:e},allSpeciesSelected:function(){return`${this.$RED.ALL_SPECIES}&nbsp;&nbsp;(${this.speciesTotal})`},speciesTagCreated:function(e){this.speciesTagsMode=!(this.speciesTotal>1&&e.length===this.speciesTotal)},resetSpecies:function(){this.shouldSpeciesRetrieve=!0,this.speciesFetched=!1,(0,G.IU)(this.selectedSpecies).length>0&&this.$refs.species.clear(),this.speciesTotal=0},speciesFocused:function(){!this.speciesFetched&&this.shouldSpeciesRetrieve&&this.$refs.species.refreshOptions()},getSpecies:async function(){const{data:e}=await this.axios.post(`${this.$RED.HOST}/${this.$RED.STRUKTUR_UKURAN_IKAN_TERTANGKAP}/species`,this.formForAsync());return this.speciesTotal=e.length>0?e[0]["options"].length:0,this.speciesFetched=!0,e},tippyOnAllSelected:function(e){const t=(0,G.IU)(e),s=t.reduce(((e,s,l)=>`${e} ${s}${l<t.length-1?" <br>":""}`),"");return{content:s,placement:"left"}},formForAsync:function(){const{start:e,end:t,wpp:s,resource:l,location:a,species:o}=this.form();return{start:e,end:t,wpp:0===s.length?this.$RED.API_FOR_ZERO_SELECTED:s,resource:0===l.length?this.$RED.API_FOR_ZERO_SELECTED:l,location:0===a.length?this.$RED.API_FOR_ZERO_SELECTED:a,species:0===l.length?this.$RED.API_FOR_ZERO_SELECTED:o}},form:function(){const{start:e,end:t}=this.selectedDateRange?(0,G.IU)(this.selectedDateRange):this.resetRangeDate();return{start:e,end:t,wpp:this.wppValue(),resource:this.resourceValue(),location:this.locationValue(),species:this.speciesValue(),minLength:(0,Y.normalizeNumber)(this.selectedMinLength),maxLength:(0,Y.normalizeNumber)(this.selectedMaxLength)||1e6}},pass:function(e){const{start:t,end:s,wpp:l,resource:a,location:o,species:i}=e;return null===t||null===s?"Inputkan Rentang tanggal":!l||l.length<=0?(this.wppFocused(),this.$refs.wpp.$el.focus(),"Inputkan WPP"):!a||a.length<=0?(this.resourceFocused(),this.$refs.resource.$el.focus(),"Inputkan Sumber Daya"):!o||o.length<=0?(this.locationFocused(),this.$refs.location.$el.focus(),"Inputkan Lokasi"):!i||i.length<=0?(this.speciesFocused(),this.$refs.species.$el.focus(),"Inputkan Species"):void 0},insertImage:function(e=!1){e&&(this.insertingImage=!0,this.loading=!0),this.insertGraphicImage(this.graphicImageName,(()=>{this.successfullyInsertedImage()}),(()=>{this.failedToInsertImage()}))},successfullyGenerated({status:e,graphicImageName:t},s){s!==this.tryingAt||this.canceled||("SUCCESS"===e?(this.graphicImageName=t||"",this.insertingImage=!0,this.insertImage()):this.failedToGenerate())},failedToGenerate:function(){this.graphicImageName="",this.loading=!1,this.$error("Grafik tidak berhasil digenerate.")},generate:async function(){const e=this.form(),t=this.pass(e);if(t)return void this.$error(t);this.tryingAt++;const s=this.tryingAt;this.graphicImageName="",this.loading=!0,this.canceled=!1,this.insertingImage=!1,this.$store.commit("setSearchText",""),this.axios.post(`${this.$RED.HOST}/${this.$RED.STRUKTUR_UKURAN_IKAN_TERTANGKAP}`,e).then((({data:e})=>{this.successfullyGenerated(e,s)})).catch((()=>{s===this.tryingAt&&this.failedToGenerate()}))},cancel:function(){this.loading=!1,this.canceled=!0,this.$error("Dibatalkan oleh pengguna")},successfullyInsertedImage:function(){this.insertingImage=!1,this.loading=!1,this.$success("Grafik berhasil disisipkan")},failedToInsertImage:function(){this.insertingImage=!1,this.loading=!1,this.$error("Grafik gagal disisipkan")}}},ee=s(89);const te=(0,ee.Z)(X,[["render",N],["__scopeId","data-v-7ad4994f"]]);var se=te}}]);
//# sourceMappingURL=30.cbb1a7e7.js.map