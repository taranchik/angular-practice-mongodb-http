import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Comment } from "./comment";

import { Observable } from "rxjs/Observable";

@Injectable()
export class CommentService {
    // адрес сервиса
    private url = "http://localhost:2403/comments";

    constructor(private http: Http) { }

    // Отправка GET запроса нв сервер
    public getComments(): Observable<Comment[]> {
        let comments = this.http.get(this.url)
            .map(this.extractComments) // преобразовывает ответ в массив экземпляров Comment.
            .catch(this.handleError);
        return comments;
    }

    public getComment(id: string): Observable<Comment> {
        let comment = this.http.get(this.url + "/" + id)
            .map(this.extractComment) // преобразовывает ответ в экземпляр Comment.
            .catch(this.handleError);
        return comment;
    }

    // Отправка POST запроса на сервер, добавление нового продукта в базу.
    public addComment(comment: Comment) {
        return this.http.post(this.url, comment)
            .catch(this.handleError);
    }

    // Отправка PUT запроса и обновление продукта в базе.
    public updateComment(comment: Comment) {
        return this.http.put(this.url + "/" + comment.id, comment)
            .catch(this.handleError);
    }

    // Отправка DELETE запроса и удаление продукта из базы.
    public deleteComment(comment: Comment) {
        return this.http.delete(this.url + "/" + comment.id)
            .catch(this.handleError);
    }

    private extractComments(response: Response) {
        let res = response.json();
        let comments: Comment[] = [];
        for (let i = 0; i < res.length; i++) {
            comments.push(new Comment(res[i].id, res[i].userName, res[i].commentText, res[i].date));
        }
        return comments;
    }

    private extractComment(response: Response) {
        let res = response.json();
        let comment = new Comment(res.id, res.userName, res.commentText, res.date);
        return comment;
    }

    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);

        return Observable.throw(message);
    }
}

