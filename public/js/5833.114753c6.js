"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[5833],{5833:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var a=s(6252);const i=(0,a._)("a",{class:"ww-editor-link ml-2",href:"https://supabase.com/dashboard/project/_/settings/api",target:"_blank"}," Find it here ",-1);function l(t,e,s,l,u,p){const n=(0,a.up)("wwEditorInputRow"),c=(0,a.up)("wwEditorFormRow");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{required:"",label:"Project URL"},{"append-label":(0,a.w5)((()=>[i])),default:(0,a.w5)((()=>[(0,a.Wm)(n,{type:"query",placeholder:"https://your-project.supabase.co","model-value":s.settings.publicData.projectUrl,"onUpdate:modelValue":p.changeProjectUrl},null,8,["model-value","onUpdate:modelValue"])])),_:1}),(0,a.Wm)(n,{label:"Public API key",required:"",type:"query",placeholder:"ey********","model-value":s.settings.publicData.apiKey,"onUpdate:modelValue":p.changeApiKey},null,8,["model-value","onUpdate:modelValue"])],64)}var u={props:{plugin:{type:Object,required:!0},settings:{type:Object,required:!0}},emits:["update:settings"],mounted(){const t=this.settings.publicData.projectUrl&&this.settings.publicData.apiKey,e=wwLib.wwPlugins.supabaseAuth&&wwLib.wwPlugins.supabaseAuth.settings.publicData.projectUrl&&wwLib.wwPlugins.supabaseAuth.settings.publicData.apiKey&&wwLib.wwPlugins.supabaseAuth.settings.privateData.apiKey;!t&&e&&(this.changeProjectUrl(wwLib.wwPlugins.supabaseAuth.settings.publicData.projectUrl),this.changeApiKey(wwLib.wwPlugins.supabaseAuth.settings.publicData.apiKey),this.$emit("update:settings",{...this.settings,publicData:{...this.settings.publicData,apiKey:wwLib.wwPlugins.supabaseAuth.settings.publicData.apiKey,projectUrl:wwLib.wwPlugins.supabaseAuth.settings.publicData.projectUrl}}))},methods:{changeProjectUrl(t){this.$emit("update:settings",{...this.settings,publicData:{...this.settings.publicData,projectUrl:t}}),this.$nextTick(this.loadInstance)},changeApiKey(t){this.$emit("update:settings",{...this.settings,publicData:{...this.settings.publicData,apiKey:t}}),this.$nextTick(this.loadInstance)},loadInstance(){this.plugin.load(this.settings.publicData.projectUrl,this.settings.publicData.apiKey)}}},p=s(3744);const n=(0,p.Z)(u,[["render",l]]);var c=n}}]);