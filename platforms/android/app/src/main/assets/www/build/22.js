webpackJsonp([22],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogindPageModule", function() { return LogindPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logind__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogindPageModule = (function () {
    function LogindPageModule() {
    }
    LogindPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__logind__["a" /* LogindPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__logind__["a" /* LogindPage */]),
            ],
        })
    ], LogindPageModule);
    return LogindPageModule;
}());

//# sourceMappingURL=logind.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogindPage; });
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











var LogindPage = (function () {
    function LogindPage(navCtrl, navParams, modalCtrl, formBuilder, loadingCtrl, events, alertCtrl, menuCtrl, viewCtrl, apiProvider, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.sanitizer = sanitizer;
        this.totalCompra = this.navParams.get('total');
        this.authForm = formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            telefono: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)])]
        });
    }
    LogindPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LogindPage.prototype.goLo = function () {
        this.closeModal();
        this.menuCtrl.open();
    };
    LogindPage.prototype.closeModal = function () {
        //	this.events.publish('modalServices');
        this.viewCtrl.dismiss();
    };
    LogindPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LogindPage.prototype.presentAlert2 = function (mensaje) {
        var alert = this.alertCtrl.create({
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje),
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LogindPage.prototype.openDerechos = function () {
        window.open("https://www.yourbeauty.com.pa/terminos/", '_system', 'location=yes');
    };
    LogindPage.prototype.crearUsuario = function (dataUsuario) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Registrando" });
        loading.present();
        this.apiProvider.addUserEmail(dataUsuario)
            .then(function (data) {
            console.log(data);
            if (data['insertId'] > 0) {
                loading.dismissAll();
                _this.closeModal();
                _this.events.publish('loginRemoto', dataUsuario);
                /*
                      this.presentAlert2(`<img  src="assets/imgs/confirmarf.png"> <div stye="line-height: 25px;
              font-size: 16px;color: #888;"> Registro completo! Ya puedes empezar a utlizar Yourbeauty</div>`);
          
              */
            }
            else {
                loading.dismissAll();
                _this.presentAlert('Ups!', 'No se ha podido crear el usuario');
            }
        });
    };
    LogindPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logind',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\logind\logind.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Confirmar Reserva</ion-title>\n\n\n\n    <ion-buttons end>\n    <button style="    font-size: 34px;" ion-button (click)="closeModal()"><ion-icon ios="ios-close"></ion-icon></button>\n\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n<div style="    margin: 20px;\n    height: 20px;\n    color: #777;">\n	<span style="float: left;">Registrate o Inicia Sesion</span>\n	<span style="float: right;">Total: <span style="color:#EC527E">${{totalCompra}}</span></span>\n</div>\n\n\n  <div>\n<!--     <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n    <img src="assets/imgs/Facebook.png" style="\n    vertical-align: middle;\n    margin-right: 10px;\n    ">\n    <img src="assets/imgs/Sep.png" style="\n    vertical-align: middle;\n    padding-top:  10px;\n    padding-bottom: 10px;\n    ">\n    <span (click)=\'loginApp()\' style="\n    ">Continuar con Facebook</span>\n    </div>\n\n<div style="\n    margin: 0px 17px;\n    text-align: center;\n    /* height: 300px; */\n">\n         <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n"><span style="\n    display: inline-block;\n    margin: 0px 10px;\n">OR</span> <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n">\n    </div>\n -->\n    <div style="\n    margin: 0px 17px;">\n\n    <form style=\'margin-top: 20px;\' [formGroup]="authForm" (ngSubmit)="crearUsuario(authForm.value)">\n\n\n                 <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n                        <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-contact" md="md-contact" ></ion-icon> \n            </ion-label>\n            <ion-input class=\'inputT\'  placeholder="Nombre" formControlName="nombre" type="text"></ion-input>\n        </ion-item>\n<ion-item *ngIf="authForm.controls.nombre.hasError(\'required\') && authForm.controls.nombre.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n\n \n\n        \n              <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n                        <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-call" md="md-call" ></ion-icon>\n            </ion-label>\n            <ion-input  class=\'inputT\' placeholder="Teléfono"  formControlName="telefono" type="text"></ion-input>\n        </ion-item>\n\n\n\n             <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n            </ion-label>\n            <ion-input class=\'inputT\' placeholder="Email"   formControlName="email" type="text"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n      \n\n  \n             <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-lock" md="md-lock" ></ion-icon>\n            </ion-label>\n            <ion-input class=\'inputT\' placeholder="Contraseña"  formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Este campo requiere al menos 6 caracteres</p>\n        </ion-item>                \n  \n<p style="    text-align: left;\n    font-size: 16px;\n    color: #444;\n    line-height: 27px;\n    margin-top: 40px;\n    opacity: 1;">Asegúrate de brindar un número de teléfono válido para verificar tu cuenta. <br><br> Al registrarte en Yourbeauty aceptas los <span style="color:#ee507d !important" (click)=\'openDerechos()\'>términos y condiciones de uso.</span></p>\n\n\n\n\n<div style="margin-top: 15px" >\n     <button [disabled]="!authForm.valid"  type="submit"  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%; float:left"  color=\'verdeApp\' ion-button>Registrarse</button>\n\n\n    <button type="button" (click)=\'goLo()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Login</button> \n\n\n</div>\n\n\n     \n\n\n    </form>\n\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\logind\logind.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LogindPage);
    return LogindPage;
}());

//# sourceMappingURL=logind.js.map

/***/ })

});
//# sourceMappingURL=22.js.map