webpackJsonp([14],{

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slides__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidesPageModule = (function () {
    function SlidesPageModule() {
    }
    SlidesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__slides__["a" /* SlidesPage */]),
            ],
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());

//# sourceMappingURL=slides.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesPage; });
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
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidesPage = (function () {
    function SlidesPage(viewCtrl, apiProvider, navCtrl, navParams, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.filteredComments = [];
        this.filteredComments = this.navParams.get('filteredComments').slice(0);
        var index = this.navParams.get('index');
        this.rotate(index);
    }
    SlidesPage.prototype.ionViewDidLoad = function () {
    };
    SlidesPage.prototype.rotate = function (times) {
        for (var index = 0; index < times; index++) {
            var item = this.filteredComments.shift();
            this.filteredComments.push(item);
        }
    };
    SlidesPage.prototype.closeModals = function () {
        this.viewCtrl.dismiss();
    };
    SlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slides',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\slides\slides.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>    \n    <ion-buttons end>\n    <button style="    font-size: 34px;" ion-button (click)="closeModals()"><ion-icon ios="ios-close"></ion-icon></button>\n  \n  \n    </ion-buttons>\n  \n  \n  </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n  \n  \n  \n  \n      <div *ngIf="filteredComments.length > 0">\n        <div class=\'reviewImg\' *ngFor="let n of filteredComments">\n          <img src="{{apiProvider.api2}}/{{n.idFoto}}"> \n          <div style="margin-top:5px;\n              width: 100%;\n              display: inline-block;    padding-left: 15px;\n              padding-right: 15px;\n          ">\n            \n            <img *ngIf=\'n.fotoFb\'  [hidden]=\'n.fotoUsuario\' src="{{n.fotoFb}}" \n                  onError="this.src=\'assets/imgs/usuario.png\';"   style="\n              display: inline-block;\n              vertical-align: top;\n              height: 40px;\n              width: 40px;\n          ">\n\n            <img [hidden]=\'n.fotoFb\' src="http://50.116.17.150:3000/{{n.fotoUsuario}}" \n                  onError="this.src=\'assets/imgs/usuario.png\';"   style="\n              display: inline-block;\n              vertical-align: top;\n              height: 40px;\n              width: 40px;\n                  object-fit: cover;\n              object-position: center;\n              border-radius: 40px;\n              \n          ">\n\n\n            <div style="\n              display: inline-block;\n              width: calc(100% - 83px);\n              margin-left: 22px;\n          ">\n          <span style="\n              color: #888;\n              font-size: 13px;\n              float: right;\n              margin-right: 10px;\n              margin-top: 2px;\n              ">{{n.timeAgo || \'\'}}</span>\n\n              <span style="\n              font-size: 15px;\n              color:  #333;\n          ">{{n.nombreUsuario || \'\'}}\n\n\n\n              </span>\n              <div style="    margin-top: 0px;">\n                \n                    <span style="\n              display: block;\n              font-size: 17px;\n              margin-top: 4px;\n              color: #999;\n              ">\n\n                            <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 1}"  class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                            <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 2}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                            <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 3}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                            <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 4}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                            <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 5}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                            </span>  \n\n\n              </div>\n\n          <!--     <p style="\n              margin-right: 35px;\n              line-height: 19px;\n              color: #999;\n          ">{{n.comentario || \'\'}}</p> -->\n            </div>\n            \n                      <div style="    text-transform: lowercase;margin-top: 2px;color: darkgray">{{n.comentario}}</div>\n                    <div style="margin-top: 2px;color: darkgray;display: inline-flex;padding-left: 20px;" *ngIf=\'n.respuestaCentro\' >\n                        <img src="http://50.116.17.150:3000/{{n.idFoto}}" \n                        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n                        display: inline-block;\n                        vertical-align: top;\n                        height: 25px;    text-transform: lowercase;\n                        width: 25px;\n                        "> <div style="    padding-left: 15px;">{{n.respuestaCentro}}</div>\n                    </div>\n          <div class="separator"></div>\n          </div>\n        </div>        \n      </div>\n  \n  \n  \n  </ion-content>\n  '/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\slides\slides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SlidesPage);
    return SlidesPage;
}());

//# sourceMappingURL=slides.js.map

/***/ })

});
//# sourceMappingURL=14.js.map