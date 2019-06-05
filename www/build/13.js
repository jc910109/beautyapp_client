webpackJsonp([13],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionPageModule", function() { return VerificacionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verificacion__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificacionPageModule = (function () {
    function VerificacionPageModule() {
    }
    VerificacionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verificacion__["a" /* VerificacionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__verificacion__["a" /* VerificacionPage */]),
            ],
        })
    ], VerificacionPageModule);
    return VerificacionPageModule;
}());

//# sourceMappingURL=verificacion.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerificacionPage = (function () {
    function VerificacionPage(navCtrl, navParams, modalCtrl, loadingCtrl, storage, events, apiProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.dataUserV = {};
        this.verificacionOK = function () {
            _this.storage.get('pushKeyBY').then(function (value) {
                if (value) {
                    console.log(value);
                    var pushState = {
                        pushK: value,
                        device: device.platform,
                        deviceId: device.uuid,
                        login: Date.now(),
                        user: _this.dataUserV.idCliente
                    };
                    console.log(pushState);
                    _this.apiProvider.addPush(pushState).then(function (data) {
                        console.log(data);
                    });
                }
                //value;
            });
            _this.storage.set("usr_tok_by", _this.dataUserV);
            _this.events.publish('userCreated', _this.dataUserV);
            _this.events.publish('loginOK');
            _this.navCtrl.pop();
        };
    }
    VerificacionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RecuperarPage');
        console.log(this.navParams.data.idCliente);
        var loading = this.loadingCtrl.create({ content: "Cargando" });
        loading.present();
        this.apiProvider.getUserInfo({ idCliente: this.navParams.data.idCliente })
            .then(function (data) {
            console.log(data);
            if (data && data[0]) {
                _this.dataUserV = data[0];
            }
            else {
                console.log('error');
                //loading.dismiss();
            }
            loading.dismiss();
        });
    };
    VerificacionPage.prototype.goAtras = function () {
        this.navCtrl.pop();
    };
    VerificacionPage.prototype.actualizarContra = function (emails) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Verificando ..." });
        loading.present();
        console.log(emails);
        this.apiProvider.verificarCuenta({ codigo: emails, email: this.dataUserV.idCliente })
            .then(function (data) {
            console.log(data);
            if (data && data['data'] && data['data'].affectedRows > 0) {
                console.log("aquiiiiiiii");
                console.log(data);
                loading.dismissAll();
                _this.verificacionOK();
            }
            else {
                loading.dismissAll();
                var alert_1 = _this.alertCtrl.create({
                    title: 'Codigo invalido',
                    subTitle: 'La cuenta no ha podido ser verificada',
                    buttons: ['Cerrar']
                });
                alert_1.present();
            }
        });
    };
    VerificacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verificacion',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\verificacion\verificacion.html"*/'<!--\n  Generated template for the RecuperarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style=\'padding-left: 0px !important;padding-right: 0px !important;\'>Confirma tu cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style=\'    background-color: #fafafa !important;\'>\n\n<div style="    text-align: center;\n    color: darkgray;\n    margin-top: 12px;">Ingresa el código de verificación enviado a {{dataUserV?.telefono}}</div>\n\n\n            <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n     		<ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n     			  <ion-icon   ios="md-key" md="md-key" ></ion-icon>\n     		</ion-label>\n\n            <ion-input [(ngModel)]="emailN" autocomplete=\'off\' class=\'inputT\' name="nombre" type="number" placeholder=\'código\'></ion-input>\n\n\n        </ion-item>\n\n\n<div  >\n     <button  (click)=\'emailN="";goAtras()\'   style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%; float:left"  color=\'verdeApp\' ion-button> Cancelar</button>\n\n\n    <button   color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" [disabled]=\'!emailN\' (click)=\'actualizarContra(emailN)\'>Verificar</button> \n\n\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\verificacion\verificacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], VerificacionPage);
    return VerificacionPage;
}());

//# sourceMappingURL=verificacion.js.map

/***/ })

});
//# sourceMappingURL=13.js.map