(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],u=0,h=[];u<a.length;u++)r=a[u],n[r]&&h.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/assets/assets/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"0fe1":function(t,e,s){},"131f":function(t,e,s){},"15bb":function(t,e,s){"use strict";var i=s("0fe1"),n=s.n(i);n.a},"1ac0":function(t,e,s){"use strict";var i=s("9e37"),n=s.n(i);n.a},"1ba7":function(t,e,s){},"1e8b":function(t,e){},"1ea2":function(t,e,s){},"1fe3":function(t,e,s){"use strict";var i=s("e879"),n=s.n(i);n.a},"42c7":function(t,e,s){},"45a3":function(t,e,s){"use strict";var i=s("7122"),n=s.n(i);n.a},"4deb":function(t,e,s){},"6dcf":function(t,e,s){"use strict";var i=s("a13b"),n=s.n(i);n.a},"6f57":function(t,e,s){"use strict";var i=s("1ba7"),n=s.n(i);n.a},7122:function(t,e,s){},"79d6":function(t,e,s){"use strict";var i=s("4deb"),n=s.n(i);n.a},8643:function(t,e,s){"use strict";var i=s("1ea2"),n=s.n(i);n.a},8753:function(t,e,s){},"97fb":function(t,e,s){"use strict";var i=s("131f"),n=s.n(i);n.a},"98c9":function(t,e,s){"use strict";var i=s("b3cc"),n=s.n(i);n.a},"9e37":function(t,e,s){},a13b:function(t,e,s){},a1e4:function(t,e,s){},a79f:function(t,e,s){"use strict";var i=s("8753"),n=s.n(i);n.a},b3cc:function(t,e,s){},c1c3:function(t,e,s){},c253:function(t,e,s){"use strict";var i=s("e157"),n=s.n(i);n.a},c553:function(t,e,s){"use strict";var i=s("d83e"),n=s.n(i);n.a},cd49:function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=s("2f62");const o={setWidth:"setWidth",setHeight:"setHeight",setPoints:"setPoints",setSrc:"setSrc",setActiveTool:"setActiveTool"},r={addPoint:"addPoint",clearPoints:"clearPoints"};var a;(function(t){t[t["circle"]=0]="circle",t[t["square"]=1]="square",t[t["pencil"]=2]="pencil"})(a||(a={}));let c={src:"",width:0,heigth:0,points:[],activeTool:a.pencil};var l={state:c,mutations:{[o.setWidth]:(t,e)=>{t.width=e},[o.setHeight]:(t,e)=>{t.heigth=e},[o.setSrc]:(t,e)=>{t.src=e},[o.setPoints]:(t,e)=>{t.points=e},[o.setActiveTool]:(t,e)=>{t.activeTool=e}},getters:{getScreenSrc:t=>t.src,getScreenWidth:t=>t.width,getScreenHeight:t=>t.heigth,getScreenPoints:t=>t.points,getScreenActiveTool:t=>t.activeTool},actions:{[r.addPoint]:(t,e)=>{return new Promise(s=>{let i=t.state.points.concat([e]);t.commit(o.setPoints,i),s()})},[r.clearPoints]:t=>{return new Promise(e=>{t.commit(o.setPoints,[]),e()})}}};i["default"].use(n["a"]);const d=new n["a"].Store({modules:{screen:l}});var u=d,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("modal",{staticClass:"bug-report-tool-modal",attrs:{name:"bug-report-tool",width:"80%",height:"80%"}},[s("bug-report-tool")],1),s("notifications",{attrs:{group:"success-message"}}),s("button",{on:{click:t.showModal}},[t._v("asd")]),s("application-navigation")],1)},m=[],f=s("9ab4"),g=s("2fe1"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"application-navigation"},[s("div",{staticClass:"application-navigation__buttons"},[s("i",{staticClass:"fas fa-camera",on:{click:t.showCanvasModal}}),s("i",{staticClass:"fas fa-list-ul",on:{click:t.showListMenu}})])])},p=[];let b=class extends i["default"]{showCanvasModal(){}showListMenu(){}};b=f["a"]([Object(g["b"])({})],b);var w=b,_=w,x=(s("c253"),s("2877")),C=Object(x["a"])(_,v,p,!1,null,"94c3d0c2",null),T=C.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-report-tool"},[s("loader",{attrs:{loading:t.loading}}),Object.keys(t.schema).length?s("form-builder",{ref:"form",attrs:{schema:t.schema,model:t.model,"form-error":t.formError}}):t._e()],1)},O=[],P=s("4309"),y=s.n(P);const j={options:t=>{return Object.assign({validateAfterLoad:!1,validateAfterChanged:!0},t)},description:(t="description",e={})=>{return Object.assign({type:"textArea",model:t,max:2e3,min:20,required:!0,validator:P["validators"].string},e)},errorsList:(t,e,s={})=>{return Object.assign({type:"errors-list",count:e,model:t},s)},submit:(t,e={})=>{return Object.assign({type:"submit",buttonText:"Отправить",validateBeforeSubmit:!0,onSubmit:t},e)},button:(t,e,s={})=>{return Object.assign({type:"cbutton",text:t,onClick:e,class:"button__orange"},s)},imageWorker:(t={})=>{return Object.assign({model:"image",type:"image-worker"},t)}};var S=s("4a35");class ${}class k extends ${constructor(t){super(),this.meta=t.meta,this.image=t.image,this.description=t.description}}const A={controller:"bugReport",sufix:"/"};var I=A,L=s("bc3a"),M=s.n(L),R=s("7317"),D=s.n(R);class H{post(t,e=null){let s=this.getCSRFToken();s&&Object.assign(e,s);let i=D()(e);return this.send(t,H.POST_METHOD,{data:i})}get(t,e=null){let s=this.getCSRFToken();return s&&Object.assign(e,s),this.send(t,H.GET_METHOD,{params:e})}put(t,e=null){let s=this.getCSRFToken();return s&&Object.assign(e,s),this.send(t,H.PUT_METHOD,{data:e})}delete(t,e=null){let s=this.getCSRFToken();return s&&Object.assign(e,s),this.send(t,H.DELETE_METHOD,{data:e})}send(t,e,s){return new Promise((i,n)=>{let o=`/${I.controller}/${t}${I.sufix}`,r={headers:{"Content-Type":"post"===e?"multipart/form-data;charset=UTF-8":"applocation/json;charset=UTF-8"},url:o,responseType:"json",method:e};s&&Object.assign(r,s),M()(r).then(t=>{let e=[H.OK,H.CREATED,H.DELETED];if(e.some(e=>t.status===e))return console.log("lol"),void i(t.data);n(t.data)}).then(t=>{n(t.data)}).catch(t=>{let e=t.response,s=e.status;s&&s===H.UNAUTHORIZED&&n({code:s,message:"Авторизуйся і спробуйте ще раз."});let i=t.response.message;i||(i=t.response.data.message),i||(i=t.response.data[0].message),i||(i="Виникла помилка. Повторіть спробу пізніше."),n({code:s,message:i})})})}getCSRFToken(){let t=document.querySelector('meta[name="csrf-token"]'),e=document.querySelector('meta[name="csrf-param"]');return t&&e?{[e.content]:t.content}:null}}H.OK=200,H.CREATED=201,H.DELETED=204,H.BAD_REQUEST=400,H.UNAUTHORIZED=401,H.FORBIDDEN=403,H.NOT_FOUND=404,H.VALIDATION_FAILED=422,H.INTERNAL_SERVER_ERROR=500,H.SERVICE_UNAVAILABLE=503,H.POST_METHOD="post",H.GET_METHOD="get",H.PUT_METHOD="put",H.DELETE_METHOD="delete";var F=new H;class U{getAll(t){return new Promise((e,s)=>{const i=t?t.getProps():{};F.get(this.action,i).then(t=>{e(this.createCollection(t))},s)})}create(t={}){return new Promise((e,s)=>{F.post(this.action,t).then(t=>{e(this.createModel(t))},s)})}update(t,e){return new Promise((s,i)=>{F.put(`${this.action}/${t}`,e).then(t=>{s(this.createModel(t))},i)})}deleteById(t){return new Promise((e,s)=>{F.delete(`${this.action}/${t}`).then(e,s)})}deleteByAttributes(t){return new Promise((e,s)=>{F.delete(this.action,t.getProps()).then(e,s)})}findById(t,e){return new Promise((s,i)=>{const n=e?e.getProps():{};F.get(`${this.action}/${t}`,n).then(t=>{try{s(this.createModel(t))}catch(e){i()}},i)})}findByAttributes(t){return new Promise((e,s)=>{F.get(this.action,t.getProps()).then(t=>{e(this.createCollection(t))},s)})}}class W{constructor(){this.entities=[]}setEntity(t){this.entities.push(this.createModel(t))}setEntities(t){this.entities=this.entities.map(t=>{return this.createModel(t)})}isEmpty(){return!this.entities.length}getEntities(){return this.entities}}class q extends W{createModel(t){return new k(t)}}class B extends U{constructor(){super(...arguments),this.action="issue"}createModel(t){return new k(t)}createCollection(t){let e=new q;return e.setEntities(t),e}}let N=class extends i["default"]{constructor(){super(...arguments),this.formError="",this.count=0,this.loading=!1,this.model={description:"",errors:[]}}beforeMount(){this.generateSchema()}generateSchema(){this.schema={groups:[{legend:"Image",styleClasses:"form-custom-group image-worker",fields:[j.imageWorker()]},{legend:"Description",styleClasses:"form-custom-group description",fields:[j.description("description",{label:"Описание ошибки",placeholder:"Описание ошибки"}),j.submit(this.submitForm)]}],loading:!1}}submitForm(){let t=document.getElementById("bg-canvas");t&&(this.loading=!0,t.toBlob(t=>{const e=Object(S["detect"])();if(!e||!t)return;let s=new File([t],"image.png"),i={description:this.model.description,image:s,meta:{href:window.location.href,viewportHeight:window.innerHeight,viewportWidth:window.innerWidth,scrollX:window.scrollX,scrollY:window.scrollY,browser:e.name,browserVersion:e.version,os:e.os,source:window.navigator.userAgent}},n=new k(i),o=new B;o.create(n).then(t=>{this.$modal.hide("bug-report-tool"),this.$notify({group:"success-message",type:"success",title:"Успех!",text:`Правка "${this.model.description.trim()}" была успешно сохранена!`}),this.loading=!1},t=>{this.formError=t.message,this.loading=!1})}))}};N=f["a"]([Object(g["b"])({})],N);var V=N,X=V,Y=(s("97fb"),s("15bb"),Object(x["a"])(X,E,O,!1,null,"1a764acc",null)),G=Y.exports;let J=class extends i["default"]{showModal(){this.$modal.show("bug-report-tool")}beforeMount(){let t=["Q".charCodeAt(0),"W".charCodeAt(0),"E".charCodeAt(0)],e={};document.onkeydown=s=>{s=s||window.event,Object.assign(e,{[s.keyCode]:!0});for(var i=0;i<t.length;i++)if(!e[t[i]])return;e={},this.showModal()},document.onkeyup=function(t){t=t||window.event,delete e[t.keyCode]}}};J=f["a"]([Object(g["b"])({components:{"application-navigation":T,"bug-report-tool":G}})],J);var K=J,Q=K,Z=(s("c553"),s("e5d6"),s("79d6"),Object(x["a"])(Q,h,m,!1,null,"9311ca78",null)),z=Z.exports,tt=s("1881"),et=s.n(tt),st=(s("92bd"),s("ee98")),it=s.n(st);s("c1c3"),s("1e8b");const nt={fieldIsRequired:"Поле обов'язкове для заповнення",invalidFormat:"Невірний формат данних",fieldIsPasswords:"Значення в полях мають співпадати",numberTooSmall:"Число занадто мале. Мінімум:&nbsp;{0}",numberTooBig:"Число занадто велике. Максимум:&nbsp;{0}",invalidNumber:"Невірне число",invalidInteger:"Поле має містити лише цифри",textTooSmall:"Поле має містити мінімум {1} символи",textTooBig:"Поле має містити не більше ніж {1} символів.Довжина тексту занадто велика",thisNotText:"Це не текст",thisNotArray:"Це не массив",currentDateError:"Зазначена дата некоректна",selectMinItems:"Оберіть щонайменше {0} елементів",selectMaxItems:"Оберіть щонайбільше {0} елементів",invalidDate:"Обрана дата некоректна",dateIsEarly:"Обрана дата некоректна. Обрана:&nbsp;{0}, мінімальна:&nbsp;{1}",dateIsLate:"Обрана дата некоректна. Обрана:&nbsp;{0}, максимальна:&nbsp;{1}",invalidEmail:"Неправильний формат електронної адреси",invalidURL:"Невірно вказана адресса",invalidCard:"Невірно вказаний номер карти",invalidCardNumber:"Невірно вказаний номер карти",invalidTextContainNumber:"Невірно вказаний текст. Текст не може містити числа або спеціальні символи",invalidTextContainSpec:"Невірно вказаний текст. Текст не може містити спеціальні символи",requirePassword:"Паролі не збігаються. Перевір ще раз."};for(const[pe,be]of Object.entries(nt))y.a.validators.resources[pe]=be;var ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticClass:"loader-wrap"},[s("svg",{staticClass:"loader",attrs:{viewBox:"0 0 100 100",overflow:"visible"}},[s("g",{staticClass:"core"},[s("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"1",fill:"none"}})]),s("g",{staticClass:"spinner"},[s("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])]):t._e()},rt=[];let at=class extends i["default"]{};at=f["a"]([Object(g["b"])({props:{loading:Boolean}})],at);var ct=at,lt=ct,dt=(s("6dcf"),Object(x["a"])(lt,ot,rt,!1,null,"403eba3d",null)),ut=dt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button",class:t.schema.class,attrs:{"xmlns:v-on":"http://www.w3.org/1999/xhtml","xmlns:v-bind":"http://www.w3.org/1999/xhtml"}},[s("div",{staticClass:"button_wrap"},[s("a",{staticClass:"button_link",attrs:{href:"javascript:void(0)"},on:{click:t.schema.onClick}},[s("div",{staticClass:"button_text"},[t._v(t._s(t.schema.text))])])])])},mt=[];let ft=class extends i["default"]{};ft=f["a"]([Object(g["b"])({mixins:[P["abstractField"]]})],ft);var gt=ft,vt=gt,pt=(s("a79f"),Object(x["a"])(vt,ht,mt,!1,null,"3053b88f",null)),bt=pt.exports,wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-builder",attrs:{"xmlns:v-on":"http://www.w3.org/1999/xhtml"}},[s("div",{staticClass:"form-builder_wrap",on:{click:function(e){t.isTouched=!0}}},[s("vue-form-generator",{ref:"form",attrs:{tag:"div",schema:t.formSchema,model:t.model,options:t.formOptions}}),!t.isTouched&&t.formError?s("label",{staticClass:"form-error",domProps:{innerHTML:t._s(t.formError)}}):t._e()],1),t.button?s("div",{staticClass:"button button_submit",class:t.button.class,attrs:{"xmlns:v-on":"http://www.w3.org/1999/xhtml","xmlns:v-bind":"http://www.w3.org/1999/xhtml"}},[s("loader",{attrs:{loading:t.schema.loading}}),s("div",{staticClass:"button_wrap",on:{click:t.submit}},[s("a",{staticClass:"button_link",attrs:{href:"javascript:void(0);"}},[s("div",{staticClass:"button_text"},[t._v(t._s(t.button.text))])])])],1):t._e(),t._t("default")],2)},_t=[],xt=s("60a3");let Ct=class extends i["default"]{formErrorChange(){this.$data.isTouched=!1}data(){return{button:null,isTouched:!1}}submit(){this.$refs.form.validate()&&(this.$data.isTouched=!1,this.$data.button.submit())}};f["a"]([Object(xt["a"])("$props.formError")],Ct.prototype,"formErrorChange",null),Ct=f["a"]([Object(g["b"])({props:{schema:Object,model:Object,formOptions:{type:Object,default:()=>{return j.options()}},formError:{type:String,default:""}},computed:{formSchema(){const t=Object.assign({},this.$props.schema);return t}}})],Ct);var Tt=Ct,Et=Tt,Ot=(s("45a3"),Object(x["a"])(Et,wt,_t,!1,null,null,null)),Pt=Ot.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"errors-list"},[t._v(" \nsome\n")])},jt=[];let St=class extends i["default"]{};St=f["a"]([Object(g["b"])({mixins:[P["abstractField"]]})],St);var $t=St,kt=$t,At=(s("8643"),Object(x["a"])(kt,yt,jt,!1,null,"f3d49a7e",null)),It=At.exports,Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image-worker"},[s("div",{staticClass:"image-worker__navigation"},[s("div",{staticClass:"image-worker__tools"},[s("div",{staticClass:"image-worker__tool"},[s("circle-tool")],1),s("div",{staticClass:"image-worker__tool"},[s("square-tool")],1),s("div",{staticClass:"image-worker__tool"},[s("point-tool")],1)]),s("div",{staticClass:"image-worker__load-methods"},[s("div",{staticClass:"image-worker__load-method download-field"},[s("input",{staticClass:"download-field__input",attrs:{type:"file",id:"download-field",accept:"image/x-png,image/gif,image/jpeg"},on:{change:t.loadImage}}),s("label",{staticClass:"download-field__label",attrs:{for:"download-field"}},[t._v("Загрузить")])]),s("div",{staticClass:"image-worker__separator"},[t._v("/")]),s("div",{staticClass:"image-worker__load-method",on:{click:t.makeScreen}},[t._v("Сделать скрин")])])]),s("div",{staticClass:"image-worker__canvas"},[s("canvas-module")],1)])},Mt=[],Rt=s("c0e9"),Dt=s.n(Rt),Ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"canvas-module",attrs:{id:"bg-canvas-wrap"}},[s("canvas",{ref:"canvas",attrs:{id:"bg-canvas"}})])},Ft=[];let Ut=class extends i["default"]{get screenWidth(){return this.$store.getters.getScreenWidth}get screenHeight(){return this.$store.getters.getScreenHeight}get screenSrc(){return this.$store.getters.getScreenSrc}get screenPoints(){return this.$store.getters.getScreenPoints}updateImageSrc(){this.setImageToCanvas()}updateScreenPoints(t){if(this.context){if(this.screenPoints.length<6){var e=this.screenPoints[0];return this.context.beginPath(),this.context.arc(e.x,e.y,this.context.lineWidth/2,0,2*Math.PI,!0),this.context.closePath(),void this.context.fill()}this.context.beginPath(),this.context.moveTo(this.screenPoints[0].x,this.screenPoints[0].y);for(var s=1;s<this.screenPoints.length-2;s++){var i=(this.screenPoints[s].x+this.screenPoints[s+1].x)/2,n=(this.screenPoints[s].y+this.screenPoints[s+1].y)/2;this.context.quadraticCurveTo(this.screenPoints[s].x,this.screenPoints[s].y,i,n),this.context.quadraticCurveTo(this.screenPoints[s].x,this.screenPoints[s].y,this.screenPoints[s+1].x,this.screenPoints[s+1].y)}this.context.stroke()}}mounted(){this.setImageToCanvas()}setImageToCanvas(){this.context=this.$refs.canvas.getContext("2d");var t=new Image;t.src=this.screenSrc,t.onload=e=>{let s=this.screenWidth,i=this.screenHeight,n=this.$refs.canvas;n&&this.context&&(n.setAttribute("width",`${s}px`),n.setAttribute("height",`${i}px`),this.context.drawImage(t,0,0,s,i))}}};f["a"]([Object(xt["a"])("screenSrc")],Ut.prototype,"updateImageSrc",null),f["a"]([Object(xt["a"])("screenPoints")],Ut.prototype,"updateScreenPoints",null),Ut=f["a"]([Object(g["b"])({})],Ut);var Wt=Ut,qt=Wt,Bt=(s("1fe3"),Object(x["a"])(qt,Ht,Ft,!1,null,"9c11f74e",null)),Nt=Bt.exports,Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"point-tool",class:{"point-tool__active":t.isActive()},on:{click:t.changeTool}},[s("i",{staticClass:"fas fa-pencil-alt"})])},Xt=[];let Yt=class extends i["default"]{constructor(){super(...arguments),this.started=!1}get activeTool(){return this.$store.getters.getScreenActiveTool}get screenHeight(){return this.$store.getters.getScreenHeight}get screenWidth(){return this.$store.getters.getScreenWidth}mounted(){let t=document.getElementById("bg-canvas");if(!t)throw Error("Can't find canvas or canvasWrap element");this.canvas=t,this.canvas.addEventListener("mousedown",this.mouseDown,!1),this.canvas.addEventListener("mousemove",this.mouseMove,!1),this.canvas.addEventListener("mouseup",this.mouseUp,!1)}destroy(){this.canvas&&(this.canvas.removeEventListener("mousedown",this.mouseDown,!1),this.canvas.removeEventListener("mousemove",this.mouseMove,!1),this.canvas.removeEventListener("mouseup",this.mouseUp,!1))}isActive(){return this.activeTool===a.pencil}changeTool(){this.$store.commit(o.setActiveTool,a.pencil)}mouseDown(t){this.$store.dispatch(r.addPoint,this.getPoint(t)).then(()=>{this.started=!0})}mouseMove(t){this.started&&this.$store.dispatch(r.addPoint,this.getPoint(t)).then(()=>{this.started=!0})}mouseUp(t){this.started&&this.$store.dispatch(r.clearPoints).then(()=>{this.started=!1})}getPoint(t){if(!this.canvas)return;let e=this.canvas.clientHeight,s=this.canvas.clientWidth,i=s/this.screenWidth,n=e/this.screenHeight;return{x:t.offsetX/i,y:t.offsetY/n}}};Yt=f["a"]([Object(g["b"])({})],Yt);var Gt=Yt,Jt=Gt,Kt=(s("fdba"),Object(x["a"])(Jt,Vt,Xt,!1,null,"99f9fad2",null)),Qt=Kt.exports,Zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"square-tool",class:{"square-tool__active":t.isActive()},on:{click:t.changeTool}},[s("i",{staticClass:"fas fa-square"})])},zt=[];let te=class extends i["default"]{get activeTool(){return this.$store.getters.getScreenActiveTool}isActive(){return this.activeTool===a.square}changeTool(){this.$store.commit(o.setActiveTool,a.square)}};te=f["a"]([Object(g["b"])({})],te);var ee=te,se=ee,ie=(s("98c9"),Object(x["a"])(se,Zt,zt,!1,null,"d7d874e4",null)),ne=ie.exports,oe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle-tool",class:{"circle-tool__active":t.isActive()},on:{click:t.changeTool}},[s("i",{staticClass:"far fa-circle"})])},re=[];let ae=class extends i["default"]{get activeTool(){return this.$store.getters.getScreenActiveTool}isActive(){return this.activeTool===a.circle}changeTool(){this.$store.commit(o.setActiveTool,a.circle)}};ae=f["a"]([Object(g["b"])({})],ae);var ce=ae,le=ce,de=(s("ec44"),Object(x["a"])(le,oe,re,!1,null,"3648eff5",null)),ue=de.exports;let he=class extends i["default"]{mounted(){document.addEventListener("paste",this.getImageFromClipboard)}destroy(){document.removeEventListener("paste",this.getImageFromClipboard)}getImageFromClipboard(t){if(t&&t.clipboardData){var e=t.clipboardData.items;for(let t in e){let i=e[t];if("file"===i.kind){var s=i.getAsFile();this.loadImageFromReader(s)}}}}makeScreen(){const t=document.querySelector("body");t&&(this.$modal.hide("bug-report-tool"),setTimeout(()=>{let e={x:window.scrollX,y:window.scrollY,width:window.innerWidth,height:window.innerHeight};Dt()(t,e).then(t=>{this.$store.commit(o.setWidth,t.width),this.$store.commit(o.setHeight,t.height),t.toBlob(t=>{let e=window.URL||window.webkitURL;this.$store.commit(o.setSrc,e.createObjectURL(t)),this.$modal.show("bug-report-tool"),console.log(this.$store.getters.getScreenSrc)})})},100))}loadImageFromReader(t){let e=new FileReader;e.readAsDataURL(t),e.onload=e=>fetch(e.target.result).then(t=>t.blob()).then(e=>{let s=window.URL||window.webkitURL,i=s.createObjectURL(e),n=window.URL||window.webkitURL,r=new Image;r.onload=t=>{let e=t.target.width,s=t.target.height;this.$store.commit(o.setWidth,e),this.$store.commit(o.setHeight,s),this.$store.commit(o.setSrc,i)},r.src=n.createObjectURL(t)})}loadImage(t){let e=t.target.files[0];e&&this.loadImageFromReader(e)}};he=f["a"]([Object(g["b"])({mixins:[P["abstractField"]],components:{"canvas-module":Nt,"point-tool":Qt,"square-tool":ne,"circle-tool":ue}})],he);var me=he,fe=me,ge=(s("6f57"),s("1ac0"),Object(x["a"])(fe,Lt,Mt,!1,null,"435f0b0d",null)),ve=ge.exports;i["default"].use(et.a),i["default"].use(it.a),i["default"].use(y.a),i["default"].component("loader",ut),i["default"].component("fieldCbutton",bt),i["default"].component("form-builder",Pt),i["default"].component("fieldErrorsList",It),i["default"].component("fieldImageWorker",ve),i["default"].config.productionTip=!1,new i["default"]({store:u,render:t=>t(z)}).$mount("#app")},d83e:function(t,e,s){},e157:function(t,e,s){},e5d6:function(t,e,s){"use strict";var i=s("a1e4"),n=s.n(i);n.a},e879:function(t,e,s){},ec44:function(t,e,s){"use strict";var i=s("edc5"),n=s.n(i);n.a},edc5:function(t,e,s){},fdba:function(t,e,s){"use strict";var i=s("42c7"),n=s.n(i);n.a}});
//# sourceMappingURL=app.js.map