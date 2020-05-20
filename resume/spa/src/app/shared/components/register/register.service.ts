import { Injectable } from "@angular/core";

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    registerSubject: Subject<boolean> = new Subject()

    listenState() {
        return this.registerSubject.asObservable()
    }

    showWindow() {
        this.registerSubject.next(true)
    }
}