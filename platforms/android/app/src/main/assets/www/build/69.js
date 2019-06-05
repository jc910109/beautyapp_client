webpackJsonp([69],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPageModule", function() { return AjustesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajustes__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AjustesPageModule = (function () {
    function AjustesPageModule() {
    }
    AjustesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ajustes__["a" /* AjustesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__ajustes__["a" /* AjustesPage */]),
            ],
        })
    ], AjustesPageModule);
    return AjustesPageModule;
}());

//# sourceMappingURL=ajustes.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
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
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjustesPage = (function () {
    function AjustesPage(alertCtrl, navCtrl, navParams, modalCtrl, apiProvider, loadingCtrl, events) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.information = [];
        this.showFaq = false;
    }
    AjustesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjustesPage');
        this.information = [{ nombre: '¿Qué es Yourbeauty?', id: 1, respuesta: 'Yourbeauty es una aplicación gratuita que te permite reservar servicios de belleza y bienestar en los mejores  centros en la ciudad de Panamá.', open: false },
            { nombre: '¿Qué servicios ofrecen los centros?', id: 2, respuesta: 'Los servicios se clasifican por categoría, y en ellas se despliegan los servicios relacionados. También puedes  buscar por palabra clave o según necesidad  en la opción de filtros.', open: false },
            { nombre: '¿Cómo se reserva?', id: 3, respuesta: 'Selecciona el servicio, el día, hora y el staff deseado.  Una vez confirmes reserva, se enviará solicitud al centro. Podrás consultar en la pestaña  “Reservaciones” el estado y todos los detalles relacionados con la reservación. <br><br>  En caso centro no confirme, en la misma reserva te dan opción de contactarlo directamente. Así mismo, puedes reprogramar o cancelar la cita según tu necesidad.', open: false },
            { nombre: '¿En qué momento se efectúa el pago?', id: 4, respuesta: 'El precio que indica en el  servicio seleccionado deberá abonarse directamente al centro, éste precio no incluye ITBMS. Una vez completado el servicio (efectúas pago en el centro) deben confirmar el servicio completado para puedas acumular puntos en tu “Experiencie Line”.', open: false },
            { nombre: '¿Cómo guardo un centro como favorito?', id: 5, respuesta: 'Guarda el centro que has indicado como favorito para que lo tengas en cuenta en futuras reservaciones. Se indica favorito en el perfil del centro donde aparece foto principal.', open: false },
            { nombre: '¿Cómo me beneficio de un cupón o regalo?', id: 6, respuesta: 'Ingresa el código del cupón y benefíciate de los descuentos relacionados con el mismo. Debes tener en cuenta la fecha de expiración porque vencido plazo deja de estar en uso', open: false },
            { nombre: '¿Porqué las opiniones se clasifican en pendientes y agregadas?', id: 7, respuesta: 'Las pendientes son las reservaciones que se han completado y no has compartido tu experiencia, debes calificar y dar tu opinión para acumular puntos en tu “Experiencie Line”. <br><br>  Las agregadas son las opiniones que has compartido  después de una reserva completada, por la cual ya has acumulado los  puntos en tu “Experiencie Line”.  Quedan como historial de tu experiencia.', open: false },
            { nombre: '¿Qué servicios están en ofertas y/o que paquetes ofrecen?', id: 8, respuesta: 'Selecciona en la pantalla principal o desde el menú la opción deseada y verás que servicios ofrecen el descuento.', open: false },
            { nombre: '¿Qué datos se muestran en mi cuenta?', id: 9, respuesta: 'Figuran tus datos personales y tu “Experience Line”, barra  de experiencia donde acumulas los puntos. <br><br> <b>Acumulas puntos de la siguiente manera:</b> <ul><li>Cada 1 dólar sumas 1 punto</li><li>Cada opinión que realices sumas 5 puntos</li><li>Por compartir App con tus amigos sumas 3 puntos</li></ul><br> Cuando  llegues a 1500 puntos… ¡FELICITACIONES! Habrás completado tu “Experience Line”  obtendrás tu cupón para que lo puedas disfrutar. Los puntos no caducan.', open: false }];
    };
    AjustesPage.prototype.enviarMenssaje = function () {
        //console.log('ionViewDidLoad AjustesPage');
    };
    AjustesPage.prototype.goUso = function () {
        /*
          let alert = this.alertCtrl.create({
            title: 'Terminos de Uso del app',
            subTitle: 'Lorem ipsum dolor sit amet, egestas ipsum turpis volutpat, curabitur arcu ac, donec vestibulum integer mi justo facilisis, est fusce nibh aenean id mauris. Tellus ad vitae lacus maxime, purus nec porttitor convallis, proin faucibus, aliquam mauris. Aenean sed sed vivamus amet. Vel ullamcorper morbi consectetuer consectetuer mollis vivamus, tincidunt vestibulum taciti feugiat est, neque nibh et, fringilla tempor amet nulla, id id et. Pede mollis voluptatem, cursus id rutrum sit, erat nulla suspendisse libero eget. Amet urna arcu tristique, rutrum eget ligula. At sed quis lacinia pellentesque vestibulum, duis sed mi voluptatem, libero morbi ridiculus.',
            buttons: ['Cerrar']
          });
          alert.present();
          */
        window.open("https://www.yourbeauty.com.pa/terminos/", '_system', 'location=yes');
    };
    AjustesPage.prototype.bnegocios = function () {
        var alert = this.alertCtrl.create({
            title: 'Yourbeauty Panamá',
            subTitle: '¿Necesitas asistencia? Escríbenos y te contactaremos a la brevedad posible. <br><br> Email: info@yourbeauty.com.pa',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    AjustesPage.prototype.notisVerificar = function (ite) {
        console.log(ite);
        this.storage.set("bypush", ite);
    };
    AjustesPage.prototype.goSobre = function () {
        // this.navCtrl.push('NosotrosPage'); 
        window.open("https://www.yourbeauty.com.pa/", '_system', 'location=yes');
    };
    AjustesPage.prototype.goBYN = function () {
        //https://www.yourbeauty.com.pa/negocios/
        window.open("https://www.yourbeauty.com.pa/negocios/", '_system', 'location=yes');
        //this.navCtrl.push('NegocioregistroPage');
    };
    AjustesPage.prototype.envioOK = function () {
        var alert = this.alertCtrl.create({
            title: 'Exito',
            subTitle: 'Tu mensaje ha sido enviado al administrador, gracias por usar nuestro servicio',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    AjustesPage.prototype.enviarMensaje = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Envianos un mensaje',
            inputs: [
                {
                    name: 'mensaje',
                    placeholder: 'Escribe tu mensaje aqui'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        if (data.mensaje) {
                            console.log(data.mensaje);
                            // logged in!
                            _this.envioOK();
                        }
                        else {
                            // invalid login
                            console.log('mensaje vaciui');
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AjustesPage.prototype.toggleSection = function (i) {
        var _this = this;
        this.information[i].open = !this.information[i].open;
        this.information.forEach(function (item, index) {
            if (index !== i) {
                _this.information[index].open = false;
            }
        });
    };
    AjustesPage.prototype.viewFaq = function () {
        this.showFaq = true;
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ajustes',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\ajustes\ajustes.html"*/'<!--\n  Generated template for the AjustesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Ajustes</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style=\'background-color: #fafafa; \' >\n\n\n          <ion-list>\n<!-- \n    <ion-item class="claseItem " [color]=\'verdeApp\'>\n    <ion-label>Notificaciones</ion-label>\n    <ion-toggle (ionChange)="notisVerificar(notis)" [color]=\'verdeApp\' [(ngModel)]="notis" ></ion-toggle>\n  </ion-item>\n -->\n\n\n                    <button  (click)=\'goSobre()\'  class="claseItem"  ion-item  >\n          Sobre <span style="font-style: italic;">Yourbeauty</span>\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n     \n\n<!-- \n          <button  class="claseItem"  ion-item  >\n          Evalua el app en la tienda\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n -->\n\n                    <button (click)=\'bnegocios()\' class="claseItem"  ion-item  >\n          Contactar con Nosotros\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n                    <button  (click)=\'goBYN()\' class="claseItem"  ion-item  >\n          <span style="font-style: italic;">Yourbeauty</span> para negocios\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n\n     <button  (click)=\'goUso()\' class="claseItem"  ion-item  >\n          Términos de uso\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n      \n\n\n\n\n          </ion-list>\n\n          <div style="text-align: center;margin-bottom: 15px !important;">\n   \n   \n            <button (click)=\'viewFaq()\' ion-button style="background-color: #0079f4;width: 80%; max-width: 500px;    border-radius: 35px;">Preguntas Frecuentes</button>\n        \n          </div>\n\n          <ion-list *ngIf="showFaq" class="accordion-list" class="page-ayuda">\n              <ion-list-header  [ngClass]="{\'borderSelected\': item.open, \'borderSelected2\': item.open && item.id==1}" *ngFor="let item of information; let i = index" no-lines no-padding>\n        \n        \n              <button style=\'        white-space: normal !important;\n            color: #777;background: transparent;\n            border-bottom: solid 1px #d3d3d3; margin-bottom: 5px;\'  ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n              <ion-icon class=\'btnList\' item-right  name="ios-add" *ngIf="!item.open"></ion-icon>\n              <ion-icon class=\'btnList\' item-right name="ios-remove" *ngIf="item.open"></ion-icon>\n        \n              <p [ngClass]="{\'section-active\': item.open}" style="      text-overflow: ellipsis !important;\n            white-space: normal !important;\n            padding: 9px 0px;    color: #3d3f4a;\n            font-size: 16px;">{{ item.nombre }}</p>\n        \n              </button>\n        \n              <ion-list class=\'faqRespuesta\' *ngIf="item.open" no-lines >\n              <p style="line-height: 19px;    color: #3d3f4a;\n            font-size: 16px;" [innerHtml]="item.respuesta"></p>\n              </ion-list>\n        \n              </ion-list-header>\n            </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\ajustes\ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ })

});
//# sourceMappingURL=69.js.map