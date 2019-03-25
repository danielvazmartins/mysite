import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeModule } from './resume/resume.module';
import { Resume2Module } from './resume2/resume2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResumeModule,
    Resume2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
