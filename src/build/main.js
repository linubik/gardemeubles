webpackJsonp([0],{

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//BTH import { NotesPage } from '../notes/notes';






var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotesPage_1 = NotesPage;
    NotesPage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    NotesPage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    NotesPage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    NotesPage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(NotesPage_1);
    };
    NotesPage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__maths_maths__["a" /* MathsPage */]);
    };
    NotesPage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    NotesPage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__histoire_histoire__["a" /* HistoirePage */]);
    };
    NotesPage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    NotesPage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    NotesPage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    NotesPage = NotesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/notes/notes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list id="notes-list2">\n    <ion-item color="balanced" on-click="goToFranAis()" id="notes-list-item13">\n      Français\n      <ion-note item-right></ion-note>\n      <ion-icon name="book" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="assertive" on-click="goToMaths()" id="notes-list-item14">\n      Maths\n      <ion-note item-right></ion-note>\n      <ion-icon name="calculator" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToGOgraphie()" id="notes-list-item15">\n      Géographie\n      <ion-note item-right></ion-note>\n      <ion-icon name="globe" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToHistoire()" id="notes-list-item16">\n      Histoire\n      <ion-note item-right></ion-note>\n      <ion-icon name="timer" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToSVT()" id="notes-list-item17">\n      SVT\n      <ion-note item-right></ion-note>\n      <ion-icon name="leaf" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" id="notes-list-item18">\n      Technologie\n      <ion-note item-right></ion-note>\n      <ion-icon name="jet" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" id="notes-list-item19">\n      Physique Chimie\n      <ion-note item-right></ion-note>\n      <ion-icon name="flask" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToArts()" id="notes-list-item20">\n      Arts\n      <ion-note item-right></ion-note>\n      <ion-icon name="film" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n  <button id="notes-button66" ion-button color="positive" block href="tel:0612945950">\n    <ion-icon name="send"></ion-icon>\n    Envoyer\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/notes/notes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NotesPage);
    return NotesPage;
    var NotesPage_1;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//BTH import { MathsPage } from '../maths/maths';





var MathsPage = /** @class */ (function () {
    function MathsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MathsPage_1 = MathsPage;
    MathsPage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */]);
    };
    MathsPage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    MathsPage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    MathsPage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    MathsPage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(MathsPage_1);
    };
    MathsPage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    MathsPage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__histoire_histoire__["a" /* HistoirePage */]);
    };
    MathsPage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    MathsPage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    MathsPage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    MathsPage = MathsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maths',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/maths/maths.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Maths\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <h1 id="maths-heading2" style="color:#000000;">\n    Question Lieu\n  </h1>\n  <div id="maths-markdown3" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Vous savez que nous avons souvent déménagé\n    </p>\n    <p style="color:#000000;">\n      Les n° de rue des différentes adresses où Lucie a vécu ont un point commun.\n    </p>\n    <p style="color:#000000;">\n      C&#39;est toujours l&#39;âge de Lucie au moment où nous nous sommes installés à cet endroit.\n    </p>\n    <p style="color:#000000;">\n      A vous de les retrouver\n    </p>\n  </div>\n  <form id="maths-form1">\n    <ion-item id="maths-select1">\n      <ion-label>\n        La Bazinière\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          0\n        </ion-option>\n        <ion-option>\n          1\n        </ion-option>\n        <ion-option>\n          2\n        </ion-option>\n        <ion-option>\n          3\n        </ion-option>\n        <ion-option>\n          4\n        </ion-option>\n        <ion-option>\n          5\n        </ion-option>\n        <ion-option>\n          6\n        </ion-option>\n        <ion-option>\n          7\n        </ion-option>\n        <ion-option>\n          8\n        </ion-option>\n        <ion-option>\n          9\n        </ion-option>\n        <ion-option>\n          10\n        </ion-option>\n        <ion-option>\n          11\n        </ion-option>\n        <ion-option>\n          12\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="maths-select2">\n      <ion-label>\n        Rue des Cytises\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          0\n        </ion-option>\n        <ion-option>\n          1\n        </ion-option>\n        <ion-option>\n          2\n        </ion-option>\n        <ion-option>\n          3\n        </ion-option>\n        <ion-option>\n          4\n        </ion-option>\n        <ion-option>\n          5\n        </ion-option>\n        <ion-option>\n          6\n        </ion-option>\n        <ion-option>\n          7\n        </ion-option>\n        <ion-option>\n          8\n        </ion-option>\n        <ion-option>\n          9\n        </ion-option>\n        <ion-option>\n          10\n        </ion-option>\n        <ion-option>\n          11\n        </ion-option>\n        <ion-option>\n          12\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="maths-select3">\n      <ion-label>\n        Rue des Tours\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          0\n        </ion-option>\n        <ion-option>\n          1\n        </ion-option>\n        <ion-option>\n          2\n        </ion-option>\n        <ion-option>\n          3\n        </ion-option>\n        <ion-option>\n          4\n        </ion-option>\n        <ion-option>\n          5\n        </ion-option>\n        <ion-option>\n          6\n        </ion-option>\n        <ion-option>\n          7\n        </ion-option>\n        <ion-option>\n          8\n        </ion-option>\n        <ion-option>\n          9\n        </ion-option>\n        <ion-option>\n          10\n        </ion-option>\n        <ion-option>\n          11\n        </ion-option>\n        <ion-option>\n          12\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="maths-button2" ion-button color="positive" block on-click="goToNotes()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/maths/maths.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MathsPage);
    return MathsPage;
    var MathsPage_1;
}());

