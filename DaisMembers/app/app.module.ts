import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component'
import { MemberListComponent } from './members/member-list.component'
import { FilterPipe } from './shared/filter-pipe'
import { StarComponent } from './shared/star.component'
import { HttpModule } from '@angular/http'
import { MemberDetailComponent } from './members/member-detail.component'
import { WelcomeComponent } from './home/welcome.component'
import { VoteHeartComponent } from './members/vote-heart.component'
import { SimpleNotificationsModule } from 'angular2-notifications'
import { CommentComponent } from './comments/comment.component'

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, SimpleNotificationsModule,
   RouterModule.forRoot([
     { path: 'welcome', component: WelcomeComponent },
     { path: 'members', component: MemberListComponent },
     { path: 'members/:id', component: MemberDetailComponent },
     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
     { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
   ]) ],
  declarations: [ 
    AppComponent,
    MemberListComponent,
    StarComponent,
    FilterPipe,
    MemberDetailComponent,
    WelcomeComponent,
    VoteHeartComponent,
    CommentComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
