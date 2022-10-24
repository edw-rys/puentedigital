function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{pwtZ:function(e,n,i){"use strict";i.r(n),i.d(n,"TutorialModule",(function(){return u}));var t,o,c,a=i("ofXK"),r=i("TEn/"),s=i("tyNb"),l=i("fXoL"),d=i("e8h1"),p=["slides"],f=[{path:"",component:(t=function(){function e(n,i,t){_classCallCheck(this,e),this.menu=n,this.router=i,this.storage=t,this.showSkip=!0}return _createClass(e,[{key:"startApp",value:function(){var e=this;this.router.navigateByUrl("/app/main/schedule",{replaceUrl:!0}).then((function(){return e.storage.set("ion_did_tutorial",!0)}))}},{key:"onSlideChangeStart",value:function(e){var n=this;e.target.isEnd().then((function(e){n.showSkip=!e}))}},{key:"ionViewWillEnter",value:function(){var e=this;this.storage.get("ion_did_tutorial").then((function(n){!0===n&&e.router.navigateByUrl("/app/main/schedule",{replaceUrl:!0})})),this.menu.enable(!1)}},{key:"ionViewDidLeave",value:function(){this.menu.enable(!0)}}]),e}(),t.\u0275fac=function(e){return new(e||t)(l.ac(r.Cb),l.ac(s.f),l.ac(d.b))},t.\u0275cmp=l.Ub({type:t,selectors:[["page-tutorial"]],viewQuery:function(e,n){var i;1&e&&l.Zc(p,!0),2&e&&l.Nc(i=l.pc())&&(n.slides=i.first)},decls:42,vars:1,consts:[["no-border",""],["slot","end"],["color","primary",3,"hidden","click"],["fullscreen","true"],["pager","false",3,"ionSlideWillChange"],["slides",""],["src","assets/img/ica-slidebox-img-1.png",1,"slide-image"],[1,"slide-title"],["src","assets/img/ica-slidebox-img-2.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-3.png",1,"slide-image"],["src","assets/img/ica-slidebox-img-4.png",1,"slide-image"],["fill","clear",3,"click"],["slot","end","name","arrow-forward"]],template:function(e,n){1&e&&(l.gc(0,"ion-header",0),l.gc(1,"ion-toolbar"),l.gc(2,"ion-buttons",1),l.gc(3,"ion-button",2),l.oc("click",(function(){return n.startApp()})),l.ed(4,"Skip"),l.fc(),l.fc(),l.fc(),l.fc(),l.gc(5,"ion-content",3),l.gc(6,"ion-slides",4,5),l.oc("ionSlideWillChange",(function(e){return n.onSlideChangeStart(e)})),l.gc(8,"ion-slide"),l.bc(9,"img",6),l.gc(10,"h2",7),l.ed(11," Welcome to "),l.gc(12,"b"),l.ed(13,"ICA"),l.fc(),l.fc(),l.gc(14,"p"),l.ed(15," The "),l.gc(16,"b"),l.ed(17,"ionic conference app"),l.fc(),l.ed(18," is a practical preview of the ionic framework in action, and a demonstration of proper code use. "),l.fc(),l.fc(),l.gc(19,"ion-slide"),l.bc(20,"img",8),l.gc(21,"h2",7),l.ed(22,"What is Ionic?"),l.fc(),l.gc(23,"p"),l.gc(24,"b"),l.ed(25,"Ionic Framework"),l.fc(),l.ed(26," is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript."),l.fc(),l.fc(),l.gc(27,"ion-slide"),l.bc(28,"img",9),l.gc(29,"h2",7),l.ed(30,"What is Ionic Appflow?"),l.fc(),l.gc(31,"p"),l.gc(32,"b"),l.ed(33,"Ionic Appflow"),l.fc(),l.ed(34," is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams."),l.fc(),l.fc(),l.gc(35,"ion-slide"),l.bc(36,"img",10),l.gc(37,"h2",7),l.ed(38,"Ready to Play?"),l.fc(),l.gc(39,"ion-button",11),l.oc("click",(function(){return n.startApp()})),l.ed(40," Continue "),l.bc(41,"ion-icon",12),l.fc(),l.fc(),l.fc(),l.fc()),2&e&&(l.Lb(3),l.Ac("hidden",!n.showSkip))},directives:[r.B,r.zb,r.l,r.k,r.u,r.ob,r.nb,r.C],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%;max-width:60%;margin:36px 0;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]}),t)}],g=((c=function e(){_classCallCheck(this,e)}).\u0275mod=l.Yb({type:c}),c.\u0275inj=l.Xb({factory:function(e){return new(e||c)},imports:[[s.j.forChild(f)],s.j]}),c),u=((o=function e(){_classCallCheck(this,e)}).\u0275mod=l.Yb({type:o}),o.\u0275inj=l.Xb({factory:function(e){return new(e||o)},imports:[[a.c,r.Bb,g]]}),o)}}]);