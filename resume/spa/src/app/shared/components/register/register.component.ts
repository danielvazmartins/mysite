import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { RegisterService } from './register.service';
import { UsersService } from '../../services/users.service';
import { AlertService } from '../alert/alert.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    showWindow: boolean = false
    formRegister: FormGroup

    constructor(
        private registerService: RegisterService,
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.registerService.listenState()
        .subscribe(state => this.showWindow = state)

        this.initForm()
    }

    initForm() {
        this.formRegister = this.formBuilder.group({
            fullName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        })
    }

    btClose() {
        this.showWindow = false
    }

    btRegister() {
        if (this.formRegister.valid) {
            const { fullName, email, password } = this.formRegister.value

            this.usersService.create(fullName, email, password)
            .subscribe(response => {
                if (response.status === 'success') {
                    this.alertService.msgSuccess('Cadastro efetuado com sucesso!')
                    this.showWindow = false
                }
            }, (error: HttpErrorResponse) => {
                if (error.status === 400) {
                    const errorMessage: string = <string>Object.values(error.error.message[0].constraints)[0]
                    this.alertService.msgError(errorMessage)
                } else if (error.status === 403) {
                    this.alertService.msgError(error.error.message)
                } else {
                    this.alertService.msgError('Ocorreu um erro, tente novamente!')
                }
            })
        } else {
            this.alertService.msgError('Verifique se todos os campos foram preenchidos corretamente!')
        }
    }
}