import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.custom.style.css']

  // template:`
  // <h2>Hello World</h2>
  // <p>This is my first component!</p>
  // `
})
export class AppComponent {
  title = 'HelloWorldApp';
  i = 5;

  clickButton(){
    this.i = this.i+1;
  }

}
