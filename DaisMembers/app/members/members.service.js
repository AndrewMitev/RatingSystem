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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var MembersService = (function () {
    function MembersService(_http) {
        this._http = _http;
        this.urlPath = 'http://localhost:61010/api/members';
    }
    MembersService.prototype.getMembers = function () {
        return this._http.get(this.urlPath)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.getMember = function (id) {
        return this._http.get(this.urlPath)
            .map(function (response) {
            var members = response.json();
            return members.find(function (p) { return p.memberId == id; });
        });
    };
    MembersService.prototype.registerVote = function (memberId) {
        var _this = this;
        var members, member;
        var statusMessage;
        return this._http.get(this.urlPath + '/' + memberId)
            .map(function (response) {
            return response.json();
        }).do(function (member) {
            debugger;
            if (member.starRating < 5) {
                member.starRating += 0.5;
            }
            _this._http.post(_this.urlPath + '/vote', member)
                .subscribe(function (success) { return statusMessage = success.statusText; }, function (error) { return statusMessage = error.statusText; });
        });
    };
    MembersService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return MembersService;
}());
MembersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map