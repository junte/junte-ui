import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {FormLayout, UI} from '../../../enum/ui';

@Component({
  selector: 'jnt-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit, AfterViewInit {
  // _layout = UI.form.layout.vertical;

  @HostBinding('attr.layout')
  @Input()
  layout: FormLayout;

  constructor(private host: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.host);
  }

}