//# sourceMappingURL=maths.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranAisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//BTH import { FranAisPage } from '../fran-ais/fran-ais';






var FranAisPage = /** @class */ (function () {
    function FranAisPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FranAisPage_1 = FranAisPage;
    FranAisPage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    FranAisPage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    FranAisPage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notes_notes__["a" /* NotesPage */]);
    };
    FranAisPage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(FranAisPage_1);
    };
    FranAisPage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__maths_maths__["a" /* MathsPage */]);
    };
    FranAisPage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    FranAisPage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__histoire_histoire__["a" /* HistoirePage */]);
    };
    FranAisPage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    FranAisPage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    FranAisPage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    FranAisPage = FranAisPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fran-ais',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais/fran-ais.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Français\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <h1 id="franAis-heading3" style="color:#000000;">\n    Question Lieu\n  </h1>\n  <div id="franAis-markdown4" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Avant de vous poser la vraie question : voici d&#39;abord 2 indices\n    </p>\n  </div>\n  <div id="franAis-markdown5" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Parmi ces auteurs de fables, qui a vécu le plus tard ?\n    </p>\n  </div>\n  <form id="franAis-form2">\n    <ion-item id="franAis-select4">\n      <ion-label>\n        Indice 1\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Esope\n        </ion-option>\n        <ion-option>\n          Jean de La Fontaine\n        </ion-option>\n        <ion-option>\n          Phèdre\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div id="franAis-markdown6" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Quel titre de noblesse avait l&#39;auteure des livres suivants: &quot;les malheurs de Sophie&quot;, et &quot;les petites filles modèles&quot; ?\n      </p>\n    </div>\n    <ion-item id="franAis-select5">\n      <ion-label>\n        Indice 2\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          duchesse\n        </ion-option>\n        <ion-option>\n          baronne\n        </ion-option>\n        <ion-option>\n          comtesse\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="franAis-button3" ion-button color="positive" block on-click="goToFranAisSuite()">\n      Suivant\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais/fran-ais.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FranAisPage);
    return FranAisPage;
    var FranAisPage_1;
}());

//# sourceMappingURL=fran-ais.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranAisSuitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//BTH import { FranAisSuitePage } from '../fran-ais-suite/fran-ais-suite';






