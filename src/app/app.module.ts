import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from '../pages/home/home.module';
import { NotFoundModule } from '../pages/error/notFound.module';
import { ListModule } from '../pages/listar/list.module';
import { FrameModule } from '../pages/frame/frame.module';

import { GuardService } from '../providers/guard.service';

import { ObservableService } from '../providers/observable.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
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
  providers: [ ObservableService, GuardService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(this.platformId) ? 'on the server' : 'on the browser';
    console.log(`Running in ${platform} with AppId=${this.appId}`);
  }
}
