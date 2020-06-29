import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { AccordionSectionComponent, TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-accordion-test',
  templateUrl: './accordion-test.component.html',
  styleUrls: ['./accordion-test.component.scss']
})
export class AccordionTestComponent implements OnInit {


  ui = UI;
  localUi = LocalUI;
  types = {section: AccordionSectionComponent};

  @ViewChild('code') code: TabComponent;

  iconControl = this.fb.control(true);
  stateControl = this.fb.control(null);

  builder = this.fb.group({
    icon: this.iconControl,
    state: this.stateControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
