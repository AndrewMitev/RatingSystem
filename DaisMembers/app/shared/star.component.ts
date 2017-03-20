import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core'


@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent{
    @Input() rating: number;
    starWidth: number = this.rating ? this.rating * 10 : 100;
    @Output() emitter: EventEmitter<string> = new EventEmitter();

    onClick(): void {
        this.emitter.emit(`this star has ${this.starWidth} width`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}