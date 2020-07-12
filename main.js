(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm5/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/fesm5/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/fesm5/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/fesm5/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm5/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/fesm5/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/fesm5/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/fesm5/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/fesm5/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/fesm5/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm5/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/fesm5/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm5/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/fesm5/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm5/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/fesm5/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm5/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/fesm5/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm5/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/fesm5/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm5/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm5/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm5/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm5/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/fesm5/tree.js");










































var matModules = [
    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]
];
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_why_why_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/why/why.component */ "./src/app/components/why/why.component.ts");
/* harmony import */ var _components_tp_news_tp_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tp-news/tp-news.component */ "./src/app/components/tp-news/tp-news.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_current_leaders_current_leaders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/current-leaders/current-leaders.component */ "./src/app/components/current-leaders/current-leaders.component.ts");
/* harmony import */ var _components_hightlights_hightlights_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hightlights/hightlights.component */ "./src/app/components/hightlights/hightlights.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");








var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'why', component: _components_why_why_component__WEBPACK_IMPORTED_MODULE_2__["WhyComponent"] },
    { path: 'tpnews', component: _components_tp_news_tp_news_component__WEBPACK_IMPORTED_MODULE_3__["TPNewsComponent"] },
    { path: 'gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'currentLeaders', component: _components_current_leaders_current_leaders_component__WEBPACK_IMPORTED_MODULE_5__["CurrentLeadersComponent"] },
    { path: 'hightlights', component: _components_hightlights_hightlights_component__WEBPACK_IMPORTED_MODULE_6__["HightlightsComponent"] },
    { path: 'contactś', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/material/toolbar/index.ngfactory */ "./node_modules/@angular/material/toolbar/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm5/toolbar.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm5/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@angular/material/button/index.ngfactory */ "./node_modules/@angular/material/button/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm5/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/@angular/material/icon/index.ngfactory */ "./node_modules/@angular/material/icon/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm5/icon.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/@angular/material/sidenav/index.ngfactory */ "./node_modules/@angular/material/sidenav/index.ngfactory.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm5/sidenav.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm5/bidi.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm5/scrolling.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../node_modules/@angular/material/list/index.ngfactory */ "./node_modules/@angular/material/list/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/fesm5/list.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

























var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit === _co.translate.currentLang); _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit; _ck(_v, 3, 0, currVal_3); }); }
function View_AppComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit === _co.translate.currentLang); _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit; _ck(_v, 3, 0, currVal_3); }); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", "Logo"], ["class", "img-responsive"], ["data-at2x", "images/logo@2x.png"], ["src", "assets/images/logo.jpg"], ["style", "width:100%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 205, "div", [["style", "height: 90vh;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 101, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 98, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "button", [["class", "mat-focus-indicator"], ["fxHide.gt-sm", ""], ["fxShow", "true"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["SERVER_TOKEN"]], { fxShow: [0, "fxShow"], "fxHide.gt-sm": [1, "fxHide.gt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](15, { "ta-title": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](17, { "ta-title": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "span", [["class", "menu-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 82, "div", [["fxHide.lt-md", ""], ["fxShow", "true"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["SERVER_TOKEN"]], { fxShow: [0, "fxShow"], "fxHide.lt-md": [1, "fxHide.lt-md"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/home"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](29, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/about"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](34, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](38, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/why"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](43, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](47, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](48, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/tpnews"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](52, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](56, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](57, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/gallery"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](61, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](65, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](66, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/currentLeaders"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](70, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](74, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](75, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/hightlights"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](79, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](83, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](84, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/contact\u015B"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](88, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](92, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](93, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 8, "span", [["class", "form-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 7, "select", [["class", "form-control"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedValue = $event) !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.switchLang(_co.selectedValue) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 102, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"], ["fxFlexFill", ""]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _allDrawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _content: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, 0, 90, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111)._animationStartListener($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111)._animationDoneListener($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 3325952, [[2, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, 0, 88, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_MatNavList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, 0, 5, "a", [["class", "mat-list-item mat-focus-indicator"], ["href", ""], ["mat-list-item", ""]], [[2, "mat-list-item-disabled", null], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_MatListItem_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatList"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/home"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](122, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](126, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](127, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/about"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](131, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](133, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](135, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](136, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/why"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](139, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](140, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](142, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](144, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](145, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/tpnews"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](148, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](149, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](151, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](153, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](154, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/gallery"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](157, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](158, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](160, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](162, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](163, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/currentLeaders"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](166, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](167, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](168, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](170, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](171, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](172, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/hightlights"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](175, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](176, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](177, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](179, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](180, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](181, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, 0, 8, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""], ["routerLink", "/contact\u015B"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](184, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](185, { "ta-fontsize": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](186, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](187, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](188, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](189, { "ta-fontsize": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](190, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, 0, 8, "span", [["class", "form-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 7, "select", [["class", "form-control"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedValue = $event) !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.switchLang(_co.selectedValue) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](196, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](198, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](200, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, 1, 5, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"], ["fxFlexFill", ""]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](202, 1294336, [[3, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](203, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, 0, 2, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](205, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](206, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "primary"; _ck(_v, 3, 0, currVal_2); var currVal_5 = "true"; var currVal_6 = ""; _ck(_v, 9, 0, currVal_5, currVal_6); _ck(_v, 11, 0); var currVal_9 = _ck(_v, 15, 0, (_co.translate.currentLang === "ta")); _ck(_v, 14, 0, currVal_9); var currVal_10 = _ck(_v, 17, 0, (_co.translate.currentLang === "ta")); _ck(_v, 16, 0, currVal_10); var currVal_12 = "true"; var currVal_13 = ""; _ck(_v, 22, 0, currVal_12, currVal_13); var currVal_20 = _ck(_v, 25, 0, (_co.translate.currentLang === "ta")); _ck(_v, 24, 0, currVal_20); var currVal_21 = "/home"; _ck(_v, 26, 0, currVal_21); var currVal_22 = _ck(_v, 29, 0, (_co.translate.currentLang === "ta")); _ck(_v, 28, 0, currVal_22); var currVal_30 = _ck(_v, 34, 0, (_co.translate.currentLang === "ta")); _ck(_v, 33, 0, currVal_30); var currVal_31 = "/about"; _ck(_v, 35, 0, currVal_31); var currVal_32 = _ck(_v, 38, 0, (_co.translate.currentLang === "ta")); _ck(_v, 37, 0, currVal_32); var currVal_40 = _ck(_v, 43, 0, (_co.translate.currentLang === "ta")); _ck(_v, 42, 0, currVal_40); var currVal_41 = "/why"; _ck(_v, 44, 0, currVal_41); var currVal_42 = _ck(_v, 47, 0, (_co.translate.currentLang === "ta")); _ck(_v, 46, 0, currVal_42); var currVal_50 = _ck(_v, 52, 0, (_co.translate.currentLang === "ta")); _ck(_v, 51, 0, currVal_50); var currVal_51 = "/tpnews"; _ck(_v, 53, 0, currVal_51); var currVal_52 = _ck(_v, 56, 0, (_co.translate.currentLang === "ta")); _ck(_v, 55, 0, currVal_52); var currVal_60 = _ck(_v, 61, 0, (_co.translate.currentLang === "ta")); _ck(_v, 60, 0, currVal_60); var currVal_61 = "/gallery"; _ck(_v, 62, 0, currVal_61); var currVal_62 = _ck(_v, 65, 0, (_co.translate.currentLang === "ta")); _ck(_v, 64, 0, currVal_62); var currVal_70 = _ck(_v, 70, 0, (_co.translate.currentLang === "ta")); _ck(_v, 69, 0, currVal_70); var currVal_71 = "/currentLeaders"; _ck(_v, 71, 0, currVal_71); var currVal_72 = _ck(_v, 74, 0, (_co.translate.currentLang === "ta")); _ck(_v, 73, 0, currVal_72); var currVal_80 = _ck(_v, 79, 0, (_co.translate.currentLang === "ta")); _ck(_v, 78, 0, currVal_80); var currVal_81 = "/hightlights"; _ck(_v, 80, 0, currVal_81); var currVal_82 = _ck(_v, 83, 0, (_co.translate.currentLang === "ta")); _ck(_v, 82, 0, currVal_82); var currVal_90 = _ck(_v, 88, 0, (_co.translate.currentLang === "ta")); _ck(_v, 87, 0, currVal_90); var currVal_91 = "/contact\u015B"; _ck(_v, 89, 0, currVal_91); var currVal_92 = _ck(_v, 92, 0, (_co.translate.currentLang === "ta")); _ck(_v, 91, 0, currVal_92); var currVal_101 = _co.selectedValue; _ck(_v, 99, 0, currVal_101); var currVal_102 = _co.translate.getLangs(); _ck(_v, 103, 0, currVal_102); _ck(_v, 105, 0); var currVal_123 = _ck(_v, 122, 0, (_co.translate.currentLang === "ta")); _ck(_v, 121, 0, currVal_123); var currVal_124 = "/home"; _ck(_v, 123, 0, currVal_124); var currVal_125 = _ck(_v, 126, 0, (_co.translate.currentLang === "ta")); _ck(_v, 125, 0, currVal_125); var currVal_133 = _ck(_v, 131, 0, (_co.translate.currentLang === "ta")); _ck(_v, 130, 0, currVal_133); var currVal_134 = "/about"; _ck(_v, 132, 0, currVal_134); var currVal_135 = _ck(_v, 135, 0, (_co.translate.currentLang === "ta")); _ck(_v, 134, 0, currVal_135); var currVal_143 = _ck(_v, 140, 0, (_co.translate.currentLang === "ta")); _ck(_v, 139, 0, currVal_143); var currVal_144 = "/why"; _ck(_v, 141, 0, currVal_144); var currVal_145 = _ck(_v, 144, 0, (_co.translate.currentLang === "ta")); _ck(_v, 143, 0, currVal_145); var currVal_153 = _ck(_v, 149, 0, (_co.translate.currentLang === "ta")); _ck(_v, 148, 0, currVal_153); var currVal_154 = "/tpnews"; _ck(_v, 150, 0, currVal_154); var currVal_155 = _ck(_v, 153, 0, (_co.translate.currentLang === "ta")); _ck(_v, 152, 0, currVal_155); var currVal_163 = _ck(_v, 158, 0, (_co.translate.currentLang === "ta")); _ck(_v, 157, 0, currVal_163); var currVal_164 = "/gallery"; _ck(_v, 159, 0, currVal_164); var currVal_165 = _ck(_v, 162, 0, (_co.translate.currentLang === "ta")); _ck(_v, 161, 0, currVal_165); var currVal_173 = _ck(_v, 167, 0, (_co.translate.currentLang === "ta")); _ck(_v, 166, 0, currVal_173); var currVal_174 = "/currentLeaders"; _ck(_v, 168, 0, currVal_174); var currVal_175 = _ck(_v, 171, 0, (_co.translate.currentLang === "ta")); _ck(_v, 170, 0, currVal_175); var currVal_183 = _ck(_v, 176, 0, (_co.translate.currentLang === "ta")); _ck(_v, 175, 0, currVal_183); var currVal_184 = "/hightlights"; _ck(_v, 177, 0, currVal_184); var currVal_185 = _ck(_v, 180, 0, (_co.translate.currentLang === "ta")); _ck(_v, 179, 0, currVal_185); var currVal_193 = _ck(_v, 185, 0, (_co.translate.currentLang === "ta")); _ck(_v, 184, 0, currVal_193); var currVal_194 = "/contact\u015B"; _ck(_v, 186, 0, currVal_194); var currVal_195 = _ck(_v, 189, 0, (_co.translate.currentLang === "ta")); _ck(_v, 188, 0, currVal_195); var currVal_204 = _co.selectedValue; _ck(_v, 196, 0, currVal_204); var currVal_205 = _co.translate.getLangs(); _ck(_v, 200, 0, currVal_205); _ck(_v, 202, 0); _ck(_v, 206, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._toolbarRows.length === 0); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations"); _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).inline; var currVal_8 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).color !== "warn")); _ck(_v, 10, 0, currVal_7, currVal_8); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).transform("Sitetitle")); _ck(_v, 18, 0, currVal_11); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).target; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).href; var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).tabIndex || 0)); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled || null); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled.toString(); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 23, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform("Home")); _ck(_v, 30, 0, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).target; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).href; var currVal_26 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).tabIndex || 0)); var currVal_27 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled || null); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled.toString(); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._animationMode === "NoopAnimations"); _ck(_v, 32, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 39, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).transform("About")); _ck(_v, 39, 0, currVal_33); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).target; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).href; var currVal_36 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).tabIndex || 0)); var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).disabled || null); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).disabled.toString(); var currVal_39 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._animationMode === "NoopAnimations"); _ck(_v, 41, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 48, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).transform("Tourism")); _ck(_v, 48, 0, currVal_43); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).target; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).href; var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).tabIndex || 0)); var currVal_47 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).disabled || null); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).disabled.toString(); var currVal_49 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._animationMode === "NoopAnimations"); _ck(_v, 50, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 57, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).transform("News")); _ck(_v, 57, 0, currVal_53); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).target; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).href; var currVal_56 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).tabIndex || 0)); var currVal_57 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).disabled || null); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).disabled.toString(); var currVal_59 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._animationMode === "NoopAnimations"); _ck(_v, 59, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 66, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).transform("Gallery")); _ck(_v, 66, 0, currVal_63); var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).target; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).href; var currVal_66 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).tabIndex || 0)); var currVal_67 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).disabled || null); var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).disabled.toString(); var currVal_69 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72)._animationMode === "NoopAnimations"); _ck(_v, 68, 0, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69); var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 75, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).transform("Leaders")); _ck(_v, 75, 0, currVal_73); var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).target; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).href; var currVal_76 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).tabIndex || 0)); var currVal_77 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).disabled || null); var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).disabled.toString(); var currVal_79 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._animationMode === "NoopAnimations"); _ck(_v, 77, 0, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79); var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).transform("Hightlights")); _ck(_v, 84, 0, currVal_83); var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).target; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).href; var currVal_86 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).tabIndex || 0)); var currVal_87 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).disabled || null); var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).disabled.toString(); var currVal_89 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90)._animationMode === "NoopAnimations"); _ck(_v, 86, 0, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89); var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 93, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).transform("Contact")); _ck(_v, 93, 0, currVal_93); var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassUntouched; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassTouched; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassPristine; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassDirty; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassValid; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassInvalid; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassPending; _ck(_v, 96, 0, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100); var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._backdropOverride; _ck(_v, 104, 0, currVal_103); var currVal_104 = null; var currVal_105 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).position === "end"); var currVal_106 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).mode === "over"); var currVal_107 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).mode === "push"); var currVal_108 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).mode === "side"); var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).opened; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).fixedInViewport; var currVal_111 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).fixedTopGap : null); var currVal_112 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).fixedBottomGap : null); var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111)._animationState; _ck(_v, 110, 0, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113); var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115).disabled; var currVal_115 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115)._icon); var currVal_116 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 115)._icon); _ck(_v, 114, 0, currVal_114, currVal_115, currVal_116); var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).target; var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 123).href; var currVal_119 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124).tabIndex || 0)); var currVal_120 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124).disabled || null); var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124).disabled.toString(); var currVal_122 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124)._animationMode === "NoopAnimations"); _ck(_v, 120, 0, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122); var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 127, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).transform("Home")); _ck(_v, 127, 0, currVal_126); var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).target; var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).href; var currVal_129 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).tabIndex || 0)); var currVal_130 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).disabled || null); var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133).disabled.toString(); var currVal_132 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 133)._animationMode === "NoopAnimations"); _ck(_v, 129, 0, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132); var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 136, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).transform("About")); _ck(_v, 136, 0, currVal_136); var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).target; var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).href; var currVal_139 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).tabIndex || 0)); var currVal_140 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).disabled || null); var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).disabled.toString(); var currVal_142 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142)._animationMode === "NoopAnimations"); _ck(_v, 138, 0, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142); var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 145, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 146).transform("Tourism")); _ck(_v, 145, 0, currVal_146); var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).target; var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 150).href; var currVal_149 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).tabIndex || 0)); var currVal_150 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).disabled || null); var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151).disabled.toString(); var currVal_152 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 151)._animationMode === "NoopAnimations"); _ck(_v, 147, 0, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152); var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 154, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 155).transform("News")); _ck(_v, 154, 0, currVal_156); var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).target; var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 159).href; var currVal_159 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).tabIndex || 0)); var currVal_160 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).disabled || null); var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160).disabled.toString(); var currVal_162 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 160)._animationMode === "NoopAnimations"); _ck(_v, 156, 0, currVal_157, currVal_158, currVal_159, currVal_160, currVal_161, currVal_162); var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 163, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 164).transform("Gallery")); _ck(_v, 163, 0, currVal_166); var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).target; var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).href; var currVal_169 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).tabIndex || 0)); var currVal_170 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).disabled || null); var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).disabled.toString(); var currVal_172 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169)._animationMode === "NoopAnimations"); _ck(_v, 165, 0, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171, currVal_172); var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 172, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).transform("Leaders")); _ck(_v, 172, 0, currVal_176); var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).target; var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 177).href; var currVal_179 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).tabIndex || 0)); var currVal_180 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).disabled || null); var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178).disabled.toString(); var currVal_182 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 178)._animationMode === "NoopAnimations"); _ck(_v, 174, 0, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182); var currVal_186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 181, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 182).transform("Hightlights")); _ck(_v, 181, 0, currVal_186); var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).target; var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).href; var currVal_189 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187).tabIndex || 0)); var currVal_190 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187).disabled || null); var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187).disabled.toString(); var currVal_192 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 187)._animationMode === "NoopAnimations"); _ck(_v, 183, 0, currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192); var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 190, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).transform("Contact")); _ck(_v, 190, 0, currVal_196); var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassUntouched; var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassTouched; var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPristine; var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassDirty; var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassValid; var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassInvalid; var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPending; _ck(_v, 193, 0, currVal_197, currVal_198, currVal_199, currVal_200, currVal_201, currVal_202, currVal_203); var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202)._container._contentMargins.left; var currVal_207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202)._container._contentMargins.right; _ck(_v, 201, 0, currVal_206, currVal_207); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".menu-spacer[_ngcontent-%COMP%] {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGxlYXJuaW5nXFxLUF93ZWJzaXRlXFxrYW5hZHVrYXRoYW50cC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtNQUFBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuIiwiLm1lbnUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'kanadukathantp';
        this.selectedValue = 'en';
        translate.addLangs(['en', 'ta']);
        translate.setDefaultLang('en');
    }
    AppComponent.prototype.switchLang = function (selectedvalue) {
        this.translate.use(selectedvalue);
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _components_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component.ngfactory */ "./src/app/components/home/home.component.ngfactory.js");
/* harmony import */ var _components_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component.ngfactory */ "./src/app/components/about/about.component.ngfactory.js");
/* harmony import */ var _components_why_why_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/why/why.component.ngfactory */ "./src/app/components/why/why.component.ngfactory.js");
/* harmony import */ var _components_tp_news_tp_news_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tp-news/tp-news.component.ngfactory */ "./src/app/components/tp-news/tp-news.component.ngfactory.js");
/* harmony import */ var _components_gallery_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gallery/gallery.component.ngfactory */ "./src/app/components/gallery/gallery.component.ngfactory.js");
/* harmony import */ var _components_current_leaders_current_leaders_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/current-leaders/current-leaders.component.ngfactory */ "./src/app/components/current-leaders/current-leaders.component.ngfactory.js");
/* harmony import */ var _components_hightlights_hightlights_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hightlights/hightlights.component.ngfactory */ "./src/app/components/hightlights/hightlights.component.ngfactory.js");
/* harmony import */ var _components_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component.ngfactory */ "./src/app/components/contact/contact.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_bottom_sheet_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/@angular/material/bottom-sheet/index.ngfactory */ "./node_modules/@angular/material/bottom-sheet/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/@angular/material/dialog/index.ngfactory */ "./node_modules/@angular/material/dialog/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../node_modules/@angular/material/datepicker/index.ngfactory */ "./node_modules/@angular/material/datepicker/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/@angular/material/tooltip/index.ngfactory */ "./node_modules/@angular/material/tooltip/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/@angular/material/snack-bar/index.ngfactory */ "./node_modules/@angular/material/snack-bar/index.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/fesm5/observers.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm5/a11y.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm5/platform.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/fesm5/tree.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/fesm5/drag-drop.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm5/scrolling.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/fesm5/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm5/bidi.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm5/core.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm5/stepper.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm5/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm5/datepicker.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm5/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm5/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm5/sort.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_why_why_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/why/why.component */ "./src/app/components/why/why.component.ts");
/* harmony import */ var _components_tp_news_tp_news_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/tp-news/tp-news.component */ "./src/app/components/tp-news/tp-news.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_current_leaders_current_leaders_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/current-leaders/current-leaders.component */ "./src/app/components/current-leaders/current-leaders.component.ts");
/* harmony import */ var _components_hightlights_hightlights_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/hightlights/hightlights.component */ "./src/app/components/hightlights/hightlights.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/fesm5/clipboard.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/fesm5/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/fesm5/table.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/fesm5/portal.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/fesm5/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/fesm5/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm5/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm5/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/fesm5/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm5/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm5/divider.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/fesm5/accordion.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm5/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/fesm5/grid-list.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/fesm5/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/fesm5/list.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/fesm5/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm5/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/fesm5/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm5/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm5/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm5/toolbar.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/fesm5/tree.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/fesm5/keycodes.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




























































































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _components_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _components_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AboutComponentNgFactory"], _components_why_why_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["WhyComponentNgFactory"], _components_tp_news_tp_news_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TPNewsComponentNgFactory"], _components_gallery_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["GalleryComponentNgFactory"], _components_current_leaders_current_leaders_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CurrentLeadersComponentNgFactory"], _components_hightlights_hightlights_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["HightlightsComponentNgFactory"], _components_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["ContactComponentNgFactory"], _node_modules_angular_material_bottom_sheet_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetContainerNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["TooltipComponentNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["SimpleSnackBarNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) { return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_25__["removeStyles"](p1_0, p1_1)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_26__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["FocusMonitor"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["FocusMonitor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]], [2, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["FOCUS_MONITOR_DEFAULT_OPTIONS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_30__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_30__["CdkTreeNodeDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MAT_STEPPER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateLoader"], _app_module__WEBPACK_IMPORTED_MODULE_1__["httpTranslateLoader"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["USE_EXTEND"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["DEFAULT_LANGUAGE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], function () { return [[{ path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_46__["HomeComponent"] }, { path: "about", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_47__["AboutComponent"] }, { path: "why", component: _components_why_why_component__WEBPACK_IMPORTED_MODULE_48__["WhyComponent"] }, { path: "tpnews", component: _components_tp_news_tp_news_component__WEBPACK_IMPORTED_MODULE_49__["TPNewsComponent"] }, { path: "gallery", component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_50__["GalleryComponent"] }, { path: "currentLeaders", component: _components_current_leaders_current_leaders_component__WEBPACK_IMPORTED_MODULE_51__["CurrentLeadersComponent"] }, { path: "hightlights", component: _components_hightlights_hightlights_component__WEBPACK_IMPORTED_MODULE_52__["HightlightsComponent"] }, { path: "contact\u015B", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_53__["ContactComponent"] }, { path: "", redirectTo: "/home", pathMatch: "full" }, { path: "**", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_46__["HomeComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_54__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_54__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_27__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_55__["ClipboardModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_55__["ClipboardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_56__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_56__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_57__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_57__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_30__["CdkTreeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_30__["CdkTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_59__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_59__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_60__["MatBottomSheetModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_60__["MatBottomSheetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_61__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_61__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_62__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_62__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_63__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_63__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_64__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_64__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_64__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_64__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_67__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_68__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_69__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_70__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_70__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_71__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_71__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_72__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_72__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_73__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_73__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_74__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_74__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_43__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_75__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_75__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_76__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_76__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_77__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_77__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_78__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_78__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_79__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_79__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_80__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_80__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_80__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_80__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_81__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_81__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_44__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_82__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_82__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_83__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_83__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_84__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_84__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tree__WEBPACK_IMPORTED_MODULE_85__["MatTreeModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_85__["MatTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_86__["AngularMaterialModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_86__["AngularMaterialModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_25__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_25__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_87__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_87__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_88__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_88__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_89__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_89__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_90__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_90__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_25__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_65__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_91__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_45__["DEFAULT_LANGUAGE"], undefined, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, httpTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function() { return httpTranslateLoader; });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());

// AOT compilation support
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/components/about/about.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/about/about.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function() { return RenderType_AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function() { return View_AboutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function() { return View_AboutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function() { return AboutComponentNgFactory; });
/* harmony import */ var _about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.scss.shim.ngstyle */ "./src/app/components/about/about.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_AboutComponent = [_about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutComponent, data: {} });

function View_AboutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["about works!"]))], null, null); }
function View_AboutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AboutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about", _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/about/about.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/about/about.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact/contact.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function() { return RenderType_ContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function() { return View_ContactComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function() { return View_ContactComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function() { return ContactComponentNgFactory; });
/* harmony import */ var _contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.scss.shim.ngstyle */ "./src/app/components/contact/contact.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/contact/contact.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_ContactComponent = [_contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactComponent, data: {} });

function View_ContactComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["contact works!"]))], null, null); }
function View_ContactComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact", _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/current-leaders/current-leaders.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/components/current-leaders/current-leaders.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_CurrentLeadersComponent, View_CurrentLeadersComponent_0, View_CurrentLeadersComponent_Host_0, CurrentLeadersComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CurrentLeadersComponent", function() { return RenderType_CurrentLeadersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CurrentLeadersComponent_0", function() { return View_CurrentLeadersComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CurrentLeadersComponent_Host_0", function() { return View_CurrentLeadersComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLeadersComponentNgFactory", function() { return CurrentLeadersComponentNgFactory; });
/* harmony import */ var _current_leaders_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-leaders.component.scss.shim.ngstyle */ "./src/app/components/current-leaders/current-leaders.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _current_leaders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-leaders.component */ "./src/app/components/current-leaders/current-leaders.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_CurrentLeadersComponent = [_current_leaders_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CurrentLeadersComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CurrentLeadersComponent, data: {} });

function View_CurrentLeadersComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["current-leaders works!"]))], null, null); }
function View_CurrentLeadersComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-current-leaders", [], null, null, null, View_CurrentLeadersComponent_0, RenderType_CurrentLeadersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _current_leaders_component__WEBPACK_IMPORTED_MODULE_2__["CurrentLeadersComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CurrentLeadersComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-current-leaders", _current_leaders_component__WEBPACK_IMPORTED_MODULE_2__["CurrentLeadersComponent"], View_CurrentLeadersComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/current-leaders/current-leaders.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-leaders/current-leaders.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVudC1sZWFkZXJzL2N1cnJlbnQtbGVhZGVycy5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/components/current-leaders/current-leaders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/current-leaders/current-leaders.component.ts ***!
  \*************************************************************************/
