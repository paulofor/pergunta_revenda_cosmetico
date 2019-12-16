webpackJsonp([12],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assinatura; });
var Assinatura = {
    "plan": "1C6706EE27273298846D2FAC6EA0FEEE ",
    "sender": {
        "name": "",
        "email": "",
        "hash": "",
        "phone": {
            "areaCode": "",
            "number": ""
        },
        "address": {
            "street": "",
            "number": "",
            "complement": "",
            "district": "",
            "city": "",
            "state": "",
            "country": "BRA",
            "postalCode": ""
        },
        "documents": [
            {
                "type": "CPF",
                "value": ""
            }
        ]
    },
    "paymentMethod": {
        "type": "CREDITCARD",
        "creditCard": {
            "token": "",
            "holder": {
                "name": "",
                "birthDate": "",
                "phone": {
                    "areaCode": "",
                    "number": ""
                },
                "documents": [
                    {
                        "type": "CPF",
                        "value": ""
                    }
                ]
            }
        },
    }
};
//# sourceMappingURL=assinatura.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagSeguroApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7____ = __webpack_require__(336);
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
/* tslint:disable */








/**
 * Api services for the `PagSeguro` model.
 */
var PagSeguroApi = /** @class */ (function (_super) {
    __extends(PagSeguroApi, _super);
    function PagSeguroApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id PagSeguro id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.IniciaSessao = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/iniciaSessao";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `senderHash` ? `{string}` -
     *
     *  - `creditCardToken` ? `{string}` -
     *
     *  - `installmentQuantity` ? `{string}` -
     *
     *  - `installmentValue` ? `{string}` -
     *
     *  - `noInterestInstallmentQuantity` ? `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.CheckoutCartao = function (senderHash, creditCardToken, installmentQuantity, installmentValue, noInterestInstallmentQuantity, customHeaders) {
        if (senderHash === void 0) { senderHash = {}; }
        if (creditCardToken === void 0) { creditCardToken = {}; }
        if (installmentQuantity === void 0) { installmentQuantity = {}; }
        if (installmentValue === void 0) { installmentValue = {}; }
        if (noInterestInstallmentQuantity === void 0) { noInterestInstallmentQuantity = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/checkoutCartao";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof senderHash !== 'undefined' && senderHash !== null)
            _urlParams.senderHash = senderHash;
        if (typeof creditCardToken !== 'undefined' && creditCardToken !== null)
            _urlParams.creditCardToken = creditCardToken;
        if (typeof installmentQuantity !== 'undefined' && installmentQuantity !== null)
            _urlParams.installmentQuantity = installmentQuantity;
        if (typeof installmentValue !== 'undefined' && installmentValue !== null)
            _urlParams.installmentValue = installmentValue;
        if (typeof noInterestInstallmentQuantity !== 'undefined' && noInterestInstallmentQuantity !== null)
            _urlParams.noInterestInstallmentQuantity = noInterestInstallmentQuantity;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `idSessao` ? `{string}` -
     */
    PagSeguroApi.prototype.ObtemSessao = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/obtemSessao";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `xml` ? `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.PagamentoCaixaBranca = function (xml, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/pagamentoCaixaBranca";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof xml !== 'undefined' && xml !== null)
            _urlParams.xml = xml;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} creditCardToken
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.AderePlano = function (creditCardToken, customHeaders) {
        if (creditCardToken === void 0) { creditCardToken = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/aderePlano";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof creditCardToken !== 'undefined' && creditCardToken !== null)
            _urlParams.creditCardToken = creditCardToken;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PagSeguroApi.prototype.CriaPlano = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/criaPlano";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} cliente
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.VerificaPagamento = function (cliente, customHeaders) {
        if (cliente === void 0) { cliente = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/verificaPagamento";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof cliente !== 'undefined' && cliente !== null)
            _urlParams.cliente = cliente;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `dadoCliente` ? `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PagSeguro` object.)
     * </em>
     */
    PagSeguroApi.prototype.AderePlanoTreino = function (dadoCliente, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_3__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PagSeguros/aderePlanoTreino";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof dadoCliente !== 'undefined' && dadoCliente !== null)
            _urlParams.dadoCliente = dadoCliente;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `PagSeguro`.
     */
    PagSeguroApi.prototype.getModelName = function () {
        return "PagSeguro";
    };
    PagSeguroApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7____["d" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_7____["d" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_4__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_5__core_error_service__["a" /* ErrorHandler */]])
    ], PagSeguroApi);
    return PagSeguroApi;
}(__WEBPACK_IMPORTED_MODULE_2__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=PagSeguro.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKStorage; });
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
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));

