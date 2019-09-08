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
var forms_1 = require("@angular/forms");
var index_1 = require("../shared/index");
var CommentCreateEditComponent = /** @class */ (function () {
    function CommentCreateEditComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    CommentCreateEditComponent.prototype.checkDoubleDigit = function (value) {
        return value.length == 2 ? value : "0" + value;
    };
    CommentCreateEditComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getCommentFromRoute();
    };
    CommentCreateEditComponent.prototype.checkError = function (element, errorType) {
        return this.commentForm.get(element).hasError(errorType) &&
            this.commentForm.get(element).touched;
    };
    CommentCreateEditComponent.prototype.onSubmit = function (commentForm) {
        var _this = this;
        this.currentComment.userName = commentForm.value.userName;
        this.currentComment.commentText = commentForm.value.commentText;
        this.currentComment.date =
            this.checkDoubleDigit(String(new Date().getUTCDate())) + "." +
                this.checkDoubleDigit(String((new Date().getUTCMonth() + 1))) + "." +
                String(new Date().getUTCFullYear()).substring(2, 4);
        if (this.currentComment.id) {
            this.service.updateComment(this.currentComment)
                .subscribe(function () { return _this.goBack(); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.service.addComment(this.currentComment)
                .subscribe(function () { return _this.goBack(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    CommentCreateEditComponent.prototype.goBack = function () {
        this.router.navigate(["/comments"]);
    };
    CommentCreateEditComponent.prototype.getCommentFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            if (id) {
                _this.service.getComment(id).subscribe(function (comment) {
                    _this.currentComment = comment;
                    _this.commentForm.patchValue(_this.currentComment);
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _this.currentComment = new index_1.Comment(null, null, null, null);
                _this.commentForm.patchValue(_this.currentComment);
            }
        });
    };
    CommentCreateEditComponent.prototype.buildForm = function () {
        this.commentForm = this.fb.group({
            userName: ["", forms_1.Validators.required],
            commentText: ["", forms_1.Validators.required]
        });
    };
    CommentCreateEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "comment-create-edit",
            templateUrl: "comment-create-edit.component.html",
            styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
        }),
        __metadata("design:paramtypes", [index_1.CommentService,
            router_1.ActivatedRoute,
            forms_1.FormBuilder,
            router_1.Router])
    ], CommentCreateEditComponent);
    return CommentCreateEditComponent;
}());
exports.CommentCreateEditComponent = CommentCreateEditComponent;
//# sourceMappingURL=comment-create-edit.component.js.map