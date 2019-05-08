import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private http: HttpClient ){ };

  
  title = 'Hello World';

  todos = this.http.get('https://jsonplaceholder.typicode.com/todos/');
}
