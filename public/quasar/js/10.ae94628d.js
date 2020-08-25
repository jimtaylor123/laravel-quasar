(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"46b2":function(e,r,t){"use strict";var s=t("f0e4d"),a=t.n(s);a.a},d4ad:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("q-page",{staticClass:"image-background"},[t("div",{staticClass:"fixed-center login-form"},[t("div",{},[t("q-card",{},[t("q-card-section",[t("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(r){var s=r.valid;return[t("q-form",{on:{submit:function(e){e.preventDefault()}}},[t("div",{},[t("p",{staticClass:"text-h6 text-center q-pb-sm"},[e._v("\n                  "+e._s(e.$t("login.title"))+"\n                ")])]),t("validation-provider",{ref:"username",attrs:{vid:"username",name:e.$t("login.form.username"),rules:e.form_rules.username},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[t("div",{},[t("q-input",{attrs:{id:"username",name:"username",type:"text",label:e.$t("login.form.username"),error:e.hasErrors(s),"error-message":s[0]},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1)]}}],null,!0)}),t("validation-provider",{ref:"password",attrs:{vid:"password",name:e.$t("login.form.password"),rules:e.form_rules.password},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.errors;return[t("div",{},[t("q-input",{attrs:{id:"password",name:"password",type:"password",label:e.$t("login.form.password"),error:e.hasErrors(s),"error-message":s[0]},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1)]}}],null,!0)}),t("div",{staticClass:"text-center"},[t("q-btn",{staticClass:"q-mt-md",attrs:{type:"submit",loading:e.loader,disable:!s,label:e.$t("login.title"),color:"teal"},on:{click:e.submit},scopedSlots:e._u([{key:"loading",fn:function(){return[t("q-spinner")]},proxy:!0}],null,!0)})],1)],1)]}}])})],1)],1)],1)])])},a=[],o=(t("5319"),t("c973")),n=t.n(o),i=t("ded3"),u=t.n(i),l=t("2f62"),d=t("b012"),f=t("6fea"),c=t("2ef0"),m=t.n(c),p=t("7bb1"),h=t("039f"),b={name:"Login",components:{ValidationObserver:p["a"],ValidationProvider:h["ValidationProvider"]},watch:{"form.username"(e){this.$refs.observer.$data.isAuth&&(this.$refs.observer.$data.isAuth=!1,this.$refs.password.reset())},"form.password"(e){this.$refs.observer.$data.isAuth&&(this.$refs.observer.$data.isAuth=!1,this.$refs.username.reset())}},computed:u()({},Object(l["c"])("auth",["isAuth"])),methods:u()(u()({},Object(l["b"])("auth",["setAuthStatus","setUserData","storeToken"])),{},{submit(){var e=this;return n()((function*(){const r=yield e.$refs.observer.validate();if(!r)return!1;e.login()}))()},hasErrors(e){return!m.a.isEmpty(e)},login(){this.loader=!0,d["a"].login(this.form).then(e=>{this.storeToken(e),this.setAuthStatus(!0),this.setUserData(m.a.get(e,["data","user_data"],{}));const r=m.a.get(this.$route,["query","redirect"]);r?this.$router.replace(r):this.$router.replace({name:"auth.user"})}).catch(e=>{const r=f["a"].hasErrors(e);r&&f["a"].setErrors(this.$refs.observer,r)}).then(()=>{this.loader=!1})}}),data(){return{loader:!1,form:{username:null,password:null,grant_type:"password"},form_rules:{username:"required|max:50",password:"required|min:8",grant_type:"required"}}},beforeRouteEnter(e,r,t){t(e=>{e.isAuth&&e.$router.replace({name:"public.index"})})},meta(){return{title:this.$t("page_titles.login_title")}}},v=b,$=(t("46b2"),t("2877")),g=t("9989"),w=t("f09f"),_=t("a370"),q=t("0378"),y=t("27f9"),k=t("9c40"),x=t("0d59"),A=t("eebe"),E=t.n(A),S=Object($["a"])(v,s,a,!1,null,"024b07b5",null);r["default"]=S.exports;E()(S,"components",{QPage:g["a"],QCard:w["a"],QCardSection:_["a"],QForm:q["a"],QInput:y["a"],QBtn:k["a"],QSpinner:x["a"]})},f0e4d:function(e,r,t){}}]);