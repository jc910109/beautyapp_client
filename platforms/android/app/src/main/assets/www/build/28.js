webpackJsonp([28],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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
 * Generated class for the CongratsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(viewCtrl, apiProvider, navCtrl, navParams, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
    };
    ContactPage.prototype.sendContact = function () {
        var _this = this;
        this.apiProvider.enviarContacto({
            field1: this.field1,
            field2: this.field2
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: 'Gracias por su mensaje',
                subTitle: '',
                buttons: ['Cerrar']
            });
            alert.present();
        });
        this.closeModals();
    };
    ContactPage.prototype.closeModals = function () {
        this.viewCtrl.dismiss();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\contact\contact.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n		<ion-navbar>\n		  <ion-title>Déjanos tus sugerencias</ion-title>\n	  \n	  \n	  \n		  <ion-buttons end>\n		  <button style="    font-size: 34px;" ion-button (click)="closeModals()"><ion-icon ios="ios-close"></ion-icon></button>\n	  \n	  \n		  </ion-buttons>\n	  \n	  \n		</ion-navbar>\n	  \n	  </ion-header>\n	  \n	  \n	  <ion-content >\n	  \n	  \n	  \n	  \n		<div>\n	  <!--     <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n		  <img src="assets/imgs/Facebook.png" style="\n		  vertical-align: middle;\n		  margin-right: 10px;\n		  ">\n		  <img src="assets/imgs/Sep.png" style="\n		  vertical-align: middle;\n		  padding-top:  10px;\n		  padding-bottom: 10px;\n		  ">\n		  <span (click)=\'loginApp()\' style="\n		  ">Continuar con Facebook</span>\n		  </div>\n	  \n	  <div style="\n		  margin: 0px 17px;\n		  text-align: center;\n		  /* height: 300px; */\n	  ">\n			   <img src="assets/imgs/Sep2.png" style="\n		  width: 40%;\n		  display: inline-block;\n		  height: 2px;\n		  vertical-align: middle;\n	  "><span style="\n		  display: inline-block;\n		  margin: 0px 10px;\n	  ">OR</span> <img src="assets/imgs/Sep2.png" style="\n		  width: 40%;\n		  display: inline-block;\n		  height: 2px;\n		  vertical-align: middle;\n	  ">\n		  </div>\n	   -->\n		  <div style="\n		  margin: 0px 17px;">\n	  \n		  <form style=\'margin-top: 20px;\'>\n\n				<ion-item style=\'    padding: 0px 13px 0px 0px;\n				background-color: white !important;\n				border-radius: 60px;\n				border: solid 1px #EC527E;\n				margin: 26px 0px 0px 0px;\' >\n									\n						<ion-textarea rows="4" name="field2" class=\'inputT\' [(ngModel)]="field2" autocomplete=\'off\'  placeholder="En que podemos mejorar?"></ion-textarea>\n					</ion-item>	 \n	  \n	  \n					   <ion-item style=\'    padding: 0px 13px 0px 0px;\n		  background-color: white !important;\n		  border-radius: 60px;\n		  border: solid 1px #EC527E;\n		  margin: 26px 0px 0px 0px;\' >\n							  \n				  <ion-input name="field1" class=\'inputT\' [(ngModel)]="field1" autocomplete=\'off\'  placeholder="Sugieres algún centro?" type="text"></ion-input>\n			  </ion-item>	  		  \n					\n\n			  <button (click)="sendContact()" ion-button full color="verdeApp" style="    border-radius: 40px;margin-top: 20px;" type="submit">Enviar</button>        \n		  </form>\n		  </div>\n	  \n		</div>\n	  \n	  \n	  \n	  </ion-content>\n	  '/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=28.js.map