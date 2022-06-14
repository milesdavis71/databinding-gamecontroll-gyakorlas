import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumber: number;
  evenNumber: number;
  oddNumbers = [];
  evenNumbers = [];
  onIncrementedNumber(lastNumber: number) {
    console.log(lastNumber);
  }

  onAddEven() {
    this.evenNumbers.push(this.evenNumber);
  }
}
