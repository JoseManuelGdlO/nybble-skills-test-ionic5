import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Generated class for the ComponentsButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nybble-button',
  templateUrl: 'button.html',
  styleUrls: ['button.scss']
})
export class ButtonComponent implements OnInit {

  @Input() border = '1px solid green';
  @Input() text = 'Hello World 2';
  @Input() color = 'green';
  @Input() radius = '3px';
  @Input() background = '';

  @Output() onClick = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    if (this.color !== 'green') {
      this.border = this.border.replace('green', this.color);
    }

    if (this.background.length !== 0) {
      this.color = 'white';
      this.border = '';
    }
  }

  click() {
    this.onClick.emit();
  }

}
