import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ObservableService } from '../../providers/observable.service';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from '../../components/pessoa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ ListComponent, PessoaComponent ],
    imports: [ CommonModule, FormsModule ],
    exports: [ ListComponent ],
    providers: [ ObservableService ]
})
export class ListModule { }
