import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class="navbar navbar-inverse bg-inverse">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li>
                    <a [routerLink]="['/welcome']">Home</a>
                </li>
                <li><a [routerLink]="['/members']">Members</a></li>
            </ul>
        </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </div>
    ` 
})
export class AppComponent { }