/*! exports provided: CurrentLeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLeadersComponent", function() { return CurrentLeadersComponent; });
var CurrentLeadersComponent = /** @class */ (function () {
    function CurrentLeadersComponent() {
    }
    CurrentLeadersComponent.prototype.ngOnInit = function () {
    };
    return CurrentLeadersComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_GalleryComponent, View_GalleryComponent_0, View_GalleryComponent_Host_0, GalleryComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GalleryComponent", function() { return RenderType_GalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryComponent_0", function() { return View_GalleryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GalleryComponent_Host_0", function() { return View_GalleryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponentNgFactory", function() { return GalleryComponentNgFactory; });
/* harmony import */ var _gallery_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component.scss.shim.ngstyle */ "./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_GalleryComponent = [_gallery_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_GalleryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_GalleryComponent, data: {} });

function View_GalleryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["gallery works!"]))], null, null); }
function View_GalleryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-gallery", [], null, null, null, View_GalleryComponent_0, RenderType_GalleryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GalleryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-gallery", _gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"], View_GalleryComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/hightlights/hightlights.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/hightlights/hightlights.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_HightlightsComponent, View_HightlightsComponent_0, View_HightlightsComponent_Host_0, HightlightsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HightlightsComponent", function() { return RenderType_HightlightsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HightlightsComponent_0", function() { return View_HightlightsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HightlightsComponent_Host_0", function() { return View_HightlightsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HightlightsComponentNgFactory", function() { return HightlightsComponentNgFactory; });
/* harmony import */ var _hightlights_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hightlights.component.scss.shim.ngstyle */ "./src/app/components/hightlights/hightlights.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hightlights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hightlights.component */ "./src/app/components/hightlights/hightlights.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_HightlightsComponent = [_hightlights_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HightlightsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HightlightsComponent, data: {} });

function View_HightlightsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["hightlights works!"]))], null, null); }
function View_HightlightsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hightlights", [], null, null, null, View_HightlightsComponent_0, RenderType_HightlightsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _hightlights_component__WEBPACK_IMPORTED_MODULE_2__["HightlightsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HightlightsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-hightlights", _hightlights_component__WEBPACK_IMPORTED_MODULE_2__["HightlightsComponent"], View_HightlightsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/hightlights/hightlights.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/components/hightlights/hightlights.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGlnaHRsaWdodHMvaGlnaHRsaWdodHMuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/components/hightlights/hightlights.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/hightlights/hightlights.component.ts ***!
  \*****************************************************************/