var FranAisSuitePage = /** @class */ (function () {
    function FranAisSuitePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FranAisSuitePage_1 = FranAisSuitePage;
    FranAisSuitePage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    FranAisSuitePage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_notes__["a" /* NotesPage */]);
    };
    FranAisSuitePage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    FranAisSuitePage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(FranAisSuitePage_1);
    };
    FranAisSuitePage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__maths_maths__["a" /* MathsPage */]);
    };
    FranAisSuitePage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    FranAisSuitePage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__histoire_histoire__["a" /* HistoirePage */]);
    };
    FranAisSuitePage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    FranAisSuitePage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    FranAisSuitePage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    FranAisSuitePage = FranAisSuitePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fran-ais-suite',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais-suite/fran-ais-suite.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Français ... suite\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <h1 id="franAisSuite-heading4" style="color:#000000;">\n    Question Lieu\n  </h1>\n  <div id="franAisSuite-markdown7" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Où est née Lucie ?\n    </p>\n  </div>\n  <form id="franAisSuite-form3">\n    <ion-item id="franAisSuite-select7">\n      <ion-label>\n        Ville\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Niort\n        </ion-option>\n        <ion-option>\n          Fontenay le Comte\n        </ion-option>\n        <ion-option></ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="franAisSuite-button4" ion-button color="positive" block on-click="goToFranAisPrNoms()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais-suite/fran-ais-suite.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FranAisSuitePage);
    return FranAisSuitePage;
    var FranAisSuitePage_1;
}());

//# sourceMappingURL=fran-ais-suite.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccueilPage = /** @class */ (function () {
    function AccueilPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    AccueilPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle().catch(function (error) { return console.log(error.message); }).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__notes_notes__["a" /* NotesPage */]); });
        /*
        this.auth.signInWithGoogle()
        .then(
        () => this.navCtrl.setRoot(HomePage),
        (error) => console.log(error.message)
        );
        */
    };
    AccueilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/accueil/accueil.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Accueil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <h1 id="accueil-heading1" style="color:#000000;">Bienvenue dans l\'application Garde-meubles</h1>\n  <div id="accueil-markdown1" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Votre mission si vous l&#39;acceptez est de résoudre des énigmes qui portent sur nous. Vous nous connaissez depuis 20 ans donc ce sera un jeu d&#39;enfant !\n    </p>\n  </div>\n  <div id="accueil-markdown18" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Les énigmes sont rangées par matière (Français, Maths ...) et permettront de trouver des\n      <strong>\n        Evénements\n      </strong>\n      , des\n      <strong>\n        Lieux\n      </strong>\n      , des\n      <strong>\n        Dates\n      </strong>\n      ou des\n      <strong>\n        Personnes\n      </strong>\n      .\n    </p>\n  </div>\n  <div id="accueil-markdown19" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Ex : aujourd&#39;hui\n      <strong>\n        25/08/2018\n      </strong>\n      les Personnes du\n      <strong>\n        Groupe WhatsApp &#39;Vieux Meubles&#39;\n      </strong>\n      participent à l&#39;événement\n      <strong>\n        20 ans de vie commune Val&amp;Bruno\n      </strong>\n      à\n      <strong>\n        St REMY\n      </strong>\n    </p>\n  </div>\n  <div id="accueil-markdown2" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      A vos souvenirs ... Prêts ... Cherchez !\n    </p>\n  </div>\n  <button id="accueil-button1" ion-button color="positive" block (click)="loginWithGoogle()">\n    Connexion\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/accueil/accueil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AccueilPage);
    return AccueilPage;
}());

//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    //let token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranAisPrNomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//BTH import { FranAisPrNomsPage } from '../fran-ais-pr-noms/fran-ais-pr-noms';






