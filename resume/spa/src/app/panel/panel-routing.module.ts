import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ResumesComponent } from './resumes/resumes.component';
import { PanelComponent } from './panel.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';

const routes: Routes = [
    { path: '', component: PanelComponent, children: [
        { path: '', pathMatch: 'full', redirectTo: 'resumes'},
        { path: 'resumes', component: ResumesComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'resume-form', component: ResumeFormComponent },
        { path: 'resume-form/:id', component: ResumeFormComponent }
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PanelRoutingModule {}