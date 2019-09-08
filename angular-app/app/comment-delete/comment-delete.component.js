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
var CommentDeleteComponent = /** @class */ (function () {
    function CommentDeleteComponent(activatedRoute, router, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.service = service;
    }
    CommentDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.service.getComment(id)
                .subscribe(function (comment) { return _this.currentComment = comment; }, function (error) { return _this.errorMessage = error; });
        }
    };
    CommentDeleteComponent.prototype.deleteComment = function () {
        var _this = this;
        this.service.deleteComment(this.currentComment)
            .subscribe(function () { return _this.goBack(); }, function (error) { return _this.errorMessage = error; });
    };
    CommentDeleteComponent.prototype.goBack = function () {
        this.router.navigate(["/comments"]);
    };
    CommentDeleteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "comment-delete",
            templateUrl: "comment-delete.component.html",
            styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            index_1.CommentService])
    ], CommentDeleteComponent);
    return CommentDeleteComponent;
}());
exports.CommentDeleteComponent = CommentDeleteComponent;
//# sourceMappingURL=comment-delete.component.js.map