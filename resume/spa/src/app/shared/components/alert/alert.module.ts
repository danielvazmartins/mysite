import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { PopupModule } from '../popup/popup.module';

@NgModule({
    declarations: [
        AlertComponent
    ],
    imports: [
        CommonModule,
        PopupModule
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule {}