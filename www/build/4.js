webpackJsonp([4],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasPageModule", function() { return OfertasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ofertas__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var OfertasPageModule = (function () {
    function OfertasPageModule() {
    }
    OfertasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ofertas__["a" /* OfertasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__ofertas__["a" /* OfertasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], OfertasPageModule);
    return OfertasPageModule;
}());

//# sourceMappingURL=ofertas.module.js.map

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

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfertasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
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
 * Generated class for the OfertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfertasPage = (function () {
    function OfertasPage(navCtrl, DomSanitizer, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl, zone, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.DomSanitizer = DomSanitizer;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.storage = storage;
        this.subcategorias = [];
        this.categorias = [];
        this.filterFav = function (user) {
            //console.log(user);
            if (_this.categoriaSeleccionada == 0) {
                return true;
            }
            if (_this.subcategorias.length > 0) {
                return [user.idSubcategoria].some(function (r) { return _this.subCategoriaSeleccionada.includes(parseInt(r)); });
            }
            else {
                // return false;
                return user.idCategoria == _this.categoriaSeleccionada;
                //return [user.idCategoria].includes(String(this.categoriaSeleccionada));
            }
        };
        this.latitudePerson = 0;
        this.longitudePerson = 0;
        this.categoriaSeleccionada = '';
    }
    OfertasPage.prototype.ionViewDidLoad = function () {
        //this.storage.set('coorLBY', null);
        var _this = this;
        //this.getServiciosGPS();
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
            _this.doRefresh();
            //this.getFavoritos();
        });
        console.log('ionViewDidLoad FavoritosPage');
        this.getCategorias();
    };
    /*
    
    var found = array1.find(function(element) {
      return element > 10;
    });
    
    */
    OfertasPage.prototype.doRefresh = function () {
        var _this = this;
        this.storage.get('coorLBY').then(function (value) {
            if (value && (new Date(value.expirationDate).getTime() > Date.now())) {
                _this.latitudePerson = value.lat;
                _this.longitudePerson = value.lng;
                _this.getFavoritos();
            }
            else {
                var loading_1 = _this.loadingCtrl.create({ content: "Obteniendo ubicacion", enableBackdropDismiss: false });
                loading_1.present();
                console.log('gps');
                navigator.geolocation.getCurrentPosition(function (pos) {
                    console.log(pos.coords.latitude + ' Long: ' + pos.coords.longitude);
                    _this.latitudePerson = pos.coords.latitude;
                    _this.longitudePerson = pos.coords.longitude;
                    var fechaExpiracion = new Date();
                    fechaExpiracion.setHours(fechaExpiracion.getHours() + 1);
                    console.log(fechaExpiracion);
                    _this.storage.set('coorLBY', { 'lat': pos.coords.latitude,
                        'lng': pos.coords.longitude,
                        'expirationDate': fechaExpiracion });
                    _this.getFavoritos();
                    loading_1.dismissAll();
                }, function (error) {
                    console.log('some err');
                    console.log(error);
                    _this.getFavoritos();
                    loading_1.dismissAll();
                    //this.presentAlert();
                }, { enableHighAccuracy: true, timeout: 30000 });
            }
        });
        /*
           this.latitudePerson = 9.9931605;
           this.longitudePerson = -84.2307427;
  */
    };
    OfertasPage.prototype.getSubCat = function (tt, yy) {
        var _this = this;
        //this.favoritos = this.favoritos;
        console.log(tt, yy);
        this.apiProvider.getSubcategorias({ idCategoria: tt })
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.subcategorias = data || [];
                var ddata = data.map(function (item) {
                    return item['idSubcategoria'];
                });
                _this.subCategoriaSeleccionada = ddata;
            }
        });
    };
    OfertasPage.prototype.filtrarSubCategorias = function (tt, yy) {
        console.log(tt, yy);
    };
    OfertasPage.prototype.getCategorias = function () {
        var _this = this;
        this.apiProvider.categoriasHome()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.categorias = data['categorias'] || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    OfertasPage.prototype.getServiciosGPS = function () {
        /*
           this.latitudePerson = 9.9931605;
           this.longitudePerson = -84.2307427;
       */
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Obteniendo ubicacion", enableBackdropDismiss: false });
        loading.present();
        console.log('gps');
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log(pos.coords.latitude + ' Long: ' + pos.coords.longitude);
            _this.latitudePerson = pos.coords.latitude;
            _this.longitudePerson = pos.coords.longitude;
            loading.dismissAll();
        }, function (error) {
            console.log('some err');
            console.log(error);
            loading.dismissAll();
        }, { enableHighAccuracy: true, timeout: 30000 });
    };
    OfertasPage.prototype.getFavoritos = function () {
        var _this = this;
        var dataE = { lat: this.latitudePerson,
            lon: this.longitudePerson };
        console.log(dataE);
        this.apiProvider.ofertasActivas(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.zone.run(function () {
                    _this.favoritos = data || [];
                });
            }
            else {
                _this.reintentarAlert(_this.ionViewDidLoad.bind(_this));
                console.log('Ha ocurrido un error');
            }
        });
    };
    OfertasPage.prototype.reintentarAlert = function (funcionEnviar) {
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
    OfertasPage.prototype.filtroCategoria = function () {
        //console.log('ionViewDidLoad FavoritosPage');
        this.showCheckbox();
    };
    OfertasPage.prototype.showCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ cssClass: 'alertCustomCss' });
        alert.setTitle('Filtra por categoria');
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
    OfertasPage.prototype.goCentro = function (idCentro, idServicio, idServReal) {
        // this.navCtrl.push('PerfilCentroPage');  
        //  this.navCtrl.push('PerfilCentroPage', {'idCentro':idCentro, 'idServicioSeleccionado':this.categoriaSeleccionada});
        this.navCtrl.push('PerfilCentroPage', { 'idCentro': idCentro, 'idServicioSeleccionado': idServicio, 'idServReal': idServReal });
    };
    OfertasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ofertas',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\ofertas\ofertas.html"*/'<img style="display:none;" src="assets/imgs/masaje.jpg">\n<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\nOfertas\n\n\n    </ion-title>\n\n          <ion-buttons end>\n<!--       <button (click)=\'filtroCategoria()\' ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n -->\n\n       \n\n      </ion-buttons>\n\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background: #fafafa !important;\'>\n\n  \n\n\n  <ion-grid>\n  <ion-row>\n\n    <ion-col col-6>\n      <ion-select  placeholder="Categoria" style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="categoriaSeleccionada" (ionChange)="subcategorias=[];getSubCat($event,true)" multiple="false" okText="Filtrar"  cancelText="Cerrar">\n\n <ion-option   [value]="0" \n      >Todas</ion-option>\n\n\n <ion-option  *ngFor="let n of categorias; let idx = index" [selected]=\'true\'  [value]="n.idCategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n    <ion-col col-6>\n\n      <ion-select   placeholder="Sub Categoria" [disabled]=\'subcategorias?.length<1\' style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="subCategoriaSeleccionada" (ionChange)="filtrarSubCategorias($event,true)" multiple="true" okText="Filtrar"  cancelText="Cerrar">\n\n\n\n <ion-option  *ngFor="let n of subcategorias; let idx = index" [selected]=\'true\'  [value]="n.idSubcategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n\n\n\n\n\n    <ion-list mode="md" >\n\n\n        <div class=\'noResultado\' \n        *ngIf="((favoritos)?.length == 0) || ((favoritos | filtrofav: filterFav)?.length == 0)" >No se han encontrado negocios</div> \n\n    <ion-card *ngFor="let n of favoritos | filtrofav: filterFav"  (click)=\'goCentro(n.idCentro,n.idCategoria,n.idServicio)\' class="offer-container">\n    <!-- <ion-card-content>\n        <div style="\n        display: inline-block;    width: 100%;\n        ">\n        <img src="http://50.116.17.150:3000/{{n.imagenCentro}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n        display: inline-block;\n        height: 90px;\n        width: 90px !important;\n        vertical-align: top;\n        ">\n        <div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n        ">\n        <span style="margin: 2px 0px 0px 0px;\n        font-size: 19px;\n        color: #333;">{{n.nombre}} </span><br>\n\n\n\n   <span style="     color: #888;\n    font-size: 15px;  ">\n\n    {{n.nombreCentro}}\n  </span>\n\n  \n\n        <span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n   "><span style="text-decoration: line-through;">${{n.precio}} </span><span style=" color: #EC527E;">  ${{n.precio2}}</span></span>\n\n        <span class="itemComercio" >\n\n          <span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon [ngClass]="{\'colorGris\': n.cantRate==0}"  style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>{{n.rate  | number:\'1.1-2\'}} ({{n.cantRate\n}})</span>\n\n          <span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#0079f4;\' name="ios-pin"></ion-icon>{{n.distance | number:\'1.1-2\'}} Km</span>\n\n        </span>\n\n        </div>\n        </div>\n\n    </ion-card-content> -->\n    <ion-card-content>\n      <span class="percent">{{(100 - n.precio2*100/n.precio).toFixed(0)}}%</span>\n      <span class="prev_price">${{n.precio}}</span>\n      <span class="new_price">${{n.precio2}}</span>\n      <img src="{{n.idFoto?(apiProvider.api2+\'/\'+n.idFoto):\'assets/imgs/masaje.jpg\'}}">\n      <!-- <span *ngIf="n.nueva == 1" class="new">Nueva</span> -->\n      <span class="title">{{n.nombre}}</span>\n      <span class="store">{{n.nombreCentro}} a {{n.distance.toFixed(1)}}Km</span>\n      \n    </ion-card-content>\n    </ion-card>\n    </ion-list>\n\n  <div *ngIf=\'categorias?.length==0\' style="text-align: center;padding-top: 25%;">\n        <ion-spinner name="bubbles"></ion-spinner>\n      </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\ofertas\ofertas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], OfertasPage);
    return OfertasPage;
}());

//# sourceMappingURL=ofertas.js.map

/***/ })

});
//# sourceMappingURL=4.js.map