import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResumesComponent } from './resumes.component';
import { BoxContentModule } from 'src/app/shared/components/box-content/box-content.module';

@NgModule({
    declarations: [
        ResumesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BoxContentModule
    ]
})
export class ResumesModule {}