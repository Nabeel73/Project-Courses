import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  courses  = [
    {id: 1, name: 'course1'},    
    {id: 2, name: 'course2'},   
    {id: 3, name: 'course3'},
    ];
  viewMode = 'map';
  
}
