import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { FooterModule } from '../shared/components/footer/footer.module';
import { LoginModule } from '../shared/components/login/login.module';
import { RegisterModule } from '../shared/components/register/register.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FooterModule,
        LoginModule,
        RegisterModule
    ]
})
export class HomeModule {}