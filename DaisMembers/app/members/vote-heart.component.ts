import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { MembersService } from './members.service'
import { Member } from './member'
 
@Component({
    selector: 'ai-heart',
    templateUrl: 'app/members/vote-heart.component.html',
    providers: [MembersService ]
})
export class VoteHeartComponent implements OnInit{
    @Input() memberId: number;
    @Output() emitter: EventEmitter<Member> = new EventEmitter();
    selectedClass: string;

    private readonly expireVoteMilisecs: number = 1800000; //30 mins.

    constructor(private _membersService: MembersService){
    }

    onClick(): void{
        if (localStorage.getItem("XA-UniqueNumber"))
        {
            this.emitter.emit();
        }
        else
        {
            localStorage.setItem("XA-UniqueNumber", this.memberId.toString());
            localStorage.setItem("DateCreated", new Date().toString());

            this._membersService.registerVote(this.memberId)
                .subscribe(updatedMember => this.emitter.emit(updatedMember));
            this.selectedClass = "fa fa-heart votedHeart";
        }
    }

    ngOnInit(): void {
        if (+localStorage.getItem("XA-UniqueNumber") == this.memberId){
            this.selectedClass = "fa fa-heart votedHeart";
        }
        else
        {
            this.selectedClass = "fa fa-heart voteHeart";
        }

        this.compareDates(new Date(localStorage.getItem("DateCreated")));
    }

    private compareDates(createDate: Date): void{
        let today = new Date();
        let duration = today.valueOf() - createDate.valueOf();
        
        if (duration > this.expireVoteMilisecs){
            localStorage.clear();
        }
    }
}