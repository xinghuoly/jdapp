(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2455ead7"],{"017d":function(t,o,n){"use strict";var a=n("6d98"),e=n.n(a);e.a},"1dde":function(t,o,n){var a=n("d039"),e=n("b622"),i=n("2d00"),r=e("species");t.exports=function(t){return i>=51||!a((function(){var o=[],n=o.constructor={};return n[r]=function(){return{foo:1}},1!==o[t](Boolean).foo}))}},2293:function(t,o,n){"use strict";var a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"headerbar"},[t.ishead?n("van-nav-bar",{staticClass:"border-bottom",attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onBackLeft},scopedSlots:t._u([{key:"right",fn:function(){return[n("more-pup",{attrs:{hascontainer:t.hascontainer}})]},proxy:!0}])}):n("van-sticky",[n("van-nav-bar",{staticClass:"container",attrs:{"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"wap-nav"}})]},proxy:!0},{key:"right",fn:function(){return[n("div",{staticClass:"myLoginStatus",domProps:{innerHTML:t._s(t.isLoginTxt)}})]},proxy:!0},{key:"title",fn:function(){return[n("van-search",{attrs:{shape:"round",background:"#e43130",placeholder:"搜索"},on:{focus:t.onFocus},scopedSlots:t._u([{key:"label",fn:function(){return[n("i",{staticClass:"my-iconfont"},[t._v("")])]},proxy:!0}],null,!1,3458316801),model:{value:t.value,callback:function(o){t.value=o},expression:"value"}})]},proxy:!0}],null,!1,459346907)})],1)],1)},e=[],i=n("7ad4"),r={name:"headerbar",components:{MorePup:i["a"]},props:["ishead","title","hascontainer"],data:function(){return{value:""}},computed:{isLoginTxt:function(){var t="登录";return this.$store.state.userToken&&(t='<i class="my-iconfont iconwodedangxuan"></i>'),t}},methods:{onClickLeft:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),setTimeout((function(){t.$toast.clear(),t.$router.push("/category")}),500)},onClickRight:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),setTimeout((function(){t.$toast.clear(),"登录"==t.isLoginTxt?t.$router.push("/login"):t.$router.push("/mine")}),500)},onFocus:function(){this.$router.push("/search")},onBackLeft:function(){this.$router.go(-1)}}},s=r,c=(n("017d"),n("2877")),l=Object(c["a"])(s,a,e,!1,null,"4da62320",null);o["a"]=l.exports},3907:function(t,o,n){"use strict";n.r(o);var a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"orderpay"},[n("van-sticky",[n("headerBar",{attrs:{ishead:t.showHead,title:t.myTitle}})],1),n("div",{staticClass:"price"},[n("p",[t._v(" ￥"),n("span",[t._v(t._s((t.totalPrice/100).toFixed(2)))])])]),n("div",{staticClass:"pay-way"},[n("van-radio-group",{model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[n("van-cell-group",[n("van-cell",{attrs:{title:"微信支付",clickable:""},on:{click:function(o){t.radio="1"}}},[n("div",{staticClass:"m-r-5",attrs:{slot:"icon"},slot:"icon"},[n("van-icon",{attrs:{name:"wechat",size:".56rem",color:"rgb(54, 203, 89)"}})],1),n("van-radio",{attrs:{slot:"right-icon","checked-color":"#f2270c",name:"1"},slot:"right-icon"})],1),n("van-cell",{attrs:{title:"支付宝支付",clickable:""},on:{click:function(o){t.radio="2"}}},[n("div",{staticClass:"m-r-5",attrs:{slot:"icon"},slot:"icon"},[n("van-icon",{attrs:{name:"alipay",size:".56rem",color:"rgb(1, 170, 239)"}})],1),n("van-radio",{attrs:{slot:"right-icon","checked-color":"#f2270c",name:"2"},slot:"right-icon"})],1),n("van-cell",{attrs:{title:"余额支付",clickable:""},on:{click:function(o){t.radio="3"}}},[n("div",{staticClass:"m-r-5",attrs:{slot:"icon"},slot:"icon"},[n("van-icon",{attrs:{name:"gold-coin",size:".56rem",color:"rgb(254, 142, 46)"}})],1),n("van-radio",{attrs:{slot:"right-icon","checked-color":"#f2270c",name:"3"},slot:"right-icon"})],1)],1)],1),n("div",{staticClass:"pay-btn"},[n("van-button",{attrs:{type:"primary",color:"#f2270c",round:"",block:""},on:{click:t.onPay}},[t._v("确认支付 ￥"+t._s((t.totalPrice/100).toFixed(2)))])],1)],1),n("van-dialog",{attrs:{"show-cancel-button":"","confirm-button-color":"#d81e06"},on:{cancel:t.onCancel,confirm:t.confirmDialog},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"mydialogtitle"},[n("i",{staticClass:"my-iconfont iconweixin"}),n("p",[t._v("微信支付")])])]},proxy:!0},{key:"default",fn:function(){return[n("div",{staticClass:"mydialogcontent"},[n("div",{staticClass:"erwm"},[n("img",{attrs:{src:t.payList.code_url}})]),n("ul",[n("li",[n("p",[t._v("订单编号:")]),n("p",[t._v(t._s(t.payList.order_no))])]),n("li",[n("span",[t._v("订单金额:")]),n("span",[t._v("￥"+t._s(t.payList.total_fee))])]),n("li",[n("span",[t._v("实际金额:")]),n("span",[t._v("￥"+t._s(t.payList.real_fee))])])])])]},proxy:!0}]),model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[n("img",{attrs:{src:"https://img.yzcdn.cn/vant/apple-3.jpg"}})]),n("van-popup",{style:{height:"50%"},attrs:{position:"bottom"},model:{value:t.showPassWord,callback:function(o){t.showPassWord=o},expression:"showPassWord"}},[n("van-password-input",{attrs:{value:t.value,info:"默认支付密码:123456",focused:t.showKeyboard},on:{focus:function(o){t.showKeyboard=!0}}}),n("van-number-keyboard",{attrs:{show:t.showKeyboard,theme:"custom","close-button-text":"确定",transition:"","safe-area-inset-bottom":""},on:{input:t.onInput,delete:t.onDelete,blur:function(o){t.showKeyboard=!0},close:t.onConfirm}})],1)],1)},e=[],i=(n("a15b"),n("fb6a"),n("b0c0"),n("ade3")),r=(n("e17f"),n("2241")),s=n("4328"),c=n.n(s),l=n("2293"),u={name:"orderpay",components:Object(i["a"])({headerBar:l["a"]},r["a"].Component.name,r["a"].Component),data:function(){return{uid:956538,showHead:!0,myTitle:"京东收银台",totalPrice:0,radio:"1",showPassWord:!1,value:"",showKeyboard:!0,show:!1,paysn:"",cart_id:"",payList:{}}},methods:{onPay:function(){var t=this;this.axios.post("https://api.ymduo.com/order/generate_orders",c.a.stringify({userid:this.uid,cart_id:this.cart_id.join(),addr_id:2957,use_balance:0,use_integral:0,is_pei:0,pf:1})).then((function(o){t.show=!0,t.paysn=o.data.result.data.pay_sn,o.data.result.data.pay_sn&&t.axios.post("https://api.ymduo.com/pay/wxPay",c.a.stringify({uid:t.uid,pay_sn:o.data.result.data.pay_sn})).then((function(o){t.payList=o.data.result.data}))}))},onCancel:function(){this.$toast.fail("操作已取消！"),this.$router.push("/orderlist")},confirmDialog:function(){this.showPassWord=!this.showPassWord,this.value=""},onInput:function(t){this.value=(this.value+t).slice(0,6)},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)},onConfirm:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),setTimeout((function(){"123456"==t.value?(t.showPassWord=!t.showPassWord,t.$toast.clear(),t.$toast.success("支付成功"),setTimeout((function(){t.$router.push("/orderlist")}),1e3)):(t.showPassWord=!t.showPassWord,t.$toast.clear(),t.$toast.fail("密码输入错误"))}),500)}},created:function(){this.totalPrice=this.$route.query.total,this.cart_id=this.$route.query.id}},f=u,d=(n("4f7e"),n("2877")),h=Object(d["a"])(f,a,e,!1,null,"39882e46",null);o["default"]=h.exports},"4f7e":function(t,o,n){"use strict";var a=n("e07f"),e=n.n(a);e.a},"550b":function(t,o,n){"use strict";var a=n("8acc"),e=n.n(a);e.a},"6d98":function(t,o,n){},"7ad4":function(t,o,n){"use strict";var a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"morepopup"},[t.hascontainer?t._e():n("div",{staticClass:"right-icon",on:{click:t.onClickRight}},[n("van-icon",{attrs:{name:"more-o",color:"#000",size:"28px"}})],1),n("van-popup",{attrs:{"overlay-class":"myoverlay","close-on-popstate":""},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[n("ul",[n("li",{on:{click:t.toHome}},[n("van-icon",{attrs:{name:"home-o",color:"#fff"}}),n("strong",[t._v("首页")])],1),n("li",{on:{click:t.toSearch}},[n("van-icon",{attrs:{name:"search",color:"#fff"}}),n("strong",[t._v("分类搜索")])],1),n("li",{on:{click:t.toMine}},[n("van-icon",{attrs:{name:"user-o",color:"#fff"}}),n("strong",[t._v("我的京东")])],1),n("li",{on:{click:t.toFootprint}},[n("van-icon",{attrs:{name:"eye-o",color:"#fff"}}),n("strong",[t._v("浏览记录")])],1),n("li",{on:{click:function(o){return t.$toast("我的关注")}}},[n("van-icon",{attrs:{name:"like-o",color:"#fff"}}),n("strong",[t._v("我的关注")])],1)])])],1)},e=[],i={name:"morepopup",props:["hascontainer"],data:function(){return{show:!1}},methods:{onClickRight:function(){this.show=!0},toHome:function(){this.$router.push("/home"),this.$store.dispatch("setNavbarActive",0)},toSearch:function(){this.$router.push("/category"),this.$store.dispatch("setNavbarActive",1)},toMine:function(){this.$router.push("/mine"),this.$store.dispatch("setNavbarActive",4)},toFootprint:function(){this.$router.push("/myfootprint")}}},r=i,s=(n("550b"),n("2877")),c=Object(s["a"])(r,a,e,!1,null,null,null);o["a"]=c.exports},8418:function(t,o,n){"use strict";var a=n("c04e"),e=n("9bf2"),i=n("5c6c");t.exports=function(t,o,n){var r=a(o);r in t?e.f(t,r,i(0,n)):t[r]=n}},"8acc":function(t,o,n){},a15b:function(t,o,n){"use strict";var a=n("23e7"),e=n("44ad"),i=n("fc6a"),r=n("a640"),s=[].join,c=e!=Object,l=r("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a640:function(t,o,n){"use strict";var a=n("d039");t.exports=function(t,o){var n=[][t];return!!n&&a((function(){n.call(null,o||function(){throw 1},1)}))}},ade3:function(t,o,n){"use strict";function a(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}n.d(o,"a",(function(){return a}))},ae40:function(t,o,n){var a=n("83ab"),e=n("d039"),i=n("5135"),r=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,o){if(i(s,t))return s[t];o||(o={});var n=[][t],l=!!i(o,"ACCESSORS")&&o.ACCESSORS,u=i(o,0)?o[0]:c,f=i(o,1)?o[1]:void 0;return s[t]=!!n&&!e((function(){if(l&&!a)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,f)}))}},b0c0:function(t,o,n){var a=n("83ab"),e=n("9bf2").f,i=Function.prototype,r=i.toString,s=/^\s*function ([^ (]*)/,c="name";a&&!(c in i)&&e(i,c,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(t){return""}}})},e07f:function(t,o,n){},e8b5:function(t,o,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fb6a:function(t,o,n){"use strict";var a=n("23e7"),e=n("861d"),i=n("e8b5"),r=n("23cb"),s=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),f=n("1dde"),d=n("ae40"),h=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),m=[].slice,y=Math.max;a({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,o){var n,a,u,f=c(this),d=s(f.length),h=r(t,d),p=r(void 0===o?d:o,d);if(i(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?e(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(f,h,p);for(a=new(void 0===n?Array:n)(y(p-h,0)),u=0;h<p;h++,u++)h in f&&l(a,u,f[h]);return a.length=u,a}})}}]);
//# sourceMappingURL=chunk-2455ead7.d7aa14df.js.map