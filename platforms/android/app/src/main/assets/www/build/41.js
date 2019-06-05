webpackJsonp([41],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisReservasPageModule", function() { return MisReservasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_reservas__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var MisReservasPageModule = (function () {
    function MisReservasPageModule() {
    }
    MisReservasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mis_reservas__["a" /* MisReservasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__mis_reservas__["a" /* MisReservasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], MisReservasPageModule);
    return MisReservasPageModule;
}());

//# sourceMappingURL=mis-reservas.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__ = __webpack_require__(461);
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

/***/ 461:
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Generated class for the MisReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisReservasPage = (function () {
    function MisReservasPage(navCtrl, DomSanitizer, navParams, modalCtrl, alertCtrl, loadingCtrl, events, apiProvider, zone) {
        this.navCtrl = navCtrl;
        this.DomSanitizer = DomSanitizer;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.zone = zone;
        this.reservas = [];
    }
    MisReservasPage.prototype.repetirReserva = function ($event, idCita) {
        var _this = this;
        $event.stopPropagation();
        var dataE = { idCita: idCita };
        this.apiProvider.getDataCita(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.zone.run(function () {
                    _this.dataCita = data['cita'][0] || [];
                    _this.horaSeleccionada = _this.dataCita.horaInicio;
                    _this.horaFinalizacion = _this.dataCita.horaFinalEsperado;
                    _this.fechaCalendario = _this.dataCita.horaInicio;
                    _this.servicios = data['servicios'] || [];
                    _this.horario = data['horario'];
                    _this.apiProvider.vaciarCarrito().then(function () {
                        if (_this.servicios.length > 0)
                            _this.addServicio(0);
                    });
                });
            }
            else {
                console.log('Ha ocurrido un error');
                _this.reintentarAlert(_this.ionViewDidEnter.bind(_this));
            }
        });
        //
    };
    MisReservasPage.prototype.addServicio = function (index) {
        var _this = this;
        var servicio = this.servicios[index];
        this.apiProvider.addProducto({
            duracion: servicio.duracion,
            idCategoria: servicio.idCategoria,
            idServicio: servicio.idServicio,
            idSubcategoria: 0,
            imagenCategoria: '',
            nombre: servicio.nombre,
            nombreCategoria: servicio.nombreCategoria,
            nombreSubcategoria: '',
            oferta: null,
            precio: servicio.precio,
            precioFinal: servicio.precioCobrado
        }).then(function () {
            if (index + 1 < _this.servicios.length)
                _this.addServicio(index + 1);
            else
                _this.navCtrl.push('ReservaPage', { idCentro: _this.dataCita.idCentro });
        });
    };
    //ionViewDidLoad() {
    MisReservasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.section = "one";
        console.log('ionViedLoad MisReservasPage');
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataUser = data;
                _this.getReservas();
                //this.menuActivo = true;
            }
            else {
                console.log('error');
                // this.menuActivo = false;
            }
        });
    };
    MisReservasPage.prototype.filterFav = function (user) {
        //console.log(user);
        return user.estado == 1 || user.estado == 2 || user.estado == 5
            || user.estado == 4;
    };
    MisReservasPage.prototype.filterFav2 = function (user) {
        //console.log(user);
        return user.estado == 7;
    };
    MisReservasPage.prototype.filterFav3 = function (user) {
        //console.log(user);
        return user.estado == 3;
    };
    MisReservasPage.prototype.goDetalle = function (idCita) {
        //this.navCtrl.push('DetalleReservaPage');
        this.navCtrl.push('DetalleReservaPage', { idCita: idCita });
    };
    MisReservasPage.prototype.getMes = function (fecha) {
        var date = new Date(fecha), locale = "es-es", month = date.toLocaleString(locale, { month: "short" });
        return month;
    };
    MisReservasPage.prototype.getDia = function (fecha) {
        var date = new Date(fecha), day = date.getDate();
        return day;
    };
    MisReservasPage.prototype.getHora = function (fecha) {
        var date = new Date(fecha), hora = date.getHours(), min = date.getMinutes();
        return ("0" + hora).slice(-2) + ':' + ("0" + min).slice(-2);
    };
    MisReservasPage.prototype.getDattt = function (str) {
        if (str) {
            return __WEBPACK_IMPORTED_MODULE_4_moment__["utc"](str).format('h:mm a');
        }
        else {
            return ' ';
        }
    };
    MisReservasPage.prototype.getNumMen = function (n) {
        var num = parseInt(n);
        if (num > 1) {
            return num - 1;
        }
        else {
            return num;
        }
    };
    MisReservasPage.prototype.getReservas = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando" });
        loading.present();
        this.apiProvider.reservasUser({ idCliente: this.dataUser.idCliente })
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.reservas = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
                _this.reintentarAlert(_this.ionViewDidEnter.bind(_this));
            }
            loading.dismiss();
        });
    };
    MisReservasPage.prototype.reintentarAlert = function (funcionEnviar) {
        var mensaje = "<div>  \n                      <p>No hemos podido conectar. \n                      Verifica tu conexi\u00F3n a Internet para continuar</p>\n                      \n                   <div>";
        var alert = this.alertCtrl.create({
            title: 'Error de conexión',
            subTitle: this.DomSanitizer.bypassSecurityTrustHtml(mensaje),
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
    MisReservasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mis-reservas',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\mis-reservas\mis-reservas.html"*/'<!--\n  Generated template for the MisReservasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n\n      <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Mis Reservaciones</ion-title>\n  </ion-navbar>\n\n\n<ion-segment mode="md" [(ngModel)]="section">\n    <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="one" >\n	       <span> \n	       <!-- <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/calendarBlanco.png">\n	       <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/calendarGris.png"> -->\n	        Activas</span>\n	    </ion-segment-button>\n\n			<ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="three" >\n					<span> \n					<!-- <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/calendarBlanco.png">\n					<img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/calendarGris.png"> -->\n					 Completadas</span>\n			 </ion-segment-button>\n\n	    <ion-segment-button  value="two" style=\'\n    	font-size: 15px;text-transform: none !important;\' >\n    	<span>\n	      <!-- <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/equisBlanca.png"> \n	      <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/equisGris.png">  -->\n	      Inactivas\n	       </span>\n	    </ion-segment-button>\n</ion-segment>\n\n\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n\n\n<div [ngSwitch]="section">\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n    	<div  style=\'    margin: 30px;\n    text-align: center;\n    font-size: 16px;\n    color: darkgray;\' *ngIf="(reservas | filtrofav: filterFav).length == 0" >No hay reservas en esta seccion\n\n\n    	</div>\n		<div class=\'cardReserva\' *ngFor="let n of reservas | filtrofav: filterFav" (click)=\'goDetalle(n.idCita)\'>\n\n		<div>\n				<div style="display: inline-block;    width: 100%;">\n				<div  class="fechaItem" \n				[ngClass]="{\'citaE3sb3\':n.estado == 3,\'citaE4sb3\':n.estado == 4 || n.estado == 7, \'citaE2sb3\': n.estado == 5, \'citaE1sb3\':n.estado == 2, \'citaE0sb3\':n.estado == 1}">\n						<span style="display: block; text-transform: uppercase;">{{getMes(n.horaInicio)}}</span>\n						<span style="display: block;font-size: 27px;font-weight: 800">{{getDia(n.horaInicio)}}</span>\n						<span *ngIf=\'n.horaInicio\' style="display: block;">{{getDattt(n.horaInicio)}}</span>\n				</div>\n				<div style="    display: inline-block;vertical-align: middle;    max-width: 58%;">\n				<span *ngIf=\'n.estado==1\' class=\'estadoReservas\' style="color: #efd801;">\n				PENDIENTE CONFIRMAR\n				</span>\n				<span *ngIf=\'n.estado==2\'  class=\'estadoReservas\' style="color:#5072C0 ">\n				CONFIRMADA\n				</span>\n				<span *ngIf=\'n.estado==3\'  class=\'estadoReservas\' style="color: #0079f4;">\n				COMPLETA\n				</span>\n				<span *ngIf=\'n.estado==5\'  class=\'estadoReservas\' style="color: #FFC859">\n				REPROGRAMADA - PENDIENTE</span>\n				<span *ngIf=\'n.estado==4\' class=\'estadoReservas\' style="color: #f75669;">\n				DECLINADA\n				</span>\n\n						<span *ngIf=\'n.estado==7\' class=\'estadoReservas\' style="color: #f75669;">\n				CANCELADA\n				</span>\n\n\n				<span style="font-size: 15px;\n    color: #8a8888;    font-weight: 500;">\n				{{n.nombreCentro}}\n				</span>\n				<span  class=\'estadoReservas2\' style="color: #999;">\n				{{n.servicioMain}} <span *ngIf=\'n.cantServicios>1\'> y {{getNumMen(n.cantServicios)}} más </span> \n				</span>\n				</div>\n				<ion-icon class=\'iconR\' name="arrow-forward"></ion-icon>\n				</div>\n\n		</div>\n		</div>\n\n\n		\n\n\n    </ion-list>\n\n    <ion-list  mode="md" *ngSwitchCase="\'two\'">\n\n\n    	<div  style=\'    margin: 30px;\n    text-align: center;\n    font-size: 16px;\n    color: darkgray;\' *ngIf="(reservas | filtrofav: filterFav2).length == 0" >No hay reservas en esta seccion\n\n    \n    	</div>\n\n    	\n\n			<div class=\'cardReserva\' *ngFor="let n of reservas.slice().reverse() | filtrofav: filterFav2" (click)=\'goDetalle(n.idCita)\'>\n\n		<div>\n				<div style="display: inline-block;    width: 100%;">\n				<div  class="fechaItem">\n						<span style="display: block; text-transform: uppercase;">{{getMes(n.horaInicio)}}</span>\n						<span style="display: block;font-size: 27px;font-weight: 800">{{getDia(n.horaInicio)}}</span>\n						<span *ngIf=\'n.horaInicio\' style="display: block;">{{getDattt(n.horaInicio)}}</span>\n				</div>\n				<div style="    display: inline-block;vertical-align: middle;    max-width: 58%;">\n				<span *ngIf=\'n.estado==1\' class=\'estadoReservas\' style="color: rgb(250,195,0);">\n				PENDIENTE CONFIRMAR\n				</span>\n				<span *ngIf=\'n.estado==2\'  class=\'estadoReservas\' style="color: #0079f4;">\n				CONFIRMADA\n				</span>\n				<span *ngIf=\'n.estado==3\'  class=\'estadoReservas\' style="color: #0079f4;">\n				COMPLETA\n				</span>\n				<span *ngIf=\'n.estado==5\'  class=\'estadoReservas\' style="color: #0079f4;">\n				REPROGRAMADA - PENDIENTE</span>\n							<span *ngIf=\'n.estado==4\' class=\'estadoReservas\' style="color: #EC527E;">\n				DECLINADA\n				</span>\n				<span *ngIf=\'n.estado==7\' class=\'estadoReservas\' style="color: #EC527E;">\n				CANCELADA\n				</span>\n				<span style="font-size: 15px;\n    color: #8a8888;">\n				{{n.nombreCentro}}\n				</span>\n				<span  class=\'estadoReservas2\' style="color: #999;">\n				{{n.servicioMain}} \n				<span *ngIf=\'n.cantServicios>1\'> y {{getNumMen(n.cantServicios)}} más </span> \n				con {{n.nombreEmpleado}}\n				</span>\n\n				<button (click)="repetirReserva($event, n.idCita)" style=\'float: left; margin: 3px 0px 0px 0px;border-color: #0079f4 !important;color: #0079f4 !important\' ion-button small outline>Repetir Reserva</button>\n				</div>\n				<ion-icon class=\'iconR\' name="arrow-forward"></ion-icon> \n				</div>\n \n		</div>\n\n\n		</div>\n		</ion-list>\n		\n		<ion-list  mode="md" *ngSwitchCase="\'three\'">\n\n\n				<div  style=\'    margin: 30px;\n			text-align: center;\n			font-size: 16px;\n			color: darkgray;\' *ngIf="(reservas | filtrofav: filterFav3).length == 0" >No hay reservas en esta seccion\n	\n			\n				</div>\n	\n				\n	\n				<div class=\'cardReserva\' *ngFor="let n of reservas.slice().reverse() | filtrofav: filterFav3" (click)=\'goDetalle(n.idCita)\'>\n	\n			<div>\n					<div style="display: inline-block;    width: 100%;">\n					<div  class="fechaItem">\n							<img style="max-height: 100%; max-width: initial;" src="{{apiProvider.api2}}/{{n.idFoto}}">\n					</div>\n					<div style="    display: inline-block;vertical-align: middle;    max-width: 58%;">\n						<span class=\'estadoReservas\' style="color: #0079f4;">\n								{{n.servicios}}\n						</span>\n						<span  class=\'estadoReservas2\' style="color: #999;">						\n						con {{n.nombreEmpleados}}\n						</span>\n						<button (click)="repetirReserva($event, n.idCita)" style=\'float: left; margin: 3px 0px 0px 0px;border-color: #0079f4 !important;color: #0079f4 !important\' ion-button small outline>Repetir Reserva</button>\n					</div>\n					<ion-icon class=\'iconR\' name="arrow-forward"></ion-icon> \n					</div>\n	 \n			</div>\n	\n	\n			</div>\n	\n	\n	\n	\n	\n	\n			</ion-list>\n\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\mis-reservas\mis-reservas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _j || Object])
    ], MisReservasPage);
    return MisReservasPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=mis-reservas.js.map

/***/ })

});
//# sourceMappingURL=41.js.map