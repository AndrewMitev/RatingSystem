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
var comment_service_1 = require("./comment.service");
var comment_1 = require("./comment");
var CommentComponent = (function () {
    function CommentComponent(_comments) {
        this._comments = _comments;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.comments = this._comments.getCommentPerId(this.userId);
    };
    CommentComponent.prototype.onSaveCommment = function () {
        var newComment = new comment_1.Comment();
        newComment.fromUserName = this.userName;
        newComment.comment = this.inputComment;
        this._comments.saveComment(this.userId, newComment);
    };
    return CommentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "userId", void 0);
CommentComponent = __decorate([
    core_1.Component({
        selector: '<ai-comments>',
        templateUrl: 'app/comments/comment.component.html',
        providers: [comment_service_1.CommentService]
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map