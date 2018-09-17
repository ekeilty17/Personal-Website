import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  footerQuote:string[] = ["If you want to always be right,", "you need to always be prepared to change your mind."];
  footerAuthor:string = "CGP Grey";
  
  constructor() { }

  ngOnInit() {
  }

}