var FranAisPrNomsPage = /** @class */ (function () {
    function FranAisPrNomsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FranAisPrNomsPage_1 = FranAisPrNomsPage;
    FranAisPrNomsPage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */]);
    };
    FranAisPrNomsPage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    FranAisPrNomsPage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    FranAisPrNomsPage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(FranAisPrNomsPage_1);
    };
    FranAisPrNomsPage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__maths_maths__["a" /* MathsPage */]);
    };
    FranAisPrNomsPage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    FranAisPrNomsPage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__histoire_histoire__["a" /* HistoirePage */]);
    };
    FranAisPrNomsPage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    FranAisPrNomsPage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    FranAisPrNomsPage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    FranAisPrNomsPage = FranAisPrNomsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fran-ais-pr-noms',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais-pr-noms/fran-ais-pr-noms.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Français ... prénoms\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <h2 id="franAisPrNoms-heading5" style="color:#000000;">\n    Question Personne\n  </h2>\n  <button id="franAisPrNoms-button6" ion-button color="energized" style="font-size:-1px;">\n    A\n  </button>\n  <div id="franAisPrNoms-markdown10" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Une de nos soirées annuelles, mais en\n      <strong>\n        moins long\n      </strong>\n    </p>\n  </div>\n  <form id="franAisPrNoms-form8">\n    <ion-item id="franAisPrNoms-input3">\n      <ion-label>\n        A\n      </ion-label>\n      <ion-input type="text" placeholder="_ _ _ _ _ _"></ion-input>\n    </ion-item>\n  </form>\n  <form id="franAisPrNoms-form4">\n    <button id="franAisPrNoms-button16" ion-button color="energized" style="font-size:-1px;">\n      B\n    </button>\n    <div id="franAisPrNoms-markdown12" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Une peluche d&#39;enfant ?\n        <strong>\n          sans nous !\n        </strong>\n      </p>\n      <p style="color:#000000;">\n        (*) ne cherchez pas un mot, seulement des lettres !\n      </p>\n    </div>\n    <ion-item id="franAisPrNoms-input4">\n      <ion-label>\n        B\n      </ion-label>\n      <ion-input type="text" placeholder="_ _ _ _"></ion-input>\n    </ion-item>\n    <div id="franAisPrNoms-markdown14" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Si on ne cherche ni\n        <strong>\n          Date\n        </strong>\n        , ni\n        <strong>\n          Evénement\n        </strong>\n        , ni\n        <strong>\n          Personne\n        </strong>\n      </p>\n    </div>\n    <button id="franAisPrNoms-button21" ion-button color="energized" style="font-size:-1px;">\n      C\n    </button>\n    <ion-item id="franAisPrNoms-input5">\n      <ion-label>\n        C\n      </ion-label>\n      <ion-input type="text" placeholder="_ _ _ _"></ion-input>\n    </ion-item>\n    <button id="franAisPrNoms-button5" ion-button color="positive" block on-click="goToNotes()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais-pr-noms/fran-ais-pr-noms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FranAisPrNomsPage);
    return FranAisPrNomsPage;
    var FranAisPrNomsPage_1;
}());

//# sourceMappingURL=fran-ais-pr-noms.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GOgraphiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//BTH import { GOgraphiePage } from '../g-ographie/g-ographie';




