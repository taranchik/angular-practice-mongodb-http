import { Routes } from "@angular/router";
import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentCreateEditComponent } from "./comment-create-edit/comment-create-edit.component";
import { CommentDeleteComponent } from "./comment-delete/comment-delete.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "comments",
        pathMatch: "full"
    },
    { path: "comments", component: CommentListComponent },
    { path: "comments/edit/:id", component: CommentCreateEditComponent},
    { path: "comments/create", component: CommentCreateEditComponent},
    { path: "comments/delete/:id", component: CommentDeleteComponent}
];