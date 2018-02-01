import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ObservableService } from './observable.service';

@Injectable()
export class GuardService implements CanActivate {
    private active: boolean;

    constructor (private service: ObservableService, private router: Router) {
        this.service.getPeople().subscribe((people) => {
            this.active = people !== undefined && people !== null;
        });
    }

    canActivate(): boolean {
        if (!this.active) {
            this.router.navigate(['/']);
            return false;
        } else {
            return false;
        }
    }
}
