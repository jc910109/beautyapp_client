webpackJsonp([23],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, formBuilder, loadingCtrl, events, alertCtrl, viewCtrl, apiProvider, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.sanitizer = sanitizer;
        this.seleccionado = false;
        this.authForm = formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^\d{7}$|^\d{8}$/)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]), this.checkUsername2.bind(this)],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.checkUsername2 = function (control) {
        var _this = this;
        console.log(control.value);
        return new Promise(function (resolve) {
            _this.apiProvider.verificarEmail2({ email: control.value })
                .then(function (data) {
                if (data.length > 0) {
                    _this.seleccionado = true;
                    resolve({
                        "username taken": true
                    });
                }
                else {
                    _this.seleccionado = false;
                    resolve(null);
                }
            }, function (err) {
                console.log(err);
                console.log('someError');
            });
        });
    };
    LoginPage.prototype.closeModal = function () {
        //	this.events.publish('modalServices');
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.openDerechos = function () {
        window.open("https://www.yourbeauty.com.pa/terminos/", '_system', 'location=yes');
    };
    LoginPage.prototype.presentAlert2 = function (mensaje) {
        var alert = this.alertCtrl.create({
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje),
            buttons: ['Cerrar']
        });
        alert.present();
    };
    LoginPage.prototype.crearUsuario = function (data) {
        var _this = this;
        this.closeModal();
        // let profileModal2 = this.modalCtrl.create('VerificacionPage');
        // profileModal2.present();
        var loading = this.loadingCtrl.create({ content: "Registrando" });
        loading.present();
        this.apiProvider.addUserEmail(data)
            .then(function (data) {
            console.log(data);
            if (data['insertId'] > 0) {
                loading.dismissAll();
                _this.closeModal();
                _this.navCtrl.push('VerificacionPage', { idCliente: data['insertId'] });
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Abrir cuenta en Yourbeauty</ion-title>\n\n\n\n    <ion-buttons end>\n    <button style="    font-size: 34px;" ion-button (click)="closeModal()"><ion-icon ios="ios-close"></ion-icon></button>\n\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n  <div>\n<!--     <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n    <img src="assets/imgs/Facebook.png" style="\n    vertical-align: middle;\n    margin-right: 10px;\n    ">\n    <img src="assets/imgs/Sep.png" style="\n    vertical-align: middle;\n    padding-top:  10px;\n    padding-bottom: 10px;\n    ">\n    <span (click)=\'loginApp()\' style="\n    ">Continuar con Facebook</span>\n    </div>\n\n<div style="\n    margin: 0px 17px;\n    text-align: center;\n    /* height: 300px; */\n">\n         <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n"><span style="\n    display: inline-block;\n    margin: 0px 10px;\n">OR</span> <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n">\n    </div>\n -->\n    <div style="\n    margin: 0px 17px;">\n\n    <form style=\'margin-top: 20px;\' [formGroup]="authForm" (ngSubmit)="crearUsuario(authForm.value)">\n\n\n                 <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px 0px 0px;\' >\n                        <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-contact" md="md-contact" ></ion-icon> \n            </ion-label>\n            <ion-input class=\'inputT\' autocomplete=\'off\'  placeholder="Nombre" formControlName="nombre" type="text"></ion-input>\n        </ion-item>\n<ion-item *ngIf="authForm.controls.nombre.hasError(\'required\') && authForm.controls.nombre.touched" \nstyle=\'background-color: transparent !important;\'>\n            <p>Este campo es requerido</p>\n        </ion-item>\n\n \n\n        \n              <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n   margin: 26px 0px 0px 0px;\' >\n                        <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-call" md="md-call" ></ion-icon>\n            </ion-label>\n            <ion-input  class=\'inputT\' autocomplete=\'off\' placeholder="Teléfono"  formControlName="telefono" type="number"></ion-input>\n        </ion-item>\n\n                <ion-item *ngIf="authForm.controls.telefono.hasError(\'pattern\') && authForm.controls.telefono.touched" style=\'background-color: transparent !important;\'>\n            <p>Numero invalido</p>\n        </ion-item>  \n\n\n\n\n             <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n       margin: 26px 0px 0px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n            </ion-label>\n            <ion-input class=\'inputT\' autocomplete=\'off\' placeholder="Email"   formControlName="email" type="text"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched" style=\'background-color: transparent !important;\'>\n            <p>Este campo es requerido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.email.hasError(\'email\') && authForm.controls.email.touched" style=\'background-color: transparent !important;\'>\n            <p>Debe poseer formato de email</p>\n        </ion-item>\n      \n              <ion-item *ngIf="seleccionado" style=\'background-color: transparent !important;\'>\n            <p>Ya existe una cuenta con este email</p>\n        </ion-item>\n      \n\n\n  \n             <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px 0px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-lock" md="md-lock" ></ion-icon>\n            </ion-label>\n            <ion-input class=\'inputT\' autocomplete=\'off\' placeholder="Contraseña"  formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched" style=\'background-color: transparent !important;\'>\n            <p>Este campo es requerido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched" style=\'background-color: transparent !important;\'>\n            <p>Este campo requiere al menos 6 caracteres</p>\n        </ion-item>                \n  \n        <button ion-button full color="verdeApp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit">Crear cuenta</button>        \n    </form>\n<p style="    text-align: left;\n    font-size: 16px;\n    color: #444;\n    line-height: 27px;\n    margin-top: 40px;\n    opacity: 1;">Asegúrate de brindar un número de teléfono válido para verificar tu cuenta. <br><br> Al registrarte en Yourbeauty aceptas los <span style="color:#ee507d !important" (click)=\'openDerechos()\'>términos y condiciones de uso.</span></p>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=23.js.map