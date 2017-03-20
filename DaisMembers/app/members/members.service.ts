import { Injectable } from '@angular/core'
import { Member } from './member'
import { Observable } from 'rxjs/Observable'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class MembersService{
    private urlPath: string = 'http://localhost:61010/api/members'

    constructor(private _http: Http){

    }

    getMembers(): Observable<Member[]> {
        return this._http.get(this.urlPath)
        .map((response: Response) => <Member[]>response.json())
        .catch(this.handleError);
    }

    getMember(id: number): Observable<Member> {
        return this._http.get(this.urlPath)
        .map((response: Response) =>
        {
            let members = <Member[]>response.json();
            return members.find(p => p.memberId == id);
        });
    }

    registerVote(memberId: number): Observable<Member>{
        let members: Member[], member: Member;
        let statusMessage: string;

        return this._http.get(this.urlPath + '/' + memberId)
        .map((response: Response) =>
        {
            return <Member>response.json();
        }).do( member => {
            debugger;
            if (member.starRating < 5){
                member.starRating += 0.5
            }

            this._http.post(this.urlPath + '/vote', member)
                .subscribe(success => statusMessage = success.statusText,
                            error => statusMessage = error.statusText);                          
        });
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}