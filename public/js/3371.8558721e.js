"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[3371],{606:(t,e,n)=>{n.d(e,{Z:()=>u});var o=n(6252),i=n(3577),s=n(9963);function a(t,e,n,a,c,d){const r=(0,o.up)("wwLayout");return(0,o.wg)(),(0,o.iD)("div",{class:"modal-container",style:(0,i.j5)(d.backdropStyle),"ww-responsive":"modal-container",onMousedown:e[0]||(e[0]=(0,s.iM)((e=>t.$emit("trigger-event",{name:"backdropClick"})),["self"]))},[(0,o.Wm)(s.uT,{name:n.content.animation,mode:"out-in"},{default:(0,o.w5)((()=>[d.show?((0,o.wg)(),(0,o.j4)(r,{key:0,class:(0,i.C_)(["modal-dropzone",n.content.position]),direction:"column",path:"modalContent",style:(0,i.j5)(d.modalContentStyle),"ww-responsive":"modal-dropzone","inherit-from-element":["width"]},null,8,["class","style"])):(0,o.kq)("",!0)])),_:1},8,["name"])],36)}const c={topLeft:{"--justify":"flex-start","--align":"flex-start"},topMiddle:{"--justify":"flex-start","--align":"center"},topRight:{"--justify":"flex-start","--align":"flex-end"},middleLeft:{"--justify":"center","--align":"flex-start"},middle:{"--justify":"center","--align":"center"},middleRight:{"--justify":"center","--align":"flex-end"},bottomLeft:{"--justify":"flex-end","--align":"flex-start"},bottomMiddle:{"--justify":"flex-end","--align":"center"},bottomRight:{"--justify":"flex-end","--align":"flex-end"}};var d={props:{content:{type:Object,required:!0}},emits:["trigger-event","update:sidepanel-content"],computed:{isEditing(){return!1},show(){return this.content.display},backdropStyle(){return this.show&&this.content.backdrop?{"--backdropColor":this.content.backdropColor,"--backdropEvents":"auto",zIndex:this.content.zIndex}:{"--backdropColor":"transparent","--backdropEvents":"none",zIndex:this.content.zIndex}},modalContentStyle(){const t={"--transition":this.content.transition};return"custom"!==this.content.position?{...t,...c[this.content.position]}:{...t,"--top":this.content.positionTop,"--left":this.content.positionLeft}}},watch:{}},r=n(3744);const l=(0,r.Z)(d,[["render",a],["__scopeId","data-v-48fcaa8c"]]);var u=l},259:(t,e,n)=>{n.d(e,{Z:()=>l});var o=n(6252),i=n(3577);function s(t,e,n,s,a,c){const d=(0,o.up)("wwElement",!0),r=(0,o.up)("wwText");return(0,o.wg)(),(0,o.j4)((0,o.LL)(c.tag),{class:(0,i.C_)(["ww-button",{button:c.tag}]),type:c.buttonType,style:(0,i.j5)(c.buttonStyle),"data-ww-flag":"btn-"+n.content.buttonType,disabled:n.content.disabled,onFocus:e[0]||(e[0]=t=>a.isReallyFocused=!0),onBlur:e[1]||(e[1]=t=>c.onBlur(t))},{default:(0,o.w5)((()=>[n.content.hasLeftIcon&&n.content.leftIcon?((0,o.wg)(),(0,o.j4)(d,(0,i.vs)((0,o.dG)({key:0},n.content.leftIcon)),null,16)):(0,o.kq)("",!0),(0,o.Wm)(r,{tag:"span",text:c.text},null,8,["text"]),n.content.hasRightIcon&&n.content.rightIcon?((0,o.wg)(),(0,o.j4)(d,(0,i.vs)((0,o.dG)({key:1},n.content.rightIcon)),null,16)):(0,o.kq)("",!0)])),_:1},40,["class","type","style","data-ww-flag","disabled"])}const a={center:"center",right:"flex-end",left:"flex-start",justify:"center"};var c={props:{content:{type:Object,required:!0},wwFrontState:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["update:content","update:content:effect","change-menu-visibility","change-borders-style","add-state","remove-state","trigger-event"],data(){return{isReallyFocused:!1}},computed:{buttonStyle(){return{justifyContent:a[this.content["_ww-text_textAlign"]]||"center"}},isEditing(){return!1},tag(){return this.isEditing?"div":"submit"===this.content.buttonType||"reset"===this.content.buttonType||"button"===this.content.buttonType?"button":"div"},buttonType(){return this.isEditing?"":"submit"===this.content.buttonType||"reset"===this.content.buttonType||"button"===this.content.buttonType?this.content.buttonType:""},text(){return this.wwElementState.props.text},isFocused(){return this.isReallyFocused}},watch:{"content.disabled":{immediate:!0,handler(t){t?this.$emit("add-state","disabled"):this.$emit("remove-state","disabled")}},isReallyFocused(t,e){t&&!e?this.$emit("trigger-event",{name:"focus"}):!t&&e&&this.$emit("trigger-event",{name:"blur"})},isFocused:{immediate:!0,handler(t){t?this.$emit("add-state","focus"):this.$emit("remove-state","focus")}}},methods:{onBlur(){this.isReallyFocused=!1}}},d=n(3744);const r=(0,d.Z)(c,[["render",s],["__scopeId","data-v-0d74a430"]]);var l=r},8337:(t,e,n)=>{n.r(e);var o=n(9102),i=n(7384),s=n(259),a=n(8749),c=n(2806),d=n(3914),r=n(5022),l=n(5883),u=n(606);o.Z.component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",i.Z),o.Z.component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",s.Z),o.Z.component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",a.Z),o.Z.component("wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba",c.Z),o.Z.component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",d.Z),o.Z.component("wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63",r.Z),o.Z.component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",l.Z),o.Z.component("section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d",u.Z)}}]);