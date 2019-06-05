webpackJsonp([16],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaHechaPageModule", function() { return ReservaHechaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserva_hecha__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservaHechaPageModule = (function () {
    function ReservaHechaPageModule() {
    }
    ReservaHechaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reserva_hecha__["a" /* ReservaHechaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reserva_hecha__["a" /* ReservaHechaPage */]),
            ],
        })
    ], ReservaHechaPageModule);
    return ReservaHechaPageModule;
}());

//# sourceMappingURL=reserva-hecha.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaHechaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservaHechaPage = (function () {
    function ReservaHechaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReservaHechaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservaHechaPage');
        if (window.plugins && window.plugins.NativeAudio) {
            window.plugins.NativeAudio.preloadComplex('bepapp', 'assets/bepapp.mp3', 1, 1, 0, function (msg) {
                window.plugins.NativeAudio.play('bepapp', function () {
                    setTimeout(function () {
                        window.plugins.NativeAudio.unload('bepapp');
                    }, 2000);
                });
            }, function (msg) {
                console.log('error: ' + msg);
            });
            console.log('playsonido');
        }
        if (this.navParams.get('confirmada') == 1) {
            this.textoMensaje = 'Listo! Reserva confirmada!';
            this.icono = 'complete.png';
        }
        else {
            this.textoMensaje = 'Tu reserva se está gestionando! En breve, te confirmamos!';
            this.icono = 'complete2.png';
        }
    };
    ReservaHechaPage.prototype.goPagina = function (pagina) {
        // this.navCtrl.setRoot(pagina);
        this.navCtrl.setRoot(pagina, { idCita: this.navParams.get('idCita'), 'startF': true });
        //this.navCtrl.push('PerfilCentroPage');
    };
    ReservaHechaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reserva-hecha',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\reserva-hecha\reserva-hecha.html"*/'<!--\n  Generated template for the ReservaHechaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reserva Completada</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div style="\n    padding-left: 40px;\n    text-align: center;\n    padding-right: 40px;\n    margin-top: 30px;\n">\n	<img src="assets/imgs/{{icono}}" style="\n   height: 55px;\n   width: 55px;\n   ">\n\n	<span style="\n    display: block;\n    font-size: 20px;\n    color: #333;\n    margin-top: 15px;\n    margin-bottom:  15px;\n">Completado!</span>\n\n	<span style="\n    display: block;\n    color: #999;\n    font-size: 15px;\n    margin-bottom: 40px;\n        line-height: 24px;\n">{{textoMensaje}}</span>\n\n\n</div>\n\n\n<div style="    width: 100%;\n    text-align: center;\n    position: fixed;\n    left: 0;\n    bottom: 40px;">\n\n<button (click)=\'goPagina("DetalleReservaPage")\' color=\'verdeApp\' ion-button>Ver mi Reserva</button>\n\n<button (click)=\'goPagina("InicioPage")\' color=\'headerColor\' ion-button>Volver al Inicio</button>\n\n\n\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\reserva-hecha\reserva-hecha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ReservaHechaPage);
    return ReservaHechaPage;
}());

//# sourceMappingURL=reserva-hecha.js.map

/***/ })

});
//# sourceMappingURL=16.js.map