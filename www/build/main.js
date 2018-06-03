webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
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
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPage = (function () {
    function ResetPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    ResetPage.prototype.reset = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.reset(this.userData).then(function (result) {
            _this.responseData = result;
            console.log("response in signup", _this.responseData);
            console.log("response code", _this.responseData.statusCode);
            loading.dismiss();
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results);
                var alert_1 = _this.alertController.create({
                    title: 'Password change Successful',
                    subTitle: 'Password change successful',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (_this.responseData.statusCode == '401') {
                var alert_2 = _this.alertController.create({
                    title: 'User account exists!',
                    subTitle: 'This user does not exists in the list. Please Register!',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertController.create({
                    title: 'Server Unavailable!',
                    subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            //this.navCtrl.push(HomePage);
        }, function (err) {
            // Error log
        });
    };
    ResetPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return ResetPage;
}());
ResetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'reset',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reset Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="reset()">Reset Password</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(33);
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
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = (function () {
    function LogoutPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    LogoutPage.prototype.logout = function () {
        localStorage.clear();
        this.authService.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
    };
    return LogoutPage;
}());
LogoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'logout',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n       <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Log Out</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Log Out\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n      \n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="logout()">Log Out</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], LogoutPage);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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
var CreatePlayerPage = (function () {
    function CreatePlayerPage(navCtrl, navParams, teamService, loadingController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.createPlayerForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
        this.username = this.createPlayerForm.controls['username'];
        this.team = JSON.parse(localStorage.getItem('team'));
    }
    CreatePlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreatePlayerPage.prototype.addPlayer = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.addPlayer(this.createPlayerForm.value, this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    return CreatePlayerPage;
}());
CreatePlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-player',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Player</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Player\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createPlayerForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>User Email</ion-label>\n\n            <ion-input formControlName="username" type="text"></ion-input>\n\n        </ion-item>\n\n \n\n \n\n    </form>\n\n  <button ion-button color="secondary" icon-left clear small (click)="addPlayer()">\n\n            Add Player\n\n            \n\n          </button>\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], CreatePlayerPage);

//# sourceMappingURL=create-player.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTournamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
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
var CreateTournamentPage = (function () {
    function CreateTournamentPage(navCtrl, navParams, teamService, loadingController, formBuilder, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.createTournamentForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
        this.name = this.createTournamentForm.controls['name'];
    }
    CreateTournamentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateTournamentPage.prototype.createTournament = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.createTournament(this.createTournamentForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    return CreateTournamentPage;
}());
CreateTournamentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-tournament',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Tournament</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Tournament\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTournamentForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n    </form>\n\n  <button ion-button color="secondary" icon-left clear small (click)="createTournament()">\n\n            Create Tournament\n\n            \n\n          </button>\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateTournamentPage);

//# sourceMappingURL=create-tournament.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
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
    function CreateLocationPage(navCtrl, navParams, teamService, loadingController, formBuilder, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.createLocationForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            lat: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            lng: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
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
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    return CreateLocationPage;
}());
CreateLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-location',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Location\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createLocationForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n            <ion-label floating>Address</ion-label>\n\n            <ion-input formControlName="address" type="text"></ion-input>\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Latitude</ion-label>\n\n            <ion-input formControlName="lat" type="text"></ion-input>\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Longitude</ion-label>\n\n            <ion-input formControlName="lng" type="text"></ion-input>\n\n        </ion-item>\n\n    </form>\n\n  <button ion-button color="secondary" icon-left clear small (click)="createLocation()">\n\n            Create Location\n\n            \n\n          </button>\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateLocationPage);

//# sourceMappingURL=create-location.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/login';
//let isLoggedIn : boolean;
var isAuthenticated;
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
        var data = JSON.parse(localStorage.getItem('userData'));
        if (data == null) {
            isAuthenticated = false;
        }
        else {
            console.log("user data presnet");
            isAuthenticated = true;
        }
    }
    AuthService.prototype.getToken = function () {
        if (JSON.parse(localStorage.getItem('userData')) != null && JSON.parse(localStorage.getItem('userData')).user != null) {
            return JSON.parse(localStorage.getItem('userData')).user.token;
        }
        else {
            return null;
        }
    };
    AuthService.prototype.getUser = function () {
        if (JSON.parse(localStorage.getItem('userData')) != null) {
            return JSON.parse(localStorage.getItem('userData')).user;
        }
        else {
            return null;
        }
    };
    AuthService.prototype.signup = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(apiUrl + '/create', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response signup", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = true;
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.forgot = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            console.log("input", credentials.username);
            _this.http.post(apiUrl + '/forgotpassword', credentials.username, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response signup", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = false;
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.reset = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("token", _this.getToken());
            _this.http.post(apiUrl + '/updatepassword', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response update", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = false;
                    localStorage.clear();
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(apiUrl + '/userLogin', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response login", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = true;
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.getAuthenticated = function () {
        if (this.getToken() == null) {
            return false;
        }
        return isAuthenticated;
    };
    AuthService.prototype.logout = function () {
        isAuthenticated = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MatchService } from '../../providers/matches/matches';




/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTeamsPage = (function () {
    function MyTeamsPage(events, navCtrl, navParams, authService, teamService, statsService, app, loadingController) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.tabsvalues = "team";
        //selectedTeam : any;
        this.userPostData = { "user_id": "", "token": "" };
    }
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getAdminTeams().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.teams = _this.responseData.results.teams;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    MyTeamsPage.prototype.goToTeam = function (team) {
        localStorage.setItem('team', JSON.stringify(team));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__["a" /* TeamMatchesPage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__["a" /* TeamMatchesPage */]);
    };
    return MyTeamsPage;
}());
MyTeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-teams',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Manage Teams</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let team of teams" color="primary">\n\n    <ion-card-header>\n\n      {{team.teamname}}\n\n	   </ion-card-header>\n\n	   <ion-card-content>\n\n     	 <button ion-button color="light" icon-left clear small (click)="goToTeam(team)">\n\n            Manage Team\n\n            \n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createTeam()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _h || Object])
], MyTeamsPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinancePage = (function () {
    function FinancePage(navCtrl, app, authService, financeService, loadingController) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.financeService = financeService;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    FinancePage.prototype.ionViewCanEnter = function () {
        console.log("view did enter", this.authService.getAuthenticated());
        return this.authService.getAuthenticated();
    };
    FinancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.getAllExpense().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.expenses = _this.responseData.results.result;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    FinancePage.prototype.availabilitySelected = function (event, expense) {
        var _this = this;
        console.log("selected", event, expense);
        expense.player = this.authService.getUser();
        console.log("after change", expense);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.financeService.postUpdate(expense).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    FinancePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    FinancePage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    FinancePage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    return FinancePage;
}());
FinancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finance',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Payments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let playerexpense of expenses">\n\n    <ion-card-header>\n\n      {{playerexpense.expense.description}}\n\n      <p>{{playerexpense.expense.team.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{playerexpense.expenseDate}}</p>\n\n      <p>${{playerexpense.amount}}</p>\n\n	   <p>${{playerexpense.cmnt}}</p>\n\n         <ion-label>\n\n          Select Payment Status\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n		   <ion-checkbox [(ngModel)]="playerexpense.paid"  (ionChange)="availabilitySelected($event, playerexpense)"></ion-checkbox>\n\n     \n\n	 \n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-select [(ngModel)]="playerexpense.paymentType" (ionChange)="availabilitySelected($event, playerexpense)">\n\n          <ion-option value="CASH">CASH</ion-option>\n\n        <ion-option value="FREE">FREE</ion-option>\n\n      <ion-option value="PREPAID">PREPAID</ion-option>\n\n        <ion-option value="TRANSFER">TRANSFER</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Remarks</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="playerexpense.remark" (ionChange)="availabilitySelected($event, playerexpense)"></ion-input>\n\n	 </ion-item>\n\n	\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], FinancePage);

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_player_create_player__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MatchService } from '../../providers/matches/matches';




/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamPlayersPage = (function () {
    function TeamPlayersPage(events, navCtrl, navParams, authService, teamService, statsService, app, loadingController) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.tabsvalues = "team";
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.selectedTeam = JSON.parse(localStorage.getItem('team'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
        else {
            var root = this.app.getRootNav();
            root.popToRoot();
        }
    }
    TeamPlayersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getAllPlayers(this.selectedTeam).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.players = _this.responseData.results.teams;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    TeamPlayersPage.prototype.player = function (id) {
        this.events.publish("UPDATE_SIDE_MENU", "some event related data");
    };
    TeamPlayersPage.prototype.addPlayer = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_player_create_player__["a" /* CreatePlayerPage */]);
    };
    return TeamPlayersPage;
}());
TeamPlayersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-players',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Manage Player</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let player of players" color="primary" (click)="player(team)">\n\n    <ion-card-header>\n\n      {{player.name}}\n\n	   </ion-card-header>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addPlayer()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], TeamPlayersPage);

//# sourceMappingURL=team-players.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_tournament_create_tournament__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_other_other__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MatchService } from '../../providers/matches/matches';





/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TournamentsPage = (function () {
    function TournamentsPage(events, navCtrl, navParams, authService, teamService, statsService, app, loadingController, otherService) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.tabsvalues = "team";
        //selectedTeam : any;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
        else {
            var root = this.app.getRootNav();
            root.popToRoot();
        }
    }
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.getAllTournament().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.tournaments = _this.responseData.results.Tournaments;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    TournamentsPage.prototype.createTournament = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_tournament_create_tournament__["a" /* CreateTournamentPage */]);
    };
    return TournamentsPage;
}());
TournamentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tournaments',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\tournaments\tournaments.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Tournaments</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let tournament of tournaments" color="primary">\n\n    <ion-card-header>\n\n      {{tournament.name}}\n\n	   </ion-card-header>\n\n	 \n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createTournament()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\tournaments\tournaments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]])
], TournamentsPage);

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_location_create_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_other_other__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MatchService } from '../../providers/matches/matches';