/*! exports provided: HightlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HightlightsComponent", function() { return HightlightsComponent; });
var HightlightsComponent = /** @class */ (function () {
    function HightlightsComponent() {
    }
    HightlightsComponent.prototype.ngOnInit = function () {
    };
    return HightlightsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/home/home.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/components/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "row align-items-center justify-content-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "col-md-6  order-md-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["class", "heading mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Welcome You All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "sub-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [["class", "mb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Kanadukathan Town Panchayat"]))], null, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/home/home.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/home.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/tp-news/tp-news.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/tp-news/tp-news.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_TPNewsComponent, View_TPNewsComponent_0, View_TPNewsComponent_Host_0, TPNewsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TPNewsComponent", function() { return RenderType_TPNewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TPNewsComponent_0", function() { return View_TPNewsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TPNewsComponent_Host_0", function() { return View_TPNewsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPNewsComponentNgFactory", function() { return TPNewsComponentNgFactory; });
/* harmony import */ var _tp_news_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tp-news.component.scss.shim.ngstyle */ "./src/app/components/tp-news/tp-news.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tp_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tp-news.component */ "./src/app/components/tp-news/tp-news.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_TPNewsComponent = [_tp_news_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TPNewsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TPNewsComponent, data: {} });

function View_TPNewsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["tp-news works!"]))], null, null); }
function View_TPNewsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tp-news", [], null, null, null, View_TPNewsComponent_0, RenderType_TPNewsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tp_news_component__WEBPACK_IMPORTED_MODULE_2__["TPNewsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TPNewsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tp-news", _tp_news_component__WEBPACK_IMPORTED_MODULE_2__["TPNewsComponent"], View_TPNewsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/tp-news/tp-news.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/tp-news/tp-news.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHAtbmV3cy90cC1uZXdzLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/components/tp-news/tp-news.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tp-news/tp-news.component.ts ***!
  \*********************************************************/
