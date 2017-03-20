import { Injectable } from '@angular/core'
import { Comments } from './comments'
import { Comment } from './comment'
import { Http, Response } from '@angular/http'


@Injectable()
export class CommentService{
    private urlPath: string = 'http://192.168.2.99:8021/api/comments';

    constructor(private _http: Http){

    }

    getCommentPerId(userId: number): Comments{
        return {
            userId: 1,
            comments: [{fromUserName: 'Pesho', comment: 'hahah'}, 
            {fromUserName: 'Koce', comment: 'хняяяя'}, ]
        };
    }

    saveComment(userId: number, comment: Comment): void{
        let data = 
        {
            userId: userId,
            comment: comment
        };

        let message: string;

        this._http.post(this.urlPath, data)
                  .subscribe(successMessage => message = successMessage.toString(),
                             errorMessage => message = errorMessage);  
    }
}