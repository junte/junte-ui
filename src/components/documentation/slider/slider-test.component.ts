import { Component, OnInit } from '@angular/core';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-slider',
  templateUrl: './slider-test.component.html',
  styleUrls: ['./slider-test.component.scss']
})
export class SliderTestComponent implements OnInit {

  ui = UI;

  constructor() {
  }

  ngOnInit() {
  }

}
