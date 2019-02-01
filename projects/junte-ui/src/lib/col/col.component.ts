import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FlexAlignSelf} from '../enum/ui';

@Component({
  selector: 'ju-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class ColComponent implements OnInit {

  @HostBinding('attr.span')
  @Input() span = null;

  @HostBinding('attr.alignSelf')
  @Input()
  alignSelf: FlexAlignSelf = null;

  @HostBinding('attr.order')
  @Input() order = null;

  constructor() {
  }

  ngOnInit() {
  }

}
