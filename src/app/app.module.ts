import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { MainWorkExperienceComponent } from './work-experience/main-work-experience/main-work-experience.component';
import { MainEducationComponent } from './education/main-education/main-education.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { MainResumeComponent } from './resume/main-resume/main-resume.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { MainAccomplishmentsComponent } from './accomplishments/main-accomplishments/main-accomplishments.component';
import { FooterComponent } from './footer/footer.component';

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
    ResumeComponent,
    HeaderHomeComponent,
    MainResumeComponent,
    AccomplishmentsComponent,
    MainAccomplishmentsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
