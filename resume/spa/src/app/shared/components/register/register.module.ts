import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { PopupModule } from '../popup/popup.module';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PopupModule
    ],
    exports: [
        RegisterComponent
    ]
})
export class RegisterModule {}