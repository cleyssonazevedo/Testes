import { Component, Inject, OnInit } from '@angular/core';
import { Meta, DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  static run = false;
  constructor(private meta: Meta, @Inject(DOCUMENT) private document: Document) {
    this.meta.addTag({
      name: 'description',
      content: 'testes de server side com Angular e injeção de meta Tags'
    });

    this.document.documentElement.lang = 'en-US';
  }

  ngOnInit() {
    if (!AppComponent.run) {
      const script = this.document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', 'assets/novo.js');

      this.document.head.appendChild(script);
      AppComponent.run = true;
    }
  }
}
