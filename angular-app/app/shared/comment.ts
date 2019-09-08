export class Comment {
    public id: string;
    public userName: string;
    public commentText: string;
    public date: string;

    constructor(id, userName, commentText, date) {
        this.id = id;
        this.userName = userName;
        this.commentText = commentText;
        this.date = date;
    }
}