/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationsPage = (function () {
    function LocationsPage(events, navCtrl, navParams, authService, teamService, statsService, app, loadingController, otherService) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.tabsvalues = "team";
        //selectedTeam : any;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
        else {
            var root = this.app.getRootNav();
            root.popToRoot();
        }
    }
    LocationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.getAllLocation().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.locations = _this.responseData.results.locations;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    LocationsPage.prototype.createLocation = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_location_create_location__["a" /* CreateLocationPage */]);
    };
    return LocationsPage;
}());
LocationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-locations',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\locations\locations.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Locations</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let location of locations" color="primary">\n\n    <ion-card-header>\n\n      {{location.name}}\n\n	   </ion-card-header>\n\n	 \n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createLocation()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\locations\locations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]])
], LocationsPage);

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 139:
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
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/teamplayer';
var teamapiUrl = 'https://crickify.herokuapp.com/team';
//let isLoggedIn : boolean;
var isAuthenticated;
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
    }
    TeamService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    TeamService.prototype.getAllTeams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/teams', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.getAllPlayers = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/teams/players/' + team.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response players", res.json());
                if (res.json().statusCode == '200') {
                    console.log("players", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.createTeam = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(teamapiUrl + '/team', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.addPlayer = function (credentials, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(credentials));
            _this.http.post(apiUrl + '/team/player/' + team.id, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.getAdminTeams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/teamadmin', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response teams", res.json());
                if (res.json().statusCode == '200') {
                    console.log("teams", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return TeamService;
}());
TeamService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TeamService);

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-location/create-location.module": [
		202
	],
	"../pages/create-match/create-match.module": [
		183
	],
	"../pages/create-player/create-player.module": [
		200
	],
	"../pages/create-team/create-team.module": [
		197
	],
	"../pages/create-tournament/create-tournament.module": [
		201
	],
	"../pages/forgot/forgot.module": [
		184
	],
	"../pages/login/login.module": [
		187
	],
	"../pages/logout/logout.module": [
		199
	],
	"../pages/match-availability/match-availability.module": [
		195
	],
	"../pages/match-team/match-team.module": [
		182
	],
	"../pages/modeChange/modeChange.module": [
		324
	],
	"../pages/my-account/my-account.module": [
		192
	],
	"../pages/my-profile/my-profile.module": [
		190
	],
	"../pages/previous-match-details/previous-match-details.module": [
		193
	],
	"../pages/previous-matches/previous-matches.module": [
		194
	],
	"../pages/reset/reset.module": [
		198
	],
	"../pages/signup/signup.module": [
		188
	],
	"../pages/team-matches/team-matches.module": [
		196
	],
	"../pages/welcome/welcome.module": [
		189
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchTeamPageModule", function() { return MatchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_team__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchTeamPageModule = (function () {
    function MatchTeamPageModule() {
    }
    return MatchTeamPageModule;
}());
MatchTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__match_team__["a" /* MatchTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_team__["a" /* MatchTeamPage */]),
        ],
    })
], MatchTeamPageModule);

//# sourceMappingURL=match-team.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMatchModule", function() { return CreateMatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_match__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateMatchModule = (function () {
    function CreateMatchModule() {
    }
    return CreateMatchModule;
}());
CreateMatchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_match__["a" /* CreateMatchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_match__["a" /* CreateMatchPage */]),
        ],
    })
], CreateMatchModule);

//# sourceMappingURL=create-match.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPageModule = (function () {
    function ForgotPageModule() {
    }
    return ForgotPageModule;
}());
ForgotPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */]),
        ],
    })
], ForgotPageModule);

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
        ],
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyProfilePageModule = (function () {
    function MyProfilePageModule() {
    }
    return MyProfilePageModule;
}());
MyProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]),
        ],
    })
], MyProfilePageModule);

//# sourceMappingURL=my-profile.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the PlayersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = 'https://crickify.herokuapp.com/player';
var apiUrlTeam = 'https://crickify.herokuapp.com/teamplayer';
var PlayersProvider = (function () {
    function PlayersProvider(http) {
        this.http = http;
        console.log('Hello PlayersProvider Provider');
    }
    PlayersProvider.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    PlayersProvider.prototype.getPlayerStats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/stats', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("player stats", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    PlayersProvider.prototype.getPlayerTournamentStats = function (teamid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrlTeam + '/tournament/stats/' + teamid + "/player", { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("player stats", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return PlayersProvider;
}());
PlayersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PlayersProvider);

//# sourceMappingURL=players.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyAccountPageModule = (function () {
    function MyAccountPageModule() {
    }
    return MyAccountPageModule;
}());
MyAccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */]),
        ],
    })
], MyAccountPageModule);

//# sourceMappingURL=my-account.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchDetailsPageModule", function() { return PreviousMatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_match_details__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviousMatchDetailsPageModule = (function () {
    function PreviousMatchDetailsPageModule() {
    }
    return PreviousMatchDetailsPageModule;
}());
PreviousMatchDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__previous_match_details__["a" /* PreviousMatchDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_match_details__["a" /* PreviousMatchDetailsPage */]),
        ],
    })
], PreviousMatchDetailsPageModule);

//# sourceMappingURL=previous-match-details.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchesPageModule", function() { return PreviousMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_matches__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviousMatchesPageModule = (function () {
    function PreviousMatchesPageModule() {
    }
    return PreviousMatchesPageModule;
}());
PreviousMatchesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__previous_matches__["a" /* PreviousMatchesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_matches__["a" /* PreviousMatchesPage */]),
        ],
    })
], PreviousMatchesPageModule);

//# sourceMappingURL=previous-matches.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchAvailabilityPageModule", function() { return MatchAvailabilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_availability__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchAvailabilityPageModule = (function () {
    function MatchAvailabilityPageModule() {
    }
    return MatchAvailabilityPageModule;
}());
MatchAvailabilityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__match_availability__["a" /* MatchAvailabilityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_availability__["a" /* MatchAvailabilityPage */]),
        ],
    })
], MatchAvailabilityPageModule);

