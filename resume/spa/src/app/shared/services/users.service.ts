import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    getData() {
        return this.http.get('/api/users')
        .pipe(
            map((response: any) => {
                return (response.status === 'success')? response['data']: []
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) this.authService.logout()
                return of()
            })
        )
    }

    create(fullName: string, email: string, password: string): Observable<any> {
        const params = new HttpParams()
        .set('fullName', fullName)
        .set('email', email)
        .set('password', password)

        return this.http.post('/api/users', params)
    }

    update(fullName: string, email: string): Observable<any> {
        const params = new HttpParams()
        .set('fullName', fullName)
        .set('email', email)

        return this.http.put('/api/users', params)
    }
}