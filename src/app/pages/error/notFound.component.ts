import { Component, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    templateUrl: './notFound.component.html',
    styleUrls: ['./notFound.component.scss']
})
export class NotFoundComponent  implements OnDestroy {
    private oldTitle: string;
    constructor (private title: Title, private meta: Meta, private router: Router) {
        this.oldTitle = this.title.getTitle();
        this.title.setTitle('página não encontrada!');

        this.meta.addTag({
            name: 'robots',
            content: 'noindex'
        });
    }

    home() {
        this.router.navigate(['/']);
    }

    ngOnDestroy() {
        this.title.setTitle(this.oldTitle);
        this.meta.removeTag('name="robots"');
    }
}
