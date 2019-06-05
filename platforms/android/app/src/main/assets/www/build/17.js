webpackJsonp([17],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarPageModule", function() { return RecuperarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recuperar__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecuperarPageModule = (function () {
    function RecuperarPageModule() {
    }
    RecuperarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recuperar__["a" /* RecuperarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__recuperar__["a" /* RecuperarPage */]),
            ],
        })
    ], RecuperarPageModule);
    return RecuperarPageModule;
}());

//# sourceMappingURL=recuperar.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RecuperarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuperarPage = (function () {
    function RecuperarPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
    }
    RecuperarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperarPage');
    };
    RecuperarPage.prototype.actualizarContra = function (emails) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Recuperando ..." });
        loading.present();
        console.log(emails);
        this.apiProvider.recuperarPass({ email: emails })
            .then(function (data) {
            console.log(data);
            if (data['data']) {
                if (data && data['data'].affectedRows > 0) {
                    loading.dismissAll();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Contraseña Restablecida',
                        subTitle: 'Te hemos enviado la contraseña nueva a tu correo',
                        buttons: ['Cerrar']
                    });
                    alert_1.present();
                    _this.navCtrl.pop();
                }
                else {
                    loading.dismissAll();
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Email Invalido',
                        buttons: ['Cerrar']
                    });
                    alert_2.present();
                }
            }
            else {
                loading.dismissAll();
                var alert_3 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Error inesperado',
                    buttons: ['Cerrar']
                });
                alert_3.present();
            }
        });
    };
    RecuperarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recuperar',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\recuperar\recuperar.html"*/'<!--\n  Generated template for the RecuperarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style=\'padding-left: 0px !important;padding-right: 0px !important;\'>Recupera tu contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style=\'    background-color: #fafafa !important;\'>\n\n<div style="    text-align: center;\n    color: darkgray;\n    margin-top: 12px;">Ingresa el email relacionado con tu cuenta Yourbeauty</div>\n\n\n            <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n     		<ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n     			  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n     		</ion-label>\n\n            <ion-input [(ngModel)]="emailN" class=\'inputT\' autocomplete=\'off\' name="nombre" type="email" placeholder=\'email\'></ion-input>\n\n\n        </ion-item>\n\n\n<div  >\n     <button  (click)=\'emailN=""\'   style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%; float:left"  color=\'verdeApp\' ion-button> Cancelar</button>\n\n\n    <button   color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" [disabled]=\'!emailN\' (click)=\'actualizarContra(emailN)\'>Ok</button> \n\n\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\recuperar\recuperar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], RecuperarPage);
    return RecuperarPage;
}());

//# sourceMappingURL=recuperar.js.map

/***/ })

});
//# sourceMappingURL=17.js.map