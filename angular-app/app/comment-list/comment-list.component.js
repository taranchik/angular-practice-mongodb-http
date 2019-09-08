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
var index_1 = require("../shared/index");
var CommentListComponent = /** @class */ (function () {
    function CommentListComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    CommentListComponent.prototype.ngOnInit = function () {
        this.getComments();
    };
    CommentListComponent.prototype.ngDoCheck = function () {
        if (this.comments) {
            this.comments = this.comments.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
        }
    };
    CommentListComponent.prototype.refresh = function () {
        this.getComments();
    };
    CommentListComponent.prototype.editComment = function (comment) {
        this.router.navigate(["comments", "edit", comment.id]);
    };
    CommentListComponent.prototype.deleteComment = function (comment) {
        this.router.navigate(["comments", "delete", comment.id]);
    };
    CommentListComponent.prototype.createComment = function () {
        this.router.navigate(["comments", "create"]);
    };
    CommentListComponent.prototype.getComments = function () {
        var _this = this;
        this.service.getComments().subscribe(function (comments) { return _this.comments = comments; }, function (error) { return _this.errorMessage = error; });
    };
    CommentListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "comment-list",
            templateUrl: "comment-list.component.html",
            styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
        }),
        __metadata("design:paramtypes", [index_1.CommentService,
            router_1.Router])
    ], CommentListComponent);
    return CommentListComponent;
}());
exports.CommentListComponent = CommentListComponent;
//# sourceMappingURL=comment-list.component.js.map