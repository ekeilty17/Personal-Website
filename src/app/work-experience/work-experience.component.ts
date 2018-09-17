import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  footerQuote:string[] = ["If it is broken, fix it. If you don't like it, change it. And if you want something, take it.", "Don't complain about it. Do something about it."];
  footerAuthor:string = "Casey Neistat";

  constructor() { }

  ngOnInit() {
  }

}