/*! exports provided: TPNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPNewsComponent", function() { return TPNewsComponent; });
var TPNewsComponent = /** @class */ (function () {
    function TPNewsComponent() {
    }
    TPNewsComponent.prototype.ngOnInit = function () {
    };
    return TPNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/why/why.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/components/why/why.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_WhyComponent, View_WhyComponent_0, View_WhyComponent_Host_0, WhyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WhyComponent", function() { return RenderType_WhyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhyComponent_0", function() { return View_WhyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhyComponent_Host_0", function() { return View_WhyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyComponentNgFactory", function() { return WhyComponentNgFactory; });
/* harmony import */ var _why_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./why.component.scss.shim.ngstyle */ "./src/app/components/why/why.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _why_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./why.component */ "./src/app/components/why/why.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_WhyComponent = [_why_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_WhyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_WhyComponent, data: {} });

function View_WhyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["why works!"]))], null, null); }
function View_WhyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-why", [], null, null, null, View_WhyComponent_0, RenderType_WhyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _why_component__WEBPACK_IMPORTED_MODULE_2__["WhyComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var WhyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-why", _why_component__WEBPACK_IMPORTED_MODULE_2__["WhyComponent"], View_WhyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/why/why.component.scss.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/why/why.component.scss.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2h5L3doeS5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/components/why/why.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/why/why.component.ts ***!
  \*************************************************/
/*! exports provided: WhyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyComponent", function() { return WhyComponent; });
var WhyComponent = /** @class */ (function () {
    function WhyComponent() {
    }
    WhyComponent.prototype.ngOnInit = function () {
    };
    return WhyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\learning\KP_website\kanadukathantp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map