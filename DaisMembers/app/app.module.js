"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var member_list_component_1 = require("./members/member-list.component");
var filter_pipe_1 = require("./shared/filter-pipe");
var star_component_1 = require("./shared/star.component");
var http_1 = require("@angular/http");
var member_detail_component_1 = require("./members/member-detail.component");
var welcome_component_1 = require("./home/welcome.component");
var vote_heart_component_1 = require("./members/vote-heart.component");
var angular2_notifications_1 = require("angular2-notifications");
var comment_component_1 = require("./comments/comment.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, angular2_notifications_1.SimpleNotificationsModule,
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'members', component: member_list_component_1.MemberListComponent },
                { path: 'members/:id', component: member_detail_component_1.MemberDetailComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ])],
        declarations: [
            app_component_1.AppComponent,
            member_list_component_1.MemberListComponent,
            star_component_1.StarComponent,
            filter_pipe_1.FilterPipe,
            member_detail_component_1.MemberDetailComponent,
            welcome_component_1.WelcomeComponent,
            vote_heart_component_1.VoteHeartComponent,
            comment_component_1.CommentComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map