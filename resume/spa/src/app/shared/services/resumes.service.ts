import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Resume } from '../interfaces/resume.interface';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ResumesService {
    resourceUrl = '/api/resumes'

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    // Retorna a lista de curriculos do usuario logado no Painel
    getAll(): Observable<any> {
        return this.http.get(this.resourceUrl)
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

    getOne(resumeId: string): Observable<any> {
        return this.http.get(`${this.resourceUrl}/${resumeId}`)
        .pipe(
            map((response: any) => {
                return (response.status === 'success')? response['data']: []
            })
        )
    }

    getByHost(domain: string): Observable<any> {
        return this.http.get(`${this.resourceUrl}/public`, { params: { domain } })
        .pipe(
            map((response: any) => {
                return (response.status === 'success')? response['data']: []
            })
        )
    }

    // Cadastra um novo currículo
    create(resume: Resume): Observable<any> {
        return this.http.post(this.resourceUrl, resume)
    }

    // Atualiza um currículo
    update(resumeId: string, resume: Resume): Observable<any> {
        return this.http.put(`${this.resourceUrl}/${resumeId}`, resume)
    }

    // Remove um currículo
    delete(resumeId: string): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${resumeId}`)
    }
}