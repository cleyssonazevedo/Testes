import { Component } from '@angular/core';
import { People } from '../models/models';

@Component({
    selector: 'app-pessoa',
    templateUrl: './pessoa.component.html'
})
export class PessoaComponent {
    public nome = 'Cleysson Az';
}
