import { Injectable } from "@angular/core";

import { Subject, Observable } from 'rxjs';

import { Alert } from './alert.interface';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    alertSubject: Subject<Alert> = new Subject()

    listenAlert(): Observable<Alert> {
        return this.alertSubject.asObservable()
    }

    msgError(message: string) {
        this.alertSubject.next({message, type: 'error'})
    }

    msgSuccess(message: string) {
        this.alertSubject.next({message, type: 'success'})
    }
}