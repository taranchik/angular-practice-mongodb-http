import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentCreateEditComponent } from "./comment-create-edit/comment-create-edit.component";
import { CommentDeleteComponent } from "./comment-delete/comment-delete.component";
import { CommentService } from "./shared/index";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        CommentListComponent,
        CommentCreateEditComponent,
        CommentDeleteComponent],
    bootstrap: [AppComponent],
    providers: [CommentService]
})
export class AppModule { }
