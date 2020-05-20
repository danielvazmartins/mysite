import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    formProfile: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private usersService: UsersService
    ) {}

    ngOnInit() {
        this.initForm()
        this.loadData()
    }

    initForm() {
        this.formProfile = this.formBuilder.group({
            fullName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['********', Validators.required]
        })
    }

    loadData() {
        this.usersService.getData()
        .subscribe((response: any) => {
            const {fullName, email} = response
            this.formProfile.setValue({fullName, email, password: '********'})
        })
    }

    btSave() {
        if (this.formProfile.valid) {
            const { fullName, email, password } = this.formProfile.value

            this.usersService.update(fullName, email)
            .subscribe(response => {
                if (response.status === 'success') {
                    this.alertService.msgSuccess('Dados salvos com sucesso!')
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