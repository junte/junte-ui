import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { AccordionSectionComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-accordion-test',
  templateUrl: './accordion-test.component.html',
  styleUrls: ['./accordion-test.component.scss']
})
export class AccordionTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {section: AccordionSectionComponent};

}