//# sourceMappingURL=storage.swaps.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispositivoUsuario; });
var DispositivoUsuario = /** @class */ (function () {
    function DispositivoUsuario(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `DispositivoUsuario`.
     */
    DispositivoUsuario.getModelName = function () {
        return "DispositivoUsuario";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of DispositivoUsuario for dynamic purposes.
    **/
    DispositivoUsuario.factory = function (data) {
        return new DispositivoUsuario(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    DispositivoUsuario.getModelDefinition = function () {
        return {
            name: 'DispositivoUsuario',
            plural: 'DispositivoUsuarios',
            path: 'DispositivoUsuarios',
            idName: 'id',
            properties: {
                "tokenFcm": {
                    name: 'tokenFcm',
                    type: 'string'
                },
                "dataHoraCriacao": {
                    name: 'dataHoraCriacao',
                    type: 'Date'
                },
                "dataUltimoAcesso": {
                    name: 'dataUltimoAcesso',
                    type: 'Date'
                },
                "dataAlteracao": {
                    name: 'dataAlteracao',
                    type: 'Date'
                },
                "dataChamada": {
                    name: 'dataChamada',
                    type: 'Date'
                },
                "temMudanca": {
                    name: 'temMudanca',
                    type: 'number'
                },
                "ativo": {
                    name: 'ativo',
                    type: 'number'
                },
                "codigoDispositivo": {
                    name: 'codigoDispositivo',
                    type: 'string'
                },
                "microSd": {
                    name: 'microSd',
                    type: 'number'
                },
                "versaoSo": {
                    name: 'versaoSo',
                    type: 'string'
                },
                "serial": {
                    name: 'serial',
                    type: 'string'
                },
                "uuid": {
                    name: 'uuid',
                    type: 'string'
                },
                "fabricante": {
                    name: 'fabricante',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "campanhaAdsId": {
                    name: 'campanhaAdsId',
                    type: 'number'
                },
                "versaoAppId": {
                    name: 'versaoAppId',
                    type: 'number'
                },
                "usuarioProdutoId": {
                    name: 'usuarioProdutoId',
                    type: 'number'
                },
            },
            relations: {
                usuarioProduto: {
                    name: 'usuarioProduto',
                    type: 'UsuarioProduto',
                    model: 'UsuarioProduto',
                    relationType: 'belongsTo',
                    keyFrom: 'usuarioProdutoId',
                    keyTo: 'id'
                },
                notificacaoApps: {
                    name: 'notificacaoApps',
                    type: 'NotificacaoApp[]',
                    model: 'NotificacaoApp',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'dispositivoUsuarioId'
                },
            }
        };
    };
    return DispositivoUsuario;
}());

//# sourceMappingURL=DispositivoUsuario.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitanteApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */









/**
 * Api services for the `Visitante` model.
 */
var VisitanteApi = /** @class */ (function (_super) {
    __extends(VisitanteApi, _super);
    function VisitanteApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    VisitanteApi_1 = VisitanteApi;
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Visitante` object.)
     * </em>
     */
    VisitanteApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = VisitanteApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Visitantes";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Visitante id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Visitante` object.)
     * </em>
     */
    VisitanteApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = VisitanteApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Visitantes/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * retorna o proximo cookie
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `codigoCookie` ? `{string}` - proximo cookie
     */
    VisitanteApi.prototype.proximoCookie = function (customHeaders) {
        var _method = "GET";
        var _url = VisitanteApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Visitantes/proximoCookie";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    VisitanteApi.prototype.criaItem = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            VisitanteApi_1.pathValidador,
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    VisitanteApi.prototype.atualizaItem = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            VisitanteApi_1.pathValidador,
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Visitante`.
     */
    VisitanteApi.prototype.getModelName = function () {
        return "Visitante";
    };
    VisitanteApi.pathValidador = '//validacao.kinghost.net:21040';
    VisitanteApi = VisitanteApi_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], VisitanteApi);
    return VisitanteApi;
    var VisitanteApi_1;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Visitante.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispositivoUsuarioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */









/**
 * Api services for the `DispositivoUsuario` model.
 */
var DispositivoUsuarioApi = /** @class */ (function (_super) {
    __extends(DispositivoUsuarioApi, _super);
    function DispositivoUsuarioApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    DispositivoUsuarioApi_1 = DispositivoUsuarioApi;
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `DispositivoUsuario` object.)
     * </em>
     */
    DispositivoUsuarioApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = DispositivoUsuarioApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DispositivoUsuarios";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id DispositivoUsuario id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `DispositivoUsuario` object.)
     * </em>
     */
    DispositivoUsuarioApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = DispositivoUsuarioApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DispositivoUsuarios/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * retorna o proximo cookie
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `codigoCookie` ? `{string}` - proximo cookie
     */
    DispositivoUsuarioApi.prototype.proximoCookie = function (customHeaders) {
        var _method = "GET";
        var _url = DispositivoUsuarioApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DispositivoUsuarios/proximoCookie";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    DispositivoUsuarioApi.prototype.criaItem = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            DispositivoUsuarioApi_1.pathValidador,
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    DispositivoUsuarioApi.prototype.findOneItem = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            DispositivoUsuarioApi_1.pathValidador,
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    DispositivoUsuarioApi.prototype.atualizaItem = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            DispositivoUsuarioApi_1.pathValidador,
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    DispositivoUsuarioApi.prototype.CriaComUsuario = function (dispositivo, customHeaders) {
        var _method = "POST";
        var _url = DispositivoUsuarioApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DispositivoUsuarios/criaComUsuario";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof dispositivo !== 'undefined' && dispositivo !== null)
            _urlParams.dispositivo = dispositivo;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    DispositivoUsuarioApi.prototype.AtualizaToken = function (chaveUsuario, token, customHeaders) {
        if (chaveUsuario === void 0) { chaveUsuario = {}; }
        if (token === void 0) { token = {}; }
        var _method = "POST";
        var _url = DispositivoUsuarioApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DispositivoUsuarios/atualizaToken";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof chaveUsuario !== 'undefined' && chaveUsuario !== null)
            _urlParams.chaveUsuario = chaveUsuario;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `DispositivoUsuario`.
     */
    DispositivoUsuarioApi.prototype.getModelName = function () {
        return "DispositivoUsuario";
    };
    DispositivoUsuarioApi.pathValidador = '//validacao.kinghost.net:21040';
    DispositivoUsuarioApi = DispositivoUsuarioApi_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], DispositivoUsuarioApi);
    return DispositivoUsuarioApi;
    var DispositivoUsuarioApi_1;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=DispositivoUsuario.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandosZeroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the ComandosZeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComandosZeroPage = /** @class */ (function () {
    function ComandosZeroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComandosZeroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComandosZeroPage');
    };
    ComandosZeroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comandos-zero',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/comandos-zero/comandos-zero.html"*/'<!--\n  Generated template for the ComandosZeroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ComandosZero</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/comandos-zero/comandos-zero.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ComandosZeroPage);
    return ComandosZeroPage;
}());

//# sourceMappingURL=comandos-zero.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagSeguroAssinaturaDadoClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pag_seguro_assinatura_dado_cartao_pag_seguro_assinatura_dado_cartao__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__ = __webpack_require__(61);
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
 * Generated class for the PagSeguroAssinaturaDadoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagSeguroAssinaturaDadoClientePage = /** @class */ (function () {
    function PagSeguroAssinaturaDadoClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.address = {
            "street": "",
            "number": "",
            "complement": "",
            "district": "",
            "city": "",
            "state": "",
            "country": "BRA",
            "postalCode": ""
        };
        console.log('Assinatura:', __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].sender.address.street);
    }
    PagSeguroAssinaturaDadoClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagSeguroAssinaturaDadoClientePage');
        this.inicializacao();
    };
    PagSeguroAssinaturaDadoClientePage.prototype.inicializacao = function () {
        this.address = __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].sender.address;
    };
    PagSeguroAssinaturaDadoClientePage.prototype.avancar = function () {
        if (this.validacao()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pag_seguro_assinatura_dado_cartao_pag_seguro_assinatura_dado_cartao__["a" /* PagSeguroAssinaturaDadoCartaoPage */]);
        }
    };
    PagSeguroAssinaturaDadoClientePage.prototype.voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__["a" /* PagSeguroAssinaturaDadoIdentificacaoPage */]);
    };
    PagSeguroAssinaturaDadoClientePage.prototype.preencher = function () {
        this.address.street = 'Rua Antonio Basilio';
        this.address.number = '204';
        this.address.complement = 'apt. 805';
        this.address.district = 'Tijuca';
        this.address.city = 'Rio de Janeiro';
        this.address.state = 'RJ';
        this.address.postalCode = '20511190';
    };
    PagSeguroAssinaturaDadoClientePage.prototype.validacao = function () {
        var saida = true;
        if (!this.address.street) {
            this.erroRua = "Coloque o nome da rua do seu endereço";
            saida = false;
        }
        else {
            this.erroRua = null;
        }
        if (!this.address.number) {
            this.erroNumero = "Coloque o número do seu endereço";
            saida = false;
        }
        else {
            this.erroNumero = null;
        }
        if (!this.address.complement) {
            this.erroComplemento = "Coloque o complemento do seu endereço";
            saida = false;
        }
        else {
            this.erroComplemento = null;
        }
        if (!this.address.district) {
            this.erroBairro = "Coloque o bairro do seu endereço";
            saida = false;
        }
        else {
            this.erroBairro = null;
        }
        if (!this.address.city) {
            this.erroCidade = "Coloque a cidade do seu endereço";
            saida = false;
        }
        else {
            this.erroCidade = null;
        }
        if (!this.address.state) {
            this.erroEstado = "Coloque o estado do seu endereço";
            saida = false;
        }
        else {
            this.erroEstado = null;
        }
        if (!this.address.postalCode) {
            this.erroCep = "Coloque o cep do seu endereço";
            saida = false;
        }
        else {
            this.erroCep = null;
        }
        return saida;
    };
    PagSeguroAssinaturaDadoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pag-seguro-assinatura-dado-cliente',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title (click)="preencher()">Endereço (2 de 3)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-item>\n      <ion-label floating>Rua*</ion-label>\n      <ion-input [(ngModel)]="address.street" name="street"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroRua">\n      <p class="erroMsg">{{erroRua}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Número*</ion-label>\n      <ion-input [(ngModel)]="address.number" name="number"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroNumero">\n      <p class="erroMsg">{{erroNumero}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Complemento</ion-label>\n      <ion-input [(ngModel)]="address.complement" name="complement"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroComplemento">\n      <p class="erroMsg">{{erroComplemento}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Bairro*</ion-label>\n      <ion-input [(ngModel)]="address.district" name="district"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroBairro">\n      <p class="erroMsg">{{erroBairro}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Município*</ion-label>\n      <ion-input [(ngModel)]="address.city" name="city"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroCidade">\n      <p class="erroMsg">{{erroCidade}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Estado*</ion-label>\n      <ion-select  [(ngModel)]="address.state" name="state">  \n        <ion-option value="AC">AC</ion-option>\ \n        <ion-option value="AL">AL</ion-option>\ \n        <ion-option value="AP">AP</ion-option>\ \n        <ion-option value="AM">AM</ion-option>\ \n        <ion-option value="BA">BA</ion-option>\ \n        <ion-option value="CE">CE</ion-option>\ \n        <ion-option value="DF">DF</ion-option>\ \n        <ion-option value="ES">ES</ion-option>\ \n        <ion-option value="GO">GO</ion-option>\ \n        <ion-option value="MA">MA</ion-option>\ \n        <ion-option value="MT">MT</ion-option>\ \n        <ion-option value="MS">MS</ion-option>\ \n        <ion-option value="MG">MG</ion-option>\ \n        <ion-option value="PA">PA</ion-option>\ \n        <ion-option value="PB">PB</ion-option>\ \n        <ion-option value="PR">PR</ion-option>\ \n        <ion-option value="PE">PE</ion-option>\ \n        <ion-option value="PI">PI</ion-option>\ \n        <ion-option value="RJ">RJ</ion-option>\ \n        <ion-option value="RN">RN</ion-option>\ \n        <ion-option value="RS">RS</ion-option>\ \n        <ion-option value="RO">RO</ion-option>\ \n        <ion-option value="RR">RR</ion-option>\ \n        <ion-option value="SC">SC</ion-option>\ \n        <ion-option value="SP">SP</ion-option>\ \n        <ion-option value="SE">SE</ion-option>\ \n        <ion-option value="TO">TO</ion-option>\ \n    </ion-select>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroEstado">\n      <p class="erroMsg">{{erroEstado}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>CEP* (somente números)</ion-label>\n      <ion-input maxlength="8" [(ngModel)]="address.postalCode" name="postalCode"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroCep">\n      <p class="erroMsg">{{erroCep}}</p>\n    </ion-item>\n    <button ion-button (click)="voltar()">Voltar</button>\n    <button ion-button (click)="avancar()">Avançar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PagSeguroAssinaturaDadoClientePage);
    return PagSeguroAssinaturaDadoClientePage;
}());

//# sourceMappingURL=pag-seguro-assinatura-dado-cliente.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagSeguroAssinaturaDadoCartaoPage; });
/* unused harmony export tokenGlobal */
/* unused harmony export hashGlobal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_integracao_PagSeguro__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagSeguroAssinaturaDadoCartaoPage = /** @class */ (function () {
    function PagSeguroAssinaturaDadoCartaoPage(navCtrl, navParams, pagSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pagSrv = pagSrv;
        this.codigoFinal = '';
        this.cartao = {
            "nomeCartao": "",
            "bandeira": "",
            "numero": "",
            "anoExpira": "",
            "mesExpira": "",
            "verificador": ""
        };
        // tratementos do cartao
        this.idSession = '';
        this.codigoHash = '';
        this.tokenCartao = '';
    }
    PagSeguroAssinaturaDadoCartaoPage.prototype.enviar = function () {
        if (this.validacao()) {
            this.obtemTokenCartao();
        }
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TestePagSeguroPage');
        this.pagSrv.ObtemSessao()
            .subscribe(function (resp) {
            console.log('Resp- Sessao:' + JSON.stringify(resp));
            _this.idSession = resp.idSessao;
            _this.obtemMeioPagamento(1.15);
            _this.obtemHashCliente();
        });
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.obtemMeioPagamento = function (valor) {
        PagSeguroDirectPayment.setSessionId(this.idSession);
        PagSeguroDirectPayment.getPaymentMethods({
            amount: valor,
            success: function (response) {
                console.log('Meio pagto:' + JSON.stringify(response));
                this.obtemHashCliente();
            },
            error: function (response) {
                console.log('MeioPgto Falha:' + JSON.stringify(response));
            },
            complete: function (response) {
            }
        });
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.obtemHashCliente = function () {
        PagSeguroDirectPayment.setSessionId(this.idSession);
        console.log('--> Vai buscar o hash');
        PagSeguroDirectPayment.onSenderHashReady(function (response) {
            console.log('onSender-response:' + JSON.stringify(response));
            if (response.status == 'error') {
                console.log('onSender:' + response.message);
                return false;
            }
            console.log('Hash: ', response.senderHash);
            hashGlobal = response.senderHash;
        });
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.obtemTokenCartao = function () {
        //this.escolheBandeira();
        console.log('--> Chamou token card');
        PagSeguroDirectPayment.createCardToken({
            cardNumber: this.cartao.numero,
            brand: this.cartao.bandeira,
            cvv: this.cartao.verificador,
            expirationMonth: this.cartao.mesExpira,
            expirationYear: '20' + this.cartao.anoExpira,
            success: function (response) {
                // Retorna o cartão tokenizado.
                console.log('TokenCard Sucesso:' + JSON.stringify(response.card.token));
                tokenGlobal = response.card.token;
                __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].paymentMethod.creditCard.token = response.card.token;
                console.log('Vai chamar finalizar');
                console.log('Token Global: ', tokenGlobal);
                //this.finalizar();
            },
            error: function (response) {
                console.log('TokenCard Erro:' + JSON.stringify(response));
            },
            complete: function (response) {
                // Callback para todas chamadas.
            }
        });
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.validacao = function () {
        var saida = true;
        console.log('cartao: ', JSON.stringify(this.cartao));
        if (!this.cartao.nomeCartao) {
            this.erroNome = "Coloque o nome impresso em seu cartão";
            saida = false;
        }
        else {
            this.erroNome = null;
        }
        if (!this.cartao.numero) {
            this.erroNumero = "Coloque o número de seu cartão";
            saida = false;
        }
        else {
            this.erroNumero = null;
        }
        if (!this.cartao.mesExpira) {
            this.erroMes = "Coloque o mês de expiração de seu cartão";
            saida = false;
        }
        else {
            this.erroMes = null;
        }
        if (!this.cartao.anoExpira) {
            this.erroAno = "Coloque o ano de expiração de seu cartão";
            saida = false;
        }
        else {
            this.cartao.anoExpira = this.cartao.anoExpira;
            this.erroAno = null;
        }
        if (!this.cartao.verificador) {
            this.erroVerificador = "Coloque o dígito verificador de seu cartão";
            saida = false;
        }
        else {
            this.erroVerificador = null;
        }
        if (!this.bandeiraVisa && !this.bandeiraMaster && !this.bandeiraDinners) {
            this.erroBandeira = "Selecione a bandeira de seu cartão";
            saida = false;
        }
        else {
            this.erroBandeira = null;
            this.escolheBandeira();
        }
        console.log('Saida: ', saida);
        console.log('cartao-saida: ', JSON.stringify(this.cartao));
        return saida;
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.preencher = function () {
        this.cartao.numero = '4230750300477027';
        this.cartao.verificador = '019';
        this.cartao.mesExpira = '01';
        this.cartao.anoExpira = '24';
        //this.cartao.bandeira = 'visa';
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.finalizar = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].paymentMethod.creditCard.holder.phone = __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].sender.phone;
        //Assinatura.paymentMethod.creditCard.token = tokenGlobal;
        //Assinatura.paymentMethod.creditCard.holder.name = Assinatura.sender.name;
        __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].paymentMethod.creditCard.holder.name = this.cartao.nomeCartao;
        __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].paymentMethod.creditCard.holder.documents = __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].sender.documents;
        __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].sender.hash = hashGlobal;
        //Assinatura.paymentMethod.creditCard.holder.birthDate = Assinatura.sender.
        console.log('Entrou em finalizar:', __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */]);
        this.pagSrv.AderePlanoTreino(__WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */])
            .subscribe(function (result) {
            console.log('Result:', result);
            if (result.code)
                _this.codigoFinal = result.code;
            alert('Codigo Final: ' + _this.codigoFinal);
        });
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.alteraMaster = function (valor) {
        if (valor) {
            this.bandeiraDinners = false;
            this.bandeiraVisa = false;
        }
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.alteraVisa = function (valor) {
        if (valor) {
            this.bandeiraDinners = false;
            this.bandeiraMaster = false;
        }
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.alteraDinners = function (valor) {
        if (valor) {
            this.bandeiraMaster = false;
            this.bandeiraVisa = false;
        }
    };
    PagSeguroAssinaturaDadoCartaoPage.prototype.escolheBandeira = function () {
        if (this.bandeiraDinners)
            this.cartao.bandeira = 'DINERS';
        if (this.bandeiraMaster)
            this.cartao.bandeira = 'MASTERCARD';
        if (this.bandeiraVisa)
            this.cartao.bandeira = 'visa';
    };
    PagSeguroAssinaturaDadoCartaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pag-seguro-assinatura-dado-cartao',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao.html"*/'<!--\n  Generated template for the PagSeguroAssinaturaDadoCartaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title (click)="preencher()">Cartão de Crédito (3 de 3)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="enviar()">\n    <ion-item-group>\n      <ion-item>\n        <ion-label>Mastercard</ion-label>\n        <ion-checkbox (ionChange)="alteraMaster(bandeiraMaster)" [(ngModel)]="bandeiraMaster" name="bandeiraMaster">\n        </ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Visa</ion-label>\n        <ion-checkbox (ionChange)="alteraVisa(bandeiraVisa)" [(ngModel)]="bandeiraVisa" name="bandeiraVisa">\n        </ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Dinners</ion-label>\n        <ion-checkbox (ionChange)="alteraDinners(bandeiraDinners)" [(ngModel)]="bandeiraDinners" name="bandeiraDinners">\n        </ion-checkbox>\n      </ion-item>\n    </ion-item-group>\n    <ion-item>\n      <ion-label floating>Nome no Cartão</ion-label>\n      <ion-input [(ngModel)]="cartao.nomeCartao" name="nomeCartao"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroNome">\n      <p class="erroMsg">{{erroNome}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Número</ion-label>\n      <ion-input [(ngModel)]="cartao.numero" name="numero"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroNumero">\n      <p class="erroMsg">{{erroNumero}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Mês de Expiracao</ion-label>\n      <ion-input  maxlength="2" [(ngModel)]="cartao.mesExpira" name="mesExpira"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroMes">\n      <p class="erroMsg">{{erroMes}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ano de Expiracao</ion-label>\n      <ion-input  maxlength="2" [(ngModel)]="cartao.anoExpira" name="anoExpira"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroAno">\n      <p class="erroMsg">{{erroAno}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>CVV</ion-label>\n      <ion-input  maxlength="3" [(ngModel)]="cartao.verificador" name="verificador"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroVerificador">\n      <p class="erroMsg">{{erroVerificador}}</p>\n    </ion-item>\n\n    <button ion-button type="submit" block>Enviar</button>\n  </form>\n\n  <button ion-button block (click)="finalizar()">Finaliza Pô</button>\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_integracao_PagSeguro__["a" /* PagSeguroApi */]])
    ], PagSeguroAssinaturaDadoCartaoPage);
    return PagSeguroAssinaturaDadoCartaoPage;
}());

var tokenGlobal;
var hashGlobal;
//# sourceMappingURL=pag-seguro-assinatura-dado-cartao.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadePrecoAssinaturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servico_acessa_fcm_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lista_oportunidade_assinatura_lista_oportunidade_assinatura_base__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sdk_services_custom_UsuarioProduto__ = __webpack_require__(352);
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








/**
 * Generated class for the ListaOportunidadePrecoAssinaturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaOportunidadePrecoAssinaturaPage = /** @class */ (function (_super) {
    __extends(ListaOportunidadePrecoAssinaturaPage, _super);
    function ListaOportunidadePrecoAssinaturaPage(navCtrl, srv, storage, fcmSrv, usuarioSrv) {
        var _this = _super.call(this, navCtrl, srv, storage, fcmSrv) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        _this.usuarioSrv = usuarioSrv;
        _this.visitanteCorrente = null;
        _this.cookieValue = 'UNKNOWN';
        _this.ID_VERSAOAPP = 999;
        _this.mostra = true;
        _this.naoMostra = false;
        return _this;
    }
    ListaOportunidadePrecoAssinaturaPage.prototype.inicializacao = function () {
        this.obtemDiasGratis();
    };
    ListaOportunidadePrecoAssinaturaPage.prototype.getFiltro = function () {
        return {};
    };
    ListaOportunidadePrecoAssinaturaPage.prototype.top50 = function (oportunidade) {
        return oportunidade.posicaoProduto <= 50;
    };
    ListaOportunidadePrecoAssinaturaPage.prototype.inicioFluxo = function () {
        //this.navCtrl.push(PagSeguroAssinaturaDadoIdentificacaoPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__["a" /* PagSeguroAssinaturaDadoIdentificacaoPage */]);
    };
    ListaOportunidadePrecoAssinaturaPage.prototype.obtemDiasGratis = function () {
        var _this = this;
        //alert('obtemDiasGratis()')
        this.storage.get("chave").then(function (chave) {
            //alert('chaveObtemDiasGratis():' + chave);
            _this.usuarioSrv.PeriodoGratuito(chave)
                .subscribe(function (result) {
                _this.diasGratis = result.dias + ' dias';
            }, function (erro) {
                //alert('Erro-ObtemDias: ' + JSON.stringify(erro));
                _this.diasGratis = '20 dias';
            });
        });
    };
    ListaOportunidadePrecoAssinaturaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-oportunidade-preco-assinatura',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Oportunidades do Dia</ion-title>\n    <ion-title>Período gratuito: {{diasGratis}}</ion-title>\n    <button ion-button outline color="light" (click)="inicioFluxo()">Assinar (4,99 ao mês)</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="!listaItem">\n    <ion-content padding class="spinnerCenter">\n        <ion-spinner name="crescent"></ion-spinner>\n    </ion-content>\n  </ng-container>\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum item encontrado\n      </ion-card-header>\n\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n\n      <ion-card *ngFor="let item of listaItem">\n        <ion-card-content text-wrap>\n          <h2 class="texto-produto" style="word-wrap: normal">{{item.nomeProduto}}</h2>\n          <img src="{{item.imagemProduto}}">\n          <h3 class="texto-preco">Sugestão de venda: R$ {{item.precoSugestao | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco">Preço na loja: R$ {{item.precoVendaAtual | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco" *ngIf="top50(item)">Top 50 - Vendas</h3>\n          <h3 class="texto-loja">Loja: {{item.nomeLojaVirtual}}</h3>\n          <a button href="{{item.urlProduto}}" rounded ion-button>Ir para loja</a>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n  </ng-container>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["e" /* OportunidadeDiaApi */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__servico_acessa_fcm_service__["a" /* AcessaFcmService */], __WEBPACK_IMPORTED_MODULE_7__shared_sdk_services_custom_UsuarioProduto__["a" /* UsuarioProdutoApi */]])
    ], ListaOportunidadePrecoAssinaturaPage);
    return ListaOportunidadePrecoAssinaturaPage;
}(__WEBPACK_IMPORTED_MODULE_6__lista_oportunidade_assinatura_lista_oportunidade_assinatura_base__["a" /* ListaOportunidadeAssinaturaPageBase */]));

//# sourceMappingURL=lista-oportunidade-preco-assinatura.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_base__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_custom_Visitante__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sdk_models_Visitante__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sdk_services_custom_DispositivoUsuario__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servico_acessa_fcm_service__ = __webpack_require__(55);
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











var ListaOportunidadePage = /** @class */ (function (_super) {
    __extends(ListaOportunidadePage, _super);
    function ListaOportunidadePage(navCtrl, srv, cookieService, visitanteSrv, storage, fcm, dispositivoUsuarioSrv, fcmSrv) {
        var _this = _super.call(this, navCtrl, srv, storage, fcmSrv) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.cookieService = cookieService;
        _this.visitanteSrv = visitanteSrv;
        _this.storage = storage;
        _this.fcm = fcm;
        _this.dispositivoUsuarioSrv = dispositivoUsuarioSrv;
        _this.fcmSrv = fcmSrv;
        _this.visitanteCorrente = null;
        _this.cookieValue = 'UNKNOWN';
        _this.ID_VERSAOAPP = 999;
        return _this;
    }
    //fcmSrv:AcessaFcmService;
    ListaOportunidadePage.prototype.inicializacao = function () {
        this.trataCookie();
        //this.fcmSrv = new AcessaFcmService(this.fcm,this.dispositivoUsuarioSrv, this.visitanteSrv);
        //console.log('DispositivoSrv: ' , this.dispositivoUsuarioSrv);
        //this.fcmSrv.obtemTokenDispostivoUsuario();
    };
    ListaOportunidadePage.prototype.getFiltro = function () {
        return { 'order': 'posicaoProduto' };
    };
    ListaOportunidadePage.prototype.trataCookie = function () {
        var _this = this;
        this.cookieValue = this.cookieService.get('idDigicom');
        console.log('Cookie: ', this.cookieValue);
        if (!this.cookieValue) {
            console.log('Cookie vazio');
            this.visitanteSrv.proximoCookie()
                .subscribe(function (result) {
                console.log('Result Cookie: ', result);
                _this.cookieService.set('idDigicom', result.codigoCookie);
                _this.cookieValue = result.codigoCookie;
                _this.registraVisita();
            });
        }
        else {
            console.log('Meu Cookie:', this.cookieValue);
            this.registraVisita();
        }
    };
    ListaOportunidadePage.prototype.registraVisita = function () {
        var _this = this;
        var visita = new __WEBPACK_IMPORTED_MODULE_7__shared_sdk_models_Visitante__["a" /* Visitante */]();
        visita.codigoCookie = this.cookieValue;
        visita.versaoAppId = this.ID_VERSAOAPP;
        console.log('Visita: ', visita);
        this.visitanteSrv.criaItem(visita)
            .subscribe(function (resultado) {
            console.log('Resultado visitante: ', resultado);
            _this.visitanteCorrente = resultado;
            //this.srvToken.obtemToken(this.visitanteCorrente);
        });
    };
    ListaOportunidadePage.prototype.top50 = function (oportunidade) {
        return oportunidade.posicaoProduto <= 50;
    };
    ListaOportunidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-oportunidade',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade/lista-oportunidade.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Oportunidades do Dia</ion-title>\n    <button ion-button outline color="light" (click)="inicioFluxo()">Assinar (4,99 ao mês)</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum item encontrado\n      </ion-card-header>\n\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n\n      <ion-card *ngFor="let item of listaItem">\n        <ion-card-content text-wrap>\n          <h2 class="texto-produto" style="word-wrap: normal">{{item.nomeProduto}}</h2>\n          <img src="{{item.imagemProduto}}">\n          <h3 class="texto-preco">Sugestão de venda: R$ {{item.precoSugestao | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco">Preço na loja: R$ {{item.precoVendaAtual | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco" *ngIf="top50(item)">Top 50 - Vendas</h3>\n          <h3 class="texto-loja">Loja: {{item.nomeLojaVirtual}}</h3>\n          <a button href="{{item.urlProduto}}" rounded ion-button>Ir para loja</a>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n  </ng-container>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade/lista-oportunidade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["e" /* OportunidadeDiaApi */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_custom_Visitante__["a" /* VisitanteApi */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_9__shared_sdk_services_custom_DispositivoUsuario__["a" /* DispositivoUsuarioApi */], __WEBPACK_IMPORTED_MODULE_10__servico_acessa_fcm_service__["a" /* AcessaFcmService */]])
    ], ListaOportunidadePage);
    return ListaOportunidadePage;
}(__WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_base__["a" /* ListaOportunidadePageBase */]));

//# sourceMappingURL=lista-oportunidade.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_base__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(42);
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






/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(navCtrl, formBuilder, storage, srv) {
        var _this = _super.call(this, navCtrl, formBuilder, storage, srv) || this;
        _this.navCtrl = navCtrl;
        _this.formBuilder = formBuilder;
        _this.storage = storage;
        _this.srv = srv;
        _this.tipo = 'password';
        return _this;
    }
    SignupPage.prototype.mudaStatusSenha = function () {
        console.log('Status: ', this.passwordCheckbox);
        if (this.passwordCheckbox) {
            this.tipo = 'text';
        }
        else {
            this.tipo = 'password';
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/signup/signup.html"*/'<ion-content padding>\n\n  <div id="logo" class="quadro20">\n    <img width="100%" heigth="100%" src="assets/imgs/logoTela.png" />\n  </div>\n\n\n  <form padding [formGroup]="signupForm" (ngSubmit)="onSubmit()" novalidate class="quadro80">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="login"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signupForm.get(\'login\').invalid && signupForm.get(\'login\').dirty">\n        <p style="color:red">\n          {{msgEmail}}\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="{{tipo}}" formControlName="senha1"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signupForm.get(\'senha1\').invalid && signupForm.get(\'senha1\').dirty">\n        <p style="color:red">\n          {{msgSenha}}\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Repetir Senha</ion-label>\n        <ion-input type="{{tipo}}" formControlName="senha2"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signupForm.get(\'senha2\').invalid && signupForm.get(\'senha2\').dirty">\n        <p style="color:red">\n          {{msgSenha}}\n        </p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mostrar Senha</ion-label>\n        <ion-checkbox [(ngModel)]="passwordCheckbox" (ionChange)="mudaStatusSenha()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n\n      <ion-item *ngIf="erroMsg">\n        <p style="color:red">{{erroMsg}}</p>\n      </ion-item>\n    </ion-list>\n\n    <div width="100%" style="align-content: center;">\n      <button ion-button round class="botaoPrincipal" type="submit" [disabled]="signupForm.invalid">Enviar</button>\n    </div>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["i" /* UsuarioApi */]])
    ], SignupPage);
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_2__signup_base__["a" /* SignupPageBase */]));

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__(239);
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



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//validacao.kinghost.net:21189';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());

//# sourceMappingURL=lb.config.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comandos-zero/comandos-zero.module": [
		885,
		11
	],
	"../pages/inicio-fluxo/inicio-fluxo.module": [
		886,
		10
	],
	"../pages/lista-oportunidade-assinatura/lista-oportunidade-assinatura.module": [
		887,
		5
	],
	"../pages/lista-oportunidade-generica/lista-oportunidade-generica.module": [
		888,
		4
	],
	"../pages/lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura.module": [
		889,
		9
	],
	"../pages/lista-oportunidade-preco/lista-oportunidade-preco.module": [
		890,
		3
	],
	"../pages/lista-oportunidade/lista-oportunidade.module": [
		891,
		2
	],
	"../pages/login/login.module": [
		892,
		1
	],
	"../pages/pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao.module": [
		896,
		8
	],
	"../pages/pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente.module": [
		893,
		7
	],
	"../pages/pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao.module": [
		894,
		6
	],
	"../pages/signup/signup.module": [
		895,
		0
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
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());

//# sourceMappingURL=BaseModels.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* tslint:disable */
var Container = /** @class */ (function () {
    function Container(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Container`.
     */
    Container.getModelName = function () {
        return "Container";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Container for dynamic purposes.
    **/
    Container.factory = function (data) {
        return new Container(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Container.getModelDefinition = function () {
        return {
            name: 'Container',
            plural: 'Containers',
            path: 'Containers',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return Container;
}());

//# sourceMappingURL=Container.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visitante; });
var Visitante = /** @class */ (function () {
    function Visitante(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Visitante`.
     */
    Visitante.getModelName = function () {
        return "Visitante";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Visitante for dynamic purposes.
    **/
    Visitante.factory = function (data) {
        return new Visitante(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Visitante.getModelDefinition = function () {
        return {
            name: 'Visitante',
            plural: 'Visitantes',
            path: 'Visitantes',
            idName: 'id',
            properties: {
                "codigoCookie": {
                    name: 'codigoCookie',
                    type: 'string'
                },
                "dataHora": {
                    name: 'dataHora',
                    type: 'Date'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "dispositivo": {
                    name: 'dispositivo',
                    type: 'string'
                },
                "versaoAppId": {
                    name: 'versaoAppId',
                    type: 'number'
                },
                "fcmToken": {
                    name: 'fcmToken',
                    type: 'string'
                },
                "dataHoraNotificacao": {
                    name: 'dataHoraNotificacao',
                    type: 'Date'
                }
            },
            relations: {}
        };
    };
    return Visitante;
}());

//# sourceMappingURL=Visitante.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OportunidadeDia; });
var OportunidadeDia = /** @class */ (function () {
    function OportunidadeDia(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    OportunidadeDia.getModelName = function () {
        return "OportunidadeDia";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of OportunidadeDia for dynamic purposes.
    **/
    OportunidadeDia.factory = function (data) {
        return new OportunidadeDia(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    OportunidadeDia.getModelDefinition = function () {
        return {
            name: 'Cosmetic_OportunidadeDia',
            plural: 'Cosmetic_OportunidadeDias',
            path: 'Cosmetic_OportunidadeDias',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "precoVendaAtual": {
                    name: "precoVendaAtual",
                    type: "number"
                },
                "precoVendaAnterior": {
                    name: "precoVendaAnterior",
                    type: "number"
                },
                "nomeProduto": {
                    name: "nomeProduto",
                    type: "string"
                },
                "urlProduto": {
                    name: "urlProduto",
                    type: "string"
                },
                "nomeMarca": {
                    name: "nomeMarca",
                    type: "string"
                },
                "idProduto": {
                    name: "idProduto",
                    type: "number"
                },
                "nomeLojaVirtual": {
                    name: "nomeLojaVirtual",
                    type: "string"
                },
                "imagemProduto": {
                    name: "imagemProduto",
                    type: "string"
                },
                "precoSugestao": {
                    name: "precoSugestao",
                    type: "number"
                },
                "posicaoProduto": {
                    name: "posicaoProduto",
                    type: "number"
                },
                "dataUltimaPrecoAnterior": {
                    name: "dataUltimaPrecoAnterior",
                    type: "Date"
                },
                "percentualAjusteVenda": {
                    name: "percentualAjusteVenda",
                    type: "number"
                },
            },
            relations: {}
        };
    };
    return OportunidadeDia;
}());

//# sourceMappingURL=OportunidadeDia.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    Usuario.getModelName = function () {
        return "Usuario";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of Usuario for dynamic purposes.
    **/
    Usuario.factory = function (data) {
        return new Usuario(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Usuario.getModelDefinition = function () {
        return {
            name: 'Cosmetic_Usuario',
            plural: 'Cosmetic_Usuarios',
            path: 'Cosmetic_Usuarios',
            idName: 'id',
            properties: {
                "id": {
                    name: "id",
                    type: "string"
                },
                "nome": {
                    name: "nome",
                    type: "string"
                },
                "senha": {
                    name: "senha",
                    type: "string"
                },
                "email": {
                    name: "email",
                    type: "string"
                },
                "dataHoraCriacao": {
                    name: "dataHoraCriacao",
                    type: "Date"
                },
                "dataHoraUltimoAcesso": {
                    name: "dataHoraUltimoAcesso",
                    type: "Date"
                },
                "codigoPagamento": {
                    name: "codigoPagamento",
                    type: "string"
                },
                "statusPagamento": {
                    name: "statusPagamento",
                    type: "string"
                },
            },
            relations: {}
        };
    };
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Acao; });
var Acao = /** @class */ (function () {
    function Acao(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    Acao.getModelName = function () {
        return "Acao";
    };
    /**
    * @method factory
    * @author Gerador Java
    * @license MIT
    * This method creates an instance of Acao for dynamic purposes.
    **/
    Acao.factory = function (data) {
        return new Acao(data);
    };
    /**
    * @method getModelDefinition
    * @author Gerador Java
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Acao.getModelDefinition = function () {
        return {
            name: 'Cosmetic_Acao',
            plural: 'Cosmetic_Acaos',
            path: 'Cosmetic_Acaos',
            idName: 'id',
            properties: {
                "nome": {
                    name: "nome",
                    type: "string"
                },
                "dataHora": {
                    name: "dataHora",
                    type: "Date"
                },
                "objeto": {
                    name: "objeto",
                    type: "string"
                },
                "id": {
                    name: "id",
                    type: "number"
                },
                "telaAppId": {
                    name: "telaAppId",
                    type: "number"
                },
            },
            relations: {}
        };
    };
    return Acao;
}());

//# sourceMappingURL=Acao.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

//import { Observable, throwError } from 'rxjs';
//import { Observable } from 'rxjs';

/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (errorResponse) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_throw__["_throw"])(errorResponse.error.error || 'Server error');
        //return throwError(errorResponse.error.error || 'Server error');
        //console.log('ErroHttp: ', errorResponse);
        //return null;
    };
    ErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Container__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Visitante__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_DispositivoUsuario__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_VisitaApp__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_OportunidadeDia__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Usuario__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Acao__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            OportunidadeDia: __WEBPACK_IMPORTED_MODULE_6__models_OportunidadeDia__["a" /* OportunidadeDia */],
            Usuario: __WEBPACK_IMPORTED_MODULE_7__models_Usuario__["a" /* Usuario */],
            Acao: __WEBPACK_IMPORTED_MODULE_8__models_Acao__["a" /* Acao */],
            User: __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */],
            Container: __WEBPACK_IMPORTED_MODULE_1__models_Container__["a" /* Container */],
            Visitante: __WEBPACK_IMPORTED_MODULE_3__models_Visitante__["a" /* Visitante */],
            DispositivoUsuario: __WEBPACK_IMPORTED_MODULE_4__models_DispositivoUsuario__["a" /* DispositivoUsuario */],
            VisitaApp: __WEBPACK_IMPORTED_MODULE_5__models_VisitaApp__["a" /* VisitaApp */]
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());

//# sourceMappingURL=SDKModels.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_driver__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
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
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"](),
            onDisconnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"](),
            onAuthenticated: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"](),
            onUnAuthorized: new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])())
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(), {
                log: false,
                secure: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SocketConnection);
    return SocketConnection;
}());

//# sourceMappingURL=socket.connections.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SDKBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_core_real_time__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_custom_User__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_custom_Container__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_custom_OportunidadeDia__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_custom_Usuario__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_custom_Acao__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_index__ = __webpack_require__(338);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_17__models_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_17__models_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_index__ = __webpack_require__(336);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_18__services_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_18__services_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_18__services_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_18__services_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_18__services_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lb_config__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["a"]; });
/* unused harmony reexport CookieBrowser */
/* unused harmony reexport StorageBrowser */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/

















/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_11__services_core_real_time__["a" /* RealTime */],
                __WEBPACK_IMPORTED_MODULE_12__services_custom_User__["a" /* UserApi */],
                __WEBPACK_IMPORTED_MODULE_13__services_custom_Container__["a" /* ContainerApi */],
                __WEBPACK_IMPORTED_MODULE_14__services_custom_OportunidadeDia__["a" /* OportunidadeDiaApi */],
                __WEBPACK_IMPORTED_MODULE_15__services_custom_Usuario__["a" /* UsuarioApi */],
                __WEBPACK_IMPORTED_MODULE_16__services_custom_Acao__["a" /* AcaoApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__["a" /* StorageBrowser */] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__["a" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */









var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            var httpParams_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpRequest */](method, "" + url + queryString, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (res) { return res.body; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());

//# sourceMappingURL=socket.driver.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(837);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__core_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__(843);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["d"]; });
/* tslint:disable */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io_service__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
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
/* tslint:disable */








/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.sharedOnReady = this.onReadySubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["share"])());
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new __WEBPACK_IMPORTED_MODULE_1__io_service__["a" /* IO */](this.connection);
            this.FireLoop = new __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__["a" /* FireLoop */](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */]])
    ], RealTime);
    return RealTime;
}());

//# sourceMappingURL=real.time.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OportunidadeDia__ = __webpack_require__(242);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Usuario__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Usuario__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Acao__ = __webpack_require__(244);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Acao__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container__ = __webpack_require__(240);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BaseModels__ = __webpack_require__(239);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FireLoopRef__ = __webpack_require__(840);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__FireLoopRef__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UsuarioProduto__ = __webpack_require__(841);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DispositivoUsuario__ = __webpack_require__(138);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__NotificacaoApp__ = __webpack_require__(842);
/* unused harmony namespace reexport */









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OportunidadeDiaApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
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
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic





/**
 * Api services for the `Aplicacao` model.
 */
var OportunidadeDiaApi = /** @class */ (function (_super) {
    __extends(OportunidadeDiaApi, _super);
    function OportunidadeDiaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    OportunidadeDiaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/oportunidadeDias";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    OportunidadeDiaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/oportunidadeDias/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    OportunidadeDiaApi.prototype.getModelName = function () {
        return "OportunidadeDia";
    };
    OportunidadeDiaApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__["a" /* OPORTUNIDADEDIA */][0]);
    };
    OportunidadeDiaApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__["a" /* OPORTUNIDADEDIA */]);
    };
    OportunidadeDiaApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__["a" /* OPORTUNIDADEDIA */][filter.where.id]);
    };
    OportunidadeDiaApi.prototype.getListaOportunidadePageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__["d" /* OPORTUNIDADEDIA_LISTAOPORTUNIDADEPAGE */]);
    };
    OportunidadeDiaApi.prototype.getListaOportunidadePrecoPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__["e" /* OPORTUNIDADEDIA_LISTAOPORTUNIDADEPRECOPAGE */]);
    };
    OportunidadeDiaApi.prototype.getListaOportunidadeAssinaturaPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__["b" /* OPORTUNIDADEDIA_LISTAOPORTUNIDADEASSINATURAPAGE */]);
    };
    OportunidadeDiaApi.prototype.getListaOportunidadeGenericaPageLoad = function (filter) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_oportunidadeDia__["c" /* OPORTUNIDADEDIA_LISTAOPORTUNIDADEGENERICAPAGE */]);
    };
    // aprender mais para fazer algo que trate falha de conexao --> 25/05/2019
    OportunidadeDiaApi.prototype.createDg = function (data, erroMsg, customHeaders) {
        var result = this.create(data, customHeaders);
        //result.subscribe((result:OportunidadeDia) => {}, (erro:any) => {}); // com isso duplica
        return result;
    };
    OportunidadeDiaApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], OportunidadeDiaApi);
    return OportunidadeDiaApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=OportunidadeDia.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_usuario__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
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
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic

/**
 * Api services for the `Aplicacao` model.
 */
var UsuarioApi = /** @class */ (function (_super) {
    __extends(UsuarioApi, _super);
    function UsuarioApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    UsuarioApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/usuarios";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    UsuarioApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/usuarios/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    UsuarioApi.prototype.getModelName = function () {
        return "Usuario";
    };
    UsuarioApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_usuario__["a" /* USUARIO */][0]);
    };
    UsuarioApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_usuario__["a" /* USUARIO */]);
    };
    UsuarioApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_usuario__["a" /* USUARIO */][filter.where.id]);
    };
    // aprender mais para fazer algo que trate falha de conexao --> 25/05/2019
    UsuarioApi.prototype.createDg = function (data, erroMsg, customHeaders) {
        var result = this.create(data, customHeaders);
        //result.subscribe((result:Usuario) => {}, (erro:any) => {}); // com isso duplica
        return result;
    };
    UsuarioApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], UsuarioApi);
    return UsuarioApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcaoApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dados_acao__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
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
/* tslint:disable */









//import { of } from 'rxjs';
//Versao Ionic

/**
 * Api services for the `Aplicacao` model.
 */
var AcaoApi = /** @class */ (function (_super) {
    __extends(AcaoApi, _super);
    function AcaoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    AcaoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/acaos";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id aplicacao id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Aplicacao` object.)
     * </em>
     */
    AcaoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/acaos/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Aplicacao`.
     */
    AcaoApi.prototype.getModelName = function () {
        return "Acao";
    };
    AcaoApi.prototype.obtemPrimeiro = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_acao__["a" /* ACAO */][0]);
    };
    AcaoApi.prototype.obtemLista = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_acao__["a" /* ACAO */]);
    };
    AcaoApi.prototype.obtemElemento = function (filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_8__dados_acao__["a" /* ACAO */][filter.where.id]);
    };
    // aprender mais para fazer algo que trate falha de conexao --> 25/05/2019
    AcaoApi.prototype.createDg = function (data, erroMsg, customHeaders) {
        var result = this.create(data, customHeaders);
        //result.subscribe((result:Acao) => {}, (erro:any) => {}); // com isso duplica
        return result;
    };
    AcaoApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], AcaoApi);
    return AcaoApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Acao.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */








/**
 * Api services for the `Container` model.
 */
var ContainerApi = /** @class */ (function (_super) {
    __extends(ContainerApi, _super);
    function ContainerApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getContainers = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.createContainer = function (options, customHeaders) {
        if (options === void 0) { options = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` �?? `{}` -
     */
    ContainerApi.prototype.destroyContainer = function (container, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getContainer = function (container, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getFiles = function (container, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/files";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getFile = function (container, file, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` �?? `{}` -
     */
    ContainerApi.prototype.removeFile = function (container, file, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {object} data Request data.
     *
     *  - `req` �?? `{object}` -
     *
     *  - `res` �?? `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` �?? `{object}` -
     */
    ContainerApi.prototype.upload = function (container, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/upload";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @param {object} req
     *
     * @param {object} res
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContainerApi.prototype.download = function (container, file, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/containers/:container/download/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Container`.
     */
    ContainerApi.prototype.getModelName = function () {
        return "Container";
    };
    ContainerApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ContainerApi);
    return ContainerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Container.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadeAssinaturaPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_const__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componente_base__ = __webpack_require__(60);
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


// Tipo: LISTA
var ListaOportunidadeAssinaturaPageBase = /** @class */ (function (_super) {
    __extends(ListaOportunidadeAssinaturaPageBase, _super);
    function ListaOportunidadeAssinaturaPageBase(navCtrl, srv, storage, fcmSrv) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        _this.chave = 'f1d7c648455842d2f0bd1770368ceec3f872b296';
        return _this;
    }
    ListaOportunidadeAssinaturaPageBase.prototype.getPageEdicao = function () {
        throw new Error("ListaOportunidadeAssinaturaPage sem tela de edicao.");
    };
    ListaOportunidadeAssinaturaPageBase.prototype.getPageDetalhe = function () {
        throw new Error("ListaOportunidadeAssinaturaPage sem tela de detalhe.");
    };
    ListaOportunidadeAssinaturaPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: ListaOportunidadeAssinaturaPage<<LISTA>> : OportunidadeDia');
        this.carregaLista();
        this.fcmSrv.registraVisitaPagina(this.chave);
        this.inicializacao();
    };
    ListaOportunidadeAssinaturaPageBase.prototype.carregaLista = function () {
        var _this = this;
        //alert('OportunidadeDia.find: ' + JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            //alert('Result:' + JSON.stringify(resultado));
            _this.listaItem = resultado;
            _this.erroMsg = '';
        }, function (erro) {
            //alert('Erro: ' + JSON.stringify(erro));
            if (erro == 'Server error') {
                _this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
            }
        });
    };
    ListaOportunidadeAssinaturaPageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    ListaOportunidadeAssinaturaPageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    ListaOportunidadeAssinaturaPageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    ListaOportunidadeAssinaturaPageBase.prototype.verificaConexao = function (erro) {
        if (erro == 'Server error') {
            this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
        }
    };
    return ListaOportunidadeAssinaturaPageBase;
}(__WEBPACK_IMPORTED_MODULE_1__componente_base__["a" /* ComponenteBase */]));

//# sourceMappingURL=lista-oportunidade-assinatura-base.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());

//# sourceMappingURL=cookie.browser.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());

//# sourceMappingURL=storage.browser.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitaAppApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */








/**
 * Api services for the `VisitaApp` model.
 */
var VisitaAppApi = /** @class */ (function (_super) {
    __extends(VisitaAppApi, _super);
    function VisitaAppApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    VisitaAppApi_1 = VisitaAppApi;
    /**
     * Fetches belongsTo relation telaApp.
     *
     * @param {any} id VisitaApp id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaApp` object.)
     * </em>
     */
    VisitaAppApi.prototype.getTelaApp = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = VisitaAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/VisitaApps/:id/telaApp";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation usuarioProduto.
     *
     * @param {any} id VisitaApp id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaApp` object.)
     * </em>
     */
    VisitaAppApi.prototype.getUsuarioProduto = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = VisitaAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/VisitaApps/:id/usuarioProduto";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation versaoApp.
     *
     * @param {any} id VisitaApp id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaApp` object.)
     * </em>
     */
    VisitaAppApi.prototype.getVersaoApp = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = VisitaAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/VisitaApps/:id/versaoApp";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaApp` object.)
     * </em>
     */
    VisitaAppApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = VisitaAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/VisitaApps";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id VisitaApp id
     *
     * @param {object} data Request data.
     *
     *  - `data` ? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaApp` object.)
     * </em>
     */
    VisitaAppApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = VisitaAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/VisitaApps/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `chaveUsuario` ? `{string}` -
     *
     *  - `chavePagina` ? `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaApp` object.)
     * </em>
     */
    VisitaAppApi.prototype.RegistraVisitaTelaApp = function (chaveUsuario, chavePagina, customHeaders) {
        var _method = "POST";
        var _url = VisitaAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/VisitaApps/registraVisitaTelaApp";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof chaveUsuario !== 'undefined' && chaveUsuario !== null)
            _urlParams.chaveUsuario = chaveUsuario;
        if (typeof chavePagina !== 'undefined' && chavePagina !== null)
            _urlParams.chavePagina = chavePagina;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `chaveUsuario` ? `{string}` -
     *
     *  - `chaveVersaoApp` ? `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `VisitaApp` object.)
     * </em>
     */
    VisitaAppApi.prototype.RegistraVisitaVersaoApp = function (chaveUsuario, chaveVersaoApp, customHeaders) {
        if (chaveUsuario === void 0) { chaveUsuario = {}; }
        var _method = "POST";
        var _url = VisitaAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/VisitaApps/registraVisitaVersaoApp";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof chaveUsuario !== 'undefined' && chaveUsuario !== null)
            _urlParams.chaveUsuario = chaveUsuario;
        if (typeof chaveVersaoApp !== 'undefined' && chaveVersaoApp !== null)
            _urlParams.chaveVersaoApp = chaveVersaoApp;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `VisitaApp`.
     */
    VisitaAppApi.prototype.getModelName = function () {
        return "VisitaApp";
    };
    VisitaAppApi.pathValidador = '//validacao.kinghost.net:21040';
    VisitaAppApi = VisitaAppApi_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], VisitaAppApi);
    return VisitaAppApi;
    var VisitaAppApi_1;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=VisitaApp.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacaoAppApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */








/**
 * Api services for the `NotificacaoApp` model.
 */
var NotificacaoAppApi = /** @class */ (function (_super) {
    __extends(NotificacaoAppApi, _super);
    function NotificacaoAppApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    NotificacaoAppApi_1 = NotificacaoAppApi;
    NotificacaoAppApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/NotificacaoApps";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    NotificacaoAppApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/NotificacaoApps/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    NotificacaoAppApi.prototype.RegistraAcesso = function (tokenNotificacao, customHeaders) {
        var _method = "POST";
        var _url = NotificacaoAppApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/NotificacaoApps/registraAcesso";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof tokenNotificacao !== 'undefined' && tokenNotificacao !== null)
            _urlParams.tokenNotificacao = tokenNotificacao;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `NotificacaoApp`.
     */
    NotificacaoAppApi.prototype.getModelName = function () {
        return "NotificacaoApp";
    };
    NotificacaoAppApi.pathValidador = '//validacao.kinghost.net:21040';
    NotificacaoAppApi = NotificacaoAppApi_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], NotificacaoAppApi);
    return NotificacaoAppApi;
    var NotificacaoAppApi_1;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=NotificacaoApp.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProdutoApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */








/**
 * Api services for the `UsuarioProduto` model.
 */
var UsuarioProdutoApi = /** @class */ (function (_super) {
    __extends(UsuarioProdutoApi, _super);
    function UsuarioProdutoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    UsuarioProdutoApi_1 = UsuarioProdutoApi;
    /**
     * Find a related item by id for dispositivoUsuarios.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {any} fk Foreign key for dispositivoUsuarios
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.findByIdDispositivoUsuarios = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for dispositivoUsuarios.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {any} fk Foreign key for dispositivoUsuarios
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioProdutoApi.prototype.destroyByIdDispositivoUsuarios = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for dispositivoUsuarios.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {any} fk Foreign key for dispositivoUsuarios
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.updateByIdDispositivoUsuarios = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for notificacaoApps.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {any} fk Foreign key for notificacaoApps
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.findByIdNotificacaoApps = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for notificacaoApps.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {any} fk Foreign key for notificacaoApps
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioProdutoApi.prototype.destroyByIdNotificacaoApps = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for notificacaoApps.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {any} fk Foreign key for notificacaoApps
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.updateByIdNotificacaoApps = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries dispositivoUsuarios of UsuarioProduto.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.getDispositivoUsuarios = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in dispositivoUsuarios of this model.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.createDispositivoUsuarios = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all dispositivoUsuarios of this model.
     *
     * @param {any} id UsuarioProduto id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioProdutoApi.prototype.deleteDispositivoUsuarios = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts dispositivoUsuarios of UsuarioProduto.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UsuarioProdutoApi.prototype.countDispositivoUsuarios = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries notificacaoApps of UsuarioProduto.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.getNotificacaoApps = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in notificacaoApps of this model.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.createNotificacaoApps = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all notificacaoApps of this model.
     *
     * @param {any} id UsuarioProduto id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UsuarioProdutoApi.prototype.deleteNotificacaoApps = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts notificacaoApps of UsuarioProduto.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UsuarioProdutoApi.prototype.countNotificacaoApps = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     *  - `usuario` – `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.CadastraLogin = function (usuario, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/cadastraLogin";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof usuario !== 'undefined' && usuario !== null)
            _urlParams.usuario = usuario;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} chave
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `dias` – `{number}` -
     */
    UsuarioProdutoApi.prototype.PeriodoGratuito = function (chave, customHeaders) {
        var _method = "GET";
        var _url = UsuarioProdutoApi_1.pathValidador + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/periodoGratuito";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof chave !== 'undefined' && chave !== null)
            _urlParams.chave = chave;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in dispositivoUsuarios of this model.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.createManyDispositivoUsuarios = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/dispositivoUsuarios";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in notificacaoApps of this model.
     *
     * @param {any} id UsuarioProduto id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `UsuarioProduto` object.)
     * </em>
     */
    UsuarioProdutoApi.prototype.createManyNotificacaoApps = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/UsuarioProdutos/:id/notificacaoApps";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `UsuarioProduto`.
     */
    UsuarioProdutoApi.prototype.getModelName = function () {
        return "UsuarioProduto";
    };
    UsuarioProdutoApi.pathValidador = '//validacao.kinghost.net:21040';
    UsuarioProdutoApi = UsuarioProdutoApi_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], UsuarioProdutoApi);
    return UsuarioProdutoApi;
    var UsuarioProdutoApi_1;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=UsuarioProduto.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioFluxoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__ = __webpack_require__(61);
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
 * Generated class for the InicioFluxoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioFluxoPage = /** @class */ (function () {
    function InicioFluxoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioFluxoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioFluxoPage');
    };
    InicioFluxoPage.prototype.inicioFluxo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__["a" /* PagSeguroAssinaturaDadoIdentificacaoPage */]);
    };
    InicioFluxoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio-fluxo',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/inicio-fluxo/inicio-fluxo.html"*/'<!--\n  Generated template for the InicioFluxoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>InicioFluxo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="inicioFluxo()">Button</button>\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/inicio-fluxo/inicio-fluxo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InicioFluxoPage);
    return InicioFluxoPage;
}());

//# sourceMappingURL=inicio-fluxo.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadeAssinaturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_assinatura_base__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servico_acessa_fcm_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__ = __webpack_require__(61);
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







var ListaOportunidadeAssinaturaPage = /** @class */ (function (_super) {
    __extends(ListaOportunidadeAssinaturaPage, _super);
    function ListaOportunidadeAssinaturaPage(navCtrl, srv, storage, fcmSrv) {
        var _this = _super.call(this, navCtrl, srv, storage, fcmSrv) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        _this.visitanteCorrente = null;
        _this.cookieValue = 'UNKNOWN';
        _this.ID_VERSAOAPP = 999;
        return _this;
    }
    ListaOportunidadeAssinaturaPage.prototype.inicializacao = function () {
    };
    ListaOportunidadeAssinaturaPage.prototype.getFiltro = function () {
        return {};
    };
    ListaOportunidadeAssinaturaPage.prototype.top50 = function (oportunidade) {
        return oportunidade.posicaoProduto <= 50;
    };
    ListaOportunidadeAssinaturaPage.prototype.inicioFluxo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__["a" /* PagSeguroAssinaturaDadoIdentificacaoPage */]);
    };
    ListaOportunidadeAssinaturaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-oportunidade-assinatura',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-assinatura/lista-oportunidade-assinatura.html"*/'<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Oportunidades do Dia</ion-title>\n    <button ion-button outline color="light" (click)="inicioFluxo()">Assinar (4,99 ao mês)</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum item encontrado\n      </ion-card-header>\n\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n\n      <ion-card *ngFor="let item of listaItem">\n        <ion-card-content text-wrap>\n          <h2 class="texto-produto" style="word-wrap: normal">{{item.nomeProduto}}</h2>\n          <img src="{{item.imagemProduto}}">\n          <h3 class="texto-preco">Sugestão de venda: R$ {{item.precoSugestao | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco">Preço na loja: R$ {{item.precoVendaAtual | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco" *ngIf="top50(item)">Top 50 - Vendas</h3>\n          <h3 class="texto-loja">Loja: {{item.nomeLojaVirtual}}</h3>\n          <a button href="{{item.urlProduto}}" rounded ion-button>Ir para loja</a>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n  </ng-container>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-assinatura/lista-oportunidade-assinatura.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["e" /* OportunidadeDiaApi */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__servico_acessa_fcm_service__["a" /* AcessaFcmService */]])
    ], ListaOportunidadeAssinaturaPage);
    return ListaOportunidadeAssinaturaPage;
}(__WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_assinatura_base__["a" /* ListaOportunidadeAssinaturaPageBase */]));

//# sourceMappingURL=lista-oportunidade-assinatura.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadeGenericaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_generica_base__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servico_acessa_fcm_service__ = __webpack_require__(55);
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






var ListaOportunidadeGenericaPage = /** @class */ (function (_super) {
    __extends(ListaOportunidadeGenericaPage, _super);
    function ListaOportunidadeGenericaPage(navCtrl, srv, storage, fcmSrv) {
        var _this = _super.call(this, navCtrl, srv, storage, fcmSrv) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        return _this;
    }
    ListaOportunidadeGenericaPage.prototype.inicializacao = function () {
    };
    ListaOportunidadeGenericaPage.prototype.getFiltro = function () {
        return {
            "order": "dataUltimaPrecoAnterior DESC"
        };
    };
    ListaOportunidadeGenericaPage.prototype.top50 = function (oportunidade) {
        return oportunidade.posicaoProduto <= 50;
    };
    ListaOportunidadeGenericaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-oportunidade-generica',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-generica/lista-oportunidade-generica.html"*/'\n<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Oportunidades do Dia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum item encontrado\n      </ion-card-header>\n\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n\n      <ion-card *ngFor="let item of listaItem">\n        <ion-card-content text-wrap>\n          <h2 class="texto-produto" style="word-wrap: normal">{{item.nomeProduto}}</h2>\n          <img src="{{item.imagemProduto}}">\n          <h3 class="texto-preco">Preço até {{item.dataUltimaPrecoAnterior | date : \'dd/MM/yyyy\'}}: R$ {{item.precoVendaAnterior | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco">Preço atual: R$ {{item.precoVendaAtual | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco" *ngIf="top50(item)">Top 50 - Vendas</h3>\n          <h3 class="texto-loja">Loja: {{item.nomeLojaVirtual}}</h3>\n          <a button href="{{item.urlProduto}}" rounded ion-button>Ir para loja</a>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n  </ng-container>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-generica/lista-oportunidade-generica.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["e" /* OportunidadeDiaApi */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__servico_acessa_fcm_service__["a" /* AcessaFcmService */]])
    ], ListaOportunidadeGenericaPage);
    return ListaOportunidadeGenericaPage;
}(__WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_generica_base__["a" /* ListaOportunidadeGenericaPageBase */]));

//# sourceMappingURL=lista-oportunidade-generica.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadePrecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_preco_base__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servico_acessa_fcm_service__ = __webpack_require__(55);
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






var ListaOportunidadePrecoPage = /** @class */ (function (_super) {
    __extends(ListaOportunidadePrecoPage, _super);
    function ListaOportunidadePrecoPage(navCtrl, srv, storage, fcmSrv) {
        var _this = _super.call(this, navCtrl, srv, storage, fcmSrv) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        _this.visitanteCorrente = null;
        _this.cookieValue = 'UNKNOWN';
        _this.ID_VERSAOAPP = 999;
        return _this;
    }
    ListaOportunidadePrecoPage.prototype.inicializacao = function () {
    };
    ListaOportunidadePrecoPage.prototype.getFiltro = function () {
        return {};
    };
    ListaOportunidadePrecoPage.prototype.top50 = function (oportunidade) {
        return oportunidade.posicaoProduto <= 50;
    };
    ListaOportunidadePrecoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-oportunidade-preco',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-preco/lista-oportunidade-preco.html"*/'\n<ion-header>\n  <ion-navbar color="titulo">\n    <ion-title>Oportunidades do Dia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="quadroBase">\n\n  <ng-container *ngIf="listaItem">\n\n    <ion-card *ngIf="listaItem.length==0">\n      <ion-card-header>\n        Nenhum item encontrado\n      </ion-card-header>\n\n    </ion-card>\n\n    <ion-list *ngIf="listaItem.length>0">\n\n      <ion-card *ngFor="let item of listaItem">\n        <ion-card-content text-wrap>\n          <h2 class="texto-produto" style="word-wrap: normal">{{item.nomeProduto}}</h2>\n          <img src="{{item.imagemProduto}}">\n          <h3 class="texto-preco">Sugestão de venda: R$ {{item.precoSugestao | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco">Preço na loja: R$ {{item.precoVendaAtual | number: \'1.2-2\' }}</h3>\n          <h3 class="texto-preco" *ngIf="top50(item)">Top 50 - Vendas</h3>\n          <h3 class="texto-loja">Loja: {{item.nomeLojaVirtual}}</h3>\n          <a button href="{{item.urlProduto}}" rounded ion-button>Ir para loja</a>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-list>\n\n  </ng-container>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/lista-oportunidade-preco/lista-oportunidade-preco.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["e" /* OportunidadeDiaApi */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__servico_acessa_fcm_service__["a" /* AcessaFcmService */]])
    ], ListaOportunidadePrecoPage);
    return ListaOportunidadePrecoPage;
}(__WEBPACK_IMPORTED_MODULE_2__lista_oportunidade_preco_base__["a" /* ListaOportunidadePrecoPageBase */]));

//# sourceMappingURL=lista-oportunidade-preco.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_base__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_integracao_PagSeguro__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lista_oportunidade_lista_oportunidade__ = __webpack_require__(180);
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








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, formBuilder, srv, srvACao, storage, pagSeguro) {
        var _this = _super.call(this, navCtrl, navParams, formBuilder, srv, srvACao, storage, pagSeguro) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.formBuilder = formBuilder;
        _this.srv = srv;
        _this.srvACao = srvACao;
        _this.storage = storage;
        _this.pagSeguro = pagSeguro;
        return _this;
    }
    LoginPage.prototype.getPaginaInicial = function () {
        var proxima = __WEBPACK_IMPORTED_MODULE_7__lista_oportunidade_lista_oportunidade__["a" /* ListaOportunidadePage */];
        console.log('Proxima: ', proxima);
        return proxima;
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/login/login.html"*/'<ion-content>\n\n  <div id="logo">\n    <img width="100%" heigth="100%" src="assets/imgs/logoTela.png" (click)="criaFoto()"/>\n  </div>\n\n\n  <form padding [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate>\n    <ion-list>\n\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="login" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" formControlName="senha" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <!-- bug de inputs -->\n      </ion-item>\n\n      <ion-item *ngIf="erroMsg">\n        <p class="erroMsg">{{erroMsg}}</p>\n      </ion-item>\n    </ion-list>\n    <div width="100%" style="align-content: center;">\n      <button ion-button round class="botaoPrincipal" type="submit">Entrar</button>\n    </div>\n\n  </form>\n\n\n  <button class="criaEsquece" ion-button (click)="criarConta()" color="primary" outline >Primeiro Acesso</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["i" /* UsuarioApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* AcaoApi */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_integracao_PagSeguro__["a" /* PagSeguroApi */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_4__login_base__["a" /* LoginPageBase */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(542);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MSG_SEM_INTERNET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MSG_ERRO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MSG_CADASTRO_TAMANHO_SENHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MSG_CADASTRO_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VERSAO_APP_ID; });
var MSG_SEM_INTERNET = 'Você está sem Internet';
var MSG_ERRO_LOGIN = 'Email ou senha incorreto';
var MSG_CADASTRO_TAMANHO_SENHA = 'Mínimo de 8 caracteres.';
var MSG_CADASTRO_EMAIL = 'Digite seu email';
var VERSAO_APP_ID = 8;
// ListaOportunidade --> VERSAO_APP_ID = 6
// ListaOportunidadePreco --> VERSAO_APP_ID = 7
//# sourceMappingURL=const.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_sockets_socket_driver__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sdk__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screenshot__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comandos_zero_comandos_zero__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_brmasker_ionic_3__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_sdk_services_integracao_PagSeguro__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_sdk_services_custom_Visitante__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_cookie_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_fcm__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__servico_acessa_fcm_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_sdk_services_custom_DispositivoUsuario__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_sdk_services_custom_VisitaApp__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_pag_seguro_assinatura_dado_cliente_pag_seguro_assinatura_dado_cliente__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_pag_seguro_assinatura_dado_cartao_pag_seguro_assinatura_dado_cartao__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_lista_oportunidade_lista_oportunidade__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_lista_oportunidade_preco_lista_oportunidade_preco__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_lista_oportunidade_assinatura_lista_oportunidade_assinatura__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_lista_oportunidade_generica_lista_oportunidade_generica__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common_locales_pt__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_lista_oportunidade_preco_assinatura_lista_oportunidade_preco_assinatura__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_sdk_services_custom_NotificacaoApp__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_sdk_services_custom_UsuarioProduto__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_inicio_fluxo_inicio_fluxo__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































Object(__WEBPACK_IMPORTED_MODULE_32__angular_common__["k" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_33__angular_common_locales_pt__["a" /* default */], 'pt-BR');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comandos_zero_comandos_zero__["a" /* ComandosZeroPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__["a" /* PagSeguroAssinaturaDadoIdentificacaoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_pag_seguro_assinatura_dado_cliente_pag_seguro_assinatura_dado_cliente__["a" /* PagSeguroAssinaturaDadoClientePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_pag_seguro_assinatura_dado_cartao_pag_seguro_assinatura_dado_cartao__["a" /* PagSeguroAssinaturaDadoCartaoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_lista_oportunidade_lista_oportunidade__["a" /* ListaOportunidadePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_lista_oportunidade_preco_lista_oportunidade_preco__["a" /* ListaOportunidadePrecoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_lista_oportunidade_assinatura_lista_oportunidade_assinatura__["a" /* ListaOportunidadeAssinaturaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_lista_oportunidade_generica_lista_oportunidade_generica__["a" /* ListaOportunidadeGenericaPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_lista_oportunidade_preco_assinatura_lista_oportunidade_preco_assinatura__["a" /* ListaOportunidadePrecoAssinaturaPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_inicio_fluxo_inicio_fluxo__["a" /* InicioFluxoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/comandos-zero/comandos-zero.module#ComandosZeroPageModule', name: 'ComandosZeroPage', segment: 'comandos-zero', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-fluxo/inicio-fluxo.module#InicioFluxoPageModule', name: 'InicioFluxoPage', segment: 'inicio-fluxo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-oportunidade-assinatura/lista-oportunidade-assinatura.module#ListaOportunidadeAssinaturaPageModule', name: 'ListaOportunidadeAssinaturaPage', segment: 'lista-oportunidade-assinatura', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-oportunidade-generica/lista-oportunidade-generica.module#ListaOportunidadeGenericaPageModule', name: 'ListaOportunidadeGenericaPage', segment: 'lista-oportunidade-generica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-oportunidade-preco-assinatura/lista-oportunidade-preco-assinatura.module#ListaOportunidadePrecoAssinaturaPageModule', name: 'ListaOportunidadePrecoAssinaturaPage', segment: 'lista-oportunidade-preco-assinatura', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-oportunidade-preco/lista-oportunidade-preco.module#ListaOportunidadePrecoPageModule', name: 'ListaOportunidadePrecoPage', segment: 'lista-oportunidade-preco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-oportunidade/lista-oportunidade.module#ListaOportunidadePageModule', name: 'ListaOportunidadePage', segment: 'lista-oportunidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente.module#PagSeguroAssinaturaDadoClientePageModule', name: 'PagSeguroAssinaturaDadoClientePage', segment: 'pag-seguro-assinatura-dado-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao.module#PagSeguroAssinaturaDadoIdentificacaoPageModule', name: 'PagSeguroAssinaturaDadoIdentificacaoPage', segment: 'pag-seguro-assinatura-dado-identificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao.module#PagSeguroAssinaturaDadoCartaoPageModule', name: 'PagSeguroAssinaturaDadoCartaoPage', segment: 'pag-seguro-assinatura-dado-cartao', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["f" /* SDKBrowserModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comandos_zero_comandos_zero__["a" /* ComandosZeroPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pag_seguro_assinatura_dado_identificacao_pag_seguro_assinatura_dado_identificacao__["a" /* PagSeguroAssinaturaDadoIdentificacaoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_pag_seguro_assinatura_dado_cliente_pag_seguro_assinatura_dado_cliente__["a" /* PagSeguroAssinaturaDadoClientePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_pag_seguro_assinatura_dado_cartao_pag_seguro_assinatura_dado_cartao__["a" /* PagSeguroAssinaturaDadoCartaoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_lista_oportunidade_lista_oportunidade__["a" /* ListaOportunidadePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_lista_oportunidade_preco_lista_oportunidade_preco__["a" /* ListaOportunidadePrecoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_lista_oportunidade_assinatura_lista_oportunidade_assinatura__["a" /* ListaOportunidadeAssinaturaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_lista_oportunidade_generica_lista_oportunidade_generica__["a" /* ListaOportunidadeGenericaPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_lista_oportunidade_preco_assinatura_lista_oportunidade_preco_assinatura__["a" /* ListaOportunidadePrecoAssinaturaPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_inicio_fluxo_inicio_fluxo__["a" /* InicioFluxoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__shared_sdk_sockets_socket_driver__["a" /* SocketDriver */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["g" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["d" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["c" /* InternalStorage */],
                __WEBPACK_IMPORTED_MODULE_16__shared_sdk_services_integracao_PagSeguro__["a" /* PagSeguroApi */],
                __WEBPACK_IMPORTED_MODULE_17__shared_sdk_services_custom_Visitante__["a" /* VisitanteApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["e" /* OportunidadeDiaApi */],
                __WEBPACK_IMPORTED_MODULE_35__shared_sdk_services_custom_NotificacaoApp__["a" /* NotificacaoAppApi */],
                __WEBPACK_IMPORTED_MODULE_36__shared_sdk_services_custom_UsuarioProduto__["a" /* UsuarioProdutoApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["i" /* UsuarioApi */],
                __WEBPACK_IMPORTED_MODULE_5__shared_sdk__["b" /* AcaoApi */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                __WEBPACK_IMPORTED_MODULE_18_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_20__servico_acessa_fcm_service__["a" /* AcessaFcmService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_sdk_services_custom_DispositivoUsuario__["a" /* DispositivoUsuarioApi */],
                __WEBPACK_IMPORTED_MODULE_22__shared_sdk_services_custom_VisitaApp__["a" /* VisitaAppApi */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcessaFcmService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_Visitante__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_DispositivoUsuario__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_models_DispositivoUsuario__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_VisitaApp__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sdk_services_custom_NotificacaoApp__ = __webpack_require__(351);
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









var AcessaFcmService = /** @class */ (function () {
    function AcessaFcmService(fcm, dispositivoUsuarioSrv, visitaAppSrv, visitanteSrv, storage, device, notificacaoAppSrv) {
        this.fcm = fcm;
        this.dispositivoUsuarioSrv = dispositivoUsuarioSrv;
        this.visitaAppSrv = visitaAppSrv;
        this.visitanteSrv = visitanteSrv;
        this.storage = storage;
        this.device = device;
        this.notificacaoAppSrv = notificacaoAppSrv;
    }
    AcessaFcmService.prototype.carregaUsuario = function () {
    };
    // Chamada externa
    AcessaFcmService.prototype.registraVisitaPagina = function (chavePagina) {
        var _this = this;
        this.storage.get("chave").then(function (chaveUsuario) {
            if (chaveUsuario) {
                _this.visitaAppSrv.RegistraVisitaTelaApp(chaveUsuario, chavePagina)
                    .subscribe(function (resultado) {
                    //console.log('Resultado-VisitaPagina' , resultado);
                });
            }
        });
    };
    AcessaFcmService.prototype.executaValidacao = function (versaoAppId) {
        var _this = this;
        //alert('executaValidacao(versaoAppId: number)');
        this.storage.get("chave").then(function (dado) {
            if (dado) {
                //alert('Recuperou Chave');
                _this.ligaReceptorNotificacao();
                _this.registraVisitaApp(dado, versaoAppId);
            }
            else {
                //alert('Dado null');
                //this.obtemTokenDispostivoUsuario(versaoAppId);
                _this.executaValidacaoRemote(versaoAppId);
            }
        });
    };
    AcessaFcmService.prototype.executaValidacaoRemote = function (versaoAppId) {
        var _this = this;
        var filtro = { "include": "usuarioProduto", "where": { "and": [{ "uuid": this.device.uuid }] } };
        //alert('Filtro: ' + JSON.stringify(filtro));
        this.dispositivoUsuarioSrv.findOneItem(filtro)
            .subscribe(function (dispositvo) {
            _this.ligaReceptorNotificacao();
            _this.registraVisitaApp(dispositvo.usuarioProduto.chave, versaoAppId);
        }, function (erro) {
            _this.inscreveFcm(versaoAppId);
        });
    };
    AcessaFcmService.prototype.registraMobile = function (chave, versaoAppId) {
        var _this = this;
        //alert('registraMobile(chave, versaoAppId)');
        this.storage.set("chave", chave).then(function (successData) {
            _this.registraVisitaApp(chave, versaoAppId);
        });
    };
    AcessaFcmService.prototype.registraVisitaApp = function (chave, versaoAppId) {
        console.log('Passou em visita: ', chave);
        this.visitaAppSrv.RegistraVisitaVersaoApp(chave, versaoAppId)
            .subscribe(function (resultado) {
            console.log('Resultado-VisitaApp', resultado);
        });
    };
    AcessaFcmService.prototype.inscreveFcm = function (versaoAppId) {
        var _this = this;
        //alert('inscreveFcm(versaoAppId: number)');
        this.fcm.subscribeToTopic('novo');
        this.fcm.getToken().then(function (token) {
            //alert('Meu token:' + token);
            _this.registraTokenFcm(token, versaoAppId);
        });
        this.ligaReceptorNotificacao();
        this.fcm.onTokenRefresh().subscribe(function (token) {
            //alert('Novo token: ' + token);
            _this.registraTokenFcm(token, versaoAppId);
        });
    };
    AcessaFcmService.prototype.registraTokenFcm = function (token, versaoAppId) {
        var _this = this;
        var dispositivoUsuario = new __WEBPACK_IMPORTED_MODULE_4__shared_sdk_models_DispositivoUsuario__["a" /* DispositivoUsuario */]();
        dispositivoUsuario.tokenFcm = token;
        dispositivoUsuario.versaoAppId = versaoAppId;
        dispositivoUsuario.codigoDispositivo = this.device.model;
        dispositivoUsuario.versaoSo = this.device.version;
        dispositivoUsuario.fabricante = this.device.manufacturer;
        dispositivoUsuario.serial = this.device.serial;
        dispositivoUsuario.uuid = this.device.uuid;
        this.dispositivoUsuarioSrv.CriaComUsuario(dispositivoUsuario)
            .subscribe(function (resultado) {
            _this.registraMobile(resultado, versaoAppId);
        });
    };
    AcessaFcmService.prototype.ligaReceptorNotificacao = function () {
        var _this = this;
        //alert('ligaReceptorNotificacao()');
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                _this.notificacaoAppSrv.RegistraAcesso(data.tokenNotificacao)
                    .subscribe(function (resultado) {
                    //console.log('Resultado: ', resultado);
                });
            }
        });
    };
    AcessaFcmService.prototype.testaDevice = function () {
        //alert('Testa device');
        //alert('Serial:' + this.device.serial);
        //alert('UUID:' + this.device.uuid);
        //alert('Plataforma:' + this.device.platform);
        //alert('SO:' + this.device.version);
        //alert('Modelo:' + this.device.model);
    };
    AcessaFcmService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__["a" /* FCM */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_DispositivoUsuario__["a" /* DispositivoUsuarioApi */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_VisitaApp__["a" /* VisitaAppApi */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_Visitante__["a" /* VisitanteApi */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */])),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */])),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__shared_sdk_services_custom_NotificacaoApp__["a" /* NotificacaoAppApi */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_DispositivoUsuario__["a" /* DispositivoUsuarioApi */],
            __WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_VisitaApp__["a" /* VisitaAppApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_Visitante__["a" /* VisitanteApi */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_8__shared_sdk_services_custom_NotificacaoApp__["a" /* NotificacaoAppApi */]])
    ], AcessaFcmService);
    return AcessaFcmService;
}());

//# sourceMappingURL=acessa-fcm-service.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* tslint:disable */
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitaApp; });
/* tslint:disable */
var VisitaApp = /** @class */ (function () {
    function VisitaApp(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `VisitaApp`.
     */
    VisitaApp.getModelName = function () {
        return "VisitaApp";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of VisitaApp for dynamic purposes.
    **/
    VisitaApp.factory = function (data) {
        return new VisitaApp(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    VisitaApp.getModelDefinition = function () {
        return {
            name: 'VisitaApp',
            plural: 'VisitaApps',
            path: 'VisitaApps',
            idName: 'id',
            properties: {
                "dataHora": {
                    name: 'dataHora',
                    type: 'Date'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "telaAppId": {
                    name: 'telaAppId',
                    type: 'number'
                },
                "usuarioProdutoId": {
                    name: 'usuarioProdutoId',
                    type: 'number'
                },
                "versaoAppId": {
                    name: 'versaoAppId',
                    type: 'number'
                },
            },
            relations: {
                telaApp: {
                    name: 'telaApp',
                    type: 'TelaApp',
                    model: 'TelaApp',
                    relationType: 'belongsTo',
                    keyFrom: 'telaAppId',
                    keyTo: 'id'
                },
                usuarioProduto: {
                    name: 'usuarioProduto',
                    type: 'UsuarioProduto',
                    model: 'UsuarioProduto',
                    relationType: 'belongsTo',
                    keyFrom: 'usuarioProdutoId',
                    keyTo: 'id'
                },
                versaoApp: {
                    name: 'versaoApp',
                    type: 'VersaoApp',
                    model: 'VersaoApp',
                    relationType: 'belongsTo',
                    keyFrom: 'versaoAppId',
                    keyTo: 'id'
                },
            }
        };
    };
    return VisitaApp;
}());

//# sourceMappingURL=VisitaApp.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponenteBase; });
var ComponenteBase = /** @class */ (function () {
    function ComponenteBase() {
    }
    return ComponenteBase;
}());

//# sourceMappingURL=componente-base.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagSeguroAssinaturaDadoIdentificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pag_seguro_assinatura_dado_cliente_pag_seguro_assinatura_dado_cliente__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(37);
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
 * Generated class for the PagSeguroAssinaturaDadoIdentificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagSeguroAssinaturaDadoIdentificacaoPage = /** @class */ (function () {
    function PagSeguroAssinaturaDadoIdentificacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sender = {
            "name": "",
            "email": "",
            "hash": "",
            "phone": {
                "areaCode": "",
                "number": ""
            },
            "address": {
                "street": "",
                "number": "",
                "complement": "",
                "district": "",
                "city": "",
                "state": "",
                "country": "BRA",
                "postalCode": ""
            },
            "documents": [
                {
                    "type": "CPF",
                    "value": ""
                }
            ]
        };
    }
    PagSeguroAssinaturaDadoIdentificacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagSeguroAssinaturaDadoIdentificacaoPage');
        this.inicializacao();
    };
    PagSeguroAssinaturaDadoIdentificacaoPage.prototype.inicializacao = function () {
        this.sender = __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].sender;
        console.log('Data Nascimento', this.dataNascimento);
    };
    PagSeguroAssinaturaDadoIdentificacaoPage.prototype.avancar = function () {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]('en-US');
        __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */].paymentMethod.creditCard.holder.birthDate = datePipe.transform(this.dataNascimento, 'dd/MM/yyyy');
        console.log('PagSeguroAssinaturaDadoIdentificacaoPage:Assinatura: ', __WEBPACK_IMPORTED_MODULE_2__shared_assinatura__["a" /* Assinatura */]);
        if (this.validacao()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pag_seguro_assinatura_dado_cliente_pag_seguro_assinatura_dado_cliente__["a" /* PagSeguroAssinaturaDadoClientePage */]);
        }
    };
    PagSeguroAssinaturaDadoIdentificacaoPage.prototype.preenhcer = function () {
        this.sender.name = 'Paulo Alexandre';
        this.sender.email = 'paforest1970@gmail.com';
        this.sender.phone.areaCode = '21';
        this.sender.phone.number = '992902732';
        this.sender.documents[0].value = '01114740780';
    };
    PagSeguroAssinaturaDadoIdentificacaoPage.prototype.validacao = function () {
        var saida = true;
        if (!this.sender.name) {
            this.erroNome = "Coloque seu nome";
            saida = false;
        }
        else {
            this.erroNome = null;
        }
        if (!this.sender.email) {
            this.erroEmail = "Coloque seu email";
            saida = false;
        }
        else {
            this.erroEmail = null;
        }
        if (!this.sender.phone.areaCode) {
            this.erroTelDDD = "Coloque o DDD do seu telefone";
            saida = false;
        }
        else {
            this.erroTelDDD = null;
        }
        if (!this.sender.phone.number) {
            this.erroTelNumero = "Coloque seu número de telefone";
            saida = false;
        }
        else {
            this.erroTelNumero = null;
        }
        if (!this.sender.documents[0].value) {
            this.erroCpf = "Coloque seu cpf";
            saida = false;
        }
        else {
            this.erroCpf = null;
        }
        if (!this.dataNascimento) {
            this.erroNascimento = "Coloque sua data de nascimento";
            saida = false;
        }
        else {
            this.erroNascimento = null;
        }
        return saida;
    };
    PagSeguroAssinaturaDadoIdentificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pag-seguro-assinatura-dado-identificacao',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao.html"*/'<!--\n  Generated template for the PagSeguroAssinaturaDadoIdentificacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title (click)="preenhcer()">Identificação (1 de 3)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form  (ngSubmit)="avancar()">\n    <ion-item>\n      <ion-label floating>Nome*</ion-label>\n      <ion-input [(ngModel)]="sender.name" name="name"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroNome">\n      <p class="erroMsg">{{erroNome}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email*</ion-label>\n      <ion-input [(ngModel)]="sender.email" name="email"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroEmail">\n      <p class="erroMsg">{{erroEmail}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Telefone - DDD* (somente números)</ion-label>\n      <ion-input maxlength="2" [(ngModel)]="sender.phone.areaCode" name="areaCode"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroTelDDD">\n      <p class="erroMsg">{{erroTelDDD}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Telefone - Número* (somente números)</ion-label>\n      <ion-input maxlength="9" [(ngModel)]="sender.phone.number" name="number"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroTelNumero">\n      <p class="erroMsg">{{erroTelNumero}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>CPF* (somente números)</ion-label>\n      <ion-input maxlength="11" [(ngModel)]="sender.documents[0].value" name="value"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroCpf">\n      <p class="erroMsg">{{erroCpf}}</p>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Data Nascimento*</ion-label>\n      <ion-datetime presentWith="01/01/2000" displayFormat="DD/MM/YYYY" [(ngModel)]="dataNascimento" name="dataNascimento"></ion-datetime>\n    </ion-item>\n    <ion-item no-lines *ngIf="erroNascimento">\n      <p class="erroMsg">{{erroNascimento}}</p>\n    </ion-item>\n    \n    <button ion-button type="submit" block>Avançar</button>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PagSeguroAssinaturaDadoIdentificacaoPage);
    return PagSeguroAssinaturaDadoIdentificacaoPage;
}());

//# sourceMappingURL=pag-seguro-assinatura-dado-identificacao.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPORTUNIDADEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OPORTUNIDADEDIA_LISTAOPORTUNIDADEPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return OPORTUNIDADEDIA_LISTAOPORTUNIDADEPRECOPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OPORTUNIDADEDIA_LISTAOPORTUNIDADEASSINATURAPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPORTUNIDADEDIA_LISTAOPORTUNIDADEGENERICAPAGE; });
var OPORTUNIDADEDIA = [];
var OPORTUNIDADEDIA_LISTAOPORTUNIDADEPAGE = {};
var OPORTUNIDADEDIA_LISTAOPORTUNIDADEPRECOPAGE = {};
var OPORTUNIDADEDIA_LISTAOPORTUNIDADEASSINATURAPAGE = {};
var OPORTUNIDADEDIA_LISTAOPORTUNIDADEGENERICAPAGE = {};
//# sourceMappingURL=oportunidadeDia.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__real_time__ = __webpack_require__(337);
/* unused harmony namespace reexport */
/* tslint:disable */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());

//# sourceMappingURL=io.service.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(338);
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* FireLoopRef */](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());

//# sourceMappingURL=FireLoop.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoopRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__);
/* tslint:disable */


//import { merge } from 'rxjs';
//versao ionic

/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__["merge"])(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["catchError"])(function (error) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(error); }));
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());

