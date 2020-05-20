import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { ResumeComponent } from "./resume/resume.component";
import { HomeComponent } from "./home/home.component";

const routes: Route[] = [
    { path: '', component: ResumeComponent },
    { path: 'panel', loadChildren: './panel/panel.module#PanelModule' },
    { path: 'home', component: HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}