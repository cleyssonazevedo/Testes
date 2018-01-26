import { Component, Inject } from '@angular/core';
import { Meta, DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor (private meta: Meta, @Inject(DOCUMENT) private document: Document) {
    this.meta.addTag({
      name: 'description',
      content: 'testes de server side com Angular e injeção de meta Tags'
    });

    this.document.documentElement.lang = 'en-US';
  }
}
