webpackJsonp([65],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionpaquetePageModule", function() { return ConfirmacionpaquetePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmacionpaquete__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmacionpaquetePageModule = (function () {
    function ConfirmacionpaquetePageModule() {
    }
    ConfirmacionpaquetePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmacionpaquete__["a" /* ConfirmacionpaquetePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmacionpaquete__["a" /* ConfirmacionpaquetePage */]),
            ],
        })
    ], ConfirmacionpaquetePageModule);
    return ConfirmacionpaquetePageModule;
}());

//# sourceMappingURL=confirmacionpaquete.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmacionpaquetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
 * Generated class for the ConfirmacionpaquetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmacionpaquetePage = (function () {
    function ConfirmacionpaquetePage(navCtrl, navParams, modalCtrl, menuCtrl, loadingCtrl, events, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.confirmacionLista = function () {
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                console.log(data);
                if (data) {
                    var loading_1 = _this.loadingCtrl.create({ content: "Creando Cita..." });
                    loading_1.present();
                    _this.dataCentro.idCliente = data['idCliente'];
                    console.log(_this.dataCentro);
                    _this.apiProvider.addCita(_this.dataCentro)
                        .then(function (data) {
                        if (data) {
                            console.log(data);
                            if (data['insertId'] > 0) {
                                _this.navCtrl.setRoot('ReservaHechaPage');
                            }
                        }
                        else {
                            console.log('Ha ocurrido un error');
                        }
                        loading_1.dismissAll();
                    });
                }
                else {
                    var profileModal = _this.modalCtrl.create('LogindPage', { 'total': _this.dataCentro.total });
                    profileModal.present();
                    //this.menuCtrl.open();
                }
            });
        };
        this.dataCentro = {};
        this.idCliente = 0;
    }
    ConfirmacionpaquetePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataCentro.servicios = this.navParams.get('servicios');
        this.dataCentro.total = this.dataCentro.servicios[0].precioPaquete;
        this.dataCentro.data = {};
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.idCliente = data['idCliente'];
                console.log(_this.idCliente);
            }
            else {
                _this.idCliente = 0;
            }
            _this.dataCentro.fecha = _this.navParams.get('fecha');
            _this.dataCentro.nombreStaff = _this.navParams.get('nombreStaff');
            _this.dataCentro.fechaInicio = _this.navParams.get('fechaInicio');
            _this.dataCentro.fechaFinal = _this.navParams.get('fechaFinal');
            _this.dataCentro.hora = _this.navParams.get('hora');
            _this.dataCentro.horaF = _this.navParams.get('horaF');
            _this.dataCentro.idCuponCliente = _this.navParams.get('idCuponCliente');
            _this.dataCentro.data.nombre = _this.dataCentro.servicios[0].nombreCentro;
            _this.dataCentro.data.idFoto = _this.dataCentro.servicios[0].idFoto;
            _this.dataCentro.data.idCentro = _this.navParams.get('idCentro');
            _this.dataCentro.idEmpleado = -1;
            _this.dataCentro.idCliente = _this.idCliente;
        });
        console.log(this.dataCentro);
    };
    ConfirmacionpaquetePage.prototype.getDattt = function (str) {
        if (str) {
            return __WEBPACK_IMPORTED_MODULE_3_moment__["utc"](str).format('h:mm a');
        }
        else {
            return ' ';
        }
    };
    ConfirmacionpaquetePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmacionpaquete',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\confirmacionpaquete\confirmacionpaquete.html"*/'<!--\n  Generated template for the ConfirmarReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Confirmar Reserva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style=\'    background-color: #fafafa !important; \' >\n\n\n\n<div style="\n    display: inline-block;    width: 100%;padding: 10px;    border-bottom: solid 2px #ececec;\n">\n	<img src="http://50.116.17.150:3000/{{dataCentro.data?.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';"  style="\n    display: inline-block;\n    height: 90px;\n    width: 90px !important;\n    vertical-align: top;\n">\n	<div style="\n    display: inline-block;\n/*    width: calc(100% - 114px);*/\n    margin-left:  10px;\n">\n		<span style="margin: 2px 0px 0px 0px;\n    font-size: 18px;\n    color: #333;">{{dataCentro.data?.nombre}}</span>\n    <span class="itemComercio"></span>\n		<span class="itemComercio"></span>\n\n            <span class="itemComercio" style="margin-top:10px !important">\n       <ion-icon style=\'margin-right: 5px\' name="contact"></ion-icon>\n        <span style="color:#666 !important">Cualquier Personal</span>\n    </span>\n\n\n		<!-- <span class="itemComercio">City Name, Country</span> -->\n		<span class="itemComercio" style="margin-top:10px !important">Fecha <span style="margin-left: 10px;color:#EC527E !important">{{dataCentro?.fecha}}</span></span>\n    <span *ngIf="dataCentro.fechaInicio && dataCentro.fechaFinal"  class="itemComercio" style="margin-top:10px !important">\n      Hora \n        <span style="margin-left: 10px;color:#EC527E !important;    font-size: 12px;">\n      {{getDattt(dataCentro.fechaInicio)}} - {{getDattt(dataCentro.fechaFinal)}}\n      </span>\n     </span>\n\n \n\n\n\n\n\n   <!--              <span class="itemComercio" style="margin-top:10px !important">Hora Inicio<span style="margin-left: 10px;color:#EC527E !important">{{dataCentro?.hora}}</span></span>\n\n                 <span class="itemComercio" style="margin-top:10px !important">Finalizacion aprox. <span style="margin-left: 10px;color:#EC527E !important">{{dataCentro?.horaF}}</span></span> -->\n\n\n\n\n	</div>\n\n\n	</div>\n\n\n\n\n\n\n<div *ngFor="let n of dataCentro.servicios;let index=index; let odd=odd; let even=even;" \nstyle="width: 100%; display: inline-block;" [ngClass]="{ odd: odd, even: even }">\n	\n\n	<div style="\n    display: inline-block;\n    width: 100%;padding: 16px;    border-bottom: solid 2px #ececec;\n \n">\n\n\n\n\n		<span style="\n    font-size: 18px;\n    color:  #333;\n">{{n.nombreServicio}}</span>\n\n	<div style="    margin-top: 10px;">\n\n\n\n    <span style="color: #888 !important;font-size: 15px;text-decoration: line-through;">${{n.precioServicio}}</span>\n\n\n\n    <span style="margin-right: 20px;     margin-left: 24px;   color: #333;\n    font-size: 12px;">\n\n    <ion-icon style=\'margin-right: 5px\' name="ios-time-outline"></ion-icon>\n    {{n.duracionPaquete}} min en total\n\n    </span>\n\n    </div>\n\n	</div>\n\n\n\n\n</div>\n\n\n\n\n	<div style="\n   padding: 16px;\n"><span style="\n    font-size: 16px;\n    color: #999;\n">Total</span> <span style="\n    color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n\n">${{dataCentro?.total}}</span>\n\n\n\n</div>\n\n	 <ion-item style=\'padding: 0px !important;\'>\n  <ion-textarea  style=\'      color: #777;\n    background: white;\n    height: 136px;\n    margin: 16px;\n    font-size: 14px;\n    padding: 12px;\' placeholder="Nota para {{dataCentro.data?.nombre}} (opcional)" \n      [(ngModel)]="dataCentro.notaCita" name="note" autocomplete="on" autocorrect="on"></ion-textarea>\n </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer style=\'padding: 16px;\'>\n    <button (click)=\'confirmacionLista()\' style=" " ion-button class="botonVerdeFulls">Confirmar Reserva</button>\n\n\n\n</ion-footer>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\confirmacionpaquete\confirmacionpaquete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], ConfirmacionpaquetePage);
    return ConfirmacionpaquetePage;
}());

//# sourceMappingURL=confirmacionpaquete.js.map

/***/ })

});
//# sourceMappingURL=65.js.map