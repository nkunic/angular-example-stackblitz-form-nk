import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClick(event: any): void {
    if (!this.disabled) {
      this.clickEvent.emit(event);
    }
  }
}
