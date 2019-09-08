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
var http_1 = require("@angular/http");
var comment_1 = require("./comment");
var Observable_1 = require("rxjs/Observable");
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        // адрес сервиса
        this.url = "http://localhost:2403/comments";
    }
    // Отправка GET запроса нв сервер
    CommentService.prototype.getComments = function () {
        var comments = this.http.get(this.url)
            .map(this.extractComments) // преобразовывает ответ в массив экземпляров Comment.
            .catch(this.handleError);
        return comments;
    };
    CommentService.prototype.getComment = function (id) {
        var comment = this.http.get(this.url + "/" + id)
            .map(this.extractComment) // преобразовывает ответ в экземпляр Comment.
            .catch(this.handleError);
        return comment;
    };
    // Отправка POST запроса на сервер, добавление нового продукта в базу.
    CommentService.prototype.addComment = function (comment) {
        return this.http.post(this.url, comment)
            .catch(this.handleError);
    };
    // Отправка PUT запроса и обновление продукта в базе.
    CommentService.prototype.updateComment = function (comment) {
        return this.http.put(this.url + "/" + comment.id, comment)
            .catch(this.handleError);
    };
    // Отправка DELETE запроса и удаление продукта из базы.
    CommentService.prototype.deleteComment = function (comment) {
        return this.http.delete(this.url + "/" + comment.id)
            .catch(this.handleError);
    };
    CommentService.prototype.extractComments = function (response) {
        var res = response.json();
        var comments = [];
        for (var i = 0; i < res.length; i++) {
            comments.push(new comment_1.Comment(res[i].id, res[i].userName, res[i].commentText, res[i].date));
        }
        return comments;
    };
    CommentService.prototype.extractComment = function (response) {
        var res = response.json();
        var comment = new comment_1.Comment(res.id, res.userName, res.commentText, res.date);
        return comment;
    };
    CommentService.prototype.handleError = function (error, cought) {
        var message = "";
        if (error instanceof http_1.Response) {
            var errorData = error.json().error || JSON.stringify(error.json());
            message = error.status + " - " + (error.statusText || '') + " " + errorData;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return Observable_1.Observable.throw(message);
    };
    CommentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map