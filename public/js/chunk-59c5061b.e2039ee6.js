(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59c5061b"],{"2ad7":function(t,e,s){"use strict";s("e3a6")},dca1:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("v-tour",{attrs:{name:"vuexyTour",steps:t.steps},scopedSlots:t._u([{key:"default",fn:function(s){return[e("transition",{attrs:{name:"fade"}},t._l(s.steps,(function(n,r){return s.currentStep===r?e("v-step",{key:r,attrs:{step:n,"previous-step":s.previousStep,"next-step":s.nextStep,stop:s.stop,"is-first":s.isFirst,"is-last":s.isLast,labels:s.labels}},[e("div",{staticClass:"flex justify-center",attrs:{slot:"actions"},slot:"actions"},[s.currentStep!=s.steps.length-1?e("vs-button",{staticClass:"mr-3",attrs:{size:"small","icon-pack":"feather",icon:"icon-x","icon-after":"",color:"#fff",type:"border"},on:{click:s.stop}},[t._v("\n                        Skip\n                    ")]):t._e(),s.currentStep?e("vs-button",{staticClass:"mr-3",attrs:{size:"small","icon-pack":"feather",icon:"icon-chevrons-left",color:"#fff",type:"border"},on:{click:s.previousStep}},[t._v("\n                        Previous\n                    ")]):t._e(),s.currentStep!=s.steps.length-1?e("vs-button",{staticClass:"btn-tour-next",attrs:{size:"small","icon-pack":"feather",icon:"icon-chevrons-right","icon-after":"",color:"#fff",type:"border"},on:{click:s.nextStep}},[t._v("\n                        Next\n                    ")]):t._e(),s.currentStep==s.steps.length-1?e("vs-button",{staticClass:"btn-tour-finish",attrs:{size:"small","icon-pack":"feather",icon:"icon-check-circle","icon-after":"",color:"#fff",type:"border"},on:{click:s.stop}},[t._v("\n                        Finish\n                    ")]):t._e()],1)]):t._e()})),1)]}}])})},r=[],o={name:"vx-tour",props:{steps:{required:!0,type:Array}},watch:{"$route.path":function(){this.$tours["vuexyTour"].stop()}},mounted:function(){this.$tours["vuexyTour"].start()}},c=o,i=(s("2ad7"),s("2877")),a=Object(i["a"])(c,n,r,!1,null,null,null);e["default"]=a.exports},e3a6:function(t,e,s){}}]);
//# sourceMappingURL=chunk-59c5061b.e2039ee6.js.map