(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aea5650"],{"017d":function(t,o,n){"use strict";var e=n("6d98"),i=n.n(e);i.a},"13d5":function(t,o,n){"use strict";var e=n("23e7"),i=n("d58f").left,r=n("a640"),a=n("ae40"),s=r("reduce"),c=a("reduce",{1:0});e({target:"Array",proto:!0,forced:!s||!c},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,o,n){var e=n("da84"),i=n("fdbc"),r=n("17c2"),a=n("9112");for(var s in i){var c=e[s],u=c&&c.prototype;if(u&&u.forEach!==r)try{a(u,"forEach",r)}catch(l){u.forEach=r}}},"17c2":function(t,o,n){"use strict";var e=n("b727").forEach,i=n("a640"),r=n("ae40"),a=i("forEach"),s=r("forEach");t.exports=a&&s?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},2293:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"headerbar"},[t.ishead?n("van-nav-bar",{staticClass:"border-bottom",attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onBackLeft},scopedSlots:t._u([{key:"right",fn:function(){return[n("more-pup",{attrs:{hascontainer:t.hascontainer}})]},proxy:!0}])}):n("van-sticky",[n("van-nav-bar",{staticClass:"container",attrs:{"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"wap-nav"}})]},proxy:!0},{key:"right",fn:function(){return[n("div",{staticClass:"myLoginStatus",domProps:{innerHTML:t._s(t.isLoginTxt)}})]},proxy:!0},{key:"title",fn:function(){return[n("van-search",{attrs:{shape:"round",background:"#e43130",placeholder:"搜索"},on:{focus:t.onFocus},scopedSlots:t._u([{key:"label",fn:function(){return[n("i",{staticClass:"my-iconfont"},[t._v("")])]},proxy:!0}],null,!1,3458316801),model:{value:t.value,callback:function(o){t.value=o},expression:"value"}})]},proxy:!0}],null,!1,459346907)})],1)],1)},i=[],r=n("7ad4"),a={name:"headerbar",components:{MorePup:r["a"]},props:["ishead","title","hascontainer"],data:function(){return{value:""}},computed:{isLoginTxt:function(){var t="登录";return this.$store.state.userToken&&(t='<i class="my-iconfont iconwodedangxuan"></i>'),t}},methods:{onClickLeft:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),setTimeout((function(){t.$toast.clear(),t.$router.push("/category")}),500)},onClickRight:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),setTimeout((function(){t.$toast.clear(),"登录"==t.isLoginTxt?t.$router.push("/login"):t.$router.push("/mine")}),500)},onFocus:function(){this.$router.push("/search")},onBackLeft:function(){this.$router.go(-1)}}},s=a,c=(n("017d"),n("2877")),u=Object(c["a"])(s,e,i,!1,null,"4da62320",null);o["a"]=u.exports},4160:function(t,o,n){"use strict";var e=n("23e7"),i=n("17c2");e({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"550b":function(t,o,n){"use strict";var e=n("8acc"),i=n.n(e);i.a},"57d7":function(t,o,n){"use strict";var e=n("8931"),i=n.n(e);i.a},"65f0":function(t,o,n){var e=n("861d"),i=n("e8b5"),r=n("b622"),a=r("species");t.exports=function(t,o){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?e(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===o?0:o)}},"6d98":function(t,o,n){},"7ad4":function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"morepopup"},[t.hascontainer?t._e():n("div",{staticClass:"right-icon",on:{click:t.onClickRight}},[n("van-icon",{attrs:{name:"more-o",color:"#000",size:"28px"}})],1),n("van-popup",{attrs:{"overlay-class":"myoverlay","close-on-popstate":""},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[n("ul",[n("li",{on:{click:t.toHome}},[n("van-icon",{attrs:{name:"home-o",color:"#fff"}}),n("strong",[t._v("首页")])],1),n("li",{on:{click:t.toSearch}},[n("van-icon",{attrs:{name:"search",color:"#fff"}}),n("strong",[t._v("分类搜索")])],1),n("li",{on:{click:t.toMine}},[n("van-icon",{attrs:{name:"user-o",color:"#fff"}}),n("strong",[t._v("我的京东")])],1),n("li",{on:{click:t.toFootprint}},[n("van-icon",{attrs:{name:"eye-o",color:"#fff"}}),n("strong",[t._v("浏览记录")])],1),n("li",{on:{click:function(o){return t.$toast("我的关注")}}},[n("van-icon",{attrs:{name:"like-o",color:"#fff"}}),n("strong",[t._v("我的关注")])],1)])])],1)},i=[],r={name:"morepopup",props:["hascontainer"],data:function(){return{show:!1}},methods:{onClickRight:function(){this.show=!0},toHome:function(){this.$router.push("/home"),this.$store.dispatch("setNavbarActive",0)},toSearch:function(){this.$router.push("/category"),this.$store.dispatch("setNavbarActive",1)},toMine:function(){this.$router.push("/mine"),this.$store.dispatch("setNavbarActive",4)},toFootprint:function(){this.$router.push("/myfootprint")}}},a=r,s=(n("550b"),n("2877")),c=Object(s["a"])(a,e,i,!1,null,null,null);o["a"]=c.exports},8931:function(t,o,n){},"8acc":function(t,o,n){},a640:function(t,o,n){"use strict";var e=n("d039");t.exports=function(t,o){var n=[][t];return!!n&&e((function(){n.call(null,o||function(){throw 1},1)}))}},ae40:function(t,o,n){var e=n("83ab"),i=n("d039"),r=n("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,o){if(r(s,t))return s[t];o||(o={});var n=[][t],u=!!r(o,"ACCESSORS")&&o.ACCESSORS,l=r(o,0)?o[0]:c,f=r(o,1)?o[1]:void 0;return s[t]=!!n&&!i((function(){if(u&&!e)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,f)}))}},b727:function(t,o,n){var e=n("0366"),i=n("44ad"),r=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var o=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(h,p,v,m){for(var g,y,b=r(h),k=i(b),L=e(p,v,3),C=a(k.length),_=0,S=m||s,x=o?S(h,C):n?S(h,0):void 0;C>_;_++)if((d||_ in k)&&(g=k[_],y=L(g,_,b),t))if(o)x[_]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return _;case 2:c.call(x,g)}else if(l)return!1;return f?-1:u||l?l:x}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d58f:function(t,o,n){var e=n("1c0b"),i=n("7b0b"),r=n("44ad"),a=n("50c4"),s=function(t){return function(o,n,s,c){e(n);var u=i(o),l=r(u),f=a(u.length),d=t?f-1:0,h=t?-1:1;if(s<2)while(1){if(d in l){c=l[d],d+=h;break}if(d+=h,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=h)d in l&&(c=n(c,l[d],d,u));return c}};t.exports={left:s(!1),right:s(!0)}},df3a:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"myfootprint"},[n("van-sticky",[n("headerBar",{attrs:{ishead:t.showHead,title:t.myTitle}})],1),n("div",{staticClass:"footprint-title"},[n("div",[t._v("共"+t._s(t.footprintNum)+"条记录")])]),n("div",{staticClass:"footprint-list"},t._l(t.footprintList,(function(o,e){return n("div",{key:e,staticClass:"list-warp"},[n("div",{staticClass:"show-title"},[t._v("日期: "+t._s(o.date))]),n("div",{staticClass:"show-goods"},[n("van-grid",{attrs:{border:!1,"column-num":2,gutter:5}},t._l(o.data,(function(o,e){return n("van-grid-item",{key:e,on:{click:function(n){return t.goDetail(o.goods_id)}}},[n("div",{staticClass:"show-goods-item"},[n("dl",[n("dt",[n("img",{attrs:{src:o.goods_image,alt:""}})]),n("dd",{staticClass:"txt-cut"},[t._v(t._s(o.goods_name))]),n("dd",[n("p",[t._v(" ￥"),n("span",[t._v(t._s(o.goods_price))])]),n("a",{attrs:{href:"##"},on:{click:function(n){return n.stopPropagation(),t.onDelete(o.id)}}},[t._v("删除")])])])])])})),1)],1)])})),0)],1)},i=[],r=(n("4160"),n("13d5"),n("159b"),n("4328")),a=n.n(r),s=n("2293"),c={name:"myfootprint",components:{headerBar:s["a"]},data:function(){return{uid:956538,showHead:!0,myTitle:"我的足迹",footprintList:[],footprintNum:0}},methods:{getMyFootprint:function(){var t=this;this.axios.post("https://api.ymduo.com/Member/history",a.a.stringify({uid:this.uid,pf:1})).then((function(o){t.footprintList=o.data.result.data;var n=[];o.data.result.data.forEach((function(t){n.push(t.count)})),t.footprintNum=n.reduce((function(t,o){return t+o})),t.$store.dispatch("setFootprintCount",t.footprintNum)}))},goDetail:function(t){var o=this,n=t;this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),setTimeout((function(){o.$toast.clear(),o.$router.push({name:"details",query:{goods_id:n}})}),500)},onDelete:function(t){var o=this;this.axios.post("https://api.ymduo.com/Member/delhistory",a.a.stringify({uid:this.uid,ids_str:t})).then((function(t){200==t.data.code&&(o.$toast.success("足迹删除成功"),o.getMyFootprint())}))}},created:function(){this.getMyFootprint()}},u=c,l=(n("57d7"),n("2877")),f=Object(l["a"])(u,e,i,!1,null,"3a3bfc56",null);o["default"]=f.exports},e8b5:function(t,o,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fdbc:function(t,o){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-4aea5650.9c9f5e5b.js.map