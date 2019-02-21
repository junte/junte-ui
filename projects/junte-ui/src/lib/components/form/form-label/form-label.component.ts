import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jnt-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss']
})
export class FormLabelComponent implements OnInit {

  @HostBinding('attr.for')
  @Input()
  for: string;

  constructor() {
  }

  ngOnInit() {
  }

}
