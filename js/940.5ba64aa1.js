"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[940],{6940:function(t,s,c){c.r(s),c.d(s,{default:function(){return k}});var r=c(3396),e=c(7139);const a=(0,r._)("div",{class:"mt-3 mb-3 text-center"},[(0,r._)("h2",null,"產品列表")],-1),l={class:"container"},o={class:"row row-cols-1 row-cols-lg-4 g-3"},d={class:"card h-100"},i=["src"],n={class:"card-body"},u={class:"card-title"},p={class:"card-text"},h=(0,r.Uk)(" 查看更多 ");function w(t,s,c,w,g,v){const _=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("div",l,[(0,r._)("div",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.products,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"col",key:t.id},[(0,r._)("div",d,[(0,r._)("img",{src:t.imageUrl,class:"card-img-top",alt:""},null,8,i),(0,r._)("div",n,[(0,r._)("h5",u,(0,e.zw)(t.title),1),(0,r._)("p",p,(0,e.zw)(t.description),1),(0,r.Wm)(_,{to:`/product/${t.id}`,class:"btn btn-primary"},{default:(0,r.w5)((()=>[h])),_:2},1032,["to"])])])])))),128))])])],64)}var g={data(){return{products:[]}},methods:{getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/api/beanhuang/products/all").then((t=>{this.products=t.data.products}))}},mounted(){this.getProducts()}},v=c(89);const _=(0,v.Z)(g,[["render",w]]);var k=_}}]);
//# sourceMappingURL=940.5ba64aa1.js.map