"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[2177],{2177:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(6252),s=i(3577);const l={class:"mb-3 label-sm text-blue-500 flex items-center"},n=(0,a._)("a",{class:"ww-editor-link ml-2",href:"https://supabase.com/docs/guides/api#realtime-api-1",target:"_blank"}," Find it here ",-1),o={class:"label-2 ml-2"};function r(e,t,i,r,u,b){const d=(0,a.up)("wwEditorIcon"),c=(0,a.up)("wwEditorInputSwitch"),m=(0,a.up)("wwEditorFormRow"),p=(0,a.up)("wwLoader");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[(0,a.Wm)(d,{class:"mr-1",name:"information-circle",small:""}),(0,a.Uk)(" You must enable realtime on your tables both in WeWeb and in Supabase in order to use this feature. ")]),(0,a.Wm)(m,{label:"Enable realtime table"},{"append-label":(0,a.w5)((()=>[n,(0,a._)("button",{type:"button",class:"ww-editor-button -primary -small ml-auto",onClick:t[0]||(t[0]=(...e)=>b.fetchTables&&b.fetchTables(...e))},"refresh")])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.tablesOptions,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.value,class:"flex items-center mb-2"},[(0,a.Wm)(c,{modelValue:b.realtimeTables[e.value],"onUpdate:modelValue":t=>b.updateReatimeTable(e.value,t),small:""},null,8,["modelValue","onUpdate:modelValue"]),(0,a._)("div",o,(0,s.zw)(e.label),1)])))),128))])),_:1}),(0,a.Wm)(p,{loading:u.isLoading},null,8,["loading"])],64)}var u={props:{plugin:{type:Object,required:!0},settings:{type:Object,required:!0}},emits:["update:settings"],data(){return{isLoading:!1,definitions:{}}},computed:{tablesOptions(){return Object.keys(this.definitions).map((e=>({label:e,value:e})))},realtimeTables(){return this.settings.publicData?.realtimeTables||{}}},mounted(){this.definitions=this.plugin?.doc?.definitions||{},this.settings.publicData?.realtimeTables||this.changeRealtimeTables({})},methods:{async fetchTables(){try{this.isLoading=!0,await this.plugin.fetchDoc(),this.definitions=this.plugin?.doc?.definitions||{}}catch(e){wwLib.wwLog.error(e)}finally{this.isLoading=!1}},updateReatimeTable(e,t){const i={...this.realtimeTables};i[e]=t;for(const a in i)this.tablesOptions.find((e=>e.value===a))||delete i[a];this.changeRealtimeTables(i)},changeRealtimeTables(e){this.$emit("update:settings",{...this.settings,publicData:{...this.settings.publicData,realtimeTables:e}}),this.subscribeTables(e)},subscribeTables(e){this.settings.publicData.realtimeTables&&this.plugin.subscribeTables(e)}}},b=i(3744);const d=(0,b.Z)(u,[["render",r]]);var c=d}}]);