var GOgraphiePage = /** @class */ (function () {
    function GOgraphiePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GOgraphiePage_1 = GOgraphiePage;
    GOgraphiePage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */]);
    };
    GOgraphiePage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    GOgraphiePage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    GOgraphiePage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    GOgraphiePage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__maths_maths__["a" /* MathsPage */]);
    };
    GOgraphiePage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(GOgraphiePage_1);
    };
    GOgraphiePage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__histoire_histoire__["a" /* HistoirePage */]);
    };
    GOgraphiePage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    GOgraphiePage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    GOgraphiePage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    GOgraphiePage = GOgraphiePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-g-ographie',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/g-ographie/g-ographie.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Géographie\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <h2 id="gOgraphie-heading7" style="color:#000000;">\n    Question Lieu\n  </h2>\n  <div id="gOgraphie-markdown15" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Dans cette ville, nous avons passé une\n      <strong>\n        sacrée journée\n      </strong>\n      même si notre Jean-Pierre national était retenu sur le Rocher\n    </p>\n  </div>\n  <form id="gOgraphie-form7">\n    <ion-item id="gOgraphie-input2">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Votre réponse"></ion-input>\n    </ion-item>\n    <button id="gOgraphie-button61" ion-button color="positive" block on-click="goToNotes()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/g-ographie/g-ographie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], GOgraphiePage);
    return GOgraphiePage;
    var GOgraphiePage_1;
}());

//# sourceMappingURL=g-ographie.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//BTH import { HistoirePage } from '../histoire/histoire';


var HistoirePage = /** @class */ (function () {
    function HistoirePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HistoirePage_1 = HistoirePage;
    HistoirePage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    HistoirePage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notes_notes__["a" /* NotesPage */]);
    };
    HistoirePage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    HistoirePage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    HistoirePage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    HistoirePage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__maths_maths__["a" /* MathsPage */]);
    };
    HistoirePage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    HistoirePage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(HistoirePage_1);
    };
    HistoirePage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    HistoirePage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    HistoirePage = HistoirePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-histoire',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/histoire/histoire.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Histoire\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <h2 id="histoire-heading10" style="color:#000000;">\n    Question Date\n  </h2>\n  <div id="histoire-markdown22" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Dans le film &quot;la vérité si je mens&quot; les acteurs disent souvent la réplique :\n      <strong>\n        &quot;Champions du monde !!!!&quot;\n      </strong>\n    </p>\n    <p style="color:#000000;">\n      A quelle période historique font-ils référence ?\n    </p>\n  </div>\n  <form id="histoire-form11">\n    <ion-item id="histoire-select10">\n      <ion-label>\n        Saison\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          printemps\n        </ion-option>\n        <ion-option>\n          été\n        </ion-option>\n        <ion-option>\n          automne\n        </ion-option>\n        <ion-option>\n          hiver\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="histoire-select11">\n      <ion-label>\n        Année\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          1982\n        </ion-option>\n        <ion-option>\n          1998\n        </ion-option>\n        <ion-option>\n          2006\n        </ion-option>\n        <ion-option>\n          2018\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button id="histoire-button64" ion-button color="positive" block on-click="goToHistoireSuite()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/histoire/histoire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HistoirePage);
    return HistoirePage;
    var HistoirePage_1;
}());

//# sourceMappingURL=histoire.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoireSuitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//BTH import { HistoireSuitePage } from '../histoire-suite/histoire-suite';


var HistoireSuitePage = /** @class */ (function () {
    function HistoireSuitePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HistoireSuitePage_1 = HistoireSuitePage;
    HistoireSuitePage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */]);
    };
    HistoireSuitePage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    HistoireSuitePage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    HistoireSuitePage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    HistoireSuitePage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__maths_maths__["a" /* MathsPage */]);
    };
    HistoireSuitePage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    HistoireSuitePage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_histoire__["a" /* HistoirePage */]);
    };
    HistoireSuitePage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(HistoireSuitePage_1);
    };
    HistoireSuitePage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__s_vt_s_vt__["a" /* SVTPage */]);
    };
    HistoireSuitePage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    HistoireSuitePage = HistoireSuitePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-histoire-suite',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/histoire-suite/histoire-suite.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Histoire ... suite\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <h2 id="histoireSuite-heading11" style="color:#000000;">\n    Question Lieu\n  </h2>\n  <div id="histoireSuite-markdown23" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      cette ville est tristement célèbre pour l&#39;affaire de l&#39;empoisonneuse Marie BESNARD\n    </p>\n  </div>\n  <form id="histoireSuite-form12">\n    <ion-item id="histoireSuite-input9">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Votre réponse"></ion-input>\n    </ion-item>\n    <button id="histoireSuite-button65" ion-button color="positive" block on-click="goToNotes()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/histoire-suite/histoire-suite.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HistoireSuitePage);
    return HistoireSuitePage;
    var HistoireSuitePage_1;
}());

