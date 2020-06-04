import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { AccordionSectionComponent, TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-accordion-test',
  templateUrl: './accordion-test.component.html',
  styleUrls: ['./accordion-test.component.scss']
})
export class AccordionTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {section: AccordionSectionComponent};

  @ViewChild('code') code: TabComponent;

  iconControl = this.fb.control(true);

  builder = this.fb.group({
    icon: this.iconControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
