import { Injectable } from '@angular/core';
import { People } from '../models/models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ObservableService {
    private service = new BehaviorSubject<People>(null);

    getPeople() {
        return this.service.asObservable();
    }

    setPeople(people: People) {
        this.service.next(people);
        return this.service.asObservable();
    }
}
