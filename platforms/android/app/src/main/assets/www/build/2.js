webpackJsonp([2],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionesPageModule", function() { return OpinionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opiniones__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_locales_es__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here




Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_6__angular_common_locales_es__["a" /* default */], 'es');
var OpinionesPageModule = (function () {
    function OpinionesPageModule() {
    }
    OpinionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opiniones__["a" /* OpinionesPage */],
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: 'es' }],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__opiniones__["a" /* OpinionesPage */]),
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], OpinionesPageModule);
    return OpinionesPageModule;
}());

//# sourceMappingURL=opiniones.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__["a" /* FiltrofavPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__["a" /* FiltrofavPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrofavPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FiltrofavPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FiltrofavPipe = (function () {
    function FiltrofavPipe() {
    }
    FiltrofavPipe.prototype.transform = function (items, callback) {
        if (!items || !callback) {
            return items;
        }
        return items.filter(function (item) { return callback(item); });
    };
    FiltrofavPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filtrofav',
            pure: false
        })
    ], FiltrofavPipe);
    return FiltrofavPipe;
}());

//# sourceMappingURL=filtrofav.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
/* harmony default export */ __webpack_exports__["a"] = ([
    'es',
    [
        ['a. m.', 'p. m.'],
        ,
    ],
    ,
    [
        ['D', 'L', 'M', 'X', 'J', 'V', 'S'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
        ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']
    ],
    ,
    [
        ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        [
            'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.',
            'dic.'
        ],
        [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
            'octubre', 'noviembre', 'diciembre'
        ]
    ],
    ,
    [['a. C.', 'd. C.'], , ['antes de Cristo', 'después de Cristo']], 1, [6, 0],
    ['d/M/yy', 'd MMM y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'],
    ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss (zzzz)'],
    [
        '{1} {0}',
        ,
        '{1}, {0}',
    ],
    [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], '€', 'euro', function (n) {
        if (n === 1)
            return 1;
        return 5;
    }
]);
//# sourceMappingURL=es.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(105);
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
 * Generated class for the OpinionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpinionesPage = (function () {
    function OpinionesPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
    }
    /*
      ionViewDidLoad() {
    
        }
    */
    OpinionesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.section = "one";
        console.log('ionViewDidLoad OpinionesPage');
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataUser = data;
                //this.menuActivo = true;
            }
            else {
                console.log('error');
                // this.menuActivo = false;
            }
            _this.getOpiniones(_this.dataUser.idCliente);
        });
    };
    OpinionesPage.prototype.reintentarAlert = function (funcionEnviar) {
        var mensaje = "<div>  \n                      <p>No hemos podido conectar. \n                      Verifica tu conexi\u00F3n a Internet para continuar</p>\n                      \n                   <div>";
        var alert = this.alertCtrl.create({
            title: 'Error de conexión',
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje),
            buttons: [
                {
                    text: 'Reintentar',
                    handler: function () {
                        funcionEnviar();
                    }
                },
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    OpinionesPage.prototype.filterFav = function (user) {
        //console.log(user);
        return user.estado == 1;
    };
    OpinionesPage.prototype.filterFav2 = function (user) {
        //console.log(user);
        return user.estado == 2;
    };
    OpinionesPage.prototype.evaluar = function (n) {
        var dataE = n;
        dataE.tipo = 0;
        this.navCtrl.push('CalificarPage', n);
    };
    OpinionesPage.prototype.verOpinion = function (n) {
        var dataE = n;
        dataE.tipo = 1;
        this.navCtrl.push('CalificarPage', n);
    };
    OpinionesPage.prototype.irReserva = function (id) {
        this.navCtrl.push('DetalleReservaPage', { idCita: id });
    };
    OpinionesPage.prototype.getOpiniones = function (idCliente) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando" });
        loading.present();
        var dataE = { idCliente: idCliente };
        console.log(dataE);
        this.apiProvider.getOpiniones(dataE)
            .then(function (data) {
            loading.dismiss();
            console.log(data);
            if (data) {
                _this.opiniones = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
                _this.reintentarAlert(_this.ionViewDidLoad.bind(_this));
            }
        });
    };
    OpinionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opiniones',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\opiniones\opiniones.html"*/'<!--\n  Generated template for the OpinionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n\n      <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n\n\n    <ion-title>Opiniones</ion-title>\n  </ion-navbar>\n\n\n\n\n<ion-segment mode="md" [(ngModel)]="section">\n    <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="one" >\n         <span> \n         <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/estrellaBlanca.png">\n         <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/estrellaGris.png">\n          Pendientes</span>\n      </ion-segment-button>\n\n\n\n      <ion-segment-button  value="two" style=\'\n      font-size: 15px;text-transform: none !important;\' >\n      <span>\n        <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/checkBlanco.png"> \n        <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/agregadosGris.png"> \n\n        \n\n        Agregadas\n         </span>\n      </ion-segment-button>\n</ion-segment>\n\n\n\n\n</ion-header>\n\n\n<ion-content style=\'background-color: #fafafa !important\'>\n\n\n\n\n\n\n\n<div [ngSwitch]="section">\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n <div class=\'noResultado\' *ngIf="(opiniones | filtrofav: filterFav)?.length === 0" >No hay opiniones pendientes</div> \n\n\n		<ion-card *ngFor="let n of opiniones | filtrofav: filterFav" >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 16px;\n				color: #333;">{{n.nombre}}</span>\n\n\n				<span style=\'    margin-top: 0px;\' class="itemComercio" >\n\n					<span style="margin-right: 15px"><ion-icon style=\'margin-right: 5px; \' name="md-calendar"></ion-icon>{{n.horaFinalEsperado?.split(\'T\')[0] | date}}</span>\n\n					<span style="     color: #EC527E;   ">${{n.precioEsperado}}</span>\n\n          <div style="margin-top: 12px;">\n  <button  (click)=\'evaluar(n)\' style=\'background-color: #0079f4\' ion-button small >Calificar</button>  \n\n    <button  (click)=\'irReserva(n.idCita)\' style=\'background-color: #0079f4\' ion-button small >ver reserva</button>  \n\n</div>\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n\n\n    </ion-list>\n\n    <ion-list  mode="md" *ngSwitchCase="\'two\'">\n\n\n <div class=\'noResultado\' *ngIf="(opiniones | filtrofav: filterFav2)?.length === 0" >No has opinado sobre ningun negocio aun</div> \n\n<div *ngFor="let n of opiniones | filtrofav: filterFav2"> \n\n\n<div   style="\nmargin-top:10px;\n    width: 100%;\n    display: inline-block;    padding-left: 15px;\n    padding-right: 15px;\n">\n  \n  <img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n  <div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 14px;\n">\n<span style="\n    color: #888;\n    font-size: 13px;\n    float: right;\n    margin-right: 10px;\n    margin-top: 6px;\n    ">{{n.timeAgo}}</span>\n\n    <span (click)=\'verOpinion(n)\' style="\n    font-size: 16px;\n    color:  #333;\n">{{n.nombre}}\n\n\n\n    </span>\n    <div style="width: 100%;\n    display: inline-block;\n    margin-top: 5px;">\n    <div (click)=\'verOpinion(n)\' style="   display: inline-block;">\n      \n          <span style="\n    \n    font-size: 17px;\n    margin-top: 4px;\n    color: #999;display: inline-block;\n    ">\n                  <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 1}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 2}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 3}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 4}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon [ngClass]="{\'ratingStar\': n.puntuacion>= 5}" class=" icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  </span>  \n\n\n    </div>\n\n <button (click)=\'irReserva(n.idCita)\' style=\'font-size: 13px;\n    float: right;    border-color: #0079f4 !important;\n    color: #0079f4 !important;\' ion-button outline small >ver orden</button>\n<!--     <span style="\n    color: #888;\n    font-size: 13px;\n    float: right;\n    margin-right: 10px;\n    margin-top: 6px;\n    " (click)=\'irReserva(n.idCita)\'>ver orden</span> -->\n</div>\n\n<!--     <p style="\n    margin-right: 35px;\n    line-height: 19px;\n    color: #999;\n">{{n.comentario}}</p> -->\n  </div>\n\n          <div style="margin-top: 13px;color: darkgray">{{n.comentario}}</div>\n          <div style="margin-top: 13px;color: darkgray;display: inline-flex;padding-left: 20px;" *ngIf=\'n.respuestaCentro\' >\n              <img src="http://50.116.17.150:3000/{{n.idFoto}}" \n              onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n              display: inline-block;\n              vertical-align: top;\n              height: 25px;\n              width: 25px;\n              "> <div style="    padding-left: 15px;">{{n.respuestaCentro}}</div>\n          </div>\n</div>\n\n\n\n\n<div class="separator"></div>\n</div>\n\n\n\n\n    </ion-list>\n\n</div>\n\n  <div *ngIf=\'!opiniones\' style="text-align: center;padding-top: 25%;">\n        <ion-spinner name="bubbles"></ion-spinner>\n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\opiniones\opiniones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], OpinionesPage);
    return OpinionesPage;
}());

//# sourceMappingURL=opiniones.js.map

/***/ })

});
//# sourceMappingURL=2.js.map