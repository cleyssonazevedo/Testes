import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ObservableService } from './observable.service';

@Injectable()
export class GuardService implements CanActivate {
    private active: boolean;

    constructor(private service: ObservableService, private router: Router) {  }

    canActivate(): boolean {
        this.service.getPeople().subscribe((people) => this.active = people !== undefined && people !== null);

        if (!this.active) {
            this.router.navigate(['/']);
        } else {
            return true;
        }
    }
}
