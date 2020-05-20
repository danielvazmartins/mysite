import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Se estiver logado então intercepta as conexões para adicionar o token no cabeçalho
        if ( this.authService.isLogged() ) {
            const token = this.authService.getToken()
            
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }
        return next.handle(req)
    }
    
}