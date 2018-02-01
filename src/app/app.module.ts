import { NgModule, PLATFORM_ID, APP_ID, Inject, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule, ListModule, FrameModule, NotFoundModule } from './pages/_pages';
import { GuardService, ObservableService } from './providers/_providers';
import * as DIRECTIVES from './directives/directives';

@NgModule({
  declarations: [
    AppComponent,

    DIRECTIVES.BootstrapInputDirective
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'server-side'
    }),
    CommonModule,
    AppRoutingModule,
    FormsModule,

    HomeModule,
    ListModule,
    FrameModule,
    NotFoundModule
  ],
  providers: [ GuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string, private injector: Injector) {
    // Dependency Injector
    this.injector.get(ObservableService);

    const platform = isPlatformBrowser(this.platformId) ? 'on the server' : 'on the browser';
    console.warn(`Running ${platform} with AppId=${this.appId}`);
  }
}
