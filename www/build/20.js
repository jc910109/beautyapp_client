webpackJsonp([20],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegocioregistroPageModule", function() { return NegocioregistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negocioregistro__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NegocioregistroPageModule = (function () {
    function NegocioregistroPageModule() {
    }
    NegocioregistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__negocioregistro__["a" /* NegocioregistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__negocioregistro__["a" /* NegocioregistroPage */]),
            ],
        })
    ], NegocioregistroPageModule);
    return NegocioregistroPageModule;
}());

//# sourceMappingURL=negocioregistro.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioregistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(27);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Generated class for the NegocioregistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NegocioregistroPage = (function () {
    function NegocioregistroPage(navCtrl, navParams, modalCtrl, formBuilder, loadingCtrl, events, sanitizer, alertCtrl, viewCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.authForm = formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            nombre2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            telefono: [''],
            comentario: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    NegocioregistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    NegocioregistroPage.prototype.closeModal = function () {
        //	this.events.publish('modalServices');
        this.viewCtrl.dismiss();
    };
    NegocioregistroPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    NegocioregistroPage.prototype.presentAlert2 = function (mensaje) {
        var alert = this.alertCtrl.create({
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje),
            buttons: ['Cerrar']
        });
        alert.present();
    };
    NegocioregistroPage.prototype.crearUsuario = function (data) {
        //
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Registrando solicitud" });
        loading.present();
        this.apiProvider.addNegocio(data)
            .then(function (data) {
            console.log(data);
            if (data['insertId'] > 0) {
                loading.dismissAll();
                _this.closeModal();
                _this.presentAlert2("<img  src=\"assets/imgs/confirmarf.png\"> <div stye=\"line-height: 25px;\n    font-size: 16px;color: #888;\"> Estas a un paso de formar parte de YOURBEAUTY. Te contactaremos a la brevedad posible</div>");
            }
            else {
                loading.dismissAll();
                _this.presentAlert('Ups!', 'No se ha podido completar tu solicitud');
            }
        });
    };
    NegocioregistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-negocioregistro',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\negocioregistro\negocioregistro.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>YOURBEAUTY para negocios</ion-title>\n\n\n\n    <ion-buttons end>\n    <button style="    font-size: 34px;" ion-button (click)="closeModal()"><ion-icon ios="ios-close"></ion-icon></button>\n\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n  <div>\n<!--     <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n    <img src="assets/imgs/Facebook.png" style="\n    vertical-align: middle;\n    margin-right: 10px;\n    ">\n    <img src="assets/imgs/Sep.png" style="\n    vertical-align: middle;\n    padding-top:  10px;\n    padding-bottom: 10px;\n    ">\n    <span (click)=\'loginApp()\' style="\n    ">Continuar con Facebook</span>\n    </div>\n\n<div style="\n    margin: 0px 17px;\n    text-align: center;\n    /* height: 300px; */\n">\n         <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n"><span style="\n    display: inline-block;\n    margin: 0px 10px;\n">OR</span> <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n">\n    </div>\n -->\n    <div style="\n    margin: 0px 17px;">\n\n    <form style=\'margin-top: 20px;\' [formGroup]="authForm" (ngSubmit)="crearUsuario(authForm.value)">\n\n\n\n            <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-paper" md="md-paper" ></ion-icon>\n            </ion-label>\n\n\n\n            <ion-input class=\'inputT\' placeholder=\'Nombre del Negocio\' formControlName="nombre" type="text"></ion-input>\n        </ion-item>\n<ion-item *ngIf="authForm.controls.nombre.hasError(\'required\') && authForm.controls.nombre.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n\n \n       \n            <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-contact" md="md-contact" ></ion-icon>\n            </ion-label>\n\n\n\n            <ion-input class=\'inputT\' placeholder=\'Nombre de Contacto\' formControlName="nombre2" type="text"></ion-input>\n        </ion-item>\n<ion-item *ngIf="authForm.controls.nombre2.hasError(\'required\') && authForm.controls.nombre2.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n\n\n      \n\n\n\n\n       \n            <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n            </ion-label>\n\n            <ion-input class=\'inputT\' placeholder=\'Email\' formControlName="email" type="email"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n      \n            <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-call" md="md-call" ></ion-icon>\n            </ion-label>\n\n            <ion-input class=\'inputT\' placeholder=\'Telefono de contacto\'  formControlName="telefono" type="text"></ion-input>\n        </ion-item>\n      \n            <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-chatboxes" md="md-chatboxes" ></ion-icon>\n            </ion-label>\n\n            <ion-input class=\'inputT\' placeholder=\'Comentario\'  formControlName="comentario" type="text"></ion-input>\n        </ion-item>\n\n\n  <!-- \n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n            <ion-label floating>Password</ion-label>\n            <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Este campo requiere al menos 6 caracteres</p>\n        </ion-item>        -->         \n  \n        <button ion-button full color="verdeApp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit">Contactar</button>        \n    </form>\n<p style="    text-align: center;\n    font-size: 16px;\n    color: #555;\n    line-height: 27px;\n    margin-top: 40px;\n    opacity: 0.5;">Asegurate de brindar un email valido <br> Al registrarte en YOURBEAUTY aceptas los terminos y condiciones de uso</p>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\negocioregistro\negocioregistro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], NegocioregistroPage);
    return NegocioregistroPage;
}());

//# sourceMappingURL=negocioregistro.js.map

/***/ })

});
//# sourceMappingURL=20.js.map