//# sourceMappingURL=histoire-suite.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVTPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//BTH import { SVTPage } from '../s-vt/s-vt';

var SVTPage = /** @class */ (function () {
    function SVTPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SVTPage_1 = SVTPage;
    SVTPage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */]);
    };
    SVTPage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    SVTPage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    SVTPage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    SVTPage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__maths_maths__["a" /* MathsPage */]);
    };
    SVTPage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    SVTPage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_histoire__["a" /* HistoirePage */]);
    };
    SVTPage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    SVTPage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(SVTPage_1);
    };
    SVTPage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__arts_arts__["a" /* ArtsPage */]);
    };
    SVTPage = SVTPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-s-vt',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/s-vt/s-vt.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      SVT\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <h2 id="sVT-heading8" style="color:#000000;">\n    Question Lieu\n  </h2>\n  <div id="sVT-markdown20" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Dans cette ville, on trouve\n      <strong>\n        Rubis\n      </strong>\n      ,\n      <strong>\n        Saphir\n      </strong>\n      , et autre\n      <strong>\n        Trésor\n      </strong>\n      , pourtant, on n&#39;y trouve pas de mine de pierres précieuses.\n    </p>\n  </div>\n  <form id="sVT-form9">\n    <ion-item id="sVT-input6">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Votre réponse"></ion-input>\n    </ion-item>\n    <button id="sVT-button62" ion-button color="positive" block on-click="goToNotes()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/s-vt/s-vt.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SVTPage);
    return SVTPage;
    var SVTPage_1;
}());

//# sourceMappingURL=s-vt.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__s_vt_s_vt__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//BTH import { ArtsPage } from '../arts/arts';
var ArtsPage = /** @class */ (function () {
    function ArtsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ArtsPage_1 = ArtsPage;
    ArtsPage.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */]);
    };
    ArtsPage.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    ArtsPage.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    ArtsPage.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    ArtsPage.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__maths_maths__["a" /* MathsPage */]);
    };
    ArtsPage.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    ArtsPage.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_histoire__["a" /* HistoirePage */]);
    };
    ArtsPage.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    ArtsPage.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__s_vt_s_vt__["a" /* SVTPage */]);
    };
    ArtsPage.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ArtsPage_1);
    };
    ArtsPage = ArtsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arts',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/arts/arts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Arts\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <h2 id="arts-heading9" style="color:#000000;">\n    Question Lieu\n  </h2>\n  <div id="arts-markdown21" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Cette ville est connue pour ses\n      <strong>\n        planches\n      </strong>\n      et ses\n      <strong>\n        bulles\n      </strong>\n    </p>\n  </div>\n  <form id="arts-form10">\n    <ion-item id="arts-input7">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder="Votre réponse"></ion-input>\n    </ion-item>\n    <button id="arts-button63" ion-button color="positive" block on-click="goToNotes()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/arts/arts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ArtsPage);
    return ArtsPage;
    var ArtsPage_1;
}());

//# sourceMappingURL=arts.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_arts_arts__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fran_ais_pr_noms2_fran_ais_pr_noms2__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__config__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//BTH




