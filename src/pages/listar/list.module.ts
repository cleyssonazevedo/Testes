import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ObservableService } from '../../providers/observable.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ ListComponent ],
    imports: [ CommonModule ],
    exports: [ ListComponent ],
    providers: [ ObservableService ]
})
export class ListModule { }
