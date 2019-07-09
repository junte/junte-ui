import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-progress-bar',
  templateUrl: './progress-bar.encapsulated.html',
})
export class ProgressBarComponent implements OnInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-progress-bar-host';

  @ContentChild('legend')
  legend: TemplateRef<any>;

  @Input() value: number;

  constructor() {
  }

  ngOnInit() {
  }

}