//BTH
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_maths_maths__["a" /* MathsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_fran_ais_fran_ais__["a" /* FranAisPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_g_ographie_g_ographie__["a" /* GOgraphiePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_s_vt_s_vt__["a" /* SVTPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_arts_arts__["a" /* ArtsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_histoire_histoire__["a" /* HistoirePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_histoire_suite_histoire_suite__["a" /* HistoireSuitePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fran_ais_pr_noms2_fran_ais_pr_noms2__["a" /* FranAisPrNoms2Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notes_notes__["a" /* NotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                //BTH
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__config__["a" /* firebaseConfig */].fire)
                //BTH
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_maths_maths__["a" /* MathsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_fran_ais_fran_ais__["a" /* FranAisPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_g_ographie_g_ographie__["a" /* GOgraphiePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_s_vt_s_vt__["a" /* SVTPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_arts_arts__["a" /* ArtsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_histoire_histoire__["a" /* HistoirePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_histoire_suite_histoire_suite__["a" /* HistoireSuitePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_fran_ais_pr_noms2_fran_ais_pr_noms2__["a" /* FranAisPrNoms2Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notes_notes__["a" /* NotesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["a" /* AngularFireAuth */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_arts_arts__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_accueil_accueil__ = __webpack_require__(260);
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
    //BTH
    function MyApp(platform, statusBar, splashScreen) {
        //BTH    rootPage:any = AccueilPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_accueil_accueil__["a" /* AccueilPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_maths_maths__["a" /* MathsPage */]);
    };
    MyApp.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_notes_notes__["a" /* NotesPage */]);
    };
    MyApp.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    MyApp.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    MyApp.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    MyApp.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    MyApp.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_histoire_histoire__["a" /* HistoirePage */]);
    };
    MyApp.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    MyApp.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_s_vt_s_vt__["a" /* SVTPage */]);
    };
    MyApp.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_arts_arts__["a" /* ArtsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        MenuBulletin\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menuBulletin-list1">\n      <ion-item color="none" menuClose="" on-click="goToFranAis()" id="menuBulletin-list-item1">\n        Francais\n        <ion-icon name="bookmarks" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToMaths()" id="menuBulletin-list-item2">\n        Maths\n        <ion-icon name="calculator" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToGOgraphie()" id="menuBulletin-list-item3">\n        Géographie\n        <ion-icon name="globe" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToHistoire()" id="menuBulletin-list-item4">\n        Histoire\n        <ion-icon name="stopwatch" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToSVT()" id="menuBulletin-list-item5">\n        SVT\n        <ion-icon name="leaf" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToNotes()" id="menuBulletin-list-item6">\n        Technologie\n        <ion-icon name="plane" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToNotes()" id="menuBulletin-list-item7">\n        Physique Chimie\n        <ion-icon name="flask" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToArts()" id="menuBulletin-list-item8">\n        Arts\n        <ion-icon name="film" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToNotes()" id="menuBulletin-list-item9">\n        Notes\n        <ion-icon name="pulse" item-right></ion-icon>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranAisPrNoms2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_notes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maths_maths__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__histoire_histoire__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__histoire_suite_histoire_suite__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__s_vt_s_vt__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__arts_arts__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var FranAisPrNoms2Page = /** @class */ (function () {
    function FranAisPrNoms2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FranAisPrNoms2Page.prototype.goToNotes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notes_notes__["a" /* NotesPage */]);
    };
    FranAisPrNoms2Page.prototype.goToFranAis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fran_ais_fran_ais__["a" /* FranAisPage */]);
    };
    FranAisPrNoms2Page.prototype.goToFranAisSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fran_ais_suite_fran_ais_suite__["a" /* FranAisSuitePage */]);
    };
    FranAisPrNoms2Page.prototype.goToFranAisPrNoms = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__fran_ais_pr_noms_fran_ais_pr_noms__["a" /* FranAisPrNomsPage */]);
    };
    FranAisPrNoms2Page.prototype.goToMaths = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__maths_maths__["a" /* MathsPage */]);
    };
    FranAisPrNoms2Page.prototype.goToGOgraphie = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__g_ographie_g_ographie__["a" /* GOgraphiePage */]);
    };
    FranAisPrNoms2Page.prototype.goToHistoire = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__histoire_histoire__["a" /* HistoirePage */]);
    };
    FranAisPrNoms2Page.prototype.goToHistoireSuite = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__histoire_suite_histoire_suite__["a" /* HistoireSuitePage */]);
    };
    FranAisPrNoms2Page.prototype.goToSVT = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__s_vt_s_vt__["a" /* SVTPage */]);
    };
    FranAisPrNoms2Page.prototype.goToArts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__arts_arts__["a" /* ArtsPage */]);
    };
    FranAisPrNoms2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fran-ais-pr-noms2',template:/*ion-inline-start:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais-pr-noms2/fran-ais-pr-noms2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Français ... prénoms 2\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <h2 id="franAisPrNoms2-heading6" style="color:#000000;">\n    Question Personne\n  </h2>\n  <div id="franAisPrNoms2-markdown11" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Trouver 3 prénoms\n    </p>\n  </div>\n  <button id="franAisPrNoms2-button26" ion-button color="energized" style="font-size:-1px;">\n    A\n  </button>\n  <button id="franAisPrNoms2-button27" ion-button color="light" style="font-size:-1px;">\n    R\n  </button>\n  <button id="franAisPrNoms2-button28" ion-button color="light" style="font-size:-1px;">\n    E\n  </button>\n  <button id="franAisPrNoms2-button29" ion-button color="light" style="font-size:-1px;">\n    V\n  </button>\n  <button id="franAisPrNoms2-button30" ion-button color="light" style="font-size:-1px;">\n    E\n  </button>\n  <button id="franAisPrNoms2-button31" ion-button color="light" style="font-size:-1px;">\n    I\n  </button>\n  <button id="franAisPrNoms2-button32" ion-button color="light" style="font-size:-1px;">\n    L\n  </button>\n  <form id="franAisPrNoms2-form5">\n    <button id="franAisPrNoms2-button33" ion-button color="energized" style="font-size:-1px;">\n      B\n    </button>\n    <button id="franAisPrNoms2-button34" ion-button color="light" style="font-size:-1px;">\n      N\n    </button>\n    <button id="franAisPrNoms2-button35" ion-button color="light" style="font-size:-1px;">\n      O\n    </button>\n    <button id="franAisPrNoms2-button36" ion-button color="light" style="font-size:-1px;">\n      U\n    </button>\n    <button id="franAisPrNoms2-button37" ion-button color="light" style="font-size:-1px;">\n      R\n    </button>\n    <button id="franAisPrNoms2-button38" ion-button color="energized" style="font-size:-1px;">\n      C\n    </button>\n    <button id="franAisPrNoms2-button39" ion-button color="light" style="font-size:-1px;">\n      L\n    </button>\n    <button id="franAisPrNoms2-button40" ion-button color="light" style="font-size:-1px;">\n      I\n    </button>\n    <button id="franAisPrNoms2-button41" ion-button color="light" style="font-size:-1px;">\n      E\n    </button>\n    <button id="franAisPrNoms2-button42" ion-button color="light" style="font-size:-1px;">\n      U\n    </button>\n    <button id="franAisPrNoms2-button43" ion-button color="positive" block on-click="goToNotes()">\n      Valider\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/thomasvalerie/Documents/Bruno/ionic/gmv3/src/pages/fran-ais-pr-noms2/fran-ais-pr-noms2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FranAisPrNoms2Page);
    return FranAisPrNoms2Page;
}());

//# sourceMappingURL=fran-ais-pr-noms2.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
//BTH
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyDtbu3jbR_vJu2Oh-6S31q4bb7VRk7XoMY",
        authDomain: "gardemeubles-f6170.firebaseapp.com",
        databaseURL: "https://gardemeubles-f6170.firebaseio.com",
        projectId: "gardemeubles-f6170",
        storageBucket: "gardemeubles-f6170.appspot.com",
        messagingSenderId: "358717634043"
    }
};
//BTH 
//# sourceMappingURL=config.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map