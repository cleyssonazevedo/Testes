import { Component } from '@angular/core';
import { ObservableService } from '../../providers/observable.service';
import { People } from '../../models/models';
import { Router } from '@angular/router';

@Component({
    templateUrl: './listar.component.html',
})
export class ListarComponent {
    public people: People;

    constructor(private service: ObservableService, private router: Router) {
        this.service.getPeople().subscribe((people) => {
            if (people !== null) {
                this.people = people;
            } else {
                this.router.navigate(['/']);
            }
        });
    }
}
