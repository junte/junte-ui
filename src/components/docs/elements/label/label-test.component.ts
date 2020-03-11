import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LabelComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-label-test',
  templateUrl: './label-test.component.html',
  styleUrls: ['./label-test.component.scss']
})
export class LabelTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {label: LabelComponent};

  @ViewChild('code') code: TabComponent;

  sizeControl = this.fb.control(null);
  colorControl = this.fb.control(UI.color.blue100);
  iconControl = this.fb.control(true);

  builder = this.fb.group({
    icon: this.iconControl,
    size: this.sizeControl,
    color: this.colorControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
