webpackJsonp([4],{

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocationModule", function() { return CreateLocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_location__ = __webpack_require__(925);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateLocationModule = (function () {
    function CreateLocationModule() {
    }
    return CreateLocationModule;
}());
CreateLocationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_location__["a" /* CreateLocationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_location__["a" /* CreateLocationPage */]),
        ],
    })
], CreateLocationModule);

//# sourceMappingURL=create-location.module.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
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
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateLocationPage = (function () {
    function CreateLocationPage(navCtrl, alertController, navParams, teamService, loadingController, formBuilder, otherService) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.createLocationForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            lat: [''],
            lng: ['']
        });
        this.name = this.createLocationForm.controls['name'];
    }
    CreateLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateLocationPage.prototype.createLocation = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.createLocation(this.createLocationForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    CreateLocationPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return CreateLocationPage;
}());
CreateLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-location',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-location.1\create-location.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Location\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createLocationForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n            <ion-label floating>Address</ion-label>\n\n            <ion-input formControlName="address" type="text"></ion-input>\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Latitude</ion-label>\n\n            <ion-input formControlName="lat" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Longitude</ion-label>\n\n            <ion-input formControlName="lng" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n          <button ion-button color="secondary" icon-left clear small [disabled]="!createLocationForm.valid" (click)="createLocation()">\n\n            Create Location\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-location.1\create-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateLocationPage);

//# sourceMappingURL=create-location.js.map

/***/ })

});
//# sourceMappingURL=4.js.map