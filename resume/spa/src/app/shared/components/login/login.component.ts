import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../alert/alert.service';
import { error } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    showWindow: boolean = false
    formLogin: FormGroup

    constructor(
        private loginService: LoginService,
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private route: Router,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.loginService.listenState()
        .subscribe(state => this.showWindow = state)

        this.initForm()
    }

    initForm() {
        this.formLogin = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    btClose() {
        this.showWindow = false
    }

    btLogin() {
        if (this.formLogin.valid) {
            const { email, password } = this.formLogin.value
            this.authService.login(email, password)
            .subscribe(response => {
                this.showWindow = false
                this.route.navigateByUrl('/panel')
            }, (error: HttpErrorResponse) => {
                if (error.status === 401) return this.alertService.msgError('Usuário ou senha inválidos!')

                this.alertService.msgError('Ocorreu um erro, tente novamente!')
            })
        } else {
            this.alertService.msgError('Verifique se todos os campos foram preenchidos corretamente!')
        }
    }
}