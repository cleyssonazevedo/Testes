import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ObservableService } from '../../providers/observable.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [ HomeComponent ],
    providers: [ ObservableService ]
})
export class HomeModule {  }
