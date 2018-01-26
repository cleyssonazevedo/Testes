import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../pages/home/home.component';
import { ObservableService } from '../providers/observable.service';
import { ListarComponent } from '../pages/listar/listar.component';
import { FrameComponent } from '../pages/frame/frame.component';
import { ErrorComponent } from '../pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    FrameComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'server-side'
    }),
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ObservableService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(this.platformId) ? 'on the server' : 'on the browser';
    console.log(`Running in ${platform} with AppId=${this.appId}`);
  }
}
