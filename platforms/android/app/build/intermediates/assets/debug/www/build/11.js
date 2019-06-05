webpackJsonp([11],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_selectalertless__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InicioPageModule = (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */], __WEBPACK_IMPORTED_MODULE_3__select_selectalertless__["a" /* SelectAlertless */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__select_selectalertless__["a" /* SelectAlertless */]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(53);
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
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(menuCtrl, navCtrl, navParams, apiProvider, sanitizer, alertCtrl, loadingController, events, modalCtrl, zone, cdr, storage) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.cdr = cdr;
        this.storage = storage;
        this.inicioSesion = false;
        this.optionSubcategorias = [];
        this.optionSubcategorias3 = [];
        this.subcategoriasT = {};
        this.favoritos = [];
        this.paquetes = [];
        this.goAnimacion2 = function (puntosV, totalV, puntosActual, idcc) {
            console.log(puntosV, totalV, puntosActual);
            var puntos = puntosV;
            var totall = totalV;
            var expUserM = puntosActual;
            var exp2Cont = 0;
            var valorInc = (puntosActual * 100) / 1500;
            var tiempo = 3000 / (puntos / 1);
            console.log(tiempo);
            var mensaje = "<div class=\"meter\">\n      <span class='porcenCrec' style=\"width:" + valorInc + "% ;\"><span class=\"progress2\"></span></span>\n      </div>\n\n<div class=\" itemCa\">\n \n</div>\n\n<div class=\"floating itemFlo\">\n  + " + puntos + " exp\n</div>\n\n      <div class=\"leyendaAlert\">\n\n      <img  style='display: flex;' src=\"assets/imgs/complete.png\">\n\n      <span style='display: flex;'>\n      Tu cita fue completada con \u00E9xito, has ganado " + puntos + " de experiencia\n      </span>\n\n      </div>";
            var alert = _this.alertCtrl.create({
                subTitle: _this.sanitizer.bypassSecurityTrustHtml(mensaje)
            });
            var audio = new Audio('/assets/sounds/earn_points.mp3');
            audio.play();
            alert.present();
            var interval = setInterval(function () {
                puntos -= 1;
                //expUserM+=1;
                expUserM = (expUserM + 1) % 1500;
                exp2Cont++;
                //this.zone.run(()=>{   valorInc = parseInt(((puntosActual+exp2Cont)%1500)*100/1500) });
                valorInc = parseInt((((puntosActual + exp2Cont) % 1500) * 100 / 1500).toString());
                //console.log(valorInc.toString());
                _this.setLoadingText(expUserM.toString(), totall.toString(), valorInc.toString());
                if (puntos <= 0) {
                    clearInterval(interval);
                    if (idcc > 0) {
                        alert.dismiss();
                        var profileModal = _this.modalCtrl.create('CongratsPage', { 'idCuponCliente': idcc }, {
                            enterAnimation: 'modal-scale-up-enter',
                            leaveAnimation: 'modal-scale-up-leave'
                        });
                        profileModal.present();
                    }
                }
            }, tiempo);
        };
        this.setLoadingText = function (text, total, inc) {
            var elem = document.querySelector("div.itemCa");
            if (elem)
                elem.innerHTML = text + ' / ' + (total);
            var elem2 = document.querySelector("span.porcenCrec");
            if (elem2)
                elem2['style'].width = inc + '%';
            /*
              var el = document.querySelector('div');
            
            el.style.backgroundColor = 'green';
            */
        };
        /*
        goFF(){
          
        
           let profileModal = this.modalCtrl.create('LogindPage',{'total':120});
           profileModal.present();
        
        
        }
        */
        this.goAnimacion = function () {
            var profileModal = _this.modalCtrl.create('CongratsPage', { 'idCuponCliente': 56 }, {
                enterAnimation: 'modal-scale-up-enter',
                leaveAnimation: 'modal-scale-up-leave'
            });
            profileModal.present();
        };
        this.printOption = function (ee) {
            if (!ee)
                return;
            var eeArra = [];
            eeArra.push(parseInt(ee));
            console.log(_this.nombreCat2);
            console.log(ee);
            if (ee.length < 1) {
                return true;
            }
            else {
                var fs = { 'nombre': _this.seleccionCategoria, 'sub': eeArra, 'nombreCat2': _this.nombreCat2 };
                console.log(fs);
                _this.navCtrl.push('ListaServiciosPage', fs);
            }
        };
        this.printOption2 = function (ee) {
            console.log(ee);
            var subCatParam = _this.subcategoriasT[ee].map(function (item) { return item.idSubcategoria; });
            console.log(subCatParam);
            _this.navCtrl.push('MapaPage', { 'idCategoria': ee, 'idSubcategoriaS': subCatParam });
            /*
              console.log(ee);
              if(ee.length<1){
              return true;
              }
              else{
                var fs = {'nombre':this.seleccionCategoria,'sub':ee,'nombreCat2':this.nombreCat2};
              console.log(fs);
              this.navCtrl.push('ListaServiciosPage', fs);
              }
            */
        };
        this.categorias = [];
        this.expUser = 254;
        this.latitudePerson = 0;
        this.longitudePerson = 0;
        //this.getFavoritos();
        //this.getPaquetes();
        events.subscribe('loginOK', function () {
            setTimeout(function () {
                _this.zone.run(function () {
                    // user and time are the same arguments passed in `events.publish(user, time)`
                    _this.apiProvider.verificarLogin()
                        .then(function (data) {
                        console.log(data);
                        if (data) {
                            _this.inicioSesion = false;
                            _this.userDataProfile = data;
                        }
                        else {
                            _this.inicioSesion = true;
                        }
                    });
                });
            }, 500);
        });
        this.selectOptions = {
            title: 'Selecciona una Subcategoria',
            cssClass: 'select-alertless'
        };
        this.selectOptions2 = {
            title: 'Selecciona una Categoria',
            cssClass: 'select-alertless'
        };
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InicioPage');
        this.apiProvider.getNotificacionActiva()
            .then(function (data) {
            if (data['length'] > 0)
                _this.notificacionActiva = data[0];
        });
        this.apiProvider.categoriasHome()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.categorias = data['categorias'] || [];
                /* this.categorias.push({
                appIcono: "",
        estado: 1,
        fechaCreacion: "2018-04-23T08:30:46.000Z",
        idCategoria: 0,
        idFoto: "uploads/imageU-1540846491613.png",
        idImagenIcono: "Ofertas.png",
        nombre: "Ofertas"});
        
                this.categorias.push({
                appIcono: "",
        estado: 1,
        fechaCreacion: "2018-04-23T08:30:46.000Z",
        idCategoria: 0,
        idFoto: "uploads/imageU-1540846550671.jpg",
        idImagenIcono: "Paquetes.png",
        nombre: "Paquetes"}); */
                _this.subcategoriasT = data['subcategorias'] || {};
            }
            else {
                console.log('Ha ocurrido un error');
                _this.reintentarAlert(_this.ionViewDidLoad.bind(_this));
            }
        });
        this.apiProvider.verificarLogin()
            .then(function (data) {
            if (data) {
                _this.apiProvider.getCitaPendientesN({ idCliente: data['idCliente'] })
                    .then(function (dataCall) {
                    console.log(dataCall);
                    if (dataCall && dataCall['citas'] && dataCall['citas'].length > 0) {
                        _this.navCtrl.push('DetalleReservaPage', { idCita: dataCall['citas'][0].idCita });
                    }
                    if (dataCall && dataCall['animaciones'] && dataCall['animaciones'].length > 0) {
                        //if(dataCall.animaciones[0].idCC>0){
                        if (false) {
                            /* this.apiProvider.quitarAnimacion({idCliente:data['idCliente']})
                              .then(dataCalls => {
              
                              if(dataCalls['data'][0] && (dataCalls['data'][0].idCliente  > 0)){
                              this.events.publish('userCreated', dataCalls['data'][0]);
                              };
              
                              let profileModal = this.modalCtrl.create('CongratsPage',{'idCuponCliente':dataCall['animaciones'][0].idCC},{
                              enterAnimation: 'modal-scale-up-enter',
                              leaveAnimation: 'modal-scale-up-leave'
                              });
                              profileModal.present();
              
                              }); */
                        }
                        else {
                            _this.apiProvider.quitarAnimacion({ idCliente: data['idCliente'] })
                                .then(function (dataCalls) {
                                if (dataCalls['data'][0] && (dataCalls['data'][0].idCliente > 0)) {
                                    _this.events.publish('userCreated', dataCalls['data'][0]);
                                }
                                ;
                                _this.goAnimacion2(dataCall['animaciones'][0].ga, dataCall['animaciones'][0].ge, dataCall['animaciones'][0].gi, dataCall['animaciones'][0].idCC);
                            });
                        }
                        _this.navCtrl.push('OpinionesPage');
                    }
                });
            }
            else {
                console.log('no pendientes');
            }
            _this.doRefresh();
        });
    };
    InicioPage.prototype.getFavoritos = function () {
        var _this = this;
        var dataE = { lat: this.latitudePerson,
            lon: this.longitudePerson };
        console.log(dataE);
        this.apiProvider.ofertasActivasInicio(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.zone.run(function () {
                    _this.favoritos = data || [];
                });
            }
        });
    };
    InicioPage.prototype.getPaquetes = function () {
        var _this = this;
        var dataE = { lat: this.latitudePerson,
            lon: this.longitudePerson };
        console.log(dataE);
        this.apiProvider.paquetesActivosInicio(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.zone.run(function () {
                    _this.paquetes = data || [];
                });
            }
        });
    };
    InicioPage.prototype.verTodasOfertas = function () {
        this.navCtrl.push('OfertasPage');
    };
    InicioPage.prototype.verTodosPaquetes = function () {
        this.navCtrl.push('PaquetesPage');
    };
    InicioPage.prototype.goCentro = function (idCentro, idServicio, idServReal) {
        // this.navCtrl.push('PerfilCentroPage');  
        //  this.navCtrl.push('PerfilCentroPage', {'idCentro':idCentro, 'idServicioSeleccionado':this.categoriaSeleccionada});
        this.navCtrl.push('PerfilCentroPage', { 'idCentro': idCentro, 'idServicioSeleccionado': idServicio, 'idServReal': idServReal });
    };
    InicioPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.slides.autoplayDisableOnInteraction = false;
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.inicioSesion = false;
            }
            else {
                _this.inicioSesion = true;
            }
        });
    };
    InicioPage.prototype.reintentarAlert = function (funcionEnviar) {
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
    /*
    <div class=" itemCa">
     
    
    </div>
    
    */
    /*
    goAnimacion2 = () => {
        var puntos = 120;
        var totall=1500;
        var tiempo = 4000/(puntos/3);
        console.log(tiempo);
        var expUserM = 140;
    
    
          this.presentAlert2(`
          <div class="meter">
          <span style="width:`+(((puntos+expUserM)*100)/totall)+`%;"><span class="progress"></span></span>
          </div>
    
    <div class=" itemCa">
     
    </div>
    
    <div class="floating itemFlo">
      + `+puntos+` exp
    </div>
    
          <div class="leyendaAlert">
    
          <img  style='display: flex;' src="assets/imgs/complete.png">
    
          <span style='display: flex;'>
          Tu cita fue completada con éxito, has ganado `+puntos+` de experiencia
          </span>
    
          </div>`);
    
    
        let interval = setInterval(()=>{
    
      puntos-=3;
      expUserM+=3;
    
      this.setLoadingText(expUserM,totall);
    
      if(puntos == 0) clearInterval(interval);
    },tiempo)
    
    
    
    }
    
    */
    InicioPage.prototype.presentAlert2 = function (mensaje) {
        var alert = this.alertCtrl.create({
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje)
        });
        alert.present();
    };
    InicioPage.prototype.goServicio = function (nombreServicio, nombreCat) {
        if (nombreServicio == 0) {
            console.log('nada');
            if (nombreCat == 'Paquetes') {
                this.navCtrl.push('PaquetesPage');
            }
            if (nombreCat == 'Ofertas') {
                this.navCtrl.push('OfertasPage');
            }
        }
        else {
            console.log(nombreServicio);
            this.nombreCat2 = nombreCat;
            this.seleccionCategoria = nombreServicio;
            this.optionSubcategorias = this.subcategoriasT[nombreServicio];
            this.option2 = null;
            this.cdr.detectChanges();
            this.select5.open();
        }
    };
    InicioPage.prototype.goServicio3 = function (ee) {
        var _this = this;
        var nombreD = this.categorias.filter(function (word) { return word.idCategoria == parseInt(_this.seleccionCategoria3); })[0].nombre;
        var nombreSD = this.optionSubcategorias3.filter(function (word) { return word.idSubcategoria == parseInt(ee); })[0].nombre;
        var sdd = { 'idCategoria': this.seleccionCategoria3, 'idSubcategoriaS': [ee], 'nombreCat': nombreD,
            'nombreSub': nombreSD };
        console.log(this.categorias);
        console.log(sdd);
        this.navCtrl.push('MapaPage', sdd);
    };
    InicioPage.prototype.borrarNGM = function () {
        this.option3 = null;
        this.cdr.detectChanges();
    };
    InicioPage.prototype.goServicio2 = function (idCategoriasS) {
        // this.nombreCat3=nombreCat;
        this.seleccionCategoria3 = idCategoriasS;
        // this.zone.run(()=>{  
        this.optionSubcategorias3 = this.subcategoriasT[idCategoriasS];
        //this.borrarNGM();  
        this.option3 = null;
        this.cdr.detectChanges();
        console.log(this.subcategoriasT);
        console.log(this.optionSubcategorias3);
        console.log(this.option3);
        this.select77.open();
        //}); 
        //this.cdr.detectChanges();
        // 
    };
    InicioPage.prototype.goServicioMapa = function () {
        this.select66.open();
    };
    InicioPage.prototype.goMapa = function () {
        //console.log(nombreServicio);
        //this.navCtrl.setRoot('MapaPage');
        this.navCtrl.push('MapaPage');
    };
    InicioPage.prototype.openMenu = function () {
        var profileModal = this.modalCtrl.create('LoginPage');
        profileModal.present();
    };
    InicioPage.prototype.setDefaultPic = function (nombre) {
        console.log(nombre);
        return "assets/imgs/" + nombre;
    };
    InicioPage.prototype.showContactForm = function () {
        var contactModal = this.modalCtrl.create('ContactPage', {}, {
            enterAnimation: 'modal-scale-up-enter',
            leaveAnimation: 'modal-scale-up-leave'
        });
        contactModal.present();
    };
    InicioPage.prototype.calculatePrecio = function (n) {
        var precio = 0;
        n.forEach(function (i) {
            precio += parseFloat(i.precioServicio.toString());
        });
        return precio;
    };
    InicioPage.prototype.mostrarServicios = function (n) {
        return n.map(function (i) { return i.nombreServicio; }).join(', ');
    };
    InicioPage.prototype.goPaquete = function (idCentro, serv) {
        var _this = this;
        console.log(serv);
        this.apiProvider.addProductoPaquete(serv)
            .then(function (data) {
            var dataE = { 'servicios': [], 'idCentro': idCentro, 'paquete': true, 'cupon': null,
                'costoPaquete': serv[0].precioPaquete, 'idPaquete': serv[0].idPaqueteCentro };
            console.log(dataE);
            _this.navCtrl.push('ReservaPage', dataE);
        });
    };
    InicioPage.prototype.doRefresh = function () {
        var _this = this;
        this.storage.get('coorLBY').then(function (value) {
            if (value && (new Date(value.expirationDate).getTime() > Date.now())) {
                _this.latitudePerson = value.lat;
                _this.longitudePerson = value.lng;
                _this.getFavoritos();
                _this.getPaquetes();
            }
            else {
                var loading_1 = _this.loadingController.create({ content: "Obteniendo ubicacion", enableBackdropDismiss: false });
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
                    _this.getPaquetes();
                    loading_1.dismissAll();
                }, function (error) {
                    console.log('some err');
                    console.log(error);
                    _this.getFavoritos();
                    _this.getPaquetes();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], InicioPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select5'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"])
    ], InicioPage.prototype, "select5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select66'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"])
    ], InicioPage.prototype, "select66", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select77'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"])
    ], InicioPage.prototype, "select77", void 0);
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\inicio\inicio.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n\n    <ion-title >\n<img src="assets/imgs/logoMenu.png" style="vertical-align: middle !important;">\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button  (click)=\'showContactForm()\'   ion-button icon-only>\n        <ion-icon name="chatboxes" style=\'font-color:white;color:white\'></ion-icon>\n      </button>\n\n      <button  (click)=\'goServicioMapa()\'   ion-button icon-only>\n          <ion-icon name="ios-pin" style=\'font-color:white;color:white\'></ion-icon>\n        </button>\n\n\n<!--       <button  ion-button icon-only>\n        <ion-icon name="pin"></ion-icon>\n      </button> -->\n\n\n    <!--      (click)=\'goMapa()\'   <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button> -->\n\n\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n<ion-content >\n    <div *ngIf="notificacionActiva" style="width:100%;padding: 5px;background-color: #f3e260;">\n        <span style="\n        font-size: 13px;\n        font-weight: bold;\n    ">{{notificacionActiva.titulo}}</span>\n        <br>\n        <span style="\n        font-size: 10px;\n    ">{{notificacionActiva.descripcion}}</span>\n    </div>\n\n  <div *ngIf=\'true\'>\n<!-- \n    <div style="width: 100%;" >\n    <img src="assets/imgs/imagenLogo.png" style="height: 100%; width:100%;margin-top:-75px;">\n    </div>\n -->\n  <div style="width: 100%;" >\n<ion-slides  class="slide-css"  autoplay="5000" loop="true" speed="700" \n                 pager="true" autoplayDisableOnInteraction = "false">\n\n  <ion-slide class=\'sliderImg\' >\n    <img src="{{apiProvider.api2}}/uploads/1banner">\n  </ion-slide> \n\n   <ion-slide class=\'sliderImg\'>\n    <img src="{{apiProvider.api2}}/uploads/2banner">\n  </ion-slide>  \n\n  <ion-slide class=\'sliderImg\'>\n    <img src="{{apiProvider.api2}}/uploads/3banner">\n  </ion-slide>\n\n\n    </ion-slides>\n\n</div>\n\n    <div>\n      <!-- <div class="tituloSeccion">\n      Selecciona una Categoría\n      </div> -->\n\n<ion-grid style=\'margin-bottom: 10px\' >\n\n \n      <div *ngIf=\'categorias.length<1\' style="text-align: center;padding-top: 25%;">\n        <ion-spinner name="bubbles" style=\'color:darkgray\'></ion-spinner>\n      </div>\n\n\n\n  <div *ngFor="let n of categorias; let i = index">\n  <ion-row *ngIf=" i % 4 === 0" style=\'text-align: center;    max-width: 500px;\n    margin: 15px auto;\' > \n    <ion-col  *ngFor="let item of categorias.slice(i,i+4)" col-3 (click)=\'goServicio(item.idCategoria,item.nombre)\'>\n\n\n\n      <img  class=\'imagenCategoria\'  src="http://50.116.17.150:3000/{{item.idFoto}}" \n          onError="this.src=\'assets/imgs/ofertasVerde.png\';"  (load)="loaded = true"> \n          <span style="    display: block; font-size: 12px;">{{item.nombre}}</span>\n    </ion-col>\n\n  </ion-row>\n</div>\n</ion-grid>\n\n<select-alertless   #select5  style=\'display:none\' [selectOptions]="selectOptions" (ionChange)=\'printOption($event)\' [(ngModel)]="option2">\n\n      <ion-option *ngFor="let d of optionSubcategorias"  value=\'{{d.idSubcategoria}}\' >{{d.nombre}}</ion-option>\n\n</select-alertless>\n\n\n\n<!-- \n<select-alertless   #select66  style=\'display:none\' [selectOptions]="selectOptions2" (ngModelChange)=\'goServicio2($event)\' [ngModel]="option3"> -->\n\n  <select-alertless   #select66  style=\'display:none\' [selectOptions]="selectOptions2" (ngModelChange)=\'goServicio2($event)\' [ngModel]="option3">\n  \n\n      <ion-option *ngFor="let d of categorias"  value=\'{{d.idCategoria}}\' >{{d.nombre}}</ion-option>\n\n</select-alertless>\n\n\n\n<select-alertless   #select77  style=\'display:none\' [selectOptions]="selectOptions" (ionChange)=\'goServicio3($event)\' >\n\n      <ion-option *ngFor="let d of optionSubcategorias3"  value=\'{{d.idSubcategoria}}\' >{{d.nombre}}</ion-option>\n\n</select-alertless>\n\n\n\n\n<!-- nuevo\n\n    <ion-select     #select5  style=\'display:none\' [selectOptions]="selectOptions" \n     >\n      <ion-option  value="f" selected="true">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n\nnuevo -->\n    </div>\n    <div *ngIf="favoritos.length > 0"> \n      <div>\n        <span style=" \n        font-size: 15px;\n        font-weight: bold;\n        float: left;\n        margin-left:10px;\n        ">OFERTAS ACTIVAS</span>\n        <button (click)=\'verTodasOfertas()\' ion-button size="small" style="background-color: #0079f4;width: 70px; border-radius: 35px; height: 20px; font-size: 12px; float: right;margin-top: 0px;">Ver Todas</button>\n      </div>\n      <div class="ofertas" style="width: 100%;" >\n        <ion-slides  class="slide-css" speed="700" \n                         pager="true" autoplayDisableOnInteraction = "false" >\n        \n          <ion-slide *ngFor="let n of favoritos" class=\'sliderImg\' (click)="goCentro(n.idCentro,n.idCategoria,n.idServicio)">\n           <ion-card class="offer-container">\n          \n          <ion-card-content>\n            <span class="percent">{{(100 - n.precio2*100/n.precio).toFixed(0)}}%</span>\n            <span class="prev_price">${{n.precio}}</span>\n            <span class="new_price">${{n.precio2}}</span>\n            <img src="{{n.idFoto?(apiProvider.api2+\'/\'+n.idFoto):\'assets/imgs/masaje.jpg\'}}" style="height: -webkit-fill-available; margin-left: auto; margin-right: auto;"> \n            <!-- <span *ngIf="n.nueva == 1" class="new">Nueva</span> -->\n            <span class="title">{{n.nombre}}</span>\n            <span class="store">{{n.nombreCentro}} a {{n.distance.toFixed(1)}}Km</span>\n            \n          </ion-card-content>\n          </ion-card>\n          </ion-slide> \n        \n        \n            </ion-slides>\n        \n        </div>\n    </div>\n\n    <div style="margin-top:30px;" *ngIf="paquetes.length > 0"> \n        <div>\n          <span style=" \n          font-size: 15px;\n          font-weight: bold;\n          float: left;\n          margin-left:10px;\n          ">PAQUETES ACTIVOS</span>\n          <button (click)=\'verTodosPaquetes()\' ion-button size="small" style="background-color: #0079f4;width: 70px; border-radius: 35px; height: 20px; font-size: 12px; float: right;margin-top: 0px;">Ver Todos</button>\n        </div>\n        <div class="paquetes" style="width: 100%;" >\n          <ion-slides  class="slide-css" speed="700" \n                           pager="true" autoplayDisableOnInteraction = "false" >\n          \n            <ion-slide *ngFor="let n of paquetes" class=\'sliderImg\' (click)="goPaquete(n[0].idCentro,n)">\n             <ion-card class="offer-container">\n            \n            <ion-card-content>\n                <span class="percent">{{(100 - n[0].precioPaquete*100/calculatePrecio(n)).toFixed(0)}}%</span>\n                <span class="prev_price">${{calculatePrecio(n)}}</span>\n                <span class="new_price">${{n[0].precioPaquete}}</span>\n                <img src="{{n[0].imagenPaquete?(apiProvider.api2+\'/\'+n[0].imagenPaquete):\'assets/imgs/masaje.jpg\'}}" style="height: -webkit-fill-available; margin-left: auto; margin-right: auto;">\n                <!-- <span *ngIf="n[0].nueva == 1" class="new">Nueva</span> -->\n                <span class="title">{{n[0].nombrePaquete}}</span>\n                <span class="store">{{n[0].nombreCentro}} a {{n[0].distance.toFixed(1)}}Km</span> \n                <span class="services">Incluye: {{mostrarServicios(n)}}</span>\n              \n            </ion-card-content>\n            </ion-card>\n            </ion-slide> \n          \n          \n              </ion-slides>\n          \n          </div>\n      </div>\n    \n\n  </div>\n</ion-content>\n\n\n\n<ion-footer>\n <div style="text-align: center;margin-bottom: 15px !important;">\n   \n   \n    <button *ngIf=\'inicioSesion\' (click)=\'openMenu()\' ion-button style="background-color: #0079f4;width: 80%; max-width: 500px;    border-radius: 35px;">Crear Cuenta</button>\n\n  </div>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SELECT_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAlertless; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_base_input__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_config_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_form__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_item_item__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var SELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectAlertless; }),
    multi: true
};
var SelectAlertless = (function (_super) {
    __extends(SelectAlertless, _super);
    function SelectAlertless(_app, form, config, elementRef, renderer, item, deepLinker, events) {
        var _this = _super.call(this, config, elementRef, renderer, 'select', [], form, item, null) || this;
        _this._app = _app;
        _this.config = config;
        _this.deepLinker = deepLinker;
        _this._disabled = false;
        _this._multi = false;
        _this._values = [];
        _this._texts = [];
        _this._text = '';
        _this._isOpen = false;
        _this._compareWith = __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["isCheckedProperty"];
        _this.cancelText = 'Cancel';
        _this.okText = 'OK';
        _this.selectOptions = {};
        _this.interface = '';
        _this.selectedText = '';
        _this.ionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.ionCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.close = function () { return (_this.overlay ? _this.overlay.dismiss() : ''); };
        events.unsubscribe('select:close', _this.close);
        events.subscribe('select:close', _this.close);
        return _this;
    }
    SelectAlertless_1 = SelectAlertless;
    Object.defineProperty(SelectAlertless.prototype, "compareWith", {
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    SelectAlertless.prototype._click = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.open(ev);
    };
    SelectAlertless.prototype._keyup = function () {
        this.open();
    };
    /**
     * @hidden
     */
    SelectAlertless.prototype.getValues = function () {
        var values = Array.isArray(this._value) ? this._value : [this._value];
        Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["assert"])(this._multi || values.length <= 1, 'single only can have one value');
        return values;
    };
    Object.defineProperty(SelectAlertless.prototype, "_options", {
        get: function () {
            return this.__options;
        },
        set: function (val) {
            var _this = this;
            this.__options = val;
            if (!this._multi) {
                this.__options.forEach(function (option) {
                    if (option.ionSelect.observers.some(function (d) { return d.closed === false; }))
                        return;
                    option.ionSelect.subscribe(function (selectedValues) {
                        _this.value = selectedValues;
                        _this._isOpen = false;
                        _this.overlay.dismiss();
                    });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectAlertless.prototype.open = function (ev) {
        var _this = this;
        if (this.isFocus() || this._disabled) {
            return;
        }
        // the user may have assigned some options specifically for the alert
        var selectOptions = Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["deepCopy"])(this.selectOptions);
        // make sure their buttons array is removed from the options
        // and we create a new array for the alert's two buttons
        selectOptions.buttons = [{
                text: this.cancelText,
                role: 'cancel',
                handler: function () {
                    _this.ionCancel.emit(null);
                },
            }];
        // if the selectOptions didn't provide a title then use the label's text
        if (!selectOptions.title) {
            selectOptions.title = this.placeholder;
        }
        var options = this._options.toArray();
        // default to use the alert interface
        this.interface = 'alert';
        // user cannot provide inputs from selectOptions
        // alert inputs must be created by ionic from ion-options
        selectOptions.inputs = this._options.map(function (input) {
            return {
                type: (_this._multi ? 'checkbox' : 'radio'),
                label: input.text,
                value: input.value,
                title: _this.placeholder,
                checked: input.selected,
                disabled: input.disabled,
                handler: function (selectedOption) {
                    // Only emit the select event if it is being checked
                    // For multi selects this won't emit when unchecking
                    if (selectedOption.checked) {
                        input.ionSelect.emit(input.value);
                    }
                },
            };
        });
        var selectCssClass = 'select-alert';
        // create the alert instance from our built up selectOptions
        this.overlay = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Alert"](this._app, selectOptions, this._config);
        if (this._multi) {
            // use checkboxes
            selectCssClass += ' multiple-select-alert';
        }
        else {
            // use radio buttons
            selectCssClass += ' single-select-alert select-alertless';
        }
        // If the user passed a cssClass for the select, add it
        selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
        this.overlay.setCssClass(selectCssClass);
        this.overlay.addButton({
            text: this.okText,
            handler: function (selectedValues) { return _this.value = selectedValues; }
        });
        this.overlay.present(selectOptions);
        this._isOpen = true;
        this.overlay.onDidDismiss(function () {
            _this._isOpen = false;
        });
    };
    Object.defineProperty(SelectAlertless.prototype, "multiple", {
        get: function () {
            return this._multi;
        },
        set: function (val) {
            this._multi = Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["isTrueProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectAlertless.prototype, "text", {
        get: function () {
            return (this._multi ? this._texts : this._texts.join());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectAlertless.prototype, "options", {
        /**
         * @private
         */
        set: function (val) {
            this._options = val;
            var values = this.getValues();
            if (values.length === 0) {
                // there are no values set at this point
                // so check to see who should be selected
                // we use writeValue() because we don't want to update ngModel
                this.writeValue(val.filter(function (o) { return o.selected; }).map(function (o) { return o.value; }));
            }
            else {
                this._inputUpdated();
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectAlertless.prototype._inputShouldChange = function (val) {
        return !Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["deepEqual"])(this._value, val);
    };
    /**
     * TODO: REMOVE THIS
     * @hidden
     */
    SelectAlertless.prototype._inputChangeEvent = function () {
        return this.value;
    };
    /**
     * @hidden
     */
    SelectAlertless.prototype._inputUpdated = function () {
        var _this = this;
        this._texts.length = 0;
        if (this._options) {
            this._options.forEach(function (option) {
                // check this option if the option's value is in the values array
                option.selected = _this.getValues().some(function (selectValue) {
                    return _this._compareWith(selectValue, option.value);
                });
                if (option.selected) {
                    _this._texts.push(option.text);
                }
            });
        }
        this._text = this._texts.join(', ');
        _super.prototype._inputUpdated.call(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "cancelText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "okText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectAlertless.prototype, "selectOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "interface", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "selectedText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], SelectAlertless.prototype, "compareWith", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectAlertless.prototype, "ionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectAlertless.prototype, "ionCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], SelectAlertless.prototype, "_click", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup.space'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SelectAlertless.prototype, "_keyup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SelectAlertless.prototype, "multiple", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Option"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]])
    ], SelectAlertless.prototype, "options", null);
    SelectAlertless = SelectAlertless_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'select-alertless',
            template: '<div *ngIf="!_text" class="select-placeholder select-text">{{placeholder}}</div>' +
                '<div *ngIf="_text" class="select-text">{{selectedText || _text}}</div>' +
                '<div class="select-icon"><div class="select-icon-inner"></div></div>' +
                '<button aria-haspopup="true" ' +
                '[id]="id" ' +
                'ion-button="item-cover" ' +
                '[attr.aria-labelledby]="_labelId" ' +
                '[attr.aria-disabled]="_disabled" ' +
                'class="item-cover">' +
                '</button>',
            host: {
                '[class.select-disabled]': '_disabled'
            },
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: SelectAlertless_1, multi: true }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_util_form__["a" /* Form */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_config_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_item_item__["a" /* Item */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["DeepLinker"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], SelectAlertless);
    return SelectAlertless;
    var SelectAlertless_1;
}(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_base_input__["a" /* BaseInput */]));

//# sourceMappingURL=selectalertless.js.map

/***/ })

});
//# sourceMappingURL=11.js.map