(function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-118ae6c3":"d42c841d","chunk-1afa5b51":"30320e71","chunk-a44cb916":"4ef3cf90","chunk-1c84728e":"947e8f28","chunk-1da8d342":"919fb8f5","chunk-29f689f0":"5c5f7f6c","chunk-2d0b6a7c":"c20cce74","chunk-2d0cbcd4":"29d22a2f","chunk-2d0d5c01":"ae3af0d5","chunk-2d0e5757":"72bb8e6a","chunk-2d21045f":"faff8d9f","chunk-2d21330c":"0a44253d","chunk-2d21b489":"fc09c2fc","chunk-2d21e6fb":"32e193cd","chunk-2d229b1d":"7c16ada7","chunk-2d2315aa":"be84c18c","chunk-4c49dc88":"c2bcfe90","chunk-4d57b7ff":"43b6f245","chunk-25f7792c":"884a86ea","chunk-667e6776":"912cb582","chunk-515c80f6":"be5fb043","chunk-5dad673b":"461c2722","chunk-5e4da9ce":"47ed0d1f","chunk-75802c4a":"b89693b9","chunk-a9de5dce":"f37761c0","chunk-c100e990":"65b65b91","chunk-c988b39e":"08b0cac9","chunk-f6be564e":"e61d17b3","chunk-f99ba3d6":"c68b05bc"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-118ae6c3":1,"chunk-1afa5b51":1,"chunk-a44cb916":1,"chunk-1c84728e":1,"chunk-1da8d342":1,"chunk-4c49dc88":1,"chunk-4d57b7ff":1,"chunk-25f7792c":1,"chunk-667e6776":1,"chunk-515c80f6":1,"chunk-5dad673b":1,"chunk-5e4da9ce":1,"chunk-75802c4a":1,"chunk-a9de5dce":1,"chunk-c100e990":1,"chunk-c988b39e":1,"chunk-f6be564e":1,"chunk-f99ba3d6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-118ae6c3":"66760bcd","chunk-1afa5b51":"527348e0","chunk-a44cb916":"b8b93826","chunk-1c84728e":"39de34f0","chunk-1da8d342":"78278229","chunk-29f689f0":"31d6cfe0","chunk-2d0b6a7c":"31d6cfe0","chunk-2d0cbcd4":"31d6cfe0","chunk-2d0d5c01":"31d6cfe0","chunk-2d0e5757":"31d6cfe0","chunk-2d21045f":"31d6cfe0","chunk-2d21330c":"31d6cfe0","chunk-2d21b489":"31d6cfe0","chunk-2d21e6fb":"31d6cfe0","chunk-2d229b1d":"31d6cfe0","chunk-2d2315aa":"31d6cfe0","chunk-4c49dc88":"5ac6af68","chunk-4d57b7ff":"8fb928d5","chunk-25f7792c":"31db206d","chunk-667e6776":"d97d9704","chunk-515c80f6":"3da87d1d","chunk-5dad673b":"31199a38","chunk-5e4da9ce":"39de34f0","chunk-75802c4a":"ec0efdae","chunk-a9de5dce":"6651d6e0","chunk-c100e990":"ec0efdae","chunk-c988b39e":"38060e83","chunk-f6be564e":"ec0efdae","chunk-f99ba3d6":"78278229"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=c[e]=[t,n]});t.push(a[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"43f0":function(e,t,n){"use strict";var a=n("9a69"),r=n.n(a);r.a},5402:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"internet-container"},["success"===e.data.type&&!0===e.data.isError?n("div",{staticClass:"internet-active",on:{click:e.closeBtn}},[e._m(0),n("div",{staticClass:"det"},[n("h1",[e._v("Oh Cool")]),n("p",[e._v("\n                    "+e._s(e.data.message)+"\n                ")])])]):e._e(),"error"===e.data.type&&!0===e.data.isError?n("div",{staticClass:"internet-inactive",on:{click:e.closeBtn}},[e._m(1),n("div",{staticClass:"det"},[n("h1",[e._v("Oh Crap")]),n("p",[e._v("\n                    "+e._s(e.data.message)+"\n                ")])])]):e._e()])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clop"},[n("img",{attrs:{src:"/image/good_internet.png"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clop"},[n("img",{attrs:{src:"/image/no_internet.png"}})])}],c={name:"Internet",props:{data:Object},mounted:function(){},methods:{closeBtn:function(e){this.data.isError=!1}}},o=c,u=(n("43f0"),n("2877")),s=Object(u["a"])(o,a,r,!1,null,"64b8078e",null);t["default"]=s.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wholeBody",attrs:{id:"app"}},[e._m(0),n("router-view")],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tweet"},[n("button",{attrs:{id:"tweetBtn"}},[e._v("New Tweets")])])}],o=(n("96cf"),n("3b8d")),u=n("591e"),s=n("5402"),i={name:"app",data:function(){return{notiData:{},username:""}},watch:{$route:function(e){u["a"].getStorage("fansData")}},components:{Internet:s["default"]},methods:{generateContents:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:u["a"].checkStorage("fansData")&&(t=u["a"].getStorage("fansData"),n=t[0].user_type,this.axios.get("/user/details").then(function(e){var t,r=e.data.data;t="1"===n?{email:r.email,firstname:r.firstname,lastname:r.lastname,username:r.username,club:r.club,avatar:r.avatar}:{email:r.email,business_name:r.business_name,username:r.username,avatar:r.logo},a.$storeLocalData(t)&&window.eventBus.$emit("localDataStored",!0)}).catch(function(e){return e}));case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleConnectivityChange:function(e){this.notiData=!1===e?{type:"error",message:"Connect to an active network to enjoy the full extent of Matchdaydeals",isError:!0}:{type:"success",message:"Great!, now you can enjoy the full extent of Matchdaydeals",isError:!0}},checkUserActiveTime:function(){if(u["a"].checkStorage("ticket")){var e=u["a"].getStorage("ticket");e=e[0].token_generation}},getUserContributions:function(){var e=this;if(u["a"].checkStorage("fansData")){var t=localStorage.fansData;t=JSON.parse(t);var n=t[0].id;this.axios.get("/user/contributions/"+n).then(function(t){var n={followers:t.data.data.followers,followings:t.data.data.followings,reviews:t.data.data.reviews};e.$store.commit("setContributions",n)}).catch(function(e){return e})}}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.generateContents();case 2:window.eventBus.$on("loadUserData",function(e){!0===e&&t.generateContents()}),setInterval(function(){t.getUserContributions()},5e4),this.checkUserActiveTime(),this.getUserContributions(),$("#tweetBtn").click(function(){return $("html,body").animate({scrollTop:0},1200),window.eventBus.$emit("loadFeeds",!0),setTimeout(function(){$(".tweet").hide()},1e3),!1}),$("body").scroll(function(){var e=$(this);e[0].scrollHeight-e.scrollTop()==e.height()?alert("Reached the bottom!"):0==e.scrollTop()&&alert("Reached the top!")}),window.eventBus.$on("newReview",function(e){!0===e&&$(".tweet").show()});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},l=i,d=(n("034f"),n("2877")),f=Object(d["a"])(l,r,c,!1,null,null,null),h=f.exports,p=n("8c4f"),m=n("05fb"),b=function(){return n.e("chunk-2d229b1d").then(n.bind(null,"df16"))},g=function(){return n.e("chunk-2d21e6fb").then(n.bind(null,"d60c"))},v=function(){return n.e("chunk-2d21330c").then(n.bind(null,"ac2f"))},k=function(){return n.e("chunk-2d21b489").then(n.bind(null,"beb2"))},w=function(){return n.e("chunk-c988b39e").then(n.bind(null,"eb22"))},y=function(){return Promise.all([n.e("chunk-4d57b7ff"),n.e("chunk-1afa5b51"),n.e("chunk-667e6776")]).then(n.bind(null,"76d2"))},S=function(){return n.e("chunk-4d57b7ff").then(n.bind(null,"e1a9"))},_=function(){return n.e("chunk-29f689f0").then(n.bind(null,"da5d"))},O=function(){return n.e("chunk-5dad673b").then(n.bind(null,"643d"))},j=function(){return n.e("chunk-2d0cbcd4").then(n.bind(null,"4ae6"))},A=function(){return n.e("chunk-2d0d5c01").then(n.bind(null,"702d"))},D=function(){return n.e("chunk-2d0b6a7c").then(n.bind(null,"1da4"))},x=function(){return n.e("chunk-4c49dc88").then(n.bind(null,"49e5"))},C=function(){return n.e("chunk-5e4da9ce").then(n.bind(null,"8c49"))},R=function(){return n.e("chunk-1c84728e").then(n.bind(null,"13be"))},P=function(){return Promise.all([n.e("chunk-4d57b7ff"),n.e("chunk-1afa5b51"),n.e("chunk-25f7792c")]).then(n.bind(null,"91f4"))},z=function(){return n.e("chunk-2d21045f").then(n.bind(null,"b6d9"))},E=function(){return Promise.all([n.e("chunk-1afa5b51"),n.e("chunk-a44cb916")]).then(n.bind(null,"bcad"))},T=function(){return n.e("chunk-1da8d342").then(n.bind(null,"3adb"))},U=function(){return n.e("chunk-75802c4a").then(n.bind(null,"4b04"))},B=function(){return n.e("chunk-f99ba3d6").then(n.bind(null,"8a7f"))},M=function(){return n.e("chunk-c100e990").then(n.bind(null,"64f0"))},L=function(){return n.e("chunk-f6be564e").then(n.bind(null,"e0db"))},N=function(){return n.e("chunk-118ae6c3").then(n.bind(null,"137e"))},I=function(){return n.e("chunk-2d2315aa").then(n.bind(null,"efd7"))},Z=function(){return n.e("chunk-a9de5dce").then(n.bind(null,"d1c2"))},q=function(){return n.e("chunk-515c80f6").then(n.bind(null,"e985"))},J=function(){return Promise.resolve().then(n.bind(null,"5402"))},F=function(){return n.e("chunk-2d0e5757").then(n.bind(null,"9527"))};a["a"].use(p["a"]),a["a"].component("response-message",Z),a["a"].component("notification",q),a["a"].component("offline",m["a"]),a["a"].component("internet",J);var H=!1,G={};u["a"].checkStorage("fansData")&&(G=u["a"].getStorage("fansData"),G=G[0],H=!0);var K=new p["a"]({mode:"history",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/auth",name:"AuthPage",component:b,children:[{path:"login",name:"Login",component:g,meta:{title:"Login Matchdaydeals",metaTags:[{name:"description",content:"Login to access more features of matchdaydeals"}]}},{path:"callback",name:"Callback",component:v},{path:"resetpassword/:token",props:!0,name:"Reset_password",component:k}]},{path:"/",component:w,children:[{path:"/",name:"HomeDefaultPage",component:y,children:[{path:"/",name:"NewsFeed",component:S},{path:"businesstofollow",name:"BusinessToFollow",component:_,meta:{title:"Business - Matchdaydeals",metaTags:[{name:"description",content:"List of Businesses on Matchdaydeals to follow"}]}},{path:"related_deals",name:"related_deals",component:O},{path:"related_deals/:deal_id",name:"deal_page",props:!0,component:j},{path:"recommended_hotels",name:"recommended_hotels",component:A}]},{path:"/about",name:"About",components:z},{path:"profile/:username",props:!0,name:"Profile",component:x},{path:"settings/",name:"Settings",meta:{authRequired:!0},component:D,children:[{path:"accountinfo",name:"AccountInfo",component:C},{path:"/passwordchange",name:"PasswordChange",component:R}]},{path:"/match/:fixture_id",props:!0,name:"Match",component:P},{path:"deals",name:"Deals",meta:{businessRequired:!0,authRequired:!0},component:E},{path:"/sp",name:"Special_pages",redirect:"/sp/restaurants",meta:{title:"Matchdaydeals Special Pages"},component:N,children:[{path:"kits",name:"Kits",component:T},{path:"restaurants",name:"Restaurants",component:U},{path:"odds",name:"Odds",component:B},{path:"hotels",name:"Hotels",component:M},{path:"travel",name:"Travel",component:L}]}]},{path:"*",name:"404",component:I},{path:"/logout",name:"logout",component:F}]});K.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.businessRequired})&&"2"!==G.user_type?n({path:"/",query:{redirect:e.fullPath}}):n(),e.matched.some(function(e){return e.meta.authRequired})?H?n():n({path:"/",query:{redirect:e.path}}):n()});var Y=K,W=n("ba38"),X=n("a7fe"),Q=n.n(X),V=n("bc3a"),ee=n.n(V),te=n("c0d6"),ne=localStorage.ticket||null;ne=JSON.parse(ne);var ae=u["a"].fansData||null;ae=JSON.parse(ae);btoa("_$_MDD$___F53cd");var re=ee.a.create({baseURL:te["a"].state.rawURI,timeout:3e4,headers:{Authorization:"Bearer "+(null!==ne?ne[0].token:null),"Content-Type":"application/json; charset=utf-8;text/html"}});Y.beforeEach(function(e,t,n){ae=!0,"/auth/login"==e.path&&ae?n("/home"):"/auth/login"===e.path||"/auth/login"===e.path||ae?n():n("/auth/login")}),re.interceptors.request.use(function(e){var t=localStorage.ticket||null;return t=JSON.parse(t),e.headers["Authorization"]="Bearer "+(null!==t?t[0].token:null),e},function(e){return Promise.reject(e)}),re.interceptors.response.use(function(e){return localStorage.ticket&&JSON.parse(localStorage.ticket),e},function(e){try{if(401!==e.response.status||"Authentication Failure."===e.response.data.message)return Promise.reject(e)}catch(t){return Promise.reject(e)}});var ce=re,oe=n("9062"),ue=n.n(oe),se=(n("e40d"),n("0fec")),ie=n("7d1a"),le=n.n(ie),de=n("3f9b"),fe=n("e166"),he=n.n(fe),pe=n("75fc"),me=function(){function e(t,n){return t.reduce(function(t,a){var r="".concat(n).concat(a.path);return"*"!==a.path&&t.push(r),a.children&&t.push.apply(t,Object(pe["a"])(e(a.children,"".concat(r,"/")))),t},[])}var t=e(Y.options.routes,"https://matchdaydeals.com").map(function(e){return"<url><loc>".concat(e,"</loc></url>")}).join("\r\n");'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n                '.concat(t,"\n              </urlset>")},be=me,ge=n("d225"),ve=n("b0b4"),ke=function(){function e(){Object(ge["a"])(this,e)}return Object(ve["a"])(e,null,[{key:"get",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"post",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.post(t,n);case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"put",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,a,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.prev=1,e.next=4,ce.put(t,n);case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e["catch"](1),e.t0;case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,a,r,c=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.prev=1,a={data:n},e.next=5,ce.delete(t,a);case 5:return r=e.sent,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e["catch"](1),e.t0;case 12:case"end":return e.stop()}},e,null,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),we=ke,ye=function(e,t,n){var a=e.$loading.show({container:t,loader:n?n.loaderType:"spinner",width:30,height:30,opacity:n&&"undefined"!==typeof n.opacity?n.opacity:.7,color:n&&"undefined"!==typeof n.color?n.color:"#38a9ff"});return a},Se=ye,_e=n("1157"),$e=n.n(_e),Oe=(n("28a5"),n("7872"),["","k","M","G","T","P","E"]),je=function(e){var t=Math.log10(e)/3|0;if(0==t)return e;var n=Oe[t],a=Math.pow(10,3*t),r=e/a;return r.toFixed(1).split(".0")[0]+n},Ae=je,De=function(e,t){var n;if(null!==e&&e.length>1){var a=e.length;return n=a>t?e.substring(0,t)+"...":e.substring(0,t),n}},xe=De,Ce=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n.timestamp)t=e;else{var a=Date.parse(e);t=a/1e3}function r(e){var t=new Date(1e3*e),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=t.getFullYear(),c=a[t.getMonth()],o=t.getDate(),u=t.getHours(),s=t.getMinutes(),i=t.getSeconds(),l=o+" "+c+" "+r+" "+(!0===n.hour?u+":":"")+(!0===n.min?s+":":"")+(!0===n.sec?i:"");return l}return r(t)},Re=Ce,Pe=(n("4917"),n("a481"),function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t="tnjunfowinqlnkwbvjoio",n=e.replace(/\r/gi,""),a=t.split("\n"),r="",c=new Array,o=new Array,u=0;u<n.length;u++){r=n[u].split("");for(var s=0;s<r.length;s++)r[s].toLowerCase().match(/[a-z]/)?r[s].match(/[a-z]/)?c[s]=a[r[s].charCodeAt(0)-97]:c[s]=a[r[s].charCodeAt(0)-65].toUpperCase():c[s]=r[s];o[u]=c.join(""),c=new Array}return o.join("\n")}),ze=Pe,Ee=(n("f559"),function(e,t){var n=/^([A-z0-9]+) ([A-z0-9]+)$/,a=/^([a-zA-Z]+)$/,r=/^([a-zA-Z0-9]+)$/,c=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,o=/^([0-9]{9,16})$/,u=/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,s=/(\S{7})/,i=/(\S{10,})/,l=/^(?:(?:https?|ftp|www|http):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,d=/(\S+)/,f=/(\d+)/,h=/^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/,p=/^[1-9]\d{0,7}(?:\.\d{1,4})?$/,m=/^(\d){8,11}$/,b=/^(\d){15}$/,g=/^([A-Z]+)*$/,v=/[^a-zA-Z0-9]/;if("fulltext"===e)return!!n.test(t);if("special"===e)return!!v.test(t);if("nametext"===e)return!!a.test(t);if("username"===e)return!!h.test(t);if("upperNumberandLetter"===e)return!!g.test(t);if("password checker"===e){var k=/(?=.*[a-z])/,w=/(?=.*[A-Z])/,y=(f=/(?=.*[0-9])/,/(?=.*[!@#$%&\*])/);return k.test(t)?w.test(t)?f.test(t)?y.test(t)?!(t.length<8)||"Password must be 8 characters long":"Password must contain atleast one symbol":"Password must contain atleast one number":"Password must contain at least an upper case":"Password must contain at least a lower case"}if("longtext"===e)return!!r.test(t);if("serial"===e)return!!i.test(t);if("number"===e)return!!f.test(t);if("email"===e)return!!c.test(t);if("phone"===e){var S=t.startsWith("+234");return!0===S&&(o=/[+^]([0-9]{9,16})$/),!!o.test(t)}return"price"===e?!!p.test(t):"password"===e?!!u.test(t):"otp"===e?!!s.test(t):"link"===e?!!l.test(t):"general"===e?!!d.test(t):"account_number"===e?!!m.test(t):"bvn"===e?!!b.test(t):void 0}),Te=Ee,Ue=function(e){var t=localStorage.fansData;t=JSON.parse(t);var n,a=t[0];function r(){var e=JSON.parse(localStorage.fansData);te["a"].commit("setFansData",e),te["a"].state.user.fullname=e[0].firstname+" "+e[0].lastname,te["a"].state.user.username=e[0].username,te["a"].state.user.email=e[0].email,te["a"].state.user.club=e[0].club,te["a"].state.user.id=e[0].id,te["a"].state.user.user_type=e[0].user_type,te["a"].state.user.avatar=e[0].avatar}if(n="1"===a.user_type?{id:a.id,username:void 0!==e.username?e.username:a.username,email:void 0!==e.email?e.email:a.email,firstname:void 0!==e.firstname?e.firstname:"",lastname:void 0!==e.lastname?e.lastname:"",club:void 0!==e.club?e.club:"",avatar:void 0!==e.avatar?e.avatar:"",user_type:a.user_type}:{id:a.id,username:void 0!==e.username?e.username:a.username,email:void 0!==e.email?e.email:a.email,business_name:void 0!==e.business_name?e.business_name:"",avatar:void 0!==e.avatar?e.avatar:"",user_type:a.user_type},u["a"].clearStorage("fansData")&&u["a"].setStorage("fansData",n))return r(),!0},Be=Ue,Me=function(e){var t=/(((https?:\/\/)|(www\.))[^\s]+)/g;null!==e&&""!==e||(e="");var n=e.replace(t,function(e,t,n){var a="www."==n?"http://"+e:e;return'<a href="'+a+'" target="_blank">'+e+"</a>"});return n},Le=Me;window.eventBus=new a["a"],a["a"].config.productionTip=!1;var Ne=window.screen.height-300;Ne=Ne>0?Ne/5:0;var Ie=window.screen.width-400;Ie=Ie>0?Ie/2:0,a["a"].use(W["a"],{baseUrl:te["a"].state.rawURI,tokenName:"access_token",storageType:"cookieStorage",providers:{github:{clientId:"",redirectUri:te["a"].state.callbackUrl},google:{clientId:"922921503157-3hmb5q0j26igam777c0kk403r0ghfjdr.apps.googleusercontent.com",redirectUri:te["a"].state.callbackUrl,popupOptions:{width:552,height:633,top:Ne,left:Ie}},facebook:{clientId:"",redirectUri:te["a"].state.callbackUrl},twitter:{clientId:"",redirectUri:te["a"].state.callbackUrl}}}),a["a"].use(Q.a,ce),a["a"].use(ue.a),a["a"].use(de["a"]),a["a"].use(he.a,{}),se["a"].addLocale(le.a);var Ze=new se["a"]("en-US");a["a"].prototype.$api=we,a["a"].prototype.$loader=Se,a["a"].prototype.$Jquery=$e.a,a["a"].prototype.$numeral=Ae,a["a"].prototype.$substring=xe,a["a"].prototype.$timeAgo=Ze,a["a"].prototype.$getDateYear=Re,a["a"].prototype.$encodedText=ze,a["a"].prototype.$validate=Te,a["a"].prototype.$storeLocalData=Be,a["a"].prototype.$urlify=Le,a["a"].prototype.$sitemap=be,new a["a"]({router:Y,store:te["a"],mounted:function(){this.$sitemap(),window.eventBus.$on("logout",function(e){!0===e&&(te["a"].commit("logout"),te["a"].commit("resetState"),window.location="/")})},render:function(e){return e(h)}}).$mount("#app")},"591e":function(e,t,n){"use strict";var a=n("7618"),r={isLocalStorage:function(){try{return"localStorage"in window&&null!==window["localStorage"]}catch(e){return!1}},getElements:function(e,t){return Object(a["a"])(e)===t?[e]:document.querySelectorAll(e)},showElements:function(e,t){document.querySelectorAll(t).innerHtml=e},getStorage:function(e){if(0!=r.isLocalStorage()){var t=localStorage.getItem(e);return t?JSON.parse(t):[]}},setStorage:function(e,t){if(0!=r.isLocalStorage()){var n=r.getStorage(e);return!(n.indexOf(e)>-1||!e)&&(n.push(t),localStorage.setItem(e,JSON.stringify(n)),!0)}},clearStorage:function(e){return localStorage.removeItem(e),!0},checkStorage:function(e){return null!==localStorage.getItem(e)}};t["a"]=r},"64a9":function(e,t,n){},"9a69":function(e,t,n){},c0d6:function(e,t,n){"use strict";n("96cf");var a=n("3b8d"),r=n("2b0e"),c=n("2f62"),o=n("591e");r["a"].use(c["a"]);var u=function(){return{user:{fullname:"",username:"",email:"",club:"",avatar:"",id:"",user_type:""},fansData:{},staticImage:"https://nero.matchdaydeals.com/storage/uploads/avatar/avatar.jpg/",rawURI:"https://nero.matchdaydeals.com/api/",homeURI:"https://nero.matchdaydeals.com/",projectName:"MatchDayDeals",callbackUrl:"https://test.matchdaydeals.com/auth/callback",localhost:"http://localhost:8080",contributions:{}}};t["a"]=new c["a"].Store({state:u(),mutations:{resetState:function(e){Object.assign(e,u())},setFansData:function(e,t){e.fansData=t},logout:function(){o["a"].clearStorage("ticket"),o["a"].clearStorage("fansData")},setContributions:function(e,t){e.contributions=t}},actions:{setFansData:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=o["a"].getStorage("fansData"),n("setFansData",a),e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getFansData:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=n.fansData,e.abrupt("return",a);case 3:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}})}});
//# sourceMappingURL=app.88ece6b6.js.map