"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[187],{8598:function(t,e,n){function i(t){return{all:t=t||new Map,on:function(e,n){var i=t.get(e);i?i.push(n):t.set(e,[n])},off:function(e,n){var i=t.get(e);i&&(n?i.splice(i.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var i=t.get(e);i&&i.slice().map((function(t){t(n)})),(i=t.get("*"))&&i.slice().map((function(t){t(e,n)}))}}}n.d(e,{Z:function(){return a}});const s=i();var a=s},6852:function(t,e,n){n.d(e,{Z:function(){return v}});var i=n(3396),s=n(7139);const a={class:"header"};function d(t,e,n,d,c,o){const r=(0,i.up)("van-icon");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(r,{name:"arrow-left",class:"icon",onClick:d.toBack},null,8,["onClick"]),(0,i._)("div",null,(0,s.zw)(n.title),1),n.edit?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"edit",onClick:e[0]||(e[0]=(...t)=>d.editClick&&d.editClick(...t))},(0,s.zw)(d.store.state.edit?"編輯":"完成"),1)):(0,i.kq)("",!0)])}n(6743);var c=n(4691),o=n(678),r=n(8598),u=n(65),l={props:["title","edit"],setup(){const t=(0,u.oR)(),e=(0,o.tv)(),n=()=>{e.back()},i=()=>{t.state.cartList.length?(t.commit("EDIT"),r.Z.emit("edit")):c.Z.fail("購物車空空如也")};return{toBack:n,editClick:i,store:t}}},p=n(89);const f=(0,p.Z)(l,[["render",d],["__scopeId","data-v-ffabb4a8"]]);var v=f},2187:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var i=n(3396);function s(t,e,n,s,a,d){const c=(0,i.up)("Header"),o=(0,i.up)("van-address-list");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c,{title:"地址管理"}),(0,i.Wm)(o,{list:t.list,"default-tag-text":"默認",onAdd:s.onAdd,onEdit:s.onEdit},null,8,["list","onAdd","onEdit"])],64)}var a=n(4870),d=n(6852),c=n(65),o=n(678),r={components:{Header:d.Z},setup(){const t=(0,c.oR)(),e=(0,o.tv)();let n=(0,a.qj)({list:[]});const s=()=>{n.list=t.state.userAddress.map((t=>({id:t.id,name:t.name,tel:t.tel,address:`${t.province}${t.city}${t.county}${t.addressDetail}`,isDefault:!!t.isDefault})))};(0,i.bv)((()=>{s()}));const d=()=>{e.push({path:"./addressedit",query:{type:"add"}})},r=t=>{e.push({path:"./addressedit",query:{id:t.id,type:"change"}})};return{...(0,a.BK)(n),onAdd:d,onEdit:r}}},u=n(89);const l=(0,u.Z)(r,[["render",s],["__scopeId","data-v-417c6fb8"]]);var p=l}}]);
//# sourceMappingURL=187.07105ed5.js.map