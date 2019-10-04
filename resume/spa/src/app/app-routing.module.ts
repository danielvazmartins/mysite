import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { ResumeComponent } from "./resume/resume.component";
import { Resume2Component } from "./resume2/resume2.component";
import { HomeComponent } from "./home/home.component";

const routes: Route[] = [
    { path: '', component: ResumeComponent },
    { path: 'rozana', component: Resume2Component },
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