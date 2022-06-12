// prettier-ignore
import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() incrementNumber = new EventEmitter<{ incrementedNumber: number }>();
  counter = 0;
  constructor() {}
  increaseNumber() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
    this.incrementNumber.emit({ incrementedNumber: this.counter });
  }

  ngOnInit(): void {}
}
