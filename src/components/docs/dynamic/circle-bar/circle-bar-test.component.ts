import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { CircleBarComponent } from 'junte-ui';
import { BarIndicatorComponent } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-circle-bar-test',
  templateUrl: './circle-bar-test.component.html',
  styleUrls: ['./circle-bar-test.component.scss']
})
export class CircleBarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {indicator: BarIndicatorComponent, bar: CircleBarComponent};

  @ViewChild('code') code: TabComponent;

  positionControl = this.fb.control(null);
  value1Control = this.fb.control(10);
  value2Control = this.fb.control(50);
  value3Control = this.fb.control(90);
  color1Control = this.fb.control('#3949AB');
  color2Control = this.fb.control('#FF6262');
  color3Control = this.fb.control('#00CCB1');

  builder = this.fb.group({
    position: this.positionControl,
    value1: this.value1Control,
    value2: this.value2Control,
    value3: this.value3Control,
    color1: this.color1Control,
    color2: this.color2Control,
    color3: this.color3Control,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
