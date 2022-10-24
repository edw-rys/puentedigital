function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{f1Ab:function(e,t,o){"use strict";o.r(t),o.d(t,"AccountModule",(function(){return P}));var r=o("ofXK"),n=o("TEn/"),c=o("tyNb"),i=o("mrSG"),a=o("cxbk"),s=o("X+KH"),l=o("p9xo"),f=o("m8mU"),u=o("bVrE"),d=o("8BQX"),g=o("PkRB"),m=o("fXoL"),p=o("ZOsW"),h=o("sYmb"),b=o("6f/U"),v=o("3Pt+");function _(e,t){if(1&e&&(m.gc(0,"span",49),m.ed(1),m.fc()),2&e){var o=t.$implicit;m.Lb(1),m.fd(o.description)}}function y(e,t){if(1&e&&(m.gc(0,"ng-option",50),m.ed(1),m.fc()),2&e){var o=t.$implicit;m.Ac("value",o.id),m.Lb(1),m.fd(o.name)}}function w(e,t){if(1&e&&(m.gc(0,"ng-option",50),m.ed(1),m.fc()),2&e){var o=t.$implicit;m.Ac("value",o.id),m.Lb(1),m.fd(o.name)}}function x(e,t){if(1&e&&(m.gc(0,"ng-option",50),m.ed(1),m.fc()),2&e){var o=t.$implicit;m.Ac("value",o.id),m.Lb(1),m.fd(o.name)}}function C(e,t){if(1&e&&(m.gc(0,"ng-option",50),m.ed(1),m.fc()),2&e){var o=t.$implicit;m.Ac("value",o.id),m.Lb(1),m.fd(o.name)}}function L(e,t){if(1&e){var o=m.hc();m.gc(0,"ion-button",51),m.oc("click",(function(){return m.Sc(o),m.sc().connectWithGoogle()})),m.bc(1,"ion-icon",52),m.gc(2,"span",53),m.ed(3),m.tc(4,"translate"),m.fc(),m.fc()}2&e&&(m.Lb(3),m.fd(m.uc(4,1,"forms.connect_with_google")))}function k(e,t){if(1&e){var o=m.hc();m.gc(0,"ion-button",51),m.oc("click",(function(){return m.Sc(o),m.sc().disConnectWithGoogle()})),m.bc(1,"ion-icon",54),m.gc(2,"span",53),m.ed(3),m.tc(4,"translate"),m.fc(),m.fc()}2&e&&(m.Lb(3),m.fd(m.uc(4,1,"forms.disconnect_acc")))}var M,S,A,O=[{path:"",component:(M=function(){function e(t,o,r,n,c,i,s,f,u,d){_classCallCheck(this,e),this.alertCtrl=t,this.router=o,this.userData=r,this.config=n,this.globalService=c,this.translate=i,this.profileService=s,this.controlErroresService=f,this.alertController=u,this.toastService=d,this.form={country_id:null,state_id:null,city_id:null,school_id:null,name:"",last_name:"",address:"",email:"",photo:null,has_provider:!1},this.form_password={last_password:"",password:"",confirm_password:""},this.picture="assets/images/profile-8.jpg",this.countries=[],this.states=[],this.cities=[],this.schools=[],this.roles=[],this.scrollbarStyle=a.a.scrollbarStyle,i.setDefaultLang(l.e.lang),this.config.notFoundText="Custom not found",this.config.appendTo="body",this.getInformation()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){this.getCountries()}},{key:"getCountries",value:function(){var e=this;this.globalService.getCountries().subscribe((function(t){if(e.countries=t.data,null==e.form.country_id){var o=e.countries.find((function(e){return"1"==e.default}));null!=o&&(e.form.country_id=o.id,e.getStates(e.form.country_id))}}))}},{key:"getStates",value:function(e){var t=this;this.globalService.getStates(e).subscribe((function(e){t.states=e.data}))}},{key:"getCities",value:function(e){var t=this;this.globalService.getCities(e).subscribe((function(e){t.cities=e.data}))}},{key:"getSchools",value:function(e){var t=this;this.globalService.getSchools(e).subscribe((function(e){t.schools=e.data}))}},{key:"changeFile",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){var o=new FileReader;if(e.target.files[0].size>1e6*a.a.max_size_img)return void this.toastService.presentToast("Peso m\xe1ximo "+a.a.max_size_img+"MB","warning");this.form.photo=e.target.files[0],o.onload=function(e){t.picture=e.target.result},o.readAsDataURL(e.target.files[0])}}},{key:"getInformation",value:function(){var e=this;this.profileService.getInformation().subscribe((function(t){var o=t.user;e.form.name=o.first_name,e.form.last_name=o.last_name,e.form.email=o.email,e.form.country_id=o.other_information&&o.other_information.country_id||e.form.country_id,e.form.state_id=o.other_information?o.other_information.province_id:null,e.form.city_id=o.other_information?o.other_information.city_id:null,e.form.school_id=o.other_information?o.other_information.school_id:null,e.form.address=o.other_information?o.other_information.address:null,e.picture=o.other_information&&o.other_information.image_url||e.picture,e.roles=o.roles||e.roles,e.form.has_provider=o.has_provider,e.getStates(e.form.country_id),e.getCities(e.form.state_id),e.getSchools(e.form.city_id)}),(function(t){e.controlErroresService.control(t)}))}},{key:"updateUser",value:function(){var e=this;this.profileService.saveInformation(Object(l.c)(this.form)).subscribe((function(t){e.toastService.presentToast(t.message,t.status),e.userData.setUser({user:t.data})}),(function(t){e.controlErroresService.control(t)}))}},{key:"changePassword",value:function(){var e=this;this.profileService.updatePassword(this.form_password).subscribe((function(t){e.toastService.presentToast(t.message,t.status)}),(function(t){e.controlErroresService.control(t)}))}},{key:"initGoogleAuth",value:function(){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){gapi.load("auth2",e)})).then((function(){return Object(i.b)(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.init({client_id:a.a.google.client_id}).then((function(e){t.gapiSetup=!0,t.authInstance=e}));case 2:case"end":return e.stop()}}),e)})))})));case 1:case"end":return e.stop()}}),e)})))}},{key:"connectWithGoogle",value:function(){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.gapiSetup,e.t0){e.next=4;break}return e.next=4,this.initGoogleAuth();case 4:return e.abrupt("return",new Promise((function(){return Object(i.b)(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authInstance.signIn().then((function(e){t.userGoogle=e,t.profileService.checkProvider({provider:"GOOGLE",provider_id:t.userGoogle.getId()}).subscribe((function(e){"in_user"!=e.status?t.userData.connectWithProvider("GOOGLE",t.userGoogle.getId(),t.form):t.replaceProvider({provider:"GOOGLE",provider_id:t.userGoogle.getId()})}),(function(e){t.controlErroresService.control(e)}))}),(function(e){return t.error=e}));case 2:case"end":return e.stop()}}),e,this)})))})));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"disConnectWithGoogle",value:function(){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:"\xa1Confirmar o denegar!",message:"\xbfEst\xe1 seguro que desea desconectar la cuenta?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(e){}},{text:"Desconectar",handler:function(){o.profileService.disconnectProvider({provider:"GOOGLE"}).subscribe((function(e){o.form.has_provider=!1,o.toastService.presentToast(e.message,e.status)}),(function(e){o.controlErroresService.control(e)}))}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"replaceProvider",value:function(e){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({cssClass:"my-custom-class",header:"\xa1Confirmar o denegar!",message:"Esta cuenta de google ya se encuentra conectada a otro usuario del sistema",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:function(e){}},{text:"Reemplazar",handler:function(){o.userData.connectWithProvider("GOOGLE",o.userGoogle.getId(),o.form)}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}}]),e}(),M.\u0275fac=function(e){return new(e||M)(m.ac(n.b),m.ac(c.f),m.ac(s.a),m.ac(p.b),m.ac(u.a),m.ac(h.e),m.ac(d.a),m.ac(f.a),m.ac(n.b),m.ac(g.a))},M.\u0275cmp=m.Ub({type:M,selectors:[["page-account"]],decls:116,vars:74,consts:[["slot","start"],[3,"scrollbar"],[1,"content"],[1,"intro-y","flex","items-center","mt-8"],[1,"text-lg","font-medium","mr-auto"],[1,"grid","grid-cols-12","gap-6"],[1,"col-span-12","lg:col-span-8","xxl:col-span-9"],[1,"intro-y","box","lg:mt-5"],[1,"flex","items-center","p-5","border-b","border-gray-200","dark:border-dark-5"],[1,"font-medium","text-base","mr-auto"],["class","btn btn-sm btn-primary",4,"ngFor","ngForOf"],[1,"p-5"],[1,"flex","flex-col-reverse","xl:flex-row","flex-col"],[1,"flex-1","mt-6","xl:mt-0"],[1,"grid","grid-cols-12","gap-x-5"],[1,"col-span-12","xxl:col-span-6"],["for","update-profile-form-6",1,"form-label"],["id","update-profile-form-6","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","name",1,"form-label"],["id","name","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","last_name",1,"form-label"],["id","last_name","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-3"],["for","update-profile-form-2",1,"form-label"],[3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"],[1,"col-span-12"],["for","update-profile-form-5",1,"form-label"],["id","update-profile-form-5",1,"form-control",3,"ngModel","ngModelChange"],["type","button","size","small",3,"click"],["type","button","color","danger","size","small",3,"click",4,"ngIf"],[1,"w-52","mx-auto","xl:mr-0","xl:ml-6"],[1,"border-2","border-dashed","shadow-sm","border-gray-200","dark:border-dark-5","rounded-md","m-3"],[1,"h-40","relative","image-fit","cursor-pointer","zoom-in","mx-auto"],["alt","--",1,"rounded-sm",3,"src"],[1,"mx-auto","cursor-pointer","relative","mt-5"],["type","button",1,"btn","btn-sm","btn-primary","w-full"],["type","file","accept","image/*",1,"w-full","h-full","top-0","left-0","absolute","opacity-0",3,"change"],[1,"intro-y","box","mt-5"],[1,"col-span-12","xl:col-span-6"],["id","last_password","type","password",1,"form-control",3,"ngModel","ngModelChange"],["for","update-profile-form-7",1,"form-label"],["id","password","type","password",1,"form-control",3,"ngModel","ngModelChange"],["id","confirm_password","type","password",1,"form-control",3,"ngModel","ngModelChange"],[1,"flex","justify-end","mt-4"],["type","button",1,"btn","btn-primary","w-20","mr-auto",3,"click"],["translucent","true"],["slot","end"],[1,"btn","btn-sm","btn-primary"],[3,"value"],["type","button","color","danger","size","small",3,"click"],["name","logo-google"],[2,"margin-left","10px"],["name","unlink-outline"]],template:function(e,t){1&e&&(m.gc(0,"ion-header"),m.gc(1,"ion-toolbar"),m.gc(2,"ion-buttons",0),m.bc(3,"ion-menu-button"),m.fc(),m.gc(4,"ion-title"),m.ed(5),m.tc(6,"translate"),m.fc(),m.fc(),m.fc(),m.gc(7,"ion-content",1),m.gc(8,"div",2),m.gc(9,"div",3),m.gc(10,"h2",4),m.ed(11),m.tc(12,"translate"),m.fc(),m.fc(),m.gc(13,"div",5),m.gc(14,"div",6),m.gc(15,"div",7),m.gc(16,"div",8),m.gc(17,"h2",9),m.ed(18),m.tc(19,"translate"),m.cd(20,_,2,1,"span",10),m.fc(),m.fc(),m.gc(21,"div",11),m.gc(22,"div",12),m.gc(23,"div",13),m.gc(24,"div",14),m.gc(25,"div",15),m.gc(26,"div"),m.gc(27,"label",16),m.ed(28),m.tc(29,"translate"),m.fc(),m.gc(30,"input",17),m.oc("ngModelChange",(function(e){return t.form.email=e})),m.fc(),m.fc(),m.gc(31,"div"),m.gc(32,"label",18),m.ed(33),m.tc(34,"translate"),m.fc(),m.gc(35,"input",19),m.oc("ngModelChange",(function(e){return t.form.name=e})),m.fc(),m.fc(),m.gc(36,"div"),m.gc(37,"label",20),m.ed(38),m.tc(39,"translate"),m.fc(),m.gc(40,"input",21),m.oc("ngModelChange",(function(e){return t.form.last_name=e})),m.fc(),m.fc(),m.gc(41,"div",22),m.gc(42,"label",23),m.ed(43),m.tc(44,"translate"),m.fc(),m.gc(45,"ng-select",24),m.oc("ngModelChange",(function(e){return t.form.country_id=e}))("change",(function(){return t.getStates(t.form.country_id)})),m.cd(46,y,2,2,"ng-option",25),m.fc(),m.fc(),m.gc(47,"div",22),m.gc(48,"label",23),m.ed(49),m.tc(50,"translate"),m.fc(),m.gc(51,"ng-select",24),m.oc("ngModelChange",(function(e){return t.form.state_id=e}))("change",(function(){return t.getCities(t.form.state_id)})),m.cd(52,w,2,2,"ng-option",25),m.fc(),m.fc(),m.gc(53,"div",22),m.gc(54,"label",23),m.ed(55),m.tc(56,"translate"),m.fc(),m.gc(57,"ng-select",24),m.oc("ngModelChange",(function(e){return t.form.city_id=e}))("change",(function(){return t.getSchools(t.form.city_id)})),m.cd(58,x,2,2,"ng-option",25),m.fc(),m.fc(),m.gc(59,"div",22),m.gc(60,"label",23),m.ed(61),m.tc(62,"translate"),m.fc(),m.gc(63,"ng-select",26),m.oc("ngModelChange",(function(e){return t.form.school_id=e})),m.cd(64,C,2,2,"ng-option",25),m.fc(),m.fc(),m.fc(),m.gc(65,"div",27),m.gc(66,"div",22),m.gc(67,"label",28),m.ed(68),m.tc(69,"translate"),m.fc(),m.gc(70,"textarea",29),m.oc("ngModelChange",(function(e){return t.form.address=e})),m.fc(),m.fc(),m.fc(),m.fc(),m.gc(71,"ion-button",30),m.oc("click",(function(){return t.updateUser()})),m.ed(72),m.tc(73,"translate"),m.fc(),m.cd(74,L,5,3,"ion-button",31),m.cd(75,k,5,3,"ion-button",31),m.fc(),m.gc(76,"div",32),m.gc(77,"div",33),m.gc(78,"div",34),m.bc(79,"img",35),m.fc(),m.gc(80,"div",36),m.gc(81,"button",37),m.ed(82),m.tc(83,"translate"),m.fc(),m.gc(84,"input",38),m.oc("change",(function(e){return t.changeFile(e)})),m.fc(),m.fc(),m.fc(),m.fc(),m.fc(),m.fc(),m.fc(),m.gc(85,"div",39),m.gc(86,"div",8),m.gc(87,"h2",9),m.ed(88),m.tc(89,"translate"),m.fc(),m.fc(),m.gc(90,"div",11),m.gc(91,"div",14),m.gc(92,"div",40),m.gc(93,"div"),m.gc(94,"label",16),m.ed(95),m.tc(96,"translate"),m.fc(),m.gc(97,"input",41),m.oc("ngModelChange",(function(e){return t.form_password.last_password=e})),m.fc(),m.fc(),m.gc(98,"div",22),m.gc(99,"label",42),m.ed(100),m.tc(101,"translate"),m.fc(),m.gc(102,"input",43),m.oc("ngModelChange",(function(e){return t.form_password.password=e})),m.fc(),m.fc(),m.gc(103,"div",22),m.gc(104,"label",42),m.ed(105),m.tc(106,"translate"),m.fc(),m.gc(107,"input",44),m.oc("ngModelChange",(function(e){return t.form_password.confirm_password=e})),m.fc(),m.fc(),m.fc(),m.fc(),m.gc(108,"div",45),m.gc(109,"button",46),m.oc("click",(function(){return t.changePassword()})),m.ed(110),m.tc(111,"translate"),m.fc(),m.fc(),m.fc(),m.fc(),m.fc(),m.fc(),m.fc(),m.fc(),m.gc(112,"ion-footer",47),m.gc(113,"ion-toolbar"),m.gc(114,"ion-buttons",48),m.ed(115,"\xa92022 Ediciones Holgu\xedn"),m.fc(),m.fc(),m.fc()),2&e&&(m.Lb(5),m.fd(m.uc(6,38,"pages.update.account")),m.Lb(2),m.Bc("scrollbar",t.scrollbarStyle),m.Lb(4),m.gd(" ",m.uc(12,40,"pages.update.update_profile")," "),m.Lb(7),m.gd(" ",m.uc(19,42,"forms.display_information")," "),m.Lb(2),m.Ac("ngForOf",t.roles),m.Lb(8),m.fd(m.uc(29,44,"forms.email")),m.Lb(2),m.Ac("ngModel",t.form.email),m.Lb(3),m.fd(m.uc(34,46,"forms.names")),m.Lb(2),m.Ac("ngModel",t.form.name),m.Lb(3),m.fd(m.uc(39,48,"forms.last_names")),m.Lb(2),m.Ac("ngModel",t.form.last_name),m.Lb(3),m.fd(m.uc(44,50,"forms.country")),m.Lb(2),m.Ac("ngModel",t.form.country_id),m.Lb(1),m.Ac("ngForOf",t.countries),m.Lb(3),m.fd(m.uc(50,52,"forms.state")),m.Lb(2),m.Ac("ngModel",t.form.state_id),m.Lb(1),m.Ac("ngForOf",t.states),m.Lb(3),m.fd(m.uc(56,54,"forms.city")),m.Lb(2),m.Ac("ngModel",t.form.city_id),m.Lb(1),m.Ac("ngForOf",t.cities),m.Lb(3),m.fd(m.uc(62,56,"forms.school")),m.Lb(2),m.Ac("ngModel",t.form.school_id),m.Lb(1),m.Ac("ngForOf",t.schools),m.Lb(4),m.fd(m.uc(69,58,"forms.address")),m.Lb(2),m.Ac("ngModel",t.form.address),m.Lb(2),m.fd(m.uc(73,60,"forms.save")),m.Lb(2),m.Ac("ngIf",!t.form.has_provider),m.Lb(1),m.Ac("ngIf",t.form.has_provider),m.Lb(4),m.Ac("src",t.picture,m.Vc),m.Lb(3),m.fd(m.uc(83,62,"forms.change_photo")),m.Lb(6),m.gd(" ",m.uc(89,64,"pages.update.change_password")," "),m.Lb(7),m.fd(m.uc(96,66,"forms.last_password")),m.Lb(2),m.Ac("ngModel",t.form_password.last_password),m.Lb(3),m.fd(m.uc(101,68,"forms.new_password")),m.Lb(2),m.Ac("ngModel",t.form_password.password),m.Lb(3),m.fd(m.uc(106,70,"forms.repeat_password")),m.Lb(2),m.Ac("ngModel",t.form_password.confirm_password),m.Lb(3),m.fd(m.uc(111,72,"forms.save")))},directives:[n.B,n.zb,n.l,n.R,n.xb,n.u,b.b,r.s,v.c,v.r,v.u,p.a,n.k,r.t,n.z,p.o,n.C],pipes:[h.d],styles:[""]}),M)}],G=((A=function e(){_classCallCheck(this,e)}).\u0275mod=m.Yb({type:A}),A.\u0275inj=m.Xb({factory:function(e){return new(e||A)},imports:[[c.j.forChild(O)],c.j]}),A),P=((S=function e(){_classCallCheck(this,e)}).\u0275mod=m.Yb({type:S}),S.\u0275inj=m.Xb({factory:function(e){return new(e||S)},imports:[[r.c,n.Bb,G,v.l,v.B,p.c,h.c,b.a]]}),S)}}]);