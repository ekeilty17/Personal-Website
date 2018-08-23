import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

  footerQuote:string[] = ["A great accomplishment shouldn't be the end of the road,", "just the starting point for the next leap forward."];
  footerAuthor:string = "Harvey Mackay";

  constructor() { }

  ngOnInit() {
  }

}
