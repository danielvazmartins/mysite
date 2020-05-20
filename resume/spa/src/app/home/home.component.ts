import { Component } from "@angular/core";

import { LoginService } from '../shared/components/login/login.service';
import { RegisterService } from '../shared/components/register/register.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(
        private loginService: LoginService,
        private registerService: RegisterService
    ) {}

    login() {
        this.loginService.showLogin()
    }

    register() {
        this.registerService.showWindow()
    }
}