import { Injectable } from "@angular/core";

import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    loginSubject: Subject<boolean> = new Subject()

    listenState(): Observable<boolean> {
        return this.loginSubject.asObservable()
    }

    showLogin() {
        this.loginSubject.next(true)
    }
}