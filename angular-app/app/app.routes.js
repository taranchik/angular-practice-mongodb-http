"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comment_list_component_1 = require("./comment-list/comment-list.component");
var comment_create_edit_component_1 = require("./comment-create-edit/comment-create-edit.component");
var comment_delete_component_1 = require("./comment-delete/comment-delete.component");
exports.routes = [
    {
        path: "",
        redirectTo: "comments",
        pathMatch: "full"
    },
    { path: "comments", component: comment_list_component_1.CommentListComponent },
    { path: "comments/edit/:id", component: comment_create_edit_component_1.CommentCreateEditComponent },
    { path: "comments/create", component: comment_create_edit_component_1.CommentCreateEditComponent },
    { path: "comments/delete/:id", component: comment_delete_component_1.CommentDeleteComponent }
];
//# sourceMappingURL=app.routes.js.map