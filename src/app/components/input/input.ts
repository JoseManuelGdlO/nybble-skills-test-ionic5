import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the ComponentsInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nybble-input',
  templateUrl: 'input.html',
  styleUrls: ['input.scss']
})
export class InputComponent {

  @Input() typeInput = 'text';
  @Input() placeholder = 'Escribe texto';
  @Input() border = 'solid 2px #efefef';
  @Input() disabled = false;

  @Input() set nybbleModel(text: string) {
    this.genericText = text;
  }
  @Output() nybbleModelChange = new EventEmitter<string>();

  @Output() onKey = new EventEmitter();

  genericText: string;

  constructor() {
  }

  returnWord(event){

    if(this.genericText.length !== 0) {
      this.border = this.border.replace('#efefef', '#0000009e');
    } else {
      this.border = this.border.replace('#0000009e', '#efefef');
    }
    this.nybbleModelChange.emit(event.target.value);
    this.onKey.emit();
  }

}
