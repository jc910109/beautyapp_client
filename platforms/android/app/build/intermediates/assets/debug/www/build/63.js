webpackJsonp([63],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratsPageModule", function() { return CongratsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__congrats__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CongratsPageModule = (function () {
    function CongratsPageModule() {
    }
    CongratsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__congrats__["a" /* CongratsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__congrats__["a" /* CongratsPage */]),
            ],
        })
    ], CongratsPageModule);
    return CongratsPageModule;
}());

//# sourceMappingURL=congrats.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongratsPage; });
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
 * Generated class for the CongratsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CongratsPage = (function () {
    function CongratsPage(viewCtrl, apiProvider, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cuponP = {};
        this.st1 = true;
        this.st2 = false;
        this.st3 = false;
        this.st4 = false;
    }
    CongratsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CongratsPage');
        // this.navParams.get('idCuponCliente');
        var dataE = { idCuponCliente: this.navParams.get('idCuponCliente') };
        console.log(dataE);
        this.apiProvider.getCuponPremio(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.cuponP = data[0] || {};
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    CongratsPage.prototype.animacion1 = function () {
        this.st1 = false;
        this.st2 = true;
        this.st4 = true;
    };
    CongratsPage.prototype.closeModals = function () {
        this.viewCtrl.dismiss();
    };
    CongratsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-congrats',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\congrats\congrats.html"*/'\n\n\n\n<ion-content style=\'    background-color: #84EDC8;\'>\n\n\n<!--    <button style="    position: absolute;\n    background: transparent;\n    color: #444;\n    font-size: 27px;\n    height: 45px;\n    right: 10px;\n    top: 10px" ion-button class=\'button\' (click)="closeModals()"><ion-icon ios="ios-close"></ion-icon></button>\n\n -->\n\n<div *ngIf=\'st4\' [ngClass]="{ \'cannon\': st4 }">\n\n\n		<div class="cannon__path cannon__path--sm cannon__path--angle-7">\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-1"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n\n		<div class="cannon__path cannon__path--sm cannon__path--angle-6">\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n\n		<div class="cannon__path cannon__path--sm cannon__path--angle-5">\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n\n\n	<div class="cannon__path cannon__path--sm cannon__path--angle-2">\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-1"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n	<div class="cannon__path cannon__path--md cannon__path--angle-1">\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n	<div class="cannon__path cannon__path--lg cannon__path--angle0">\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n	<div class="cannon__path cannon__path--md cannon__path--angle1">\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n	<div class="cannon__path cannon__path--sm cannon__path--angle2">\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n\n\n\n		<div class="cannon__path cannon__path--sm cannon__path--angle-7c">\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-1"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n\n		<div class="cannon__path cannon__path--sm cannon__path--angle-6c">\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n\n\n		<div class="cannon__path cannon__path--sm cannon__path--angle-5c">\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-2"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>\n		<div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>\n		<div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>\n		<div class="cannon__confetti-spacer"></div>\n	</div>\n\n\n</div>\n\n\n<!-- \n<canvas #canvas style="background-color: transparent;" ></canvas>\n -->\n <div *ngIf=\'st1\' style="    position: absolute;\n    width: 100%;\n    text-align: center;\n    top: 30px;\n    color:white;\n    font-weight: 600;\n        \n    ">\n    	<span style="font-size: 21px;">Felicitaciones! </span>\n<br><br>\n    	<span style="font-size: 17px;">Completaste tu Experience Line!!!! <br>\n				Disfruta de tu premio!!!  \n</span>\n    </div>\n\n<div *ngIf=\'!st1\' style="    position: absolute;\n    width: 100%;\n    text-align: center;\n    bottom: 75px;\n    color:white;\n    font-weight: 600;\n    font-size: 20px;">\n<span>	Has Ganado un cupón</span>\n<ion-card style=\'margin-top: 35px\'  >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{cuponP.idFoto}}" \n				 onError="this.src=\'assets/imgs/fotocupon.png\';" style="\n				display: inline-block;\n				height: 65px;\n				width: 65px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">{{cuponP.nombreCupon}}</span>\n\n    <span *ngIf=\'cuponP.nombresCentro\' style="margin: 2px 0px 0px 0px;\n				font-size: 14px;\n				color: #999;display:block">Aplica en {{cuponP.nombresCentro.split(\',\').length}} Centros</span>\n\n				<span class="itemComercio" style="    margin-top: 3px;\n    display: block;\n}">\n\n\n\n<!-- 	<button  (click)=\'usarTicket(n.idCupon)\' style=\'background-color: #0079f4\' ion-button small >Usar Ahora</button>	 -->\n	\n\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n</div>\n	<div id="merrywrap" class="merrywrap " \n\n	[ngClass]="{ \'step-1\': st1, \'step-2\': st2, \'step-3\': st3 }">\n\n\n				<div class="giftbox " (click)=\'animacion1()\'>\n					<div class="cover">\n						<div></div>\n					</div>\n					<div class="box"></div>\n				</div>\n<!-- 				<div class="icons">\n					<div class="row">\n						<span>\n							<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50">\n								<path d="M25,12.655c-6.196,0-11.236,5.04-11.236,11.235c0,3.393,1.517,6.431,3.9,8.492c0.376-0.318,0.859-0.522,1.395-0.533\n									l1.771-3.541c-1.175-1.11-1.913-2.678-1.913-4.418c0-3.354,2.729-6.083,6.084-6.083s6.084,2.729,6.084,6.083\n									c0,0.653-0.106,1.281-0.297,1.871l0.289,0.254c0.296-0.131,0.619-0.201,0.948-0.201c1.305,0,2.366,1.062,2.366,2.365\n									c0,1.305-1.062,2.366-2.366,2.366c-1.087,0-2.006-0.737-2.281-1.738l-0.207-0.035l1.538,3.078c0.503,0.01,0.959,0.19,1.324,0.476\n									c2.347-2.061,3.838-5.074,3.838-8.436C36.236,17.695,31.195,12.655,25,12.655z M16.344,25.201c-0.713,0-1.289-0.576-1.289-1.288\n									c-0.008-0.713,0.576-1.289,1.28-1.289c0.713-0.008,1.288,0.567,1.296,1.28C17.631,24.617,17.057,25.192,16.344,25.201z\n									M19.778,18.691c-0.259,0.249-0.583,0.378-0.919,0.378c-0.326,0-0.652-0.12-0.91-0.369c-0.498-0.507-0.508-1.322,0-1.829\n									c0.498-0.498,1.314-0.498,1.82,0c0.508,0.498,0.508,1.313,0,1.82H19.778z M24.975,16.519c-0.713,0-1.289-0.575-1.289-1.288\n									c0-0.704,0.576-1.288,1.28-1.288c0.713,0,1.296,0.575,1.296,1.288S25.688,16.519,24.975,16.519z M32.016,18.648\n									c-0.248,0.258-0.583,0.387-0.918,0.387c-0.326,0-0.653-0.129-0.902-0.378c-0.506-0.498-0.506-1.313-0.008-1.82\n									c0.497-0.508,1.314-0.508,1.82-0.01C32.515,17.335,32.515,18.15,32.016,18.648z M34.945,23.87c0,0.008,0,0.018,0,0.018\n									c0,0.713-0.576,1.288-1.289,1.288s-1.287-0.575-1.287-1.288c0,0,0-0.01,0-0.018v-0.009c0-0.713,0.574-1.297,1.287-1.297\n									c0.705,0,1.289,0.576,1.289,1.279c0,0,0,0,0,0.01C34.945,23.861,34.945,23.861,34.945,23.87z"/>\n								<path d="M32.024,29.546c0.755,0,1.366-0.612,1.366-1.366s-0.611-1.365-1.366-1.365c-0.408,0-0.771,0.184-1.021,0.468l-5.937-5.212\n									l-5.163,10.326h10.326l-2.469-4.938l2.921,0.493c-0.013,0.074-0.023,0.149-0.023,0.228C30.658,28.934,31.271,29.546,32.024,29.546z\n									"/>\n								<path d="M31.029,32.846H19.104c-0.655,0-1.192,0.505-1.192,1.122v2.245c0,0.617,0.537,1.122,1.192,1.122h11.926\n									c0.655,0,1.192-0.505,1.192-1.122v-2.245C32.222,33.351,31.685,32.846,31.029,32.846z"/>\n							</svg>\n						</span>\n\n					</div>\n				</div> -->\n			</div>\n</ion-content>\n<ion-footer>\n	\n\n    <button  *ngIf=\'!st1\' (click)="closeModals()" color=\'headerColor\' ion-button full style="     margin: 0px !important;  " >Aceptar</button>\n\n</ion-footer>'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\congrats\congrats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CongratsPage);
    return CongratsPage;
}());

//# sourceMappingURL=congrats.js.map

/***/ })

});
//# sourceMappingURL=63.js.map