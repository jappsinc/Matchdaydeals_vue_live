(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dad673b"],{"643d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui-block"},[s("div",{staticClass:"ui-block-content"},[s("router-link",{staticClass:"title",staticStyle:{color:"#00AEEF"},attrs:{to:"/"}},[t._v("Back")])],1),t._m(0),s("div",{ref:"related_deals"},[t.offers.length>0?s("div",{staticClass:"row pl-3 pr-3"},t._l(t.offers,function(e,a){return s("div",{key:a,staticClass:"col-4"},[s("router-link",{attrs:{to:{name:"deal_page",params:{deal_id:e.id}}}},[s("article",{staticClass:"hentry blog-post"},[s("div",{staticClass:"post-thumb mxh-125"},[s("img",{attrs:{src:null===e.file?t.$store.state.staticImage:e.file,alt:"photo"}})]),s("div",{staticClass:"post-content"},[s("a",{staticClass:"post-category bg-mdd",attrs:{href:"javascript:;"}},[t._v(t._s(e.type))]),s("a",{staticClass:"h4 post-title",attrs:{href:"javascript:;"}},[t._v(t._s(t.$substring(e.name)))]),s("div",{staticClass:"author-date"},[t._v("\n                                Deal Date\n                                "),s("a",{staticClass:"h6 post__author-name fn",attrs:{href:"#"}},[t._v(t._s(t.getTime(e.deal_date)))])])])])])],1)}),0):t._e()])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui-block-title"},[s("h6",{staticClass:"title"},[t._v("All Deals")])])}],n={name:"related_deals.vue",data:function(){return{offers:{},offers_count:""}},mounted:function(){this.getRecommended()},methods:{showLoading:function(){var t=this.$loader(this,this.$refs.related_deals,{loaderType:"spinner"});return t},getTime:function(t){return this.$getDateYear(t,{hour:!0,min:!0,sec:!0})},getRecommended:function(){var t=this,e=this.showLoading();this.axios.get("timeline/offers/recommended").then(function(s){e.hide();var a=s.data.data,i=a.offers;console.log("Offers",i),t.offers_count=i.length,t.offers=i}).catch(function(t){return e.hide(),t})}}},r=n,o=(s("f1d7"),s("2877")),l=Object(o["a"])(r,a,i,!1,null,"79e83f48",null);e["default"]=l.exports},"6cb4":function(t,e,s){},f1d7:function(t,e,s){"use strict";var a=s("6cb4"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-5dad673b.461c2722.js.map