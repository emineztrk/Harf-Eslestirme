import { Component } from '@angular/core';
import { loremIpsum } from "lorem-ipsum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = loremIpsum();
  enteredText = '';

  getInputValue(value:string){
    // console.log(this.randomText.split(''));
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
