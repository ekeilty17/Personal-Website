import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eric Keilty';

  routes = [
    { linkName: 'Home', url: 'home'},
    { linkName: 'About', url: 'about'},
    { linkName: 'Work Experience', url: 'work experience'},
    { linkName: 'Education', url: 'education'},
    { linkName: 'Contact', url: 'contact'}
  ]

}
