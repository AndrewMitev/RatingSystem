import { Member } from './member'
import { Component, OnInit } from '@angular/core' 
import { ActivatedRoute, Router } from '@angular/router'
import { MembersService } from './members.service'

@Component({
    templateUrl: 'app/members/member-detail.component.html',
    providers: [MembersService]
})
export class MemberDetailComponent implements OnInit{

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _membersService: MembersService ){}

    public title: string = "Details"
    public memberId: number;
    public member: Member;
    public error: string;

    ngOnInit(): void{
        this.memberId = +this._activatedRoute.snapshot.params['id']
        this._membersService.getMember(this.memberId)
                                .subscribe(
                                    memberReceived => this.member = memberReceived,
                                    error => error = error
                                );
    }

    onBack(): void{
        this._router.navigate(['/members'])
    }
}