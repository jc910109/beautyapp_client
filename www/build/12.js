webpackJsonp([12],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificarPageModule", function() { return CalificarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calificar__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_locales_es__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_5__angular_common_locales_es__["a" /* default */], 'es');
var CalificarPageModule = (function () {
    function CalificarPageModule() {
    }
    CalificarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calificar__["a" /* CalificarPage */],
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: 'es' }],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__calificar__["a" /* CalificarPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], CalificarPageModule);
    return CalificarPageModule;
}());

//# sourceMappingURL=calificar.module.js.map

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

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificarPage; });
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








var CalificarPage = (function () {
    function CalificarPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.readOnly = false;
        this.setLoadingText = function (text, total, inc) {
            var elem = document.querySelector("div.itemCa");
            if (elem)
                elem.innerHTML = text + ' / ' + (total);
            var elem2 = document.querySelector("span.porcenCrec");
            if (elem2)
                elem2['style'].width = inc + '%';
        };
        this.goAnimacion2 = function (puntosV, totalV, puntosActual) {
            console.log(puntosV, totalV, puntosActual);
            var puntos = puntosV;
            var totall = totalV;
            var expUserM = puntosActual;
            var exp2Cont = 0;
            var valorInc = (puntosActual * 100) / 1500;
            var tiempo = 3000 / (puntos / 1);
            console.log(tiempo);
            _this.presentAlert2("\n      <div class=\"meter\">\n      <span class='porcenCrec' style=\"width:" + valorInc + "%;\"><span class=\"progress2\"></span></span>\n      </div>\n\n<div class=\" itemCa\">\n \n</div>\n\n<div class=\"floating itemFlo\">\n  + " + puntos + " exp\n</div>\n\n      <div class=\"leyendaAlert\">\n\n      <img  style='display: flex;' src=\"assets/imgs/complete.png\">\n\n      <span style='display: flex;'>\n      Gracias por valorar! Has ganado " + puntos + " de experiencia\n      </span>\n\n      </div>");
            var interval = setInterval(function () {
                puntos -= 1;
                //expUserM+=1;
                expUserM = (expUserM + 1) % 1500;
                exp2Cont++;
                //this.zone.run(()=>{   valorInc = parseInt(((puntosActual+exp2Cont)%1500)*100/1500) });
                valorInc = parseInt((((puntosActual + exp2Cont) % 1500) * 100 / 1500).toString());
                _this.setLoadingText(expUserM.toString(), totall.toString(), valorInc.toString());
                if (puntos <= 0)
                    clearInterval(interval);
            }, tiempo);
        };
        this.dataCentro = {};
        this.rate = {};
        this.comentario = '';
        this.botonActivo = false;
    }
    CalificarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.navParams.data);
        this.dataCentro = this.navParams.data;
        if (this.dataCentro.tipo == 1) {
            this.readOnly = true;
            this.rate.servicio = this.dataCentro.servicio;
            this.rate.staff = this.dataCentro.staff;
            this.rate.precio = this.dataCentro.precio;
            this.rate.limpieza = this.dataCentro.limpieza;
            this.rate.ambiente = this.dataCentro.ambiente;
            this.comentario = this.dataCentro.comentario;
        }
        else {
            this.readOnly = false;
        }
        console.log('ionViewDidLoad CalificarPage');
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataUser = data;
            }
            else {
                console.log('error');
            }
        });
    };
    CalificarPage.prototype.reintentarAlert = function (funcionEnviar) {
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
    CalificarPage.prototype.agregadoOk = function () {
        /*
          let alert = this.alertCtrl.create({
            title: 'Evaluacion agregada',
            subTitle: 'La evaluacion ha sido agregada',
            buttons: ['Cerrar']
          });
          alert.present();
        */
        this.goAnimacion2(data.puntosGanados, data.dataUser[0].appexp, this.userDataProfile.exp);
        this.events.publish('userCreated', data.dataUser[0]);
    };
    CalificarPage.prototype.presentAlert2 = function (mensaje) {
        var alert = this.alertCtrl.create({
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje)
        });
        var audio = new Audio('/assets/sounds/earn_points.mp3');
        audio.play();
        alert.present();
    };
    CalificarPage.prototype.agregar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        var cantidad = 0;
        var acumulado = 0;
        var uploadData = new FormData();
        Object.keys(this.rate).forEach(function (key) {
            acumulado += parseInt(_this.rate[key]);
            cantidad += 1;
            uploadData.append(key, _this.rate[key]);
        });
        uploadData.append('idEvaluacionCentro', this.dataCentro.idEvaluacionCentro);
        uploadData.append('comentario', this.comentario);
        uploadData.append('idCliente', this.dataUser.idCliente);
        uploadData.append('evaluacion', (acumulado / cantidad).toString());
        uploadData.append('imageData', this.fileUpload, this.imageName);
        console.log(uploadData);
        this.apiProvider.agregarOpinion(uploadData)
            .then(function (data) {
            loading.dismiss();
            console.log(data);
            if (data && data['dataI'].affectedRows > 0) {
                _this.goAnimacion2(data['dataUser'][0].puntosG, data['dataUser'][0].appexp, (data['dataUser'][0].exp - data['dataUser'][0].puntosG));
                _this.events.publish('userCreated', data['dataUser'][0]);
                //console.log('borrada');
                //this.navCtrl.pop();
                _this.navCtrl.setRoot('OpinionesPage');
            }
            else {
                console.log('Ha ocurrido un error');
                _this.reintentarAlert(_this.agregar.bind(_this));
            }
        });
    };
    CalificarPage.prototype.subirFoto = function () {
        var _this = this;
        navigator.camera.getPicture(function (imageData) {
            _this.imageData = imageData;
            var date = new Date().valueOf();
            var text = _this.dataCentro.idEvaluacionCentro;
            // Replace extension according to your media type
            _this.imageName = date + '.' + text + '.jpeg';
            // call method that creates a blob from dataUri
            var imageBlob = _this.dataURItoBlob(_this.imageData);
            _this.fileUpload = imageBlob;
            console.log(_this.fileUpload);
        }, function (message) {
            alert(message);
        }, {
            destinationType: 0,
            correctOrientation: true
        });
    };
    CalificarPage.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    CalificarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calificar',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\calificar\calificar.html"*/'<!--\n  Generated template for the CalificarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Evaluando</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style=\'background-color: #f7f8f9;\'>\n\n\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{dataCentro.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="display:block;margin: 2px 0px 0px 0px;\n				font-size: 16px;\n				color: #333;">{{dataCentro?.nombre}}</span>\n\n\n				<span style=\'       margin-top: 15px;\n    display: block;\' class="itemComercio" >\n\n					<span style="margin-right: 15px"><ion-icon style=\'margin-right: 5px; \' name="md-calendar"></ion-icon>{{dataCentro.horaFinalEsperado?.split(\'T\')[0] | date}}</span>\n\n					<span style="     color: #EC527E;   ">${{dataCentro.precioEsperado}}</span>\n\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n<div class="rat">\n<span class="rat-name">	Servicio</span>\n<rating readOnly="{{readOnly}}"  (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.servicio"    readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n<div class="rat">\n	<span class="rat-name">Staff</span>\n<rating  readOnly="{{readOnly}}" (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.staff"   readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n<div class="rat">\n	<span class="rat-name">Precio</span>\n<rating  readOnly="{{readOnly}}"  (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.precio" readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n\n<div class="rat">\n	<span class="rat-name">Limpieza</span>\n<rating   readOnly="{{readOnly}}" (ngModelChange)="botonActivo=true" [(ngModel)]="rate.limpieza"  readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n\n<div class="rat">\n	<span class="rat-name">Ambiente</span>\n<rating readOnly="{{readOnly}}"  (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.ambiente"   readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n  <ion-item >\n\n\n    <ion-textarea [disabled]=\'readOnly\' [(ngModel)]="comentario" style=\'    border: 1px solid lightgray;\n    width: 100%;\n    height: 100px;\n    padding: 10px;\n    margin-top: 30px;\'  placeholder="Ingresa un comentario"></ion-textarea>\n  </ion-item>\n\n <div style="    width: 100%;\n    text-align: center;\n margin-top: 20px;">\n\n<img *ngIf="imageData" [src]="sanitizer.bypassSecurityTrustUrl(\'data:image/jpeg;base64,\' + imageData)" style="width:30%; float: left; margin-left: 17px;"> \n<button  [hidden]=\'readOnly\' (click)=\'subirFoto()\' style=\'float: left; margin: 3px 0px 0px 20px;border-color: #0079f4 !important;color: #0079f4 !important\' ion-button small outline>{{imageData?\'Cambiar\':\'Agregar\'}} Foto</button>\n </div>\n <br>\n <br>\n<div style="    width: 100%;\n    text-align: center;\n margin-top: 20px;\n display: inline-block;">\n\n    <button  [hidden]=\'readOnly\' [disabled]=\'!botonActivo || !rate.ambiente || !rate.limpieza || \n    !rate.precio || !rate.staff || !rate.servicio\'  (click)=\'agregar()\' style=" border-radius: 70px;"  color=\'verdeApp\' ion-button>Agregar Evaluación</button>\n\n\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\calificar\calificar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CalificarPage);
    return CalificarPage;
}());

//# sourceMappingURL=calificar.js.map

/***/ })

});
//# sourceMappingURL=12.js.map