import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    // We use the OnChanges lifecycle hook to perform any action after Angular sets data bound input properties
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}
