import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { ResumeFormComponent } from './resume-form.component';
import { BoxContentModule } from 'src/app/shared/components/box-content/box-content.module';
import { SelectModule } from 'src/app/shared/components/form/select/select.module';
import { FormModule } from 'src/app/shared/components/form/form.module';

@NgModule({
    declarations: [
        ResumeFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BoxContentModule,
        SelectModule,
        FormModule,
        NgxMaskModule.forRoot(),
        FormsModule
    ],
    exports: [
        ResumeFormComponent
    ]
})
export class ResumeFormModule {}