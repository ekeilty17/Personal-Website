import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ResumeComponent } from './resume/resume.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';

const routes: Routes = [
  {path: "",  redirectTo: "/home", pathMatch: "full" },
  {path: "home", component: HomeComponent },
  {path: "resume", component: ResumeComponent},
  {path: "work experience", component: WorkExperienceComponent},
  {path: "education", component: EducationComponent},
  {path: "accomplishments", component: AccomplishmentsComponent},
  {path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
