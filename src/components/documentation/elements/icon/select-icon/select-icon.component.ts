import { Component, EventEmitter, Output } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-select-icon',
  templateUrl: './select-icon.component.html',
  styleUrls: ['./select-icon.component.scss']
})
export class SelectIconComponent {

  ui = UI;

  @Output()
  selected = new EventEmitter<{ path: string, value: string }>();

}
