import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SliderComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-slider-test',
  templateUrl: './slider-test.component.html',
  styleUrls: ['./slider-test.component.scss']
})
export class SliderTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {slider: SliderComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/slider';

  @ViewChild('code')
  code: TabComponent;

  minControl = this.fb.control(0);
  maxControl = this.fb.control(100);
  stepControl = this.fb.control(1);
  builder = this.fb.group({
    min: this.minControl,
    max: this.maxControl,
    step: this.stepControl
  });

  sliderControl = this.fb.control(50);

  form = this.fb.group({
    slider: this.sliderControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