//# sourceMappingURL=FireLoopRef.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UsuarioProduto */
var UsuarioProduto = /** @class */ (function () {
    function UsuarioProduto(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `UsuarioProduto`.
     */
    UsuarioProduto.getModelName = function () {
        return "UsuarioProduto";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of UsuarioProduto for dynamic purposes.
    **/
    UsuarioProduto.factory = function (data) {
        return new UsuarioProduto(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    UsuarioProduto.getModelDefinition = function () {
        return {
            name: 'UsuarioProduto',
            plural: 'UsuarioProdutos',
            path: 'UsuarioProdutos',
            idName: 'id',
            properties: {
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "senha": {
                    name: 'senha',
                    type: 'string'
                },
                "chave": {
                    name: 'chave',
                    type: 'string'
                },
                "dataHoraCriacao": {
                    name: 'dataHoraCriacao',
                    type: 'Date'
                },
                "dataUltimoAcesso": {
                    name: 'dataUltimoAcesso',
                    type: 'Date'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "projetoMySqlId": {
                    name: 'projetoMySqlId',
                    type: 'number'
                },
            },
            relations: {
                dispositivoUsuarios: {
                    name: 'dispositivoUsuarios',
                    type: 'DispositivoUsuario[]',
                    model: 'DispositivoUsuario',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'usuarioProdutoId'
                },
                notificacaoApps: {
                    name: 'notificacaoApps',
                    type: 'NotificacaoApp[]',
                    model: 'NotificacaoApp',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'usuarioProdutoId'
                },
            }
        };
    };
    return UsuarioProduto;
}());

//# sourceMappingURL=UsuarioProduto.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificacaoApp */
/* tslint:disable */
var NotificacaoApp = /** @class */ (function () {
    function NotificacaoApp(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `NotificacaoApp`.
     */
    NotificacaoApp.getModelName = function () {
        return "NotificacaoApp";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of NotificacaoApp for dynamic purposes.
    **/
    NotificacaoApp.factory = function (data) {
        return new NotificacaoApp(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    NotificacaoApp.getModelDefinition = function () {
        return {
            name: 'NotificacaoApp',
            plural: 'NotificacaoApps',
            path: 'NotificacaoApps',
            idName: 'id',
            properties: {
                "dataHoraEnvio": {
                    name: 'dataHoraEnvio',
                    type: 'Date'
                },
                "tokenNotificacao": {
                    name: 'tokenNotificacao',
                    type: 'string'
                },
                "dataHoraAcesso": {
                    name: 'dataHoraAcesso',
                    type: 'Date'
                },
                "dataHoraCriacao": {
                    name: 'dataHoraCriacao',
                    type: 'Date'
                },
                "resultadoEnvio": {
                    name: 'resultadoEnvio',
                    type: 'string'
                },
                "tipoEnvio": {
                    name: 'tipoEnvio',
                    type: 'string'
                },
                "titulo": {
                    name: 'titulo',
                    type: 'string'
                },
                "corpo": {
                    name: 'corpo',
                    type: 'string'
                },
                "badge": {
                    name: 'badge',
                    type: 'string'
                },
                "cor": {
                    name: 'cor',
                    type: 'string'
                },
                "tokenFcm": {
                    name: 'tokenFcm',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "dispositivoUsuarioId": {
                    name: 'dispositivoUsuarioId',
                    type: 'number'
                },
                "usuarioProdutoId": {
                    name: 'usuarioProdutoId',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return NotificacaoApp;
}());

//# sourceMappingURL=NotificacaoApp.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OportunidadeDia__ = __webpack_require__(339);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__OportunidadeDia__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Usuario__ = __webpack_require__(340);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__Usuario__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Acao__ = __webpack_require__(341);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Acao__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container__ = __webpack_require__(342);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SDKModels__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__SDKModels__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_service__ = __webpack_require__(343);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USUARIO; });
var USUARIO = [];
//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACAO; });
var ACAO = [];
//# sourceMappingURL=acao.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
/* tslint:disable */









/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` �?? `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` �?? `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` �?? `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * O corpo de resposta contém propriedades do AccessToken criado no login.
     * Dependendo do valor do parâmetro `include`, o corpo poderá conter propriedades adicionais:
     *
     *   - `user` - `U+007BUserU+007D` - Dados do usuário com login efetuado atualmente. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        }));
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` �?? `{string}` -
     *
     *  - `newPassword` �?? `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` �?? `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], UserApi);
    return UserApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadeGenericaPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_const__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componente_base__ = __webpack_require__(60);
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


// Tipo: LISTA
var ListaOportunidadeGenericaPageBase = /** @class */ (function (_super) {
    __extends(ListaOportunidadeGenericaPageBase, _super);
    function ListaOportunidadeGenericaPageBase(navCtrl, srv, storage, fcmSrv) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        _this.chave = '88da28c9773483a19047074ab6dd8b7cf5871016';
        return _this;
    }
    ListaOportunidadeGenericaPageBase.prototype.getPageEdicao = function () {
        throw new Error("ListaOportunidadeGenericaPage sem tela de edicao.");
    };
    ListaOportunidadeGenericaPageBase.prototype.getPageDetalhe = function () {
        throw new Error("ListaOportunidadeGenericaPage sem tela de detalhe.");
    };
    ListaOportunidadeGenericaPageBase.prototype.ionViewWillEnter = function () {
        this.fcmSrv.registraVisitaPagina(this.chave);
        console.log('');
        console.log('Tela: ListaOportunidadeGenericaPage<<LISTA>> : OportunidadeDia');
        this.carregaUsuario();
        this.inicializacao();
    };
    ListaOportunidadeGenericaPageBase.prototype.carregaLista = function () {
        var _this = this;
        console.log('OportunidadeDia.find: ', JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            console.log('Result:', resultado);
            _this.listaItem = resultado;
            _this.erroMsg = '';
        }, function (erro) {
            if (erro == 'Server error') {
                _this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
            }
        });
    };
    ListaOportunidadeGenericaPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.carregaLista();
        });
    };
    ListaOportunidadeGenericaPageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    ListaOportunidadeGenericaPageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    ListaOportunidadeGenericaPageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    ListaOportunidadeGenericaPageBase.prototype.verificaConexao = function (erro) {
        if (erro == 'Server error') {
            this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
        }
    };
    return ListaOportunidadeGenericaPageBase;
}(__WEBPACK_IMPORTED_MODULE_1__componente_base__["a" /* ComponenteBase */]));

//# sourceMappingURL=lista-oportunidade-generica-base.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadePrecoPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_const__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componente_base__ = __webpack_require__(60);
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


// Tipo: LISTA
var ListaOportunidadePrecoPageBase = /** @class */ (function (_super) {
    __extends(ListaOportunidadePrecoPageBase, _super);
    function ListaOportunidadePrecoPageBase(navCtrl, srv, storage, fcmSrv) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        _this.chave = '85527ccbb2019bf0833cf7f07b7514b544300b4e';
        return _this;
    }
    ListaOportunidadePrecoPageBase.prototype.getPageEdicao = function () {
        throw new Error("ListaOportunidadePrecoPage sem tela de edicao.");
    };
    ListaOportunidadePrecoPageBase.prototype.getPageDetalhe = function () {
        throw new Error("ListaOportunidadePrecoPage sem tela de detalhe.");
    };
    ListaOportunidadePrecoPageBase.prototype.ionViewWillEnter = function () {
        this.fcmSrv.registraVisitaPagina(this.chave);
        console.log('');
        console.log('Tela: ListaOportunidadePrecoPage<<LISTA>> : OportunidadeDia');
        this.carregaUsuario();
        this.inicializacao();
    };
    ListaOportunidadePrecoPageBase.prototype.carregaLista = function () {
        var _this = this;
        console.log('OportunidadeDia.find: ', JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            console.log('Result:', resultado);
            _this.listaItem = resultado;
            _this.erroMsg = '';
        }, function (erro) {
            if (erro == 'Server error') {
                _this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
            }
        });
    };
    ListaOportunidadePrecoPageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.carregaLista();
        });
    };
    ListaOportunidadePrecoPageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    ListaOportunidadePrecoPageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    ListaOportunidadePrecoPageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    ListaOportunidadePrecoPageBase.prototype.verificaConexao = function (erro) {
        if (erro == 'Server error') {
            this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
        }
    };
    return ListaOportunidadePrecoPageBase;
}(__WEBPACK_IMPORTED_MODULE_1__componente_base__["a" /* ComponenteBase */]));

