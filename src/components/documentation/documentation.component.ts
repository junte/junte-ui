import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../enums/local-ui';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {

  ui = UI;
  localUi = LocalUI;

}
