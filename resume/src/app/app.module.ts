import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataGroupComponent } from './data-group/data-group.component';
import { CourseGroupComponent } from './course-group/course-group.component';
import { ExperienceGroupComponent } from './experience-group/experience-group.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGroupComponent,
    CourseGroupComponent,
    ExperienceGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
