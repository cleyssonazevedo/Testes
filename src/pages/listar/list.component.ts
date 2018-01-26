import { Component } from '@angular/core';
import { ObservableService } from '../../providers/observable.service';
import { People } from '../../models/models';
import { Router } from '@angular/router';

@Component({
    templateUrl: './list.component.html',
})
export class ListComponent {
    public people: People;

    constructor(private service: ObservableService) {
        this.service.getPeople().subscribe((people) => this.people = people).unsubscribe();
    }
}