//# sourceMappingURL=match-availability.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMatchesPageModule", function() { return TeamMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_matches__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamMatchesPageModule = (function () {
    function TeamMatchesPageModule() {
    }
    return TeamMatchesPageModule;
}());
TeamMatchesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_matches__["a" /* TeamMatchesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_matches__["a" /* TeamMatchesPage */]),
        ],
    })
], TeamMatchesPageModule);

//# sourceMappingURL=team-matches.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamModule", function() { return CreateTeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_team__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTeamModule = (function () {
    function CreateTeamModule() {
    }
    return CreateTeamModule;
}());
CreateTeamModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_team__["a" /* CreateTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_team__["a" /* CreateTeamPage */]),
        ],
    })
], CreateTeamModule);

//# sourceMappingURL=create-team.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPageModule = (function () {
    function ResetPageModule() {
    }
    return ResetPageModule;
}());
ResetPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reset__["a" /* ResetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset__["a" /* ResetPage */]),
        ],
    })
], ResetPageModule);

//# sourceMappingURL=reset.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogoutPageModule = (function () {
    function LogoutPageModule() {
    }
    return LogoutPageModule;
}());
LogoutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__logout__["a" /* LogoutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__logout__["a" /* LogoutPage */]),
        ],
    })
], LogoutPageModule);

//# sourceMappingURL=logout.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayerModule", function() { return CreatePlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_player__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatePlayerModule = (function () {
    function CreatePlayerModule() {
    }
    return CreatePlayerModule;
}());
CreatePlayerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_player__["a" /* CreatePlayerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_player__["a" /* CreatePlayerPage */]),
        ],
    })
], CreatePlayerModule);

//# sourceMappingURL=create-player.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTournamentModule", function() { return CreateTournamentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_tournament__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTournamentModule = (function () {
    function CreateTournamentModule() {
    }
    return CreateTournamentModule;
}());
CreateTournamentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_tournament__["a" /* CreateTournamentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_tournament__["a" /* CreateTournamentPage */]),
        ],
    })
], CreateTournamentModule);

//# sourceMappingURL=create-tournament.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocationModule", function() { return CreateLocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_location__ = __webpack_require__(104);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_location__["a" /* CreateLocationPage */]),
        ],
    })
], CreateLocationModule);

