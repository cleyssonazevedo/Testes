import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ObservableService } from '../../providers/observable.service';

@NgModule({
    declarations: [ ListComponent ],
    exports: [ ListComponent ],
    providers: [ ObservableService ]
})
export class ListModule { }
