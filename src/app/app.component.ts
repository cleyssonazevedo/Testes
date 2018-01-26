import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor (private meta: Meta) {
    this.meta.addTag({
      name: 'description',
      content: 'testes de server side com Angular e injeção de meta Tags'
    });
  }
}
