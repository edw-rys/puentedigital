(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{pwtZ:function(e,i,t){"use strict";t.r(i),t.d(i,"TutorialModule",(function(){return g}));var n=t("ofXK"),o=t("TEn/"),c=t("tyNb"),r=t("fXoL"),s=t("e8h1");const a=["slides"],l=[{path:"",component:(()=>{class e{constructor(e,i,t){this.menu=e,this.router=i,this.storage=t,this.showSkip=!0}startApp(){this.router.navigateByUrl("/app/main/schedule",{replaceUrl:!0}).then(()=>this.storage.set("ion_did_tutorial",!0))}onSlideChangeStart(e){e.target.isEnd().then(e=>{this.showSkip=!e})}ionViewWillEnter(){this.storage.get("ion_did_tutorial").then(e=>{!0===e&&this.router.navigateByUrl("/app/main/schedule",{replaceUrl:!0})}),this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}}return e.\u0275fac=function(i){return new(i||e)(r.ac(o.Cb),r.ac(c.f),r.ac(s.b))},e.\u0275cmp=r.Ub({type:e,selectors:[["page-tutorial"]],viewQuery:function(e,i){var t;1&e&&r.Zc(a,!0),2&e&&r.Nc(t=r.pc())&&(i.slides=t.first)},decls:42,vars:1,consts:[["no-border",""],["slot","end"],["color","primary",3,"hidden","click"],["fullscreen","true"],["pager","false",3,"ionSlideWillChange"],["slides",""],["src","assets/img/ica-slidebox-img-1.png",1,"slide-image"],[1,"slide-title"],["src","assets/img/ica-slidebox-img-2.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-3.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-4.png",1,"slide-image"],["fill","clear",3,"click"],["slot","end","name","arrow-forward"]],template:function(e,i){1&e&&(r.gc(0,"ion-header",0),r.gc(1,"ion-toolbar"),r.gc(2,"ion-buttons",1),r.gc(3,"ion-button",2),r.oc("click",(function(){return i.startApp()})),r.ed(4,"Skip"),r.fc(),r.fc(),r.fc(),r.fc(),r.gc(5,"ion-content",3),r.gc(6,"ion-slides",4,5),r.oc("ionSlideWillChange",(function(e){return i.onSlideChangeStart(e)})),r.gc(8,"ion-slide"),r.bc(9,"img",6),r.gc(10,"h2",7),r.ed(11," Welcome to "),r.gc(12,"b"),r.ed(13,"ICA"),r.fc(),r.fc(),r.gc(14,"p"),r.ed(15," The "),r.gc(16,"b"),r.ed(17,"ionic conference app"),r.fc(),r.ed(18," is a practical preview of the ionic framework in action, and a demonstration of proper code use. "),r.fc(),r.fc(),r.gc(19,"ion-slide"),r.bc(20,"img",8),r.gc(21,"h2",7),r.ed(22,"What is Ionic?"),r.fc(),r.gc(23,"p"),r.gc(24,"b"),r.ed(25,"Ionic Framework"),r.fc(),r.ed(26," is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript."),r.fc(),r.fc(),r.gc(27,"ion-slide"),r.bc(28,"img",9),r.gc(29,"h2",7),r.ed(30,"What is Ionic Appflow?"),r.fc(),r.gc(31,"p"),r.gc(32,"b"),r.ed(33,"Ionic Appflow"),r.fc(),r.ed(34," is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams."),r.fc(),r.fc(),r.gc(35,"ion-slide"),r.bc(36,"img",10),r.gc(37,"h2",7),r.ed(38,"Ready to Play?"),r.fc(),r.gc(39,"ion-button",11),r.oc("click",(function(){return i.startApp()})),r.ed(40," Continue "),r.bc(41,"ion-icon",12),r.fc(),r.fc(),r.fc(),r.fc()),2&e&&(r.Lb(3),r.Ac("hidden",!i.showSkip))},directives:[o.B,o.zb,o.l,o.k,o.u,o.ob,o.nb,o.C],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%;max-width:60%;margin:36px 0;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=r.Yb({type:e}),e.\u0275inj=r.Xb({factory:function(i){return new(i||e)},imports:[[c.j.forChild(l)],c.j]}),e})(),g=(()=>{class e{}return e.\u0275mod=r.Yb({type:e}),e.\u0275inj=r.Xb({factory:function(i){return new(i||e)},imports:[[n.c,o.Bb,d]]}),e})()}}]);