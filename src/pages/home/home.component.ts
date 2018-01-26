import { Component, Inject } from '@angular/core';
import { DOCUMENT, Meta, Title } from '@angular/platform-browser';
import { People } from '../../models/models';
import { ObservableService } from '../../providers/observable.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
    public people: People;
    constructor (@Inject(DOCUMENT) private document: Document, private meta: Meta, private title: Title, private service: ObservableService, private router: Router) {
        this.people = new People();
    }

    save() {
        this.service.setPeople(this.people).subscribe(() => {
            this.router.navigate(['./list']);
        }).unsubscribe();
    }
}
