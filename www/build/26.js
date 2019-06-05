webpackJsonp([26],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageModule", function() { return DemoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemoPageModule = (function () {
    function DemoPageModule() {
    }
    DemoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__demo__["a" /* DemoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__demo__["a" /* DemoPage */]),
            ],
        })
    ], DemoPageModule);
    return DemoPageModule;
}());

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoPage; });
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


/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DemoPage = (function () {
    function DemoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DemoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DemoPage');
    };
    DemoPage.prototype.siguienteSlide = function () {
        console.log('dasd');
        this.slider.slideNext();
    };
    DemoPage.prototype.iniciarApp = function () {
        this.navCtrl.setRoot('InicioPage');
    };
    DemoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-demo',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\demo\demo.html"*/'<ion-content>\n\n<ion-slides   pager="true" style=\'background-color: #ffffff;\' >\n\n  <ion-slide>\n  \n    <img class="imgDemo"  src="assets/imgs/RESERVA-100.png" />\n    <br><br>\n    <h1 class="tituloDemo">RESERVA <br> 24/7</h1>\n    <p class="textoDemo">Reserva fácil en cualquier hora y <br>\n    					desde cualquier lugar</p>\n  </ion-slide>\n\n  <ion-slide>\n  \n    <img class="imgDemo"  src="assets/imgs/SERVICIO-100.png" />\n    <br><br>\n    <h1 class="tituloDemo">ENCUENTRA EL SERVICIO <br> QUE DESEAS </h1>\n    <p class="textoDemo">Cualquier servicio de belleza y bienestar <br>\n    					lo encuentras en YourBeauty</p>\n  </ion-slide>\n\n  <ion-slide>\n  \n    <img class="imgDemo"  src="assets/imgs/OFERTAS-100.png" />\n    <br><br>\n    <h1 class="tituloDemo">DESCUBRE LOS DESCUENTOS <br> Y LAS OFERTAS </h1>\n    <p class="textoDemo">Aprovecha los cupones de descuentos, <br>\n    					promociones y ofertas!</p>\n  </ion-slide>\n\n  <ion-slide>\n  \n    <img class="imgDemo"  src="assets/imgs/EXPERIENCIA-100.png" />\n    <br><br>\n    <h1 class="tituloDemo">VIVE LA EXPERIENCIA <br> YOURBEAUTY <span style="font-size: 15px;position: fixed;margin-left: 3px;margin-top: 3px;">&#174;</span></h1>\n    <p class="textoDemo">Reserva en los centros y gana puntos canjeables por <br>\n    					descuentos en servicios de belleza y bienestar</p>\n  </ion-slide>\n \n \n</ion-slides>\n\n\n <button style="    position: fixed;\n    right: 0;\n    margin: 10px;\n    color: black;\n    font-size: 19px;\n    bottom: 0;\n    background: transparent; z-index:20"  (click)=\'iniciarApp()\'>Iniciar</button>\n\n<!-- \n     <button style="    position: absolute;\n    left: 0;\n    margin: 10px;\n    color: white;\n    font-size: 19px;\n    bottom: 0;\n    background: transparent; z-index:20"  (click)=\'siguienteSlide()\' >Siguiente</button>\n\n -->\n\n</ion-content>'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\demo\demo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DemoPage);
    return DemoPage;
}());

//# sourceMappingURL=demo.js.map

/***/ })

});
//# sourceMappingURL=26.js.map