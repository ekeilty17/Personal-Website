import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  footerQuote:string[] = ["It is the mark of an educated mind", "to be able to entertain a thought without accepting it."];
  footerAuthor:string = "Aristotle";

  constructor() { }

  ngOnInit() {
  }

}
