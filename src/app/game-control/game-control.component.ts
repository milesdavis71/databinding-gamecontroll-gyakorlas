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
  @Output() firedNumber = new EventEmitter<number>();
  interval;
  number = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.firedNumber.emit((this.number += 1));
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
  ngOnInit(): void {}
}
