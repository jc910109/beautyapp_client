webpackJsonp([44],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponesPageModule", function() { return CuponesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cupones__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var CuponesPageModule = (function () {
    function CuponesPageModule() {
    }
    CuponesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cupones__["a" /* CuponesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cupones__["a" /* CuponesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CuponesPageModule);
    return CuponesPageModule;
}());

//# sourceMappingURL=cupones.module.js.map

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

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuponesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CuponesPage = (function () {
    function CuponesPage(navCtrl, DomSanitizer, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.DomSanitizer = DomSanitizer;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
    }
    CuponesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.section = "one";
        console.log('ionViewDidLosad CuponesPage');
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
            _this.getCupones(_this.dataUser.idCliente);
        });
    };
    CuponesPage.prototype.getCupones = function (idCliente) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var dataE = { idCliente: idCliente };
        console.log(dataE);
        this.apiProvider.getCuponesApp(dataE)
            .then(function (data) {
            loading.dismiss();
            console.log(data);
            if (data) {
                _this.cupones = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
                _this.reintentarAlert(_this.ionViewDidLoad.bind(_this));
            }
        });
    };
    CuponesPage.prototype.reintentarAlert = function (funcionEnviar) {
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
    CuponesPage.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    CuponesPage.prototype.filtroDisponible = function (user) {
        var cc = new Date(user.fechaExpira);
        return user.estado == 1 && cc.getTime() > Date.now();
    };
    CuponesPage.prototype.usarTicket = function (id) {
        // this.navCtrl.push('PerfilCentroPage');  
        //  this.navCtrl.push('PerfilCentroPage', {'idCentro':idCentro, 'idServicioSeleccionado':this.categoriaSeleccionada});
        this.navCtrl.push('CentrocuponesPage', { 'idCupon': id });
    };
    CuponesPage.prototype.getNombreE = function (str) {
        var tam = str.split(',').length;
        if (tam == 1) {
            return str;
        }
        if (tam > 1) {
            return str.split(',')[0] + ' y ' + (tam - 1) + ' negocios mas.';
        }
    };
    CuponesPage.prototype.filtroUsado = function (user) {
        console.log(user);
        var cc = new Date(user.fechaExpira);
        return user.estado == 2 && cc.getTime() > Date.now();
    };
    CuponesPage.prototype.canjear = function (codigo) {
        console.log(codigo);
        if (codigo) {
            this.usarCodigo(codigo, this.dataUser.idCliente);
        }
        else {
            this.presentAlert('Cupón Inválido', 'Por favor verifique que haya ingresado el código correctamente');
        }
    };
    CuponesPage.prototype.usarCodigo = function (codigo, idCliente) {
        var _this = this;
        var dataE = { codigo: codigo, idCliente: idCliente };
        console.log(dataE);
        this.apiProvider.canjearCupon(dataE)
            .then(function (data) {
            console.log(data);
            if (data['insertId'] > 0) {
                _this.getCupones(idCliente);
                _this.presentAlert('Agregado', 'Cupon agregado correctamente');
                _this.codigo = '';
            }
            else {
                _this.presentAlert('Cupón Inválido', 'Por favor verifique que haya ingresado el código correctamente');
            }
        });
    };
    CuponesPage.prototype.filtroExpirado = function (user) {
        var cc = new Date(user.fechaExpira);
        return cc.getTime() < Date.now();
    };
    CuponesPage.prototype.fcompartir = function () {
        // not supported on some apps (Facebook, Instagram)
        var options = {
            message: 'YourBeauty. La nueva forma de reservar en salones de belleza y al instante',
            subject: 'Prueba ya Yourbeauty',
            url: 'https://www.yourbeauty.com.pa/',
            chooserTitle: 'Selecciona un app'
        };
        var onSuccess = function (result) {
            console.log("Share completed? ");
            console.log(result);
        };
        var onError = function (msg) {
            console.log("Sharing failed with message: " + msg);
        };
        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    };
    CuponesPage.prototype.filtroCategoria = function () {
        //console.log('ionViewDidLoad FavoritosPage');
        this.showCheckbox();
    };
    CuponesPage.prototype.showCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ cssClass: 'alertCustomCss' });
        alert.setTitle('Filtra por servicio');
        alert.addInput({
            type: 'checkbox',
            label: 'Rostro y Cuerpo',
            value: 'Rostro y Cuerpo',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Peluqueria',
            value: 'Peluqueria'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Uñas',
            value: 'Uñas'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Masaje',
            value: 'Masaje',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Depilacion',
            value: 'Depilacion'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bienestar',
            value: 'Bienestar'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Paquetes',
            value: 'Paquetes',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Ofertas',
            value: 'Ofertas'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Seleccionar',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    CuponesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cupones',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\cupones\cupones.html"*/'<!--\n  Generated template for the CuponesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Cupones</ion-title>\n\n\n\n          <ion-buttons end>\n\n       \n\n      </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n<div>\n\n\n<!-- 	<span style="    vertical-align: middle;\n    height: 100%;\n    font-size: 17px;\n    color: #333;\n    margin-left: 12px;\n    margin-top: 23px;\n    display: inline-block;">Ingresar coupon</span> -->\n  <ion-item class=\'redem\' style=\'    padding-left: 0px !important;\n    margin-left: 5px !important;\' >\n\n    <ion-input style=\'    background-color: white;\n    border: solid 2px lightgray;\n    border-radius: 30px;\n    padding: 0px 10px;\' [(ngModel)]="codigo" autocomplete=\'off\' type="text" placeholder="Ingresar cupón"></ion-input>\n  </ion-item>\n\n\n	<button ion-button   style="    padding: 14px 30px;\n    color: white;\n    background-color: #0079f4;\n    margin: 12px 0px;\n    float: right;\n    margin-right: 9px;\n    border-radius: 40px;\n    font-size: 16px;" (click)=\'canjear(codigo)\'>Usar cupón</button>\n\n</div>\n\n\n<ion-segment mode="md" [(ngModel)]="section" style=\'    border-top-style: solid;\n    border-top-width: 2px;\n    border-top-color: rgba(0, 0, 0, 0.1);\n    background: white;\' >\n\n\n    <ion-segment-button   style=\'    border-right: solid 2px rgb(0,0,0,0.1);  font-size: 15px;text-transform: none !important;\' value="one" >\n	       <span> \n	       <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/disponibleBlanco.png">\n	       <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/disponibleGris.png">\n	        Disponible</span>\n	    </ion-segment-button>\n\n\n\n	    <ion-segment-button  value="two" style=\'    border-right: solid 2px rgb(0,0,0,0.1); \n    	font-size: 15px;text-transform: none !important;\' >\n    	<span>\n	      <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/usadosBlanco.png"> \n	      <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/usadosGris.png"> \n\n	      \n\n	      Usado\n	       </span>\n	    </ion-segment-button>\n\n\n	        <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="tres" >\n	       <span> \n	       <img  *ngIf=\'section=="tres"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/expireBlanco.png">\n	       <img  *ngIf=\'!(section=="tres")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/expireGris.png">\n	        Expirado</span>\n	    </ion-segment-button>\n\n\n\n</ion-segment>\n\n\n\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n<div [ngSwitch]="section">\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n\n<div class=\'noResultado\' *ngIf="(cupones | filtrofav: filtroDisponible)?.length === 0" >No tienes cupones disponibles</div>\n\n\n		<ion-card   *ngFor="let n of cupones | filtrofav: filtroDisponible">\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{n.idFoto}}" \n				 onError="this.src=\'assets/imgs/fotocupon.png\';" \n				style="display: inline-block;\n				height: 65px;\n				width: 65px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">{{n.nombreCupon}}</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 14px;\n				color: #999;display:block">{{getNombreE(n.nombresCentro)}}</span>\n\n				<span class="itemComercio" style="    margin-top: 3px;\n    display: block;\n">\n\n\n\n	<button  (click)=\'usarTicket(n.idCupon)\' style=\'background-color: #0079f4\' ion-button small >Usar Ahora</button>	\n	<br>\n	<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#0079f4;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>Expira {{n.fechaExpira?.split(\'T\')[0]}}\n	</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n		\n\n\n\n    </ion-list>\n  \n\n    <ion-list mode="md" *ngSwitchCase="\'two\'">\n\n    	<div class=\'noResultado\' *ngIf="(cupones | filtrofav: filtroUsado)?.length === 0" >No has usado ningun cupón aun</div>\n		<ion-card  *ngFor="let n of cupones | filtrofav: filtroUsado">\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotocupon.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">{{n.nombreCupon}}</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">{{n.nombreCentro}}</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n">\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#0079f4;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>{{n.fechaUso?.split(\'T\')[0]}}</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#0079f4;\n    font-weight: 800;\' name="md-checkbox"></ion-icon>Usado</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n    </ion-list>\n\n\n    <ion-list mode="md" *ngSwitchCase="\'tres\'">\n\n\n<div class=\'noResultado\' *ngIf="(cupones | filtrofav: filtroExpirado)?.length === 0" >No tienes cupones expirados</div>\n\n		<ion-card *ngFor="let n of cupones | filtrofav: filtroExpirado">\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotocupon.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style=" text-decoration: line-through;   display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">{{n.nombreCupon}}</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">{{n.nombreCentro}}</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n">\n\n					<span style="  text-decoration: line-through; margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#EC527E;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>{{n.fechaExpira?.split(\'T\')[0]}}</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#EC527E;\n    font-weight: 800;\' name="md-close-circle"></ion-icon>Expirado</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n    </ion-list>\n</div>\n\n\n</ion-content>\n\n\n<!-- <ion-footer>\n  <div  style="text-align: center;\n    color: #999;\n    font-size: 16px;\n    margin: 17px;" (click)=\'fcompartir()\'><a>Comparte </a> Yourbeauty con tus amigos y gana premios asombrosos</div>\n</ion-footer> -->\n\n\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\cupones\cupones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], CuponesPage);
    return CuponesPage;
}());

//# sourceMappingURL=cupones.js.map

/***/ })

});
//# sourceMappingURL=44.js.map