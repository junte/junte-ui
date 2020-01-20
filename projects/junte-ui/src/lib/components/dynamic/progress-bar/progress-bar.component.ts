import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-progress-bar',
  templateUrl: './progress-bar.encapsulated.html',
})
export class ProgressBarComponent implements OnInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-progress-bar-host';

  @ContentChild('legend', {static: false})
  legend: TemplateRef<any>;

  @Input() value: number;

  constructor() {
  }

  ngOnInit() {
  }

}
