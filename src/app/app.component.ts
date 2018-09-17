import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  routes = [
    { linkName: 'Home', url: 'home' },
    { linkName: 'About', url: 'about' },
    { linkName: 'Work Experience', url: 'work experience' },
    { linkName: 'Education', url: 'education' },
    { linkName: 'Accomplishments', url: 'accomplishments' }
  ]

}
