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
var VoteHeartComponent = (function () {
    function VoteHeartComponent(_membersService) {
        this._membersService = _membersService;
        this.emitter = new core_1.EventEmitter();
        this.expireVoteMilisecs = 1800000; //30 mins.
    }
    VoteHeartComponent.prototype.onClick = function () {
        var _this = this;
        if (localStorage.getItem("XA-UniqueNumber")) {
            this.emitter.emit();
        }
        else {
            localStorage.setItem("XA-UniqueNumber", this.memberId.toString());
            localStorage.setItem("DateCreated", new Date().toString());
            this._membersService.registerVote(this.memberId)
                .subscribe(function (updatedMember) { return _this.emitter.emit(updatedMember); });
            this.selectedClass = "fa fa-heart votedHeart";
        }
    };
    VoteHeartComponent.prototype.ngOnInit = function () {
        if (+localStorage.getItem("XA-UniqueNumber") == this.memberId) {
            this.selectedClass = "fa fa-heart votedHeart";
        }
        else {
            this.selectedClass = "fa fa-heart voteHeart";
        }
        this.compareDates(new Date(localStorage.getItem("DateCreated")));
    };
    VoteHeartComponent.prototype.compareDates = function (createDate) {
        var today = new Date();
        var duration = today.valueOf() - createDate.valueOf();
        if (duration > this.expireVoteMilisecs) {
            localStorage.clear();
        }
    };
    return VoteHeartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VoteHeartComponent.prototype, "memberId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], VoteHeartComponent.prototype, "emitter", void 0);
VoteHeartComponent = __decorate([
    core_1.Component({
        selector: 'ai-heart',
        templateUrl: 'app/members/vote-heart.component.html',
        providers: [members_service_1.MembersService]
    }),
    __metadata("design:paramtypes", [members_service_1.MembersService])
], VoteHeartComponent);
exports.VoteHeartComponent = VoteHeartComponent;
//# sourceMappingURL=vote-heart.component.js.map