//# sourceMappingURL=create-location.module.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/match';
var battingapiUrl = 'https://crickify.herokuapp.com/batting';
var bowlingapiUrl = 'https://crickify.herokuapp.com/Bowling';
//let isLoggedIn : boolean;
var isAuthenticated;
var MatchService = (function () {
    function MatchService(http) {
        this.http = http;
    }
    MatchService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    MatchService.prototype.getAllMatches = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matches/availabilities', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getBestBatting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(battingapiUrl + '/top')
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getBestBowling = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(bowlingapiUrl + '/top')
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getPreviousMatches = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/playedmatches', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("played matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getMatches = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matches/' + team.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("played matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getMatchSummary = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matchsummary/' + matchid, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("played matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getMatchAvailability = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/availability/' + matchid, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("played matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getMatchTeam = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/team/' + matchid, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response players", res.json());
                if (res.json().statusCode == '200') {
                    console.log("players", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.postAvailability = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/availability', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.updateAvailability = function (match, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/' + match + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.addMatch = function (data, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/match/' + team.id, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return MatchService;
}());
MatchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MatchService);

//# sourceMappingURL=matches.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MatchService } from '../../providers/matches/matches';


var ListPage = (function () {
    function ListPage(navCtrl, navParams, authService, teamService, statsService, app, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.tabsvalues = "team";
        //selectedTeam : any;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
        else {
            var root = this.app.getRootNav();
            root.popToRoot();
        }
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getAllTeams().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.teams = _this.responseData.results.teams;
                _this.selectedTeam = _this.responseData.results.teams[0];
                _this.teamSelected(_this.responseData.results.teams[0]);
                console.log("result teams", JSON.stringify(_this.responseData.results));
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    ListPage.prototype.teamSelected = function (team) {
        console.log("selected team", team);
        console.log("team id", team.id);
        this.getStats(team);
    };
    ListPage.prototype.changeMenus = function (index) {
        this.selectedTeam = index;
    };
    ListPage.prototype.getStats = function (team) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.statsArray = [];
        this.statsService.getTeamStats(team.id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("stats test 200");
                if (_this.responseData.results.stats.length == 0) {
                }
                else {
                    _this.statsArray = _this.responseData.results.stats;
                    console.log("result", _this.responseData.results.stats);
                    // console.log("arrary", JSON.parse(this.statsArray));
                }
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Team Stats</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-segment [(ngModel)]="tabsvalues">\n\n        <ion-segment-button value="team">\n\n          Team Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="batting">\n\n          Batting Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="bowling">\n\n            Bowling Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="fielding">\n\n              Fielding Stats\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    \n\n    <div [ngSwitch]="tabsvalues">\n\n      <div *ngSwitchCase="\'team\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <ion-card *ngFor="let stat of statsArray">  \n\n                <ion-card-content>\n\n                    <h4>\n\n                        {{stat.name}}\n\n                    </h4>\n\n                  <div class="cric-cards">\n\n                      <p>Played</p>\n\n                      <h4>{{stat.statistics.played}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>Won</p>\n\n                    <h4>{{stat.statistics.won}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>Lost</p>\n\n                      <h4>{{stat.statistics.lost}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>No Result</p>\n\n                    <h4>{{stat.statistics.abandoned}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>High Total</p>\n\n                      <h4>{{stat.statistics.highestTotal}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                        <p>Low Total</p>\n\n                        <h4>{{stat.statistics.lowestTotal}}</h4>\n\n                  </div>\n\n                </ion-card-content>\n\n              \n\n              </ion-card>\n\n      </div>\n\n    \n\n      <div *ngSwitchCase="\'batting\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <div *ngFor="let stat of statsArray">\n\n              <div class="cric-stat-batting-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>I</p>\n\n                        <p>R</p>\n\n                        <p>B</p>\n\n                        <p class="cric-values-decimals">Av</p>\n\n                        <p class="cric-values-decimals">SR</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.battingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.innings}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.ball}}</p>\n\n                        <p class="cric-values-decimals">{{player.average | number : \'1.2-2\'}}</p>\n\n                        <p class="cric-values-decimals">{{player.sr | number : \'1.2-2\'}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n              </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <div *ngFor="let stat of statsArray">\n\n              \n\n              <div class="cric-stat-bowling-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>O</p>\n\n                        <p>R</p>\n\n                        <p>W</p>\n\n                        <p>Wd</p>\n\n                        <p>EC</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.bowlingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.overs}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.wickets}}</p>\n\n                        <p>{{player.wide}}</p>\n\n                        <p>{{player.economy}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n              </div>\n\n      </div>\n\n\n\n        <div *ngSwitchCase="\'fielding\'">\n\n            <ion-item>\n\n                <ion-label>Pick a Team</ion-label>\n\n                <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                  <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            \n\n            <div *ngFor="let stat of statsArray">\n\n                <div class="cric-stat-bowling-table">\n\n                    <h4>{{stat.name}}</h4>\n\n                    <ul>\n\n                      <li class="header">\n\n                          <p class="cric-player-name">Name</p>\n\n                          <p>M</p>\n\n                          <p>Ct</p>\n\n                          <p>R/O</p>\n\n                          <p>St</p>\n\n                      </li>\n\n                      <li *ngFor="let player of stat.bowlingStatistics">\n\n                          <p class="cric-player-name">{{player.player.name}}</p>\n\n                          <p>{{player.matches}}</p>\n\n                          <p>{{player.catches}}</p>\n\n                          <p>{{player.runOuts}}</p>\n\n                          <p>{{player.stumpings}}</p>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                </div>\n\n        </div>\n\n\n\n      </div> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/finance';
//let isLoggedIn : boolean;
var isAuthenticated;
var FinanceProvider = (function () {
    function FinanceProvider(http) {
        this.http = http;
    }
    FinanceProvider.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    FinanceProvider.prototype.getAllExpense = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/playerExpense', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("expense", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    FinanceProvider.prototype.postUpdate = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/playerExpense/update', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("expense update", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return FinanceProvider;
}());
FinanceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], FinanceProvider);

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stats_stats__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_other_other__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_welcome_welcome_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_my_profile_my_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_my_profile_my_profile_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_my_account_my_account__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_my_account_my_account_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_previous_matches_previous_matches__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_previous_matches_previous_matches_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_my_teams_my_teams__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_my_teams_my_teams_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_players_players__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_finance_finance__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_previous_match_details_previous_match_details__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_previous_match_details_previous_match_details_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_match_team_match_team__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_match_team_match_team_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_finance_finance__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_forgot_forgot__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_forgot_forgot_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_finance_finance_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_reset_reset__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_reset_reset_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_logout_logout__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_logout_logout_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_push__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_create_team_create_team__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_create_team_create_team_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_team_players_team_players__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_team_players_team_players_module__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_create_player_create_player__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_create_player_create_player_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_create_match_create_match__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_create_match_create_match_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_team_matches_team_matches__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_team_matches_team_matches_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_match_availability_match_availability__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_match_availability_match_availability_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_tournaments_tournaments__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_locations_locations__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_tournaments_tournaments_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_locations_locations_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_create_location_create_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_create_location_create_location_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_create_tournament_create_tournament__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_create_tournament_create_tournament_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_modeChange_modeChange__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_modeChange_modeChange_module__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_49__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/match-team/match-team.module#MatchTeamPageModule', name: 'MatchTeamPage', segment: 'match-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-match/create-match.module#CreateMatchModule', name: 'CreateMatchPage', segment: 'create-match', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-account/my-account.module#MyAccountPageModule', name: 'MyAccountPage', segment: 'my-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-match-details/previous-match-details.module#PreviousMatchDetailsPageModule', name: 'PreviousMatchDetailsPage', segment: 'previous-match-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-matches/previous-matches.module#PreviousMatchesPageModule', name: 'PreviousMatchesPage', segment: 'previous-matches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/match-availability/match-availability.module#MatchAvailabilityPageModule', name: 'MatchAvailabilityPage', segment: 'match-availability', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team-matches/team-matches.module#TeamMatchesPageModule', name: 'TeamMatchesPage', segment: 'team-matches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-team/create-team.module#CreateTeamModule', name: 'CreateTeamPage', segment: 'create-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-player/create-player.module#CreatePlayerModule', name: 'CreatePlayerPage', segment: 'create-player', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-tournament/create-tournament.module#CreateTournamentModule', name: 'CreateTournamentPage', segment: 'create-tournament', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-location/create-location.module#CreateLocationModule', name: 'CreateLocationPage', segment: 'create-location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modeChange/modeChange.module#ModeChangeModule', name: 'ModeChangePage', segment: 'modeChange', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_39__pages_finance_finance_module__["a" /* FinancePageModule */], __WEBPACK_IMPORTED_MODULE_38__pages_forgot_forgot_module__["ForgotPageModule"], __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__["LoginPageModule"], __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup_module__["SignupPageModule"],
            __WEBPACK_IMPORTED_MODULE_23__pages_my_profile_my_profile_module__["MyProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_25__pages_my_account_my_account_module__["MyAccountPageModule"],
            __WEBPACK_IMPORTED_MODULE_27__pages_previous_matches_previous_matches_module__["PreviousMatchesPageModule"],
            __WEBPACK_IMPORTED_MODULE_29__pages_my_teams_my_teams_module__["a" /* MyTeamsPageModule */],
            __WEBPACK_IMPORTED_MODULE_33__pages_previous_match_details_previous_match_details_module__["PreviousMatchDetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_35__pages_match_team_match_team_module__["MatchTeamPageModule"],
            __WEBPACK_IMPORTED_MODULE_41__pages_reset_reset_module__["ResetPageModule"],
            __WEBPACK_IMPORTED_MODULE_43__pages_logout_logout_module__["LogoutPageModule"],
            __WEBPACK_IMPORTED_MODULE_17__pages_welcome_welcome_module__["WelcomePageModule"],
            __WEBPACK_IMPORTED_MODULE_46__pages_create_team_create_team_module__["CreateTeamModule"],
            __WEBPACK_IMPORTED_MODULE_48__pages_team_players_team_players_module__["a" /* TeamPlayersPageModule */],
            __WEBPACK_IMPORTED_MODULE_51__pages_create_player_create_player_module__["CreatePlayerModule"],
            __WEBPACK_IMPORTED_MODULE_55__pages_team_matches_team_matches_module__["TeamMatchesPageModule"],
            __WEBPACK_IMPORTED_MODULE_53__pages_create_match_create_match_module__["CreateMatchModule"],
            __WEBPACK_IMPORTED_MODULE_57__pages_match_availability_match_availability_module__["MatchAvailabilityPageModule"],
            __WEBPACK_IMPORTED_MODULE_60__pages_tournaments_tournaments_module__["a" /* TournamentsPageModule */],
            __WEBPACK_IMPORTED_MODULE_61__pages_locations_locations_module__["a" /* LocationsPageModule */], __WEBPACK_IMPORTED_MODULE_63__pages_create_location_create_location_module__["CreateLocationModule"], __WEBPACK_IMPORTED_MODULE_65__pages_create_tournament_create_tournament_module__["CreateTournamentModule"], __WEBPACK_IMPORTED_MODULE_67__pages_modeChange_modeChange_module__["ModeChangeModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_my_account_my_account__["a" /* MyAccountPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_my_teams_my_teams__["a" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_match_team_match_team__["a" /* MatchTeamPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_finance_finance__["a" /* FinancePage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_logout_logout__["a" /* LogoutPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_create_team_create_team__["a" /* CreateTeamPage */], __WEBPACK_IMPORTED_MODULE_47__pages_team_players_team_players__["a" /* TeamPlayersPage */], __WEBPACK_IMPORTED_MODULE_50__pages_create_player_create_player__["a" /* CreatePlayerPage */], __WEBPACK_IMPORTED_MODULE_54__pages_team_matches_team_matches__["a" /* TeamMatchesPage */], __WEBPACK_IMPORTED_MODULE_52__pages_create_match_create_match__["a" /* CreateMatchPage */], __WEBPACK_IMPORTED_MODULE_56__pages_match_availability_match_availability__["a" /* MatchAvailabilityPage */], __WEBPACK_IMPORTED_MODULE_58__pages_tournaments_tournaments__["a" /* TournamentsPage */], __WEBPACK_IMPORTED_MODULE_59__pages_locations_locations__["a" /* LocationsPage */],
            __WEBPACK_IMPORTED_MODULE_62__pages_create_location_create_location__["a" /* CreateLocationPage */], __WEBPACK_IMPORTED_MODULE_64__pages_create_tournament_create_tournament__["a" /* CreateTournamentPage */], __WEBPACK_IMPORTED_MODULE_66__pages_modeChange_modeChange__["a" /* ModeChangePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_7__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_8__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_30__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_31__providers_finance_finance__["a" /* FinanceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_30__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_44__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_9__providers_other_other__["a" /* OtherService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_finance_finance__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_team_players_team_players__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tournaments_tournaments__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_locations_locations__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__ = __webpack_require__(325);
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
    function MyApp(events, platform, statusBar, splashScreen, androidPermissions, push, alertCtrl) {
        var _this = this;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.type = "normal";
        platform.ready().then(function () {
            androidPermissions.requestPermissions([
                androidPermissions.PERMISSION.INTERNET,
                androidPermissions.PERMISSION.ACCESS_NETWORK_STATE,
                androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
            ]);
        });
        this.initializeApp();
        this.initPushNotification();
        this.adminPages = [
            { title: 'Players', component: __WEBPACK_IMPORTED_MODULE_15__pages_team_players_team_players__["a" /* TeamPlayersPage */] },
            { title: 'Matches', component: __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__["a" /* TeamMatchesPage */] },
            { title: 'Tournament', component: __WEBPACK_IMPORTED_MODULE_18__pages_tournaments_tournaments__["a" /* TournamentsPage */] },
            { title: 'Location', component: __WEBPACK_IMPORTED_MODULE_19__pages_locations_locations__["a" /* LocationsPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'Manage Teams', component: __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__["a" /* MyTeamsPage */] },
            { title: 'Change Mode', component: __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__["a" /* ModeChangePage */] },
            { title: 'Finance', component: __WEBPACK_IMPORTED_MODULE_12__pages_finance_finance__["a" /* FinancePage */] },
            { title: 'Update Password', component: __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset__["a" /* ResetPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */] },
        ];
        this.normalPages = [
            { title: 'Upcoming Matches', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Completed Matches', component: __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */] },
            { title: 'Team Stats', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'Change Mode', component: __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__["a" /* ModeChangePage */] },
            { title: 'Account Details', component: __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__["a" /* MyAccountPage */] },
            { title: 'Finance Details', component: __WEBPACK_IMPORTED_MODULE_12__pages_finance_finance__["a" /* FinancePage */] },
            { title: 'Update Password', component: __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset__["a" /* ResetPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */] },
        ];
        // used for an example of ngFor and navigation
        this.pages = this.normalPages;
        this.events.subscribe("UPDATE_SIDE_MENU", function (eventData) {
            if (eventData == "admin") {
                _this.pages = _this.adminPages;
            }
            else {
                _this.pages = _this.normalPages;
                _this.type = "normal";
            }
        });
    }
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        var options = {
            android: {
                senderID: "402670322623"
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log("device token:", data.registrationId);
            var alert = _this.alertCtrl.create({
                title: 'device token',
                subTitle: data.registrationId,
                buttons: ['OK']
            });
            alert.present();
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message', data.message);
            if (data.additionalData.foreground) {
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                //TODO: Your logic here
                            }
                        }]
                });
                confirmAlert.present();
            }
            else {
                var alert = _this.alertCtrl.create({
                    title: 'clicked on',
                    subTitle: "you clicked on the notification!",
                    buttons: ['OK']
                });
                alert.present();
                console.log("Push notification clicked");
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionicapp\crickify\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionicapp\crickify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_teams__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyTeamsPageModule = (function () {
    function MyTeamsPageModule() {
    }
    return MyTeamsPageModule;
}());
MyTeamsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_teams__["a" /* MyTeamsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_teams__["a" /* MyTeamsPage */]),
        ],
    })
], MyTeamsPageModule);

