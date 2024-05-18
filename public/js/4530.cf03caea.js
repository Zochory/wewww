"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[4530],{4530:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var i=t(6252);const s={class:"flex items-center"},d={key:2,class:"error-message mt-2"},l={key:3,class:"error-message mt-2"},r={key:4,class:"error-message mt-2"};function n(e,a,t,n,o,u){const m=(0,i.up)("wwEditorInputTextSelect"),p=(0,i.up)("wwEditorIcon"),c=(0,i.up)("wwEditorFormRow"),h=(0,i.up)("wwEditorInputRadio"),b=(0,i.up)("wwEditorInput"),f=(0,i.up)("wwLoader");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c,{label:"Table",required:""},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i.Wm)(m,{class:"w-100",placeholder:"Select a table",required:"","model-value":u.database.table,options:u.tablesOptions,"onUpdate:modelValue":a[0]||(a[0]=e=>u.setProp("table",e))},null,8,["model-value","options"]),(0,i._)("button",{type:"button",class:"ww-editor-button -primary -small -icon ml-2",onClick:a[1]||(a[1]=(...e)=>u.fetchTables&&u.fetchTables(...e))},[(0,i.Wm)(p,{name:"refresh",medium:""})])])])),_:1}),u.database.table?((0,i.wg)(),(0,i.j4)(c,{key:0,label:"Fields",required:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"mb-2","model-value":u.database.fieldsMode,choices:o.fieldsModeChoices,small:"","onUpdate:modelValue":a[2]||(a[2]=e=>u.setProp("fieldsMode",e))},null,8,["model-value","choices"]),"guided"===u.database.fieldsMode?((0,i.wg)(),(0,i.j4)(b,{key:0,type:"select",multiple:"",options:u.tablePropertiesOptions,"model-value":u.database.dataFields,placeholder:"All fields","onUpdate:modelValue":a[3]||(a[3]=e=>u.setProp("dataFields",e))},null,8,["options","model-value"])):((0,i.wg)(),(0,i.j4)(b,{key:1,type:"string","model-value":u.database.dataFieldsAdvanced,placeholder:"id,\nsupplier:supplier_id ( name ),\npurchaser:purchaser_id ( name )","onUpdate:modelValue":a[4]||(a[4]=e=>u.setProp("dataFieldsAdvanced",e))},null,8,["model-value"])),u.isPrimaryRequired?((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(p,{name:"warning",small:""}),(0,i.Uk)(" You must include all primary properties when using realtime table ")])):(0,i.kq)("",!0),u.isAdvancedFieldsInvalid?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(p,{name:"warning",small:""}),(0,i.Uk)(" You have an invalid comma at the end of your query ")])):u.isFieldsIncorrect?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(p,{name:"warning",small:""}),(0,i.Uk)(" You have invalid fields in your advanced selection ")])):(0,i.kq)("",!0)])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(f,{loading:o.isLoading},null,8,["loading"])],64)}var o={props:{plugin:{type:Object,required:!0},collection:{type:Object,required:!0},config:{type:Object,required:!0}},emits:["update:config"],data(){return{isLoading:!1,definitions:{},fieldsModeChoices:[{label:"Guided",value:"guided",default:!0},{label:"Advanced",value:"advanced"}]}},computed:{database(){return{table:null,fieldsMode:"guided",dataFields:[],dataFieldsAdvanced:"",...this.config}},tablesOptions(){return Object.keys(this.definitions).map((e=>({label:e,value:e})))},primaryProperties(){return this.definitions[this.database.table]?Object.keys(this.definitions[this.database.table].properties).filter((e=>(this.definitions[this.database.table].properties[e].description||"").includes("<pk/>"))).map((e=>({name:e}))):[]},tableProperties(){return this.definitions[this.database.table]?Object.keys(this.definitions[this.database.table].properties).map((e=>({name:e}))):[]},tablePropertiesOptions(){return this.tableProperties.map((e=>({label:e.name+(this.primaryProperties.some((a=>a.name===e.name))?"#primary":""),value:e.name})))},isRealtime(){return this.plugin.settings.publicData.realtimeTables[this.database.table]},selectedFields(){return"guided"===this.database.fieldsMode?this.database.dataFields:this.database.dataFieldsAdvanced.split(",").map((e=>{const a=e.replace("\n","").trim();return a.includes(":")?a.match(/:[^\(]+/g)[0].split(":")[1].trim():a}))},isFieldsIncorrect(){return this.tableProperties.length&&this.selectedFields.some((e=>!this.tableProperties.some((a=>a.name===e))))},isAdvancedFieldsInvalid(){return"advanced"===this.database.fieldsMode&&this.database.dataFieldsAdvanced.trim().endsWith(",")},isPrimaryRequired(){return!("guided"===this.database.fieldsMode&&!this.selectedFields.length)&&(this.isRealtime&&this.primaryProperties.some((e=>!this.selectedFields.some((a=>a===e.name)))))}},watch:{"database.table"(){this.refreshSchema()},isFieldsIncorrect(e){e&&"guided"===this.database.fieldsMode&&this.refreshSchema()}},mounted(){this.definitions=this.plugin?.doc?.definitions||{}},methods:{async fetchTables(){try{this.isLoading=!0,await this.plugin.fetchDoc(),this.definitions=this.plugin?.doc?.definitions||{},this.refreshSchema()}catch(e){wwLib.wwLog.error(e)}finally{this.isLoading=!1}},refreshSchema(){const e=this.primaryProperties.map((e=>e.name)),a=this.database.dataFields.filter((e=>this.tableProperties.some((a=>a.name===e))));this.$emit("update:config",{...this.database,primaryData:e,dataFields:a})},setProp(e,a){this.$emit("update:config",{...this.database,[e]:a})}}},u=t(3744);const m=(0,u.Z)(o,[["render",n],["__scopeId","data-v-02f3298c"]]);var p=m}}]);