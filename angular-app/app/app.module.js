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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var comment_list_component_1 = require("./comment-list/comment-list.component");
var comment_create_edit_component_1 = require("./comment-create-edit/comment-create-edit.component");
var comment_delete_component_1 = require("./comment-delete/comment-delete.component");
var index_1 = require("./shared/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(app_routes_1.routes)
            ],
            declarations: [
                app_component_1.AppComponent,
                comment_list_component_1.CommentListComponent,
                comment_create_edit_component_1.CommentCreateEditComponent,
                comment_delete_component_1.CommentDeleteComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [index_1.CommentService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map