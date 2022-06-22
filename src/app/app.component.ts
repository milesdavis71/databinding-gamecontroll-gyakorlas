import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];
  onFiredNumber(lastNumber: number) {
    lastNumber % 2 === 0
      ? this.evenNumbers.push(lastNumber)
      : this.oddNumbers.push(lastNumber);
  }
}
