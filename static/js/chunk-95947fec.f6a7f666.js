(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95947fec"],{1148:function(t,e,n){"use strict";var r=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var e=String(i(this)),n="",a=r(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},"2f9d":function(t,e,n){t.exports=n.p+"static/img/avatar.1815bb46.jpeg"},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"9bf2e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("div",{attrs:{id:"header"}},[t._m(0),n("div",{staticClass:"header-box"},[n("div",[n("div",{attrs:{id:"bg"}}),n("h1",[t._v("个人基本信息")]),n("img",{attrs:{src:t.userBaseInfo.avatar}}),n("table",{attrs:{border:"0",width:"100%"}},[n("tr",{attrs:{align:"center"}},[n("td",{attrs:{colspan:"2"}},[t._v(" 姓名："+t._s(t.userBaseInfo.name)+" ")])]),n("tr",{attrs:{align:"left"}},[n("td",[t._v(" 学历："+t._s(t.userBaseInfo.education)+" ")]),n("td",[t._v(" 性别："+t._s(t.userBaseInfo.sex?"男":"女")+" ")])]),n("tr",{attrs:{align:"left"}},[n("td",[t._v(" 年龄："+t._s(t.getAge(t.userBaseInfo.birthday))+" ")]),n("td",[t._v(" 生日："+t._s((t.userBaseInfo.birthday%1e4<1e3?"0":"")+(t.userBaseInfo.birthday%1e4/100).toFixed(0)+"-"+(t.userBaseInfo.birthday%100<10?"0":"")+t.userBaseInfo.birthday%100)+" ")])])])]),n("div",[n("h1",[t._v("金融属性")]),n("span"),t._l(t.userPOF,(function(e,r){return n("p",{key:r},[t._v(" "+t._s((r<10?"0":"")+(r+1))+"、"+t._s(e.type)+"："+t._s(e.coust+e.unit)+" ")])}))],2),n("div",[n("h1",[t._v("非金融属性")]),n("span",{staticStyle:{margin:"30px"},attrs:{contenteditable:"true"}}),t._l(t.userUnPOF,(function(e,r){return n("p",{key:r,staticStyle:{fontSize:"16px",margin:"8px 10px"}},[t._v(" "+t._s((r<10?"0":"")+(r+1))+"、"+t._s(e.type)+"："+t._s(e.value)+" ")])}))],2)])]),t._l(t.userInfo,(function(e,r){return n("div",{key:r,staticClass:"userInfo"},[n("div",{attrs:{id:"userInfo-title"}},[n("p",{style:4==e.title.length?"width: 70px;":"width: 90px;"},[t._v(t._s(e.title))])]),n("div",{attrs:{id:"userInfo-content"}},[n("div",{staticClass:"content-left",style:e.content.length<=9?"width: 100%;":""},t._l(e.content.length>9?e.content.slice(0,Math.round(e.content.length/2)):e.content,(function(e,r){return n("p",{key:r},[t._v(t._s(e))])})),0),e.content.length>9?n("div",{staticClass:"content-right"},t._l(e.content.slice(Math.round(e.content.length/2)),(function(e,r){return n("p",{key:r},[t._v(t._s(e))])})),0):t._e()])])}))],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slogan"}},[n("p",[t._v("享略之旅")])])}],a=(n("b680"),{data:function(){return{userBaseInfo:{avatar:n("2f9d"),name:"唐佩奇",sex:!0,education:"小学",birthday:20000513},userPOF:[{type:"信用卡",coust:"2",unit:"张"},{type:"存款",coust:"10",unit:"万"},{type:"理财",coust:"30",unit:"万"},{type:"保险",coust:"20",unit:"万"},{type:"基金",coust:"10",unit:"万"}],userUnPOF:[{type:"工作单位",value:"无业游民"},{type:"婚姻状态",value:"单身"},{type:"工作地址",value:"不定期更换"},{type:"是否有娃",value:"否"},{type:"车辆信息",value:"10辆"}],userInfo:[{title:"按揭房产信息",content:["是否首套房：否","是否提前还款：是，已提前还款-10亿","工作单位：无业游民","名下是否有工商营业执照信息：有，不告诉你","楼盘名称：英国伦敦西区高级中产阶级生活区","放款日期：2220-02-22","放款金额：100亿","剩余金额：101亿","贷款经办客户经理：吴铭","在我行的房贷数量：10套","配偶信息：无","客户住址：柯伊伯带外太阳系内太阳系第三行星地球","是否出客户代表：否","贷款利息：99.9%","还款方式： Q币","最近还款一期还款金额：-10亿","贷款状态：异常"]},{title:"重要事件",content:["1、2020年07月毕业","2、2020年07月失业","3、2022年03月15日用了五年的手机字库烧坏数据全毁"]},{title:"金融产品",content:["1、理财：30亿","2、保险：20亿","3、按揭贷款：60亿"]},{title:"活动推荐",content:["1、佩奇之家白开水鉴品会","2、世界自然基金会地球一个月关灯一个月","3、撒哈拉沙漠徒步旅行私享活动"]},{title:"营销线索",content:["1、客户理财将于2220年09月10日到期。","2、客户未办理我行所有产品。","3、客户未参加微信抢红包活动。"]},{title:"营销过程记录",content:["1、2202年05月01日致电客户，客户未接电话。","2、2202年05月03日第二次致电客户，介绍我行抢银行活动，客户表示需要考虑。","3、2202年05月21日第三次致电客户，约定下周到我行进行抢银行活动。"]}]}},methods:{getAge:function(t){var e=100*(100*(new Date).getFullYear()+((new Date).getMonth()+1))+(new Date).getDate(),n=(e-t)/1e4;return n.toFixed(0)}}}),s=a,o=(n("def8"),n("0c7c")),u=Object(o["a"])(s,r,i,!1,null,"5db5706c",null);e["default"]=u.exports},b680:function(t,e,n){"use strict";var r=n("23e7"),i=n("a691"),a=n("408a"),s=n("1148"),o=n("d039"),u=1..toFixed,c=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){u.call({})}));r({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,n,r,o,u=a(this),d=i(t),v=[0,0,0,0,0,0],h="",p="0",_=function(t,e){var n=-1,r=e;while(++n<6)r+=t*v[n],v[n]=r%1e7,r=c(r/1e7)},g=function(t){var e=6,n=0;while(--e>=0)n+=v[e],v[e]=c(n/t),n=n%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var n=String(v[t]);e=""===e?n:e+s.call("0",7-n.length)+n}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(h="-",u=-u),u>1e-21)if(e=f(u*l(2,69,1))-69,n=e<0?u*l(2,-e,1):u/l(2,e,1),n*=4503599627370496,e=52-e,e>0){_(0,n),r=d;while(r>=7)_(1e7,0),r-=7;_(l(10,r,1),0),r=e-1;while(r>=23)g(1<<23),r-=23;g(1<<r),_(1,1),g(2),p=y()}else _(0,n),_(1<<-e,0),p=y()+s.call("0",d);return d>0?(o=p.length,p=h+(o<=d?"0."+s.call("0",d-o)+p:p.slice(0,o-d)+"."+p.slice(o-d))):p=h+p,p}})},def8:function(t,e,n){"use strict";var r=n("f1f5"),i=n.n(r);i.a},f1f5:function(t,e,n){}}]);