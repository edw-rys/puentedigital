(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2eNy":function(t,e,n){"use strict";n.r(e),n.d(e,"SupportModule",(function(){return d}));var o=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),c=n("tyNb"),r=n("mrSG"),u=n("fXoL");const a=[{path:"",component:(()=>{class t{constructor(t,e){this.alertCtrl=t,this.toastCtrl=e,this.submitted=!1}ionViewDidEnter(){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield this.toastCtrl.create({message:"This does not actually send a support request.",duration:3e3});yield t.present()}))}submit(t){return Object(r.b)(this,void 0,void 0,(function*(){if(this.submitted=!0,t.valid){this.supportMessage="",this.submitted=!1;const t=yield this.toastCtrl.create({message:"Your support request has been sent.",duration:3e3});yield t.present()}}))}}return t.\u0275fac=function(e){return new(e||t)(u.ac(s.b),u.ac(s.Nb))},t.\u0275cmp=u.Ub({type:t,selectors:[["page-support"]],decls:23,vars:2,consts:[["slot","start"],[1,"support-logo"],["src","assets/img/appicon.svg","alt","Ionic Logo"],["novalidate","",3,"ngSubmit"],["submitForm","ngForm"],["lines","none"],["position","stacked","color","primary"],["name","supportQuestion","rows","6","required","",3,"ngModel","ngModelChange"],["supportQuestion","ngModel"],["color","danger"],[1,"ion-padding-start",3,"hidden"],[1,"ion-padding"],["expand","block","type","submit"]],template:function(t,e){if(1&t){const t=u.hc();u.gc(0,"ion-header"),u.gc(1,"ion-toolbar"),u.gc(2,"ion-buttons",0),u.bc(3,"ion-menu-button"),u.fc(),u.gc(4,"ion-title"),u.ed(5,"Support"),u.fc(),u.fc(),u.fc(),u.gc(6,"ion-content"),u.gc(7,"div",1),u.bc(8,"img",2),u.fc(),u.gc(9,"form",3,4),u.oc("ngSubmit",(function(){u.Sc(t);const n=u.Oc(10);return e.submit(n)})),u.gc(11,"ion-list",5),u.gc(12,"ion-item"),u.gc(13,"ion-label",6),u.ed(14,"Enter your support message below"),u.fc(),u.gc(15,"ion-textarea",7,8),u.oc("ngModelChange",(function(t){return e.supportMessage=t})),u.fc(),u.fc(),u.fc(),u.gc(17,"ion-text",9),u.gc(18,"p",10),u.ed(19," Support message is required "),u.fc(),u.fc(),u.gc(20,"div",11),u.gc(21,"ion-button",12),u.ed(22,"Submit"),u.fc(),u.fc(),u.fc(),u.fc()}if(2&t){const t=u.Oc(16);u.Lb(15),u.Ac("ngModel",e.supportMessage),u.Lb(3),u.Ac("hidden",t.valid||!1===e.submitted)}},directives:[s.B,s.zb,s.l,s.R,s.xb,s.u,i.H,i.s,i.t,s.O,s.H,s.N,s.vb,s.Mb,i.C,i.r,i.u,s.ub,s.k],styles:[".support-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.support-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=u.Yb({type:t}),t.\u0275inj=u.Xb({factory:function(e){return new(e||t)},imports:[[c.j.forChild(a)],c.j]}),t})(),d=(()=>{class t{}return t.\u0275mod=u.Yb({type:t}),t.\u0275inj=u.Xb({factory:function(e){return new(e||t)},imports:[[o.c,i.l,s.Bb,p]]}),t})()}}]);