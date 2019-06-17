import { AfterViewInit, Component, HostBinding, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'jnt-bar-indicator',
  templateUrl: './encapsulated.html'
})
export class BarIndicatorComponent implements AfterViewInit {

  @HostBinding('attr.host') readonly host = 'jnt-bar-indicator-host';

  @ViewChild('indicator')
  template: TemplateRef<any>;

  @Input() value: number;
  @Input() title: string;
  @Input() color = 'red';
  @Input() width: string;

  ngAfterViewInit() {
    // console.log(this.template);
  }

}