//# sourceMappingURL=my-teams.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finance__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FinancePageModule = (function () {
    function FinancePageModule() {
    }
    return FinancePageModule;
}());
FinancePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__finance__["a" /* FinancePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finance__["a" /* FinancePage */]),
        ],
    })
], FinancePageModule);

//# sourceMappingURL=finance.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_players__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamPlayersPageModule = (function () {
    function TeamPlayersPageModule() {
    }
    return TeamPlayersPageModule;
}());
TeamPlayersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_players__["a" /* TeamPlayersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_players__["a" /* TeamPlayersPage */]),
        ],
    })
], TeamPlayersPageModule);

//# sourceMappingURL=team-players.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TournamentsPageModule = (function () {
    function TournamentsPageModule() {
    }
    return TournamentsPageModule;
}());
TournamentsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tournaments__["a" /* TournamentsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tournaments__["a" /* TournamentsPage */]),
        ],
    })
], TournamentsPageModule);

//# sourceMappingURL=tournaments.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationsPageModule = (function () {
    function LocationsPageModule() {
    }
    return LocationsPageModule;
}());
LocationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__locations__["a" /* LocationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__locations__["a" /* LocationsPage */]),
        ],
    })
], LocationsPageModule);

//# sourceMappingURL=locations.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeChangeModule", function() { return ModeChangeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeChange__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModeChangeModule = (function () {
    function ModeChangeModule() {
    }
    return ModeChangeModule;
}());
ModeChangeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modeChange__["a" /* ModeChangePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modeChange__["a" /* ModeChangePage */]),
        ],
    })
], ModeChangeModule);

//# sourceMappingURL=modeChange.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_teams_my_teams__ = __webpack_require__(126);
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
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModeChangePage = (function () {
    function ModeChangePage(navCtrl, navParams, authService, alertController, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.events = events;
        this.userPostData = { "user_id": "", "token": "" };
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    ModeChangePage.prototype.admin = function () {
        this.events.publish("UPDATE_SIDE_MENU", "admin");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_teams_my_teams__["a" /* MyTeamsPage */]);
    };
    ModeChangePage.prototype.normal = function () {
        this.events.publish("UPDATE_SIDE_MENU", "normal");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ModeChangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    return ModeChangePage;
}());
ModeChangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'modeChange',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Change Mode</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card (click)="admin()">\n\n    <ion-card-header>\n\n     Admin Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n     Change Mode to Admin\n\n    </ion-card-content>\n\n  </ion-card>\n\n    <ion-card (click)="normal()">\n\n    <ion-card-header>\n\n     Normal Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n       Change Mode to Normal\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _f || Object])
], ModeChangePage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=modeChange.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__ = __webpack_require__(92);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, authService, loadingController, matchService, admob) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingController = loadingController;
        this.matchService = matchService;
        this.admob = admob;
    }
    WelcomePage.prototype.showBanner = function () {
        var bannerConfig = {
            autoShow: true,
            id: 'ca-app-pub-7720772047232561/8941352265'
        };
        this.admob.banner.config(bannerConfig);
        console.log('view did before enter ad');
        this.admob.banner.prepare().then(function () {
            // success
            console.log('view did enter ad');
        }).catch(function (e) { return console.log("view did error enter ad", e); });
        console.log('view did after enter ad');
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showBanner();
        console.log('ionViewDidLoad WelcomePage');
        if (this.authService.getAuthenticated()) {
            //console.log("token", this.authService.getToken());
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getBestBatting().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results.Batting);
                _this.battings = _this.responseData.results.Batting;
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
        this.matchService.getBestBowling().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results.Bowling);
                _this.bowlings = _this.responseData.results.Bowling;
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
        loading.dismiss();
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_forgot__["a" /* ForgotPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding class="login-background">\n\n    <ion-grid  >\n\n        <ion-row>\n\n          <ion-col col-2>\n\n            <img src="assets/img/icon.png"/>\n\n			 </ion-col >\n\n			 <ion-col col-6 >\n\n			<h1 >Crickify</h1>\n\n          </ion-col>\n\n   \n\n          <ion-col center text-center>\n\n            <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n          </ion-col>\n\n        \n\n        \n\n          <ion-col center text-center>\n\n            <button ion-button full color="lightText" (click)="login()">Log in</button>\n\n          </ion-col>\n\n        \n\n		 \n\n         \n\n        </ion-row>\n\n      </ion-grid>\n\n	  <h1>Best Batsman </h1>\n\n	 <ion-grid >\n\n        <ion-row > \n\n		<ion-col *ngFor="let batting of battings| slice:0:4;">\n\n	<ion-card color="primary">\n\n    <ion-card-header>\n\n      <b>{{batting.player.name}} </b>\n\n      \n\n    </ion-card-header>\n\n	<img src="assets/img/batsman.png"/>\n\n    <ion-card-content>\n\n      <p>{{batting.run}}({{batting.ball}})</p>\n\n     <p>{{batting.match.team.teamname}} vs\n\n      {{batting.match.opponent}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n   </ion-col>\n\n   </ion-row>\n\n      </ion-grid>\n\n	  \n\n	  <h1>Best Bowler</h1>\n\n	   <ion-grid >\n\n        <ion-row > \n\n		<ion-col *ngFor="let bowling of bowlings| slice:0:4;">\n\n  	<ion-card color="primary">\n\n    <ion-card-header>\n\n      <b>{{bowling.player.name}} </b>\n\n      \n\n    </ion-card-header>\n\n	<img src="assets/img/bowler.png"/>\n\n    <ion-card-content>\n\n      <p>{{bowling.wickets}}/{{bowling.run}}</p>\n\n     <p>{{bowling.match.team.teamname}} vs\n\n      {{bowling.match.opponent}}</p>\n\n\n\n    </ion-card-content>\n\n </ion-card>\n\n   </ion-col>\n\n   </ion-row>\n\n      </ion-grid>\n\n\n\n<br>\n\n<br><br>\n\n<br>\n\n    <ion-grid >\n\n        <ion-row color="primary" row-20 center text-center>\n\n         <ion-col>\n\n			<h2>About Crickify</h2>\n\n			</ion-col>\n\n          </ion-row>\n\n		  \n\n		  <ion-row row-60 center text-center>\n\n		  <ion-col>\n\n		  Manage your entire cricket landscape. From league schedules to player registrations, Player availability to result management, all available under one convenient account.Finance Mangement for the players.Take the hassle out of your club or league site. \n\n		  With integrated cricket data it will always be up to date and looking sharp.Announce your team and get your best team through interface.\n\n		 </ion-col>\n\n<br>\n\n<br>		 </ion-row>\n\n		  <ion-row row-20 center text-center>\n\n		  <ion-col>\n\n		  <h2>What are you waiting for?! Join thousands of other clubs, schools and leagues and get started with Crickify today.</h2>\n\n		 </ion-col>\n\n		 </ion-row>\n\n		   </ion-grid>\n\n\n\n<br>\n\n<br><br>\n\n<br>\n\n<ion-card color="primary">\n\n    <ion-card-header>\n\n	\n\n	 </ion-card-header>\n\n	\n\n    <ion-card-content>\n\n    <ion-grid color="primary">\n\n        <ion-row   center text-center>\n\n         <ion-col >\n\n			<h2>Contact Us</h2>\n\n			</ion-col>\n\n          </ion-row>\n\n		  <br>\n\n<br>\n\n		  <ion-row   center text-center>\n\n		  <ion-col>\n\n		  <b>Website Issues or Suggestions? Contact US @ crickify@gmail.com</b>\n\n		  </ion-col>\n\n		  <br>\n\n<br>\n\n		\n\n		  </ion-row >\n\n		  <ion-row  center text-center>\n\n		  <ion-col>\n\n		  Copyright © 2018 All rights reserved by Crickify\n\n		  </ion-col>\n\n		  </ion-row>\n\n		   </ion-grid>\n\n		     </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__["a" /* AdMobFree */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
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
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchTeamPage = (function () {
    function MatchTeamPage(navCtrl, navParams, matchService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.batting = [];
        this.tabsvalues = "summary";
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getData(this.matchId);
    }
    MatchTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    MatchTeamPage.prototype.getData = function (matchId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatchTeam(matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.players);
                _this.batting = _this.responseData.results.players;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return MatchTeamPage;
}());
MatchTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Team Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Team</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n              \n\n            </li>\n\n            <li *ngFor="let stat of batting">\n\n                <p class="cric-player-name">{{stat?.name}}</p>\n\n              \n\n            </li>\n\n          </ul>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], MatchTeamPage);