//# sourceMappingURL=lista-oportunidade-preco-base.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaOportunidadePageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_const__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componente_base__ = __webpack_require__(60);
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


// Tipo: LISTA
var ListaOportunidadePageBase = /** @class */ (function (_super) {
    __extends(ListaOportunidadePageBase, _super);
    function ListaOportunidadePageBase(navCtrl, srv, storage, fcmSrv) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.srv = srv;
        _this.storage = storage;
        _this.fcmSrv = fcmSrv;
        _this.chave = 'b3297d218deb845c6a0979495829f78fbfa37b97';
        return _this;
    }
    ListaOportunidadePageBase.prototype.getPageEdicao = function () {
        throw new Error("ListaOportunidadePage sem tela de edicao.");
    };
    ListaOportunidadePageBase.prototype.getPageDetalhe = function () {
        throw new Error("ListaOportunidadePage sem tela de detalhe.");
    };
    ListaOportunidadePageBase.prototype.ionViewWillEnter = function () {
        this.fcmSrv.registraVisitaPagina(this.chave);
        console.log('');
        console.log('Tela: ListaOportunidadePage<<LISTA>> : OportunidadeDia');
        this.carregaUsuario();
        this.inicializacao();
    };
    ListaOportunidadePageBase.prototype.carregaLista = function () {
        var _this = this;
        console.log('OportunidadeDia.find: ', JSON.stringify(this.getFiltro()));
        this.srv.find(this.getFiltro())
            .subscribe(function (resultado) {
            console.log('Result:', resultado);
            _this.listaItem = resultado;
            _this.erroMsg = '';
        }, function (erro) {
            if (erro == 'Server error') {
                _this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
            }
        });
    };
    ListaOportunidadePageBase.prototype.carregaUsuario = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.usuario = val;
            _this.carregaLista();
        });
    };
    ListaOportunidadePageBase.prototype.detalheId = function (item) {
        this.navCtrl.push(this.getPageEdicao(), {
            id: item.id
        });
    };
    ListaOportunidadePageBase.prototype.alterarId = function (item) {
        this.navCtrl.push(this.getPageDetalhe(), {
            id: item.id
        });
    };
    ListaOportunidadePageBase.prototype.novo = function () {
        this.navCtrl.push(this.getPageEdicao());
    };
    ListaOportunidadePageBase.prototype.verificaConexao = function (erro) {
        if (erro == 'Server error') {
            this.erroMsg = __WEBPACK_IMPORTED_MODULE_0__app_const__["d" /* MSG_SEM_INTERNET */];
        }
    };
    return ListaOportunidadePageBase;
}(__WEBPACK_IMPORTED_MODULE_1__componente_base__["a" /* ComponenteBase */]));

