import { Component } from '@angular/core';
import { UI } from '../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {
  ui = UI;
}