//# sourceMappingURL=match-team.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com';
//let isLoggedIn : boolean;
var isAuthenticated;
var OtherService = (function () {
    function OtherService(http) {
        this.http = http;
    }
    OtherService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    OtherService.prototype.getAllLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/location/locations', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response locations", res.json());
                if (res.json().statusCode == '200') {
                    console.log("locations", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    OtherService.prototype.getAllTournament = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/tournament/tournaments', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response tournaments", res.json());
                if (res.json().statusCode == '200') {
                    console.log("tournaments", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    OtherService.prototype.createLocation = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/location/location', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    OtherService.prototype.createTournament = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/tournament/tournament', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return OtherService;
}());
OtherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], OtherService);

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(57);
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
 *  reference http://www.9lessons.info/2017/06/ionic-angular-php-login-restful-api.html tutorial
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userData = { "username": "", "password": "" };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.login(this.userData).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            localStorage.setItem('userData', JSON.stringify(_this.responseData));
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results);
                localStorage.setItem('userData', JSON.stringify(_this.responseData.results));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                loading.dismiss();
                var alert_1 = _this.alertController.create({
                    title: 'Wrong login/password',
                    subTitle: 'your login and password combination doesnt seem to work. Please try again or contact us to reset',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(LoginPage_1);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }, function (err) {
            // Error log
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.homePage = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        \n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n          </ion-item>\n\n\n\n          <button ion-button full color="success" (click)="login()">Login</button>\n\n		  <a href="#" (click)="forgot()">Forgot Password</a>\n\n		  <a href="#" (click)="signup()">Sign Up</a>\n\n        <a href="#" (click)="homePage()">Home Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/teamplayer';
//let isLoggedIn : boolean;
var isAuthenticated;
var StatsService = (function () {
    function StatsService(http) {
        this.http = http;
    }
    StatsService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    StatsService.prototype.getTeamStats = function (teamid) {
        var _this = this;
        console.log("passed team id", teamid);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/tournament/stats/' + teamid, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return StatsService;
}());
StatsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], StatsService);

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(92);
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
    function HomePage(navCtrl, app, authService, matchService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.admob = admob;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    HomePage.prototype.showBanner = function () {
        var bannerConfig = {
            autoShow: true,
            id: 'ca-app-pub-7720772047232561/8941352265'
        };
        this.admob.banner.config(bannerConfig);
        console.log('view did before enter ad');
        this.admob.banner.prepare().then(function () {
            // success
            console.log('view did enter ad');
        }).catch(function (e) { return console.log("view did error enter ad", e); });
        console.log('view did after enter ad');
    };
    HomePage.prototype.ionViewCanEnter = function () {
        this.showBanner();
        console.log("view did enter", this.authService.getAuthenticated());
        return this.authService.getAuthenticated();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getAllMatches().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matches);
                _this.matches = _this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    HomePage.prototype.availabilitySelected = function (event, match) {
        var _this = this;
        console.log("selected", event, match);
        match.player = this.authService.getUser();
        console.log("after change", match);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.matchService.postAvailability(match).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    HomePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    HomePage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Upcoming Matches </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let match of matches" color="primary">\n\n    <ion-card-header>\n\n      {{match.match.team.teamname}} versus\n\n      {{match.match.opponent}}\n\n      <p>{{match.match.tournament.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match.match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match.match.location.name}}, {{match.match.location.address}}</p>\n\n	  \n\n         <ion-label>\n\n          Select Attendance\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="match.status" (ionChange)="availabilitySelected($event, match)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Comments</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="match.comments" (ionChange)="availabilitySelected($event, match)"></ion-input>\n\n	 </ion-item>\n\n	 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(33);
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
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    ForgotPage.prototype.forgot = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.forgot(this.userData).then(function (result) {
            _this.responseData = result;
            console.log("response in signup", _this.responseData);
            console.log("response code", _this.responseData.statusCode);
            loading.dismiss();
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results);
                var alert_1 = _this.alertController.create({
                    title: 'Email sent Successful',
                    subTitle: 'Email sent is successful',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (_this.responseData.statusCode == '401') {
                var alert_2 = _this.alertController.create({
                    title: 'User account exists!',
                    subTitle: 'This user does not exists in the list. Please Register!',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertController.create({
                    title: 'Server Unavailable!',
                    subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            //this.navCtrl.push(HomePage);
        }, function (err) {
            // Error log
        });
    };
    ForgotPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ForgotPage.prototype.homePage = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'forgot',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Forgot Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="forgot()">Reset Password</button>\n\n        <a href="#" (click)="login()">Login Page</a>\n\n		<a href="#" (click)="homePage()">Home Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(33);
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
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, authService, alertController, loadingController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
        this.signupForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.username = this.signupForm.controls['username'];
        this.password = this.signupForm.controls['password'];
        this.name = this.signupForm.controls['name'];
        this.phone = this.signupForm.controls['phone'];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        //  this.submitAttempt = true;
        var _this = this;
        if (!this.signupForm.valid) {
            //this.signupForm.slideTo(0);
            console.log("not valid");
        }
        else {
            console.log("success!");
            console.log(this.signupForm.value);
            //console.log(this.signupForm.value);
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.signup(this.signupForm.value).then(function (result) {
            _this.responseData = result;
            console.log("response in signup", _this.responseData);
            console.log("response code", _this.responseData.statusCode);
            loading.dismiss();
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results);
                localStorage.setItem('userData', JSON.stringify(_this.responseData.results.user));
                var alert_1 = _this.alertController.create({
                    title: 'Registration Successful',
                    subTitle: 'Your Registration is successful',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (_this.responseData.statusCode == '401') {
                var alert_2 = _this.alertController.create({
                    title: 'User account exists!',
                    subTitle: 'This user account exists in the list. Please login or reset your password!',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertController.create({
                    title: 'Server Unavailable!',
                    subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            //this.navCtrl.push(HomePage);
        }, function (err) {
            loading.dismiss();
            console.log("error", err);
        });
    };
    SignupPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.homePage = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registration\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <form [formGroup]="signupForm" (submit)="signup()">\n\n          <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Phone</ion-label>\n\n            <ion-input type="text" formControlName="phone"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item [class.invalid]="!username.valid">\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input type="text" formControlName="username" autocapitalize="off"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!username.valid" class="invalid">\n\n              <p>* Email is required!</p>\n\n          </ion-item>\n\n\n\n          <ion-item [class.invalid]="!password.valid">\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="!password.valid" class="invalid">\n\n              <p>* Password is required!</p>\n\n          </ion-item>\n\n  \n\n          \n\n\n\n          <button ion-button full color="success" type="submit" [disabled]="!signupForm.valid">Sign up</button>\n\n          <a href="#" (click)="login()">Login Page</a>\n\n<a href="#" (click)="homePage()">Home Page</a>\n\n        </form>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
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
 * Generated class for the PreviousMatchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviousMatchDetailsPage = (function () {
    function PreviousMatchDetailsPage(navCtrl, navParams, matchService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.batting = [];
        this.bowling = [];
        this.match = "";
        this.tabsvalues = "summary";
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getData(this.matchId);
    }
    PreviousMatchDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    PreviousMatchDetailsPage.prototype.getData = function (matchId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatchSummary(matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matchSummary);
                _this.matchSummary = _this.responseData.results.matchSummary;
                _this.match = _this.responseData.results.matchSummary.match;
                _this.batting = _this.responseData.results.matchSummary.batting;
                _this.bowling = _this.responseData.results.matchSummary.bowling;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return PreviousMatchDetailsPage;
}());
PreviousMatchDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-match-details',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n      {{match?.team?.teamname}} Vs\n\n      {{match?.opponent}}\n\n      <p>{{match?.tournament?.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match?.matchTime | date:\'fullDate\'}}, {{match?.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match?.location?.name}}, {{match?.location?.address}}</p>\n\n      <p>Toss won by <span *ngIf="match.tossWon">{{match?.team?.teamname}}</span><span *ngIf="!match.tossWon">{{match?.opponent}}</span>\n\n      <p>Result : {{match?.result}}, {{match?.remarks}}</p>\n\n      <p>{{match?.team?.teamname}}: {{match?.score}}/{{match?.wickets}}</p>\n\n      <p>{{match?.opponent}}:{{match?.oppositionScore}}/{{match?.oppositionWickets}}</p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Batting</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n                <p>R</p>\n\n                <p>B</p>\n\n                <p>4\'s</p>\n\n                <p>6\'s</p>\n\n                <p class="cric-values-decimals">SR</p>\n\n            </li>\n\n            <li *ngFor="let stat of (batting ? batting.slice(0,3) : [])">\n\n                <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                <p>{{stat?.run}}</p>\n\n                <p>{{stat?.ball}}</p>\n\n                <p>{{stat?.four}}</p>\n\n                <p>{{stat?.six}}</p>\n\n                <p class="cric-values-decimals">{{stat?.sr | number : \'1.2-2\'}}</p>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n        <div class="cric-stat-bowling-table">\n\n            <h4>Bowling</h4>\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let stat of (bowling ? bowling.slice(0,3) : [])">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.overs}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.wickets}}</p>\n\n                  <p>{{stat?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{stat?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n      </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    <p>Wd</p>\n\n                    <p>EC</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    <p>{{stat?.wide}}</p>\n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], PreviousMatchDetailsPage);

//# sourceMappingURL=previous-match-details.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_other_other__ = __webpack_require__(38);
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
var CreateMatchPage = (function () {
    function CreateMatchPage(navCtrl, navParams, teamService, loadingController, formBuilder, matchService, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.matchService = matchService;
        this.otherService = otherService;
        this.createMatchForm = formBuilder.group({
            opponent: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            description: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            remarks: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            matchTime: [''],
            location: [{ address: "", lat: 0, lng: 0, name: "", id: 0 }, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            tournament: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
        this.getLocations();
        this.getTournament();
        this.opponent = this.createMatchForm.controls['opponent'];
        this.team = JSON.parse(localStorage.getItem('team'));
    }
    CreateMatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateMatchPage.prototype.getLocations = function () {
        var _this = this;
        this.otherService.getAllLocation().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.locations = _this.responseData.results.locations;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    CreateMatchPage.prototype.getTournament = function () {
        var _this = this;
        this.otherService.getAllTournament().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.tournaments = _this.responseData.results.Tournaments;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    CreateMatchPage.prototype.addMatch = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.addMatch(this.createMatchForm.value, this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    return CreateMatchPage;
}());
CreateMatchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-match',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Match</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Match\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createMatchForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Opponent</ion-label>\n\n            <ion-input formControlName="opponent" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Remark</ion-label>\n\n            <ion-input formControlName="remarks" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="matchTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Tournament</ion-label>\n\n  <ion-select formControlName="tournament">\n\n    <ion-option *ngFor="let key of tournaments" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n    </form>\n\n  <button ion-button color="secondary" icon-left clear small (click)="addMatch()">\n\n            Add Match\n\n            \n\n          </button>\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreateMatchPage);

//# sourceMappingURL=create-match.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_players_players__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(15);
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
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = (function () {
    function MyProfilePage(navCtrl, navParams, playersService, loadingController, authService, teamService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.playersService = playersService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.teamService = teamService;
        this.tabsvalues = "batting";
        this.userPostData = { "user_id": "", "token": "" };
        this.playerStats = " ";
        this.battingStats = "";
        this.bowlingStats = "";
        this.teams = "";
        this.statsArray = [];
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
            this.getData();
        }
    }
    MyProfilePage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        //   this.playersService.getPlayerStats().then((result) => {
        //     this.responseData = result;
        //     console.log(this.responseData); 
        //     if (this.responseData.statusCode == '200'){
        //       loading.dismiss();
        //       console.log("test 200");
        //       console.log("result", this.responseData.results.Stats);
        //       this.playerStats = this.responseData.results.Stats;
        //       this.battingStats = this.responseData.results.Stats.battingStatistics;
        //       this.bowlingStats = this.responseData.results.Stats.bowlingStatistics;
        //     }  else if(this.responseData.statusCode == "404") {
        //       console.log("unauthorrised");
        //       localStorage.clear();
        //     } else {
        //       loading.dismiss();
        //       console.log("error", this.responseData)
        //     }
        // });
        this.teamService.getAllTeams().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.teams = _this.responseData.results.teams;
                _this.selectedTeam = _this.responseData.results.teams[0];
                _this.teamSelected(_this.responseData.results.teams[0]);
                console.log("result teams", JSON.stringify(_this.responseData.results));
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage.prototype.teamSelected = function (team) {
        console.log("selected team", team);
        console.log("team id", team.id);
        this.getStats(team);
    };
    MyProfilePage.prototype.changeMenus = function (index) {
        this.teamSelectedIndex = index;
    };
    MyProfilePage.prototype.getStats = function (team) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.statsArray = [];
        this.playersService.getPlayerTournamentStats(team.id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("stats test 200");
                if (_this.responseData.results.stats.length == 0) {
                }
                else {
                    _this.statsArray = _this.responseData.results.stats;
                    console.log("result", _this.responseData.results.stats);
                    // console.log("arrary", JSON.parse(this.statsArray));
                }
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/'<!--\n\n  Generated template for the MyProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Profile</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-item>\n\n        <ion-label>Pick a Team</ion-label>\n\n        <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n          <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n\n\n  <h3>{{statsArray[0]?.stats.battingStatistics?.player.name}}</h3>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="batting">\n\n        Batting Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="fielding">\n\n            Fielding Stats\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n    <div *ngSwitchCase="\'batting\'">\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>I</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p class="cric-values-decimals">Av</p>\n\n                  <p class="cric-values-decimals">SR</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.innings}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.ball}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.average | number : \'1.2-2\' }}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.sr | number : \'1.2-2\' }}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'bowling\'">\n\n        <div class="cric-stat-bowling-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.overs}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wickets}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.bowlingStatistics?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n    </div>\n\n\n\n      <div *ngSwitchCase="\'fielding\'">\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Tournament</p>\n\n                    <p>M</p>\n\n                    <p>Ct</p>\n\n                    <p>R/O</p>\n\n                    <p>St</p>\n\n                </li>\n\n                <li *ngFor="let tournament of statsArray">\n\n                    <p class="cric-player-name">{{tournament?.name}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.catches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.runOuts}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.stumpings}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n      </div>\n\n\n\n    </div> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
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
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAccountPage = (function () {
    function MyAccountPage(navCtrl, navParams, authService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        this.user = " ";
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    MyAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAccountPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("user", this.authService.getUser());
            this.user = JSON.parse(JSON.stringify(this.authService.getUser()));
        }
    };
    return MyAccountPage;
}());
MyAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-account',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/'<!--\n\n  Generated template for the MyAccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Account</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <p>Name  : {{user.name}}</p>\n\n  <p>Phone  : {{user.phone}}</p>\n\n  <p>Username  : {{user.username}}</p>\n\n  \n\n      \n\n              \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], MyAccountPage);

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_team_match_team__ = __webpack_require__(37);
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
 * Generated class for the PreviousMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviousMatchesPage = (function () {
    function PreviousMatchesPage(navCtrl, navParams, loadingController, authService, matchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.authService = authService;
        this.matchService = matchService;
        this.matches = '';
        this.getData();
    }
    PreviousMatchesPage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getPreviousMatches().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matches);
                _this.matches = _this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    PreviousMatchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchesPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
    };
    PreviousMatchesPage.prototype.goToMatchDetails = function (event) {
        console.log("clicked match", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */], { "matchId": event });
    };
    PreviousMatchesPage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    return PreviousMatchesPage;
}());
PreviousMatchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Completed Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team.teamname}} Vs\n\n          {{match.opponent}}\n\n          <p>{{match.tournament.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n          <p>{{match.location.name}}, {{match.location.address}}</p>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n        </ion-card-content>\n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n      </ion-card>\n\n    </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], PreviousMatchesPage);

//# sourceMappingURL=previous-matches.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchAvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
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
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchAvailabilityPage = (function () {
    function MatchAvailabilityPage(navCtrl, navParams, matchService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.avaailability = [];
        this.available = [];
        this.unavailable = [];
        this.tentative = [];
        this.unknown = [];
        this.tabsvalues = "available";
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getData(this.matchId);
    }
    MatchAvailabilityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    MatchAvailabilityPage.prototype.getData = function (matchId) {
        var _this = this;
        this.available = [];
        this.unavailable = [];
        this.tentative = [];
        this.unknown = [];
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatchAvailability(matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.Availibilties);
                _this.avaailability = _this.responseData.results.Availibilties;
                for (var _i = 0, _a = _this.avaailability; _i < _a.length; _i++) {
                    var data = _a[_i];
                    if (data.status == 0) {
                        _this.unknown.push(data);
                    }
                    else if (data.status == 1) {
                        _this.available.push(data);
                    }
                    else if (data.status == 2) {
                        _this.unavailable.push(data);
                    }
                    else if (data.status == 3) {
                        _this.tentative.push(data);
                    }
                }
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    MatchAvailabilityPage.prototype.availabilitySelected = function (event, stat) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.matchService.updateAvailability(this.matchId, stat.player, stat.status).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                _this.getData(_this.matchId);
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    return MatchAvailabilityPage;
}());
MatchAvailabilityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-availability',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Availability Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="available">\n\n        Availability\n\n      </ion-segment-button>\n\n          <ion-segment-button value="unAvailable">\n\n         UnAvailable\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="tentative">\n\n        Tentative\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="Unknown">\n\n         Unknown\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'available\'">\n\n        <div class="cric-stat-available-table">\n\n         \n\n          <ol type="1">\n\n          \n\n            <li *ngFor="let stat of available">\n\n			 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" >Not Provided</ion-option>\n\n        <ion-option value="1" selected>IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'unAvailable\'">\n\n		<div class="cric-stat-unAvailable-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unavailable">\n\n               <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1" >IN</ion-option>\n\n        <ion-option value="2" selected>OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'tentative\'">\n\n		<div class="cric-stat-tentative-table">\n\n         \n\n          <ol type="1">\n\n           \n\n            <li *ngFor="let stat of tentative">\n\n                 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3" selected>Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'Unknown\'">\n\n			<div class="cric-stat-unknown-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unknown">\n\n                <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" selected>Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card> \n\n            </li>\n\n          </ol>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], MatchAvailabilityPage);

//# sourceMappingURL=match-availability.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_team_match_team__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_match_create_match__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__match_availability_match_availability__ = __webpack_require__(97);
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
 * Generated class for the PreviousMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamMatchesPage = (function () {
    function TeamMatchesPage(navCtrl, navParams, loadingController, authService, matchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.authService = authService;
        this.matchService = matchService;
        this.matches = '';
        this.team = JSON.parse(localStorage.getItem('team'));
        this.getData();
    }
    TeamMatchesPage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatches(this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matches);
                _this.matches = _this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    TeamMatchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchesPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
    };
    TeamMatchesPage.prototype.goToMatchDetails = function (event) {
        console.log("clicked match", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */], { "matchId": event });
    };
    TeamMatchesPage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    TeamMatchesPage.prototype.goToMatchAvailability = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__match_availability_match_availability__["a" /* MatchAvailabilityPage */], { "matchId": event });
    };
    TeamMatchesPage.prototype.addMatch = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__create_match_create_match__["a" /* CreateMatchPage */]);
    };
    return TeamMatchesPage;
}());
TeamMatchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team.teamname}} Vs\n\n          {{match.opponent}}\n\n          <p>{{match.tournament.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n          <p>{{match.location.name}}, {{match.location.address}}</p>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n        </ion-card-content>\n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n		    <button ion-button icon-left clear small (click)="goToMatchAvailability(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Availability</div>\n\n          </button>\n\n      </ion-card>\n\n    </ion-content>\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addMatch()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], TeamMatchesPage);

//# sourceMappingURL=team-matches.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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
var CreateTeamPage = (function () {
    function CreateTeamPage(navCtrl, navParams, teamService, loadingController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.createTeamForm = formBuilder.group({
            teamname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
        this.teamname = this.createTeamForm.controls['teamname'];
    }
    CreateTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateTeamPage.prototype.createTeam = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.createTeam(this.createTeamForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    return CreateTeamPage;
}());
CreateTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Team</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Team\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTeamForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Team Name</ion-label>\n\n            <ion-input formControlName="teamname" type="text"></ion-input>\n\n        </ion-item>\n\n \n\n \n\n    </form>\n\n  <button ion-button color="secondary" icon-left clear small (click)="createTeam()">\n\n            Create Team\n\n            \n\n          </button>\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], CreateTeamPage);

//# sourceMappingURL=create-team.js.map

/***/ })

},[248]);
//# sourceMappingURL=main.js.map