import { Component, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT, Meta, Title } from '@angular/platform-browser';
import { People } from '../../models/models';
import { ObservableService } from '../../providers/observable.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnDestroy {
    public subscription: Subscription;
    public people: People;

    constructor (
        @Inject(DOCUMENT) private document: Document,
        private meta: Meta,
        private title: Title,
        private service: ObservableService,
        private router: Router ) {
            this.people = new People();
    }

    save() {
        console.log(this.people);
        this.subscription = this.service.setPeople(Object.assign({}, this.people)).subscribe(() => {
            this.router.navigate(['./list']);
        });
    }

    ngOnDestroy() {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    }
}
