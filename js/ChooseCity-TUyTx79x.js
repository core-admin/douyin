import{u as r,a as l,b as u,d as i,_ as d}from"./common-q53V16-S.js";import"./vendor-D3q-ut_H.js";const V={class:"choose-location"},_={class:"content"},p={class:"schools"},m=Vue.defineComponent({name:"ChooseCity",__name:"ChooseCity",setup(f){const o=r(),t=Vue.ref(["河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","台湾","内蒙古","广西","西藏","宁夏","新疆","北京","天津","上海","重庆","香港","澳门"]);async function s(){l(),o.userinfo={...o.userinfo,location:"中国-四川-成都"},await u(500),i(),history.go(-3)}return(C,e)=>{const n=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createVNode(n,null,{center:Vue.withCtx(()=>e[1]||(e[1]=[Vue.createElementVNode("span",{class:"f16"},"成都",-1)])),_:1}),Vue.createElementVNode("div",_,[Vue.createElementVNode("div",p,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.value,(a,c)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"row",onClick:e[0]||(e[0]=h=>s()),key:c},[Vue.createElementVNode("span",null,Vue.toDisplayString(a),1)]))),128))])])])}}}),k=d(m,[["__scopeId","data-v-6dcdf372"]]);export{k as default};
