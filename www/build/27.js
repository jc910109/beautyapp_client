webpackJsonp([27],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPageModule", function() { return CuentaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuenta__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CuentaPageModule = (function () {
    function CuentaPageModule() {
    }
    CuentaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cuenta__["a" /* CuentaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cuenta__["a" /* CuentaPage */]),
            ],
        })
    ], CuentaPageModule);
    return CuentaPageModule;
}());

//# sourceMappingURL=cuenta.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CuentaPage = (function () {
    function CuentaPage(cdr, DomSanitizer, navCtrl, navParams, modalCtrl, alertCtrl, loadingCtrl, events, zone, apiProvider, storage) {
        var _this = this;
        this.cdr = cdr;
        this.DomSanitizer = DomSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.zone = zone;
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.porcenBarra = '';
        this.getImages = function () {
            var options = {
                quality: 100,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
            };
            navigator.camera.getPicture(function (imageData) {
                console.log(imageData);
                _this.zone.run(function () { _this.imageFileName = imageData; });
            }, function (err) {
                console.log(err);
            }, options);
        };
        this.uploadFile = function (datak) {
            var loader = _this.loadingCtrl.create({
                content: "Guardando..."
            });
            loader.present();
            //const fileTransfer: FileTransferObject = this.transfer.create();
            /*
              let options = new FileUploadOptions();' = {
                fileKey: 'ionicfile',
                fileName: 'ionicfile',
                chunkedMode: false,
                mimeType: "image/jpeg",
                headers: {}
              };
            */
            var options = new window.FileUploadOptions();
            options.fileKey = "ionicfile";
            options.fileName = 'ionicfile2';
            options.mimeType = "image/jpeg";
            options.chunkedMode = false;
            options.headers = {};
            options.params = datak;
            var ft = new window.FileTransfer();
            ft.upload(_this.imageFileName, 'http://50.116.17.150:3000/editarCF', function (datag) {
                console.log(datag);
                //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
                //this.presentToast("Image uploaded successfully");
                var data = JSON.parse(datag.response);
                console.log(data);
                if (data.data && data.data.affectedRows > 0) {
                    //this.storage.set(`usr_tok_by`, this.dataUser);
                    _this.storage.get('usr_tok_by').then(function (value) {
                        // console.log(value);
                        var da = value;
                        da.genero = _this.dataUser.genero;
                        da.telefono = _this.dataUser.telefono;
                        da.nombre = _this.dataUser.nombre;
                        da.idFoto = data.idFoto;
                        console.log(da);
                        _this.storage.set("usr_tok_by", da);
                    }); //.catch(() => resolve(false));
                    loader.dismiss();
                    _this.agregadoOk();
                    //console.log('borrada');
                    _this.editarData = true;
                }
                else {
                    loader.dismiss();
                    _this.errorSu();
                    console.log('Ha ocurrido un error');
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                // this.presentToast(err);
            }, options);
        };
        this.editarData = true;
        this.dataUserInput = {};
        this.dataUser = {};
    }
    CuentaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CuentaPage');
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                /*
                this.dataUserInput = JSON.parse(JSON.stringify(data));
                this.dataUser = data;
                this.porcenBarra = (((this.dataUser.exp  % 1500)/(this.dataUser.appexp))*100) + '%';
                */
                var loading_1 = _this.loadingCtrl.create({ content: "Cargando" });
                loading_1.present();
                _this.apiProvider.getUserInfo({ idCliente: data['idCliente'] })
                    .then(function (datas) {
                    console.log(datas);
                    if (datas && datas[0].idCliente == data['idCliente']) {
                        _this.dataUserInput = JSON.parse(JSON.stringify(datas[0]));
                        _this.dataUser = datas[0];
                        _this.porcenBarra = (((_this.dataUser.exp % 1500) / (_this.dataUser.appexp)) * 100) + '%';
                    }
                    else {
                        console.log('Ha ocurrido un error');
                        _this.reintentarAlert(_this.ionViewDidLoad.bind(_this));
                    }
                    loading_1.dismiss();
                });
            }
            else {
                console.log('error');
                // this.menuActivo = false;
            }
        });
    };
    CuentaPage.prototype.reintentarAlert = function (funcionEnviar) {
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
    CuentaPage.prototype.agregadoOk = function () {
        var alert = this.alertCtrl.create({
            title: 'Editado correctamente',
            subTitle: 'Sus datos han sido editados correctamente',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    CuentaPage.prototype.getUDPE = function (valueExp) {
        var valExp = parseInt(valueExp) || 0;
        return valExp % 1500;
    };
    CuentaPage.prototype.errorSu = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Ha ocurrido un error',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    CuentaPage.prototype.getPorcentaje = function () {
        var enviar = ((900) / (this.dataUser.completadas * 100)) + '%';
        console.log(enviar);
        return enviar;
    };
    CuentaPage.prototype.seleccionarGenero = function (genero) {
        if (!this.editarData) {
            this.dataUser.idGenero = genero;
        }
    };
    CuentaPage.prototype.guardarCambios = function () {
        var _this = this;
        if (this.imageFileName) {
            this.uploadFile(this.dataUser);
        }
        else {
            var loading_2 = this.loadingCtrl.create({ content: "Cargando ..." });
            loading_2.present();
            this.apiProvider.editarUsuario(this.dataUser)
                .then(function (data) {
                loading_2.dismiss();
                console.log(data);
                if (data && data['affectedRows'] > 0) {
                    //this.storage.set(`usr_tok_by`, this.dataUser);
                    _this.storage.get('usr_tok_by').then(function (value) {
                        // console.log(value);
                        var da = value;
                        da.genero = _this.dataUser.genero;
                        da.telefono = _this.dataUser.telefono;
                        da.nombre = _this.dataUser.nombre;
                        da.idGenero = _this.dataUser.idGenero;
                        da.fechaNacimiento = _this.dataUser.fechaNacimiento;
                        console.log(da);
                        _this.storage.set("usr_tok_by", da);
                        _this.events.publish('userCH');
                        _this.cdr.detectChanges();
                    }); //.catch(() => resolve(false))
                    _this.agregadoOk();
                    //console.log('borrada');
                    _this.editarData = true;
                }
                else {
                    console.log('Ha ocurrido un error');
                    _this.reintentarAlert(_this.guardarCambios.bind(_this));
                }
            });
        }
        //console.log(this.dataUser);
    };
    CuentaPage.prototype.cancelarEdicion = function () {
        this.dataUser = this.dataUserInput;
        this.editarData = true;
        this.imageFileName = undefined;
    };
    CuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cuenta',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\cuenta\cuenta.html"*/'<!--\n  Generated template for the AjustesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Cuenta</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style=\'background-color: #fafafa; \' >\n\n        <ion-item style=\'    margin-top: 0px;\n    background-color: white !important;\n    padding: 20px;\' class=\'fixProfileMargin\'>\n          <ion-avatar item-start>\n\n          <img *ngIf="!imageFileName && editarData && !dataUser.fbId"  [hidden]=\'imageFileName\' style=\'width:75px; height: 75px;    object-fit: cover;\n    object-position: center;\' src="http://50.116.17.150:3000/{{dataUser?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" />\n\n          <img *ngIf="!imageFileName && editarData && dataUser.fbId"  [hidden]=\'imageFileName || dataUser.idFoto\' style=\'width:75px; height: 75px;    object-fit: cover;\n    object-position: center;\' src="{{dataUser?.imagenFb}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" />\n\n          <img *ngIf="!imageFileName && editarData && dataUser.fbId && dataUser.idFoto"  [hidden]=\'imageFileName\' style=\'width:75px; height: 75px;    object-fit: cover;\n    object-position: center;\' src="http://50.116.17.150:3000/{{dataUser?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" />\n\n\n\n            <img  (click)=\'getImages()\' *ngIf="!imageFileName && !editarData" [hidden]=\'imageFileName\' style=\'width:75px; height: 75px\' src="assets/imgs/editImage.png"   />\n\n        <img (click)=\'getImages()\'  [src]="DomSanitizer.bypassSecurityTrustUrl(imageFileName)"  *ngIf="imageFileName" style=\'width:75px; height: 75px;object-fit: contain;\' />\n\n          </ion-avatar>\n          <h2 style="margin-bottom: 23px;">{{dataUser?.nombre}}</h2>\n          <div class="barraContainer">\n\n\n\n            <div class="barraProgress" [ngStyle]="{\'width\': porcenBarra}"  ><span>{{getUDPE(dataUser?.exp) || 0}}/{{dataUser?.appexp}}</span></div>\n\n          </div>\n        </ion-item>\n\n\n\n\n          <ion-list>\n<!-- \n\n\n          <button  class="claseItem"  ion-item  >\n          {{dataUser?.nombre || \'no especificado\'}}\n    \n          </button>       <button  class="claseItem"  ion-item  >\n          {{dataUser?.email || \'no especificado\'}}\n        \n          </button>\n          <button  class="claseItem"  ion-item  >\n          {{dataUser?.telefono || \'no especificado\'}}\n        \n          </button>\n\n          <button  class="claseItem"  ion-item  >\n          Genero: {{dataUser?.genero || \'no especificado\'}}\n        \n          </button>\n-->\n\n\n  <ion-item style=\'margin-top: 20px\'  >\n    <ion-label color="headerColor" stacked>Nombre</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}"   [disabled]=\'editarData\' [(ngModel)]="dataUser.nombre" autocomplete=\'off\' type="text" placeholder="nombre"></ion-input>\n  </ion-item>\n\n  <ion-item  style=\'margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Email</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}" [disabled]=\'true\' [(ngModel)]="dataUser.email"  type="text" placeholder="correo electronico" autocomplete=\'off\'></ion-input>\n  </ion-item>\n\n    <ion-item  style=\'margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Contraseña</ion-label>\n    <ion-input   [ngClass]="{\'itemActi\':!editarData}"   [disabled]=\'editarData\' [(ngModel)]="dataUser.password"  autocomplete=\'off\' type="password" placeholder="pass"></ion-input>\n  </ion-item>\n\n\n  <ion-item  style=\'margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Teléfono</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' [(ngModel)]="dataUser.telefono" autocomplete=\'off\' type="tel" placeholder="telefono"></ion-input>\n  </ion-item>\n\n\n  \n  \n      <div style="margin-left: 16px;margin-top:10px">\n        <span style="font-size: 1.2rem;\n    color: #EC527E;\n    display: block;" >Género</span>\n\n\n        <ion-icon  name="man" style=\'        font-size: 40px;\n    opacity: 0.5;\n    color: #0079f4;\n    margin: 10px;\' [ngClass]="{\'iconActive\':dataUser?.idGenero == 1}" \n    (click)=\'seleccionarGenero(1)\'></ion-icon>\n\n\n        <ion-icon name="woman" style=\'    color: #EC527E;\n    margin: 10px;\n        font-size: 40px;\n    opacity: 0.5;\' [ngClass]="{\'iconActive\':dataUser?.idGenero == 2}" \n    (click)=\'seleccionarGenero(2)\'></ion-icon>\n     </div>\n<!--    <ion-item  style=\'margin-top: 20px\'> \n  <ion-label color="headerColor" stacked>Genero</ion-label>\n<ion-input   [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' [(ngModel)]="dataUser.genero"  type="text" placeholder=""></ion-input>\n\n   <ion-select interface=\'popover\' [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' \n   [(ngModel)]="dataUser.genero">\n\n      <ion-option value="Masculino">\n        <span>ion-icon name="man"></ion-icon>\n        \n      </ion-option>\n\n      <ion-option value="Femenino">\n      <ion-icon name="woman"></ion-icon>\n        Femenino\n      </ion-option>\n\n  </ion-select>\n\n  </ion-item>\n -->\n    \n\n<!-- <ion-item   style=\'    height: 75px;\'>\n  <ion-label class=\'headerColor\' style=\'    font-size: 1.2rem;\n    color: #EC527E;\n    opacity: 1; \' >Fecha Nacimiento</ion-label><br>\n <ion-datetime [disabled]=\'editarData\' [(ngModel)]="dataUser.fechaNacimiento" displayFormat="YYYY-MM-DD"  style=\'     position: absolute;\n    margin-top: 24px;\n    border: solid 2px lightgray;\n    padding: 0px 15px;\n    min-width: 50px;\' > </ion-datetime> \n\n</ion-item>\n\n -->\n\n\n  <ion-item  style=\'margin-top: 20px\'>\n    <ion-label color="headerColor" stacked style=\'    opacity: 1 !important;\'>Fecha Nacimiento</ion-label>\n\n\n<ion-datetime placeholder=\'seleccione una fecha\' [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' [(ngModel)]="dataUser.fechaNacimiento" displayFormat="DD-MM-YYYY"  style=\'\' > </ion-datetime>\n\n  </ion-item>\n\n\n\n\n          </ion-list>\n\n\n<!--\n              <div [hidden]=\'!editarData\'  style="width: 100%;\n    position: fixed;\n    bottom: 0px;\n    background: rgb(247,248,249);\n    padding-bottom: 6px;\n">\n          <button (click)=\'editarData=false\' ion-button class="botonVerdeFull">Actualizar informacion<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"></ion-icon> \n\n          </button>\n </div>\n\n <div  style="width: 100%;\n    position: fixed;\n    bottom: 0px;\n    background: rgb(247,248,249);\n    padding-bottom: 6px;\n" [hidden]=\'editarData\'>\n    \n\n    <button (click)=\'guardarCambios()\'  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Guardar cambio</button> \n\n    <button (click)=\'cancelarEdicion()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Deshacer</button>\n\n\n</div> -->\n\n\n\n\n\n   \n\n\n\n\n\n</ion-content>\n\n<ion-footer  style=\'  background-color: #f7f8f9 !important; \'>\n \n\n<div [hidden]=\'editarData\'>\n    <button (click)=\'guardarCambios()\'  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Guardar cambio</button> \n\n    <button (click)=\'cancelarEdicion()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Deshacer</button>\n    </div>\n    <div [hidden]=\'!editarData\'>\n      \n       <button (click)=\'editarData=false\' ion-button class="botonVerdeFull">Actualizar informacion<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"></ion-icon> \n\n          </button>\n\n    </div>\n\n\n</ion-footer>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\cuenta\cuenta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CuentaPage);
    return CuentaPage;
}());

//# sourceMappingURL=cuenta.js.map

/***/ })

});
//# sourceMappingURL=27.js.map