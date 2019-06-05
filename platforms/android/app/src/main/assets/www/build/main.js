webpackJsonp([38],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = (function () {
    //api2='http://192.168.100.3:3001';     
    //api2='http://10.100.100.139:3001';  
    //api2='https://centro.yourbeauty.com.pa:8443';
    function ApiProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api2 = 'http://50.116.17.150:3001';
        // console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.verificarLogin = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('usr_tok_by').then(function (value) {
                // console.log(value);
                value ? resolve(value) : resolve(false);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.getCarrito = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get("carrito").then(function (value) {
                // console.log(value);
                value ? resolve(value) : resolve([]);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.getTotal = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get("carrito").then(function (value) {
                // console.log(value);
                var total = 0;
                value.forEach(function (elementw, index) {
                    total += parseFloat(elementw.precioFinal);
                });
                resolve(total);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.addProductoz = function (productoz) {
        var _this = this;
        return new Promise(function (resolve) {
            productoz.forEach(function (item, index) {
                item.precioFinal = item.precioCobrado;
            });
            _this.storage.get('carrito').then(function (value) {
                _this.storage.set("carrito", productoz);
                resolve(productoz);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.addProductoPaquete = function (productoz) {
        var _this = this;
        return new Promise(function (resolve) {
            var carrito = [];
            productoz.forEach(function (item, index) {
                var nI = {};
                nI['duracion'] = item.duracionServicio;
                nI['idCategoria'] = item.idCategoria;
                nI['idServicio'] = item.idServicio;
                nI['imagenCategoria'] = null;
                nI['nombre'] = item.nombreServicio;
                nI['nombreCategoria'] = null;
                nI['precio'] = item.precioServicio;
                nI['precioFinal'] = item.precioServicio;
                nI['precioPaquete'] = item.precioPaquete;
                nI['oferta'] = null;
                carrito.push(nI);
            });
            _this.storage.set("carrito", carrito);
            resolve(carrito);
        });
    };
    ApiProvider.prototype.addProducto = function (producto) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('carrito').then(function (value) {
                if (value) {
                    value.push(producto);
                    _this.storage.set("carrito", value);
                    resolve(value);
                }
                else {
                    var carrito = [];
                    carrito.push(producto);
                    _this.storage.set("carrito", carrito);
                    resolve(carrito);
                }
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.sacarProducto = function (servicio) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get("carrito").then(function (value) {
                if (value) {
                    //let index = value.indexOf(idServicio);
                    var index = value.findIndex(function (i) { return i.idServicio === servicio; });
                    if (index > -1) {
                        value.splice(index, 1);
                    }
                    console.log(value);
                    _this.storage.set("carrito", value);
                    resolve(value);
                }
                else {
                    resolve([]);
                }
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.vaciarCarrito = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var carrito = [];
            _this.storage.set("carrito", carrito);
            resolve(carrito);
        });
    };
    //this.storage.set(`usr_tok_datagym`, data.data[0]);
    ApiProvider.prototype.categoriasHome = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/categoriasHome3').subscribe(function (data) {
                console.log('d');
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.getNotificacionActiva = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/getNotificacionActiva').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.doLoginApi = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/doLoginApi', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.cerrarS = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/cerrarS', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.cancelarCita = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/cancelarCita', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCitaPendientesN = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCitaPendientesN', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.agregarOpinion = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/agregarOpinion', da).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.getCuponPremio = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCuponPremio', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCC = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCC', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.actualizarDataINL = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/actualizarDataINL', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getUserInfo = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getUserInfo', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.reprogramarCita = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/reprogramarCita', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.reprogramarCitaNC = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/reprogramarCitaNCAPP', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.verificarPremioUs = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/verificarPremioUs', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.aceptarReprogramacion = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/aceptarReprogramacion', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.quitarAnimacion = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/quitarAnimacion', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getHorasDispo = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getHorasDispo', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.buscarServiciosFiltro = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarServiciosFiltro', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.getSubcategorias = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getSubcategorias', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.getDataCita = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getDataCita', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.editarUsuario = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/editarUsuario', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.getServiciosCategoria = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getServiciosCategoria22', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.verificarEmail2 = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/verificarEmail3', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getEmpleadosDisponibles = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getEmpleadosDisponibles', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.addPush = function (dd) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addPush', JSON.stringify(dd), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.categoriasActivas = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/categoriasActivas').subscribe(function (data) {
                console.log('d');
                resolve(data);
            }, function (err) {
                resolve(false);
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.horaMinMax = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/horaMinMax').subscribe(function (data) {
                console.log('d');
                resolve(data);
            }, function (err) {
                resolve(false);
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentroInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentroInfoFix', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.cambiarFavorito = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/cambiarFavorito', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.reservasUser = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/reservasUser', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.addCita = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addCita', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.reproCitaApp = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/reproCitaApp', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentroServicios = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentroServicios', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentroServicios2 = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentroServicios2', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.paquetesActivos = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/paquetesActivos22', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.paquetesActivosInicio = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/paquetesActivosInicio', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.ofertasActivas = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/ofertasActivas2', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.ofertasActivasInicio = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/ofertasActivasInicio', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.favoritosGPS2 = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/favoritosGPS2', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.favoritosGPS = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/favoritosGPS', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentrosMapa = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentrosMapaFix', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.getOpiniones = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getOpiniones', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.recuperarPass = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/recuperarPass', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.addUserFb = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addUserFb', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.addUserEmail = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addUserEmail', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    ApiProvider.prototype.addNegocio = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addNegocio2', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.verificarFBLog = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/verificarFBLog', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.verificarCuenta = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/verificarCuenta', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCupones = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCupones', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCuponesApp = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCuponesApp', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.canjearCupon = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/canjearCupon', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.buscarOfertas = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarOfertas', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.buscarServicios = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarServiciosGPS', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.buscarServicios2 = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarServiciosGPS2', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.enviarContacto = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/enviarMailContacto', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a, _b;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		427,
		37
	],
	"../pages/addservicios/addservicios.module": [
		428,
		36
	],
	"../pages/ajustes/ajustes.module": [
		429,
		35
	],
	"../pages/ayuda/ayuda.module": [
		430,
		34
	],
	"../pages/buscar-modal/buscar-modal.module": [
		431,
		33
	],
	"../pages/calificar/calificar.module": [
		432,
		12
	],
	"../pages/centrocupones/centrocupones.module": [
		433,
		32
	],
	"../pages/confirmacionpaquete/confirmacionpaquete.module": [
		434,
		31
	],
	"../pages/confirmar-reserva/confirmar-reserva.module": [
		435,
		30
	],
	"../pages/congrats/congrats.module": [
		436,
		29
	],
	"../pages/contact/contact.module": [
		437,
		28
	],
	"../pages/cuenta/cuenta.module": [
		438,
		27
	],
	"../pages/cupones/cupones.module": [
		439,
		8
	],
	"../pages/demo/demo.module": [
		440,
		26
	],
	"../pages/detalle-reserva/detalle-reserva.module": [
		441,
		25
	],
	"../pages/faq/faq.module": [
		442,
		24
	],
	"../pages/favoritos/favoritos.module": [
		443,
		7
	],
	"../pages/inicio/inicio.module": [
		426,
		11
	],
	"../pages/lista-servicios/lista-servicios.module": [
		444,
		6
	],
	"../pages/login/login.module": [
		445,
		23
	],
	"../pages/logind/logind.module": [
		446,
		22
	],
	"../pages/mapa/mapa.module": [
		447,
		21
	],
	"../pages/mis-reservas/mis-reservas.module": [
		448,
		5
	],
	"../pages/modal-services/modal-services.module": [
		449,
		10
	],
	"../pages/negocioregistro/negocioregistro.module": [
		450,
		20
	],
	"../pages/nosotros/nosotros.module": [
		451,
		19
	],
	"../pages/ofertas/ofertas.module": [
		452,
		4
	],
	"../pages/opiniones/opiniones.module": [
		453,
		2
	],
	"../pages/paquetes/paquetes.module": [
		454,
		3
	],
	"../pages/perfil-centro/perfil-centro.module": [
		455,
		9
	],
	"../pages/profile/profile.module": [
		456,
		18
	],
	"../pages/recuperar/recuperar.module": [
		457,
		17
	],
	"../pages/reserva-hecha/reserva-hecha.module": [
		458,
		16
	],
	"../pages/reserva/reserva.module": [
		459,
		1
	],
	"../pages/reservapaquete/reservapaquete.module": [
		460,
		0
	],
	"../pages/resultados/resultados.module": [
		461,
		15
	],
	"../pages/slides/slides.module": [
		462,
		14
	],
	"../pages/verificacion/verificacion.module": [
		463,
		13
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goServicio = function (nombreServicio) {
        this.navCtrl.push('ListaServiciosPage', { nombre: nombreServicio });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\n<img src="assets/imgs/logoMenu.png">\n\n    </ion-title>\n\n      <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n\n\n            <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf=\'true\'>\n\n    <div style="width: 100%;" >\n    <img src="assets/imgs/imagenLogo.png" style="height: 100%; width:100%;margin-top:-75px;">\n    </div>\n\n    <div>\n      <div class="tituloSeccion">\n      Selecciona un Servicio\n      </div>\n\n      <div class="containerServicios">\n\n\n        <div class="servicios" (click)=\'goServicio("Peluqueria")\'> \n          <img src="assets/imgs/Peluqueria.png">\n          <span>Peluqueria</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Rostro y Cuerpo")\'> \n          <img src="assets/imgs/rostro.png">\n          <span>Rostro y Cuerpo</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Uñas")\'> \n          <img src="assets/imgs/unas.png">\n          <span>Uñas</span>\n        </div>\n\n     \n\n                <div class="servicios" (click)=\'goServicio("Masaje")\'> \n          <img src="assets/imgs/masaje.png">\n          <span>Masaje</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Depilacion")\'> \n          <img src="assets/imgs/depilacion.png">\n          <span>Depilacion</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Bienestar")\'> \n          <img src="assets/imgs/bienestar.png" >\n          <span>Bienestar</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Paquetes")\'> \n          <img src="assets/imgs/paquetes.png">\n          <span>Paquetes</span>\n        </div>\n                <div class="servicios" (click)=\'goServicio("Ofertas")\'> \n          <img src="assets/imgs/ofertasVerde.png">\n          <span>Ofertas</span>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic2_rating__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transitions_on_enter_scale_transition__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__transitions_on_leave_scale_transition__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-scale-up-enter', __WEBPACK_IMPORTED_MODULE_13__transitions_on_enter_scale_transition__["a" /* ModalScaleEnterTransition */]);
        this.config.setTransition('modal-scale-up-leave', __WEBPACK_IMPORTED_MODULE_14__transitions_on_leave_scale_transition__["a" /* ModalScaleLeaveTransition */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_12_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: 'ios', backButtonText: '' }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addservicios/addservicios.module#AddserviciosPageModule', name: 'AddserviciosPage', segment: 'addservicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajustes/ajustes.module#AjustesPageModule', name: 'AjustesPage', segment: 'ajustes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar-modal/buscar-modal.module#BuscarModalPageModule', name: 'BuscarModalPage', segment: 'buscar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calificar/calificar.module#CalificarPageModule', name: 'CalificarPage', segment: 'calificar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/centrocupones/centrocupones.module#CentrocuponesPageModule', name: 'CentrocuponesPage', segment: 'centrocupones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmacionpaquete/confirmacionpaquete.module#ConfirmacionpaquetePageModule', name: 'ConfirmacionpaquetePage', segment: 'confirmacionpaquete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-reserva/confirmar-reserva.module#ConfirmarReservaPageModule', name: 'ConfirmarReservaPage', segment: 'confirmar-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/congrats/congrats.module#CongratsPageModule', name: 'CongratsPage', segment: 'congrats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/cuenta.module#CuentaPageModule', name: 'CuentaPage', segment: 'cuenta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cupones/cupones.module#CuponesPageModule', name: 'CuponesPage', segment: 'cupones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demo/demo.module#DemoPageModule', name: 'DemoPage', segment: 'demo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-reserva/detalle-reserva.module#DetalleReservaPageModule', name: 'DetalleReservaPage', segment: 'detalle-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritos/favoritos.module#FavoritosPageModule', name: 'FavoritosPage', segment: 'favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-servicios/lista-servicios.module#ListaServiciosPageModule', name: 'ListaServiciosPage', segment: 'lista-servicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logind/logind.module#LogindPageModule', name: 'LogindPage', segment: 'logind', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-reservas/mis-reservas.module#MisReservasPageModule', name: 'MisReservasPage', segment: 'mis-reservas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-services/modal-services.module#ModalServicesPageModule', name: 'ModalServicesPage', segment: 'modal-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negocioregistro/negocioregistro.module#NegocioregistroPageModule', name: 'NegocioregistroPage', segment: 'negocioregistro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nosotros/nosotros.module#NosotrosPageModule', name: 'NosotrosPage', segment: 'nosotros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ofertas/ofertas.module#OfertasPageModule', name: 'OfertasPage', segment: 'ofertas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opiniones/opiniones.module#OpinionesPageModule', name: 'OpinionesPage', segment: 'opiniones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paquetes/paquetes.module#PaquetesPageModule', name: 'PaquetesPage', segment: 'paquetes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-centro/perfil-centro.module#PerfilCentroPageModule', name: 'PerfilCentroPage', segment: 'perfil-centro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar/recuperar.module#RecuperarPageModule', name: 'RecuperarPage', segment: 'recuperar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva-hecha/reserva-hecha.module#ReservaHechaPageModule', name: 'ReservaHechaPage', segment: 'reserva-hecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservapaquete/reservapaquete.module#ReservapaquetePageModule', name: 'ReservapaquetePage', segment: 'reservapaquete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultados/resultados.module#ResultadosPageModule', name: 'ResultadosPage', segment: 'resultados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verificacion/verificacion.module#VerificacionPageModule', name: 'VerificacionPage', segment: 'verificacion', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Config"]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 161,
	"./af.js": 161,
	"./ar": 162,
	"./ar-dz": 163,
	"./ar-dz.js": 163,
	"./ar-kw": 164,
	"./ar-kw.js": 164,
	"./ar-ly": 165,
	"./ar-ly.js": 165,
	"./ar-ma": 166,
	"./ar-ma.js": 166,
	"./ar-sa": 167,
	"./ar-sa.js": 167,
	"./ar-tn": 168,
	"./ar-tn.js": 168,
	"./ar.js": 162,
	"./az": 169,
	"./az.js": 169,
	"./be": 170,
	"./be.js": 170,
	"./bg": 171,
	"./bg.js": 171,
	"./bm": 172,
	"./bm.js": 172,
	"./bn": 173,
	"./bn.js": 173,
	"./bo": 174,
	"./bo.js": 174,
	"./br": 175,
	"./br.js": 175,
	"./bs": 176,
	"./bs.js": 176,
	"./ca": 177,
	"./ca.js": 177,
	"./cs": 178,
	"./cs.js": 178,
	"./cv": 179,
	"./cv.js": 179,
	"./cy": 180,
	"./cy.js": 180,
	"./da": 181,
	"./da.js": 181,
	"./de": 182,
	"./de-at": 183,
	"./de-at.js": 183,
	"./de-ch": 184,
	"./de-ch.js": 184,
	"./de.js": 182,
	"./dv": 185,
	"./dv.js": 185,
	"./el": 186,
	"./el.js": 186,
	"./en-au": 187,
	"./en-au.js": 187,
	"./en-ca": 188,
	"./en-ca.js": 188,
	"./en-gb": 189,
	"./en-gb.js": 189,
	"./en-ie": 190,
	"./en-ie.js": 190,
	"./en-il": 191,
	"./en-il.js": 191,
	"./en-nz": 192,
	"./en-nz.js": 192,
	"./eo": 193,
	"./eo.js": 193,
	"./es": 194,
	"./es-do": 195,
	"./es-do.js": 195,
	"./es-us": 196,
	"./es-us.js": 196,
	"./es.js": 194,
	"./et": 197,
	"./et.js": 197,
	"./eu": 198,
	"./eu.js": 198,
	"./fa": 199,
	"./fa.js": 199,
	"./fi": 200,
	"./fi.js": 200,
	"./fo": 201,
	"./fo.js": 201,
	"./fr": 202,
	"./fr-ca": 203,
	"./fr-ca.js": 203,
	"./fr-ch": 204,
	"./fr-ch.js": 204,
	"./fr.js": 202,
	"./fy": 205,
	"./fy.js": 205,
	"./gd": 206,
	"./gd.js": 206,
	"./gl": 207,
	"./gl.js": 207,
	"./gom-latn": 208,
	"./gom-latn.js": 208,
	"./gu": 209,
	"./gu.js": 209,
	"./he": 210,
	"./he.js": 210,
	"./hi": 211,
	"./hi.js": 211,
	"./hr": 212,
	"./hr.js": 212,
	"./hu": 213,
	"./hu.js": 213,
	"./hy-am": 214,
	"./hy-am.js": 214,
	"./id": 215,
	"./id.js": 215,
	"./is": 216,
	"./is.js": 216,
	"./it": 217,
	"./it.js": 217,
	"./ja": 218,
	"./ja.js": 218,
	"./jv": 219,
	"./jv.js": 219,
	"./ka": 220,
	"./ka.js": 220,
	"./kk": 221,
	"./kk.js": 221,
	"./km": 222,
	"./km.js": 222,
	"./kn": 223,
	"./kn.js": 223,
	"./ko": 224,
	"./ko.js": 224,
	"./ky": 225,
	"./ky.js": 225,
	"./lb": 226,
	"./lb.js": 226,
	"./lo": 227,
	"./lo.js": 227,
	"./lt": 228,
	"./lt.js": 228,
	"./lv": 229,
	"./lv.js": 229,
	"./me": 230,
	"./me.js": 230,
	"./mi": 231,
	"./mi.js": 231,
	"./mk": 232,
	"./mk.js": 232,
	"./ml": 233,
	"./ml.js": 233,
	"./mn": 234,
	"./mn.js": 234,
	"./mr": 235,
	"./mr.js": 235,
	"./ms": 236,
	"./ms-my": 237,
	"./ms-my.js": 237,
	"./ms.js": 236,
	"./mt": 238,
	"./mt.js": 238,
	"./my": 239,
	"./my.js": 239,
	"./nb": 240,
	"./nb.js": 240,
	"./ne": 241,
	"./ne.js": 241,
	"./nl": 242,
	"./nl-be": 243,
	"./nl-be.js": 243,
	"./nl.js": 242,
	"./nn": 244,
	"./nn.js": 244,
	"./pa-in": 245,
	"./pa-in.js": 245,
	"./pl": 246,
	"./pl.js": 246,
	"./pt": 247,
	"./pt-br": 248,
	"./pt-br.js": 248,
	"./pt.js": 247,
	"./ro": 249,
	"./ro.js": 249,
	"./ru": 250,
	"./ru.js": 250,
	"./sd": 251,
	"./sd.js": 251,
	"./se": 252,
	"./se.js": 252,
	"./si": 253,
	"./si.js": 253,
	"./sk": 254,
	"./sk.js": 254,
	"./sl": 255,
	"./sl.js": 255,
	"./sq": 256,
	"./sq.js": 256,
	"./sr": 257,
	"./sr-cyrl": 258,
	"./sr-cyrl.js": 258,
	"./sr.js": 257,
	"./ss": 259,
	"./ss.js": 259,
	"./sv": 260,
	"./sv.js": 260,
	"./sw": 261,
	"./sw.js": 261,
	"./ta": 262,
	"./ta.js": 262,
	"./te": 263,
	"./te.js": 263,
	"./tet": 264,
	"./tet.js": 264,
	"./tg": 265,
	"./tg.js": 265,
	"./th": 266,
	"./th.js": 266,
	"./tl-ph": 267,
	"./tl-ph.js": 267,
	"./tlh": 268,
	"./tlh.js": 268,
	"./tr": 269,
	"./tr.js": 269,
	"./tzl": 270,
	"./tzl.js": 270,
	"./tzm": 271,
	"./tzm-latn": 272,
	"./tzm-latn.js": 272,
	"./tzm.js": 271,
	"./ug-cn": 273,
	"./ug-cn.js": 273,
	"./uk": 274,
	"./uk.js": 274,
	"./ur": 275,
	"./ur.js": 275,
	"./uz": 276,
	"./uz-latn": 277,
	"./uz-latn.js": 277,
	"./uz.js": 276,
	"./vi": 278,
	"./vi.js": 278,
	"./x-pseudo": 279,
	"./x-pseudo.js": 279,
	"./yo": 280,
	"./yo.js": 280,
	"./zh-cn": 281,
	"./zh-cn.js": 281,
	"./zh-hk": 282,
	"./zh-hk.js": 282,
	"./zh-tw": 283,
	"./zh-tw.js": 283
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 392;

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = (function () {
    function MyApp(cdr, platform, statusBar, alertCtrl, sanitizer, menuCtrl, splashScreen, formBuilder, events, loadingCtrl, storage, modalCtrl, apiProvider, zone) {
        var _this = this;
        this.cdr = cdr;
        this.platform = platform;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.menuCtrl = menuCtrl;
        this.splashScreen = splashScreen;
        this.formBuilder = formBuilder;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.zone = zone;
        this.rootPage = '';
        this.menuActivo = false;
        this.porcenBarra = '';
        /*
        setLoadingText=(text:string,total:string ) =>{
          const elem = document.querySelector("div.itemCa");
          if(elem) elem.innerHTML = text +' / '+(total);
        
        }
        
        */
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
        this.goAnimacion2 = function (puntosV, totalV, puntosActual) {
            console.log(puntosV, totalV, puntosActual);
            var puntos = puntosV;
            var totall = totalV;
            var expUserM = puntosActual;
            var exp2Cont = 0;
            var valorInc = (puntosActual * 100) / 1500;
            var tiempo = 3000 / (puntos / 1);
            console.log(tiempo);
            _this.presentAlert2("\n      <div class=\"meter\">\n      <span class='porcenCrec' style=\"width:" + valorInc + "%;\"><span class=\"progress2\"></span></span>\n      </div>\n\n<div class=\" itemCa\">\n \n</div>\n\n<div class=\"floating itemFlo\">\n  + " + puntos + " exp\n</div>\n\n      <div class=\"leyendaAlert\">\n\n      <img  style='display: flex;' src=\"assets/imgs/complete.png\">\n\n      <span style='display: flex;'>\n      Gracias por compartir! Has ganado " + puntos + " de experiencia\n      </span>\n\n      </div>");
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
        this.getFacebookProfileInfo = function (authResponse) {
            return new Promise(function (resolve) {
                facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null, function (response) {
                    console.log(response);
                    resolve(response);
                }, function (response) {
                    console.log(response);
                    resolve(response);
                });
            });
            //var info = $q.defer();
        };
        // This is the success callback from the login method
        this.fbLoginSuccess = function (response) {
            if (!response.authResponse) {
                _this.fbLoginError("Cannot find the authResponse");
                return;
            }
            var authResponse = response.authResponse;
            _this.getFacebookProfileInfo(authResponse)
                .then(function (profileInfo) {
                // For the purpose of this example I will store user data on local storage
                var usuario = {
                    fbId: profileInfo['id'],
                    nombre: profileInfo['name'],
                    email: profileInfo['email'],
                    imagenFB: "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
                };
                _this.apiProvider.addUserFb(usuario).then(function (events) {
                    if (events['insertId'] > 0) {
                        _this.apiProvider.verificarFBLog({ userId: authResponse.userID })
                            .then(function (data) {
                            console.log(data);
                            if (data['data'].length > 0) {
                                _this.storage.get('pushKeyBY').then(function (value) {
                                    if (value) {
                                        console.log(value);
                                        var pushState = {
                                            pushK: value,
                                            device: device.platform,
                                            deviceId: device.uuid,
                                            login: Date.now(),
                                            user: data['data'][0].idCliente
                                        };
                                        console.log(pushState);
                                        _this.apiProvider.addPush(pushState).then(function (data) {
                                            console.log(data);
                                        });
                                    }
                                    //value;
                                });
                                _this.storage.set("usr_tok_by", data['data'][0]);
                                _this.userDataProfile = data['data'][0];
                                _this.menuActivo = true;
                                _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                    else {
                        _this.apiProvider.verificarFBLog({ userId: authResponse.userID })
                            .then(function (data) {
                            console.log(data);
                            if (data['data'].length > 0) {
                                _this.storage.get('pushKeyBY').then(function (value) {
                                    if (value) {
                                        console.log(value);
                                        var pushState = {
                                            pushK: value,
                                            device: device.platform,
                                            deviceId: device.uuid,
                                            login: Date.now(),
                                            user: data['data'][0].idCliente
                                        };
                                        console.log(pushState);
                                        _this.apiProvider.addPush(pushState).then(function (data) {
                                            console.log(data);
                                        });
                                    }
                                    //value;
                                });
                                _this.storage.set("usr_tok_by", data['data'][0]);
                                _this.userDataProfile = data['data'][0];
                                _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                                _this.menuActivo = true;
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                });
            }, function (fail) {
                // Fail get profile info
                console.log('profile info fail', fail);
            });
        };
        this.addUserFb = function (data) {
            _this.getFacebookProfileInfo(data)
                .then(function (profileInfo) {
                // For the purpose of this example I will store user data on local storage
                var usuario = {
                    fbId: profileInfo['id'],
                    nombre: profileInfo['name'],
                    email: profileInfo['email'],
                    imagenFB: "http://graph.facebook.com/" + profileInfo['id'] + "/picture?type=large"
                };
                _this.apiProvider.addUserFb(usuario).then(function (events) {
                    if (events['insertId'] > 0) {
                        _this.apiProvider.verificarFBLog({ userId: profileInfo['id'] })
                            .then(function (data) {
                            console.log(data);
                            if (data['data'].length > 0) {
                                console.log('addUserFbinsertplus0');
                                _this.storage.set("usr_tok_by", data['data'][0]);
                                _this.userDataProfile = data['data'][0];
                                _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                                _this.menuActivo = true;
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                    else {
                        _this.apiProvider.verificarFBLog({ userId: profileInfo['id'] })
                            .then(function (data) {
                            console.log(data);
                            if (data['data'].length > 0) {
                                console.log('addUserFbinsertmenos0');
                                _this.storage.set("usr_tok_by", data['data'][0]);
                                _this.userDataProfile = data['data'][0];
                                _this.menuActivo = true;
                                _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                });
            });
        };
        this.initializeApp();
        this.presentLoading();
        this.loading2 = this.loadingCtrl.create({ content: "Ingresando" });
        this.events.subscribe('userCreated', function (user) {
            setTimeout(function () {
                _this.zone.run(function () {
                    _this.userDataProfile = user;
                    _this.menuActivo = true;
                    _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                });
            }, 500);
        });
        this.events.subscribe('loginRemoto', function (data) {
            setTimeout(function () {
                data.username = data.email;
                console.log(data);
                _this.doLogin(data);
            }, 100);
        });
        this.events.subscribe('userLogout', function () {
            _this.userDataProfile = false;
            _this.storage.set("usr_tok_by", false);
            _this.menuActivo = false;
            _this.nav.setRoot('InicioPage');
            //console.log(user);
        });
        this.events.subscribe('userCH', function () {
            setTimeout(function () {
                _this.apiProvider.verificarLogin()
                    .then(function (data) {
                    if (data) {
                        _this.zone.run(function () {
                            //setTimeout(() => { 
                            _this.userDataProfile = data;
                            _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                            console.log(_this.porcenBarra);
                            _this.menuActivo = true;
                            //  },0) 
                        });
                        //this.cdr.detectChanges();
                    }
                    else {
                        _this.menuActivo = false;
                    }
                });
            }, 500);
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */] }
        ];
        this.authForm = formBuilder.group({
            // username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])]
        });
    }
    MyApp.prototype.openDerechos = function () {
        window.open("https://www.yourbeauty.com.pa/terminos/", '_system', 'location=yes');
    };
    MyApp.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    MyApp.prototype.presentAlert2 = function (mensaje) {
        var alert = this.alertCtrl.create({
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje)
        });
        var audio = new Audio('/assets/sounds/earn_points.mp3');
        audio.play();
        alert.present();
    };
    /*
    goAnimacion2 = (puntosV,totalV,puntosActual) => {
    console.log(puntosV,totalV,puntosActual);
        var puntos = puntosV;
        var totall=totalV;
        var expUserM = puntosActual;
    
        var tiempo = 3000/(puntos/1);
        console.log(tiempo);
    
    
    
          this.presentAlert2(`
          <div class="meter">
          <span style="width:`+((((puntos+expUserM)%1500)*100)/totall)+`%;"><span class="progress"></span></span>
          </div>
    
    <div class=" itemCa">
     
    </div>
    
    
    <div class="floating itemFlo">
      + `+(puntos%1500)+` exp
    </div>
    
          <div class="leyendaAlert">
    
          <img  style='display: flex;' src="assets/imgs/complete.png">
    
          <span style='display: flex;'>
          Has compartido el Yourbeauty con exito, has ganado `+puntos+` de experiencia
          </span>
    
          </div>`);
    
    
        let interval = setInterval(()=>{
    
      puntos-=1;
      expUserM = ((expUserM+1)%1500);
      console.log(expUserM);
      //var stringEnv = expUserM % 1500;
    
      this.setLoadingText(expUserM.toString(),totall.toString());
    
      if(puntos <= 0) clearInterval(interval);
    },tiempo)
    
    
    
    }
    */
    MyApp.prototype.registrarDevice = function (data) {
        console.log('regsustr');
        console.log(data);
        this.storage.set("pushKeyBY", data.registrationId);
    };
    MyApp.prototype.doLogin = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Verificando Credenciales..." });
        loading.present();
        this.apiProvider.doLoginApi(data)
            .then(function (data) {
            console.log(data);
            if (data['data'][0] && (data['data'][0].idCliente > 0)) {
                if (data['data'][0].estado == 0) {
                    console.log(data);
                    //this.presentAlert('Activa tu cuenta','Debes verificar tu correo');
                    _this.menuCtrl.close();
                    _this.nav.push('VerificacionPage', data['data'][0]);
                }
                else {
                    console.log(data);
                    _this.storage.get('pushKeyBY').then(function (value) {
                        if (value) {
                            console.log(value);
                            var pushState = {
                                pushK: value,
                                device: device.platform,
                                deviceId: device.uuid,
                                login: Date.now(),
                                user: data['data'][0].idCliente
                            };
                            console.log(pushState);
                            _this.apiProvider.addPush(pushState).then(function (data) {
                                console.log(data);
                            });
                        }
                        //value;
                    });
                    _this.storage.set("usr_tok_by", data['data'][0]);
                    _this.events.publish('userCreated', data['data'][0]);
                    _this.events.publish('loginOK');
                    _this.menuActivo = true;
                    //this.closeModal();
                }
                loading.dismissAll();
            }
            else {
                loading.dismissAll();
                _this.presentAlert('Ups!', 'Credenciales incorrectas');
            }
        });
    };
    MyApp.prototype.onSubmit = function (data) {
        console.log(data);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //navigator.splashscreen.hide();
            //Keyboard.hideFormAccessoryBar(true);
            //navigator.splashscreen.hide();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (window.MobileAccessibility) {
                window.MobileAccessibility.usePreferredTextZoom(false);
            }
            _this.platform.registerBackButtonAction(function () {
                console.log('donothing');
            });
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                console.log(data);
                if (data) {
                    _this.userDataProfile = data;
                    _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                    console.log(_this.porcenBarra);
                    _this.menuActivo = true;
                }
                else {
                    _this.menuActivo = false;
                }
            });
            /*
             //BORRAR ESTAS 3 LINEAS
       
             this.menuActivo = false;
            this.storage.set('introShownBY', false);
            this.loader.dismiss();
             // init demo verification
       */
            _this.storage.get('introShownBY').then(function (result) {
                console.log(result);
                if (result) {
                    _this.rootPage = 'InicioPage';
                    console.log('d3');
                }
                else {
                    _this.rootPage = 'DemoPage';
                    _this.storage.set('introShownBY', true);
                    console.log('5efd');
                }
                _this.loader.dismiss();
            });
            // if(this.platform.is('android') || this.platform.is('ios')){
            //if(this.platform.is('android') || this.platform.is('ios')){
            if (true) {
                console.log('amhere1');
                //PUSH FUNCIONANDO
                var push = window.PushNotification.init({
                    "android": {
                        "senderID": "187646798187"
                    },
                    "ios": {
                        "alert": "true",
                        "badge": "true",
                        "sound": "true"
                    },
                    "windows": {}
                });
                push.on('registration', function (data) { return _this.registrarDevice(data); });
                push.on('notification', function (data) {
                    if (data.additionalData.tipoNoti == "2" || data.additionalData.tipoNoti == 2) {
                        _this.nav.setRoot('InicioPage');
                        var ga = Number(data.additionalData.puntosGanados) * 1;
                        var ge = Number(data.additionalData.totalExc) * 1;
                        var gi = Number(data.additionalData.puntosActual) * 1;
                        var idCC = Number(data.additionalData.idCC);
                        if (idCC > 0) {
                            var profileModal = _this.modalCtrl.create('CongratsPage', { 'idCuponCliente': idCC }, {
                                enterAnimation: 'modal-scale-up-enter',
                                leaveAnimation: 'modal-scale-up-leave'
                            });
                            profileModal.present();
                        }
                        else {
                            //this.goAnimacion2(ga,ge,gi);
                        }
                        _this.nav.push('OpinionesPage');
                    }
                    if (data.additionalData.tipoNoti == "1" || data.additionalData.tipoNoti == 1) {
                        var id = Number(data.additionalData.idCita);
                        _this.nav.push('DetalleReservaPage', { idCita: id });
                        _this.presentAlert(data.title, data.message);
                    }
                    if (data.additionalData.tipoNoti == "3" || data.additionalData.tipoNoti == 3) {
                        var id = Number(data.additionalData.idCupon);
                        _this.nav.push('CuponesPage');
                        _this.presentAlert(data.title, data.message);
                    }
                    console.log(data);
                });
                push.on('error', function (e) {
                    console.log(e.message);
                    console.log(e);
                });
            }
            //End push 
        });
        /*
         if( window.plugins && window.plugins.NativeAudio ) {
         
         // Preload audio resources
         window.plugins.NativeAudio.preloadComplex( 'bepapp', 'assets/bepapp.mp3', 1, 1, 0, function(msg){
         }, function(msg){
             console.log( 'error: ' + msg );
         });
        
     
      
        window.plugins.NativeAudio.preloadSimple( 'bepapp', 'assets/bepapp.mp3', function(msg){
        console.log('audio:'+msg);
         }, function(msg){
             console.log( 'error: ' + msg );
         });
     
     
         }
     
      */
    };
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Iniciando"
        });
        this.loader.present();
    };
    MyApp.prototype.getUDPE = function (valueExp) {
        var valExp = parseInt(valueExp) || 0;
        return valExp % 1500;
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot('InicioPage');
    };
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create('LoginPage');
        profileModal.present();
    };
    MyApp.prototype.presentProfileModal2 = function () {
        this.nav.push('LoginPage');
    };
    MyApp.prototype.registroNegocio = function () {
        //  let profileModal = this.modalCtrl.create('NegocioregistroPage');
        //profileModal.present();
        //https://www.yourbeauty.com.pa/terminos/ 
        //this.nav.push('NegocioregistroPage');
        window.open("https://www.yourbeauty.com.pa/contacto-negocios/", '_system', 'location=yes');
    };
    MyApp.prototype.compartirApp = function () {
        // not supported on some apps (Facebook, Instagram)
        var _this = this;
        var options = {
            message: 'Yourbeauty. Reserva belleza y bienestar en un sólo click.',
            subject: 'Yourbeauty',
            url: 'https://www.yourbeauty.com.pa/',
            chooserTitle: 'Selecciona un app'
        };
        window.plugins.socialsharing.shareWithOptions(options, function (result) {
            console.log("Share completed? ");
            console.log(result);
            var loading = _this.loadingCtrl.create();
            loading.present();
            _this.apiProvider.verificarPremioUs({ idCliente: _this.userDataProfile.idCliente })
                .then(function (data) {
                console.log(data);
                loading.dismiss();
                /* if(data.compartidoNuevo > 0){ */
                _this.goAnimacion2(data['puntosGanados'], data['dataUser'][0].appexp, _this.userDataProfile.exp);
                _this.events.publish('userCreated', data['dataUser'][0]);
                /* }
                else{
                this.presentAlert('Compartido','Gracias por compartir nuestra app!');
                } */
            }, function (err) {
                loading.dismiss();
            });
        }, function (msg) {
            console.log("Sharing failed with message: " + msg);
        });
    };
    MyApp.prototype.envioOK = function () {
        var alert = this.alertCtrl.create({
            title: 'Completado',
            subTitle: 'Te hemos enviado la contraseña nueva a tu correo',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    MyApp.prototype.recupeCon = function () {
        this.nav.push('RecuperarPage');
    };
    /*
      recupeCon() {
      let alert = this.alertCtrl.create({
        title: 'Recuperar Contraseña',
        inputs: [
          {
            name: 'email',
            placeholder: 'Correo Electronico'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Recuperar',
            handler: data => {
              if (data.email) {
               
                // logged in!
                this.envioOK();
              } else {
                // invalid login
                console.log('mensaje vaciui');
                return false;
              }
            }
          }
        ]
      });
      alert.present();
    }
    */
    MyApp.prototype.openCentroPage = function () {
        // this.nav.setRoot('PerfilCentroPage');
        this.nav.push('PerfilCentroPage');
    };
    MyApp.prototype.salirApp = function (nombre) {
        nombre == "Salir" ? this.menuActivo = false : this.nav.setRoot('InicioPage');
    };
    MyApp.prototype.getPorcentaje = function () {
        var enviar = ((900) / (this.userDataProfile.completadas * 100)) + '%';
        console.log(enviar);
        return enviar;
    };
    MyApp.prototype.facebookLogin = function () {
        //this.loading2.present();
        var _this = this;
        //faceLogin
        //this.menuActivo = true;
        facebookConnectPlugin.getLoginStatus(function (success) {
            console.log('facebook status');
            console.log(success);
            if (success.status === 'connected') {
                _this.apiProvider.verificarFBLog({ userId: success.authResponse.userID })
                    .then(function (data) {
                    console.log(data);
                    if (data['data'].length > 0) {
                        _this.storage.get('pushKeyBY').then(function (value) {
                            if (value) {
                                console.log(value);
                                var pushState = {
                                    pushK: value,
                                    device: device.platform,
                                    deviceId: device.uuid,
                                    login: Date.now(),
                                    user: data['data'][0].idCliente
                                };
                                console.log(pushState);
                                _this.apiProvider.addPush(pushState).then(function (data) {
                                    console.log(data);
                                });
                            }
                            //value;
                        });
                        console.log('mas0len');
                        _this.storage.set("usr_tok_by", data['data'][0]);
                        _this.userDataProfile = data['data'][0];
                        _this.menuActivo = true;
                        _this.porcenBarra = (((_this.userDataProfile.exp % 1500) / (_this.userDataProfile.appexp)) * 100) + '%';
                        _this.loading2.dismissAll();
                    }
                    else {
                        console.log('menos0len');
                        _this.addUserFb(success.authResponse);
                        console.log('Ha ocurrido un error');
                    }
                });
            }
            else {
                console.log('getLoginStatus', success.status);
                facebookConnectPlugin.login(['email', 'public_profile'], _this.fbLoginSuccess, _this.fbLoginError);
            }
        });
    };
    MyApp.prototype.fbLoginError = function (error) {
        console.log('fbLoginEdrror', error);
        //mensajeAlerta(1, 'Ha ocurrido un error');
        //$ionicLoading.hide();
    };
    ;
    MyApp.prototype.goPagina = function (pagina) {
        console.log(pagina);
        if ('logout' == pagina) {
            this.apiProvider.cerrarS({ idCliente: this.userDataProfile.idCliente, device: device ? device.uuid : '' })
                .then(function (data) {
                console.log(data);
            });
            this.events.publish('userLogout');
            this.events.publish('loginOK');
            facebookConnectPlugin.logout(function (res) {
                //  this.events.publish('userLogout');
            }, function (e) {
                console.log('Error logout from Facebook', e);
                // this.events.publish('userLogout');
            });
            //cerrarS
        }
        else {
            if (pagina == 'OfertasPage' || pagina == 'PaquetesPage') {
                this.nav.push(pagina);
            }
            else {
                this.nav.setRoot(pagina);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], MyApp.prototype, "slider", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\app\app.html"*/'<ion-menu [content]="content" type=\'overlay\'>\n<!--   <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  <ion-content style=\'    background-color: #fafafa;\'>\n\n  <div *ngIf=\'!menuActivo\'>\n  <div>\n    <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n    <img src="assets/imgs/Facebook.png" style="\n    vertical-align: middle;\n    margin-right: 10px;\n    ">\n    <img src="assets/imgs/Sep.png" style="\n    vertical-align: middle;\n    padding-top:  10px;\n    padding-bottom: 10px;\n    ">\n    <span (click)=\'facebookLogin()\' style="\n    ">Continuar con Facebook</span>\n    </div>\n\n<div style="\n    margin: 0px 17px;\n    text-align: center;\n    /* height: 300px; */\n">\n         <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n"><span style="\n    display: inline-block;\n    margin: 0px 10px;\n">OR</span> <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n">\n    </div>\n\n    <div style="\n    margin: 0px 17px;">\n\n    <form [formGroup]="authForm" (ngSubmit)="doLogin(authForm.value)">\n\n              <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Email\' class=\'inputT\' autocomplete=\'off\' formControlName="username" type="text"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>        \n        <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n            <p>Sorry, minimum username length is 8!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n            <p>Sorry, maximum username length is 30!</p>\n        </ion-item>\n  \n                   <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-lock" md="md-lock" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Contraseña\' class=\'inputT\'  autocomplete=\'off\' formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>                \n  \n        <button ion-button full color="verdeApp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit">Iniciar sesión</button>        \n    </form>\n\n\n    </div>\n\n  </div>\n\n\n    <ion-list style=\'margin-top:30px\'>\n\n<!--       <button style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item *ngFor="let p of [\'Olvidé mi contraseña\']">\n       {{p}}\n\n      \n\n      </button>\n -->\n      <button (click)=\'recupeCon()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       Olvidé mi contraseña\n      \n\n      </button>\n\n\n\n      <button  (click)=\'registroNegocio()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       Yourbeauty para negocios\n      \n\n      </button>\n\n\n      <button (click)=\'presentProfileModal2()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       Regístrate en Yourbeauty\n      \n\n      </button>\n\n<!--       <button (click)=\'compartirApp()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       Compartir Yourbeauty\n      \n\n      </button>\n -->\n\n\n    </ion-list>\n<div style="width:100%; height:40px"></div>\n\n\n    <div style="padding-left: 16px;\n    padding-right: 16px;\n     padding-bottom: 10px;\n    color: darkgray;\n    font-size: 15px;\n    background: #fafafa;\n    z-index: 10;" (click)=\'openDerechos()\'>Al registrarte e iniciar sesión en Yourbeauty aceptas nuestros <a>términos y condiciones de servicio.</a></div>\n\n    </div>\n\n    <div *ngIf=\'menuActivo\'>\n        <ion-item style=\'margin-top: 0px;\' class=\'fixProfileMargin\' menuClose (click)=\'goPagina("CuentaPage")\' >\n          <ion-avatar item-start>\n\n          <img [hidden]=\'userDataProfile?.imagenFb && !userDataProfile?.idFoto\'  style=\'width:75px; height: 75px;object-fit: cover;\n    object-position: center;\'  src="http://50.116.17.150:3000/{{userDataProfile?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';">\n\n         <img *ngIf="userDataProfile?.imagenFb && !userDataProfile?.idFoto"   style=\'width:75px; height: 75px;        object-fit: cover;\n    object-position: center;\' src="{{userDataProfile?.imagenFb}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" />\n\n\n          </ion-avatar>\n          <h2 style="margin-bottom: 23px;">{{userDataProfile?.nombre || \'Desconocido\'}}</h2>\n          <div class="barraContainer">\n            <div class="barraProgress" [ngStyle]="{\'width\': porcenBarra}"  >\n              <span>{{getUDPE(userDataProfile?.exp) || 0}}/{{userDataProfile?.appexp || 0}}</span>              \n            </div>\n          </div>\n        </ion-item>\n\n          <ion-list>\n          <button (click)=\'goPagina(p.pagina)\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 1px rgb(226, 226, 226) !important; color:#3d3f4a" menuClose ion-item *ngFor="let p of [{nombre:\'Servicios\', img:\'listVerde.png\', pagina: \'InicioPage\'},{nombre:\'Reservaciones\', img:\'reservation.png\', pagina: \'MisReservasPage\'},\n          {nombre:\'Favoritos\', img:\'corazonVerde.png\', pagina: \'FavoritosPage\'},\n          {nombre:\'Opiniones\', img:\'opiniones.png\', pagina: \'OpinionesPage\'},\n          {nombre:\'Cupones / Regalos\', img:\'cupones.png\',  pagina: \'CuponesPage\'}\n          ]" >\n\n          {{p.nombre}}\n\n          <img style=\'float: right;\' src="assets/imgs/{{p.img}}">\n\n          </button>\n\n\n\n\n          </ion-list>\n\n\n  <!--         <ion-list style=\'    margin-top: 0px !important;\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    margin-bottom: 0px !important;\'> -->\n\n\n    <ion-list style=\'    margin-top: 68px !important;\n    position: relative;\n    width: 100%;\n    margin-bottom: 0px !important;\'>\n\n        <button   (click)=\'compartirApp()\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 1px rgb(226, 226, 226) !important; color:#3d3f4a" menuClose ion-item  >\n\n          Compartir Yourbeauty\n\n          <ion-icon  style=\'    float: right;\n    margin-right: 4px;\n    font-size: 22px;\n    color: #0079f4;\' ios="md-share" md="md-share"></ion-icon>\n\n          </button>\n\n          <button  (click)=\'registroNegocio()\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 1px rgb(226, 226, 226) !important; color:#3d3f4a" menuClose ion-item >\n              Yourbeauty para negocios\n             \n              <img style=\'float: right;\' src="assets/imgs/ayuda.png">\n             </button>\n\n\n          <button   (click)=\'goPagina(p.pagina)\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 1px rgb(226, 226, 226) !important; color:#3d3f4a" menuClose ion-item *ngFor="let p of [\n          {nombre:\'Perfil\', img:\'perfil.png\', pagina: \'ProfilePage\'}]" >\n\n          {{p.nombre}}\n\n          <img *ngIf="p.img" style=\'float: right;\' src="assets/imgs/{{p.img}}">\n\n          </button>\n\n\n\n\n          </ion-list>\n\n\n\n\n\n    </div>\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Work\beautyapp\yourBeautyAPP\beYou\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalScaleEnterTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
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

var ModalScaleEnterTransition = (function (_super) {
    __extends(ModalScaleEnterTransition, _super);
    function ModalScaleEnterTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleEnterTransition.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Animation"](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(0)', 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(0)', 'scale(1.0)');
        wrapper.fromTo('opacity', 1, 1);
        this
            .element(this.enteringView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleEnterTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["PageTransition"]));

//# sourceMappingURL=on-enter-scale.transition.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalScaleLeaveTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
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

var ModalScaleLeaveTransition = (function (_super) {
    __extends(ModalScaleLeaveTransition, _super);
    function ModalScaleLeaveTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleLeaveTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Animation"](this.plt, ele.querySelector('.modal-wrapper'));
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Animation"](this.plt, ele.querySelector('.wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(1.0)', 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(1.0)', 'scale(0)');
        wrapper.fromTo('opacity', 1, 1);
        contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(contentWrapper)
            .add(wrapper);
    };
    return ModalScaleLeaveTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["PageTransition"]));

//# sourceMappingURL=on-leave-scale.transition.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map