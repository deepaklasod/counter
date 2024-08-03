import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }
}