//# sourceMappingURL=lista-oportunidade-base.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_sdk__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_const__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componente_base__ = __webpack_require__(60);
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




var LoginPageBase = /** @class */ (function (_super) {
    __extends(LoginPageBase, _super);
    function LoginPageBase(navCtrl, navParams, formBuilder, srv, srvAcao, storage, pagSeguro) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.formBuilder = formBuilder;
        _this.srv = srv;
        _this.srvAcao = srvAcao;
        _this.storage = storage;
        _this.pagSeguro = pagSeguro;
        _this.loginForm = _this.formBuilder.group({
            login: '',
            senha: ''
        });
        return _this;
    }
    LoginPageBase.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoginPage');
    };
    LoginPageBase.prototype.onSubmit = function () {
        var _this = this;
        var email = this.loginForm.get("login").value;
        var senha = this.loginForm.get("senha").value;
        var filtro = {
            'where': { 'and': [{ 'email': email }, { 'senha': senha }] }
        };
        this.srv.findOne(filtro)
            .subscribe(function (result) {
            console.log('UserLogin: ', result);
            _this.usuarioLogado = result;
            _this.executouLogin();
            _this.verificaAssinatura();
        }, function (erro) {
            console.log('Erro login: ', erro);
            if (erro == 'Server error') {
                _this.erroMsg = __WEBPACK_IMPORTED_MODULE_1__app_const__["d" /* MSG_SEM_INTERNET */];
            }
            else {
                if (erro.status == 404) {
                    _this.erroMsg = __WEBPACK_IMPORTED_MODULE_1__app_const__["c" /* MSG_ERRO_LOGIN */];
                    _this.errouLogin();
                }
            }
        });
    };
    LoginPageBase.prototype.armazenaUsuarioESegue = function () {
        var _this = this;
        this.storage.set("user", this.usuarioLogado).then(function (successData) {
            _this.mudaTela();
        });
    };
    LoginPageBase.prototype.executouLogin = function () {
        var acao = new __WEBPACK_IMPORTED_MODULE_0__shared_sdk__["a" /* Acao */]();
        acao.dataHora = new Date();
        acao.nome = 'LoginOk';
        acao.usuarioId = this.usuarioLogado.id;
        acao.objeto = 'Login';
        console.log('Acao: ', JSON.stringify(acao));
        this.srvAcao.create(acao)
            .subscribe(function (result) {
            console.log('Result: ', result);
        });
    };
    LoginPageBase.prototype.errouLogin = function () {
        var acao = new __WEBPACK_IMPORTED_MODULE_0__shared_sdk__["a" /* Acao */]();
        acao.dataHora = new Date();
        acao.nome = 'LoginErro';
        //acao.usuarioId = usuario.id;
        acao.objeto = 'Login';
        console.log('Acao: ', JSON.stringify(acao));
        this.srvAcao.create(acao)
            .subscribe(function (result) {
            console.log('Result: ', result);
        });
    };
    LoginPageBase.prototype.mudaTela = function () {
        var _this = this;
        this.navCtrl.push(this.getPaginaInicial()).then(function () {
            var index = 0;
            _this.navCtrl.remove(index);
        });
    };
    LoginPageBase.prototype.criarConta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPageBase.prototype.verificaAssinatura = function () {
        var _this = this;
        console.log('CodigoPagamento:', this.usuarioLogado.codigoPagamento);
        if (this.usuarioLogado.codigoPagamento) {
            this.pagSeguro.VerificaPagamento(this.usuarioLogado.codigoPagamento)
                .subscribe(function (result) {
                console.log('VerificaPagamento: ', result);
                _this.usuarioLogado.statusPagamento = result.status;
                _this.armazenaUsuarioESegue();
            });
        }
        else {
            this.armazenaUsuarioESegue();
        }
    };
    return LoginPageBase;
}(__WEBPACK_IMPORTED_MODULE_3__componente_base__["a" /* ComponenteBase */]));

