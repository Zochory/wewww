"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[9540],{9540:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var i=a(6252);function n(e,t,a,n,o,s){const r=(0,i.up)("wwEditorInputTextSelect"),c=(0,i.up)("wwEditorFormRow");return(0,i.wg)(),(0,i.j4)(c,{required:"",label:"Page to redirect when user is not signed-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{options:s.pagesOptions,actions:o.pageActions,"model-value":a.settings.publicData.afterNotSignInPageId,placeholder:"Select a page","onUpdate:modelValue":t[0]||(t[0]=e=>s.changePublicSettings("afterNotSignInPageId",e)),onAction:s.onAction},null,8,["options","actions","model-value","onAction"])])),_:1})}var o={props:{settings:{type:Object,required:!0}},emits:["update:settings"],data(){return{pageActions:[{icon:"add",label:"Create page",onAction:this.createPage}]}},computed:{pagesOptions(){return wwLib.wwWebsiteData.getPages().filter((e=>!e.cmsDataSetPath)).map((e=>({label:e.name,value:e.id})))}},methods:{changePublicSettings(e,t){this.$emit("update:settings",{...this.settings,publicData:{...this.settings.publicData,[e]:t}})},createPage(){wwLib.$emit("wwTopBar:open","WEBSITE_PAGES"),wwLib.$emit("wwTopBar:pages:setPage",void 0),this.$nextTick((()=>wwLib.$emit("wwTopBar:pages:setMenu","ww-page-create")))},onAction(e){e.onAction&&e.onAction()}}},s=a(3744);const r=(0,s.Z)(o,[["render",n]]);var c=r}}]);