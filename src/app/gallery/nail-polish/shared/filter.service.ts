import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Globals} from './globals';

@Injectable()
export class FilterService {

    constructor(private globals: Globals) {
    }

    private subject = new Subject<any>();

    changeVariable(variable: string) {
        this.subject.next(this.globals.variable = variable);
        console.log(this.globals.variable);
    }

    getVariable(): Observable<any> {
        return this.subject.asObservable();
    }

}
