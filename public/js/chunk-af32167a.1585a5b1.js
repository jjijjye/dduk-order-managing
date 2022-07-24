(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af32167a"],{"04b3":function(t,e,s){"use strict";s("de5f")},4304:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("vs-tabs",{key:t.isSmallerScreen,staticClass:"tabs-shadow-none",attrs:{position:t.isSmallerScreen?"top":"left",id:"profile-tabs"}},[e("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-user",label:t.isSmallerScreen?"":"General"}},[e("div",{staticClass:"tab-general md:ml-4 md:mt-0 mt-4 ml-0"},[e("user-settings-general")],1)]),e("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-lock",label:t.isSmallerScreen?"":"Change Password"}},[e("div",{staticClass:"tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0"},[e("user-settings-change-password")],1)]),e("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-info",label:t.isSmallerScreen?"":"Info"}},[e("div",{staticClass:"tab-info md:ml-4 md:mt-0 mt-4 ml-0"},[e("user-settings-info")],1)]),e("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-github",label:t.isSmallerScreen?"":"Social Links"}},[e("div",{staticClass:"tab-social-links md:ml-4 md:mt-0 mt-4 ml-0"},[e("user-settings-social-links")],1)]),e("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-link-2",label:t.isSmallerScreen?"":"Connections"}},[e("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"},[e("user-settings-connections")],1)]),e("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-bell",label:t.isSmallerScreen?"":"Notifications"}},[e("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"},[e("user-settings-notifications")],1)])],1)},l=[],n=(s("7f7f"),function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{"no-shadow":""}},[e("div",{staticClass:"flex flex-wrap items-center mb-base"},[e("vs-avatar",{staticClass:"mr-4 mb-4",attrs:{src:t.activeUserInfo.photoURL,size:"70px"}}),e("div",[e("vs-button",{staticClass:"mr-4 sm:mb-0 mb-2"},[t._v("Upload photo")]),e("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Remove")]),e("p",{staticClass:"text-sm mt-2"},[t._v("Allowed JPG, GIF or PNG. Max size of 800kB")])],1)],1),e("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e("vs-alert",{staticClass:"h-full my-4",attrs:{"icon-pack":"feather",icon:"icon-info",color:"warning"}},[e("span",[t._v("Your account is not verified. "),e("a",{staticClass:"hover:underline",attrs:{href:"#"}},[t._v("Resend Confirmation")])])]),e("vs-input",{staticClass:"w-full my-base",attrs:{"label-placeholder":"Company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),e("div",{staticClass:"flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)}),i=[],o={data:function(){return{username:"johny_01",name:this.$store.state.AppActiveUser.displayName,email:"john@admin.com",company:"SnowMash Technologies Pvt Ltd"}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},c=o,r=s("2877"),u=Object(r["a"])(c,n,i,!1,null,null,null),m=u.exports,d=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{"no-shadow":""}},[e("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Old Password"},model:{value:t.old_password,callback:function(e){t.old_password=e},expression:"old_password"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"New Password"},model:{value:t.new_password,callback:function(e){t.new_password=e},expression:"new_password"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Confirm Password"},model:{value:t.confirm_new_password,callback:function(e){t.confirm_new_password=e},expression:"confirm_new_password"}}),e("div",{staticClass:"flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)},b=[],v={data:function(){return{old_password:"",new_password:"",confirm_new_password:""}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},p=v,f=Object(r["a"])(p,d,b,!1,null,null,null),w=f.exports,h=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{"no-shadow":""}},[e("vs-textarea",{attrs:{label:"Bio",placeholder:"Your bio..."},model:{value:t.bio,callback:function(e){t.bio=e},expression:"bio"}}),e("div",{staticClass:"mt-8"},[e("label",{staticClass:"text-sm"},[t._v("Birth Date")]),e("flat-pickr",{staticClass:"w-full",attrs:{config:{dateFormat:"d F Y"}},model:{value:t.dob,callback:function(e){t.dob=e},expression:"dob"}})],1),e("div",{staticClass:"mt-8"},[e("label",{staticClass:"text-sm"},[t._v("Country")]),e("v-select",{attrs:{options:t.countryOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),e("div",{staticClass:"mt-8"},[e("label",{staticClass:"text-sm"},[t._v("Languages")]),e("v-select",{attrs:{multiple:"",closeOnSelect:!1,options:t.langOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.lang_known,callback:function(e){t.lang_known=e},expression:"lang_known"}})],1),e("vs-input",{staticClass:"w-full mt-8",attrs:{type:"number","label-placeholder":"Mobile"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),e("vs-input",{staticClass:"w-full mt-8",attrs:{"label-placeholder":"Website"},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}}),e("div",{staticClass:"mt-8 mb-base"},[e("label",{staticClass:"text-sm"},[t._v("Gender")]),e("div",{staticClass:"mt-2"},[e("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"male"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Male")]),e("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"female"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Female")]),e("vs-radio",{attrs:{"vs-value":"other"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Other")])],1)]),e("div",{staticClass:"flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)},C=[],g=s("c38f"),k=s.n(g),_=(s("0952"),s("4a7a")),x=s.n(_),y={components:{flatPickr:k.a,vSelect:x.a},data:function(){return{bio:this.$store.state.AppActiveUser.about,dob:null,country:"USA",lang_known:["English","Russian"],gender:"male",mobile:"",website:"",countryOptions:[{label:"Australia",value:"australia"},{label:"France",value:"france"},{label:"Germany",value:"germany"},{label:"India",value:"india"},{label:"Jordan",value:"jordan"},{label:"Morocco",value:"morocco"},{label:"Portuguese",value:"portuguese"},{label:"Syria",value:"syria"},{label:"USA",value:"usa"}],langOptions:[{label:"English",value:"english"},{label:"Spanish",value:"spanish"},{label:"French",value:"french"},{label:"Russian",value:"russian"},{label:"German",value:"german"},{label:"Arabic",value:"arabic"},{label:"Sanskrit",value:"sanskrit"}]}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},S=y,U=Object(r["a"])(S,h,C,!1,null,null,null),A=U.exports,j=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{"no-shadow":""}},[e("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-twitter",label:"GitHub","icon-no-border":""},model:{value:t.twitter,callback:function(e){t.twitter=e},expression:"twitter"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-facebook",label:"GitHub","icon-no-border":""},model:{value:t.facebook,callback:function(e){t.facebook=e},expression:"facebook"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-instagram",label:"GitHub","icon-no-border":""},model:{value:t.instagram,callback:function(e){t.instagram=e},expression:"instagram"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-github",label:"GitHub","icon-no-border":""},model:{value:t.github,callback:function(e){t.github=e},expression:"github"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-linkedin",label:"GitHub","icon-no-border":""},model:{value:t.linkedin,callback:function(e){t.linkedin=e},expression:"linkedin"}}),e("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-slack",label:"GitHub","icon-no-border":""},model:{value:t.slack,callback:function(e){t.slack=e},expression:"slack"}}),e("div",{staticClass:"flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)},G=[],O={data:function(){return{twitter:"https://twitter.com/adoptionism744",facebook:"https://www.facebook.com/adoptionism664",instagram:"https://www.instagram.com/adopt-ionism744/",github:"https://github.com/madop818",linkedin:"https://codepen.io/adoptism243",slack:"@adoptionism744"}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},I=O,$=Object(r["a"])(I,j,G,!1,null,null,null),P=$.exports,R=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{"no-shadow":""}},[e("div",{staticClass:"flex flex-wrap justify-between items-center mb-8"},[e("div",[e("p",[t._v("Account is connected with Google.")]),e("p",{staticClass:"font-medium mb-4"},[t._v("john@gmail.com")])]),e("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Disconnect")])],1),e("div",{staticClass:"flex flex-wrap justify-between items-center mb-base"},[e("div",[e("p",[t._v("Account is connected with facebook.")]),e("p",{staticClass:"font-medium mb-4"},[t._v("@pixinvents")])]),e("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Disconnect")])],1),e("vs-button",{staticClass:"mb-6 ml-auto",attrs:{color:"#00aaff","icon-pack":"feather",icon:"icon-twitter"}},[t._v("Connected To Twitter")]),e("vs-button",{staticClass:"ml-auto",attrs:{color:"#405DE6","icon-pack":"feather",icon:"icon-instagram"}},[t._v("Connected To Instagram")])],1)},E=[],N={data:function(){return{old_password:"",new_password:"",confirm_new_password:""}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},F=N,H=Object(r["a"])(F,R,E,!1,null,null,null),L=H.exports,M=function(){var t=this,e=t._self._c;return e("vx-card",{attrs:{"no-shadow":""}},[e("div",{staticClass:"mb-base"},[e("h6",{staticClass:"mb-4"},[t._v("Activity")]),e("div",{staticClass:"flex items-center mb-4"},[e("vs-switch",{model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),e("span",{staticClass:"ml-4"},[t._v("Email me when someone comments onmy article")])],1),e("div",{staticClass:"flex items-center mb-4"},[e("vs-switch",{model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),e("span",{staticClass:"ml-4"},[t._v("Email me when someone answers on my form")])],1),e("div",{staticClass:"flex items-center mb-4"},[e("vs-switch",{model:{value:t.follow,callback:function(e){t.follow=e},expression:"follow"}}),e("span",{staticClass:"ml-4"},[t._v("Email me hen someone follows me")])],1)]),e("div",[e("h6",{staticClass:"mb-4"},[t._v("Application")]),e("div",{staticClass:"flex items-center mb-4"},[e("vs-switch",{model:{value:t.news,callback:function(e){t.news=e},expression:"news"}}),e("span",{staticClass:"ml-4"},[t._v("News and announcements")])],1),e("div",{staticClass:"flex items-center mb-4"},[e("vs-switch",{model:{value:t.product_update,callback:function(e){t.product_update=e},expression:"product_update"}}),e("span",{staticClass:"ml-4"},[t._v("Weekly product updates")])],1),e("div",{staticClass:"flex items-center"},[e("vs-switch",{model:{value:t.blog,callback:function(e){t.blog=e},expression:"blog"}}),e("span",{staticClass:"ml-4"},[t._v("Weekly blog digest")])],1)]),e("div",{staticClass:"flex flex-wrap items-center justify-end mt-base"},[e("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),e("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)])},D=[],J={data:function(){return{comment:!0,answer:!0,follow:!1,news:!1,product_update:!1,blog:!0}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},T=J,W=Object(r["a"])(T,M,D,!1,null,null,null),B=W.exports,Y={components:{UserSettingsGeneral:m,UserSettingsChangePassword:w,UserSettingsInfo:A,UserSettingsSocialLinks:P,UserSettingsConnections:L,UserSettingsNotifications:B},data:function(){return{}},computed:{isSmallerScreen:function(){return this.$store.state.windowWidth<768}}},z=Y,q=(s("04b3"),Object(r["a"])(z,a,l,!1,null,null,null));e["default"]=q.exports},de5f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-af32167a.1585a5b1.js.map