import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { MainWorkExperienceComponent } from './work-experience/main-work-experience/main-work-experience.component';
import { MainEducationComponent } from './education/main-education/main-education.component';
import { FooterWorkExperienceComponent } from './work-experience/footer-work-experience/footer-work-experience.component';
import { FooterEducationComponent } from './education/footer-education/footer-education.component';
import { FooterHomeComponent } from './home/footer-home/footer-home.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { MainResumeComponent } from './resume/main-resume/main-resume.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { MainAccomplishmentsComponent } from './accomplishments/main-accomplishments/main-accomplishments.component';
import { FooterAccomplishmentsComponent } from './accomplishments/footer-accomplishments/footer-accomplishments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DropDownComponent,
    MainHomeComponent,
    WorkExperienceComponent,
    EducationComponent,
    MainWorkExperienceComponent,
    MainEducationComponent,
    FooterWorkExperienceComponent,
    FooterEducationComponent,
    FooterHomeComponent,
    ResumeComponent,
    HeaderHomeComponent,
    MainResumeComponent,
    AccomplishmentsComponent,
    MainAccomplishmentsComponent,
    FooterAccomplishmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
