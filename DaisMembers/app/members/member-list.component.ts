import { Component, OnInit } from '@angular/core'
import { MembersService } from './members.service'
import { Member } from './member'
import { NotificationsService } from 'angular2-notifications'

@Component({
    templateUrl: 'app/members/member-list.component.html',
    providers: [ MembersService, , NotificationsService ]
})
export class MemberListComponent implements OnInit {
    title: string = 'Dais Workers'
    filterBy: string
    errorMessage: string;
    showImages: boolean = false
    imageWidth:number = 100;
    imageHeight: number = 100;
    receivedData: string = 'Default';
    members: Member[]; 

    constructor(private _membersService: MembersService, private _notifier: NotificationsService){
        
    }

    toggleImages(): void {
        this.showImages = !this.showImages;
    }

    clickedNestedComponent(data: string): void {
        this.receivedData = data;
    }

    clickedVote(data: Member){
        if (data)
        {
            this.members.find(m => m.memberId == data.memberId).starRating = data.starRating;
        }
        else
        {
            this._notifier.alert("Опаа", "Нагла работа значи!");
        }
    }

    ngOnInit() {
        this._membersService.getMembers()
            .subscribe(productsReceived => { this.members = productsReceived; console.log(this.members); console.log(productsReceived); },
                       error => this.errorMessage = <any>error);
    }
}