import { Component, OnInit, Input } from '@angular/core'
import { CommentService } from './comment.service'
import { Comments } from './comments'
import { Comment } from './comment'

@Component({
    selector: '<ai-comments>',
    templateUrl: 'app/comments/comment.component.html',
    providers: [CommentService]
})
export class CommentComponent implements OnInit {
    @Input() private userId: number;
    comments: Comments;
    userName: string;
    inputComment: string;

    constructor(private _comments: CommentService){

    }

    ngOnInit(): void{
        this.comments = this._comments.getCommentPerId(this.userId);
    }

    onSaveCommment(): void{
        let newComment = new Comment();
        newComment.fromUserName = this.userName;
        newComment.comment = this.inputComment;

        this._comments.saveComment(this.userId, newComment);
    }
}