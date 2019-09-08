import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Comment, CommentService } from "../shared/index";

@Component({
    moduleId: module.id,
    selector: "comment-create-edit",
    templateUrl: "comment-create-edit.component.html",
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class CommentCreateEditComponent implements OnInit {
    currentComment: Comment;
    errorMessage: string;
    commentForm: FormGroup;

    constructor(private service: CommentService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router) { }

    private checkDoubleDigit(value: string) {
        return value.length == 2 ? value : "0" + value;
    }

    ngOnInit() {
        this.buildForm();
        this.getCommentFromRoute();
    }

    public checkError(element: string, errorType: string) {
        return this.commentForm.get(element).hasError(errorType) &&
            this.commentForm.get(element).touched
    }

    public onSubmit(commentForm: FormGroup) {
        this.currentComment.userName = commentForm.value.userName;
        this.currentComment.commentText = commentForm.value.commentText;
        this.currentComment.date = 
        this.checkDoubleDigit(String(new Date().getUTCDate())) + "." + 
        this.checkDoubleDigit(String((new Date().getUTCMonth() + 1))) + "." + 
        String(new Date().getUTCFullYear()).substring(2, 4);

        if (this.currentComment.id) {
            this.service.updateComment(this.currentComment)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        } else {
            this.service.addComment(this.currentComment)
                .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
                );
        }
    }

    public goBack() {
        this.router.navigate(["/comments"]);
    }

    private getCommentFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            if (id) {
                this.service.getComment(id).subscribe(
                    comment => {
                        this.currentComment = comment;
                        this.commentForm.patchValue(this.currentComment);
                    },
                    error => this.errorMessage = error
                );
            }
            else {
                this.currentComment = new Comment(null, null, null, null);
                this.commentForm.patchValue(this.currentComment);
            }
        });
    }

    private buildForm() {
        this.commentForm = this.fb.group({
            userName: ["", Validators.required],
            commentText: ["", Validators.required]
        });
    }
}