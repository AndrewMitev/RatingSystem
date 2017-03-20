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
var router_1 = require("@angular/router");
var members_service_1 = require("./members.service");
var MemberDetailComponent = (function () {
    function MemberDetailComponent(_activatedRoute, _router, _membersService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._membersService = _membersService;
        this.title = "Details";
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberId = +this._activatedRoute.snapshot.params['id'];
        this._membersService.getMember(this.memberId)
            .subscribe(function (memberReceived) { return _this.member = memberReceived; }, function (error) { return error = error; });
    };
    MemberDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/members']);
    };
    return MemberDetailComponent;
}());
MemberDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/members/member-detail.component.html',
        providers: [members_service_1.MembersService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, members_service_1.MembersService])
], MemberDetailComponent);
exports.MemberDetailComponent = MemberDetailComponent;
//# sourceMappingURL=member-detail.component.js.map