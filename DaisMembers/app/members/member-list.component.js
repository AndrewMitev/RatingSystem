"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var members_service_1 = require("./members.service");
var angular2_notifications_1 = require("angular2-notifications");
var MemberListComponent = (function () {
    function MemberListComponent(_membersService, _notifier) {
        this._membersService = _membersService;
        this._notifier = _notifier;
        this.title = 'Dais Workers';
        this.showImages = false;
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.receivedData = 'Default';
    }
    MemberListComponent.prototype.toggleImages = function () {
        this.showImages = !this.showImages;
    };
    MemberListComponent.prototype.clickedNestedComponent = function (data) {
        this.receivedData = data;
    };
    MemberListComponent.prototype.clickedVote = function (data) {
        if (data) {
            this.members.find(function (m) { return m.memberId == data.memberId; }).starRating = data.starRating;
        }
        else {
            this._notifier.alert("Опаа", "Нагла работа значи!");
        }
    };
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._membersService.getMembers()
            .subscribe(function (productsReceived) { _this.members = productsReceived; console.log(_this.members); console.log(productsReceived); }, function (error) { return _this.errorMessage = error; });
    };
    return MemberListComponent;
}());
MemberListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/members/member-list.component.html',
        providers: [members_service_1.MembersService, , angular2_notifications_1.NotificationsService]
    }),
    __metadata("design:paramtypes", [members_service_1.MembersService, angular2_notifications_1.NotificationsService])
], MemberListComponent);
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=member-list.component.js.map