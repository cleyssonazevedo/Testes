import { Component, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent  implements OnDestroy {
    private oldTitle: string;
    constructor (private title: Title, private meta: Meta) {
        this.oldTitle = this.title.getTitle();
        this.title.setTitle('página não encontrada!');

        this.meta.addTag({
            name: 'robots',
            content: 'noindex'
        });
    }

    ngOnDestroy() {
        this.title.setTitle(this.oldTitle);
        this.meta.removeTag('name="robots"');
    }
}