//# sourceMappingURL=login-base.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_index__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comandos_zero_comandos_zero__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componente_base__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_const__ = __webpack_require__(54);
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





var SignupPageBase = /** @class */ (function (_super) {
    __extends(SignupPageBase, _super);
    function SignupPageBase(navCtrl, formBuilder, storage, srv) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.formBuilder = formBuilder;
        _this.storage = storage;
        _this.srv = srv;
        _this.msgSenha = __WEBPACK_IMPORTED_MODULE_4__app_const__["b" /* MSG_CADASTRO_TAMANHO_SENHA */];
        _this.msgEmail = __WEBPACK_IMPORTED_MODULE_4__app_const__["a" /* MSG_CADASTRO_EMAIL */];
        _this.signupForm = _this.formBuilder.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].email],
            senha1: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required])],
            senha2: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].required])]
        });
        return _this;
    }
    SignupPageBase.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoginPage');
    };
    SignupPageBase.prototype.ionViewWillEnter = function () {
        console.log('');
        console.log('Tela: SignupPage');
    };
    SignupPageBase.prototype.verificado = function () {
        var saida = (this.signupForm.get('login').valid) &&
            (this.signupForm.get('senha1').valid) &&
            (this.signupForm.get('senha2').valid);
        return saida;
    };
    SignupPageBase.prototype.onSubmit = function () {
        if (this.verificado()) {
            this.processaSubmit();
        }
    };
    SignupPageBase.prototype.processaSubmit = function () {
        var _this = this;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_1__shared_sdk_index__["h" /* Usuario */]();
        this.usuario.email = this.signupForm.get("login").value;
        var senha1 = this.signupForm.get("senha1").value;
        var senha2 = this.signupForm.get("senha2").value;
        if (senha1 != senha2) {
            //console.log('Entrou diferente');
            this.erroMsg = 'Senhas diferentes';
            return;
        }
        else {
            this.usuario.senha = senha1;
            this.usuario.dataHoraCriacao = new Date();
            this.usuario.dataHoraUltimoAcesso = new Date();
            console.log('Usuario-Enviado: ', this.usuario);
            this.srv.create(this.usuario)
                .subscribe(function (result) {
                _this.storage.set('user', result);
                console.log('SignUp: ', result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comandos_zero_comandos_zero__["a" /* ComandosZeroPage */]);
            }, function (error) {
                console.log('Erro: ', error);
                _this.erroMsg = 'Ocorreu um erro, tente novamente';
            });
        }
    };
    return SignupPageBase;
}(__WEBPACK_IMPORTED_MODULE_3__componente_base__["a" /* ComponenteBase */]));

