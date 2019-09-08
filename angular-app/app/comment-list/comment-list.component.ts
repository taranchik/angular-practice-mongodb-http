import { Component, OnInit, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { CommentService, Comment } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "comment-list",
    templateUrl: "comment-list.component.html",
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class CommentListComponent implements OnInit, DoCheck {
    comments: Comment[];
    errorMessage: string;

    constructor(private service: CommentService,
        private router: Router) { }

    ngOnInit() {
        this.getComments();
    }

    ngDoCheck() {
        if(this.comments){
            this.comments = this.comments.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }

    public refresh() {
        this.getComments();
    }

    public editComment(comment: Comment) {
        this.router.navigate(["comments", "edit", comment.id]);
    }

    public deleteComment(comment: Comment) {
        this.router.navigate(["comments", "delete", comment.id]);
    }

    public createComment() {
        this.router.navigate(["comments", "create"]);
    }

    private getComments() {
        this.service.getComments().subscribe(
            comments => this.comments = comments,
            error => this.errorMessage = error
        );
    }
}