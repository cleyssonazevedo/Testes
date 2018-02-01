import { Component, Inject } from '@angular/core';
import { DOCUMENT, Meta, Title } from '@angular/platform-browser';
import { People } from '../../models/models';
import { Router } from '@angular/router';
import { ObservableService } from '../../providers/_providers';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
    public people: People;

    constructor (
        @Inject(DOCUMENT) private document: Document,
        private meta: Meta,
        private title: Title,
        private service: ObservableService,
        private router: Router) {
            this.people = new People();
            this.meta.addTags([
                {
                    property: 'og:title',
                    content: 'Home Component'
                },
                {
                    property: 'og:description',
                    content: 'Adição de conteúdo em um form e transmissão de dados via observable para outro component'
                }
            ]);
    }

    save() {
        console.log(this.people);
        this.service.setPeople(Object.assign({}, this.people)).subscribe(() => {
            this.router.navigate(['./list']);
        }).unsubscribe();
    }
}
