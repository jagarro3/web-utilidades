(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
    /***/
    "./src/app/core/data-service/formula-one-api.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/core/data-service/formula-one-api.service.ts ***!
      \**************************************************************/

    /*! exports provided: FormulaOneApiService */

    /***/
    function srcAppCoreDataServiceFormulaOneApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormulaOneApiService", function () {
        return FormulaOneApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _errors_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./errors/app-error */
      "./src/app/core/data-service/errors/app-error.ts");
      /* harmony import */


      var _errors_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./errors/index */
      "./src/app/core/data-service/errors/index.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var FormulaOneApiService = /*@__PURE__*/function () {
        var FormulaOneApiService = /*#__PURE__*/function () {
          function FormulaOneApiService(http) {
            _classCallCheck(this, FormulaOneApiService);

            this.http = http;
          }

          _createClass(FormulaOneApiService, [{
            key: "setHeaders",
            value: function setHeaders() {
              var headersConfig = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Cache-Control': 'no-store, no-cache',
                'X-RapidAPI-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiFormulaOne.xRapidAPIKey,
                'X-RapidAPI-Host': _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiFormulaOne.xRapidAPIHost
              };
              return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](headersConfig);
            }
          }, {
            key: "formatErrors",
            value: function formatErrors(response) {
              var applicationError = response.headers.get('Application-Error');

              if (applicationError) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
              }

              switch (response.status) {
                case 0:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_index__WEBPACK_IMPORTED_MODULE_5__["BackendOffline"](response));

                case 400:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_index__WEBPACK_IMPORTED_MODULE_5__["BadRequest"](response));

                case 401:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_index__WEBPACK_IMPORTED_MODULE_5__["Unauthorized"](response));

                case 403:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_index__WEBPACK_IMPORTED_MODULE_5__["Forbidden"](response));

                case 404:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_index__WEBPACK_IMPORTED_MODULE_5__["NotFoundError"](response));

                case 500:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_index__WEBPACK_IMPORTED_MODULE_5__["InternalServerError"](response));

                default:
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](response));
              }
            }
          }, {
            key: "get",
            value: function get(path) {
              var _this = this;

              var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
              return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiFormulaOne.url).concat(path), {
                headers: this.setHeaders(),
                params: params
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                return res.results;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return _this.formatErrors(error);
              }));
            }
          }]);

          return FormulaOneApiService;
        }();

        FormulaOneApiService.ɵfac = function FormulaOneApiService_Factory(t) {
          return new (t || FormulaOneApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
        };

        FormulaOneApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: FormulaOneApiService,
          factory: FormulaOneApiService.ɵfac,
          providedIn: 'root'
        });
        return FormulaOneApiService;
      }();
      /***/

    },

    /***/
    "./src/app/routes/formula-one/formula-one.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/routes/formula-one/formula-one.component.ts ***!
      \*************************************************************/

    /*! exports provided: FormulaOneComponent */

    /***/
    function srcAppRoutesFormulaOneFormulaOneComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormulaOneComponent", function () {
        return FormulaOneComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_services_formula_one_formula_one_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/formula-one/formula-one.service */
      "./src/app/shared/services/formula-one/formula-one.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function FormulaOneComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var constructorStanding_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", constructorStanding_r1.settings.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", constructorStanding_r1.settings.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](constructorStanding_r1.constructorInfo.teamName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](constructorStanding_r1.points);
        }
      }

      var FormulaOneComponent = /*@__PURE__*/function () {
        var FormulaOneComponent = /*#__PURE__*/function () {
          function FormulaOneComponent(formulaOneService, sanitizer) {
            _classCallCheck(this, FormulaOneComponent);

            this.formulaOneService = formulaOneService;
            this.sanitizer = sanitizer;
            this.getConstructorStandings();
          }

          _createClass(FormulaOneComponent, [{
            key: "getConstructorStandings",
            value: function getConstructorStandings() {
              var _this2 = this;

              this.constructorStandingsSubscription ? this.constructorStandingsSubscription.unsubscribe() : null;
              this.constructorStandingsSubscription = this.formulaOneService.getConstructorStandings().subscribe(function (data) {
                return _this2.constructorStandings = data, console.log(_this2.constructorStandings);
              }, function (error) {
                return console.error(error);
              });
            }
          }]);

          return FormulaOneComponent;
        }();

        FormulaOneComponent.ɵfac = function FormulaOneComponent_Factory(t) {
          return new (t || FormulaOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_formula_one_formula_one_service__WEBPACK_IMPORTED_MODULE_1__["FormulaOneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
        };

        FormulaOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: FormulaOneComponent,
          selectors: [["ng-component"]],
          decls: 7,
          vars: 1,
          consts: [[1, "row"], [1, "col-lg-5"], [1, "mb-0", "py-3", "bg-white", "text-center", "header-teams"], [1, "card", 2, "background", "#171717"], [1, "card-body"], ["class", "d-flex flex-row pb-2 team", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row", "pb-2", "team"], [1, "team-position", "mr-3"], [1, "align-self-center"], ["width", "40", 3, "src"], [1, "ml-3", "pr-3", "align-items-center", "d-flex", "justify-content-between", "team-name", 2, "width", "100%", "color", "white"], [1, "team-name", "ml-3"], [1, "team-name"]],
          template: function FormulaOneComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2022 TEAMS STANDINGS");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormulaOneComponent_div_6_Template, 11, 6, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.constructorStandings);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
          styles: [".team-color-bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 5px;\n  height: 28px;\n  margin-right: 13px;\n}\n\n.team-name[_ngcontent-%COMP%] {\n  font-family: 'FormulaOneFont';\n}\n\n.header-teams[_ngcontent-%COMP%] {\n  font-family: 'FormulaOneFont';\n}\n\n.team[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0px !important;\n}\n\n.team[_ngcontent-%COMP%]    > .team-name[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.team-position[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-family: 'FormulaOneFont';\n  font-size: 25px;\n}\n\n.team-position[_ngcontent-%COMP%] {\n  width: 50px;\n  background: white;\n  text-align: center;\n  justify-content: center;\n  border-radius: 3px;\n}"]
        });
        return FormulaOneComponent;
      }();
      /***/

    },

    /***/
    "./src/app/routes/formula-one/formula-one.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/routes/formula-one/formula-one.module.ts ***!
      \**********************************************************/

    /*! exports provided: FormulaOneModule */

    /***/
    function srcAppRoutesFormulaOneFormulaOneModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormulaOneModule", function () {
        return FormulaOneModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _formula_one_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formula-one.routing */
      "./src/app/routes/formula-one/formula-one.routing.ts");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-chartist */
      "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _formula_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./formula-one.component */
      "./src/app/routes/formula-one/formula-one.component.ts");

      var FormulaOneModule = /*@__PURE__*/function () {
        var FormulaOneModule = function FormulaOneModule() {
          _classCallCheck(this, FormulaOneModule);
        };

        FormulaOneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: FormulaOneModule
        });
        FormulaOneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function FormulaOneModule_Factory(t) {
            return new (t || FormulaOneModule)();
          },
          imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_formula_one_routing__WEBPACK_IMPORTED_MODULE_6__["FormulaOneRoutes"]), _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]]]
        });
        return FormulaOneModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormulaOneModule, {
          declarations: [_formula_one_component__WEBPACK_IMPORTED_MODULE_9__["FormulaOneComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/routes/formula-one/formula-one.routing.ts":
    /*!***********************************************************!*\
      !*** ./src/app/routes/formula-one/formula-one.routing.ts ***!
      \***********************************************************/

    /*! exports provided: FormulaOneRoutes */

    /***/
    function srcAppRoutesFormulaOneFormulaOneRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormulaOneRoutes", function () {
        return FormulaOneRoutes;
      });
      /* harmony import */


      var _formula_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./formula-one.component */
      "./src/app/routes/formula-one/formula-one.component.ts");

      var FormulaOneRoutes = [{
        path: '',
        component: _formula_one_component__WEBPACK_IMPORTED_MODULE_0__["FormulaOneComponent"]
      }];
      /***/
    },

    /***/
    "./src/app/shared/models/formula-one/constructor-info.model.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/models/formula-one/constructor-info.model.ts ***!
      \*********************************************************************/

    /*! exports provided: ConstructorInfo, ConstructorInfoAdapter */

    /***/
    function srcAppSharedModelsFormulaOneConstructorInfoModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstructorInfo", function () {
        return ConstructorInfo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstructorInfoAdapter", function () {
        return ConstructorInfoAdapter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ConstructorInfo = function ConstructorInfo() {
        _classCallCheck(this, ConstructorInfo);
      };

      var ConstructorInfoAdapter = /*@__PURE__*/function () {
        var ConstructorInfoAdapter = /*#__PURE__*/function () {
          function ConstructorInfoAdapter() {
            _classCallCheck(this, ConstructorInfoAdapter);
          }

          _createClass(ConstructorInfoAdapter, [{
            key: "adapt",
            value: function adapt(item) {
              var constructorInfo = new ConstructorInfo();
              constructorInfo.season = item.season;
              constructorInfo.teamId = item.team_id;
              constructorInfo.teamName = item.team_name;
              return constructorInfo;
            }
          }]);

          return ConstructorInfoAdapter;
        }();

        ConstructorInfoAdapter.ɵfac = function ConstructorInfoAdapter_Factory(t) {
          return new (t || ConstructorInfoAdapter)();
        };

        ConstructorInfoAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ConstructorInfoAdapter,
          factory: ConstructorInfoAdapter.ɵfac,
          providedIn: 'root'
        });
        return ConstructorInfoAdapter;
      }();
      /***/

    },

    /***/
    "./src/app/shared/models/formula-one/constructor-standing.model.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/models/formula-one/constructor-standing.model.ts ***!
      \*************************************************************************/

    /*! exports provided: ConstructorStanding, ConstructorStandingAdapter */

    /***/
    function srcAppSharedModelsFormulaOneConstructorStandingModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstructorStanding", function () {
        return ConstructorStanding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstructorStandingAdapter", function () {
        return ConstructorStandingAdapter;
      });
      /* harmony import */


      var _constructor_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./constructor-info.model */
      "./src/app/shared/models/formula-one/constructor-info.model.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _assets_data_formula_one_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../assets/data/formula-one-settings */
      "./src/assets/data/formula-one-settings.ts");

      var ConstructorStanding = function ConstructorStanding() {
        _classCallCheck(this, ConstructorStanding);
      };

      var ConstructorStandingAdapter = /*@__PURE__*/function () {
        var ConstructorStandingAdapter = /*#__PURE__*/function () {
          function ConstructorStandingAdapter() {
            _classCallCheck(this, ConstructorStandingAdapter);
          }

          _createClass(ConstructorStandingAdapter, [{
            key: "adapt",
            value: function adapt(item) {
              var constructorStanding = new ConstructorStanding();
              constructorStanding.points = item.points;
              constructorStanding.position = item.position;
              constructorStanding.constructorInfo = new _constructor_info_model__WEBPACK_IMPORTED_MODULE_0__["ConstructorInfo"]();
              constructorStanding.constructorInfo.teamId = item.team_id;
              constructorStanding.constructorInfo.teamName = item.team_name;
              constructorStanding.settings = Object(_assets_data_formula_one_settings__WEBPACK_IMPORTED_MODULE_2__["getSettings"])(item.season, item.team_id);
              return constructorStanding;
            }
          }]);

          return ConstructorStandingAdapter;
        }();

        ConstructorStandingAdapter.ɵfac = function ConstructorStandingAdapter_Factory(t) {
          return new (t || ConstructorStandingAdapter)();
        };

        ConstructorStandingAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: ConstructorStandingAdapter,
          factory: ConstructorStandingAdapter.ɵfac,
          providedIn: 'root'
        });
        return ConstructorStandingAdapter;
      }();
      /***/

    },

    /***/
    "./src/app/shared/services/formula-one/formula-one.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/formula-one/formula-one.service.ts ***!
      \********************************************************************/

    /*! exports provided: FormulaOneService */

    /***/
    function srcAppSharedServicesFormulaOneFormulaOneServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormulaOneService", function () {
        return FormulaOneService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _core_data_service_formula_one_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/data-service/formula-one-api.service */
      "./src/app/core/data-service/formula-one-api.service.ts");
      /* harmony import */


      var _models_formula_one_constructor_standing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/formula-one/constructor-standing.model */
      "./src/app/shared/models/formula-one/constructor-standing.model.ts");

      var FormulaOneService = /*@__PURE__*/function () {
        var FormulaOneService = /*#__PURE__*/function () {
          function FormulaOneService(formulaOneApiService, constructorStandingAdapter) {
            _classCallCheck(this, FormulaOneService);

            this.formulaOneApiService = formulaOneApiService;
            this.constructorStandingAdapter = constructorStandingAdapter;
          }

          _createClass(FormulaOneService, [{
            key: "getConstructorStandings",
            value: function getConstructorStandings() {
              var _this3 = this;

              var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2022;
              return this.formulaOneApiService.get("constructors/standings/".concat(year)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
                return data.map(function (item) {
                  return _this3.constructorStandingAdapter.adapt(item);
                });
              }));
            }
          }]);

          return FormulaOneService;
        }();

        FormulaOneService.ɵfac = function FormulaOneService_Factory(t) {
          return new (t || FormulaOneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_data_service_formula_one_api_service__WEBPACK_IMPORTED_MODULE_2__["FormulaOneApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models_formula_one_constructor_standing_model__WEBPACK_IMPORTED_MODULE_3__["ConstructorStandingAdapter"]));
        };

        FormulaOneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: FormulaOneService,
          factory: FormulaOneService.ɵfac,
          providedIn: 'root'
        });
        return FormulaOneService;
      }();
      /***/

    },

    /***/
    "./src/assets/data/formula-one-settings.ts":
    /*!*************************************************!*\
      !*** ./src/assets/data/formula-one-settings.ts ***!
      \*************************************************/

    /*! exports provided: formulaOneSettings, getSettings */

    /***/
    function srcAssetsDataFormulaOneSettingsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "formulaOneSettings", function () {
        return formulaOneSettings;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSettings", function () {
        return getSettings;
      });

      var formulaOneSettings = [{
        season: 2022,
        constructors: [{
          id: 71583,
          icon: '../assets/images/formula-one/2022/constructors/icons/alfarom.png',
          color: '#B12039'
        }, {
          id: 199493,
          icon: '../assets/images/formula-one/2022/constructors/icons/alphatauri.png',
          color: '#4E7C9B'
        }, {
          id: 31205,
          icon: '../assets/images/formula-one/2022/constructors/icons/alpine.png',
          color: '#2293D1'
        }, {
          id: 65311,
          icon: '../assets/images/formula-one/2022/constructors/icons/astonma.png',
          color: '#2D826D'
        }, {
          id: 183197,
          icon: '../assets/images/formula-one/2022/constructors/icons/ferrari.png',
          color: '#ED1C24'
        }, {
          id: 143585,
          icon: '../assets/images/formula-one/2022/constructors/icons/haas.png',
          color: '#B6BABD'
        }, {
          id: 56525,
          icon: '../assets/images/formula-one/2022/constructors/icons/mclaren.png',
          color: '#F58020'
        }, {
          id: 58685,
          icon: '../assets/images/formula-one/2022/constructors/icons/mercedes.png',
          color: '#6CD3BF'
        }, {
          id: 33121,
          icon: '../assets/images/formula-one/2022/constructors/icons/redbull.png',
          color: '#1E5BC6'
        }, {
          id: 163637,
          icon: '../assets/images/formula-one/2022/constructors/icons/williams.png',
          color: '#1E5BC6'
        }]
      }];

      function getSettings(season, id) {
        var seasonSettings = formulaOneSettings.find(function (f) {
          return f.season == season;
        });

        if (seasonSettings == undefined) {
          throw new Error('Not found season');
        }

        var constructorSettings = seasonSettings.constructors.find(function (c) {
          return c.id == id;
        });

        if (seasonSettings == undefined) {
          throw new Error("Not found constructor: ".concat(id));
        }

        return constructorSettings;
      }
      /***/

    }
  }]);
})();