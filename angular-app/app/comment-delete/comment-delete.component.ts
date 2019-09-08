import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Comment, CommentService } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "comment-delete",
    templateUrl: "comment-delete.component.html",
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class CommentDeleteComponent implements OnInit {

    currentComment: Comment;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router,
        private service: CommentService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.service.getComment(id)
                .subscribe(
                comment => this.currentComment = comment,
                error => this.errorMessage = error
                );
        }
    }

    deleteComment() {
        this.service.deleteComment(this.currentComment)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    }

    goBack() {
        this.router.navigate(["/comments"]);
    }

}