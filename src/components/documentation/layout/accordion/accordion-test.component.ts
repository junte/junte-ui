import { Component, OnInit } from '@angular/core';
import { UI } from '../../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-accordion-test',
  templateUrl: './accordion-test.component.html',
  styleUrls: ['./accordion-test.component.scss']
})
export class AccordionTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