//# sourceMappingURL=signup-base.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servico_acessa_fcm_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__const__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lista_oportunidade_preco_assinatura_lista_oportunidade_preco_assinatura__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, fcmSrv) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fcmSrv = fcmSrv;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_lista_oportunidade_preco_assinatura_lista_oportunidade_preco_assinatura__["a" /* ListaOportunidadePrecoAssinaturaPage */];
        this.showSplash = true;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.fcmSrv.executaValidacao(__WEBPACK_IMPORTED_MODULE_5__const__["e" /* VERSAO_APP_ID */]);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="spinner"></div>\n</div>\n\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__servico_acessa_fcm_service__["a" /* AcessaFcmService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/usuario/aplicacoes/ProdutosNode/cosmetic/ionic3_back_lab_credito/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 395,
	"./af.js": 395,
	"./ar": 396,
	"./ar-dz": 397,
	"./ar-dz.js": 397,
	"./ar-kw": 398,
	"./ar-kw.js": 398,
	"./ar-ly": 399,
	"./ar-ly.js": 399,
	"./ar-ma": 400,
	"./ar-ma.js": 400,
	"./ar-sa": 401,
	"./ar-sa.js": 401,
	"./ar-tn": 402,
	"./ar-tn.js": 402,
	"./ar.js": 396,
	"./az": 403,
	"./az.js": 403,
	"./be": 404,
	"./be.js": 404,
	"./bg": 405,
	"./bg.js": 405,
	"./bm": 406,
	"./bm.js": 406,
	"./bn": 407,
	"./bn.js": 407,
	"./bo": 408,
	"./bo.js": 408,
	"./br": 409,
	"./br.js": 409,
	"./bs": 410,
	"./bs.js": 410,
	"./ca": 411,
	"./ca.js": 411,
	"./cs": 412,
	"./cs.js": 412,
	"./cv": 413,
	"./cv.js": 413,
	"./cy": 414,
	"./cy.js": 414,
	"./da": 415,
	"./da.js": 415,
	"./de": 416,
	"./de-at": 417,
	"./de-at.js": 417,
	"./de-ch": 418,
	"./de-ch.js": 418,
	"./de.js": 416,
	"./dv": 419,
	"./dv.js": 419,
	"./el": 420,
	"./el.js": 420,
	"./en-SG": 421,
	"./en-SG.js": 421,
	"./en-au": 422,
	"./en-au.js": 422,
	"./en-ca": 423,
	"./en-ca.js": 423,
	"./en-gb": 424,
	"./en-gb.js": 424,
	"./en-ie": 425,
	"./en-ie.js": 425,
	"./en-il": 426,
	"./en-il.js": 426,
	"./en-nz": 427,
	"./en-nz.js": 427,
	"./eo": 428,
	"./eo.js": 428,
	"./es": 429,
	"./es-do": 430,
	"./es-do.js": 430,
	"./es-us": 431,
	"./es-us.js": 431,
	"./es.js": 429,
	"./et": 432,
	"./et.js": 432,
	"./eu": 433,
	"./eu.js": 433,
	"./fa": 434,
	"./fa.js": 434,
	"./fi": 435,
	"./fi.js": 435,
	"./fo": 436,
	"./fo.js": 436,
	"./fr": 437,
	"./fr-ca": 438,
	"./fr-ca.js": 438,
	"./fr-ch": 439,
	"./fr-ch.js": 439,
	"./fr.js": 437,
	"./fy": 440,
	"./fy.js": 440,
	"./ga": 441,
	"./ga.js": 441,
	"./gd": 442,
	"./gd.js": 442,
	"./gl": 443,
	"./gl.js": 443,
	"./gom-latn": 444,
	"./gom-latn.js": 444,
	"./gu": 445,
	"./gu.js": 445,
	"./he": 446,
	"./he.js": 446,
	"./hi": 447,
	"./hi.js": 447,
	"./hr": 448,
	"./hr.js": 448,
	"./hu": 449,
	"./hu.js": 449,
	"./hy-am": 450,
	"./hy-am.js": 450,
	"./id": 451,
	"./id.js": 451,
	"./is": 452,
	"./is.js": 452,
	"./it": 453,
	"./it-ch": 454,
	"./it-ch.js": 454,
	"./it.js": 453,
	"./ja": 455,
	"./ja.js": 455,
	"./jv": 456,
	"./jv.js": 456,
	"./ka": 457,
	"./ka.js": 457,
	"./kk": 458,
	"./kk.js": 458,
	"./km": 459,
	"./km.js": 459,
	"./kn": 460,
	"./kn.js": 460,
	"./ko": 461,
	"./ko.js": 461,
	"./ku": 462,
	"./ku.js": 462,
	"./ky": 463,
	"./ky.js": 463,
	"./lb": 464,
	"./lb.js": 464,
	"./lo": 465,
	"./lo.js": 465,
	"./lt": 466,
	"./lt.js": 466,
	"./lv": 467,
	"./lv.js": 467,
	"./me": 468,
	"./me.js": 468,
	"./mi": 469,
	"./mi.js": 469,
	"./mk": 470,
	"./mk.js": 470,
	"./ml": 471,
	"./ml.js": 471,
	"./mn": 472,
	"./mn.js": 472,
	"./mr": 473,
	"./mr.js": 473,
	"./ms": 474,
	"./ms-my": 475,
	"./ms-my.js": 475,
	"./ms.js": 474,
	"./mt": 476,
	"./mt.js": 476,
	"./my": 477,
	"./my.js": 477,
	"./nb": 478,
	"./nb.js": 478,
	"./ne": 479,
	"./ne.js": 479,
	"./nl": 480,
	"./nl-be": 481,
	"./nl-be.js": 481,
	"./nl.js": 480,
	"./nn": 482,
	"./nn.js": 482,
	"./pa-in": 483,
	"./pa-in.js": 483,
	"./pl": 484,
	"./pl.js": 484,
	"./pt": 485,
	"./pt-br": 486,
	"./pt-br.js": 486,
	"./pt.js": 485,
	"./ro": 487,
	"./ro.js": 487,
	"./ru": 488,
	"./ru.js": 488,
	"./sd": 489,
	"./sd.js": 489,
	"./se": 490,
	"./se.js": 490,
	"./si": 491,
	"./si.js": 491,
	"./sk": 492,
	"./sk.js": 492,
	"./sl": 493,
	"./sl.js": 493,
	"./sq": 494,
	"./sq.js": 494,
	"./sr": 495,
	"./sr-cyrl": 496,
	"./sr-cyrl.js": 496,
	"./sr.js": 495,
	"./ss": 497,
	"./ss.js": 497,
	"./sv": 498,
	"./sv.js": 498,
	"./sw": 499,
	"./sw.js": 499,
	"./ta": 500,
	"./ta.js": 500,
	"./te": 501,
	"./te.js": 501,
	"./tet": 502,
	"./tet.js": 502,
	"./tg": 503,
	"./tg.js": 503,
	"./th": 504,
	"./th.js": 504,
	"./tl-ph": 505,
	"./tl-ph.js": 505,
	"./tlh": 506,
	"./tlh.js": 506,
	"./tr": 507,
	"./tr.js": 507,
	"./tzl": 508,
	"./tzl.js": 508,
	"./tzm": 509,
	"./tzm-latn": 510,
	"./tzm-latn.js": 510,
	"./tzm.js": 509,
	"./ug-cn": 511,
	"./ug-cn.js": 511,
	"./uk": 512,
	"./uk.js": 512,
	"./ur": 513,
	"./ur.js": 513,
	"./uz": 514,
	"./uz-latn": 515,
	"./uz-latn.js": 515,
	"./uz.js": 514,
	"./vi": 516,
	"./vi.js": 516,
	"./x-pseudo": 517,
	"./x-pseudo.js": 517,
	"./yo": 518,
	"./yo.js": 518,
	"./zh-cn": 519,
	"./zh-cn.js": 519,
	"./zh-hk": 520,
	"./zh-hk.js": 520,
	"./zh-tw": 521,
	"./zh-tw.js": 521
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
webpackContext.id = 880;

/***/ })

},[537]);
//# sourceMappingURL=main.js.map