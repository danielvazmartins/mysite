import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    login(email: string, password: string) {
        const params = new HttpParams()
        .set('username', email)
        .set('password', password)

        return this.http.post('/api/auth/login', params, {observe: 'response'})
        .pipe(
            map((response: HttpResponse<any>) => {
                const token = response.headers.get('x-access-token')
                localStorage.setItem('access-token', token)
            })
        )
    }

    logout() {
        localStorage.removeItem('access-token')
        this.router.navigateByUrl('/home')
    }

    isLogged(): boolean {
        return !!this.getToken()
    }

    getToken():string {
        return localStorage.getItem('access-token')
    }
}